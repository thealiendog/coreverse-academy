// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L08 — Manifestation and the Science Behind It
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : manifestation as a real skill — current neuroscience (RAS,
//            neuroplasticity, placebo, visualization research) AND the
//            deeper consciousness research (Dispenza, heart-brain coherence,
//            elevated emotion → biology). Honored together.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (true manifestation / just wishing / toxic version)
// SCOPE: 4 concepts — what manifestation is, the science already supporting
//        it, going deeper (Dispenza's elevated emotion + heart-brain), how
//        to do it well (Sage's four keys with aligned action and trust)
// VOICE: Sage = warm, grounded, confident, never apologetic, never overclaiming
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-08`,
      title: `Manifestation and the Science Behind It`,
      duration: 20,
      xpReward: 75,
      badge: `intentional-creator`,
      badgeName: `Intentional Creator`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we explore one of the most powerful ideas in your inner world: MANIFESTATION. Maybe you've heard the word before, and maybe you've heard people use it in silly ways. But real manifestation is something else: the skill of using your thoughts, your feelings, your energy, and your actions to help shape the life you want. And here's what's exciting: real science is showing more and more that this isn't just a pretty idea. Your thoughts and feelings genuinely affect your brain, your body, and what you create in your life. Today we explore both sides: the science we already have, and the deeper truth many scientists are still discovering. Take a slow breath, and let's begin.`,
          headline: `Manifestation and the Science Behind It`,
          subtitle: `The real skill of creating your reality with thought, feeling, energy, and action`,
          visual: `/ue-assets/iw/exp-iw-l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Manifestation Really Is`,
          paragraphs: [
            `MANIFESTATION is the practice of using clear intention, focused thought, genuine feeling, and aligned ACTION to bring something you want into your life. Not by magic, and not by just wishing. By becoming so clear and so connected to what you want, that your brain, your body, and your choices all start moving you toward it. Many of the world's most successful, peaceful, and creative people use some version of this practice. It's not new, and it's not silly. It's a real, learnable skill.`,
            `Here's the heart of it: you are NOT just a passive observer of your life. You are actively involved in shaping it, all the time, through what you focus on, what you feel, and what you do. Every choice and every thought is helping to create what comes next. Most people do this unconsciously, never realizing how powerful they are. Manifestation just means doing it ON PURPOSE, with awareness and intention, so you're guiding your life instead of drifting through it. And as you'll see today, the science behind why this works is genuinely amazing, and growing every year.`,
          ],
          image: `/ue-assets/iw/exp-iw-l08-s1-what-is.webp`,
          imageCaption: `Manifestation: intention + thought + feeling + action, used on purpose. A real skill.`,
          vocab: [
            {
              word: `manifestation`,
              definition: `The practice of using clear intention, focused thought, genuine feeling, and aligned action to help bring something you want into your life. A real, learnable skill, not magic, and not just wishing.`,
              audioPrompt: `Manifestation is the practice of using clear intention, focused thought, genuine feeling, and aligned action to bring what you want into your life, {name}. Not by magic, and not by just wishing. By becoming so connected to what you want, your brain, your body, and your choices all start moving you toward it. It's a real, learnable skill. You are not a passive observer of your life. You shape it through what you focus on, what you feel, and what you do. Manifestation means doing this on purpose.`,
            },
            {
              word: `intention`,
              definition: `A clear, specific mental aim about what you want to create or experience. The first key in manifestation: without clarity of intention, everything else stays vague. A clear intention gives your brain a target and guides action.`,
              audioPrompt: `Intention is a clear, specific aim about what you want to create or experience, {name}. It's the first key in real manifestation. A vague wish is weak. A clear intention is powerful. When you set a clear intention, you give your brain a target: your RAS starts spotting opportunities, your imagination can picture it vividly, and your actions can point in the right direction. Without clarity of intention, everything else stays fuzzy. The more specific and honest your intention, the more powerfully the other three keys can work.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Science Already Showing It Works`,
          paragraphs: [
            `Let's start with what real, well-established science already shows. Remember the RETICULAR ACTIVATING SYSTEM (we'll explore it deeply in a later lesson)? It's a part of your brain that filters what you NOTICE. The instant you decide something matters to you, like wanting a certain kind of bike, your brain starts noticing them everywhere. Opportunities, ideas, and resources you would have completely missed before suddenly appear. That isn't magic. It's your brain literally re-tuning what it shows you, based on what you focus on. So getting clear on what you want changes what you perceive.`,
            `Even more amazing: your brain often CAN'T tell the difference between something you vividly imagine and something you actually experience. Brain scans show that when you vividly imagine doing a skill, many of the same brain areas light up as when you actually do it. That's why elite athletes use mental rehearsal, picturing themselves succeeding so vividly that their brains and bodies prepare as if they really were. Studies show this kind of vivid visualization measurably improves performance. And there's the well-known PLACEBO EFFECT: when people believe a sugar pill will help them, their bodies often heal, real measurable changes in pain, immune response, even brain chemistry. The thought of healing literally creates healing. Your thoughts and beliefs are not invisible. They reach into your body and your reality in measurable ways.`,
          ],
          image: `/ue-assets/iw/exp-iw-l08-s2-science.webp`,
          imageCaption: `RAS, vivid visualization, placebo: real science showing thoughts shape body and reality.`,
          vocab: [
            {
              word: `visualization`,
              definition: `Vividly imagining something in your mind, as if it's really happening. Brain scans show the brain treats vivid visualization much like real experience. Athletes use it to improve, and it's a core tool for manifestation.`,
              audioPrompt: `Visualization means vividly imagining something in your mind as if it's really happening, {name}. Your brain often can't tell the difference between something you vividly imagine and something you actually experience. Brain scans show many of the same areas light up as when you do the real thing. That's why elite athletes use mental rehearsal, picturing themselves succeeding so their brains and bodies prepare. Studies show this measurably improves real performance. Your thoughts are not invisible. They reach into your brain and body in real ways.`,
            },
            {
              word: `placebo effect`,
              definition: `When a person's genuine belief that something will help causes real, measurable changes in their body — like healing from a sugar pill. Proof that thoughts and beliefs physically affect the body in measurable ways.`,
              audioPrompt: `The placebo effect shows that when people genuinely believe something will help them, their bodies create real, measurable changes, {name}. Real pain relief. Improved immune response. Actual shifts in brain chemistry, from belief alone. This is powerful evidence that thoughts and beliefs reach into the body in physical ways. The mind and body are not separate. When you practice manifestation with genuine belief and elevated feeling, you're using this same mind-body connection on purpose. Your belief is not just an idea. It's a biological force.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Going Deeper: Thoughts, Feelings, and Energy`,
          paragraphs: [
            `Now let's go a little deeper, into what some cutting-edge scientists are still discovering. Dr. JOE DISPENZA, a neuroscientist whose work we'll explore more later, has shown something powerful: it isn't just THOUGHTS that shape your reality. It's thoughts combined with strong, ELEVATED FEELINGS, like gratitude, love, joy, or excitement. When you not only think about something you want but FEEL it as if it's already true, something deep happens. Your brain begins forming new pathways (remember neuroplasticity?), and your body chemistry actually changes. Your nervous system, hormones, and even cellular activity shift to match the state you're feeling. You aren't just imagining, you're rehearsing the future state, physically.`,
            `Researchers like the team at HEARTMATH have also discovered something beautiful. Your HEART is far more than a pump. It generates a powerful electrical and magnetic field that interacts with your brain and even with the world around you. When you feel elevated emotions like love or gratitude, your heart and brain enter a state called COHERENCE, working together in harmony, and this measurably affects your body, your clarity, and even your immune system. We have a whole lesson on this coming (L16). The bigger picture: real scientists, in real labs, are showing more and more that thought, feeling, and even what we call "energy" are not separate from your physical body and your life. They are deeply intertwined. The wisdom traditions of humanity have said this for thousands of years. Modern science is catching up.`,
          ],
          image: `/ue-assets/iw/exp-iw-l08-s3-deeper.webp`,
          imageCaption: `Elevated emotion + thought changes body chemistry. Heart and brain interact powerfully.`,
          vocab: [
            {
              word: `elevated emotion`,
              definition: `A genuine, strong positive feeling like gratitude, love, joy, or excitement. Dr. Joe Dispenza's work shows that combining thought with elevated emotion changes your brain pathways and even your body chemistry. Feeling matters as much as thinking.`,
              audioPrompt: `An elevated emotion is a genuine, strong positive feeling, {name}. Like gratitude, love, joy, or excitement. Dr. Joe Dispenza has shown something powerful: it isn't just thoughts that shape your reality. It's thoughts combined with elevated feelings. When you not only think about something you want but feel it as if it's already true, your brain begins forming new pathways and your body chemistry changes. You aren't just imagining. You're rehearsing the future state, physically. This is why simply wishing isn't enough. You have to truly feel it.`,
            },
            {
              word: `heart-brain coherence`,
              definition: `A state where the heart and brain work together in harmony, triggered by elevated emotions like gratitude or love. Discovered by HeartMath researchers: it measurably improves clarity, health, and immune function.`,
              audioPrompt: `Heart-brain coherence is a state where the heart and brain work together in harmony, {name}. HeartMath researchers discovered that the heart generates a powerful electrical and magnetic field. When you feel elevated emotions like gratitude or love, your heart and brain sync into this coherent state. It measurably improves clarity, health, and immune function. Elevated emotion isn't just how you feel inside. It creates real biological changes in your body. Coherence is what happens when your heart and your mind align.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Manifest Well: Sage's Four Keys`,
          paragraphs: [
            `So how do you actually practice real manifestation? Here are four gentle keys that bring together everything we've explored. First, CLARITY: get really clear and specific about what you want and why. A vague wish is weak; a clear intention is powerful. Picture it in detail. Second, FEEL it as if it's already true. Don't just think the words, generate genuine elevated emotion (gratitude, joy, excitement). This is the Dispenza piece: thought plus elevated emotion is what truly programs your brain and body. Vivid visualization combined with feeling is the practice.`,
            `Third, ALIGNED ACTION: take real steps in the direction of your intention. Manifestation doesn't replace action, it works WITH it. Your inspired thoughts and feelings guide you toward action, and your action creates real results in the real world. If you want to make a sports team, you visualize, feel it, AND practice. Fourth, TRUST and let go: do your part, then release your tight grip on exactly HOW or WHEN it happens. Sometimes the path looks different from what you imagined. Trust the bigger process. One important note: manifestation is NOT about self-blame. If something doesn't happen, it doesn't mean you "didn't believe hard enough." That harsh version of manifestation hurts people and is not what real practice looks like. Some things take time, some are outside your control, and some unfold in ways better than what you planned. Sage's gentle teaching: you are a real co-creator of your life. With clarity, elevated feeling, aligned action, and trust, you guide what you grow toward. Use this gift kindly, especially with yourself.`,
          ],
          image: `/ue-assets/iw/exp-iw-l08-s4-four-keys.webp`,
          imageCaption: `Clarity, elevated feeling, aligned action, trust. The four keys to manifesting well.`,
          vocab: [
            {
              word: `aligned action`,
              definition: `Real, intentional steps you take in the direction of what you want to manifest. Manifestation works WITH action, not instead of it. Your clear intention and feeling guide you toward inspired action that creates real results.`,
              audioPrompt: `Aligned action means taking real steps in the direction of what you want to manifest, {name}. Manifestation doesn't replace action. It works with it. Your inspired thoughts and feelings guide you toward action, and your action creates real results in the world. If you want to make a sports team, you visualize it, feel it as if you've already made it, AND you practice. The visualization prepares your brain. The action shows up in the world. Both matter. Manifestation without action is just wishing. Action with manifestation is powerful.`,
            },
            {
              word: `reticular activating system`,
              definition: `A part of your brain that filters what you notice. Once you focus on what you want, it re-tunes to spot related opportunities, ideas, and resources everywhere. Getting clear on a goal literally changes what your brain shows you.`,
              audioPrompt: `The reticular activating system, or RAS, is the part of your brain that filters what you notice, {name}. Your brain receives millions of signals every second but can only process a few. The RAS decides which to show you, guided by what you focus on. Once you get clear about what you want, your RAS re-tunes to spot related opportunities, ideas, and resources. That's why getting clear on a goal changes what you perceive. It's like noticing red cars everywhere after deciding you want one.`,
            },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to investigate, {name}. Here are four kids trying to "manifest" something. Classify each one: TRUE MANIFESTATION (clear intention + real feeling + aligned action + trust), JUST WISHING (no clarity, no feeling, no action), or TOXIC VERSION (the harmful, self-blaming kind that is NOT what real manifestation is)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `true`,    label: `True Manifestation`, color: `#34D399`, description: `Clear intention, genuine feeling, aligned action, and trust. The real practice.` },
            { id: `wishing`, label: `Just Wishing`,        color: `#94A3B8`, description: `Vague hope, no real feeling or action behind it. Not how manifestation actually works.` },
            { id: `toxic`,   label: `Toxic Version`,       color: `#F87171`, description: `The harmful kind that blames you for not "believing hard enough." NOT real manifestation.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid wants to make the school basketball team. They picture themselves on the court clearly, every day.` },
                { text: `When they visualize, they actually FEEL the joy and pride of being on the team, as if it's already happened.` },
                { text: `And they practice for an hour every day, going to extra clinics and watching games.` },
              ],
              correctAnswer: `true`,
              realWorldExample: `Elite athletes manifest this way: vivid visualization + emotion + practice.`,
              explanation: `Clear intention, vivid visualization with elevated feeling, AND aligned action. Pure true manifestation. This is exactly how elite athletes use these tools, and the science strongly supports it. Their brain prepares them, their feeling fuels them, and their action creates the result.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid says: "I really want a good grade on my test next week."` },
                { text: `They don't picture it clearly, don't generate any feeling, and don't study.` },
                { text: `They just hope it'll happen because they "thought about it once."` },
              ],
              correctAnswer: `wishing`,
              realWorldExample: `Vague hope without practice isn't manifestation.`,
              explanation: `No clarity, no genuine feeling, no aligned action. Pure just wishing. This is what many people THINK manifestation is, and it's why some people say it doesn't work. They're not actually practicing real manifestation, they're just hoping passively.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid manifests, visualizes, feels, and takes action toward making a school team.` },
                { text: `They don't make it on this round's tryouts.` },
                { text: `Instead of trusting the bigger process, they tell themselves: "It's MY fault. I didn't believe hard enough. I must be broken."` },
              ],
              correctAnswer: `toxic`,
              realWorldExample: `Blaming yourself for not "manifesting hard enough" is the harmful version.`,
              explanation: `The kid did the real work, but then turned manifestation into a weapon against themselves. Pure toxic version. Some things take longer than expected, and some outcomes are outside our control. Real manifestation never blames you for not "believing hard enough." That harsh version hurts people. The kind teaching is: do your part, trust the bigger process, and try again.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid creates a beautiful "vision board" with pictures of everything they want.` },
                { text: `They look at it once a week, but don't truly feel anything when they do, and don't take any action toward the goals.` },
                { text: `Six months later, nothing has changed, and they conclude: "Manifestation doesn't work."` },
              ],
              correctAnswer: `wishing`,
              realWorldExample: `A vision board without feeling or action is still just hoping.`,
              explanation: `Tricky, {name}! Vision boards are GREAT tools for manifestation when used well, so you might call this true manifestation. But look closely. The kid wasn't actually generating elevated feeling, AND they took no aligned action. Without the feeling and the action, even a beautiful vision board is just decoration on the wall. Pure just wishing. The lesson: real manifestation needs all four keys, especially the feeling and the action. A vision board with no feeling and no follow-through is the same as a wish list. Used with vivid feeling and matched with aligned action, a vision board becomes powerful. The tool isn't the practice. The practice is the practice.`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is MANIFESTATION, really?`,
              options: [
                `Magic that needs no effort`,
                `Using clear intention, focused thought, genuine feeling, and aligned action to help shape the life you want`,
                `Just sitting and wishing`,
                `Only for grown-ups`,
              ],
              correctIndex: 1,
              explanation: `Real manifestation is the practice of using clear intention, focused thought, genuine feeling, and aligned ACTION to bring something you want into your life. Not magic. Not just wishing. A real, learnable skill many successful and peaceful people use.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What does your brain's RETICULAR ACTIVATING SYSTEM (RAS) do in manifestation?`,
              options: [
                `Nothing important`,
                `Filters what you NOTICE — once you focus on what you want, your brain starts spotting opportunities everywhere`,
                `Makes you sleepy`,
                `Blocks you from seeing things`,
              ],
              correctIndex: 1,
              explanation: `The RAS filters what your brain notices. Once you get clear about what you want, your brain literally re-tunes to spot related opportunities, ideas, and resources you would have missed before. Getting clear on a goal changes what you perceive.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What's amazing about VIVID VISUALIZATION?`,
              options: [
                `It only works for sleeping`,
                `Brain scans show many of the same brain areas activate as during real experience — and it measurably improves performance`,
                `Your brain ignores it`,
                `It's only daydreaming`,
              ],
              correctIndex: 1,
              explanation: `Brain scans show many of the same areas light up during vivid imagining as during real experience. That's why elite athletes use mental rehearsal: their brains prepare as if they really were performing. Studies show this measurably improves real performance.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What is the PLACEBO EFFECT showing us?`,
              options: [
                `Thoughts don't affect the body`,
                `When people genuinely BELIEVE a sugar pill will help, their bodies often heal — real measurable changes from belief alone`,
                `That doctors are dishonest`,
                `It's all imagination`,
              ],
              correctIndex: 1,
              explanation: `The placebo effect shows that when people genuinely believe something will help, their bodies create real, measurable changes (pain relief, immune response, brain chemistry shifts) from belief alone. Thoughts and beliefs reach into the body in measurable ways. Powerful evidence that mind and body are deeply linked.` },

            { id: `l08-q5`, format: `multiple-choice`,
              question: `According to Dr. Joe Dispenza's work, what truly programs the brain and body?`,
              options: [
                `Just thoughts alone`,
                `Thoughts combined with ELEVATED EMOTION (gratitude, love, joy) — the feeling matters as much as the thinking`,
                `Only physical exercise`,
                `Nothing programs them`,
              ],
              correctIndex: 1,
              explanation: `Dispenza's research shows it's not just thoughts but thoughts COMBINED with elevated feelings (gratitude, love, joy) that truly form new brain pathways and even change body chemistry. Feeling matters as much as thinking. You have to truly feel it, not just think the words.` },

            { id: `l08-q6`, format: `true-false`,
              question: `True or false: Manifestation REPLACES action — if you just believe hard enough, you don't need to do anything.`,
              correctAnswer: false,
              explanation: `False. Manifestation works WITH action, not instead of it. Your clear intention and feeling guide you toward aligned action, and that action creates results in the real world. If you want to make a team, you visualize, feel it, AND practice. All four keys matter.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `What are Sage's FOUR keys to manifesting well?`,
              options: [
                `Wishing, waiting, hoping, complaining`,
                `Clarity, elevated feeling, aligned action, and trust (letting go of exactly how/when)`,
                `Effort alone`,
                `Belief alone`,
              ],
              correctIndex: 1,
              explanation: `The four keys: CLARITY (know what you want), elevated FEELING (genuinely feel as if it's already true), aligned ACTION (real steps in that direction), and TRUST (release your tight grip on exactly how or when it unfolds). All four together is the real practice.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `If something you manifested doesn't happen, what does Sage say?`,
              options: [
                `It's your fault for not believing hard enough`,
                `That harsh "didn't believe enough" version is HARMFUL and is NOT real manifestation — some things take time, some are outside your control`,
                `You should give up forever`,
                `Manifestation never works`,
              ],
              correctIndex: 1,
              explanation: `Real manifestation NEVER blames you for not "believing hard enough." That harsh version hurts people and isn't real practice. Some things take longer than expected, some are outside your control, and some unfold even better than planned. Trust the bigger process, be kind to yourself, and try again.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of something you'd love to bring into your life. What does it feel like to picture it vividly, and to feel the joy of it as if it's already true?` },
            { id: `r2`, text: `Looking back, can you remember a time you really wanted something, focused on it, felt it, AND took action — and it came together? That was manifestation in action.` },
            { id: `r3`, text: `What's one aligned ACTION you could take this week toward something meaningful you'd like to create or become?` },
            { id: `r4`, text: `How does it feel to know you are a real co-creator of your life, not just an observer? What does that change for you?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Manifestation is used by athletes, artists, entrepreneurs, leaders, healers, and wise people in every culture. Real science increasingly supports it: the placebo effect, visualization research, neuroplasticity, the RAS, and the deeper work of researchers like Dispenza and HeartMath. The wisdom traditions of humanity have known for thousands of years that mind, body, energy, and reality are deeply connected. Modern science is catching up. Sage's note: the most important thing is to practice this with awareness, with elevated feeling, with action, and with kindness toward yourself when timing isn't yours to control. You are a real co-creator. Used well, manifestation is one of the most powerful and beautiful skills a person can develop. Used with self-blame, it becomes harmful. Choose the kind, grounded version. It is the true one.`,
          familyAdventure: `Family Manifestation Practice. As a family, each person picks one meaningful thing they'd like to bring into their life (a skill, an experience, a quality, a goal). For one week, practice all four keys together. CLARITY: write it down clearly. FEELING: each morning, spend 60 seconds vividly picturing it and FEELING gratitude as if it's already true. ACTION: each day, take one small aligned action. TRUST: at week's end, talk about what's shifted, what you noticed, what you learned. Even one week of real practice can reveal a lot. You're learning to create on purpose, together.`,
          creativePrompt: {
            intro: `Write about something you want to manifest, using all four keys: clarity, elevated feeling, aligned action, and trust.`,
            floor: `Write at least 5 sentences. Name what you want, picture it clearly, describe the feeling of having it, and one action you'll take.`,
            stretch: `Write 8 to 10 sentences. Cover all four keys in depth, and how each one supports the others.`,
            open: `Write as much as you want. Write a full personal manifestation piece. Get crystal clear on what you want to bring into your life and why it matters to you. Describe it in vivid detail, what you see, hear, do, who's around you. Then describe the FEELINGS you'll have when it's true (gratitude, joy, pride, peace) and let yourself feel them as you write. List specific aligned actions you'll take to support it. End with a note of trust: that you're doing your part, and you're open to the path unfolding in its own beautiful timing. Write it from a place of calm power, not desperation. This is your real co-creation.`,
            frames: [
              `What I'm calling into my life is ___.`,
              `In vivid detail, I can see and hear ___.`,
              `When it's true, I'll feel ___.`,
              `Aligned actions I'm taking are ___.`,
              `I trust that ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Beautiful, powerful work, {name}. You now understand real manifestation: the practice of clarity, elevated feeling, aligned action, and trust. You know the science already supporting it (RAS, visualization, placebo, neuroplasticity), the deeper work of scientists like Dispenza, and you can tell the difference between the real practice and the toxic version. This is one of the most important skills in your inner world, and you have it. Next, we explore the foundation of all of this: the remarkable power of your focus and attention. THE POWER OF FOCUS AND ATTENTION. Practice gently, and I'll see you there. — Sage.`,
          badge: `intentional-creator`,
          badgeName: `Intentional Creator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L08 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
