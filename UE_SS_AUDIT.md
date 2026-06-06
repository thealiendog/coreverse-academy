# UE Social Studies Audit — 2026-05-21

## Files found

Pattern search for `social_studies_upper_explorer_*`, `social_studies_upper_explorers_*`, `social_studies_ue_*`:
→ **0 matches**

Broader search for any UE Social Studies content:
→ **1 file found:** `src/data/ss_upperexplorers.js`

This file exports `ssUpperExplorers` — a flat array of 20 lesson objects. It is the legacy-format UE Social Studies content and is the subject of this audit.

---

## Critical pre-audit finding: wrong data shape

Every violation below is compounded by a root structural issue: **`ss_upperexplorers.js` uses a completely different data schema from the UE Calibration Spec v1.** The file exports a flat array of plain lesson objects. The new spec requires a nested object with `{ ageBand, subjectId, guide, lessons: [{ id, title, duration, xpReward, badge, badgeName, screens: [...] }] }`.

Fields **present** in this file that do not exist in the new spec:
`hook`, `bigIdea`, `sections[]`, `activity`, `familyAdventure`, `badge` (plain string), `nextLesson`

Fields **required by the new spec** that are **entirely absent** from this file:
`ageBand`, `subjectId`, `xpReward`, `screens[]`, `welcome screen`, `magazine screens` (with `vocab[]` + `audioPrompt`), `interactive screen` (with `format`, `buckets[]`, `items[]`), `quiz screen` (with `correctIndex`, `explanation`, `id` per question), `reflection screen`, `real-world screen` (with `creativePrompt` object), `celebration screen`

This means **all 20 lessons require a full structural rewrite.** The content (topics, depth, writing quality) is largely reusable — but the data architecture must be rebuilt from scratch.

---

## Per-lesson findings

### L01 — Principles of Government: Types and Functions
- **Violations: 13**
- **Critical:**
  - No `screens[]` array — entire data shape is wrong
  - No `interactive` screen; `activity` field used instead (no `format`, no `buckets`, no `items[]`)
  - Magazine sections: **4** (spec: 6–8)
  - Quiz questions: **5** (spec: 8–10); quiz items use `answer` + `options[]` instead of `correctIndex` + `explanation`
  - No `vocab[]` arrays in any section
  - No `audioPrompt` fields anywhere
  - `creativePrompt` missing — `familyAdventure` is a top-level field, not inside a screen
  - No `reflection` screen
  - No `welcome` screen
  - No `celebration` screen
  - `duration: "15-20 min"` (string, not number; spec: 20–30 as integer)
  - `xpReward` field absent
  - `ageBand`, `subjectId` absent
- **Warnings:**
  - Avg sentence length: 12.9 words ✓ (within 10–18 range)
  - No silly distractors detected
  - Content depth and terminology are appropriate for UE (social contract, federalism, tyranny used correctly)
- **Estimated rewrite effort: FULL REWRITE**

---

### L02 — The US Constitution: Structure, Powers, and Rights
- **Violations: 13**
- **Critical:** (same structural set as L01 — see above)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 12.3 words ✓
  - No silly distractors
  - Content is strong — federalism, separation of powers, checks and balances, amendment process all treated correctly
- **Estimated rewrite effort: FULL REWRITE**

---

### L03 — The Bill of Rights in Daily Life
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: **18.1 words** — borderline (spec flags >22; this is at the top edge of the 10–18 target range; monitor in rewrite)
  - No silly distractors
  - Content quality is high; First through Eighth Amendment coverage is concrete and well-grounded
- **Estimated rewrite effort: FULL REWRITE**

---

### L04 — The Three Branches of Government
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 14.4 words ✓
  - No silly distractors
  - Solid content; judicial review and Marbury v. Madison correctly cited
- **Estimated rewrite effort: FULL REWRITE**

---

### L05 — State and Local Government
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 15.8 words ✓
  - No silly distractors
  - Content is practical and well-targeted at UE age band
- **Estimated rewrite effort: FULL REWRITE**

---

### L06 — Civic Participation: Elections and Voting
- **Violations: 13 + 1 distractor**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
  - **Silly distractor:** Quiz Q on Electoral College includes option "A college where politicians study" — not a plausible misconception for UE learners
