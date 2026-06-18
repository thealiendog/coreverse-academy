// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L13 — The Neuroscience of Creativity
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Neuroscience, Creativity, Source Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims about the creative brain across
// reliability tiers, separating real cognitive neuroscience from pop-science myths).
// Contract matches L03/L06/L08/L11/L12: sources[] with tier/title/type/context/quote/
// questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// Key debunks: the "right-brain creative / left-brain logical" myth, the "we only use
// 10% of our brain" myth, and the Jonah Lehrer "Imagine" fabrication scandal (2012) as
// a Tier B failure case — a science writer who invented quotes and oversold findings.
// Real science included: the default mode network, incubation, the role of constraint.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l13-v1";

const CREATIVE_ARTS_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-13`,
      title: `The Neuroscience of Creativity`,
      duration: 35,
      xpReward: 75,
      badge: `creative-brain-literate`,
      badgeName: `Creative Brain Literate`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, creativity isn't magic — it's neuroscience. The creative brain is doing specific, identifiable things: making remote associations, shifting between focused and diffuse thinking, incubating problems below conscious awareness. The pop science version of this is riddled with myths. One prominent science writer even fabricated his research. This lesson gives you the real findings and the skills to spot the fake ones.`,
          headline: `The Neuroscience of Creativity`,
          subtitle: `Real brain science versus pop-science myth. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The Creative Brain Actually Does`,
          paragraphs: [
            `Start with real science, because it is genuinely remarkable. When researchers study creative thinking using brain imaging, they do not find a single "creativity spot." Instead, creativity involves networks across the whole brain working together, and one of the most studied is the default mode network, a set of regions that becomes active when your mind wanders, daydreams, or is at rest rather than focused on a task. This is the network humming when you are in the shower, on a walk, or staring out a window, and it is closely tied to the loose, associative thinking that generates new ideas.`,
            `But generating loose ideas is only half the story. Creative work also needs the executive control network, the focused, evaluating, goal-directed part of thinking that judges which ideas are any good and shapes them into something real. Researchers like Roger Beaty and others have found that highly creative thinking often involves these two networks, usually somewhat opposed, learning to cooperate: the brain generates wild possibilities and then evaluates and refines them, switching between dreaming and judging. Creativity is less a single magic spark than a conversation between the wandering mind and the focusing mind.`,
            `This already tells you something the myths get wrong. Creativity is not housed in one hemisphere or one tiny region; it is a whole-brain, networked process that braids together mind-wandering and focused evaluation. That is a more complicated story than "use your right brain," and it is also a far more useful one, because it points at real things you can do, give your mind room to wander to generate ideas, and then switch into focused mode to judge and build them. The real science already hands you a better creativity strategy than any myth does.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s1-brain.webp`,
          imageCaption: `Start with real, remarkable science: brain imaging of creative thinking finds no single "creativity spot." Creativity involves networks across the whole brain, one of the most studied being the default mode network (active when the mind wanders, daydreams, or rests, the shower/walk/window state), tied to the loose associative thinking that generates ideas. But that's half the story: creative work also needs the executive control network, the focused, evaluating, goal-directed thinking that judges which ideas are good and shapes them. Researchers like Roger Beaty find highly creative thinking often has these two usually-opposed networks learning to cooperate, the brain generates wild possibilities then evaluates and refines, switching between dreaming and judging. Creativity is a conversation between the wandering mind and the focusing mind, not one magic spark. This already corrects the myths: not one hemisphere or region but a whole-brain networked process, and it hands you a real strategy, let the mind wander to generate, then switch to focus to judge and build.`,
          vocab: [
            {
              word: `actually does`,
              definition: `Real cognitive neuroscience finds that creative thinking is not housed in a single "creativity spot" but involves networks across the whole brain working together. One of the most studied is the default mode network, a set of regions that becomes active when the mind wanders, daydreams, or is at rest rather than focused on a task (the network humming in the shower, on a walk, or staring out a window), and it is closely tied to the loose, associative thinking that generates new ideas. But generating loose ideas is only half the story: creative work also needs the executive control network, the focused, evaluating, goal-directed thinking that judges which ideas are any good and shapes them into something real. Researchers like Roger Beaty have found that highly creative thinking often involves these two usually-opposed networks learning to cooperate, the brain generating wild possibilities and then evaluating and refining them, switching between dreaming and judging, so creativity is less a single magic spark than a conversation between the wandering mind and the focusing mind. This corrects the myths: creativity is not in one hemisphere or one tiny region but is a whole-brain, networked process braiding mind-wandering with focused evaluation, a more complicated but far more useful story, because it points at real things you can do, give your mind room to wander to generate ideas, then switch into focused mode to judge and build them.`,
              audioPrompt: `Start with real science, {name}, because it is genuinely remarkable. When researchers study creative thinking using brain imaging, they do not find a single creativity spot. Instead, creativity involves networks across the whole brain working together, and one of the most studied is the default mode network, a set of regions that becomes active when your mind wanders, daydreams, or is at rest. This is the network humming when you are in the shower, on a walk, or staring out a window, and it is closely tied to the loose, associative thinking that generates new ideas. But generating loose ideas is only half the story. Creative work also needs the executive control network, the focused, evaluating, goal-directed part of thinking that judges which ideas are any good and shapes them into something real. Researchers like Roger Beaty have found that highly creative thinking often involves these two networks, usually somewhat opposed, learning to cooperate. Creativity is less a single magic spark than a conversation between the wandering mind and the focusing mind. This already tells you something the myths get wrong: creativity is not housed in one hemisphere or one tiny region; it is a whole-brain, networked process. And it hands you a real strategy: give your mind room to wander to generate ideas, then switch into focused mode to judge and build them.`,
            },
            {
              word: `default mode network`,
              definition: `A set of brain regions that becomes active when your mind wanders, daydreams, or is at rest rather than focused on a task — the network humming when you are in the shower, on a walk, or staring out a window. It is closely tied to the loose, associative thinking that generates new ideas. Giving your mind room to wander lets this network do its creative work, which is why "take a break and let it sit" is a researched strategy, not laziness.`,
              audioPrompt: `The default mode network is one of the most important concepts in the real science of creativity, {name}. It is a set of brain regions that becomes active when your mind wanders, daydreams, or is at rest rather than focused on a specific task. Think of it as the network that hums when you are in the shower, when you are on a walk and not listening to anything, when you are staring out a window and your thoughts drift. For a long time researchers treated mind-wandering as a kind of failure mode, a sign that you were not paying attention. What they found instead is that this wandering state is closely tied to the loose, associative thinking that generates new ideas. When you stop focusing tightly on a problem and let your mind drift, the default mode network starts making connections across things that focused attention would not put together. That is why ideas seem to arrive in unexpected moments, in the shower, just before sleep, on a walk. You are not slacking. The default mode network is doing the generating part of creative thinking. The lesson for your own creative practice: give your mind room to wander. Step away. Let it sit. That is not laziness. That is giving the right network room to do its work.`,
            },
            {
              word: `executive control`,
              definition: `The focused, evaluating, goal-directed part of thinking that judges which ideas are any good and shapes them into something real. In creative thinking, the executive control network works together with the default mode network — the brain generates wild possibilities and then evaluates and refines them. Creativity is less a single magic spark than a conversation between the wandering mind and the focusing mind.`,
              audioPrompt: `The executive control network is the other half of the creative brain story, {name}. It is the focused, evaluating, goal-directed part of thinking, the part that looks at a pile of generated ideas and asks: which of these is actually any good? Which one is worth developing? How do I shape this rough material into something real? Without it, creative thinking produces a lot of interesting fragments that go nowhere. The executive control network provides the discipline and judgment that turns raw material into finished work. What makes creative thinking remarkable is that these two networks are usually somewhat opposed: the default mode network opens up and wanders, and the executive control network focuses and judges. Highly creative people, and creative thinking generally, involve these usually-opposed networks learning to cooperate. The brain generates wild possibilities, then evaluates and refines them, switching back and forth between dreaming and judging. That is what is happening when a creative person is working well: the wandering mind and the focusing mind are in conversation. Creativity is not one thing. It is that conversation.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Myths: Right Brain, Ten Percent, And More`,
          paragraphs: [
            `Now the myths, because you will meet them constantly. The most famous is "left brain versus right brain", the idea that logical, analytical people are "left-brained" and creative, artistic people are "right-brained." It is one of the stickiest ideas in pop psychology, and it is essentially false. The hemispheres do have some specializations, but creativity, like almost everything else, uses both sides extensively, and there is no such thing as a person who is neurologically "a right-brain type." When researchers actually scanned thousands of brains looking for people who used one hemisphere more, they did not find them. The neat personality story is a myth.`,
            `Then there is the famous "we only use 10 percent of our brains," with its promise that creativity or genius is just a matter of unlocking the unused 90 percent. This is completely false. Brain imaging shows we use virtually all of our brain, just not all at once, and there is no dormant reserve of genius waiting to be switched on. The myth is appealing because it flatters us with hidden potential, but it has no basis in how brains actually work. Any product or guru promising to "unlock your unused brain" is selling you a myth that was never true.`,
            `Why do these myths spread so well? Because they are simple, flattering, and feel empowering, exactly the qualities you learned make a claim worth double-checking, not trusting. "You're a right-brain creative" gives you a tidy identity; "unlock your 90 percent" promises hidden greatness. Real neuroscience offers something less tidy but more honest: creativity is a whole-brain, networked, effortful process you can genuinely improve through real practice. Whenever a brain claim is suspiciously neat and makes you feel specially gifted with no effort, that neatness is the warning sign, not the proof.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s2-myths.webp`,
          imageCaption: `The myths you'll meet constantly. The most famous: "left brain vs right brain", logical people are left-brained, creative people right-brained. One of the stickiest pop-psychology ideas, and essentially false: the hemispheres have some specializations, but creativity uses both sides extensively, and scans of thousands of brains found no people who are neurologically "a right-brain type." Then "we only use 10 percent of our brains," promising creativity is just unlocking the unused 90 percent, completely false: imaging shows we use virtually all of the brain, just not all at once, with no dormant reserve of genius. Why do these spread? Because they're simple, flattering, and feel empowering, exactly the qualities that should make a claim worth double-checking, not trusting. "You're a right-brain creative" gives a tidy identity; "unlock your 90 percent" promises hidden greatness. Real neuroscience offers something less tidy but more honest: creativity is a whole-brain, networked, effortful process you can genuinely improve. Suspicious neatness plus flattery is the warning sign, not the proof.`,
          vocab: [
            {
              word: `ten percent`,
              definition: `Two of the stickiest pop-psychology myths about the creative brain, both essentially false. The "left brain versus right brain" myth holds that logical, analytical people are "left-brained" and creative, artistic people are "right-brained"; in reality the hemispheres have some specializations, but creativity, like almost everything else, uses both sides extensively, and when researchers scanned thousands of brains looking for people who used one hemisphere more, they did not find them, so there is no such thing as a neurological "right-brain type" and the neat personality story is a myth. The "we only use 10 percent of our brains" myth promises that creativity or genius is just a matter of unlocking the unused 90 percent, and it is completely false: brain imaging shows we use virtually all of our brain, just not all at once, and there is no dormant reserve of genius waiting to be switched on, so any product promising to "unlock your unused brain" is selling a myth that was never true. These myths spread because they are simple, flattering, and feel empowering, exactly the qualities that should make a claim worth double-checking rather than trusting: "you're a right-brain creative" gives a tidy identity and "unlock your 90 percent" promises hidden greatness, while real neuroscience offers something less tidy but more honest, that creativity is a whole-brain, networked, effortful process you can genuinely improve through practice. Whenever a brain claim is suspiciously neat and makes you feel specially gifted with no effort, that neatness is the warning sign, not the proof.`,
              audioPrompt: `Now the myths, {name}, because you will meet them constantly. The most famous is left brain versus right brain, the idea that logical people are left-brained and creative, artistic people are right-brained. It is one of the stickiest ideas in pop psychology, and it is essentially false. The hemispheres do have some specializations, but creativity, like almost everything else, uses both sides extensively, and there is no such thing as a person who is neurologically a right-brain type. When researchers actually scanned thousands of brains looking for people who used one hemisphere more, they did not find them. Then there is the famous we only use 10 percent of our brains, with its promise that genius is just a matter of unlocking the unused 90 percent. This is completely false. Brain imaging shows we use virtually all of our brain, just not all at once, and there is no dormant reserve of genius waiting to be switched on. Why do these myths spread so well? Because they are simple, flattering, and feel empowering, exactly the qualities you learned make a claim worth double-checking, not trusting. Real neuroscience offers something less tidy but more honest: creativity is a whole-brain, networked, effortful process you can genuinely improve through real practice. Whenever a brain claim is suspiciously neat and makes you feel specially gifted with no effort, that neatness is the warning sign, not the proof.`,
            },
            {
              word: `right-brain myth`,
              definition: `The essentially false idea that creative, artistic people are "right-brained" and logical, analytical people are "left-brained." The hemispheres do have some specializations, but creativity, like almost everything else, uses both sides extensively. When researchers actually scanned thousands of brains looking for people who used one hemisphere more, they did not find them. There is no such thing as a neurological "right-brain type." The neat personality story is a myth.`,
              audioPrompt: `The right-brain myth is one of the most famous wrong ideas in pop psychology, {name}, and it is worth understanding clearly so you can recognize it when you meet it. The myth says: creative, artistic people are "right-brained" and logical, analytical people are "left-brained." It shows up in quizzes, self-help books, products, and casual conversation constantly. It gives people a tidy identity: I am a right-brain creative. It explains things: I am bad at math because my left brain is weak. The problem is that it is essentially false. The brain's two hemispheres do have some real specializations, language tends to be more left-dominant in most people, for example, and there are genuine asymmetries. But creativity, like almost everything the brain does, uses both sides extensively. It is not a right-hemisphere activity. When researchers actually scanned thousands of brains looking for people who consistently used one hemisphere more for various tasks, they did not find them. No one is neurologically a "right-brain type" in the way the myth describes. The neat personality story is a myth. And because it is flattering (you are specially creative), simple (just a brain type), and gives a tidy identity, it spreads easily. That combination of flattery, simplicity, and identity is exactly the warning sign this lesson is teaching you to notice.`,
            },
            {
              word: `warning sign`,
              definition: `Whenever a brain claim is suspiciously neat and makes you feel specially gifted with no effort, that neatness is the warning sign, not the proof. Myths like "you're a right-brain creative" or "unlock your 90 percent" spread because they are simple, flattering, and feel empowering — exactly the qualities that should make a claim worth double-checking rather than trusting. Real neuroscience is less tidy but more honest.`,
              audioPrompt: `The warning sign in a brain claim is its own neatness and flattery, {name}, and learning to recognize it is one of the core skills of this lesson. Here is the pattern: a myth spreads because it is simple, flattering, and feels empowering. "You're a right-brain creative" gives you a tidy identity. "Unlock your unused 90 percent" promises hidden greatness waiting inside you. "This one trick rewires your creative mind" offers an easy shortcut. All of these feel good. They make you feel specially gifted, or specially capable, or like there is a simple explanation for why things feel hard. And that feeling of specialness and simplicity is exactly the warning sign. Not the proof. The warning. Real neuroscience is messier. Real science admits what it does not know. Real findings are more complicated than a personality type or a dormant percentage. So when a brain claim is suspiciously neat, when every study lands as a perfect parable, when the result makes you feel specially gifted with no effort, the right response is to slow down and check, not to feel confirmed. The neatness and flattery that made a claim feel true are the exact qualities that should make you double-check it first.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When A Science Writer Made It Up`,
          paragraphs: [
            `Now a true story that teaches a sharp lesson about trusting sources. In 2012, a celebrated young science writer named Jonah Lehrer published a bestselling book called "Imagine: How Creativity Works." It was charming, confident, and full of tidy neuroscience stories about how the creative brain works. People loved it. Then a journalist named Michael Moynihan noticed something wrong with the Bob Dylan quotes in the book, and on checking, found that Lehrer had simply invented some of them, made up words and put them in a real person's mouth, to make his story land better.`,
            `The fallout was severe and swift. The book was pulled from shelves, Lehrer resigned from his job at a major magazine, and it came out that he had also recycled his own work and stretched scientific findings beyond what they supported. The scandal became one of the most famous cases of fabrication in modern popular science writing. Here is the painful part for our purposes: a lot of what made his book so appealing, the neat, confident, story-shaped neuroscience, was exactly the kind of thing real researchers are careful never to claim, because the real science is messier than a good story.`,
            `What does this teach you? Several things at once. First, fame and charm are not evidence; a beloved bestseller can still be built on fabrication. Second, the very smoothness that made the book delightful, every study a perfect little parable, was itself a warning sign, because real science rarely fits that neatly. Third, fabrication can hide inside otherwise-real material; Lehrer cited genuine research alongside invented quotes, which is exactly why you check specific claims rather than trusting an author's overall reputation. The Lehrer case is a permanent reminder that "it is a great story, beautifully told, by a famous expert" is not the same as "it is true."`,
          ],
          image: `/voyager-assets/creative-arts/l13-s3-lehrer.webp`,
          imageCaption: `A true story with a sharp lesson about trusting sources. In 2012 celebrated young science writer Jonah Lehrer published the bestseller "Imagine: How Creativity Works", charming, confident, full of tidy neuroscience stories. People loved it. Then journalist Michael Moynihan noticed the Bob Dylan quotes were wrong and found Lehrer had invented some of them, put made-up words in a real person's mouth to make the story land. Fallout was swift: the book was pulled, Lehrer resigned from a major magazine, and he'd also recycled his own work and stretched findings beyond what they supported, one of the most famous fabrication cases in modern popular science. The painful part: what made the book appealing, neat, confident, story-shaped neuroscience, was exactly what careful researchers avoid claiming, because real science is messier than a good story. Lessons: fame and charm aren't evidence; suspicious smoothness is a warning sign; fabrication hides inside otherwise-real material (real research cited beside invented quotes), so check specific claims, not reputation. "Great story, beautifully told, by a famous expert" is not the same as "true."`,
          vocab: [
            {
              word: `fabrication scandal`,
              definition: `A true 2012 case that teaches a sharp lesson about trusting sources by reputation. Jonah Lehrer, a celebrated young science writer, published a bestselling book, "Imagine: How Creativity Works," that was charming, confident, and full of tidy neuroscience stories about the creative brain, and people loved it, until journalist Michael Moynihan noticed problems with the Bob Dylan quotes and discovered Lehrer had simply invented some of them, putting made-up words in a real person's mouth to make his story land better. The fallout was severe: the book was pulled from shelves, Lehrer resigned from his job at a major magazine, and it emerged that he had also recycled his own work and stretched scientific findings beyond what they supported, making it one of the most famous cases of fabrication in modern popular science writing. The painful insight is that much of what made the book appealing, the neat, confident, story-shaped neuroscience, was exactly the kind of thing real researchers are careful never to claim, because real science is messier than a good story. The case teaches several things at once: fame and charm are not evidence, since a beloved bestseller can be built on fabrication; the very smoothness that made it delightful was itself a warning sign, because real science rarely fits that neatly; and fabrication can hide inside otherwise-real material, since Lehrer cited genuine research alongside invented quotes, which is exactly why you check specific claims rather than trusting an author's reputation. "It is a great story, beautifully told, by a famous expert" is not the same as "it is true."`,
              audioPrompt: `Now a true story that teaches a sharp lesson about trusting sources, {name}. In 2012, a celebrated young science writer named Jonah Lehrer published a bestselling book called Imagine: How Creativity Works. It was charming, confident, and full of tidy neuroscience stories about how the creative brain works. People loved it. Then a journalist named Michael Moynihan noticed something wrong with the Bob Dylan quotes in the book, and on checking, found that Lehrer had simply invented some of them, made up words and put them in a real person's mouth, to make his story land better. The fallout was severe and swift. The book was pulled from shelves, Lehrer resigned from his job at a major magazine, and it came out that he had also stretched scientific findings beyond what they supported. Here is the painful part: a lot of what made his book so appealing, the neat, confident, story-shaped neuroscience, was exactly the kind of thing real researchers are careful never to claim, because the real science is messier than a good story. What does this teach? Fame and charm are not evidence; a beloved bestseller can still be built on fabrication. The very smoothness that made the book delightful was itself a warning sign. And fabrication can hide inside otherwise-real material, which is exactly why you check specific claims rather than trusting an author's reputation. A great story, beautifully told, by a famous expert is not the same as the truth.`,
            },
            {
              word: `Jonah Lehrer`,
              definition: `Celebrated young science writer who published the 2012 bestseller "Imagine: How Creativity Works" — charming, confident, and full of tidy neuroscience stories. People loved it until journalist Michael Moynihan discovered Lehrer had invented some of the Bob Dylan quotes, putting made-up words in a real person's mouth to make the story land better. The book was pulled from shelves; Lehrer resigned from a major magazine. One of the most famous fabrication cases in modern popular science writing.`,
              audioPrompt: `Jonah Lehrer is a name worth knowing as a cautionary case, {name}, not to be cruel to someone who made a serious mistake, but because his story teaches something important about how to evaluate sources. Lehrer was, before the scandal, a celebrated young science writer. His 2012 book "Imagine: How Creativity Works" was a bestseller. It was charming and well-written, full of engaging stories about creativity, neuroscience, and famous artists and scientists. People who read it said it was wonderful. And then journalist Michael Moynihan noticed something wrong with the Bob Dylan quotes in the book. On checking more carefully, he found that Lehrer had invented some of them, put words in Bob Dylan's mouth that Dylan never said, to make the story land better. It was fabrication: making something up and presenting it as real. The fallout was swift. The book was pulled from shelves. Lehrer resigned from his job at a major magazine. It emerged he had also recycled his own work and stretched scientific findings beyond what they supported. The case became one of the most famous fabrication scandals in modern popular science writing. What you carry from it: fame and charm are not evidence. A beloved, beautifully written, widely praised book can still be built partly on fabrication. Check the specific claims, not the reputation.`,
            },
            {
              word: `Michael Moynihan`,
              definition: `The journalist who noticed something wrong with the Bob Dylan quotes in Jonah Lehrer's 2012 bestseller "Imagine: How Creativity Works," and on checking, found that Lehrer had invented some of them. Moynihan's investigation exposed one of the most famous fabrication scandals in modern popular science writing. His work is a reminder that checking specific claims — rather than trusting a source's fame or charm — is what actually catches fabrication.`,
              audioPrompt: `Michael Moynihan is the journalist who broke the Jonah Lehrer story, {name}, and his role is worth noting. He was not a scientist. He was not a publisher or an editor at the magazine where Lehrer worked. He was a journalist who read the book and noticed something felt off about the Bob Dylan quotes. So he checked them. He went and looked at what Dylan had actually said, in interviews, in other sources he could verify. And he found that some of what was attributed to Dylan in the book was simply not there anywhere. Lehrer had invented it. Moynihan reported what he found, and the whole fabrication unraveled from there. What his story shows is exactly what this lesson is teaching: the way you catch fabrication is not by trusting fame or charm. It is by checking specific claims against evidence. Moynihan was not the most famous person in the room. He was not more celebrated than Lehrer. He just did the thing that most people had not bothered to do: he actually checked. That is the move. That is the entire skill. Check the specific claim. Do not just trust the story because it is beautiful and the teller is famous.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Real Science Actually Helps You Do`,
          paragraphs: [
            `So if the myths are out, what does the real, careful science actually offer a person who wants to be more creative? Quite a lot, as it happens, and all of it more grounded than "unlock your brain." First, incubation is real: stepping away from a problem genuinely helps, because it lets the default mode network do its loose, associative work in the background. This is why ideas arrive in the shower, on walks, or after sleep, you are giving the wandering mind room. "Take a break and let it sit" is not laziness; it is a researched strategy.`,
            `Second, the generate-then-evaluate rhythm is real and usable. Because creative thinking braids the wandering mind and the focusing mind, you can deliberately separate the two: first generate lots of ideas without judging them (let the default mode network run free), then switch into focused, critical mode to evaluate and refine. Trying to do both at once, creating and harshly judging in the same breath, is exactly what jams people up. The science says: dream first, judge second, and keep them apart.`,
            `Third, and maybe most freeing: the science strongly supports that creativity is built, not innately gifted to a lucky few. The brain is plastic, it changes with practice, and the networks involved in creative thinking strengthen with use, like any skill. This circles back to something this whole band has insisted on: you become more creative by doing creative work, by practicing the generate-and-refine cycle, by giving your mind room to wander and then the focus to build. That is a real, evidence-based path, and notice how much more it offers than a myth about your special right brain. The honest science is not only truer; it is more encouraging, because it puts creativity within reach of effort rather than locking it behind a gift you either have or do not.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s4-usable.webp`,
          imageCaption: `What the real, careful science offers someone who wants to be more creative, all more grounded than "unlock your brain." First, incubation is real: stepping away from a problem genuinely helps, letting the default mode network do loose associative work in the background (why ideas arrive in the shower, on walks, after sleep). "Take a break and let it sit" is a researched strategy, not laziness. Second, the generate-then-evaluate rhythm: because creative thinking braids the wandering and focusing minds, deliberately separate them, generate lots of ideas without judging (default mode free), then switch to focused critical mode to refine. Doing both at once jams people up. Dream first, judge second, keep them apart. Third, most freeing: science strongly supports that creativity is built, not innately gifted, the brain is plastic, creative networks strengthen with use like any skill. You become more creative by doing creative work. The honest science is truer AND more encouraging, putting creativity within reach of effort rather than behind a gift you either have or don't.`,
          vocab: [
            {
              word: `you do`,
              definition: `The real, careful science of creativity offers grounded, usable strategies, all more honest than "unlock your brain." First, incubation is real: stepping away from a problem genuinely helps because it lets the default mode network do its loose, associative work in the background, which is why ideas arrive in the shower, on walks, or after sleep, so "take a break and let it sit" is a researched strategy, not laziness. Second, the generate-then-evaluate rhythm is real and usable: because creative thinking braids the wandering mind and the focusing mind, you can deliberately separate the two, first generating lots of ideas without judging them (letting the default mode network run free), then switching into focused, critical mode to evaluate and refine, since trying to create and harshly judge in the same breath is exactly what jams people up, so the science says dream first, judge second, and keep them apart. Third, and most freeing, the science strongly supports that creativity is built, not innately gifted to a lucky few: the brain is plastic, it changes with practice, and the networks involved in creative thinking strengthen with use like any skill, which circles back to the band-long insistence that you become more creative by doing creative work, practicing the generate-and-refine cycle, giving your mind room to wander and then the focus to build. That is a real, evidence-based path, and it offers far more than a myth about your special right brain, because the honest science is not only truer but more encouraging, putting creativity within reach of effort rather than locking it behind a gift you either have or do not.`,
              audioPrompt: `So if the myths are out, {name}, what does the real science actually offer a person who wants to be more creative? Quite a lot, and all of it more grounded than unlock your brain. First, incubation is real: stepping away from a problem genuinely helps, because it lets the default mode network do its loose, associative work in the background. This is why ideas arrive in the shower, on walks, or after sleep. Take a break and let it sit is not laziness; it is a researched strategy. Second, the generate-then-evaluate rhythm is real and usable. Because creative thinking braids the wandering mind and the focusing mind, you can deliberately separate the two: first generate lots of ideas without judging them, then switch into focused, critical mode to evaluate and refine. Trying to do both at once is exactly what jams people up. Dream first, judge second, and keep them apart. Third, and maybe most freeing: the science strongly supports that creativity is built, not innately gifted to a lucky few. The brain is plastic, and the networks involved in creative thinking strengthen with use, like any skill. You become more creative by doing creative work. The honest science is not only truer; it is more encouraging, because it puts creativity within reach of effort rather than locking it behind a gift you either have or do not.`,
            },
            {
              word: `incubation`,
              definition: `A real, research-backed creativity strategy: stepping away from a problem genuinely helps because it lets the default mode network do its loose, associative work in the background. This is why ideas arrive in the shower, on walks, or after sleep. "Take a break and let it sit" is not laziness — it is giving the wandering mind room to generate connections that focused attention would miss.`,
              audioPrompt: `Incubation is a real, research-backed creativity strategy, {name}, and it is worth knowing clearly so you can use it on purpose. The idea: stepping away from a problem you are working on genuinely helps. Not because your brain shuts off and rests. But because when you are no longer actively focusing on the problem, the default mode network takes over and starts doing its loose, associative work in the background. It makes connections between things that tight, focused attention would not put together. Ideas that were stuck start to move. Fragments that seemed unrelated begin to combine. And then, often in a moment when you are not trying at all, something clicks. This is why ideas arrive in the shower. Why they come on a walk. Why you sometimes wake up with a solution you did not have when you went to sleep. The mind was not idle during those times. The default mode network was working. You were incubating. The practical lesson: when you have been working on something and you feel genuinely stuck, stepping away is often the right move. Not as defeat. As strategy. Give the wandering mind room to do the part of the work that focused attention cannot. Take a break and let it sit. That is not laziness. That is how creative thinking actually works.`,
            },
            {
              word: `brain plastic`,
              definition: `The brain is plastic — it changes with practice — and the networks involved in creative thinking strengthen with use, like any skill. This is the most freeing insight in the real science of creativity: creativity is built, not innately gifted to a lucky few. You become more creative by doing creative work, practicing the generate-and-refine cycle, giving your mind room to wander and then the focus to build.`,
              audioPrompt: `Brain plasticity is the scientific concept that changes everything about the "I'm just not a creative person" story, {name}. The brain is plastic. That means it is not fixed. It changes with practice. The connections and networks you use grow stronger; the ones you do not use weaken. This is true of every skill, from playing an instrument to doing math to speaking a language. And the real science strongly supports that it is true of creativity too. The networks involved in creative thinking, the default mode network, the executive control network, the ability to switch between them, these strengthen with use. That means you become more creative by doing creative work. Not by having the right brain type. Not by unlocking a dormant reserve. By practicing the generate-and-refine cycle. By giving your mind room to wander and then the focus to build. By doing the work. This is the most freeing thing the real science offers, and it is more freeing than any myth. A myth says you either have the creative gift or you do not, and there is nothing to be done. The real science says creativity is built, and the path to building it is real, evidence-based, and within reach of anyone willing to put in the work. The honest science is not only truer. It is more encouraging.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You saw the real science: creativity is not a single spot or one hemisphere but a whole-brain process that braids the wandering default mode network with the focusing executive control network, dreaming up possibilities and then evaluating them. You met the big myths, "right-brain creative," "we only use 10 percent", and learned that their neat, flattering simplicity is exactly the warning sign, because they crumble when brains are actually scanned.`,
            `You learned the cautionary tale of Jonah Lehrer, the celebrated science writer whose charming 2012 bestseller turned out to contain fabricated quotes and overstated findings, a permanent reminder that fame and a beautiful story are not evidence, and that the very smoothness of a tale can be a red flag. And you saw what the honest science genuinely offers: incubation, the generate-then-evaluate rhythm, and the freeing, evidence-backed truth that creativity is built through practice, not handed to a gifted few.`,
            `Now the source-evaluation screen will hand you several real or realistic sources about the creative brain: a careful researcher, a "right-brain" personality quiz, a slick "unlock 90 percent" product, a charming but fabricating popular writer in the Lehrer mold, and a solid science journalist. Sort them with the right criteria, prizing careful, evidence-based science and honest uncertainty, and catching the neat, flattering, or fabricated claims, no matter how famous or charming the source. Real curiosity and clear judgment at once. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s5-before.webp`,
          imageCaption: `Threads together. The real science: creativity is not a single spot or hemisphere but a whole-brain process braiding the wandering default mode network with the focusing executive control network, dreaming up possibilities then evaluating them. The big myths, "right-brain creative," "we only use 10 percent", have neat, flattering simplicity that is exactly the warning sign, since they crumble when brains are scanned. The Jonah Lehrer cautionary tale (2012): a celebrated writer's charming bestseller contained fabricated quotes and overstated findings, proving fame and a beautiful story are not evidence and that smoothness can be a red flag. What honest science offers: incubation, the generate-then-evaluate rhythm, and the freeing truth that creativity is built through practice, not handed to a gifted few. The source-evaluation screen hands you sources to sort: prize careful evidence-based science and honest uncertainty, catch the neat, flattering, or fabricated claims no matter how famous the source. Real curiosity and clear judgment at once.`,
          vocab: [
            {
              word: `judgment together`,
              definition: `The synthesis before the source-evaluation screen. You saw the real science: creativity is not a single spot or one hemisphere but a whole-brain process that braids the wandering default mode network (active in mind-wandering and daydreaming) with the focusing executive control network (which evaluates and refines), dreaming up possibilities and then judging them. You met the big myths, "right-brain creative versus left-brain logical" and "we only use 10 percent of our brains," and learned that their neat, flattering simplicity is exactly the warning sign, because both crumble when brains are actually scanned. You learned the cautionary tale of Jonah Lehrer, the celebrated science writer whose charming 2012 bestseller "Imagine" turned out to contain fabricated quotes and overstated findings, a permanent reminder that fame and a beautiful story are not evidence and that the very smoothness of a tale can be a red flag. And you saw what the honest science genuinely offers: incubation (stepping away lets the default mode network work), the generate-then-evaluate rhythm (dream first, judge second, keep them apart), and the freeing, evidence-backed truth that creativity is built through practice, not handed to a gifted few. The source-evaluation screen will hand you several real or realistic sources to sort with the right criteria, prizing careful, evidence-based science and honest uncertainty while catching the neat, flattering, or fabricated claims no matter how famous or charming the source, holding real curiosity and clear judgment at once.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You saw the real science: creativity is not a single spot or one hemisphere but a whole-brain process that braids the wandering default mode network with the focusing executive control network, dreaming up possibilities and then evaluating them. You met the big myths, right-brain creative, we only use 10 percent, and learned that their neat, flattering simplicity is exactly the warning sign, because they crumble when brains are actually scanned. You learned the cautionary tale of Jonah Lehrer, the celebrated science writer whose charming 2012 bestseller turned out to contain fabricated quotes and overstated findings, a permanent reminder that fame and a beautiful story are not evidence. And you saw what the honest science genuinely offers: incubation, the generate-then-evaluate rhythm, and the freeing truth that creativity is built through practice, not handed to a gifted few. Now the source-evaluation screen will hand you several sources about the creative brain, and your job is to sort them with the right criteria, prizing careful, evidence-based science and honest uncertainty, and catching the neat, flattering, or fabricated claims, no matter how famous or charming the source. Real curiosity and clear judgment at once.`,
            },
            {
              word: `neat flattering`,
              definition: `The two qualities that help brain myths spread: they are neat (simple, tidy, easy to grasp) and flattering (they make you feel specially gifted or full of hidden potential). "You're a right-brain creative" gives a tidy identity; "unlock your 90 percent" promises hidden greatness. These qualities are exactly what should make a claim worth double-checking — not trusting. Whenever a brain claim is suspiciously neat and flattering, that is the warning sign.`,
              audioPrompt: `Neat and flattering is the combination that helps brain myths spread, {name}, and recognizing it is one of the most useful critical-thinking tools in this lesson. Here is how it works. A myth is neat when it is simple, tidy, and easy to grasp. "You're a right-brain creative" is neat. It takes a complicated, whole-brain process and compresses it into a simple type that explains everything. "We only use 10 percent of our brains" is neat. One number, one promise, no complexity. Neatness makes a claim easy to remember and easy to repeat. Then there is the flattery. "You're a right-brain creative" is also flattering: it tells you that you are special, that you have a particular kind of gifted mind. "Unlock your 90 percent" promises hidden greatness inside you, just waiting to be released. Flattery makes a claim feel good to believe. And when a claim is both neat and flattering, it spreads like wildfire, because people want to believe it and it is easy to repeat. The problem is that neither neatness nor flattery is evidence of truth. Real neuroscience is messy, complicated, and uncertain in ways that do not compress into neat types or single numbers. So here is the rule: whenever a brain claim is suspiciously neat and makes you feel specially gifted with no effort, treat that combination as a warning sign. Check before you believe.`,
            },
            {
              word: `generate-then-evaluate`,
              definition: `A real, usable creativity strategy based on the actual science: first generate lots of ideas without judging them (let the default mode network run free), then switch into focused, critical mode to evaluate and refine. Trying to create and harshly judge in the same breath is exactly what jams people up. The science says: dream first, judge second, and keep them apart.`,
              audioPrompt: `Generate-then-evaluate is the real, usable creativity strategy that the actual brain science hands you, {name}. Here is why it works. Creative thinking braids two different mental modes: the wandering mind that generates wild possibilities and the focusing mind that evaluates and refines them. The problem is that these two modes work against each other if you run them at the same time. When you try to create a new idea and immediately judge it in the same breath, the judging shuts down the generating. You hear yourself think "that's a bad idea" before the idea has finished forming, and you abandon it, and the next one, and the next. You jam up. The generate-then-evaluate strategy separates the two modes deliberately. First: generate freely. Do not judge. Let every idea form without immediately dismissing it. Let the default mode network run free and produce as many possibilities as it will. This phase is messy and many of the ideas will be bad. That is fine. Bad ideas make space for good ones and sometimes contain pieces of them. Second: evaluate. Now switch into focused, critical mode. Look at what you generated. Which ideas are actually interesting? Which ones are worth developing? How do you refine the best ones into something real? Keep the modes apart, and the research says you get better creative output than when you run them together. Dream first. Judge second.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l13-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources On The Creative Brain`,
          intro: `{name}, five sources about the neuroscience of creativity. For each, decide how much to trust it and on what terms. The key skill: prize careful, evidence-based science and honest uncertainty, while catching neat, flattering, or fabricated claims, no matter how famous or charming the source.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `A cognitive neuroscientist on creativity networks`,
              type: `Scholarly / researcher source`,
              context: `A researcher who studies creativity with brain imaging explains that creative thinking involves whole-brain networks, especially the interplay of the default mode network and the executive control network, and is careful to note what is established, what is still uncertain, and that there is no single "creativity center" or "creative hemisphere."`,
              quote: `"Creativity isn't in one spot. We see the default mode network and control network interacting, the mind generating, then evaluating. And I'll be honest about the limits: imaging shows correlation, not the whole story. We're still learning."`,
              questions: [
                `Why is this a strong, trustworthy source on the creative brain?`,
                `What makes the researcher's admission of limits a sign of reliability, not weakness?`,
                `How does this directly contradict the "creative hemisphere" myth?`,
              ],
              evaluation: `This is a strong Tier A source. The researcher describes the actual evidence, the interplay of the default mode and executive control networks, and is careful to separate what is established from what is still uncertain, even admitting that imaging shows correlation rather than the whole story. That honest admission of limits is a sign of reliability, not weakness: real science states its boundaries instead of telling a tidy, complete-sounding tale. It directly contradicts the "creative hemisphere" myth by stating there is no single creativity spot or creative side, just whole-brain networks cooperating. Trust this source, and notice that its careful uncertainty is exactly what makes it trustworthy, the opposite of the smooth, too-perfect stories you should distrust.`,
            },
            {
              id: `s2`,
              tier: `C-pseudoscience`,
              title: `A "discover your creative hemisphere" personality quiz`,
              type: `Pop-psychology product`,
              context: `A slick online quiz promises to reveal whether you are "right-brained and creative" or "left-brained and logical," assigning you a brain-type identity based on a few questions and selling a follow-up "creativity unlocking" program tailored to your type.`,
              quote: `"Take our 2-minute quiz to discover if you're a right-brained creative genius or a left-brained logical thinker, then unlock your true potential with our personalized brain-type program!"`,
              questions: [
                `What's the central false assumption this quiz is built on?`,
                `Why is "it told me something true about myself" not evidence it works?`,
                `What real science does this directly contradict?`,
              ],
              evaluation: `This is Tier C-pseudoscience built on the discredited left-brain/right-brain myth. Its central false assumption is that people are neurologically "right-brained" or "left-brained" types, which large brain-imaging studies have shown is not true, creativity uses both hemispheres extensively and nobody is a single-hemisphere type. "It told me something true about myself" is not evidence it works, because a vague, flattering result feels accurate to almost anyone (the same trick horoscopes use), and feeling described is not the same as being measured. It directly contradicts the real science that creativity is a whole-brain, networked process. The right response is skepticism, sharpened by noticing that the quiz exists to sell a follow-up program, the commercial motive plus the flattering, false premise is the whole tell.`,
            },
            {
              id: `s3`,
              tier: `C-pseudoscience`,
              title: `A product promising to "unlock your unused 90% of brain"`,
              type: `Wellness / self-improvement product`,
              context: `A program claims that ordinary people use only 10 percent of their brains and that its method will "activate the dormant 90 percent" to unleash hidden creativity and genius, citing vague "neuroscience" and dramatic before-and-after testimonials.`,
              quote: `"Scientists say we use just 10% of our brains. Our breakthrough method activates the other 90%, unlocking the dormant genius and limitless creativity hidden inside you. Results guaranteed."`,
              questions: [
                `Is the "10% of the brain" claim true?`,
                `Why is "scientists say" doing dishonest work in this quote?`,
                `What makes the testimonials weak evidence?`,
              ],
              evaluation: `This is Tier C-pseudoscience resting on a flatly false premise. The "we only use 10 percent of our brains" claim is not true: brain imaging shows we use virtually all of the brain, just not all at once, and there is no dormant 90 percent waiting to be switched on. "Scientists say" is doing dishonest work here, it borrows the authority of science for a claim real scientists reject, a classic move you learned to distrust. The testimonials are weak evidence because they are selected, unverifiable, and prone to the placebo and expectation effects, dramatic before-and-after stories prove enthusiasm, not mechanism. The right response is firm skepticism: the product is selling a myth that was never true, dressed in borrowed scientific authority and a guarantee no honest researcher would make.`,
            },
            {
              id: `s4`,
              tier: `C-pseudoscience`,
              title: `A charming bestseller with fabricated quotes (Lehrer-style)`,
              type: `Popular science writing`,
              context: `A celebrated, charming popular-science author publishes a bestseller full of tidy, perfect little stories about how the creative brain works, each study landing as a neat parable, until a journalist discovers that some of the vivid quotes were invented and several findings were stretched well beyond what the research supported, echoing the real Jonah Lehrer "Imagine" scandal of 2012.`,
              quote: `"Every chapter delivers a perfect, surprising story: a scientist's eureka moment, a tidy study, a clean lesson. It reads beautifully, every example clicks into place, nothing is ever messy or uncertain."`,
              questions: [
                `Why is the very smoothness of this book a warning sign?`,
                `Does the author's fame and charm make the claims more trustworthy?`,
                `Why must you check specific claims rather than trust the author's reputation?`,
              ],
              evaluation: `This is the Lehrer pattern, and despite the polish it earns deep skepticism. The very smoothness is the warning sign: real science is messy and uncertain, so when every study lands as a perfect parable with nothing ever ambiguous, that too-good-to-be-true neatness suggests the messiness has been smoothed away or invented. Fame and charm do not make the claims trustworthy, the real Jonah Lehrer was celebrated and beloved, and still fabricated Bob Dylan quotes and overstated findings in his 2012 bestseller "Imagine," which was pulled from shelves. You must check specific claims rather than trust reputation precisely because fabrication hides inside otherwise-real material: genuine citations sit right beside invented quotes. A great story, beautifully told by a famous expert, is not the same as the truth.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `A careful science journalist reporting on creativity research`,
              type: `Science journalism`,
              context: `A science journalist writes an engaging article about creativity research that is built on real studies, names the researchers and what they actually found, distinguishes solid findings from preliminary ones, links to the original papers, and avoids overclaiming, telling a good story without inventing or inflating anything.`,
              quote: `"Researchers found mind-wandering can aid idea generation, though they caution the effect is modest and context-dependent. Here are the studies, and here's what they don't yet show."`,
              questions: [
                `What makes this trustworthy even though it's written for a general audience?`,
                `How is this different from the charming-but-fabricating bestseller?`,
                `Why does linking the original papers and naming limits matter?`,
              ],
              evaluation: `This is solid Tier B: engaging science journalism done honestly. It is trustworthy because it is built on real, named studies, distinguishes solid findings from preliminary ones, links to the original papers so readers can check, and avoids overclaiming, it tells a good story without inventing or inflating anything. This is the crucial contrast with the charming-but-fabricating bestseller (S4): both are readable and aimed at a general audience, but this one earns trust by being checkable and honest about limits, while the other earns suspicion by being suspiciously smooth and, ultimately, fabricated. Linking the original papers and naming the limits matters because it lets you verify rather than take the writer's word, the opposite of "trust me, it's a great story." A readable source can be entirely trustworthy when it is grounded and transparent like this.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your rule for telling real brain science from pop-science myth and fabrication? Specifically, how do you handle a claim that is charming, confident, and flattering, and what makes a source's honesty about uncertainty a point in its favor rather than against it? In 5-6 sentences.`,
          reflectionPrompt: `The "right-brain creative" and "10% of your brain" myths are everywhere. Where have you personally believed or heard one of these? And have you ever trusted something because it was a great story told by a famous, charming person, the exact trap the Lehrer scandal warns about?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Brain imaging of creative thinking found something that breaks the popular picture. What did it actually find?`,
              options: [
                `A single "creativity center" that lights up only in artists.`,
                `That all of creativity lives entirely inside the right hemisphere of the brain, on its own.`,
                `That creativity uses whole-brain networks — the default mode and executive control networks together.`,
                `That creative people use a completely different brain from logical people.`,
              ],
              correctIndex: 2,
              explanation: `Imaging finds no single "creativity spot." Creativity uses whole-brain networks, especially the wandering default mode network and the focusing executive control network learning to cooperate — generating ideas, then evaluating them. The distractors are the myths the science overturns: a creativity center, a creative hemisphere, a separate "creative brain."`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does the lesson treat the "left-brain logical / right-brain creative" idea as a myth?`,
              options: [
                `Because the human brain does not actually have any separate hemispheres at all, it turns out.`,
                `Because logical people actually use the right side and creative people the left.`,
                `Because only artists have a right hemisphere.`,
                `Because creativity uses both hemispheres, and scans of thousands of brains found no "right-brain type" people.`,
              ],
              correctIndex: 3,
              explanation: `The hemispheres have some specializations, but creativity uses both sides extensively, and large imaging studies found no people who are neurologically a "right-brain type." The tidy personality story is a myth. The distractors deny hemispheres exist, swap the myth's sides, or make a hemisphere artist-only.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `A product promises to "unlock the unused 90% of your brain" for hidden genius. What's wrong with its premise?`,
              options: [
                `Nothing at all is wrong — we really do use only about 10% of our brains, just as it says.`,
                `We use virtually all of our brain, just not all at once — no dormant 90% to unlock.`,
                `We actually use only 5%, so the number is just slightly off.`,
                `The unused 90% can only be unlocked by experts, not products.`,
              ],
              correctIndex: 1,
              explanation: `Brain imaging shows we use virtually all of the brain, just not all at once; there's no dormant reserve of genius waiting to be switched on. The "10%" premise is simply false. The distractors accept the myth, tweak the fake number, or concede the dormant-reserve idea — all the lesson rejects.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why do the brain myths ("right-brain creative," "unlock your 90%") spread so easily?`,
              options: [
                `Because they're simple, flattering, and feel empowering — exactly what should make you check a claim.`,
                `Because they've all been carefully proven by neuroscientists.`,
                `Because they are genuinely complicated and quite hard for most ordinary people to understand.`,
                `Because most people find them boring and ignore them.`,
              ],
              correctIndex: 0,
              explanation: `These myths spread because they're simple, flattering, and feel empowering — a tidy identity or hidden greatness — and those qualities are exactly the warning signs that a claim deserves checking rather than trust. Real neuroscience is messier and more honest. The distractors claim the myths are proven, complicated, or ignored — none true.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did the Jonah Lehrer scandal (2012) actually involve?`,
              options: [
                `A researcher who discovered the creativity center of the brain.`,
                `A famous scientist who finally proved that the old 10% brain myth was completely real after all.`,
                `A celebrated science writer whose bestseller was found to contain invented quotes and stretched findings.`,
                `A journalist who faked an entire study from scratch in a lab.`,
              ],
              correctIndex: 2,
              explanation: `Jonah Lehrer was a celebrated science writer whose charming 2012 bestseller "Imagine" was found to contain fabricated Bob Dylan quotes and findings stretched beyond the evidence; the book was pulled and he resigned. The distractors invent a discovery, a proof, or a lab study — none of which happened.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the deeper lesson the Lehrer case teaches about evaluating sources?`,
              options: [
                `That you should never read popular science books at all.`,
                `That famous writers are always lying about everything.`,
                `That a charming story by a famous expert can still be false — check specific claims, not reputation.`,
                `That only those books which contain no quotations from anyone at all can ever really be trusted.`,
              ],
              correctIndex: 2,
              explanation: `Fame and charm aren't evidence; a beloved bestseller can be built on fabrication. The very smoothness that made it delightful was a warning sign, because real science is messy — so you check specific claims rather than trust reputation. The distractors over-correct into rejecting all popular science, all famous writers, or all quotes.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is "incubation" — stepping away from a problem — a real, research-backed creativity strategy and not just laziness?`,
              options: [
                `Because stepping away lets the default mode network do loose, associative work in the background.`,
                `Because the brain shuts off completely and rests when you stop.`,
                `Because creativity only happens when you force yourself to focus harder.`,
                `Because taking breaks is what finally unlocks the famous unused 90 percent of your brain.`,
              ],
              correctIndex: 0,
              explanation: `Stepping away genuinely helps because it lets the default mode network do its loose, associative work in the background — which is why ideas arrive in the shower or on walks. "Take a break and let it sit" is a researched strategy. The distractors claim the brain shuts off, that only forced focus works, or smuggle the 90% myth back in.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The science suggests a "generate-then-evaluate" rhythm. What does it say jams people up?`,
              options: [
                `Generating too many ideas before any of them are good.`,
                `Trying to create and harshly judge in the same breath, rather than dreaming first and judging second.`,
                `Taking any breaks at all during creative work.`,
                `Using both of the brain's two hemispheres together at the very same time while you work.`,
              ],
              correctIndex: 1,
              explanation: `Because creative thinking braids the wandering mind and the focusing mind, the usable move is to separate them: generate freely first, then switch to focused evaluation. Trying to create and harshly judge at once is exactly what jams people up. The distractors blame idea-volume, breaks, or normal whole-brain use — none of which is the problem.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If a creativity book is beautifully written, full of perfect tidy stories, and by a famous, charming expert, that's good reason to trust its scientific claims.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False, and this is the sharp lesson of the Jonah Lehrer case. Being beautifully written, full of perfect tidy stories, and by a famous, charming expert is not good reason to trust scientific claims — if anything, suspicious smoothness is a warning sign. Real science is messy and uncertain, so when every study lands as a flawless little parable with nothing ambiguous, the neatness suggests the messiness has been smoothed away or invented. Lehrer was celebrated and genuinely charming, and his 2012 bestseller "Imagine" was still pulled from shelves after a journalist found he had fabricated Bob Dylan quotes and stretched findings beyond the evidence. Fame and charm are not evidence; a beloved bestseller can be built on fabrication. And because fabrication can hide inside otherwise-real material — invented quotes sitting right beside genuine citations — you check specific claims rather than trusting an author's reputation. The honest signal of a trustworthy source is the opposite of seamless confidence: it names its limits, distinguishes solid findings from preliminary ones, and lets you verify. "It's a great story, beautifully told, by a famous expert" is simply not the same as "it's true."`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 13. A friend takes an online quiz that says they're a "right-brained creative type" and tells you that explains why they're artistic and bad at math, and that you should take it too. Using this lesson, what's the most honest and thoughtful response?`,
              options: [
                `Take the quiz and agree you're both right-brained, since it feels accurate.`,
                `Tell your friend they're stupid for believing it and that art and math have nothing to do with the brain.`,
                `Gently explain that the left-brain/right-brain type idea is a myth that brain scans don't support, that the result feels accurate because it's vague and flattering, and that being "bad at math" isn't fixed by a brain type — while not making your friend feel dumb for a super-common belief.`,
                `Say nothing, since correcting a friend about brain science isn't worth it.`,
              ],
              correctIndex: 2,
              explanation: `Applied source evaluation in a real, kind way. The move is to recognize the "right-brain type" result as the discredited myth it is (brain scans found no single-hemisphere types; creativity uses both sides), to note why it feels accurate anyway (vague, flattering results feel true to almost anyone — the horoscope trick), and to push back gently on the harmful "I'm just bad at math" identity, since the real science says creativity and skill are built, not fixed by a brain type — all without making your friend feel dumb for holding a near-universal belief. The distractors are the failure modes: accepting the myth, being cruel, or disengaging entirely.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Did you believe the "right-brain creative" or "10% of your brain" idea before this lesson? What changed when you learned both are myths that crumble under actual brain scans? What surprised you most about how creativity really works in the brain?` },
            { id: `reflect-strategy`, category: `Trying it yourself`, prompt: `The science says: let your mind wander to generate ideas, then switch to focused mode to judge them — and don't do both at once. Think of a time you got creatively stuck. Were you trying to create and harshly judge in the same breath? How could the generate-then-evaluate rhythm help next time?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson said creativity is built, not gifted to a lucky few. Have you ever told yourself you're "just not a creative person"? How does the real science — that creative networks strengthen with practice — change that story about yourself?` },
            { id: `reflect-lehrer`, category: `Trusting sources`, prompt: `The Lehrer scandal shows a charming, famous expert can still be wrong or fabricating. Have you ever believed something mainly because it was a great story told by someone impressive? How will you check specific claims next time, even from people you admire?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You'll keep meeting confident brain claims — quizzes, products, viral posts. What's your personal rule now for spotting a pop-science myth, especially one that's simple, flattering, and makes you feel specially gifted?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "even if the right-brain thing isn't literally true, it's a harmless, useful way to talk about being creative." State the strongest version of that. Where might it be fair, and where does believing a false brain-type story actually do harm?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Brain myths are everywhere, and the real science hands you usable creativity strategies. Two ways to put this lesson to work.`,
          familyActivity: {
            title: `Myth-Bust And Try The Real Strategy`,
            duration: `45 minutes`,
            description: `Do two things together as a family. First, go on a quick "brain myth hunt": for about fifteen minutes, look online or think back over things you've heard, and find a brain-or-creativity claim each (a "right-brain quiz," a "10% of your brain" reference in a movie, a "this trick rewires your brain" ad). Talk about each one: is it a real science claim or a flattering myth? How can you tell? Then, second, actually try the real, research-backed strategy: pick a small creative challenge (invent a story together, design a dream treehouse, brainstorm uses for a paperclip). Do it in two clear phases — first a wild generate phase where every idea is welcome and nobody is allowed to judge, then a separate evaluate phase where you pick and refine the best ones. Notice how separating "dreaming" from "judging" changes the experience. The goal is to feel, firsthand, that the honest science gives you a better creativity tool than any myth.`,
          },
          projectOption: {
            title: `Investigate One Brain Myth, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a careful investigator of one popular brain-or-creativity claim. Week 1: choose one — "left-brain/right-brain types," "we only use 10% of our brains," "listening to Mozart makes you smarter," or a specific "rewire your creative brain" product. Research it honestly: what exactly is claimed? Is it a real, testable science claim? What do actual neuroscientists say, and what does careful research show? Try to find both the claim and a credible debunking, and notice who benefits from spreading it. Week 2: write up what you found in your own words — what (if anything) is real, what is myth, how the myth spread, and how someone could spot it. Bonus: see if you can trace the myth back to where it started (many have a surprising origin). End with your own rule for telling real brain science from pop-science myth. The point is to practice precise skepticism: checking confident claims instead of repeating them.`,
            offerToParent: `Parent: opt your child into the brain-myth investigation. It builds media-literacy and science-literacy skills that transfer far beyond creativity — spotting flattering, simple, "borrowed authority" claims and checking them against real evidence. Tracing a famous myth (like the 10% claim) back to its murky origin is a genuinely eye-opening exercise in how confidently-stated falsehoods spread, and it leaves kids better equipped to evaluate the flood of brain and wellness claims they'll meet for life.`,
          },
          identityQuestion: `If you become someone who knows real brain science from flattering myth, who can enjoy a charming story without mistaking it for proof, and who believes (correctly) that creativity is built through practice rather than handed to a gifted few — what does that let you attempt that someone trapped in "I'm just not a creative person" never will?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows creativity is built through practice, not locked behind a "creative brain" I either have or don't.`,
            `A person who can enjoy a great science story without mistaking charm for proof.`,
            `Someone who spots a flattering brain myth instead of believing it.`,
          ],
          saveKey: `identity_responses_ca_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteen down. This one asked you to hold real curiosity and clear judgment at once, and you did. You learned what the creative brain actually does — not a single spot or a magic hemisphere, but whole-brain networks braiding the wandering default mode network with the focusing executive control network, dreaming up ideas and then evaluating them. You saw through the big myths, "right-brain creative" and "we only use 10 percent," and learned that their neat, flattering simplicity is exactly the warning sign. You met the cautionary tale of Jonah Lehrer, whose charming 2012 bestseller turned out to be built partly on invented quotes, a permanent reminder that fame and a beautiful story are not evidence, and that suspicious smoothness is a red flag. And you saw what the honest science genuinely gives you: incubation, the generate-then-evaluate rhythm, and the freeing truth that creativity is built through practice, not handed to a lucky few. Most of all, you sharpened the skill of prizing careful, honest science — the kind that names its limits — over confident, tidy claims that feel too good to question. Next: synesthesia, where some people genuinely see sound and taste color, real, fascinating, and surprisingly easy to mix up with myth. Onward, {name}. — Muse`,
          badge: `creative-brain-literate`,
          badgeName: `Creative Brain Literate`,
          xpEarned: 75,
          competencies: [
            `Explains that creativity is a whole-brain, networked process (default mode plus executive control) rather than a single spot or hemisphere`,
            `Identifies the "left-brain/right-brain type" and "we only use 10% of our brain" claims as myths that fail under actual brain imaging`,
            `Recognizes that simple, flattering, empowering brain claims are warning signs to check, not reasons to trust`,
            `Knows the Jonah Lehrer (2012) fabrication case and the lesson that fame, charm, and a smooth story are not evidence`,
            `Checks specific claims rather than trusting an author's reputation, and treats suspicious smoothness as a red flag`,
            `Uses real, evidence-based strategies: incubation, the generate-then-evaluate rhythm, and creativity as a built skill`,
            `Applies this kindly in a real situation: correcting a friend's "right-brain type" belief without making them feel dumb`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Synesthesia — Seeing Sound, Hearing Color`,
            hook: `A real, fascinating brain difference where senses blend — and how to tell the genuine phenomenon from the myths and marketing around it. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L13 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
