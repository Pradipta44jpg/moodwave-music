import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, Music2, Play } from "lucide-react";
import { toast } from "sonner";
import type { Track } from "@/lib/moods";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
});

type HistoryRow = {
  id: string;
  mood: string;
  playlist: Track[];
  created_at: string;
};

type FavRow = {
  id: string;
  video_id: string;
  title: string;
  artist: string | null;
  thumbnail: string | null;
};

function HistoryPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryRow[]>([]);
  const [favorites, setFavorites] = useState<FavRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/auth" });
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    Promise.all([
      supabase.from("history").select("*").order("created_at", { ascending: false }).limit(20),
      supabase.from("favorites").select("*").order("created_at", { ascending: false }),
    ]).then(([h, f]) => {
      if (h.data) setHistory(h.data as any);
      if (f.data) setFavorites(f.data as any);
      setLoading(false);
    });
  }, [user]);

  const removeHistory = async (id: string) => {
    await supabase.from("history").delete().eq("id", id);
    setHistory((h) => h.filter((x) => x.id !== id));
    toast("Removed");
  };

  const removeFavorite = async (videoId: string) => {
    if (!user) return;
    await supabase.from("favorites").delete().eq("video_id", videoId).eq("user_id", user.id);
    setFavorites((f) => f.filter((x) => x.video_id !== videoId));
    toast("Removed from favorites");
  };

  return (
    <div className="mood-bg min-h-screen" data-mood="relaxed">
      <Header />
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
        <header>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Your library</h1>
          <p className="mt-1 text-muted-foreground">Past moods and saved tracks.</p>
        </header>

        {/* Favorites */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
            <Heart className="h-5 w-5 text-primary" /> Favorites
          </h2>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : favorites.length === 0 ? (
            <div className="glass rounded-3xl p-8 text-center text-sm text-muted-foreground">
              No favorites yet. Tap the heart on any track.
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((f) => (
                <div key={f.id} className="glass flex items-center gap-3 rounded-2xl p-3">
                  <img
                    src={f.thumbnail ?? ""}
                    alt={f.title}
                    className="h-14 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{f.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{f.artist}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFavorite(f.video_id)}
                    aria-label="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* History */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
            <Music2 className="h-5 w-5 text-primary" /> Recent moods
          </h2>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : history.length === 0 ? (
            <div className="glass rounded-3xl p-8 text-center text-sm text-muted-foreground">
              No history yet. Generate a playlist to start.
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((h) => (
                <div key={h.id} className="glass rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-display text-lg font-semibold capitalize">{h.mood}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(h.created_at).toLocaleString()} · {h.playlist?.length ?? 0} tracks
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => navigate({ to: "/app" })}
                      >
                        <Play className="h-4 w-4" />
                        Play
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeHistory(h.id)}
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                    {h.playlist?.slice(0, 6).map((t, i) => (
                      <img
                        key={i}
                        src={t.thumbnail}
                        alt={t.title}
                        title={`${t.title} — ${t.artist}`}
                        className="h-14 w-14 shrink-0 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
