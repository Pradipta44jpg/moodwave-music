import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { useServerFn } from "@tanstack/react-start";
import { generateMusic } from "@/server/generate-music";
import { Sparkles, Download, Loader2, Play, Pause } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});

const GENRES = [
  "Lo-fi",
  "Cinematic",
  "Pop",
  "Rock",
  "Hip-hop",
  "Electronic",
  "Classical",
  "Jazz",
  "Folk",
  "Ambient",
  "EDM",
  "R&B",
];

const LANGUAGES = [
  "English",
  "Hindi",
  "Bengali",
  "Spanish",
  "French",
  "Japanese",
  "Korean",
  "Arabic",
  "Tamil",
  "Punjabi",
];

const MOODS = [
  "Happy",
  "Sad",
  "Energetic",
  "Calm",
  "Focused",
  "Romantic",
  "Nostalgic",
  "Epic",
  "Dreamy",
  "Dark",
];

function StudioPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const generate = useServerFn(generateMusic);

  const [mood, setMood] = useState("Happy");
  const [genre, setGenre] = useState("Pop");
  const [language, setLanguage] = useState("English");
  const [tempo, setTempo] = useState(110);
  const [duration, setDuration] = useState(30);
  const [vocals, setVocals] = useState(true);
  const [customMood, setCustomMood] = useState("");

  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/auth" });
  }, [user, authLoading, navigate]);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const finalMood = customMood.trim() || mood;
      // Random seed → non-repetitive output
      const variation = `seed-${Math.random().toString(36).slice(2, 8)}-${Date.now() % 9973}`;
      const res = await generate({
        data: {
          mood: finalMood,
          genre,
          language,
          tempo,
          duration,
          vocals,
          variation,
        },
      });
      const url = `data:${res.mimeType};base64,${res.audio}`;
      setAudioUrl(url);
      setPlaying(false);
      toast.success("Track ready");
    } catch (e: any) {
      toast.error(e.message || "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
  };

  const handleDownload = () => {
    if (!audioUrl) return;
    const a = document.createElement("a");
    a.href = audioUrl;
    a.download = `moodtune-${Date.now()}.mp3`;
    a.click();
  };

  return (
    <div className="mood-bg min-h-screen">
      <Header />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <section>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            AI Music Studio
          </h1>
          <p className="mt-1 text-muted-foreground">
            Compose original tracks. Pick a mood, genre, language, and tempo — we'll
            generate a unique song every time.
          </p>
        </section>

        <section className="glass space-y-6 rounded-3xl p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Mood</Label>
              <Select value={mood} onValueChange={setMood}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MOODS.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="Or describe your own mood..."
                value={customMood}
                onChange={(e) => setCustomMood(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="space-y-2">
              <Label>Genre</Label>
              <Select value={genre} onValueChange={setGenre}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {GENRES.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Language (for vocals)</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end justify-between gap-4 rounded-xl border border-border bg-card/40 px-4 py-3">
              <div>
                <Label className="text-sm">Vocals</Label>
                <p className="text-xs text-muted-foreground">
                  {vocals ? `Sing in ${language}` : "Instrumental only"}
                </p>
              </div>
              <Switch checked={vocals} onCheckedChange={setVocals} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Tempo</Label>
                <span className="text-sm text-muted-foreground">{tempo} BPM</span>
              </div>
              <Slider
                value={[tempo]}
                min={40}
                max={200}
                step={1}
                onValueChange={(v) => setTempo(v[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Duration</Label>
                <span className="text-sm text-muted-foreground">{duration}s</span>
              </div>
              <Slider
                value={[duration]}
                min={10}
                max={120}
                step={5}
                onValueChange={(v) => setDuration(v[0])}
              />
            </div>
          </div>

          <Button
            size="lg"
            className="w-full gap-2"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Composing... (this may take 20–60s)
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Generate Music
              </>
            )}
          </Button>
        </section>

        {audioUrl && (
          <section className="glass space-y-4 rounded-3xl p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Your generated track
                </p>
                <h3 className="mt-1 font-display text-xl font-bold">
                  {customMood.trim() || mood} · {genre} · {language}
                </h3>
              </div>
              <div className="flex gap-2">
                <Button size="icon" onClick={togglePlay} className="h-12 w-12 rounded-full">
                  {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button variant="outline" onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  MP3
                </Button>
              </div>
            </div>
            <audio
              ref={audioRef}
              src={audioUrl}
              controls
              className="w-full"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
          </section>
        )}
      </main>
    </div>
  );
}
