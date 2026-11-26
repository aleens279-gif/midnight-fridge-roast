// Midnight Fridge Roast — writes one line to /output/entry.txt
// Gate: 133 chars (max 200), one line, no trailing newline.
// Joke: four trips to the fridge, only light and regret.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "At 3 a.m. the fridge hums",
  "like it is judging me, and",
  "honestly it should: I opened",
  "it four times and all I found",
  "was light and regret.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
