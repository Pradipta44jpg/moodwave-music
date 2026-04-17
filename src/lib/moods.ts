export type MoodKey = "happy" | "sad" | "stressed" | "relaxed" | "focused" | "energetic";

export type LanguageKey =
  | "english"
  | "hindi"
  | "bengali"
  | "tamil"
  | "punjabi"
  | "telugu"
  | "marathi";

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

export type Language = {
  key: LanguageKey;
  label: string;
  flag: string;
};

export const MOODS: Mood[] = [
  { key: "happy", label: "Happy", emoji: "☀️", description: "Bright, uplifting vibes" },
  { key: "sad", label: "Sad", emoji: "🌧️", description: "Slow, reflective tones" },
  { key: "stressed", label: "Stressed", emoji: "🌀", description: "Release the tension" },
  { key: "relaxed", label: "Relaxed", emoji: "🌿", description: "Calm and easy" },
  { key: "focused", label: "Focused", emoji: "🎯", description: "Deep work soundtrack" },
  { key: "energetic", label: "Energetic", emoji: "⚡", description: "High-octane fuel" },
];

export const LANGUAGES: Language[] = [
  { key: "english", label: "English", flag: "🌍" },
  { key: "hindi", label: "Hindi", flag: "🇮🇳" },
  { key: "bengali", label: "Bengali", flag: "🇧🇩" },
  { key: "tamil", label: "Tamil", flag: "🇮🇳" },
  { key: "punjabi", label: "Punjabi", flag: "🇮🇳" },
  { key: "telugu", label: "Telugu", flag: "🇮🇳" },
  { key: "marathi", label: "Marathi", flag: "🇮🇳" },
];

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const ENGLISH: Record<MoodKey, Track[]> = {
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

const HINDI: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "FycLfwbnfgw", title: "Gallan Goodiyaan", artist: "Dil Dhadakne Do", thumbnail: thumb("FycLfwbnfgw") },
    { videoId: "qe3CdaJxNb8", title: "Badtameez Dil", artist: "Yeh Jawaani Hai Deewani", thumbnail: thumb("qe3CdaJxNb8") },
    { videoId: "Y2j7Ks7tdYQ", title: "London Thumakda", artist: "Queen", thumbnail: thumb("Y2j7Ks7tdYQ") },
    { videoId: "fmEf7LURdRk", title: "Kar Gayi Chull", artist: "Kapoor & Sons", thumbnail: thumb("fmEf7LURdRk") },
    { videoId: "FBhGJW8WW9o", title: "Nashe Si Chadh Gayi", artist: "Befikre", thumbnail: thumb("FBhGJW8WW9o") },
    { videoId: "RFXmpNHRpQU", title: "Aankh Marey", artist: "Simmba", thumbnail: thumb("RFXmpNHRpQU") },
  ],
  sad: [
    { videoId: "284Ov7ysmfA", title: "Channa Mereya", artist: "Arijit Singh", thumbnail: thumb("284Ov7ysmfA") },
    { videoId: "gBzjjGYAilg", title: "Tum Hi Ho", artist: "Arijit Singh", thumbnail: thumb("gBzjjGYAilg") },
    { videoId: "AEIVhBS6baE", title: "Agar Tum Saath Ho", artist: "Tamasha", thumbnail: thumb("AEIVhBS6baE") },
    { videoId: "Umqb9KENgmk", title: "Phir Bhi Tumko Chaahunga", artist: "Half Girlfriend", thumbnail: thumb("Umqb9KENgmk") },
    { videoId: "Wd2B8OAotU8", title: "Kabira", artist: "Yeh Jawaani Hai Deewani", thumbnail: thumb("Wd2B8OAotU8") },
    { videoId: "8v-TWxPpr_Q", title: "Kal Ho Naa Ho", artist: "Sonu Nigam", thumbnail: thumb("8v-TWxPpr_Q") },
  ],
  stressed: [
    { videoId: "vTIIMJ9tUc8", title: "Iktara", artist: "Wake Up Sid", thumbnail: thumb("vTIIMJ9tUc8") },
    { videoId: "k-trDuiCusU", title: "Mitwa", artist: "KANK", thumbnail: thumb("k-trDuiCusU") },
    { videoId: "LlYDi0PiWA0", title: "Tum Ho", artist: "Rockstar", thumbnail: thumb("LlYDi0PiWA0") },
    { videoId: "JFcgOboQZ08", title: "Phir Se Ud Chala", artist: "Rockstar", thumbnail: thumb("JFcgOboQZ08") },
    { videoId: "tCT6QhI_Dg8", title: "Khamoshiyan", artist: "Arijit Singh", thumbnail: thumb("tCT6QhI_Dg8") },
    { videoId: "lY2yjAdbvdQ", title: "Tera Ban Jaunga", artist: "Kabir Singh", thumbnail: thumb("lY2yjAdbvdQ") },
  ],
  relaxed: [
    { videoId: "Umqb9KENgmk", title: "Phir Bhi Tumko Chaahunga", artist: "Half Girlfriend", thumbnail: thumb("Umqb9KENgmk") },
    { videoId: "Y_Iu5BFM5wU", title: "Tum Se Hi", artist: "Jab We Met", thumbnail: thumb("Y_Iu5BFM5wU") },
    { videoId: "vX2cDW8LUWk", title: "Pee Loon", artist: "Once Upon A Time In Mumbaai", thumbnail: thumb("vX2cDW8LUWk") },
    { videoId: "fSS_R91Nmwg", title: "Ilahi", artist: "Yeh Jawaani Hai Deewani", thumbnail: thumb("fSS_R91Nmwg") },
    { videoId: "lY2yjAdbvdQ", title: "Tera Ban Jaunga", artist: "Kabir Singh", thumbnail: thumb("lY2yjAdbvdQ") },
    { videoId: "AEIVhBS6baE", title: "Agar Tum Saath Ho", artist: "Tamasha", thumbnail: thumb("AEIVhBS6baE") },
  ],
  focused: [
    { videoId: "vTIIMJ9tUc8", title: "Iktara", artist: "Wake Up Sid", thumbnail: thumb("vTIIMJ9tUc8") },
    { videoId: "JFcgOboQZ08", title: "Phir Se Ud Chala", artist: "Rockstar", thumbnail: thumb("JFcgOboQZ08") },
    { videoId: "fSS_R91Nmwg", title: "Ilahi", artist: "Yeh Jawaani Hai Deewani", thumbnail: thumb("fSS_R91Nmwg") },
    { videoId: "Wd2B8OAotU8", title: "Kabira", artist: "Yeh Jawaani Hai Deewani", thumbnail: thumb("Wd2B8OAotU8") },
    { videoId: "vX2cDW8LUWk", title: "Pee Loon", artist: "Once Upon A Time In Mumbaai", thumbnail: thumb("vX2cDW8LUWk") },
    { videoId: "k-trDuiCusU", title: "Mitwa", artist: "KANK", thumbnail: thumb("k-trDuiCusU") },
  ],
  energetic: [
    { videoId: "VlgZSlLbpJU", title: "Malhari", artist: "Bajirao Mastani", thumbnail: thumb("VlgZSlLbpJU") },
    { videoId: "AEIVhBS6baE", title: "Zinda", artist: "Bhaag Milkha Bhaag", thumbnail: thumb("AEIVhBS6baE") },
    { videoId: "FBhGJW8WW9o", title: "Nashe Si Chadh Gayi", artist: "Befikre", thumbnail: thumb("FBhGJW8WW9o") },
    { videoId: "qe3CdaJxNb8", title: "Badtameez Dil", artist: "YJHD", thumbnail: thumb("qe3CdaJxNb8") },
    { videoId: "RFXmpNHRpQU", title: "Aankh Marey", artist: "Simmba", thumbnail: thumb("RFXmpNHRpQU") },
    { videoId: "fmEf7LURdRk", title: "Kar Gayi Chull", artist: "Kapoor & Sons", thumbnail: thumb("fmEf7LURdRk") },
  ],
};

