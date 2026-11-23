import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The moon called in sick tonight, so the tides are covering its shift.";

if (LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error("line must be 1-240 characters");
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
