// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L13 — Communication for the Future
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : real communication research — clarity, audience awareness,
//            listening, the rising value of writing in an AI age. Builds
//            on Social Leadership L02-L04 (listening, empathy, honest
//            voice) and applies to written communication specifically.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (clear / weak / actively bad)
//            Trick case = polished AI-sounding text that says nothing real.
// SCOPE: communication = encoding thoughts so others receive them clearly,
//        writing matters MORE in AI age (you must edit AI output), the
//        listening side, why dishonest communication harms everyone,
//        becoming a clear human
// VOICE: Byte = sharp explainer, treats clear communication as the
//        ultimate fox skill in a foggy world
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-13`,
      title: `Communication for the Future`,
      duration: 18,
      xpReward: 75,
      badge: `clear-communicator`,
      badgeName: `Clear Communicator`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle a skill that's becoming MORE important, not less, even though AI can write: COMMUNICATION. Real communication. Clear writing. Honest speaking. Real listening. Some people thought "AI writes for us, so writing doesn't matter anymore." That's backwards. Now that AI can produce text instantly, the kids who can communicate CLEARLY, HONESTLY, and with REAL THOUGHT stand out way more than before. Real communication is one of the foxiest skills in a world full of generic AI-sounding content. Let's sharpen yours.`,
          headline: `Communication for the Future`,
          subtitle: `Clear writing, honest speaking, real listening — more valuable in an AI age, not less`,
          visual: `/ue-assets/fs/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Communication Actually Is`,
          paragraphs: [
            `Here's a useful way to understand communication at its core. When you communicate, you're trying to MOVE A THOUGHT from your mind into someone else's mind. Sounds simple. It's not. Your thought is rich and full of context only you have. The other person has a different mind, different background, different mood. Between you and them is a noisy world full of distractions. So communication is the SKILL of ENCODING thoughts into words clearly enough that they survive the journey. Some people are brilliant at this. Some people aren't. The good news, like everything in this subject, it's a skill anyone can build.`,
            `Here's why this matters MORE in the AI age. Now that AI can generate text in seconds, the world is FLOODING with average, polished, generic content. Most of it sounds smooth but says nothing specific. The kids and adults who can communicate with REAL clarity, SPECIFIC detail, HONEST voice, and ACTUAL thought stand out way more than before. Strong communication is becoming RARER (because most content is now AI-smoothed) and MORE VALUABLE (because real human clarity cuts through the noise). The fox-style move: become the kid whose writing and speaking sound LIKE A REAL HUMAN with REAL thoughts about REAL things.`,
          ],
          image: `/ue-assets/fs/l13-s1-actually.webp`,
          imageCaption: `Communication is moving a thought clearly from your mind to someone else's. A trainable skill.`,
          vocab: [
            { word: `communication as encoding`,
              definition: `The understanding that communication is the SKILL of encoding thoughts into words clearly enough that they survive the journey from your mind to someone else's. Different minds, different contexts, noisy world. A trainable skill. In an AI age, strong human communication is RARER and MORE VALUABLE because most content sounds generic.`,
              audioPrompt: `Communication as encoding is the understanding that communication is the skill of encoding thoughts into words clearly enough to survive the journey from your mind to someone else's, {name}. Your thought is rich and full of context only you have. The other person has a different mind, different background, different mood. The good news, it's a skill anyone can build. In the AI age, strong communication is becoming rarer because most content is AI-smoothed and more valuable because real human clarity cuts through the noise.` },
            { word: `specificity`,
              definition: `The most powerful tool for clear communication. Replacing vague words ("good," "interesting," "fun") with SPECIFIC details — what exactly happened, what specifically made it interesting. Specific details are memorable; vague communication is forgettable. The fox-test: look for any vague word and replace it with something specific.`,
              audioPrompt: `Specificity is the most powerful tool for clear communication, {name}. Replacing vague words like good or interesting with specific details about what exactly happened. It was a great day tells you nothing. Today I built a treehouse with my dad and the hammer slipped twice and we laughed both times tells a real story. Specific details are what make communication memorable. Vague communication is forgettable. The fox-test for any writing: look for vague words and replace them with something specific. What was good? What specifically happened? That's the difference.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Pillars of Clear Communication`,
          paragraphs: [
            `Researchers studying communication have found three pillars that make it actually CLEAR. FIRST, BE SPECIFIC. Most weak communication is too vague. "It was a great day" tells you nothing. "Today I built a treehouse with my dad and the hammer slipped twice and we laughed both times" tells you a real story. Real communication has SPECIFIC details that show what really happened. Generic communication has none. The fox-move: when writing or speaking, look for places where you used VAGUE words ("good," "interesting," "fun") and replace them with SPECIFIC ones (what was good? what specifically happened?). Specificity is the difference between memorable and forgettable.`,
            `SECOND, CONSIDER YOUR AUDIENCE. Clear communicators ask themselves: "Who am I talking to? What do they ALREADY KNOW? What do they NEED to know? What would confuse them?" The same idea is communicated differently to a younger sibling than to a teacher than to a friend. Adjusting your communication to fit your audience isn't fake, it's respectful and effective. Weak communicators talk the same way to everyone and lose half their audience. THIRD, USE STRUCTURE. Organize your ideas. Lead with the main point sometimes. Give examples. Have a beginning, middle, and end if you're writing something longer. The brain receives structured information much better than rambling. These three pillars (specific, audience-aware, structured) transform communication from average to excellent. They are simple. They take practice.`,
          ],
          image: `/ue-assets/fs/l13-s2-pillars.webp`,
          imageCaption: `Three pillars: SPECIFIC details + audience awareness + structure. Real human clarity.`,
          vocab: [
            { word: `three pillars of clear communication`,
              definition: `(1) BE SPECIFIC, real details (not "it was great" but what specifically happened). (2) CONSIDER YOUR AUDIENCE, who are they, what do they know, what do they need? (3) USE STRUCTURE, organize ideas, lead with main point, give examples. Simple and powerful. Transform average communication into excellent.`,
              audioPrompt: `The three pillars of clear communication, {name}. First, be specific. Most weak communication is too vague. It was a great day tells you nothing. Today I built a treehouse and the hammer slipped twice tells a real story. Second, consider your audience. Who am I talking to? What do they already know? What would confuse them? The same idea is communicated differently to a sibling than to a teacher. Third, use structure. Organize ideas, lead with the main point, give examples. These three pillars transform communication from average to excellent.` },
            { word: `audience awareness`,
              definition: `The practice of asking "Who am I talking to? What do they already know? What would confuse them?" before communicating. The same idea is communicated differently to a younger sibling than a teacher than a friend. Adjusting communication to fit your audience isn't fake — it's respectful and effective.`,
              audioPrompt: `Audience awareness is the practice of asking who you're talking to before communicating, {name}. What does this person already know? What would confuse them? What do they need to hear? The same idea is communicated completely differently to a younger sibling than to a teacher than to a friend. Adjusting how you communicate to fit your audience isn't fake, it's respectful and effective. Weak communicators talk the same way to everyone and lose half their audience. Strong communicators always ask who's listening first.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Writing Matters MORE in the AI Age`,
          paragraphs: [
            `Here's a counter-intuitive truth most people get wrong. Now that AI can write, some kids assume they don't need to learn writing themselves. The OPPOSITE is true. Writing skill matters more than ever. Here's why. First, AI writes generically (L07!). To get GOOD writing from AI, you have to know what good writing IS, edit AI output, add specificity, cut filler. Without writing skill, you can't even tell when AI output is bad. Second, writing forces THINKING. The act of writing crystallizes your thoughts. Kids who never write much have hazy thinking; kids who write regularly think more clearly about everything. (L08 active recall is partly why.) Outsourcing writing to AI means outsourcing thinking, which makes you less capable over time.`,
            `Third, REAL HUMAN VOICE stands out. AI text is fluent but generic, no specific lived experience, no real personal voice, no unique perspective. Writing that has YOU in it, your specific experiences, your real questions, your honest opinions, is increasingly valuable as the world floods with AI-smoothed content. The kids who keep their own writing skill sharp become the writers people actually want to read. Fourth, WRITING IS THINKING TRAINING. The same skills that make writing clear (specificity, structure, audience awareness) make all communication clearer. Speaking. Texting. Making videos. Even thinking itself. So even kids who don't plan to be writers benefit hugely from keeping their writing skill strong. Don't let AI write your essays. Write them yourself. Your future self will be way sharper.`,
          ],
          image: `/ue-assets/fs/l13-s3-writing.webp`,
          imageCaption: `Writing matters MORE now. AI writes generic. Real human voice stands out. Writing IS thinking training.`,
          vocab: [
            { word: `why writing matters in ai age`,
              definition: `Counter-intuitive truth. Writing matters MORE now, not less. To get good AI output, you need writing skill to evaluate and edit it. Writing forces clear thinking. Real human voice stands out in a generic-AI world. Writing is thinking training for ALL communication. Don't outsource writing to AI; you outsource thinking.`,
              audioPrompt: `Why writing matters in the AI age is a counter-intuitive truth most people get wrong, {name}. Some kids assume that now AI writes, they don't need to learn writing themselves. The opposite is true. AI writes generically. To get good writing from AI, you need writing skill to edit and improve. Writing forces clear thinking, kids who never write much have hazy thinking. Real human voice stands out in a generic-AI world. Writing is thinking training, the same skills that make writing clear make all communication clearer.` },
            { word: `real human voice`,
              definition: `Communication that sounds like a specific actual person, not like generic AI text. Includes specific lived experiences, honest opinions, unique perspective, real questions. AI text is fluent but generic. Human voice is what makes writing actually worth reading — the YOU in it. Increasingly valuable in an AI-flooded world.`,
              audioPrompt: `Real human voice is what makes communication actually worth reading or hearing, {name}. It sounds like a specific actual person, not like generic AI text. It includes specific lived experiences, honest opinions, unique perspective, real questions. AI text is fluent but generic. No specific experience, no personal voice, no unique perspective. Writing that has YOU in it, your specific experiences, your honest opinions, is increasingly valuable as the world floods with AI-smoothed content. The kids who keep their own voice sharp become writers people actually want to read.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Real Listening (The Other Half)`,
          paragraphs: [
            `Communication is two-way. So far we've focused on you sending clearer messages. The other half is RECEIVING them well, REAL LISTENING (Social Leadership L02!). Most people don't really listen, they wait for their turn to talk while half-thinking about what they'll say next. Researchers studying real listening have found it requires putting your phone down, looking at the person, focusing on what they're actually saying (not your response to it), and asking questions to understand BETTER. Sounds simple. Almost no one does it. The kids who actually listen become trusted in ways that matter.`,
            `Listening also applies to READING. Reading carefully, asking yourself "what is the writer really saying?" and questioning your own quick reactions, makes you a much smarter receiver of information. In a world of fast scrolling and surface skimming (L04!), the kids who actually READ THINGS carefully understand way more than their peers. Byte's first teaching: communication is moving a thought clearly from one mind to another. Three pillars (specific, audience-aware, structured) make communication clear. Writing matters MORE in the AI age (don't outsource thinking). Real listening is the underrated other half. The fox-communicator is the kid whose words land, who listens to others' words, and who stays a real human voice in a world drowning in generic content. The world needs more clear, honest communicators. Be one of them.`,
          ],
          image: `/ue-assets/fs/l13-s4-listening.webp`,
          imageCaption: `Real listening is the other half. Phone down, focused, asking to understand. Reading carefully too.`,
          vocab: [
            { word: `real listening`,
              definition: `Putting your phone down, looking at the person, focusing on what they're actually saying (not your response), asking questions to understand better. Also applies to READING carefully (asking what the writer really means). Almost no one does this well. The kids who do become trusted in ways that matter.`,
              audioPrompt: `Real listening is the underrated other half of communication, {name}. Most people don't really listen, they wait for their turn to talk while half-thinking about what they'll say next. Researchers found real listening requires putting your phone down, looking at the person, focusing on what they're saying, not your response, and asking questions to understand better. Listening also applies to reading. Reading carefully, asking what is the writer really saying, makes you a much smarter receiver of information. The kids who actually listen become trusted in ways that matter.` },
            { word: `active reading`,
              definition: `Reading carefully while asking questions: "What is the writer really saying? Do I agree? What am I missing? Is this specific or vague?" The opposite of surface skimming. Active reading makes you a much smarter receiver of information and builds the same critical thinking that makes writing clearer.`,
              audioPrompt: `Active reading is reading carefully while asking questions, {name}. What is the writer really saying? Do I agree? What evidence do they give? Is this specific or vague? This is the opposite of surface skimming, fast scrolling without really taking anything in. Researchers studying comprehension found that active reading dramatically improves understanding compared to passive skimming. The same skill that makes you a better reader makes you a better thinker and writer. In a world of fast content and short attention, active reading is a quiet superpower.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four examples of communication. Classify each: CLEAR COMMUNICATION (specific, audience-aware, real voice), WEAK COMMUNICATION (vague, generic, no audience awareness), or ACTIVELY BAD (dishonest, manipulative, designed to deceive)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `clear`,  label: `Clear Communication`,    color: `#34D399`, description: `Specific details, considers audience, structured, real human voice, honest. The good kind.` },
            { id: `weak`,   label: `Weak Communication`,      color: `#FBBF24`, description: `Vague, generic, no audience awareness, rambling. Not bad-intentioned, just poorly done.` },
            { id: `bad`,    label: `Actively Bad`,             color: `#F87171`, description: `Designed to deceive, manipulate, or harm. Lies, manipulation tactics, fake friendliness with bad intent.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Example #1`,
              clues: [
                { text: `A kid writes a thank-you message to a coach: "Coach Lee, thank you for staying after practice on Tuesday to help me fix my throw. I couldn't get the spin right, and your trick of holding the ball with my fingertips made it click for me."` },
                { text: `Specific details, real moment, direct to the coach.` },
                { text: `Coach Lee will remember this message.` },
              ],
              correctAnswer: `clear`,
              realWorldExample: `Specific moment + real detail + considers audience + real voice = clear communication.`,
              explanation: `Pure clear communication. Specific details (Tuesday after practice, the fingertip grip), considers audience (directly addresses the coach), real voice (sounds like a real kid's thanks), and useful information (mentions exactly what helped). Coach Lee will read this and FEEL the gratitude in a way that "thanks for helping me" never would. Specificity is the difference between memorable and forgettable communication.`,
            },
            {
              id: `case-2`,
              caseTitle: `Example #2`,
              clues: [
                { text: `A kid writes a school report: "This topic is very interesting and important. There are many things to know about it. People should learn more about this topic. It is fascinating in many ways."` },
                { text: `No specifics, no facts, no real claims.` },
                { text: `The reader has no idea what the topic actually IS by the end.` },
              ],
              correctAnswer: `weak`,
              realWorldExample: `Vague + generic + no specifics + no audience awareness = weak communication.`,
              explanation: `Pure weak communication. Vague words ("interesting," "important," "many things"), no specifics, no actual facts or claims, no real thought behind any of it. The kid filled space without saying anything. Not bad-intentioned, just poorly done. The fix: replace every vague word with a specific detail. "This topic is interesting" becomes "Photosynthesis lets plants turn sunlight into food, which is the source of most energy in living things." Specific tells. Vague hides.`,
            },
            {
              id: `case-3`,
              caseTitle: `Example #3`,
              clues: [
                { text: `An online ad says "Doctors HATE this one weird trick!" with a clickbait image of a celebrity who never endorsed anything.` },
                { text: `The ad leads to a sales page that exaggerates claims and uses fake reviews.` },
                { text: `The whole thing is designed to deceive people into buying something useless.` },
              ],
              correctAnswer: `bad`,
              realWorldExample: `Clickbait + fake endorsement + fake reviews + deception = actively bad communication.`,
              explanation: `Pure actively bad communication. This isn't just weak (which is just poorly done), it's DELIBERATELY designed to deceive and manipulate. Fake authority (the celebrity didn't endorse), clickbait emotional language, fake reviews, exaggerated claims. The goal isn't to communicate truth, it's to manipulate you into clicking and buying. This kind of communication has a real cost, it teaches people not to trust anything, makes the world dumber, and often harms the people it deceives. Learn to spot it and ignore.`,
            },
            {
              id: `case-4`,
              caseTitle: `Example #4 — The Tricky One`,
              clues: [
                { text: `A polished essay on a topic, perfect grammar, smooth sentences, no obvious errors.` },
                { text: `When you read carefully, you notice it never says anything SPECIFIC.` },
                { text: `It uses phrases like "in today's rapidly evolving landscape" and "we must delve into the multifaceted nature" without ever making a concrete claim.` },
              ],
              correctAnswer: `weak`,
              realWorldExample: `Polished + smooth + sounds professional but says nothing specific = weak (often AI-generated).`,
              explanation: `Tricky, {name}! It LOOKS like clear communication because the grammar is perfect and it sounds professional. So you might call it clear. But look closely. No specifics, generic phrases ("rapidly evolving landscape," "multifaceted nature"), no concrete claims, no real voice. Pure weak communication in disguise (the "polished but empty" version, often AI-generated). Lesson: SOUNDING smart isn't the same as BEING clear. Some of the worst communication sounds the most professional. The fox-test for any writing, can you replace it with shorter, more specific words and lose nothing? If yes, it's weak. If no, it's clear. Polish doesn't prove clarity.`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is COMMUNICATION at its core?`,
              options: [
                `Just talking`,
                `The SKILL of ENCODING thoughts into words clearly enough that they survive the journey from your mind to someone else's — trainable, more valuable in AI age`,
                `Magic`,
                `Random words`,
              ],
              correctIndex: 1,
              explanation: `Communication is the skill of encoding thoughts into words clearly enough to survive the journey from your mind to someone else's. Different minds, contexts, noisy world. A trainable skill. In the AI age, strong human communication is rarer and more valuable because most content sounds generic.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What are the THREE PILLARS of clear communication?`,
              options: [
                `Loud, fast, long`,
                `(1) BE SPECIFIC (real details, not vague), (2) CONSIDER YOUR AUDIENCE (who, what they know), (3) USE STRUCTURE (organize, lead with main point)`,
                `Random rules`,
                `Just write more`,
              ],
              correctIndex: 1,
              explanation: `Three pillars: BE SPECIFIC (replace vague words with specific details, "great day" vs. "built a treehouse with my dad"). CONSIDER YOUR AUDIENCE (who are they, what do they know, what would confuse them). USE STRUCTURE (organize ideas, lead with main point, give examples). Transform communication from average to excellent.` },

            { id: `l13-q3`, format: `true-false`,
              question: `True or false: Since AI can write, writing skill matters LESS now.`,
              correctAnswer: false,
              explanation: `False. Writing matters MORE now, not less. AI writes generically; you need writing skill to evaluate and edit AI output. Writing forces clear thinking, outsourcing writing means outsourcing thinking. Real human voice stands out in an AI-flooded world. Writing IS thinking training for all communication.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `Why does REAL HUMAN VOICE stand out in the AI age?`,
              options: [
                `Random`,
                `AI text is fluent but GENERIC — no specific lived experience, no unique perspective; writing with YOUR specific experiences and honest opinions is INCREASINGLY VALUABLE`,
                `It doesn't`,
                `Just sounds nice`,
              ],
              correctIndex: 1,
              explanation: `AI text is fluent but generic. No specific lived experience, no real personal voice, no unique perspective. Writing that has YOU in it (specific experiences, real questions, honest opinions) is increasingly valuable as the world floods with AI-smoothed content. Kids who keep their own writing skill sharp become writers people actually want to read.` },

            { id: `l13-q5`, format: `multiple-choice`,
              question: `Why does WRITING force CLEARER THINKING?`,
              options: [
                `It doesn't`,
                `The ACT of writing CRYSTALLIZES your thoughts — kids who write regularly think more clearly about everything; outsourcing writing means outsourcing thinking`,
                `Random`,
                `Just busywork`,
              ],
              correctIndex: 1,
              explanation: `The act of writing crystallizes your thoughts. Kids who never write much have hazy thinking; kids who write regularly think more clearly about everything. (Related to L08 active recall, retrieval strengthens thought.) Outsourcing writing to AI means outsourcing thinking, which makes you less capable over time.` },

            { id: `l13-q6`, format: `true-false`,
              question: `True or false: SOUNDING smart and being CLEAR are the same thing.`,
              correctAnswer: false,
              explanation: `False. Sounding smart isn't the same as being clear. Some of the WORST communication sounds the most professional (polished AI-style text with no specifics). The fox-test: can you replace text with shorter, more specific words and lose nothing? If yes, it's weak. If no, it's clear. Polish doesn't prove clarity.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `What is REAL LISTENING?`,
              options: [
                `Waiting your turn to talk`,
                `Putting PHONE DOWN, focusing on what they're actually saying (not your response), asking questions to understand better — most people don't do this, kids who do become trusted`,
                `Half-listening`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Real listening requires putting your phone down, looking at the person, focusing on what they're actually saying (not your response to it), and asking questions to understand better. Most people wait for their turn to talk while half-thinking about what they'll say. Almost no one really listens. Kids who do become trusted in ways that matter.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about communication?`,
              options: [
                `Just write more`,
                `Communication is moving a thought clearly between minds. Three pillars (specific, audience-aware, structured) make it clear. Writing matters MORE in AI age. Real listening is the underrated other half`,
                `Use AI for everything`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Communication is moving a thought clearly from one mind to another. Three pillars (specific, audience-aware, structured) make it clear. Writing matters more in the AI age, don't outsource thinking. Real listening is the underrated other half. The fox-communicator stays a real human voice in a world drowning in generic content.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Pick a recent piece of writing of yours (text, email, school work). How SPECIFIC was it? Could you rewrite one paragraph with more specific details?` },
            { id: `r2`, text: `Be honest, do you write LESS now because AI can? What might that be costing your own thinking? What's ONE writing practice you'll commit to?` },
            { id: `r3`, text: `Think about your last few real conversations. Were you truly LISTENING or waiting to talk? Phone down? Eyes on the person? What could you do better?` },
            { id: `r4`, text: `Whose voice (in writing or speaking) do you find genuinely interesting? What makes it real? What can you learn from them?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Communication research is one of the most established and useful areas in the social sciences. Studies on writing, listening, and clarity have produced consistent findings: the three pillars (specificity, audience awareness, structure) work in every context, school, work, relationships, public communication. The AI age is making one truth even clearer, generic communication has flooded the world, and the people who can communicate with real human clarity stand out more than ever. Strong writing has become rarer (because most people now offload to AI), making it more valuable for those who keep building it. Byte's note: you're growing up at the exact moment when "average" writing is being commoditized by AI. This means two things. One, you don't have to compete on the smoothness AI produces. Two, you DO need to keep your own communication skill sharp, because the things that AI CAN'T do (specific lived experience, real voice, honest perspective, careful listening) are what makes communication actually MATTER. Write your own essays. Have your own conversations. Listen for real. Read carefully. Be the kid whose words land in a world drowning in noise. Foxes have always been known for hearing what others missed and saying what others couldn't. Be one of those foxes.`,
          familyAdventure: `Family Communication Practice. As a family, try this for one week: at dinner, ONE family member shares a story from their day in the most SPECIFIC way possible. Not "school was fine" but the actual specific moment, what someone said, the weird thing that happened, the texture of it. Others practice REAL LISTENING (phones away, eyes on the speaker, asking follow-up questions). Adults model both sides. Building a family habit of specific communication AND real listening grows everyone's skills together. Many families find this becomes a favorite tradition that deepens connection at the same time.`,
          creativePrompt: {
            intro: `Write a piece of clear communication — specific, real voice, considers audience.`,
            floor: `Write at least 5 sentences. Focus on a real specific moment from your life.`,
            stretch: `Write 8 to 10 sentences. Build something specific and audience-aware.`,
            open: `Write as much as you want. Choose a PERSON in your life you want to thank, appreciate, ask something of, or tell something important to. Write them a CLEAR communication piece (could be a letter, a message, a journal entry to be turned into a real message later). Apply the THREE PILLARS. (1) Be SPECIFIC, real details, real moments, real things. Not "you're great" but the actual specific reasons. (2) Consider your AUDIENCE, write directly to THIS person, not in general. What do they need to hear? What would they understand? (3) Use STRUCTURE, beginning that gets their attention, middle with the substance, ending that lands. Make it sound like YOU, not like AI, not like generic. Include at least one specific moment, image, or detail only YOU would know to include. End with the kind of clarity that makes the receiver feel seen. Don't make it polished and empty. Make it real and clear.`,
            frames: [
              `The person I'm writing to: ___.`,
              `One SPECIFIC moment/detail about them: ___.`,
              `What I really want to say: ___.`,
              `The clearest way to say it: ___.`,
              `My final line (the one that lands): ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Sharp, clear work, {name}! You now know how to communicate in a way that stands out in an AI-flooded world. Three pillars (specific, audience-aware, structured). Writing matters MORE now. Real listening is the underrated other half. Be the kid whose words actually land. Next, we tackle a topic almost no curriculum handles well at your age, MONEY, TECH & CHOICES. Honest, age-appropriate, no anxiety, no get-rich pressure. Just real wisdom. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `clear-communicator`,
          badgeName: `Clear Communicator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L13;
