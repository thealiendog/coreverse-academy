// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L19 — Your Creative Manifesto
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Creative Identity, Ethics, Values, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: CASE STUDY (the Voyager works real creative dilemmas they will
// actually face (honesty/credit, money vs. meaning, respect vs. a hit, persistence vs.
// quitting, authenticity vs. imitation) and harvests the VALUES underneath, building
// toward their own manifesto). Contract matches L04/L07/L09/L12/L16: cases[] with
// title/type/description/questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// TONE: empowering, never preachy. Evaluations MODEL reasoning, but the values are the
// Voyager's to choose. This is the penultimate lesson: gathers threads from across the
// whole band (IP/credit L08, career L09, social movements L10, sacred art L11, brain-hype
// L13, immersive L15, performance L16, film L17, fusion L18) and turns them inward. Sets
// up L20 (Building Your Portfolio capstone). NOT a debate or source-sort: it's reflective
// synthesis of the learner's own emerging creative principles.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l19-v1";

const CREATIVE_ARTS_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-19`,
      title: `Your Creative Manifesto`,
      duration: 35,
      xpReward: 75,
      badge: `manifesto-author`,
      badgeName: `Manifesto Author`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, for eighteen lessons you have studied other people's art, their ideas, their fights, their triumphs and failures. Now the camera turns around to face you. This lesson is not about anyone else; it is about who YOU want to be as a creative person. A manifesto is a clear statement of what you stand for and how you intend to work, the values you choose to carry. Real artists write them, because the creative life is full of moments that quietly test you, do you give credit, or take it; chase money, or meaning; respect a culture, or grab from it; keep going, or quit; sound like yourself, or copy what is winning? You will not face those choices in a vacuum; you will face them tired, tempted, and under pressure. A manifesto is what you decide now, in calm, so that future-you has something to stand on. Today you will work through the real dilemmas of a creative life and harvest the values underneath them, building, in your own words, the beginnings of your own creative manifesto. There are no wrong answers here, only honest ones. Onward.`,
          headline: `Your Creative Manifesto`,
          subtitle: `Everything you learned, gathered into what YOU stand for. Case Study.`,
          visual: `/voyager-assets/creative-arts/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Manifesto Is, And Why You Need One`,
          paragraphs: [
            `A manifesto is a clear, honest statement of what you believe and how you intend to act, written down so it can guide you. Artists, movements, and creators throughout history have written them to declare their values and aims, sometimes to the world, sometimes just to themselves. Yours does not need to be public or grand; it can be a private, plain-spoken list of the principles you choose to live and create by. The point is not to sound impressive. The point is to decide, on purpose and in advance, who you want to be when it counts.`,
            `Here is why that matters so much: values are easy to hold when nothing is at stake and brutally hard to keep under pressure, and the creative life is full of pressure. It is easy to say "I'll always give credit" until the moment crediting someone makes you look less original. Easy to say "I care about meaning, not just money" until real money is offered for something hollow. Easy to say "I'll stay true to my voice" until copying a popular style would get you the followers you crave. In those moments, you will not have time to reason it all out from scratch; you will fall back on whatever you decided before. A manifesto is that prior decision, made in calm, that future-you can lean on when calm is exactly what is missing.`,
            `And a manifesto is not a cage; it is a spine. It does not lock you into never changing, you can revise it as you grow, and you should. What it gives you is something to stand on instead of being blown around by whatever is trendy, tempting, or pressuring in the moment. People without chosen values do not become free; they just get pushed by whatever force is strongest nearby, the algorithm, the crowd, the quick reward. People with chosen values can bend, adapt, and even break their own rules thoughtfully, but they do it from a center, on purpose, knowing what they are doing and why. This lesson helps you start finding that center, not by telling you what to value, but by walking you through the real choices where values are made.`,
          ],
          image: `/voyager-assets/creative-arts/l19-s1-what.webp`,
          imageCaption: `A manifesto is a clear, honest statement of what you believe and how you intend to act, written down to guide you. Artists and movements write them to declare their values; yours can be private and plain, a list of principles you choose to create by. The point is not to sound impressive but to decide, on purpose and in advance, who you want to be when it counts. Why it matters: values are easy when nothing is at stake and brutally hard under pressure, and the creative life is full of pressure, easy to say "I'll always give credit" until crediting makes you look less original; "I care about meaning, not money" until real money is offered for something hollow; "I'll stay true to my voice" until copying a trend would get you followers. In those moments you fall back on whatever you decided before. A manifesto is that prior decision, made in calm. Not a cage but a spine: not locking you in (revise it as you grow) but giving you something to stand on instead of being blown around by whatever is trendy or tempting.
`,
          vocab: [
            {
              word: `what a manifesto is, and why you need one`,
              definition: `A manifesto is a clear, honest statement of what you believe and how you intend to act, written down so it can guide you. Artists, movements, and creators throughout history have written them to declare their values and aims, sometimes to the world and sometimes just to themselves, and yours does not need to be public or grand, it can be a private, plain-spoken list of the principles you choose to live and create by. The point is not to sound impressive but to decide, on purpose and in advance, who you want to be when it counts. This matters because values are easy to hold when nothing is at stake and brutally hard to keep under pressure, and the creative life is full of pressure: it is easy to say "I'll always give credit" until crediting someone makes you look less original, easy to say "I care about meaning, not just money" until real money is offered for something hollow, and easy to say "I'll stay true to my voice" until copying a popular style would get you the followers you crave, and in those moments you will not have time to reason it all out from scratch, you will fall back on whatever you decided before, so a manifesto is that prior decision made in calm that future-you can lean on when calm is exactly what is missing. A manifesto is not a cage but a spine: it does not lock you into never changing, since you can and should revise it as you grow, but it gives you something to stand on instead of being blown around by whatever is trendy, tempting, or pressuring in the moment, because people without chosen values do not become free, they just get pushed by whatever force is strongest nearby (the algorithm, the crowd, the quick reward), while people with chosen values can bend, adapt, and even thoughtfully break their own rules from a center, on purpose, knowing what they are doing and why.`,
              audioPrompt: `A manifesto is a clear, honest statement of what you believe and how you intend to act, written down so it can guide you, {name}. Artists, movements, and creators throughout history have written them to declare their values and aims, sometimes to the world, sometimes just to themselves. Yours does not need to be public or grand; it can be a private, plain-spoken list of the principles you choose to live and create by. The point is not to sound impressive. The point is to decide, on purpose and in advance, who you want to be when it counts. Here is why that matters so much: values are easy to hold when nothing is at stake and brutally hard to keep under pressure, and the creative life is full of pressure. It is easy to say "I'll always give credit" until the moment crediting someone makes you look less original. Easy to say "I care about meaning, not just money" until real money is offered for something hollow. Easy to say "I'll stay true to my voice" until copying a popular style would get you the followers you crave. In those moments, you will not have time to reason it all out from scratch; you will fall back on whatever you decided before. A manifesto is that prior decision, made in calm, that future-you can lean on when calm is exactly what is missing. And a manifesto is not a cage; it is a spine. It does not lock you into never changing, you can revise it as you grow. What it gives you is something to stand on instead of being blown around by whatever is trendy, tempting, or pressuring in the moment.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Values You've Already Been Building`,
          paragraphs: [
            `Here is something you might not have noticed: across this whole band, you have already been building the raw material of a creative manifesto, lesson by lesson. You were not just learning facts about art; you were practicing values, ways of thinking and choosing that add up to a creative character. This lesson gathers them so you can see them clearly and decide which are truly yours. Let me show you the thread.`,
            `You learned about credit and intellectual property, the value of honesty: giving credit, not taking what is not yours, respecting other creators' work as you would want yours respected. You learned about building a creative career, the value of persistence and patience: that real creative life is built through practice and rejection, not overnight magic. You learned how art moves people and can become propaganda, the value of using your power responsibly: that the ability to move people is real and must not be used to manipulate or deceive. You learned about sacred art and cultural respect, the value of reverence: handling what is meaningful to others with care, never as a throwaway. You learned to tell real brain science from hype, the value of honest, clear thinking: believing what the evidence supports and rejecting inflated claims, even exciting ones.`,
            `And it kept going. You learned about immersive art and spectacle, the value of substance over surface: caring whether there is real meaning underneath, not just a shareable photo. You learned about performance art, the value of thinking past your first reaction: sitting with the confusing instead of grabbing a lazy "stupid" or "genius." You learned to read film, the value of staying awake: feeling fully while seeing clearly how you are being moved. And you learned about global fusion, the value of holding both truths: loving blending while insisting on credit and respect. None of these were handed to you as rules to obey; they were values you tried on by reasoning through real situations. Now the question becomes personal: which of these do you choose to make truly your own, and what else belongs on your list that no lesson gave you?`,
          ],
          image: `/voyager-assets/creative-arts/l19-s2-already.webp`,
          imageCaption: `Something you might not have noticed: across this whole band you have already been building the raw material of a manifesto, lesson by lesson, not just learning facts but practicing VALUES that add up to a creative character. The thread: credit and IP taught HONESTY (give credit, respect others' work as you'd want yours respected); building a career taught PERSISTENCE AND PATIENCE (real creative life is practice and rejection, not overnight magic); how art moves people / propaganda taught RESPONSIBLE POWER (the ability to move people must not manipulate or deceive); sacred art taught REVERENCE (handle what is meaningful to others with care); brain-hype taught HONEST, CLEAR THINKING (believe the evidence, reject inflated claims). And on: immersive art taught SUBSTANCE OVER SURFACE; performance art taught THINKING PAST YOUR FIRST REACTION; film taught STAYING AWAKE (feel fully, see clearly); fusion taught HOLDING BOTH TRUTHS. None were rules to obey, they were values you tried on by reasoning. Now it is personal: which do you choose to make truly yours, and what else belongs that no lesson gave you?
`,
          vocab: [
            {
              word: `the values you've already been building`,
              definition: `Across this whole band you have already been building the raw material of a creative manifesto, lesson by lesson, because you were not just learning facts about art, you were practicing values, ways of thinking and choosing that add up to a creative character, and this lesson gathers them so you can see them clearly and decide which are truly yours. The thread runs through every lesson: credit and intellectual property taught the value of honesty (giving credit, not taking what is not yours, respecting other creators' work as you would want yours respected); building a creative career taught the value of persistence and patience (real creative life is built through practice and rejection, not overnight magic); how art moves people and can become propaganda taught the value of using your power responsibly (the ability to move people is real and must not be used to manipulate or deceive); sacred art and cultural respect taught the value of reverence (handling what is meaningful to others with care, never as a throwaway); and telling real brain science from hype taught the value of honest, clear thinking (believing what the evidence supports and rejecting inflated claims, even exciting ones). It continued: immersive art and spectacle taught the value of substance over surface (caring whether there is real meaning underneath, not just a shareable photo); performance art taught the value of thinking past your first reaction (sitting with the confusing instead of grabbing a lazy "stupid" or "genius"); reading film taught the value of staying awake (feeling fully while seeing clearly how you are being moved); and global fusion taught the value of holding both truths (loving blending while insisting on credit and respect). None of these were handed to you as rules to obey, they were values you tried on by reasoning through real situations, so the question now becomes personal: which of these do you choose to make truly your own, and what else belongs on your list that no lesson gave you?`,
              audioPrompt: `Here is something you might not have noticed, {name}: across this whole band, you have already been building the raw material of a creative manifesto, lesson by lesson. You were not just learning facts about art; you were practicing values, ways of thinking and choosing that add up to a creative character. Let me show you the thread. You learned about credit and intellectual property, the value of honesty: giving credit, not taking what is not yours. You learned about building a creative career, the value of persistence and patience: that real creative life is built through practice and rejection, not overnight magic. You learned how art moves people and can become propaganda, the value of using your power responsibly: that the ability to move people must not be used to manipulate or deceive. You learned about sacred art, the value of reverence: handling what is meaningful to others with care. You learned to tell real brain science from hype, the value of honest, clear thinking: believing what the evidence supports and rejecting inflated claims, even exciting ones. And it kept going. Immersive art taught the value of substance over surface. Performance art taught the value of thinking past your first reaction. Reading film taught the value of staying awake, feeling fully while seeing clearly. And global fusion taught the value of holding both truths. None of these were handed to you as rules to obey; they were values you tried on by reasoning through real situations. Now the question becomes personal: which of these do you choose to make truly your own, and what else belongs on your list that no lesson gave you?`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Manifesto Is Yours, But Not "Anything Goes"`,
          paragraphs: [
            `An important honesty before you build: a manifesto is genuinely yours to write, your values, in your words, fitting your creative life, and no one can hand you a finished one. This lesson will not tell you what to value; that would defeat the entire purpose. But "it's yours to choose" does not mean "all choices are equally good," and pretending otherwise would be a cop-out after a whole band of careful thinking. You get to choose your values, AND some values genuinely hold up better than others when you reason them through honestly, the same way some art claims survived scrutiny and others collapsed.`,
            `Think about what makes a value worth keeping. A value you can defend with honest reasons, that you would be willing to have done to you, that does not depend on hiding or lying, and that you could still respect after the heat of temptation passes, is on solid ground. "I give credit because I would want credit for my own work" is a value that holds up, it is fair, defensible, and reversible. "I take credit for others' work whenever I can get away with it" does not hold up, not because a lesson forbids it, but because you cannot honestly defend it, you would be furious if it were done to you, and it depends on not getting caught. So your manifesto is yours, but you build it by reasoning, not by whim, choosing values you can actually stand behind when you look at them clearly.`,
            `This is the grown-up version of freedom, and it is worth understanding now. Real freedom in your creative values is not "anything goes, nothing matters", that is just being unmoored, pushed by whatever is convenient. Real freedom is choosing your principles thoughtfully, from your own honest reasoning, and then having the strength to live by them when it is hard. You are not free because you have no values; you are free because you chose yours on purpose rather than absorbing them by accident or having them dictated to you. So as you work through the dilemmas ahead, do not just ask "what do I feel like?" Ask "what value can I actually defend here, what would I want done to me, what could I respect myself for choosing?" That is how a manifesto becomes real, yours, and worth standing on.`,
          ],
          image: `/voyager-assets/creative-arts/l19-s3-yours.webp`,
          imageCaption: `An honesty before you build: a manifesto is genuinely YOURS to write, your values in your words, and no one hands you a finished one, this lesson will not tell you what to value (that would defeat the purpose). But "it's yours to choose" does NOT mean "all choices are equally good", that would be a cop-out after a whole band of careful thinking. You choose your values, AND some hold up better than others when reasoned through honestly. What makes a value worth keeping: you can defend it with honest reasons, you'd be willing to have it done to you, it does not depend on hiding or lying, and you could still respect it after temptation passes. "I give credit because I'd want credit for my work" holds up (fair, defensible, reversible); "I take credit whenever I can get away with it" does not (you cannot defend it, you'd be furious if done to you, it depends on not getting caught). The grown-up version of freedom: not "anything goes" (that is being unmoored, pushed by what is convenient) but choosing your principles thoughtfully and living by them when it is hard.
`,
          vocab: [
            {
              word: `the manifesto is yours, but not "anything goes"`,
              definition: `An important honesty before you build: a manifesto is genuinely yours to write, your values, in your words, fitting your creative life, and no one can hand you a finished one, so this lesson will not tell you what to value, which would defeat the entire purpose. But "it's yours to choose" does not mean "all choices are equally good," and pretending otherwise would be a cop-out after a whole band of careful thinking, because you get to choose your values AND some values genuinely hold up better than others when you reason them through honestly, the same way some art claims survived scrutiny and others collapsed across the band. What makes a value worth keeping: a value you can defend with honest reasons, that you would be willing to have done to you, that does not depend on hiding or lying, and that you could still respect after the heat of temptation passes, is on solid ground, so "I give credit because I would want credit for my own work" holds up (it is fair, defensible, and reversible), while "I take credit for others' work whenever I can get away with it" does not, not because a lesson forbids it but because you cannot honestly defend it, you would be furious if it were done to you, and it depends on not getting caught. So your manifesto is yours, but you build it by reasoning, not by whim, choosing values you can actually stand behind when you look at them clearly. This is the grown-up version of freedom: real freedom in your creative values is not "anything goes, nothing matters" (which is just being unmoored, pushed by whatever is convenient) but choosing your principles thoughtfully from your own honest reasoning and then having the strength to live by them when it is hard, so you are free not because you have no values but because you chose yours on purpose rather than absorbing them by accident or having them dictated to you. As you work through the dilemmas ahead, the real questions are not "what do I feel like?" but "what value can I actually defend here, what would I want done to me, what could I respect myself for choosing?", which is how a manifesto becomes real, yours, and worth standing on.`,
              audioPrompt: `An important honesty before you build, {name}: a manifesto is genuinely yours to write, your values, in your words, fitting your creative life, and no one can hand you a finished one. This lesson will not tell you what to value; that would defeat the entire purpose. But "it's yours to choose" does not mean "all choices are equally good," and pretending otherwise would be a cop-out after a whole band of careful thinking. You get to choose your values, and some values genuinely hold up better than others when you reason them through honestly. Think about what makes a value worth keeping. A value you can defend with honest reasons, that you would be willing to have done to you, that does not depend on hiding or lying, and that you could still respect after the heat of temptation passes, is on solid ground. "I give credit because I would want credit for my own work" is a value that holds up: it is fair, defensible, and reversible. "I take credit for others' work whenever I can get away with it" does not hold up, not because a lesson forbids it, but because you cannot honestly defend it, you would be furious if it were done to you, and it depends on not getting caught. This is the grown-up version of freedom. Real freedom is not "anything goes, nothing matters", that is just being unmoored, pushed by whatever is convenient. Real freedom is choosing your principles thoughtfully, from your own honest reasoning, and then having the strength to live by them when it is hard. So as you work through the dilemmas ahead, do not just ask "what do I feel like?" Ask "what value can I actually defend here, what would I want done to me, what could I respect myself for choosing?"`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How To Actually Write Yours`,
          paragraphs: [
            `Soon you will work through real creative dilemmas, and that is the heart of this lesson, because values are not found by staring at the ceiling; they are found by facing real choices and noticing what you actually believe is right. But before you do, here is the practical shape of a manifesto you can build toward, so the dilemmas have somewhere to land. A good personal manifesto is usually a short list, not an essay: a handful of clear statements of what you stand for, each one something you could actually live by, written plainly in your own voice.`,
            `The most useful manifesto statements tend to be specific and active, not vague and pretty. "I want to be a good person" is too vague to guide anything. "I always credit the people whose work I build on, even when it makes me look less original" is specific, active, and tells future-you exactly what to do in a real moment. Aim for statements like that: each one names a value AND points at how you will act on it, especially in the hard moment when the value costs you something. The dilemmas ahead are designed to surface exactly these, the places where you discover what you will and will not do.`,
            `A few gentle guidelines as you build. Keep it honest, write what you actually believe, not what sounds noble, because a manifesto you do not mean is useless. Keep it yours, draw on the values from this band that genuinely resonate, but add your own, the things you care about that no lesson mentioned, your subjects, your reasons for making things, your own non-negotiables. Keep it alive, expect to revise it as you grow, and treat that as a feature, not a failure. And keep it kind to yourself, a manifesto is about who you are aiming to be, not a stick to beat yourself with when you fall short; you will fall short sometimes, and the manifesto is what helps you find your way back. Now let's go find your values where they actually live, in the real choices of a creative life.`,
          ],
          image: `/voyager-assets/creative-arts/l19-s4-howto.webp`,
          imageCaption: `Values are not found by staring at the ceiling but by facing real choices and noticing what you actually believe is right, which is why the dilemmas ahead are the heart of the lesson. The practical shape to build toward: a manifesto is usually a short LIST, not an essay, a handful of clear statements you could actually live by, written plainly in your own voice. The most useful statements are specific and active, not vague and pretty: "I want to be a good person" guides nothing; "I always credit the people whose work I build on, even when it makes me look less original" is specific, active, and tells future-you exactly what to do in a real moment, each statement names a value AND how you will act on it when it costs you something. Gentle guidelines: keep it HONEST (what you actually believe, not what sounds noble); keep it YOURS (band values that resonate PLUS your own non-negotiables no lesson gave you); keep it ALIVE (revise as you grow, a feature not a failure); keep it KIND (who you aim to be, not a stick to beat yourself with).
`,
          vocab: [
            {
              word: `how to actually write your manifesto`,
              definition: `Values are not found by staring at the ceiling but by facing real choices and noticing what you actually believe is right, which is why the dilemmas ahead are the heart of this lesson, but here is the practical shape of a manifesto you can build toward so the dilemmas have somewhere to land. A good personal manifesto is usually a short list, not an essay: a handful of clear statements of what you stand for, each one something you could actually live by, written plainly in your own voice. The most useful manifesto statements tend to be specific and active rather than vague and pretty, because "I want to be a good person" is too vague to guide anything, while "I always credit the people whose work I build on, even when it makes me look less original" is specific, active, and tells future-you exactly what to do in a real moment, so aim for statements where each one names a value AND points at how you will act on it, especially in the hard moment when the value costs you something, which is exactly what the dilemmas ahead are designed to surface. A few gentle guidelines as you build: keep it honest, writing what you actually believe rather than what sounds noble, because a manifesto you do not mean is useless; keep it yours, drawing on the values from this band that genuinely resonate but adding your own, the things you care about that no lesson mentioned, your subjects, your reasons for making things, your own non-negotiables; keep it alive, expecting to revise it as you grow and treating that as a feature rather than a failure; and keep it kind to yourself, since a manifesto is about who you are aiming to be, not a stick to beat yourself with when you fall short, because you will fall short sometimes, and the manifesto is what helps you find your way back rather than a measure of your worth.`,
              audioPrompt: `Soon you will work through real creative dilemmas, {name}, and that is the heart of this lesson, because values are not found by staring at the ceiling; they are found by facing real choices and noticing what you actually believe is right. But before you do, here is the practical shape of a manifesto you can build toward. A good personal manifesto is usually a short list, not an essay: a handful of clear statements of what you stand for, each one something you could actually live by, written plainly in your own voice. The most useful manifesto statements tend to be specific and active, not vague and pretty. "I want to be a good person" is too vague to guide anything. "I always credit the people whose work I build on, even when it makes me look less original" is specific, active, and tells future-you exactly what to do in a real moment. Aim for statements like that: each one names a value and points at how you will act on it, especially in the hard moment when the value costs you something. A few gentle guidelines as you build. Keep it honest, write what you actually believe, not what sounds noble. Keep it yours, draw on the values from this band that genuinely resonate, but add your own, the things you care about that no lesson mentioned. Keep it alive, expect to revise it as you grow. And keep it kind to yourself, a manifesto is about who you are aiming to be, not a stick to beat yourself with when you fall short. Now let's go find your values where they actually live, in the real choices of a creative life.`,
            },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before you face the dilemmas. You learned what a manifesto is, a chosen, honest statement of what you stand for and how you intend to act, written in calm so future-you has something to stand on under pressure, a spine, not a cage. You saw that this whole band has already been handing you values to try on, honesty, persistence, responsible power, reverence, clear thinking, substance over surface, thinking past your first reaction, staying awake, holding both truths, and that now the work is choosing which are truly yours and adding your own. You learned that your manifesto is genuinely yours, but built by honest reasoning, not whim, choosing values you can defend, would accept being done to you, and could respect yourself for. And you learned the practical shape: a short list of specific, active statements, honest, yours, alive, and kind.`,
            `Now the case-study screen will hand you the real dilemmas of a creative life, the kind you will actually face: whether to take credit you did not earn, whether to choose money over meaning, whether to chase a hit at the cost of respect, whether to quit when it gets hard, whether to copy what is winning or sound like yourself. For each, you will reason through what is really at stake and harvest the value underneath, the principle you would want to guide you. These are not tests with hidden right answers about other people; they are mirrors, asking what YOU would choose and why, so you can write it down.`,
            `One last thing to carry into it. This lesson, and the next, are where everything turns from "things I learned about art" into "who I am as a creator," and that shift is the whole point of the band. You are not just someone who knows about art now; you are someone becoming an artist, a maker, a creative person with values you chose. Whatever you end up making, songs, films, paintings, performances, things no one has a name for yet, you will make it as someone, and the someone you make it as is being decided in lessons exactly like this one. So take the dilemmas seriously, answer them honestly, and let your real values come into focus. Next lesson you will gather everything, including the manifesto you begin here, into the thing that shows the world who you are: your portfolio, your body of work. But first, find out what you stand for. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l19-s5-before.webp`,
          imageCaption: `Threads together. A manifesto is a chosen, honest statement of what you stand for and how you'll act, written in calm so future-you has something to stand on under pressure, a spine, not a cage. The whole band has been handing you values to try on (honesty, persistence, responsible power, reverence, clear thinking, substance over surface, thinking past your first reaction, staying awake, holding both truths); now you choose which are yours and add your own. Your manifesto is yours, but built by honest reasoning, not whim, values you can defend, would accept being done to you, could respect yourself for. The shape: a short list of specific, active statements, honest, yours, alive, kind. The case-study screen ahead hands you the real dilemmas (credit you didn't earn, money vs. meaning, a hit vs. respect, quitting vs. persisting, copying vs. your own voice), mirrors asking what YOU would choose and why. Last thought: this is where "things I learned about art" becomes "who I am as a creator." Find out what you stand for.
`,
          vocab: [
            {
              word: `from learning about art to becoming a creator`,
              definition: `The synthesis before the case studies. You learned what a manifesto is: a chosen, honest statement of what you stand for and how you intend to act, written down in calm so that future-you has something to stand on under pressure, a spine rather than a cage, since values are easy when nothing is at stake and hard when they cost you something. You saw that this whole band has already been handing you values to try on, honesty (credit/IP), persistence and patience (career), responsible power (how art moves people / propaganda), reverence (sacred art), honest clear thinking (brain-hype), substance over surface (immersive art), thinking past your first reaction (performance art), staying awake (film), and holding both truths (fusion), and that the work now is choosing which are truly yours and adding your own that no lesson gave you. You learned that your manifesto is genuinely yours but built by honest reasoning rather than whim: you choose values you can defend with honest reasons, would be willing to have done to you, that do not depend on hiding or lying, and that you could respect after temptation passes, which is the grown-up version of freedom (chosen principles you can live by, not "anything goes"). And you learned the practical shape: a short list of specific, active statements (each naming a value AND how you will act on it when it costs you), kept honest, yours, alive, and kind to yourself. The case-study screen will hand you the real dilemmas of a creative life, credit you did not earn, money versus meaning, a hit versus respect, quitting versus persisting, copying versus your own voice, as mirrors asking what YOU would choose and why, so you can harvest the values underneath and begin writing them down. The last thing to carry is that this lesson and the next are where everything turns from "things I learned about art" into "who I am as a creator," because whatever you make, you will make it as someone, and the someone you make it as is being decided in lessons exactly like this one, setting up the portfolio capstone where you gather everything, including this manifesto, into the body of work that shows the world who you are.`,
              audioPrompt: `Pull it together before you face the dilemmas, {name}. You learned what a manifesto is, a chosen, honest statement of what you stand for and how you intend to act, written in calm so future-you has something to stand on under pressure, a spine, not a cage. You saw that this whole band has already been handing you values to try on, honesty, persistence, responsible power, reverence, clear thinking, substance over surface, thinking past your first reaction, staying awake, holding both truths, and that now the work is choosing which are truly yours and adding your own. You learned that your manifesto is genuinely yours, but built by honest reasoning, not whim, choosing values you can defend, would accept being done to you, and could respect yourself for. And you learned the practical shape: a short list of specific, active statements, honest, yours, alive, and kind. Now the case-study screen will hand you the real dilemmas of a creative life: whether to take credit you did not earn, whether to choose money over meaning, whether to chase a hit at the cost of respect, whether to quit when it gets hard, whether to copy what is winning or sound like yourself. For each, you will reason through what is really at stake and harvest the value underneath. These are not tests with hidden right answers about other people; they are mirrors, asking what you would choose and why, so you can write it down. One last thing to carry into it. This lesson, and the next, are where everything turns from "things I learned about art" into "who I am as a creator." Whatever you end up making, you will make it as someone, and the someone you make it as is being decided in lessons exactly like this one. So take the dilemmas seriously, answer them honestly, and let your real values come into focus. But first, find out what you stand for.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l19-case-study`,
          type: `case-study`,
          headline: `Five Dilemmas Of A Creative Life`,
          intro: `{name}, five choices you will actually face as a creator. These are not about judging other people, they are mirrors. For each, reason through what is really at stake and harvest the value underneath, the principle you would want guiding you. Ask not just "what do I feel like?" but "what could I defend, what would I want done to me, what could I respect myself for choosing?" Your answers are the first draft of your manifesto.`,
          cases: [
            {
              id: `c1`,
              title: `The credit you didn't earn`,
              type: `Honesty vs. looking original`,
              description: `You make something good by building heavily on another creator's idea, technique, or work. You could acknowledge them, or you could stay quiet and let everyone assume it was all you, which would make you look more original and talented. No one would necessarily know. What do you do, and what value is underneath your choice?`,
              questions: [
                `What would you want if it were YOUR idea being built on?`,
                `Does "no one would know" change whether it's right?`,
                `What manifesto statement could you write from your answer?`,
              ],
              evaluation: `This is the honesty value from the intellectual-property lesson, now aimed at you. The clarifying test is the reversal: if it were your idea or work being built on, you would want to be credited, which tells you crediting is the fair choice, and "no one would know" changes nothing about whether it is right, it only changes whether you would get caught, which is a different question entirely. A value that depends on not being caught is not a value you can respect yourself for. The deeper point is that taking credit you did not earn does not actually make you more of an artist; it makes you someone hiding the truth about your own work, and real creative confidence comes from being honest about what you built on and still being proud of what you added. A manifesto statement might be something like "I credit the people whose work I build on, even when staying quiet would make me look more original," and notice it is specific and active, it tells future-you exactly what to do in the tempting moment. The value underneath is honesty, including when honesty costs you a little shine.`,
            },
            {
              id: `c2`,
              title: `Money or meaning`,
              type: `What you make and why`,
              description: `You are offered real money to make something you find hollow or even slightly against your values, while the work you actually believe in pays little or nothing right now. You genuinely could use the money. How do you think about this, and what value guides you?`,
              questions: [
                `Is choosing money always selling out, or is it more complicated?`,
                `Where is YOUR line between honest work and work against your values?`,
                `What manifesto statement captures how you'll handle this?`,
              ],
              evaluation: `This one is genuinely hard, and an honest manifesto does not pretend it is simple. Choosing paid work is not automatically "selling out", everyone needs to live, and the career lesson was clear that creative life is built realistically, often funded by work that pays the bills while you build the work you love, so taking honest paid work you do not adore is completely legitimate. The real line, and it is yours to draw, is usually not "money vs. meaning" but "honest work vs. work against my actual values": making something fine-but-unexciting for money is different from making something you believe is harmful or dishonest. The useful questions are: does this paid work merely fail to thrill me (often fine), or does it require me to deceive, harm, or betray something I actually believe (a different matter)? And am I keeping enough of myself for the work that matters? A manifesto statement might be "I'll take honest work to support myself without shame, but I won't make things I believe are harmful or dishonest, however well they pay." The value underneath is integrity that is realistic, not purity that is naive, knowing your actual line and keeping it, while being kind to the part of you that has to eat.`,
            },
            {
              id: `c3`,
              title: `The hit that costs your respect`,
              type: `Substance vs. spectacle, applied to you`,
              description: `You discover you could get huge attention, followers, maybe money, by making something shallow, shocking, or even subtly disrespectful (using a culture's sacred sound as a gimmick, say), that you know is hollow but you can tell would "work." The meaningful thing you want to make would get far less attention. What do you do, and why?`,
              questions: [
                `Which band lessons does this pull together (substance, respect, power)?`,
                `Is wanting attention wrong, or is it about HOW you get it?`,
                `What line do you want to hold, and can you state it?`,
              ],
              evaluation: `This pulls together several values you have built, substance over surface (immersive art), respect for meaning (sacred art and fusion), and using your power responsibly (how art moves people). Wanting attention is not wrong at all, attention is how your work reaches people, and there is nothing shameful in wanting to be seen; the real question is how you get it. Getting attention through genuinely good, meaningful work is wonderful; getting it through hollow shock or, worse, by disrespecting something sacred to others as a gimmick, trades your self-respect and someone else's dignity for a spike of views. The honest test is the one from across the band: is there real substance here, or just spectacle, and am I cheapening something that matters to people for my own gain? A manifesto statement might be "I want my work to be seen, but I won't get attention by making something hollow or by disrespecting what's sacred to others, even when I can tell it would 'work.'" The value underneath is that how you succeed is part of the work, and a hit you cannot respect is not a win.`,
            },
            {
              id: `c4`,
              title: `The moment you want to quit`,
              type: `Persistence vs. giving up`,
              description: `You have worked hard at something creative, and you are facing rejection, failure, slow progress, or harsh comparison to others who seem better or further along. Everything in you wants to quit. How do you think about whether to keep going, and what value do you reach for?`,
              questions: [
                `What did the career lesson teach about rejection and the long game?`,
                `How do you tell "healthy quitting" from "quitting out of discouragement"?`,
                `What do you want to be able to tell yourself in that moment?`,
              ],
              evaluation: `This is the persistence and patience value from the career lesson, meeting you at the exact moment it is hardest to hold. That lesson taught that real creative life is built through practice, rejection, and slow growth, not overnight magic, so rejection and slow progress are not signs you should quit, they are the normal texture of the path everyone who made anything good walked through. The important nuance, and it keeps this honest, is that not all quitting is failure: there is healthy quitting (deciding something genuinely is not for you, or choosing a better path, from a clear head) and there is discouraged quitting (abandoning something you love because a hard moment made it hurt). The tell is usually the source: quitting from clarity and choice can be wise, while quitting from a spike of discouragement, comparison, or one rejection is the kind you tend to regret. A manifesto statement might be "When I want to quit, I'll ask whether I'm choosing from clarity or fleeing from discouragement, and I won't abandon what I love just because it got hard." The value underneath is persistence, paired with the wisdom to know the difference between a clear decision and a discouraged flinch.`,
            },
            {
              id: `c5`,
              title: `Copy the winner, or sound like yourself`,
              type: `Authenticity vs. imitation`,
              description: `A particular style, sound, or format is clearly "winning", getting all the attention and rewards. You could copy it closely and likely get noticed faster, or you could keep developing your own voice, which is slower, riskier, and might never blow up. What do you choose, and what value is at stake?`,
              questions: [
                `Is learning from others the same as copying to chase a trend? Where's the line?`,
                `What's the cost of sounding exactly like whatever is winning right now?`,
                `What do you want to be true about your work in ten years?`,
              ],
              evaluation: `This is the authenticity value, and it deserves an honest, non-preachy take, because "just be original" is too simple. Learning from others is not the same as copying to chase a trend: every artist learns by studying and imitating people they admire, that is how skill is built, and there is nothing wrong with it, the line is roughly between learning from many influences to grow your own voice and erasing your voice to clone whatever is winning this month. The real cost of just copying the winner is twofold: trends pass, so a voice built entirely on chasing them has to keep starting over each time the wind shifts, and a copy is almost never as compelling as the original or as the authentic thing only you could make. The honest nuance is that developing your own voice is genuinely slower and riskier and might not "blow up," so this is a real trade, not a free choice, and you get to weigh it. A manifesto statement might be "I'll learn from everyone, but I won't erase my own voice to chase whatever is winning, because the work only I can make is the work worth building." The value underneath is authenticity held with maturity, learning widely while protecting the thing that is actually yours.`,
            },
          ],
          synthesisPrompt: `Looking at your answers across all five dilemmas: what are 3-5 values that keep showing up for you? Write them as the first draft of your manifesto, as specific, active statements ("I will... even when..."), in your own voice. Then add at least one value that no lesson gave you, something you care about that is purely yours. This is the beginning of your creative manifesto.`,
          reflectionPrompt: `Of these five dilemmas, which one would be hardest for YOU to handle the way you said you want to? Be honest, where are you most tempted, most likely to slip? Naming your hardest temptation now, in calm, is exactly what makes a manifesto useful later.`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a creative manifesto, and why does the lesson say you need one?`,
              options: [
                `Random`,
                `A manifesto is a clear, honest statement of what you believe and how you intend to act as a creative person, written down so it can guide you, and it does not need to be public or grand, it can be a private, plain-spoken list of the principles you choose to live and create by. You need one because values are easy to hold when nothing is at stake and brutally hard to keep under pressure, and the creative life is full of pressure: it is easy to say "I'll always give credit" until crediting makes you look less original, easy to say "I care about meaning, not money" until real money is offered for something hollow, and easy to say "I'll stay true to my voice" until copying a trend would get you followers. In those moments you will not have time to reason from scratch, you will fall back on whatever you decided before, so a manifesto is that prior decision, made in calm, that future-you can lean on when calm is exactly what is missing. It is not a cage but a spine: it does not lock you in (you can and should revise it as you grow), it gives you something to stand on instead of being blown around by whatever is trendy, tempting, or pressuring.`,
                `Just a fancy to-do list`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A manifesto is a chosen, honest statement of what you stand for and how you'll act, written in calm. You need it because values are easy when nothing's at stake and hard under pressure, it's the prior decision future-you leans on. A spine, not a cage.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `How has the whole band already been building the raw material of your manifesto?`,
              options: [
                `Random`,
                `By having you practice values, not just learn facts, in lesson after lesson. The intellectual-property lesson built honesty (credit, respecting others' work); the career lesson built persistence and patience (creative life is practice and rejection, not overnight magic); the "how art moves people" and propaganda lesson built responsible use of power (don't manipulate or deceive); the sacred-art lesson built reverence (handle what's meaningful to others with care); the brain-hype lesson built honest, clear thinking (believe the evidence, reject inflated claims). It continued: immersive art built substance over surface (real meaning, not just a shareable photo); performance art built thinking past your first reaction (sit with the confusing instead of grabbing "stupid" or "genius"); film built staying awake (feel fully while seeing how you're moved); and global fusion built holding both truths (love blending while insisting on credit and respect). None were handed over as rules to obey, they were values you tried on by reasoning through real situations, so the manifesto work now is choosing which of these are truly yours and adding your own that no lesson gave you.`,
                `Just by teaching art facts`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Each lesson had you practice a value, not just learn facts: honesty (IP), persistence (career), responsible power (propaganda), reverence (sacred art), clear thinking (brain-hype), substance over surface (immersive), thinking past first reactions (performance), staying awake (film), holding both truths (fusion). Now you choose which are yours.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `The lesson says your manifesto is "yours to write" but also "not anything goes." How do both hold true?`,
              options: [
                `Random`,
                `Both hold because choosing your own values is real, but some values genuinely hold up better than others when you reason them through honestly, the same way some art claims survived scrutiny across the band and others collapsed. So no one can hand you a finished manifesto and the lesson refuses to tell you what to value, that part is truly yours, AND "it's mine to choose" does not mean "all choices are equally good," which would be a cop-out after a whole band of careful thinking. What makes a value worth keeping is testable: you can defend it with honest reasons, you would be willing to have it done to you, it does not depend on hiding or lying, and you could still respect it after temptation passes. "I give credit because I'd want credit for my own work" holds up (fair, defensible, reversible); "I take credit whenever I can get away with it" does not, not because a lesson forbids it but because you cannot honestly defend it, you'd be furious if it were done to you, and it depends on not getting caught. So you build your manifesto by honest reasoning rather than whim, which is the grown-up version of freedom: chosen principles you can live by, not "anything goes, nothing matters."`,
                `Just pick whatever feels good`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `You genuinely choose your values (no one hands you a finished one), AND some hold up better under honest reasoning. A keepable value is defensible, reversible (you'd accept it done to you), and doesn't depend on hiding. That's real freedom: chosen principles, not "anything goes."`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What makes a manifesto statement actually useful, versus useless?`,
              options: [
                `Random`,
                `Useful statements are specific and active rather than vague and pretty, and each one names a value AND points at how you'll act on it, especially in the hard moment when the value costs you something. "I want to be a good person" is too vague to guide anything, you can't tell what to do with it in a real situation. "I always credit the people whose work I build on, even when staying quiet would make me look more original" is specific, active, and tells future-you exactly what to do in the tempting moment, which is the whole point of writing it down. So aim for statements shaped like "I will [specific action], even when [the thing that makes it hard]," because those actually function as a spine when pressure hits. The supporting guidelines also matter: keep it honest (what you really believe, not what sounds noble, since a manifesto you don't mean is useless), keep it yours (band values that resonate plus your own non-negotiables), keep it alive (revise as you grow, a feature not a failure), and keep it kind to yourself (it's who you're aiming to be, not a stick to beat yourself with when you fall short).`,
                `Just sound inspiring`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Specific and active beats vague and pretty: name the value AND how you'll act, especially when it costs you ("I will X, even when Y"). "Be a good person" guides nothing; "I credit those I build on even when silence would look more original" guides the real moment. Keep it honest, yours, alive, kind.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why are the case-study dilemmas described as "mirrors," not "tests with hidden right answers"?`,
              options: [
                `Random`,
                `Because their purpose is not to judge other people or to make you guess a single correct answer the lesson is hiding, but to surface what YOU actually believe is right, so you can write it down. Values are not found by staring at the ceiling, they are found by facing real choices and noticing what you genuinely think you should do, so each dilemma (credit you didn't earn, money vs. meaning, a hit that costs your respect, the urge to quit, copying the winner vs. your own voice) holds a mirror up and asks what you would choose and why. The evaluations do model honest reasoning and point out which values hold up, because "anything goes" was already ruled out, but they explicitly leave the actual choosing to you, including drawing your own lines (like exactly where your money-vs-values line falls), since the manifesto must be genuinely yours to be worth anything. So the dilemmas work by reflection rather than examination: you learn what you stand for by watching how you reason through situations you'll really face, which is exactly how a real, livable manifesto gets built, from honest self-knowledge rather than from memorizing someone else's rules.`,
                `Just trick questions`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Their job is to surface what YOU believe so you can write it down, not to judge others or hide one right answer. Values are found by facing real choices and noticing your honest response, so the dilemmas reflect you back, and the manifesto is built from self-knowledge.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `In the "money or meaning" dilemma, why isn't taking paid work you don't love automatically "selling out"?`,
              options: [
                `Random`,
                `Because everyone needs to live, and the career lesson was clear that creative life is built realistically, often funded by work that pays the bills while you develop the work you love, so taking honest paid work you don't adore is completely legitimate, not a betrayal. The lesson reframes the real line: it's usually not "money vs. meaning" but "honest work vs. work against my actual values," because making something fine-but-unexciting for money is genuinely different from making something you believe is harmful or dishonest. The useful questions become: does this paid work merely fail to thrill me (often fine) or does it require me to deceive, harm, or betray something I actually believe (a different matter entirely), and am I keeping enough of myself for the work that matters? That's why the honest value here is realistic integrity rather than naive purity, knowing your actual line and holding it, while being kind to the part of you that has to eat, rather than pretending a real artist must refuse all unglamorous paid work, which would just be unrealistic and self-punishing. A workable manifesto statement: "I'll take honest work to support myself without shame, but I won't make things I believe are harmful or dishonest, however well they pay."`,
                `Just always take the money`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Everyone needs to live, and honest work that merely doesn't thrill you isn't betrayal, the career lesson said creative life is often funded by bill-paying work. The real line isn't money vs. meaning but honest work vs. work against your values. Realistic integrity, not naive purity.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `In the "moment you want to quit" dilemma, how do you tell healthy quitting from discouraged quitting?`,
              options: [
                `Random`,
                `Usually by the source of the impulse. The career lesson taught that real creative life is built through practice, rejection, and slow growth, not overnight magic, so rejection and slow progress are the normal texture of the path, not proof you should stop. But not all quitting is failure, and the honest nuance is the difference between healthy quitting and discouraged quitting: healthy quitting is deciding, from a clear head, that something genuinely isn't for you or that a different path is better, a real choice; discouraged quitting is abandoning something you actually love because a hard moment, a rejection, a bad comparison, a spike of discouragement, made it hurt. The tell is the source: quitting from clarity and choice can be wise, while quitting from a flash of discouragement or one rejection is the kind you tend to regret once the feeling passes. So the move in that moment is to ask "am I choosing this from clarity, or fleeing it from discouragement?" before deciding. A manifesto statement might be "When I want to quit, I'll ask whether I'm choosing from clarity or fleeing from discouragement, and I won't abandon what I love just because it got hard."`,
                `Just never quit anything`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Tell by the source: healthy quitting is a clear-headed choice that something isn't for you; discouraged quitting is abandoning what you love because a hard moment hurt. Rejection and slow progress are normal, not stop signs. Ask "clarity, or fleeing discouragement?" first.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `In the "copy the winner or sound like yourself" dilemma, what's the line between learning from others and just chasing a trend?`,
              options: [
                `Random`,
                `The line is roughly between learning from many influences to grow your own voice and erasing your voice to clone whatever is winning this month. Learning from others is not the same as copying a trend, because every artist learns by studying and imitating people they admire, that's how skill is built, and there's nothing wrong with it; the problem is only when you stop developing anything of your own and just replicate the current winner. The cost of pure copying is twofold: trends pass, so a voice built entirely on chasing them has to keep starting over each time the wind shifts, and a copy is almost never as compelling as the original or as the authentic thing only you could make. The honest nuance is that developing your own voice really is slower and riskier and might never blow up, so this is a genuine trade you get to weigh, not a free choice with an obvious answer. The value underneath is authenticity held with maturity, learning widely while protecting the thing that's actually yours, captured in a statement like "I'll learn from everyone, but I won't erase my own voice to chase whatever is winning, because the work only I can make is the work worth building."`,
                `Just never look at others' work`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Learning from many influences to grow your voice is how all skill is built; erasing your voice to clone this month's winner is the problem. Copying costs you twice: trends pass, and a copy rarely beats the original or the thing only you could make. Authenticity held with maturity.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because a manifesto is "yours to write," it doesn't really matter what values you put in it, any set of values is just as good as any other.`,
              correctAnswer: false,
              explanation: `False, and catching why is the heart of the lesson's honesty. It's completely true that a manifesto is yours to write, your values, in your own words, fitting your own creative life, and the lesson deliberately refuses to dictate what you should value, because a manifesto handed to you by someone else isn't really yours and won't hold. But "yours to choose" is not the same as "all choices are equally good," and treating it that way would be a cop-out after a whole band of careful reasoning, because some values genuinely hold up better than others when you think them through honestly, exactly as some art claims survived scrutiny and others collapsed throughout the band. There are real tests for whether a value is worth keeping: you can defend it with honest reasons, you'd be willing to have it done to you, it doesn't depend on hiding or lying, and you could still respect it after the heat of temptation passes. "I give credit because I'd want credit for my own work" passes those tests; "I take credit for others' work whenever I can get away with it" fails them, not because a lesson forbids it, but because you can't honestly defend it, you'd be furious if it were done to you, and it depends on not being caught. So you build your manifesto by honest reasoning, not by whim, choosing values you can actually stand behind, which is the grown-up version of freedom: real freedom is choosing your principles thoughtfully and living by them when it's hard, not "anything goes, nothing matters," which is just being unmoored and pushed around by whatever is convenient. The manifesto being yours makes choosing your values your responsibility, it doesn't make the choosing not matter.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine it's a few years from now. You've made something you're proud of, and it's starting to get noticed. Suddenly all the dilemmas from this lesson show up at once: someone offers you money to make something hollow, a shallow version of your work would clearly get more attention than the real one, you're tempted to quietly drop the credit for an influence to seem more original, and copying a trending style would grow you faster than your own voice. You're tired and tempted. How does having written a manifesto actually help you here, and what does it NOT do?`,
              options: [
                `"It magically makes it easy"`,
                `Several things, honestly, because this is the exact moment a manifesto was built for, and understanding both what it does and what it doesn't do is the real maturity the lesson is after. First, what it does: it means you are not deciding all of this from scratch while tired and tempted, which is the worst possible condition for good decisions, because you already reasoned through each of these dilemmas in calm, back when nothing was at stake, and decided who you wanted to be, so future-you (which is now present-you) has something to stand on instead of just reacting to whatever pressure is loudest. Second, it turns vague temptation into recognizable, named situations: instead of a confusing swirl of "what do I do," you can see "oh, this is the money-vs-values choice, and I decided my line is honest work yes, harmful or dishonest work no," and "this is the hit-that-costs-respect choice, and I decided I won't get attention by making something hollow or disrespectful even when it would work," and "this is the credit choice, and I decided I credit my influences even when silence would make me look more original," and "this is the copy-the-winner choice, and I decided I'll learn from everyone but won't erase my own voice," so the manifesto acts like a map that labels the terrain you're standing on. Third, it gives you a spine in the literal sense, something to keep you upright when the wind is strong, because the whole point was that values are easy when nothing's at stake and hard under exactly this kind of pressure, and a decision made in calm is far more trustworthy than one made while tired and tempted. Fourth, and just as important, here is what it does NOT do: it does not make the choices easy or painless, because the temptations are real, the money is real, the faster attention is real, and choosing your values here genuinely costs you something, so the manifesto doesn't remove the cost, it just means you pay it on purpose, for reasons you chose, instead of drifting into whatever's convenient and regretting it. Fifth, it does not make you perfect, because you might still slip, you're tired and human, and the lesson was explicit that a manifesto is who you're aiming to be, not a stick to beat yourself with, so if you fall short it's what helps you recognize it and find your way back, not proof you've failed. Sixth, it does not lock you forever, because it's a spine, not a cage, and you're allowed to revise it thoughtfully as you grow, the key word being thoughtfully, from your center, rather than abandoning it the second it's inconvenient (which is just the temptation winning while pretending to be growth). The deepest takeaway is that a manifesto doesn't win the battle for you, it makes sure that when the battle comes, you're fighting for something you actually chose, with a clear head's decision backing you up, instead of being blown around by money, attention, and exhaustion, and that difference, deciding who you are in calm so you can hold it under pressure, is the entire reason you wrote it, and the entire reason this lesson exists.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Captures both what a manifesto does and doesn't do. It does: spare you deciding from scratch while tired/tempted, name vague temptations as recognizable choices you already reasoned through, and give you a spine to stay upright under pressure (values are hard exactly here). It does NOT: make choices painless (you still pay the cost, just on purpose), make you perfect (slips happen; it helps you return, not a stick to beat yourself), or lock you forever (revise thoughtfully, from your center, not abandon when inconvenient). It doesn't win the battle, it ensures you fight for what you chose.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-values`, category: `Your emerging values`, prompt: `Looking back at the dilemmas, which value felt most strongly, most clearly YOURS, the one you'd defend hardest? Write it as a manifesto statement: "I will... even when..." Where does it come from in you?` },
            { id: `reflect-temptation`, category: `Your honest weak spot`, prompt: `Which dilemma would be hardest for you to handle the way you said you want to, where are you most tempted to slip? Naming your real temptation in calm is what makes a manifesto useful when the pressure comes. Be honest with yourself.` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson turns "things I learned about art" into "who I am as a creator." Does it feel different to think of yourself as a maker with chosen values, not just someone learning about art? What kind of creator do you want to be?` },
            { id: `reflect-ownvalue`, category: `A value no lesson gave you`, prompt: `What do you care about as a creator that no lesson in this band mentioned, your subjects, your reasons for making, your own non-negotiable? Add it to your manifesto. The purely-yours parts are often the most important.` },
            { id: `reflect-freedom`, category: `Real freedom`, prompt: `The lesson says real freedom isn't "anything goes" but choosing your values on purpose. Does that match how you think about freedom, or challenge it? When have you felt more free because you had clear principles, not fewer?` },
            { id: `reflect-future`, category: `A note to future-you`, prompt: `Write one sentence to yourself for a future moment when you're tempted to abandon a value you care about. What do you want present-you, thinking clearly right now, to tell tired-and-tempted future-you?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This lesson becomes real only when you actually write your manifesto down. Two paths.`,
          familyActivity: {
            title: `Everyone Writes A Manifesto`,
            duration: `45 minutes`,
            description: `As a family, each write a short personal manifesto, not just the young creator, everyone. Start by talking together about the idea: that a manifesto is a chosen, honest list of what you stand for and how you intend to act, written in calm so it can guide you under pressure, and that it works for any part of life, not only art. Then each person, privately or aloud, drafts a handful of specific, active statements ("I will... even when...") capturing values they actually want to live by, drawing on the dilemmas from this lesson (credit, money vs. meaning, persistence, authenticity) and adding their own that matter to them. Keep the guidelines in mind: honest (what you really believe, not what sounds noble), yours, alive (revisable), and kind to yourself. Finally, those who want to can share one statement and why it matters to them, and the family can talk about where these values will be tested and how you might support each other in holding them. The goal is to make the abstract idea of "values" concrete and personal for everyone, and to let the young creator see that grown-ups, too, are still deciding who they want to be, on purpose.`,
          },
          projectOption: {
            title: `Build And Display Your Manifesto, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Turn the draft from this lesson into a real, finished creative manifesto you'll actually keep, and make it something you want to look at. Week 1: gather everything, your answers to the five dilemmas, your reflection statements, and the value no lesson gave you, and shape them into a clean list of (roughly) five to ten manifesto statements, each specific and active ("I will... even when..."), each one you genuinely mean and could defend. Cut anything that just sounds nice but you don't really believe; honesty is the whole point. Write a sentence or two at the top about why you make things at all, your own reason. Week 2: make it into an artifact you'll keep and see, this is where your creative skills come in: design it as a poster, a hand-lettered page, a digital graphic, a small zine, a recorded spoken-word version, whatever fits you, so your manifesto is itself a piece of creative work. Put it somewhere you'll encounter it. Then write a short reflection: which statement will be hardest to keep, and what do you want it to remind you of when you're tempted? The point is that a manifesto only works if it exists somewhere real and you actually see it, so making it both finished and visible is what turns this lesson from an exercise into a tool you'll use for years.`,
            offerToParent: `Parent: opt your child into the build-and-display-your-manifesto project. Turning their reasoning from this lesson into a finished, visible artifact, a poster, page, or recording they designed, does two things at once: it gives them a real set of chosen values to return to under pressure, and it makes that value-statement itself a piece of creative work, marrying the band's ethics with its craft. Displaying it where they'll see it is what makes it a living tool rather than a one-time worksheet, and it pairs naturally with the portfolio they'll build next.`,
          },
          identityQuestion: `If you become someone who has actually decided, in calm and in your own words, what you stand for as a creator, and written it where you'll see it, what does that let you do when money, attention, exhaustion, and temptation all show up at once, that someone who never chose their values, and so gets pushed by whatever's strongest nearby, never can?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who decided who I want to be as a creator, on purpose.`,
            `A person with chosen values to stand on, not just feelings to be pushed around by.`,
            `Someone becoming a maker with a spine, not just someone who likes art.`,
          ],
          saveKey: `identity_responses_ca_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteen down. One to go. And this one was different, because it was about you. You learned what a manifesto is, a chosen, honest statement of what you stand for and how you'll act, written in calm so future-you has something to stand on when the pressure comes, a spine, not a cage. You saw that this whole band had quietly been handing you values to try on, honesty, persistence, responsible power, reverence, clear thinking, substance over surface, thinking past your first reaction, staying awake, holding both truths, and you began choosing which are truly yours and adding your own. You learned that your manifesto is genuinely yours, but built by honest reasoning rather than whim, values you can defend, would accept being done to you, and could respect yourself for, which is the grown-up version of freedom. And you worked the real dilemmas of a creative life, credit, money versus meaning, the hit that costs your respect, the urge to quit, copying versus your own voice, and harvested the values underneath into the first draft of something that is yours. You are not just someone who knows about art anymore, {name}. You are a creator with values you chose. Next, the last lesson: you gather everything, your skills, your manifesto, your voice, into the thing that shows the world who you are, your portfolio. The end of the band, and the beginning of your creative life. Onward. — Muse`,
          badge: `manifesto-author`,
          badgeName: `Manifesto Author`,
          xpEarned: 75,
          competencies: [
            `Understands what a creative manifesto is (a chosen, honest statement of values and how to act) and why it matters (a spine to hold under pressure, decided in calm)`,
            `Recognizes the values built across the whole band, honesty, persistence, responsible power, reverence, clear thinking, substance, thinking past first reactions, staying awake, holding both truths, as raw material to choose from`,
            `Grasps that the manifesto is genuinely theirs to write, yet built by honest reasoning, not whim, since some values hold up better than others`,
            `Can test a value: defensible with honest reasons, reversible (willing to have it done to you), not dependent on hiding, respectable after temptation passes`,
            `Reasons through real creative dilemmas (credit, money vs. meaning, hit vs. respect, quit vs. persist, copy vs. authentic voice) and harvests the value underneath each`,
            `Writes specific, active manifesto statements ("I will... even when...") in their own voice, including a value no lesson supplied`,
            `Understands real freedom as choosing principles on purpose and living by them, not "anything goes," and that a manifesto guides without guaranteeing perfection`,
          ],
          nextLessonPreview: {
            title: `Lesson 20: Building Your Portfolio`,
            hook: `The finale. Everything, your skills, your voice, your manifesto, gathered into the body of work that shows the world who you are.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L19 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
