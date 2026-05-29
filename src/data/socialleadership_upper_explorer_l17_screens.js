// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L17 — Diversity as Strength
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real research on cognitive diversity, perspective-taking,
//            and how mixed groups outperform homogeneous ones. Scott Page,
//            Adam Grant. Empathy across difference.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (real openness / surface tolerance / dismissal)
//            Trick case = "I'm not biased, I treat everyone exactly the same"
//            without curiosity about actual difference.
// SCOPE: difference is a strength, not a threat; real openness vs surface
//        tolerance; how to be genuinely curious about others; honest about
//        when we get it wrong
// VOICE: Valor = humble, curious, encouraging real openness without preachy
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-17`,
      title: `Diversity as Strength`,
      duration: 18,
      xpReward: 75,
      badge: `open-explorer`,
      badgeName: `Open Explorer`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we explore something both deeply true and often misunderstood: DIVERSITY is genuinely a STRENGTH. Not because someone tells you it should be, but because of how human groups actually work. When people with different backgrounds, perspectives, and experiences come together with real curiosity, they make better decisions, solve harder problems, and create things none could alone. Today, you learn what REAL openness to difference looks like (it's more than just being polite), how to grow it in yourself, and the honest courage to admit when you've gotten it wrong. Take a curious breath, and let's begin.`,
          headline: `Diversity as Strength`,
          subtitle: `Why difference is a gift — and what real openness looks like`,
          visual: `/ue-assets/sl/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Different Perspectives Make Groups Stronger`,
          paragraphs: [
            `Here's something fascinating from research: groups with people from different backgrounds, experiences, and perspectives consistently make BETTER decisions and solve harder problems than groups where everyone thinks alike. This isn't political, it's mathematical. Researcher Scott PAGE wrote a whole book on this called "The Diversity Bonus." When everyone in a room has had the same experiences and thinks similar ways, they miss the same things. They have the same blind spots. They reach the same wrong conclusions confidently. Adding even ONE person with a genuinely different perspective can transform what a group sees.`,
            `This applies everywhere. Sports teams with diverse skill sets win more. Companies with diverse teams innovate more. Friend groups with diverse backgrounds learn more. Families with diverse personalities (extrovert + introvert + thoughtful + decisive) tend to balance each other. Diversity isn't just about being NICE to people who are different from you, though that matters. It's about recognizing that DIFFERENCE IS A REAL GIFT, scientifically, practically, and creatively. The kid (and eventually adult) who genuinely values and seeks out different perspectives ends up smarter, kinder, and more effective than the one who only surrounds themselves with people just like them.`,
          ],
          image: `/ue-assets/sl/l17-s1-stronger.webp`,
          imageCaption: `Diverse groups outperform homogeneous ones. Difference is a real gift, mathematically and creatively.`,
          vocab: [
            {
              word: `cognitive diversity`,
              definition: `Differences in how people think, what they've experienced, and what perspectives they bring. Research shows groups with cognitive diversity solve harder problems and make better decisions than groups where everyone thinks alike. Difference is a real gift.`,
              audioPrompt: `Cognitive diversity is differences in how people think, what they've experienced, and what perspectives they bring, {name}. Researcher Scott Page found that groups with cognitive diversity consistently make better decisions and solve harder problems than groups where everyone thinks alike. When everyone in a room has had the same experiences, they miss the same things. They have the same blind spots. Adding even ONE person with a genuinely different perspective can transform what a group sees. Difference isn't just nice. It's a real gift.`,
            },
            {
              word: `diversity bonus`,
              definition: `Scott Page's term for the measurable advantage diverse groups have over homogeneous ones. When different backgrounds and ways of thinking combine, the group sees more, misses less, and solves harder problems. Real and measurable, not just nice-sounding.`,
              audioPrompt: `The diversity bonus is Scott Page's term for the measurable advantage diverse groups have over homogeneous ones, {name}. When people with different backgrounds, experiences, and ways of thinking combine, the group can see more, miss less, and solve harder problems. It's called a bonus because it's real and measurable, not just nice-sounding. Teams, companies, and schools with genuine cognitive diversity consistently outperform those where everyone thinks alike. The bonus isn't in the politeness. It's in the actual improved thinking that comes when different minds combine.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real Openness vs. Surface Tolerance`,
          paragraphs: [
            `There's a big difference between being POLITELY tolerant of people who are different, and being GENUINELY open to learning from them. Surface tolerance says "everyone's fine, I treat everyone the same, I don't even notice differences." It sounds nice but it actually misses the point. Pretending difference doesn't exist erases the actual richness people bring. Real openness, by contrast, NOTICES differences with curiosity, asks honest questions, learns from them, and treats other perspectives as something worth understanding rather than just tolerating.`,
            `Think about a kid whose family has different traditions, beliefs, or background from yours. Surface tolerance is being polite without ever asking about it. Real openness is curiosity: "What's that holiday actually about?" "How is that different from how my family does it?" "Tell me more." Surface tolerance is comfortable but shallow. Real openness can feel awkward sometimes, you might ask something clunky, you might say something wrong, but it leads to actual connection. The kid (and adult) who can sit with the awkwardness of being a learner about others becomes the one who really knows and is known by people from many backgrounds. That's the real practice.`,
          ],
          image: `/ue-assets/sl/l17-s2-real-vs-surface.webp`,
          imageCaption: `Real openness notices difference with curiosity. Surface tolerance pretends difference doesn't matter.`,
          vocab: [
            {
              word: `real openness`,
              definition: `Genuinely noticing, asking about, and learning from differences in others' perspectives, backgrounds, and experiences. Different from surface tolerance, which pretends difference doesn't exist. Real openness can feel awkward sometimes, but leads to actual connection.`,
              audioPrompt: `Real openness is genuinely noticing, asking about, and learning from differences in others' perspectives, backgrounds, and experiences, {name}. Different from surface tolerance, which says everyone's the same, I don't even notice. Surface tolerance sounds nice but it actually erases the richness people bring. Real openness notices with curiosity, asks honest questions, treats other perspectives as something worth understanding. It can feel awkward sometimes. You might ask something clunky. You might say something wrong. But it leads to real connection.`,
            },
            {
              word: `surface tolerance`,
              definition: `The approach that says "I treat everyone the same, I don't even notice differences." Sounds polite but actually erases the richness people bring and keeps others at a distance. Comfortable, but too shallow to lead to actual connection across difference.`,
              audioPrompt: `Surface tolerance is the approach that says I treat everyone the same, I don't even notice differences, {name}. It sounds nice and polite. But it actually erases the richness the other person brings. Real openness would have meant getting curious. Surface tolerance is comfortable but shallow. It doesn't lead to actual connection because it never actually engages with who the other person is. The fix: ask one genuine question about what makes the other person's background or experience different. That's where real connection across difference begins.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Grow Real Openness`,
          paragraphs: [
            `Here are real practices for growing genuine openness. First, GET CURIOUS about people whose experiences are different from yours. Different cultures, different family situations, different abilities, different beliefs, different ways of thinking. Curiosity isn't intrusive when it's respectful. Ask questions with genuine interest, not as a test. "Tell me about that, I don't know much about it." Most people are happy to share when asked with real interest. Second, READ AND CONSUME STORIES from people different from you. Books, movies, podcasts, articles. Stories from perspectives different from your own grow your empathy and understanding faster than almost anything else.`,
            `Third, ASSUME there's something you DON'T understand. The opposite of openness is thinking you already get everyone. Real openness includes the humility to say "I don't know what that's like" instead of "I totally understand." That admission is more honest, more respectful, and opens better conversations. Fourth, NOTICE YOUR OWN AUTOMATIC THOUGHTS. We all have biases, ideas about people we've absorbed from our families, media, and surroundings. Noticing them when they arise isn't shameful, it's the start of growth. The kid who can say "I just had a thought that wasn't fair to that person" is way ahead of most adults. Fifth, BE WILLING TO BE WRONG. You'll get things wrong sometimes when learning across difference, ask something off, assume something incorrect. Apologize honestly (L13!), learn, and try again. Defensiveness shuts learning down. Humility opens it up.`,
          ],
          image: `/ue-assets/sl/l17-s3-grow.webp`,
          imageCaption: `Curiosity, diverse stories, humility, noticing thoughts, willingness to be wrong. The real practice.`,
          vocab: [
            {
              word: `humility across difference`,
              definition: `The willingness to say "I don't know what that's like" instead of "I totally understand," and to be wrong sometimes while learning. More honest and respectful than pretending understanding you don't have. The doorway into real connection.`,
              audioPrompt: `Humility across difference is the willingness to say I don't know what that's like instead of I totally understand, {name}. And to be wrong sometimes while learning. More honest and respectful than pretending to understanding you don't have. You'll get things wrong sometimes when learning across difference. Ask something off. Assume something incorrect. Apologize honestly, learn, try again. Defensiveness shuts learning down. Humility opens it up. The kid who can sit with the awkwardness of being a learner about others becomes the one who really knows people.`,
            },
            {
              word: `perspective-taking`,
              definition: `The practice of actively imagining what it's like to be in someone else's situation, with their background and experiences. A deliberate act of curiosity. Adam Grant found perspective-taking makes people more creative, collaborative, and better at navigating conflict.`,
              audioPrompt: `Perspective-taking is the practice of actively imagining what it's like to be in someone else's situation, with their background and experiences, {name}. Different from just being polite. It's a deliberate act of curiosity. What has their life been like? What do they notice that I wouldn't? What would this feel like from where they stand? Adam Grant found that perspective-taking makes people more creative, more collaborative, and better at navigating conflict. It grows with practice. The more you do it, the more human everyone around you becomes.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Diversity in Your Own Family and Friend Group`,
          paragraphs: [
            `Diversity doesn't only mean obvious differences like culture, race, or background. It includes the smaller diversities right in your own life. Within your family, there might be extroverts and introverts, planners and improvisers, thinkers and feelers, early birds and night owls. Each brings something the others don't. Within your friend group, you probably have the funny one, the steady one, the bold one, the creative one. Notice the different gifts. Notice how each person makes the group fuller. A family or friend group where everyone was the same would actually be much weaker, even if it felt more comfortable.`,
            `So here's the practice: VALUE the differences in the people around you. Don't try to make your introvert sibling more extroverted, or your impulsive friend more cautious, or your thoughtful classmate more spontaneous. Each person brings what they bring. Real leadership creates space for everyone to contribute their actual gifts. Real friendship celebrates what makes each friend uniquely themselves. Valor's teaching: difference isn't a problem to manage, it's a strength to embrace. The kid who genuinely values different perspectives, in their family, friend group, school, and eventually in the wider world, becomes someone bridges form around. Be that kid. Be curious. Be humble. Be willing to be wrong and learn. The richness of human difference is one of life's greatest gifts. Receive it gratefully.`,
          ],
          image: `/ue-assets/sl/l17-s4-own-life.webp`,
          imageCaption: `Diversity isn't just about big differences. Notice the gifts of the different people in your own life.`,
          vocab: [
            {
              word: `valuing difference`,
              definition: `The active practice of appreciating what each different person brings, in your family, friend group, team, school, and wider world. Different from trying to change them. Real leadership creates space for everyone to contribute their actual gifts.`,
              audioPrompt: `Valuing difference is the active practice of appreciating what each different person brings, {name}. In your family, friend group, team, school, and the wider world. Different from trying to change them. Don't try to make your introvert sibling more extroverted, or your impulsive friend more cautious. Each person brings what they bring. Real leadership creates space for everyone to contribute their actual gifts. Real friendship celebrates what makes each friend uniquely themselves. Difference isn't a problem to manage. It's a strength to embrace.`,
            },
            {
              word: `blind spot`,
              definition: `An area where your own background limits what you can see or notice. Groups with similar experiences share the same blind spots — they confidently miss the same things. Different perspectives help spot what everyone was missing.`,
              audioPrompt: `A blind spot is an area where your own background limits what you can see or notice, {name}. We all have them. When a group of people with similar experiences all have the same blind spots, they confidently miss the same things and reach the same wrong conclusions. This is why cognitive diversity matters: different people have different blind spots. What one person misses, another catches. The group that includes genuinely different perspectives is harder to fool, harder to derail, and stronger at finding what's actually true.`,
            },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four ways kids might respond to people whose backgrounds or perspectives are different from theirs. Classify each: REAL OPENNESS (curious, asks, learns), SURFACE TOLERANCE (polite but never engages with the actual difference), or DISMISSAL (closed off, judgmental, or hostile)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `real`,    label: `Real Openness`,     color: `#34D399`, description: `Curious, asks respectful questions, learns from difference, humble when wrong.` },
            { id: `surface`, label: `Surface Tolerance`, color: `#94A3B8`, description: `Polite but never engages — "I don't even notice differences" — looks nice but stays shallow.` },
            { id: `dismiss`, label: `Dismissal`,          color: `#F87171`, description: `Closed off, judgmental, hostile, or mocking toward people who are different.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Response #1`,
              clues: [
                { text: `A kid has a new classmate from a country they know little about.` },
                { text: `They ask the classmate, with genuine interest, "What was school like back home? Was it different from here?"` },
                { text: `When the classmate shares, they listen carefully and ask follow-up questions. They admit when they don't know things.` },
              ],
              correctAnswer: `real`,
              realWorldExample: `Curious questions + genuine listening + admitted not-knowing = real openness.`,
              explanation: `Pure real openness. The kid is curious, asks respectful questions, listens carefully, and admits what they don't know. They treat the difference as something worth understanding rather than something to ignore or judge. This is how real connection across difference is built. Almost no one does this well at any age, and it's a beautiful skill at 9-10.`,
            },
            {
              id: `case-2`,
              caseTitle: `Response #2`,
              clues: [
                { text: `A kid mocks a classmate's accent and copies it to make others laugh.` },
                { text: `They say things like "why do you even talk like that?" and roll their eyes when the classmate speaks up.` },
                { text: `Other kids start to do the same.` },
              ],
              correctAnswer: `dismiss`,
              realWorldExample: `Mocking, judging, rejecting are pure dismissal.`,
              explanation: `Pure dismissal. The kid is mocking, rejecting, and treating difference as something to attack. This isn't just unkind, it actively harms the classmate and shrinks the whole group's openness. Dismissal damages everyone in the room, the target most, but the whole environment too.`,
            },
            {
              id: `case-3`,
              caseTitle: `Response #3`,
              clues: [
                { text: `A kid says, "I treat everyone exactly the same. I don't even SEE differences. We're all just kids."` },
                { text: `They never ask the new classmate about their background.` },
                { text: `They never engage with the difference, just pretend it isn't there.` },
              ],
              correctAnswer: `surface`,
              realWorldExample: `"I don't notice differences" sounds nice but erases the actual person.`,
              explanation: `Pure surface tolerance. The kid is polite, not hostile, which sounds good. But by refusing to NOTICE the differences, they erase the richness their classmate brings. Real openness would have meant getting curious. "I treat everyone the same" sounds nice but it can also mean "I'm not interested in what makes you, you." Surface tolerance is more comfortable than real openness, but doesn't lead to actual connection.`,
            },
            {
              id: `case-4`,
              caseTitle: `Response #4 — The Tricky One`,
              clues: [
                { text: `A kid is really friendly to the new classmate. Smiles, says hi.` },
                { text: `But they treat all conversations as if the classmate is exactly like the kids they already know.` },
                { text: `They don't ask any questions about the classmate's background, and they get a little uncomfortable when the classmate mentions something culturally different.` },
              ],
              correctAnswer: `surface`,
              realWorldExample: `Friendly but never curious = surface tolerance, not real openness.`,
              explanation: `Tricky, {name}! The kid is friendly. They're not mocking or dismissing. So you might call this real openness. But look closely. They never ask, never get curious, and get uncomfortable when difference comes up. Pure surface tolerance in disguise (the friendly version). Lesson: friendly isn't the same as open. You can be polite and well-intentioned and STILL keep difference at a distance. Real openness involves real curiosity, even when it's a little uncomfortable. The fix: ask one genuine question about the classmate's background. Listen with care. That's where real friendship across difference begins.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `Why is DIVERSITY a STRENGTH for groups (not just nice)?`,
              options: [
                `It's not, it's just politically correct`,
                `Research shows diverse groups make BETTER decisions and solve harder problems. Adding ONE different perspective can transform what a group sees`,
                `Diverse groups always struggle`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Research by Scott Page and many others shows diverse groups consistently make better decisions and solve harder problems than groups where everyone thinks alike. When everyone shares experiences, they share blind spots. Adding even one genuinely different perspective transforms what a group can see.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `What's the difference between REAL OPENNESS and SURFACE TOLERANCE?`,
              options: [
                `They're the same`,
                `Real openness NOTICES differences with curiosity. Surface tolerance pretends difference doesn't exist ("I treat everyone the same"). Sounds nice but misses the actual person`,
                `Surface tolerance is better`,
                `Neither is helpful`,
              ],
              correctIndex: 1,
              explanation: `Real openness notices differences with curiosity, asks questions, learns. Surface tolerance pretends difference doesn't exist ("I don't even notice"), which sounds nice but erases the richness people bring. Real openness leads to connection; surface tolerance keeps people at a distance.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `What's a REAL way to grow openness?`,
              options: [
                `Stay only with people exactly like you`,
                `GET CURIOUS, ask respectful questions, read stories from different perspectives, admit what you don't know, be willing to be wrong and learn`,
                `Avoid all difference`,
                `Pretend everyone is the same`,
              ],
              correctIndex: 1,
              explanation: `Real openness grows through: curiosity, asking respectful questions, consuming stories from different perspectives, admitting what you don't know ("I'm not sure what that's like"), and being willing to be wrong while learning. Humility opens; defensiveness shuts down learning.` },

            { id: `l17-q4`, format: `true-false`,
              question: `True or false: It's perfectly fine to say "I don't know what that's like" instead of "I totally understand."`,
              correctAnswer: true,
              explanation: `True. "I don't know what that's like" is more honest, more respectful, and opens better conversations than pretending understanding you don't have. Humility across difference is the doorway into real connection. The kid who can say "I don't know" is way ahead of most adults.` },

            { id: `l17-q5`, format: `multiple-choice`,
              question: `What about our AUTOMATIC THOUGHTS about people?`,
              options: [
                `We don't have any`,
                `We ALL have biases absorbed from family, media, surroundings. Noticing them when they arise isn't shameful. It's the START of growth`,
                `Only bad people have biases`,
                `Biases are permanent`,
              ],
              correctIndex: 1,
              explanation: `We all have biases (ideas about people absorbed from family, media, surroundings). Noticing them when they arise isn't shameful, it's the start of growth. The kid who can say "I just had a thought that wasn't fair to that person" is way ahead of most adults.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `What about DIVERSITY in your own family or friend group?`,
              options: [
                `Everyone should be the same`,
                `Notice the different gifts each person brings (extrovert + introvert + thinker + feeler). A group where everyone was the same would be weaker, even if more comfortable`,
                `Friend groups should all match`,
                `Diversity doesn't apply to small groups`,
              ],
              correctIndex: 1,
              explanation: `Diversity exists in your own family and friend group. Extroverts + introverts, planners + improvisers, thinkers + feelers. Each brings what the others don't. A group where everyone was exactly the same would actually be weaker, even if it felt more comfortable. Notice and value the different gifts.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `What does VALUING DIFFERENCE look like?`,
              options: [
                `Try to change everyone`,
                `Appreciate what each person brings without trying to change them. Make space for everyone's actual gifts`,
                `Pretend everyone is the same`,
                `Avoid difficult people`,
              ],
              correctIndex: 1,
              explanation: `Valuing difference means appreciating what each person brings WITHOUT trying to change them. Don't try to make your introvert sibling more extroverted or your impulsive friend more cautious. Real leadership creates space for everyone to contribute their actual gifts.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `What's Valor's truth about difference?`,
              options: [
                `Difference is a problem to manage`,
                `Difference isn't a problem to manage. It's a STRENGTH to embrace. The kid who genuinely values different perspectives becomes someone bridges form around`,
                `Avoid different people`,
                `Diversity is too hard`,
              ],
              correctIndex: 1,
              explanation: `Difference isn't a problem to manage, it's a strength to embrace. The kid who genuinely values different perspectives, in their family, friend group, school, and wider world, becomes someone bridges form around. Be curious. Be humble. Be willing to be wrong and learn.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest with yourself, do you tend toward real openness, surface tolerance, or sometimes dismissal? Notice gently.` },
            { id: `r2`, text: `Think of someone in your life whose background or perspective is different from yours. What's something you'd be curious to ask them (with respect)?` },
            { id: `r3`, text: `Within your own family or friend group, what different gifts does each person bring? Name one for each person you can think of.` },
            { id: `r4`, text: `Have you noticed an automatic thought lately about someone different from you that wasn't quite fair? No shame, just noticing. Where might that have come from?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Research on diversity and group performance is some of the most robust in social science. Diverse teams outperform homogeneous ones at problem-solving, creativity, decision-making, and innovation. This applies in schools, workplaces, families, and communities. The kid who genuinely values and seeks out different perspectives becomes more capable in every part of life. Valor's note: real openness isn't about being politically perfect or knowing the right phrases. It's about CURIOSITY. About treating other people's experiences as worth learning from. About sitting with awkwardness while you learn. About admitting when you don't know, and being willing to be wrong. The kid who lives this way becomes someone people from many backgrounds trust and want to be around. They become a quiet bridge in a world that often divides. That's powerful leadership, in any room.`,
          familyAdventure: `Family Difference Appreciation. As a family, take turns sharing: what's ONE thing each family member brings that's different from the others (a perspective, a skill, a way of seeing things)? Then talk about how those differences actually make the family stronger, even when they sometimes cause friction. Adults model openness too. Talk about a time you learned something from someone whose background was different from yours. You're growing a family culture that celebrates difference as the gift it is, instead of treating it as something to manage.`,
          creativePrompt: {
            intro: `Write about a time you learned something from someone whose background or perspective was different from yours — and what changed in you.`,
            floor: `Write at least 5 sentences. Describe the person, what you learned, and what shifted.`,
            stretch: `Write 8 to 10 sentences. Show the curiosity, the learning, and the connection that grew.`,
            open: `Write as much as you want. Write a full piece about a real or imagined moment of learning across difference. Describe the person whose background, perspective, or experience was different from yours (a classmate, a neighbor, a friend's family, someone from a book). Show your real openness in action: getting curious, asking respectful questions, listening with care, admitting what you didn't know, being willing to be wrong. Show what you learned that you wouldn't have known otherwise, and how it changed your understanding of them, of yourself, of the world. End with reflection on the kind of bridge-builder you want to be in your own life. Make it specific and warm.`,
            frames: [
              `The person whose background or perspective was different from mine was ___.`,
              `What I was curious about was ___.`,
              `When I asked, I learned ___.`,
              `What shifted in me was ___.`,
              `The kind of bridge-builder I want to be is ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand that diversity is a real strength, both scientifically (diverse groups make better decisions) and humanly (different gifts make groups richer). You know the difference between real openness and surface tolerance, and the practices that grow real openness. Be curious. Be humble. Be willing to be wrong and learn. Become a bridge in a world that often divides. Next, we look back at who you've been becoming through this whole subject. THE LEADER YOU'RE BECOMING. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `open-explorer`,
          badgeName: `Open Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
