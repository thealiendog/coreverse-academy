// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L09 — Building a Creative Career
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Creative Careers, Portfolio, Practice, Resilience
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: CASE STUDY (real career-decision scenarios a young creative
// faces). Contract matches L04/L07: cases[] with title/type/description/questions[]/
// evaluation; synthesisPrompt + reflectionPrompt.
// Builds directly on L07 (economics) and L08 (rights). Practical, grounded, honest
// about odds without being discouraging.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l09-v1";

const CREATIVE_ARTS_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-09`,
      title: `Building a Creative Career`,
      duration: 35,
      xpReward: 75,
      badge: `creative-career-literate`,
      badgeName: `Creative Career Literate`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, you have learned the money (Lesson 7) and the rights (Lesson 8). Now the question that ties them together: how does a person actually build a creative life on purpose, instead of just hoping? There is a myth that creative careers happen by being "discovered," that you make beautiful work in your room and one day someone famous knocks on your door. That almost never happens. Real creative careers are built, deliberately, through skill, a body of work, real relationships, and stubborn persistence through a lot of rejection. The good news is that "built" means buildable: it is a set of habits and choices, not a magic gift you either have or do not. Today you learn the actual building blocks, how skill really grows, what a portfolio is for, why relationships beat luck, and how to survive rejection without quitting. This is the lesson that turns "I love making things" into "I could actually do this." Onward.`,
          headline: `Building a Creative Career`,
          subtitle: `How a creative life is built, not discovered. Case Study.`,
          visual: `/voyager-assets/creative-arts/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Skill Is Built, Not Born`,
          paragraphs: [
            `Start with the most freeing idea in this whole lesson: real skill is built through deliberate practice, not handed out at birth. There is a popular myth of the "natural," the person who can just draw, sing, or write because they were born that way. But when researchers study people who become genuinely excellent at a craft, what they find again and again is years of focused, effortful practice, not magic. The violinist, the animator, the novelist you admire almost certainly spent thousands of hours practicing, much of it on the unglamorous parts, before they made anything that looked effortless. The "effortless" look is what thousands of hours of effort produces.`,
            `But not all practice is equal, and this is the part most people miss. Just doing something a lot is not the same as getting better at it. The kind of practice that actually builds skill is "deliberate practice": working at the edge of what you can do, on the specific things you are not yet good at, with honest feedback about what went wrong, and then doing it again. Drawing the same easy thing you already draw well a hundred times builds very little; drawing the hard thing you keep getting wrong, noticing exactly why, and trying again builds a lot. Comfortable repetition feels productive but mostly is not. Uncomfortable, focused, feedback-driven effort is where the growth actually lives.`,
            `This matters enormously for how you think about yourself. If skill were a gift, then struggling would mean you "do not have it" and should quit. But if skill is built through deliberate practice, then struggling is not a sign you lack talent, it is literally the process of getting better, the feeling of working at your edge. The people who become excellent are usually not the ones who found it easy; they are the ones who kept practicing through the part that felt hard and clumsy, because they understood that the clumsy part is the building part. Believing skill is built, not born, is what lets you keep going long enough to actually become good.`,
          ],
          image: `/voyager-assets/creative-arts/l09-s1-skill.webp`,
          imageCaption: `The most freeing idea: real skill is built through deliberate practice, not handed out at birth. The myth of the "natural" who can just draw, sing, or write is mostly false; researchers studying genuinely excellent people find years of focused, effortful practice, often on the unglamorous parts. The "effortless" look is what thousands of hours of effort produces. But not all practice is equal: just doing a lot is not the same as improving. "Deliberate practice" means working at the edge of what you can do, on the specific things you are not yet good at, with honest feedback, then repeating. Drawing the easy thing 100 times builds little; drawing the hard thing you keep getting wrong, seeing why, and retrying builds a lot. Why it matters for you: if skill were a gift, struggling means "you don't have it"; if skill is built, struggling IS the process of getting better. The excellent kept going through the clumsy part.`,
          vocab: [
            {
              word: `deliberate practice and the myth of the "natural"`,
              definition: `The most freeing idea in building a creative career: real skill is built through deliberate practice, not handed out at birth. There is a popular myth of the "natural," the person who can just draw, sing, or write because they were born that way, but when researchers study people who become genuinely excellent at a craft, they find again and again years of focused, effortful practice, not magic; the violinist, animator, or novelist you admire almost certainly spent thousands of hours practicing, much of it on the unglamorous parts, before making anything that looked effortless. The "effortless" look is what thousands of hours of effort produces. Not all practice is equal: just doing something a lot is not the same as getting better at it. "Deliberate practice" is the kind that actually builds skill, working at the edge of what you can do, on the specific things you are not yet good at, with honest feedback about what went wrong, then doing it again. Drawing the same easy thing you already draw well a hundred times builds little; drawing the hard thing you keep getting wrong, noticing exactly why, and trying again builds a lot. Comfortable repetition feels productive but mostly is not; uncomfortable, focused, feedback-driven effort is where growth lives. Why it matters for how you see yourself: if skill were a gift, then struggling would mean you "do not have it" and should quit; but if skill is built, struggling is not a sign you lack talent, it is literally the process of getting better, the feeling of working at your edge. The people who become excellent are usually the ones who kept practicing through the clumsy part, because they understood the clumsy part is the building part.`,
              audioPrompt: `Start with the most freeing idea in this whole lesson, {name}: real skill is built through deliberate practice, not handed out at birth. There is a popular myth of the "natural," the person who can just draw, sing, or write because they were born that way. But when researchers study people who become genuinely excellent at a craft, what they find again and again is years of focused, effortful practice, not magic. The violinist, the animator, the novelist you admire almost certainly spent thousands of hours practicing, much of it on the unglamorous parts, before they made anything that looked effortless. The effortless look is what thousands of hours of effort produces. But not all practice is equal. Just doing something a lot is not the same as getting better at it. The kind of practice that actually builds skill is deliberate practice: working at the edge of what you can do, on the specific things you are not yet good at, with honest feedback about what went wrong, and then doing it again. Drawing the same easy thing you already draw well a hundred times builds very little; drawing the hard thing you keep getting wrong, noticing exactly why, and trying again builds a lot. This matters for how you think about yourself. If skill were a gift, then struggling would mean you do not have it and should quit. But if skill is built through deliberate practice, then struggling is not a sign you lack talent, it is literally the process of getting better. The people who become excellent are the ones who kept practicing through the part that felt hard and clumsy, because they understood that the clumsy part is the building part.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Portfolio: Proof Over Promises`,
          paragraphs: [
            `Here is a hard truth that is also a relief once you understand it: in creative fields, your work matters far more than your words. Nobody hiring an illustrator, booking a musician, or commissioning a designer cares much about a résumé full of claims; they want to see what you have actually made. The collection of your best work is called a "portfolio," and it is the single most important thing you build in a creative career. A portfolio is proof, not promises. It says "here is what I can actually do," which is worth more than any amount of "trust me, I am talented."`,
            `This changes what you should spend your energy on, especially when you are young. Instead of waiting for permission, credentials, or someone to declare you "real," you can simply start making work and collecting your best pieces, and that is something you can do right now, at twelve, with no gatekeeper's approval. A good portfolio is not your entire output; it is your strongest pieces, chosen carefully, that show what you want to be hired or known for. Quality and fit matter more than quantity: five excellent pieces that show a clear strength beat fifty random ones. Curating, choosing what to show and what to leave out, is itself a skill, and it tells people as much about your taste and judgment as the work itself does.`,
            `A portfolio also solves the chicken-and-egg problem that stops a lot of people: "I cannot get work without experience, but I cannot get experience without work." The way through is to make the work before anyone hires you, on your own projects, for fun, for free causes you believe in, or for imaginary clients, and let those pieces become your proof. Many successful creatives got their first real opportunities by showing self-started work that demonstrated exactly what they could do. You do not have to wait to be chosen to start building the thing that gets you chosen. That is genuine power, and you already have it.`,
          ],
          image: `/voyager-assets/creative-arts/l09-s2-portfolio.webp`,
          imageCaption: `Hard truth that becomes a relief: in creative fields your work matters far more than your words. People hiring an illustrator, booking a musician, or commissioning a designer want to see what you have made, not a résumé of claims. A "portfolio" (your collection of best work) is the single most important thing you build, because it is proof, not promises: "here is what I can actually do." What this changes: instead of waiting for permission or credentials, you can start making work and collecting your best pieces right now, at twelve, with no gatekeeper. A good portfolio is your strongest pieces chosen carefully (five excellent ones beat fifty random ones); curating is itself a skill that shows your taste and judgment. It also solves the chicken-and-egg trap ("can't get work without experience, can't get experience without work"): make the work first, on your own projects, for free causes, or imaginary clients, and let it become your proof. You do not have to wait to be chosen to build the thing that gets you chosen.`,
          vocab: [
            {
              word: `the portfolio: proof over promises`,
              definition: `A hard truth that becomes a relief: in creative fields, your work matters far more than your words. Nobody hiring an illustrator, booking a musician, or commissioning a designer cares much about a résumé full of claims; they want to see what you have actually made. The collection of your best work is called a "portfolio," and it is the single most important thing you build in a creative career, because it is proof, not promises: it says "here is what I can actually do," worth more than any amount of "trust me, I am talented." This changes what to spend your energy on, especially when young: instead of waiting for permission, credentials, or someone to declare you "real," you can start making work and collecting your best pieces right now, at twelve, with no gatekeeper's approval. A good portfolio is not your entire output but your strongest pieces, chosen carefully, that show what you want to be hired or known for; quality and fit beat quantity (five excellent pieces showing a clear strength beat fifty random ones), and curating, choosing what to show and leave out, is itself a skill that reveals your taste and judgment. A portfolio also solves the chicken-and-egg problem that stops many people ("I cannot get work without experience, but I cannot get experience without work"): make the work before anyone hires you, on your own projects, for free causes you believe in, or for imaginary clients, and let those pieces become your proof. Many successful creatives got their first real opportunities by showing self-started work; you do not have to wait to be chosen to start building the thing that gets you chosen.`,
              audioPrompt: `Here is a hard truth that is also a relief once you understand it, {name}: in creative fields, your work matters far more than your words. Nobody hiring an illustrator, booking a musician, or commissioning a designer cares much about a résumé full of claims; they want to see what you have actually made. The collection of your best work is called a portfolio, and it is the single most important thing you build in a creative career. A portfolio is proof, not promises. It says "here is what I can actually do," which is worth more than any amount of "trust me, I am talented." This changes what you should spend your energy on, especially when you are young. Instead of waiting for permission or credentials, you can simply start making work and collecting your best pieces, and that is something you can do right now, at twelve, with no gatekeeper's approval. A good portfolio is not your entire output; it is your strongest pieces, chosen carefully. Five excellent pieces that show a clear strength beat fifty random ones. A portfolio also solves the problem that stops a lot of people: "I cannot get work without experience, but I cannot get experience without work." The way through is to make the work before anyone hires you, on your own projects, for free causes you believe in, or for imaginary clients, and let those pieces become your proof. You do not have to wait to be chosen to start building the thing that gets you chosen.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Relationships Beat Luck`,
          paragraphs: [
            `Now a truth that sounds cynical but is actually warm once you understand it: most real creative opportunities come through relationships, not through being randomly discovered. The job, the commission, the band invitation, the collaboration usually comes from someone who already knew your work and thought of you, a teacher, a peer, someone you helped once, someone whose project you admired. This is not unfair "who you know" corruption; it is just how humans work. People bring opportunities to people they know, trust, and like. Understanding this early changes how you spend your time, away from waiting to be discovered and toward genuinely knowing other people who care about the same things you do.`,
            `The most important and most misunderstood part: the best way to build these relationships is to be generous, not pushy. The people who build strong creative networks are usually not the ones aggressively "networking" and asking everyone for favors; they are the ones who are genuinely interested in others' work, who help when they can, who share what they know, who show up and are kind. A reputation as someone talented AND good to work with is worth more than raw talent alone, because people choose collaborators they trust and enjoy. Being reliable, doing what you said you would, treating people well, this is not separate from your career, it is a huge part of it.`,
            `There is also a specific, powerful idea worth knowing: find and be a "mentor." A mentor is someone further along who shares what they know with someone coming up, and these relationships shape creative lives enormously. You can seek mentors by genuinely engaging with people whose work you admire, not by demanding their time, but by being thoughtful, doing the work, and being someone worth helping. And as you grow, you become a mentor to others, which both feels good and strengthens the whole web you are part of. Creative careers are not solo missions; they are built inside communities, and the people who thrive are usually the ones who built real, generous relationships over years, not the ones who tried to climb over everybody.`,
          ],
          image: `/voyager-assets/creative-arts/l09-s3-relationships.webp`,
          imageCaption: `A truth that sounds cynical but is warm: most real creative opportunities come through relationships, not random discovery. The job, commission, or band invitation usually comes from someone who already knew your work, a teacher, a peer, someone you helped. Not unfair "who you know" corruption, just how humans work: people bring opportunities to people they know, trust, and like. The key, often misunderstood: build relationships by being generous, not pushy. Strong networks come from people genuinely interested in others' work, who help, share, show up, and are kind, not from aggressive favor-asking. A reputation as talented AND good to work with beats raw talent alone. Find and be a "mentor" (someone further along sharing what they know); seek mentors by being thoughtful and worth helping, not by demanding time. Creative careers are built inside communities, not as solo missions; the people who thrive built real, generous relationships over years.`,
          vocab: [
            {
              word: `relationships, generosity, and mentorship`,
              definition: `A truth that sounds cynical but is actually warm: most real creative opportunities come through relationships, not through being randomly discovered. The job, commission, band invitation, or collaboration usually comes from someone who already knew your work and thought of you, a teacher, a peer, someone you helped once, someone whose project you admired. This is not unfair "who you know" corruption; it is just how humans work, since people bring opportunities to people they know, trust, and like. Understanding it early shifts your time away from waiting to be discovered and toward genuinely knowing other people who care about the same things. The most misunderstood part: the best way to build these relationships is to be generous, not pushy. People who build strong creative networks are usually not the ones aggressively "networking" and asking everyone for favors, but the ones genuinely interested in others' work, who help when they can, share what they know, show up, and are kind; a reputation as someone talented AND good to work with is worth more than raw talent alone, because people choose collaborators they trust and enjoy, so being reliable and treating people well is a huge part of a career, not separate from it. A specific powerful idea: find and be a "mentor," someone further along who shares what they know with someone coming up; you seek mentors by genuinely engaging with people whose work you admire (being thoughtful, doing the work, being worth helping, not demanding their time), and as you grow you become a mentor to others, strengthening the whole web. Creative careers are built inside communities, not as solo missions, and the people who thrive built real, generous relationships over years rather than trying to climb over everybody.`,
              audioPrompt: `Now a truth that sounds cynical but is actually warm once you understand it, {name}: most real creative opportunities come through relationships, not through being randomly discovered. The job, the commission, the band invitation usually comes from someone who already knew your work and thought of you, a teacher, a peer, someone you helped once. This is not unfair "who you know" corruption; it is just how humans work. People bring opportunities to people they know, trust, and like. The most important and most misunderstood part: the best way to build these relationships is to be generous, not pushy. The people who build strong creative networks are usually not the ones aggressively networking and asking everyone for favors; they are the ones who are genuinely interested in others' work, who help when they can, who share what they know, who show up and are kind. A reputation as someone talented AND good to work with is worth more than raw talent alone, because people choose collaborators they trust and enjoy. There is also a powerful idea worth knowing: find and be a mentor. A mentor is someone further along who shares what they know with someone coming up, and these relationships shape creative lives enormously. Creative careers are not solo missions; they are built inside communities, and the people who thrive are usually the ones who built real, generous relationships over years, not the ones who tried to climb over everybody.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Surviving Rejection And The Long Game`,
          paragraphs: [
            `Now the part nobody puts in the inspiring stories: rejection is not a sign you are failing at a creative career, it is the creative career. Every working artist, writer, musician, and filmmaker you can name has a hidden pile of rejections, auditions that went nowhere, manuscripts turned down, pitches ignored, work that flopped. The difference between people who make it and people who quit is usually not talent; it is that the ones who made it kept going through a level of rejection that would have stopped most people. Knowing this in advance changes everything, because it means that when rejection comes, and it will, you can understand it as the normal cost of doing the work rather than as proof you should stop.`,
            `The healthy way to handle rejection is to separate two things people usually tangle together: your work and your worth. A rejected piece of work is information about that piece, in that moment, for that person, it is not a verdict on you as a human being. Skilled creatives learn to ask "what can I learn from this?" instead of "what is wrong with me?", to take whatever is useful in the feedback and let go of the rest, and to send the work out again. This is not pretending rejection does not hurt; it hurts, and that is allowed. It is refusing to let the hurt make the decision for you. The goal is to feel it, learn what you can, and keep going anyway.`,
            `All of this points to the deepest truth about creative careers: they are a long game, built over years, not a single moment of being discovered. The people who have lasting creative lives are usually not the ones who had one viral moment; they are the ones who kept showing up, kept practicing, kept building their portfolio, kept nurturing relationships, and kept surviving rejection, for years, often before anything paid off. This is genuinely good news, because it means you do not need to "make it" by some early deadline or be an overnight prodigy. You need to start, keep going, and stay in the game long enough for the slow, real building to add up. Patience is not the opposite of ambition here; patience is how ambition actually wins.`,
          ],
          image: `/voyager-assets/creative-arts/l09-s4-rejection.webp`,
          imageCaption: `The part inspiring stories leave out: rejection is not a sign you are failing at a creative career, it IS the creative career. Every working artist, writer, musician, filmmaker has a hidden pile of rejections (auditions, turned-down manuscripts, ignored pitches, flops). The difference between those who make it and those who quit is usually not talent but persistence through a level of rejection that stops most people. Healthy handling: separate your work from your worth, a rejected piece is information about that piece in that moment, not a verdict on you. Ask "what can I learn?" not "what's wrong with me?", take the useful feedback, send it out again; feel the hurt but do not let it make the decision. The deepest truth: creative careers are a long game built over years, not one discovery moment. Good news, you do not need to "make it" by an early deadline; you need to start, keep going, and stay in long enough for the slow building to add up. Patience is how ambition wins.`,
          vocab: [
            {
              word: `surviving rejection and the long game`,
              definition: `The part nobody puts in the inspiring stories: rejection is not a sign you are failing at a creative career, it is the creative career. Every working artist, writer, musician, and filmmaker you can name has a hidden pile of rejections, auditions that went nowhere, manuscripts turned down, pitches ignored, work that flopped; the difference between people who make it and people who quit is usually not talent but that the ones who made it kept going through a level of rejection that would have stopped most people. Knowing this in advance lets you understand rejection, when it comes, as the normal cost of doing the work rather than proof you should stop. The healthy way to handle it is to separate two things people tangle together: your work and your worth. A rejected piece is information about that piece, in that moment, for that person, not a verdict on you as a human being; skilled creatives ask "what can I learn from this?" instead of "what is wrong with me?", take whatever is useful in the feedback, let go of the rest, and send the work out again. This is not pretending rejection does not hurt (it hurts, and that is allowed); it is refusing to let the hurt make the decision. All of this points to the deepest truth: creative careers are a long game, built over years, not a single discovery moment. The people with lasting creative lives are usually not the ones with one viral moment but the ones who kept showing up, practicing, building their portfolio, nurturing relationships, and surviving rejection for years, often before anything paid off. Good news: you do not need to "make it" by an early deadline or be an overnight prodigy; you need to start, keep going, and stay in the game long enough for the slow, real building to add up. Patience is not the opposite of ambition; patience is how ambition actually wins.`,
              audioPrompt: `Now the part nobody puts in the inspiring stories, {name}: rejection is not a sign you are failing at a creative career, it is the creative career. Every working artist, writer, musician, and filmmaker you can name has a hidden pile of rejections, auditions that went nowhere, manuscripts turned down, pitches ignored, work that flopped. The difference between people who make it and people who quit is usually not talent; it is that the ones who made it kept going through a level of rejection that would have stopped most people. Knowing this in advance changes everything, because when rejection comes, and it will, you can understand it as the normal cost of doing the work rather than proof you should stop. The healthy way to handle rejection is to separate two things people usually tangle together: your work and your worth. A rejected piece of work is information about that piece, in that moment, for that person; it is not a verdict on you as a human being. Skilled creatives learn to ask "what can I learn from this?" instead of "what is wrong with me?" This is not pretending rejection does not hurt; it hurts, and that is allowed. It is refusing to let the hurt make the decision for you. All of this points to the deepest truth about creative careers: they are a long game, built over years, not a single moment of being discovered. You do not need to make it by some early deadline. You need to start, keep going, and stay in the game long enough for the slow, real building to add up. Patience is how ambition actually wins.`,
            },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before the case studies. You learned that skill is built through deliberate practice, not born, so struggling is the building, not a sign to quit. You learned that a portfolio is proof over promises, the most important thing you build, and that you can start it now without anyone's permission. You learned that opportunities come through generous relationships far more than through luck, and that being talented AND good to work with beats talent alone. And you learned that rejection is the career, not the end of it, and that creative lives are a long game won by staying in.`,
            `Now the case-study screen will hand you several realistic decisions a young creative actually faces, how to spend limited practice time, what to put in a first portfolio, how to handle a harsh piece of feedback, whether to take a "safe" path or a risky one, and ask you to work out the wiser move using what you now know. There is rarely one perfect answer, but the tools from this lesson, and from Lessons 7 and 8, will point clearly toward the smarter choices.`,
            `One last thought to carry. Everything in this lesson adds up to a quietly radical idea: you have far more control over a creative life than the "discovery" myth pretends. You cannot control whether you go viral or get lucky, but you can control whether you practice deliberately, build a real portfolio, treat people well, and keep going through rejection, and those controllable things are exactly what creative careers are actually made of. The dreamy version waits to be chosen. The real version gets to work. The most hopeful fact in this whole lesson is that the real version is the one that actually works, and it is entirely available to you, starting now. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l09-s5-before.webp`,
          imageCaption: `Threads together. Skill is built through deliberate practice (struggling is the building, not a stop sign). A portfolio is proof over promises, the most important thing you build, startable now without permission. Opportunities come through generous relationships far more than luck; talented AND good-to-work-with beats talent alone. Rejection is the career, not its end; creative lives are a long game won by staying in. The case-study screen ahead hands you realistic decisions (spending practice time, a first portfolio, harsh feedback, safe vs. risky paths) to work out the wiser move. Last thought, quietly radical: you have far more control than the "discovery" myth pretends, you cannot control luck, but you can control deliberate practice, a real portfolio, treating people well, and persistence, which is exactly what careers are made of. The dreamy version waits to be chosen; the real version gets to work, and it is available to you now.`,
          vocab: [
            {
              word: `you control what creative careers are actually made of`,
              definition: `The synthesis before the case studies. You learned that skill is built through deliberate practice, not born, so struggling at your edge is the building process, not a sign to quit. You learned that a portfolio is proof over promises, the single most important thing you build, and that you can start it right now without anyone's permission, with five strong curated pieces beating fifty random ones. You learned that opportunities come through generous relationships far more than through luck, that being talented AND good to work with beats talent alone, and that mentorship runs both ways. And you learned that rejection is the creative career itself, not its end, handled by separating your work from your worth and staying in the long game built over years. The case-study screen will hand you several realistic decisions a young creative faces (how to spend limited practice time, what to put in a first portfolio, how to handle harsh feedback, whether to take a safe or risky path) to work out the wiser move using these tools plus Lessons 7 and 8. The last thought, quietly radical: you have far more control over a creative life than the "discovery" myth pretends. You cannot control whether you go viral or get lucky, but you can control whether you practice deliberately, build a real portfolio, treat people well, and keep going through rejection, and those controllable things are exactly what creative careers are actually made of. The dreamy version waits to be chosen; the real version gets to work, and the real version is the one that actually works, available to you starting now.`,
              audioPrompt: `Pull it together before the case studies, {name}. You learned that skill is built through deliberate practice, not born, so struggling is the building, not a sign to quit. You learned that a portfolio is proof over promises, the most important thing you build, and that you can start it now without anyone's permission. You learned that opportunities come through generous relationships far more than through luck, and that being talented and good to work with beats talent alone. And you learned that rejection is the career, not the end of it, and that creative lives are a long game won by staying in. Now the case-study screen will hand you several realistic decisions a young creative actually faces, and ask you to work out the wiser move using what you now know. One last thought to carry. Everything in this lesson adds up to a quietly radical idea: you have far more control over a creative life than the discovery myth pretends. You cannot control whether you go viral or get lucky, but you can control whether you practice deliberately, build a real portfolio, treat people well, and keep going through rejection, and those controllable things are exactly what creative careers are actually made of. The dreamy version waits to be chosen. The real version gets to work, and it is entirely available to you, starting now.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l09-case-study`,
          type: `case-study`,
          headline: `Five Decisions A Young Creative Faces`,
          intro: `{name}, five realistic decisions. For each, work out the wiser move using what you learned about deliberate practice, portfolios, relationships, rejection, and the long game (plus the money and rights from Lessons 7 and 8). There is rarely one perfect answer, but there are clearly smarter and weaker choices.`,
          cases: [
            {
              id: `c1`,
              title: `How to spend your practice hour`,
              type: `Deliberate practice`,
              description: `You have one focused hour to practice your craft (say, drawing). You could spend it redrawing the same character you already draw really well and enjoy, or spend it on hands, which you are bad at and find frustrating and keep avoiding.`,
              questions: [
                `Which choice builds more skill, and why?`,
                `Why does the "fun" option feel productive but build little?`,
                `How could you make the hard choice less miserable without making it useless?`,
              ],
              evaluation: `The skill-building choice is the hands, the thing you are bad at and keep avoiding, because that is deliberate practice: working at the edge of what you can do, on the specific weakness, with feedback. Redrawing the character you already nail is comfortable repetition that feels productive but builds little, since you are not working at your edge. The "fun" option feels good precisely because it is easy, and easy is the opposite of growth here. You can make the hard choice less miserable without making it useless by breaking it down (study a few real hands, draw slowly, compare, fix one specific error at a time) and by celebrating effort and improvement rather than instant mastery, but you should not escape into the comfortable thing and call it practice. The clumsy, frustrating hour is the one that actually makes you better.`,
            },
            {
              id: `c2`,
              title: `Your first portfolio`,
              type: `Portfolio / curating`,
              description: `You want to be known for character design, and you are putting together your first portfolio to show people. You have made about forty pieces: a handful of strong character designs, plus lots of random doodles, half-finished things, and unrelated stuff you also enjoy. You feel like more pieces will look more impressive.`,
              questions: [
                `Should you include all forty pieces? Why or why not?`,
                `What should the portfolio actually contain, given what you want to be known for?`,
                `Why does curating tell people about you beyond the work itself?`,
              ],
              evaluation: `Do not include all forty; that is the instinct to fix. A portfolio is your strongest pieces chosen carefully to show what you want to be hired or known for, so include your best character designs and cut the random doodles, half-finished work, and unrelated stuff, even though it feels braver to show more. Five excellent character designs that show a clear strength beat forty mixed pieces, because a viewer judges you partly by your weakest included piece and by whether your work has a clear focus. Curating, choosing what to leave out, tells people about your taste and judgment, not just your skill: it shows you know what is good and what fits, which is itself a professional ability. The discipline is "show your best, on-target work, and cut the rest," even when cutting good-enough pieces feels like a loss.`,
            },
            {
              id: `c3`,
              title: `The harsh feedback`,
              type: `Surviving rejection`,
              description: `You submitted a song to a contest and got rejected with a blunt note: "The lyrics are clichéd and the chorus is forgettable." It stings badly. Part of you wants to quit music; part of you wants to angrily dismiss the judge as clueless.`,
              questions: [
                `Why are "quit" and "dismiss the judge" both bad responses?`,
                `How do you separate your work from your worth here?`,
                `What is the actually-useful move with this feedback?`,
              ],
              evaluation: `Both extremes are bad: quitting lets one piece of feedback end your music, and angrily dismissing the judge throws away possibly useful information just because it hurt. The healthy move is to separate your work from your worth, the note is information about that song, in that moment, for that judge, not a verdict on you as a person or musician. Then ask "what can I learn?" instead of "what is wrong with me?": maybe the lyrics really do lean on clichés you could push past, maybe the chorus could be sharper, and even if you disagree with part of it, there may be a grain worth taking. Feel the sting (that is allowed) but do not let it make the decision. The useful move: take whatever is true in the feedback, work on it deliberately, and submit again. Rejection is the career, not the end of it.`,
            },
            {
              id: `c4`,
              title: `Generous or pushy?`,
              type: `Relationships`,
              description: `There is an older creator whose work you admire and who could open real doors for you. You could send them a pushy message immediately asking them to promote you and introduce you to people, or you could genuinely engage with their work over time, be helpful and thoughtful, and build a real relationship first.`,
              questions: [
                `Which approach actually tends to work, and why?`,
                `Why does the pushy "ask for favors" approach usually backfire?`,
                `What does "be generous, not pushy" look like concretely here?`,
              ],
              evaluation: `The relationship-first approach tends to work; the immediate pushy ask usually backfires. People bring opportunities to people they know, trust, and like, and a stranger leading with "promote me and introduce me to people" reads as taking, not connecting, which makes most people pull back. The pushy approach fails because it asks for a lot before offering anything and treats the person as a ladder rather than a human. "Be generous, not pushy" looks concrete: genuinely engage with their work, thoughtfully and over time; be helpful where you can; do excellent work of your own that is worth noticing; be someone worth helping rather than someone demanding help. Mentorship and opportunity grow from real relationships built with patience and generosity, not from a single bold ask. This is the warm version of "who you know": you build it by being good to know.`,
            },
            {
              id: `c5`,
              title: `Safe path or risky path?`,
              type: `Career strategy / the long game`,
              description: `You are talented and you feel pressure to choose: bet everything on becoming a famous creator now, dropping everything else, or build steadily, keep developing skills, a portfolio, and relationships, while keeping other options open. Choosing steady feels, to you, like giving up on the dream.`,
              questions: [
                `How do the long game and the long tail (Lesson 7) apply here?`,
                `Is steady building really "giving up on the dream"?`,
                `What does a wise path actually look like?`,
              ],
              evaluation: `The long game and the long tail apply directly: creative careers are built over years, and statistically most successful creatives live in the long tail through steady building, not a single all-or-nothing bet on instant fame. Betting everything on becoming famous now is the lottery-ticket move, thrilling but very unlikely, and treating steady building as "giving up the dream" is the misread this lesson warns against. Steady building is not giving up; it is doing the actual thing creative careers are made of, deliberate practice, a growing portfolio, real relationships, surviving rejection, which keeps you in the game long enough to succeed and is exactly what positions you for the bigger breaks if they come. A wise path is usually the blend: build steadily and keep your options open while taking real, non-suicidal shots at bigger things. Patience is not the opposite of ambition; it is how ambition actually wins.`,
            },
          ],
          synthesisPrompt: `After working through all five: what is the single most important habit or mindset you will carry if you want to build a creative life? Which decision were you most tempted to make the weaker way, and what tool from this lesson pulled you toward the wiser one? In 5-6 sentences.`,
          reflectionPrompt: `Notice how many of these wiser choices were the uncomfortable ones, the hard practice, cutting good pieces, taking the sting of feedback, building slowly. Where in your own creative life do you tend to choose the comfortable option and call it progress?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "deliberate practice," and why does it build skill better than ordinary repetition?`,
              options: [
                `Random`,
                `Deliberate practice is the kind of practice that actually builds skill: working at the edge of what you can do, on the specific things you are not yet good at, with honest feedback about what went wrong, and then doing it again. It builds skill far better than ordinary repetition because just doing something a lot is not the same as getting better at it, drawing the same easy thing you already draw well a hundred times builds very little, while drawing the hard thing you keep getting wrong, noticing exactly why, and trying again builds a lot. Comfortable repetition feels productive but mostly is not; uncomfortable, focused, feedback-driven effort is where growth lives. This is why the popular myth of the "natural" is mostly false: researchers studying genuinely excellent people find years of focused, effortful practice rather than magic, and the "effortless" look is what thousands of hours of effort produces.`,
                `Just practicing a lot`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Deliberate practice means working at your edge on your weaknesses with feedback, then repeating. Comfortable repetition of what you already do well feels productive but builds little; the uncomfortable, focused effort is where growth happens.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why is "skill is built, not born" such an important thing to believe?`,
              options: [
                `Random`,
                `Because it changes how you respond to struggle. If skill were a gift you either have or do not, then struggling would mean you "do not have it" and should quit. But if skill is built through deliberate practice, then struggling is not a sign you lack talent, it is literally the process of getting better, the feeling of working at your edge. The people who become excellent are usually not the ones who found it easy; they are the ones who kept practicing through the part that felt hard and clumsy, because they understood that the clumsy part is the building part. Believing skill is built is what lets you keep going long enough to actually become good, while believing it is a fixed gift makes you quit the moment things get hard, mistaking the normal difficulty of learning for proof that you are not talented.`,
                `Just feels nice`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `If skill is a fixed gift, struggle means "quit"; if skill is built, struggle is the building itself. Believing it is built is what lets you persist through the clumsy stage long enough to get good.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is a portfolio, and why is "proof over promises" the key idea?`,
              options: [
                `Random`,
                `A portfolio is the collection of your best work, and it is the single most important thing you build in a creative career because in creative fields your work matters far more than your words. Nobody hiring an illustrator, booking a musician, or commissioning a designer cares much about a résumé full of claims; they want to see what you have actually made, so a portfolio is proof, not promises, it says "here is what I can actually do," which beats any amount of "trust me, I am talented." This is freeing because you can start building it right now, at twelve, without anyone's permission, by making work and collecting your strongest pieces. A good portfolio is your best, carefully chosen pieces that show what you want to be known for, not your entire output, five excellent pieces with a clear focus beat fifty random ones, and curating well shows your taste and judgment, not just your skill.`,
                `Just a folder`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A portfolio is your best work, and it is proof over promises: in creative fields what you have made beats what you claim. You can start one now, and five strong curated pieces beat fifty random ones.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How do most real creative opportunities actually come, and what is the best way to build the relationships behind them?`,
              options: [
                `Random`,
                `Most real creative opportunities come through relationships, not through being randomly discovered: the job, commission, or invitation usually comes from someone who already knew your work and thought of you, a teacher, a peer, someone you helped. This is not unfair "who you know" corruption; it is just how humans work, since people bring opportunities to people they know, trust, and like. The best way to build those relationships is to be generous, not pushy: the people with strong creative networks are usually not the ones aggressively networking and asking everyone for favors, but the ones genuinely interested in others' work, who help when they can, share what they know, show up, and are kind. A reputation as someone talented AND good to work with is worth more than raw talent alone, because people choose collaborators they trust and enjoy, so being reliable and treating people well is a huge part of a career, not separate from it.`,
                `Just luck`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Opportunities come through relationships, because people bring them to people they know and trust. The way to build those is generosity, not pushiness: being talented and good to work with beats talent alone.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does the lesson say "rejection is not a sign you are failing, it IS the creative career"?`,
              options: [
                `Random`,
                `Because every working artist, writer, musician, and filmmaker you can name has a hidden pile of rejections, auditions that went nowhere, manuscripts turned down, pitches ignored, work that flopped, and the difference between people who make it and people who quit is usually not talent but that the ones who made it kept going through a level of rejection that would have stopped most people. So rejection is not evidence you should stop; it is the normal cost of doing creative work, and knowing that in advance lets you treat it as part of the process rather than a verdict. The healthy way to handle it is to separate your work from your worth, a rejected piece is information about that piece in that moment, not a judgment on you as a human, and to ask "what can I learn?" instead of "what is wrong with me?", feeling the sting but not letting it make the decision to quit.`,
                `Just bad luck`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Everyone who succeeds has a hidden pile of rejections; the dividing line is persistence, not talent. Treat rejection as the normal cost of the work, separate your work from your worth, and keep going.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does it mean that creative careers are "a long game," and why is that good news?`,
              options: [
                `Random`,
                `It means creative careers are built over years through steady, repeated effort, practicing, building a portfolio, nurturing relationships, surviving rejection, rather than being made in a single moment of being discovered. The people with lasting creative lives are usually not the ones who had one viral moment but the ones who kept showing up for years, often before anything paid off. This is genuinely good news because it means you do not need to "make it" by some early deadline or be an overnight prodigy: you need to start, keep going, and stay in the game long enough for the slow, real building to add up. It also means the things that matter most are the controllable ones, your practice, your work, how you treat people, your persistence, rather than luck. Patience is not the opposite of ambition here; patience is how ambition actually wins, because staying in the game is what lets the building accumulate into a real career.`,
                `Just takes forever`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A long game means careers accumulate over years of controllable effort, not one lucky moment. That is good news: you do not need an early deadline or to be a prodigy, just to start and stay in long enough to compound.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How does a portfolio solve the "can't get work without experience, can't get experience without work" problem?`,
              options: [
                `Random`,
                `It solves the chicken-and-egg trap by letting you make the work before anyone hires you, on your own projects, for fun, for free causes you believe in, or for imaginary clients, and then letting those self-started pieces become your proof. Instead of waiting to be chosen before you can build experience, you build the work first, and the work itself becomes the evidence that gets you chosen. Many successful creatives got their first real opportunities precisely by showing self-started work that demonstrated exactly what they could do, with no client having hired them yet. This is genuine power that you already have at twelve: you do not need permission, a credential, or someone declaring you "real" to start making and collecting strong pieces, which means the thing that ends the trap, a body of demonstrated work, is entirely within your control to begin building right now.`,
                `Just wait`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Make the work before anyone hires you, on self-started or passion projects, and let those pieces become the proof that gets you chosen. The body of work that ends the trap is fully within your control to start now.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is curating a portfolio (choosing what to leave out) itself an important skill?`,
              options: [
                `Random`,
                `Because what you choose to show, and especially what you choose to cut, tells people about your taste and judgment, not just your raw skill. A portfolio is your strongest pieces chosen to show what you want to be known for, so five excellent, focused pieces beat fifty random ones, partly because a viewer tends to judge you by your weakest included piece and by whether your work has a clear direction. Including everything, random doodles, half-finished work, unrelated experiments, dilutes the strong work and signals that you cannot tell your best from your rest. Cutting good-enough pieces to show only your best and most on-target work demonstrates that you know what is good, what fits, and what to leave out, which is exactly the kind of professional judgment people want in a collaborator. So curating is not just tidying; it is showing your discernment, which is part of what makes someone worth hiring or working with.`,
                `Just looks neat`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Curating shows taste and judgment: people judge you by your weakest included piece and your focus, so cutting good-enough work to show only your best and on-target pieces signals the discernment collaborators want.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If you are genuinely talented, you should be able to succeed in a creative field without needing to build relationships or persist through much rejection.`,
              correctAnswer: false,
              explanation: `False, and believing it is one of the most common reasons talented people quit. Talent alone is not what builds a creative career; the career is built from deliberate practice, a real portfolio, generous relationships, and persistence through a great deal of rejection. Most real opportunities come through relationships, because people bring work to people they know, trust, and like, so a talented person who refuses to build genuine connections cuts themselves off from the main way opportunities actually travel. And rejection is not a sign of failure but the normal texture of the work, every successful creative has a hidden pile of it, so the people who make it are usually not the most talented but the ones who kept going through rejection that stopped others. A reputation as talented AND good to work with beats raw talent alone, because collaborators are chosen for trust and reliability as much as skill. The "pure talent should be enough" belief is dangerous precisely because it makes gifted people neglect the relationships and persistence that careers actually require, and then quit when talent alone does not magically open doors. The controllable, unglamorous things, practice, portfolio, relationships, persistence, are what turn talent into a career.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 15 and serious about becoming an animator. You are frustrated: a classmate with less skill than you just got picked for an opportunity you wanted, you got a harsh critique on your latest piece, and part of you wants to either quit or post an angry rant about how the whole thing is unfair and rigged. Using this whole lesson, what should you actually think and do?`,
              options: [
                `"Just quit"`,
                `Several things, held together, because this moment is exactly where careers are quietly made or lost. First, name what is actually happening instead of letting the frustration narrate it: you got a rejection and saw someone else get an opportunity, both of which feel like proof that you are failing, but the lesson is explicit that rejection is not a sign of failing, it is the normal texture of the creative career, and every animator you admire has a hidden pile of exactly these moments. So the feeling is real and allowed, but the story it is telling you ("you are failing, it is rigged, quit") is the part to distrust. Second, handle the harsh critique the healthy way: separate your work from your worth, the critique is information about that one piece in that one moment, not a verdict on you as an animator or a person, so ask "what can I learn from this?" instead of "what is wrong with me?", take whatever is genuinely useful, and let go of the rest, even though it stings. Third, look honestly at the classmate who got picked, because this is where the lesson's hardest truth helps: opportunities usually come through relationships, not pure skill ranking, so it is entirely possible the classmate was chosen not because the system is rigged but because they had built a relationship, shown reliability, or had a portfolio that fit that specific opportunity better, and "more skilled" does not automatically mean "should have been picked for this particular thing." That is not unfair corruption; it is how opportunities actually travel, and the response is to build your own relationships generously rather than to rant. Fourth, see why the angry public rant is the genuinely self-destructive move: a reputation as talented AND good to work with beats raw talent alone, and publicly raging that everything is rigged builds exactly the opposite reputation, making you someone people are wary of collaborating with, which sabotages the relationship-based way opportunities come, so the rant would not just feel bad later, it would actively damage the career you want. Fifth, decide what to actually do, and let it be the long-game move: feel the disappointment honestly (maybe privately, to a friend or in a journal, not in a public rant), take the useful part of the critique into your next round of deliberate practice, keep building your portfolio toward what you want to be known for, and genuinely invest in relationships, including, if you can manage it, being gracious to the classmate who got the opportunity, because that is both kind and exactly how a good reputation gets built. Sixth, hold the deepest frame: this single frustrating moment is one data point in a long game built over years, and the people who end up with real animation careers are not the ones who never got rejected or overlooked, they are the ones who kept practicing, kept building, kept being good to work with, and stayed in the game through precisely this kind of moment. The most powerful thing you can do right now is refuse to let one rejection and one harsh critique make the quit decision, and instead do the unglamorous, controllable things that actually build the career, because those are entirely in your hands and they are what works.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied creative-career resilience. The move is to treat rejection as the normal texture of the work rather than proof of failure, separate work from worth on the critique and learn from it, recognize that opportunities travel through relationships and fit (not pure skill ranking) so the system is not necessarily rigged, see that a public rant would damage the talented-and-good-to-work-with reputation careers depend on, and respond with the long-game move: deliberate practice, portfolio building, generous relationships, and staying in the game. The controllable things are what turn talent into a career.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you imagine creative success as being "discovered," or as something built? Now that you know skill is built and careers are a long game, what feels different about your own chances, and what surprised you most?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `Deliberate practice means working at your edge on your weaknesses. What is one specific weakness in something you make that you have been avoiding because it is uncomfortable? What would deliberate practice on it actually look like this week?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who builds rather than waits to be discovered. Does the "get to work" version feel exciting or daunting to you? Where do you catch yourself waiting for permission instead of starting?` },
            { id: `reflect-rejection`, category: `Rejection and worth`, prompt: `The lesson said to separate your work from your worth. Think of a time feedback or rejection stung. Did you treat it as information about the work, or as a verdict on you? What would it take to hold that line next time?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You could start a portfolio right now, at your age, with no permission. What five pieces (real or planned) would you want in a first portfolio, and what would you want them to say you are good at? What is missing that you would need to make?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "all this practice-and-portfolio advice ignores that some people really are born with way more talent, and luck matters more than effort." State the strongest version of that. Where is it partly right, and where does it become an excuse to not do the controllable things?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This lesson is meant to be acted on, not just understood. Two paths to start building now.`,
          familyActivity: {
            title: `Find The Hidden Rejection Pile`,
            duration: `40 minutes`,
            description: `As a family, pick a creative person everyone admires, a musician, author, director, artist, and look up their real story together, specifically the rejections and slow years before they "made it." Almost every famous creative has a documented pile of early rejections, day jobs, flops, and years of building, and finding it is genuinely encouraging rather than discouraging. Then make it personal: ask anyone in the family who does or did skilled or creative work to share a rejection or hard stretch they pushed through, and what kept them going. The goal is to replace the "overnight discovery" myth with the true picture, that even the people who look effortless built their skill deliberately and survived a lot of no before the yes. Talk about how knowing this changes the way you would handle your own next rejection.`,
          },
          projectOption: {
            title: `Start Your Real Portfolio, 3 weeks (optional)`,
            duration: `3 weeks, ~40 minutes per session`,
            description: `Begin a genuine portfolio in whatever you make, art, music, writing, video, design, treating it as the real start of a creative practice. Week 1: decide what you want to be known for (one focus, not everything), then honestly review what you have already made and pick your current strongest 2-3 pieces in that direction. Week 2: identify the gap, what would a strong portfolio in your focus need that you do not have yet, and do deliberate practice on the specific weak spot, then make one or two new pieces aimed squarely at your focus. Week 3: curate ruthlessly, choose your best 5 pieces, cut everything that does not fit or is not strong enough (even good pieces that are off-focus), and write a short note about what your portfolio is meant to say you are good at and what you will make next to strengthen it. The point is not to have a finished, perfect portfolio; it is to start the real, lifelong habit of building proof and curating it well, beginning now, with no permission needed.`,
            offerToParent: `Parent: opt your child into the portfolio project. Starting a real, focused portfolio, and practicing the discipline of curating it down to their best work, builds creative confidence and professional judgment at once, and it replaces the passive "wait to be discovered" mindset with the active, lifelong habit of building demonstrable proof. The 3-week arc gives them a genuine first portfolio they can keep growing.`,
          },
          identityQuestion: `If you become someone who builds skill deliberately, makes a real portfolio, treats people generously, and keeps going through rejection, instead of waiting to be discovered, what does that let you create over a lifetime that someone hoping for luck and quitting at the first "no" never will?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds skill on purpose instead of waiting to be born talented.`,
            `A person who makes the work first and lets it become my proof.`,
            `Someone who treats rejection as part of the work, not a reason to quit.`,
          ],
          saveKey: `identity_responses_ca_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Nine down, and this one you can act on starting today. You learned that skill is built through deliberate practice, not born, so struggling at your edge is the building, not a sign to quit, and the "natural" is mostly a myth. You learned that a portfolio is proof over promises, the single most important thing you build, that you can start it right now with no permission, and that five strong curated pieces beat fifty random ones. You learned that opportunities come through generous relationships far more than luck, that being talented AND good to work with beats talent alone, and that mentorship runs both ways. You learned that rejection is the creative career itself, handled by separating your work from your worth and staying in the long game built over years. And you learned the quietly radical truth: you control the things creative careers are actually made of, practice, portfolio, relationships, persistence, far more than the discovery myth pretends. The dreamy version waits to be chosen; the real version gets to work, and it is available to you now. Next: the role of art in social movements, where creative work stops being only about a career and becomes a force that can change the world. Onward, {name}. — Muse`,
          badge: `creative-career-literate`,
          badgeName: `Creative Career Literate`,
          xpEarned: 75,
          competencies: [
            `Explains deliberate practice and why it builds skill better than comfortable repetition, and that skill is built, not born`,
            `Understands a portfolio as "proof over promises," the most important thing built, startable now, curated to best and on-target pieces`,
            `Knows that opportunities come through generous relationships far more than luck, and that talented-and-good-to-work-with beats talent alone`,
            `Treats rejection as the normal texture of a creative career, separating work from worth and learning from feedback`,
            `Understands creative careers as a long game built over years, won by staying in rather than one discovery moment`,
            `Sees that the controllable things (practice, portfolio, relationships, persistence) are what turn talent into a career`,
            `Applies these tools to real career decisions and to handling setbacks without quitting or lashing out`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: The Role of Art in Social Movements`,
            hook: `Can art actually change the world? Protest, propaganda, and power. Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L09 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
