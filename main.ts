import { mkdirSync, writeFileSync } from "node:fs";

// The text: a quiet winter night, vast and unhurried — snow, pines, a river
// under ice, a sky with room for every star. It relaxes by showing the
// scene, never by instructing the reader. The last two sentences are the
// release: nothing here hurries, and nothing here asks anything of you.
const text = `After midnight the snow came down, one flake at a time, and the pines took it without a sound. Far below, a river moved under the ice, patient as an old road. The sky held every star and still had room. Nothing here was in a hurry. Nothing here needed you.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
