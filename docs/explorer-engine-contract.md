# Explorer Engine Contract

**Version:** 2.0 (Phase 2 — 3 vocab entries per magazine section)
**Last updated:** 2026-05-04

This document is the authoritative specification for Explorer lesson data files. The engine (`ExplorerLessonPlayer.jsx` and its sub-components) reads data files conforming to this contract. Violating the contract causes silent content bugs or runtime crashes. The validator (`npm run validate`) enforces this contract at build time.

---

## File Naming

| Pattern | Example |
|---|---|
| `{subjectSlug}_explorer_l{NN}_screens.js` | `spanish_explorer_l01_screens.js` |
| `{SubjectSlug}ExplorerL{NN}Screens` (var name) | `SpanishExplorerL01Screens` |

- `NN` is zero-padded: `01`–`20`
- Subject slug: lowercase, no hyphens, no spaces (e.g. `creativearts`, `lifewellness`, `spanish`)
- The data file must `export default` its named variable

---

## Top-Level Shape

```js
const SubjectExplorerL01Screens = {
  lessons: [ /* array of lesson objects */ ],
};
export default SubjectExplorerL01Screens;
```

---

## Lesson Object

```js
{
  id:        'l01',               // required — 'l' + zero-padded number
  subjectId: 'your-subject-id',  // required — matches SUBJECTS in constants.js
  title:     'Lesson Title',     // required
  guideId:   'your-guide-id',    // required — matches AVATARS in constants.js
  xpReward:  50,                 // optional — default 50
  screens:   [ /* screen objects */ ],
}
```

---

## Screen Types

Every screen must have `id` (unique within the lesson) and `type`.

### 1. `welcome`

The opening screen. Guide greets the child. Audio prewarms on mount.

| Field | Required | Notes |
|---|---|---|
| `guideText` | ✓ | Spoken by the guide via TTS. `{name}` is substituted. |

**`{name}` substitution:** Applied by `ExplorerWelcomeScreen` before display and before TTS.

---

### 2. `magazine`

Content screen with article-style layout + tappable vocab chips.

| Field | Required | Notes |
|---|---|---|
| `headline` | ✓ | Displayed at top. No `{name}` — not substituted. |
| `paragraphs` | ✓ | Array of strings. Each string = one paragraph. |
| `image` | ✓ | Absolute path from `/public` root, e.g. `/explorer-assets/creative-arts/l01-magazine-1.png` |
| `imageCaption` | ✓ | Short caption. Not substituted. |
| `vocab` | ✓ | Array of exactly 3 vocab objects (see below). |
| `section` | recommended | 1–4. Used for progress display. |
| `totalSections` | recommended | Always 4. |
| `content` | ✗ FORBIDDEN | Old nested wrapper — remove if present. |

#### Vocab Object

Each vocab entry has:

```js
{
  word:        'term',         // lowercase; displayed as the chip label
  definition:  'Definition.',  // 1–2 sentences; shown in VocabPopup
  audioPrompt: 'Text spoken by the guide when the chip is tapped. Use {name}.',
}
```

**`{name}` substitution in `audioPrompt`:** Applied by `VocabPopup` before calling TTS. Safe to use `{name}` freely.

**audioPrompt length:** ≤ 90 words (validator enforces this). Ideal: 35–70 words.

**Phase notes:** Phase 1 = 2 entries, Phase 2 = 3 entries. New subjects must ship with 3.

---

### 3. `interactive`

Tap-to-select + tap-to-place matching game. Left column = items (images). Right column = buckets (text labels).

| Field | Required | Notes |
|---|---|---|
| `guideText` | ✓ | Spoken at game start. `{name}` is substituted. |
| `items` | ✓ | Array of item objects (see below). |
| `buckets` | ✓ | Array of bucket objects (see below). |
| `columnHeaders` | optional | `['Items', 'Categories']` — defaults if omitted. |
| `config` | ✗ FORBIDDEN | Old nested wrapper — remove if present. |

