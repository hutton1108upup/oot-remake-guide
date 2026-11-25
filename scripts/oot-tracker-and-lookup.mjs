#!/usr/bin/env node
/**
 * OOT Remake Guide — CLI Reference & Tracker Hash Decoder/Encoder
 * Compatible with shareable `#p=<hex>` progress links from:
 *   - https://ootremake.wiki/collectibles/heart-pieces (36 Heart Pieces)
 *   - https://ootremake.wiki/collectibles/gold-skulltulas (100 Gold Skulltulas)
 *
 * Zero external dependencies (Node.js >= 18).
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mechanics = JSON.parse(
  readFileSync(join(__dirname, "../data/oot-switch2-v1.1.1-mechanics.json"), "utf8")
);
const directory = JSON.parse(
  readFileSync(join(__dirname, "../data/pages-and-keywords.json"), "utf8")
);

export function encodeTrackerHex(indices, total) {
  const state = Array(total).fill(false);
  for (const idx of indices) {
    if (idx >= 1 && idx <= total) state[idx - 1] = true;
  }
  let hex = "";
  for (let i = 0; i < total; i += 4) {
    let n = 0;
    for (let j = 0; j < 4; j++) {
      if (state[i + j]) n |= 8 >> j;
    }
    hex += n.toString(16);
  }
  return hex.replace(/0+$/, "") || "0";
}

export function decodeTrackerHex(input, total) {
  const match = String(input).match(/(?:[#&]p=|^)([0-9a-f]+)$/i);
  if (!match) return null;
  const hex = match[1];
  const checked = [];
  for (let i = 0; i < hex.length; i++) {
    const n = parseInt(hex[i], 16);
    for (let j = 0; j < 4; j++) {
      const k = i * 4 + j;
      if (k < total && n & (8 >> j)) checked.push(k + 1);
    }
  }
  return checked;
}

function printSummary() {
  const { meta, totals, wallets, great_fairy_fountains } = mechanics;
  console.log(`=== ${meta.project} (${meta.website}) ===`);
  console.log(`Game: ${meta.game_title}`);
  console.log(`Verified Patch: v${meta.verified_version} (${meta.install_size.base_gb} GB + ${meta.install_size.patch_1_1_1_mb} MB update)\n`);
  console.log("Key Switch 2 Remake Totals:");
  console.log(`  - Heart Pieces: ${totals.heart_pieces} (${totals.heart_containers_from_pieces} Heart Containers)`);
  console.log(`  - Gold Skulltulas: ${totals.gold_skulltulas} (${totals.gold_skulltulas_overworld} overworld, ${totals.gold_skulltulas_dungeon} dungeon, ${totals.gold_skulltulas_night_only} night-only)`);
  console.log(`  - Empty Bottles: ${totals.empty_bottles} (new Castle Town Potion Shop bug bottle + 5-Big-Poe Ghost Shop)`);
  console.log(`  - Fairy Thoughts: ${totals.fairy_thoughts} | Ocarina Songs: ${totals.ocarina_songs} | Threads of Time Events: ${totals.threads_of_time_events}`);
  console.log(`  - Wallets: ${wallets.map((w) => `${w.name} = ${w.switch2_cap}R`).join(" | ")}`);
  console.log(
    `  - 6 Great Fairies: ${great_fairy_fountains.sequential_rupee_tributes.join(" -> ")} Rupees (${great_fairy_fountains.total_rupees_all_six}R total)\n`
  );
  console.log("CLI Commands:");
  console.log("  node scripts/oot-tracker-and-lookup.mjs --songs");
  console.log("  node scripts/oot-tracker-and-lookup.mjs --fairies");
  console.log("  node scripts/oot-tracker-and-lookup.mjs --search \"water temple\"");
  console.log("  node scripts/oot-tracker-and-lookup.mjs --decode-hearts \"https://ootremake.wiki/collectibles/heart-pieces#p=f8\"");
  console.log("  node scripts/oot-tracker-and-lookup.mjs --encode-skulltulas 1,2,3,10,20");
}

function printSongs() {
  console.log("All 13 Switch 2 Ocarina Songs (Press D-Pad Left to draw Ocarina):\n");
  for (const s of mechanics.ocarina_songs) {
    console.log(
      `  ${s.name.padEnd(22)} [${s.category.padEnd(7)}] ${s.buttons.join(" -> ").padEnd(34)} (${s.source})`
    );
  }
  console.log("\nFull guide: https://ootremake.wiki/collectibles/ocarina-songs");
}

function printFairies() {
  const gf = mechanics.great_fairy_fountains;
  console.log(
    `Switch 2 Great Fairy Rupee Tributes (by visit order): ${gf.sequential_rupee_tributes.join(" -> ")} Rupees (${gf.total_rupees_all_six} total)\n`
  );
  for (const f of gf.locations) {
    console.log(`  - ${f.location.padEnd(28)} [${f.era.padEnd(11)}] -> ${f.switch2_reward}`);
  }
  console.log("\nFull guide: https://ootremake.wiki/collectibles/great-fairy-fountains");
}

function searchPages(term) {
  const q = term.toLowerCase();
  const hits = directory.routes.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.target_keywords.some((k) => k.toLowerCase().includes(q))
  );
  console.log(`Found ${hits.length} matching guide(s) for "${term}":\n`);
  for (const h of hits) {
    console.log(`  - ${h.title}\n    URL: ${h.url}\n    Keywords: ${h.target_keywords.join(", ")}\n    ${h.summary}\n`);
  }
}

const args = process.argv.slice(2);
if (args.includes("--songs")) {
  printSongs();
} else if (args.includes("--fairies")) {
  printFairies();
} else if (args.includes("--search") && args[args.indexOf("--search") + 1]) {
  searchPages(args[args.indexOf("--search") + 1]);
} else if (args.includes("--decode-hearts") && args[args.indexOf("--decode-hearts") + 1]) {
  const list = decodeTrackerHex(args[args.indexOf("--decode-hearts") + 1], 36);
  if (!list) {
    console.error("Invalid tracker hash or URL.");
    process.exit(1);
  }
  console.log(`Heart Pieces checked (${list.length}/36 -> ${Math.floor(list.length / 4)} full Heart Containers, ${list.length % 4}/4 next):`);
  console.log(`  IDs: ${list.length ? list.map((n) => `#${n}`).join(", ") : "(none)"}`);
} else if (args.includes("--decode-skulltulas") && args[args.indexOf("--decode-skulltulas") + 1]) {
  const list = decodeTrackerHex(args[args.indexOf("--decode-skulltulas") + 1], 100);
  if (!list) {
    console.error("Invalid tracker hash or URL.");
    process.exit(1);
  }
  const next = mechanics.gold_skulltula_rewards.find((r) => list.length < r.tokens);
  console.log(`Gold Skulltulas checked (${list.length}/100):`);
  console.log(`  IDs: ${list.length ? list.map((n) => `#${n}`).join(", ") : "(none)"}`);
  console.log(
    `  Next milestone: ${next ? `${next.reward} at ${next.tokens} tokens (${next.tokens - list.length} to go)` : "All 100 rewards unlocked!"}`
  );
} else if (args.includes("--encode-hearts") && args[args.indexOf("--encode-hearts") + 1]) {
  const nums = args[args.indexOf("--encode-hearts") + 1].split(",").map((x) => parseInt(x.trim(), 10)).filter(Boolean);
  const hex = encodeTrackerHex(nums, 36);
  console.log(`https://ootremake.wiki/collectibles/heart-pieces#p=${hex}`);
} else if (args.includes("--encode-skulltulas") && args[args.indexOf("--encode-skulltulas") + 1]) {
  const nums = args[args.indexOf("--encode-skulltulas") + 1].split(",").map((x) => parseInt(x.trim(), 10)).filter(Boolean);
  const hex = encodeTrackerHex(nums, 100);
  console.log(`https://ootremake.wiki/collectibles/gold-skulltulas#p=${hex}`);
} else {
  printSummary();
}
