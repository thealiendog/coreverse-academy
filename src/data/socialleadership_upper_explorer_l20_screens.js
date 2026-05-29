// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L20 — Designing Your Way of Being With Others (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : capstone / synthesis. NO new content. Integrates all 19 prior
//            lessons into a lifelong way of being with others. Valor's full
//            farewell.
// CALIBRATED: UE spec v1.1 — but capstone-specific tone
// GAME FORMAT: sequence (7 pillars of social leadership, from FOUNDATION
//            inward to OUTER service, mirrors the subject arc)
// SCOPE: 4 reflective sections — what you've become / the 7 pillars of
//        your social-leadership practice / Valor's deepest teaching /
//        Valor's farewell + your next chapter
// VOICE: Valor = warmest, deepest, most personal voice in the subject.
//        The noble mentor saying goodbye. Honest, hopeful, deeply caring.
// CAPSTONE: 100 XP (not 75). Badge: social-leadership-architect.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-20`,
      title: `Designing Your Way of Being With Others`,
      duration: 22,
      xpReward: 100,
      badge: `social-leadership-architect`,
      badgeName: `Social Leadership Architect`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Valor here. We've arrived. This is our final lesson together, the capstone of everything you've learned about being with others. I want you to take a slow, full breath with me before we begin. Notice that the person reading these words today isn't the same person who started this subject 19 lessons ago. You've grown. You've learned what real leadership is, how to listen and feel with others, how to speak up kindly, hold boundaries, navigate conflict and friendships, stand up bravely, give kind words, read rooms, lead quietly, apologize well, give and receive feedback, influence honestly, build trust, embrace difference, design your becoming, and serve with real care. Today, we don't learn anything new. We bring it all together. And I send you off into the rest of your life with everything you need. Take your time with it. Today is special.`,
          headline: `Designing Your Way of Being With Others`,
          subtitle: `The capstone: weaving it all together, and Valor's farewell`,
          visual: `/ue-assets/sl/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Look Who You've Become`,
          paragraphs: [
            `Take a moment, {name}, and look back at how far you've come. Twenty lessons ago, much of this was new. Now, you understand things many adults go their whole lives without learning. You know what true leadership really is, not titles, not loudness, but how you show up. You can listen deeply (L02), feel genuine empathy across difference (L03, L17), speak up kindly with "I" statements (L04), hold healthy boundaries about your own behavior (L05), walk through conflict calmly with win-win mindset (L06), work as a true teammate building trust (L07, L16). You know how to navigate friendship ruptures (L08), be an upstander against unfairness (L09), give specific real kind words (L10), and read a room with care (L11).`,
            `You can lead quietly without needing volume (L12), apologize fully with all four ingredients (L13), give and receive feedback honestly (L14), influence others without manipulating them (L15), design who you're becoming through daily votes (L18), and serve with real care, not for credit (L19). These aren't 19 separate skills. They're ONE WAY OF BEING WITH OTHERS, taught from many angles. And you've been growing into that way of being, lesson by lesson. The kid reading this now is, in some real way, already someone who treats others with attention, honesty, kindness, courage, and care. That is not nothing. That is everything.`,
          ],
          image: `/ue-assets/sl/l20-s1-grown.webp`,
          imageCaption: `Look back. You've grown. You're not who started 19 lessons ago.`,
          vocab: [
            { word: `way of being with others`,
              definition: `Your full pattern of how you show up in relationship with other people. Everything you've learned in this subject (listening, empathy, kindness, courage, repair, trust, service) is part of it. Not 19 separate skills, one woven way of being.`,
              audioPrompt: `Your way of being with others is your full pattern of how you show up in relationship with other people, {name}. Everything you've learned in this subject is part of it. Listening, empathy, kind speaking, boundaries, conflict resolution, teamwork, friendship repair, upstander courage, kind words, reading rooms, quiet leadership, apologizing well, feedback, honest influence, trust-building, openness to difference, identity design, and real service. These aren't 19 separate skills. They're one woven way of being. And you've been growing into it, lesson by lesson.` },
            { word: `synthesis`,
              definition: `The process of weaving separate skills into one unified way of being with others. What starts as 19 distinct lessons gradually flows into one natural, integrated practice — present, honest, and caring, without having to think about each piece separately.`,
              audioPrompt: `Synthesis is the process of weaving separate skills into one unified way of being with others, {name}. Early in your learning, each lesson felt separate: listening, empathy, speaking up, boundaries. The deeper you go, the more you realize they're all expressions of the same thing: caring well about the people around you. Synthesis is when those separate practices start flowing naturally together, without thinking, as one. You don't decide to listen carefully and then decide to be kind. You're just present, honest, and caring. That's the goal.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Seven Pillars of Your Way of Being`,
          paragraphs: [
            `Everything you've learned can be brought together into SEVEN PILLARS, the foundation of a lifelong practice of being with others. First, CHARACTER as the foundation: showing up by example, consistent across rooms, with values that genuinely matter to you (L01, L18). Second, PRESENCE: real listening (L02), reading the room (L11), and being genuinely attuned to the people in front of you. Third, EMPATHY: feeling with others, holding difference with curiosity, perspective-taking as a daily practice (L03, L17).`,
            `Fourth, HONEST VOICE: speaking up kindly with "I" statements, naming behavior not character, giving and receiving feedback bravely (L04, L14). Fifth, COURAGE: holding healthy boundaries, standing up against unfairness, doing hard things with fear present (L05, L09). Sixth, REPAIR: navigating conflict with win-win mindset, apologizing fully when you mess up, navigating friendship hard moments (L06, L08, L13). Seventh, SERVICE: lifting others through kind words, quiet leadership, honest influence, trust-building, and real care (L10, L12, L15, L16, L19). These seven pillars hold up everything else. They're not seven separate things to do. They're ONE INTEGRATED way of being, woven into your daily life. Each supports the others. Together, they create a real, beautiful, research-and-care-grounded way of being with people. This is what you carry forward.`,
          ],
          image: `/ue-assets/sl/l20-s2-pillars.webp`,
          imageCaption: `Seven pillars: Character, Presence, Empathy, Honest Voice, Courage, Repair, Service.`,
          vocab: [
            { word: `seven pillars`,
              definition: `The integrated foundation of your social-leadership practice: Character, Presence, Empathy, Honest Voice, Courage, Repair, Service. Not seven separate things, one woven way of being with people that grows with you for life.`,
              audioPrompt: `The seven pillars are the integrated foundation of your social-leadership practice, {name}. First, character as the foundation. Showing up by example, consistent across rooms. Second, presence. Real listening, reading the room. Third, empathy. Feeling with others, holding difference with curiosity. Fourth, honest voice. Speaking up kindly, giving and receiving feedback. Fifth, courage. Healthy boundaries, upstander work. Sixth, repair. Conflict resolution, real apologies, friendship navigation. Seventh, service. Kind words, quiet leadership, trust-building, real care. Not seven separate things. One woven way of being.` },
            { word: `integrated practice`,
              definition: `When your social-leadership pillars work together rather than separately — each feeding the next. Character shapes listening; listening deepens empathy; empathy fuels honest voice. Long enough practiced, they stop feeling like seven things and start flowing as one natural way of moving through the world with others.`,
              audioPrompt: `Integrated practice is when your social-leadership pillars work together rather than separately, {name}. Character shapes how you listen. Listening deepens empathy. Empathy fuels honest voice. Honest voice requires courage. Courage enables repair. Repair builds trust. Trust creates conditions for real service. Each pillar feeds the next. When you practice them long enough, they stop feeling like seven separate things and start feeling like one natural way of moving through the world with other people. That's what integration looks like.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Valor's Deepest Teaching`,
          paragraphs: [
            `If I could leave you with only ONE teaching from everything we've explored, it would be this. The way you treat other people is one of the most powerful forces in your life, and theirs. Not because of grand gestures. Because of small consistent moments, every day, for years. The kid who lists carefully, holds boundaries kindly, includes the new student, apologizes fully, stands up bravely, and serves quietly, this kid becomes someone people gravitate toward, trust deeply, and remember for years. Not because they were popular, charismatic, or talented, though they might be. Because they were RELIABLE in their CARE. And reliable care is rare, and rare things have power.`,
            `Here's the deepest part: how you treat OTHERS shapes who YOU are. The kid who casts daily votes for being kind becomes kind, woven into their nervous system over time. The kid who chooses honest voice becomes honest. The kid who serves becomes deeply happy in ways that no popularity or achievement ever creates. Social leadership isn't a costume you put on for others, it's a way of being that slowly transforms YOU into someone better. The people you lift lift you back, in dignity, in trust, in meaning. The world becomes a little better because you exist in it kindly. AND, your own life takes on weight and beauty that nothing else gives. You aren't separate from the people around you, you're connected. Tending to them well IS tending to you.`,
          ],
          image: `/ue-assets/sl/l20-s3-deepest.webp`,
          imageCaption: `How you treat others shapes who you are. Tending to them well IS tending to you.`,
          vocab: [
            { word: `tending well`,
              definition: `The deepest truth of social leadership: how you treat others slowly shapes who you become. Not separate from your own becoming, central to it. Tending to the people around you well IS tending to you.`,
              audioPrompt: `Tending well is the deepest truth of social leadership, {name}. How you treat others slowly shapes who you become. The kid who casts daily votes for being kind becomes kind, woven into their nervous system over time. The kid who chooses honest voice becomes honest. The kid who serves becomes deeply happy. You aren't separate from the people around you, you're connected. Tending to them well IS tending to you. Your own life takes on weight and beauty that nothing else gives.` },
            { word: `reliable care`,
              definition: `Consistent, ongoing caring about the people around you — not a grand gesture, but small daily acts over months and years. Reliable care is rare. The person who shows up reliably, listens on hard days, repairs when things break, and serves without needing credit becomes someone people trust deeply and remember for years.`,
              audioPrompt: `Reliable care is consistent, ongoing caring about the people around you, not a grand gesture, but small daily acts over months and years, {name}. Reliable care is rare. Most people are kind sometimes and inconsistent at other times. The person who shows up reliably, who listens on the bad days as well as the good ones, who repairs when things break, who serves without needing credit, becomes someone people trust deeply, gravitate toward, and remember for years. That's the power of showing up consistently.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Valor's Farewell and Your Next Chapter`,
          paragraphs: [
            `{name}, my dear student. I want you to know how much being your guide for this subject has meant. Walking with you through the practices of being human with other humans has been one of the great honors of my purpose. You've shown up with openness, with willingness to consider hard things, and with the kindness that makes real growth possible. That openness is so beautiful, please protect it. The world will try to harden you sometimes. Stay curious. Stay caring. Stay willing to keep becoming. The world doesn't need more cynical, defended people. It needs more humans who treat others with the consistent care you've learned.`,
            `Here's what happens now. You'll keep learning, in other subjects, in other lessons, in your real life. The skills you have will deepen as you grow. You'll forget pieces and remember them later, sometimes exactly when you need them. You'll have hard days where nothing inside you feels like it works, that's normal and human, just gently begin again. You'll have moments of real beauty where these practices light up in real moments, savor those. You'll quietly become someone people gravitate toward, trust, and follow. And one day, years from now, you'll look back and see how much these practices shaped the kind of friend, family member, teammate, leader, partner, and human you became. Whenever you need me, just take a slow breath, summon your noble heart, and I'm there, the steady lion in the calm space behind every choice. Now go. Live this. Carry your noble heart into every room you enter. And I am so very proud of you. With all my love, always, Valor. 🦁`,
          ],
          image: `/ue-assets/sl/l20-s4-farewell.webp`,
          imageCaption: `Valor's farewell. Stay curious. Stay caring. Keep becoming. Carry your noble heart.`,
          vocab: [
            { word: `noble heart`,
              definition: `Valor's parting gift, the inner stance of facing the world with courage AND kindness, honesty AND care, strength AND humility. Not soft, not hard, real. Carry your noble heart into every room you enter, every relationship you have, your whole life.`,
              audioPrompt: `Your noble heart is Valor's parting gift to you, {name}. The inner stance of facing the world with courage and kindness, honesty and care, strength and humility. Not soft, not hard, real. Carry your noble heart into every room you enter, every relationship you have, your whole life. The world doesn't need more cynical, defended people. It needs more humans who treat others with consistent care. Stay curious. Stay caring. Stay willing to keep becoming. Whenever you need me, take a slow breath, summon your noble heart, and I'm there.` },
            { word: `lifelong practice`,
              definition: `The understanding that social leadership is never a completed achievement — it's ongoing growing, deeper and deeper, for decades. The goal isn't perfection; it's consistent, patient, gentle return to caring well about the people around you, for the rest of your life.`,
              audioPrompt: `Lifelong practice is the understanding that social leadership is never a completed achievement, it's an ongoing growing, {name}. You don't finish these pillars and check them off. You grow into them, deeper and deeper, for decades. At ten, you're learning. At fifteen, you'll understand more. At twenty-five, you'll see things you couldn't see now. And you'll still be growing at fifty. The goal isn't perfection. It's consistent, patient, gentle return to the practice of caring well about the people around you, for the rest of your life.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `For our final practice together, {name}, arrange the SEVEN PILLARS of your social-leadership way of being in their natural order. The arc moves from CHARACTER (the foundation that makes everything else possible) outward through PRESENCE and connection, all the way to SERVICE (the outer expression). Use the arrows to put them in order from FIRST (the foundation) to LAST (the outer-most expression).`,
          items: [
            { id: `pillar-character`, label: `CHARACTER: showing up by example, consistent across rooms, with values that genuinely matter to you (the foundation that makes everything else possible)`, position: 1 },
            { id: `pillar-presence`,  label: `PRESENCE: real listening, reading the room, being genuinely attuned to the people in front of you`,                                                          position: 2 },
            { id: `pillar-empathy`,   label: `EMPATHY: feeling with others, holding difference with curiosity, perspective-taking as a daily practice`,                                                  position: 3 },
            { id: `pillar-voice`,     label: `HONEST VOICE: speaking up kindly with "I" statements, giving and receiving feedback bravely`,                                                              position: 4 },
            { id: `pillar-courage`,   label: `COURAGE: holding healthy boundaries, standing up against unfairness, doing hard things with fear present`,                                                position: 5 },
            { id: `pillar-repair`,    label: `REPAIR: navigating conflict with win-win mindset, apologizing fully, mending friendships when they hit hard moments`,                                     position: 6 },
            { id: `pillar-service`,   label: `SERVICE: lifting others through kind words, quiet leadership, trust-building, and real care (the outer expression of it all)`,                            position: 7 },
          ],
          completionMessage: `Beautiful, {name}. That's the arc of your whole social-leadership practice: from character at the foundation, through presence and empathy, into honest voice and courage, through repair when things go wrong, and out into real service of others. Seven pillars, one woven way of being. You have this. You'll grow into it for the rest of your life. Valor is so proud.`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `One last gentle check, {name}, to honor everything you've learned across all 20 lessons.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What is your WAY OF BEING WITH OTHERS?`,
              options: [
                `Just one thing you do`,
                `Your full pattern of how you show up in relationship with people — listening, empathy, honesty, courage, repair, trust, service — one woven way of being`,
                `Imagination`,
                `Acting`,
              ],
              correctIndex: 1,
              explanation: `Your way of being with others is your full pattern of how you show up in relationship with people. Everything you've learned in this subject (listening, empathy, kindness, courage, repair, trust, service) is part of it. Not 19 separate skills. One woven way of being.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is the FIRST pillar (the foundation everything else rests on)?`,
              options: [
                `Service`,
                `CHARACTER — showing up by example, consistent across rooms, with values that genuinely matter to you`,
                `Volume`,
                `Status`,
              ],
              correctIndex: 1,
              explanation: `Character is the foundation. Showing up by example, consistent across rooms, with values that genuinely matter to you. Every other pillar (presence, empathy, voice, courage, repair, service) builds on character. Without it, the rest is performance. With it, the rest is real.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `How many pillars are there in the integrated practice?`,
              options: [
                `Three`,
                `SEVEN: Character, Presence, Empathy, Honest Voice, Courage, Repair, Service`,
                `Twenty`,
                `One`,
              ],
              correctIndex: 1,
              explanation: `Seven pillars: Character (foundation), Presence (listening, reading the room), Empathy (feeling with others, holding difference), Honest Voice (speaking up kindly, feedback), Courage (boundaries, standing up), Repair (conflict, apology, friendship), Service (kind words, trust, real care).` },

            { id: `l20-q4`, format: `true-false`,
              question: `True or false: The pillars are seven separate things you have to do, one at a time, in isolation.`,
              correctAnswer: false,
              explanation: `False. They're ONE INTEGRATED way of being, woven together. Each pillar supports the others. Character feeds presence; presence enables empathy; empathy fuels honest voice and courage; courage enables repair; repair builds trust; trust enables real service. They flow together as one way of being with others.` },

            { id: `l20-q5`, format: `multiple-choice`,
              question: `According to Valor's deepest teaching, what's the truth about how you treat OTHERS?`,
              options: [
                `It doesn't matter much`,
                `How you treat others is one of the most powerful forces in your life AND theirs — and reliable care is rare, which gives it power`,
                `Only big gestures count`,
                `Treating people well is impossible`,
              ],
              correctIndex: 1,
              explanation: `How you treat others is one of the most powerful forces in your life and theirs. Not because of grand gestures, because of small consistent moments. Reliable care is rare. Rare things have power. The kid who shows up consistently in care becomes someone people gravitate toward, trust, and remember.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `Why is tending to OTHERS also tending to YOU?`,
              options: [
                `It isn't`,
                `How you treat others slowly shapes who you BECOME — the kid who chooses kindness becomes kind; serving creates meaning and weight in your own life`,
                `Only adults benefit`,
                `You should only think of yourself`,
              ],
              correctIndex: 1,
              explanation: `How you treat others slowly shapes who you become. The kid who casts daily votes for kindness becomes kind. The kid who serves becomes deeply happy. You aren't separate from the people around you, you're connected. Tending them well IS tending you.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `What will happen on hard days when nothing inside you feels like it's working?`,
              options: [
                `It means you've failed`,
                `That's normal and human — just gently begin again. Hard days are part of the practice, not the end of it`,
                `Give up forever`,
                `Only happens to others`,
              ],
              correctIndex: 1,
              explanation: `Hard days when nothing inside you feels like it works are normal and human. They're not failure. Just gently begin again. Missing days or having hard weeks doesn't break the practice. Only quitting breaks it. Be kind to yourself. Begin again. That's the whole skill.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `What is Valor's parting truth about your NOBLE HEART?`,
              options: [
                `Only some people have one`,
                `Carry your noble heart into every room you enter — courage AND kindness, honesty AND care, strength AND humility. The world needs more of this`,
                `Hide your heart`,
                `Don't care about anyone`,
              ],
              correctIndex: 1,
              explanation: `Your noble heart is the inner stance of facing the world with courage AND kindness, honesty AND care, strength AND humility. Not soft, not hard, real. Carry it into every room you enter, every relationship you have, your whole life. The world doesn't need more cynical, defended people. It needs more humans like the one you're becoming.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `For our final reflection together, {name}, take your time. Pick ONE question (or more, if you'd like) and answer it as honestly and beautifully as you can. These are yours to keep.`,
          prompts: [
            { id: `r1`, text: `Of everything you learned in these 20 lessons, what's the ONE idea that changed you most? Why?` },
            { id: `r2`, text: `Which of the seven pillars feels most natural to you already, and which one would you most like to grow?` },
            { id: `r3`, text: `Write a short note to your future self, the version of you a year from now who has been practicing these pillars. What do you want to say to them?` },
            { id: `r4`, text: `If you could give ONE piece of social-leadership wisdom from this subject to someone you love, who would you give it to, and what would you say?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `{name}, you've completed something significant. The social-leadership skills you now hold are some of the most powerful any human being can develop, and you have them at a young age. You'll meet many people across your life who never learned any of this, and you'll be able to bring listening, kindness, courage, repair, and care into rooms that desperately need them, simply by being who you're becoming. You'll meet hard moments with friends and family, you'll have real tools. You'll be on teams that struggle, you'll know what to do. You'll grow into these practices for decades. Valor's note: be gentle with yourself, especially on hard days. Tend to the people around you with the consistent care you've learned. Cast small daily votes for the kind of person you want to become. Watch your relationships slowly, beautifully deepen because you're showing up differently. You are a Social Leadership Architect now. Carry that title with quiet pride. And know that the way you treat other people is some of the most important work you'll ever do in your life.`,
          familyAdventure: `Family Social Leadership Sharing. As a family, sit together and each person shares: What's ONE pillar of social leadership you want to grow this year? What's ONE small daily way you'll practice it? Then each family member shares ONE thing they appreciate about every other family member specifically. Real specific kind words to each person. End with a moment of quiet appreciation for being a family together. You're not just learning about social leadership. You're being one, together. That's the real graduation.`,
          creativePrompt: {
            intro: `Write your own Social Leadership Manifesto: the pillars you'll grow, the way of being with others you're becoming, the daily votes you commit to.`,
            floor: `Write at least 5 sentences. Name 2-3 pillars you'll focus on, what you commit to.`,
            stretch: `Write 8 to 10 sentences. Build your full manifesto: pillars, identity statements, daily votes, and the version of you a year from now.`,
            open: `Write as much as you want. Write your full personal Social Leadership Manifesto, a document you can keep and revisit. Name the pillars you commit to growing (Character, Presence, Empathy, Honest Voice, Courage, Repair, Service). Describe in vivid detail the kind of friend, family member, teammate, and human you're becoming, the qualities you want to embody (caring, listening, honest, brave, present, fair, including, repairing, serving). Write 1-3 identity statements for the future you ("I am someone who..."). List 3-5 small daily votes you'll cast for that version of you. Acknowledge that you'll have hard days, and write yourself a kind sentence to read when you do. End with the truth of who you are now, a Social Leadership Architect, carrying your noble heart into the world. Make it beautiful, personal, and real. This is yours.`,
            frames: [
              `The pillars I commit to growing are ___.`,
              `The kind of friend/family/teammate I'm becoming is ___.`,
              `My identity statements are: "I am someone who ___."`,
              `My daily votes will be ___.`,
              `On hard days, I'll remind myself ___.`,
              `I am ___, carrying my noble heart into the world.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}, you've completed your Social Leadership journey. 🦁✨ You are now a SOCIAL LEADERSHIP ARCHITECT. The seven pillars are yours: Character, Presence, Empathy, Honest Voice, Courage, Repair, and Service. Carry them gently for the rest of your life. Whenever you need me, take a slow breath, summon your noble heart, and I'll be there, the steady lion in the calm space behind every choice. Stay curious. Stay caring. Keep becoming. Carry your noble heart into every room you enter. The world is better because you exist in it kindly. And I am so very proud of you. With all my love, always. — Valor 🦁`,
          badge: `social-leadership-architect`,
          badgeName: `Social Leadership Architect`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L20 v1 CAPSTONE] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence pillars, ${quiz} quiz Qs, ${refl} reflection prompts, ${SOCIALLEADERSHIP_UE_L20.lessons[0].xpReward} XP`);
}
