import { mkdirSync, writeFileSync } from "node:fs";

// The text: a still night over a dark field — stars turning slowly,
// an owl, silence answering. It relaxes by showing the scene, never
// by instructing the reader. The last sentence is the release: a night
// so wide it holds everything and asks for nothing in return — the
// dwarfing image the text keeps growing after the last line.
const text = `The stars turned above the dark field, slow as a mill wheel, and the grass did not stir. An owl called once, and the silence answered. The night was wide enough for everything, and it asked for nothing.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
