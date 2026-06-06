# UE Math Audit — All Three Math Bands
**Audit date:** 2026-05-23  
**Scope:** `math_littlestars.js`, `math_explorers.js`, `math_upperexplorers.js`  
**Purpose:** Pre-rewrite baseline — do not modify files based on this document

---

## 1. math_littlestars.js (Ages 3–5)

### Lesson Count
**20 lessons** — `math-3-5-01` through `math-3-5-20`

### Lesson Titles
| # | ID | Title |
|---|---|---|
| 1 | math-3-5-01 | Counting 1–10: How Many Are There? |
| 2 | math-3-5-02 | Counting 1–20 and Beyond |
| 3 | math-3-5-03 | Counting to 100: Patterns in Numbers |
| 4 | math-3-5-04 | What Comes Before and After? (Ordering Numbers) |
| 5 | math-3-5-05 | More, Less, or the Same? (Comparing Numbers) |
| 6 | math-3-5-06 | 2D Shapes All Around Us |
| 7 | math-3-5-07 | 3D Shapes: Spheres, Cubes, and Cylinders |
| 8 | math-3-5-08 | Sorting and Classifying Objects |
| 9 | math-3-5-09 | Patterns: What Comes Next? |
| 10 | math-3-5-10 | How Long Is It? Introduction to Measurement |
| 11 | math-3-5-11 | Weight Guessing Game |
| 12 | math-3-5-12 | Pouring Experiments |
| 13 | math-3-5-13 | Making 5 with Fingers |
| 14 | math-3-5-14 | Ten Frame Fun |
| 15 | math-3-5-15 | Cookie Subtraction |
| 16 | math-3-5-16 | Make a Clock |
| 17 | math-3-5-17 | Coin Counting Practice |
| 18 | math-3-5-18 | Story Problem Creator |
| 19 | math-3-5-19 | Math in My Day Journal |
| 20 | math-3-5-20 | Math Olympics (Capstone) |

**Topic clustering:** Counting (L1–5) → Geometry (L6–7) → Logic/Patterns (L8–9) → Measurement (L10–12) → Addition/Subtraction intro (L13–15) → Time/Money (L16–17) → Applied/Capstone (L18–20). Sensible K-level scope progression.

### Data Shape
**LEGACY FORMAT. Does NOT match new UE format.**

Fields present:
```
id, subject, ageGroup, band, guide, guideAnimal, lessonNumber,
title, duration, hook, bigIdea, sections[], activity,
quiz[], familyAdventure, badge, nextLesson, gameSequence[]
```

Fields absent (required for new format):
- `ageBand` — not present
- `subjectId` — not present
- `lessons[]` wrapper — not present
- `screens[]` — not present

The `gameSequence[]` array is LS-specific and does not exist in any other band file.

### Game Mechanics
LS has its own proprietary game screen types via `gameSequence[]`:

| Screen Type | Description | Count (sample) |
|---|---|---|
| `welcome` | Guide greeting with name interpolation | 1 per lesson |
| `story` | Image + guide narration, no interaction | 1–2 per lesson |
| `count-array` | Countable objects displayed; interactive tap or passive | variable |
| `teach` | Image + guide teaching statement, no interaction | 1–2 per lesson |
| `tap-right` | Multiple choice from image grid, single correct answer | 1–3 per lesson |
| `yes-no` | Binary true/false statement | 1–2 per lesson |
| `sort-buckets` | Drag items into two labeled buckets | appears in L8 |
| `family` | Family bridge screen | 1 per lesson |
| `celebration` | Badge award screen | 1 per lesson |

These screen types are entirely different from the new UE toolkit (`investigation`, `branching-decision`, `resource-allocation`, `drag-identify`, `magazine`, `quiz`, `reflection`, `real-world`). **They are not interchangeable.** LS requires its own player component.

