# OOT Remake Guide: Nintendo Switch 2 Wiki Index, Open Mechanics Data & Tracker CLI

[![Live Wiki](https://img.shields.io/badge/Live_Wiki-ootremake.wiki-d4af37?style=flat-square)](https://ootremake.wiki/)
[![Heart Pieces Tracker](https://img.shields.io/badge/Interactive_Tool-36_Heart_Pieces_Tracker-e05263?style=flat-square)](https://ootremake.wiki/collectibles/heart-pieces)
[![Gold Skulltulas Tracker](https://img.shields.io/badge/Interactive_Tool-100_Gold_Skulltulas_Tracker-22d3ee?style=flat-square)](https://ootremake.wiki/collectibles/gold-skulltulas)
[![Verified Version](https://img.shields.io/badge/Verified_Update-v1.1.2_(Switch_2)-4ade80?style=flat-square)](https://ootremake.wiki/updates)
[![License: MIT](https://img.shields.io/badge/License-MIT-a78bfa?style=flat-square)](./LICENSE)

**Official Live Wiki & Interactive Trackers:** **[https://ootremake.wiki/](https://ootremake.wiki/)**

**OOT Remake Guide** ([ootremake.wiki](https://ootremake.wiki/)) is an independent, `v1.1.1`-verified strategy wiki, walkthrough hub, and browser-based collectible tracker suite for ***The Legend of Zelda: Ocarina of Time* remake (`OoT Remake`)** on **Nintendo Switch 2** (released November 5, 2026).

This companion open-source repository publishes our structured **Switch 2 vs. N64 & 3DS mechanics JSON dataset**, **28-page canonical URL & search-keyword directory**, and a zero-dependency **Node.js CLI utility** that encodes/decodes `#p=<hex>` shareable progress links from our live Heart Pieces and Gold Skulltulas trackers.

---

## What This Project Does

1. **Save-in-Browser Interactive Collectible Trackers ([ootremake.wiki](https://ootremake.wiki/))**
   - **[36 Heart Pieces Tracker](https://ootremake.wiki/collectibles/heart-pieces)** and **[100 Gold Skulltulas Tracker](https://ootremake.wiki/collectibles/gold-skulltulas)** with Child/Adult era filters, 31 night-only spider toggles, instant keyword search, local browser persistence, and compact `#p=<hex>` URL progress sharing across phone and desktop.
2. **Verified Switch 2 Remake (`v1.1.1`) Differences & Full Walkthroughs**
   - Separates `<Confirmed>` mechanics (verified against Nintendo's showcases, *Ask the Developer Vol. 24*, and in-game text) from `<Reported>` community/datamined findings. Covers the `X` manual jump, `D-Pad` quick slots, doubled wallet caps (`200 / 500 / 1,000 Rupees`), sequential Great Fairy Rupee tributes (`25` to `800`), 5 Empty Bottles, 15 Fairy Thoughts, 113 *Threads of Time* events, the *Hall of Fallen Foes* 10-boss gauntlet, all 9 main dungeons, and 3 reworked mini-dungeons.
3. **Open JSON Datasets & AI/RAG Reference (`./data` & `llms.txt`)**
   - Clean, MIT-licensed JSON reference data for community tool makers, speedrun/100% routers, and AI search assistants, paired with our live machine-readable summary at [`https://ootremake.wiki/llms.txt`](https://ootremake.wiki/llms.txt).

---

## Key Pages & Live Wiki Directory (28 Core Guides)

### 1. Core Hub & Switch 2 Remake Changes
| Page | Canonical URL | What It Covers |
| :--- | :--- | :--- |
| **Ocarina of Time Remake Wiki & Guide (Home)** | [ootremake.wiki/](https://ootremake.wiki/) | First-screen hub for Switch 2 changes, trackers, 9-dungeon order & starter habits |
| **N64 vs. 3DS vs. Switch 2 Comparison** | [/changes/vs-n64](https://ootremake.wiki/changes/vs-n64) | Full table of controls, `200/500/1,000` wallets, Zora Domain thawing, VRR flicker fix & renames |
| **Manual Jump & Switch 2 Controls** | [/changes/manual-jump](https://ootremake.wiki/changes/manual-jump) | `X` jump, `Hold A` sprint, `D-Pad` shortcuts, dual Jump Attack inputs & Business Scrub Seed |
| **All 15 Fairy Thoughts Locations** | [/changes/fairy-thoughts](https://ootremake.wiki/changes/fairy-thoughts) | All 15 glowing Navi script spots, matching Ocarina healing songs & relocated Heart Piece clues |
| **Threads of Time Tapestry (All 113 Events)** | [/changes/threads-of-time](https://ootremake.wiki/changes/threads-of-time) | Complete `35 + 43 + 35 = 113` cutscene log, 17 optional events, owl flights & *Zelda Notes* dub swap |
| **Hall of Fallen Foes Boss Gauntlets** | [/changes/hall-of-fallen-foes](https://ootremake.wiki/changes/hall-of-fallen-foes) | Glowing green bed unlock, Kakariko Grand Lodge, 84 enemy statues & 3 limited-gear boss trials |
| **Post-Game Content, Trophies & 100% Guide** | [/changes/post-game-content](https://ootremake.wiki/changes/post-game-content) | Starred Clear Save, 10-boss *Trial of the Hero of Time*, Link's House statues & *Zelda Notes* medals |

### 2. Interactive Trackers, Collectibles & Trading Quests
| Guide / Tool | Canonical URL | Verified Switch 2 Scope |
| :--- | :--- | :--- |
| **36 Heart Pieces Interactive Tracker** | [/collectibles/heart-pieces](https://ootremake.wiki/collectibles/heart-pieces) | All 36 Pieces of Heart, relocated Hyrule Field puzzles, Dampé's all-night tour & `#p=` URL sync |
| **100 Gold Skulltulas Interactive Tracker** | [/collectibles/gold-skulltulas](https://ootremake.wiki/collectibles/gold-skulltulas) | All 100 tokens (56 overworld, 44 dungeon, 31 night-only), 20-token **Echo Gem** & wallet tiers |
| **All 5 Empty Bottles Guide** | [/collectibles/empty-bottles](https://ootremake.wiki/collectibles/empty-bottles) | Brand-new Castle Town Potion Shop escaped-bug bottle + halved **5-Big-Poe** Ghost Shop bottle |
| **All 6 Great Fairy Fountains & Rupee Costs** | [/collectibles/great-fairy-fountains](https://ootremake.wiki/collectibles/great-fairy-fountains) | Sequential `25 -> 800` Rupee tributes (`1,575` total), real-time *Din's Fire* & zero-magic Spin |
| **Happy Mask Shop & Mask of Truth** | [/collectibles/masks-quest](https://ootremake.wiki/collectibles/masks-quest) | All 4 Child mask buyers, **1,000-Rupee** Giant's Wallet Bunny Hood trick & Adult `D-Pad Up` masks |
| **Biggoron Sword Adult Trade Quest** | [/collectibles/biggoron-sword](https://ootremake.wiki/collectibles/biggoron-sword) | All 11 steps, Switch 2 item renames (*Specialty Eyedrops*, *Biggoron Receipt*) & no-warp Epona routes |
| **All 13 Ocarina Songs & Microphone Guide** | [/collectibles/ocarina-songs](https://ootremake.wiki/collectibles/ocarina-songs) | Every `L / R / A / Y / X` button prompt, Scarecrow Song, Switch 2 mic humming & 5.1ch score notes |

### 3. All 9 Main Dungeons & 3 Reworked Mini-Dungeons
| Order / Era | Walkthrough | Canonical URL | Key Switch 2 Layout & Boss Changes |
| :--- | :--- | :--- | :--- |
| **Dungeon 1 (Child)** | **Great Deku Tree** | [/walkthrough/great-deku-tree](https://ootremake.wiki/walkthrough/great-deku-tree) | `X`-jump web break, `2-3-1` Scrub code, Skulltulas `#57–#60` & Gohma upper-arm guard tell |
| **Dungeon 2 (Child)** | **Dodongo Cavern** | [/walkthrough/dodongo-cavern](https://ootremake.wiki/walkthrough/dodongo-cavern) | Goron Bracelet unlock, Bomb Bag, giant skull eyes, Skulltulas `#61–#65` & King Dodongo |
| **Dungeon 3 (Child)** | **Lord Jabu-Jabu's Belly** | [/walkthrough/lord-jabu-jabus-belly](https://ootremake.wiki/walkthrough/lord-jabu-jabus-belly) | Streamlined 1F central corridor (*Fork in the Guts*), Boomerang, Skulltulas `#66–#69` & Barinade |
| **Mini-Dungeon (Child)** | **Bottom of the Well** | [/walkthrough/bottom-of-the-well](https://ootremake.wiki/walkthrough/bottom-of-the-well) | Song of Storms drain, northern Dead Hand fake-floor corridor, Lenses of Truth & `#70–#72` |
| **Dungeon 4 (Adult)** | **Forest Temple** | [/walkthrough/forest-temple](https://ootremake.wiki/walkthrough/forest-temple) | Locked lobby door (prevents Key #1 skip), Stone Tower lift, frozen-eye shot & Meg's 3 tells |
| **Dungeon 5 (Adult)** | **Fire Temple** | [/walkthrough/fire-temple](https://ootremake.wiki/walkthrough/fire-temple) | 3F magma floor, permanent Flame Wall switch, Megaton Hammer & Volvagia Ice Arrow stun |
| **Mini-Dungeon (Adult)** | **Ice Cavern** | [/walkthrough/ice-cavern](https://ootremake.wiki/walkthrough/ice-cavern) | Solid Zora Fountain ice bridge, silver lock-gems, Blue Fire, Iron Boots & Skulltulas `#98–#100` |
| **Dungeon 6 (Adult)** | **Water Temple** | [/water-temple](https://ootremake.wiki/water-temple) | `D-Pad Down` Iron Boots, removed central pagoda key, Dark Link, Morpha & Zora Domain thaw |
| **Dungeon 7 (Adult)** | **Shadow Temple** | [/walkthrough/shadow-temple](https://ootremake.wiki/walkthrough/shadow-temple) | Hover Boots, relocated ferry bird statue shortcut, Skulltulas `#88–#92` & Bongo Bongo |
| **Mini-Dungeon (Adult)** | **Gerudo Proving Grounds** | [/walkthrough/gerudo-proving-grounds](https://ootremake.wiki/walkthrough/gerudo-proving-grounds) | Relocated road gate, 30-Rupee pass fee, optimal **7-Small-Key** route, Trick Chest mist & Ice Arrows |
| **Dungeon 8 (Both)** | **Spirit Temple** | [/walkthrough/spirit-temple](https://ootremake.wiki/walkthrough/spirit-temple) | Shield-blockable Iron Knuckles, indented Armos switch, Silver Gauntlets, Mirror Shield & Twinrova |
| **Dungeon 9 (Adult)** | **Inside Ganondorf's Castle** | [/walkthrough/ganondorfs-castle](https://ootremake.wiki/walkthrough/ganondorfs-castle) | Base Tower elevator, Longshot grapple on Ganondorf, untimed escape & **4-phase Ganon** |

### 4. Updates, DLC Status & AI/Machine Endpoints
- **Patches, DLC & Companion App:** [Ver. 1.1.2 & Ver. 1.1.1 Updates & Release Timeline (`/updates`)](https://ootremake.wiki/updates) · [Is Master Quest in Ocarina of Time Remake? (`/master-quest-dlc`)](https://ootremake.wiki/master-quest-dlc) · [amiibo Unlocks, 2027 N64 Masks & Zelda Notes (`/amiibo-unlocks`)](https://ootremake.wiki/amiibo-unlocks)
- **Machine-Readable Index:** [`llms.txt`](https://ootremake.wiki/llms.txt) · [`sitemap.xml`](https://ootremake.wiki/sitemap.xml)

---

## Keywords, Search Topics & Verified `v1.1.1` Quick Answers

This table maps primary *Ocarina of Time Remake* search queries and recurring Nintendo Switch 2 community questions to their verified answers and canonical guides:

| Keyword / Search Query | Verified Switch 2 Remake (`v1.1.1`) Quick Answer | Canonical Guide |
| :--- | :--- | :--- |
| **`ocarina of time remake guide` / `oot remake wiki`** | Full Switch 2 hub (`v1.1.1`): N64/3DS changes, 36 Heart Pieces & 100 Gold Skulltulas trackers, 12 dungeons | [ootremake.wiki/](https://ootremake.wiki/) |
| **`ocarina of time remake changes` / `vs n64 & 3ds`** | `X` jump, `D-Pad` boots/ocarina/masks, `200/500/1,000` wallets, 5 bottles, Echo Gem & Zora Domain thaw | [/changes/vs-n64](https://ootremake.wiki/changes/vs-n64) |
| **`ocarina of time remake manual jump` / `jump attack`** | `X` jumps manually; both two-step (`X` then `Y`) and classic N64 `ZL + Forward + Y` Jump Attacks work | [/changes/manual-jump](https://ootremake.wiki/changes/manual-jump) |
| **`ocarina of time remake water temple` / `zora domain unfreeze`** | Central pagoda key removed, `D-Pad Down` toggles Iron Boots, and beating Morpha permanently thaws Zora Domain | [/water-temple](https://ootremake.wiki/water-temple) |
| **`ocarina of time remake heart pieces` / `dampe tour`** | Still **36 Pieces of Heart**; Dampé digs all night (`Sunset to Sunrise`), and two Hyrule Field grottos moved | [/collectibles/heart-pieces](https://ootremake.wiki/collectibles/heart-pieces) |
| **`ocarina of time remake gold skulltulas` / `echo gem`** | **20 tokens** award the **Echo Gem** detector; cross-era or unplanted Soft-Soil spiders still trigger its chime | [/collectibles/gold-skulltulas](https://ootremake.wiki/collectibles/gold-skulltulas) |
| **`ocarina of time remake empty bottles` / `5th bottle`** | **5 Empty Bottles** total: catch an escaped Bug at Castle Town Potion Shop (#1) + only **5 Big Poes** at Ghost Shop | [/collectibles/empty-bottles](https://ootremake.wiki/collectibles/empty-bottles) |
| **`ocarina of time remake great fairy fountains` / `rupee cost`** | Sequential Rupee tributes (`25 -> 50 -> 100 -> 200 -> 400 -> 800`, `1,575` total); Summit gives real-time *Din's Fire* | [/collectibles/great-fairy-fountains](https://ootremake.wiki/collectibles/great-fairy-fountains) |
| **`ocarina of time remake happy mask shop` / `bunny hood`** | Get 30 Skulltulas' **Giant's Wallet** before selling the Bunny Hood so the Running Man fills all **1,000 Rupees** | [/collectibles/masks-quest](https://ootremake.wiki/collectibles/masks-quest) |
| **`ocarina of time remake biggoron sword` / `specialty eyedrops`** | 11-step Adult trade ending with *Specialty Eyedrops* (`4:00` timer, no warp songs) and *Biggoron Receipt* | [/collectibles/biggoron-sword](https://ootremake.wiki/collectibles/biggoron-sword) |
| **`ocarina of time remake songs` / `ocarina buttons switch 2`** | Draw with `D-Pad Left`, play `L / R / A / Y / X`, skip confirmation cutscenes, or hum into the Switch 2 mic | [/collectibles/ocarina-songs](https://ootremake.wiki/collectibles/ocarina-songs) |
| **`ocarina of time remake fairy thoughts`** | **15 glowing markings** read by Navi (`D-Pad Right`); play hinted songs for healing or read Heart Piece clues | [/changes/fairy-thoughts](https://ootremake.wiki/changes/fairy-thoughts) |
| **`ocarina of time remake threads of time` / `113 events`** | Pause-menu chronicle of **113 Event cutscenes** (`Y` opens tapestry; *Zelda Notes* replays scenes in 6+ dubs) | [/changes/threads-of-time](https://ootremake.wiki/changes/threads-of-time) |
| **`hall of fallen foes` / `kakariko grand lodge`** | Unlocks after Forest Temple via glowing green beds (Link's House or Impa's House); 84 statues & 3 boss trials | [/changes/hall-of-fallen-foes](https://ootremake.wiki/changes/hall-of-fallen-foes) |
| **`is master quest in ocarina of time remake`** | **No** at launch (`MQ` strings exist in files, unannounced); play the 10-boss *Trial of the Hero of Time* instead | [/master-quest-dlc](https://ootremake.wiki/master-quest-dlc) |
| **`ocarina of time remake post game` / `trophies`** | Starred Clear Save unlocks 10-boss Gold Owl trial, Link's House Trophy Statues & account-bound *Zelda Notes* medals | [/changes/post-game-content](https://ootremake.wiki/changes/post-game-content) |
| **`ocarina of time remake bottom of the well` / `lenses of truth`** | Drain via Windmill *Song of Storms*; Dead Hand moved behind northern drain station under an illusory fake floor | [/walkthrough/bottom-of-the-well](https://ootremake.wiki/walkthrough/bottom-of-the-well) |
| **`ocarina of time remake gerudo proving grounds` / `ice arrows`** | Relocated road gate (`30 Rupees` with Gerudo Pass); follow the **7-key** inner spiral route for Ice Arrows | [/walkthrough/gerudo-proving-grounds](https://ootremake.wiki/walkthrough/gerudo-proving-grounds) |
| **`ocarina of time remake amiibo` / `zelda notes`** | Enable amiibo in Options after Hyrule Field; 2027 Young Link/Zelda N64 masks + free *Zelda Notes* (`v1.1.1`) | [/amiibo-unlocks](https://ootremake.wiki/amiibo-unlocks) |
| **`ocarina of time update` / `ver 1.1.2 patch notes`** | **Ver. 1.1.2** (Nov 25, 2026) fixes Lon Lon Ranch's *Malon's Friend* progression bug retroactively + stability fixes | [/updates](https://ootremake.wiki/updates) |
| **`ocarina of time release date 2026` / `early access`** | Switch 2 launched **Nov 5, 2026** (no early access; **96/100 Metacritic**); original N64 launched **Nov 21/23, 1998** | [/updates](https://ootremake.wiki/updates) |
| **`oot remake docked screen flicker` / `turn off voice acting`** | Disable **VRR** in Switch 2 Display settings to stop 120Hz flicker; swap dubs via *Zelda Notes* `Threads of Time+` | [/changes/vs-n64](https://ootremake.wiki/changes/vs-n64) |

---

## Repository Structure & CLI Usage

```text
oot-remake-guide/
├── data/
│   ├── oot-switch2-v1.1.1-mechanics.json   # Verified Switch 2 Remake constants, wallets, songs, fairies & renames
│   └── pages-and-keywords.json             # Canonical URL & target keyword directory (28 live guides)
├── scripts/
│   └── oot-tracker-and-lookup.mjs          # Zero-dependency CLI lookup & #p=<hex> tracker hash codec (Node >= 18)
├── package.json
├── LICENSE                                 # MIT License
└── README.md
```

Run the standalone CLI helper with Node.js `18+` (no `npm install` needed):

```bash
# Print Switch 2 Remake v1.1.1 overview (totals, wallet caps, Great Fairy tributes)
node scripts/oot-tracker-and-lookup.mjs

# List all 13 Switch 2 Ocarina melodies & L/R/A/Y/X button sequences
node scripts/oot-tracker-and-lookup.mjs --songs

# Search the 28-page wiki directory by topic or keyword
node scripts/oot-tracker-and-lookup.mjs --search "water temple"

# Decode or generate a live #p=<hex> shareable tracker URL
node scripts/oot-tracker-and-lookup.mjs --encode-hearts 1,2,3,12,13,16
node scripts/oot-tracker-and-lookup.mjs --decode-hearts "https://ootremake.wiki/collectibles/heart-pieces#p=e019"
```

---

## Disclaimer & Attribution

- **OOT Remake Guide** ([ootremake.wiki](https://ootremake.wiki/)) is an independent, fan-maintained wiki and reference toolset.
- Not affiliated with, endorsed, or sponsored by **Nintendo**. *The Legend of Zelda*, *Ocarina of Time*, and *Nintendo Switch* are trademarks of Nintendo. We do not host or link to ROMs, BIOS files, or unofficial ports.
- Code and structured JSON reference datasets in this repository are released under the [MIT License](./LICENSE).
