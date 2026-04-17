import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { MoodSelector } from "@/components/MoodSelector";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Playlist } from "@/components/Playlist";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { getPlaylist, inferMoodKey, MOODS, type Track } from "@/lib/moods";
import { RefreshCw } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/app")({
  component: AppPage,
});

function AppPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [mood, setMood] = useState<string | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [index, setIndex] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const moodKey = mood ? inferMoodKey(mood) : "focused";
  const moodLabel = useMemo(() => {
    if (!mood) return null;
    const known = MOODS.find((m) => m.key === mood);
    return known ? known.label : mood;
  }, [mood]);

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/auth" });
  }, [user, authLoading, navigate]);

  // Load favorites
  useEffect(() => {
    if (!user) return;
    supabase
      .from("favorites")
      .select("video_id")
      .then(({ data }) => {
        if (data) setFavorites(new Set(data.map((d: any) => d.video_id)));
      });
  }, [user]);

  const handleGenerate = useCallback(async () => {
    if (!mood) return;
    setGenerating(true);
    try {
      const list = getPlaylist(mood);
      // Simulate API latency for natural feel
      await new Promise((r) => setTimeout(r, 500));
      setTracks(list);
      setIndex(0);
      if (user) {
        await supabase.from("history").insert({
          user_id: user.id,
          mood,
          playlist: list as any,
        });
      }
      toast.success(`Tuned for ${moodLabel}`);
    } catch (e: any) {
      toast.error(e.message || "Could not generate playlist");
    } finally {
      setGenerating(false);
    }
  }, [mood, moodLabel, user]);

  const toggleFavorite = useCallback(
    async (track: Track) => {
      if (!user) return;
      const isFav = favorites.has(track.videoId);
      if (isFav) {
        const next = new Set(favorites);
        next.delete(track.videoId);
        setFavorites(next);
        await supabase.from("favorites").delete().eq("video_id", track.videoId).eq("user_id", user.id);
        toast("Removed from favorites");
      } else {
        const next = new Set(favorites);
        next.add(track.videoId);
        setFavorites(next);
        await supabase.from("favorites").insert({
          user_id: user.id,
          video_id: track.videoId,
          title: track.title,
          artist: track.artist,
          thumbnail: track.thumbnail,
        });
        toast.success("Saved to favorites");
      }
    },
    [favorites, user],
  );

  return (
    <div className="mood-bg min-h-screen" data-mood={moodKey}>
      <Header />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            How are you feeling?
          </h1>
          <p className="mt-1 text-muted-foreground">
            Pick a mood — or describe one — and we'll tune a playlist for it.
          </p>
          <div className="mt-6">
            <MoodSelector
              selected={mood}
              onSelect={setMood}
              onGenerate={handleGenerate}
              loading={generating}
            />
          </div>
        </section>

        {tracks.length > 0 && (
          <>
            <section>
              <MusicPlayer
                tracks={tracks}
                index={index}
                onIndexChange={setIndex}
                isFavorite={(id) => favorites.has(id)}
                onToggleFavorite={toggleFavorite}
              />
            </section>

            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">
                  Playlist · {moodLabel}
                </h2>
                <Button variant="outline" size="sm" onClick={handleGenerate} disabled={generating}>
                  <RefreshCw className="h-4 w-4" />
                  Regenerate
                </Button>
              </div>
              <Playlist
                tracks={tracks}
                currentIndex={index}
                onSelect={setIndex}
                isFavorite={(id) => favorites.has(id)}
                onToggleFavorite={toggleFavorite}
              />
            </section>
          </>
        )}

        {tracks.length === 0 && (
          <div className="glass rounded-3xl p-12 text-center">
            <div className="mx-auto mb-4 text-4xl">🎧</div>
            <h3 className="font-display text-xl font-semibold">Your playlist appears here</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose a mood above and hit Generate to begin.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
