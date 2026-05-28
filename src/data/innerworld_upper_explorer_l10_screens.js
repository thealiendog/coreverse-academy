// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L10 — Emotional Intelligence: The 5 Components
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : emotional intelligence (Goleman's 5-component model) —
//            self-awareness, self-regulation, motivation, empathy, social
//            skills. Real science, real neuroscience connections, practical.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify scenario into the correct EQ component)
// SCOPE: 4 concepts — what EQ is, self-awareness + self-regulation,
//        motivation + resilience, empathy + social skills
// VOICE: Sage = warm, grounded, precise, celebrates genuine insight
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-10`,
      title: `Emotional Intelligence: The 5 Components`,
      duration: 20,
      xpReward: 75,
      badge: `eq-explorer`,
      badgeName: `EQ Explorer`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we explore one of the most studied and celebrated ideas in modern psychology: EMOTIONAL INTELLIGENCE, or EQ. Dr. Daniel Goleman identified five core components that together shape how well we understand ourselves, manage our feelings, stay motivated, and connect with other people. Research shows these five skills powerfully shape friendships, wellbeing, leadership, and long-term success. And here's what makes EQ remarkable: unlike IQ, EQ is genuinely learnable. Every lesson in this Inner World series has been building your EQ. Today you'll finally have the whole map.`,
          headline: `Emotional Intelligence: The 5 Components`,
          subtitle: `The five inner skills that shape your friendships, wellbeing, and success`,
          visual: `/ue-assets/iw/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Emotional Intelligence Is`,
          paragraphs: [
            `EMOTIONAL INTELLIGENCE (EQ) is the ability to understand and manage emotions — your own and other people's. Dr. Daniel Goleman identified five components that together make up EQ: self-awareness, self-regulation, motivation, empathy, and social skills. These aren't personality traits you're born with. They're skills, built through practice and attention. Decades of research show that people with strong EQ tend to have better friendships, handle stress more effectively, succeed in school and work, and report higher wellbeing. EQ is just as important as academic intelligence — and unlike IQ, it can grow significantly throughout your life.`,
            `Here's what makes EQ special: it works INSIDE and BETWEEN people. Inner EQ (self-awareness, self-regulation, motivation) helps you understand and guide yourself. Outer EQ (empathy and social skills) helps you understand and connect with others. Together, all five components create a powerful inner toolkit. You've already been building EQ in this course. Name it to tame it? That was self-awareness. The Observer lesson? Self-awareness and self-regulation together. Flow states and manifestation? EQ motivation. Today you get the whole picture — the five-part map of emotional intelligence.`,
          ],
          image: `/ue-assets/iw/l10-s1-what-is-eq.webp`,
          imageCaption: `EQ: five learnable skills that shape how you feel, connect, and grow.`,
          vocab: [
            {
              word: `emotional intelligence`,
              definition: `The ability to understand and manage your own emotions and recognize and influence the emotions of others. Goleman's model identifies five components: self-awareness, self-regulation, motivation, empathy, and social skills. Unlike IQ, EQ grows throughout life.`,
              audioPrompt: `Emotional intelligence, or EQ, is the ability to understand and handle emotions well, {name}. Both your own and other people's. Daniel Goleman made this idea famous, and decades of research show EQ powerfully shapes friendships, success, happiness, leadership, and physical health. EQ doesn't replace IQ. It works alongside it. EQ is what lets you live well with what you know. Here's the great news: unlike IQ, EQ is a skill you can deliberately build. The people with the strongest EQ aren't born that way. They learned it.`,
            },
            {
              word: `social-emotional learning`,
              definition: `The educational approach to teaching EQ skills in schools. SEL programs help students develop self-awareness, self-regulation, empathy, and social skills. Research shows strong SEL programs improve academic outcomes and mental health while reducing conflicts.`,
              audioPrompt: `Social-emotional learning, or SEL, is the educational approach to teaching EQ skills, {name}. Instead of only focusing on academic knowledge, SEL helps students develop self-awareness, self-regulation, empathy, and social skills. Research shows that strong SEL programs improve academic outcomes AND mental health, while reducing conflicts and improving relationships. The five EQ components you're learning today are exactly the skills SEL programs teach. Understanding this map means you're already ahead. Emotional intelligence is a real subject worth studying.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Self-Awareness and Self-Regulation`,
          paragraphs: [
            `SELF-AWARENESS is the first and most foundational component: knowing what you're feeling, right now, with honesty. It seems simple, but it's a real skill. Many people walk through their days upset, anxious, or frustrated without really knowing what they're feeling — so the feelings just sort of run them. Self-aware people pause and notice. "I'm feeling jealous right now." "I'm feeling anxious about this test." Naming a feeling actually calms the brain (remember "name it to tame it"?). Self-awareness is the foundation every other EQ skill builds on. You can't manage what you don't notice.`,
            `SELF-REGULATION is what you do with the feelings you notice. Not pushing them away, but not letting them sweep you off. Self-regulating doesn't mean having no emotions — it means not letting emotions make all your decisions. A self-regulating kid feels angry when their turn is skipped, but pauses, breathes, and chooses to say "I think it was my turn" instead of yelling. Your prefrontal cortex (the calm, planning part of your brain) can stay in charge even when your amygdala is fired up. Every time you pause between feeling and reacting, you're building the brain circuitry for self-regulation.`,
          ],
          image: `/ue-assets/iw/l10-s2-awareness-regulation.webp`,
          imageCaption: `Self-awareness: noticing what you feel. Self-regulation: choosing what you do with it.`,
          vocab: [
            {
              word: `self-awareness`,
              definition: `Knowing what you're feeling in the moment, with honesty. The first and most foundational EQ component. Naming a feeling calms the brain and makes it possible to manage the emotion. You can't manage what you don't notice.`,
              audioPrompt: `Self-awareness is knowing what you're feeling, in the moment, with honesty, {name}. It sounds simple, but it's a real skill. Many people walk around upset or anxious without realizing what they're feeling, which means the feelings just sort of run them. Self-aware people pause and notice. I'm feeling frustrated. I'm feeling nervous. Remember name it to tame it from our first lesson? That was your first step into self-awareness. It's the foundation of everything else in emotional intelligence. You can't manage what you don't notice.`,
            },
            {
              word: `self-regulation`,
              definition: `The ability to handle your emotions wisely once you've noticed them. Not pushing feelings away, but not letting them sweep you off either. Your prefrontal cortex doing its calm work even when the amygdala is fired up.`,
              audioPrompt: `Self-regulation is the ability to handle your emotions wisely once you've noticed them, {name}. Not pushing feelings away, but not letting them sweep you off either. A self-regulating kid might feel angry but pause and choose how to respond instead of yelling. Self-regulation is your prefrontal cortex doing its calm work even when the amygdala is fired up. It works hand in hand with self-awareness: you can't manage what you don't notice, and noticing without managing isn't enough. Together they are the inner foundation of EQ.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Motivation and Resilience`,
          paragraphs: [
            `MOTIVATION in EQ isn't about being pumped up by prizes. It's about being driven by something that comes from inside you — what scientists call INTRINSIC MOTIVATION. Real interest in what you're doing. A sense of purpose. A value you care about. People with high EQ motivation keep going through setbacks not because they have to, but because their "why" is built into them. Research shows that intrinsic motivation is far more powerful and lasting than chasing external rewards alone. And RESILIENCE is closely linked: resilient people feel setbacks but find a way to keep going. Every challenge you work through actually grows your resilience.`,
            `What does EQ motivation look like from the inside? It's choosing to keep working on a painting because you love how it feels to create. It's doing the extra reading because the topic genuinely fascinates you. It's practicing a skill past the easy part because you care about getting better. Optimism and commitment are key parts of EQ motivation — and you can train them. Growth mindset (believing you can improve), reframing setbacks (seeing what you learned), and self-compassion (being kind to yourself when you fail) all build intrinsic motivation and resilience. Together, these inner drives are what keep EQ working even when things get hard.`,
          ],
          image: `/ue-assets/iw/l10-s3-motivation-resilience.webp`,
          imageCaption: `Intrinsic motivation drives you from within. Resilience lets you bounce back and keep going.`,
          vocab: [
            {
              word: `intrinsic motivation`,
              definition: `Motivation that comes from inside you — real interest, a sense of purpose, a value you care about. Far more powerful and lasting than chasing external rewards alone. The EQ component that keeps you going through setbacks because your reason is built into you.`,
              audioPrompt: `Intrinsic motivation is motivation that comes from inside you, {name}. Real interest, a sense of purpose, a value you care about. It's different from extrinsic motivation, which comes from outside rewards like prizes or praise. Scientists have found intrinsic motivation is far more powerful and lasting than chasing external rewards alone. Kids with strong inner motivation keep going through setbacks, because their reason is built into them. The strongest motivation comes from knowing what matters to you and being willing to act on it.`,
            },
            {
              word: `resilience`,
              definition: `The ability to bounce back from setbacks and keep going. A key part of EQ motivation alongside optimism and commitment. Resilience is trainable — growth mindset, reframing, and self-compassion all build it. Every challenge you work through grows your resilience.`,
              audioPrompt: `Resilience is the ability to bounce back from setbacks and keep going, {name}. It's a key part of EQ motivation, alongside optimism and commitment. Resilient people don't give up when things get hard. They feel the setback and find a way to keep moving toward what matters. Research shows resilience is one of the most important factors in long-term success and happiness. Resilience is also trainable. Growth mindset, reframing, and self-compassion are all tools that build it. Every challenge you work through grows your resilience.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Empathy and Social Skills`,
          paragraphs: [
            `EMPATHY is the ability to sense and understand what someone else is feeling — almost like you can feel it with them. Empathy doesn't mean agreeing with everyone or losing yourself in their feelings. It means recognizing what another person is going through and genuinely caring about it. Empathic people make others feel truly seen and understood, which is one of the most powerful things one person can do for another. Research shows empathy is linked to stronger friendships, better leadership, and higher wellbeing — for the empathic person AND the people they connect with. Empathy is trainable. It grows when you slow down, listen carefully, notice facial expressions and tone of voice, and remind yourself that other people have whole inner worlds, just like you do.`,
            `SOCIAL SKILLS are the fifth component: handling relationships, communication, and groups with care and effectiveness. This includes listening carefully, expressing yourself kindly, working through disagreements, reading a room, and helping others feel comfortable. Social skills are where all the other four components come together in action. You need self-awareness to notice your own emotional state. Self-regulation to keep it under control. Motivation to keep showing up in relationships even when it's hard. Empathy to understand what others are feeling. And social skills to actually act on all of that — kindly, confidently, and clearly. Together, these five skills are the intelligence of being a connected, caring, effective human being.`,
          ],
          image: `/ue-assets/iw/l10-s4-empathy-social.webp`,
          imageCaption: `Empathy: sensing others' worlds. Social skills: all five EQ components meeting the world.`,
          vocab: [
            {
              word: `empathy`,
              definition: `The ability to sense and understand what someone else is feeling. Not agreeing with everyone or losing yourself in their feelings — recognizing what another person is going through and caring about it. Empathy is trainable and linked to stronger friendships and leadership.`,
              audioPrompt: `Empathy is the ability to sense and understand what someone else is feeling, {name}. Almost like you can feel it with them. Empathy isn't agreeing with everyone or losing yourself in their feelings. It's recognizing what another person is going through and caring about it. Empathic people make others feel truly seen and understood. Empathy is also trainable. It grows when you slow down, listen carefully, notice faces and tones, and remind yourself that other people have whole inner worlds, just like you do.`,
            },
            {
              word: `social skills`,
              definition: `The fifth EQ component: handling relationships, communication, and groups well. Includes listening carefully, expressing yourself kindly, working out disagreements, and helping others feel comfortable. Where all five EQ components come together in action.`,
              audioPrompt: `Social skills are the fifth component of EQ: handling relationships, communication, and groups well, {name}. This includes listening carefully, expressing yourself kindly, working out disagreements, and helping others feel comfortable. All five EQ components depend on each other: you need self-awareness to notice feelings, self-regulation to manage them, motivation to act on what matters, empathy to understand others, and social skills to act on that understanding well. Together, these five make up EQ: the intelligence of being a kind, steady, connected human being.`,
            },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to investigate, {name}. Here are four kids in real moments. Match each one to the EQ component being shown most clearly: SELF-AWARENESS (noticing what you feel), SELF-REGULATION (managing the feeling), MOTIVATION (inner drive that keeps you going), EMPATHY (sensing what others feel), or SOCIAL SKILLS (handling relationships well)?\n\nOne is trickier than it looks — pay close attention to what's really happening inside.`,
          options: [
            { id: `awareness`,   label: `Self-Awareness`,  color: `#FBBF24`, description: `Noticing what you feel in the moment, with honesty. The foundation of everything else in EQ.` },
            { id: `regulation`,  label: `Self-Regulation`, color: `#60A5FA`, description: `Handling your emotions wisely once you've noticed them. Pausing between feeling and reacting.` },
            { id: `motivation`,  label: `Motivation`,      color: `#34D399`, description: `Inner drive to keep going — from purpose, interest, and values, not just external rewards.` },
            { id: `empathy`,     label: `Empathy`,         color: `#A78BFA`, description: `Sensing and understanding what someone else is feeling. Making others feel truly seen.` },
            { id: `social`,      label: `Social Skills`,   color: `#F472B6`, description: `Handling relationships, communication, and groups with care and effectiveness.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid feels a tight knot in their stomach before walking into a school presentation.` },
                { text: `Instead of just feeling "bad," they pause and think: "What is this feeling? Where is it coming from?"` },
                { text: `They realize: "I'm nervous. That makes sense — I care about doing well and this feels new." The moment they name it, they feel a little calmer.` },
              ],
              correctAnswer: `awareness`,
              realWorldExample: `Naming an emotion activates the prefrontal cortex and calms the amygdala — "name it to tame it" is real neuroscience.`,
              explanation: `The kid paused and asked what they were feeling — then named it honestly and specifically. That's pure self-awareness. Notice that just naming the emotion made them calmer. That's what the research shows: labeling a feeling activates your prefrontal cortex and turns down the amygdala's alarm signal. Self-awareness is the foundation. You can't manage, communicate, or learn from a feeling you haven't named first.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid has been working on a detailed painting for three weeks. Their teacher hasn't said anything about it. Their friends moved on to other things.` },
                { text: `No one is praising them or pushing them to continue.` },
                { text: `The kid keeps going anyway — because they love watching the colors come together, and something about the work itself feels meaningful and absorbing.` },
              ],
              correctAnswer: `motivation`,
              realWorldExample: `Intrinsic motivation — driven by genuine interest, not external reward — is associated with deeper learning, more creativity, and greater persistence.`,
              explanation: `No external reward, no praise, no pressure — just the kid continuing because the work itself matters to them. That's intrinsic motivation in its purest form. Research consistently shows this kind of inner drive produces deeper engagement, more creativity, and greater persistence than external rewards alone. The kid's "why" is built into them. That's the EQ component of motivation at its clearest.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid looks across the cafeteria and notices a classmate sitting alone, staring at their tray.` },
                { text: `The kid doesn't know this classmate very well, but something in the way they're sitting feels familiar — like loneliness.` },
                { text: `The kid walks over and says: "Do you want to sit with us today?" The classmate looks up, surprised, and their face completely shifts.` },
              ],
              correctAnswer: `empathy`,
              realWorldExample: `Empathy research shows that sensing another person's emotional state — even without words — activates similar brain regions in both people.`,
              explanation: `The kid read an emotional signal from across the room — no words, no explanation — and acted on it. That's empathy. They didn't just notice the classmate intellectually ("that person looks alone"). They felt something of what the classmate was feeling, and cared enough to act. Notice: this is NOT primarily social skills. The kid isn't navigating a conversation — they're first sensing an internal state in someone else. Empathy comes before social skills. You act because you first sense.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `Playing a game, a kid's turn gets skipped by accident. A wave of anger rises immediately — strong and real.` },
                { text: `The anger is right there. The kid wants to yell. But instead, they pause, breathe slowly, and let a moment pass.` },
                { text: `Then they say, calmly: "I think it was my turn — can we go back?" The others agree and the game continues.` },
              ],
              correctAnswer: `regulation`,
              realWorldExample: `Self-regulation research shows that a deliberate pause between stimulus and response changes which brain circuits control the next action.`,
              explanation: `Tricky, {name}! You might have said social skills, because the kid communicated kindly and effectively. But look carefully at what's happening INSIDE: a real, strong emotion arose — and the kid paused, breathed, and chose a response instead of reacting. That's self-regulation. The social skills (communicating calmly) only happened BECAUSE the self-regulation happened first. The real EQ work was internal: managing the strong feeling before it managed them. Social skills and self-regulation often work together, but self-regulation is the component that makes everything else possible.`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What is EMOTIONAL INTELLIGENCE (EQ)?`,
              options: [
                `The same thing as IQ`,
                `The ability to understand and manage your own emotions and recognize and influence others' emotions`,
                `Being good at memorizing facts`,
                `A fixed personality trait you're born with`,
              ],
              correctIndex: 1,
              explanation: `Emotional intelligence is the ability to understand and manage your own emotions AND recognize and influence the emotions of others. Unlike IQ, EQ is a learnable skill that can grow throughout your life. Goleman identified five specific components that together make up EQ.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `How many components are in Goleman's EQ model?`,
              options: [
                `Two`,
                `Three`,
                `Four`,
                `Five`,
              ],
              correctIndex: 3,
              explanation: `Goleman identified FIVE components of EQ: self-awareness, self-regulation, motivation, empathy, and social skills. Together these cover both inner EQ (understanding and guiding yourself) and outer EQ (understanding and connecting with others).` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `What is SELF-AWARENESS in EQ?`,
              options: [
                `Thinking about yourself all day`,
                `Knowing what you're feeling in the moment, with honesty`,
                `Being confident in every situation`,
                `Regulating your emotions`,
              ],
              correctIndex: 1,
              explanation: `Self-awareness is knowing what you're feeling RIGHT NOW, with honesty. It's the most foundational EQ component because you can't manage, communicate, or learn from a feeling you haven't noticed and named first. "You can't manage what you don't notice."` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `What does SELF-REGULATION mean?`,
              options: [
                `Never feeling strong emotions`,
                `Letting your emotions control your decisions`,
                `Handling your emotions wisely once you've noticed them — pausing between feeling and reacting`,
                `Only feeling calm emotions`,
              ],
              correctIndex: 2,
              explanation: `Self-regulation means handling emotions wisely once you've noticed them. NOT pushing feelings away, and NOT letting them sweep you off. A self-regulating person feels the emotion and still chooses their response. Your prefrontal cortex can stay in charge even when your amygdala is fired up — and every time you practice this pause, you're building that brain circuitry.` },

            { id: `l10-q5`, format: `multiple-choice`,
              question: `What is INTRINSIC MOTIVATION?`,
              options: [
                `Motivation from prizes and praise`,
                `Motivation from parents telling you to try harder`,
                `Motivation that comes from inside you — real interest, purpose, and values you care about`,
                `Only motivation that works for sports`,
              ],
              correctIndex: 2,
              explanation: `Intrinsic motivation comes from INSIDE: genuine interest, a sense of purpose, a value you care about. Research shows it's far more powerful and lasting than external rewards alone. People with strong intrinsic motivation keep going through setbacks because their "why" is built into them.` },

            { id: `l10-q6`, format: `true-false`,
              question: `True or false: Empathy means agreeing with everything another person feels or says.`,
              correctAnswer: false,
              explanation: `False. Empathy means SENSING and understanding what another person is feeling, and caring about it — but not necessarily agreeing with them or losing yourself in their feelings. Empathy is recognizing another person's inner world. You can empathize with someone and still respectfully disagree with them.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `Which EQ component is about handling relationships, communication, and groups well?`,
              options: [
                `Self-awareness`,
                `Motivation`,
                `Empathy`,
                `Social skills`,
              ],
              correctIndex: 3,
              explanation: `Social skills is the fifth component: handling relationships, communication, and groups with care and effectiveness. It's where all the other four components come together in action — self-awareness, self-regulation, motivation, and empathy all support strong social skills.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `Why is self-awareness described as the "foundation" of EQ?`,
              options: [
                `Because it's the easiest component`,
                `Because you can't manage, communicate, or learn from a feeling you haven't first noticed and named`,
                `Because it replaces all other EQ components`,
                `Because it's only useful for adults`,
              ],
              correctIndex: 1,
              explanation: `Self-awareness is the foundation because EVERY other EQ skill depends on it. You can't self-regulate a feeling you haven't noticed. You can't motivate yourself from values you haven't identified. You can't use social skills well if you don't know your own emotional state. Self-awareness is step one for all of EQ.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Which of the five EQ components do you think is your strongest right now? Which one would you most like to build? What makes you say that?` },
            { id: `r2`, text: `Think of a recent moment when you felt a strong emotion. Did you notice it (self-awareness)? Did you manage it (self-regulation)? What did you do, and what might you do differently now?` },
            { id: `r3`, text: `Is there someone in your life who shows strong empathy? What do they do that makes people feel truly seen and understood? How do they make you feel?` },
            { id: `r4`, text: `Looking back over this Inner World series, which idea has changed how you think or feel the most? How are you different now than when you started?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Emotional intelligence is studied at some of the world's leading universities, used by top companies in hiring and leadership, taught in school programs around the world (SEL), and linked in research to better health, longer life, stronger relationships, and more meaningful work. Goleman's original book on EQ became one of the most influential psychology books ever written. And here's what matters most for you right now: EQ is not fixed. Every lesson in this Inner World series — naming emotions, the Observer, growth mindset, self-compassion, flow, focus — has been building your EQ. You were doing it before you even knew what EQ was. Now you have the whole map: five components, all learnable, all yours.`,
          familyAdventure: `Family EQ Map. As a family, print or draw a simple chart with the five EQ components: Self-Awareness, Self-Regulation, Motivation, Empathy, Social Skills. Each person rates themselves honestly (1–5) in each component. Then share: Which component do you feel strongest in? Which would you most like to grow? This week, each person picks ONE component to pay attention to in daily life and reports back at dinner each night. At the end of the week, share what you noticed. Real EQ practice happens in real moments — this activity makes those moments visible together.`,
          creativePrompt: {
            intro: `Write about emotional intelligence using the five components.`,
            floor: `Write at least 5 sentences. Describe what EQ is, name all five components, and explain which one feels most important to you and why.`,
            stretch: `Write 8 to 10 sentences. Cover all five components, give a real-life example for at least two of them, and explain how the components depend on each other.`,
            open: `Write as much as you want. Write a full personal EQ reflection. Look back at the whole Inner World series and trace how each lesson connected to the five EQ components. Which moments in the series built your self-awareness? Your regulation? Your motivation? Your empathy? Your social skills? Then look forward: what is one specific way you want to grow each component in the next few months? Write honestly, like you're writing to your future self. This is your EQ map. You made it.`,
            frames: [
              `Emotional intelligence means ___.`,
              `The EQ component I feel strongest in is ___.`,
              `The one I most want to build is ___ because ___.`,
              `A real moment where I used EQ was ___.`,
              `Knowing about EQ changes how I ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Exceptional work, {name}. You now understand the full map of emotional intelligence: SELF-AWARENESS (noticing what you feel), SELF-REGULATION (choosing what you do with it), MOTIVATION (the inner drive that keeps you going), EMPATHY (sensing others' inner worlds), and SOCIAL SKILLS (bringing all five together in every relationship). These aren't just concepts. They're skills you've been building through every lesson in this series. Name it to tame it. The Observer. Growth mindset. Flow. Focus. Manifestation. All of it was EQ. You have the whole picture now — and the real practice is the life you live with it. — Sage.`,
          badge: `eq-explorer`,
          badgeName: `EQ Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const opts = screens.find(s => s.type === 'interactive')?.options?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L10 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${opts} game options, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
