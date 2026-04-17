import { useState } from "react";
import { MOODS, type MoodKey } from "@/lib/moods";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { VibeCamera } from "@/components/VibeCamera";

type Props = {
  selected: string | null;
  onSelect: (mood: string) => void;
  onGenerate: () => void;
  loading?: boolean;
};

export function MoodSelector({ selected, onSelect, onGenerate, loading }: Props) {
  const [custom, setCustom] = useState("");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {MOODS.map((m) => {
          const active = selected === m.key;
          return (
            <button
              key={m.key}
              onClick={() => onSelect(m.key)}
              className={cn(
                "group relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-primary/60",
                active
                  ? "border-primary bg-primary/15 shadow-[0_0_30px_-5px_var(--primary)]"
                  : "border-border bg-card/40",
              )}
            >
              <span className="text-3xl transition-transform group-hover:scale-110">{m.emoji}</span>
              <span className="font-display text-sm font-semibold">{m.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          placeholder="Or describe your mood (e.g. nostalgic, anxious)..."
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && custom.trim()) {
              onSelect(custom.trim());
            }
          }}
          className="h-12 bg-card/60 text-base"
        />
        <Button
          size="lg"
          className="h-12 gap-2 px-6"
          disabled={!selected && !custom.trim()}
          onClick={() => {
            if (custom.trim() && custom.trim() !== selected) onSelect(custom.trim());
            onGenerate();
          }}
        >
          <Sparkles className="h-4 w-4" />
          {loading ? "Generating..." : "Generate Music"}
        </Button>
      </div>

      {/* Camera-based mood detection */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="flex justify-center">
        <VibeCamera
          onMoodDetected={(mood) => {
            onSelect(mood);
            onGenerate();
          }}
        />
      </div>
    </div>
  );
}
