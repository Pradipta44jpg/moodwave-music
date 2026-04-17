import type { Track } from "@/lib/moods";
import { cn } from "@/lib/utils";
import { Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  tracks: Track[];
  currentIndex: number;
  onSelect: (i: number) => void;
  isFavorite: (videoId: string) => boolean;
  onToggleFavorite: (t: Track) => void;
};

export function Playlist({ tracks, currentIndex, onSelect, isFavorite, onToggleFavorite }: Props) {
  return (
    <div className="glass rounded-3xl p-2">
      <ul className="divide-y divide-border/50">
        {tracks.map((t, i) => {
          const active = i === currentIndex;
          const fav = isFavorite(t.videoId);
          return (
            <li key={t.videoId + i}>
              <div
                className={cn(
                  "group flex items-center gap-3 rounded-xl p-3 transition-colors",
                  active ? "bg-primary/15" : "hover:bg-accent/40",
                )}
              >
                <button
                  onClick={() => onSelect(i)}
                  className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg"
                >
                  <img src={t.thumbnail} alt={t.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </button>
                <button onClick={() => onSelect(i)} className="min-w-0 flex-1 text-left">
                  <p className={cn("truncate text-sm font-medium", active && "text-primary")}>
                    {t.title}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">{t.artist}</p>
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onToggleFavorite(t)}
                >
                  <Heart className={cn("h-4 w-4", fav && "fill-primary text-primary")} />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