const BENGALI: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "0vrdgDdPApQ", title: "Bojhena Shey Bojhena", artist: "Arijit Singh", thumbnail: thumb("0vrdgDdPApQ") },
    { videoId: "LcUZZbS-WEc", title: "Tomake Chai", artist: "Arijit Singh", thumbnail: thumb("LcUZZbS-WEc") },
    { videoId: "k0BWlvnBmIE", title: "Bhromor Koio Gia", artist: "Coke Studio Bangla", thumbnail: thumb("k0BWlvnBmIE") },
    { videoId: "y9j-BL5ocW8", title: "Deora", artist: "Coke Studio Bangla", thumbnail: thumb("y9j-BL5ocW8") },
    { videoId: "Cs0XexcIY1U", title: "Chayanyere Kanamachi", artist: "Lagnajita", thumbnail: thumb("Cs0XexcIY1U") },
    { videoId: "vBPwwj-RfBY", title: "Tui Amar Hoye Thak", artist: "Imran", thumbnail: thumb("vBPwwj-RfBY") },
  ],
  sad: [
    { videoId: "yXY5zfWeoYQ", title: "Ekla Cholo Re", artist: "Tagore / Amitabh", thumbnail: thumb("yXY5zfWeoYQ") },
    { videoId: "Cs0XexcIY1U", title: "Chayanyere Kanamachi", artist: "Lagnajita", thumbnail: thumb("Cs0XexcIY1U") },
    { videoId: "LcUZZbS-WEc", title: "Tomake Chai", artist: "Arijit Singh", thumbnail: thumb("LcUZZbS-WEc") },
    { videoId: "0vrdgDdPApQ", title: "Bojhena Shey Bojhena", artist: "Arijit Singh", thumbnail: thumb("0vrdgDdPApQ") },
    { videoId: "Brnv2k4QsBE", title: "Ami Aaj Kal Bhalo Nei", artist: "Anupam Roy", thumbnail: thumb("Brnv2k4QsBE") },
    { videoId: "fHGtJ_dMWiM", title: "Boba Tunnel", artist: "Anupam Roy", thumbnail: thumb("fHGtJ_dMWiM") },
  ],
  stressed: [
    { videoId: "Brnv2k4QsBE", title: "Ami Aaj Kal Bhalo Nei", artist: "Anupam Roy", thumbnail: thumb("Brnv2k4QsBE") },
    { videoId: "fHGtJ_dMWiM", title: "Boba Tunnel", artist: "Anupam Roy", thumbnail: thumb("fHGtJ_dMWiM") },
    { videoId: "yXY5zfWeoYQ", title: "Ekla Cholo Re", artist: "Tagore", thumbnail: thumb("yXY5zfWeoYQ") },
    { videoId: "k0BWlvnBmIE", title: "Bhromor Koio Gia", artist: "Coke Studio Bangla", thumbnail: thumb("k0BWlvnBmIE") },
    { videoId: "Cs0XexcIY1U", title: "Chayanyere Kanamachi", artist: "Lagnajita", thumbnail: thumb("Cs0XexcIY1U") },
    { videoId: "LcUZZbS-WEc", title: "Tomake Chai", artist: "Arijit Singh", thumbnail: thumb("LcUZZbS-WEc") },
  ],
  relaxed: [
    { videoId: "k0BWlvnBmIE", title: "Bhromor Koio Gia", artist: "Coke Studio Bangla", thumbnail: thumb("k0BWlvnBmIE") },
    { videoId: "y9j-BL5ocW8", title: "Deora", artist: "Coke Studio Bangla", thumbnail: thumb("y9j-BL5ocW8") },
    { videoId: "yXY5zfWeoYQ", title: "Ekla Cholo Re", artist: "Tagore", thumbnail: thumb("yXY5zfWeoYQ") },
    { videoId: "fHGtJ_dMWiM", title: "Boba Tunnel", artist: "Anupam Roy", thumbnail: thumb("fHGtJ_dMWiM") },
    { videoId: "vBPwwj-RfBY", title: "Tui Amar Hoye Thak", artist: "Imran", thumbnail: thumb("vBPwwj-RfBY") },
    { videoId: "Cs0XexcIY1U", title: "Chayanyere Kanamachi", artist: "Lagnajita", thumbnail: thumb("Cs0XexcIY1U") },
  ],
  focused: [
    { videoId: "yXY5zfWeoYQ", title: "Ekla Cholo Re", artist: "Tagore", thumbnail: thumb("yXY5zfWeoYQ") },
    { videoId: "Brnv2k4QsBE", title: "Ami Aaj Kal Bhalo Nei", artist: "Anupam Roy", thumbnail: thumb("Brnv2k4QsBE") },
    { videoId: "k0BWlvnBmIE", title: "Bhromor Koio Gia", artist: "Coke Studio Bangla", thumbnail: thumb("k0BWlvnBmIE") },
    { videoId: "fHGtJ_dMWiM", title: "Boba Tunnel", artist: "Anupam Roy", thumbnail: thumb("fHGtJ_dMWiM") },
    { videoId: "Cs0XexcIY1U", title: "Chayanyere Kanamachi", artist: "Lagnajita", thumbnail: thumb("Cs0XexcIY1U") },
    { videoId: "LcUZZbS-WEc", title: "Tomake Chai", artist: "Arijit Singh", thumbnail: thumb("LcUZZbS-WEc") },
  ],
  energetic: [
    { videoId: "y9j-BL5ocW8", title: "Deora", artist: "Coke Studio Bangla", thumbnail: thumb("y9j-BL5ocW8") },
    { videoId: "vBPwwj-RfBY", title: "Tui Amar Hoye Thak", artist: "Imran", thumbnail: thumb("vBPwwj-RfBY") },
    { videoId: "k0BWlvnBmIE", title: "Bhromor Koio Gia", artist: "Coke Studio Bangla", thumbnail: thumb("k0BWlvnBmIE") },
    { videoId: "0vrdgDdPApQ", title: "Bojhena Shey Bojhena", artist: "Arijit Singh", thumbnail: thumb("0vrdgDdPApQ") },
    { videoId: "Cs0XexcIY1U", title: "Chayanyere Kanamachi", artist: "Lagnajita", thumbnail: thumb("Cs0XexcIY1U") },
    { videoId: "LcUZZbS-WEc", title: "Tomake Chai", artist: "Arijit Singh", thumbnail: thumb("LcUZZbS-WEc") },
  ],
};

