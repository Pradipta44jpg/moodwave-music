import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { Camera, X, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Map face-api emotions → app mood keys
const EMOTION_TO_MOOD: Record<string, string> = {
  happy: "happy",
  sad: "sad",
  angry: "stressed",
  fearful: "stressed",
  disgusted: "stressed",
  surprised: "energetic",
  neutral: "relaxed",
};

type Props = {
  onMoodDetected: (mood: string) => void;
};

type Status = "idle" | "loading-models" | "starting-camera" | "ready" | "scanning" | "done" | "error";

export function VibeCamera({ onMoodDetected }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const [detectedMood, setDetectedMood] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };

  const handleClose = () => {
    stopCamera();
    setOpen(false);
    setStatus("idle");
    setDetectedMood(null);
    setStatusMsg("");
  };

  useEffect(() => {
    if (!open) return;

    let cancelled = false;

    async function init() {
      try {
        setStatus("loading-models");
        setStatusMsg("Loading AI models...");
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");

        if (cancelled) return;
        setStatus("starting-camera");
        setStatusMsg("Starting camera...");

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }

        setStatus("ready");
        setStatusMsg("Camera ready — click Scan to detect your vibe");
      } catch (err: any) {
        if (!cancelled) {
          setStatus("error");
          setStatusMsg(err?.message ?? "Camera access denied");
        }
      }
    }

    init();
    return () => { cancelled = true; stopCamera(); };
  }, [open]);

  const handleScan = async () => {
    if (!videoRef.current || status !== "ready") return;
    setStatus("scanning");
    setStatusMsg("Analyzing your face...");

    try {
      const result = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (!result) {
        setStatus("ready");
        setStatusMsg("No face detected — try again");
        return;
      }

      const expressions = result.expressions as Record<string, number>;
      const top = Object.entries(expressions).sort((a, b) => b[1] - a[1])[0][0];
      const mood = EMOTION_TO_MOOD[top] ?? "relaxed";

      setDetectedMood(mood);
      setStatus("done");
      setStatusMsg(`Detected: ${top} → ${mood}`);
    } catch {
      setStatus("ready");
      setStatusMsg("Detection failed — try again");
    }
  };

  const handleUse = () => {
    if (detectedMood) {
      onMoodDetected(detectedMood);
      handleClose();
    }
  };

  return (
    <>
      {/* Trigger button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2 border-primary/40 text-primary hover:bg-primary/10"
      >
        <Camera className="h-4 w-4" />
        Detect My Vibe
      </Button>

      {/* Modal overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="mb-1 font-display text-xl font-bold">Vibe Check 📸</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Let the camera read your mood and pick the perfect playlist.
            </p>

            {/* Video feed */}
            <div className="relative overflow-hidden rounded-xl bg-black aspect-video mb-4">
              <video
                ref={videoRef}
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              {status === "scanning" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Scan className="h-12 w-12 animate-pulse text-primary" />
                </div>
              )}
              {status === "done" && detectedMood && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="text-5xl">
                    {{ happy: "☀️", sad: "🌧️", stressed: "🌀", relaxed: "🌿", focused: "🎯", energetic: "⚡" }[detectedMood] ?? "🎵"}
                  </span>
                </div>
              )}
            </div>

            {/* Status message */}
            <p className={cn(
              "mb-4 text-center text-sm",
              status === "error" ? "text-destructive" : "text-muted-foreground"
            )}>
              {statusMsg}
            </p>

            {/* Actions */}
            <div className="flex gap-3">
              {status === "ready" && (
                <Button onClick={handleScan} className="flex-1 gap-2">
                  <Scan className="h-4 w-4" /> Scan My Face
                </Button>
              )}
              {status === "done" && (
                <>
                  <Button variant="outline" onClick={() => { setStatus("ready"); setDetectedMood(null); setStatusMsg("Camera ready — click Scan to detect your vibe"); }} className="flex-1">
                    Retry
                  </Button>
                  <Button onClick={handleUse} className="flex-1">
                    Use This Mood 🎵
                  </Button>
                </>
              )}
              {(status === "loading-models" || status === "starting-camera" || status === "scanning") && (
                <Button disabled className="flex-1">
                  <span className="animate-pulse">Please wait...</span>
                </Button>
              )}
              {status === "error" && (
                <Button variant="outline" onClick={handleClose} className="flex-1">
                  Close
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