### Tone Calibration
**Well-calibrated for ages 3–5.** Characteristics:
- Short, concrete sentences ("You can count anything: toys, steps, claps, jumps")
- Heavy use of familiar objects (fingers, cookies, shoes, blocks)
- Remi the Raccoon is the central narrator and emotional anchor — present in every lesson hook and game
- Physical/tactile metaphors throughout ("Touch each one and feel the shape!")
- familyAdventure prompts are parent-accessible and home-executable
- Quiz options include clearly wrong choices that a 3–5 year old would not confuse as plausible (appropriate distractor difficulty)

**Minor concern:** Lessons L18–L20 (Story Problem Creator, Math Journal, Math Olympics) are text-heavy and more abstract than earlier lessons — slightly elevated cognitive demand for the band ceiling age (5). Acceptable at band ceiling but may need shorter sentences in screen conversion.

### CRA Progression
**Concrete-Representational-Abstract (CRA) present, mostly Concrete and Representational.**

- **Concrete:** `count-array` (physical tap counting), `sort-buckets` (drag sorting), activity instructions (using real objects)
- **Representational:** `story` images, `teach` images with numerals/shapes, familyAdventure object manipulations
- **Abstract:** `yes-no` (propositional statements), `tap-right` multiple choice, quiz

The gameSequence consistently moves C→R→A within each lesson (story → teach → tap-right → yes-no). This is solid developmental sequencing. Later lessons (L13–L17) introduce more abstract content (addition, time, money) but maintain concrete anchors in activities.

### Standards Alignment
Header declares CCSS. No per-lesson standard tags.

Content maps cleanly to:
- **K.CC** (Counting and Cardinality): L1–L5
- **K.G** (Geometry): L6–L7
- **K.MD** (Measurement and Data): L8–L12
- **K.OA** (Operations and Algebraic Thinking): L13–L15
- **1.MD** (Time, Money): L16–L17

No standard tags at lesson or screen level — standard IDs would need to be added during screen conversion.

### Visual Model Integration
**Present and appropriate.**
- Array grid images (`/game-assets/math/stars-group-5.png`, `star-single.png`) → subitizing and counting
- Shape images for all 2D/3D geometry lessons
- Numeral images (`numeral-3.png`, `numeral-10.png`) → symbolic representation
- Sorting/pattern composite images

**Gap:** No ten-frame images referenced (L14 title is "Ten Frame Fun" but gameSequence images not verified). Ten-frame is the canonical visual model for K addition/composition — confirm asset exists before screen build.

---

## 2. math_explorers.js (Ages 6–8)

### Lesson Count
**20 lessons** — `math-6-8-01` through `math-6-8-20`

### Lesson Titles
| # | ID | Title |
|---|---|---|
| 1 | math-6-8-01 | Place Value: Ones, Tens, Hundreds |
| 2 | math-6-8-02 | Adding Multi-Digit Numbers |
| 3 | math-6-8-03 | Subtracting Multi-Digit Numbers |
| 4 | math-6-8-04 | Array Builder |
| 5 | math-6-8-05 | Fact Family Speed Drill |
| 6 | math-6-8-06 | Multiplication Master Challenge |
| 7 | math-6-8-07 | Fair Share Practice |
| 8 | math-6-8-08 | Fraction Pizza |
| 9 | math-6-8-09 | Fraction Comparison Cards |
| 10 | math-6-8-10 | Measurement Station |
| 11 | math-6-8-11 | Time Detective |
| 12 | math-6-8-12 | Make Change Challenge |
| 13 | math-6-8-13 | Angle Hunt and Shape Maker |
| 14 | math-6-8-14 | Measure Your Room |
| 15 | math-6-8-15 | Create Your Own Graphs |
| 16 | math-6-8-16 | Decimal Money Lab |
| 17 | math-6-8-17 | Multiplication Workout |
| 18 | math-6-8-18 | Division Practice |
| 19 | math-6-8-19 | Pattern Detective |
| 20 | math-6-8-20 | Real-World Problem Set |

**Topic clustering:** Place Value (L1) → Addition/Subtraction (L2–3) → Multiplication intro (L4–6) → Division (L7) → Fractions (L8–9) → Measurement/Time/Money (L10–12) → Geometry (L13–14) → Data (L15) → Decimals (L16) → Multiplication/Division fluency (L17–18) → Patterns/Applied (L19–20). Covers Grades 2–4 CCSS range, appropriate for ages 6–8.

