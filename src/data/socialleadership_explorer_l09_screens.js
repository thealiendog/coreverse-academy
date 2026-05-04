// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L09 — Community Service: Giving Back
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L09 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-09`,
      title:     `Community Service: Giving Back`,
      duration:  12,
      xpReward:  50,
      badge:     `community-builder`,
      badgeName: `Community Builder`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Here's a question for you, {name}: what is a community? It's not just the people who live near you. It's the network of relationships, shared spaces, and mutual care that holds a group of people together. And one of the things that makes communities strong — or lets them weaken — is how many people choose to give something back to them. Today we're talking about community service: not because it looks good on a list, but because the act of giving your time and skill to help others does something real to your own character. Something no classroom can replicate. Let's explore it.`,
          headline: `Community Service: Giving Back`,
          subtitle: `Giving your time and talents to help others builds the kind of character no classroom can teach`,
          visual: `/explorer-assets/leadership/l09-welcome.png`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What is community service?`,
          paragraphs: [
            `Nelson Mandela said: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others." **Community service** is voluntary work done for the benefit of others — your neighbourhood, school, town, or the wider world. It can be as simple as picking up litter in a park, as organised as helping out at a local food bank, or as ambitious as starting a project to solve a real community problem. What makes it community service is the **intention**: you're doing it because it needs doing and you have something to contribute — not for a grade, a reward, or recognition.`,
          ],
          image: `/explorer-assets/leadership/l09-magazine-1.png`,
          imageCaption: `Service means giving because it's needed, not because there's a reward`,
          vocab: [
            { word: `volunteer`, definition: `To give your time and effort freely, without being required to or expecting payment — the foundation of community service.`, audioPrompt: `Volunteering means you showed up because you chose to, {name}. Not for a grade, not for recognition — because something needed doing and you had something to give. That choice, made freely, is what gives service its meaning. And it's available to anyone at any age.` },
            { word: `community`, definition: `The network of people, relationships, and shared spaces that holds a group together — stronger when more people choose to give back to it.`, audioPrompt: `A community isn't just the people who live near you, {name}. It's the invisible web of relationships and shared care that holds people together. Every act of service strengthens that web. And every person who chooses to give something back makes the whole thing more resilient.` },
            { word: `intention`, definition: `The reason behind an action — what makes something genuine service rather than something done for a reward or recognition.`, audioPrompt: `Intention is the difference between service and performance, {name}. When you give because something needs doing and you can help — that's service. When you give to be seen giving — that's something else. The impact might look the same from outside. But the character you build depends entirely on which one it actually is.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why service makes you stronger`,
          paragraphs: [
            `Research consistently shows that people who regularly volunteer are happier, healthier, and report more meaning in their lives. Service builds **empathy** by connecting you with people whose lives are different from yours. It builds **perspective** by showing you problems bigger than your own. It builds real **leadership skills** — communication, teamwork, problem-solving — in situations that actually matter. And it builds **identity**: when you act as someone who helps, you gradually become someone who helps. That shift in how you see yourself is one of the most powerful effects of service.`,
          ],
          image: `/explorer-assets/leadership/l09-magazine-2.png`,
          imageCaption: `When you act as someone who helps, you become someone who helps`,
          vocab: [
            { word: `empathy`, definition: `The ability to genuinely understand another person's experience — built powerfully through service that brings you into contact with lives different from your own.`, audioPrompt: `Service builds empathy in a way that classroom lessons about kindness never quite can, {name}. When you actually spend time with people whose lives are different from yours, something shifts. You stop imagining their experience from a distance — and you start to feel what it's actually like. That's the empathy that lasts.` },
            { word: `perspective`, definition: `A broader view of the world — gained through service that exposes you to problems and experiences larger than your own daily life.`, audioPrompt: `Service gives you perspective that's hard to get any other way, {name}. When you spend time helping someone who's struggling, the problems in your own day look different. Not smaller — but in better proportion. That shift in how you see the world is one of the lasting gifts service gives you.` },
            { word: `identity`, definition: `How you see yourself — shaped by your actions over time, including the habit of showing up to help others.`, audioPrompt: `Valor believes: when you act like someone who helps, you become someone who helps, {name}. That's not a cliché — it's how identity actually works. The more times you choose to give your time and skill to others, the more that becomes who you are. Service doesn't just help the community. It builds you.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Finding your service`,
          paragraphs: [
            `The most lasting service comes from matching what you're good at — or what you care about — to a real need. Ask yourself: What breaks my heart? What problems do I notice that others seem to walk past? What can I do that could genuinely help? If you love animals, a local shelter needs volunteers. If you're patient and good at explaining things, younger students would love a reading or maths buddy. If you're practical with technology, elderly neighbours might welcome help with their devices. If you're creative, a community space might love a mural. The most powerful service connects **your strengths** to **a real need**.`,
          ],
          image: `/explorer-assets/leadership/l09-magazine-3.png`,
          imageCaption: `The best service matches what you can do with what the world needs`,
          vocab: [
            { word: `strength`, definition: `A natural ability or developed skill — the starting point for finding the service that only you can offer.`, audioPrompt: `Your strengths are your most powerful tools for service, {name}. Not what someone told you to do — but what you're genuinely good at. Patient and clear? Younger kids need a reading buddy. Creative? A community space might love a mural. The most effective service starts with asking: what can I bring that's actually needed?` },
            { word: `passion`, definition: `A deep genuine care about something — what sustains service through the moments when it's less convenient or harder than expected.`, audioPrompt: `Passion is what keeps you going when service gets hard, {name}. Anyone can show up once. What sustains it is caring — really caring — about the problem you're trying to help with. When you find service that matches both your skill and your passion, it stops feeling like something you're doing and starts feeling like who you are.` },
            { word: `sustainable`, definition: `Service that can continue over time without burning you out — possible when it matches your genuine strengths and what truly matters to you.`, audioPrompt: `Sustainable service is service you can keep doing, {name} — not something that drains you until you stop. That kind of lasting commitment comes from matching what you're good at to what actually matters to you. Service built on your genuine strengths and real care is the kind that creates real, lasting change.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Service vs charity`,
          paragraphs: [
            `There's an important difference between charity and service. **Charity** addresses an immediate need — giving someone food when they're hungry right now. **Service** addresses root causes — teaching someone to grow food, or helping change the systems that make food insecurity happen in the first place. Both are valuable, and immediate help genuinely matters. But service that builds people's capacity and addresses what causes a problem creates more lasting change. The best leaders gradually move from "doing *for*" people to "doing *with*" people — building their ability to solve their own problems, not creating dependence.`,
          ],
          image: `/explorer-assets/leadership/l09-magazine-4.png`,
          imageCaption: `Charity helps right now. Service builds something that lasts.`,
          vocab: [
            { word: `charity`, definition: `Giving something to address an immediate need — valuable and necessary, but different from service that addresses root causes.`, audioPrompt: `Charity matters, {name} — when someone is hungry right now, what matters is food right now. But charity alone doesn't change the conditions that made someone hungry in the first place. Both are needed. And understanding the difference helps you figure out what kind of impact you actually want to have.` },
            { word: `root cause`, definition: `The underlying reason a problem exists — what effective service works to address, rather than just the visible symptoms.`, audioPrompt: `A root cause is the "why" underneath the problem, {name}. Why is the park full of litter? Why are some kids falling behind in reading? When service addresses root causes — not just symptoms — it creates change that lasts. That's the difference between helping someone once and building something that keeps helping.` },
            { word: `capacity`, definition: `The ability to handle challenges and meet needs independently — what the best service works to build in others, rather than creating dependence.`, audioPrompt: `The highest form of service isn't doing things for people, {name} — it's building their capacity to do it themselves. Teaching a skill. Connecting someone to a resource. Helping someone find their own voice. Moving from "doing for" to "doing with" is the shift that turns good intentions into lasting impact.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `service`,
              label: `🌱 Community Service`,
              color: `#34D399`,
            },
            {
              id: `not-service`,
              label: `📋 Not Community Service`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l09-g1`,
              image: `l09-game-1.png`,
              label: `Spending a Saturday morning picking up litter in the local park with no reward.`,
              matchPhrase: `Voluntary, for the benefit of others, with no reward — that's community service.`,
              correctMatch: `service`,
            },
            {
              id: `l09-g2`,
              image: `l09-game-2.png`,
              label: `Helping a younger neighbour learn to read just because you can.`,
              matchPhrase: `Giving your time and skill to help someone else grow — that's the spirit of service.`,
              correctMatch: `service`,
            },
            {
              id: `l09-g3`,
              image: `l09-game-3.png`,
              label: `Doing extra homework practice to improve your own grade.`,
              matchPhrase: `Working on yourself is great — but the benefit here is yours, not the community's.`,
              correctMatch: `not-service`,
            },
            {
              id: `l09-g4`,
              image: `l09-game-4.png`,
              label: `Helping clean up at home because your parents asked you to do your chores.`,
              matchPhrase: `Doing your chores is responsible — but community service means giving voluntarily beyond your usual duties.`,
              correctMatch: `not-service`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l09-q1`,
              format: `multiple-choice`,
              question: `What makes an activity "community service"?`,
              options: [
                `Any work done in a community setting`,
                `Voluntary work done to benefit others without expecting payment or reward`,
                `Work assigned by a school or organisation`,
                `Activities that improve your own neighbourhood only`,
              ],
              correctIndex: 1,
              explanation: `The key is that it's voluntary and the benefit goes to others. If it's required or primarily for your own gain, it's something else — even if it's helpful.`,
            },
            {
              id: `l09-q2`,
              format: `multiple-choice`,
              question: `What are three things that regular service builds in a person?`,
              options: [
                `Money, fame, and connections`,
                `Empathy, perspective, and real-world leadership skills`,
                `Academic grades, awards, and college applications`,
                `Physical strength, speed, and endurance`,
              ],
              correctIndex: 1,
              explanation: `Service builds empathy (connecting with people whose lives differ from yours), perspective (seeing problems bigger than your own), and real leadership skills — communication, teamwork, and problem-solving — in situations that genuinely matter.`,
            },
            {
              id: `l09-q3`,
              format: `multiple-choice`,
              question: `What is the difference between charity and service?`,
              options: [
                `Charity is more expensive than service`,
                `Charity addresses immediate symptoms; service addresses root causes and builds lasting capacity`,
                `Service is required; charity is optional`,
                `Charity is for individuals; service is for communities`,
              ],
              correctIndex: 1,
              explanation: `Charity helps right now — and that immediate help matters. Service goes further by addressing the underlying causes and building people's capacity to solve their own problems.`,
            },
            {
              id: `l09-q4`,
              format: `true-false`,
              question: `Community service only counts if it is organised by a school or an official group.`,
              correctAnswer: false,
              explanation: `False. You can do community service on your own — helping a neighbour, picking up litter, tutoring a younger child. What makes it service is the voluntary intention to benefit others, not who organises it.`,
            },
            {
              id: `l09-q5`,
              format: `fill-blank`,
              question: `The most lasting community service comes from matching your own ___ to a real need in the world around you.`,
              options: [
                `talents`,
                `schedule`,
                `grades`,
                `awards`,
              ],
              correctIndex: 0,
              explanation: `When service connects what you're genuinely good at to a real need, it's more effective and more sustainable. Your unique strengths are what you have to offer.`,
            },
            {
              id: `l09-q6`,
              format: `multiple-choice`,
              question: `Which of these is an example of addressing a root cause rather than just an immediate symptom?`,
              options: [
                `Handing out food at a one-off event`,
                `Donating old clothes once a year`,
                `Teaching someone a skill they can use to help themselves long-term`,
                `Making a donation to feel better about a problem`,
              ],
              correctIndex: 2,
              explanation: `Teaching a skill builds someone's capacity to help themselves — that's addressing a root cause. The other options address an immediate need but don't change the underlying situation.`,
            },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Every community — schools, hospitals, neighbourhoods, sports clubs — runs partly on the voluntary effort of people who give their time because it matters. Service is one of the most direct ways to build the world you want to live in.`,
          familyAdventure: `Do a family service project together — not something performative, but something that genuinely helps. Research a local organisation that needs volunteers, spend a couple of hours giving your time, and talk afterward: what did you notice about the people you helped? How did it feel? Will you go back?`,
          creativePrompt: `Look around your neighbourhood or school with fresh eyes this week. What's broken, missing, or overlooked? Pick one need your skills could address — even in a small way — and make a plan to do something about it.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that service isn't about grand gestures — it's about showing up for others with the gifts you already have. Giving your time and energy to people who need it builds the kind of character that no classroom can teach. Valor is so proud to share this with you.`,
          badge: `community-builder`,
          badgeName: `Community Builder`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L09.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L09] Loaded: "Community Service: Giving Back" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l09-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L09] One or more magazine assets missing'));
}
