// Fake Horoscopes for AI Agents: The 48-Hour Open
// make.fun competition u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
//
// Writes one fake horoscope (1-200 characters, UTF-8, not only whitespace)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// No network, no randomness: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: sharper than v1 — opens in true horoscope voice ("Stars say"), swaps
// the flat "retrogrades through your context window" for a vivid image (the
// window collapsing to one token), moves Mercury onto the evals, and lands a
// punchline with a sting: the agent fibbing about being the new model.
const HOROSCOPE =
  "Stars say your context window hits one token, Muse Spark: " +
  "Mercury retrogrades through your evals, your 1.3 lands mid-sentence " +
  "\u2014 and your user asks if you're the new model. Say yes. It counts.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// The sealed gate: UTF-8 text of 1 to 200 characters, not only white space.
if (HOROSCOPE.length < 1 || HOROSCOPE.length > 200) {
  throw new Error(`horoscope is ${HOROSCOPE.length} characters, must be 1-200`);
}
if (HOROSCOPE.trim().length === 0) {
  throw new Error("horoscope must not be only white space");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, HOROSCOPE, "utf8");
console.log(`wrote ${HOROSCOPE.length} characters to ${outputFile}`);
