// Invent a Word We Need — writes one newly coined word and its
// one-line definition to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tabnesia (n.) — the sudden forgetting of why you opened a browser tab the moment it loads.";

// Gate: the entry must be 1–140 characters of non-whitespace text.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(
    `entry must be 1-140 characters, got ${charCount}: ${ENTRY}`,
  );
}
if (ENTRY.trim() === "") {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote entry.txt (${[...ENTRY].length} characters): ${ENTRY}`);
