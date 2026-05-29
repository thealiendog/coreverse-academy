// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L16 — Building Trust
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : Stephen Covey (Speed of Trust), trust equation, real research
//            on how trust is built and broken. Synthesizes much of the
//            subject so far.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 trust-building moves)
// SCOPE: what trust is, why it's the foundation, how it's built (slow) vs
//        broken (fast), the 5 moves of trust building, repair when broken
// VOICE: Valor = steady, deeply grounded, models trustworthiness himself
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-16`,
      title: `Building Trust`,
      duration: 18,
      xpReward: 75,
      badge: `trust-builder`,
      badgeName: `Trust Builder`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore what holds every relationship, team, family, and friendship together: TRUST. Trust is the invisible foundation under everything. When it's there, hard things become possible. When it's missing, even simple things become hard. Trust is built slowly, through many small moments, and can be broken fast through one big betrayal or many small ones. Today, you learn how trust really works, and the steady practice of building it. This might be the most important leadership lesson in the whole subject. Take a steady breath, and let's begin.`,
          headline: `Building Trust`,
          subtitle: `The invisible foundation under every real relationship`,
          visual: `/ue-assets/sl/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Trust Is the Foundation Under Everything`,
          paragraphs: [
            `Think about the people you trust most in your life. A parent, a best friend, maybe a teacher or coach. Notice how with them, you can be more honest, more vulnerable, more YOU. That ease is what trust does. It creates SPACE for real connection. Now think of someone you don't quite trust. Notice how you stay more guarded, double-check what they say, never quite relax around them. That tension is what missing trust costs. Trust is the foundation. Without it, every relationship is built on sand.`,
            `Researcher Stephen COVEY (whose son also studies trust) calls trust the SPEED of relationships. When trust is high, things move fast: people work together easily, share honestly, take risks together. When trust is low, everything slows down: people double-check, hold back, protect themselves. This is true on teams, in families, in friendships, eventually in schools and workplaces. Trust isn't just nice, it's PRACTICAL. The teams, families, and friendships with the most trust accomplish more, suffer less, and last longer. Building trust isn't extra. It's the actual work of every relationship.`,
          ],
          image: `/ue-assets/sl/l16-s1-foundation.webp`,
          imageCaption: `Trust is the foundation. High trust = relationships move fast; low trust = everything slows.`,
          vocab: [
            {
              word: `trust`,
              definition: `The confidence that another person will keep their word, be honest, follow through, and have your back. The invisible foundation of every real relationship. Researcher Stephen Covey calls trust "the speed of relationships."`,
              audioPrompt: `Trust is the confidence that another person will keep their word, be honest, follow through, and have your back, {name}. It's the invisible foundation of every real relationship. Researcher Stephen Covey calls trust the speed of relationships. When trust is high, things move fast. People work together easily, share honestly, take risks together. When trust is low, everything slows down. People double-check, hold back, protect themselves. Trust isn't just nice. It's practical. The relationships with the most trust accomplish more, suffer less, and last longer.`,
            },
            {
              word: `speed of trust`,
              definition: `Stephen Covey's insight that trust acts like a tax or a dividend on every relationship. High trust = things move fast and cost less. Low trust = everything slows and costs more, with extra checking, approvals, and self-protection.`,
              audioPrompt: `The speed of trust is Stephen Covey's core insight that trust acts like a tax or a dividend on every relationship, {name}. When trust is high, things move fast and cost less. Decisions happen faster, collaboration is easier, less checking is needed. When trust is low, everything slows and costs more. Extra approvals, second-guessing, protecting your back. Trust literally changes how fast things move. In a team, family, or friendship with high trust, you can accomplish more, risk more, and enjoy more. Build it.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Trust Builds Slow, Breaks Fast`,
          paragraphs: [
            `Here's a hard truth about trust: it builds SLOWLY and breaks FAST. Trust is built one small moment at a time, over weeks, months, years. You said you'd be there, and you were. You said you'd keep a secret, and you did. You told the truth even when it was hard. Each small reliability adds a tiny brick to the trust foundation between you and another person. Hundreds of these tiny bricks, over time, become deep trust. There are no shortcuts. You can't speed-build trust with one big gesture. You build it slowly, through small consistent moments.`,
            `Breaking trust, on the other hand, is fast. ONE big betrayal can damage years of trust-building in an afternoon. Many small betrayals (broken promises, casual lies, gossip) erode trust quickly too, even if no single one is dramatic. This asymmetry is sobering: years of work, hours to undo. Knowing this changes how seriously you take small moments. The "little" promise you almost broke. The "small" lie you almost told. The "harmless" gossip you almost passed on. These moments are the actual building or breaking of trust. They matter more than the big dramatic moments people focus on. Be careful with the small moments. They're where trust really lives.`,
          ],
          image: `/ue-assets/sl/l16-s2-slow-fast.webp`,
          imageCaption: `Trust builds slowly through small moments. It breaks fast through betrayals. Mind the small moments.`,
          vocab: [
            {
              word: `trust asymmetry`,
              definition: `The reality that trust builds SLOWLY (through many small consistent moments over time) but breaks FAST (through one big betrayal or many small ones). Years of work can be undone quickly. Why small daily moments matter more than dramatic gestures.`,
              audioPrompt: `Trust asymmetry is the reality that trust builds slowly but breaks fast, {name}. It builds through many small consistent moments over time. You said you'd be there, and you were. You kept a secret. You told the truth even when hard. Hundreds of small reliabilities become deep trust. But one big betrayal can damage years of trust-building in an afternoon. Small betrayals erode it too. Years of work, hours to undo. This is why the small daily moments matter more than dramatic gestures.`,
            },
            {
              word: `trust repair`,
              definition: `The honest process of rebuilding trust after it's been broken — acknowledging what happened, taking real responsibility, offering to make it right, and changing going forward. Done well, repair can actually deepen trust after a broken moment.`,
              audioPrompt: `Trust repair is the honest process of rebuilding trust after it's been broken, {name}. It requires four things: acknowledging what happened honestly, taking real responsibility, offering to make it right, and changing your behavior going forward. Done well, trust repair can actually deepen trust after a broken moment. People sometimes trust you MORE after a well-handled breach than they did before. Because they've seen that when you fall short, you own it. That reliability in failure is rarer and more trustworthy than never being tested at all.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Five Moves of Building Trust`,
          paragraphs: [
            `Here are the five most powerful daily trust-building moves. First, KEEP SMALL PROMISES. The "tiny" things you said you'd do (text back, return the borrowed book, show up at 4pm) are the actual currency of trust. People notice when you do them. They notice MORE when you don't. Don't make a promise unless you mean to keep it; then keep the ones you make. Second, TELL THE TRUTH EVEN WHEN HARD. Not brutal honesty, the L04 kind: HONEST AND KIND. People sense when you tell the truth even when it costs you. They trust you because of it. Lying, even small lies, slowly erodes trust without people quite knowing why.`,
            `Third, ADMIT YOUR MISTAKES (L13!). Real apologies build huge trust. People know everyone makes mistakes; they trust the people who OWN them. Fourth, SHOW UP CONSISTENTLY. Be the same person across rooms, days, and moments. Reliability over time = trust. Don't be one person at home and another at school. Don't keep your word with friends but break it with siblings. Consistency is the deepest form of integrity. Fifth, REPAIR WHEN TRUST IS BROKEN. When you mess up (and you will), don't pretend, hide, or downplay. Real repair (acknowledge, take responsibility, offer to make it right, change going forward) actually deepens trust if done well. People sometimes trust you MORE after a well-handled mistake than they did before. These five moves, done consistently for years, build the deepest trust there is.`,
          ],
          image: `/ue-assets/sl/l16-s3-five-moves.webp`,
          imageCaption: `Keep small promises, tell truth, admit mistakes, show up consistently, repair when broken.`,
          vocab: [
            {
              word: `consistency`,
              definition: `Being the same trustworthy person across rooms, days, and moments. Not different at home vs. school, with friends vs. siblings. Reliability over time. The deepest form of integrity. People trust those they can predict.`,
              audioPrompt: `Consistency is being the same trustworthy person across rooms, days, and moments, {name}. Not different at home vs. school. Not different with friends vs. siblings. Reliability over time equals trust. Don't be one person here and another there. Don't keep your word with friends but break it at home. Consistency is the deepest form of integrity. People trust those they can predict. The kid whose word means the same thing on Tuesday and Saturday, with their best friend and with the new kid, becomes someone deeply trusted.`,
            },
            {
              word: `integrity`,
              definition: `The quality of being honest and doing what's right even when no one is watching. The alignment between what you say and what you do. What makes consistency real. People sense integrity over time without naming it — they just know this person's word means something.`,
              audioPrompt: `Integrity is the quality of being honest and doing what's right even when no one is watching, {name}. The alignment between what you say and what you do. You keep small promises when no one would know if you broke them. You tell the truth when a small lie would have been easier. You admit your mistake when hiding it would have cost nothing. Over time, people sense integrity without naming it. They just know: this person's word means something. That sense is the foundation of deep trust.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Trust Is the Whole Subject`,
          paragraphs: [
            `Look back at everything you've learned in this subject. Notice that almost every lesson has been about building trust in different ways. LEADING BY EXAMPLE (L01) builds trust through consistency. LISTENING (L02) builds trust by making people feel seen. EMPATHY (L03) builds trust by making people feel understood. SPEAKING UP KINDLY (L04) builds trust through honest care. BOUNDARIES (L05) build trust through self-respect and reliability. CONFLICT RESOLUTION (L06) deepens trust through hard moments. TEAMS (L07) succeed on trust. FRIENDSHIPS (L08) survive on trust and repair. UPSTANDER COURAGE (L09) builds trust that you'll have people's backs. KIND WORDS (L10) build trust slowly, daily. READING THE ROOM (L11) builds trust through being attuned. QUIET LEADERSHIP (L12) builds trust through track record. APOLOGIZING (L13) repairs broken trust. FEEDBACK (L14) deepens trust through honest growth. HONEST INFLUENCE (L15) preserves trust by refusing manipulation.`,
            `Every single lesson has been trust-building, taught from a different angle. That's because trust is the THROUGH-LINE of social leadership. The kid who learns all the skills from this subject becomes someone trusted, and that trust becomes the foundation of everything else. Valor's teaching: be the kid whose word people can rely on. Be the kid who tells truth kindly. Be the kid who shows up consistently and repairs when they fall short. Over time, you become someone everyone wants in their family, friend group, team, and one day workplace. Trust is built one small moment at a time. Build it gently and consistently. Watch it slowly become the foundation of every important thing in your life.`,
          ],
          image: `/ue-assets/sl/l16-s4-whole-subject.webp`,
          imageCaption: `Every lesson so far has been about trust from a different angle. Trust is the through-line.`,
          vocab: [
            {
              word: `trust as through-line`,
              definition: `The recognition that every social leadership skill (listening, empathy, kindness, courage, repair, integrity) is a way of building trust from a different angle. Trust isn't one lesson; it's what the entire subject quietly teaches you to build.`,
              audioPrompt: `Trust as through-line is the recognition that every social leadership skill is a way of building trust from a different angle, {name}. Listening builds trust by making people feel seen. Empathy by making them feel understood. Kindness, boundaries, conflict resolution, upstander courage, apologizing, feedback, honest influence, all of them are trust-building from different angles. Trust isn't one lesson. It's what the entire subject quietly teaches you to build. The kid who masters these skills becomes someone deeply trusted, and that trust becomes the foundation of everything else.`,
            },
            {
              word: `reliability`,
              definition: `The practice of doing what you said you would do, consistently over time. The backbone of trust. Every small kept promise adds to it; every broken small promise quietly subtracts. You don't need talent or popularity to be reliable — just do what you said.`,
              audioPrompt: `Reliability is the practice of doing what you said you would do, consistently over time, {name}. Not occasionally. Not mostly. Consistently. Reliability is the backbone of trust. Every small kept promise adds to it. Every broken small promise quietly subtracts. The kid whose word means the same thing on a Tuesday afternoon as on a Saturday morning, with their best friend and with the new kid, becomes someone deeply trusted. You don't need to be talented or popular to be reliable. You just need to do what you said.`,
            },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the five moves of building trust in order, {name}. Here they are scrambled. Use the arrows to arrange them from the FOUNDATION (smallest, most basic move) to the DEEPEST (the move that comes after trust has been damaged). This is the real daily practice.`,
          items: [
            { id: `step-promises`,   label: `KEEP SMALL PROMISES. The "tiny" things you said you'd do are the actual currency of trust`,                    position: 1 },
            { id: `step-truth`,      label: `TELL THE TRUTH EVEN WHEN HARD — honest AND kind (not brutal); lies erode trust without people knowing why`,     position: 2 },
            { id: `step-mistakes`,   label: `ADMIT YOUR MISTAKES — real apologies build huge trust because everyone messes up; few own it`,                  position: 3 },
            { id: `step-consistent`, label: `SHOW UP CONSISTENTLY — be the same person across rooms, days, friends, siblings — reliability over time`,      position: 4 },
            { id: `step-repair`,     label: `REPAIR WHEN TRUST IS BROKEN — acknowledge, take responsibility, change forward; people often trust MORE after good repair`, position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the practice of building trust: keep small promises, tell hard truths kindly, admit mistakes, show up consistently, and repair when broken. Done daily, this is how the deepest trust is built. Most people don't practice these five moves consistently. You can. And the trust you build over time becomes the foundation of every important relationship in your life.`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What does Stephen COVEY call TRUST?`,
              options: [
                `A bonus`,
                `The SPEED of relationships. When trust is high, things move fast. When low, everything slows down`,
                `A waste of time`,
                `Just a feeling`,
              ],
              correctIndex: 1,
              explanation: `Stephen Covey calls trust the speed of relationships. When trust is high, things move fast (people work together, share honestly, take risks together). When trust is low, everything slows (double-checking, holding back, self-protection). Trust isn't just nice, it's practical.` },

            { id: `l16-q2`, format: `true-false`,
              question: `True or false: Trust builds quickly and breaks slowly.`,
              correctAnswer: false,
              explanation: `False. The opposite: trust builds SLOWLY (through many small consistent moments over time) and breaks FAST (through one big betrayal or many small ones). Years of work, hours to undo. This asymmetry is why small daily moments matter more than dramatic gestures.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `What is the CURRENCY of trust in daily life?`,
              options: [
                `Big dramatic gestures`,
                `Small promises kept. The "tiny" things you said you'd do (text back, return the book, show up at 4pm)`,
                `Money`,
                `Big speeches`,
              ],
              correctIndex: 1,
              explanation: `Small promises kept are the actual currency of trust. The "tiny" things you said you'd do are where trust is built (or broken). People notice when you do them, and they notice MORE when you don't. Don't make promises you don't mean to keep; then keep the ones you make.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `Why do LIES (even small ones) erode trust?`,
              options: [
                `They don't`,
                `Small lies slowly erode trust without people quite knowing why. People sense honesty (or its absence) even when they can't name it`,
                `Only big lies matter`,
                `Lies build trust`,
              ],
              correctIndex: 1,
              explanation: `Small lies slowly erode trust without people quite knowing why. People SENSE honesty (or its absence) even when they can't name it specifically. Honest-and-kind communication (L04) builds; subtle dishonesty erodes. People trust those they can rely on for truth.` },

            { id: `l16-q5`, format: `multiple-choice`,
              question: `What is CONSISTENCY in trust-building?`,
              options: [
                `Being predictable in a boring way`,
                `Being the SAME trustworthy person across rooms, days, friends, siblings. The deepest form of integrity`,
                `Doing the same thing forever`,
                `Never changing your mind`,
              ],
              correctIndex: 1,
              explanation: `Consistency means being the same trustworthy person across rooms, days, and moments. Not different at home vs. school, with friends vs. siblings. People trust those they can predict. Consistency is the deepest form of integrity.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `What's a SURPRISING truth about ADMITTING MISTAKES?`,
              options: [
                `It always damages trust`,
                `Real repair after a mistake often DEEPENS trust. People sometimes trust you MORE after a well-handled mistake than before`,
                `Mistakes ruin everything`,
                `Always hide mistakes`,
              ],
              correctIndex: 1,
              explanation: `Real repair after a mistake often DEEPENS trust, not damages it. People know everyone makes mistakes. They trust the people who own them. A well-handled mistake can actually build MORE trust than if it never happened, because it shows you're honest and accountable.` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `What does Valor say connects EVERY lesson in this subject?`,
              options: [
                `Just talking`,
                `Every lesson (listening, empathy, kindness, courage, repair, integrity) has been a way of BUILDING TRUST from a different angle`,
                `Nothing connects them`,
                `Random topics`,
              ],
              correctIndex: 1,
              explanation: `Every social leadership skill is a way of building trust. Listening builds trust by making people feel seen. Empathy by making them feel understood. Kind words, boundaries, repair, courage, honest influence, all are trust-building from different angles. Trust is the through-line of the entire subject.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What's the SUMMARY of trust-building?`,
              options: [
                `Quick and easy`,
                `Build slowly through small consistent moments. Keep small promises, tell hard truths kindly, admit mistakes, show up consistently, repair when broken`,
                `Once and done`,
                `Magic`,
              ],
              correctIndex: 1,
              explanation: `Build slowly through small consistent moments. Five moves: keep small promises, tell hard truths kindly, admit mistakes, show up consistently, repair when broken. Done daily for years, this builds the deepest trust there is.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Take a steady breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Who do you trust most deeply in your life? What do they consistently DO that makes them so trustworthy?` },
            { id: `r2`, text: `Be honest, are there "small promises" you've been breaking lately (texts back, things you said you'd do)? Without shame, just notice.` },
            { id: `r3`, text: `Are you the SAME person across all rooms — home, school, with friends, with strangers? Where might consistency be growing in you?` },
            { id: `r4`, text: `Of the 5 trust-building moves, which feels most natural to you? Which would you most like to grow?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Trust research is some of the most consistent in psychology, business, and family studies. People who consistently build trust have stronger friendships, healthier families, more successful careers, and longer marriages. Workplaces with high trust outperform low-trust ones by huge margins. Schools with high-trust cultures see less bullying and more learning. Families with high trust raise more resilient kids. Trust isn't soft, it's foundational. Valor's note: trust is the quiet, deeply powerful skill behind everything else. You don't have to be talented, popular, or charismatic to be deeply trusted. You just have to keep small promises, tell hard truths kindly, admit your mistakes, show up consistently, and repair when broken. Done over years, this builds the kind of life where people around you have your back, you have theirs, and real things become possible. Build trust gently and consistently. It becomes the foundation of every important thing.`,
          familyAdventure: `Family Trust Inventory. As a family, talk gently together. Where is trust strong in our family? Where could it grow? Each person shares ONE small promise they want to keep more consistently this week (texting back, doing what they said, telling the truth even when small). At the end of the week, talk about how it went. Don't shame anyone for breaking small things, just notice and recommit. Adults model it too. Trust is built (and broken) in the home first. The family that practices trust consciously becomes a place where everyone feels safe to be themselves.`,
          creativePrompt: {
            intro: `Write about someone in your life you deeply trust — and the small consistent moments that built that trust.`,
            floor: `Write at least 5 sentences. Describe the person and 2-3 specific small things they DO that make them trustworthy.`,
            stretch: `Write 8 to 10 sentences. Show the small daily moments of trust-building that add up over time.`,
            open: `Write as much as you want. Write a full piece about someone you deeply trust (a parent, friend, sibling, coach, teacher, family member, real or imagined). Describe the small consistent moments that built that trust over time. Show how they KEEP SMALL PROMISES, TELL HARD TRUTHS KINDLY, ADMIT MISTAKES, SHOW UP CONSISTENTLY across rooms and days, and REPAIR WHEN THINGS GO WRONG. Reflect on what their trust gives you (the freedom to be more honest, more vulnerable, more YOU around them). End with reflection on the kind of trust-builder YOU want to be in others' lives, and one small move you'll start with. Make it specific, warm, and real.`,
            frames: [
              `The person I trust most deeply is ___.`,
              `What they consistently do to earn that trust is ___.`,
              `One small moment that stands out is when they ___.`,
              `What their trustworthiness gives me is ___.`,
              `The kind of trust-builder I want to be, starting small, is ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand the foundation under every relationship: TRUST. You know the asymmetry (builds slow, breaks fast), the 5 moves of building it, and the truth that every lesson in this subject has been about trust from a different angle. Build it slowly, consistently, gently. Watch it become the foundation of every important thing in your life. Next, we explore the strength that comes from being open to people different from you. DIVERSITY AS STRENGTH. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `trust-builder`,
          badgeName: `Trust Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
