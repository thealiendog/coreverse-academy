// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L17 — Public Speaking and Formal Debate
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Speaking & Listening, Presentation of Knowledge
// Interaction: PERSPECTIVES. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l17-v1";

const ELA_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-17`,
      title: `Public Speaking and Formal Debate`,
      duration: 35,
      xpReward: 75,
      badge: `orator`,
      badgeName: `Orator`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, everything you've learned about writing, claims, evidence, reasoning, style, voice, now leaves the page and stands up in front of a living audience. Public speaking is one of the most useful and most feared skills there is. Surveys regularly find people fear speaking in public more than almost anything, yet the ability to stand up and move a room is one of the most powerful things a person can do. The good news, the same one you learned about voice, applies here: speaking well is built, not born. It's a craft of preparation, structure, delivery, and practice, not a magic gift handed to a lucky few. You'll learn how a great speech is built, how delivery, your voice, your body, your eyes, carries it, and how to manage the nerves that everyone, even the most polished speakers, feels. Then we'll add formal debate, where two sides argue a question under rules, and where the real test isn't just making your case but listening hard enough to answer the other side in real time. By the end, you'll see that the podium isn't a place to fear, it's a place where a prepared person, with something to say, can genuinely change minds. Onward.`,
          headline: `Public Speaking and Formal Debate`,
          subtitle: `Standing up, finding your nerve, and moving a room. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Fear, And The Power`,
          paragraphs: [
            `Public speaking is one of the most feared skills there is. Surveys regularly find people rank the fear of speaking before a crowd above heights, spiders, even, in some, death itself. If your heart pounds at the thought of standing up to speak, you are in good and very large company. The fear is normal, and it is not a verdict on your ability.`,
            `Yet that same dreaded skill is one of the most powerful a person can have. The ability to stand before a room and move it, to inform, persuade, inspire, has shaped history, won causes, and opened doors that nothing else could. Everything you've built on the page, claim, evidence, reasoning, voice, gains new force when delivered, live, to other human beings.`,
            `Here's the freeing truth, the same one you learned about voice: speaking well is built, not born. It is a craft of preparation, structure, delivery, and practice, not a gift handed to a lucky few. The polished speakers you admire were almost never naturals; they learned, rehearsed, and improved. So can you. The fear never fully vanishes, but skill makes it something you can use.`,
          ],
          image: `/voyager-assets/ela/l17-s1-fear.webp`,
          imageCaption: `Public speaking is one of the most FEARED skills there is, surveys regularly rank the fear of speaking before a crowd above heights, spiders, even death. If your heart pounds at the thought, you're in vast company; the fear is normal and not a verdict on your ability. Yet that same dreaded skill is one of the most POWERFUL a person can have: standing before a room to inform, persuade, and inspire has shaped history and won causes. Everything you built on the page, claim, evidence, reasoning, voice, gains new force delivered live. The freeing truth, the same as with voice: speaking well is BUILT, NOT BORN. It's a craft of preparation, structure, delivery, and practice. The speakers you admire learned and rehearsed. So can you.`,
          vocab: [
            { word: `public speaking`,
              definition: `Delivering a message aloud to a live audience, to inform, persuade, or inspire. A learnable craft, not an inborn gift.`,
              audioPrompt: `Public speaking, {name}, is delivering a message aloud to a live audience, to inform, persuade, or inspire. It's one of the most feared skills there is, but also one of the most powerful, and it can be learned.` },
            { word: `glossophobia`,
              definition: `The fear of public speaking. It is extremely common and normal, and not a sign you can't learn to speak well.`,
              audioPrompt: `Glossophobia, {name}, is the fear of public speaking, and it's one of the most common fears in the world. Feeling it doesn't mean you can't speak well; nearly everyone feels it, including the speakers you most admire.` },
            { word: `built`,
              definition: `The key truth: speaking well comes from preparation, structure, delivery, and practice, not from a natural gift few people have.`,
              audioPrompt: `Speaking well is built, not born, {name}, just like voice. It comes from preparation, structure, delivery, and practice, not from a magic gift. The polished speakers you admire learned and rehearsed their way there.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Building The Speech`,
          paragraphs: [
            `A great speech, like a great essay, is built, and most of the work happens before you ever stand up. It starts with knowing your purpose (to inform, persuade, or inspire) and your audience (who they are, what they care about, what they already know). Everything you choose, your content, tone, examples, should fit those two answers.`,
            `Structure carries the listener, who, unlike a reader, can't go back and reread. The classic shape still works best: a strong opening that hooks attention and previews your point, a body of two to four clear sections each making one idea with support, and a memorable close that lands the message. "Tell them what you'll tell them, tell them, tell them what you told them."`,
            `Spoken language differs from written. Sentences should be shorter and clearer; signposting ("First... Second... Finally...") helps listeners track where you are; and a vivid story or example sticks far better than a pile of statistics. You're not reading an essay aloud, you're crafting language for the ear, built to be heard once and remembered.`,
          ],
          image: `/voyager-assets/ela/l17-s2-build.webp`,
          imageCaption: `A great speech, like a great essay, is BUILT, and most work happens before you stand up. Start with your PURPOSE (inform, persuade, or inspire) and your AUDIENCE (who they are, what they care about, what they know); everything you choose should fit those two answers. STRUCTURE carries the listener, who can't reread: a strong opening that hooks and previews, a body of two to four clear sections each with support, and a memorable close. "Tell them what you'll tell them, tell them, tell them what you told them." Spoken language differs from written: shorter, clearer sentences; SIGNPOSTING ("First, Second, Finally") to help listeners track; and a vivid story that sticks far better than a pile of statistics. You craft language for the ear, heard once and remembered.`,
          vocab: [
            { word: `purpose and audience`,
              definition: `The two questions that shape every speech: what you're trying to do (inform, persuade, inspire) and who you're speaking to.`,
              audioPrompt: `Purpose and audience, {name}, shape every speech. Your purpose is what you're trying to do, inform, persuade, or inspire, and your audience is who you're speaking to. Every choice you make should fit those two answers.` },
            { word: `signposting`,
              definition: `Verbal cues like "First... Second... Finally..." that help listeners follow your structure, since they can't go back and reread.`,
              audioPrompt: `Signposting, {name}, means verbal cues like first, second, and finally, that tell listeners where you are in your speech. A listener can't reread like a reader can, so signposts help them follow and remember.` },
            { word: `rule three`,
              definition: `The speaker's shape: preview your point, deliver it in clear sections, then restate it, so a one-time listener can hold on to it.`,
              audioPrompt: `The classic speaker's shape, {name}, is tell them what you'll tell them, tell them, then tell them what you told them. Because a listener hears it only once, that repetition helps the message actually stick.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Delivery: It's Not Just The Words`,
          paragraphs: [
            `In speaking, how you say it can matter as much as what you say. Delivery is the live performance of your message, and it runs on a few channels. Your voice carries enormous power: vary your pace, slowing for emphasis, and use the pause, a moment of silence before a key point, which is one of the most powerful tools a speaker has. Volume and pitch keep you from droning.`,
            `Your body speaks too. Standing tall with open posture signals confidence; nervous fidgeting, swaying, or hiding behind a podium leaks anxiety to the audience. Purposeful gestures emphasize points; eye contact, looking at real people, not the floor or your notes, builds connection and trust. The audience reads your body before they fully process your words.`,
            `The biggest delivery mistake is reading a script word-for-word in a flat voice, eyes down. It kills connection. Far better to know your material well and speak to the audience from notes or an outline, so you sound like a person talking, not a machine reciting. Authentic, present delivery, imperfect but alive, beats a flawless recitation every time.`,
          ],
          image: `/voyager-assets/ela/l17-s3-delivery.webp`,
          imageCaption: `In speaking, HOW you say it can matter as much as WHAT you say. DELIVERY is the live performance, running on channels. Your VOICE carries power: vary your pace, slow for emphasis, and use the PAUSE, silence before a key point, one of a speaker's most powerful tools. Your BODY speaks too: open posture signals confidence, while fidgeting and hiding behind a podium leak anxiety; purposeful gestures emphasize, and EYE CONTACT with real people builds trust. The audience reads your body before they process your words. The biggest mistake is reading a script word-for-word, flat, eyes down, it kills connection. Better to know your material and speak from notes, sounding like a person talking, not a machine reciting. Present delivery, imperfect but alive, beats flawless recitation.`,
          vocab: [
            { word: `delivery`,
              definition: `The live performance of a speech, through voice, body, and eye contact. How you say it, as much as what you say.`,
              audioPrompt: `Delivery, {name}, is the live performance of your speech, how you use your voice, body, and eyes. In speaking, delivery can matter as much as the words themselves, because the audience experiences the whole person.` },
            { word: `the pause`,
              definition: `A deliberate moment of silence before a key point. One of the most powerful tools a speaker has.`,
              audioPrompt: `The pause, {name}, is a deliberate moment of silence, often right before a key point. It's one of the most powerful tools a speaker has: silence draws attention and makes the next words land with real weight.` },
            { word: `eye contact`,
              definition: `Looking at real people in the audience rather than the floor or your notes. It builds connection and trust.`,
              audioPrompt: `Eye contact, {name}, means looking at real people in your audience, not the floor or your notes. It builds connection and trust, making each listener feel you're speaking to them, not just reciting at a room.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Nerves, And The Debate Test`,
          paragraphs: [
            `Everyone feels nerves, even the most polished speakers; the goal isn't to eliminate them but to manage and even use them. Preparation is the best cure: the better you know your material, the calmer you feel. Practice out loud, breathe slowly before you begin, and reframe the adrenaline as energy and excitement rather than dread. Nerves mean you care.`,
            `Formal debate raises the bar. Two sides argue a set question under rules and time limits, each presenting a case, then rebutting the other. It demands everything you've built, claim, evidence, reasoning, clear delivery, but adds a fierce new skill: you can't just deliver a memorized speech. You have to listen.`,
            `That's the real test of debate: rebuttal in real time. You must hear the other side's actual argument, often one you didn't expect, and answer it on your feet, fairly and directly. Great debaters are great listeners first. They take down what the opponent really said, find its weak point, and respond, which is far harder, and far more impressive, than reciting a script.`,
          ],
          image: `/voyager-assets/ela/l17-s4-nerves.webp`,
          imageCaption: `Everyone feels NERVES, even polished speakers; the goal isn't to eliminate them but to manage and use them. Preparation is the best cure, the better you know your material, the calmer you feel. Practice out loud, breathe slowly, and reframe adrenaline as energy, not dread. Nerves mean you care. FORMAL DEBATE raises the bar: two sides argue a set question under rules and time limits, presenting a case then rebutting the other. It demands claim, evidence, reasoning, and clear delivery, but adds a fierce skill, you can't just deliver a memorized speech, you have to LISTEN. The real test is REBUTTAL in real time: hear the opponent's actual argument, often unexpected, and answer it on your feet. Great debaters are great listeners first.`,
          vocab: [
            { word: `managing nerves`,
              definition: `Handling speaking anxiety through preparation, practice, and breathing, and reframing adrenaline as energy rather than dread.`,
              audioPrompt: `Managing nerves, {name}, isn't about eliminating fear, everyone feels it, but handling it. Preparation, practice out loud, and slow breathing help, and you can reframe the adrenaline as energy. Nerves just mean you care.` },
            { word: `formal debate`,
              definition: `A structured contest where two sides argue a set question under rules and time limits, presenting cases and rebutting each other.`,
              audioPrompt: `Formal debate, {name}, is a structured contest where two sides argue a set question under rules and time limits. Each side presents its case, then rebuts the other, which demands both strong argument and sharp listening.` },
            { word: `rebuttal`,
              definition: `Answering the opponent's actual argument in real time. The true test of debate, and it requires listening first.`,
              audioPrompt: `Rebuttal, {name}, is answering your opponent's actual argument in real time, not reciting a script. It's the real test of debate, because you have to truly listen to what they said, then respond on your feet.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. Public speaking is feared by many and powerful for all, and the key truth is the same as for voice: it's built, not born, a craft of preparation, structure, delivery, and practice. A speech is built before you stand up, around purpose and audience, with a clear opening-body-close shape and language crafted for the ear.`,
            `Delivery, voice, body, eye contact, the powerful pause, can matter as much as the words, and the worst mistake is flat recitation with eyes down. Nerves are universal and manageable, not a verdict on you. And formal debate adds the fiercest skill of all: rebuttal in real time, which means the best debaters are the best listeners.`,
            `Now the perspectives screen brings voices arguing about what matters most in speaking: a champion of preparation, a champion of authentic connection, a debate competitor who prizes argument, a performer who prizes delivery, and a nervous speaker who found their way. Each holds a real piece of the truth. Your job is not to crown one, but to understand what makes a speaker move a room, and to build your own way to the podium. Onward.`,
          ],
          image: `/voyager-assets/ela/l17-s5-before.webp`,
          imageCaption: `Threads together. Public speaking is feared by many and powerful for all, and the key truth is the same as voice: BUILT, NOT BORN, a craft of preparation, structure, delivery, and practice. A speech is built before you stand up, around purpose and audience, with a clear opening-body-close shape and language for the ear. DELIVERY, voice, body, eye contact, the powerful pause, can matter as much as words; the worst mistake is flat recitation, eyes down. Nerves are universal and manageable. Formal debate adds the fiercest skill: REBUTTAL in real time, so the best debaters are the best listeners. The perspectives screen brings voices on what matters most: preparation, authentic connection, argument, delivery, and a nervous speaker who found their way.`,
          vocab: [
            { word: `rhetoric`,
              definition: `The art of effective and persuasive speaking. It combines what you say with how you deliver it to a live audience.`,
              audioPrompt: `Rhetoric, {name}, is the ancient art of effective, persuasive speaking. It combines what you say, your argument, with how you deliver it, your voice and presence, to genuinely move a live audience.` },
            { word: `presence`,
              definition: `The sense that a speaker is fully there, confident and connected with the audience, that commands attention.`,
              audioPrompt: `Presence, {name}, is the sense that a speaker is fully there, confident, connected, alive in the moment, which commands a room's attention. It comes from preparation and delivery working together, not from a magic gift.` },
            { word: `active listening`,
              definition: `Truly hearing what someone says in order to respond to it. In debate, it's the foundation of strong rebuttal.`,
              audioPrompt: `Active listening, {name}, means truly hearing what someone says so you can respond to their real argument. In debate it's the foundation of rebuttal, which is why great debaters are great listeners first.` },
          ],
        },

        {
          id: `l17-perspectives`,
          type: `perspectives`,
          headline: `What Moves A Room`,
          intro: `{name}, what matters most when you stand up to speak or debate? Here are five voices, each holding a real piece of the truth. Do not crown one. Understand what makes a speaker actually move a room, and build your own way to the podium.`,
          perspectives: [
            {
              id: `p1`,
              voice: `A champion of preparation`,
              era: `A way of speaking`,
              stance: `The speech is won before you stand up. Structure and rehearsal beat raw charisma every time.`,
              quote: `"Amateurs hope it goes well. Professionals prepare until it can't go badly."`,
              argument: `Most speaking failures are preparation failures: a muddled structure, no clear purpose, unrehearsed delivery. Do the work beforehand, know your purpose and audience, build a tight opening-body-close, practice aloud until it's in your bones, and confidence and calm follow naturally. Charisma is overrated; preparation is what reliably moves a room.`,
              evidence: `The way great speakers rehearse obsessively; how a clear structure helps a one-time listener follow and remember; how preparation is the best cure for nerves.`,
              strengths_and_limits: `Strength: targets the real, fixable cause of most failures and makes excellence repeatable. Limit: a perfectly prepared speech delivered woodenly, with no warmth or eye contact, can still fall flat, preparation enables connection but isn't a substitute for it.`,
            },
            {
              id: `p2`,
              voice: `A champion of authentic connection`,
              era: `A way of speaking`,
              stance: `People don't remember your outline; they remember how you made them feel. Connection is everything.`,
              quote: `"Talk to people, not at them. The moment they feel seen, they're yours."`,
              argument: `A flawless, over-rehearsed speech can leave an audience cold, while an imperfect speaker who is genuinely present, making real eye contact, speaking like a human, not a script, can move a room to tears. What persuades and inspires is the felt sense of a real person connecting with real people. Be present and authentic above all.`,
              evidence: `Why flat recitation kills a speech; how eye contact and a natural voice build trust; the way a vivid, personal story outlasts a wall of statistics in memory.`,
              strengths_and_limits: `Strength: captures the human heart of speaking, the connection no outline alone creates. Limit: "just be authentic" without preparation and structure often becomes a rambling, unclear talk; connection lands hardest when it rides on solid preparation.`,
            },
            {
              id: `p3`,
              voice: `A formal debate competitor`,
              era: `A way of speaking`,
              stance: `Delivery is nice, but the substance, your argument and your rebuttal, is what actually wins.`,
              quote: `"You can be smooth as silk, but if I dismantle your argument, you lose."`,
              argument: `In real debate, charm doesn't save a weak case. What matters is a tight argument, claim, evidence, reasoning, and above all the ability to listen to your opponent and rebut their actual point in real time. The hardest, most impressive skill isn't a polished speech; it's hearing an argument you didn't expect and taking it apart on your feet.`,
              evidence: `How debate is won on argument and rebuttal, not looks; how great debaters are great listeners first; the difference between reciting a script and answering a live opponent.`,
              strengths_and_limits: `Strength: rightly centers substance and the elite skill of real-time rebuttal that listening makes possible. Limit: in many real-world settings, audiences are moved by delivery and connection too, the strongest argument still needs to be heard and felt to win people over.`,
            },
            {
              id: `p4`,
              voice: `A performer who prizes delivery`,
              era: `A way of speaking`,
              stance: `The same words can bore or electrify, voice, pause, and presence are where speaking lives.`,
              quote: `"It's not the line. It's the silence you leave before it."`,
              argument: `Two people can say the identical sentence; one puts a room to sleep, the other gives them chills. The difference is delivery: pace, the well-placed pause, vocal variety, confident body language, command of the space. Content matters, but it's delivery that turns information into experience. Master the performance, and ordinary words become unforgettable.`,
              evidence: `How the pause is one of a speaker's most powerful tools; how vocal variety and body language transform a message; the way delivery makes the audience feel before they fully think.`,
              strengths_and_limits: `Strength: honors the real, often underrated power of how something is said. Limit: dazzling delivery wrapped around empty or dishonest content is hollow, or even manipulative, delivery should serve a message worth delivering, not replace it.`,
            },
            {
              id: `p5`,
              voice: `A once-terrified speaker who found their way`,
              era: `A way of speaking`,
              stance: `The fear never fully leaves, and that's fine, you can speak well while still afraid.`,
              quote: `"My hands still shake. I just don't wait for them to stop anymore."`,
              argument: `I used to think I had to conquer the fear before I could speak. I was wrong. The nerves never fully vanish, even now, but I learned to prepare well, breathe, and treat the adrenaline as energy rather than a warning. Courage isn't the absence of fear; it's speaking anyway. Anyone waiting to feel fearless will wait forever, and stay silent.`,
              evidence: `That glossophobia is nearly universal, even among polished speakers; that preparation and practice shrink fear without erasing it; that the skill is built, not born.`,
              strengths_and_limits: `Strength: frees people from the paralyzing myth that they must feel fearless first, and centers courage and growth. Limit: managing fear still requires the actual work, preparation, practice, technique, "feel the fear and do it anyway" isn't a substitute for building the craft.`,
            },
          ],
          synthesisPrompt: `After all five: when YOU have to speak or debate, what will you focus on most, preparation, connection, argument, delivery, or simply managing your fear? How do these pieces actually work together to move a room? Which voice spoke most to you? In 5-6 sentences.`,
          reflectionPrompt: `The lesson says the fear of speaking is nearly universal and never fully vanishes, courage is speaking anyway. When have you done something that scared you, not by waiting to feel unafraid, but by acting despite the fear? What did that teach you?`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the lesson say is the key truth about public speaking ability?`,
              options: [
                `It is a natural gift that only a lucky few people are born with.`,
                `It is built, not born, through preparation, structure, delivery, and practice.`,
                `It depends entirely on how loud and confident your natural voice is.`,
                `It can only be learned by people who never feel any nervousness.`,
              ],
              correctIndex: 1,
              explanation: `Like voice, speaking well is built, not born, a craft of preparation, structure, delivery, and practice, not a gift for a lucky few. The distractors treat it as innate, reduce it to volume, or wrongly require fearlessness.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `According to the lesson, where does most of the work of a great speech happen?`,
              options: [
                `Entirely in the moment, by improvising once you're on stage.`,
                `In choosing the fanciest possible vocabulary to impress the crowd.`,
                `Before you ever stand up, in preparation built around purpose and audience.`,
                `After the speech, by asking the audience what they thought.`,
              ],
              correctIndex: 2,
              explanation: `Most of the work happens before you stand up: knowing your purpose and audience and building a clear structure. The distractors rely on pure improvisation, fancy words, or after-the-fact feedback.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does the lesson stress structure ("opening, body, close") so much for a speech?`,
              options: [
                `Because a listener can't go back and reread, so structure helps them follow and remember.`,
                `Because rules require every speech to have exactly three parts.`,
                `Because using a clear structure lets you completely avoid having any real content or ideas.`,
                `Because audiences only ever listen to the opening anyway.`,
              ],
              correctIndex: 0,
              explanation: `Structure matters because, unlike a reader, a listener can't reread, so a clear opening-body-close shape and signposting help them follow and remember. The distractors invent a rule, dismiss content, or give up on the audience.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "the pause" and why is it valuable?`,
              options: [
                `A break to check your notes because you forgot your lines.`,
                `A long silence used to fill time when you have nothing to say.`,
                `A deliberate silence before a key point that makes it land with weight.`,
                `A signal to the audience that the speech is finally over.`,
              ],
              correctIndex: 2,
              explanation: `The pause is a deliberate moment of silence, often before a key point, and it's one of a speaker's most powerful tools because it draws attention and makes the next words land. The distractors recast it as forgetting, filler, or an ending signal.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the lesson call the biggest delivery mistake?`,
              options: [
                `Using any hand gestures at all while speaking.`,
                `Reading a script word-for-word in a flat voice with eyes down.`,
                `Pausing even once during the entire speech.`,
                `Making eye contact with people in the audience.`,
              ],
              correctIndex: 1,
              explanation: `The biggest mistake is reading a script word-for-word in a flat voice with eyes down, which kills connection; better to know your material and speak from notes like a real person. The distractors name things that are actually good (gestures, pauses, eye contact).`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the lesson say about nerves before speaking?`,
              options: [
                `Only weak or unprepared speakers ever feel nervous.`,
                `You must completely eliminate all nerves before you're allowed to speak.`,
                `Nerves are a sign you should give up and not speak at all.`,
                `Everyone feels them; the goal is to manage and even use them, not erase them.`,
              ],
              correctIndex: 3,
              explanation: `Everyone feels nerves, even polished speakers, and the goal is to manage and use them (through preparation, breathing, and reframing adrenaline as energy), not to eliminate them. The distractors call nerves a weakness, demand their elimination, or treat them as a stop sign.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the real, fierce new skill that formal debate adds beyond giving a speech?`,
              options: [
                `Memorizing a longer script than the other side memorized.`,
                `Rebuttal: listening to the opponent's actual argument and answering it in real time.`,
                `Speaking faster than your opponent so they can't interrupt.`,
                `Dressing more formally and looking more professional than everyone else who is in the room.`,
              ],
              correctIndex: 1,
              explanation: `Debate adds rebuttal, hearing the opponent's actual (often unexpected) argument and answering it on your feet, which is why great debaters are great listeners first. The distractors reduce it to memorization, speed, or appearance.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says great debaters are great _____ first.`,
              options: [
                `great memorizers who recite a flawless script`,
                `great listeners who truly hear the other side`,
                `great shouters who simply talk over everyone`,
                `great writers who prepare everything on paper`,
              ],
              correctIndex: 1,
              explanation: `Great debaters are great listeners first, because rebuttal requires truly hearing the opponent's real argument before you can answer it. The distractors miss that listening, not memorizing, shouting, or writing, is the foundation of rebuttal.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: To be a good public speaker, you first have to get rid of your fear completely, because nervousness and good speaking can't exist at the same time.`,
              correctAnswer: false,
              explanation: `False, and believing this myth is one of the main things that keeps people silent their whole lives. The fear of public speaking is nearly universal, surveys regularly rank it above heights, spiders, even death, and crucially, it does not disappear even for skilled, polished speakers. The veterans you admire on a stage almost always still feel nerves; their hands may still go cold, their heart may still race. What changed for them isn't that the fear vanished, it's that they learned to manage it and even use it. Preparation is the best cure: the better you know your material, the calmer you feel. Practicing out loud, breathing slowly before you begin, and reframing the adrenaline as energy and excitement rather than dread all shrink the fear without erasing it. And here's the freeing part: you can speak, and speak well, while still afraid. Courage was never the absence of fear; it's doing the thing anyway. Someone who waits to feel completely fearless before they'll stand up will wait forever and stay silent forever. The nerves actually mean you care. So the goal is never to eliminate fear as a prerequisite, it's to build the craft, manage the nerves, and speak despite them.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A classmate has to give a big presentation and says: "I'm too nervous, I'll just write it all out and read it word-for-word so I don't mess up, and I'll wait until I'm not scared anymore to really practice." Using the lesson, what's the best advice?`,
              options: [
                `Perfect plan: reading every word and waiting to feel calm is exactly how to do it.`,
                `Two parts of that plan will backfire: reading word-for-word in a flat voice with eyes down is the biggest delivery mistake and kills connection, and waiting to feel unafraid means never practicing, since nerves never fully vanish, so instead they should prepare and rehearse out loud now (which is the best cure for nerves), then speak from notes like a real person, accepting that some fear is normal.`,
                `Tell them presentations don't matter, so it's fine to do no preparation at all.`,
                `Advise them to speak as fast as possible so the scary part is over quickly.`,
              ],
              correctIndex: 1,
              explanation: `This applies two core lessons. Reading word-for-word in a flat voice with eyes down is named as the biggest delivery mistake because it kills connection; far better to know the material and speak from notes like a person. And waiting to feel unafraid before practicing fails because nerves never fully vanish, preparation and rehearsal are the actual cure, and courage is speaking despite fear. The distractors endorse the bad plan, dismiss preparation, or substitute speed for skill.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-fear`, category: `Doing it afraid`, prompt: `Courage isn't the absence of fear, it's speaking anyway. When have you done something that scared you without waiting to feel unafraid first? What did you learn about fear, and about yourself?` },
            { id: `reflect-connection`, category: `Talking to, not at`, prompt: `The lesson says people remember how you made them feel, not your outline. Think of a speaker, teacher, or person who genuinely moved you when they spoke. What did they do? Was it their words, their delivery, or the sense that they truly saw the room?` },
            { id: `reflect-listen`, category: `The listener's edge`, prompt: `Great debaters are great listeners first. When has truly listening, instead of just waiting for your turn to talk, completely changed a disagreement or conversation for you? Why is real-time listening so hard?` },
            { id: `reflect-heritage`, category: `Your voice, your room`, prompt: `Caro, you'll be pitching Coreverse, speaking to parents, maybe to investors or audiences, in two languages and across cultures. What kind of speaker do you want to be when you stand up for what you've built? What's the one thing you most want a room to feel?` },
            { id: `reflect-prep`, category: `Prepared, then free`, prompt: `Preparation is the best cure for nerves, the better you know your material, the calmer you feel. Where in your life has being deeply prepared turned dread into confidence? How might that change how you approach the next thing that scares you?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "great delivery is just manipulation, smooth talkers fooling people, what should matter is only the substance, said plainly." State that view as strongly as you can. Where does it land a real hit, and where does the lesson show delivery and substance need each other?` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Speaking is built by speaking, in low-stakes practice, again and again. These get you on your feet. Two paths.`,
          familyActivity: {
            title: `The Living-Room Podium`,
            duration: `One evening`,
            description: `Turn your living room into a friendly stage and practice the craft together, where it's safe to be imperfect. Round one, the two-minute talk: each person picks something they genuinely care or know about (a hobby, a favorite place, why a certain food is the best) and gives a short, prepared two-minute talk to the family. Before speaking, they decide their purpose and audience, build a quick opening-body-close, and pick one vivid story or example. While speaking, they practice delivery on purpose: stand tall, make real eye contact (no reading word-for-word), and try one deliberate pause before their most important line. Afterward, the family gives only kind, specific feedback, name one thing that worked and one thing to try next time. Round two, the friendly debate: pick a fun, low-stakes question ("is a hot dog a sandwich," "are cats or dogs better," "should pineapple go on pizza") and split into two sides. Each side gives a short case, and here's the key skill, before responding, each side has to first restate the other side's actual argument fairly, then rebut it. That trains the listening that real debate runs on. The goal isn't to win or to be perfect; it's to feel, together, that speaking is a craft you build by doing, and that the podium gets less scary every single time you stand at it.`,
          },
          projectOption: {
            title: `Prepare And Deliver A Real Speech, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Build and deliver a real speech, the way speakers actually do. Week 1, build it: choose a topic you care about and a clear purpose (to inform, persuade, or inspire) and audience. Then construct the speech for the ear, not the page: a strong opening that hooks and previews, a body of two to four clear points each with support (including at least one vivid story or example, not just facts), signposting between sections, and a memorable close that lands your message. Write it as talking points or an outline, not a word-for-word script, so you'll speak like a person, not a reciter. Week 2, rehearse and deliver: practice out loud, many times, ideally recording yourself or speaking to a mirror or family. Work your delivery deliberately, vary your pace, use at least one powerful pause before a key line, keep your posture open, and practice looking up and making eye contact instead of burying your eyes in notes. Use the nerves as energy, breathe before you start. Then deliver it for real to an audience, even just family. Afterward, write a short reflection: what went well, what you'd change, and, importantly, how managing your nerves felt versus what you expected. You'll come away having proven to yourself that speaking is built, not born, and that you can stand up, even afraid, and move a room.`,
            offerToParent: `Parent: opt your child into the prepare-and-deliver-a-speech project. Building a speech around purpose and audience, structuring it for a listener, and delivering it with real attention to voice, pause, and eye contact develops the Speaking and Listening standards directly, and few skills matter more for school, career, and civic life. Rehearsing out loud and reflecting on managing nerves builds the durable confidence that public speaking is learnable. It's rigorous, deeply practical, CCSS-aligned work that can genuinely change your child's relationship with one of life's most feared, and most valuable, skills.`,
          },
          identityQuestion: `If you become someone who can prepare a speech, stand up even while afraid, connect with a real audience, and listen well enough to answer the other side on your feet, what doors does that open for you, in school, in your work, in standing up for what you believe, that someone who stays silent because they're waiting to feel fearless can never quite reach?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can stand up and speak even while afraid.`,
            `A speaker who connects with a room instead of hiding in notes.`,
            `Someone who listens well enough to answer the other side.`,
          ],
          saveKey: `identity_responses_ela_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventeen done, and you've stepped up to the podium. You learned that public speaking is one of the most feared skills there is, and one of the most powerful, and that the freeing truth is the same as for voice: it's built, not born, a craft of preparation, structure, delivery, and practice. You learned to build a speech before you stand up, around purpose and audience, with a clear opening-body-close shape and language crafted for the ear, since a listener can't reread. You learned that delivery, your voice, your body, your eyes, and the powerful pause, can matter as much as the words, and that flat recitation with eyes down is the one big mistake to avoid. You learned that nerves are universal and manageable, not a verdict on you, and that courage is speaking anyway, not waiting to feel fearless. And in formal debate you found the fiercest skill of all, rebuttal in real time, which proves that the best debaters are the best listeners. Next, our second-to-last ELA lesson: digital literacy, learning to evaluate the flood of information online, where anyone can publish anything. Onward, {name}. — Quill`,
          badge: `orator`,
          badgeName: `Orator`,
          xpEarned: 75,
          competencies: [
            `Understands public speaking as a learnable craft, built not born, despite near-universal fear`,
            `Builds a speech around purpose and audience with a clear opening-body-close structure`,
            `Crafts spoken language for the ear, using signposting, stories, and the rule of three`,
            `Uses delivery deliberately: voice, pace, the pause, posture, gestures, and eye contact`,
            `Manages nerves through preparation, practice, and reframing, rather than seeking to eliminate them`,
            `Understands formal debate and the real-time skill of rebuttal`,
            `Recognizes that great debaters are great listeners first, grounding rebuttal in active listening`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Digital Literacy — Evaluating Online Information`,
            hook: `Navigating a world where anyone can publish anything. A Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L17 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
