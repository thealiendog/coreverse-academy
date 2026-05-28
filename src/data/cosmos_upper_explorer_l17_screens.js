// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L17 — Are We Alone? The Search for Extraterrestrial Life
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS1 (extension); science practices — evidence/reasoning
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify claims as real evidence / not / inconclusive)
// SCOPE: 4 concepts — the question, where life might be, how we search,
//        thinking carefully about evidence
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-17`,
      title: `Are We Alone? The Search for Extraterrestrial Life`,
      duration: 18,
      xpReward: 75,
      badge: `life-seeker`,
      badgeName: `Cosmic Life Seeker`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Today we tackle one of the biggest questions humans have ever asked: ARE WE ALONE in the universe? Is there life on other worlds, or is Earth the only place where it exists? This is a question people have wondered about for thousands of years. But here's what makes our time special: for the first time in history, we have the science and technology to actually SEARCH for an answer. Today we'll explore the question like real scientists, carefully and with open minds. Let's begin.`,
          headline: `Are We Alone?`,
          subtitle: `One of humanity's biggest questions, now actually searchable`,
          visual: `/ue-assets/cosmos/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Biggest Question`,
          paragraphs: [
            `"Are we alone?" is a question that connects everything you've learned in this subject. We've seen that the universe contains TRILLIONS of galaxies, each with billions of stars, and that planets are extremely common, likely more planets than stars. We've learned that life on Earth is made of common ingredients (the same atoms found throughout the cosmos) and that life here is incredibly tough, surviving even in deep-sea vents with no sunlight. So the question becomes: with SO many worlds out there, and life being so resourceful, is Earth really the only place where life arose?`,
            `Here's the honest scientific answer: we DON'T KNOW yet. And that's perfectly okay. Good scientists are comfortable saying "we don't know" while they keep searching. There are two possibilities, and both are mind-blowing. If we're ALONE, then life and consciousness are extraordinarily rare and precious, and Earth is the most special place we know of. If we're NOT alone, then the universe may be teeming with life, and we're part of a much bigger story. Either answer would be one of the most profound discoveries in human history. That's what makes this question so exciting to explore.`,
          ],
          image: `/ue-assets/cosmos/l17-s1-question.webp`,
          imageCaption: `Trillions of worlds, tough and common life. Are we alone? Honestly: we don't know yet.`,
          vocab: [
            {
              word: `extraterrestrial`,
              definition: `Coming from or existing beyond Earth. "Extraterrestrial life" means any living thing that exists somewhere other than Earth, from simple microbes to (hypothetically) intelligent beings.`,
              audioPrompt: `Extraterrestrial means coming from or existing beyond Earth, {name}. The prefix extra means beyond, and terrestrial refers to Earth. So extraterrestrial life means any living thing that exists somewhere other than our planet. That could range from simple microbes, the most likely kind, all the way to intelligent beings, which is far less certain. The honest scientific answer to whether any extraterrestrial life exists is: we don't know yet. But for the first time in history, we have the technology to actually search.`,
            },
            {
              word: `microbial life`,
              definition: `Living things made of single cells or very simple structures, like bacteria. Scientists consider microbial life far more likely to exist on other worlds than complex, intelligent life, because simple life appeared on Earth billions of years before intelligence evolved.`,
              audioPrompt: `Microbial life refers to living things made of single cells or very simple structures, {name}. Bacteria are the most familiar example. Scientists looking for life beyond Earth focus mostly on microbial life, because it is far more likely than complex, intelligent beings. Here's why: simple life appeared on Earth very quickly after the planet formed. But complex, intelligent life took billions more years to evolve. So if life exists somewhere else, the odds favor something small and simple, not an advanced civilization.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where Might Life Exist?`,
          paragraphs: [
            `When scientists search for life, they mostly look for the kind we understand: life that needs LIQUID WATER, energy, and certain chemical ingredients. Surprisingly, there are several promising places to look even within our OWN solar system. Mars once had rivers and lakes, and may still have water underground, so it might host (or have hosted) simple microbial life. Some moons of Jupiter and Saturn, like Europa and Enceladus, have vast oceans of liquid water hidden beneath icy shells, kept warm by the planet's gravity. These hidden oceans are some of the most exciting places to search for life nearby.`,
            `Beyond our solar system, scientists study the EXOPLANETS we learned about, especially rocky ones in the habitable zone. Powerful telescopes can now analyze the atmospheres of some distant planets, looking for "biosignatures," gases that might be produced by living things. Importantly, scientists expect that if we find life, it will most likely be SIMPLE life, like microbes, not advanced aliens. Simple life appeared on Earth very quickly, while complex, intelligent life took billions more years and may be far rarer. Finding even a single microbe on another world would be one of the most important discoveries ever, proving life isn't unique to Earth.`,
          ],
          image: `/ue-assets/cosmos/l17-s2-where.webp`,
          imageCaption: `Mars, hidden moon-oceans, habitable exoplanets: scientists search for liquid water first.`,
          vocab: [
            {
              word: `biosignature`,
              definition: `A sign that could indicate the presence of life, such as certain gases in a planet's atmosphere that living things tend to produce. Scientists search for biosignatures on distant worlds.`,
              audioPrompt: `A biosignature is a sign that could indicate the presence of life, {name}. The most studied kind is certain gases in a planet's atmosphere that living things tend to produce. On Earth, life fills the air with gases like oxygen. So if scientists detect similar gases around a distant exoplanet, it might hint that life is there. Powerful telescopes can now analyze exoplanet atmospheres looking for these biosignatures. But scientists are careful: a biosignature is a clue, not proof, because some gases can also have non-living sources.`,
            },
            {
              word: `liquid water`,
              definition: `Water in its liquid form, neither frozen nor vapor. Scientists searching for life focus on liquid water because all known life requires it. That's why they study Mars (which had ancient rivers) and ocean-moons hidden beneath ice.`,
              audioPrompt: `Liquid water is one of the most important things scientists look for when searching for life, {name}. All known life needs liquid water to survive. This is why scientists search for it everywhere they can. Mars once had rivers and lakes, and might still have liquid water underground. Some moons of Jupiter and Saturn, like Europa and Enceladus, hide vast oceans beneath their icy shells. These are among the most exciting places to search nearby. Where liquid water exists, life might too.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How We Search`,
          paragraphs: [
            `Scientists search for life in several ways. ROBOTIC EXPLORERS like rovers on Mars dig, drill, and test soil and rocks for signs of past or present life. Future missions may send probes to the icy moons with hidden oceans. SPACE TELESCOPES study the light from distant exoplanets, breaking it apart to detect the gases in their atmospheres. And there's the search for intelligent life, called SETI (the Search for Extraterrestrial Intelligence), which uses giant radio telescopes to listen for signals that might be sent by an advanced civilization.`,
            `Scientists also think carefully about the odds using tools like the "Drake Equation," a way to estimate how many communicating civilizations might exist in our galaxy by multiplying together factors like the number of stars, how many have planets, how many could support life, and so on. The honest result? The factors are so uncertain that the equation can't give a firm answer, but it helps scientists think clearly about the question. There's also a famous puzzle called the "Fermi Paradox": if the universe is so big and old, and life might be common, then where IS everybody? Why haven't we found clear evidence yet? Nobody knows the answer, and that mystery is part of what drives the search forward.`,
          ],
          image: `/ue-assets/cosmos/l17-s3-search.webp`,
          imageCaption: `Rovers, telescopes, and radio listening (SETI): many ways to search for life.`,
          vocab: [
            {
              word: `SETI`,
              definition: `The Search for Extraterrestrial Intelligence: scientists using giant radio telescopes to listen for signals that might be sent by an advanced alien civilization. So far, no confirmed signal has been found.`,
              audioPrompt: `SETI stands for the Search for Extraterrestrial Intelligence, {name}. It's the effort by scientists to find signs of intelligent life beyond Earth. SETI mainly uses giant radio telescopes to listen for signals from an advanced civilization, like messages or patterns nature wouldn't make on its own. So far, despite decades of listening, no confirmed signal has been found. This is part of the famous Fermi Paradox: if the universe is so big and old, where is everybody? Nobody knows, and that mystery keeps scientists searching.`,
            },
            {
              word: `radio telescope`,
              definition: `A large scientific instrument that detects radio waves from space. Radio telescopes are used by SETI to listen for possible signals from intelligent life, and by astronomers to study galaxies, pulsars, and other distant objects that don't emit visible light.`,
              audioPrompt: `A radio telescope is a large scientific instrument that detects radio waves from space, {name}. Radio waves are a type of energy that travels through space and can carry information across enormous distances. SETI uses giant radio telescopes to listen for signals that might be sent by an advanced civilization. But radio telescopes have many other uses too. Astronomers use them to study distant galaxies, the cosmic background glow from the Big Bang, and objects that don't emit visible light. They open a different window onto the universe.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Thinking Carefully About Evidence`,
          paragraphs: [
            `Here's one of the most important lessons of this whole subject, and it applies far beyond aliens. When it comes to extraordinary claims, scientists demand strong EVIDENCE before believing. Over the years, there have been many exciting "signals" and "discoveries" that seemed to suggest alien life, only to turn out to be something ordinary: a malfunctioning instrument, a natural process, a passing satellite, or even a microwave oven in the building. Scientists have a wise saying: "extraordinary claims require extraordinary evidence." Being excited is fine, but jumping to conclusions is not science.`,
            `This careful thinking is a SUPERPOWER you can use everywhere in life, not just in astronomy. When you hear an amazing claim (about anything), good thinking asks: What's the actual evidence? Could there be a simpler explanation? Has it been checked by others? This doesn't mean being closed-minded; it means being CAREFULLY open-minded, willing to believe amazing things, but only when the evidence is strong. Nova's teaching: whether we eventually find life out there or not, the SEARCH itself teaches us to think clearly, stay curious, and respect evidence. And it fills us with wonder at our place in the cosmos. Whether we're alone or not, asking the question makes us look up, think hard, and appreciate how precious life truly is. That's worth everything.`,
          ],
          image: `/ue-assets/cosmos/l17-s4-evidence.webp`,
          imageCaption: `Extraordinary claims require extraordinary evidence. Be carefully open-minded.`,
          vocab: [
            {
              word: `evidence`,
              definition: `Facts, observations, or data that support or test a claim. In science, extraordinary claims require extraordinary evidence. Good thinkers ask what the evidence is before believing something amazing.`,
              audioPrompt: `Evidence is facts, observations, or data that support or test a claim, {name}. In science, the strength of evidence determines how much we should believe something. There's a wise saying: extraordinary claims require extraordinary evidence. Many exciting signals once seemed to suggest alien life, but turned out to be something ordinary, like a microwave oven. Being excited is fine, but jumping to conclusions is not science. When you hear any amazing claim, ask: what's the actual evidence? Could there be a simpler explanation? This careful habit is useful everywhere.`,
            },
            {
              word: `critical thinking`,
              definition: `The practice of carefully examining evidence and reasoning before accepting a claim as true. Good critical thinking asks: what's the evidence? Could there be a simpler explanation? Has it been checked by others? It helps you avoid being misled by amazing-sounding claims.`,
              audioPrompt: `Critical thinking is the practice of carefully examining evidence before accepting a claim as true, {name}. Good critical thinkers ask questions like: what's the actual evidence? Could there be a simpler explanation? Has it been checked by other people? This doesn't mean being closed-minded or doubting everything. It means being carefully open-minded, willing to believe amazing things, but only when the evidence is strong. Critical thinking is one of the most valuable skills you can develop, useful in science, daily life, and everywhere in between.`,
            },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. A scientist hears four different reports about possible alien life. Thinking carefully like a real scientist, classify each one: REAL EVIDENCE (a genuine, well-supported sign worth taking seriously), NOT EVIDENCE (turned out to be something ordinary), or INCONCLUSIVE (interesting but not enough to conclude anything yet)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `real`,         label: `Real Evidence`,  color: `#34D399`, description: `A genuine, well-supported sign of life worth taking seriously.` },
            { id: `notevidence`,  label: `Not Evidence`,   color: `#F87171`, description: `Exciting at first, but turned out to be something ordinary.` },
            { id: `inconclusive`, label: `Inconclusive`,   color: `#FBBF24`, description: `Interesting, but not enough to conclude anything yet. Needs more study.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Report #1`,
              clues: [
                { text: `A telescope detects a strange radio signal that seems to come from space.` },
                { text: `After investigation, scientists trace it to a microwave oven in the telescope's own building.` },
                { text: `The "signal" appeared only when staff heated their lunch.` },
              ],
              correctAnswer: `notevidence`,
              realWorldExample: `This really happened at a radio observatory in Australia.`,
              explanation: `An ordinary microwave oven, not aliens. Pure "not evidence." This actually happened. A mysterious signal turned out to be staff heating lunch. It's a perfect example of why scientists investigate carefully before getting excited.`,
            },
            {
              id: `case-2`,
              caseTitle: `Report #2`,
              clues: [
                { text: `A rover on Mars finds a rock with chemical patterns that COULD have been made by ancient microbes.` },
                { text: `But the same patterns could also be made by non-living chemical processes.` },
                { text: `Scientists say more study is needed before drawing any conclusion.` },
              ],
              correctAnswer: `inconclusive`,
              realWorldExample: `Mars rovers have found intriguing but ambiguous chemistry.`,
              explanation: `Interesting, but it could be life OR non-living chemistry, so we can't conclude yet. Pure inconclusive. This is exactly how careful science works: an intriguing clue that needs much more study before anyone claims it's evidence of life.`,
            },
            {
              id: `case-3`,
              caseTitle: `Report #3`,
              clues: [
                { text: `A blurry photo online claims to show a "UFO," but it's out of focus and could be many things.` },
                { text: `There's no way to verify it, check it, or rule out ordinary explanations like a bird, drone, or lens flare.` },
                { text: `No other instruments or witnesses recorded anything.` },
              ],
              correctAnswer: `notevidence`,
              realWorldExample: `Most "UFO" photos have ordinary explanations.`,
              explanation: `A blurry, unverifiable photo with many possible ordinary explanations isn't evidence of aliens. Pure "not evidence." Remember: extraordinary claims require extraordinary evidence. A fuzzy picture that could be a bird or a drone doesn't come close.`,
            },
            {
              id: `case-4`,
              caseTitle: `Report #4 — The Tricky One`,
              clues: [
                { text: `A telescope detects a specific gas in a distant exoplanet's atmosphere that, on Earth, is mostly made by living things.` },
                { text: `The detection is real and has been double-checked by the instruments.` },
                { text: `BUT scientists know that gas can sometimes also be made by non-living processes, and they haven't ruled those out.` },
              ],
              correctAnswer: `inconclusive`,
              realWorldExample: `Real biosignature detections face exactly this challenge.`,
              explanation: `Tricky! The detection is REAL and verified, so you might say "real evidence." But here's the careful-scientist catch: that gas can ALSO be made by non-living processes that haven't been ruled out. So while it's a genuine, exciting CLUE, it's not yet proof of life. The honest classification is inconclusive: real data, but not enough to conclude life exists. Lesson: even a real, verified detection isn't automatically "evidence of aliens" if there's an ordinary explanation that hasn't been ruled out. This is the most important and hardest kind of scientific thinking: holding a clue as genuinely interesting while honestly admitting it doesn't yet prove the big claim. Real biosignature science works exactly this way.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is the honest scientific answer to "are we alone?"`,
              options: [
                `We're definitely alone`,
                `We don't know yet — and that's okay; scientists keep searching with open minds`,
                `Aliens definitely exist`,
                `It's impossible to study`,
              ],
              correctIndex: 1,
              explanation: `The honest answer is: we don't know yet. Good scientists are comfortable saying "we don't know" while they keep searching. Both possibilities (alone, or not alone) would be profound. For the first time in history, we can actually search for an answer.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `What does EXTRATERRESTRIAL mean?`,
              options: [
                `Very large`,
                `Coming from or existing beyond Earth`,
                `From the future`,
                `Underground`,
              ],
              correctIndex: 1,
              explanation: `Extraterrestrial means coming from or existing beyond Earth ("extra" = beyond, "terrestrial" = Earth). Extraterrestrial life means any living thing existing somewhere other than Earth, from simple microbes to (hypothetically) intelligent beings.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `Where do scientists look for life in our OWN solar system?`,
              options: [
                `Only the Sun`,
                `Mars (had water) and icy moons like Europa and Enceladus (with hidden oceans beneath their ice)`,
                `Nowhere nearby`,
                `Only on Earth`,
              ],
              correctIndex: 1,
              explanation: `Promising nearby places include Mars (which once had rivers and lakes) and the icy moons Europa and Enceladus, which hide vast oceans of liquid water beneath their frozen shells. Scientists look for liquid water because life as we know it needs it.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `If we find life beyond Earth, what kind will it MOST LIKELY be?`,
              options: [
                `Advanced aliens with spaceships`,
                `Simple life, like microbes — simple life appeared on Earth quickly, while intelligent life took billions more years`,
                `Exactly like humans`,
                `Giant monsters`,
              ],
              correctIndex: 1,
              explanation: `Scientists expect simple life (like microbes) is far more likely than advanced aliens. Simple life appeared on Earth quickly, but complex, intelligent life took billions more years and may be rare. Finding even one microbe elsewhere would be historic.` },

            { id: `l17-q5`, format: `multiple-choice`,
              question: `What is a BIOSIGNATURE?`,
              options: [
                `An alien's autograph`,
                `A sign that could indicate life, like certain gases in a planet's atmosphere that living things tend to produce`,
                `A type of telescope`,
                `A radio signal`,
              ],
              correctIndex: 1,
              explanation: `A biosignature is a sign that could indicate life, most often certain gases in a planet's atmosphere that living things tend to produce. Telescopes analyze exoplanet atmospheres looking for them. But a biosignature is a clue, not proof, since some gases have non-living sources too.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `What is SETI?`,
              options: [
                `A spaceship`,
                `The Search for Extraterrestrial Intelligence — using radio telescopes to listen for signals from advanced civilizations`,
                `A type of planet`,
                `A NASA rover`,
              ],
              correctIndex: 1,
              explanation: `SETI is the Search for Extraterrestrial Intelligence. It uses giant radio telescopes to listen for signals that might come from an advanced alien civilization. So far, despite decades of listening, no confirmed alien signal has been found.` },

            { id: `l17-q7`, format: `true-false`,
              question: `True or false: "Extraordinary claims require extraordinary evidence" is a wise rule scientists use.`,
              correctAnswer: true,
              explanation: `True. Many exciting "alien" signals turned out to be ordinary things (even a microwave oven once). Being excited is fine, but jumping to conclusions isn't science. Amazing claims need strong evidence. This careful thinking is useful everywhere in life.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `Why is the careful "what's the evidence?" mindset a superpower?`,
              options: [
                `It makes you closed-minded`,
                `It lets you stay curiously open to amazing things while only believing them when the evidence is strong — useful far beyond astronomy`,
                `It means never believing anything`,
                `It only works for aliens`,
              ],
              correctIndex: 1,
              explanation: `Being "carefully open-minded" means you're willing to believe amazing things, but only with strong evidence. Asking "what's the actual evidence? Is there a simpler explanation?" protects you from being fooled, about anything in life, not just aliens.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Do YOU think we're alone in the universe? There's no right answer. What makes you lean the way you do?` },
            { id: `r2`, text: `Both possibilities (alone, or not alone) are amazing. Which one would you find more meaningful to discover, and why?` },
            { id: `r3`, text: `"Extraordinary claims require extraordinary evidence." Can you think of an amazing claim you've heard where asking "what's the evidence?" would help?` },
            { id: `r4`, text: `If scientists found a single microbe on Mars tomorrow, how do you think it would change the way people see our place in the universe?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `The search for life beyond Earth is one of the most active frontiers in science, and you're alive at the perfect time to follow it. Space agencies are planning missions to Mars and the icy ocean moons. New telescopes are analyzing exoplanet atmospheres right now. And the careful, evidence-based thinking this search demands is a skill that serves you in every part of life: evaluating news, claims, advertisements, and ideas. Nova's note: whether or not we ever find life out there, the search makes us better thinkers and fills us with wonder. And it reminds us how precious life is, here on the one world we know for certain has it: our own.`,
          familyAdventure: `Family "Are We Alone?" Debate. As a family, have a friendly debate: do you think there's life elsewhere in the universe? Each person shares their view AND their reasoning (the evidence or logic behind it). The goal isn't to "win" but to practice thinking with evidence. Then look up a real space mission searching for life (like a Mars rover or a mission to Europa). You're engaging with one of humanity's biggest open questions, together.`,
          creativePrompt: {
            intro: `Imagine scientists just confirmed the discovery of simple life (microbes) on another world. Write the news story announcing it.`,
            floor: `Write at least 5 sentences. Describe where the life was found, how scientists confirmed it, and why it matters.`,
            stretch: `Write 8 to 10 sentences. Cover the discovery, how the evidence was carefully checked, what kind of life it is, and how it changes our view of the universe.`,
            open: `Write as much as you want. Write a full news story about the discovery of life beyond Earth. Describe where it was found and how, how scientists carefully ruled out ordinary explanations before announcing it (extraordinary claims need extraordinary evidence), what kind of life it is, how the world reacted, and what it means for humanity's understanding of our place in the cosmos. Make it exciting AND scientifically responsible.`,
            frames: [
              `In a historic announcement today, scientists confirmed ___.`,
              `The discovery was made by ___.`,
              `Before announcing it, scientists carefully ruled out ___.`,
              `The life appears to be ___.`,
              `This changes everything because ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You can now explore the question "are we alone?" like a scientist: knowing where life might exist, how we search, and (most importantly) how to think carefully about evidence. That last skill will serve you your whole life. Next lesson: we explore the strangest, most mind-bending science of all, the weird rules of the very smallest things. QUANTUM PHYSICS. See you there. — Nova.`,
          badge: `life-seeker`,
          badgeName: `Cosmic Life Seeker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