**Naming concern:** Several lesson titles read as activity names rather than concept names (e.g., "Array Builder", "Fact Family Speed Drill", "Fraction Pizza"). These work in the legacy quiz-only context but will need concept-forward retitling if converted ("Introduction to Multiplication Arrays", "Understanding Fact Families").

### Data Shape
**LEGACY FORMAT. Does NOT match new UE format.**

Fields present:
```
id, subject, ageGroup, band, guide, guideAnimal, lessonNumber,
title, duration, hook, bigIdea, sections[], activity,
quiz[], familyAdventure, badge, nextLesson
```

Fields absent:
- `ageBand` — not present
- `subjectId` — not present
- `lessons[]` wrapper — not present
- `screens[]` — not present
- **`gameSequence[]` — NOT PRESENT** (unlike LS, Explorers has no game layer at all)

**Critical finding:** Explorer band has NO interactive game layer. Content exists as reading-only sections + 5-question quiz. There is no equivalent to LS's `gameSequence` and no new-format screens. The band is the most minimal in terms of engagement infrastructure.

### Game Mechanics
**None.** No `gameSequence`, no `screens[]`. The band currently delivers:
- Text sections (4 per lesson)
- Offline activity (1 per lesson)
- Multiple-choice quiz (5 questions per lesson, single correct answer from 4 options)
- Family adventure prompt

This is the flattest content structure of all three bands. Conversion to the new Explorer player (if one exists) or the UE toolkit would require designing all interactive mechanics from scratch.

### Tone Calibration
**Appropriate for ages 6–8, but inconsistent across lessons.**

Early lessons (L1–L9) maintain age-appropriate tone: concrete anchors, relatable examples (acorn bundles for place value, pizza for fractions), Remi presence in hooks and bigIdea.

Later lessons shift toward drill-activity framing (L17 "Multiplication Workout", L18 "Division Practice") — these read more like worksheet headers than lesson experiences. The tone becomes procedural rather than curious. This is a rewrite concern for screen conversion.

**Remi integration:** Present in hooks and bigIdea across most lessons but absent from section content in later lessons (L15–L20). Should be embedded throughout screens.

### CRA Progression
**Weak — mostly Abstract with some Representational.**

- **Concrete:** Only in activity/familyAdventure (offline, unverified execution)
- **Representational:** Some image references in sections ("think of it like packing: 10 items → bag → box")
- **Abstract:** All section content and quiz are abstract

No game layer means no on-screen Concrete or Representational engagement. The band relies entirely on text and offline activities to establish the C and R stages before abstract quiz. This is a structural deficit for 6–8 year olds — the age range that most benefits from representational bridge work.

### Standards Alignment
Header declares CCSS. No per-lesson standard tags.

Content maps to:
- **2.NBT / 3.NBT** (Number and Operations in Base Ten): L1–L3
- **3.OA / 4.OA** (Operations and Algebraic Thinking): L4–L7
- **3.NF / 4.NF** (Number and Operations — Fractions): L8–L9
- **3.MD / 4.MD** (Measurement and Data): L10–L12, L15
- **3.G / 4.G** (Geometry): L13–L14
- **4.NBT / 5.NBT** (Decimals): L16
- **4.OA / 5.OA**: L17–L20

Grade spread is wide (roughly Grades 2–5). Acceptable for a multi-year band (ages 6–8 = roughly Grade 1–3) but the upper lessons (L16–L20) touch Grade 4–5 content, which may be ahead of many 6-year-olds.

### Visual Model Integration
**Referenced in text but no image infrastructure.**

No `gameSequence` means no image assets are loaded. Visual models are described in section text:
- Arrays referenced in L4 content (but no rendered array)
- Fraction models mentioned in L8–L9 (pizza model described, not shown)
- Place value bundling described with packing metaphor (L1)
- Number line referenced in measurement contexts

