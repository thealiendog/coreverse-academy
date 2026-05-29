// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L13 — Apologizing Well
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : Harriet Lerner's real apology research, the difference between
//            true repair-apologies, fake non-apologies, and over-apologies
//            that drown the actual moment.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (real apology / fake apology / over-apology).
//            Trick case = the "I'm sorry IF you were offended" non-apology
//            that sounds like one but isn't.
// SCOPE: why apologies matter, the 4 parts of a real apology, the kinds of
//        fake apologies, over-apologizing as its own problem
// VOICE: Valor = humble, honest, models owning his own imperfections
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-13`,
      title: `Apologizing Well`,
      duration: 18,
      xpReward: 75,
      badge: `real-apologizer`,
      badgeName: `Real Apologizer`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore one of the bravest, most under-taught social skills there is: APOLOGIZING WELL. Not the mumbled "sorry" people give to make a moment go away. Not the fake "sorry if you were offended" that isn't really an apology at all. Not the over-apology that drowns every interaction. A REAL apology, the kind that owns what you did, names the impact honestly, and asks what's needed for repair. Real apologies are some of the most powerful trust-building moves a human can make. Today, you learn how. Take a humble breath, and let's begin.`,
          headline: `Apologizing Well`,
          subtitle: `The brave practice of real repair`,
          visual: `/ue-assets/sl/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Apologies Are So Powerful`,
          paragraphs: [
            `A real apology might be the single most trust-building move a human can make. When you own what you did, say it honestly, and care about repair, you do something rare: you put the relationship above your ego. That's powerful, because almost no one does it well. Most people either avoid apologizing (it feels too vulnerable), or they give weak fake apologies that pretend to repair without actually doing the work. A kid who learns to apologize WELL becomes someone friends, family, and teammates trust deeply, because they know when this kid messes up, they'll own it.`,
            `Researcher Harriet Lerner has spent decades studying apologies, and she's found something important: the SIZE of the apology matters less than its REALNESS. Even a small, sincere, well-formed apology lands far better than a long, dramatic, but empty one. What matters is the four ingredients we'll learn next. Most people skip one or more of them, which is why their apologies don't land. You're going to learn the full version, which costs you nothing and gives the people you've hurt the real repair they actually need.`,
          ],
          image: `/ue-assets/sl/l13-s1-powerful.webp`,
          imageCaption: `A real apology is rare and powerful. It puts the relationship above your ego.`,
          vocab: [
            {
              word: `real apology`,
              definition: `An apology that owns what you did, names its impact honestly, takes responsibility without excuses, and asks about repair. Researcher Harriet Lerner found these are the most trust-building moves humans can make. The size matters less than the realness.`,
              audioPrompt: `A real apology owns what you did, names its impact, takes responsibility without excuses, and asks about repair, {name}. Researcher Harriet Lerner spent decades studying apologies and found that real ones are among the most trust-building moves humans can make. The size matters less than the realness. Even a small, sincere apology lands far better than a long, dramatic, empty one. Most people skip one or more of the four ingredients, which is why their apologies don't land. You're going to learn the full version.`,
            },
            {
              word: `repair conversation`,
              definition: `The honest dialogue that follows a real apology — asking what the other person needs and listening. Transforms an apology from a statement into actual restoration of trust. Most people skip this step, assuming the apology itself is enough.`,
              audioPrompt: `A repair conversation is the honest dialogue that follows a real apology, {name}. After owning what you did and naming the impact, you ask: what do you need from me? Then you listen. This step transforms an apology from a statement into genuine restoration of trust. Most people give the apology and move on, assuming the work is done. But the person who was hurt may still need to be heard. Asking what they need and making space for that is what makes trust actually come back.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Four Parts of a Real Apology`,
          paragraphs: [
            `Here are the four ingredients of a real apology, all four matter. First, OWN WHAT YOU DID, specifically. Not "sorry for everything" (too vague) and not "sorry if I did something" (avoiding ownership). Name the specific behavior. "I'm sorry I made that joke about your drawing." This is the hardest part for most people, and it's the most important. Second, NAME THE IMPACT honestly. "I can see it hurt your feelings, and that wasn't okay." Showing you understand HOW your action landed proves you actually get it. Without this part, "sorry" feels hollow, because the person doesn't feel seen.`,
            `Third, NO EXCUSES or "buts." "Sorry I said that, BUT you were being annoying" isn't an apology, it's a defense disguised as one. The word "but" usually erases everything before it. Real apologies stop at the apology, no defending, no explaining your good intentions, no "I only did it because..." The other person can hear excuses later, if at all. Fourth, ASK ABOUT REPAIR. "What do you need from me?" or "Is there something I can do to make it right?" This step shifts the apology from a statement into a conversation about restoring trust. Together, those four ingredients (own it + name impact + no excuses + ask about repair) make a real apology. Use them, and watch what changes in your relationships.`,
          ],
          image: `/ue-assets/sl/l13-s2-four-parts.webp`,
          imageCaption: `Own it (specifically), name the impact, no "buts" or excuses, ask about repair.`,
          vocab: [
            {
              word: `the "but" rule`,
              definition: `The principle that the word "but" in an apology usually erases everything before it. "Sorry I yelled, BUT you started it" isn't an apology. Real apologies stop at the apology; the rest can be discussed later, if at all.`,
              audioPrompt: `The but rule is the principle that the word but in an apology usually erases everything before it, {name}. Sorry I said that, BUT you were being annoying isn't an apology. It's a defense disguised as one. Real apologies stop at the apology. No defending, no explaining your good intentions, no I only did it because. The other person can hear context later, after the apology has done its work. Watch for this in your own apologies and in others' you receive. The but rule reveals fake apologies fast.`,
            },
            {
              word: `blame-deflection`,
              definition: `A fake apology that says "I'm sorry you feel that way," which doesn't own any specific behavior. It only expresses regret that the other person has feelings. Often sounds calm and kind, which makes it tricky to identify. The fix: swap it for "I'm sorry I did X."`,
              audioPrompt: `Blame-deflection is the fake apology I'm sorry you feel that way, {name}. Unlike a real apology, it doesn't own any specific behavior. It only expresses regret that the other person has feelings. The message underneath is: your feelings are the problem, not my action. Blame-deflection often sounds calm and kind, which makes it tricky to identify. But if you've received one, you know how it feels: unsatisfying, slightly insulting, unresolved. The fix: swap I'm sorry you feel that way for I'm sorry I did X.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Kinds of FAKE Apologies (Recognize and Avoid)`,
          paragraphs: [
            `Most people don't realize they're giving fake apologies. Learning to recognize them helps you avoid giving them, and helps you notice when someone is giving them to you. First, the IF-APOLOGY. "Sorry IF you were offended." "Sorry IF I hurt you." These sound like apologies but they put the blame on the other person's reaction, not the apologizer's action. A real apology says "I'm sorry I did X" not "sorry IF you felt Y." Second, the BUT-APOLOGY. "Sorry I yelled, BUT you started it." We covered this already, the BUT erases the sorry. It's a defense, not an apology.`,
            `Third, the BLAME-DEFLECTION. "I'm sorry you feel that way." Notice this doesn't own ANY behavior, it just expresses regret that the other person has feelings about it. It's actually a way of saying "your feelings are the problem here." Fourth, the OVERPROMISE-APOLOGY. "I'll never do anything like this AGAIN, EVER, I promise!" This sounds good but usually breaks within days, making the apology even less trustworthy next time. Real apologies focus on this specific moment, not impossible promises. When you give a fake apology, or someone gives one to you, the result is usually the same: the hurt remains, and a layer of irritation gets added because the apology pretended to repair without doing so. Real apologies do the actual work.`,
          ],
          image: `/ue-assets/sl/l13-s3-fake.webp`,
          imageCaption: `Fake apologies: "sorry IF," "sorry BUT," "sorry you feel that way," "never again I promise!"`,
          vocab: [
            {
              word: `if-apology`,
              definition: `A common fake apology that says "sorry IF you were offended/hurt." Puts the blame on the other person's reaction rather than owning your action. Real apologies say "I'm sorry I did X," not "sorry IF you felt Y."`,
              audioPrompt: `An if-apology says sorry if you were offended, or sorry if I hurt you, {name}. These sound like apologies but put the blame on the other person's reaction, not the apologizer's action. A real apology says I'm sorry I did X, not sorry IF you felt Y. Watch for this in your own apologies and in others' you receive. The if-apology is one of the most common fake apologies in the world. Recognizing it lets you call it out gently, or not be fooled when you receive one.`,
            },
            {
              word: `name the impact`,
              definition: `The second ingredient of a real apology — showing you understand how your action landed on the other person. Without this, sorry feels hollow and the person doesn't feel seen. Naming the impact proves you actually understand what happened.`,
              audioPrompt: `Name the impact is the second ingredient of a real apology, {name}. After owning the specific behavior, you show that you understand how it landed. I can see it hurt your feelings. I realize that felt dismissive. Without this part, sorry feels hollow. The person doesn't feel seen. They may accept the apology but still feel unresolved. Naming the impact proves you actually get what happened, not just that something went wrong, but that this specific thing happened to this specific person, and you see it.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Apologizing Becomes Its Own Problem`,
          paragraphs: [
            `One more important thing: OVER-APOLOGIZING is its own problem. Some kids apologize for everything, including things that aren't their fault, things that don't need apology, just being themselves. "Sorry to bother you, sorry to ask, sorry I exist." Over-apology can come from anxiety, perfectionism, or trying to keep others happy. It looks polite but actually shrinks the person doing it AND wears out the apology itself. When you apologize for everything, your apologies stop carrying meaning, and they wear you down with shame you don't deserve.`,
            `The fix isn't to apologize less by being less considerate. It's to apologize SPECIFICALLY, when there's actually something to apologize FOR. Save "sorry" for moments when you actually did something. The rest of the time, replace it with other phrases: "thanks for waiting" instead of "sorry I'm late." "Can I ask a question?" instead of "sorry to bother you." Your real apologies will land more when they're not buried in fifty fake ones. Valor's teaching: an apology is one of the most powerful tools you carry. Real ones build deep trust. Fake ones quietly damage. Over-used ones lose their power. Learn to give the real version (own it, name impact, no buts, ask about repair) when it's truly needed, and to NOT apologize when it isn't. That balance is one of the marks of someone genuinely mature. You can grow it now.`,
          ],
          image: `/ue-assets/sl/l13-s4-over.webp`,
          imageCaption: `Over-apologizing is its own problem. Save real "sorry" for when something actually needs repair.`,
          vocab: [
            {
              word: `over-apologizing`,
              definition: `Apologizing for things that aren't your fault, things that don't need apology, or just being yourself. Often comes from anxiety or perfectionism. Looks polite, but shrinks you AND wears out the apology itself, making real ones land less.`,
              audioPrompt: `Over-apologizing is apologizing for things that aren't your fault, things that don't need apology, or just being yourself, {name}. Sorry to bother you. Sorry to ask. Sorry I exist. It can come from anxiety, perfectionism, or trying to keep others happy. It looks polite but shrinks you AND wears out the apology itself. When you apologize for everything, your apologies stop carrying meaning. The fix isn't to be less considerate. It's to apologize specifically, when there's actually something to apologize for. Save sorry for when you actually did something.`,
            },
            {
              word: `thanks for waiting`,
              definition: `A practical substitute for over-apologies — replacing "sorry I'm late" with "thank you for waiting," and "sorry to bother you" with "can I ask a question?" Saves real sorry for moments that actually need it and protects the word's power.`,
              audioPrompt: `Thanks for waiting is the practical substitute for over-apologies, {name}. Instead of sorry I'm late, say thank you for waiting. Instead of sorry to bother you, say can I ask a question? These swaps do two things: they replace unnecessary guilt with genuine appreciation, and they save real sorry for moments that actually need it. Over-apologizing wears out the word. These substitutes protect its power. Try it: catch every unnecessary sorry this week and replace it with thanks or a direct ask.`,
            },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four apologies between kids. Classify each: REAL APOLOGY (owns it, names impact, no excuses, asks about repair), FAKE APOLOGY (sounds like one but isn't — "sorry IF," "sorry BUT," "sorry you feel that way"), or OVER-APOLOGY (excessive apologizing for things that don't need it)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `real`, label: `Real Apology`,  color: `#34D399`, description: `Owns the specific behavior, names the impact, no "buts," asks about repair.` },
            { id: `fake`, label: `Fake Apology`,  color: `#F87171`, description: `Sounds like an apology but doesn't actually own anything. "Sorry IF," "sorry BUT," "sorry you feel that way."` },
            { id: `over`, label: `Over-Apology`,  color: `#94A3B8`, description: `Excessive apologizing for things that aren't your fault, don't need apology, or just being yourself.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Apology #1`,
              clues: [
                { text: `"I'm sorry I made that joke about your drawing in front of everyone."` },
                { text: `"I can see it really hurt your feelings, and that wasn't okay."` },
                { text: `"Is there something I can do to make it right?"` },
              ],
              correctAnswer: `real`,
              realWorldExample: `Owns specific behavior, names impact, asks about repair. Textbook real apology.`,
              explanation: `Pure real apology. All four ingredients are there: OWNS the specific behavior ("I made that joke"), NAMES THE IMPACT ("it hurt your feelings"), NO EXCUSES (doesn't say "but" or defend the joke), and ASKS ABOUT REPAIR ("is there something I can do?"). This is exactly how real apologies should sound.`,
            },
            {
              id: `case-2`,
              caseTitle: `Apology #2`,
              clues: [
                { text: `"Sorry I called you that name, BUT you were being really annoying first."` },
                { text: `"I only said it because you were bugging me all day."` },
                { text: `"You shouldn't be so sensitive about it."` },
              ],
              correctAnswer: `fake`,
              realWorldExample: `BUT-apology + excuse + blame-shifting = not an apology at all.`,
              explanation: `Pure fake apology, and a triple offender. BUT erases the sorry. Excuses ("I only said it because") shift blame. "You shouldn't be so sensitive" attacks the person for having feelings. These three together create a non-apology disguised as one. Hurts more than no apology because it pretends to repair while actually defending.`,
            },
            {
              id: `case-3`,
              caseTitle: `Apology #3`,
              clues: [
                { text: `A kid says "sorry" before asking a question.` },
                { text: `They say "sorry" when someone bumps into THEM.` },
                { text: `They say "sorry" when a friend just texts them about something normal. "Sorry to bother you with this..."` },
              ],
              correctAnswer: `over`,
              realWorldExample: `Apologizing for existing isn't politeness, it's a habit worth changing.`,
              explanation: `Pure over-apology. The kid is apologizing for things that aren't their fault and don't need apology, just being themselves. This often comes from anxiety or trying to keep everyone happy. It looks polite but actually shrinks the kid and makes their REAL apologies land less. Fix: replace "sorry" with "thanks" where you can, and save real "sorry" for actual mistakes.`,
            },
            {
              id: `case-4`,
              caseTitle: `Apology #4 — The Tricky One`,
              clues: [
                { text: `"I'm sorry IF anything I said earlier hurt your feelings. That wasn't my intention."` },
                { text: `The kid's voice is calm and kind-sounding.` },
                { text: `But the friend they're apologizing to still feels strangely unsettled afterward.` },
              ],
              correctAnswer: `fake`,
              realWorldExample: `The IF-apology sounds polite but doesn't own anything.`,
              explanation: `Tricky, {name}! It SOUNDS like a real apology, said calmly and sincerely. So you might call it real. But look at the word IF. "Sorry IF I hurt you" puts the blame on the other person's reaction, not on the apologizer's action. It hasn't owned a specific behavior. It implies "maybe nothing was wrong, maybe you're just being sensitive." Pure fake apology in disguise (the polite version). Lesson: the if-apology is one of the most common fake apologies in the world. Even well-meaning people give them constantly, thinking they're apologizing when they're actually deflecting. The fix is simple: replace "I'm sorry IF I hurt you" with "I'm sorry I said X. I can see it hurt." That tiny shift makes the apology real.`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What does researcher HARRIET LERNER say matters most in an apology?`,
              options: [
                `How loud it is`,
                `Its REALNESS. A small, sincere, well-formed apology lands far better than a long, dramatic, empty one`,
                `How many times you say it`,
                `Whether you cry`,
              ],
              correctIndex: 1,
              explanation: `Harriet Lerner has spent decades studying apologies. She found the SIZE of the apology matters less than its REALNESS. Even a small, sincere, well-formed apology lands far better than a long, dramatic, empty one. The four ingredients (own it, name impact, no buts, ask about repair) make the realness.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What are the FOUR ingredients of a REAL apology?`,
              options: [
                `Loud, fast, short, ended`,
                `OWN what you did specifically, NAME the impact honestly, NO excuses or "buts," ASK about repair`,
                `Cry, beg, promise, forget`,
                `Blame, defend, explain, walk away`,
              ],
              correctIndex: 1,
              explanation: `Four ingredients: OWN the specific behavior ("I'm sorry I made that joke"), NAME the impact ("I can see it hurt you"), NO excuses or "buts," and ASK about repair ("Is there something I can do?"). All four matter. Skipping one or more is why most apologies don't land.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `What does the BUT in "sorry I yelled, BUT you started it" do?`,
              options: [
                `Strengthens the apology`,
                `Usually ERASES everything before it. Turning the apology into a defense disguised as one`,
                `Doesn't matter`,
                `Makes it more honest`,
              ],
              correctIndex: 1,
              explanation: `The "but" rule: the word "but" in an apology usually erases everything before it. "Sorry I yelled, BUT you started it" is a defense, not an apology. Real apologies stop at the apology, no defending, no excuses. The context can come later, if at all.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `What's wrong with "I'm sorry IF I hurt you"?`,
              options: [
                `Nothing, it's perfect`,
                `It puts the blame on the OTHER person's reaction, not on your action. A real apology says "I'm sorry I did X," not "sorry IF you felt Y"`,
                `It's too long`,
                `It's too short`,
              ],
              correctIndex: 1,
              explanation: `"Sorry IF" puts the blame on the other person's reaction rather than owning your action. A real apology says "I'm sorry I said that" not "sorry IF you felt hurt." The if-apology is one of the most common fake apologies in the world. Once you see it, you'll see it everywhere.` },

            { id: `l13-q5`, format: `true-false`,
              question: `True or false: "I'm sorry YOU FEEL THAT WAY" is a real apology.`,
              correctAnswer: false,
              explanation: `False. "Sorry you feel that way" doesn't own ANY behavior, it expresses regret that the other person has feelings about it. It implies "your feelings are the problem here." A real apology owns the action, not the reaction.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is OVER-APOLOGIZING, and why is it a problem?`,
              options: [
                `Being super polite — no problem`,
                `Apologizing for things that aren't your fault or just being yourself. Shrinks you AND wears out the apology so real ones land less`,
                `Saying sorry too quietly`,
                `Apologizing for big things`,
              ],
              correctIndex: 1,
              explanation: `Over-apologizing means saying sorry for things that aren't your fault, don't need apology, or just being yourself ("sorry to bother you," "sorry I exist"). It looks polite but actually shrinks you and wears out the apology, so real ones land less. Fix: replace "sorry" with "thanks" where possible.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `What's the SHIFT from "sorry I'm late" to a better version?`,
              options: [
                `Don't say anything`,
                `Replace with "THANKS for waiting." Saves "sorry" for moments when you actually did something wrong`,
                `Say sorry twice`,
                `Add an excuse`,
              ],
              correctIndex: 1,
              explanation: `Replace many over-apologies with appreciation: "thanks for waiting" instead of "sorry I'm late." "Can I ask a question?" instead of "sorry to bother you." Save real "sorry" for moments when you actually did something. Your real apologies land more when they're not buried in fake ones.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `What's Valor's mature stance on apologies?`,
              options: [
                `Apologize for everything always`,
                `Give REAL apologies (with all four ingredients) when truly needed, AND don't over-apologize when not. That balance is a mark of mature integrity`,
                `Never apologize`,
                `Cry every time`,
              ],
              correctIndex: 1,
              explanation: `Mature integrity is giving REAL apologies (own it, name impact, no buts, ask about repair) when truly needed, AND not over-apologizing when there's nothing to apologize for. That balance is a mark of someone genuinely mature. Practice both sides, and you'll be deeply trusted.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Take a humble breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest, do you tend to AVOID apologizing, give FAKE apologies, or OVER-apologize? Notice gently, without shame.` },
            { id: `r2`, text: `Have you ever received an "I'm sorry IF" or "sorry BUT" apology? How did it feel compared to a real one?` },
            { id: `r3`, text: `Is there someone in your life you owe a real apology to right now? What would the full version sound like (own it, name impact, no buts, ask about repair)?` },
            { id: `r4`, text: `Where could you replace an over-apology with appreciation instead? ("Thanks for waiting" instead of "sorry I'm late.")` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Apology research is some of the most useful work in modern psychology. Therapists, couples counselors, mediators, and leadership coaches all use the same core elements (own it, name impact, no buts, ask about repair) to help people repair real relationships. Kids who learn to apologize well end up with stronger friendships, more honest families, less conflict carrying forward, and more trusted reputations. Adults who never learned often spend decades damaging relationships with weak apologies they don't realize are weak. Valor's note: the ability to apologize WELL might be one of the most underrated leadership skills in the whole subject. Real apologies are rare, and rare things have power. The kid who can own a mistake calmly, name what they did, and ask about repair becomes someone people trust deeply, because they know this kid won't pretend or deflect. Practice in small moments. The mature voice you build now will serve you in every relationship you'll ever have.`,
          familyAdventure: `Family Apology Audit. As a family, talk gently about the apologies in your home. (No naming and shaming, just learning together.) Do real apologies happen, or mostly fake ones? Do family members over-apologize for things that don't need it? What would it look like to start using the four-part real apology (own it, name impact, no buts, ask about repair) when it's needed, and to drop over-apologies for things that aren't really apologies? Adults model it especially. Kids learn real apologies most by hearing their grown-ups give them. You're building a family where repair actually happens.`,
          creativePrompt: {
            intro: `Write a scene where someone gives a REAL apology with all four ingredients — and the impact it has.`,
            floor: `Write at least 5 sentences. Set up what happened, the apology with the four parts visible, and the response.`,
            stretch: `Write 8 to 10 sentences. Show all four parts clearly, including the courage it takes and the repair that follows.`,
            open: `Write as much as you want. Write a full scene showing a real apology in action. Set up the situation: someone did something that hurt another person (a friend, sibling, teammate, parent, classmate). Show them initially having an instinct to give a fake apology (the "sorry IF," the "sorry BUT," the "sorry you feel that way") and then choosing to give a REAL one instead. Walk through all four ingredients clearly: OWNING the specific behavior, NAMING the impact, NO excuses or buts, ASKING ABOUT REPAIR. Show the courage it takes (apologies are vulnerable), the response from the other person (often softening), and what shifts in the relationship because of it. End with reflection on the rare, powerful work of real apology. Make it specific and brave.`,
            frames: [
              `What [kid] did that hurt was ___.`,
              `Their first instinct was to say ___ (a fake apology), but they chose differently.`,
              `Their real apology was: "I'm sorry I ___. I can see it ___. Is there something I can do to ___?"`,
              `The other person's response was ___.`,
              `What shifted in the relationship was ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Brave work, {name}. You now understand one of the rarest leadership skills: apologizing well. You know the four ingredients (own it, name impact, no buts, ask about repair), the fake apologies to avoid, and the trap of over-apologizing. Practice real apologies when truly needed, and skip over-apologies for things that aren't your fault. Next, we explore the related skill of saying hard things WELL, in both directions: GIVING AND RECEIVING FEEDBACK. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `real-apologizer`,
          badgeName: `Real Apologizer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