- **Warnings:**
  - Avg sentence length: 10.3 words ✓
  - Otherwise good content; Electoral College, primary vs general elections treated correctly
- **Estimated rewrite effort: FULL REWRITE**

---

### L07 — The US Economy: Free Enterprise and Markets
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 13.0 words ✓
  - No silly distractors
  - Equilibrium price, profit motive, invisible hand correctly introduced at appropriate depth
- **Estimated rewrite effort: FULL REWRITE**

---

### L08 — Economic Systems: Market, Command, and Mixed
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 11.2 words ✓
  - No silly distractors
  - Three economic questions framework is correctly applied; examples (Soviet Union, North Korea, Sweden, China) are age-appropriate
- **Estimated rewrite effort: FULL REWRITE**

---

### L09 — Personal Finance: Earning, Saving, and Spending
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 12.2 words ✓
  - No silly distractors
  - Compound interest, emergency fund, impulse purchase correctly defined; strong practical content for UE
- **Estimated rewrite effort: FULL REWRITE**

---

### L10 — World Geography: Physical Features and Climate Regions
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 11.0 words ✓
  - No silly distractors
  - Physical geography and climate region content is accurate and engaging
- **Estimated rewrite effort: FULL REWRITE**

---

### L11 — World Geography: Human Geography and Migration
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 12.2 words ✓
  - No silly distractors
  - Push/pull factors and cultural diffusion correctly introduced; contemporary migration examples are well-chosen
- **Estimated rewrite effort: FULL REWRITE**

---

### L12 — World Cultures: Understanding Global Diversity
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 15.8 words ✓
  - No silly distractors
  - Cultural competence framing is strong; ~7,000 languages factoid is accurate
- **Estimated rewrite effort: FULL REWRITE**

---

### L13 — Industrialization and Colonialism in World History
- **Violations: 13 + 1 distractor**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
  - **Borderline distractor:** Quiz Q on colonial motivations includes "They were invited by colonized peoples" — verges on silly for UE learners who should know better; recommend replacing with a more plausible misconception (e.g., "Primarily to spread democratic governance")
- **Warnings:**
  - Avg sentence length: 12.6 words ✓
  - Content is substantive and appropriately critical; Belgian Congo and British India famines explicitly named
- **Estimated rewrite effort: FULL REWRITE**

---

### L14 — World Wars in Global Perspective
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 13.0 words ✓
  - No silly distractors
  - Non-Eurocentric framing (colonial troops, Pacific, Middle East consequences) is excellent for UE
- **Estimated rewrite effort: FULL REWRITE**

---

### L15 — The Cold War: Ideology and Geopolitics
- **Violations: 13 + 2 distractors**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
  - **Silly distractor 1:** Quiz Q on proxy wars includes "Wars fought by computers" — not a plausible UE misconception
  - **Silly distractor 2:** Quiz Q on proxy wars includes "Wars that were pretend and not real" — similarly implausible
- **Warnings:**
  - Avg sentence length: 11.7 words ✓
  - Otherwise strong content; McCarthyism, Cuban Missile Crisis, Iron Curtain correctly referenced
- **Estimated rewrite effort: FULL REWRITE**

---

### L16 — Globalization: The Connected World
- **Violations: 13 + 1 distractor**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
  - **Silly distractor:** Quiz Q on cultural homogenization includes "A type of milk processing" — obviously wrong, not a plausible UE misconception
- **Warnings:**
  - Avg sentence length: 11.2 words ✓
  - Digital divide, cultural homogenization vs enrichment framing is age-appropriate and balanced
- **Estimated rewrite effort: FULL REWRITE**

---

### L17 — Human Rights: Universal Principles and Challenges
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 11.0 words ✓
  - No silly distractors
  - UDHR article count (30), adoption date (Dec 10, 1948), and universal/inalienable/indivisible triad all accurate
- **Estimated rewrite effort: FULL REWRITE**

---

### L18 — Environmental Geography: Resources and Sustainability
- **Violations: 13 + 1 distractor**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
  - **Silly distractor:** Quiz Q on ecological footprint includes "A type of hiking boot" — obvious non-answer for UE learners
- **Warnings:**
  - Avg sentence length: 14.1 words ✓
  - Strong data points (70% overshoot, 8M tons plastic/year, 13M acres deforestation/year) appropriate for UE depth
