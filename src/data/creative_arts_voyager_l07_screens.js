// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L07 — The Economics of the Creative Industry
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Creative Economy, Royalties, Labor & Value
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: CASE STUDY (work out how real creators actually make money in
// concrete scenarios). Contract matches L04: cases[] with title/type/description/
// questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l07-v1";

const CREATIVE_ARTS_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-07`,
      title: `The Economics of the Creative Industry`,
      duration: 35,
      xpReward: 75,
      badge: `creative-economy-literate`,
      badgeName: `Creative Economy Literate`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, here is a question that sounds simple and is not: how does an artist actually pay rent? You can love music, drawing, writing, or film with your whole heart, and you still have to eat, and most people who make a living from creative work do it in ways that would surprise you. The famous millionaire musician is real but rare, like a lottery winner; the working creative who pieces together income from five different sources is the normal case. This lesson pulls back the curtain on the money, not because money is the point of art, but because understanding it is how you protect yourself, make smart choices, and avoid being taken advantage of. By the end you will understand royalties, rights, the long tail, and why "exposure" is sometimes a trap. This is the practical lesson the romantic stories leave out. Onward.`,
          headline: `The Economics of the Creative Industry`,
          subtitle: `How do artists actually make a living? Case Study.`,
          visual: `/voyager-assets/creative-arts/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Where The Money Actually Comes From`,
          paragraphs: [
            `Start with the surprising truth: most working creatives do not make their living from one big source. They stack several small ones. Picture a working musician you have never heard of who makes a decent living. Their money might come from a little streaming income, plus playing live shows, plus teaching lessons, plus selling merchandise like t-shirts, plus licensing a song to a commercial, plus a part-time job. No single piece is large; together they add up to a living. People call this "stacking" or having "multiple income streams," and it is the normal shape of a creative career, not a sign of failure. Knowing this protects you from the false belief that you either become famous or you fail.`,
            `Now a number that shocks most people: music streaming pays the artist astonishingly little per play. The exact rate shifts, but it lands in the rough neighborhood of a third of a cent to half a cent per stream, meaning a song needs very roughly two hundred thousand to three hundred thousand plays just to earn a few hundred dollars, and that small sum is then often split among the songwriter, the performer, the record label, and others. So a song with a million streams, which sounds like fame, might earn its creators only a few thousand dollars, divided several ways. This is why the live show, the t-shirt, and the teaching matter so much. The streaming number alone explains a huge amount about how modern music careers really work.`,
            `The same stacking logic runs through every creative field. A working illustrator might combine client commissions, selling prints, teaching workshops, and a book deal. A writer might combine book royalties, freelance articles, a teaching job, and speaking fees. A filmmaker might combine commercial work that pays the bills with passion projects that may never pay at all. The romantic image of the artist who only makes their pure art and somehow money appears is, for almost everyone, a myth. The real skill of a creative career is building a stack that is stable enough to live on while protecting time for the work you actually care about.`,
          ],
          image: `/voyager-assets/creative-arts/l07-s1-streams.webp`,
          imageCaption: `Surprising truth: most working creatives stack several small income sources, not one big one. A working musician might combine a little streaming income + live shows + teaching lessons + merchandise + licensing a song to a commercial + a part-time job; no piece is large, together they make a living. This "stacking" / "multiple income streams" is the normal shape, not failure. Shocking number: streaming pays very roughly a third to half a cent per play, so a song needs roughly 200,000-300,000 plays to earn a few hundred dollars, then split among songwriter, performer, label, others; a million streams ("fame") might earn only a few thousand dollars, divided several ways, which is why live shows, merch, and teaching matter so much. Same logic in every field (illustrators, writers, filmmakers). The "pure art, money appears" image is, for almost everyone, a myth.`,
          vocab: [
            {
              word: `income streams and the streaming-pay reality`,
              definition: `Most working creatives do not make their living from one big source; they stack several small ones. A working musician you have never heard of might combine a little streaming income, plus live shows, plus teaching lessons, plus selling merchandise (t-shirts), plus licensing a song to a commercial, plus a part-time job; no single piece is large, but together they add up to a living. This "stacking," or having "multiple income streams," is the normal shape of a creative career, not a sign of failure, and knowing it protects you from the false belief that you either become famous or you fail. A shocking number: music streaming pays the artist very little per play, in the rough neighborhood of a third of a cent to half a cent per stream (the exact rate shifts), so a song needs very roughly two hundred thousand to three hundred thousand plays just to earn a few hundred dollars, which is then often split among the songwriter, the performer, the record label, and others. A song with a million streams, which sounds like fame, might earn its creators only a few thousand dollars, divided several ways, which is why live shows, merchandise, and teaching matter so much. The same stacking logic runs through every field: illustrators combine commissions, prints, workshops, and book deals; writers combine royalties, freelance articles, teaching, and speaking fees; filmmakers combine paying commercial work with passion projects. The romantic image of the artist who only makes pure art while money somehow appears is, for almost everyone, a myth.`,
              audioPrompt: `Start with the surprising truth, {name}: most working creatives do not make their living from one big source. They stack several small ones. Picture a working musician you have never heard of who makes a decent living. Their money might come from a little streaming income, plus playing live shows, plus teaching lessons, plus selling merchandise like t-shirts, plus licensing a song to a commercial, plus a part-time job. No single piece is large; together they add up to a living. People call this stacking, or having multiple income streams, and it is the normal shape of a creative career, not a sign of failure. Now a number that shocks most people: music streaming pays the artist astonishingly little per play, in the rough neighborhood of a third of a cent to half a cent per stream. That means a song needs very roughly two hundred thousand to three hundred thousand plays just to earn a few hundred dollars, and that small sum is then often split among the songwriter, the performer, the record label, and others. So a song with a million streams, which sounds like fame, might earn its creators only a few thousand dollars, divided several ways. This is why the live show, the t-shirt, and the teaching matter so much. The same stacking logic runs through every creative field. The romantic image of the artist who only makes their pure art and somehow money appears is, for almost everyone, a myth.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Royalties And Rights: Owning The Thing`,
          paragraphs: [
            `Here is the single most important money idea in the creative world, and most people never learn it: the difference between getting paid once and getting paid forever. When you make a creative work, you usually own a "copyright," the legal right to control who copies, sells, or uses it. That ownership can earn you a "royalty," a small payment every time your work gets used. A songwriter earns a royalty each time their song is streamed, played on the radio, or used in a movie. An author earns a royalty on each book sold. The crucial point: if you keep your rights, you can keep earning from one piece of work for decades. Selling your rights for a one-time payment can feel great today and cost you enormously later.`,
            `A made-up but realistic example makes it clear. Imagine a young songwriter is offered five thousand dollars to sign away all rights to a song forever. Five thousand dollars feels huge when you are broke. But if that song later gets used in a hit show and would have earned royalties of fifty thousand dollars over ten years, the songwriter who sold their rights gets none of it; the company that bought them gets all of it. This exact thing has happened to many real artists, especially young ones who did not understand what they were signing. The lesson is not "never sell your rights." It is "understand what your rights are worth before you trade them away," which is a skill, not an instinct.`,
            `This is also why you should care, even now, about the boring-looking fine print. The contract is where the money actually lives. Who owns the work? Who gets what percentage? For how long? Can you get the rights back later? Real creative careers are made and broken on these details, not on talent alone. Plenty of hugely talented people have been poor because they signed bad contracts, and plenty of moderately talented people have done fine because they understood the business. You do not have to become a lawyer. You do have to learn enough to know when to slow down, ask questions, and get help before you sign, which is exactly the kind of self-protection this lesson is for.`,
          ],
          image: `/voyager-assets/creative-arts/l07-s2-royalties.webp`,
          imageCaption: `The most important creative-money idea most people never learn: getting paid once vs. getting paid forever. Making a work usually gives you a copyright (the right to control who copies, sells, or uses it), which can earn a royalty (a small payment every time it is used): a songwriter earns each stream/radio play/movie use; an author earns on each book sold. Keep your rights and you can earn from one work for decades; sell them for a one-time payment and you can lose enormously later. Realistic example: a young songwriter offered $5,000 to sign away a song forever; if it later earns $50,000 in royalties over ten years, the seller gets none, the buyer gets all. Happens to real artists, especially young ones who did not understand the contract. Lesson: not "never sell rights" but "know what your rights are worth before trading them." The contract is where the money lives; careers are made and broken on the fine print, not talent alone.`,
          vocab: [
            {
              word: `royalties, rights, and the fine print`,
              definition: `The single most important money idea in the creative world, and most people never learn it: the difference between getting paid once and getting paid forever. When you make a creative work, you usually own a copyright, the legal right to control who copies, sells, or uses it, and that ownership can earn a royalty, a small payment every time your work gets used. A songwriter earns a royalty each time their song is streamed, played on the radio, or used in a movie; an author earns a royalty on each book sold. The crucial point: if you keep your rights, you can keep earning from one piece of work for decades, while selling your rights for a one-time payment can feel great today and cost you enormously later. Realistic example: a young songwriter is offered $5,000 to sign away all rights to a song forever, which feels huge when you are broke, but if that song later gets used in a hit show and would have earned $50,000 in royalties over ten years, the songwriter who sold gets none and the company that bought gets all of it. This has happened to many real artists, especially young ones who did not understand what they signed. The lesson is not "never sell your rights" but "understand what your rights are worth before you trade them away," which is a skill, not an instinct. This is why the boring-looking fine print matters: the contract is where the money actually lives (who owns the work, who gets what percentage, for how long, whether you can get rights back). Careers are made and broken on these details, not talent alone; talented people have been poor from bad contracts, and moderately talented people have done fine by understanding the business. You do not have to become a lawyer, but you do have to learn enough to slow down, ask questions, and get help before you sign.`,
              audioPrompt: `Here is the single most important money idea in the creative world, {name}, and most people never learn it: the difference between getting paid once and getting paid forever. When you make a creative work, you usually own a copyright, the legal right to control who copies, sells, or uses it. That ownership can earn you a royalty, a small payment every time your work gets used. A songwriter earns a royalty each time their song is streamed, played on the radio, or used in a movie. An author earns a royalty on each book sold. The crucial point: if you keep your rights, you can keep earning from one piece of work for decades. A realistic example makes it clear. Imagine a young songwriter is offered five thousand dollars to sign away all rights to a song forever. Five thousand dollars feels huge when you are broke. But if that song later gets used in a hit show and would have earned royalties of fifty thousand dollars over ten years, the songwriter who sold their rights gets none of it; the company that bought them gets all of it. This exact thing has happened to many real artists, especially young ones who did not understand what they were signing. The lesson is not "never sell your rights." It is "understand what your rights are worth before you trade them away." This is also why you should care about the boring-looking fine print. The contract is where the money actually lives. Who owns the work? Who gets what percentage? For how long? Real creative careers are made and broken on these details, not on talent alone.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Long Tail And The Power Law`,
          paragraphs: [
            `Now a pattern that shapes nearly every creative industry, and once you see it you cannot unsee it. In music, film, books, and online video, a tiny number of works earn most of the money, while a huge number of works each earn a little. Picture a chart shaped like a slide that drops steeply and then flattens into a very long, low tail: a few superstars are the tall part on the left, and millions of working creatives are the long flat tail stretching out to the right. This shape has a name, a "power law," and it is not a glitch or unfairness in the usual sense; it is just the natural shape of attention when a few things get shared, recommended, and copied far more than the rest.`,
            `What this means for a real person is important and a little harsh. If you make creative work, the most likely outcome is not the tall superstar part and not total failure; it is somewhere in the long tail, earning something real but modest. That is not a tragedy, it is the normal case, and planning for it is wisdom, not pessimism. The creatives who are happiest and most stable are usually the ones who built a life that works in the long tail, a stack of income, a real audience even if small, control of their rights, rather than the ones who bet everything on becoming the rare superstar and called it failure when they did not.`,
            `The internet changed this shape in a double-edged way. On one hand, it made the tail much longer: almost anyone can now publish a song, a drawing, or a video to the whole world, which is genuinely new and powerful. On the other hand, it made the superstar part even taller, because the same platforms that let everyone publish also push enormous attention toward a tiny few through recommendation systems. So the modern creative world is both more open (you can reach people directly) and more winner-take-most (the top takes a bigger share than ever) at the same time. Holding both of those truths is how you see the real landscape clearly instead of believing either the "anyone can make it" dream or the "it is hopeless" despair.`,
          ],
          image: `/voyager-assets/creative-arts/l07-s3-longtail.webp`,
          imageCaption: `A pattern shaping nearly every creative industry: a tiny number of works earn most of the money, a huge number each earn a little. Picture a chart like a slide that drops steeply then flattens into a long, low tail: a few superstars on the tall left, millions of working creatives in the long flat tail to the right. This shape is a "power law," the natural shape of attention when a few things get shared and recommended far more than the rest. What it means for you: the likely outcome is neither superstar nor total failure but the long tail, earning something real but modest, which is the normal case, and planning for it is wisdom. The internet made the tail much longer (almost anyone can publish to the world) AND the superstar part even taller (recommendation systems push huge attention to a few), so the creative world is both more open and more winner-take-most at once. Hold both truths instead of the "anyone can make it" dream or the "it is hopeless" despair.`,
          vocab: [
            {
              word: `the long tail and the power law`,
              definition: `A pattern that shapes nearly every creative industry: in music, film, books, and online video, a tiny number of works earn most of the money, while a huge number of works each earn a little. Picture a chart shaped like a slide that drops steeply and then flattens into a very long, low tail; a few superstars are the tall part on the left, and millions of working creatives are the long flat tail stretching to the right. This shape is called a "power law," and it is not a glitch or unfairness in the usual sense, just the natural shape of attention when a few things get shared, recommended, and copied far more than the rest. What it means for a real person: if you make creative work, the most likely outcome is not the superstar part and not total failure but somewhere in the long tail, earning something real but modest, which is the normal case, so planning for it is wisdom, not pessimism. The happiest, most stable creatives usually built a life that works in the long tail (a stack of income, a real if small audience, control of their rights) rather than betting everything on becoming the rare superstar and calling it failure when they did not. The internet changed the shape in a double-edged way: it made the tail much longer (almost anyone can now publish to the whole world) and made the superstar part even taller (recommendation systems push enormous attention toward a tiny few). So the modern creative world is both more open and more winner-take-most at the same time, and holding both truths is how you see the real landscape clearly instead of believing the "anyone can make it" dream or the "it is hopeless" despair.`,
              audioPrompt: `Now a pattern that shapes nearly every creative industry, {name}, and once you see it you cannot unsee it. In music, film, books, and online video, a tiny number of works earn most of the money, while a huge number of works each earn a little. Picture a chart shaped like a slide that drops steeply and then flattens into a very long, low tail: a few superstars are the tall part on the left, and millions of working creatives are the long flat tail stretching out to the right. This shape has a name, a power law, and it is not a glitch; it is the natural shape of attention when a few things get shared and recommended far more than the rest. What this means for a real person is important and a little harsh. If you make creative work, the most likely outcome is not the superstar part and not total failure; it is somewhere in the long tail, earning something real but modest. That is not a tragedy, it is the normal case, and planning for it is wisdom, not pessimism. The internet changed this shape in a double-edged way. It made the tail much longer: almost anyone can now publish a song, a drawing, or a video to the whole world. But it also made the superstar part even taller, because the same platforms push enormous attention toward a tiny few. So the modern creative world is both more open and more winner-take-most at the same time. Holding both of those truths is how you see the real landscape clearly.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `"Exposure," Value, And Getting Paid`,
          paragraphs: [
            `Now a trap you will personally face, maybe soon. When you are young and skilled, people will ask you to make creative work "for exposure" instead of money, promising that the attention will be worth more than payment. Sometimes that is true; a real chance to be seen by the right audience can genuinely launch a career. But very often "exposure" is a way to get valuable work for free from someone who does not yet know what their work is worth. The honest test is simple: would the person asking you to work for exposure also ask their plumber or their dentist to work for exposure? If not, they know your work has real value and are hoping you do not.`,
            `This connects to a deeper idea: creative work is real work, and real work has value even when it does not feel like "a job." It took years to build the skill that lets you draw, play, write, or edit well, and that skill is worth something, the same way a carpenter's or an electrician's skill is worth something. Many creative people, especially kind ones and young ones, undervalue their own work because making it feels like play, or because they are grateful to be asked. Learning to say "I would love to, and here is what I charge" without apology is one of the most practical and protective skills in this entire lesson.`,
            `None of this means money is the point of art, and it is worth saying that plainly. People make creative work for meaning, joy, connection, and beauty, and those reasons are real and good. The point of understanding the economics is not to turn art into a business in your heart; it is to make sure that when you do create, you are not taken advantage of, you can keep doing the work you love, and you can support yourself while you do it. Knowing how the money works is what lets you protect the part that is not about money. That is the quiet reason this whole lesson matters.`,
          ],
          image: `/voyager-assets/creative-arts/l07-s4-exposure.webp`,
          imageCaption: `A trap you will face, maybe soon: when you are young and skilled, people will ask you to work "for exposure" instead of money. Sometimes real (a true chance to be seen can launch a career), but often a way to get valuable work free from someone who does not yet know their worth. Honest test: would they ask their plumber or dentist to work for exposure? If not, they know your work has value and hope you do not. Deeper idea: creative work is real work with real value even when it feels like play; the skill took years, like a carpenter's or electrician's. Kind and young people often undervalue their work because making it feels like play or because they are grateful to be asked. Learning to say "I would love to, and here is what I charge" without apology is deeply protective. And: money is not the point of art (meaning, joy, connection, beauty are real reasons); understanding the economics is how you avoid being taken advantage of and keep doing the work you love.`,
          vocab: [
            {
              word: `"exposure," the value of creative work, and getting paid`,
              definition: `A trap you will personally face, maybe soon: when you are young and skilled, people will ask you to make creative work "for exposure" instead of money, promising the attention will be worth more than payment. Sometimes that is true, since a real chance to be seen by the right audience can genuinely launch a career, but very often "exposure" is a way to get valuable work for free from someone who does not yet know what their work is worth. The honest test: would the person asking you to work for exposure also ask their plumber or dentist to work for exposure? If not, they know your work has real value and are hoping you do not. This connects to a deeper idea: creative work is real work, and real work has value even when it does not feel like "a job," because it took years to build the skill that lets you draw, play, write, or edit well, the same way a carpenter's or electrician's skill is worth something. Many creative people, especially kind ones and young ones, undervalue their own work because making it feels like play or because they are grateful to be asked, so learning to say "I would love to, and here is what I charge" without apology is one of the most practical and protective skills in this lesson. None of this means money is the point of art: people make creative work for meaning, joy, connection, and beauty, and those reasons are real and good. The point of understanding the economics is not to turn art into a business in your heart; it is to make sure that when you create, you are not taken advantage of, you can keep doing the work you love, and you can support yourself while you do it. Knowing how the money works is what lets you protect the part that is not about money.`,
              audioPrompt: `Now a trap you will personally face, {name}, maybe soon. When you are young and skilled, people will ask you to make creative work "for exposure" instead of money, promising that the attention will be worth more than payment. Sometimes that is true; a real chance to be seen by the right audience can genuinely launch a career. But very often exposure is a way to get valuable work for free from someone who does not yet know what their work is worth. The honest test is simple: would the person asking you to work for exposure also ask their plumber or their dentist to work for exposure? If not, they know your work has real value and are hoping you do not. This connects to a deeper idea: creative work is real work, and real work has value even when it does not feel like a job. It took years to build the skill that lets you draw, play, write, or edit well, and that skill is worth something, the same way a carpenter's or electrician's skill is worth something. Many creative people, especially kind ones and young ones, undervalue their own work because making it feels like play. Learning to say "I would love to, and here is what I charge" without apology is one of the most protective skills in this entire lesson. None of this means money is the point of art. People make creative work for meaning, joy, connection, and beauty, and those reasons are real and good. Knowing how the money works is what lets you protect the part that is not about money.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before the case studies. You learned that most working creatives stack several small income streams rather than living off one big source, and you saw the shocking streaming math that explains why live shows, merch, and teaching matter so much. You learned the most important money idea, the difference between getting paid once and getting paid forever, and why keeping your rights and reading the fine print protects you. You learned the long-tail power law that shapes the whole industry, and why planning for the long tail is wisdom, not failure. And you learned the "exposure" trap and the deeper truth that creative work is real work with real value.`,
            `Now the case-study screen will hand you several realistic situations a young creative might actually face, an offer to buy your rights, a request to work for exposure, a choice between income streams, a streaming-versus-touring decision, and ask you to work out what is actually happening with the money and what the smart, self-protecting move would be. This is not abstract; these are the exact situations you may face within a few years if you make anything people want.`,
            `One last thought to hold the whole lesson in place. Understanding the business of art is not the opposite of loving art; it is how you get to keep loving it for a lifetime instead of burning out, going broke, or being taken advantage of and quitting. The most romantic thing you can do for the creative work you care about is to understand the unromantic parts well enough to protect it. That is the gift this lesson is trying to hand you. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l07-s5-before.webp`,
          imageCaption: `Threads together. Most working creatives stack several small income streams, not one big source; the streaming math (very little per play) explains why live shows, merch, and teaching matter. The key idea: paid once vs. paid forever, and why keeping your rights and reading the fine print protects you. The long-tail power law shapes the whole industry; planning for the long tail is wisdom, not failure. The "exposure" trap, and the truth that creative work is real work with real value. The case-study screen ahead hands you realistic situations a young creative faces (an offer to buy your rights, a request to work for exposure, an income-stream choice, streaming vs. touring) to work out what is happening with the money and the smart, self-protecting move. Last thought: understanding the business of art is how you keep loving it for a lifetime instead of burning out or being taken advantage of.`,
          vocab: [
            {
              word: `protecting the art by understanding the business`,
              definition: `The synthesis before the case studies. You learned that most working creatives stack several small income streams rather than living off one big source, and you saw the streaming math (very roughly a third to half a cent per play) that explains why live shows, merchandise, and teaching matter so much. You learned the most important money idea, the difference between getting paid once and getting paid forever, and why keeping your rights and reading the fine print protects you (a young songwriter who sells a song for $5,000 can lose far more in future royalties). You learned the long-tail power law that shapes the whole industry (a few superstars, a huge long tail of working creatives), and why planning for the long tail is wisdom, not failure, especially since the internet made the tail longer and the superstar peak taller at once. And you learned the "exposure" trap (test: would they ask their plumber to work for exposure?) and the deeper truth that creative work is real work with real value. The case-study screen will hand you realistic situations a young creative might actually face, an offer to buy your rights, a request to work for exposure, a choice between income streams, a streaming-versus-touring decision, and ask you to work out what is actually happening with the money and what the smart, self-protecting move would be. The last thought to hold the lesson in place: understanding the business of art is not the opposite of loving art; it is how you get to keep loving it for a lifetime instead of burning out, going broke, or being taken advantage of and quitting. The most romantic thing you can do for work you care about is to understand the unromantic parts well enough to protect it.`,
              audioPrompt: `Pull it together before the case studies, {name}. You learned that most working creatives stack several small income streams rather than living off one big source, and you saw the shocking streaming math that explains why live shows, merch, and teaching matter so much. You learned the most important money idea, the difference between getting paid once and getting paid forever, and why keeping your rights and reading the fine print protects you. You learned the long-tail power law that shapes the whole industry, and why planning for the long tail is wisdom, not failure. And you learned the exposure trap and the deeper truth that creative work is real work with real value. Now the case-study screen will hand you several realistic situations a young creative might actually face, an offer to buy your rights, a request to work for exposure, a choice between income streams, a streaming-versus-touring decision, and ask you to work out what is actually happening with the money and what the smart, self-protecting move would be. One last thought. Understanding the business of art is not the opposite of loving art; it is how you get to keep loving it for a lifetime instead of burning out, going broke, or being taken advantage of and quitting. The most romantic thing you can do for the creative work you care about is to understand the unromantic parts well enough to protect it.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l07-case-study`,
          type: `case-study`,
          headline: `Five Money Situations A Young Creative Faces`,
          intro: `{name}, five realistic situations. For each, work out what is actually happening with the money, where the trap or opportunity is, and what the smart, self-protecting move would be. There is not always one perfect answer, but there are clearly wiser and less wise moves, and you now have the tools to tell them apart.`,
          cases: [
            {
              id: `c1`,
              title: `The "buy your rights forever" offer`,
              type: `Rights and royalties`,
              description: `You are 16 and you wrote a song that is getting attention online. A small company offers you $5,000 right now to buy all the rights to the song forever. You are broke, $5,000 feels enormous, and they are pressuring you to sign today before the offer "disappears."`,
              questions: [
                `What are you actually giving up if you sign?`,
                `Why is the pressure to "sign today" itself a warning sign?`,
                `What is the smart move, even if you might still sell eventually?`,
              ],
              evaluation: `The trap: you are giving up not $5,000 worth of value but every future dollar the song could ever earn, which, if it gets used in shows, ads, or films, could be far more than $5,000 over the years. The "sign today or lose it" pressure is itself the warning sign; a fair deal does not usually require you to skip thinking and skip advice. The smart move is almost never to sign on the spot: slow down, say you need time to review it, and get an adult you trust or, ideally, someone who knows contracts to look at it. This is not "never sell." It is refusing to trade away something whose value you have not figured out, under pressure designed to stop you from figuring it out. Keeping your rights, or selling only some of them for a fair share of future earnings, usually beats a one-time buyout for a young creator.`,
            },
            {
              id: `c2`,
              title: `"Do it for exposure"`,
              type: `Valuing your work`,
              description: `A popular brand with a big following asks you to make them a full set of illustrations for free, in exchange for "exposure" to their large audience. They imply you should be grateful for the opportunity and that real payment is not really on the table.`,
              questions: [
                `Apply the honest test: would they ask their plumber to work for exposure?`,
                `When might exposure genuinely be worth it, and when is it a trap?`,
                `How could you respond in a way that protects your value without burning the bridge?`,
              ],
              evaluation: `Run the test: a big brand with money would not ask their plumber or their lawyer to work for free "for exposure," so the fact that they are asking you signals they know your work has value and hope you do not. Exposure can occasionally be genuinely worth it, a real, specific audience that could launch you, a cause you believe in, something you would have made anyway, but a profitable brand getting a full set of professional illustrations for free is usually the trap version. A bridge-protecting response: warm, clear, and unapologetic, something like "I would love to work with you; here is my rate for a project this size, and I am also open to discussing a smaller scope that fits your budget." That keeps the relationship, names your value, and refuses the free-work framing. Learning to say that without apology is the real skill.`,
            },
            {
              id: `c3`,
              title: `Streaming numbers vs. a real living`,
              type: `Income streams`,
              description: `Your band's song hits one million streams. Everyone congratulates you like you are rich now. You check the actual payment and it is a few thousand dollars, split among four band members and after the label's share. Meanwhile a single weekend of live shows and merch sales earned more than the streams did.`,
              questions: [
                `Why does a million streams earn so little, and split how?`,
                `What does this tell you about where a music living actually comes from?`,
                `What would a smart band do with this information?`,
              ],
              evaluation: `A million streams sounds like fame but earns little because streaming pays very roughly a third to half a cent per play, and that small total is then split among songwriter, performers, and the label, so four band members after a label share might each see very little. The real lesson: for almost all working musicians, streaming is promotion and a small income stream, not the main living, the living comes from live shows, merchandise, licensing, teaching, and a direct relationship with fans. A smart band uses streaming numbers as proof of an audience to book more shows, sell more merch, and build a mailing list or fan community they actually control, rather than waiting for streaming money that will never be the main event. This is the stacking logic in action: no single stream-of-income is the whole answer.`,
            },
            {
              id: `c4`,
              title: `Two paths for the same skill`,
              type: `Career strategy / the long tail`,
              description: `You are a talented young animator. One classmate says you should bet everything on becoming a famous YouTuber or studio star, because that is where the big money is. Another says that is a lottery ticket and you should build steady freelance and commercial work instead. You feel like choosing the steady path means admitting you will not be a star.`,
              questions: [
                `How does the long-tail power law apply to this choice?`,
                `Is "steady work" really "admitting failure," or is that a misread?`,
                `What would a wise path actually look like, given the real odds?`,
              ],
              evaluation: `The long-tail power law is the key: a tiny number of animators become famous stars (the tall part of the curve) and a huge number make a real living in the long tail through freelance and commercial work. Betting everything on stardom is, statistically, buying a lottery ticket, exciting but very unlikely to pay. Calling steady work "admitting failure" is the misread the lesson warns against; the long tail is the normal, non-failure outcome where most happy, stable creatives actually live. A wise path is usually a blend: build the steady, skill-based income that pays your bills and keeps you making work, while taking real (not all-or-nothing) shots at bigger things on the side. That way you are not crushed if stardom never comes, and you are still in the game if it does. Planning for the long tail is wisdom, not pessimism.`,
            },
            {
              id: `c5`,
              title: `The contract you do not understand`,
              type: `The fine print`,
              description: `A label offers your band a deal. The contract is long and full of words you do not understand. Someone says "just sign it, it is a standard contract, everybody signs these." The advance money they are offering would solve real problems right now.`,
              questions: [
                `Why is "everybody signs these, just sign it" a warning sign?`,
                `What specific things should you want to understand before signing?`,
                `What is the responsible move, even when the money is tempting?`,
              ],
              evaluation: `"Just sign it, everybody does" is a classic pressure move, and the truth from the lesson is that careers are made and broken on exactly the fine print you are being told to ignore. Before signing you should want to understand the core money questions: who owns the work, who gets what percentage, for how long, whether you can ever get your rights back, and what you are actually promising in return for the advance (advances are usually loans against your future earnings, not free money). The responsible move, even when the money would solve real problems, is to slow down and get someone who understands contracts to read it with you before you sign, a music lawyer, an experienced mentor, an arts organization that helps young creators. You do not have to become a lawyer, but signing something you do not understand because you were told to hurry is exactly how talented people end up trapped in bad deals. Slowing down is not weakness; it is the skill.`,
            },
          ],
          synthesisPrompt: `After working through all five situations: what is the single most important money rule you will carry with you if you ever make creative work people want? Where were you most tempted to make the unwise move, and what tool from this lesson pulled you back? In 5-6 sentences.`,
          reflectionPrompt: `Notice how many of these traps work through pressure and gratitude, "sign today," "be grateful for the exposure," "everybody signs these." Where else in life do pressure and gratitude get used to stop you from thinking clearly about your own value?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How do most working creatives actually make a living?`,
              options: [
                `Random`,
                `Most working creatives do not make their living from one big source; they stack several small ones, often called "multiple income streams." A working musician you have never heard of might combine a little streaming income, plus live shows, plus teaching lessons, plus selling merchandise like t-shirts, plus licensing a song to a commercial, plus a part-time job; no single piece is large, but together they add up to a living. The same logic runs through every field: illustrators combine commissions, prints, workshops, and book deals; writers combine royalties, freelance articles, teaching, and speaking fees. This "stacking" is the normal shape of a creative career, not a sign of failure, and knowing it protects you from the false belief that you either become famous or you fail. The romantic image of an artist who only makes pure art while money somehow appears is, for almost everyone, a myth.`,
                `Just one big hit`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Working creatives stack multiple small income streams; that is the normal, non-failure shape of a career. The "one big source" or "famous or failed" picture is a myth.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does a song with a million streams earn its creators so little?`,
              options: [
                `Random`,
                `Music streaming pays the artist very little per play, in the rough neighborhood of a third of a cent to half a cent per stream (the exact rate shifts). That means a song needs very roughly two hundred thousand to three hundred thousand plays just to earn a few hundred dollars, and that small total is then often split among the songwriter, the performer, the record label, and others. So a song with a million streams, which sounds like fame, might earn its creators only a few thousand dollars, divided several ways. This is exactly why live shows, merchandise, licensing, and teaching matter so much for working musicians: streaming functions more as promotion and a small income stream than as the main living. The streaming number alone explains a huge amount about how modern music careers really work, and why "going viral" rarely means "getting rich."`,
                `Just bad luck`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Streaming pays a fraction of a cent per play and is then split several ways, so even a million streams yields only a few thousand dollars. That is why live shows, merch, and teaching carry the real income.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the difference between getting paid once and getting paid forever, and why does it matter?`,
              options: [
                `Random`,
                `When you make a creative work you usually own a copyright, the legal right to control who copies, sells, or uses it, and that ownership can earn a royalty, a small payment every time your work gets used (a songwriter earns each time their song is streamed, played, or used in a movie; an author earns on each book sold). If you keep your rights, you can keep earning from one piece of work for decades; if you sell your rights for a one-time payment, you can lose enormously later. The classic example: a young songwriter offered $5,000 to sign away a song forever takes it because $5,000 feels huge, but if the song later earns $50,000 in royalties over ten years, the seller gets none and the buyer gets all of it. The lesson is not "never sell your rights" but "understand what your rights are worth before you trade them away," which is a learnable skill, not an instinct.`,
                `Just sell it`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Keeping your rights lets you earn royalties from one work for years; a one-time buyout can cost you far more later. The skill is knowing what your rights are worth before trading them.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the "long tail" / power law, and what does it mean for someone making creative work?`,
              options: [
                `Random`,
                `In nearly every creative industry, a tiny number of works earn most of the money while a huge number of works each earn a little. Picture a chart shaped like a slide that drops steeply and then flattens into a very long, low tail: a few superstars are the tall part, and millions of working creatives are the long flat tail. This shape is called a power law, the natural shape of attention when a few things get shared and recommended far more than the rest. For a real person, the most likely outcome is not the superstar part and not total failure but somewhere in the long tail, earning something real but modest, which is the normal case, so planning for it is wisdom, not pessimism. The internet made the tail longer (anyone can publish to the world) and the superstar peak taller (recommendation systems push attention to a few) at the same time, making the creative world both more open and more winner-take-most.`,
                `Just luck`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A power law means a few works take most of the money and a long tail of creators each earns a little. The likely, normal outcome is the long tail, so planning for it is wisdom, not failure.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the honest test for whether working "for exposure" is a trap?`,
              options: [
                `Random`,
                `The honest test is to ask whether the person requesting free work "for exposure" would also ask their plumber, dentist, or lawyer to work for exposure. If a profitable brand or person would never ask those professionals to work for free, then their asking you signals that they know your creative work has real value and are hoping you do not. Exposure can occasionally be genuinely worth it, a real, specific audience that could launch you, a cause you believe in, work you would have made anyway, but a profitable party getting valuable professional work for free is usually the trap version. The deeper point is that creative work is real work with real value, because the skill took years to build, just like a tradesperson's skill, and learning to say "I would love to, and here is what I charge" without apology is one of the most practical, protective skills in the lesson.`,
                `Just say yes`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Ask whether they would make their plumber or dentist work for exposure. If not, they know your work has value and hope you do not. Creative work is real work; name your value without apology.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the fine print of a contract matter as much as talent?`,
              options: [
                `Random`,
                `Because the contract is where the money actually lives: who owns the work, who gets what percentage, for how long, and whether you can ever get your rights back. Real creative careers are made and broken on these details, not on talent alone, and plenty of hugely talented people have ended up poor because they signed bad contracts while moderately talented people did fine because they understood the business. You do not have to become a lawyer, but you do have to learn enough to know when to slow down, ask questions, and get help before you sign. Warning signs include pressure to sign immediately ("sign today before it disappears") and reassurances that stop you thinking ("everybody signs these, just sign it"), both of which are designed to keep you from understanding what you are agreeing to. Slowing down to understand a contract is a skill, not weakness.`,
                `Just read fast`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The contract is where the money lives; careers turn on who owns what, for how long, and at what percentage. Pressure to sign fast or "everybody signs these" are warning signs to slow down.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How did the internet change the shape of the creative economy, and why is it "double-edged"?`,
              options: [
                `Random`,
                `The internet changed the long-tail shape in two opposite directions at once. On one hand, it made the tail much longer: almost anyone can now publish a song, drawing, or video to the whole world directly, without needing a label, gallery, or publisher to let them in, which is genuinely new and powerful. On the other hand, it made the superstar part even taller, because the same platforms that let everyone publish also push enormous attention toward a tiny few through recommendation systems that amplify what is already popular. So the modern creative world is simultaneously more open (you can reach people directly and build your own audience) and more winner-take-most (the very top takes a bigger share of attention and money than ever before). Holding both truths at once is how you see the real landscape clearly, instead of believing either the "anyone can make it" dream or the "it is hopeless" despair, both of which are half-truths.`,
                `Just made it easy`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The internet made the tail longer (anyone can publish) and the superstar peak taller (recommendation amplifies a few) at once, so the world is both more open and more winner-take-most. Both halves are true.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does understanding the economics of art matter if money is not the point of art?`,
              options: [
                `Random`,
                `Because understanding the business is what lets you protect the part that is not about money. People make creative work for meaning, joy, connection, and beauty, and those reasons are real and good; understanding the economics is not about turning art into a business in your heart. It is about making sure that when you create, you are not taken advantage of, that you can keep doing the work you love instead of burning out or going broke, and that you can support yourself while you do it. Talented people quit creative work all the time, not because they ran out of talent, but because they were exploited, signed bad deals, worked for free until they could not afford to continue, or never learned that their work had value. Knowing how the money works is the unromantic skill that protects the romantic thing. In that sense, learning the business is one of the most caring things you can do for the art you love.`,
                `Just for money`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Understanding the money protects the part that is not about money: it keeps you from being exploited, burning out, or going broke, so you can keep making the work you love. The unromantic skill protects the romantic thing.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If you choose steady freelance and commercial creative work instead of betting everything on becoming a famous star, you are admitting you failed as an artist.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important reframes in the lesson. The long-tail power law shows that in any creative field a tiny number become famous stars (the tall part of the curve) while a huge number of genuinely successful, working creatives make their living in the long tail through steady freelance, commercial, and stacked income. The long tail is not where failures end up; it is where the normal, stable, often happiest creative lives actually happen. Betting everything on stardom is statistically like buying a lottery ticket: thrilling, but very unlikely to pay, and treating "I did not become a superstar" as "I failed" is exactly the misread that makes people miserable or makes them quit. The wise path is usually a blend, building steady skill-based income that pays the bills and keeps you making work, while still taking real, non-all-or-nothing shots at bigger things. Choosing a sustainable creative life is not a consolation prize; for almost everyone, it is the actual success, and planning for it is wisdom rather than a confession of failure.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 15 and genuinely talented at making music. A person who says they are a "manager" messages you: they will make you a star, but you have to sign a contract today giving them 50% of everything you ever earn, forever, and pay them a $2,000 "starter fee" up front. They say real artists move fast and that hesitating means you are not serious. Using this whole lesson, what do you actually think and do?`,
              options: [
                `"Just sign up"`,
                `Several moves, held together, because almost every warning sign from this lesson is present at once and recognizing them is the whole point. First, name the pressure for what it is: "sign today," "real artists move fast," "hesitating means you are not serious" are textbook pressure tactics designed to stop you from thinking, and the lesson was explicit that a fair deal does not usually require you to skip thinking and skip advice. The urgency itself is the red flag, not a reason to hurry. Second, look at the actual numbers, because they are alarming. Fifty percent of everything you ever earn, forever, is an enormous share, far beyond what legitimate managers typically take, and "forever" means it does not end even if you stop working with them. Combined with the fact that they want money from you (a $2,000 "starter fee") rather than earning their share by actually getting you work, this has the shape of a scam: real managers generally make money when you make money, they do not charge desperate young artists up-front fees. Money flowing from you to them, up front, is one of the clearest warning signs of all. Third, apply the rights-and-royalties idea: signing away a huge permanent cut of all future earnings is exactly the "getting paid once versus getting paid forever" trap turned against you, except here you are giving away the forever part of your own work to someone who has done nothing yet. Fourth, apply the fine-print rule: you would never sign a long contract you do not fully understand, and you certainly would not sign one under pressure, without an adult you trust and ideally someone who knows contracts reading it with you first. Fifth, decide what to actually do, calmly: do not sign anything, do not pay the fee, do not be rushed; say something like "I do not sign anything the same day, and I do not pay up-front fees; if this is a real opportunity it will still be real after I have had someone I trust review it." A genuine professional will respect that; a scammer will push harder or vanish, and either way you will have learned what you needed to know. Sixth, tell a trusted adult about the offer regardless, both because you may need help evaluating it and because people who target young creators with high-pressure, pay-me-first deals are often targeting others too. The deepest takeaway is the one this whole lesson was built to give you: your talent and your future earnings have real value, people will try to take that value using pressure and flattery, and the single most protective thing you can do is refuse to be rushed, understand what you are signing, and never pay someone for the privilege of taking half of everything you will ever make. Slowing down here is not being unserious; it is the exact skill that protects a creative life.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied creative-economy self-protection. Every warning sign is present: pressure to sign immediately, an enormous permanent cut (50% forever), and money flowing from the artist to the "manager" (a red flag, since real managers earn when you earn). The move is to refuse to be rushed, never pay an up-front fee, get a trusted adult and ideally someone who knows contracts to review it, and recognize that slowing down is the skill, not a sign of being unserious.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you imagine creative success as one big break, or did you picture the real stacking of many small income streams? What surprised you most, the streaming math, the rights idea, the long tail? Why that one?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `Royalties, rights, advances, contracts, which of these still feels fuzzy? What is one specific thing you would want to understand better before you ever signed anything about your own creative work?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who can love creative work AND protect themselves in the business of it. Does holding both feel possible to you, or do they feel opposed? Where do you notice yourself wanting to ignore the money part?` },
            { id: `reflect-value`, category: `Valuing your work`, prompt: `Have you ever made something good and then undervalued it, given it away, downplayed it, felt weird charging for it, because making it felt like play or because you were grateful to be asked? What would it take to say "here is what I charge" without apology?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `Pressure and gratitude get used to stop people thinking clearly about their own value, far beyond art. Where in your life right now might someone be using "hurry" or "be grateful" to get something from you cheaply? How would you slow it down?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "thinking about money ruins art; real artists just create and do not worry about business." State the strongest version of that view. Where is it partly right, and where does this lesson show it can hurt the very artists it is trying to protect?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the most directly practical lesson in the band. Two paths to make it real.`,
          familyActivity: {
            title: `Trace The Money On One Thing You Love`,
            duration: `45 minutes`,
            description: `Pick one creative thing your family loves, a favorite musician, author, illustrator, or filmmaker, and trace how the money actually works for them, together. Look up (with a parent helping) how that kind of creator typically earns: for a musician, how much comes from streaming versus touring versus merch; for an author, how book royalties work; for a filmmaker, the difference between commercial work and passion projects. Talk about the surprises. Then make it personal: does anyone in your family make or sell creative or skilled work, art, music, writing, crafts, a trade? Ask them how they actually price it and whether they have ever been asked to work "for exposure" or undervalued their own work. First-hand stories from people you know land harder than any number. The goal is to replace the vague "artists are either rich or starving" picture with a real, concrete understanding of how creative livings are actually built.`,
          },
          projectOption: {
            title: `Price Your Own Work, 1 week (optional)`,
            duration: `1 week, ~30 minutes per session`,
            description: `Practice valuing your own creative work before anyone pressures you to undervalue it. Pick something you can actually make: a custom drawing, a song, a short piece of writing, an edited video, a craft. Day 1-2: figure out what it really takes, how long it takes you, the skill that took years to build, any materials or costs. Day 3-4: research what other people charge for similar work (with a parent's help), and decide a fair price for your work, writing down why. Day 5: practice, out loud or with a family member, saying "I would love to make that for you. Here is what I charge," without apologizing, shrinking, or over-explaining. Then write a short reflection: what was hard about naming a price? Where did you feel the urge to undervalue yourself, and what does that tell you? You are not required to ever sell anything; the project is about building the protective muscle of knowing your work has value, before the real "do it for exposure" message arrives.`,
            offerToParent: `Parent: opt your child into the pricing project. Learning to value their own work and name a fair price without apology is one of the most protective real-world skills a creative young person can build, and practicing it now, before the first lowball or "exposure" offer arrives, means they meet that moment prepared instead of caught off guard.`,
          },
          identityQuestion: `If you become someone who can love creative work with your whole heart AND understand the money well enough to protect yourself, keep your rights, name your value, and never get rushed into a bad deal, what does that let you do across a whole creative lifetime that a brilliant but business-blind artist cannot?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows my creative work is real work with real value.`,
            `A person who never gets rushed into signing something I do not understand.`,
            `Someone who can love making things and still protect myself in the business of it.`,
          ],
          saveKey: `identity_responses_ca_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seven down. You pulled back the curtain on the part most romantic stories about art leave out: the money. You know that most working creatives stack several small income streams rather than living off one big source, and you know the streaming math, a fraction of a cent per play, split several ways, that explains why live shows, merch, and teaching matter so much. You learned the most important money idea in the whole creative world, the difference between getting paid once and getting paid forever, and why keeping your rights and reading the fine print protects you from the $5,000-now, $50,000-lost trap. You understand the long-tail power law and why planning for the long tail is wisdom, not failure, and why the internet made the world both more open and more winner-take-most at once. You can spot the "exposure" trap with the plumber test, and you know that creative work is real work with real value. Above all, you learned the quiet truth: understanding the unromantic business of art is how you protect the romantic part, so you can keep loving the work for a lifetime instead of burning out or being taken advantage of. Next: building a creative career, where all of this becomes a practical plan you can actually use. Onward, {name}. — Muse`,
          badge: `creative-economy-literate`,
          badgeName: `Creative Economy Literate`,
          xpEarned: 75,
          competencies: [
            `Explains that working creatives stack multiple small income streams, and that this is the normal shape of a career, not failure`,
            `Knows the streaming-pay reality (a fraction of a cent per play, split several ways) and why live shows, merch, and teaching carry the income`,
            `Articulates the difference between getting paid once and getting paid forever (copyright and royalties) and why keeping rights protects you`,
            `Understands the long-tail power law and why planning for the long tail is wisdom rather than admitting failure`,
            `Explains how the internet made the creative economy both more open and more winner-take-most`,
            `Identifies the "exposure" trap with the plumber/dentist test and can name their value without apology`,
            `Recognizes contract and pressure warning signs ("sign today," "everybody signs these," up-front fees) and knows to slow down and get help`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Intellectual Property and Copyright`,
            hook: `The rules that decide who owns an idea, a song, a logo, or a style. The law behind the money. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L07 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
