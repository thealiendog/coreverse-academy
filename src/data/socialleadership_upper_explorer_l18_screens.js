// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L18 — The Leader You're Becoming
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : identity design across lifespan, leader development, James
//            Clear's "every action is a vote" (echoes Inner World L17 deeply).
//            Building leadership identity over time.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 steps of designing your leadership identity)
// SCOPE: leadership identity is forming right now; clarify values; cast
//        daily votes; notice progress and setbacks; grow over time
// VOICE: Valor = warm, honoring, looking ahead. Encourages without flattery.
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-18`,
      title: `The Leader You're Becoming`,
      duration: 18,
      xpReward: 75,
      badge: `leader-becoming`,
      badgeName: `Leader Becoming`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we look ahead at who you're becoming. The kind of leader, friend, family member, and human you're growing into, one small daily moment at a time. This isn't about waiting until you're a teenager or adult to "be" a leader. You ARE one already, in small ways, in every group you're part of. The question is what KIND of leader you're choosing to grow into. Today, you design that on purpose. Take a thoughtful breath, and let's begin.`,
          headline: `The Leader You're Becoming`,
          subtitle: `Designing the kind of leader, friend, and human you're growing into`,
          visual: `/ue-assets/sl/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You're Already Becoming Someone`,
          paragraphs: [
            `Here's a truth worth sitting with: you are ALREADY becoming the leader, friend, and human you'll be one day. Not "someday in the future." Right now, in this moment, with every small choice you make. The kid you are at 9 or 10 isn't separate from the teenager, young adult, and grown-up you'll become, they're all the SAME person, growing forward. The patterns you build now (how you treat others, how you handle mistakes, how you respond when no one's watching) form the foundation everything else gets built on. This isn't pressure, it's permission. Permission to start, now, becoming who you want to be.`,
            `Most kids think identity is something that happens TO them. ("This is just who I am.") But identity is actually something you CO-CREATE with your daily choices. James CLEAR (the habits researcher from Inner World L17) put it perfectly: "every action is a vote for the kind of person you want to become." When you choose to listen well, that's one vote for being a good listener. When you keep a small promise, that's one vote for being trustworthy. When you stand up for someone, that's one vote for being brave. Hundreds of votes across hundreds of small moments slowly become WHO YOU ARE. The wonderful truth is that voting starts immediately, and it works.`,
          ],
          image: `/ue-assets/sl/l18-s1-already.webp`,
          imageCaption: `You're already becoming. Every small choice is a vote for who you'll be.`,
          vocab: [
            {
              word: `daily votes`,
              definition: `James Clear's concept that every small action is a vote for the kind of person you want to become. Hundreds of votes across small moments slowly become your identity. You're voting right now, with every choice. Hopeful and motivating.`,
              audioPrompt: `Daily votes is James Clear's concept that every small action is a vote for the kind of person you want to become, {name}. Hundreds of votes across small moments slowly become your identity. When you listen well, that's one vote for being a good listener. When you keep a promise, that's one vote for being trustworthy. When you stand up for someone, that's one vote for being brave. You're voting right now, with every choice. Identity isn't something that happens to you. It's something you build with your daily votes.`,
            },
            {
              word: `identity formation`,
              definition: `The process by which your sense of self develops over time through your choices, experiences, and relationships. Not something that happens to you. Something you actively shape. Especially active during childhood and adolescence — every daily vote counts.`,
              audioPrompt: `Identity formation is the process by which your sense of self develops over time through your choices, experiences, and relationships, {name}. Not something that happens to you. Something you actively shape. Psychologist Erik Erikson found that during childhood and adolescence, identity formation is especially active. Every small choice casts a vote. Every value you practice becomes more deeply yours. You're in the middle of identity formation right now. The choices you make at 9 or 10 are real votes for who you're becoming. They count more than most people realize.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Clarify What You Actually Value`,
          paragraphs: [
            `To design who you're becoming, start by getting clear on what you actually VALUE. Not what your friends value, not what social media values, not what the cool kids value. What YOU value, in your real heart. Some things people genuinely value as leaders: HONESTY (telling the truth even when hard), KINDNESS (treating others with care), COURAGE (standing up when it matters), FAIRNESS (treating people justly), GROWTH (learning and improving), LOYALTY (showing up for the people you love), CURIOSITY (staying open to learning), HUMILITY (being able to be wrong), CARE (genuinely watching out for others), INTEGRITY (matching your actions to your words).`,
            `Pick the 3-5 that genuinely resonate most with you, the ones that, if a friend described you using them, would make you proud. Those are YOUR core values. Once you know them, you have a compass. When you're not sure what to do in a moment, you can ask: "What would the [honest / kind / brave / fair] version of me do here?" That question, asked often, is one of the most powerful identity-shaping practices there is. Notice how this connects to everything you've learned. All 17 prior lessons have actually been giving you VALUES to consider (listening, empathy, kindness, courage, repair, trust, openness). Pick the ones that genuinely matter most to YOU, and start voting for them daily.`,
          ],
          image: `/ue-assets/sl/l18-s2-values.webp`,
          imageCaption: `Pick the 3-5 values that genuinely resonate. They become your compass.`,
          vocab: [
            {
              word: `core values`,
              definition: `The 3-5 qualities that genuinely matter most to you (e.g., honesty, kindness, courage, growth, fairness, curiosity). Your real compass. When unsure what to do, you can ask "what would the [value] version of me do here?" — one of the most powerful identity-shaping practices.`,
              audioPrompt: `Core values are the 3-5 qualities that genuinely matter most to you, {name}. Honesty, kindness, courage, fairness, growth, loyalty, curiosity, humility, care, integrity. Pick the ones that, if a friend described you using them, would make you proud. Those are your compass. When you're not sure what to do, you can ask, what would the brave version of me do here? The kind version? The honest version? That question, asked often, is one of the most powerful ways to build the person you're becoming.`,
            },
            {
              word: `growth mindset`,
              definition: `The belief that your qualities and abilities can grow through effort and learning, not fixed at birth. Psychologist Carol Dweck found people with growth mindsets achieve more, persist longer, and bounce back better from setbacks. You're not stuck — you're becoming.`,
              audioPrompt: `Growth mindset is the belief that your qualities and abilities can grow through effort and learning, rather than being fixed at birth, {name}. Psychologist Carol Dweck spent decades studying how people think about their own abilities. She found that people with growth mindsets achieve more, persist longer, and bounce back better from setbacks. Applied to values and leadership, it means you're not stuck being who you've been. You're someone who's becoming. Every vote counts. Every day of practice matters. The person you're growing into is more open than you think.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Name the Leader You Want to Become`,
          paragraphs: [
            `Once your values are clear, you can name the KIND of leader (and human) you want to become. Be specific. Not "a good person" (too vague), but something like: "I want to be someone friends can rely on, who tells truth kindly, who lifts quieter voices, and who admits mistakes calmly." That's a real identity statement. Specific enough to guide actual choices. Write yours, in your own words, in your real voice. It can be a sentence, a paragraph, or a short list. Keep it somewhere you'll see it sometimes. It's YOURS.`,
            `Here's why this matters: research shows that when people have a clear sense of WHO they want to be, they make better choices in hard moments. Without it, you tend to react in the moment, based on emotion or peer pressure. With it, you have a quiet inner compass. "Would a kid who's becoming X do that?" That question slows you down, gives you space to choose well. It also helps when you mess up. Instead of "I'm a bad person," you can say "I made a choice that didn't match the person I'm becoming, and I want to do better next time." That's growth-oriented identity, way healthier than fixed labels.`,
          ],
          image: `/ue-assets/sl/l18-s3-name.webp`,
          imageCaption: `Specific identity statement, your real voice. It becomes a quiet inner compass.`,
          vocab: [
            {
              word: `identity statement`,
              definition: `A specific, personal description of the kind of leader and human you want to become, in your own words. Different from vague ideals. Sentence or short paragraph. Becomes a quiet inner compass for choices, and reframes mistakes as "didn't match yet" instead of "bad person."`,
              audioPrompt: `An identity statement is a specific, personal description of the kind of leader and human you want to become, in your own words, {name}. Not I want to be a good person, which is too vague. Something like, I want to be someone friends can rely on, who tells truth kindly, and admits mistakes calmly. Specific enough to guide real choices. Write yours. It becomes a quiet inner compass. When you mess up, you can say, that didn't match the person I'm becoming. I want to do better.`,
            },
            {
              word: `values compass`,
              definition: `The internal guide that forms when you know your core values clearly. In hard moments, you can ask "what would the honest/kind/brave version of me do?" Your values compass replaces impulsive reactions with intentional choices.`,
              audioPrompt: `A values compass is the internal guide that forms when you know your core values clearly, {name}. When you're in a hard moment and unsure what to do, you can check your compass. What would the honest version of me do here? The kind version? The brave version? That question slows down impulsive reactions and gives you a chance to choose on purpose. Most adults never develop a real values compass. They react to situations based on comfort, fear, or what others expect. Knowing your values changes that.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Patience With the Slow Becoming`,
          paragraphs: [
            `One last truth, especially important: you're going to BE imperfect along the way. You'll fall short of your own values sometimes. You'll act in ways that don't match the leader you want to become. That doesn't mean you've failed, it means you're human, and growing. The most important practice when this happens is not shame, it's GENTLE RETURN. "I didn't show up the way I wanted. I want to do better. Here's how I'll try again." That's how real growth happens. Identity isn't built by being perfect, it's built by getting up after each fall and voting again for the person you're becoming.`,
            `Trust the slow becoming. The kid you are at 10 won't be the same person at 15 or 25 or 50. Each version will be richer, deeper, more fully formed, because you kept growing. You won't see the change day to day. You'll look back and barely recognize the kid you used to be, but that kid is part of how you got there. Valor's teaching: become the leader you'd want to follow, one daily vote at a time. Be kind to yourself when you fall short. Be honest about who you want to be. Trust the patient work of small choices, year after year. The person you're becoming is being shaped right now, by every small decision, including this one. Be the kind, patient designer of your own becoming. That's leadership in its purest form, the leadership of your own life.`,
          ],
          image: `/ue-assets/sl/l18-s4-patience.webp`,
          imageCaption: `Be patient with the slow becoming. Imperfect votes still count.`,
          vocab: [
            {
              word: `gentle return`,
              definition: `The growth practice of returning to who you want to be after falling short, without shame. "I didn't show up the way I wanted. I want to do better. Here's how I'll try again." How real identity is built — through getting up and voting again, not through being perfect.`,
              audioPrompt: `Gentle return is the growth practice of returning to who you want to be after falling short, without shame, {name}. I didn't show up the way I wanted. I want to do better. Here's how I'll try again. That's how real growth happens. Identity isn't built by being perfect. It's built by getting up after each fall and voting again for the person you're becoming. You'll fall short sometimes. That doesn't mean you've failed. It means you're human, and growing. Trust the slow becoming.`,
            },
            {
              word: `self-compassion`,
              definition: `Being as kind and patient with yourself when you fall short as you would be with a good friend. Researcher Kristin Neff found self-compassion predicts resilience and growth better than harsh self-criticism. The foundation of gentle return.`,
              audioPrompt: `Self-compassion is being as kind and patient with yourself when you fall short as you would be with a good friend, {name}. Researcher Kristin Neff has spent decades studying it. She found that self-compassion predicts resilience, growth, and wellbeing better than harsh self-criticism. The kid who beats themselves up when they make mistakes tends to spiral. The kid who says, I fell short, I want to do better, and moves on, tends to grow. Gentle return is only possible when you have real self-compassion underneath it.`,
            },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the practice of becoming the leader you want to be in order, {name}. Here are five steps, scrambled. Use the arrows to arrange them from FIRST (where it starts inside) to LAST (the patient work over time). This is the real practice.`,
          items: [
            { id: `step-values`, label: `CLARIFY YOUR VALUES. The 3-5 qualities that genuinely matter most to you (honesty, kindness, courage, growth, etc.)`,                position: 1 },
            { id: `step-name`,   label: `NAME THE LEADER YOU WANT TO BECOME. Specific identity statement in your real voice, sentence or short list`,                          position: 2 },
            { id: `step-vote`,   label: `START WITH ONE DAILY VOTE. Small choices that match the identity you're growing (listen well today, keep that promise, lift a quieter voice)`, position: 3 },
            { id: `step-notice`, label: `NOTICE PROGRESS AND SETBACKS. Both count. Gentle return when you fall short, no shame, just "I want to do better"`,                  position: 4 },
            { id: `step-grow`,   label: `GROW OVER TIME. Patient work, year after year. The kid you are today won't be the same person at 15 or 25, each version richer`,  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of becoming the leader you want to be: clarify values, name the identity, start with one daily vote, notice progress and setbacks with kindness, and grow over time. The person you're becoming is being shaped right now, by small choices. Be the patient, kind designer of your own becoming. It's leadership in its purest form.`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l18-q1`, format: `true-false`,
              question: `True or false: You're already becoming the leader and human you'll be one day — right now, with every small choice.`,
              correctAnswer: true,
              explanation: `True. You ARE already becoming. Not "someday in the future." Right now, with every small choice. The kid you are at 9 or 10 isn't separate from the teenager, young adult, and grown-up you'll become. They're all the same person, growing forward. This isn't pressure, it's permission to start now.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What did James Clear (and Inner World L17) say about your daily actions?`,
              options: [
                `They don't matter`,
                `"Every action is a VOTE for the kind of person you want to become." Identity is co-created with your daily choices`,
                `Only big decisions matter`,
                `Identity is fixed at birth`,
              ],
              correctIndex: 1,
              explanation: `James Clear: "every action is a vote for the kind of person you want to become." Each small choice is a vote. When you listen well, that's one vote for being a good listener. When you keep a small promise, one vote for trustworthy. Hundreds of votes across small moments slowly become who you are.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is the FIRST step of designing the leader you're becoming?`,
              options: [
                `Be louder`,
                `CLARIFY YOUR VALUES. The 3-5 qualities that genuinely matter most to YOU, not your friends, not social media`,
                `Wait until you're older`,
                `Copy someone famous`,
              ],
              correctIndex: 1,
              explanation: `First step: clarify the 3-5 values that genuinely matter most to YOU. Honesty, kindness, courage, fairness, growth, curiosity, humility, care, integrity. Pick the ones that, if a friend described you using them, would make you proud. Those are YOUR core values, your compass.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `Why is having a SPECIFIC identity statement powerful?`,
              options: [
                `It's just nice writing`,
                `Research shows people with a CLEAR sense of who they want to be make better choices in hard moments. It becomes a quiet inner compass`,
                `Doesn't matter`,
                `Only adults need one`,
              ],
              correctIndex: 1,
              explanation: `Research shows that when people have a clear sense of who they want to be, they make better choices in hard moments. Without it, you react in the moment based on emotion or peer pressure. With it, you have a quiet inner compass. "Would a kid becoming X do that?" slows you down to choose well.` },

            { id: `l18-q5`, format: `multiple-choice`,
              question: `What's the POWERFUL question to ask in tough moments?`,
              options: [
                `What's easiest?`,
                `"What would the brave/kind/honest version of me do here?" Your values become a real compass`,
                `What would others say?`,
                `What's coolest?`,
              ],
              correctIndex: 1,
              explanation: `"What would the [value] version of me do here?" That question, asked often, is one of the most powerful identity-shaping practices. Replacing autopilot reactions with intentional value-based choices is how identity is consciously built.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `What about when you FALL SHORT of your values?`,
              options: [
                `Shame yourself harshly`,
                `GENTLE RETURN. "I didn't show up the way I wanted. I want to do better. Here's how I'll try again." That's how real growth happens`,
                `Give up forever`,
                `Pretend it didn't happen`,
              ],
              correctIndex: 1,
              explanation: `Gentle return is the growth practice when you fall short. "I didn't show up the way I wanted. I want to do better." No shame, just honest return to the work. Identity isn't built by being perfect, it's built by getting up after each fall and voting again for the person you're becoming.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `What's the difference between FIXED LABEL identity and GROWTH-ORIENTED identity?`,
              options: [
                `No difference`,
                `Fixed: "I'm a bad person" (stuck). Growth: "I made a choice that didn't match the person I'm becoming, and I want to do better" (open to change)`,
                `Fixed is better`,
                `Both feel the same`,
              ],
              correctIndex: 1,
              explanation: `Fixed labels ("I'm a bad person") trap you. Growth-oriented identity ("I made a choice that didn't match the person I'm becoming") leaves room for change. The same mistake feels totally different through these two frames. Growth-oriented identity is healthier and more accurate.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `What's Valor's truth about the SLOW becoming?`,
              options: [
                `It should happen fast`,
                `Trust the patient work. You won't see change day to day. You'll look back later and barely recognize who you used to be, because you kept growing`,
                `Don't bother`,
                `Becoming should be easy`,
              ],
              correctIndex: 1,
              explanation: `Trust the slow becoming. You won't see change day to day. Each year shapes a richer, deeper version of you. You'll look back later and barely recognize the kid you used to be, AND that kid is part of how you got there. Patient work, daily votes, gentle returns. That's how leaders really form.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Of all the values mentioned (honesty, kindness, courage, fairness, growth, loyalty, curiosity, humility, care, integrity), which 3-5 genuinely matter MOST to you?` },
            { id: `r2`, text: `Try writing your own identity statement: "I want to be someone who ___." Keep it specific and in your own voice.` },
            { id: `r3`, text: `What's ONE small daily vote you'll start casting this week for the leader you're becoming?` },
            { id: `r4`, text: `When you fall short, do you tend toward shame or gentle return? Notice gently. Where could more kindness toward yourself live?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Research on identity formation, character development, and leadership growth all points to the same finding: people who get CLEAR about who they want to become, and then practice it through daily choices, develop more deeply than those who just hope it happens. This is true in psychology, education, sports, and business. The kid who can name their values, write a specific identity statement, and cast small daily votes builds a much stronger sense of self than peers who don't. Valor's note: leadership isn't something you're born with or without. It's something you become, through patient daily votes, across many years. The kid at 9 who starts being intentional about it is way ahead of most adults. Be gentle with yourself, especially when you fall short. The slow becoming is sacred work, and you're already in it. Keep going. The person you're growing into is going to be wonderful.`,
          familyAdventure: `Family Becoming Sharing. As a family, each person shares ONE value that genuinely matters most to them. Then each person shares ONE small daily vote they're going to start casting for the kind of human they want to become. Adults model this too. Then talk about how to support each other in this, including when someone falls short. Practice gentle return as a family value. ("You didn't show up the way you wanted, that's okay, let's try again tomorrow.") You're growing a family that designs each person's becoming on purpose, with kindness.`,
          creativePrompt: {
            intro: `Write your own LEADER MANIFESTO — the kind of leader, friend, and human you want to become, in your real voice.`,
            floor: `Write at least 5 sentences. Name 3 values and 2-3 specific qualities of the person you want to become.`,
            stretch: `Write 8 to 10 sentences. Build a full identity statement with values, qualities, and one specific daily vote.`,
            open: `Write as much as you want. Write your full personal LEADER MANIFESTO. Name the 3-5 values that genuinely matter most to you. Describe in detail the kind of leader, friend, family member, and human you want to become. Be specific. Not "a good person," but specific qualities and behaviors. Show what your DAILY VOTES will look like (small choices that match the identity you're growing). Acknowledge that you'll fall short sometimes, and write yourself a kind sentence to read on those days. End with the patient promise to keep voting, year after year, for the person you're becoming. Make it specific, brave, and real. This is yours, keep it, return to it sometimes. It's a real document of who you're choosing to become.`,
            frames: [
              `My 3-5 core values are ___.`,
              `The kind of leader I want to become is ___.`,
              `Specifically, I want to be someone who ___.`,
              `My daily votes will look like ___.`,
              `When I fall short, I'll remind myself ___.`,
              `My patient promise to myself is ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Beautiful, brave work, {name}. You now understand that you're ALREADY becoming, one daily vote at a time. You know how to clarify your values, name the leader you want to become, cast small votes, return gently when you fall short, and trust the slow patient becoming. This work is sacred. Keep going. The person you're growing into is going to be wonderful. Next, we explore the deepest form of leadership of all — leadership as caring, serving, lifting others. SERVICE: LEADERSHIP AS CARING. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `leader-becoming`,
          badgeName: `Leader Becoming`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
