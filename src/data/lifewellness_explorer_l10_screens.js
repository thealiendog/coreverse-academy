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
          headline: `Friendships Are Health`,
          paragraphs: [
            `The longest-running study on human happiness ran 80+ years.`,
            `Its conclusion: the single biggest factor in long-term health and happiness wasn't wealth, fame, or achievement. It was the quality of close relationships.`,
          ],
          image: `/explorer-assets/wellness/l10-s1-friendships-are-health.png`,
          imageCaption: `Not wealth. Not fame. Not achievement. The quality of close relationships — over decades — predicts wellbeing better than anything else researchers measured.`,
          vocab: [
            { word: `connection`,  definition: `A genuine sense of closeness and mutual care. Quality matters more than count — a few real friends beats many surface ones.`, audioPrompt: `Connection is more than knowing a lot of people, {name}. It's the feeling of being genuinely known and cared about by someone — and knowing and caring about them in return. Research on human happiness keeps finding the same thing: it's the quality of those real connections that matters most, far more than how many you have.` },
            { word: `wellbeing`,   definition: `Your overall state across body, emotions, and social health. Shaped substantially by the quality of your close relationships.`, audioPrompt: `Wellbeing is how well you're actually doing across all the dimensions of your life, {name} — not just your body, but your mood, your sense of meaning, your feeling of belonging. The research is clear: close, high-quality relationships are one of the most reliable contributions to genuine wellbeing. They're not an extra. They're part of the foundation.` },
            { word: `loneliness`,  definition: `The experience of feeling disconnected. Activates the same brain regions as physical pain — and has measurable effects on health.`, audioPrompt: `Loneliness activates the same brain regions as physical pain, {name} — and that's not metaphor, that's neuroscience. Your body registers social disconnection as a genuine harm, because humans are deeply wired for belonging. Understanding this is why caring for your relationships isn't a soft priority. It's one of the most serious things you can do for your health.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Makes a Good Friend`,
          paragraphs: [
            `Research keeps finding the same qualities.`,
            `RELIABILITY (shows up). HONESTY (tells you the truth, kindly). RECIPROCITY (interested in your life too). SUPPORT (there in hard moments). CONSISTENCY (same person in public as private).`,
          ],
          image: `/explorer-assets/wellness/l10-s2-good-friend-qualities.png`,
          imageCaption: `Five qualities. Each one a piece of why a friendship feels safe. When all five are present, friendship becomes one of life's deepest goods.`,
          vocab: [
            { word: `reliability`, definition: `Following through on what you said you'd do. Showing up when expected. Being someone others can count on.`, audioPrompt: `Reliability builds trust faster than almost anything else, {name}. When you say you'll be somewhere, and you are — when you say you'll keep something private, and you do — people learn they can count on you. That safety is the foundation real friendship is built on. Without it, even fun friendships stay shallow.` },
            { word: `reciprocity`, definition: `Mutual exchange of care and investment. Both people give and receive — not one person always doing the work.`, audioPrompt: `Reciprocity is the balance that keeps a friendship feeling fair, {name}. Both people reach out. Both people listen. Both people show up for the other. When that flow runs only one direction — one person always giving, the other always receiving — the friendship often starts to feel draining rather than energizing. Balance matters.` },
            { word: `consistency`, definition: `Being the same person in public as in private. The behavior that makes a friend feel safe to be around.`, audioPrompt: `Consistency is one of the quiet markers of a real friend, {name}. They're the same person whether you're alone together or with a group. They don't treat you differently to fit in. They don't speak about you differently behind your back than they do to your face. That kind of consistency makes a friendship feel genuinely safe.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Friendships Are Built`,
          paragraphs: [
            `Deep friendship has a recipe, and it's not complicated.`,
            `PROXIMITY (same places regularly). REPETITION (seeing each other often). VULNERABILITY (sharing real things, not just surface). RECIPROCITY (both invest). You can't build it purely online — it needs real time together.`,
          ],
          image: `/explorer-assets/wellness/l10-s3-friendships-built.png`,
          imageCaption: `Real friendships are built in person, over time, through real moments shared. Online connection helps — but it isn't enough on its own.`,
          vocab: [
            { word: `proximity`,     definition: `Being in the same physical space regularly. One of the quiet foundations of friendship — your closest friends are usually who you're around most.`, audioPrompt: `Proximity is one of the quiet secrets of friendship formation, {name}. The people who end up closest to you are often the ones you're simply around most often — in the same class, on the same team, in the same neighborhood. Regular physical presence is one of the foundations. It's why online friendships rarely become as deep as the ones built face-to-face.` },
            { word: `repetition`,    definition: `Seeing each other often, over time. The accumulation of shared moments is what turns acquaintance into friendship.`, audioPrompt: `Repetition is what turns acquaintance into friendship, {name}. You don't become close to someone after one conversation — closeness is built through dozens of small moments, repeated over weeks and months. Seeing each other regularly is what creates the conditions for real connection to grow. It's quietly one of the most important ingredients.` },
            { word: `vulnerability`, definition: `Sharing something real and personal — not just surface topics. The willingness to be seen is what deepens friendship.`, audioPrompt: `Vulnerability is what takes a friendship from pleasant to real, {name}. Sharing something true about yourself — a worry, an embarrassing moment, something you actually care about — invites the other person to do the same. That mutual openness is where genuine closeness comes from. You can't build a deep friendship staying only on the surface.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Most Powerful Habit`,
          paragraphs: [
            `The single biggest friendship-builder is also the simplest.`,
            `Remember what they told you. Ask about it later. "How did your audition go?" "What happened with that test?" Most people feel this kind of attention so rarely it's memorable.`,
          ],
          image: `/explorer-assets/wellness/l10-s4-most-powerful-habit.png`,
          imageCaption: `Remembering and following up — costs nothing, lands harder than almost anything else. Most people never receive this kind of attention.`,
          vocab: [
            { word: `genuine interest`, definition: `Real curiosity about another person's life. Demonstrated by remembering what they told you and asking later.`, audioPrompt: `Genuine interest is the single most powerful friendship signal there is, {name} — and it costs nothing. Remembering something your friend mentioned last week and asking "how did that go?" tells them something simple: I was actually listening. I care about your life. Most people feel that kind of attention so rarely that it's genuinely memorable when they receive it.` },
            { word: `remember`,         definition: `Holding onto what your friend told you so you can bring it up later. A small act that signals something big: you were really listening.`, audioPrompt: `Remembering is more powerful than people realize, {name}. When someone mentions in passing that they have a big test on Tuesday — and then on Wednesday you ask "how did Tuesday go?" — something shifts in the friendship. They feel seen. Heard. Held in mind. That feeling of being remembered is one of the most underrated gifts of any close relationship.` },
            { word: `attention`,        definition: `Noticing what's happening in your friend's life. One of the most underestimated gifts you can offer anyone.`, audioPrompt: `Attention is one of the rarest and most valuable things you can give another person, {name}. Not surface attention — real attention. The kind where you actually listen, actually notice, actually follow up. People can tell instantly when they're receiving it and when they're not. The friends who pay real attention often become the most important people in our lives.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When Friendships Hit Bumps`,
          paragraphs: [
            `Every close friendship hits bumps. That's normal.`,
            `When it happens: address it DIRECTLY and PRIVATELY (not through other people). Use I-statements ("I felt hurt when..."). Give them the benefit of the doubt before assuming bad intent.`,
          ],
          image: `/explorer-assets/wellness/l10-s5-friendship-bumps.png`,
          imageCaption: `Bumps aren't a sign the friendship is broken — they're a sign you care enough to be honest. How you handle them is what matters.`,
          vocab: [
            { word: `I-statement`,          definition: `A way of expressing concern that focuses on how you felt — not on accusing the other person. Opens a door instead of raising defenses.`, audioPrompt: `I-statements change the whole feeling of a hard conversation, {name}. "I felt left out when that happened" is very different from "You never include me." One opens a door. The other raises defenses. When a friendship hits a rough patch, I-statements give the other person something to respond to rather than something to argue against. That small shift can keep a conversation from becoming a fight.` },
            { word: `benefit of the doubt`, definition: `Assuming the best possible explanation before concluding someone meant harm. Keeps a hard conversation from starting in accusation.`, audioPrompt: `Giving someone the benefit of the doubt means your first thought isn't "they meant to hurt me," {name}. Maybe they were having a hard day. Maybe they didn't realize how it landed. Approaching a friendship problem with that openness — rather than certain blame — keeps the conversation from starting in accusation and gives the friendship a real chance to recover.` },
            { word: `directly`,             definition: `Talking to the person yourself, not through other people. Resolves the actual issue and preserves trust.`, audioPrompt: `Going directly to your friend with a problem is almost always the right move, {name}. Talking to other people about it instead adds layers of interpretation and hurt that weren't originally there. It also signals you didn't trust the friendship enough to bring it up directly. Direct, private, kind conversation is how almost all friendship problems actually get resolved.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `When Friendships Change`,
          paragraphs: [
            `Not all friendships are meant to last forever, and that's okay.`,
            `People change. Lives diverge. Sometimes friends grow apart — and that doesn't mean either of you failed. It means the season changed. Honor what it was without forcing it to keep being.`,
          ],
          image: `/explorer-assets/wellness/l10-s6-friendships-change.png`,
          imageCaption: `Some friendships are for a season, not forever. That's not failure. It's how human lives change. Honoring what was matters more than forcing what isn't.`,
          vocab: [
            { word: `season`, definition: `A period of life. Many friendships belong to specific seasons — and may not transfer when the season changes.`, audioPrompt: `Friendships often belong to seasons, {name} — to a particular class, a particular team, a particular phase of your life. When the season ends, some friendships move with you, and some don't. That's not anyone's fault. It's just how human lives unfold. Knowing this helps you appreciate the friendships of each season without needing them all to last forever.` },
            { word: `honor`,  definition: `Appreciate what something was, even as it changes. The right response to a friendship that's quietly fading without anyone failing.`, audioPrompt: `To honor a friendship that's ending is different from clinging to it, {name}. It means recognizing what it gave you. Being grateful for the time it lasted. Wishing the other person well. Then letting it become what it's becoming. That kind of honoring — without bitterness, without forcing — is part of how mature people hold the friendships in their lives.` },
            { word: `evolve`, definition: `Change over time. What friendships and people both do — and what makes some friendships transform rather than end.`, audioPrompt: `Friendships evolve, {name} — they don't stay frozen. Sometimes they evolve into something deeper. Sometimes they evolve into something more distant but still warm. Sometimes they evolve into a chapter that closes peacefully. Letting them evolve, rather than expecting them to stay exactly as they were, is part of staying present to who both people are becoming.` },
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
    fetch('/explorer-assets/wellness/l10-s1-friendships-are-health.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-s2-good-friend-qualities.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-s3-friendships-built.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-s4-most-powerful-habit.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-s5-friendship-bumps.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l10-s6-friendships-change.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L10] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L10] One or more magazine assets missing'));
}
