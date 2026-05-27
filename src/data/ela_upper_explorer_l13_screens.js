// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L13 — The Explanatory Essay: Structure and Clarity
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS W.4.2 / W.5.2 — Write informative/explanatory texts to convey ideas
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — inform vs persuade, organization patterns, precision and
//        clarity, intros and conclusions
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-13`,
      title: `The Explanatory Essay: Structure and Clarity`,
      duration: 18,
      xpReward: 75,
      badge: `explanation-expert`,
      badgeName: `Explanation Expert`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. An argumentative essay tries to CHANGE your reader's mind. An explanatory essay tries to HELP them understand. Encyclopedias, science reports, how-to articles, instruction manuals, news features. All explanatory writing. Today you'll learn how to write something that makes a complicated topic clear, without taking sides, without selling anything. Just clean, well-organized understanding. Let's go.`,
          headline: `The Explanatory Essay`,
          subtitle: `How to make complicated things clear`,
          visual: `/ue-assets/ela/l13-welcome.webp`,
        },

        // ── SECTION 1 — INFORM, NOT PERSUADE ──────────────────────────────────
        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Inform, Don't Persuade`,
          paragraphs: [
            `The biggest difference between explanatory and argumentative writing is purpose. Argumentative writing says "you should believe this." Explanatory writing says "here is how this works." An argumentative essay says recycling SHOULD be mandatory. An explanatory essay says here is how recycling works, what cities require it, and what the environmental effects are.`,
            `The tone of explanatory writing is neutral. You're not picking a side. You're not pushing the reader. You're laying out information clearly so they can understand a topic on their own. This is harder than it sounds, because most writers naturally lean into opinion. Discipline yourself. State facts. Define terms. Let the reader form their own conclusions.`,
          ],
          image: `/ue-assets/ela/l13-s1-inform-not-persuade.webp`,
          imageCaption: `Argumentative = change minds. Explanatory = build understanding.`,
          vocab: [
            { word: `explanatory`,
              definition: `Writing whose purpose is to inform or explain, not to persuade.`,
              audioPrompt: `Explanatory writing is writing meant to inform, {name}. Not to take a side. Not to sell. Just to help the reader understand a topic clearly. Encyclopedias. Science articles. How-to guides. Instruction manuals. All explanatory. The tone stays neutral, the goal stays clear: help the reader learn. Most of the nonfiction you read in your life will be explanatory.` },
            { word: `informative`,
              definition: `Another term for explanatory writing — writing that conveys knowledge or understanding without taking a side.`,
              audioPrompt: `Informative writing is writing that gives the reader knowledge, {name}. It's another word for explanatory. Informative writing doesn't argue. It doesn't sell. It explains. A science article. A documentary. An encyclopedia entry. All informative. The standard is clear: does the reader leave knowing more than they did before? If yes, the writing did its job.` },
          ],
        },

        // ── SECTION 2 — ORGANIZATION PATTERNS ─────────────────────────────────
        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pick the Right Organization`,
          paragraphs: [
            `Explanatory essays use one of four common patterns. CHRONOLOGICAL: explaining a process step by step in time order. CATEGORICAL: grouping information by type or group. CAUSE AND EFFECT: explaining why something happens. COMPARE AND CONTRAST: showing similarities and differences between two things.`,
            `Pick the pattern that matches your topic. Explaining how to make a cake? Chronological. Describing different types of clouds? Categorical. Explaining what caused a war? Cause and effect. Comparing two countries' education systems? Compare and contrast. The wrong pattern makes everything harder. The right pattern makes the essay almost write itself.`,
          ],
          image: `/ue-assets/ela/l13-s2-organization.webp`,
          imageCaption: `Four common patterns. Pick the one that matches your topic.`,
          vocab: [
            { word: `organization`,
              definition: `The pattern an explanatory essay uses to structure information clearly: chronological, categorical, cause and effect, or compare and contrast.`,
              audioPrompt: `Organization is the pattern your essay follows, {name}. Step-by-step (chronological). By type or group (categorical). Why something happens (cause and effect). Comparing two things (compare and contrast). The right organization pattern makes complicated topics easy to follow. The wrong one makes simple topics feel confusing. Picking the pattern is one of the first decisions you make when writing explanatory text.` },
            { word: `structure`,
              definition: `The overall framework that holds an essay together — how the introduction, body, and conclusion are arranged and connected.`,
              audioPrompt: `Structure is the overall framework of an essay, {name}. Not just the organization pattern within the body — the full shape from introduction through conclusion. Good structure means each section flows naturally into the next. The reader always knows where they are. The organization pattern (chronological, categorical, etc.) is part of structure, but structure also includes how your intro sets up the body and how your conclusion ties everything together.` },
          ],
        },

        // ── SECTION 3 — PRECISION AND CLARITY ─────────────────────────────────
        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Be Precise, Not Vague`,
          paragraphs: [
            `Every sentence in explanatory writing should add real understanding. Avoid vague language. Don't write "many scientists think." Write "according to a 2023 study by MIT researchers, 78% of climate scientists agree." Don't write "it is really important." Explain WHY it matters, with specifics. Vague writing leaves the reader confused. Precise writing leaves them informed.`,
            `Define technical terms the first time you use them. Use concrete examples to make abstract ideas easier to grasp. Read your sentences out loud. If a sentence makes YOU pause, your reader will too. The job of explanatory writing isn't to sound smart. It's to make the topic clear. Strong writers are obsessive about this. If a reader gets lost, the writer failed.`,
          ],
          image: `/ue-assets/ela/l13-s3-precision.webp`,
          imageCaption: `Specific beats general. Concrete beats abstract. Every time.`,
          vocab: [
            { word: `clarity`,
              definition: `How easy a piece of writing is to understand. Specific examples, defined terms, and direct sentences create clarity.`,
              audioPrompt: `Clarity is how easy your writing is to understand, {name}. Vague language creates confusion. Specific details create clarity. Defined terms create clarity. Concrete examples create clarity. The goal of explanatory writing isn't to sound smart. It's to make the topic clear. If your reader has to reread a sentence, you didn't write it clearly enough.` },
            { word: `precision`,
              definition: `Using exact, specific language instead of vague or general words. Precision makes explanatory writing trustworthy and clear.`,
              audioPrompt: `Precision means using exact, specific language, {name}. Not "many scientists think" — but "78% of climate scientists in a 2023 MIT study agree." Not "it is really important" — but a specific explanation of why it matters. Precision is what makes explanatory writing trustworthy. Vague language makes readers wonder if you actually know what you're talking about. Specific language shows you do.` },
          ],
        },

        // ── SECTION 4 — INTROS AND CONCLUSIONS ────────────────────────────────
        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Introductions and Conclusions`,
          paragraphs: [
            `The introduction has three jobs. Present the topic. Explain why it matters. Preview the main points you're going to cover. A weak intro starts with "this essay is about X." A strong intro hooks the reader with something interesting (a surprising fact, a relatable scenario, a quick story) and then transitions into what the essay will cover.`,
            `The conclusion summarizes the key information and leaves the reader with a clear understanding. Don't introduce new facts in the conclusion. Don't try to argue something at the end. The reader should finish thinking "now I understand this." A strong conclusion reinforces the most important takeaways and lands cleanly.`,
          ],
          image: `/ue-assets/ela/l13-s4-intros-conclusions.webp`,
          imageCaption: `Intro: hook + topic + preview. Conclusion: recap + clear ending.`,
          vocab: [
            { word: `introduction`,
              definition: `The opening paragraph of an essay. Presents the topic, explains why it matters, and previews the main points.`,
              audioPrompt: `The introduction is your opening paragraph, {name}. Three jobs. Present the topic. Explain why it matters. Preview the main points the essay will cover. Strong intros hook the reader with something interesting before launching into the topic. Weak intros announce the essay's existence and bore the reader before the real content starts.` },
            { word: `hook`,
              definition: `An engaging opening line or sentence designed to capture the reader's attention at the start of an essay.`,
              audioPrompt: `A hook is the opening move of an introduction, {name}. A surprising fact. A bold question. A short vivid scene. Something that makes the reader want to keep going before the essay has even explained what it's about. A weak intro says "this essay is about X." A strong intro has a hook that makes the reader already curious before you state the topic. Start with something interesting. The topic can come second.` },
          ],
        },

        // ── INTERACTIVE GAME — Organization Pattern Investigation ─────────────
        {
          id: `l13-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four explanatory writing situations. For each one, decide which ORGANIZATION pattern fits best: CHRONOLOGICAL (step-by-step), CATEGORICAL (by type), CAUSE AND EFFECT, or COMPARE AND CONTRAST.\n\nOne is trickier than it looks.`,
          options: [
            { id: `chronological`,         label: `Chronological`,         color: `#60A5FA`, description: `Step-by-step in time order. Processes, instructions, histories.` },
            { id: `categorical`,           label: `Categorical`,           color: `#A78BFA`, description: `By type or group. "There are four kinds of..." structure.` },
            { id: `cause-and-effect`,      label: `Cause and Effect`,      color: `#FBBF24`, description: `Explains why something happens or what the results are.` },
            { id: `compare-and-contrast`,  label: `Compare and Contrast`,  color: `#34D399`, description: `Two things examined for similarities and differences.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Topic #1: How a Bill Becomes a Law in the US`,
              clues: [
                { text: `The topic walks through what happens first, second, third, and so on.` },
                { text: `Each step depends on the one before it.` },
                { text: `Time order is the natural way to explain the process.` },
              ],
              correctAnswer: `chronological`,
              realWorldExample: `Standard structure for any process explanation.`,
              explanation: `Step-by-step, in order. Chronological organization. The process can't really be explained any other way without confusing the reader.`,
            },
            {
              id: `case-2`,
              caseTitle: `Topic #2: Public Schools vs Private Schools`,
              clues: [
                { text: `Two systems being examined.` },
                { text: `The essay looks at how they're similar and how they're different.` },
                { text: `The reader should walk away understanding both.` },
              ],
              correctAnswer: `compare-and-contrast`,
              realWorldExample: `Classic comparison essay structure.`,
              explanation: `Two things, looking at similarities and differences. Compare and contrast. Could be organized point-by-point or block-by-block, but the underlying pattern is comparison.`,
            },
            {
              id: `case-3`,
              caseTitle: `Topic #3: Types of Renewable Energy`,
              clues: [
                { text: `Solar. Wind. Hydro. Geothermal. Biomass.` },
                { text: `Each is described separately, with its own characteristics.` },
                { text: `The topic isn't a process or a comparison. It's a list of types.` },
              ],
              correctAnswer: `categorical`,
              realWorldExample: `Standard structure for any "types of" topic.`,
              explanation: `Grouped by type. Categorical organization. Each category gets its own section. No time order, no comparison, no causation. Just a clear grouping.`,
            },
            {
              id: `case-4`,
              caseTitle: `Topic #4: The Fall of the Roman Empire — The Tricky One`,
              clues: [
                { text: `Could be explained step-by-step (chronological).` },
                { text: `Could focus on the reasons it fell (cause and effect).` },
                { text: `Most historians actually explain it as CAUSES that led to EFFECTS, not as a timeline.` },
              ],
              correctAnswer: `cause-and-effect`,
              realWorldExample: `Same topic can fit different patterns depending on the angle.`,
              explanation: `Tricky one. You COULD write this chronologically (here's what happened in 100 AD, then 200, then 300). But most strong essays on this topic focus on causes (military weakness, economic problems, political instability) and effects (collapse). Cause-and-effect fits the actual analysis better than a timeline does. Same topic, different angle, different best pattern. Picking the pattern that matches your specific angle, not just your topic, is the real skill.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `How is EXPLANATORY writing different from ARGUMENTATIVE writing?`,
              options: [
                `They're the same`,
                `Explanatory writing informs without taking a side; argumentative writing takes a position and tries to convince the reader`,
                `Explanatory writing is always shorter`,
                `Argumentative writing uses facts; explanatory uses opinions`,
              ],
              correctIndex: 1,
              explanation: `The biggest difference is purpose. Explanatory writing helps the reader understand. Argumentative writing tries to change their mind. Tone, language, and structure all flow from that difference.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What's the goal of an EXPLANATORY essay?`,
              options: [
                `To convince the reader you're right`,
                `To help the reader understand a topic clearly`,
                `To entertain with a creative story`,
                `To express your personal feelings`,
              ],
              correctIndex: 1,
              explanation: `Clarity over persuasion. The reader should walk away knowing more, not feeling pushed to a conclusion.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `Why is PRECISE language important in explanatory writing?`,
              options: [
                `To impress the reader with vocabulary`,
                `Because vague language confuses readers; specific details and defined terms create clarity`,
                `Precise language is only needed in science`,
                `It makes the essay longer`,
              ],
              correctIndex: 1,
              explanation: `Vague writing leaves readers confused. Precise writing leaves them informed. Specific examples, defined terms, and direct sentences are what clarity actually looks like.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `Which organization pattern explains a step-by-step process?`,
              options: [
                `Compare and contrast`,
                `Chronological — events or steps in time order`,
                `Cause and effect`,
                `Categorical`,
              ],
              correctIndex: 1,
              explanation: `Chronological organization moves through time. Recipes, historical events, biographies, and instructions all use this pattern.` },

            { id: `l13-q5`, format: `true-false`,
              question: `True or false: The conclusion of an explanatory essay should introduce one new important fact at the end.`,
              correctAnswer: false,
              explanation: `False. Conclusions summarize what's already been said and leave the reader with clear understanding. Saving new information for the conclusion means burying important content where readers don't expect it.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `You're writing about "Types of Renewable Energy." Best organization pattern?`,
              options: [
                `Chronological — by date discovered`,
                `Categorical — by type (solar, wind, hydro, etc.)`,
                `Cause and effect — why it exists`,
                `Compare and contrast — versus fossil fuels`,
              ],
              correctIndex: 1,
              explanation: `When your topic is a list of types or kinds, categorical is the natural fit. Each type gets its own section with its own characteristics.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `You're writing about "The Fall of the Roman Empire." Which is most likely the best organization?`,
              options: [
                `Categorical — types of Romans`,
                `Cause and effect — why it fell and what happened as a result`,
                `Compare and contrast — Rome vs Greece`,
                `Chronological order only — never any other way`,
              ],
              correctIndex: 1,
              explanation: `Most strong essays on this topic focus on causes and effects rather than a timeline. The angle determines the pattern. Same topic could be written chronologically, but cause-and-effect usually fits the actual analysis better.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `What should an explanatory essay's INTRODUCTION do?`,
              options: [
                `Take a position and start arguing`,
                `Present the topic, explain why it matters, and preview the main points to come`,
                `Tell a long personal story`,
                `List all the sources used`,
              ],
              correctIndex: 1,
              explanation: `Three jobs for the intro: present, justify, preview. Strong intros hook the reader before launching into the topic. Weak intros simply announce the essay's existence.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a topic you understand really well that you could explain clearly to someone else?` },
            { id: `r2`, text: `Have you ever read something explanatory that was really confusing? What made it hard to follow?` },
            { id: `r3`, text: `Why is staying neutral often harder than taking a side?` },
            { id: `r4`, text: `Which organization pattern (chronological, categorical, cause/effect, compare/contrast) feels most natural to you, and why?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Most of the writing you'll do in your life will be explanatory, not argumentative. Reports at work. Instructions for someone learning your job. Documentation for a project. Emails explaining a decision. Even teaching anyone anything is explanatory writing in spoken form. The ability to make a complicated topic clear is one of the most valued skills in every career. People who can explain things well move up faster, get listened to more, and become trusted by everyone around them.`,
          familyAdventure: `Each family member takes 2 minutes to explain something they know well, to an imagined audience that knows nothing about it. The rules: be clear, define your terms, give a concrete example, and don't show off. After each explanation, the audience rates clarity on a 1-5 scale and offers one suggestion. This is explanatory communication at its purest, and it's harder than it sounds.`,
          creativePrompt: {
            intro: `Pick a process or concept you understand well. Write a mini explanatory essay.`,
            floor: `Write at least 5 sentences. Pick an organization pattern. State your topic. Cover one main aspect clearly with a concrete example.`,
            stretch: `Write 8 to 10 sentences. Full structure: intro (topic + why it matters), two body paragraphs covering different aspects, and a clean conclusion. Use the right organization pattern for your topic.`,
            open: `Write as much as you want. Build a complete explanatory essay with a hook intro, three or four body sections, defined terms, concrete examples, and a clean conclusion.`,
            frames: [
              `My topic is ___.`,
              `It matters because ___.`,
              `The first thing to know is ___.`,
              `For example, ___.`,
              `The main takeaway is ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now tell explanatory from argumentative writing, pick the right organization pattern for any topic, use precise and clear language, and structure introductions and conclusions that actually work. Next lesson: we get into the most personal of all writing forms. Narrative essays. How do you tell a real story with voice, pacing, and meaning? See you there. — Quill.`,
          badge: `explanation-expert`,
          badgeName: `Explanation Expert`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
