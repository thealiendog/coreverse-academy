// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L09 — Memory & How It Really Works
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : real memory science — encoding/storage/retrieval model,
//            short-term vs. long-term memory, sleep consolidation, the
//            forgetting curve, what helps and hurts memory. Builds on
//            L08 (how to learn) with deeper neuroscience.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (memory boosters / memory neutral / memory
//            killers). Trick case = "highlighting" which FEELS productive
//            but actually does very little for memory.
// SCOPE: how memory actually works (encoding, storage, retrieval), what
//        helps (sleep, meaning, retrieval, spacing, emotion), what hurts
//        (cramming, multitasking, stress, sleep deprivation), and the
//        practical takeaway: design your life for good memory
// VOICE: Byte = excited explainer, makes the brain feel like a fascinating
//        machine you get to use
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-09`,
      title: `Memory & How It Really Works`,
      duration: 18,
      xpReward: 75,
      badge: `memory-builder`,
      badgeName: `Memory Builder`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we go deeper into one of your most powerful tools, your MEMORY. You use it every day without thinking about it. Remembering people's names, what happened yesterday, how to ride a bike, the math you learned in class, the lyrics to a song you love. But almost no one understands how memory ACTUALLY works, what helps it, what hurts it, why we forget. The science is fascinating, and once you know it, you can use your memory way better. Let's go inside the fox brain.`,
          headline: `Memory & How It Really Works`,
          subtitle: `The real science of how you remember (and forget). And how to remember better`,
          visual: `/ue-assets/fs/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How Memory Actually Works (3 Steps)`,
          paragraphs: [
            `Here's the basic science. Memory has THREE stages, and understanding them changes everything. STAGE 1 is ENCODING. This is when information first enters your brain. You hear someone's name, you see a word, you experience a moment. The information gets converted into a form your brain can store. STAGE 2 is STORAGE. Your brain holds onto the information across time. Some of this is brief (a few seconds for a phone number you're about to dial), some is forever (your earliest childhood memories). STAGE 3 is RETRIEVAL. This is when you actually USE the memory, pull it back up when you need it.`,
            `When memory "fails," it can be failing at any of those three stages. You didn't encode well (weren't paying attention when someone said their name). You stored it but it faded (haven't thought about it in months). Or you stored it but can't retrieve it (you "know it but can't recall it"). Knowing which stage is the problem tells you what to fix. The good news, you can IMPROVE all three stages with the right practices. Most of what people think of as "bad memory" is actually just bad encoding habits or no retrieval practice. Memory isn't a fixed talent. It's a system you can train.`,
          ],
          image: `/ue-assets/fs/l09-s1-three-stages.webp`,
          imageCaption: `Three stages. ENCODING (info enters), STORAGE (held across time), RETRIEVAL (pulled back when needed).`,
          vocab: [
            { word: `encoding, storage, retrieval`,
              definition: `The three stages of memory. ENCODING is when information first enters your brain (depends on attention and meaning). STORAGE is your brain holding it across time. RETRIEVAL is pulling the memory back when needed. Memory "failures" happen at one of these stages. Knowing which one is broken tells you what to fix.`,
              audioPrompt: `Encoding, storage, retrieval are the three stages of memory, {name}. Encoding is when information first enters your brain. You hear a name, see a word, experience a moment. The info gets converted into a form your brain can store. Storage is your brain holding the information across time. Some brief, some forever. Retrieval is when you actually use the memory, pull it back when you need it. When memory fails, it's failing at one of those three stages. Knowing which stage is the problem tells you what to fix.` },
            { word: `short-term vs. long-term memory`,
              definition: `An important distinction within the storage stage. Short-term memory holds information for seconds to minutes. Without further encoding, it fades. Long-term memory is where information goes when encoded deeply and retrieved enough times that the brain builds permanent storage. Moving information from short-term to long-term is the goal of real learning. Sleep, retrieval practice, and spacing all help this transfer.`,
              audioPrompt: `Short-term versus long-term memory is an important distinction within the storage stage, {name}. Short-term memory is brief, holding information for seconds to minutes, like a phone number you're about to dial. If you don't do anything with it, it fades. Long-term memory is where information goes when it's been encoded deeply and retrieved enough times that the brain builds permanent storage. Moving information from short-term to long-term is the goal of real learning. Sleep, retrieval practice, and spacing all help this transfer happen.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What ACTUALLY Strengthens Memory`,
          paragraphs: [
            `Researchers have studied memory for over a century. The findings are clear. Here's what really STRENGTHENS your memory. ATTENTION at the moment of encoding. If you weren't paying attention when something happened, you didn't encode it well, so there's nothing to remember. The phone next to you isn't just stealing your time, it's stealing your memory of whatever you're doing. MEANING matters hugely. Your brain remembers things connected to existing knowledge and emotion much better than random facts. The fox's name "Byte" connects to computer bytes and quick clever bites, easier to remember than a random sound. CONNECT new info to what you already know.`,
            `RETRIEVAL PRACTICE (L08 active recall!), every time you pull a memory back, it gets stronger. Practice retrieving > re-reading every time. SPACING (L08 spaced repetition!), reviewing at growing intervals dramatically strengthens long-term memory. SLEEP is huge. Your brain CONSOLIDATES memories during sleep, that's part of why good sleep makes you smarter (Life Wellness L02!). Pulling all-nighters before tests actually WORSENS your memory. EMOTION strengthens memory, things you feel deeply about stick. STORYTELLING helps too, your brain remembers stories far better than disconnected facts. The fox toolkit: pay attention, make it meaningful, retrieve often, space it out, sleep well, feel something about it, tell it as a story. Use these together and your memory transforms.`,
          ],
          image: `/ue-assets/fs/l09-s2-strengthens.webp`,
          imageCaption: `Boosters. Attention, meaning, retrieval, spacing, sleep, emotion, story. Use them together.`,
          vocab: [
            { word: `memory boosters`,
              definition: `Research-backed practices that strengthen memory. ATTENTION at encoding (no distractions). MEANING (connect new info to what you already know). RETRIEVAL practice (active recall, L08). SPACING (review at intervals). SLEEP (brain consolidates memories overnight). EMOTION (feelings strengthen memory). STORY (we remember stories better than facts).`,
              audioPrompt: `Memory boosters are research-backed practices that strengthen memory, {name}. Attention at the moment of encoding, the phone next to you isn't just stealing time, it's stealing your memory of what you're doing. Meaning, your brain remembers things connected to existing knowledge much better. Retrieval practice from L08 active recall. Spacing from L08 spaced repetition. Sleep, your brain consolidates memories during sleep. Emotion, things you feel deeply about stick. Story, your brain remembers stories far better than disconnected facts. The fox toolkit, use them together and your memory transforms.` },
            { word: `sleep consolidation`,
              definition: `The process by which your brain locks in the day's memories during sleep. Your brain replays what you learned, strengthens neural connections, and moves information from short-term into long-term storage. This is why studying the night before and sleeping is more effective than cramming and staying up. Sleep isn't passive. It's active memory-building.`,
              audioPrompt: `Sleep consolidation is the process by which your brain locks in the day's memories during sleep, {name}. While you sleep, your brain replays what you learned, strengthens the neural connections, and moves information from short-term into long-term storage. This is why studying the night before and then sleeping is more effective than cramming and staying up. It's also why pulling an all-nighter before a test often makes you remember less, not more. Sleep isn't passive. It's active memory-building. The brain that sleeps well remembers well.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What HURTS Memory (Often Without People Knowing)`,
          paragraphs: [
            `Now the bad news, lots of common habits actively HURT memory. MULTITASKING is the biggest one. Your brain can't really multitask, when you try, you split attention between things and remember none of them well. Texting during class, listening to music while reading, watching TV while doing homework, all these break encoding. Research shows multitasking can cut retention nearly in HALF compared to focused attention. SLEEP DEPRIVATION (Life Wellness L02!) wrecks memory consolidation. Pulling an all-nighter to study can leave you remembering LESS than if you'd slept and studied less. CHRONIC STRESS (Life Wellness L07!) hurts your hippocampus, the part of the brain that builds memories. Kids stuck in high stress remember less over time.`,
            `CRAMMING (L08!) feels productive but builds weak memory that fades fast. PASSIVE STUDY METHODS like re-reading and highlighting feel like learning but don't strengthen memory much. EXCESSIVE PHONE USE has been linked to memory problems, both because of multitasking AND because we offload memory to phones (and stop building our own). One more sneaky one: NOT VERIFYING what we think we remember. Memory is reconstructive, you actually re-build memories each time you recall them, which means they can change over time. The way to keep memories accurate is to occasionally CHECK them against external records (notes, photos, written things). Memory feels reliable. Sometimes it isn't. The wise practice is to USE memory while also knowing its limits.`,
          ],
          image: `/ue-assets/fs/l09-s3-hurts.webp`,
          imageCaption: `Memory killers. Multitasking, sleep loss, chronic stress, cramming, passive study, excessive phone offloading.`,
          vocab: [
            { word: `memory killers`,
              definition: `Common habits that actively hurt memory. MULTITASKING (cuts retention nearly in half). SLEEP DEPRIVATION (wrecks consolidation). CHRONIC STRESS (hurts hippocampus). CRAMMING (builds fading memory). PASSIVE STUDY (re-reading, highlighting). EXCESSIVE PHONE USE (multitasking + offloading). All can be reduced.`,
              audioPrompt: `Memory killers are common habits that actively hurt memory, {name}. Multitasking is the biggest. Your brain can't really multitask, you split attention and remember none of them well. Texting during class, music while reading, TV during homework, all break encoding. Sleep deprivation wrecks memory consolidation, all-nighters leave you remembering less than if you'd slept. Chronic stress hurts your hippocampus, the brain part that builds memories. Cramming builds weak memory. Re-reading and highlighting feel like learning but don't strengthen memory much. All of these can be reduced.` },
            { word: `the forgetting curve`,
              definition: `Research finding showing how quickly humans forget information without review. Researcher Hermann Ebbinghaus found people forget roughly 50% of new information within an hour, 70% within a day, and up to 90% within a week without review. Spaced repetition is powerful because reviewing at growing intervals flattens the forgetting curve and keeps information accessible for months and years.`,
              audioPrompt: `The forgetting curve is a research finding showing how quickly humans forget information without review, {name}. Researcher Hermann Ebbinghaus found that without any review, people forget roughly 50% of new information within an hour, 70% within a day, and up to 90% within a week. This is why studying once and never reviewing doesn't work. It's also why spaced repetition is so powerful: reviewing at growing intervals flattens the forgetting curve and keeps information accessible for months and years, not just days.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Designing Your Life for a Strong Memory`,
          paragraphs: [
            `Here's the practical takeaway. You don't just "have" a memory, you can DESIGN your life to support it. PROTECT ATTENTION when learning, phones away, single-task, calm environment. ADD MEANING to what you're learning by connecting it to things you already know. PRACTICE RETRIEVAL (close-book recall) rather than just re-reading. SPACE OUT your review across days and weeks. SLEEP WELL especially after learning, your brain locks in memories overnight. MOVE YOUR BODY (Life Wellness L04!), exercise improves memory in real measurable ways. MANAGE STRESS, chronic stress eats memory; recovery (Life Wellness L07!) protects it.`,
            `EXTERNALIZE WHAT YOU NEED TO KEEP. Write important things down (planners, calendars, journals, notes). You don't have to remember everything, you have to remember what to do. Good external systems FREE your memory to do important work. WORK WITH YOUR FEELINGS, when you connect emotionally to something, it sticks. CARE about what you're trying to remember, your memory follows your attention. Byte's first teaching: memory isn't a fixed trait. It's a SYSTEM with three stages (encoding, storage, retrieval) that you can train and protect. Strengthen it with attention, meaning, retrieval, spacing, sleep, emotion, and story. Protect it from multitasking, sleep loss, chronic stress, and passive study. Design your life this way and your memory will keep growing stronger across decades. Foxes who treat their memory like a tool become foxes with sharp minds for life.`,
          ],
          image: `/ue-assets/fs/l09-s4-design.webp`,
          imageCaption: `Design your life. Protect attention, add meaning, retrieve, space, sleep, move, manage stress, externalize.`,
          vocab: [
            { word: `designing for memory`,
              definition: `The practice of building your daily life to support strong memory. Protect attention (phones away, single-task). Add meaning (connect to what you know). Retrieve and space your review. Sleep well, move, manage stress. Externalize what you need to keep (notes, calendars). Care about what matters. Memory is trainable; you're the designer.`,
              audioPrompt: `Designing for memory is the practice of building your daily life to support strong memory, {name}. Protect attention when learning, phones away, single-task. Add meaning to what you're learning. Practice retrieval rather than re-reading. Space out review. Sleep well, especially after learning. Move your body. Manage stress. Externalize what you need to keep, write important things down. Work with your feelings, when you care about something, it sticks. Memory isn't a fixed trait. It's a system you can train and protect.` },
            { word: `external memory system`,
              definition: `The set of tools you use to hold information outside your brain — planners, calendars, to-do lists, journals, notes, reminder apps. The goal is to free your memory for important work: connecting ideas, thinking creatively, paying attention to people, learning deeply. People who build strong external systems often outperform people who try to remember everything in their heads.`,
              audioPrompt: `An external memory system is the set of tools you use to hold information outside your brain, {name}. Planners, calendars, to-do lists, journals, notes, reminder apps. The goal is not to rely on your brain to remember everything. It's to free your memory for the important work of connecting ideas, thinking creatively, paying full attention to people, and learning deeply. People who build strong external systems often outperform people who try to remember everything in their heads. Write important things down. Your brain will thank you.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids doing things that affect their memory. Classify each: MEMORY BOOSTER (research-backed practice that strengthens memory), MEMORY NEUTRAL (feels productive but doesn't do much for memory), or MEMORY KILLER (actively hurts memory)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `booster`, label: `Memory Booster`, color: `#34D399`, description: `Research-backed practice that strengthens memory. Sleep, retrieval, meaning, spacing, attention, emotion, story.` },
            { id: `neutral`, label: `Memory Neutral`, color: `#FBBF24`, description: `Feels productive but doesn't do much for memory. Re-reading, highlighting, passive review. Not harmful, just not helpful.` },
            { id: `killer`,  label: `Memory Killer`,   color: `#F87171`, description: `Actively hurts memory. Multitasking, sleep deprivation, chronic stress, cramming, excessive offloading.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Activity #1`,
              clues: [
                { text: `A kid studies a chapter for 30 minutes with full focus, then closes the book.` },
                { text: `They try to remember the main points in their head, then write them down.` },
                { text: `That night, they get 10 hours of good sleep.` },
              ],
              correctAnswer: `booster`,
              realWorldExample: `Focused study, active recall, sleep consolidation. Real memory boost.`,
              explanation: `Pure memory booster. Notice all the right moves working together. Focused study (good encoding), active recall (retrieval practice), and sleep (consolidation). Researchers would predict this kid remembers MUCH MORE the next day than someone who studied longer but without focus, retrieval, or sleep. This is how foxes build real memory.`,
            },
            {
              id: `case-2`,
              caseTitle: `Activity #2`,
              clues: [
                { text: `A kid does math homework while watching TV.` },
                { text: `They check their phone every few minutes.` },
                { text: `When tested the next day, they remember almost nothing of what they "studied."` },
              ],
              correctAnswer: `killer`,
              realWorldExample: `Math, TV, phone. Pure multitasking, broken encoding, bad memory.`,
              explanation: `Pure memory killer. Classic multitasking. The brain split attention between math, TV, and the phone, so none of them got encoded well. Researchers found multitasking can cut retention nearly in HALF. The kid felt like they were studying but didn't actually encode much. This is the most common memory mistake of modern kids (and adults). The fix: single-task when learning. Phone away.`,
            },
            {
              id: `case-3`,
              caseTitle: `Activity #3`,
              clues: [
                { text: `A kid wants to memorize the names of all U.S. presidents.` },
                { text: `They make up a silly STORY connecting each president to weird visual images.` },
                { text: `They also connect each one to events they already know about.` },
              ],
              correctAnswer: `booster`,
              realWorldExample: `Story, visualization, connecting to known info. Powerful encoding through meaning.`,
              explanation: `Pure memory booster. Three powerful techniques stacked together. Story (your brain remembers stories better than facts), visualization (visual mental images stick), and connecting new info to what they already know (meaning encoding). Researchers studying memory champions have found this exact combination is how they remember enormous amounts. Memory athletes use this. So do students who outperform "smarter" peers.`,
            },
            {
              id: `case-4`,
              caseTitle: `Activity #4: The Tricky One`,
              clues: [
                { text: `A kid spends an hour HIGHLIGHTING a textbook chapter.` },
                { text: `Half the chapter is now yellow.` },
                { text: `They feel really productive, like they did serious studying.` },
              ],
              correctAnswer: `neutral`,
              realWorldExample: `Highlighting feels productive but does very little for memory. Neutral, not booster.`,
              explanation: `Tricky, {name}! It LOOKS like serious studying because the kid spent an hour and the chapter is full of yellow. So you might call it a memory booster. But research is clear, HIGHLIGHTING by itself does very little for memory. The kid mostly RECOGNIZED what was important without actually retrieving it from their own mind. Pure memory neutral (the "felt productive" trap). Lesson: feeling productive isn't the same as actually building memory. Highlighting is fine as a step BEFORE active recall (mark what to test yourself on later), but on its own, it doesn't strengthen memory. Most kids and adults rely on these "feels productive" methods and wonder why their memory is weak. The wiser move is to add active recall to anything you highlight. Highlight first, then close the book and try to remember from the highlights. That converts a neutral method into a booster.`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What are the THREE STAGES of memory?`,
              options: [
                `Short, medium, long`,
                `ENCODING (info enters), STORAGE (held across time), RETRIEVAL (pulled back when needed). Failures happen at one of these three`,
                `Easy, hard, impossible`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Three stages: ENCODING (info enters your brain, depends on attention/meaning), STORAGE (held across time, brief to forever), RETRIEVAL (pulled back when needed). Memory "failures" happen at one of these. Knowing which stage broke down tells you what to fix.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `What did researchers find about MULTITASKING and memory?`,
              options: [
                `Helps memory`,
                `Cuts retention nearly in HALF — your brain can't really multitask; split attention means none of it gets encoded well`,
                `No effect`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Multitasking is the biggest memory killer. Your brain can't really multitask, when you try, you split attention between things and remember none of them well. Texting during class, music while reading, TV during homework, all break encoding. Research shows multitasking can cut retention nearly in HALF compared to focused attention.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `Why is SLEEP so important for memory?`,
              options: [
                `It isn't`,
                `Your brain CONSOLIDATES memories during sleep — locks in what you learned that day; all-nighters can leave you remembering LESS than if you'd slept`,
                `It causes forgetting`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Your brain consolidates memories during sleep, locking in what you learned that day. This is part of why good sleep makes you smarter. Pulling all-nighters before tests actually WORSENS your memory. You may have studied "more," but you sleep less, so your brain didn't consolidate well. Sleep is part of learning.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `What strengthens MEANING-BASED memory?`,
              options: [
                `Nothing`,
                `Connecting new info to what you ALREADY KNOW, using STORY, VISUALIZATION, and EMOTION. Your brain remembers connected/meaningful info far better than random facts`,
                `Memorizing without context`,
                `Random repetition`,
              ],
              correctIndex: 1,
              explanation: `Meaning matters hugely. Your brain remembers things connected to existing knowledge and emotion much better than random facts. Connect new info to what you already know. Use story (we remember stories better than disconnected facts). Use visualization (visual mental images stick). Use emotion (feelings strengthen memory).` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: HIGHLIGHTING a textbook chapter strengthens memory significantly.`,
              correctAnswer: false,
              explanation: `False. Research shows highlighting by itself does very little for memory. Kids and adults rely on it because it FEELS productive, but they're mostly recognizing what's important without actually retrieving it. Highlighting is fine as a step BEFORE active recall (mark what to test yourself on later), but it doesn't strengthen memory on its own.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `How does CHRONIC STRESS affect memory?`,
              options: [
                `Improves it`,
                `Hurts your HIPPOCAMPUS. The brain part that builds memories. Kids stuck in high stress remember less over time`,
                `No effect`,
                `Helps sleep`,
              ],
              correctIndex: 1,
              explanation: `Chronic stress hurts your hippocampus, the part of the brain that builds memories. Kids stuck in high stress remember less over time. Stress recovery (Life Wellness L07!) protects your memory. This is one of many reasons that nervous-system regulation and good sleep are foundational, they support your whole brain.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `What does it mean to EXTERNALIZE what you need to keep?`,
              options: [
                `Don't remember anything`,
                `WRITE IT DOWN — planners, calendars, notes, journals; you don't have to remember everything, you have to remember what to do; good external systems FREE your memory`,
                `Memorize forever`,
                `Random storage`,
              ],
              correctIndex: 1,
              explanation: `Externalize means write important things down. Planners, calendars, journals, notes. You don't have to remember everything, you have to remember what to do. Good external systems free your memory to do important work, like making connections, thinking creatively, paying attention to people. Wise users protect memory by using both internal AND external tools.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about memory?`,
              options: [
                `It's fixed`,
                `Memory isn't a fixed trait. It's a SYSTEM with 3 stages you can train and protect. Strengthen with attention, meaning, retrieval, spacing, sleep, emotion, story. Protect from multitasking, sleep loss, stress`,
                `Some people just have bad memory`,
                `Don't bother`,
              ],
              correctIndex: 1,
              explanation: `Memory isn't a fixed trait. It's a system with three stages (encoding, storage, retrieval) you can train and protect. Strengthen it with attention, meaning, retrieval, spacing, sleep, emotion, and story. Protect it from multitasking, sleep loss, chronic stress, and passive study. Design your life this way and your memory keeps growing stronger across decades.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, what's your biggest memory killer right now? Multitasking? Sleep loss? Phone? Cramming? Notice without judgment.` },
            { id: `r2`, text: `Think of something you remember really vividly. Why do you think it stuck? (Hint: it probably had attention, meaning, emotion, or story attached.)` },
            { id: `r3`, text: `Pick ONE memory booster to add this week (single-task when learning, sleep better, active recall, externalize tasks). What will it be?` },
            { id: `r4`, text: `Do you "outsource" too much to your phone (calendars, reminders, looking things up)? Is your own memory weaker because of it?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Memory research is one of the richest areas in modern neuroscience. Studies on encoding, storage, and retrieval have been done for over a century, and the findings are consistent and clear. Memory is a trainable system. The methods that work (attention, meaning, retrieval practice, spacing, sleep, emotion, story) work for every age and topic. The methods that don't (passive re-reading, highlighting alone, cramming, multitasking) keep failing kids and adults alike. The gap between what science shows and what most kids are taught is huge. Byte's note: your memory is one of the most powerful tools you have, and almost no one teaches you how it works. You now have more knowledge about memory than 95% of the adults walking around. Use it. Design your life to support strong memory. Protect attention. Add meaning. Practice retrieval. Sleep well. Manage stress. Externalize what you need to. Your future self, in school, in work, in life, will be grateful for the sharp memory you build now. Foxes who learn this become the humans whose minds stay clear, capable, and remembering well across decades.`,
          familyAdventure: `Family Memory Practice. As a family, try this for one week: at dinner, take turns sharing ONE specific detail from your day, something small but vivid. A color, a smell, a moment, a conversation. Notice how trying to retrieve those specific details practices your memory in real-time. Adults model it too. Building this kind of attentive, story-sharing practice in your family strengthens everyone's memory together, AND builds real connection at the same time. Many families find it becomes one of their favorite small traditions.`,
          creativePrompt: {
            intro: `Write your personal Memory Plan — boosters to add, killers to reduce, system to design.`,
            floor: `Write at least 5 sentences. Name what you'll add and what you'll reduce.`,
            stretch: `Write 8 to 10 sentences. Build a fuller plan with specific commitments.`,
            open: `Write as much as you want. Write your full MEMORY PLAN. Describe what you've learned about how memory actually works (three stages, what helps and hurts). Identify your biggest current MEMORY KILLER (multitasking, sleep loss, phone offloading, cramming, chronic stress) and one specific way you'll reduce it. List 2-3 MEMORY BOOSTERS you'll add to your daily life (single-tasking when learning, active recall after lessons, better sleep, externalizing tasks, connecting new info to what you know). Describe one specific thing you want to REMEMBER better in your life (a skill, content you're learning, important details about people you love) and the specific moves you'll use. End with a commitment to TREAT YOUR MEMORY LIKE THE PRECIOUS SYSTEM IT IS. Make it specific and forward-looking.`,
            frames: [
              `What I've learned about how memory really works: ___.`,
              `My biggest memory killer right now is ___.`,
              `Specific way I'll reduce it: ___.`,
              `Memory boosters I'll add: ___.`,
              `Something specific I want to remember better: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Sharp, smart work, {name}! You now understand how memory ACTUALLY works, three stages (encoding, storage, retrieval), what strengthens it (attention, meaning, retrieval, spacing, sleep, emotion, story), and what hurts it (multitasking, sleep loss, chronic stress, cramming). Design your life to support memory and watch it strengthen across years. Next, we look at the modern world's biggest threat to your mind: DISTRACTION. The real science of focus, why it's under attack, and how to protect it. FOCUS IN A DISTRACTED WORLD. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `memory-builder`,
          badgeName: `Memory Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L09;