**Gap:** The entire Explorers band has zero visual model rendering. All visual learning is deferred to offline activities and family prompts. This is a major gap for 6–8 year olds — this age group requires visual representation of fractions, arrays, and place value to build conceptual understanding.

---

## 3. math_upperexplorers.js (Ages 9–10)

### Lesson Count
**20 lessons** — `math-9-10-01` through `math-9-10-20`

### Lesson Titles
| # | ID | Title |
|---|---|---|
| 1 | math-9-10-01 | Ratios and Proportional Relationships |
| 2 | math-9-10-02 | Unit Rates and Proportions in Real Life |
| 3 | math-9-10-03 | Adding and Subtracting Fractions and Mixed Numbers |
| 4 | math-9-10-04 | Multiplying and Dividing Fractions |
| 5 | math-9-10-05 | Decimal Operations Workout |
| 6 | math-9-10-06 | Introduction to Negative Numbers |
| 7 | math-9-10-07 | The Number Line: Integers and Absolute Value |
| 8 | math-9-10-08 | Order of Operations (PEMDAS) |
| 9 | math-9-10-09 | Expressions and Variables |
| 10 | math-9-10-10 | Solving One-Step Equations |
| 11 | math-9-10-11 | Solving Two-Step Equations |
| 12 | math-9-10-12 | Geometry: Area and Perimeter |
| 13 | math-9-10-13 | Statistics: Mean, Median, Mode, Range |
| 14 | math-9-10-14 | Probability: Chance and Likelihood |
| 15 | math-9-10-15 | The Pythagorean Theorem |
| 16 | math-9-10-16 | Coordinate Planes and Graphing |
| 17 | math-9-10-17 | Introduction to Functions |
| 18 | math-9-10-18 | Percentages in Real Life |
| 19 | math-9-10-19 | Scale Drawings and Maps |
| 20 | math-9-10-20 | Personal Finance and Budgeting (Capstone) |

**Topic clustering:**
- L01–L02: Ratios and Proportional Reasoning (6.RP)
- L03–L05: Number Systems — Fractions and Decimals (6.NS)
- L06–L07: Integers and Absolute Value (6.NS.C)
- L08–L11: Expressions and Equations (6.EE)
- L12: Geometry (6.G)
- L13–L14: Statistics and Probability (6.SP)
- L15: Pythagorean Theorem (8.G.B.7)
- L16–L17: Coordinate Plane and Functions (8.F)
- L18–L19: Applied Math (Percentages, Scale)
- L20: Personal Finance Capstone

### Data Shape
**LEGACY FORMAT. Does NOT match new UE format.**

**The claim that "L1–7 are partially done in the new format" is FALSE.**  
All 20 lessons are in the legacy flat-object format. Zero lessons have been migrated.

Fields present in every lesson:
```
id, subject, ageGroup, band, guide, guideAnimal, lessonNumber,
title, duration, hook, bigIdea, sections[], activity,
quiz[], familyAdventure, badge, nextLesson
```

Fields absent (required for new UE format):
- `ageBand` — not present
- `subjectId` — not present
- `lessons[]` wrapper — not present
- `screens[]` — not present
- `gameSequence[]` — not present (same as Explorers)

**Migration starting point:** Zero screens exist. Every lesson needs welcome, magazine (×4), interactive, quiz, reflection, real-world, and celebration screens authored from scratch — though hook, bigIdea, sections, activity, and quiz content can be mined as source material.

### Game Mechanics
**None.** Same structure as Explorers band: sections + activity + quiz + familyAdventure, no interactive game layer.

### Tone Calibration
**Good for ages 9–10. Consistent across all 20 lessons.**

- Hooks are strong — they open with a real-world scenario before naming the concept (L1 uses recipe scaling to introduce ratios, L16 uses latitude/longitude to introduce coordinate planes)
- bigIdea statements are precise and well-phrased — usable as magazine screen taglines with minor editing
- Section content is at appropriate complexity: introduces vocabulary, explains mechanism, and connects to real-world use
- Remi presence is lighter than LS (appears in hook and 1 section per lesson) — acceptable for ages 9–10 but should remain present in screen conversion
- familyAdventure prompts are genuinely executable and cleverly applied (e.g., Coordinate Battleship, Guess the Function)
- Quiz distractors are well-constructed — plausible wrong answers that test understanding, not just recall

