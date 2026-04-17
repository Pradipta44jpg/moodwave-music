import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Schema = z.object({
  mood: z.string().min(1).max(80),
  genre: z.string().min(1).max(40),
  language: z.string().min(1).max(40),
  tempo: z.number().min(40).max(220),
  duration: z.number().min(10).max(120),
  vocals: z.boolean(),
  variation: z.string().min(1).max(60),
});

export const generateMusic = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => Schema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      throw new Error("ELEVENLABS_API_KEY is not configured");
    }

    const vocalsLine = data.vocals
      ? `with ${data.language} vocals and lyrics`
      : "instrumental only, no vocals";

    const prompt = `A ${data.mood} ${data.genre} track ${vocalsLine}. Tempo around ${data.tempo} BPM. Style cue: ${data.variation}. High studio quality, rich production, emotional and immersive.`;

    const res = await fetch("https://api.elevenlabs.io/v1/music", {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        music_length_ms: Math.round(data.duration * 1000),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("ElevenLabs Music error:", res.status, text);
      throw new Error(
        res.status === 401
          ? "Invalid ElevenLabs API key"
          : res.status === 402
            ? "ElevenLabs credits exhausted"
            : `Music generation failed (${res.status})`,
      );
    }

    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return {
      audio: base64,
      mimeType: "audio/mpeg",
      prompt,
    };
  });
