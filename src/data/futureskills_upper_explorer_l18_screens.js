// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L18 — Adapting to Change
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : adaptability research, accepting impermanence, flexibility
//            with stable core. Builds on L11 (iteration), L12 (problem-
//            solving), L15 (failure), and connects to Inner World L01
//            (awareness) and Life Wellness L07 (stress recovery).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of adapting well to change)
// SCOPE: change is the default state, not the exception; resisting change
//        creates suffering; what STAYS stable (your values, the people who
//        love you, your developed skills) vs. what FLEXES (situations,
//        plans, methods); trust your skills to handle what comes
// VOICE: Byte = warm, grounded, treats change as the fox's native terrain
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-18`,
      title: `Adapting to Change`,
      duration: 18,
      xpReward: 75,
      badge: `adapter`,
      badgeName: `Adapter`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle one of the most important truths nobody teaches kids well: CHANGE IS THE DEFAULT. School year ends, friendships shift, families grow and shrink, technology changes, you grow up, the world keeps moving. Most kids and adults treat change like a problem to solve or a disruption to recover from. The fox-wise see it differently. Change is the natural shape of being alive. The kids who learn to ADAPT WELL handle whatever life brings without falling apart. Today, you learn the real skill of adapting, not just surviving change, but moving with it. Let's go.`,
          headline: `Adapting to Change`,
          subtitle: `Change is the default. Adapting well is one of the most powerful skills you'll ever build`,
          visual: `/ue-assets/fs/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Change Is the Default, Not the Exception`,
          paragraphs: [
            `Here's a truth most people miss because adults often hide it from kids to make them feel safe. Life is CONSTANT CHANGE. Seasons change. Your body grows. Friends shift. Schools change. Families evolve. Skills develop. Technology updates. The world keeps moving. NOTHING STAYS THE SAME for long. Most people treat this as a problem ("ugh, things keep changing!"). The wiser view, change isn't a problem, it's the SHAPE OF BEING ALIVE. Researchers studying happiness have found that people who EXPECT change and accept it suffer way less than people who keep being surprised that things keep shifting. The second group is constantly disappointed reality won't hold still. The first group lives in real life.`,
            `Here's the gentle version of this truth. Change isn't bad. It's how good things grow, AND it's how hard things eventually pass. Without change, summer would never give way to fall; you'd never grow up; friendships couldn't deepen over time; you'd never learn anything. The same impermanence that makes you sad when something ends is what makes growth possible. The fox-style move: instead of fighting change, get curious about it. "What's shifting? What's ending? What's beginning?" Notice without forcing it to be different. This single shift, from FIGHTING change to ACCEPTING it, is one of the most powerful moves in a person's life. Buddhist teachers have taught it for 2,500 years. Modern researchers keep finding it's true.`,
          ],
          image: `/ue-assets/fs/l18-s1-default.webp`,
          imageCaption: `Change is the SHAPE of being alive, not a problem to solve. Accept it and suffer less.`,
          vocab: [
            { word: `change as default`,
              definition: `The truth that change is the natural state of life, not the exception. Seasons, bodies, friendships, schools, families, skills, tech, the world, all in motion. Researchers found people who accept change suffer way less than those who keep being surprised by it. Buddhist teachers have taught this for 2,500 years. Modern research confirms.`,
              audioPrompt: `Change as default is the truth that change is the natural state of life, not the exception, {name}. Most people treat change as a problem. The wiser view, change isn't a problem, it's the shape of being alive. Seasons change. Your body grows. Friends shift. Schools change. Families evolve. Skills develop. Technology updates. Nothing stays the same for long. Researchers found people who expect change and accept it suffer way less than people who keep being surprised that things keep shifting. Buddhist teachers have taught this for 2,500 years.` },
            { word: `impermanence`,
              definition: `The truth that nothing lasts forever, and that this is the natural order of things, not a flaw. Everything is always changing. The wisdom traditions that have lasted longest across history — Buddhism, Stoicism, many others — all teach that fighting impermanence creates suffering. Accepting it creates peace. Not because change is always easy. Because fighting what is real never works.`,
              audioPrompt: `Impermanence is the truth that nothing lasts forever, and that this is the natural order, not a flaw, {name}. Everything is always changing. People grow and age. Friendships evolve. Seasons shift. Even the things you love most are always in motion. The wisdom traditions that have lasted longest across human history, Buddhism, Stoicism, many others, all teach that fighting impermanence creates suffering. Accepting it creates peace. Not because change is always easy, it often isn't. But because fighting what is real never works.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What STAYS Stable When Things Change`,
          paragraphs: [
            `Here's the move that makes adapting possible. Even when EVERYTHING outside seems to be changing, SOME THINGS STAY STABLE inside and around you. Your VALUES (kindness, honesty, curiosity, love, what really matters to you) can stay stable even when situations change. The PEOPLE WHO LOVE YOU stay loving even when school, friends, or routines shift. Your DEVELOPED SKILLS (the ones you've built, thinking, learning, creating, problem-solving) travel with you everywhere. Your CAPACITY to figure things out grows as you do. Researchers studying resilience found that knowing what STAYS stable is one of the most protective things during change. People who can name "what stays" weather change far better.`,
            `When change hits, ask yourself, "What's STILL TRUE? What hasn't changed?" Maybe your school changed but your love for science didn't. Maybe your friend group shifted but your kindness didn't. Maybe your routine got disrupted but your skills are intact. This isn't denial, it's ANCHORING. You don't pretend nothing changed; you notice what is still true while letting the rest move. The fox-image: in a windy forest, the tree that bends survives, the tree that resists snaps. But the tree's ROOTS stay deep through the wind. Your roots, your values, the people who love you, your developed skills, stay deep. Your branches flex with the wind. This is the SHAPE of adapting well, flexible at top, anchored below.`,
          ],
          image: `/ue-assets/fs/l18-s2-stable.webp`,
          imageCaption: `Roots stay deep, branches flex. Values, people who love you, skills, capacity. What STAYS during change.`,
          vocab: [
            { word: `what stays stable`,
              definition: `The protective practice of identifying what STAYS the same when things change. Your values, the people who love you, your developed skills, your growing capacity. Like a tree, branches flex with wind, roots stay deep. Researchers found this is one of the most protective practices during change. "What's still true?"`,
              audioPrompt: `What stays stable is the protective practice of identifying what stays the same when things change, {name}. Even when everything outside seems to be changing, some things stay stable. Your values, kindness, honesty, curiosity, love, can stay stable even when situations change. The people who love you stay loving. Your developed skills travel with you. Your capacity to figure things out grows. Researchers found people who can name what stays weather change far better. Like a tree in a windy forest, the tree that bends survives.` },
            { word: `anchoring`,
              definition: `The practice of finding your stable ground during times of change. When things shift, ask: "What's still true? What hasn't changed?" Naming what stays isn't denial — it's finding your roots while the branches bend. One of the most protective practices against anxiety and overwhelm during transitions.`,
              audioPrompt: `Anchoring is the practice of identifying what stays stable during times of change, {name}. When things shift around you, the first step is to find your ground. What's still true? What hasn't changed? Maybe the school changed but your love of learning didn't. Maybe the friend group shifted but your kindness didn't. Maybe your routine was disrupted but your values are intact. Naming what stays isn't denial. It's finding your roots while the branches bend.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Flex What Needs to Flex`,
          paragraphs: [
            `Once you know what stays, the next move is FLEXING what needs to flex. This means changing your plans, methods, expectations, and approaches when the situation calls for it. Most suffering during change comes from STUBBORNNESS, trying to keep doing things the OLD WAY when the situation has changed. Examples. New teacher with different rules? FLEX your study methods. Friend moved away? FLEX how you stay in touch. New app or technology you'll need to learn? FLEX your willingness to be a beginner again. Family situation shifted? FLEX your routines. The kids who FLEX well in these situations adapt fast. The kids who REFUSE to flex usually struggle for longer than they need to.`,
            `Flexibility doesn't mean letting go of EVERYTHING. It means letting go of the SPECIFIC METHODS while keeping the values and goals. Example. If you wanted to talk with your best friend every day and they moved, the GOAL (staying close) stays; the METHOD (in-person daily talk) flexes (now video calls, texts, longer visits). If your study routine got disrupted, the GOAL (learning) stays; the METHOD flexes (new schedule, new place to focus). The fox-style move: notice what's actually NEEDED vs. what you're used to, and let go of the latter when life calls for it. This isn't giving up, it's adapting. The most resilient people across history have all shared this quality, fierce about values, flexible about methods.`,
          ],
          image: `/ue-assets/fs/l18-s3-flex.webp`,
          imageCaption: `Flex methods, keep values. Old methods stop working when life changes. Change methods, not yourself.`,
          vocab: [
            { word: `flex methods, keep values`,
              definition: `The adaptive move of changing your methods, plans, and approaches when situations change, while keeping your underlying values and goals. Goal: stay close to a friend. Method: in-person daily talk. If friend moves, method flexes (video, texts), goal stays. Fierce about values, flexible about methods. Most adaptive people share this.`,
              audioPrompt: `Flex methods keep values is the adaptive move when things change, {name}. Most suffering during change comes from stubbornness, trying to keep doing things the old way when the situation has changed. Flexibility doesn't mean letting go of everything. It means letting go of the specific methods while keeping the values and goals. If you wanted to talk with your best friend every day and they moved, the goal of staying close stays. The method of in-person daily talk flexes, now video calls, texts, longer visits.` },
            { word: `adaptive flexibility`,
              definition: `The ability to change your approach when the situation changes, while keeping your core values and goals intact. Not giving up what matters — changing HOW you pursue it. Rigid people keep applying old methods even when situations have changed. Flexible people ask what the new situation calls for and adjust. Fierce about values, flexible about methods.`,
              audioPrompt: `Adaptive flexibility is the ability to change your approach when the situation changes, while keeping your core values and goals intact, {name}. It's different from just going along with everything. You're not giving up what matters. You're changing HOW you pursue it. Rigid people keep applying old methods even when situations have changed, and then wonder why they're struggling. Flexible people ask what this new situation calls for and adjust. The most capable people across history have always been fierce about their values and flexible about their methods.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Trust Your Skills to Handle What Comes`,
          paragraphs: [
            `Here's the deepest move. Most fear about change comes from a worry, "what if I can't handle what comes?" Here's the truth that grows with you. YOU ALREADY HAVE SKILLS that handle change well. You've been adapting your whole life. You went from not walking to walking. From not reading to reading. From kid friendships to deeper ones. From simple problems to harder ones. Each time, change happened, and you grew through it. Researchers studying resilience found that REMEMBERING your past adaptations is one of the most protective practices. "I've handled change before. I can handle this." Not arrogance, just accurate self-knowledge.`,
            `Plus, you're building MORE skills through this whole subject. Sharp thinking (L01). Asking good questions (L02). Truth-tracking (L03). Learning anything (L08). Focus (L10). Creativity (L11). Problem-solving (L12). Failure and iteration (L15). Working with different minds (L16). All of these become tools for handling whatever change brings. You can't predict every change coming. You CAN trust the skills you're building. The fox's instinct: I don't need to know exactly what's coming. I trust my eyes, ears, legs, and learning. Byte's first teaching: change is the default of life, not the exception. Identify what STAYS stable (values, people, skills, capacity). FLEX what needs to flex (methods, plans, approaches). Trust the skills you're building. Adaptive foxes thrive across decades of change. Stubborn ones get stuck. Be one of the thriving ones.`,
          ],
          image: `/ue-assets/fs/l18-s4-trust.webp`,
          imageCaption: `You've handled change before. You can handle this. Trust the skills you're building.`,
          vocab: [
            { word: `trust your skills`,
              definition: `The grounding practice of remembering your past adaptations and trusting your developed skills to handle what comes. "I've handled change before. I can handle this." Plus all the skills you're building in this subject become tools for any change. Not arrogance, just accurate self-knowledge.`,
              audioPrompt: `Trust your skills is the grounding practice for adapting, {name}. Most fear about change comes from a worry, what if I can't handle what comes? Here's the truth. You already have skills that handle change well. You've been adapting your whole life. You went from not walking to walking. From not reading to reading. From simpler friendships to deeper ones. Each time, change happened, and you grew through it. Researchers found remembering your past adaptations is one of the most protective practices. I've handled change before. I can handle this.` },
            { word: `resilience`,
              definition: `The ability to adapt, recover, and keep going after difficulty or change. NOT the same as not feeling hard things — it means not staying broken by them. Built through practice: accepting reality, finding what stays stable, remembering past adaptations, trusting developing skills, connecting with people who care. Every time you adapt and keep going, you're building more.`,
              audioPrompt: `Resilience is the ability to adapt, recover, and keep going after difficulty or change, {name}. It doesn't mean not feeling hard things. It means not staying broken by them. Researchers studying resilience have found several consistent habits that build it. Accepting reality rather than fighting it. Finding what stays stable. Remembering past adaptations. Trusting your developing skills. Connecting with people who care about you. Resilience isn't a personality trait you're born with or without. Every time you adapt to change and keep going, you're building more of it.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the 5 moves of adapting well to change in order, {name}. From FIRST RECOGNITION to FINAL TRUST. Use the arrows to arrange them.`,
          items: [
            { id: `step-notice`,    label: `NOTICE THE CHANGE. Name what's actually shifting; don't pretend it's not happening; this is the honest first step that most people skip`,                                                       position: 1 },
            { id: `step-accept`,    label: `ACCEPT WHAT IS. Change is the SHAPE of life, not a problem; fighting it creates suffering; accepting doesn't mean liking, just stopping the fight against reality`,                          position: 2 },
            { id: `step-stable`,    label: `FIND WHAT'S STABLE — name what STAYS: your values, the people who love you, your developed skills, your growing capacity; these are your roots`,                                              position: 3 },
            { id: `step-flex`,      label: `FLEX WHAT NEEDS TO FLEX. Your METHODS, plans, routines, approaches. Goals and values stay, the HOW changes. Fierce about values, flexible about methods`,                                  position: 4 },
            { id: `step-trust`,     label: `TRUST YOUR SKILLS. You've adapted before (walking, reading, growing friendships); the skills you're building handle whatever comes; you don't need to know exactly what's next`,         position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of adapting well: notice the change, accept what is, find what's stable, flex what needs to flex, trust your skills. Use this for the rest of your life. Change will keep coming. You will keep growing through it. Foxes are made for this.`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l18-q1`, format: `true-false`,
              question: `True or false: Change is the EXCEPTION in life. Things mostly stay the same.`,
              correctAnswer: false,
              explanation: `False. Change is the DEFAULT, not the exception. Seasons change. Bodies grow. Friends shift. Schools change. Families evolve. Skills develop. Technology updates. NOTHING stays the same for long. Researchers found people who EXPECT and accept change suffer far less than those who keep being surprised that things keep shifting.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What's the WISER VIEW of change?`,
              options: [
                `Change is a problem`,
                `Change is the SHAPE of being alive. It's how good things grow AND how hard things eventually pass; accepting it (not fighting it) reduces suffering hugely`,
                `Change is random`,
                `Change is bad`,
              ],
              correctIndex: 1,
              explanation: `The wiser view: change isn't a problem, it's the SHAPE of being alive. Without change, summer would never give way to fall; you'd never grow up; friendships couldn't deepen; you'd never learn anything. The same impermanence that makes you sad when things end is what makes growth possible. Buddhist teachers have taught this for 2,500 years. Modern research confirms.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `When things change, WHAT STAYS STABLE?`,
              options: [
                `Nothing`,
                `Your VALUES (kindness, honesty, what matters), the PEOPLE WHO LOVE YOU, your DEVELOPED SKILLS, your growing CAPACITY. Your roots stay deep while branches flex`,
                `Random things`,
                `Only your stuff`,
              ],
              correctIndex: 1,
              explanation: `Even when everything outside changes, some things STAY stable. Your values can stay stable even when situations change. The people who love you stay loving. Your developed skills travel with you. Your capacity grows. Researchers found knowing what stays is one of the most protective practices during change. Roots deep, branches flex.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What does FLEX WHAT NEEDS TO FLEX mean?`,
              options: [
                `Change everything`,
                `Change your METHODS, plans, routines, approaches when situations call for it. KEEP your goals and values, let go of specific HOW. Fierce about values, flexible about methods`,
                `Random changes`,
                `Give up easily`,
              ],
              correctIndex: 1,
              explanation: `Flex what needs to flex means changing your methods, plans, and approaches when situations call for it, while keeping your underlying values and goals. Goal: stay close to a friend. Method: in-person daily talk. If friend moves, method flexes (video, texts), goal stays. Fierce about values, flexible about methods.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: Letting go of the OLD METHOD when life changes is GIVING UP.`,
              correctAnswer: false,
              explanation: `False. Letting go of an old method when life changes isn't giving up, it's ADAPTING. The kids who refuse to change their methods when situations change usually struggle longer than they need to. Flexibility isn't weakness, it's wisdom. The most resilient people across history all share this quality.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `Where does most FEAR about change come from?`,
              options: [
                `Random worry`,
                `Worry that "I CAN'T HANDLE what comes" — but you've adapted your whole life (walking, reading, friendships growing); remembering past adaptations is protective`,
                `Just dramatic feelings`,
                `Boredom`,
              ],
              correctIndex: 1,
              explanation: `Most fear about change comes from the worry "what if I can't handle what comes?" The truth: you've been adapting your whole life. From not walking to walking. From not reading to reading. From simple friendships to deeper ones. Each time, change happened, you grew through it. Researchers found remembering past adaptations is one of the most protective practices.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `What is the TREE-IN-WIND image of adapting?`,
              options: [
                `Trees die`,
                `BRANCHES FLEX with the wind, ROOTS stay deep. Values, people who love you, and developed skills are your roots. Methods, plans, routines flex like branches`,
                `Random tree`,
                `Trees fight wind`,
              ],
              correctIndex: 1,
              explanation: `The tree-in-wind image: branches flex with the wind, roots stay deep. The tree that bends survives; the tree that resists snaps. Your roots (values, people who love you, developed skills) stay deep through change. Your branches (methods, plans, routines) flex with what life brings. Flexible at top, anchored below.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about adapting?`,
              options: [
                `Resist change`,
                `Change is the default of life. Identify what STAYS stable. FLEX what needs to flex. Trust the skills you're building. Adaptive foxes thrive across decades; stubborn ones get stuck`,
                `Just hope for the best`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Change is the default of life, not the exception. Identify what stays stable (values, people, skills, capacity). FLEX what needs to flex (methods, plans, approaches). Trust the skills you're building. Adaptive foxes thrive across decades of change. Stubborn ones get stuck. Be one of the thriving ones.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Take a steady breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What's ONE change happening in your life right now? (School, friend, family, body, world) Name it. Are you accepting it or fighting it?` },
            { id: `r2`, text: `Through that change, what's STILL TRUE? What values, people, skills are STAYING? Name them. They're your roots.` },
            { id: `r3`, text: `What OLD METHOD might you need to FLEX in this changed situation? What new way could meet the same goal?` },
            { id: `r4`, text: `Remember THREE changes you've already adapted to in your life (walking, reading, moving, friendship change). What did you learn? What did you discover about yourself?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Research on adaptability and resilience has produced consistent findings across many fields. People who view change as natural (rather than a problem), who can identify what stays stable, who flex methods while keeping values, and who trust their developed skills, weather change far better than people who don't. This isn't just feel-good wisdom, it's well-documented. Buddhist philosophy, Stoic philosophy, modern psychology, and resilience research all point to the same set of practices. Byte's note: you're growing up in a particularly change-heavy era of human history. Technology shifts fast. Climate and society are changing. Your generation will likely live through changes neither you nor your parents can predict yet. The kids who develop real adaptability skills early have a huge advantage. Not just for big global changes, but for the daily, weekly, yearly changes of an entire life. Friendships shift, schools end, families grow, you become different versions of yourself across decades. Adaptability is the skill that lets you keep being YOU while everything around you (and within you) keeps moving. Foxes have always been masters of changing landscapes. You can be too.`,
          familyAdventure: `Family Change Reflection. As a family, talk about ONE big change your family has been through (a move, a loss, a new sibling, a job change, anything). Ask: What STAYED stable through it? What did each of us have to FLEX? What did we learn we could handle? Adults model honest reflection. Building this conversation into family life teaches everyone to look back and see that they have, in fact, adapted before. Many families find this practice strengthens everyone's sense that they can handle what comes next.`,
          creativePrompt: {
            intro: `Write about a change in your life, what's staying, what's flexing, and what you trust about yourself.`,
            floor: `Write at least 5 sentences. Name a current change and apply the moves.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on adapting.`,
            open: `Write as much as you want. Pick a CHANGE in your life right now (recent, current, or upcoming). It can be small (a routine shifting) or big (a family change, a friendship shift, growing up). Write your full ADAPTATION PIECE. (1) NAME what's actually changing. Don't soften it. What's shifting? (2) Notice if you're ACCEPTING it or FIGHTING it (be honest, no judgment). (3) Identify what STAYS stable. Your values? The people who love you? Your developed skills? Your capacity to figure things out? (4) Identify what needs to FLEX. Old methods, plans, routines, expectations. What new way could meet the same goal? (5) Remind yourself of PAST changes you've adapted to. What did you learn? What does that tell you about how you'll handle this one? End with a commitment to flex with grace through whatever comes. Make it specific, brave, and grounded.`,
            frames: [
              `A change in my life right now: ___.`,
              `Honestly, I've been (accepting/fighting): ___.`,
              `What STAYS stable for me: ___.`,
              `What needs to FLEX: ___.`,
              `Past changes I've already adapted to: ___.`,
              `What I trust about myself: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Grounded, brave work, {name}! You now have one of the most important life skills, ADAPTING WELL TO CHANGE. Change is the default. Find what stays. Flex what needs to flex. Trust your skills. Use this when school changes, friends shift, families evolve, the world moves. You'll handle what comes. Almost there in this subject! Just two more lessons. Next, the skill that ties everything together for the rest of your life, LIFELONG LEARNING. The practice of staying curious and capable across decades. Sharpen your ears, and I'll see you there. Byte 🦊.`,
          badge: `adapter`,
          badgeName: `Adapter`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L18;
