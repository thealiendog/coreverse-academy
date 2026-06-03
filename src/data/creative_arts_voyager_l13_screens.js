// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L13 — The Neuroscience of Creativity
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Neuroscience, Creativity, Critical Thinking, Growth
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (tier-sort brain/creativity claims; debunk
// the "right-brained person" myth honestly). Contract matches L03/L06/L08/L11:
// sources[] with tier/title/type/context/quote/questions[]/evaluation; synthesisPrompt
// + reflectionPrompt.
// HONESTY: distinguishes real neuroscience (networks, whole-brain, learnable) from the
// popular "left-brain/right-brain personality" myth and neuro-flavored product hype.
// Connects to L09 (skill is built): creativity is buildable, not a fixed brain-type.
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
          guideText: `{name}, you have probably heard it a hundred times: "I'm a right-brained person, so I'm creative," or "she's left-brained, she's the logical one." It is one of the most repeated ideas about the brain, it is printed on posters and built into personality quizzes, and it is, as a description of how your brain actually works, a myth. Today you turn the clear thinking you have been building all band onto the most personal target of all: your own creative brain. You will learn what neuroscience actually knows about creativity (less tidy and more interesting than the myth), why the left-brain/right-brain personality story is false, and why that false story might have quietly limited you. The real science has a genuinely freeing message that connects straight back to Lesson 9: creativity is not a fixed brain-type you are born with or without. It is something your whole brain does, and something you can build. Onward.`,
          headline: `The Neuroscience of Creativity`,
          subtitle: `Your creative brain, and why "right-brained" is a myth. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Right-Brain Myth, And What's Really True`,
          paragraphs: [
            `Start with the famous myth, stated plainly so you can take it apart. The popular story says the brain has two halves with two personalities: a logical, analytical, math-and-language "left brain," and a creative, artistic, emotional "right brain," and that each person is dominated by one, making them either a "left-brained" logical type or a "right-brained" creative type. It is a tidy, satisfying story. It is also not how brains work, and large brain-imaging studies looking for "left-brained" and "right-brained" people have not found them.`,
            `Here is the kernel of truth the myth grew from, because there usually is one. The two halves of the brain are real, and they are not identical; for most people, certain functions do lean toward one side, language processing, for instance, tends to involve the left side more for many people. So the brain is not perfectly symmetrical, and that real fact is the seed. But the myth inflates that seed wildly: from "some specific functions lean slightly to one side" all the way to "you are a left-brain or right-brain personality type, and that determines whether you are creative." That leap is exactly the inflation pattern you spotted in the last lesson, a real seed stretched into a sweeping false claim.`,
            `What is actually true is more interesting. For almost everything you do, and especially for something as rich as creativity, both halves of your brain work together constantly, passing information back and forth across a thick bundle of connections between them. You do not write a poem with your "right brain" while your "left brain" naps; the whole brain is involved. So "I'm just not a right-brained person, so I can't be creative" is built on a false premise. There is no right-brain creativity switch you were born without. That single correction, that creativity is not the property of half a brain you may or may not have, is the door this whole lesson opens.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s1-myth.webp`,
          imageCaption: `The famous myth, stated plainly: the brain supposedly has two personalities, a logical, analytical "left brain" and a creative, artistic "right brain", and each person is dominated by one (a "left-brained logical type" or "right-brained creative type"). Tidy and satisfying, but not how brains work; large brain-imaging studies looking for "left-brained" and "right-brained" people have not found them. The kernel of truth it grew from: the two halves are real and not identical, certain functions do lean to one side for most people (language tends to involve the left more), so the brain is not perfectly symmetrical. But the myth inflates that wildly, from "some functions lean slightly" to "you are a brain-type that determines if you are creative", the same real-seed-stretched-to-false-claim pattern from Lesson 12. What is actually true is richer: both halves work together constantly across a thick bundle of connections, especially for creativity. There is no right-brain creativity switch you were born without.`,
          vocab: [
            {
              word: `the right-brain myth and what is really true`,
              definition: `The famous myth, stated plainly so you can take it apart: the popular story says the brain has two halves with two personalities, a logical, analytical, math-and-language "left brain" and a creative, artistic, emotional "right brain," and that each person is dominated by one, making them either a "left-brained" logical type or a "right-brained" creative type. It is a tidy, satisfying story, but it is not how brains work, and large brain-imaging studies looking for "left-brained" and "right-brained" people have not found them. The kernel of truth it grew from: the two halves of the brain are real and not identical, and for most people certain functions do lean toward one side (language processing, for instance, tends to involve the left side more for many people), so the brain is not perfectly symmetrical, and that real fact is the seed. But the myth inflates that seed wildly, from "some specific functions lean slightly to one side" all the way to "you are a left-brain or right-brain personality type, and that determines whether you are creative", exactly the inflation pattern from Lesson 12, a real seed stretched into a sweeping false claim. What is actually true is more interesting: for almost everything you do, and especially for something as rich as creativity, both halves of your brain work together constantly, passing information across a thick bundle of connections between them; you do not write a poem with your "right brain" while your "left brain" naps, the whole brain is involved. So "I'm just not a right-brained person, so I can't be creative" is built on a false premise, because there is no right-brain creativity switch you were born without, and that single correction is the door this whole lesson opens.`,
              audioPrompt: `Start with the famous myth, {name}, stated plainly so you can take it apart. The popular story says the brain has two halves with two personalities: a logical, analytical, math-and-language left brain, and a creative, artistic, emotional right brain, and that each person is dominated by one, making them either a left-brained logical type or a right-brained creative type. It is a tidy, satisfying story. It is also not how brains work, and large brain-imaging studies looking for left-brained and right-brained people have not found them. Here is the kernel of truth the myth grew from, because there usually is one. The two halves of the brain are real, and they are not identical; for most people, certain functions do lean toward one side. Language processing, for instance, tends to involve the left side more for many people. So the brain is not perfectly symmetrical, and that real fact is the seed. But the myth inflates that seed wildly: from "some specific functions lean slightly to one side" all the way to "you are a left-brain or right-brain personality type, and that determines whether you are creative." That leap is exactly the inflation pattern you spotted in the last lesson. What is actually true is more interesting. For almost everything you do, and especially for something as rich as creativity, both halves of your brain work together constantly. You do not write a poem with your right brain while your left brain naps; the whole brain is involved. So "I'm just not a right-brained person, so I can't be creative" is built on a false premise. There is no right-brain creativity switch you were born without.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Creativity Actually Looks Like In The Brain`,
          paragraphs: [
            `So what does happen in a creative brain? The honest answer starts with humility: neuroscience is a young science, the brain is the most complex object we know of, and researchers are still working a lot of this out, so anyone who tells you they have it all figured out is overselling. But there are some genuinely interesting findings, held loosely and honestly, that are far more useful than the myth.`,
            `One of the most interesting is that creativity seems to involve a back-and-forth between two modes, not two sides. There is a "generate" mode, a loose, wandering, daydreamy state where your mind makes unexpected connections and throws out lots of raw possibilities, the kind of thinking that happens in the shower or on a walk, when ideas drift and combine freely. And there is an "evaluate" mode, a focused, critical state where you judge those possibilities, pick the good ones, and shape them into something that works. Creativity is not just one of these; it is the dance between them, generating wild options, then critically refining them, often switching back and forth many times. Both the wild idea and the careful judgment are creative work, which already breaks the myth's split between "creative" and "logical."`,
            `Another genuinely useful finding is about that wandering "generate" mode. Some of your most creative connections happen when you are not trying hard, when your mind is relaxed and drifting, which is why ideas so often arrive in the shower, on a walk, or right before sleep, rather than while you are straining at a desk. This is not an excuse to never focus, the evaluate mode and real practice matter enormously, but it does mean that rest, daydreaming, and stepping away are part of the creative process, not laziness. Your brain keeps working on problems in the background while you do something else. Understanding this lets you actually use it: when stuck, sometimes the most productive move is to stop pushing and let the wandering mode do its work, then come back to evaluate.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s2-actual.webp`,
          imageCaption: `What actually happens in a creative brain. Honest start: neuroscience is young, the brain is the most complex thing we know, researchers are still working much of this out, so anyone claiming to have it fully figured out is overselling. But real findings, held loosely, beat the myth. One: creativity involves a back-and-forth between two MODES (not two sides). A "generate" mode, loose, wandering, daydreamy, making unexpected connections and throwing out raw possibilities (shower thoughts, walks); and an "evaluate" mode, focused and critical, judging, picking, and shaping the good ones. Creativity is the dance between them, generating wild options then refining them, switching back and forth, which breaks the myth's "creative vs. logical" split since both are creative work. Another finding: the wandering generate-mode often produces your best connections when you are relaxed, not straining, so rest and stepping away are part of the process, not laziness. When stuck, sometimes stop pushing and let the wandering mode work, then come back to evaluate.`,
          vocab: [
            {
              word: `creativity in the brain: generate mode and evaluate mode`,
              definition: `What actually happens in a creative brain, starting with honesty: neuroscience is a young science, the brain is the most complex object we know of, and researchers are still working a lot of this out, so anyone who claims to have it all figured out is overselling. But some genuinely interesting findings, held loosely, are far more useful than the myth. One of the most interesting: creativity seems to involve a back-and-forth between two modes, not two sides. There is a "generate" mode, a loose, wandering, daydreamy state where your mind makes unexpected connections and throws out lots of raw possibilities (the kind of thinking that happens in the shower or on a walk, when ideas drift and combine freely), and an "evaluate" mode, a focused, critical state where you judge those possibilities, pick the good ones, and shape them into something that works. Creativity is not just one of these; it is the dance between them, generating wild options then critically refining them, often switching back and forth many times, and because both the wild idea and the careful judgment are creative work, this already breaks the myth's split between "creative" and "logical." Another useful finding concerns the wandering generate mode: some of your most creative connections happen when you are not trying hard, when your mind is relaxed and drifting, which is why ideas often arrive in the shower, on a walk, or right before sleep rather than while straining at a desk. This is not an excuse to never focus (the evaluate mode and real practice matter enormously), but it means rest, daydreaming, and stepping away are part of the creative process, not laziness, because your brain keeps working on problems in the background; when stuck, sometimes the most productive move is to stop pushing, let the wandering mode work, then return to evaluate.`,
              audioPrompt: `So what does happen in a creative brain, {name}? The honest answer starts with humility: neuroscience is a young science, the brain is the most complex object we know of, and researchers are still working a lot of this out, so anyone who tells you they have it all figured out is overselling. But there are some genuinely interesting findings, held loosely and honestly, that are far more useful than the myth. One of the most interesting is that creativity seems to involve a back-and-forth between two modes, not two sides. There is a generate mode, a loose, wandering, daydreamy state where your mind makes unexpected connections and throws out lots of raw possibilities, the kind of thinking that happens in the shower or on a walk. And there is an evaluate mode, a focused, critical state where you judge those possibilities, pick the good ones, and shape them into something that works. Creativity is not just one of these; it is the dance between them, generating wild options, then critically refining them, often switching back and forth many times. Both the wild idea and the careful judgment are creative work, which already breaks the myth's split between creative and logical. Another genuinely useful finding is about that wandering generate mode. Some of your most creative connections happen when you are not trying hard, when your mind is relaxed and drifting, which is why ideas so often arrive in the shower, on a walk, or right before sleep. This is not an excuse to never focus, but it does mean that rest, daydreaming, and stepping away are part of the creative process, not laziness. When stuck, sometimes the most productive move is to stop pushing and let the wandering mode do its work, then come back to evaluate.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Creativity Is Built, Not A Brain-Type`,
          paragraphs: [
            `Now the finding that matters most for your life, and it connects straight back to Lesson 9: creativity is something the brain learns and builds, not a fixed setting you are born with. Your brain has a property scientists call "neuroplasticity," which means it physically changes as you use it: practice a skill and the connections that support it actually strengthen and grow. This is real, well-supported neuroscience, not hype. It is why practicing an instrument, a language, or drawing genuinely rewires your brain to be better at it over time. Your brain is not a fixed machine; it is more like a living landscape that reshapes itself around what you repeatedly do.`,
            `Put that together with the right-brain myth being false, and something powerful follows. If creativity were a fixed "right-brained" trait, then not having it would be permanent, you would be stuck. But since creativity is whole-brain and the brain is plastic, creativity is buildable, the same way Lesson 9 said skill is built through deliberate practice. The neuroscience and the career lesson are telling you the same true thing from two directions: people become more creative by doing creative work, learning, practicing, and building the mental habits of generating and evaluating ideas. "Creative people" are very often just people who have done a lot of creative practice, exactly as "naturals" usually turn out to be people who practiced deliberately.`,
            `This is why the right-brain myth is not just wrong but quietly harmful. When a kid decides "I'm not a creative type, my brain isn't wired that way," they often stop trying, and then, because they stopped practicing, they never build the creativity they could have, which seems to confirm the false belief. The myth becomes a self-fulfilling prophecy: believing you cannot be creative makes you stop doing the very thing that would make you creative. The true story breaks that trap. You are not locked into a brain-type. Your creative ability is not fixed; it grows with use, like a muscle, like a landscape reshaping under your feet. That is not a feel-good slogan, it is what the actual neuroscience of a plastic, whole-brain mind implies, and it means the question is never "am I a creative type?" but "what creative practice will I actually do?"`,
          ],
          image: `/voyager-assets/creative-arts/l13-s3-built.webp`,
          imageCaption: `The finding that matters most, connecting straight to Lesson 9: creativity is something the brain learns and builds, not a fixed setting you are born with. The brain has "neuroplasticity", it physically changes as you use it, and practicing a skill actually strengthens and grows the connections supporting it (real, well-supported neuroscience, not hype). Your brain is not a fixed machine but a living landscape that reshapes around what you repeatedly do. Put together with the right-brain myth being false: since creativity is whole-brain and the brain is plastic, creativity is BUILDABLE, the same truth as Lesson 9's "skill is built through deliberate practice," reached from two directions. "Creative people" are very often just people who did a lot of creative practice. Why the myth is harmful: a kid who decides "I'm not wired creative" stops trying, never builds the creativity they could have, and that seems to confirm the false belief, a self-fulfilling prophecy. The real question is never "am I a creative type?" but "what creative practice will I do?"`,
          vocab: [
            {
              word: `neuroplasticity: creativity is built, not a brain-type`,
              definition: `The finding that matters most for your life, connecting straight back to Lesson 9: creativity is something the brain learns and builds, not a fixed setting you are born with. Your brain has a property scientists call "neuroplasticity," meaning it physically changes as you use it, so practicing a skill actually strengthens and grows the connections that support it, which is real, well-supported neuroscience, not hype, and is why practicing an instrument, a language, or drawing genuinely rewires your brain to be better at it over time; your brain is not a fixed machine but more like a living landscape that reshapes itself around what you repeatedly do. Put that together with the right-brain myth being false and something powerful follows: if creativity were a fixed "right-brained" trait, not having it would be permanent, but since creativity is whole-brain and the brain is plastic, creativity is buildable, the same way Lesson 9 said skill is built through deliberate practice, so the neuroscience and the career lesson tell you the same true thing from two directions, that people become more creative by doing creative work, learning, practicing, and building the mental habits of generating and evaluating ideas. "Creative people" are very often just people who have done a lot of creative practice, exactly as "naturals" usually turn out to be people who practiced deliberately. This is why the right-brain myth is not just wrong but quietly harmful: when a kid decides "I'm not a creative type, my brain isn't wired that way," they often stop trying, then never build the creativity they could have, which seems to confirm the false belief, a self-fulfilling prophecy where believing you cannot be creative makes you stop doing the very thing that would make you creative. The true story breaks that trap, because your creative ability is not fixed but grows with use, so the question is never "am I a creative type?" but "what creative practice will I actually do?"`,
              audioPrompt: `Now the finding that matters most for your life, {name}, and it connects straight back to Lesson 9: creativity is something the brain learns and builds, not a fixed setting you are born with. Your brain has a property scientists call neuroplasticity, which means it physically changes as you use it: practice a skill and the connections that support it actually strengthen and grow. This is real, well-supported neuroscience, not hype. It is why practicing an instrument, a language, or drawing genuinely rewires your brain to be better at it over time. Your brain is not a fixed machine; it is more like a living landscape that reshapes itself around what you repeatedly do. Put that together with the right-brain myth being false, and something powerful follows. If creativity were a fixed right-brained trait, then not having it would be permanent. But since creativity is whole-brain and the brain is plastic, creativity is buildable, the same way Lesson 9 said skill is built through deliberate practice. People become more creative by doing creative work. "Creative people" are very often just people who have done a lot of creative practice. This is why the right-brain myth is not just wrong but quietly harmful. When a kid decides "I'm not a creative type, my brain isn't wired that way," they often stop trying, and then, because they stopped practicing, they never build the creativity they could have, which seems to confirm the false belief. The myth becomes a self-fulfilling prophecy. The true story breaks that trap. The question is never "am I a creative type?" but "what creative practice will I actually do?"`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Brain Hype: When "Neuroscience" Is Used To Sell`,
          paragraphs: [
            `Because the brain is fascinating and the word "neuroscience" sounds authoritative, it is one of the most abused words in advertising, so the source-evaluation skill matters here as much as anywhere. A whole industry sells products and programs with brain-flavored claims: apps that promise to "unlock your creative right brain," supplements that "boost creative brain power," programs claiming to "rewire your brain for genius in ten days." The pattern is familiar from earlier lessons: take a real, cool fact (the brain is plastic, the brain is involved in creativity) and inflate it into a magical, sellable promise that the real science does not support.`,
            `Two specific tells help you spot brain hype. First, watch for the myth being sold back to you: anything promising to "unlock your right brain" or "balance your left and right brain" is built on the false right-brain story, so it is selling you a fix for a problem that does not exist as described. Second, watch for "neuro" decoration: claims dressed in brain words and brain images that, underneath, are just the old "real seed inflated to magic, made unfalsifiable" pattern, a brain scan picture next to a product does not mean the product does what it claims, any more than a golden spiral over a photo proved the universe's code. The brain imagery is there to lower your guard, exactly like beautiful propaganda or sacred-looking marketing.`,
            `Here is the honest line to hold, and it has two sides so you do not overcorrect. On one side: real, well-supported neuroscience says genuinely useful things, your brain is plastic, creativity is buildable, rest helps the wandering mode, practice rewires you, and you should take those seriously and use them. On the other side: most products promising to "unlock," "boost," or "rewire" your creative brain fast are selling hype, inflating real findings into magical promises to make a sale. The skill, as always, is not to distrust all brain science (that would throw away real, useful truth) nor to believe all of it (that gets you scammed), but to tell the careful real findings from the inflated sales claims, using the same tier-thinking you have practiced all band, now aimed at claims about your own mind.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s4-hype.webp`,
          imageCaption: `"Neuroscience" sounds authoritative, so it is one of the most abused words in advertising. A whole industry sells brain-flavored claims: apps to "unlock your creative right brain," supplements that "boost creative brain power," programs to "rewire your brain for genius in ten days." Familiar pattern: take a real cool fact (the brain is plastic, the brain does creativity) and inflate it into a magical sellable promise the science does not support. Two tells: (1) the myth sold back to you, anything promising to "unlock your right brain" or "balance left and right" is built on the false story, selling a fix for a non-existent problem; (2) "neuro" decoration, brain words and scan images dressing up the old "real seed inflated to magic, made unfalsifiable" pattern (a brain scan next to a product proves nothing, like a golden spiral over a photo). The honest line, two sides: real neuroscience says useful things (plastic brain, buildable creativity, rest helps, practice rewires), take it seriously; most "unlock/boost/rewire fast" products are hype. Tell careful findings from inflated sales claims.`,
          vocab: [
            {
              word: `brain hype: spotting "neuroscience" used to sell`,
              definition: `Because the brain is fascinating and the word "neuroscience" sounds authoritative, it is one of the most abused words in advertising, so source evaluation matters here as much as anywhere. A whole industry sells products and programs with brain-flavored claims: apps that promise to "unlock your creative right brain," supplements that "boost creative brain power," programs claiming to "rewire your brain for genius in ten days." The pattern is familiar: take a real, cool fact (the brain is plastic, the brain is involved in creativity) and inflate it into a magical, sellable promise the real science does not support. Two specific tells help you spot brain hype. First, the myth sold back to you: anything promising to "unlock your right brain" or "balance your left and right brain" is built on the false right-brain story, so it is selling a fix for a problem that does not exist as described. Second, "neuro" decoration: claims dressed in brain words and brain-scan images that are underneath just the old "real seed inflated to magic, made unfalsifiable" pattern, since a brain scan picture next to a product does not mean the product does what it claims, any more than a golden spiral over a photo proved the universe's code; the brain imagery is there to lower your guard, like beautiful propaganda or sacred-looking marketing. The honest line has two sides so you do not overcorrect: on one side, real, well-supported neuroscience says genuinely useful things (your brain is plastic, creativity is buildable, rest helps the wandering mode, practice rewires you) that you should take seriously and use; on the other, most products promising to "unlock," "boost," or "rewire" your creative brain fast are selling hype, inflating real findings into magical promises. The skill is neither to distrust all brain science nor to believe all of it, but to tell the careful real findings from the inflated sales claims, using the same tier-thinking from all band, now aimed at claims about your own mind.`,
              audioPrompt: `Because the brain is fascinating and the word neuroscience sounds authoritative, {name}, it is one of the most abused words in advertising, so the source-evaluation skill matters here as much as anywhere. A whole industry sells products with brain-flavored claims: apps that promise to unlock your creative right brain, supplements that boost creative brain power, programs claiming to rewire your brain for genius in ten days. The pattern is familiar from earlier lessons: take a real, cool fact, the brain is plastic, the brain is involved in creativity, and inflate it into a magical, sellable promise that the real science does not support. Two specific tells help you spot brain hype. First, watch for the myth being sold back to you: anything promising to unlock your right brain or balance your left and right brain is built on the false right-brain story, so it is selling you a fix for a problem that does not exist as described. Second, watch for neuro decoration: claims dressed in brain words and brain images that, underneath, are just the old real-seed-inflated-to-magic pattern. A brain scan picture next to a product does not mean the product does what it claims, any more than a golden spiral over a photo proved the universe's code. Here is the honest line to hold, and it has two sides. Real, well-supported neuroscience says genuinely useful things: your brain is plastic, creativity is buildable, rest helps, practice rewires you. But most products promising to unlock, boost, or rewire your creative brain fast are selling hype. The skill is to tell the careful real findings from the inflated sales claims.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You learned that the left-brain/right-brain personality story is a myth, a real seed (the halves are not identical) inflated into a false claim (you are a brain-type that determines your creativity), and that both halves work together for almost everything, especially creativity. You learned what the science actually suggests, held with honest humility: a dance between a wandering "generate" mode and a focused "evaluate" mode, and that rest and daydreaming are real parts of the process. You learned the most important and freeing finding, that the brain is plastic and creativity is built, not a fixed type, which connects straight to Lesson 9. And you learned to spot brain hype, the myth sold back to you, and "neuro" decoration inflating real facts into magic promises.`,
            `Now the source-evaluation screen will hand you several real or realistic claims about the creative brain, a careful science explainer, a "discover your brain type" personality quiz, a "rewire your brain for creativity in 10 days" product, a solid statement about neuroplasticity, and ask you to sort them by how much you should trust them and why. This is the same skill from Lessons 3, 6, 8, and 11, now turned on the most personal target there is: claims about your own mind and your own creative potential.`,
            `One last thought to carry, and it is the freeing one. For most of history, and still today, people have been quietly sorted, by themselves and others, into "creative types" and "non-creative types," as if it were fixed at birth. The real neuroscience says that sorting is mostly false. Your creativity is not a brain-half you were issued or denied; it is whole-brain, plastic, and buildable, which means it is far more in your hands than the myth ever let you believe. That is not wishful thinking; it is what a plastic, whole-brain mind actually implies. So the most important thing this lesson can give you is permission, backed by real science, to stop asking whether you are creative and start asking what you will make. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l13-s5-before.webp`,
          imageCaption: `Threads together. The left-brain/right-brain personality story is a myth, a real seed (halves not identical) inflated to a false claim (you are a brain-type that determines creativity); both halves work together, especially for creativity. What the science suggests, held with humility: a dance between a wandering "generate" mode and a focused "evaluate" mode, and rest/daydreaming are real parts of the process. The most freeing finding: the brain is plastic and creativity is built, not a fixed type (connecting to Lesson 9). Spot brain hype, the myth sold back to you, and "neuro" decoration. The source-evaluation screen ahead hands you claims about the creative brain to sort by trust, the same skill turned on the most personal target: your own mind. Last thought, freeing: people get sorted into "creative" and "non-creative types" as if fixed at birth, but the real science says that is mostly false. Stop asking whether you are creative; start asking what you will make.`,
          vocab: [
            {
              word: `permission, backed by science, to stop asking if you are creative`,
              definition: `The synthesis before the source-evaluation screen. You learned that the left-brain/right-brain personality story is a myth: a real seed (the two halves are not identical, some functions lean to one side) inflated into a false claim (you are a brain-type that determines your creativity), when in fact both halves work together for almost everything, especially something as rich as creativity. You learned what the science actually suggests, held with honest humility because neuroscience is young: creativity as a dance between a loose, wandering "generate" mode (unexpected connections, the shower-and-walk thinking) and a focused, critical "evaluate" mode (judging and shaping), with rest and daydreaming being genuine parts of the process rather than laziness. You learned the most important and freeing finding, that the brain is plastic (neuroplasticity, it physically rewires with practice) so creativity is built, not a fixed type, connecting straight to Lesson 9's "skill is built." And you learned to spot brain hype: the myth sold back to you ("unlock your right brain," "balance your hemispheres") and "neuro" decoration (brain words and scan images dressing up inflated, unfalsifiable promises). The source-evaluation screen will hand you several real or realistic claims about the creative brain to sort by trust, the same skill from Lessons 3, 6, 8, and 11 turned on the most personal target: claims about your own mind and creative potential. The last thought is the freeing one: people get sorted into "creative types" and "non-creative types" as if fixed at birth, but the real neuroscience says that sorting is mostly false, your creativity is whole-brain, plastic, and buildable, far more in your hands than the myth let you believe. The most important thing this lesson gives you is permission, backed by real science, to stop asking whether you are creative and start asking what you will make.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You learned that the left-brain/right-brain personality story is a myth, a real seed inflated into a false claim, and that both halves work together for almost everything, especially creativity. You learned what the science actually suggests, held with honest humility: a dance between a wandering generate mode and a focused evaluate mode, and that rest and daydreaming are real parts of the process. You learned the most important and freeing finding, that the brain is plastic and creativity is built, not a fixed type, which connects straight to Lesson 9. And you learned to spot brain hype, the myth sold back to you, and neuro decoration inflating real facts into magic promises. Now the source-evaluation screen will hand you several real or realistic claims about the creative brain, and ask you to sort them by how much you should trust them and why. This is the same skill from earlier lessons, now turned on the most personal target there is: claims about your own mind and your own creative potential. One last thought to carry, and it is the freeing one. For most of history, people have been quietly sorted into creative types and non-creative types, as if it were fixed at birth. The real neuroscience says that sorting is mostly false. Your creativity is not a brain-half you were issued or denied; it is whole-brain, plastic, and buildable, which means it is far more in your hands than the myth ever let you believe. So the most important thing this lesson can give you is permission, backed by real science, to stop asking whether you are creative and start asking what you will make.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l13-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Claims About The Creative Brain`,
          intro: `{name}, five claims about the creative brain. For each, decide how much you should trust it and why. Watch for two things you have practiced all band: the real-seed-inflated-to-magic pattern, and the difference between careful real science (which sounds a little humble) and confident sales claims (which sound certain). This time the target is your own mind, so it matters even more.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `A careful science explainer on creativity and the brain`,
              type: `Fact-checked science source`,
              context: `A well-sourced explainer reports that the "left-brained vs. right-brained personality" idea is not supported by brain-imaging research, that creativity involves many brain regions across both halves working together, and that scientists are still actively studying exactly how, so the picture is genuinely incomplete.`,
              quote: `"Brain imaging does not support dividing people into left-brained and right-brained types. Creativity engages networks across both hemispheres, and much about how it works remains an open question."`,
              questions: [
                `Why is "much remains an open question" a sign of a trustworthy source here?`,
                `What does it correct, and what does it honestly admit it does not know?`,
                `How is its tone different from a "we cracked the creativity code" claim?`,
              ],
              evaluation: `High trust, this is Tier A: a careful, fact-checked explainer that corrects the myth (no left/right personality types; creativity is whole-brain) while honestly admitting how much remains unknown. Counterintuitively, "much remains an open question" is a mark of trustworthiness, because neuroscience really is young and the brain really is that complex, so a source that admits the limits is being accurate, while one claiming to have fully "cracked the code" is overselling. Its tone is the tell: careful, specific, willing to say "we don't fully know yet," which is exactly how real expertise on a hard topic sounds. Compare that to a confident "unlock your brain's secret" pitch, the humble, precise source is the trustworthy one, and the certain, sweeping one is the warning sign.`,
            },
            {
              id: `s2`,
              tier: `myth`,
              title: `A "Discover Your Brain Type!" personality quiz`,
              type: `Pop-psychology quiz`,
              context: `A fun online quiz promises to tell you whether you are "left-brained" (logical, analytical) or "right-brained" (creative, artistic) based on your answers, and lots of people share their results as if it describes a real, fixed feature of their brain.`,
              quote: `"Take our quiz to discover if you're a logical LEFT-BRAINED thinker or a creative RIGHT-BRAINED dreamer! Your brain type explains everything about you."`,
              questions: [
                `What false premise is this quiz built on?`,
                `Is it harmless fun, or could believing the result do damage?`,
                `What is the real seed it grew from, and how was it inflated?`,
              ],
              evaluation: `Low trust as a description of your brain, this is the myth itself, packaged as a quiz. It is built on the false premise that people are "left-brained" or "right-brained" personality types, which brain imaging does not support. Whether it is harmless depends on what you do with the result: as a five-minute game, fine, but if you actually believe "I'm not right-brained, so I'm not creative," it can do real damage by becoming a self-fulfilling prophecy, you stop practicing and so never build the creativity you could have. The real seed it grew from is that the brain's halves are not identical and some functions lean to one side; that true, modest fact got inflated into a sweeping false claim that your "brain type explains everything about you." Enjoy it as a quiz if you like, but do not let it tell you who you can become.`,
            },
            {
              id: `s3`,
              tier: `hype (product)`,
              title: `"Rewire your brain for genius creativity in 10 days!"`,
              type: `Product / program marketing`,
              context: `An online program sells a course or app promising to "rewire your brain for explosive creativity in just 10 days," "unlock your dormant right brain," and "activate your hidden creative genius," using brain-scan imagery and neuroscience-sounding language to market a paid product.`,
              quote: `"Our neuroscience-based system rewires your brain for genius-level creativity in 10 days. Unlock your right brain. Activate the creative genius science says is hidden inside you!"`,
              questions: [
                `Which real facts is this inflating, and into what false promise?`,
                `Spot both tells: the myth sold back, and the "neuro" decoration.`,
                `What would a more honest version of a creativity course sound like?`,
              ],
              evaluation: `Low trust, this is classic brain hype. It inflates two real facts, the brain is plastic, and creativity can be developed, into a magical false promise: "genius creativity in 10 days." Both tells are present: it sells the myth back to you ("unlock your dormant right brain," built on the false right-brain story), and it uses "neuro" decoration ("neuroscience-based system," brain-scan imagery) to lower your guard, even though a brain image next to a sales pitch proves nothing, just as a golden spiral over a photo proved nothing in Lesson 12. The "10 days" and "genius" and "explosive" are the inflation, real growth is gradual and built through practice, not switched on. A more honest course would say something modest and true: "creativity is buildable with consistent practice over time; here are exercises to help," careful, gradual, no magic, no fake brain science.`,
            },
            {
              id: `s4`,
              tier: `A`,
              title: `A statement that the brain is plastic and creativity can be built`,
              type: `Well-supported neuroscience`,
              context: `A reliable source explains neuroplasticity: that the brain physically changes with use, that practicing a skill strengthens the neural connections supporting it, and that this means abilities like creativity can be developed through practice over time rather than being fixed at birth.`,
              quote: `"The brain physically rewires itself with practice. Skills, including creative ones, are built over time, not fixed from birth. There is no shortcut, but there is real, gradual change."`,
              questions: [
                `How is this different from the "rewire in 10 days" product, since both mention rewiring?`,
                `Why is "no shortcut, but real gradual change" a credible claim?`,
                `How does this connect to Lesson 9?`,
              ],
              evaluation: `High trust, this is real, well-supported neuroscience, and noticing how it differs from source 3 is the whole skill. Both mention the brain "rewiring," but this source describes it accurately, gradual change through consistent practice, no shortcut, while the product inflated the same real fact into "genius in 10 days." The credible version is exactly the one that refuses the magic timeline: "no shortcut, but real gradual change" is believable precisely because it is modest and matches how skill actually develops. It connects directly to Lesson 9: skill, including creativity, is built through deliberate practice, and here is the brain-level reason why, the brain is plastic and reshapes around what you repeatedly do. Same underlying truth, reached from neuroscience and from the creative-career lesson at once. The lesson: distrust the magic timeline, trust the gradual, practice-based version.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `A balanced article on "shower thoughts" and the wandering mind`,
              type: `Science journalism`,
              context: `A reported article explains, accurately but in popular form, why creative ideas often arrive when your mind is relaxed and wandering (in the shower, on a walk), describing the "generate" and "evaluate" modes, while noting that this is an active research area and avoiding overblown promises.`,
              quote: `"Your best ideas often come when you stop trying. A relaxed, wandering mind makes unexpected connections, though researchers are still mapping exactly how this works."`,
              questions: [
                `Why is this a useful and basically trustworthy source despite simplifying?`,
                `What makes it more trustworthy than the quiz and the product?`,
                `What is the practical, honest takeaway you can actually use?`,
              ],
              evaluation: `Solid trust, this is good Tier B: accurate science journalism that explains a real finding (the wandering "generate" mode produces creative connections when you are relaxed) in popular form, while honestly noting it is still being researched and avoiding magic promises. It simplifies, as popular writing must, but it does not inflate or lie, and it beats the quiz and the product because it reports a real, careful finding with appropriate humility instead of selling a false brain-type or a magic timeline. The practical, honest takeaway you can actually use: rest, walks, and stepping away are genuine parts of the creative process, not laziness, so when you are stuck, sometimes the productive move is to stop pushing, let the wandering mode work, and come back to evaluate, real, useful, and free, with no product to buy.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your rule for telling real brain science from brain hype? Notice that two sources (the careful explainer and the product) both talked about the brain "rewiring", what exactly made one trustworthy and one not? And what will you now do differently, knowing creativity is built, not a fixed brain-type? In 5-6 sentences.`,
          reflectionPrompt: `Have you ever told yourself "I'm just not a creative person" or "I'm not a math person", some version of a fixed brain-type? Knowing now that the brain is plastic and these abilities are built, how does that land? What is one thing you wrote off that you could actually build?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the "left-brained vs. right-brained personality" idea get wrong, and what is the kernel of truth it grew from?`,
              options: [
                `Random`,
                `The myth says the brain has two personalities, a logical, analytical "left brain" and a creative, artistic "right brain," and that each person is dominated by one, making them a fixed "left-brained" or "right-brained" type. That is not how brains work, and large brain-imaging studies looking for left-brained and right-brained people have not found them. The kernel of truth it grew from is real but modest: the two halves of the brain are not identical, and for most people certain functions do lean toward one side (language, for instance, tends to involve the left more for many people), so the brain is not perfectly symmetrical. The myth inflates that modest fact wildly, from "some specific functions lean slightly to one side" all the way to "you are a brain-type whose dominant half determines whether you are creative." In reality, for almost everything, and especially for creativity, both halves work together constantly, so there is no single "creative right brain" you either have or lack.`,
                `Just both wrong`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The myth (fixed creative/logical brain-types) is not supported by imaging. Its real seed, the halves are not identical and some functions lean to one side, got inflated into a false personality claim. In reality both halves work together, especially for creativity.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does creativity actually seem to look like in the brain, according to careful (and appropriately humble) neuroscience?`,
              options: [
                `Random`,
                `The honest answer starts with humility, neuroscience is young and the brain is the most complex thing we know, so anyone claiming to have it fully figured out is overselling. But a genuinely useful finding is that creativity seems to involve a back-and-forth between two modes, not two sides: a "generate" mode, a loose, wandering, daydreamy state where the mind makes unexpected connections and throws out raw possibilities (the shower-and-walk kind of thinking), and an "evaluate" mode, a focused, critical state where you judge those possibilities, pick the good ones, and shape them. Creativity is the dance between them, generating wild options then refining them, often switching back and forth, which already breaks the myth's split between "creative" and "logical" because both the wild idea and the careful judgment are creative work. A related finding: many creative connections happen when you are relaxed and not trying hard, so rest and daydreaming are genuine parts of the process, not laziness.`,
                `Just one side lights up`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Creativity is a back-and-forth between a wandering "generate" mode and a focused "evaluate" mode (not two sides), and rest helps the generate mode. Both generating and judging are creative work, which breaks the creative-vs-logical split. Held with honest humility, since the science is young.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is neuroplasticity, and why does it mean creativity is built rather than a fixed brain-type?`,
              options: [
                `Random`,
                `Neuroplasticity is the well-supported fact that the brain physically changes as you use it: practicing a skill actually strengthens and grows the neural connections that support it, which is why practicing an instrument, a language, or drawing genuinely rewires your brain to be better at it over time. Your brain is not a fixed machine but more like a living landscape that reshapes itself around what you repeatedly do. Put that together with the right-brain myth being false, and it follows that creativity is buildable: if creativity were a fixed "right-brained" trait you would be stuck without it, but because creativity is whole-brain and the brain is plastic, you become more creative by doing creative work and practicing the habits of generating and evaluating ideas. This is the same truth as Lesson 9's "skill is built through deliberate practice," reached from neuroscience, and it means "creative people" are very often just people who have done a lot of creative practice, not people issued a special brain at birth.`,
                `Just brain stuff`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Neuroplasticity is the brain physically rewiring with practice. Since creativity is whole-brain and the brain is plastic, creativity is built through practice, not a fixed type, the same truth as Lesson 9, reached from neuroscience.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is the right-brain myth not just wrong but quietly harmful?`,
              options: [
                `Random`,
                `Because it can become a self-fulfilling prophecy that quietly limits people. When someone decides "I'm not a creative type, my brain isn't wired that way," they tend to stop trying, and then, because they stopped practicing, they never build the creativity they actually could have, which seems to confirm the false belief, so believing you cannot be creative makes you stop doing the very thing that would make you creative. The myth turns a false idea into a real outcome by changing behavior. The true story breaks the trap: since creativity is whole-brain and the brain is plastic, your creative ability is not fixed but grows with use, like a muscle or a landscape reshaping under your feet, so no one is locked into a non-creative "brain type." That is not a feel-good slogan but what a plastic, whole-brain mind actually implies, and it changes the real question from "am I a creative type?" (which assumes a fixed answer) to "what creative practice will I actually do?" (which puts it in your hands).`,
                `Just makes people sad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `It becomes a self-fulfilling prophecy: believing "I'm not creative" makes you stop practicing, so you never build the creativity you could have, seeming to confirm the myth. The true story (plastic, whole-brain, buildable) breaks the trap.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are the two tells that something is "brain hype" using neuroscience to sell?`,
              options: [
                `Random`,
                `First, the myth sold back to you: anything promising to "unlock your right brain" or "balance your left and right brain" is built on the false right-brain personality story, so it is selling you a fix for a problem that does not exist as described. Second, "neuro" decoration: claims dressed up in brain words and brain-scan imagery that, underneath, are just the familiar "real seed inflated to magic, then made unfalsifiable" pattern, because a brain scan picture next to a product does not mean the product does what it claims, any more than a golden spiral laid over a photo proved the universe's code in the last lesson. The brain imagery and science-sounding language are there to lower your guard and borrow authority, the same move as beautiful propaganda or sacred-looking marketing. The underlying inflation is usually a real fact (the brain is plastic, creativity can be developed) blown up into a magical promise (genius in 10 days), so spotting the two tells lets you keep the real fact and reject the sales pitch.`,
                `Just expensive ones`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Tell one: the myth sold back ("unlock/balance your right brain"), a fix for a fake problem. Tell two: "neuro" decoration, brain words and scan images dressing up an inflated, unfalsifiable promise. A brain image next to a pitch proves nothing.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Two sources both said the brain "rewires" itself, a careful neuroscience statement and a "rewire your brain in 10 days" product. What made one trustworthy and one not?`,
              options: [
                `Random`,
                `The difference is not the word "rewire" but what is claimed around it. The careful neuroscience source describes rewiring accurately: the brain physically changes with practice, gradually, over time, with no shortcut but real change, which is well-supported and matches how skills actually develop. The product takes that same real fact and inflates it into a magical promise, "genius-level creativity in 10 days," "unlock your dormant right brain", attaching a fake fast timeline, the discredited right-brain myth, and brain-scan decoration to sell something. So the trustworthy version is the modest, gradual, no-shortcut one, and the untrustworthy version is the certain, fast, sweeping one. This is the core skill: the same true seed (neuroplasticity) can appear in honest science and in hype, and you tell them apart by whether the claim stays modest and matches reality or gets inflated into a magic promise with a deadline. Distrust the magic timeline; trust the gradual, practice-based version.`,
                `Just the price`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Same real seed (the brain rewires), different claims around it: honest science says gradual, no-shortcut change (matches reality); the product inflates it into "genius in 10 days" with the right-brain myth and scan decoration. Trust the modest version, distrust the magic timeline.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is "much about creativity remains an open question" a sign of a TRUSTWORTHY source, not a weak one?`,
              options: [
                `Random`,
                `Because neuroscience genuinely is a young science studying the most complex object we know of, so honesty requires admitting how much is still unknown, and a source that does so is being accurate rather than weak. A source that instead claims to have fully "cracked the creativity code" is overselling a certainty the science does not have, which is the tell of hype. This matches the pattern from across the whole band: on genuinely hard, still-developing topics, real expertise sounds a little humble and careful, while confident, sweeping certainty is the warning sign. So a science explainer that corrects the right-brain myth and explains the generate/evaluate dance, but openly says researchers are still mapping exactly how creativity works, is more trustworthy precisely because of that humility, not despite it. The careful, "we don't fully know yet" tone is the mark of a source telling you the truth about a hard question, while the "we've unlocked the secret" tone is the mark of someone selling you something.`,
                `Just being unsure`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Neuroscience is young and the brain is hugely complex, so admitting open questions is accuracy, not weakness. Real expertise on hard topics sounds humble; "we cracked the code" certainty is the hype tell.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the genuinely freeing message of the real neuroscience of creativity?`,
              options: [
                `Random`,
                `That your creativity is not a fixed brain-type you were issued or denied at birth, but something whole-brain, plastic, and buildable, which means it is far more in your hands than the myth ever let you believe. For most of history, and still today, people have been quietly sorted, by themselves and others, into "creative types" and "non-creative types," as if it were fixed. The real science says that sorting is mostly false: there is no creative right brain you lack, both halves work together, and because the brain rewires with practice, you become more creative by doing creative work. This is not wishful thinking, it is what a plastic, whole-brain mind actually implies, and it connects to Lesson 9's truth that skill is built. So the most important thing the lesson gives you is permission, backed by real science, to stop asking whether you are creative, a question that assumes a fixed answer, and start asking what you will actually make and practice, a question that puts your creative future in your own hands.`,
                `Just believe in yourself`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Creativity is whole-brain, plastic, and buildable, not a fixed type you were issued or denied, so it is far more in your hands than the myth implied. The freeing move: stop asking "am I creative?" and start asking "what will I make and practice?"`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Since the right-brain creativity myth is false, you should conclude that brain science has nothing useful to say about creativity and ignore all of it.`,
              correctAnswer: false,
              explanation: `False, and avoiding this overcorrection is just as important as rejecting the myth, the same balance as the sacred-geometry lesson. The "left-brained vs. right-brained personality" story being false does not mean all brain science is useless; it means that one specific popular claim is wrong. Real, well-supported neuroscience says genuinely useful things you should take seriously: the brain is plastic and physically rewires with practice (neuroplasticity), creativity is whole-brain and buildable rather than a fixed type, creativity involves a useful dance between a wandering "generate" mode and a focused "evaluate" mode, and rest and daydreaming are genuine parts of the process. Throwing all of that away because one myth is false would be the cynical overcorrection that loses real, helpful truth along with the false claim. The mature move is precise, not sweeping: reject the specific debunked myth and the inflated "rewire in 10 days" hype, while keeping the careful, well-supported findings, which happen to carry the most freeing message of all, that your creativity is something you can actually build. Telling real brain science from brain hype, rather than believing all of it or none of it, is exactly the skill this lesson trains, now aimed at claims about your own mind.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 13. A friend says, sadly, "I'm just not a creative person, I'm left-brained, my brain isn't wired for art, so there's no point in me even trying." You can tell they actually want to make things but have given up before starting. Using this whole lesson, what do you actually think and say?`,
              options: [
                `"Just agree with them"`,
                `Several things, held together with warmth, because your friend is not just wrong about a fact, they are about to let a false belief quietly shrink their life, and you have exactly the knowledge to help. First, recognize what is really happening: your friend has accepted the right-brain myth and turned it into a verdict on themselves, "I'm left-brained, so I can't be creative," and the saddest part is that they want to make things but are giving up before starting, which is the self-fulfilling prophecy this lesson warned about in action, the false belief is about to stop them from practicing, which would then "prove" the false belief. Second, gently tell them the actual science, not as a put-down but as good news: the left-brained/right-brained personality thing is a myth, brain-imaging studies looking for left-brained and right-brained people have not found them, and creativity is not the job of one half of the brain, it is whole-brain, both halves working together for almost everything, especially something rich like making art. So the premise "my brain isn't wired for art" is just not true; there is no creativity switch they were born without. Third, give them the genuinely freeing part, which connects to how skill actually works: the brain is plastic, it physically rewires with practice (neuroplasticity), so creativity is built, not a fixed type you either have or lack, which means "creative people" are very often just people who did a lot of creative practice, the same way so-called naturals usually turn out to be people who practiced. Their creativity is not missing, it is unbuilt, and unbuilt is completely different from impossible. Fourth, name the trap directly and kindly, because it is the heart of it: "the dangerous thing about believing you're not creative is that it makes you stop trying, and then you never build the creativity you actually could have, so the belief makes itself come true, but it was never true to begin with." Fifth, redirect the question the way the lesson does, from a fixed-identity question to an action question: not "am I a creative type?" (which assumes a yes-or-no answer fixed at birth) but "what do I actually want to make, and what small creative practice could I start?" Then, because they clearly want to make things, encourage an actual first step, make something small and imperfect together, expect it to be clumsy at first the way all new skills are (the Lesson 9 point that struggling is the building, not a sign to quit), and treat it as practice rather than a test of whether they "have it." Sixth, hold the deepest takeaway: the most valuable thing you can give your friend here is not flattery ("you're so talented!") but the accurate, science-backed truth that their creative future is in their hands and not decided by a brain-type that does not even exist, which is far more empowering than any compliment, because it means the only thing standing between them and being creative is the practice they have not started yet, and that is something they can change starting today. You are not just being nice; you are handing them back a possibility the myth had quietly stolen.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied creative-brain literacy in a real, kind moment. The move is to recognize the self-fulfilling-prophecy trap (the false belief stops practice, which "proves" the belief), correct the myth gently with the real science (no left/right personality types; creativity is whole-brain), share the freeing truth (the brain is plastic, so creativity is built not fixed, the same as Lesson 9), redirect from "am I a creative type?" to "what will I make and practice?", and encourage an actual clumsy first step. The most empowering gift is the accurate truth that their creative future is in their hands, not a brain-type that does not exist.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Did you believe the left-brain/right-brain story before this lesson? Most people do. What changed when you learned it is a myth, and that creativity is whole-brain and buildable? Did it feel like losing something or gaining something?` },
            { id: `reflect-fixed`, category: `Fixed labels you've accepted`, prompt: `"I'm not a creative person." "I'm not a math person." "I'm just not artistic." Have you accepted a fixed label like this about yourself? Where did it come from, and how does "the brain is plastic, it's built not fixed" change what that label even means?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson offers permission to stop asking "am I creative?" and start asking "what will I make?" Try answering the second question right now. What would you actually make or practice if you fully believed your creativity was buildable, not fixed?` },
            { id: `reflect-process`, category: `How you actually create`, prompt: `Think about when your own best ideas arrive, straining at a desk, or relaxed in the shower, on a walk, before sleep? Knowing about the wandering "generate" mode, how could you use rest and stepping away on purpose next time you're stuck?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `"Neuroscience" is used to sell everything from apps to supplements. Where have you seen brain-flavored claims, "boost your brain," "unlock your potential," "neuro-this"? Run the two tells on one: is it selling the myth back, or just brain-decorating an inflated promise?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "come on, some people obviously ARE just naturally more creative than others, you can't practice your way to being a genius." State the strongest version. Where is it partly right, and where does it slide back into the fixed-brain-type myth this lesson debunks?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This lesson is about your own mind, so it is meant to change how you treat your own creative potential. Two paths.`,
          familyActivity: {
            title: `Bust The Brain Myth Together`,
            duration: `40 minutes`,
            description: `As a family, surface and examine the brain myths you have each absorbed. Go around and have each person say whether they think of themselves as "left-brained" or "right-brained," and whether they have ever used that to explain what they can or cannot do ("I'm not creative," "I'm not a numbers person"). Then share the real science together: the left/right personality split is a myth, creativity is whole-brain, and the brain is plastic, so these abilities are built, not fixed. Talk honestly about whether anyone has avoided trying something, art, music, math, writing, because they decided they "weren't that type." Then, for fun and proof, hunt together for "brain hype" in the wild: find an ad, app, or product that uses brain-scan images or "neuro" language or promises to "unlock your brain," and run the two tells on it. The goal is for everyone, including the adults, to notice a fixed label they have been carrying, and to feel the difference between "I'm not wired for that" and "I haven't built that yet."`,
          },
          projectOption: {
            title: `The Build-It Experiment, 3 weeks (optional)`,
            duration: `3 weeks, ~30 minutes per session`,
            description: `Prove neuroplasticity to yourself by deliberately building a creative skill you have written off. Week 1: pick one specific creative thing you have told yourself you are "not good at" or "not wired for", drawing faces, making up melodies, writing poems, whatever you have avoided, and honestly record where you are starting (keep your first attempts, however rough). Then do a small amount of real, focused practice on it most days, working at your edge the way Lesson 9 described, not just repeating what is comfortable. Week 2: keep practicing, and notice the clumsy-but-improving feeling, which is literally your brain rewiring. Week 3: compare your latest attempts to your week-1 starting point and write a short reflection on what changed, how it felt to improve at something you thought you "couldn't" do, and what that proves about the "I'm just not that type" belief. The point is not to become an expert in three weeks; it is to feel, first-hand, that a skill you wrote off as a fixed limit actually moves when you practice, which is neuroplasticity made personal and the right-brain myth disproven by your own hand.`,
            offerToParent: `Parent: opt your child into the Build-It Experiment. Deliberately building a creative skill they had written off, and seeing measurable improvement over three weeks, turns the abstract science of neuroplasticity into personal proof, and it directly dismantles the "I'm not a creative type" belief that quietly limits so many capable kids. Keeping their week-1 attempts to compare against is the key, the visible progress is the lesson.`,
          },
          identityQuestion: `If you become someone who knows your creativity is whole-brain, plastic, and buildable, who refuses fixed labels like "I'm not a creative type," and who can spot brain-hype trying to sell you a fix for a problem that does not exist, what does that let you become over a lifetime, that someone who believed they were "just not wired for it" never even attempts?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows my creativity is built, not a brain-type I was born with or without.`,
            `A person who stops asking "am I creative?" and starts asking "what will I make?"`,
            `Someone who can spot "neuroscience" being used to sell me a fix for a fake problem.`,
          ],
          saveKey: `identity_responses_ca_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteen down. This time you turned your clear thinking on the most personal target of all, your own creative brain, and what you found sets you free. You learned that the left-brain/right-brain personality story is a myth, a real seed (the halves are not identical) inflated into a false claim, and that both halves of your brain work together, especially for creativity. You learned what the science actually suggests, held with honest humility: creativity as a dance between a wandering "generate" mode and a focused "evaluate" mode, with rest and daydreaming as real parts of the process. You learned the most freeing finding of all, that the brain is plastic and creativity is built, not a fixed type, which is the same truth as Lesson 9 reached from neuroscience, and you saw why the right-brain myth is quietly harmful, because believing you cannot be creative makes you stop doing the very thing that would make you creative. And you learned to spot brain hype: the myth sold back to you, and "neuro" decoration dressing up inflated promises. Most of all, you have permission now, backed by real science, to stop asking whether you are creative and start asking what you will make. Next: synesthesia, where some people genuinely hear colors and taste shapes, and the line between a real, fascinating brain difference and the myths around it. Onward, {name}. — Muse`,
          badge: `creative-brain-literate`,
          badgeName: `Creative Brain Literate`,
          xpEarned: 75,
          competencies: [
            `Explains why the left-brain/right-brain personality idea is a myth, and the modest real fact it inflated`,
            `Describes creativity as a back-and-forth between a wandering "generate" mode and a focused "evaluate" mode, held with appropriate scientific humility`,
            `Understands neuroplasticity and why it means creativity is built through practice, not a fixed brain-type (connecting to Lesson 9)`,
            `Recognizes the right-brain myth as a self-fulfilling prophecy that quietly limits people, and how the true story breaks the trap`,
            `Spots brain hype using the two tells: the myth sold back ("unlock your right brain") and "neuro" decoration on inflated promises`,
            `Distinguishes accurate science (modest, gradual, "open questions") from sales claims (certain, fast, sweeping), even when both use the same real seed`,
            `Carries the freeing reframe: stop asking "am I creative?" and start asking "what will I make and practice?"`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Synesthesia`,
            hook: `Some people genuinely hear colors and taste shapes. The real, fascinating brain difference, and the myths around it. Source Evaluation.`,
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
