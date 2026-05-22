// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L15 — Making Choices
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Eco.1.K-2 / D2.Eco.2.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L15 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-15`,
      title: `Making Choices`,
      duration: 12,
      xpReward: 50,
      badge: `choices-explorer`,
      badgeName: `Smart Choices Explorer`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. You learned about needs, wants, money, and work. Today we put it together. Real life is full of choices. Today you will learn how to make smart ones. A skill for your whole life. Let's go.`,
          headline: `Making Choices`,
          subtitle: `How to think smart about money, time, and what matters`,
          visual: `/explorer-assets/social-studies/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Choices Are Everywhere`,
          paragraphs: [
            `Every single day you make choices. Most are small. Some are big.`,
            `Cereal or eggs? Read or play? Buy this toy or save? Help a friend or watch TV? You cannot not choose. Even doing nothing is a choice. The goal is to make thoughtful ones.`,
          ],
          image: `/explorer-assets/social-studies/l15-s1-choices-everywhere.webp`,
          imageCaption: `Choices are everywhere. Big and small. Make them thoughtful.`,
          vocab: [
            { word: `choice`, definition: `Picking one option from many.`,
              audioPrompt: `A choice is picking one option from many, {name}. You make choices every day. What to eat. What to do. How to spend money. Each choice shapes your day. Smart choices make life better.` },
            { word: `thoughtful`, definition: `Made with care and thinking.`,
              audioPrompt: `Thoughtful means made with care and thinking, {name}. Thoughtful choices are smarter than quick ones. When you think before deciding, you usually pick better. Thoughtful people make fewer regrets.` },
            { word: `between`, definition: `In the middle of two things. We choose between options.`,
              audioPrompt: `Between means in the middle of two things, {name}. We choose between options. Between candy or fruit. Between TV or a book. Between helps us think about more than one choice.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Every Choice Has Tradeoffs`,
          paragraphs: [
            `Important truth. When you pick one thing, you also pick NOT to have the other.`,
            `If you spend $10 on a toy, you cannot also use that $10 on candy. The choice has a tradeoff. You give something up. Every choice trades something. The trick is to pick what matters more to you.`,
          ],
          image: `/explorer-assets/social-studies/l15-s2-tradeoffs.webp`,
          imageCaption: `Every choice has a tradeoff. Pick what matters most to you.`,
          vocab: [
            { word: `tradeoff`, definition: `What you give up when you pick something else.`,
              audioPrompt: `A tradeoff is what you give up, {name}. When you pick something else. If you pick to play, you give up reading time. Tradeoffs are not bad. They are just how choices work. Smart people think about tradeoffs.` },
            { word: `give up`, definition: `To not have something else.`,
              audioPrompt: `To give up means to not have something else, {name}. Picking one thing means giving up another. If you pick chocolate, you give up vanilla. Knowing what you give up helps you pick better.` },
            { word: `matters`, definition: `Is important.`,
              audioPrompt: `Matters means is important, {name}. Pick what matters more. Not always what is easiest. Sometimes the harder choice matters more in the long run. Asking yourself what matters helps you choose well.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Think Before You Choose`,
          paragraphs: [
            `Before making a choice, especially with money, stop and think.`,
            `Ask yourself. Is this a need or a want? Will I still want it next week? Could I save for something better? Just thinking for one minute often changes your mind. Pausing to think is a powerful habit.`,
          ],
          image: `/explorer-assets/social-studies/l15-s3-think-before.webp`,
          imageCaption: `Before buying, pause. Ask if you need it or just want it.`,
          vocab: [
            { word: `pause`, definition: `To stop for a moment.`,
              audioPrompt: `To pause means to stop for a moment, {name}. Pausing before a choice helps you think. Even a few seconds. It changes a quick choice into a smart one. Pausing is a powerful habit.` },
            { word: `quick`, definition: `Done very fast, without thinking much.`,
              audioPrompt: `Quick means done fast without much thinking, {name}. Quick choices often lead to regret. The shiny thing in the store that you do not really want a week later. Pausing turns quick choices into thoughtful ones.` },
            { word: `regret`, definition: `Wishing you had picked differently.`,
              audioPrompt: `Regret means wishing you had picked differently, {name}. Thinking before choosing makes fewer regrets. When you pause, you usually pick better. Fewer regrets means a happier life.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Three Jars`,
          paragraphs: [
            `Here is a simple way to make great money choices. The three jars.`,
            `When you get any money, split it into three jars. SAVE, SPEND, and SHARE. Save for later. Spend on what you need or want today. Share to help others. Even $1 can be split three ways. The habit matters more than the amount.`,
          ],
          image: `/explorer-assets/social-studies/l15-s4-three-jars.webp`,
          imageCaption: `Three jars: SAVE, SPEND, SHARE. Split any money you get.`,
          vocab: [
            { word: `split`, definition: `To divide into parts.`,
              audioPrompt: `To split means to divide into parts, {name}. Split your money into three jars. Save. Spend. Share. Even $1 can be split. Splitting becomes a habit. Habits become who you are.` },
            { word: `habit`, definition: `Something you do without thinking.`,
              audioPrompt: `A habit is something you do without thinking, {name}. Smart money habits make life easier. When splitting becomes a habit, you do not have to decide every time. Habits built early last a lifetime.` },
            { word: `grow`, definition: `To get bigger little by little.`,
              audioPrompt: `To grow means to get bigger little by little, {name}. Your save jar grows over time. Even small amounts add up. A dollar this week. Two next week. After a year, you might have $50 or more.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Mistakes Are Okay`,
          paragraphs: [
            `Important truth. You will make some money mistakes. Every single person does. That is normal.`,
            `Maybe you spend on a toy that turns out boring. Maybe you forget to share. Mistakes are not failures. They are learning. Each one teaches you. The only real failure is making the same mistake without learning.`,
          ],
          image: `/explorer-assets/social-studies/l15-s5-mistakes-okay.webp`,
          imageCaption: `Mistakes are okay. They teach you. Try again with what you learned.`,
          vocab: [
            { word: `mistake`, definition: `A choice that did not work out well.`,
              audioPrompt: `A mistake is a choice that did not work out, {name}. Everyone makes mistakes. Even adults. The toy that disappointed. The candy you wish you saved. All normal. Mistakes are how we learn.` },
            { word: `learn`, definition: `To get smarter from what happens.`,
              audioPrompt: `To learn means to get smarter from what happens, {name}. Mistakes are learning. Each one teaches you. The next time, you remember. Each try is a chance to do better than before.` },
            { word: `try again`, definition: `To make another attempt.`,
              audioPrompt: `Try again means to make another attempt, {name}. After a mistake, you try again. With what you learned. Trying again is how progress happens. Be kind to yourself when you mess up.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Smart Choices Build the Future`,
          paragraphs: [
            `Here is the big idea, {name}. The smart choices you make now build the future you want.`,
            `Kids who save become adults who have savings. Kids who think before buying become adults who do not waste money. The small choices add up. Your future self will thank you for the smart ones today.`,
          ],
          image: `/explorer-assets/social-studies/l15-s6-smart-future.webp`,
          imageCaption: `Smart choices today build the future you want tomorrow.`,
          vocab: [
            { word: `future`, definition: `What is coming later in your life.`,
              audioPrompt: `Future means what is coming later, {name}. Your choices today shape your future. The kid who reads becomes the adult who loves learning. The kid who saves becomes the adult with savings. Your future is being built now.` },
            { word: `add up`, definition: `To combine into something bigger.`,
              audioPrompt: `Add up means to combine into something bigger, {name}. Small choices add up over time. A dollar a week becomes $52 a year. A small habit kept for years becomes part of who you are.` },
            { word: `thank you`, definition: `Showing thanks.`,
              audioPrompt: `Thank you means showing thanks, {name}. Your future self will thank you for smart choices today. Picture yourself 10 years from now. Older you depends on younger you. Make good choices for both.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each money choice, {name}. Is it saving, spending, or sharing?`,
          buckets: [
            { id: `save`,  label: `Save`,  color: `#34D399` },
            { id: `spend`, label: `Spend`, color: `#FBBF24` },
            { id: `share`, label: `Share`, color: `#F472B6` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `Put $5 in a piggy bank for a bike`,
              matchPhrase: `Yes! Putting money away for a goal is saving.`, correctMatch: `save` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `Keep birthday money for the future`,
              matchPhrase: `Right! Keeping money for later is saving. Smart.`, correctMatch: `save` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `Save half your allowance`,
              matchPhrase: `Yes! Setting aside half is saving. The save jar grows.`, correctMatch: `save` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `Buy school supplies you need`,
              matchPhrase: `Right! Buying what you need is spending. Smart spending.`, correctMatch: `spend` },
            { id: `l15-g5`, image: `l15-game-5.webp`, label: `Pay for your bus ticket`,
              matchPhrase: `Yes! Paying for a need is spending. The bus takes you places.`, correctMatch: `spend` },
            { id: `l15-g6`, image: `l15-game-6.webp`, label: `Buy a snack for lunch`,
              matchPhrase: `Right! Buying lunch is spending. We all need to eat.`, correctMatch: `spend` },
            { id: `l15-g7`, image: `l15-game-7.webp`, label: `Donate a toy to a kid who has none`,
              matchPhrase: `Yes! Giving to help others is sharing. Kindness in action.`, correctMatch: `share` },
            { id: `l15-g8`, image: `l15-game-8.webp`, label: `Give to a food bank`,
              matchPhrase: `Right! Helping people who need food is sharing.`, correctMatch: `share` },
            { id: `l15-g9`, image: `l15-game-9.webp`, label: `Help pay for your sibling's birthday gift`,
              matchPhrase: `Yes! Chipping in for a family gift is sharing.`, correctMatch: `share` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is a choice?`,
              options: [`A bug`, `Picking one option from many`, `Only for adults`, `A song`],
              correctIndex: 1,
              explanation: `A choice is picking one option from many. You make choices every day.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What is a tradeoff?`,
              options: [`Free stuff`, `What you give up when you pick something else`, `Magic`, `Bad luck`],
              correctIndex: 1,
              explanation: `A tradeoff is what you give up. Pick a toy with $10 and you give up $10 of candy.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is smart to do BEFORE buying something?`,
              options: [`Just buy it`, `Pause and think. Need or want? Will I still want it next week?`, `Run`, `Buy more`],
              correctIndex: 1,
              explanation: `Pause and think. Need or want? Will I still want this? Smart pausers make fewer regrets.` },
            { id: `l15-q4`, format: `true-false`,
              question: `The three jars are SAVE, SPEND, and SHARE.`,
              correctAnswer: true,
              explanation: `True! Three jars. Save for later. Spend on now. Share to help others. Split any money you get.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Mistakes are okay. They are how we ___.`,
              options: [`learn`, `swim`, `dance`, `eat`],
              correctIndex: 0,
              explanation: `Learn! Each mistake teaches us something. Be kind to yourself. Try again with what you learned.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why do choices today matter?`,
              options: [`They do not`, `They build your future. Small choices add up over time.`, `Only adults matter`, `Just luck`],
              correctIndex: 1,
              explanation: `Choices build your future. Small ones add up. Habits formed as a kid often last a lifetime.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Kids who learn money habits early grow up with way less money stress. Adults who figure it all out at 25 often struggle more. You are already learning. Already ahead. Understanding needs versus wants. Splitting into save, spend, share. These habits build your future.`,
          familyAdventure: `Try the grocery store game together. Before grabbing something off a shelf, pause. Ask, is this a need or a want? Will we still want it next week? Could we save by picking something else? Notice how pausing changes the choices you make.`,
          creativePrompt: {
            intro: `Imagine yourself 10 years older. Driving a car. Having your own money. Draw what your future could look like.`,
            floor: `Write 3 sentences. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what choices today help you get there.`,
            frames: [
              `In 10 years, I see myself ___.`,
              `To get there, I will save for ___.`,
              `I will spend smart on ___.`,
              `I will share by ___.`,
              `My future self will thank me for ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You now know how to make smart choices. Every choice has a tradeoff. Pause before deciding. Use the three jars. Save, spend, share. Mistakes are okay. They teach you. Small choices now build your future. Economics block done. History next. Atlas the Bear.`,
          badge: `choices-explorer`,
          badgeName: `Smart Choices Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L15] Loaded: "Making Choices" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
