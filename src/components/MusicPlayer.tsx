import { useEffect, useRef, useState } from "react";
import type { Track } from "@/lib/moods";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

let ytApiPromise: Promise<void> | null = null;
function loadYouTubeAPI() {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) return resolve();
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => resolve();
  });
  return ytApiPromise;
}

type Props = {
  tracks: Track[];
  index: number;
  onIndexChange: (i: number) => void;
  isFavorite: (videoId: string) => boolean;
  onToggleFavorite: (track: Track) => void;
};

export function MusicPlayer({ tracks, index, onIndexChange, isFavorite, onToggleFavorite }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const current = tracks[index];

  // Init player once
  useEffect(() => {
    let cancelled = false;
    loadYouTubeAPI().then(() => {
      if (cancelled || !containerRef.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        height: "100%",
        width: "100%",
        videoId: current?.videoId,
        playerVars: { autoplay: 0, controls: 0, modestbranding: 1, rel: 0, playsinline: 1 },
        events: {
          onReady: () => {
            setReady(true);
            playerRef.current.setVolume(volume);
          },
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true);
            else if (e.data === window.YT.PlayerState.PAUSED) setPlaying(false);
            else if (e.data === window.YT.PlayerState.ENDED) {
              if (index < tracks.length - 1) onIndexChange(index + 1);
              else setPlaying(false);
            }
          },
        },
      });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load new track when index changes
  useEffect(() => {
    if (ready && playerRef.current && current) {
      playerRef.current.loadVideoById(current.videoId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.videoId, ready]);

  // Progress polling
  useEffect(() => {
    const id = setInterval(() => {
      if (ready && playerRef.current?.getCurrentTime) {
        setProgress(playerRef.current.getCurrentTime() || 0);
        setDuration(playerRef.current.getDuration() || 0);
      }
    }, 500);
    return () => clearInterval(id);
  }, [ready]);

  const togglePlay = () => {
    if (!ready) return;
    if (playing) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const seek = (v: number) => {
    if (ready) playerRef.current.seekTo(v, true);
    setProgress(v);
  };

  const changeVolume = (v: number) => {
    setVolume(v);
    if (ready) playerRef.current.setVolume(v);
    if (v > 0 && muted) {
      setMuted(false);
      playerRef.current?.unMute();
    }
  };

  const toggleMute = () => {
    if (!ready) return;
    if (muted) {
      playerRef.current.unMute();
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  };

  const fmt = (s: number) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  if (!current) return null;
  const fav = isFavorite(current.videoId);

  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-video bg-black md:aspect-auto md:min-h-[320px]">
          <div ref={containerRef} className="h-full w-full" />
        </div>

        <div className="flex flex-col gap-5 p-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Now playing</p>
            <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{current.title}</h3>
            <p className="text-muted-foreground">{current.artist}</p>
          </div>

          <div className="space-y-1">
            <Slider
              value={[progress]}
              max={duration || 100}
              step={1}
              onValueChange={(v) => seek(v[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{fmt(progress)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onToggleFavorite(current)}
              className={cn(fav && "text-primary")}
              aria-label="Favorite"
            >
              <Heart className={cn("h-5 w-5", fav && "fill-current")} />
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onIndexChange(Math.max(0, index - 1))}
                disabled={index === 0}
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button size="icon" className="h-12 w-12 rounded-full" onClick={togglePlay}>
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onIndexChange(Math.min(tracks.length - 1, index + 1))}
                disabled={index === tracks.length - 1}
              >
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex w-28 items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleMute}>
                {muted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={[muted ? 0 : volume]}
                max={100}
                step={1}
                onValueChange={(v) => changeVolume(v[0])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
