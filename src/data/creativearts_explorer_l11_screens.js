// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L11 — Drama and Theater
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L11 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-11',
      title:     'Drama and Theater',
      duration:  12,
      xpReward:  50,
      badge:     'performer',
      badgeName: 'Performer',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l11-welcome',
          type:     'welcome',
          guideText: `Here's a thought for you, {name}: theater is the oldest art form in the world. The ancient Greeks were performing plays 2,500 years ago that are still staged today. There's something about watching people tell a story in a room together — live, in real time — that no other medium quite replicates. And the skills theater builds — stepping into another person's experience, deep listening, creative courage, working with others toward something larger than yourself — are some of the most powerful any person can develop. Today we're going inside the world of drama. Whether you end up on stage or not, this one will stay with you.`,
          headline: 'Drama and Theater',
          subtitle: `Theater is the oldest art form in the world — the ancient Greeks performed plays 2,500 years ago that are still performed today. The skills it develops — empathy, deep listening, creative courage, collaboration — are among the most powerful any person can have`,
          visual:   '/explorer-assets/creative-arts/l11-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l11-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What Theater Is`,
            body: `Theater is the art of **live performance** — actors embodying characters in front of an audience in real time, with no retakes. Unlike film, theater is ephemeral — each performance is unique and unrepeatable. Theater includes **drama** (serious storytelling), **comedy**, **musical theater** (story + song + dance), **physical theater** (movement-based), **puppetry**, and **immersive theater** (where the audience participates). All theater involves some version of the same elements: a text or script (or improvisation), **actors** who embody characters, **direction** that shapes the production, and **design** — set, lighting, costume, sound — that creates the world of the story. Theater is collaborative by nature: it is never made alone.`,
            image:   '/explorer-assets/creative-arts/l11-magazine-1.png',
            caption: `Theater is live, ephemeral, and collaborative — each performance is unrepeatable and made by many hands`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l11-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Acting Fundamentals`,
            body: `The foundation of acting is **truthfulness** — the actor genuinely believes what their character believes in that moment, rather than performing emotions from the outside. One of the most influential acting methods developed the concept of **"as if"** — acting as if the situation were genuinely real, rather than pretending to feel something. The key tools: **objective** (what does my character want in this scene?), **obstacle** (what gets in their way?), and **action** (what do I actively do to overcome the obstacle?). A character who simply states emotions is far less compelling than a character who is **pursuing something** and hitting resistance. Every character, however small their role, deserves the same full human truth.`,
            image:   '/explorer-assets/creative-arts/l11-magazine-2.png',
            caption: `Truthful acting pursues an objective and hits obstacles — it doesn't perform emotions from the outside`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l11-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Improvisation`,
            body: `**Improvisation** (improv) is unscripted, spontaneous performance. The foundational rule is **"yes, and"** — accept whatever your scene partner establishes ("yes") and add to it ("and"). Improv performers never deny their partner's reality, never block the action, and — crucially — never try to be funny. They try to be truthful, and the comedy emerges naturally when two people are fully present and genuinely responding to each other. Improv develops **quick thinking**, **deep listening**, **trust in collaborators**, **creative flexibility**, and **comfort with uncertainty**. These skills are among the most valuable in any creative work — and far beyond the stage, in every conversation, collaboration, and unexpected situation life throws at you.`,
            image:   '/explorer-assets/creative-arts/l11-magazine-3.png',
            caption: `"Yes, and" — accept what your partner offers and build on it. Truth first, comedy second`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l11-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Stage Fright and the Actor's Tool`,
            body: `**Stage fright** is nearly universal — even experienced professional actors experience pre-performance anxiety. The most important reframe: those feelings are your body **preparing** to perform, not warning you to stop. The energy of anxiety, redirected, becomes presence and aliveness on stage. Practical techniques: **focus on your character's objective** rather than your own self-consciousness — when you're thinking about what your character wants, you can't simultaneously worry about how you look; make strong **eye contact** with your scene partners; take full, deep breaths before entering; and remember that the audience genuinely wants you to succeed — they're on your side. The actor's deepest tool is **courage** — the willingness to be fully seen, without hiding.`,
            image:   '/explorer-assets/creative-arts/l11-magazine-4.png',
            caption: `Stage fright is preparation energy — redirect it into your character's objective, and it becomes aliveness`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l11-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'builds', label: `🎭 This will make you a stronger performer`, color: '#34D399' },
              { id: 'limits', label: `⚠️ This holds a performer back`,             color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l11-g1',
                image:         'l11-game-1.png',
                label:         `Imagining yourself fully as the character — what they want, what they fear, what they're trying to do — before the scene begins.`,
                correctBucket: 'builds',
                matchPhrase:   `That's building a clear objective — the foundation of truthful acting. When you know exactly what your character wants and what stands in their way, you don't have to perform emotions from the outside. You simply pursue the goal, and the emotions emerge naturally from the effort and the obstacles.`,
              },
              {
                id:            'l11-g2',
                image:         'l11-game-2.png',
                label:         `When a scene partner says "Imagine we're on a sinking ship," responding "Yes, and the water is already at our ankles!" to keep building the scene.`,
                correctBucket: 'builds',
                matchPhrase:   `That's "yes, and" in action — the foundational rule of improv. By accepting your partner's reality and adding to it, you create a shared world that grows richer with every exchange. Blocking or denying what your partner establishes breaks the scene; building on it makes something neither of you could have created alone.`,
              },
              {
                id:            'l11-g3',
                image:         'l11-game-3.png',
                label:         `Coming into an improv scene focused on getting laughs from the audience instead of really listening to what your scene partner says.`,
                correctBucket: 'limits',
                matchPhrase:   `Improv performers who chase laughs rather than truth usually get neither. When you're focused on the audience's reaction, you stop listening to your partner — and real improv lives entirely in the listening. The comedy in great improv emerges from two people genuinely responding to each other. You can't manufacture it by trying.`,
              },
              {
                id:            'l11-g4',
                image:         'l11-game-4.png',
                label:         `Spending the whole scene wondering what the audience thinks of you instead of focusing on what your character wants.`,
                correctBucket: 'limits',
                matchPhrase:   `Self-consciousness is stage fright's most damaging form — it pulls your attention inward when it needs to be outward, on your character's world. The fix isn't confidence; it's objective. When you're genuinely pursuing what your character wants, you don't have mental space left over to worry about how you look. Purpose is the antidote to self-consciousness.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l11-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source, name removed)
            {
              id:           'l11-q1',
              format:       'mc',
              question:     `What does the "as if" technique mean in acting?`,
              options:      [
                `Asking yourself "as if" questions about your character's background before each rehearsal`,
                `Acting as if the situation were genuinely real — believing what your character believes, rather than performing emotions from the outside`,
                `Pretending to be a different kind of actor as if you had been trained differently`,
                `Using props and costumes as if they were real objects to help yourself believe the scene`,
              ],
              correctIndex: 1,
              explanation:  `The "as if" technique asks an actor to commit to the character's reality fully — to act as if the situation is genuinely happening, rather than performing how someone in that situation would look. The difference is the difference between truth and imitation. When you actually believe what your character believes in that moment, the emotions arise naturally from that belief rather than being manufactured on top of it. This is what makes a performance feel real rather than theatrical.`,
            },

            // Q2 — MC (source)
            {
              id:           'l11-q2',
              format:       'mc',
              question:     `What is the foundational rule of improv?`,
              options:      [
                `Always try to be funny — comedy is the primary goal of improv performance`,
                `"Yes, and" — accept what your partner has established in the scene and build on it, never denying their reality`,
                `Never plan anything before going on stage — complete spontaneity makes the best scenes`,
                `The first person to speak controls where the scene goes`,
              ],
              correctIndex: 1,
              explanation:  `"Yes, and" is the bedrock of improv. "Yes" means accepting your partner's reality — whatever they establish in the scene becomes real and cannot be denied. "And" means building on it — adding new information rather than blocking the action or redirecting away from what was offered. Together, these two moves create a collaborative world that grows richer with each exchange. Blocking ("no" or "but") kills the scene; building amplifies it.`,
            },

            // Q3 — MC (source)
            {
              id:           'l11-q3',
              format:       'mc',
              question:     `What is the most effective way to deal with stage fright?`,
              options:      [
                `Avoid performing until the feeling goes away completely`,
                `Memorise everything perfectly so there is nothing to be uncertain about`,
                `Focus on your character's objective rather than your own self-consciousness — purpose replaces anxiety`,
                `Perform so many times that your body eventually stops producing adrenaline`,
              ],
              correctIndex: 2,
              explanation:  `The most effective antidote to stage fright is redirecting attention outward — from yourself to your character's world. When you're genuinely focused on what your character wants and what's in their way, you don't have mental space left over for self-consciousness. The physical energy of anxiety — faster heartbeat, heightened alertness — is also the physical energy of engaged, alive performance. The difference isn't suppression; it's direction.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l11-q4',
              format:        'tf',
              question:      `In improv, "yes, and" means accepting everything your scene partner establishes as real — you never block or deny what they've created, even if you'd have gone a completely different direction.`,
              correctAnswer: true,
              explanation:   `True. Improv's "yes, and" is an absolute commitment to your partner's reality. Once something is established in the scene — a location, a relationship, a problem — it's real and must be honoured. Denying it ("no, we're not on a ship") or ignoring it breaks trust and collapses the shared world you're building together. The constraint of accepting everything is also what makes improv surprisingly freeing: you never have to figure out where the scene is going, because you're always just responding to what's right in front of you.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l11-q5',
              format:       'fill-blank',
              question:     `The foundational improv rule — accepting what your scene partner offers and building on it — is called "yes, ___".`,
              options:      ['and', 'but', 'so', 'if'],
              correctIndex: 0,
              explanation:  `"Yes, and" is perhaps the most powerful two-word creative rule in existence. "Yes" is the acceptance — your partner's reality is real. "And" is the contribution — you add to it, deepen it, or complicate it. Together they create an improvisational engine that can sustain a scene indefinitely, because every "yes, and" opens new possibilities rather than closing them down. The principle applies far beyond the stage: in collaboration, brainstorming, and creative conversation, building on ideas rather than blocking them produces richer outcomes.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l11-q6',
              format:       'mc',
              question:     `Why does focusing on your character's objective help reduce self-consciousness on stage?`,
              options:      [
                `Because memorising objectives gives your mind something to fall back on if you go blank`,
                `Because audiences respond better to characters who have clear goals`,
                `Because when your attention is fully on what your character wants and what's in their way, there is no mental space left over to worry about how you appear`,
                `Because objectives give directors something concrete to work with in rehearsal`,
              ],
              correctIndex: 2,
              explanation:  `Self-consciousness is a form of divided attention — part of your mind is watching yourself perform while another part is trying to perform. The cure isn't confidence; it's commitment. When you're genuinely and completely engaged in pursuing your character's objective, your full attention is on the fictional world — not on the audience, not on yourself. Purpose is a more reliable antidote to stage fright than willpower, because it doesn't require you to suppress the anxiety; it simply gives your attention somewhere else to live.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l11-realworld',
          type: 'real-world',
          content: {
            scenario:    `Mini Performance Night`,
            description: `Try three acting exercises on your own or with someone at home. (1) "As if" moment: pick a simple action — pouring a glass of water, opening a letter, looking out a window — and do it as if something significant has just happened to your character. No words. Just the action, with full belief. (2) "Yes, and" with yourself: sit quietly and imagine a scene, letting each new thought build on the last rather than contradicting it. (3) Character walk: move through a room as three different people — someone very old and tired, someone excited and in a hurry, someone afraid of being heard. Notice how fully committing to the walk changes everything about how you feel.`,
            familyAdventure: `Put on a family improv session. Take turns being "yes, and" partners: one person starts a scene with "Imagine we're..." and everyone takes turns adding to it with "yes, and..." for at least two minutes per scene. Try themes like: stranded on a desert island, running a very strange bakery, lost in a museum after closing time. Afterward, discuss: what made a scene feel alive? What happened when someone built on their partner's idea instead of redirecting it?`,
            realWorldConnection: `The skills theater develops — empathy (inhabiting another perspective), listening (real improv requires it completely), collaboration (making something together that neither could make alone), and the courage to be fully seen — are valued in almost every human endeavor. Scientists, doctors, negotiators, teachers, and leaders all use these skills. Before cinema, theater was how societies processed their most difficult questions. The stage is one of the oldest classrooms humans have ever built.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l11-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that acting is not pretending — it's believing. And that improv's deepest skill isn't being quick or funny — it's truly listening. Theater has been the art of being fully human for thousands of years. Muse thinks there is no braver thing than standing in front of others and choosing to mean it.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L11.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L11] Loaded: "Drama and Theater" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l11-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L11] One or more magazine assets missing'));
}
