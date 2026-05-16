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
          headline: `What Service Is`,
          paragraphs: [
            `Community service is voluntary work done to benefit OTHERS.`,
            `A neighborhood, a school, a town, the wider world. The intention is what matters: you're doing it because it needs doing — not for a grade, reward, or recognition.`,
          ],
          image: `/explorer-assets/leadership/l09-s1-what-service-is.png`,
          imageCaption: `Service is what you choose to give — for others, without expecting anything back. That choice is what makes it count.`,
          vocab: [
            { word: `volunteer`,  definition: `To give your time and effort freely, without being required to or expecting payment. The foundation of all service.`,
              audioPrompt: `Volunteering means you showed up because you chose to, {name}. Not for a grade, not for recognition — because something needed doing and you had something to give. That choice, made freely, is what gives service its meaning. And it's available to anyone at any age.` },
            { word: `community`,  definition: `The network of people, relationships, and shared spaces that holds a group together. Stronger when more people give back.`,
              audioPrompt: `A community isn't just the people who live near you, {name}. It's the invisible web of relationships and shared care that holds people together. Every act of service strengthens that web. And every person who chooses to give something back makes the whole thing more resilient.` },
            { word: `intention`,  definition: `The reason behind an action. What makes something genuine service rather than something done for show.`,
              audioPrompt: `Intention is the difference between service and performance, {name}. When you give because something needs doing and you can help — that's service. When you give to be seen giving — that's something else. The impact might look the same from outside. But the character you build depends entirely on which one it actually is.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Service Isn't`,
          paragraphs: [
            `Two things people sometimes mistake for service.`,
            `Doing your chores at home isn't service — it's expected. Doing extra work to improve your own grades isn't service either — the benefit is YOURS. Service is voluntary AND for others.`,
          ],
          image: `/explorer-assets/leadership/l09-s2-what-service-isnt.png`,
          imageCaption: `Chores are responsibility. Self-improvement is great. Both are good. Neither is service.`,
          vocab: [
            { word: `voluntary`, definition: `Chosen freely, not required. One half of what makes service service.`,
              audioPrompt: `Voluntary means nobody made you do it, {name} — not parents, not teachers, not a rule. You chose. That distinction matters. The same action — picking up litter, helping someone learn — means something different when it's required versus when it's chosen. Service lives in the chosen.` },
            { word: `benefit`,   definition: `Who an action helps. Service helps OTHERS — that's the other half of what makes it service.`,
              audioPrompt: `The benefit of service goes to someone else, {name} — that's the whole point. Working on your own grades is great. Doing your own laundry is responsible. But neither one is service, because the benefit stays with you. Service means the help goes outward.` },
            { word: `expected`,  definition: `Something required of you, not freely given. Your chores aren't service — they're part of being in a household.`,
              audioPrompt: `Expected things aren't service, {name} — they're just what you do as part of being in a family, a class, a team. That doesn't make them unimportant. Doing your chores well is real responsibility. But it isn't extra. Service is what you give beyond what was already expected of you.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Giving Builds You`,
          paragraphs: [
            `Research is clear: people who regularly serve are happier, healthier, and find more meaning.`,
            `Service builds EMPATHY (you meet people whose lives are different). PERSPECTIVE (you see problems bigger than your own). And IDENTITY: when you act as someone who helps, you become one.`,
          ],
          image: `/explorer-assets/leadership/l09-s3-why-giving-builds-you.png`,
          imageCaption: `Service gives something back to the giver — not money or applause, but something deeper. Character. Meaning. Identity.`,
          vocab: [
            { word: `empathy`,     definition: `Genuinely understanding another person's experience. Built powerfully through service that brings you into contact with different lives.`,
              audioPrompt: `Service builds empathy in a way that classroom lessons about kindness never quite can, {name}. When you actually spend time with people whose lives are different from yours, something shifts. You stop imagining their experience from a distance — and you start to feel what it's actually like. That's the empathy that lasts.` },
            { word: `perspective`, definition: `A broader view of the world. Gained through service that exposes you to problems larger than your own.`,
              audioPrompt: `Service gives you perspective that's hard to get any other way, {name}. When you spend time helping someone who's struggling, the problems in your own day look different. Not smaller — but in better proportion. That shift in how you see the world is one of the lasting gifts service gives you.` },
            { word: `identity`,    definition: `How you see yourself. Shaped by what you keep choosing to do — including the habit of showing up to help.`,
              audioPrompt: `Valor believes: when you act like someone who helps, you become someone who helps, {name}. That's not a cliché — it's how identity actually works. The more times you choose to give your time and skill to others, the more that becomes who you are. Service doesn't just help the community. It builds you.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Match Your Strengths to Real Needs`,
          paragraphs: [
            `The best service connects what you're good at to a real need.`,
            `Love animals? A shelter needs you. Patient and clear? Younger kids need a reading buddy. Good with tech? Elderly neighbors do too. Match your strengths to the gap.`,
          ],
          image: `/explorer-assets/leadership/l09-s4-match-strengths-needs.png`,
          imageCaption: `Your strengths plus a real need is the equation. The most powerful service usually sits exactly where the two meet.`,
          vocab: [
            { word: `strength`,    definition: `A natural ability or developed skill. Your starting point for the service only you can offer.`,
              audioPrompt: `Your strengths are your most powerful tools for service, {name}. Not what someone told you to do — but what you're genuinely good at. Patient and clear? Younger kids need a reading buddy. Creative? A community space might love a mural. The most effective service starts with asking: what can I bring that's actually needed?` },
            { word: `need`,        definition: `A real gap where help is genuinely useful. The other half of finding your service.`,
              audioPrompt: `A real need is something the community actually needs help with, {name} — not something you imagined would be nice. Real needs are everywhere once you start looking: people who'd love help with something, places that could be cared for better, problems nobody's tackling. The skill is noticing them — and then asking what your strengths could do about them.` },
            { word: `sustainable`, definition: `Service you can keep doing without burning out. Built on real strengths and real care.`,
              audioPrompt: `Sustainable service is service you can keep doing, {name} — not something that drains you until you stop. That kind of lasting commitment comes from matching what you're good at to what actually matters to you. Service built on your genuine strengths and real care is the kind that creates real, lasting change.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Charity vs Service`,
          paragraphs: [
            `CHARITY meets an immediate need — food for someone hungry today.`,
            `SERVICE addresses the cause — teaching someone to grow food, helping change why hunger exists here. Both matter. Service tends to last longer.`,
          ],
          image: `/explorer-assets/leadership/l09-s5-charity-vs-service.png`,
          imageCaption: `Charity helps now. Service builds something that keeps helping. The world needs both — and great leaders know when to choose which.`,
          vocab: [
            { word: `charity`,    definition: `Giving something to address an immediate need. Valuable, necessary — and different from service that addresses causes.`,
              audioPrompt: `Charity matters, {name} — when someone is hungry right now, what matters is food right now. But charity alone doesn't change the conditions that made someone hungry in the first place. Both are needed. And understanding the difference helps you figure out what kind of impact you actually want to have.` },
            { word: `root cause`, definition: `The underlying reason a problem exists. What effective service works to address — not just the visible symptoms.`,
              audioPrompt: `A root cause is the "why" underneath the problem, {name}. Why is the park full of litter? Why are some kids falling behind in reading? When service addresses root causes — not just symptoms — it creates change that lasts. That's the difference between helping someone once and building something that keeps helping.` },
            { word: `capacity`,   definition: `Someone's ability to handle challenges on their own. What the best service works to build — not dependence.`,
              audioPrompt: `The highest form of service isn't doing things for people, {name} — it's building their capacity to do it themselves. Teaching a skill. Connecting someone to a resource. Helping someone find their own voice. Moving from "doing for" to "doing with" is the shift that turns good intentions into lasting impact.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Start With What's In Front of You`,
          paragraphs: [
            `You don't need a plan or an organization.`,
            `Look around. What's broken, missing, or overlooked? What can YOU do that would actually help? Start there. Service rarely begins grandly — it begins where you already are.`,
          ],
          image: `/explorer-assets/leadership/l09-s6-start-where-you-are.png`,
          imageCaption: `You don't need permission or an organization. Look around. The need is usually already there.`,
          vocab: [
            { word: `notice`,     definition: `Paying attention to what's broken, missing, or overlooked. Most service begins with noticing first.`,
              audioPrompt: `Noticing is the first skill of service, {name} — before you ever do anything else. What's overlooked in your school? What's broken in your neighborhood? Who seems to be struggling? Most people walk past these things. Service begins the moment you stop walking past them. And start asking what you could do.` },
            { word: `contribute`, definition: `Bringing your own skill or time to a need that exists. The action behind every act of service.`,
              audioPrompt: `Contributing means you brought something, {name} — not just an opinion about the problem, but actual help. Your time. Your skill. Your effort. That's the move that separates people who care from people who actually make a difference. Both matter. But the contributing is what changes things.` },
            { word: `start`,      definition: `Beginning where you are with what you have. Service almost never begins grandly.`,
              audioPrompt: `The hardest part of service is starting, {name} — and it almost never starts grandly. It starts with one small act. One conversation. One Saturday morning. Most of the people doing the most good in the world today started exactly the same way. Don't wait for the perfect moment. Start with what's in front of you.` },
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
    fetch('/explorer-assets/leadership/l09-s1-what-service-is.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-s2-what-service-isnt.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-s3-why-giving-builds-you.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-s4-match-strengths-needs.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-s5-charity-vs-service.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l09-s6-start-where-you-are.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L09] One or more magazine assets missing'));
}
