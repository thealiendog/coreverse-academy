// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L03 — Learning How to Learn
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Metacognition, Learning Science
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three real learners across different formats)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l03-v1";

const FUTURESKILLS_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-03`,
      title: `Learning How to Learn`,
      duration: 35,
      xpReward: 75,
      badge: `learning-architect`,
      badgeName: `Learning Architect`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a strange thing about school. You spend twelve-plus years learning stuff, but almost nobody teaches you the meta-skill underneath it all: how to actually learn. Most kids develop their learning approach by accident, copying whatever their friends do, and never realize that different approaches produce wildly different results. The science on this is solid. Researchers have spent decades figuring out which study methods actually work, and the answers are sometimes counterintuitive. Today we look at three real learners working on three different challenges, and we extract the principles that actually move the needle. By the end, you'll have a working framework for how to learn anything for the rest of your life. This is genuinely one of the highest-leverage skills available.`,
          headline: `Learning How to Learn`,
          subtitle: `Three real learners. Real learning science. The meta-skill almost nobody teaches.`,
          visual: `/voyager-assets/future-skills/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Learning Science Has Actually Established`,
          paragraphs: [
            `Learning science is a real field with real findings. Cognitive psychologists have spent decades studying how memory works, what makes information stick, and which study methods actually produce durable learning. Several findings have been replicated many times across many contexts and are now well-established. They're also frequently ignored by students, parents, and even teachers because they're not intuitive.`,
            `First: active recall beats passive review. When you re-read your notes or highlight a textbook, it feels like you're learning, but the feeling is mostly illusion. The information feels familiar (you've seen it before), which your brain interprets as "I know this." Then when you have to actually use it on a test, you discover you don't know it well at all. The technique that actually builds memory is forcing yourself to retrieve information without looking at it. Flashcards, practice tests, explaining concepts in your own words, doing problems. The act of pulling information out strengthens the memory traces. This is called the testing effect, established by Henry Roediger and Jeffrey Karpicke in studies starting around 2006.`,
            `Second: spaced repetition beats cramming. The German psychologist Hermann Ebbinghaus discovered in the 1880s that we forget most of what we learn within days unless we review it. Modern research has refined this: reviewing material at increasing intervals (1 day, 3 days, 1 week, 2 weeks, 1 month) produces dramatically better long-term retention than reviewing once. Tools like Anki use this principle to schedule reviews automatically. The opposite (cramming the night before a test) produces short-term performance but almost no long-term retention. Most students do this anyway because cramming feels productive.`,
            `Third: interleaving beats blocking. When practicing problems, mixing different problem types together (interleaving) produces better learning than doing one type repeatedly until you "master" it before moving on (blocking). Blocking feels easier and more productive in the moment. Interleaving feels harder and like you're making more mistakes. The harder feeling correlates with better actual learning. This is one of the most counterintuitive findings in learning science.`,
          ],
          image: `/voyager-assets/future-skills/l03-s1-science.webp`,
          imageCaption: `Learning science: active recall, spaced repetition, interleaving. Solid research, frequently ignored.`,
          vocab: [
            {
              word: `testing effect`,
              definition: `Phenomenon established in cognitive psychology: actively retrieving information from memory produces much better long-term retention than passively re-reading it. Foundation of practices like flashcards, practice tests, and self-explanation. Documented in many studies including Roediger and Karpicke (2006).`,
              audioPrompt: `The testing effect, also known as active recall, is a phenomenon established in cognitive psychology, {name}. Actively retrieving information from memory produces much better long-term retention than passively re-reading it. The classic study by Henry Roediger and Jeffrey Karpicke in 2006 showed that students who studied material once and then took practice tests learned much more than students who studied the same material multiple times without testing. The testing effect is the foundation of practices like flashcards, practice tests, and explaining concepts in your own words. The intuitive student approach—re-reading notes and highlighting—feels productive but actually produces weak learning because the recognition of familiar material feels like understanding without actually being understanding. Active recall is harder and feels less productive in the moment. It produces dramatically better long-term results.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `More Findings: Deliberate Practice And Growth Mindset`,
          paragraphs: [
            `Fourth: deliberate practice beats casual practice. The psychologist Anders Ericsson spent decades studying what separates experts from non-experts across many domains (chess, music, sports, surgery, academic fields). His finding: it's not just hours of practice; it's a specific kind of practice. Deliberate practice involves working at the edge of your current ability, focusing on weaknesses, getting immediate feedback, and repeating the targeted skills. Casual practice involves doing what you're already good at, which feels enjoyable but produces little growth. Most "practice" most people do is casual, not deliberate.`,
            `Ericsson's research has been popularized as "the 10,000-hour rule" by Malcolm Gladwell, but Ericsson himself disagreed with that simplification. The exact hours vary by domain and individual. The deeper finding is that hours alone don't produce expertise; structured deliberate practice does. Someone who plays guitar casually for 30 years can be worse than someone who practices deliberately for 5.`,
            `Fifth: growth mindset shapes what's possible. Stanford psychologist Carol Dweck has spent her career studying how people's beliefs about ability affect their actual ability. People who believe abilities can grow with effort (growth mindset) tend to persist through difficulty, learn more from feedback, and ultimately develop higher abilities than people who believe abilities are fixed (fixed mindset). The effect is real but more nuanced than pop versions suggest. Growth mindset isn't a magic incantation; it's the genuine belief that effort matters, applied through actual effort.`,
            `Sixth: elaboration and dual coding strengthen memory. Elaboration means connecting new information to things you already know. ("This new math concept relates to that older one this way...") The connections create more retrieval paths for the new information. Dual coding means combining verbal information with visual information. Diagrams, sketches, and mental imagery alongside words produce stronger learning than words alone. These findings have been replicated across many contexts.`,
            `Together, these six principles (active recall, spaced repetition, interleaving, deliberate practice, growth mindset, elaboration with dual coding) describe what actually produces durable learning. Almost nobody applies all of them. The kids who apply most of them learn dramatically more in the same time as those who don't.`,
          ],
          image: `/voyager-assets/future-skills/l03-s2-deliberate.webp`,
          imageCaption: `Six learning principles. Most people apply few. Applying most produces dramatic results.`,
          vocab: [
            {
              word: `deliberate practice`,
              definition: `Term coined by psychologist Anders Ericsson for a specific kind of practice that builds expertise: working at the edge of current ability, focusing on weaknesses, getting immediate feedback, and repeating targeted skills. Distinct from casual practice which feels enjoyable but produces little growth.`,
              audioPrompt: `Deliberate practice is a term coined by psychologist Anders Ericsson, {name}. Ericsson spent decades studying what separates experts from non-experts across many domains: chess, music, sports, surgery, academic fields. His finding: it's not just hours of practice; it's a specific kind of practice. Deliberate practice involves working at the edge of your current ability, focusing on weaknesses, getting immediate feedback, and repeating targeted skills. Casual practice involves doing what you're already good at, which feels enjoyable but produces little growth. Most "practice" most people do is casual rather than deliberate. The 10,000-hour rule popularized by Malcolm Gladwell was based on Ericsson's research but oversimplified it. Ericsson himself disagreed with that simplification. The deeper finding: hours alone don't produce expertise; structured deliberate practice does.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where Students Go Wrong`,
          paragraphs: [
            `Knowing what works isn't enough; you also need to know why most students do something else. The misalignment between effective study and intuitive study is one of the most documented patterns in learning science. Students consistently choose study methods that feel productive over study methods that actually produce learning.`,
            `Why? Several reasons. First, passive review feels productive because the information becomes familiar. Familiarity feels like knowing. The brain doesn't easily distinguish "I recognize this" from "I can recall this on a test." Active recall produces less in-the-moment confidence because retrieval is hard and you encounter your own gaps. Real learning often feels less satisfying than fake learning.`,
            `Second, cramming feels productive because you can see yourself improving over a few hours. The forgetting that happens over the next week is invisible to you, so the short-term gains feel like real gains. Spaced repetition feels less productive because the gains are slower to appear but vastly more durable.`,
            `Third, interleaving feels worse because you make more mistakes. Blocking feels better because you start getting answers right within a single session. The mistakes during interleaving are actually building the discrimination between problem types that produces transfer. Less frustration during practice can mean worse learning.`,
            `Fourth, students rarely get feedback on whether their study methods are actually working. They study, take a test, get a grade, and move on. They don't compare what would have happened with different study methods. So they can't update on which methods work. This is why explicit learning science knowledge matters: it lets you choose better methods than you'd choose by intuition alone.`,
            `One way to think about it. The methods that feel best in the short term tend to produce the worst long-term results. The methods that feel hardest tend to produce the best long-term results. This isn't a moral lesson about virtue rewarding effort; it's an empirical finding about how memory works. Acting on it means doing things that feel less satisfying in the moment in exchange for dramatically better outcomes.`,
          ],
          image: `/voyager-assets/future-skills/l03-s3-misaligned.webp`,
          imageCaption: `What feels productive isn't what's productive. The misalignment is one of the most consistent findings in the field.`,
          vocab: [
            {
              word: `metacognition`,
              definition: `Thinking about your own thinking. Specifically the ability to monitor what you actually understand vs what you only feel like you understand. Crucial for choosing effective study methods because most students don't accurately assess their own learning. Skill that improves with deliberate practice.`,
              audioPrompt: `Metacognition is thinking about your own thinking, {name}. Specifically, the ability to monitor what you actually understand versus what you only feel like you understand. Crucial for choosing effective study methods. Most students don't accurately assess their own learning. They feel confident about material right after reviewing it because the information is familiar, then discover on a test that they couldn't actually recall it. People with strong metacognition can distinguish the feeling of familiarity from the ability to retrieve. They can predict their test performance more accurately. They notice when they're confused versus when they think they understand but don't. Metacognition is a skill that improves with deliberate practice. Asking yourself "could I explain this without looking?" is a basic metacognitive check.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Three Real Learners`,
          paragraphs: [
            `Now to the cases. The three learners below represent three different learning contexts: a teenager trying to master a hard academic subject, an adult learning a new skill in midlife, and a young person teaching themselves a technical field outside of school. The cases are composite illustrations based on common real patterns. Each case shows the difference between intuitive approaches and approaches informed by learning science.`,
            `Maya, age 14, is taking calculus and failing the first major test. She's been "studying hard" by re-reading her textbook, re-watching teacher recordings, and highlighting her notes. After the failed test, she changes her approach: she stops re-reading, starts working problems before checking the textbook, uses old practice tests to drill weak areas, and reviews material the night after class plus 3 days later plus 1 week later (rough spaced repetition). Within 6 weeks, her grade goes from a D to a B+. She spends roughly the same total time studying. The methods are different.`,
            `Marcus, age 32, is a working professional trying to learn Spanish for a career opportunity. He's been using a popular language app for 6 months and feels like he's "learning" but can't actually have a basic conversation. He adds: 15-minute daily conversation sessions with a tutor over video call (real production with feedback), watching a Spanish-language show with Spanish subtitles (input plus context), and writing brief journal entries in Spanish (forced retrieval and production). The app helps maintain vocabulary, but the conversation practice produces the actual breakthrough. After 4 more months, he can hold a real conversation.`,
            `Aria, age 16, is teaching herself programming because her high school doesn't offer it. She starts with a recommended course that teaches concepts in lecture format. After 3 weeks, she realizes she can follow the lectures but can't actually build anything from scratch. She switches: every week she picks a small project (a to-do app, a number guessing game, a calculator) and tries to build it, looking up specific syntax when stuck. The projects are too hard at first, but each one teaches her what she didn't know. She supplements with chapters from a textbook on the specific topics each project requires. Six months later she's built a functioning website.`,
          ],
          image: `/voyager-assets/future-skills/l03-s4-cases.webp`,
          imageCaption: `Three real-pattern cases. Three different domains. Same underlying principles win.`,
          vocab: [
            {
              word: `transfer`,
              definition: `Ability to apply learning from one context to a different context. Often the actual goal of education (you study math problems in school so you can solve problems in real situations). Transfer is hard; it requires understanding underlying principles rather than just procedures, and is supported by interleaving and elaboration.`,
              audioPrompt: `Transfer in learning is the ability to apply learning from one context to a different context, {name}. Often the actual goal of education. You study math problems in school so you can solve problems in real situations. You learn to read so you can read books that didn't exist when you learned. Transfer is genuinely hard. It requires understanding underlying principles rather than just memorizing procedures. Research has shown that transfer is supported by interleaving (mixing problem types during practice) because it forces you to recognize patterns across contexts. Elaboration (connecting new information to existing knowledge) also supports transfer. Blocking, by contrast, often produces "performance" within a single context that doesn't transfer outside. The hardest part of learning is usually not the initial acquisition; it's transfer to new situations.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `As you work through the case study, notice what each learner had to give up to switch to better methods. Maya had to give up the feeling of productive studying that re-reading produced; her new methods felt harder. Marcus had to give up the comfort of solo app practice and risk embarrassment in conversation with a real human. Aria had to give up the false confidence of "following along" in lectures and confront how much she couldn't actually do alone.`,
            `In each case, the better methods initially felt worse. This is the consistent pattern. The kids and adults who learn dramatically faster than their peers aren't necessarily smarter; they're willing to do things that feel harder in exchange for better outcomes. Knowing this in advance helps you not interpret the discomfort of effective study as a signal that something is wrong.`,
            `One framing as you work through the case. The principles that worked for these three learners (active recall, spaced repetition, deliberate practice, immediate feedback, learning by attempting) are domain-general. They apply to academic subjects, languages, technical skills, sports, creative practice, social skills, almost anything. The specific tactics differ across domains, but the underlying principles are remarkably consistent across the research literature.`,
            `One last thing. The principles in this lesson are well-established but they're not magic. They produce dramatic improvements over typical approaches but they don't replace effort. The kids who become exceptional learners typically combine knowledge of these principles with sustained engagement over time. Knowing the principles without applying them is no better than not knowing them. Applying them inconsistently is much better than not applying them at all. Consistency matters.`,
          ],
          image: `/voyager-assets/future-skills/l03-s5-before.webp`,
          imageCaption: `Better methods feel worse in the moment. Knowing this in advance protects you from giving up.`,
          vocab: [
            {
              word: `desirable difficulty`,
              definition: `Term used by psychologist Robert Bjork for the counterintuitive principle that learning methods which feel harder often produce better long-term results. Interleaving feels harder than blocking but produces better transfer. Active recall feels harder than re-reading but produces better retention. The discomfort is the signal of effective learning.`,
              audioPrompt: `Desirable difficulty is a term used by psychologist Robert Bjork for a counterintuitive principle, {name}. Learning methods that feel harder in the moment often produce better long-term results. Interleaving feels harder than blocking but produces better transfer. Active recall feels harder than re-reading but produces better retention. Spaced repetition feels less productive than cramming but produces dramatically better long-term memory. The discomfort is actually the signal of effective learning. Easy methods that feel productive often produce shallow learning. Hard methods that feel less productive often produce durable learning. Knowing about desirable difficulty helps you not give up when effective methods feel harder. The feeling of struggle is not a sign that something is wrong; it's often a sign that something is working.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l03-case-study`,
          type: `case-study`,
          headline: `Three Real Learners, Three Decisions`,
          intro: `{name}, three learners faced different challenges. Each chose between an intuitive approach and a learning-science-informed approach. For each case, identify what they actually did and what principle made the difference.`,
          cases: [
            {
              id: `case-1`,
              title: `Maya, 14, Calculus`,
              context: `Maya is in high school. She studied "hard" for the first calculus test by re-reading her textbook, re-watching teacher recordings, and highlighting her notes. She felt prepared. She got a D. She has 6 weeks until the next major test.`,
              question: `Maya is trying to figure out what to change. Which approach is most likely to actually improve her calculus performance?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Re-read the textbook more times. The first round wasn't enough.`,
                  outcome: `This would not significantly improve her performance. Passive review produces the feeling of learning (familiarity) without the actual retrieval skill needed for tests. Maya would spend more time and feel like she's working harder, but the test results would be similar. This is the most common student response to a failed test and one of the least effective.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Stop re-reading. Work problems before checking the textbook. Use old practice tests to drill weak areas. Review material the night after class, 3 days later, and 1 week later.`,
                  outcome: `This is the approach Maya actually took. Within 6 weeks, her grade went from D to B+. The change combined active recall (working problems without looking first), spaced repetition (reviews at increasing intervals), and deliberate practice on weak areas (the practice tests revealed specific gaps). Same total study time, dramatically better results.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Hire a tutor to explain everything more clearly.`,
                  outcome: `A tutor can help, but only if Maya then practices actively herself. Many students hire tutors and use the sessions for more passive explanation, which produces the same problem. A tutor combined with active practice would help. Just a tutor without changing study methods would help only modestly.`,
                  isOptimal: false,
                },
              ],
              insight: `Maya's case illustrates the testing effect (active recall) plus spaced repetition. The methods felt harder—working problems before knowing how to solve them is uncomfortable—but they actually built retrieval ability. Re-reading felt productive but built mostly familiarity rather than recall ability. The change in methods, not the change in effort, produced the result.`,
            },
            {
              id: `case-2`,
              title: `Marcus, 32, Spanish`,
              context: `Marcus is a working professional learning Spanish for a career opportunity. He's been using a popular language app daily for 6 months. He's "learning" by the app's metrics (streaks, points, completed levels) but he can't have a basic conversation with a Spanish speaker.`,
              question: `What's the most useful change Marcus could make?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Use the language app more hours per day to make faster progress.`,
                  outcome: `This would extend his current pattern: more vocabulary recognition without the ability to use it. Language apps build passive recognition reasonably well but rarely build the production skill needed for actual conversation. More hours on the same method produces more of the same result.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Add 15-minute daily conversation sessions with a tutor over video call, watch a Spanish show with Spanish subtitles, write brief journal entries in Spanish.`,
                  outcome: `This is what Marcus did. The conversation practice forces active production with immediate feedback. The show provides comprehensible input in context. The journal forces retrieval and structured production. After 4 more months, he could hold real conversations. The app continued to help maintain vocabulary, but the breakthrough came from active production.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Wait until he has a 3-week immersion trip planned to learn the language quickly through immersion.`,
                  outcome: `Immersion alone, without foundation, often produces frustration rather than learning. Marcus would have a hard time communicating during the trip if he can't already produce basic Spanish. Better to build the production skill first; immersion would then accelerate already-developing ability rather than substituting for it.`,
                  isOptimal: false,
                },
              ],
              insight: `Marcus's case illustrates the gap between recognition and production. Apps build recognition (you see a word and identify the meaning). Real language use requires production (you have to retrieve and form words yourself). Active retrieval with feedback is what builds production ability. The discomfort of conversation with a real human is the desirable difficulty that builds the skill.`,
            },
            {
              id: `case-3`,
              title: `Aria, 16, Programming`,
              context: `Aria's high school doesn't offer programming. She's teaching herself. She started with a recommended online course that teaches concepts through lectures. After 3 weeks, she realizes she can follow the lectures but can't actually build anything from scratch.`,
              question: `What's the most useful change Aria could make?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Re-watch the lectures more carefully to make sure she understands every concept before trying to build anything.`,
                  outcome: `This extends her current problem. The gap isn't in concept understanding; it's in application skill. More lecture watching builds more familiarity without building the ability to construct programs. The "I understood the lecture" feeling is misleading because understanding while watching isn't the same as being able to do something with the knowledge.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Pick a small project each week (to-do app, number guessing game, calculator) and try to build it; look up specific syntax when stuck; supplement with textbook chapters on the topics each project requires.`,
                  outcome: `This is what Aria did. Each project was too hard at first, but each one taught her what she didn't know. The "what I don't know" became visible only through attempted construction. Six months later, she had built a functioning website. The project-based approach combined active recall (figuring things out), elaboration (connecting concepts to actual use), and immediate feedback (your code works or doesn't).`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Take a structured "bootcamp" style intensive course over a summer.`,
                  outcome: `Could work, depending on the course. Some bootcamps emphasize project-based learning and would be similar to what Aria did. Others emphasize lecture-style instruction and would extend her existing problem. The format matters more than the intensity. Project-based with feedback works; passive-instruction-intensive doesn't.`,
                  isOptimal: false,
                },
              ],
              insight: `Aria's case illustrates the principle that production requires attempted production. Concepts learned in isolation don't transfer to construction. Attempting projects above your current ability, with reference materials available, forces you to integrate concepts in working order. The repeated experience of "I don't know how to do this" followed by figuring it out is what builds programming skill.`,
            },
          ],
          reflectionPrompt: `All three learners had to do something that felt harder than their original approach. Which case is most similar to a learning challenge you're facing right now?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the "testing effect" (active recall)?`,
              options: [
                `Taking lots of tests`,
                `Phenomenon established in cognitive psychology: actively retrieving information from memory produces much better long-term retention than passively re-reading it; foundation of flashcards, practice tests, self-explanation; classic Roediger & Karpicke 2006 study`,
                `Test anxiety`,
                `Multiple choice format`,
              ],
              correctIndex: 1,
              explanation: `The testing effect is one of the most replicated findings in learning science. Active recall feels harder than re-reading but produces dramatically better retention. Real practical implication: use flashcards or practice tests rather than re-reading notes.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "spaced repetition"?`,
              options: [
                `Repeating things slowly`,
                `Reviewing material at increasing intervals (1 day, 3 days, 1 week, 2 weeks, 1 month, etc.) which produces dramatically better long-term retention than reviewing once; opposite of cramming; tools like Anki implement this automatically`,
                `Slow learning`,
                `Spacing things out`,
              ],
              correctIndex: 1,
              explanation: `Hermann Ebbinghaus discovered the forgetting curve in the 1880s. Modern research has refined the optimal intervals. Cramming produces short-term performance but almost no long-term retention. Spaced repetition is the antidote.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "interleaving"?`,
              options: [
                `Mixing colors`,
                `Practicing problems by mixing different problem types together rather than doing one type repeatedly (blocking); feels harder and like you're making more mistakes, but produces better transfer; one of the most counterintuitive findings in learning science`,
                `Sorting things`,
                `Reading between lines`,
              ],
              correctIndex: 1,
              explanation: `Blocking feels more productive in the moment because you start getting answers right within a session. Interleaving feels worse because of more mistakes. The mistakes build discrimination between problem types, which is what produces transfer to new situations.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "deliberate practice"?`,
              options: [
                `Practicing intentionally`,
                `Term coined by Anders Ericsson: working at the edge of current ability, focusing on weaknesses, getting immediate feedback, repeating targeted skills; distinct from casual practice which feels enjoyable but produces little growth; the hours don't matter as much as the structure`,
                `Slow practice`,
                `Practicing for tests`,
              ],
              correctIndex: 1,
              explanation: `Malcolm Gladwell's "10,000 hour rule" oversimplified Ericsson's research. Ericsson himself disagreed. The deeper finding: structured deliberate practice produces expertise. Casual hours don't. Someone who practices casually for 30 years can be worse than someone who practices deliberately for 5.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "growth mindset"?`,
              options: [
                `Always being positive`,
                `Carol Dweck's research: people who believe abilities can grow with effort (vs being fixed) tend to persist through difficulty, learn more from feedback, develop higher abilities over time; effect is real but more nuanced than pop versions suggest; not a magic incantation`,
                `Plant-based thinking`,
                `Being motivated`,
              ],
              correctIndex: 1,
              explanation: `Growth mindset isn't a magic incantation; it's the genuine belief that effort matters, applied through actual effort. Pop versions of growth mindset that ignore the "applied through actual effort" part don't produce the research results.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why do students consistently choose ineffective study methods?`,
              options: [
                `Because they're lazy`,
                `Passive review feels productive (familiarity = "I know this"); cramming feels productive (visible short-term gains); blocking feels productive (fewer mistakes); the methods that feel best in the short term tend to produce the worst long-term results; almost nobody gets feedback comparing methods`,
                `Random preference`,
                `Schools force them`,
              ],
              correctIndex: 1,
              explanation: `The misalignment between effective study and intuitive study is one of the most documented patterns in learning science. Students choose what feels productive over what is productive because they can't see the long-term comparison.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "metacognition"?`,
              options: [
                `Thinking about cognition`,
                `Thinking about your own thinking; specifically the ability to monitor what you actually understand vs what you only feel like you understand; crucial for choosing effective study methods because most students don't accurately assess their own learning; improves with deliberate practice`,
                `Higher-level thinking`,
                `Brain science`,
              ],
              correctIndex: 1,
              explanation: `Asking yourself "could I explain this without looking?" is a basic metacognitive check. People with strong metacognition predict their test performance more accurately and choose study methods more effectively. The skill improves with practice.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "desirable difficulty"?`,
              options: [
                `Choosing hard problems`,
                `Robert Bjork's term: learning methods that feel harder in the moment often produce better long-term results; the discomfort is the signal of effective learning; easy methods that feel productive often produce shallow learning`,
                `Hard work`,
                `Test difficulty`,
              ],
              correctIndex: 1,
              explanation: `Knowing about desirable difficulty helps you not give up when effective methods feel harder. The feeling of struggle is not a sign something is wrong; it's often a sign something is working. Counterintuitive but well-established.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Knowing learning science principles is enough; you don't need to consistently apply them.`,
              correctAnswer: false,
              explanation: `False. The principles produce dramatic improvements over typical approaches, but they don't replace effort. Knowing without applying is no better than not knowing. Applying inconsistently is much better than not at all. Consistency matters. The kids who become exceptional learners combine knowledge of these principles with sustained engagement.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I studied so hard for that test (8 hours re-reading the textbook) and still failed." Based on this lesson, what's the most useful response?`,
              options: [
                `"You didn't study enough"`,
                `"The 'hours of re-reading' approach produces familiarity (the material looks recognizable) but not retrieval ability (which is what tests measure). Try this for the next test: work problems before checking the textbook (active recall), space your reviews over multiple days (spaced repetition), mix problem types instead of doing one section then another (interleaving), and use practice tests to identify weak spots (deliberate practice). Same total time, much better results. The methods feel harder—they're supposed to. The feeling of struggle is the signal that you're actually building retrieval ability rather than just familiarity."`,
                `"You're not smart enough"`,
                `"School is dumb"`,
              ],
              correctIndex: 1,
              explanation: `Real applied learning literacy. Don't blame effort or intelligence; identify the method as the problem. Walk the friend through specific changes based on the principles. This is one of the most useful pieces of advice you can give a struggling student.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you know about active recall, spaced repetition, or interleaving? Did you know they were research-supported?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `How do you currently study? Which of the six principles do you already use? Which are you not using that you could start using next week?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who consistently applies learning science principles, what does that change about how quickly you can acquire new skills over your lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific subject or skill you're working on right now. Design a study plan applying at least three principles from this lesson. Try it for 2 weeks.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there learning contexts where these principles might not apply? What about learning physical skills, art, social skills, or creative work? Do the principles still hold?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about a skill they've successfully learned. Listen for whether they used principles from this lesson or just got lucky with the methods they happened to try.` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Learning how to learn is the highest-leverage meta-skill available. Two paths.`,
          familyActivity: {
            title: `The Family Study-Methods Audit`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned about learning science. Then ask each family member: how do they currently study or learn new skills? Walk through which of the six principles they use. Most family members will discover they use few or none, despite spending years in school. This conversation produces real practical improvements for everyone, not just for your school work but for any skill anyone in the family wants to develop.`,
          },
          projectOption: {
            title: `Run A Two-Week Study Experiment On Yourself, 2 weeks (optional)`,
            duration: `2 weeks, daily 30-60 minute study sessions`,
            description: `Pick a specific subject or skill you want to improve. Design a study plan using at least three principles from this lesson (active recall, spaced repetition, interleaving, deliberate practice, growth mindset, elaboration). Run the plan for 2 weeks. Track what you do, how it feels, and what you notice about your learning. Write 1,500 words at the end synthesizing what worked and what didn't. Real applied learning science at a level few adults practice.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Running a structured study experiment is genuinely formative.`,
          },
          identityQuestion: `If you become someone who can learn new things efficiently for the rest of your life, what does that mean for the skills, languages, and capabilities you can accumulate over the next 50 years?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the six principles that actually produce durable learning.`,
            `A person who can tell the feeling of familiarity from the ability to recall.`,
            `Someone willing to choose harder study methods because the harder feeling is the signal of real learning.`,
          ],
          saveKey: `identity_responses_fs_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Third Future Skills lesson done. You can now articulate six learning science principles (active recall, spaced repetition, interleaving, deliberate practice, growth mindset, elaboration with dual coding), recognize why students consistently choose ineffective methods, understand the misalignment between what feels productive and what is productive, and apply these principles across any subject or skill. Most adults have never explicitly learned this material. You can now learn faster than them, indefinitely. Next time we go into another huge meta-skill: critical thinking. Specifically, telling well-supported claims from plausible-but-uncertain claims from outright pseudoscience. You'll sort nine real-world claims into three buckets and develop the skill that protects you from being misled for the rest of your life. Investigation game format. Let's go. — Byte`,
          badge: `learning-architect`,
          badgeName: `Learning Architect`,
          xpEarned: 75,
          competencies: [
            `Articulates six learning science principles (active recall, spaced repetition, interleaving, deliberate practice, growth mindset, elaboration)`,
            `Knows major researchers: Roediger/Karpicke, Ebbinghaus, Ericsson, Dweck, Bjork`,
            `Distinguishes feeling productive from being productive`,
            `Understands metacognition and desirable difficulty as concepts`,
            `Can design study plans applying multiple principles`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Critical Thinking`,
            hook: `Sort nine real-world claims into three buckets: well-supported, plausible-uncertain, pseudoscience. Build the skill that protects you for life. Investigation game.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L03 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