const TAMIL: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "TYBnyZf4Mb0", title: "Vaathi Coming", artist: "Master", thumbnail: thumb("TYBnyZf4Mb0") },
    { videoId: "WtolqWSAdpA", title: "Rowdy Baby", artist: "Maari 2", thumbnail: thumb("WtolqWSAdpA") },
    { videoId: "lwMuptW2gFo", title: "Aaluma Doluma", artist: "Vedalam", thumbnail: thumb("lwMuptW2gFo") },
    { videoId: "0Q3Ot1l_kBo", title: "Verithanam", artist: "Bigil", thumbnail: thumb("0Q3Ot1l_kBo") },
    { videoId: "FAtQAgs2tT8", title: "Arabic Kuthu", artist: "Beast", thumbnail: thumb("FAtQAgs2tT8") },
    { videoId: "I5MYYDpfFu0", title: "Jimikki Kammal", artist: "Velipadinte Pusthakam", thumbnail: thumb("I5MYYDpfFu0") },
  ],
  sad: [
    { videoId: "EzMpOTLG1Mw", title: "Munbe Vaa", artist: "Sillunu Oru Kaadhal", thumbnail: thumb("EzMpOTLG1Mw") },
    { videoId: "i9irCV-S57k", title: "Po Nee Po", artist: "3", thumbnail: thumb("i9irCV-S57k") },
    { videoId: "VqkUwxzkRtY", title: "Kannazhaga", artist: "3", thumbnail: thumb("VqkUwxzkRtY") },
    { videoId: "5Ml7T3DLrs0", title: "Nenjukkulle", artist: "Kadal", thumbnail: thumb("5Ml7T3DLrs0") },
    { videoId: "JtZ-FeC1WVA", title: "Anbe Anbe", artist: "Jeans", thumbnail: thumb("JtZ-FeC1WVA") },
    { videoId: "k7VtoJUSMxI", title: "Ennodu Nee Irundhaal", artist: "I", thumbnail: thumb("k7VtoJUSMxI") },
  ],
  stressed: [
    { videoId: "EzMpOTLG1Mw", title: "Munbe Vaa", artist: "Sillunu Oru Kaadhal", thumbnail: thumb("EzMpOTLG1Mw") },
    { videoId: "5Ml7T3DLrs0", title: "Nenjukkulle", artist: "Kadal", thumbnail: thumb("5Ml7T3DLrs0") },
    { videoId: "VqkUwxzkRtY", title: "Kannazhaga", artist: "3", thumbnail: thumb("VqkUwxzkRtY") },
    { videoId: "k7VtoJUSMxI", title: "Ennodu Nee Irundhaal", artist: "I", thumbnail: thumb("k7VtoJUSMxI") },
    { videoId: "i9irCV-S57k", title: "Po Nee Po", artist: "3", thumbnail: thumb("i9irCV-S57k") },
    { videoId: "JtZ-FeC1WVA", title: "Anbe Anbe", artist: "Jeans", thumbnail: thumb("JtZ-FeC1WVA") },
  ],
  relaxed: [
    { videoId: "EzMpOTLG1Mw", title: "Munbe Vaa", artist: "Sillunu Oru Kaadhal", thumbnail: thumb("EzMpOTLG1Mw") },
    { videoId: "k7VtoJUSMxI", title: "Ennodu Nee Irundhaal", artist: "I", thumbnail: thumb("k7VtoJUSMxI") },
    { videoId: "5Ml7T3DLrs0", title: "Nenjukkulle", artist: "Kadal", thumbnail: thumb("5Ml7T3DLrs0") },
    { videoId: "VqkUwxzkRtY", title: "Kannazhaga", artist: "3", thumbnail: thumb("VqkUwxzkRtY") },
    { videoId: "JtZ-FeC1WVA", title: "Anbe Anbe", artist: "Jeans", thumbnail: thumb("JtZ-FeC1WVA") },
    { videoId: "i9irCV-S57k", title: "Po Nee Po", artist: "3", thumbnail: thumb("i9irCV-S57k") },
  ],
  focused: [
    { videoId: "EzMpOTLG1Mw", title: "Munbe Vaa", artist: "Sillunu Oru Kaadhal", thumbnail: thumb("EzMpOTLG1Mw") },
    { videoId: "k7VtoJUSMxI", title: "Ennodu Nee Irundhaal", artist: "I", thumbnail: thumb("k7VtoJUSMxI") },
    { videoId: "5Ml7T3DLrs0", title: "Nenjukkulle", artist: "Kadal", thumbnail: thumb("5Ml7T3DLrs0") },
    { videoId: "i9irCV-S57k", title: "Po Nee Po", artist: "3", thumbnail: thumb("i9irCV-S57k") },
    { videoId: "JtZ-FeC1WVA", title: "Anbe Anbe", artist: "Jeans", thumbnail: thumb("JtZ-FeC1WVA") },
    { videoId: "VqkUwxzkRtY", title: "Kannazhaga", artist: "3", thumbnail: thumb("VqkUwxzkRtY") },
  ],
  energetic: [
    { videoId: "TYBnyZf4Mb0", title: "Vaathi Coming", artist: "Master", thumbnail: thumb("TYBnyZf4Mb0") },
    { videoId: "WtolqWSAdpA", title: "Rowdy Baby", artist: "Maari 2", thumbnail: thumb("WtolqWSAdpA") },
    { videoId: "0Q3Ot1l_kBo", title: "Verithanam", artist: "Bigil", thumbnail: thumb("0Q3Ot1l_kBo") },
    { videoId: "FAtQAgs2tT8", title: "Arabic Kuthu", artist: "Beast", thumbnail: thumb("FAtQAgs2tT8") },
    { videoId: "lwMuptW2gFo", title: "Aaluma Doluma", artist: "Vedalam", thumbnail: thumb("lwMuptW2gFo") },
    { videoId: "I5MYYDpfFu0", title: "Jimikki Kammal", artist: "Velipadinte", thumbnail: thumb("I5MYYDpfFu0") },
  ],
};