**No tone concerns.** This is the strongest writing quality of the three files.

### CRA Progression
**Mostly Abstract. Concrete and Representational present only in activities.**

- **Concrete:** Activity and familyAdventure (offline manipulatives — number line walk on floor tape, physical card games, real recipe scaling)
- **Representational:** Some section content references visual models (number line for negatives, coordinate grid described in text, tables for functions)
- **Abstract:** All section prose, all quiz questions

On-screen delivery is 100% abstract. For ages 9–10, this is developmentally more defensible than for 6–8, but the new UE interactive mechanics (investigation, branching-decision, resource-allocation) are precisely the tools that would add representational scaffolding. Screen conversion is a major opportunity to add the missing CRA stages.

**Per-lesson CRA notes:**
- L06–L07 (Negatives/Integers): Number line is the canonical representational tool — must be rendered on-screen, not just described
- L08 (PEMDAS): Step-by-step order-of-operations worked examples are the representational anchor — needs structured worked example screen
- L09–L11 (Equations): Balance scale or substitution method visualization needed
- L16 (Coordinate Plane): Coordinate art activity is excellent representational anchor — maps to `resource-allocation` or custom interactive
- L17 (Functions): Input→output table is the representational model — maps well to a structured interactive

### Standards Alignment
Header declares CCSS. No per-lesson standard tags.

**Grade band concern:** The file covers CCSS Grades 6–8 content, not strictly Grade 5 (which is the upper boundary of ages 9–10). Specifically:
- L15 (Pythagorean Theorem) is 8.G.B.7 — Grade 8 content
- L16 (Coordinate Plane) is primarily 6.NS.C.6 / 6.NS.C.8 — Grade 6
- L17 (Functions) is 8.F — Grade 8 content

The file implicitly treats ages 9–10 as a transition band into middle school math. This may be intentional (gifted/advanced scope) or a standards drift that needs reconciliation before conversion. **Flag for curriculum decision before build.**

Per-lesson CCSS mapping (as written, no tags in file):
| Lessons | CCSS Domain |
|---|---|
| L01–L02 | 6.RP.A — Ratios and Proportional Relationships |
| L03–L04 | 5.NF / 6.NS.A — Fractions |
| L05 | 6.NS.B — Decimal Operations |
| L06–L07 | 6.NS.C — Number System (Negatives, Integers) |
| L08 | 6.EE.A.1 — Order of Operations |
| L09–L11 | 6.EE.A–B — Expressions and Equations |
| L12 | 6.G.A — Geometry |
| L13 | 6.SP.A–B — Statistics |
| L14 | 7.SP.C — Probability |
| L15 | 8.G.B.7 — Pythagorean Theorem |
| L16 | 6.NS.C.6 — Coordinate Plane |
| L17 | 8.F — Functions |
| L18 | 7.RP.A.3 — Percentages |
| L19 | 7.G.A.1 — Scale Drawings |
| L20 | Applied / Financial Literacy |

### Visual Model Integration
**Referenced in content, not rendered on-screen.**

Visual models described or implied per lesson:
- **L01–L02:** Ratio tables, double number line (described in text, not rendered)
- **L03–L04:** Fraction bar / area model (described, not rendered)
- **L05:** Decimal place value chart (implied)
- **L06–L07:** Number line — explicitly used in activity and section content; `activity.title = "Number Line Walk"` confirms this is the primary model
- **L08:** Expression decomposition (parentheses structure)
- **L09–L11:** Balance scale metaphor for equations (implied)
- **L13:** Bar graph, dot plot (described in activity)
- **L15:** Right triangle diagram (implied)
- **L16:** Coordinate grid — explicitly described in sections and activity ("draw a coordinate plane on graph paper")
- **L17:** Input-output table and linear graph — explicitly described
- **L19:** Scale drawing grid (explicitly described in activity)

