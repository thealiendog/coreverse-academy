// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L01 — The Science of the Brain and Emotions
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : real psychology / affective neuroscience at a kid level
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify what's happening in an emotional moment)
// SCOPE: 4 concepts — emotions are real brain events, the emotional brain
//        (amygdala) vs thinking brain (prefrontal cortex), why big feelings
//        feel overwhelming, naming feelings calms the brain
// VOICE: Sage = gentle, peaceful, emotionally attuned, warm, unhurried
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-01`,
      title: `The Science of the Brain and Emotions`,
      duration: 18,
      xpReward: 75,
      badge: `emotion-scientist`,
      badgeName: `Emotion Scientist`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. I'm Sage, and I'm so glad you're here. Welcome to Inner World, where we explore something just as fascinating as any galaxy or ocean: the world INSIDE you. Your thoughts, your feelings, your mind. Today we begin gently, with a question you feel every single day but may have never truly understood: what ARE emotions, really? Where do feelings come from? The answer lives in your remarkable brain, and understanding it is the first step to becoming the calm, wise captain of your own inner world. Take a slow breath with me, and let's begin.`,
          headline: `The Science of the Brain and Emotions`,
          subtitle: `Where feelings really come from, and why it matters`,
          visual: `/ue-assets/iw/exp-iw-l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Emotions Are Real Events in Your Brain`,
          paragraphs: [
            `Here is something powerful to understand: your emotions are not random, and they are not weaknesses. They are real, physical events happening in your BRAIN and body. When you feel happy, scared, angry, or calm, specific things are happening inside you: chemicals are released, signals fire between brain cells, and your body responds. An emotion is your brain and body's way of reacting to what's happening around you and inside you. Feelings are information, not flaws.`,
            `Emotions exist for a REASON. Over millions of years, they evolved to help keep us safe and connected. Fear helps you avoid danger. Anger can signal that something feels unfair. Happiness draws you toward what's good for you. Sadness can tell you something matters, and helps others know you need support. Even uncomfortable emotions are trying to help you in some way. So the goal of this whole subject isn't to get rid of feelings, that would be impossible and unwise. The goal is to UNDERSTAND them, so they can guide you instead of overwhelm you. That begins with understanding the brain that creates them.`,
          ],
          image: `/ue-assets/iw/exp-iw-l01-s1-real-events.webp`,
          imageCaption: `Emotions are real brain and body events, evolved to help and inform you.`,
          vocab: [
            {
              word: `emotion`,
              definition: `A real physical and mental response in your brain and body to what's happening around or inside you. Emotions are information that evolved to help keep you safe and connected, not flaws or weaknesses.`,
              audioPrompt: `An emotion is a real physical and mental response in your brain and body, {name}. It's how you react to what's happening around you and inside you. Your emotions are not random, and they are not weaknesses. When you feel happy, scared, angry, or calm, specific things happen inside you: chemicals are released and signals fire between brain cells. Emotions evolved over millions of years to help keep us safe and connected. Fear helps you avoid danger. Anger signals something feels unfair. Feelings are information, not flaws.`,
            },
            {
              word: `emotional vocabulary`,
              definition: `The collection of words you know for naming different feelings. The more precisely you can name a feeling, the more your thinking brain engages and the more manageable the emotion becomes.`,
              audioPrompt: `Emotional vocabulary is the collection of words you know for naming different feelings, {name}. Most people only use a few words like good, bad, or fine, but feelings are much more varied than that. There's a big difference between feeling disappointed and devastated, or nervous and terrified. The more precisely you can name a feeling, the more your thinking brain engages. Building your emotional vocabulary is one of the most powerful tools for understanding your inner world. The more words you have, the more manageable your emotions become.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Two Important Parts of Your Brain`,
          paragraphs: [
            `Your brain has many parts, but for understanding emotions, two are especially important. Deep in the center is a small almond-shaped region called the AMYGDALA. Think of it as your brain's alarm system or emotional guard. It reacts FAST, especially to anything that seems threatening or exciting, triggering emotions like fear or anger in an instant, often before you've even had time to think. It's ancient, quick, and powerful.`,
            `Behind your forehead is a very different part: the PREFRONTAL CORTEX. This is your brain's wise thinker and decision-maker. It handles planning, reasoning, self-control, and calming yourself down. It works more SLOWLY and carefully than the amygdala. Here's the key relationship: the fast amygdala can fire off a big emotion instantly, while the thoughtful prefrontal cortex helps you understand and manage that emotion. Learning to strengthen the connection between these two (letting your wise thinker work WITH your emotional alarm) is one of the most important skills in all of life. And here's encouraging news: your prefrontal cortex is still growing and strengthening all the way into your twenties, which means you can absolutely get better at this.`,
          ],
          image: `/ue-assets/iw/exp-iw-l01-s2-two-parts.webp`,
          imageCaption: `The amygdala (fast alarm) and prefrontal cortex (wise thinker) work as a team.`,
          vocab: [
            {
              word: `amygdala`,
              definition: `A small almond-shaped part deep in your brain that acts like an alarm system. It reacts very fast to threats or excitement, triggering emotions like fear or anger almost instantly, often before you can think.`,
              audioPrompt: `The amygdala is a small almond-shaped part deep in the center of your brain, {name}. Think of it as your brain's alarm system. It reacts very fast, especially to anything that seems threatening or exciting, triggering emotions like fear or anger before you've even had time to think. It's ancient, quick, and powerful. The amygdala works with another part called the prefrontal cortex, behind your forehead, which is your brain's wise, slower thinker. Learning to let the two work together is one of the most important skills in life.`,
            },
            {
              word: `stress response`,
              definition: `Your body's automatic reaction to a perceived threat. The amygdala triggers it instantly: heart rate rises, breathing quickens, and stress chemicals flood your system, often before you've had time to think.`,
              audioPrompt: `The stress response is your body's automatic reaction to a perceived threat, {name}. When your amygdala detects something threatening, it triggers an instant reaction: your heart rate increases, your breathing quickens, and stress chemicals flood your system. This happens before you've even had time to think. It's designed for real danger. But the amygdala can also trigger it in everyday situations, like an argument or a test, when you don't need to run. Understanding this helps you respond more wisely when the alarm fires.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Big Feelings Feel So Overwhelming`,
          paragraphs: [
            `Have you ever been SO angry or scared that you couldn't think clearly, said something you regretted, or felt completely swept away? There's a real brain reason for that. When the amygdala senses a big threat, it can essentially "take over," flooding your body with stress chemicals and temporarily turning DOWN the thinking power of your prefrontal cortex. Some scientists call this "flipping your lid." In that moment, your fast emotional alarm is in charge, and your wise thinker is offline. That's why it's genuinely hard to think clearly when you're extremely upset. It's not a personal failure. It's biology.`,
            `Understanding this changes everything. When you feel a huge wave of emotion, you can recognize: "My amygdala is firing. My thinking brain is having trouble right now." This understanding is the first step to calming down. It also explains why trying to "just think logically" in the heat of a big emotion rarely works. First, the storm in the amygdala needs to settle a little, THEN your prefrontal cortex can come back online. The good news, which we'll explore all through this subject, is that there are real, science-backed ways to help calm your amygdala and bring your wise thinker back. You are not at the mercy of your big feelings. You can learn to work with them.`,
          ],
          image: `/ue-assets/iw/exp-iw-l01-s3-overwhelming.webp`,
          imageCaption: `Big emotions can "flip your lid": the alarm takes over and the thinker goes quiet.`,
          vocab: [
            {
              word: `prefrontal cortex`,
              definition: `The part of your brain behind your forehead that handles thinking, planning, self-control, and calming down. It works more slowly than the amygdala and keeps growing stronger into your twenties.`,
              audioPrompt: `The prefrontal cortex is the part of your brain behind your forehead, {name}. It's your brain's wise thinker and decision-maker. It handles planning, reasoning, self-control, and calming yourself down. It works more slowly than the fast amygdala. When you feel a huge emotion, the amygdala can take over and temporarily turn down your thinking power. Some scientists call this flipping your lid. That's why it's hard to think clearly when you're very upset. It's not a failure. It's biology. Your prefrontal cortex keeps growing stronger into your twenties.`,
            },
            {
              word: `self-regulation`,
              definition: `The ability to manage your emotions and behaviors, especially in difficult moments. Powered by the prefrontal cortex, it's a skill that grows stronger with practice.`,
              audioPrompt: `Self-regulation is the ability to manage your emotions and behaviors, especially in difficult moments, {name}. It's powered by your prefrontal cortex, the wise thinker. When something upsetting happens, self-regulation is what helps you pause, take a breath, and respond thoughtfully instead of reacting instantly. The good news: self-regulation isn't a fixed trait you're born with or without. It's a skill that can be learned and strengthened with practice. Your brain literally grows more capable of it the more you use it.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `A Simple, Powerful Tool: Name It to Tame It`,
          paragraphs: [
            `Here's one of the most useful discoveries in brain science, and you can start using it today. When you NAME an emotion you're feeling, you actually help calm it down. Researchers have found that simply putting a feeling into words ("I'm feeling anxious," "I notice I'm frustrated") gently activates your prefrontal cortex and helps quiet the amygdala's alarm. Scientists call this "name it to tame it." Just by accurately labeling what you feel, you shift a little power back to your wise thinker.`,
            `This is why the very first skill in understanding your inner world is building an emotional vocabulary, learning the names of many feelings, not just "good" and "bad." The more precisely you can name what you feel ("disappointed" rather than just "bad," "nervous" rather than just "weird"), the more your thinking brain engages, and the more manageable the feeling becomes. Sage's gentle teaching: your emotions are not your enemies, and they are not in charge of you. They are messengers from your remarkable brain. When you learn to notice them, name them, and understand where they come from, you take the first powerful step toward becoming the calm, wise captain of your own inner world. And that journey starts simply, with a breath and a name.`,
          ],
          image: `/ue-assets/iw/exp-iw-l01-s4-name-it.webp`,
          imageCaption: `Name it to tame it: putting a feeling into words helps your brain calm it.`,
          vocab: [
            {
              word: `name it to tame it`,
              definition: `A science-backed tool: when you put an emotion into words ("I feel anxious"), you gently activate your thinking brain and help calm the emotional alarm. Naming a feeling makes it more manageable.`,
              audioPrompt: `Name it to tame it is one of the most useful discoveries in brain science, {name}. When you name an emotion you're feeling, you actually help calm it down. Researchers found that putting a feeling into words, like saying I'm feeling anxious, gently activates your prefrontal cortex and helps quiet the amygdala's alarm. Accurately labeling what you feel shifts a little power back to your wise thinker. This is why building an emotional vocabulary matters. The more precisely you can name what you feel, the more manageable the feeling becomes.`,
            },
            {
              word: `mindfulness`,
              definition: `The practice of paying calm, non-judgmental attention to what's happening right now, including your thoughts and feelings. Regular mindfulness strengthens the prefrontal cortex and calms the amygdala over time.`,
              audioPrompt: `Mindfulness is the practice of paying calm, non-judgmental attention to what's happening right now, including your thoughts and feelings, {name}. When you notice a feeling without judging it or immediately reacting, you give your thinking brain a chance to engage. Mindfulness is closely related to name it to tame it: both involve pausing, noticing, and naming your inner experience. Research shows that regular mindfulness practice actually changes the brain, strengthening the prefrontal cortex and calming the amygdala over time. It's a deeply studied tool for emotional well-being.`,
            },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Let's investigate gently, {name}. Here are four moments. In each one, something is happening in the brain. Classify what's mostly going on: AMYGDALA TAKEOVER (the fast alarm is in charge, big feeling, hard to think), PREFRONTAL CALM (the wise thinker is working, calm and clear), or NAME IT TO TAME IT (someone is labeling a feeling to help calm it)?\n\nOne is gentler and trickier than it looks.`,
          options: [
            { id: `amygdala`,   label: `Amygdala Takeover`,  color: `#F87171`, description: `The fast alarm is in charge. A big feeling, hard to think clearly.` },
            { id: `prefrontal`, label: `Prefrontal Calm`,    color: `#60A5FA`, description: `The wise thinker is working. Calm, clear, and in control.` },
            { id: `nameit`,     label: `Name It to Tame It`, color: `#34D399`, description: `Someone is putting a feeling into words to help calm it down.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Moment #1`,
              clues: [
                { text: `A kid loses a game, instantly feels rage, and yells something they don't mean.` },
                { text: `Their heart pounds and they can't think straight.` },
                { text: `A second later, they wish they hadn't said it.` },
              ],
              correctAnswer: `amygdala`,
              realWorldExample: `A flash of anger before thinking is classic amygdala.`,
              explanation: `The fast alarm fired instantly, the body flooded with stress, and the thinking brain went quiet. Pure amygdala takeover. The regret a second later is the prefrontal cortex coming back online. This is biology, not a character flaw.`,
            },
            {
              id: `case-2`,
              caseTitle: `Moment #2`,
              clues: [
                { text: `Before a test, a kid feels their stomach flutter.` },
                { text: `They pause and quietly say to themselves, "I'm feeling nervous right now."` },
                { text: `Naming it, they feel the nervousness settle just a little.` },
              ],
              correctAnswer: `nameit`,
              realWorldExample: `Labeling pre-test nerves is name it to tame it.`,
              explanation: `By putting the feeling into words, they activated their thinking brain and gently calmed the alarm. Pure name it to tame it. Just accurately labeling a feeling shifts a little power back to your wise thinker.`,
            },
            {
              id: `case-3`,
              caseTitle: `Moment #3`,
              clues: [
                { text: `A kid is calmly planning their afternoon, deciding what to do first.` },
                { text: `They feel relaxed and are thinking clearly.` },
                { text: `They weigh choices and make a thoughtful decision.` },
              ],
              correctAnswer: `prefrontal`,
              realWorldExample: `Calm planning is the prefrontal cortex at work.`,
              explanation: `Calm, clear, planning and deciding: this is the wise thinker, the prefrontal cortex, doing its job. Pure prefrontal calm. When the alarm is quiet, your thoughtful brain can do its best work.`,
            },
            {
              id: `case-4`,
              caseTitle: `Moment #4 — The Gentle Tricky One`,
              clues: [
                { text: `A kid feels a wave of frustration rising while doing hard homework.` },
                { text: `They take a slow breath and say, "I notice I'm feeling really frustrated, and that's okay."` },
                { text: `After naming it, they feel calmer and able to think about the problem again.` },
              ],
              correctAnswer: `nameit`,
              realWorldExample: `Catching a feeling early and naming it is the skill in action.`,
              explanation: `This is the trickiest one, {name}, because it has TWO stages. At first, the amygdala alarm was starting to rise (frustration building). You might pick "amygdala takeover." BUT the kid caught it early and did something skillful: they breathed and NAMED the feeling, which calmed it and brought their thinking brain back. So the best answer is name it to tame it, because the naming is what changed the moment. Sage's gentle lesson: the goal isn't to never feel big emotions. The goal is to NOTICE them rising and gently name them, before they take over. This kid did exactly that. With practice, you can catch feelings early and use this tool too. That's the whole skill, right there in one beautiful moment.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What are emotions, according to brain science?`,
              options: [
                `Random weaknesses we should ignore`,
                `Real physical events in your brain and body that evolved to help and inform you`,
                `Things only some people have`,
                `Always bad and unhelpful`,
              ],
              correctIndex: 1,
              explanation: `Emotions are real physical and mental events in your brain and body. They evolved over millions of years to help keep us safe and connected. Feelings are information, not flaws. Even uncomfortable ones are trying to help you in some way.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is the AMYGDALA's main job?`,
              options: [
                `Slow, careful planning`,
                `Acting as a fast alarm system that triggers emotions like fear and anger quickly`,
                `Digesting food`,
                `Controlling your heartbeat only`,
              ],
              correctIndex: 1,
              explanation: `The amygdala is your brain's fast alarm system. It reacts quickly to threats or excitement, triggering emotions like fear or anger almost instantly, often before you've had time to think. It's ancient, quick, and powerful.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What does the PREFRONTAL CORTEX do?`,
              options: [
                `Sets off fast alarms`,
                `Handles thinking, planning, self-control, and calming down — your brain's wise thinker`,
                `Stores memories of smells`,
                `Nothing important`,
              ],
              correctIndex: 1,
              explanation: `The prefrontal cortex, behind your forehead, is your brain's wise thinker. It handles planning, reasoning, self-control, and calming down. It works more slowly than the amygdala and keeps growing stronger into your twenties.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `Why is it so hard to think clearly when you're EXTREMELY upset?`,
              options: [
                `You're not trying hard enough`,
                `The amygdala can take over and temporarily turn down the thinking power of your prefrontal cortex ("flipping your lid")`,
                `Your brain stops working forever`,
                `It's a personal weakness`,
              ],
              correctIndex: 1,
              explanation: `When the amygdala senses a big threat, it can take over, flooding you with stress chemicals and turning down your prefrontal cortex. Some call this "flipping your lid." Your thinking brain goes offline temporarily. It's biology, not a personal failure.` },

            { id: `l01-q5`, format: `true-false`,
              question: `True or false: The goal of understanding emotions is to get rid of all your feelings.`,
              correctAnswer: false,
              explanation: `False. The goal is never to get rid of feelings, which would be impossible and unwise. Emotions are helpful messengers. The goal is to UNDERSTAND them so they can guide you instead of overwhelm you.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `What is "NAME IT TO TAME IT"?`,
              options: [
                `Giving your pet a name`,
                `Putting a feeling into words, which gently activates your thinking brain and helps calm the emotional alarm`,
                `Shouting your feelings loudly`,
                `Ignoring how you feel`,
              ],
              correctIndex: 1,
              explanation: `"Name it to tame it" means putting a feeling into words ("I feel anxious"). Research shows this gently activates your prefrontal cortex and helps quiet the amygdala. Just accurately labeling a feeling makes it more manageable.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `Why does building an emotional VOCABULARY help you?`,
              options: [
                `It doesn't help at all`,
                `The more precisely you can name a feeling, the more your thinking brain engages and the more manageable the feeling becomes`,
                `It makes feelings stronger and scarier`,
                `Only adults can do it`,
              ],
              correctIndex: 1,
              explanation: `The more precisely you can name what you feel ("disappointed" rather than just "bad"), the more your thinking brain engages, and the more manageable the feeling becomes. That's why learning the names of many feelings is the first skill.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's the encouraging news about your prefrontal cortex?`,
              options: [
                `It stops growing at age 5`,
                `It keeps growing and strengthening into your twenties — so you can get better at managing emotions`,
                `It can never change`,
                `It shrinks over time`,
              ],
              correctIndex: 1,
              explanation: `Your prefrontal cortex keeps growing and strengthening all the way into your twenties. That means you can absolutely get better at understanding and managing your emotions with practice. You are not stuck with how you handle feelings today.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Take a breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of a time a big feeling "took over" before you could think. Knowing now that it was your amygdala firing, how do you feel about that moment?` },
            { id: `r2`, text: `Emotions are messengers, not flaws. Is there a feeling you usually judge yourself for that you might see differently now?` },
            { id: `r3`, text: `"Name it to tame it" is a tool you can use today. What's a feeling you've had recently that you could practice naming more precisely?` },
            { id: `r4`, text: `Your brain's wise thinker keeps growing into your twenties. What's one emotional skill you'd like to get better at over time?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Understanding the science of your emotions is one of the most useful skills you'll ever build, and it lasts your whole life. People who understand their feelings tend to have better friendships, handle stress more calmly, make wiser decisions, and feel happier. Doctors, teachers, leaders, and athletes all use this knowledge. When you know that a big feeling is your amygdala firing (not a sign something's wrong with you), you can be gentler with yourself and respond more wisely. Sage's note: learning about your own mind is a gift you give yourself. The calmer and wiser you become inside, the more steadily you can move through everything life brings.`,
          familyAdventure: `Family Feelings Detective. As a family, share a story (from a movie, book, or real life) where someone "flipped their lid" with a big emotion. Talk gently about what their amygdala was doing and what might have helped. Then, over the next few days, practice "name it to tame it" together: when anyone feels a big feeling, they can simply name it out loud ("I'm feeling frustrated"). Notice together how naming a feeling can soften it. No judgment, just curiosity about your amazing brains.`,
          creativePrompt: {
            intro: `Imagine your amygdala (the fast alarm) and your prefrontal cortex (the wise thinker) as two characters who live in your brain. Write a short scene where they work together during a big feeling.`,
            floor: `Write at least 5 sentences. Give each character a personality and show them handling one emotional moment together.`,
            stretch: `Write 8 to 10 sentences. Show the alarm reacting fast, the wise thinker arriving to help, and how they calm a big feeling together (maybe using "name it to tame it").`,
            open: `Write as much as you want. Write a full story starring your amygdala and your prefrontal cortex as two characters. Give them names and personalities. Show a moment when a big emotion strikes: the fast alarm leaps into action, maybe even "takes over" for a moment, and then the wise thinker gently arrives, helps name the feeling, and brings calm and clarity back. Show how they learn to be a great team. Make it creative AND show you understand the real brain science.`,
            frames: [
              `Deep in the brain lived two characters: ___ the alarm and ___ the thinker.`,
              `One day, something happened, and ___ the alarm instantly ___.`,
              `For a moment, the alarm took over, and ___.`,
              `Then ___ the thinker gently arrived and said ___.`,
              `Working together, they ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Beautifully done, {name}. You've taken your first step into your inner world. You now understand that emotions are real brain events that exist to help you, that your fast amygdala and wise prefrontal cortex work as a team, why big feelings can feel overwhelming, and the simple power of "name it to tame it." This is the foundation for everything ahead. Next, we explore the amazing truth that you can actually CHANGE your own brain. NEUROPLASTICITY. Rest well, and I'll see you there. — Sage.`,
          badge: `emotion-scientist`,
          badgeName: `Emotion Scientist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