const PUNJABI: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "tQ0yjYUFKAE", title: "Lahore", artist: "Guru Randhawa", thumbnail: thumb("tQ0yjYUFKAE") },
    { videoId: "_uo0FVuQy3o", title: "Brown Munde", artist: "AP Dhillon", thumbnail: thumb("_uo0FVuQy3o") },
    { videoId: "QFCJBuP4O0M", title: "Excuses", artist: "AP Dhillon", thumbnail: thumb("QFCJBuP4O0M") },
    { videoId: "X41ApxRG-Mo", title: "Suit Suit", artist: "Guru Randhawa", thumbnail: thumb("X41ApxRG-Mo") },
    { videoId: "BC9Ti0lsq2A", title: "High Rated Gabru", artist: "Guru Randhawa", thumbnail: thumb("BC9Ti0lsq2A") },
    { videoId: "fGTRujXYE_U", title: "Laembadgini", artist: "Diljit Dosanjh", thumbnail: thumb("fGTRujXYE_U") },
  ],
  sad: [
    { videoId: "VkHgqg2W2nc", title: "Pachtaoge", artist: "Arijit Singh", thumbnail: thumb("VkHgqg2W2nc") },
    { videoId: "YMxRgmGgPV8", title: "Filhall", artist: "B Praak", thumbnail: thumb("YMxRgmGgPV8") },
    { videoId: "lFEjwUyc3G8", title: "Mann Bharrya", artist: "B Praak", thumbnail: thumb("lFEjwUyc3G8") },
    { videoId: "0wsFuYnzwlA", title: "Qismat", artist: "Ammy Virk", thumbnail: thumb("0wsFuYnzwlA") },
    { videoId: "v0GD6KsFKz0", title: "Tera Yaar Hoon Main", artist: "Arijit Singh", thumbnail: thumb("v0GD6KsFKz0") },
    { videoId: "ePB2sFM-V58", title: "Channa Ve", artist: "Bhoot", thumbnail: thumb("ePB2sFM-V58") },
  ],
  stressed: [
    { videoId: "lFEjwUyc3G8", title: "Mann Bharrya", artist: "B Praak", thumbnail: thumb("lFEjwUyc3G8") },
    { videoId: "0wsFuYnzwlA", title: "Qismat", artist: "Ammy Virk", thumbnail: thumb("0wsFuYnzwlA") },
    { videoId: "ePB2sFM-V58", title: "Channa Ve", artist: "Bhoot", thumbnail: thumb("ePB2sFM-V58") },
    { videoId: "v0GD6KsFKz0", title: "Tera Yaar Hoon Main", artist: "Arijit Singh", thumbnail: thumb("v0GD6KsFKz0") },
    { videoId: "VkHgqg2W2nc", title: "Pachtaoge", artist: "Arijit Singh", thumbnail: thumb("VkHgqg2W2nc") },
    { videoId: "YMxRgmGgPV8", title: "Filhall", artist: "B Praak", thumbnail: thumb("YMxRgmGgPV8") },
  ],
  relaxed: [
    { videoId: "v0GD6KsFKz0", title: "Tera Yaar Hoon Main", artist: "Arijit Singh", thumbnail: thumb("v0GD6KsFKz0") },
    { videoId: "0wsFuYnzwlA", title: "Qismat", artist: "Ammy Virk", thumbnail: thumb("0wsFuYnzwlA") },
    { videoId: "QFCJBuP4O0M", title: "Excuses", artist: "AP Dhillon", thumbnail: thumb("QFCJBuP4O0M") },
    { videoId: "ePB2sFM-V58", title: "Channa Ve", artist: "Bhoot", thumbnail: thumb("ePB2sFM-V58") },
    { videoId: "lFEjwUyc3G8", title: "Mann Bharrya", artist: "B Praak", thumbnail: thumb("lFEjwUyc3G8") },
    { videoId: "tQ0yjYUFKAE", title: "Lahore", artist: "Guru Randhawa", thumbnail: thumb("tQ0yjYUFKAE") },
  ],
  focused: [
    { videoId: "QFCJBuP4O0M", title: "Excuses", artist: "AP Dhillon", thumbnail: thumb("QFCJBuP4O0M") },
    { videoId: "v0GD6KsFKz0", title: "Tera Yaar Hoon Main", artist: "Arijit Singh", thumbnail: thumb("v0GD6KsFKz0") },
    { videoId: "0wsFuYnzwlA", title: "Qismat", artist: "Ammy Virk", thumbnail: thumb("0wsFuYnzwlA") },
    { videoId: "lFEjwUyc3G8", title: "Mann Bharrya", artist: "B Praak", thumbnail: thumb("lFEjwUyc3G8") },
    { videoId: "tQ0yjYUFKAE", title: "Lahore", artist: "Guru Randhawa", thumbnail: thumb("tQ0yjYUFKAE") },
    { videoId: "ePB2sFM-V58", title: "Channa Ve", artist: "Bhoot", thumbnail: thumb("ePB2sFM-V58") },
  ],
  energetic: [
    { videoId: "_uo0FVuQy3o", title: "Brown Munde", artist: "AP Dhillon", thumbnail: thumb("_uo0FVuQy3o") },
    { videoId: "BC9Ti0lsq2A", title: "High Rated Gabru", artist: "Guru Randhawa", thumbnail: thumb("BC9Ti0lsq2A") },
    { videoId: "X41ApxRG-Mo", title: "Suit Suit", artist: "Guru Randhawa", thumbnail: thumb("X41ApxRG-Mo") },
    { videoId: "fGTRujXYE_U", title: "Laembadgini", artist: "Diljit Dosanjh", thumbnail: thumb("fGTRujXYE_U") },
    { videoId: "tQ0yjYUFKAE", title: "Lahore", artist: "Guru Randhawa", thumbnail: thumb("tQ0yjYUFKAE") },
    { videoId: "QFCJBuP4O0M", title: "Excuses", artist: "AP Dhillon", thumbnail: thumb("QFCJBuP4O0M") },
  ],
};