**Audit verdict:** Visual model content exists in prose — it just needs to be extracted and built into `magazine` screen illustrations and `interactive` screen mechanics during conversion. The source material is there; the rendering is not.

---

## 4. Per-Lesson Deep Audit: math_upperexplorers.js L01–L07

Since these were the lessons believed (incorrectly) to be partially migrated, they get individual scrutiny.

### L01 — Ratios and Proportional Relationships
- **Content quality:** Excellent. Hook (recipe scaling) is immediately relatable. Covers ratio notation (a:b, a/b, words), equivalent ratios (scaling), proportions (cross-multiplication), and real-world application (maps, speed, unit pricing).
- **bigIdea clarity:** Precise and screenworthy with minor trim.
- **Sections:** 4 — well-differentiated, no redundancy. "Proportions" section introduces cross-multiplication correctly.
- **Quiz quality:** 5 questions at appropriate difficulty. Good distractor design.
- **Migration potential:** HIGH. Hook → welcome/magazine. 4 sections → 4 magazine screens. Activity (ratio walk) → real-world screen. Quiz → quiz screen. `investigation` mechanic would work well (e.g., "figure out which deal is the better ratio").
- **Missing:** No ratio table visual. Activity references creating a ratio table — this should be the interactive screen model.

### L02 — Unit Rates and Proportions in Real Life
- **Content quality:** Strong. Unit rate defined clearly (quantity per 1 unit), unit pricing applied, proportional reasoning in context (speed, recipe, cost).
- **Differentiation from L01:** Good — L01 establishes ratios conceptually; L02 applies them specifically to "per one" scenarios and comparison shopping. Not redundant.
- **Quiz quality:** Good — includes a comparison-shopping question (which package is the better deal?) that mirrors real-world use.
- **Migration potential:** HIGH. `resource-allocation` mechanic is a natural fit — allocate budget using unit rates.
- **Missing:** No double number line or unit rate table rendered.

### L03 — Adding and Subtracting Fractions and Mixed Numbers
- **Content quality:** Solid procedural coverage. LCM/LCD method explained, mixed number conversion covered, borrowing from whole numbers explained.
- **Tone concern:** More procedural than L01–L02 — reads as "how to do it" rather than "why it works." Should add conceptual framing in screen build (fraction bar visual showing why common denominator is needed).
- **Quiz quality:** Adequate — 5 computation questions. Could use more conceptual/estimation question.
- **Migration potential:** MEDIUM-HIGH. Procedural content works in magazine screens; the interactive needs a fraction bar or number line rendering to avoid being purely abstract.
- **Missing:** No fraction bar, number line, or area model visual.

### L04 — Multiplying and Dividing Fractions
- **Content quality:** Good. "Multiply numerators, multiply denominators" rule is stated clearly. Dividing = multiply by reciprocal explained with the flip-and-multiply rule. Mixed number conversion covered.
- **Common misconception addressed:** Notes that multiplying two fractions (both <1) gives a result smaller than either — this is the most common area of confusion.
- **Migration potential:** MEDIUM-HIGH. `investigation` mechanic could work: "A recipe uses 3/4 cup of flour, but you're making half the recipe — figure out how much you need."
- **Missing:** Area model for fraction multiplication (the grid model) — critical visual for this concept.

### L05 — Decimal Operations
- **Content quality:** Covers addition/subtraction (align decimals), multiplication (ignore decimals, then place), division (move decimal). All four operations present.
- **Tone:** Procedural. Rules-heavy. The hook is the weakest of L01–L07: "Decimals extend our place value system beyond ones" — accurate but not compelling for a 9-year-old.
- **Hook recommendation:** Replace with a real scenario (e.g., "You have $18.47. You want to buy two items that cost $6.99 each. Do you have enough?").
- **Migration potential:** MEDIUM. Content is mechanically sound but needs a stronger narrative anchor for screen conversion. `branching-decision` could work for estimation/reasonableness scenarios.
- **Missing:** Place value chart visual for decimal alignment.