- **Estimated rewrite effort: FULL REWRITE**

---

### L19 — Current Events: Understanding Today's World
- **Violations: 13**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
- **Warnings:**
  - Avg sentence length: 11.7 words ✓
  - No silly distractors
  - Fact vs opinion framework is cleanly taught; media literacy content is strong
- **Estimated rewrite effort: FULL REWRITE**

---

### L20 — Civic Responsibility: Your Role as a Citizen (CAPSTONE)
- **Violations: 13 + 2 distractors**
- **Critical:** (same structural set as L01)
  - 4 sections, 5 quiz questions, no screens[], no audioPrompt, no vocab, no interactive, no reflection, no celebration, duration string, no xpReward
  - **Capstone metadata missing:** No elevated `duration` (spec: 25–30 for capstone), no elevated `xpReward` (spec: 100+), no capstone badge variant
  - **Silly distractor 1:** Quiz Q on "social fabric" includes "A type of cloth used in government buildings" — plays on the literal word "fabric"; not plausible for UE
  - **Silly distractor 2:** Quiz Q on future citizens includes "Only if their parents are also engaged" — implausible distractor
- **Warnings:**
  - Avg sentence length: 12.9 words ✓
  - Capstone content is thematically appropriate — civic duties vs voluntary responsibilities is correctly distinguished
  - Atlas sign-off exists in spirit ("Atlas the Bear is immensely proud") but not in the new celebration screen format
- **Estimated rewrite effort: FULL REWRITE**

---

## Summary stats

| Metric | Count |
|--------|-------|
| Total files audited | 1 (`ss_upperexplorers.js`) |
| Total lessons in file | 20 |
| Files needing FULL REWRITE | 20 / 20 |
| Files needing HEAVY rewrite | 0 |
| Files needing MEDIUM rewrite | 0 |
| Files needing LIGHT touch | 0 |

### Violation frequency across all 20 lessons

| Violation | Lessons affected |
|-----------|-----------------|
| Missing `screens[]` array — wrong data shape | 20 / 20 |
| Missing `interactive` screen + `format: drag-identify` | 20 / 20 |
| Missing `audioPrompt` fields | 20 / 20 |
| Missing `vocab[]` in magazine sections | 20 / 20 |
| Magazine sections = 4 (spec: 6–8) | 20 / 20 |
| Quiz questions = 5 (spec: 8–10) | 20 / 20 |
| Quiz items missing `correctIndex` + `explanation` | 20 / 20 |
| `creativePrompt` absent (object format required) | 20 / 20 |
| Missing `reflection` screen | 20 / 20 |
| Missing `welcome` + `celebration` screens | 20 / 20 |
| `duration` is string "15-20 min" (spec: integer 20–30) | 20 / 20 |
| `xpReward` absent | 20 / 20 |
| `ageBand` + `subjectId` absent | 20 / 20 |
| Silly quiz distractors | 7 / 20 (L06, L13, L15×2, L16, L18, L20×2) |
| Sentence length out of 10–18 range | 0 / 20 (L03 at 18.1 is borderline) |

**Most common violation:** All 13 structural/schema violations apply to all 20 lessons equally. The single most impactful is the absence of `screens[]` — the entire data architecture must be rebuilt.

### Content quality assessment (reuse potential)

The educational content inside `ss_upperexplorers.js` is well-written and appropriate for ages 9–10. The following elements can be **directly adapted** into the rewrite rather than written from scratch:

- `hook` text → `welcome.guideText` (with `{name}` substitution added)
- `sections[].content` → expanded into 6–8 `magazine` screens with vocab added
- `quiz[].question` + `quiz[].options` → reworked into 8–10 quiz items with `correctIndex` + `explanation`
- `familyAdventure` text → `real-world.familyAdventure`
- `activity.instructions` → `real-world.creativePrompt.intro` + floor/stretch/open tiers

Estimated content reuse rate: **~60–70%** — structure rebuild, content adaptation.

### Capstone note (L20)
L20 requires elevated metadata in addition to the full structural rewrite:
- `duration: 25` (or 30)
- `xpReward: 100`
- Badge: `social-studies-graduate` (or equivalent capstone badge slug)
- Celebration message should explicitly echo L01 concepts (civic responsibility → L01 government principles) as a thematic bookend