const TELUGU: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "WBoR8nHN-fQ", title: "Naatu Naatu", artist: "RRR", thumbnail: thumb("WBoR8nHN-fQ") },
    { videoId: "lhwH-9ONNXA", title: "Butta Bomma", artist: "Ala Vaikunthapurramuloo", thumbnail: thumb("lhwH-9ONNXA") },
    { videoId: "WtolqWSAdpA", title: "Rowdy Baby", artist: "Maari 2", thumbnail: thumb("WtolqWSAdpA") },
    { videoId: "5RNfLPb6FrQ", title: "Saami Saami", artist: "Pushpa", thumbnail: thumb("5RNfLPb6FrQ") },
    { videoId: "pKctjlxbsr8", title: "Srivalli", artist: "Pushpa", thumbnail: thumb("pKctjlxbsr8") },
    { videoId: "vMYbk_Ay8Mc", title: "Oo Antava", artist: "Pushpa", thumbnail: thumb("vMYbk_Ay8Mc") },
  ],
  sad: [
    { videoId: "Pic5LGB7gxs", title: "Inkem Inkem", artist: "Geetha Govindam", thumbnail: thumb("Pic5LGB7gxs") },
    { videoId: "U3a0nVtwiBM", title: "Yenti Yenti", artist: "Geetha Govindam", thumbnail: thumb("U3a0nVtwiBM") },
    { videoId: "Y9-pX5LMzpE", title: "Samajavaragamana", artist: "Ala Vaikunthapurramuloo", thumbnail: thumb("Y9-pX5LMzpE") },
    { videoId: "pKctjlxbsr8", title: "Srivalli", artist: "Pushpa", thumbnail: thumb("pKctjlxbsr8") },
    { videoId: "lhwH-9ONNXA", title: "Butta Bomma", artist: "AVPL", thumbnail: thumb("lhwH-9ONNXA") },
    { videoId: "vMYbk_Ay8Mc", title: "Oo Antava", artist: "Pushpa", thumbnail: thumb("vMYbk_Ay8Mc") },
  ],
  stressed: [
    { videoId: "Y9-pX5LMzpE", title: "Samajavaragamana", artist: "AVPL", thumbnail: thumb("Y9-pX5LMzpE") },
    { videoId: "Pic5LGB7gxs", title: "Inkem Inkem", artist: "Geetha Govindam", thumbnail: thumb("Pic5LGB7gxs") },
    { videoId: "U3a0nVtwiBM", title: "Yenti Yenti", artist: "Geetha Govindam", thumbnail: thumb("U3a0nVtwiBM") },
    { videoId: "pKctjlxbsr8", title: "Srivalli", artist: "Pushpa", thumbnail: thumb("pKctjlxbsr8") },
    { videoId: "lhwH-9ONNXA", title: "Butta Bomma", artist: "AVPL", thumbnail: thumb("lhwH-9ONNXA") },
    { videoId: "vMYbk_Ay8Mc", title: "Oo Antava", artist: "Pushpa", thumbnail: thumb("vMYbk_Ay8Mc") },
  ],
  relaxed: [
    { videoId: "Y9-pX5LMzpE", title: "Samajavaragamana", artist: "AVPL", thumbnail: thumb("Y9-pX5LMzpE") },
    { videoId: "Pic5LGB7gxs", title: "Inkem Inkem", artist: "Geetha Govindam", thumbnail: thumb("Pic5LGB7gxs") },
    { videoId: "U3a0nVtwiBM", title: "Yenti Yenti", artist: "Geetha Govindam", thumbnail: thumb("U3a0nVtwiBM") },
    { videoId: "lhwH-9ONNXA", title: "Butta Bomma", artist: "AVPL", thumbnail: thumb("lhwH-9ONNXA") },
    { videoId: "pKctjlxbsr8", title: "Srivalli", artist: "Pushpa", thumbnail: thumb("pKctjlxbsr8") },
    { videoId: "5RNfLPb6FrQ", title: "Saami Saami", artist: "Pushpa", thumbnail: thumb("5RNfLPb6FrQ") },
  ],
  focused: [
    { videoId: "Y9-pX5LMzpE", title: "Samajavaragamana", artist: "AVPL", thumbnail: thumb("Y9-pX5LMzpE") },
    { videoId: "U3a0nVtwiBM", title: "Yenti Yenti", artist: "Geetha Govindam", thumbnail: thumb("U3a0nVtwiBM") },
    { videoId: "Pic5LGB7gxs", title: "Inkem Inkem", artist: "Geetha Govindam", thumbnail: thumb("Pic5LGB7gxs") },
    { videoId: "lhwH-9ONNXA", title: "Butta Bomma", artist: "AVPL", thumbnail: thumb("lhwH-9ONNXA") },
    { videoId: "pKctjlxbsr8", title: "Srivalli", artist: "Pushpa", thumbnail: thumb("pKctjlxbsr8") },
    { videoId: "5RNfLPb6FrQ", title: "Saami Saami", artist: "Pushpa", thumbnail: thumb("5RNfLPb6FrQ") },
  ],
  energetic: [
    { videoId: "WBoR8nHN-fQ", title: "Naatu Naatu", artist: "RRR", thumbnail: thumb("WBoR8nHN-fQ") },
    { videoId: "5RNfLPb6FrQ", title: "Saami Saami", artist: "Pushpa", thumbnail: thumb("5RNfLPb6FrQ") },
    { videoId: "vMYbk_Ay8Mc", title: "Oo Antava", artist: "Pushpa", thumbnail: thumb("vMYbk_Ay8Mc") },
    { videoId: "lhwH-9ONNXA", title: "Butta Bomma", artist: "AVPL", thumbnail: thumb("lhwH-9ONNXA") },
    { videoId: "pKctjlxbsr8", title: "Srivalli", artist: "Pushpa", thumbnail: thumb("pKctjlxbsr8") },
    { videoId: "WtolqWSAdpA", title: "Rowdy Baby", artist: "Maari 2", thumbnail: thumb("WtolqWSAdpA") },
  ],
};

