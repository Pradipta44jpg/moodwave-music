import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { MOODS } from "@/lib/moods";
import { ArrowRight, Sparkles, Heart, History, Music2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate({ to: "/app" });
  }, [user, loading, navigate]);

  return (
    <div className="mood-bg min-h-screen" data-mood="focused">
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" /> AI-tuned playlists
            </span>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Music that matches
              <br />
              <span className="bg-gradient-to-r from-primary to-[oklch(0.8_0.18_30)] bg-clip-text text-transparent">
                your mood.
              </span>
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              Pick a feeling. Get an instant playlist tuned to the moment. Save what you love.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="gap-2">
                <Link to="/auth">
                  Start now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/app">Try the player</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="glass grid grid-cols-2 gap-3 rounded-3xl p-5">
              {MOODS.map((m) => (
                <div
                  key={m.key}
                  className="flex flex-col items-start gap-1 rounded-2xl border border-border bg-card/40 p-4"
                >
                  <span className="text-3xl">{m.emoji}</span>
                  <span className="font-display font-semibold">{m.label}</span>
                  <span className="text-xs text-muted-foreground">{m.description}</span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-primary/20 blur-3xl" />
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
            Built for the way you feel.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Mood-tuned picks",
                desc: "Six core moods plus custom prompts. Each selection retunes the entire UI.",
              },
              {
                icon: Heart,
                title: "Save your favorites",
                desc: "Bookmark tracks across moods and revisit them anytime.",
              },
              {
                icon: History,
                title: "Listening history",
                desc: "Every generated playlist is stored to your library automatically.",
              },
            ].map((f) => (
              <div key={f.title} className="glass rounded-3xl p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-border py-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Music2 className="h-4 w-4" /> MoodTune
          </div>
          <p>© {new Date().getFullYear()} — Sound for every state of mind.</p>
        </footer>
      </main>
    </div>
  );
}