#### Item Object

```js
{
  id:           'unique-item-id', // required — unique within items[]
  label:        'Item Label',     // required — spoken on long-press, shown in lock overlay
  image:        'filename.png',   // optional — filename only (no path); resolved against /public/explorer-assets/{subjectId}/
  correctMatch: 'bucket-id',      // required — must match a bucket.id
  matchPhrase:  'Custom phrase.', // optional — spoken after correct match; {name} substituted
  objectPosition: 'center top',   // optional — CSS object-position for image
}
```

**CRITICAL:** Use `correctMatch`, never `correctBucket`. The validator rejects `correctBucket`.

**Assets:** Image files must exist at `/public/explorer-assets/{subjectId}/{filename}`. Missing files produce an SVG placeholder (non-breaking) but are flagged as warnings by the validator.

#### Bucket Object

```js
{
  id:    'bucket-id',    // required — matched by item.correctMatch
  label: 'Category',    // required — displayed as button text
  color: '#60A5FA',     // required — hex color for border and label
}
```

---

### 4. `quiz`

Multiple-choice / true-false quiz. Minimum 4 questions.

| Field | Required | Notes |
|---|---|---|
| `guideText` | ✓ | Spoken at quiz start. `{name}` is substituted. |
| `questions` | ✓ | Array of question objects (minimum 4). |

#### Question Object

```js
{
  id:          'q1',              // required — unique within questions[]
  format:      'multiple-choice', // required — 'multiple-choice' or 'true-false'
                                  // NEVER 'mc' or 'tf' — validator rejects these
  text:        'Question?',       // required
  options:     ['A', 'B', 'C', 'D'], // required for multiple-choice; omit for true-false
  answer:      'A',               // required — must match one option exactly (or 'True'/'False')
  explanation: 'Why A is right.', // optional — shown after answer is revealed
}
```

---

### 5. `real-world`

Offline family activity + creative prompt.

| Field | Required | Notes |
|---|---|---|
| `guideText` | ✓ | Framing text. `{name}` is substituted. |
| `familyAdventure` | ✓ | Family activity description. Not substituted — do not use `{name}`. |
| `creativePrompt` | ✓ | Creative task description. Not substituted — do not use `{name}`. |
| `content` | ✗ FORBIDDEN | Old nested wrapper — remove if present. |

---

### 6. `celebration`

Lesson complete screen: XP, badge, confetti, guide message.

| Field | Required | Notes |
|---|---|---|
| `message` | ✓ | Displayed to the child. `{name}` is substituted. |
| `badge` | ✓ | Unique slug stored in localStorage. Convention: `{subjectId}-l{NN}` |
| `badgeName` | ✓ | Display name on badge chip. |
| `xpEarned` | ✓ | Number. Added to `explorer_total_xp` in localStorage. |
| `content` | ✗ FORBIDDEN | Old nested wrapper — remove if present. |

---

## `{name}` Substitution Contract

The engine replaces `{name}` with the child's name using:

```js
const r = t => (t || '').replace(/\{name\}/g, childName || 'friend');
```

**Fields where `{name}` IS substituted (safe to use):**

| Screen | Field | Where |
|---|---|---|
| welcome | `guideText` | ExplorerWelcomeScreen |
| magazine | `vocab[].audioPrompt` | VocabPopup |
| interactive | `guideText` | InteractiveExplore |
| interactive | `items[].matchPhrase` | InteractiveExplore |
| interactive | completion string | InteractiveExplore (hardcoded `COMPLETION`) |
| quiz | `guideText` | ExplorerLessonPlayer |
| real-world | `guideText` | ExplorerLessonPlayer |
| celebration | `message` | ExplorerCelebration |

**Fields where `{name}` is NOT substituted (do not use `{name}`):**