const MARATHI: Record<MoodKey, Track[]> = {
  happy: [
    { videoId: "qcXIDi0ItLE", title: "Zingaat", artist: "Sairat", thumbnail: thumb("qcXIDi0ItLE") },
    { videoId: "BddP6PYo2gs", title: "Yad Lagla", artist: "Sairat", thumbnail: thumb("BddP6PYo2gs") },
    { videoId: "5Pp7Bcyhc5o", title: "Sairat Zaala Ji", artist: "Sairat", thumbnail: thumb("5Pp7Bcyhc5o") },
    { videoId: "0xmPvwZkRTQ", title: "Apsara Aali", artist: "Natarang", thumbnail: thumb("0xmPvwZkRTQ") },
    { videoId: "h2ASQ3i4o-w", title: "Mala Ved Lagale", artist: "Mumbai-Pune-Mumbai", thumbnail: thumb("h2ASQ3i4o-w") },
    { videoId: "qkNkMvqxKBE", title: "Wajle Ki Bara", artist: "Natarang", thumbnail: thumb("qkNkMvqxKBE") },
  ],
  sad: [
    { videoId: "BddP6PYo2gs", title: "Yad Lagla", artist: "Sairat", thumbnail: thumb("BddP6PYo2gs") },
    { videoId: "h2ASQ3i4o-w", title: "Mala Ved Lagale", artist: "MPM", thumbnail: thumb("h2ASQ3i4o-w") },
    { videoId: "5Pp7Bcyhc5o", title: "Sairat Zaala Ji", artist: "Sairat", thumbnail: thumb("5Pp7Bcyhc5o") },
    { videoId: "0xmPvwZkRTQ", title: "Apsara Aali", artist: "Natarang", thumbnail: thumb("0xmPvwZkRTQ") },
    { videoId: "qkNkMvqxKBE", title: "Wajle Ki Bara", artist: "Natarang", thumbnail: thumb("qkNkMvqxKBE") },
    { videoId: "qcXIDi0ItLE", title: "Zingaat", artist: "Sairat", thumbnail: thumb("qcXIDi0ItLE") },
  ],
  stressed: [
    { videoId: "BddP6PYo2gs", title: "Yad Lagla", artist: "Sairat", thumbnail: thumb("BddP6PYo2gs") },
    { videoId: "h2ASQ3i4o-w", title: "Mala Ved Lagale", artist: "MPM", thumbnail: thumb("h2ASQ3i4o-w") },
    { videoId: "5Pp7Bcyhc5o", title: "Sairat Zaala Ji", artist: "Sairat", thumbnail: thumb("5Pp7Bcyhc5o") },
    { videoId: "0xmPvwZkRTQ", title: "Apsara Aali", artist: "Natarang", thumbnail: thumb("0xmPvwZkRTQ") },
    { videoId: "qkNkMvqxKBE", title: "Wajle Ki Bara", artist: "Natarang", thumbnail: thumb("qkNkMvqxKBE") },
    { videoId: "qcXIDi0ItLE", title: "Zingaat", artist: "Sairat", thumbnail: thumb("qcXIDi0ItLE") },
  ],
  relaxed: [
    { videoId: "BddP6PYo2gs", title: "Yad Lagla", artist: "Sairat", thumbnail: thumb("BddP6PYo2gs") },
    { videoId: "h2ASQ3i4o-w", title: "Mala Ved Lagale", artist: "MPM", thumbnail: thumb("h2ASQ3i4o-w") },
    { videoId: "5Pp7Bcyhc5o", title: "Sairat Zaala Ji", artist: "Sairat", thumbnail: thumb("5Pp7Bcyhc5o") },
    { videoId: "0xmPvwZkRTQ", title: "Apsara Aali", artist: "Natarang", thumbnail: thumb("0xmPvwZkRTQ") },
    { videoId: "qkNkMvqxKBE", title: "Wajle Ki Bara", artist: "Natarang", thumbnail: thumb("qkNkMvqxKBE") },
    { videoId: "qcXIDi0ItLE", title: "Zingaat", artist: "Sairat", thumbnail: thumb("qcXIDi0ItLE") },
  ],
  focused: [
    { videoId: "BddP6PYo2gs", title: "Yad Lagla", artist: "Sairat", thumbnail: thumb("BddP6PYo2gs") },
    { videoId: "h2ASQ3i4o-w", title: "Mala Ved Lagale", artist: "MPM", thumbnail: thumb("h2ASQ3i4o-w") },
    { videoId: "5Pp7Bcyhc5o", title: "Sairat Zaala Ji", artist: "Sairat", thumbnail: thumb("5Pp7Bcyhc5o") },
    { videoId: "0xmPvwZkRTQ", title: "Apsara Aali", artist: "Natarang", thumbnail: thumb("0xmPvwZkRTQ") },
    { videoId: "qkNkMvqxKBE", title: "Wajle Ki Bara", artist: "Natarang", thumbnail: thumb("qkNkMvqxKBE") },
    { videoId: "qcXIDi0ItLE", title: "Zingaat", artist: "Sairat", thumbnail: thumb("qcXIDi0ItLE") },
  ],
  energetic: [
    { videoId: "qcXIDi0ItLE", title: "Zingaat", artist: "Sairat", thumbnail: thumb("qcXIDi0ItLE") },
    { videoId: "0xmPvwZkRTQ", title: "Apsara Aali", artist: "Natarang", thumbnail: thumb("0xmPvwZkRTQ") },
    { videoId: "qkNkMvqxKBE", title: "Wajle Ki Bara", artist: "Natarang", thumbnail: thumb("qkNkMvqxKBE") },
    { videoId: "5Pp7Bcyhc5o", title: "Sairat Zaala Ji", artist: "Sairat", thumbnail: thumb("5Pp7Bcyhc5o") },
    { videoId: "BddP6PYo2gs", title: "Yad Lagla", artist: "Sairat", thumbnail: thumb("BddP6PYo2gs") },
    { videoId: "h2ASQ3i4o-w", title: "Mala Ved Lagale", artist: "MPM", thumbnail: thumb("h2ASQ3i4o-w") },
  ],
};

const LIBRARY: Record<LanguageKey, Record<MoodKey, Track[]>> = {
  english: ENGLISH,
  hindi: HINDI,
  bengali: BENGALI,
  tamil: TAMIL,
  punjabi: PUNJABI,
  telugu: TELUGU,
  marathi: MARATHI,
};

export function getPlaylist(mood: string, language: LanguageKey = "english"): Track[] {
  const moodKey = inferMoodKey(mood);
  const set = LIBRARY[language] || ENGLISH;
  return [...set[moodKey]].sort(() => Math.random() - 0.5);
}

export function inferMoodKey(mood: string): MoodKey {
  const k = mood.toLowerCase();
  if (k === "happy" || k === "sad" || k === "stressed" || k === "relaxed" || k === "focused" || k === "energetic") {
    return k;
  }
  if (/calm|chill|peace|sleep/.test(k)) return "relaxed";
  if (/work|study|code|deep/.test(k)) return "focused";
  if (/run|gym|hype|party/.test(k)) return "energetic";
  if (/down|blue|cry|lonely/.test(k)) return "sad";
  if (/anx|tense|overwhelm|tired/.test(k)) return "stressed";
  return "happy";
}
