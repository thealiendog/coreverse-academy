// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L08 — Creativity in the AI Era
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Creativity Research, AI Literacy, Philosophy of Art
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (fundamentally human / tool that expands / genuinely new category)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l08-v1";

const FUTURESKILLS_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-08`,
      title: `Creativity in the AI Era`,
      duration: 35,
      xpReward: 75,
      badge: `creative-thinker`,
      badgeName: `Creative Thinker`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a question your generation is going to answer that mine couldn't: what is AI doing to creativity? You can already type "make me a painting in the style of Van Gogh of a dragon eating pizza" and get something visually interesting in 30 seconds. You can ask AI to write a poem about your dog. You can generate music, code, video. The pop conversation has two loud camps: "AI is killing creativity" (panic) and "AI is democratizing creativity for everyone" (utopia). Neither is quite right. Today we work through three more serious positions defended by working artists, philosophers, and theorists. Build your argument for what you think is actually happening. The answer matters because how you think about this shapes how you'll create over your lifetime.`,
          headline: `Creativity in the AI Era`,
          subtitle: `Three serious positions. Pop framings are mostly wrong on both sides.`,
          visual: `/voyager-assets/future-skills/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Creativity" Actually Means`,
          paragraphs: [
            `Before debating what AI does to creativity, we should be specific about what creativity actually is. The word gets used vaguely. "She's so creative." "I'm not a creative person." These uses treat creativity as a personality trait. Researchers who study creativity don't use the word that way.`,
            `Creativity, as studied by psychologists like J.P. Guilford (1950s) and Mihaly Csikszentmihalyi (later research), involves at least two components: novelty (the output is new in some meaningful way) and value (the output is useful, beautiful, or otherwise worth producing). Pure novelty without value is randomness; pure value without novelty is competence. Creativity sits at the intersection.`,
            `Most creative work involves recombining existing elements in new ways. A song that sounds new is usually built from chord progressions, instruments, and structures that existed before. A novel idea in physics typically combines existing concepts in an unexpected configuration. Pure invention from nothing is extremely rare and may not actually exist; even the most original work draws on the creator's accumulated influences. The cognitive psychologist Margaret Boden distinguishes between "P-creativity" (psychologically new to the creator) and "H-creativity" (historically new to humanity). Most creative work is P-creative; H-creative work is rare and builds on enormous amounts of P-creative work.`,
            `One important note. The romantic image of the lone creative genius producing original work from inspiration alone is mostly wrong as a description of how creativity actually works. Most creative breakthroughs come from sustained engagement with a domain, exposure to many influences, and recombination of those influences in new ways. This matters for the AI debate because AI's pattern-matching-and-recombination process is closer to how human creativity works than the romantic image suggests.`,
          ],
          image: `/voyager-assets/future-skills/l08-s1-creativity.webp`,
          imageCaption: `Creativity = novelty + value. Most creative work recombines. The romantic image of lone genius is mostly wrong.`,
          vocab: [
            {
              word: `P-creativity vs H-creativity`,
              definition: `Distinction by cognitive scientist Margaret Boden. P-creativity (psychological): new to the creator, even if others have done it before. H-creativity (historical): new to humanity, never done before. Most creative work is P-creative. H-creativity is rare and builds on enormous amounts of P-creative work.`,
              audioPrompt: `P-creativity and H-creativity are a distinction by cognitive scientist Margaret Boden, {name}. P-creativity is psychological: something new to the creator, even if others have done it before. When you discover a way to solve a problem that you've never solved before, that's P-creative for you, even if many others have figured it out before. H-creativity is historical: something genuinely new to humanity, never done before. Most creative work is P-creative. H-creativity is rare and builds on enormous amounts of P-creative work. The distinction matters in the AI debate because most pop arguments treat all creativity as H-creativity (uniquely original work) when most actual creative work, by humans or AI, is P-creative recombination. Knowing this distinction lets you have a more accurate conversation about what's actually happening.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Creativity Is Fundamentally Human`,
          paragraphs: [
            `The first major position. Real creativity requires things AI doesn't have: lived experience, embodiment, intentional meaning-making, emotional stakes, a self with a perspective. AI can recombine training data into outputs that look like creative work, but the actual creative act (deciding what matters, choosing what to express, infusing the work with meaning that comes from being a particular person in a particular life) remains human.`,
            `This position has serious defenders. Many working artists, novelists, and musicians argue that what makes their work creative is precisely the lived perspective behind it, which can't be replicated by a system trained on patterns. Erik Hoel, a neuroscientist and novelist, has written about how AI may produce surface-level outputs that "look creative" without doing the work that makes human creativity meaningful. The philosopher Roger Scruton (before his death in 2020) defended similar views about aesthetic experience requiring a human perspective.`,
            `The argument has real strengths. AI outputs are statistically similar to training data; they struggle with genuine novelty outside the distribution of what they've seen. Even AI's most impressive outputs reflect patterns from the work of human creators. The "meaning" in creative work isn't just in the artifact; it's in the relationship between maker and made, and that relationship is constitutively human in important ways.`,
            `The argument has real limits too. "Lived experience" and "intentional meaning-making" are hard to define precisely. The romantic notion of human creativity as fundamentally different from sophisticated recombination may be overstated. Human creators also work with training data (everything they've encountered). The gap between "real" and "merely recombined" creativity may be smaller than the position suggests. And as AI systems grow more sophisticated, the line keeps shifting in ways that don't feel like victory for either side.`,
          ],
          image: `/voyager-assets/future-skills/l08-s2-human.webp`,
          imageCaption: `Position 1: real creativity requires lived experience and meaning-making AI lacks. Strong intuition, hard-to-define foundation.`,
          vocab: [
            {
              word: `intentionality`,
              definition: `Philosophical term for the "aboutness" of mental states: thoughts are about things; meaning is created by minds directed at the world. Some philosophers argue AI lacks intentionality (its outputs aren't really "about" anything from its own perspective). Others argue intentionality is overrated as a marker of meaningful work. Contested concept.`,
              audioPrompt: `Intentionality is a philosophical term for the "aboutness" of mental states, {name}. Thoughts are about things. Beliefs are about something. Meaning is created by minds directed at the world. The philosopher Franz Brentano introduced the term in the 19th century. Some philosophers argue AI lacks intentionality. Its outputs are statistical patterns; they aren't really "about" anything from the AI's own perspective. The AI has no perspective. Other philosophers argue intentionality is overrated as a marker of meaningful work. They argue that what matters is the effect of the output, not the inner life of the producer. The concept is genuinely contested. Knowing the term helps you engage with the philosophical depth of the creativity-and-AI debate. Real philosophers disagree about whether intentionality is needed for real creativity.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: AI Is A Tool That Expands What's Possible`,
          paragraphs: [
            `The second major position. AI is the next in a long line of creative tools (oil paint, the printing press, photography, film, digital editing software, sampling in music). Each new tool changed who could create what and how. Each was initially feared as a threat to "real" creativity. Each ended up expanding the creative landscape rather than destroying it. AI is dramatic but follows the same pattern.`,
            `The historical case is strong. When photography was invented in the 1830s, many painters argued it would end painting as an art form (why paint a portrait when a photo is more accurate?). Painting didn't end; it shifted toward impressionism, abstraction, conceptual work, things photography couldn't do. When digital editing software became widespread in the 1990s, traditional artists worried it would destroy craft. Instead, digital tools expanded what art could be while traditional craft continued in parallel. Sampling in music was once considered uncreative theft; it's now central to multiple major genres. Each technology expanded what was creatively possible by changing the cost structure of creation.`,
            `Under this view, AI changes who can create what. A kid with an idea but no drawing skill can now generate visual experiments; the kid still has to know what's good and choose between outputs. A musician can sketch arrangements with AI assistance and then refine them through traditional craft. A writer can brainstorm with AI and then write the actual prose themselves. The taste, vision, and selection remain human; AI changes the tools available for execution. Defenders include practicing creative professionals using AI well (refik Anadol the artist, Holly Herndon the musician in some of her work), critics like Kevin Kelly, and many working designers and creative directors.`,
            `The argument has limits. The speed and scale of AI may be different in kind from previous tools. Previous tools required years of practice to use well; AI can produce outputs in seconds with minimal skill input. The questions about training data and attribution are new. There are legitimate concerns about labor displacement among working creatives. The "AI is just another tool" framing may be too optimistic about adjustments that won't be smooth or fair. Even defenders of this position usually acknowledge the transition costs are real.`,
          ],
          image: `/voyager-assets/future-skills/l08-s3-tool.webp`,
          imageCaption: `Position 2: AI is the next creative tool. Photography didn't kill painting; digital didn't kill physical art. AI follows the pattern.`,
          vocab: [
            {
              word: `creative landscape`,
              definition: `The full range of creative work being done at any given time across all media and approaches. New tools typically expand the landscape rather than replace existing parts of it. Painting persisted alongside photography; physical art persisted alongside digital. The landscape grows; specific niches shift.`,
              audioPrompt: `The creative landscape is the full range of creative work being done at any given time across all media and approaches, {name}. A useful concept for thinking about how new tools affect creativity. New tools typically expand the landscape rather than replace existing parts of it. Painting persisted alongside photography. Physical art persisted alongside digital. Vinyl persisted alongside streaming. Live theater persisted alongside film. The landscape grows; specific niches shift. AI may follow the same pattern, expanding what's possible while older forms continue. Or AI may be different in kind; the speed and scale may produce different dynamics. The historical pattern is the strongest argument for the "AI as tool" position; the question is whether AI is genuinely like previous tools or whether it represents something new.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: AI Creates A Genuinely New Category`,
          paragraphs: [
            `The third major position. AI isn't just another tool, and creativity isn't just human-versus-AI. Something genuinely new is emerging: hybrid forms where the relationship between human, machine, and creative output is being reshaped. The old categories of "human creator" and "tool" don't quite fit. We need new frameworks rather than forcing AI into either "fundamentally human" or "just another tool" boxes.`,
            `This position has a different flavor from the first two. It doesn't try to defend or critique AI's role. It argues that the questions themselves are shifting. Boris Eldagsen, the photographer, won the 2023 Sony World Photography Award with an AI-generated image, then refused the prize publicly to make a point about whether AI work belongs in human photography categories or in its own category. He wasn't arguing AI is bad; he was arguing the categories are confused. Holly Herndon, the musician, created an AI version of herself ("Holly+") that other artists can use to create new music in her voice — a deliberate experiment in what authorship even means when AI can replicate a voice with permission. Sasha Stiles works on AI poetry that treats human-AI collaboration as a new form rather than as either human or AI work.`,
            `The argument has substance. Questions of authorship, attribution, originality, and labor genuinely look different in this context than in previous technology transitions. The way kids growing up with AI tools will think about creativity may differ substantially from how their parents do; they may not see "human-only" vs "AI-only" as the meaningful categories. New hybrid forms are emerging that don't fit older frameworks. The conversation about AI and creativity is itself part of a larger conversation about what categories like "art," "creator," and "tool" mean in this transition.`,
            `The argument has limits. Invoking "we need new categories" can become a way to avoid hard questions about what's gained and what's lost. The position can slide into aesthetic relativism (every output is its own new thing, no comparisons possible). Some concrete questions (who owns AI-generated work? Should AI training on copyrighted material be allowed? Should AI work be labeled?) need concrete answers, not just "it's complicated." The "genuinely new" framing is useful for some questions and dodges others.`,
          ],
          image: `/voyager-assets/future-skills/l08-s4-new.webp`,
          imageCaption: `Position 3: AI creates new hybrid forms, new questions of authorship. Categories are shifting. Useful framing for some questions; risk of avoiding hard answers.`,
          vocab: [
            {
              word: `authorship (in AI work)`,
              definition: `Question of who counts as the creator of a piece of work. Pre-AI: usually clear (the person who made it). With AI: contested. Multiple parties contributed: AI lab that built the model, training data contributors (often unaware), human who prompted, human who selected and refined. No settled framework yet. Active legal, ethical, and aesthetic debate.`,
              audioPrompt: `Authorship is the question of who counts as the creator of a piece of work, {name}. Pre-AI, the question was usually clear: the person who made it. With AI, authorship is contested. Multiple parties contributed to any AI-generated output. The AI lab that built the model. The training data contributors, often unaware their work was used. The human who prompted the model. The human who selected and refined the output. No settled framework yet exists for how to think about this. Active legal debate (copyright cases involving AI-generated work). Active ethical debate (was it fair to train on copyrighted material?). Active aesthetic debate (does AI-assisted work belong in human art categories?). Knowing this is contested, and that real legal and ethical work is happening on it, prevents oversimple takes on the creativity-and-AI question.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't mutually exclusive. Many thoughtful people hold elements of all three: there's something to the "lived experience" argument, AI is in some ways like previous tools, and some genuinely new categories are emerging. The exercise of committing to one as your primary framing forces you to articulate what you actually think.`,
            `One framing to consider. Each position implies a different prediction about what creative work will look like in 20 years. Position 1 predicts AI work will plateau and human creativity will remain dominant. Position 2 predicts AI-augmented human creators will dominate, with traditional craft persisting in parallel. Position 3 predicts new hybrid forms emerging that we can't fully imagine yet. Which prediction feels most accurate given what you've seen so far?`,
            `Another framing. Each position has different implications for what YOU should do as someone growing up creating things. Position 1 suggests focusing on the uniquely human aspects of creative work that AI can't replicate. Position 2 suggests learning to use AI tools well as part of your creative practice. Position 3 suggests being open to forms that don't fit older categories. The right move for you may combine elements of all three. The honest move is making the combination explicit.`,
            `One last framing. Whatever position you take, the honest answer involves uncertainty. The technology is changing fast. The cultural conversation is unsettled. Working creatives, philosophers, theorists, and ordinary people are all figuring this out in real time. Holding strong positions while acknowledging uncertainty is more accurate than committing to either confident utopianism or confident doom. Build your argument with that calibration.`,
          ],
          image: `/voyager-assets/future-skills/l08-s5-before.webp`,
          imageCaption: `Three real positions. Real predictions about the future. Real implications for what you do creatively.`,
          vocab: [
            {
              word: `aesthetic relativism`,
              definition: `View that aesthetic judgments are entirely subjective and no work can be meaningfully compared to another. Contrasted with aesthetic objectivism (some work is genuinely better than other work) and aesthetic pluralism (multiple legitimate criteria, but real judgments possible within each). Risk of "AI creates new categories" framings is sliding into relativism.`,
              audioPrompt: `Aesthetic relativism is the view that aesthetic judgments are entirely subjective and no work can be meaningfully compared to another, {name}. "Beauty is in the eye of the beholder." "All art is equally valid." The view has some appeal because it respects individual taste. It has serious problems. It makes art criticism meaningless. It makes it impossible to say some work is better-crafted, more original, or more meaningful than other work. Aesthetic relativism is contrasted with aesthetic objectivism (the view that some work is genuinely better than other work by knowable criteria) and aesthetic pluralism (multiple legitimate criteria exist, but real judgments are possible within each framework). One risk of the "AI creates new categories" position is sliding into aesthetic relativism. Knowing the alternatives lets you take the position carefully.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l08-argument-builder`,
          type: `argument-builder`,
          headline: `What's Actually Happening To Creativity?`,
          intro: `Pick the position that best captures your thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real working artists, philosophers, and theorists defend each.`,
          positions: [
            {
              id: `human-creativity`,
              label: `Creativity is fundamentally human; AI can recombine but not create`,
              summary: `Real creativity requires lived experience, embodiment, intentional meaning-making, emotional stakes, a self with a perspective. AI recombines training data into outputs that look creative but don't do the underlying work. Defenders include many working artists, novelists, musicians, and writers like Erik Hoel. Strong argument: AI outputs are statistically similar to training data and struggle with genuine novelty. Limit: "lived experience" and "meaning-making" hard to define; humans also work with training data; gap between "real" creativity and "sophisticated recombination" may be smaller than this view claims.`,
            },
            {
              id: `ai-tool`,
              label: `AI is a tool that expands the creative landscape (like photography or digital editing)`,
              summary: `AI is the next in a line of creative tools that have changed who can create what. Photography didn't kill painting; digital tools didn't kill physical art. AI changes the cost structure of creation but taste, vision, and selection remain human. Defenders include working creatives using AI well (Refik Anadol, Holly Herndon in parts of her work), critics like Kevin Kelly, designers and creative directors. Strong argument: historical pattern of new tools expanding rather than killing creativity. Limit: AI's speed and scale may differ in kind; questions about training data and labor displacement are new; transition costs real.`,
            },
            {
              id: `new-category`,
              label: `AI creates genuinely new categories; old frameworks don't fit`,
              summary: `Something new is emerging — hybrid forms, shifted authorship, new questions about originality. Old categories of "human creator" and "tool" don't quite fit. Defenders include Boris Eldagsen (refused 2023 Sony prize to make a point), Holly Herndon (created Holly+, an AI version of her voice for other artists), Sasha Stiles (AI poetry as new form). Strong argument: questions of authorship, attribution, labor genuinely look different than previous transitions; new hybrid forms emerging. Limit: "we need new categories" can dodge hard questions; risk of aesthetic relativism; concrete legal/ethical questions still need concrete answers.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `AI outputs are statistically generated from training data. They typically struggle with truly novel work outside the distribution of what they've seen. Original creative work — work that introduces genuinely new patterns to human culture — is rare from AI and common (though still rare overall) from humans.`,
              source: `Standard analysis of large language model and generative AI behavior; multiple sources`,
            },
            {
              id: `e2`,
              text: `Cognitive scientist Margaret Boden distinguished P-creativity (psychologically new to the creator) from H-creativity (historically new to humanity). Most human creative work is P-creative, not H-creative. The distinction matters in the AI debate because most pop arguments treat all creativity as H-creativity when most actual creative work is recombination.`,
              source: `Margaret Boden, "The Creative Mind" (1990)`,
            },
            {
              id: `e3`,
              text: `When photography was invented in the 1830s, many painters argued it would end painting as an art form. Painting didn't end; it shifted toward impressionism, abstraction, and conceptual work that photography couldn't do. The historical pattern of new tools expanding rather than killing creativity is strong.`,
              source: `History of art and technology; multiple analyses`,
            },
            {
              id: `e4`,
              text: `Boris Eldagsen won the 2023 Sony World Photography Award with an AI-generated image, then publicly refused the prize. His point: AI work shouldn't be in the same category as human photography. The categories themselves are confused, not just the works.`,
              source: `Eldagsen 2023 public statement; multiple news sources`,
            },
            {
              id: `e5`,
              text: `Holly Herndon created "Holly+," an AI version of her own voice that other artists can use under specific permissions, exploring what authorship even means when AI can replicate a voice. The project is a real experiment in new categories of creative work that don't fit older frameworks.`,
              source: `Holly Herndon Holly+ project documentation`,
            },
            {
              id: `e6`,
              text: `Most creative breakthroughs come from sustained engagement with a domain, exposure to many influences, and recombination of those influences in new ways. The romantic image of the lone creative genius producing original work from inspiration alone is mostly wrong as a description of how creativity actually works.`,
              source: `Multiple creativity research traditions including Csikszentmihalyi, Simonton`,
            },
            {
              id: `e7`,
              text: `The questions about training data (was it ethical to train on copyrighted work?), attribution (whose work is the output?), and labor displacement (what happens to working creatives whose niche AI can fill?) are genuinely new questions. Previous tool transitions didn't have the same structure. AI may be more like previous tools in some ways and less like them in others.`,
              source: `Multiple legal cases, ethics debates, labor research 2022-2026`,
            },
            {
              id: `e8`,
              text: `Some practicing creative professionals report that AI has expanded their creative range (sketching ideas faster, brainstorming variations, drafting in unfamiliar styles). Others report it has corroded their craft (less practice on the underlying skills, dependency on the model). The effects are real and variable across creators and use patterns.`,
              source: `Multiple reports from working creative professionals 2022-2026`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume 'creativity' is a coherent enough concept to debate clearly. But maybe it isn't. The concept has always been fuzzy: we apply it to scientific discoveries, paintings, business pivots, jokes, and recipe variations as if they were the same thing. AI just reveals how fuzzy the concept always was. Instead of debating whether AI is 'really' creative, we should focus on specific outputs and effects: does this particular AI-generated image bring something useful into the world? Does this AI-assisted writing process help this particular person say what they wanted to say? The abstract creativity debate may be unwinnable because 'creativity' was never one thing. Why think your position is meaningful when the underlying concept is this contested?"`,
            promptInstruction: `In 3-4 sentences, respond. Is the concept of "creativity" coherent enough to debate this way? Or should we just look at specific outputs and effects? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument you'd have trouble dismissing? Why?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "creativity" in research terms?`,
              options: [
                `Being artistic`,
                `Combination of novelty (new in some meaningful way) and value (useful, beautiful, or worth producing); pure novelty without value is randomness; pure value without novelty is competence; creativity sits at the intersection`,
                `A personality trait`,
                `Inspiration`,
              ],
              correctIndex: 1,
              explanation: `Most creative work involves recombining existing elements in new ways rather than pure invention from nothing. The romantic image of the lone creative genius is mostly wrong as a description of how creativity actually works.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is P-creativity vs H-creativity?`,
              options: [
                `Two letter types`,
                `Margaret Boden's distinction: P-creativity (psychologically new to creator), H-creativity (historically new to humanity); most creative work is P-creative; H-creativity is rare and builds on enormous amounts of P-creative work`,
                `Plus and minus`,
                `Practical vs historical`,
              ],
              correctIndex: 1,
              explanation: `Most pop arguments about AI creativity treat all creativity as H-creativity when most actual creative work, by humans or AI, is P-creative recombination. The distinction matters for having an accurate conversation.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the "creativity is fundamentally human" position argue?`,
              options: [
                `AI is broken`,
                `Real creativity requires lived experience, embodiment, intentional meaning-making, emotional stakes, a self with a perspective; AI recombines training data but doesn't do underlying creative work; defenders include working artists, Erik Hoel, late Roger Scruton`,
                `Humans are special`,
                `AI is fake`,
              ],
              correctIndex: 1,
              explanation: `Strong argument: AI outputs are statistically similar to training data and struggle with truly novel work. Limit: "lived experience" and "meaning-making" are hard to define precisely; the gap between "real" creativity and sophisticated recombination may be smaller than the position suggests.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the historical case for "AI is just another creative tool"?`,
              options: [
                `History repeats`,
                `Photography didn't kill painting (it shifted toward impressionism, abstraction); digital tools didn't kill physical art; sampling didn't destroy music; each tool expanded the creative landscape rather than destroying it; AI may follow the same pattern`,
                `Tools are good`,
                `Technology wins`,
              ],
              correctIndex: 1,
              explanation: `The historical pattern is real and strong. When photography emerged in the 1830s, many painters predicted painting's death. Painting shifted instead. Whether AI follows the same pattern or differs in kind is the open question.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did Boris Eldagsen do in 2023?`,
              options: [
                `Won a photo prize`,
                `Won the Sony World Photography Award with an AI-generated image, then publicly refused the prize to make a point that AI work shouldn't be in the same category as human photography; the categories themselves are confused, not just the works`,
                `Started an AI company`,
                `Critiqued AI`,
              ],
              correctIndex: 1,
              explanation: `Eldagsen's refusal made a clear argument: AI work and human photography aren't equivalent and shouldn't compete in the same category. He wasn't arguing AI is bad; he was arguing the categories need updating.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "intentionality" in the philosophical sense?`,
              options: [
                `Trying hard`,
                `The "aboutness" of mental states: thoughts are about things; meaning is created by minds directed at the world; some philosophers argue AI lacks intentionality (no perspective from which its outputs are "about" anything); contested concept`,
                `Goal-setting`,
                `Discipline`,
              ],
              correctIndex: 1,
              explanation: `Some philosophers argue AI lacks intentionality and therefore can't really "create." Others argue intentionality is overrated as a marker of meaningful work. The concept is genuinely contested by working philosophers.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is "authorship" contested in AI work?`,
              options: [
                `Random debate`,
                `Multiple parties contributed: AI lab that built the model, training data contributors (often unaware), human who prompted, human who selected/refined; no settled framework yet; active legal, ethical, aesthetic debate`,
                `AI doesn't exist`,
                `Authors don't matter`,
              ],
              correctIndex: 1,
              explanation: `Pre-AI, authorship was usually clear (the person who made it). With AI, contributions are distributed across multiple parties with no established way to attribute the result. Active legal cases are working through this in real time.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "aesthetic relativism" and why is it a risk?`,
              options: [
                `Loving all art`,
                `View that aesthetic judgments are entirely subjective and no work can be meaningfully compared to another; risk of "AI creates new categories" position sliding into this; makes art criticism meaningless and prevents meaningful judgments`,
                `Modern art theory`,
                `Subjective opinion`,
              ],
              correctIndex: 1,
              explanation: `Aesthetic pluralism (multiple legitimate criteria, but real judgments possible within each) is different from relativism. "AI creates new categories" can become relativism if it's used to dodge the question of whether any work is better than other work.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Many thoughtful people hold elements of all three. The exercise of committing to one as your primary framing forces clearer articulation; the honest answer involves uncertainty. The technology and the cultural conversation are both still developing.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "AI is just going to make everyone equally creative; there'll be no difference between artists and non-artists." Based on this lesson, what's the most useful response?`,
              options: [
                `"Yes, equality everywhere"`,
                `"That's the optimistic version of one position (AI as democratizing tool). It's not what most working creatives or critics actually think happens. AI lowers some barriers to producing outputs that look creative, but taste, vision, and the ability to identify what's actually good remain unevenly distributed and require deep engagement to develop. The kid with the AI tool plus 10,000 hours of careful taste-building will outperform the kid with the same tool and no developed taste. AI changes some things; not everything. Some specific things AI does well (variations, drafts, sketches) and some it doesn't (knowing what's worth making, refining a piece to actually land). The full picture is more nuanced than either 'AI kills creativity' or 'AI makes everyone creative.'"`,
                `"AI is fake"`,
                `"Artists are obsolete"`,
              ],
              correctIndex: 1,
              explanation: `Real applied creativity-and-AI literacy. Don't fully agree or fully disagree; identify the specific claim and engage with it carefully. AI does lower some barriers but doesn't equalize taste, vision, or the deeper skills creative work requires. The honest framing acknowledges what AI changes and what it doesn't.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a working framework for AI and creativity, or was it mostly the loud pop framings? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position do you find emotionally appealing vs intellectually convincing? Are they the same or different? What does that reveal?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who creates things over the next 50 years, what role do you want AI to play in your own creative practice?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one creative practice you have or want (drawing, writing, music, video, code). How would you actually integrate AI into it? What would you keep doing without AI?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there positions the lesson didn't cover? What about the labor displacement question—does it deserve its own position? What about the training-data ethics question?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one working creative who uses AI thoughtfully (Holly Herndon, Refik Anadol, others). Read or watch what they actually say about it. Real practitioners often have more nuanced takes than viral content.` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Creativity in the AI era shapes how you'll create for the rest of your life. Two paths.`,
          familyActivity: {
            title: `The Family AI Creativity Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share the three positions. Ask each family member which position resonates and why. Most family members will discover they have implicit views shaped by the loudest pop arguments without realizing the more serious positions exist. The conversation often surfaces real disagreements (some family members may have been laid off or affected by AI; others may use AI productively). Naming the positions makes the disagreements more productive.`,
          },
          projectOption: {
            title: `Run A Creative Experiment Across All Three Positions, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Pick a creative practice (writing, drawing, music, video, code). Spend one week creating with no AI tools at all. Spend the next week using AI as a tool to expand what you can do. Spend the third week deliberately creating hybrid work that doesn't fit either purely human or purely AI categories. In the fourth week, reflect: which felt most generative, most honest, most useful? Write 2,000 words synthesizing what you learned. Real applied creativity-and-AI work at a level few adults try.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Running this experiment across three positions is genuinely formative for how they'll create over their lifetime.`,
          },
          identityQuestion: `If you spend your life creating things, what relationship do you want with AI tools? What part of your creative practice do you want to stay fully human, and what part are you happy to share with AI?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate three serious positions on AI and creativity without collapsing into pop framings.`,
            `A person who's intentional about which parts of my creative practice are AI-augmented and which aren't.`,
            `Someone willing to think about authorship, originality, and labor as real questions instead of slogans.`,
          ],
          saveKey: `identity_responses_fs_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighth Future Skills lesson done. You can now articulate three serious positions on AI and creativity (fundamentally human, AI as tool, AI as genuinely new category), distinguish P-creativity from H-creativity, recognize the contested status of authorship and intentionality in AI work, and engage with this question more thoughtfully than most adults. Real names: Margaret Boden, Erik Hoel, Holly Herndon, Boris Eldagsen, Refik Anadol, Sasha Stiles, Kevin Kelly. Your generation will spend the next 50 years working out what creativity in the AI era looks like; you're starting with frameworks most adults haven't built. Next time we go into one of the most important meta-skills for an unpredictable future: adaptability. Three real cases. Case Study format. Let's go. — Byte`,
          badge: `creative-thinker`,
          badgeName: `Creative Thinker`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious positions on AI and creativity`,
            `Knows P-creativity vs H-creativity distinction (Boden)`,
            `Recognizes contested status of authorship and intentionality in AI work`,
            `Knows working creatives and theorists across multiple positions (Hoel, Herndon, Eldagsen, Anadol, Kelly)`,
            `Can engage with creativity-and-AI questions without collapsing into pop framings`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Adaptability and Change`,
            hook: `Three real cases where adaptability mattered. The meta-skill for an unpredictable future. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L08 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
