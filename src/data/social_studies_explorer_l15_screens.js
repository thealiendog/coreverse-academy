// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L15 — Making Choices: What Will You Spend, Save, and Share?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Eco.1.K-2 / D2.Eco.2.K-2 (scarcity, choice, tradeoffs)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L15 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-15`,
      title:     `Making Choices: What Will You Spend, Save, and Share?`,
      duration:  12,
      xpReward:  50,
      badge:     `choices-explorer`,
      badgeName: `Smart Choices Explorer`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. You've learned about NEEDS, WANTS, GOODS, SERVICES, MONEY, and WORK. Today we put it all together. Real life is full of CHOICES. What to spend money on. What to save for. What to share. Today, you'll learn HOW to make smart choices — a skill that'll serve you your whole life.`,
          headline: `Making Choices: What Will You Spend, Save, and Share?`,
          subtitle: `How to think smart about money, time, and what really matters`,
          visual: `/explorer-assets/social-studies/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Choices Are EVERYWHERE`,
          paragraphs: [
            `Every single day, you make CHOICES. Most are small. Some are big.`,
            `Should I have cereal or eggs? Should I read or play? Should I buy this toy or save my money? Should I help my friend or watch TV? Adults make even bigger choices. Should we buy a house or rent? Save for vacation or for school? Take this job or that one? Choices are part of being human. You can't NOT choose — even doing nothing is a choice. The goal isn't to AVOID choices. It's to make THOUGHTFUL ones. Today we'll learn how to think through choices so they lead where you actually want to go.`,
          ],
          image: `/explorer-assets/social-studies/l15-s1-choices-everywhere.webp`,
          imageCaption: `Choices are everywhere — every day, big and small. The goal is to make THOUGHTFUL choices.`,
          vocab: [
            { word: `choice`,         definition: `Picking one option from MANY. CHOICES are part of every single day.`,
              audioPrompt: `A choice, {name}, is picking one option from many. Choices are part of every single day. What to eat. What to wear. What to do with your time. What to do with money. Some choices are small. Some are big. All of them shape your day, your life, your future. Learning to make smart choices is one of life's most important skills.` },
            { word: `thoughtful`,     definition: `Made with CARE and THINKING. THOUGHTFUL choices are smarter than quick ones.`,
              audioPrompt: `Thoughtful, {name}, means made with care and thinking. Thoughtful choices are smarter than quick ones. When you think before deciding, you usually make better decisions. You consider what really matters. You weigh the options. You don't just react. Thoughtful people make fewer regrets — because they thought it through first.` },
            { word: `everyday`,       definition: `Happening EACH DAY. Choices are an EVERYDAY part of life — practice helps.`,
              audioPrompt: `Everyday, {name}, means happening each day. Choices are an everyday part of life — practice helps. The more thoughtful choices you make, the better you get at it. Kids who learn to make smart choices grow up into adults who make smart life decisions. It's a skill you can practice starting now.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Every Choice Has TRADEOFFS`,
          paragraphs: [
            `Here's something important — when you CHOOSE one thing, you ALSO choose NOT to have the other.`,
            `If you spend your $10 on a toy, you can't ALSO spend that $10 on candy. The choice has a TRADEOFF. You're giving something up. Adults call this OPPORTUNITY COST — what you GIVE UP when you pick something. If you spend an hour playing video games, that's an hour you're NOT reading. If you save for a bike, you can't use that money for snacks. Every choice trades something. That's not bad — that's just how life works. The trick is to choose what matters MORE TO YOU. Pick the option that gives you the most for what you give up.`,
          ],
          image: `/explorer-assets/social-studies/l15-s2-tradeoffs.webp`,
          imageCaption: `Choices = tradeoffs. Spend $ on toy = can't spend it on candy. Pick what matters MORE to you.`,
          vocab: [
            { word: `tradeoff`,       definition: `What you GIVE UP when you pick something else. Every choice has TRADEOFFS.`,
              audioPrompt: `A tradeoff, {name}, is what you give up when you pick something else. Every choice has tradeoffs. If you choose to play, you give up reading time. If you choose to save money, you give up spending it. Tradeoffs aren't bad — they're how life works. Smart people know about tradeoffs and pick the option that matters most to them.` },
            { word: `give up`,        definition: `To NOT have something else. Picking one means GIVING UP another.`,
              audioPrompt: `To give up, {name}, means to not have something else. Picking one means giving up another. If you pick chocolate ice cream, you're giving up vanilla. If you pick to save money, you're giving up some fun spending. That's a tradeoff. Understanding what you give up helps you make better choices.` },
            { word: `matters more`,   definition: `Is MORE IMPORTANT to you. Pick what MATTERS MORE — not always what's easiest.`,
              audioPrompt: `Matters more, {name}, means is more important to you. Pick what matters more — not always what's easiest. Easy isn't always best. Sometimes the harder choice (like saving instead of spending) matters more in the long run. Asking yourself 'what matters MORE here?' is a key question for any choice.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `THINK Before You Choose`,
          paragraphs: [
            `Before making a choice, especially with money, take a moment to THINK.`,
            `Ask yourself: 1) Is this a NEED or a WANT? (Remember L11) 2) Will I still want this in a WEEK? (Many wants fade fast.) 3) How much MONEY did someone work to earn this? (Money = work.) 4) What would I have to GIVE UP to get this? (Tradeoffs.) 5) Could I SAVE this money for something better later? Just THINKING for one minute before buying often changes your mind. Many impulse purchases get regretted. Many quick choices we wish we'd thought about. Pausing to think is one of the most powerful habits you can build. It saves money, time, and regret.`,
          ],
          image: `/explorer-assets/social-studies/l15-s3-think-before.webp`,
          imageCaption: `Before buying, ASK: Need or want? Still want it next week? Worth giving up? Could I save? Think first.`,
          vocab: [
            { word: `pause`,          definition: `To STOP for a moment. PAUSING before a choice helps you think it through.`,
              audioPrompt: `To pause, {name}, is to stop for a moment. Pausing before a choice helps you think it through. Even just a few seconds of pausing changes a quick decision into a thoughtful one. Adults who pause make better choices. Kids who pause do too. Pausing isn't slow — it's smart.` },
            { word: `impulse`,        definition: `A QUICK choice without thinking. IMPULSE buys often get REGRETTED.`,
              audioPrompt: `An impulse, {name}, is a quick choice without thinking. Impulse buys often get regretted. You see something cool, you grab it, you buy it. An hour later, you're not sure why. The toy stays in the closet. The candy is gone. Most stores are designed to encourage impulse buys. Knowing this helps you resist them.` },
            { word: `regret`,         definition: `Wishing you had CHOSEN DIFFERENTLY. Thinking first reduces REGRET.`,
              audioPrompt: `Regret, {name}, is wishing you had chosen differently. Thinking first reduces regret. When you pause and think, you make better choices. Fewer regrets means a happier life. Adults who've learned to pause and think before deciding have fewer money regrets, time regrets, and life regrets. It's a real superpower.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The THREE JARS Approach`,
          paragraphs: [
            `Here's a simple way to make GREAT money choices — the THREE JARS APPROACH.`,
            `Whenever you get money (allowance, birthday gift, earnings from chores), SPLIT it into three jars or envelopes — SAVE, SPEND, and SHARE. Maybe 50% SAVE, 40% SPEND, 10% SHARE. Or whatever split feels right. SAVE jar grows over time — for big goals or future needs. SPEND jar is for things you want NOW. SHARE jar goes to help others — donations, gifts, kindness. The cool part — even if you only get $1, you can still split it. 50 cents save. 40 cents spend. 10 cents share. Building these habits NOW means they'll be automatic by the time you're an adult with bigger amounts.`,
          ],
          image: `/explorer-assets/social-studies/l15-s4-three-jars.webp`,
          imageCaption: `THREE JARS: SAVE (50%) + SPEND (40%) + SHARE (10%). Split any money you get. Build the habit early.`,
          vocab: [
            { word: `split`,          definition: `To DIVIDE into parts. SPLIT any money into save, spend, share.`,
              audioPrompt: `To split, {name}, is to divide into parts. Split any money into save, spend, share. This is one of the smartest habits you can build. Even tiny amounts get split. Even $1 can be 50 cents save, 40 cents spend, 10 cents share. The habit matters more than the amount. Splitting becomes automatic over time.` },
            { word: `habit`,          definition: `Something you do AUTOMATICALLY. Smart money HABITS make life easier.`,
              audioPrompt: `A habit, {name}, is something you do automatically. Smart money habits make life easier. When good habits become automatic, you don't have to think about them every time. Splitting money into save-spend-share becomes a habit. Pausing before buying becomes a habit. These habits, built early, make a huge difference over a lifetime.` },
            { word: `grow over time`, definition: `Get BIGGER little by little. Your SAVE jar GROWS OVER TIME.`,
              audioPrompt: `Grow over time, {name}, means get bigger little by little. Your save jar grows over time. Even small amounts add up. A dollar this week. Two dollars next week. Five dollars on your birthday. After a year, you might have $50 or $100. After many years, hundreds or thousands. Small, regular savings turn into big amounts. Time is your friend.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Mistakes Are OKAY`,
          paragraphs: [
            `Important truth — you WILL make some money mistakes. EVERY single person does. That's NORMAL.`,
            `Maybe you'll spend money on a toy that turns out boring. Maybe you'll save for something and change your mind. Maybe you'll forget to share. Maybe you'll splurge on candy and then wish you'd saved it. Mistakes are NOT FAILURES — they're LEARNING. Each mistake teaches you something. The toy that disappointed you? Now you know to think harder before buying. The boring purchase? Now you understand impulse buys. Mistakes are how we get smarter. The only real failure is making the SAME mistake over and over without learning. Be kind to yourself. Learn. Try again. That's how growth works.`,
          ],
          image: `/explorer-assets/social-studies/l15-s5-mistakes-okay.webp`,
          imageCaption: `Mistakes are OKAY. Every person makes some. They teach us. The only real failure is not learning from them.`,
          vocab: [
            { word: `mistake`,        definition: `A CHOICE that didn't work out well. Everyone MAKES MISTAKES — that's okay.`,
              audioPrompt: `A mistake, {name}, is a choice that didn't work out well. Everyone makes mistakes — that's okay. Even adults make money mistakes all the time. The toy that disappointed you. The candy you wish you'd saved. The thing you forgot. All normal. Mistakes aren't bad — they're how we learn what works.` },
            { word: `learning`,       definition: `Getting SMARTER from experience. Mistakes are LEARNING — not failure.`,
              audioPrompt: `Learning, {name}, is getting smarter from experience. Mistakes are learning — not failure. Each time something doesn't work, you learn something. You learn that store-brand candy tastes the same as expensive. You learn that the toy looks better in ads than in person. You learn impulse buys often disappoint. Every mistake adds wisdom.` },
            { word: `try again`,      definition: `To MAKE another attempt. After a mistake, you TRY AGAIN with what you learned.`,
              audioPrompt: `Try again, {name}, means to make another attempt. After a mistake, you try again with what you learned. The next time you're tempted by an impulse buy, you remember the last one and pause. The next time you have money, you split it better. Trying again is how progress happens. Each try is a chance to do better than before.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Smart Choices Build a Great FUTURE`,
          paragraphs: [
            `Here's the BIG idea — the smart choices you make NOW build the FUTURE you want.`,
            `Kids who learn to save have adults who have savings. Kids who learn to share have adults who help others. Kids who learn to think before they buy have adults who don't waste money. The small choices add up. Adults who make smart choices have FEWER WORRIES, MORE OPTIONS, and HAPPIER LIVES. They can afford emergencies. They can help family. They can pursue dreams. None of this is about being CHEAP or NOT having fun. It's about being THOUGHTFUL with what you have. You're young, but you're already building habits that will shape your whole life. Make them GOOD ones. Your future self will thank you.`,
          ],
          image: `/explorer-assets/social-studies/l15-s6-smart-future.webp`,
          imageCaption: `Smart choices NOW = bright future LATER. Habits add up over years. Your future self will thank you.`,
          vocab: [
            { word: `future`,         definition: `What's COMING LATER in your life. Choices NOW shape your FUTURE.`,
              audioPrompt: `Future, {name}, is what's coming later in your life. Choices now shape your future. The kid who reads becomes the adult who loves learning. The kid who saves becomes the adult with savings. The kid who shares becomes the adult who helps. Small choices today add up to who you become. Your future is being built right now.` },
            { word: `add up`,         definition: `Combine into something BIGGER. Small choices ADD UP over time.`,
              audioPrompt: `To add up, {name}, means combine into something bigger. Small choices add up over time. A dollar saved each week becomes $52 a year. After 10 years, $520. After 30 years with smart investing, thousands. Same with bad choices — a bad habit kept for years adds up to big problems. Small things matter because they ADD UP.` },
            { word: `thank you`,      definition: `Showing GRATITUDE. Your FUTURE SELF will THANK YOU for smart choices today.`,
              audioPrompt: `Thank you, {name}, is showing gratitude. Your future self will thank you for smart choices today. Picture yourself 10 years from now. 20 years from now. That older you is shaped by what younger you does now. The choices you make today are gifts you give to that future you. Pause, think, choose well — and your future self will say thank you.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `EVERY choice has TRADEOFFS — picking one option means giving up the other.`,
              matchPhrase: `Yes! Every choice has tradeoffs. Spending money on a toy means not spending on something else. Choosing TV over reading means giving up reading. Smart people consider tradeoffs.`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `THINKING before you choose — pausing for a moment — leads to better decisions.`,
              matchPhrase: `True! Pausing to think changes a quick decision into a thoughtful one. Asking 'do I really need this?' or 'will I still want this in a week?' saves money and reduces regret.`,
              correctMatch: `fact` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `Choices have NO consequences — what you pick has zero effect on anything.`,
              matchPhrase: `Not at all! Every choice has effects. Choices shape your day, your money, your relationships, your future. That's why making thoughtful choices matters.`,
              correctMatch: `myth` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `One money MISTAKE ruins your ENTIRE life forever — there's no coming back.`,
              matchPhrase: `Definitely not! Mistakes are learning. Everyone makes them. You learn, try again, and grow. One mistake doesn't ruin anything — it teaches you something.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is a CHOICE?`,
              options: [`A type of bug`, `Picking ONE option from many — happens every day`, `Only what adults do`, `A type of song`],
              correctIndex: 1,
              explanation: `A choice is picking one option from many. Choices happen every day. What to eat, what to wear, what to do, how to spend money. All of them shape your day and your life.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What is a TRADEOFF?`,
              options: [`Free stuff`, `What you GIVE UP when you pick something else`, `Magic`, `Bad luck`],
              correctIndex: 1,
              explanation: `A tradeoff is what you give up when you pick something else. Choosing to spend $10 on a toy = giving up $10 of candy. Every choice has tradeoffs. That's just how it works.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What's a SMART thing to do BEFORE buying something?`,
              options: [`Just buy it`, `PAUSE and THINK — need or want? Still want next week? Worth giving up other things?`, `Buy more`, `Run away`],
              correctIndex: 1,
              explanation: `Pause and think! Ask — is this a need or want? Will I still want this in a week? What am I giving up? Could I save for something better? Thinking first reduces regret.` },
            { id: `l15-q4`, format: `true-false`,
              question: `The THREE JARS approach is to SPLIT any money you get into SAVE, SPEND, and SHARE jars.`,
              correctAnswer: true,
              explanation: `True! Three jars: SAVE (for the future), SPEND (for now), SHARE (for helping others). Split any money — even $1 — three ways. Build the habit early.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Mistakes are okay — they're how we ___. The only real failure is not learning from them.`,
              options: [`learn`, `swim`, `dance`, `eat`],
              correctIndex: 0,
              explanation: `Learn! Mistakes are how we get smarter. Each one teaches us something. The only real failure is making the same mistake over and over without learning. Be kind to yourself. Try again.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why do the choices you make NOW matter?`,
              options: [`They don't`, `They BUILD your future — small choices add up over time`, `Only adults' choices matter`, `Just luck`],
              correctIndex: 1,
              explanation: `Choices now build your future. Small choices add up over years. Habits formed as a kid often last a lifetime. Make good ones now — your future self will thank you.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's something powerful, {name}. Studies show kids who LEARN to MANAGE MONEY at a young age — even just allowance and saving — grow up with way LESS MONEY STRESS as adults. Adults who have to figure it all out for the first time as 25-year-olds often struggle more. You're already learning. You're already ahead. Even just understanding NEEDS vs WANTS, THINKING before buying, and SPLITTING money into save-spend-share puts you in a great position. The habits you build now? Some of them will stick for life. Your future self is watching what younger you does. Make good choices.`,
          familyAdventure: `As a family, do the GROCERY STORE GAME together. Next time you go grocery shopping, before grabbing something, PAUSE. Ask out loud — Is this a NEED or a WANT? Will we still want it next week? Could we save by buying something different? Try doing this for a whole shopping trip. Notice — pausing slows things down a tiny bit, but the choices feel much better.`,
          creativePrompt: `Imagine yourself 10 years older — driving a car, having your own money. Draw what you'd like your future to look like. Then write down 3 SMART CHOICES today that would help create that future. Maybe — save part of your allowance. Read books to grow smarter. Be kind to your siblings. Practice a skill. The choices you make today plant the seeds for tomorrow.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now know how to make SMART CHOICES. Every choice has TRADEOFFS — pick what matters more. PAUSE and THINK before deciding. Use the THREE JARS approach — save, spend, share. MISTAKES are okay — they're how we learn. And remember — small choices NOW build the FUTURE you want. ECONOMICS BLOCK COMPLETE! Up next — History. We'll see how all this has played out over time. — Atlas 🐻`,
          badge:     `choices-explorer`,
          badgeName: `Smart Choices Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L15] Loaded: "Making Choices" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
