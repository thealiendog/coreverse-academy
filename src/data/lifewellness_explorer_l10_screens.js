// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L10 — Friendship and Social Health
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L10 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-10`,
      title:     `Friendship and Social Health`,
      duration:  12,
      xpReward:  50,
      badge:     `friend-builder`,
      badgeName: `Friend Builder`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Think about the people who make you feel good about yourself, {name} — the ones you can be honest with, who notice when you're not okay, who make you want to be better. That kind of friendship isn't just nice to have. Research has found that the quality of our close relationships is one of the strongest predictors of wellbeing — stronger than wealth, stronger than career success. Today we're going to look at friendship as a component of health: what makes a friendship genuinely strong, how friendships change and sometimes end, and what it takes to be the kind of friend who truly matters to someone else.`,
          headline: `Friendship and Social Health`,
          subtitle: `Strong friendships are one of the most powerful forces in a human life — and like all living things, they grow with care and attention`,
          visual: `/explorer-assets/wellness/l10-welcome.png`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why friendships matter so much`,
          paragraphs: [
            `The longest-running study on human happiness ever conducted — tracking people for over 80 years — found that the **single most important factor in long-term health and happiness was the quality of close relationships**. Not wealth, not fame, not achievement — relationships. People with strong social connections live longer, recover from illness faster, experience less cognitive decline as they age, and consistently report higher happiness. Loneliness, on the other hand, activates the **same brain regions as physical pain**. Social connection is not a nice extra — it's a fundamental human need.`,
          ],
          image: `/explorer-assets/wellness/l10-magazine-1.png`,
          imageCaption: `Decades of research agree: the quality of your relationships is the biggest factor in long-term happiness`,
          vocab: [
            { word: `connection`, definition: `A genuine sense of closeness and mutual care between people — the quality of social connection, not the number of relationships, is what most strongly predicts wellbeing.`, audioPrompt: `Connection is more than knowing a lot of people, {name}. It's the feeling of being genuinely known and cared about by someone — and knowing and caring about them in return. Research on human happiness keeps finding the same thing: it's the quality of those real connections that matters most, far more than how many you have.` },
            { word: `loneliness`, definition: `The experience of feeling disconnected from others — which activates the same brain regions as physical pain, and has measurable effects on health and longevity.`, audioPrompt: `Loneliness activates the same brain regions as physical pain, {name} — and that's not metaphor, that's neuroscience. Your body registers social disconnection as a genuine harm, because humans are deeply wired for belonging. Understanding this is why caring for your relationships isn't a soft priority. It's one of the most serious things you can do for your health.` },
            { word: `wellbeing`, definition: `Your overall state of physical, emotional, and social health — shaped substantially by the quality and closeness of your relationships.`, audioPrompt: `Wellbeing is how well you're actually doing across all the dimensions of your life, {name} — not just your body, but your mood, your sense of meaning, your feeling of belonging. The research is clear: close, high-quality relationships are one of the most reliable contributions to genuine wellbeing. They're not an extra. They're part of the foundation.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What makes a good friend`,
          paragraphs: [
            `Research on friendship consistently identifies the same qualities. **Reliability** — they show up when they said they would. **Honesty** — they tell you the truth, kindly. **Reciprocity** — they're as interested in your life as you are in theirs. **Support** — they're there when things are hard, not just when things are easy. **Consistency** — they're the same person in private as in public. Friendships where these qualities are missing often feel **draining rather than energising** — that's usually a sign the relationship isn't balanced. The most sustaining friendships are ones where both people genuinely show up for each other.`,
          ],
          image: `/explorer-assets/wellness/l10-magazine-2.png`,
          imageCaption: `Reliability, honesty, reciprocity, support, consistency — these are what make friendship feel safe`,
          vocab: [
            { word: `reciprocity`, definition: `A mutual exchange of care and investment — where both people in a friendship give and receive, rather than one person always doing the work.`, audioPrompt: `Reciprocity is the balance that keeps a friendship feeling fair, {name}. Both people reach out. Both people listen. Both people show up for the other. When that flow runs only one direction — one person always giving, the other always receiving — the friendship often starts to feel draining rather than energizing. Balance matters.` },
            { word: `reliability`, definition: `Following through on what you say you'll do — showing up when you said you would and being someone others can count on.`, audioPrompt: `Reliability builds trust faster than almost anything else, {name}. When you say you'll be somewhere, and you are — when you say you'll keep something private, and you do — people learn they can count on you. That safety is the foundation real friendship is built on. Without it, even fun friendships stay shallow.` },
            { word: `draining`, definition: `A word for relationships that consistently take more energy than they give — often a sign that the balance of care and investment is significantly one-sided.`, audioPrompt: `Have you ever noticed that some friendships leave you feeling lighter afterward, and others leave you feeling tired, {name}? Energizing versus draining is a real distinction. The relationships that consistently drain you — where you give more than you receive, or where you never quite feel safe to be yourself — are worth paying attention to. That feeling is information.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to build real friendships`,
          paragraphs: [
            `Research by psychologist Robin Dunbar found that close friendships require **regular in-person interaction and shared experiences** — you can't build deep friendship purely online. The recipe for building friendship: **proximity** (spend time in the same places), **repetition** (see each other regularly), **vulnerability** (share something real, not just surface topics), and **reciprocity** (both people invest). The single biggest friendship-builder is also the simplest: **show genuine interest in the other person's life, remember what they told you, and ask about it later**. This one habit communicates care more powerfully than almost anything else.`,
          ],
          image: `/explorer-assets/wellness/l10-magazine-3.png`,
          imageCaption: `Proximity, repetition, vulnerability, reciprocity — and genuine interest in the other person's life`,
          vocab: [
            { word: `vulnerability`, definition: `Sharing something real and personal — not just surface topics — which is one of the key ingredients that deepens friendship from acquaintance to genuine closeness.`, audioPrompt: `Vulnerability is what takes a friendship from pleasant to real, {name}. Sharing something true about yourself — a worry, an embarrassing moment, something you actually care about — invites the other person to do the same. That mutual openness is where genuine closeness comes from. You can't build a deep friendship staying only on the surface.` },
            { word: `proximity`, definition: `Being in the same physical space regularly — one of the key conditions for friendship to develop, since deep connection is built through repeated in-person time together.`, audioPrompt: `Proximity is one of the quiet secrets of friendship formation, {name}. The people who end up closest to you are often the ones you're simply around most often — in the same class, on the same team, in the same neighborhood. Regular physical presence is one of the foundations. It's why online friendships rarely become as deep as the ones built face-to-face.` },
            { word: `genuine interest`, definition: `Real curiosity about another person's life — demonstrated by remembering what they told you and asking about it later, one of the most powerful friendship-building habits.`, audioPrompt: `Genuine interest is the single most powerful friendship signal there is, {name} — and it costs nothing. Remembering something your friend mentioned last week and asking "how did that go?" tells them something simple: I was actually listening. I care about your life. Most people feel that kind of attention so rarely that it's genuinely memorable when they receive it.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Navigating friendship challenges`,
          paragraphs: [
            `Friendships hit bumps. Some common ones: a friend changes and you grow apart, a friend says something hurtful, a third person causes conflict between friends, a friend treats you differently when others are around. These situations are normal — almost every close friendship experiences them. The friendships that survive these moments often become stronger for it. The key skills: **address issues directly and privately** rather than through other people, **use I-statements** ("I felt hurt when..."), **give people the benefit of the doubt** before assuming bad intent, and know that **not every friendship is meant to last forever** — and that's okay too.`,
          ],
          image: `/explorer-assets/wellness/l10-magazine-4.png`,
          imageCaption: `Every close friendship hits bumps — addressing them directly and privately is what lets them survive`,
          vocab: [
            { word: `I-statement`, definition: `A way of expressing a concern that focuses on how you felt rather than accusing the other person — like "I felt hurt when..." instead of "You always..."`, audioPrompt: `I-statements change the whole feeling of a hard conversation, {name}. "I felt left out when that happened" is very different from "You never include me." One opens a door. The other raises defenses. When a friendship hits a rough patch, I-statements give the other person something to respond to rather than something to argue against. That small shift can keep a conversation from becoming a fight.` },
            { word: `benefit of the doubt`, definition: `Assuming the best possible explanation before concluding someone acted badly — a first step in addressing friendship problems that preserves trust and goodwill.`, audioPrompt: `Giving someone the benefit of the doubt means your first thought isn't "they meant to hurt me," {name}. Maybe they were having a hard day. Maybe they didn't realize how it landed. Approaching a friendship problem with that openness — rather than certain blame — keeps the conversation from starting in accusation and gives the friendship a real chance to recover.` },
            { word: `conflict`, definition: `A disagreement or tension between people — normal in every close friendship, and not necessarily a sign something is wrong, but an opportunity to communicate and rebuild trust.`, audioPrompt: `Conflict isn't a sign a friendship is broken, {name} — it's a sign people care enough to be honest with each other. Terra believes this: the friendships that survive conflict are often stronger for it. The question isn't whether conflict happens but how you handle it. Directly, privately, kindly — that combination resolves more than most people expect.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `quality`,
              label: `💛 Quality Friendship Habit (shows up and gives back)`,
              color: `#34D399`,
            },
            {
              id: `one-sided`,
              label: `↔️ One-Sided Friendship Habit (takes without giving)`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l10-g1`,
              image: `l10-game-1.png`,
              label: `Remembering something your friend mentioned last week and asking how it turned out.`,
              matchPhrase: `This small habit — remembering and following up — is one of the most powerful signals that you genuinely care about someone's life, not just your own.`,
              correctMatch: `quality`,
            },
            {
              id: `l10-g2`,
              image: `l10-game-2.png`,
              label: `Showing up for a friend who's going through something hard, even when it's not convenient.`,
              matchPhrase: `Being there in hard moments — not just easy ones — is what separates a real friendship from a convenient one.`,
              correctMatch: `quality`,
            },
            {
              id: `l10-g3`,
              image: `l10-game-3.png`,
              label: `Only reaching out to a friend when you need something, and staying quiet the rest of the time.`,
              matchPhrase: `Friendships need to flow both ways — a connection where one person only receives without giving back gradually loses its foundation.`,
              correctMatch: `one-sided`,
            },
            {
              id: `l10-g4`,
              image: `l10-game-4.png`,
              label: `Being warm and friendly to someone when you're alone, but ignoring them when others are around.`,
              matchPhrase: `Consistency is one of the core qualities of a real friend — behaving differently depending on who's watching makes the friendship feel unsafe.`,
              correctMatch: `one-sided`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l10-q1`,
              format: `multiple-choice`,
              question: `What does research consistently show about strong social connections and health?`,
              options: [
                `Social connection is beneficial but has no measurable effect on physical health`,
                `People with strong friendships are slightly happier but live the same length of life`,
                `Strong social connections are linked to longer life, faster recovery from illness, and significantly higher happiness`,
                `The quality of friendships only affects mental health, not physical health`,
              ],
              correctIndex: 2,
              explanation: `The research on this is among the most consistent in all of human health science. Strong, high-quality social connections are linked to longer lifespans, faster recovery from illness, lower rates of cognitive decline, and higher self-reported happiness. Loneliness, on the other hand, activates the same brain regions as physical pain. Relationships are not optional extras — they're foundational.`,
            },
            {
              id: `l10-q2`,
              format: `multiple-choice`,
              question: `What is the most reliable thing you can do to deepen a friendship?`,
              options: [
                `Share your problems with them so they feel needed`,
                `Spend as much time together as possible, even if you're not really talking`,
                `Show genuine interest in their life, remember what they tell you, and ask about it later`,
                `Make sure to text them every day so they know you're thinking about them`,
              ],
              correctIndex: 2,
              explanation: `Remembering what someone told you and asking about it later communicates something simple but powerful: I was actually listening. I care about what's happening in your life, not just my own. This habit — more than any other — builds the trust and warmth that makes a friendship feel real and safe.`,
            },
            {
              id: `l10-q3`,
              format: `multiple-choice`,
              question: `When a friendship hits a difficult patch, what is the most effective response?`,
              options: [
                `Give the friendship space and see if it resolves on its own`,
                `Talk to mutual friends to get their perspective first`,
                `Address the issue directly and privately with the friend, using I-statements and giving them benefit of the doubt`,
                `End the friendship to avoid further hurt`,
              ],
              correctIndex: 2,
              explanation: `Direct, private conversation — using I-statements and approaching with good faith — resolves the actual issue and preserves the friendship's trust. Going through other people usually adds complexity and hurt without resolving anything. Most friendship problems can be worked through if both people approach them with honesty and goodwill.`,
            },
            {
              id: `l10-q4`,
              format: `true-false`,
              question: `Strong friendships require investment from both people — a friendship where only one person does the reaching out is a sign something is out of balance.`,
              correctAnswer: true,
              explanation: `True. Reciprocity — both people investing — is one of the defining qualities of a healthy friendship. A relationship where one person consistently does all the work while the other receives without contributing back is draining rather than energising. Noticing this imbalance isn't a reason to give up on a friendship, but it is useful information.`,
            },
            {
              id: `l10-q5`,
              format: `fill-blank`,
              question: `The longest happiness study ever run found that the most important factor in long-term health and happiness was the quality of your ___.`,
              options: [
                `relationships`,
                `career`,
                `wealth`,
                `health`,
              ],
              correctIndex: 0,
              explanation: `The research conclusion is clear and consistent: relationships — not wealth, not achievement, not status — are the most reliable predictor of long-term health and happiness. People with high-quality close relationships live longer, stay healthier, and report significantly higher life satisfaction. Who you have around you matters more than almost anything else.`,
            },
            {
              id: `l10-q6`,
              format: `multiple-choice`,
              question: `Why is it better to address a friendship problem directly with the person rather than through other people?`,
              options: [
                `Because it's more polite to sort things out face to face`,
                `Because other people will take sides and make it worse`,
                `It resolves the actual issue and preserves trust — going through others usually creates more problems than it solves`,
                `Because the other person won't know about the issue unless you tell them directly`,
              ],
              correctIndex: 2,
              explanation: `Direct conversation addresses the real issue at its source. Going through other people adds interpretations, perspectives, and sometimes hurt feelings that weren't originally there. It also signals distrust — that you weren't willing to talk to the person directly. Direct, private, kind conversation is almost always the path that preserves both the friendship and each person's dignity.`,
            },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Decades of research on human health and happiness consistently point to the same thing: the quality of your relationships matters more than almost anything else. Doctors, therapists, and researchers all treat social connection as a health priority — not a nice extra.`,
          familyAdventure: `Do a connection audit as a family. Each person names their three closest friendships, when they last spent quality time with each person, and one thing they could do this week to invest in each one. Then make a commitment: reach out to one person you've been meaning to connect with but haven't yet.`,
          creativePrompt: `Think of one friend you haven't properly connected with in a while. Send them a message today — not because you need something, just because you thought of them. Notice how that feels.`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that friendship is one of the most powerful forces in a human life — and that like all living things, it grows with care and attention. The friendships you build and protect now are some of the most valuable things you'll ever have. Terra is so proud to walk this path with you.`,
          badge: `friend-builder`,
          badgeName: `Friend Builder`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L10.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L10] Loaded: "Friendship and Social Health" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l10-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L10] One or more magazine assets missing'));
}