- `magazine`: `headline`, `paragraphs[]`, `imageCaption`
- `magazine`: `vocab[].word`, `vocab[].definition`
- `quiz`: `questions[].text`, `questions[].options[]`, `questions[].explanation`
- `real-world`: `familyAdventure`, `creativePrompt`
- `interactive`: `items[].label`, `buckets[].label`
- `celebration`: `badge`, `badgeName`

The validator checks for `{name}` in non-substituted fields and reports an error.

---

## Asset Path Contract

Interactive game images:

```
/public/explorer-assets/{subjectId}/{filename}
```

- `subjectId` is the runtime route param — the same string in `SUBJECTS` in `constants.js`
- `filename` is only the file part (e.g. `l01-game-item-a.png`) — no directory prefix
- Convention: `l{NN}-game-{description}.png`
- The engine renders an SVG placeholder if an image is missing — the game still works
- The validator warns about missing images (non-blocking)
- The validator skips the check entirely for subjects that have no asset folder yet

---

## Guide Voice Contract

Each subject has one assigned guide. The guide's voice and personality must remain consistent throughout all 20 lessons.

| Subject | Guide | Voice Tone |
|---|---|---|
| inner-world | Sage | Grounded, reflective, curiosity-first. Treats feelings as data. |
| cosmos | Nova | Wonder-filled, scientific awe, encourages big questions. |
| future-skills | Zara | Practical, future-forward, empowering, direct. |
| social-leadership | River | Collaborative, emotionally intelligent, group-minded. |
| life-wellness | Terra | Warm, nurturing, whole-self focused, celebrates small steps. |
| creative-arts | Muse | Free-spirited, awe-struck by beauty, artist-to-artist. |
| spanish | Luna | Warm, playful, culturally rich, celebrates language discovery. |

**Self-reference patterns to use:** `Sage finds it meaningful that...`, `Here's something {name}...`, `What Muse notices is...`

**Self-reference patterns to avoid (overused):** `X isn't just Y, it's Z`, `[Guide] loves...` as a primary opener.

---

## Engine Components (do not hardcode subject strings here)

These components render lessons for all subjects. Adding subject-specific fallbacks breaks new subjects.

| Component | Renders |
|---|---|
| `ExplorerLessonPlayer.jsx` | Orchestrates all phases; name substitution (`r()`) |
| `ExplorerWelcomeScreen.jsx` | Phase 1 — welcome screen |
| `MagazineScreen.jsx` | Phase 2 — magazine + vocab chips |
| `VocabPopup.jsx` | Vocab popup with TTS; applies `r()` to audioPrompts |
| `InteractiveExplore.jsx` | Phase 3 — matching game |
| `ExplorerQuiz.jsx` | Phase 4 — quiz |
| `ExplorerRealWorld.jsx` | Phase 5 — family activity |
| `ExplorerCelebration.jsx` | Phase 6 — XP, badge, confetti |

**Banned patterns in engine components** (validator checks for these):

- `|| 'Sage'` — hardcoded guide fallback
- `|| 'Nova'` — hardcoded guide fallback
- `|| 'inner-world'` — hardcoded subject fallback
- `"Sage's voice"` — hardcoded guide name in user-facing text
- `tap a scene, then tap the feeling` — Inner World-specific fallback

Use `guideAvatar?.name || 'your guide'` and ensure `subjectId` is always provided.

---

## Validator

```bash
npm run validate      # Run standalone
npm run build         # Validates then builds (build fails if validate fails)
```

The pre-commit hook runs `npm run validate` automatically before every commit.

**What the validator checks:**
- All required fields present, all forbidden fields absent
- Magazine sections: vocab array with ≥ 2 entries, each entry has `word`, `definition`, `audioPrompt`
- audioPrompt ≤ 90 words per entry
- `{name}` not present in non-substituted fields
- Interactive items: `correctMatch` used, not `correctBucket`
- Quiz: ≥ 4 questions, format is `'multiple-choice'` or `'true-false'`
- Engine components: no hardcoded subject-specific strings
- Missing assets: reported as warnings (non-blocking)