### L06 — Introduction to Negative Numbers
- **Content quality:** Excellent. Best conceptual hook of L01–L07: temperatures, bank accounts, debt, football yards — all concrete and memorable. Covers the number line, comparing negatives, adding/subtracting negatives.
- **Key insight highlighted:** "-10 is colder than -3, even though 10 > 3" — the counter-intuitive core idea is explicitly addressed.
- **Activity:** `Number Line Walk` (floor tape number line, walk the operations) — this is a textbook concrete anchor.
- **Migration potential:** VERY HIGH. The number line walk directly maps to a rendered number line interactive. `investigation` mechanic: "The temperature dropped. Where did it land on the number line?"
- **Missing:** Rendered number line (the critical visual for this concept — must be on-screen, not just described in activity).

### L07 — The Number Line: Integers and Absolute Value
- **Content quality:** Good. Cleanly defined: integers (no fractions), number line properties, absolute value as distance from zero. |-7| vs |7| contrast handled well.
- **bigIdea:** Well-phrased — "absolute value is the distance from zero regardless of direction" is both precise and screenworthy.
- **Differentiation from L06:** L06 introduces the concept of negatives; L07 formalizes integers and introduces absolute value as its own topic. Good sequencing.
- **familyAdventure (Absolute Value War card game):** Standout — genuinely fun, immediately playable, teaches both absolute value and number comparison simultaneously.
- **Migration potential:** HIGH. Absolute value = distance from zero → natural `drag-identify` or number line interactive. Card game could become a UI mini-game.
- **Missing:** Rendered number line with distance markings.

---

## 5. Cross-Band Summary

| Dimension | Little Stars (3–5) | Explorers (6–8) | Upper Explorers (9–10) |
|---|---|---|---|
| **Lesson count** | 20 | 20 | 20 |
| **New format** | No | No | No |
| **Game layer** | Yes — `gameSequence[]` (proprietary) | None | None |
| **Interactive screens** | 8 legacy types | None | None |
| **Tone quality** | Excellent | Uneven (L15–L20 weaker) | Excellent, consistent |
| **CRA coverage** | C+R+A present | R+A only | A only (C/R in activities) |
| **Standards tagged per lesson** | No | No | No |
| **Visual models rendered** | Yes (images in gameSequence) | No | No |
| **Content reusability for migration** | Low (LS-specific mechanics) | Medium | High |
| **Migration priority** | N/A (own player exists) | TBD | Next band to build |

### Migration Readiness: Upper Explorers Math
- **Content:** Ready. All 20 lessons have full hooks, bigIdeas, 4 sections, activities, quizzes, and family prompts. Source material quality is high.
- **Shape:** Full rewrite required into `ageBand / subjectId / guide / lessons[].screens[]` format.
- **Interactives:** All mechanics need to be designed and assigned. Suggested mechanic mapping below.
- **Standards review recommended:** L15 (Pythagorean Theorem) and L17 (Functions) touch Grade 8 CCSS — confirm intended scope before build.

### Suggested Mechanic Assignments (Math UE)
| Lessons | Suggested Mechanic | Rationale |
|---|---|---|
| L01–L02 | `investigation` | Ratio detective: find the better deal / identify the scale factor |
| L03–L05 | `branching-decision` | Choose your computation strategy; see outcome |
| L06–L07 | `investigation` | Number line cases: where does the temperature land? |
| L08 | `investigation` | Order of operations case: which student solved it correctly? |
| L09–L11 | `branching-decision` | Choose which equation-solving step to take next |
| L12 | `resource-allocation` | Allocate tiles/fence to maximize area within constraint |
| L13–L14 | `drag-identify` | Sort data into statistical / probability categories |
| L15 | `investigation` | Right triangle cases: find the missing side |
| L16 | `resource-allocation` | Place objects on a coordinate grid per constraints |
| L17 | `investigation` | Function machine: identify the rule from input-output pairs |
| L18–L19 | `branching-decision` | Shopping/mapping decisions with percentage/scale consequences |
| L20 | `branching-decision` | Budget allocation capstone (capstone mechanic) |

---

*End of audit. No files were modified.*
