// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L15 — Failure & Iteration
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : growth mindset research (Carol Dweck), failure as data,
//            iteration as practice. Builds on L12 problem-solving (iterate
//            move) and connects to Inner World L01 awareness and Social
//            Leadership L13 repair.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (growth response / fixed mindset trap / shame
//            spiral). Trick case = "I'm just being realistic" framing that
//            sounds mature but is actually fixed-mindset in disguise.
// SCOPE: failure isn't the opposite of success, it's part of how success
//        happens; failure as DATA not identity; growth vs. fixed mindset;
//        how to bounce back; iteration as the real path
// VOICE: Byte = warm, honest, treats failure as the fox's essential teacher
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-15`,
      title: `Failure & Iteration`,
      duration: 18,
      xpReward: 75,
      badge: `iterator`,
      badgeName: `Iterator`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle one of the most misunderstood topics in life: FAILURE. Most people think failure is the OPPOSITE of success, something to avoid at all costs. Researchers studying actually successful people have found the OPPOSITE. Failure isn't the opposite of success, it's PART of how success actually happens. Every person you've ever admired failed many, many times on their way to the things they're known for. The kids who learn to FAIL WELL have a huge advantage over kids who treat every failure as a disaster. Today, you learn the real wisdom of failure and iteration. Sharpen those fox ears.`,
          headline: `Failure & Iteration`,
          subtitle: `Failure isn't the opposite of success — it's how success actually happens`,
          visual: `/ue-assets/fs/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Failure Is Data, Not Identity`,
          paragraphs: [
            `Here's the biggest reframe in the whole topic. When you try something and it doesn't work, that's not "you failed." That's "this attempt produced DATA about what doesn't work yet." Failure is INFORMATION about your approach, not a verdict on your worth as a person. The kid who learns this early lives a completely different life than the kid who treats every setback as proof they're "not good enough." Real successful people, scientists, athletes, inventors, writers, learners, FAIL CONSTANTLY. They just don't see failure the way most people do. They see attempts. They see data. They see information about what to try next.`,
            `Researchers found this is one of the biggest differences between people who keep growing and people who get stuck. Stuck people treat failure as IDENTITY ("I'm bad at math"). Growing people treat it as DATA ("I don't know this part of math YET. What specifically didn't work? What should I try differently?"). Same failure, completely different relationship to it. The shift is from "FAILED" to "FAILED ATTEMPT, GOOD INFORMATION." This isn't pretending failure doesn't hurt, it can hurt, and that's okay. It's about what you DO with the hurt. The fox-style move: feel the disappointment, then ask "what did this teach me? What's the next attempt?"`,
          ],
          image: `/ue-assets/fs/l15-s1-data.webp`,
          imageCaption: `Failure isn't identity, it's data. "Failed attempt, good information." Different relationship to setbacks.`,
          vocab: [
            { word: `failure as data`,
              definition: `The reframe that failure is INFORMATION about an approach, NOT a verdict on your worth. Real successful people fail constantly, they just don't see it as identity. Shift from "I failed" to "this attempt produced data about what to try differently." Feel the disappointment, then ask what did this teach me?`,
              audioPrompt: `Failure as data is the biggest reframe in the whole topic, {name}. When you try something and it doesn't work, that's not you failed. That's this attempt produced data about what doesn't work yet. Failure is information about your approach, not a verdict on your worth. Researchers found this is one of the biggest differences between people who keep growing and people who get stuck. Stuck people treat failure as identity, I'm bad at math. Growing people treat it as data, I don't know this part YET, what didn't work?` },
            { word: `growth response`,
              definition: `The healthy reaction to failure: feel the disappointment briefly, then treat the failure as DATA. Ask what went wrong, what to try differently, then attempt again with new information. The opposite of shame spiral. Scientists, athletes, writers, and creators all share this pattern.`,
              audioPrompt: `A growth response is the healthy reaction to failure, {name}. It looks like this: feel the disappointment briefly, normal and okay, then treat the failure as DATA. What went wrong? Was it the approach or the execution? What should I try differently? The growth response is the opposite of shame. It asks questions instead of making judgments about who you are. Scientists, athletes, writers, and creators all share this pattern. They fail constantly. The difference is they respond with curiosity, not shame. Feel it. Learn from it. Try again.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Growth Mindset vs. Fixed Mindset`,
          paragraphs: [
            `Researcher Carol DWECK has spent her career studying this exact difference, and she gave it a clear name. FIXED MINDSET is the belief that your abilities are FIXED, you're either smart or not, talented or not, good at this or not. GROWTH MINDSET is the belief that your abilities CAN GROW with effort, practice, and good methods. Same kid, same brain, totally different outcomes based on which mindset they hold. Dweck's research is huge and clear. Kids with growth mindsets learn faster, recover from setbacks better, take on harder challenges, and end up more capable over time than kids with fixed mindsets, regardless of starting "talent."`,
            `Here's the practical difference. Fixed mindset kid hits a hard math problem: "I'm bad at math, I can't do this." Quit. Growth mindset kid hits the same problem: "I don't know this YET, let me try different approaches." Keep going, often figures it out. The fixed kid's identity is on the line every time they try, so they avoid trying. The growth kid sees skill as buildable, so trying is just data-gathering. Word that makes the biggest difference: "YET." "I can't do this YET" keeps the door open. "I can't do this" closes it. Researchers found that adding "yet" to kids' self-talk literally measurably shifts their performance over weeks. Tiny word. Huge difference.`,
          ],
          image: `/ue-assets/fs/l15-s2-mindsets.webp`,
          imageCaption: `Growth mindset: abilities can grow with effort. Fixed: you're either good or not. Add "YET" to everything.`,
          vocab: [
            { word: `growth mindset and "yet"`,
              definition: `Carol Dweck's research. GROWTH MINDSET sees abilities as buildable through effort, practice, methods. FIXED MINDSET sees abilities as locked. Growth-mindset kids learn faster, recover better, take harder challenges. The simple word "YET" ("I can't do this YET") keeps the door open. Adding "yet" measurably shifts performance.`,
              audioPrompt: `Growth mindset and the word YET come from researcher Carol Dweck's career-long studies, {name}. Fixed mindset is the belief that abilities are fixed, you're either smart or not, talented or not. Growth mindset is the belief that abilities can grow with effort, practice, and good methods. Dweck's research is clear. Growth-mindset kids learn faster, recover from setbacks better, take on harder challenges. The simple word YET makes the biggest difference. I can't do this YET keeps the door open. I can't do this closes it.` },
            { word: `fixed mindset`,
              definition: `Carol Dweck's term for believing abilities are LOCKED. You're either smart or not, talented or not. With fixed mindset, every attempt feels like a test of your worth, so avoiding hard things feels safer. Kills learning faster than almost anything. The fix: add "YET." I can't do this YET keeps the door open.`,
              audioPrompt: `Fixed mindset is Carol Dweck's term for the belief that abilities are locked, {name}. You're either smart or not, talented or not, a math person or not. When you hold this belief, every attempt feels like a test of your worth. So avoiding hard things feels safer than trying and failing. The problem is that fixed mindset kills learning faster than almost anything else. It closes the door. Growth mindset opens it. The simple shift: add YET. I can't do this YET. I'm not good at this YET.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Shame Spiral (And How to Skip It)`,
          paragraphs: [
            `Here's a trap that catches a lot of kids and adults. When you fail at something you care about, two responses are possible. RESPONSE 1, DISAPPOINTMENT, "Ugh, that didn't work. What can I learn? What's next?" This is normal and healthy. RESPONSE 2, SHAME SPIRAL. "I failed = I'm a failure = I'm fundamentally broken = there's something wrong with me as a person." This is the trap. Researchers studying setbacks have found that DISAPPOINTMENT recovers fast and leads to next attempts. SHAME recovers slowly and leads to avoiding future attempts. Both hurt; only one helps.`,
            `Here's the difference. Disappointment is about the EVENT ("that didn't work"). Shame is about your SELF ("I'm no good"). Same failure, completely different responses. Some kids learn shame responses from family, school, peers. If that's you, please know, it's a pattern you can shift, not your destiny. The fox-style move: when you feel the start of shame, NAME IT. "That's shame talking, not data." Then gently shift back to the question "What happened? What can I learn? What's next?" Disappointment is okay. Sometimes you'll feel sad about failure for a while. That's human. Just don't let it turn into shame about who you ARE. You are not your failed attempts. You're the one running them and learning.`,
          ],
          image: `/ue-assets/fs/l15-s3-shame.webp`,
          imageCaption: `Disappointment is about the EVENT. Shame is about your SELF. Same failure, different responses.`,
          vocab: [
            { word: `disappointment vs. shame`,
              definition: `Two different responses to failure. DISAPPOINTMENT focuses on the EVENT ("that didn't work"), recovers fast, leads to next attempt. SHAME focuses on the SELF ("I'm no good"), recovers slowly, leads to avoiding future attempts. Both hurt; only one helps. Name shame when it starts and shift back to the data question.`,
              audioPrompt: `Disappointment versus shame are two different responses to failure, {name}. Disappointment is about the event, that didn't work, what can I learn? Shame is about your self, I'm no good, I'm broken. Same failure, completely different responses. Researchers found disappointment recovers fast and leads to next attempts. Shame recovers slowly and leads to avoiding future attempts. Some kids learn shame responses from family, school, peers. When you feel shame starting, name it. Then shift back to what happened, what can I learn, what's next?` },
            { word: `shame spiral`,
              definition: `When failure turns from "that didn't work" (disappointment about the event) into "I'm broken" (attack on the self). Each self-attack leads to more. Researchers found shame recovers slowly and leads to avoiding future attempts. Name it when it starts: "That's shame talking, not data." Then shift back to the data question.`,
              audioPrompt: `The shame spiral is one of the most destructive responses to failure, {name}. Here's what it looks like. Failure happens. Instead of feeling disappointment about the EVENT, you start attacking your SELF. I'm stupid. I'm broken. I'm a failure as a person. Each self-attack leads to more. Researchers found shame recovers slowly and leads to avoiding future attempts. The move to break it: name it. That's shame talking, not data. Then shift back to the data question. What happened? What can I learn? What's next?` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Iteration Is the Real Path`,
          paragraphs: [
            `Here's the deepest practical truth. Almost no important thing in life happens on the first attempt. Real progress comes from ITERATION, trying, learning, adjusting, trying again, learning more, adjusting again. Researchers studying expert performers across fields, athletes, scientists, artists, entrepreneurs, found they all share this iteration pattern. The myth is that successful people had ONE big insight or natural talent. The truth is they iterated FAR MORE TIMES than other people, learning from each attempt. Thomas Edison famously took thousands of tries to make a working lightbulb. He said, "I have not failed. I've just found 10,000 ways that won't work." That's data-mindset, not shame mindset.`,
            `Here's how to actually iterate well. After each attempt, ask: "What worked? What didn't? What does this tell me about my next attempt?" Keep going. The smaller the iteration cycle, the faster you learn. Don't try one big version, try a quick rough version, learn from it, do the next quick version, repeat. This works for everything. Drawing. Writing. Learning a skill. Solving problems. Relationships. Life decisions. The kid who EXPECTS iteration and embraces it grows fast. The kid who expects perfection on the first try gets stuck and discouraged. Byte's first teaching: failure is data, not identity. Growth mindset (with the magic word YET) beats fixed mindset. Disappointment is okay; skip the shame spiral. Iterate often, learn from each attempt, keep going. This is how real success actually happens. The fox doesn't catch the rabbit every time. The fox who keeps trying, learning, adjusting becomes the fox that eats well.`,
          ],
          image: `/ue-assets/fs/l15-s4-iterate.webp`,
          imageCaption: `Real progress is iteration. Try, learn, adjust, try again. Edison: "10,000 ways that won't work."`,
          vocab: [
            { word: `iteration as path`,
              definition: `The truth that real progress comes from cycles of trying, learning, adjusting, trying again, learning more. Almost no important thing happens on first attempt. Expert performers across all fields share this pattern. The smaller the cycle, the faster you learn. Edison: "10,000 ways that won't work." That's data-mindset, not shame.`,
              audioPrompt: `Iteration as the path is the deepest practical truth about progress, {name}. Almost no important thing in life happens on the first attempt. Real progress comes from iteration, trying, learning, adjusting, trying again. The myth is that successful people had one big insight or natural talent. The truth is they iterated far more times than other people, learning from each attempt. Thomas Edison said I have not failed, I've just found 10,000 ways that won't work. The smaller the iteration cycle, the faster you learn.` },
            { word: `deliberate practice`,
              definition: `Research-backed method of improving: structured, focused practice with immediate feedback on what's working and what isn't. Not random repetition. Key elements: specific goal, focused effort, honest feedback, adjust based on what you learn. What separates experts isn't natural talent, it's deliberate practice accumulated over many iterations.`,
              audioPrompt: `Deliberate practice is the research-backed method behind real improvement, {name}. It's not random repetition. It's structured, focused practice with immediate feedback on what's working and what isn't. Researchers studying expert performers across music, sports, science, and chess found that what separated the best wasn't talent. It was deliberate practice accumulated over years. The key elements: a specific goal, focused effort, honest feedback, and adjusting based on what you learn. Each iteration gives you data. The more you iterate with attention, the faster you improve.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids responding to failure. Classify each: GROWTH RESPONSE (data mindset, "what can I learn?", uses "yet"), FIXED MINDSET TRAP (treats abilities as locked, "I'm just not good at this"), or SHAME SPIRAL (failure means I'm broken as a person)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `growth`, label: `Growth Response`,     color: `#34D399`, description: `Treats failure as DATA, asks what to learn, uses "yet," tries again with new approach. The healthy and effective response.` },
            { id: `fixed`,  label: `Fixed Mindset Trap`,  color: `#FBBF24`, description: `Treats abilities as locked, "I'm just not good at this," gives up because identity feels at stake. Not malicious, just blocked.` },
            { id: `shame`,  label: `Shame Spiral`,        color: `#F87171`, description: `Failure = I'm fundamentally broken. About self, not event. Recovers slowly, leads to avoidance of future attempts.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Response #1`,
              clues: [
                { text: `A kid's science fair project doesn't work the way they hoped.` },
                { text: `Disappointed for a moment, then asks: "What went wrong? Was it the hypothesis or the experiment design? What should I test differently?"` },
                { text: `They redesign and try again the next weekend.` },
              ],
              correctAnswer: `growth`,
              realWorldExample: `Disappointment, data questions, try again. Growth response in action.`,
              explanation: `Pure growth response. The kid felt the disappointment briefly (normal and healthy), then immediately treated it as DATA. What went wrong? What should I test differently? Then iterated, tried again with new information. This is exactly how real scientists, athletes, and creators work. The pattern protects them from shame AND keeps them learning. Most adults would benefit from learning this from this kid.`,
            },
            {
              id: `case-2`,
              caseTitle: `Response #2`,
              clues: [
                { text: `A kid fails their first math test of the year.` },
                { text: `They say "I'm just bad at math. I've never been good at it. My brother was the math one."` },
                { text: `They stop studying because what's the point if they're "not a math person."` },
              ],
              correctAnswer: `fixed`,
              realWorldExample: `Identity claim, giving up because "not a [X] person." Pure fixed mindset trap.`,
              explanation: `Pure fixed mindset trap. The kid treated ability as FIXED ("I'm just bad at math") instead of as something that grows. They tied math to identity ("I'm not a math person") and gave up because trying felt pointless. Dweck's research shows this pattern kills learning faster than almost anything. The fix: add "YET." "I'm not good at math YET. What specifically don't I understand? What can I try?" Door stays open.`,
            },
            {
              id: `case-3`,
              caseTitle: `Response #3`,
              clues: [
                { text: `A kid misses an important shot in their basketball game.` },
                { text: `Afterward: "I'm so stupid. I always mess everything up. I'm the worst on the team. Everyone hates me. I'm a complete failure as a person."` },
                { text: `The spiral keeps going for days. They want to quit the team.` },
              ],
              correctAnswer: `shame`,
              realWorldExample: `Missed shot + "I'm broken as a person" + days-long self-attack = shame spiral.`,
              explanation: `Pure shame spiral. The missed shot became evidence of total worthlessness. "I'm stupid. I'm the worst. Everyone hates me. Failure as a person." The kid's self-attack is way bigger than the actual event. Researchers found shame recovers slowly and leads to avoiding future attempts (wanting to quit). The kindest move: name it. "That's shame talking, not data. The fact is I missed one shot. What I can learn is what I'll work on. What I am is the kid still in this game."`,
            },
            {
              id: `case-4`,
              caseTitle: `Response #4: The Tricky One`,
              clues: [
                { text: `A kid tries something new and it doesn't go well.` },
                { text: `They say "I'm just being realistic. Not everyone is good at everything. I should accept I'm not built for this and focus on what I'm already good at."` },
                { text: `They sound mature and reasonable.` },
              ],
              correctAnswer: `fixed`,
              realWorldExample: `"Being realistic" + closing the door early = fixed mindset wearing maturity's clothes.`,
              explanation: `Tricky, {name}! It LOOKS mature. The kid sounds reasonable, "being realistic," "accept I'm not built for this." So you might call this a growth response. But look closely. They tried ONE TIME and decided their identity is "not built for this." That's pure fixed mindset wearing maturity's clothes. Real maturity says "I tried this once. I have data now. Let me decide if I want to keep going or not, but I won't pretend I CAN'T do it just because the first try was hard." Sometimes choosing not to pursue something IS wise, but the reason should be "I don't want to spend the time on this," not "I'm fundamentally not built for it." "Being realistic" is one of the most common fixed-mindset disguises. Watch for it. The fox knows the difference between actual realism and fear dressed as wisdom.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l15-q1`, format: `true-false`,
              question: `True or false: Failure is the OPPOSITE of success.`,
              correctAnswer: false,
              explanation: `False. Failure isn't the opposite of success, it's PART of how success actually happens. Every person you've admired failed many, many times on their way to what they're known for. Researchers studying successful people across fields found they iterated FAR MORE TIMES than other people, learning from each attempt.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `What is the BIG reframe about failure?`,
              options: [
                `It defines you forever`,
                `Failure is DATA, not IDENTITY. Information about your approach, not a verdict on your worth as a person`,
                `Failure is shameful`,
                `Random outcome`,
              ],
              correctIndex: 1,
              explanation: `Failure is INFORMATION about your approach, not a VERDICT on your worth. Stuck people treat failure as identity ("I'm bad at math"). Growing people treat it as data ("I don't know this part YET, what specifically didn't work?"). Same failure, totally different relationship.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What did Carol DWECK find about GROWTH MINDSET?`,
              options: [
                `Random talent`,
                `Kids who believe abilities can GROW with effort/practice LEARN FASTER, recover from setbacks better, take harder challenges, and end up more capable over time than kids with fixed mindsets`,
                `It doesn't matter`,
                `Only smart kids benefit`,
              ],
              correctIndex: 1,
              explanation: `Dweck's research: kids with growth mindsets (believing abilities can grow) learn faster, recover from setbacks better, take on harder challenges, and end up more capable over time than kids with fixed mindsets, regardless of starting "talent." This is one of the most established findings in education research.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `What does adding the word "YET" do?`,
              options: [
                `Nothing`,
                `Keeps the door OPEN — "I can't do this YET" vs. "I can't do this" — research shows adding "yet" measurably shifts kids' performance over weeks`,
                `Makes you slower`,
                `Just a word`,
              ],
              correctIndex: 1,
              explanation: `The word "yet" keeps the door open. "I can't do this YET" vs. "I can't do this." Researchers found adding "yet" to kids' self-talk literally measurably shifts their performance over weeks. Tiny word. Huge difference. Use it. "I don't get this YET. I haven't mastered this YET."` },

            { id: `l15-q5`, format: `multiple-choice`,
              question: `What is the difference between DISAPPOINTMENT and SHAME?`,
              options: [
                `Same thing`,
                `DISAPPOINTMENT is about the EVENT ("that didn't work") — recovers fast, leads to next attempt. SHAME is about the SELF ("I'm no good") — recovers slowly, leads to avoiding future attempts`,
                `Shame is healthier`,
                `Disappointment is bad`,
              ],
              correctIndex: 1,
              explanation: `Disappointment is about the EVENT ("that didn't work"), recovers fast, leads to next attempt. Shame is about the SELF ("I'm fundamentally broken"), recovers slowly, leads to avoiding future attempts. Both hurt; only disappointment helps. When shame starts, name it. Shift back to the data question.` },

            { id: `l15-q6`, format: `true-false`,
              question: `True or false: Some kids learn SHAME RESPONSES from family, school, or peers, and that pattern can be shifted.`,
              correctAnswer: true,
              explanation: `True. Shame responses aren't destiny, they're patterns kids absorb from environments. They can be shifted with practice. When shame starts, name it ("that's shame talking, not data"). Shift back to "what happened? What can I learn? What's next?" Disappointment is okay; shame about who you ARE is the trap.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `What does ITERATION mean in real progress?`,
              options: [
                `Random tries`,
                `Cycles of trying, learning, adjusting, trying again. Almost no important thing happens on first attempt. Expert performers across fields all share this pattern`,
                `Doing it once`,
                `Giving up early`,
              ],
              correctIndex: 1,
              explanation: `Iteration is cycles of trying, learning, adjusting, trying again. Almost no important thing in life happens on the first attempt. Real progress comes from iteration. Researchers studying expert performers (athletes, scientists, artists, entrepreneurs) found they all share this pattern. The smaller the cycle, the faster you learn.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about failure?`,
              options: [
                `Failure is final`,
                `Failure is DATA not identity. Growth mindset (with "yet") beats fixed. Disappointment is okay, skip the shame spiral. Iterate often, learn from each attempt`,
                `Avoid failure`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Failure is data, not identity. Growth mindset (with the magic word YET) beats fixed mindset. Disappointment is okay; skip the shame spiral. Iterate often, learn from each attempt, keep going. This is how real success actually happens. The fox doesn't catch the rabbit every time; the fox who keeps trying, learning, adjusting becomes the fox that eats well.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Take a kind breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of a recent FAILURE in your life. Was your response disappointment (about the event) or shame (about yourself)? Be honest, no judgment.` },
            { id: `r2`, text: `What's ONE area where you currently say "I'm not good at ___"? Try saying "I'm not good at ___ YET." Notice the shift.` },
            { id: `r3`, text: `What's something you've been afraid to TRY because failure feels too risky? What might the data-mindset version of that decision look like?` },
            { id: `r4`, text: `Who in your life has a GROWTH MINDSET? How can you tell? What can you learn from them?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Growth mindset research has become one of the most influential findings in education over the past 30 years. Carol Dweck's work has been replicated, refined, and applied in schools, sports programs, and businesses worldwide. The findings hold up. Kids who learn growth mindset early outperform their peers in nearly every measurable area over time. The shame-disappointment distinction also has decades of research behind it, primarily from Brené Brown's work, showing that shame is one of the most destructive emotions in childhood development. Byte's note: failure WILL come into your life many, many times. That's not a flaw in how life works, that's how life works. The kids who learn to face failure as DATA, not identity, become the adults who keep growing and trying for the rest of their lives. The kids who learn shame responses often spend years avoiding the things that could make their lives bigger. Be the kid who fails well. Try things. Iterate. Use "yet." Skip the shame spiral. The fox who doesn't catch the rabbit doesn't lie down and die, it gets up, learns from what happened, and tries the next one.`,
          familyAdventure: `Family Failure Practice. As a family, try this for one week: at dinner, each person shares ONE thing they tried that didn't work that week. Not their successes, their attempts that flopped. Talk about what they learned from each. Adults model it BIG. When kids see adults talk openly about their own failures (calmly, with curiosity, not shame), they internalize that failure is part of life, not a verdict. Many families find this becomes one of their most growth-building rituals. Kids who grow up in failure-positive homes become adults who keep trying.`,
          creativePrompt: {
            intro: `Write about your relationship with failure and the iteration mindset you want to grow.`,
            floor: `Write at least 5 sentences. Describe a recent failure and what you can learn from it.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on failure as data, growth mindset, iteration.`,
            open: `Write as much as you want. Write a full piece about your relationship with failure. Describe a SPECIFIC recent failure (a thing that didn't work, a setback, a disappointment). Apply the FAILURE-AS-DATA reframe. What actually happened? What can you learn? What would you try differently? Reflect on whether your usual response is more disappointment-based or shame-based. If shame shows up, name it kindly. Describe the growth mindset you want to build (using "YET" in your self-talk, treating ability as buildable). Describe how you want to ITERATE in your life going forward, not waiting for perfect first tries, willing to make rough attempts, learning from each. End with a commitment to the iterating, growth-minded version of yourself. Make it honest, kind, and brave.`,
            frames: [
              `A recent failure was ___.`,
              `As data, what it taught me: ___.`,
              `My usual response (disappointment or shame): ___.`,
              `An area where I'll add "YET" is ___.`,
              `How I want to iterate going forward: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Brave, real work, {name}! You now have one of the most important reframes in life. Failure is DATA, not identity. Growth mindset (with "YET") beats fixed mindset. Disappointment is okay; skip the shame spiral. Iterate often, learn from each attempt. Use this for school, sports, art, friendships, life. The fox who doesn't catch the rabbit gets up and tries again. So do you. Next, we explore a critical modern skill, working well with people whose minds work DIFFERENTLY from yours. WORKING WITH DIFFERENT MINDS. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `iterator`,
          badgeName: `Iterator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L15;
