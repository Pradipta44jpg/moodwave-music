export type MoodKey = "happy" | "sad" | "stressed" | "relaxed" | "focused" | "energetic";

export type Track = {
  videoId: string;
  title: string;
  artist: string;
  thumbnail: string;
};

export type Mood = {
  key: MoodKey;
  label: string;
  emoji: string;
  description: string;
};

export const MOODS: Mood[] = [
  { key: "happy", label: "Happy", emoji: "☀️", description: "Bright, uplifting vibes" },
  { key: "sad", label: "Sad", emoji: "🌧️", description: "Slow, reflective tones" },
  { key: "stressed", label: "Stressed", emoji: "🌀", description: "Release the tension" },
  { key: "relaxed", label: "Relaxed", emoji: "🌿", description: "Calm and easy" },
  { key: "focused", label: "Focused", emoji: "🎯", description: "Deep work soundtrack" },
  { key: "energetic", label: "Energetic", emoji: "⚡", description: "High-octane fuel" },
];

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const PLAYLISTS: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "ZbZSe6N_BXs", title: "Happy", artist: "Pharrell Williams", thumbnail: thumb("ZbZSe6N_BXs") },
    { videoId: "OPf0YbXqDm0", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", thumbnail: thumb("OPf0YbXqDm0") },
    { videoId: "y6Sxv-sUYtM", title: "Walking on Sunshine", artist: "Katrina & The Waves", thumbnail: thumb("y6Sxv-sUYtM") },
    { videoId: "09R8_2nJtjg", title: "Sugar", artist: "Maroon 5", thumbnail: thumb("09R8_2nJtjg") },
    { videoId: "PT2_F-1esPk", title: "Best Day Of My Life", artist: "American Authors", thumbnail: thumb("PT2_F-1esPk") },
    { videoId: "hT_nvWreIhg", title: "Counting Stars", artist: "OneRepublic", thumbnail: thumb("hT_nvWreIhg") },
  ],
  sad: [
    { videoId: "RB-RcX5DS5A", title: "Wake Me Up", artist: "Avicii", thumbnail: thumb("RB-RcX5DS5A") },
    { videoId: "hLQl3WQQoQ0", title: "Someone Like You", artist: "Adele", thumbnail: thumb("hLQl3WQQoQ0") },
    { videoId: "n4RjJKxsamQ", title: "Let Her Go", artist: "Passenger", thumbnail: thumb("n4RjJKxsamQ") },
    { videoId: "RBumgq5yVrA", title: "Photograph", artist: "Ed Sheeran", thumbnail: thumb("RBumgq5yVrA") },
    { videoId: "JGwWNGJdvx8", title: "Shape of My Heart", artist: "Sting", thumbnail: thumb("JGwWNGJdvx8") },
    { videoId: "5NPBIwQyPWE", title: "Skinny Love", artist: "Birdy", thumbnail: thumb("5NPBIwQyPWE") },
  ],
  stressed: [
    { videoId: "1ZYbU82GVz4", title: "Weightless", artist: "Marconi Union", thumbnail: thumb("1ZYbU82GVz4") },
    { videoId: "lFcSrYw-ARY", title: "Clair de Lune", artist: "Debussy", thumbnail: thumb("lFcSrYw-ARY") },
    { videoId: "WPni755-Krg", title: "Watermark", artist: "Enya", thumbnail: thumb("WPni755-Krg") },
    { videoId: "DWcJFNfaw9c", title: "River Flows In You", artist: "Yiruma", thumbnail: thumb("DWcJFNfaw9c") },
    { videoId: "2OEL4P1Rz04", title: "Experience", artist: "Ludovico Einaudi", thumbnail: thumb("2OEL4P1Rz04") },
    { videoId: "Z3lWO9R8H2Y", title: "Holocene", artist: "Bon Iver", thumbnail: thumb("Z3lWO9R8H2Y") },
  ],
  relaxed: [
    { videoId: "5qap5aO4i9A", title: "Lofi Hip Hop Radio", artist: "Lofi Girl", thumbnail: thumb("5qap5aO4i9A") },
    { videoId: "TtkFsfOP9QI", title: "Sunset Lover", artist: "Petit Biscuit", thumbnail: thumb("TtkFsfOP9QI") },
    { videoId: "1-xGerv5FOk", title: "Coffee", artist: "beabadoobee", thumbnail: thumb("1-xGerv5FOk") },
    { videoId: "LDU_Txk06tM", title: "Faded", artist: "Alan Walker", thumbnail: thumb("LDU_Txk06tM") },
    { videoId: "qFLhGq0060w", title: "Bloom", artist: "The Paper Kites", thumbnail: thumb("qFLhGq0060w") },
    { videoId: "TWcyIpul8OE", title: "Banana Pancakes", artist: "Jack Johnson", thumbnail: thumb("TWcyIpul8OE") },
  ],
  focused: [
    { videoId: "jfKfPfyJRdk", title: "Lofi Beats — Coding", artist: "Lofi Girl", thumbnail: thumb("jfKfPfyJRdk") },
    { videoId: "n61ULEU7CO0", title: "Time", artist: "Hans Zimmer", thumbnail: thumb("n61ULEU7CO0") },
    { videoId: "RrkrcSnOt5I", title: "Cornfield Chase", artist: "Hans Zimmer", thumbnail: thumb("RrkrcSnOt5I") },
    { videoId: "BV0vRwHGAhg", title: "Divenire", artist: "Ludovico Einaudi", thumbnail: thumb("BV0vRwHGAhg") },
    { videoId: "vrwb4O3WuG8", title: "Nuvole Bianche", artist: "Ludovico Einaudi", thumbnail: thumb("vrwb4O3WuG8") },
    { videoId: "4xDzrJKXOOY", title: "Strobe", artist: "Deadmau5", thumbnail: thumb("4xDzrJKXOOY") },
  ],
  energetic: [
    { videoId: "fLexgOxsZu0", title: "The Nights", artist: "Avicii", thumbnail: thumb("fLexgOxsZu0") },
    { videoId: "gCYcHz2k5x0", title: "Wake Me Up", artist: "Avicii", thumbnail: thumb("gCYcHz2k5x0") },
    { videoId: "60ItHLz5WEA", title: "Faded", artist: "Alan Walker", thumbnail: thumb("60ItHLz5WEA") },
    { videoId: "kXYiU_JCYtU", title: "Numb", artist: "Linkin Park", thumbnail: thumb("kXYiU_JCYtU") },
    { videoId: "fJ9rUzIMcZQ", title: "Bohemian Rhapsody", artist: "Queen", thumbnail: thumb("fJ9rUzIMcZQ") },
    { videoId: "btPJPFnesV4", title: "Eye of the Tiger", artist: "Survivor", thumbnail: thumb("btPJPFnesV4") },
  ],
};

export function getPlaylist(mood: string): Track[] {
  const key = mood.toLowerCase() as MoodKey;
  if (PLAYLISTS[key]) return [...PLAYLISTS[key]].sort(() => Math.random() - 0.5);
  // Custom mood: blend tracks from related moods
  const blend: Track[] = [
    ...PLAYLISTS.relaxed.slice(0, 2),
    ...PLAYLISTS.focused.slice(0, 2),
    ...PLAYLISTS.happy.slice(0, 2),
  ];
  return blend.sort(() => Math.random() - 0.5);
}

export function inferMoodKey(mood: string): MoodKey {
  const k = mood.toLowerCase();
  if (k in PLAYLISTS) return k as MoodKey;
  if (/calm|chill|peace|sleep/.test(k)) return "relaxed";
  if (/work|study|code|deep/.test(k)) return "focused";
  if (/run|gym|hype|party/.test(k)) return "energetic";
  if (/down|blue|cry|lonely/.test(k)) return "sad";
  if (/anx|tense|overwhelm|tired/.test(k)) return "stressed";
  return "happy";
}
