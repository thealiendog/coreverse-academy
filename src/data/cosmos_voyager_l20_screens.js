// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L20 — CAPSTONE: Living in This Universe
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: Coreverse Original — Synthesis, Personal Cosmology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER CAPSTONE (three integrating cosmic worldviews; 100 XP)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l20-v1";

const COSMOS_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-20`,
      title: `CAPSTONE: Living in This Universe`,
      duration: 40,
      xpReward: 100,
      badge: `cosmic-philosopher`,
      badgeName: `Cosmic Philosopher`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, you made it. Twenty lessons. From "what is the universe" in Lesson 1 to "what we don't know" in Lesson 19, you've covered more cosmology and philosophy than most adults will encounter in their entire lives. The point of all of this has never been the individual facts. The point is the integrated framework you can now use to engage with cosmic questions for the rest of your life. Today is the capstone. We pull together every prior lesson and ask: what kind of cosmic life are you living? Three serious integrating worldviews emerge from the band. You build your final argument. This is 100 XP. Make it count. — Nova`,
          headline: `Living in This Universe`,
          subtitle: `The capstone. Synthesize all 19 lessons. Build your integrating cosmic worldview.`,
          visual: `/voyager-assets/cosmos/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The 19 Lessons Together Actually Teach`,
          paragraphs: [
            `Stepping back from individual lessons, several integrated patterns emerge. First: the universe is bigger, older, and stranger than we evolved to grasp. The observable universe is 93 billion light-years across. The age is 13.8 billion years. The composition is mostly things we don't yet understand (dark matter 27%, dark energy 68%, ordinary matter only 5%). The fact that we know as much as we do is remarkable; the fact that so much remains open is humbling.`,
            `Second: physics works to spectacular precision in the regimes we can test. Quantum mechanics predicts the electron's magnetic moment to 10+ decimal places. General relativity's predictions about GPS time dilation are essential for the technology to function. Einstein's 1905 special relativity has been confirmed by Hafele-Keating, cosmic ray muons, GPS, and every test for 120 years. When we say physics works, we mean it. The success of physics is real.`,
            `Third: at the same time, the deepest questions remain contested. What is dark matter? Dark energy? What happens inside a black hole's singularity? Is the universe one of many? Is time fundamental or emergent? What is consciousness? Real working physicists and philosophers disagree on these questions. The disagreement isn't because physicists are bad at their jobs; it's because the evidence doesn't yet uniquely select among competing frameworks.`,
            `Fourth: distinguishing real cosmic science from cosmic-flavored pseudoscience is one of the most useful skills available. "Quantum manifestation," "consciousness creates reality," "the universe was made for you," "Mercury retrograde affects communication via magnetic fields"—all of these borrow vocabulary from real physics without doing the underlying work. Recognizing the pattern protects you from a thriving pseudoscience ecosystem.`,
            `Fifth: cosmic questions touch on meaning. What does it mean to be made of atoms forged in stars? What does it mean to exist for an instant in a universe 13.8 billion years old? Three serious traditions answer differently (scientific naturalism, religious cosmology, philosophical nihilism). The wellness-content version trades all three for marketing that flatters readers. Engaging with the serious traditions is more rewarding than the marketing.`,
          ],
          image: `/voyager-assets/cosmos/l20-s1-synthesis.webp`,
          imageCaption: `Five integrating patterns across all twenty lessons.`,
          vocab: [
            {
              word: `integration`,
              definition: `Bringing separate concepts together into a unified understanding. Individual cosmic facts are useful; an integrated framework that connects them is much more powerful. The capstone goal of any educational journey is integration.`,
              audioPrompt: `Integration is bringing separate concepts together into a unified understanding, {name}. Individual cosmic facts are useful, but an integrated framework that connects them is much more powerful. Knowing Einstein's relativity in isolation is useful. Knowing how Einstein's relativity connects to GPS, cosmic ray muons, the Big Bang, black holes, dark energy, and the fate of the universe is much more powerful because each concept reinforces the others. The capstone goal of any educational journey is integration. You've spent 19 lessons building components. Today you put them together into a coherent framework that will guide cosmic thinking for the rest of your life. Most adults never reach this level of integration. You have the chance to.`,
            },
            {
              word: `observable universe`,
              definition: `The portion of the universe from which light has had time to reach us since the Big Bang. Spans 93 billion light-years across. Composed mostly of things we do not yet understand: dark matter at 27% and dark energy at 68%, with ordinary matter making up only 5%. The extraordinary scale of what we know is matched by the scale of what we don't.`,
              audioPrompt: `The observable universe is the portion of the universe from which light has had time to reach us since the Big Bang, {name}. It spans 93 billion light-years across. The universe is 13.8 billion years old. Its composition is mostly things we do not yet understand: dark matter makes up approximately 27% of the cosmic energy budget and dark energy makes up approximately 68%, leaving ordinary matter — the stuff we can directly see and study — at only about 5% of the total. The fact that we know as much as we do about this vast and ancient universe is remarkable. The fact that so much of it remains open to investigation is humbling. Both of those things are true at the same time, and holding them simultaneously is part of what a mature engagement with cosmology looks like.`,
            },
            {
              word: `cosmic-flavored pseudoscience`,
              definition: `Claims that use vocabulary from real cosmology or physics — quantum, consciousness, dark energy, the universe — to give false scientific credibility to ideas that do not follow from the actual science. Examples include quantum manifestation, consciousness creates reality, and Mercury retrograde affecting communication. Distinguishing it from real cosmic science is one of the most useful skills developed across this band.`,
              audioPrompt: `Cosmic-flavored pseudoscience refers to claims that borrow vocabulary from real cosmology and physics to give false scientific credibility to ideas that do not follow from the actual science, {name}. Examples include quantum manifestation, consciousness creates reality, the universe was made for you, and Mercury retrograde affecting communication via magnetic fields. These claims use real scientific terms — quantum, consciousness, vibration, the universe — without engaging with what those terms actually mean in physics. Recognizing the pattern is one of the most useful skills developed across this band. The same vocabulary can appear in a peer-reviewed physics paper and in a viral Instagram post selling a course. The difference is not the vocabulary; it is whether the underlying work has been done. Once you can see the pattern, it applies across thousands of claims you will encounter for the rest of your life.`,
            }
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What's Settled, What's Open`,
          paragraphs: [
            `Some cosmic questions have clear empirical answers, regardless of metaphysical interpretation. The universe is 13.8 billion years old; multiple independent measurements converge. The Sun will become a red giant in ~5 billion years and end as a white dwarf; stellar physics is well-established. Einstein's relativity is confirmed by hundreds of experiments. Quantum mechanics works to spectacular precision. Atoms, stars, galaxies, the observable universe exist as described. These aren't open questions. The evidence is overwhelming.`,
            `Other questions are partly empirical and partly metaphysical. What does quantum measurement actually do? Three serious interpretations agree on math and predictions but disagree on what's happening. What is time? Three serious philosophical positions interpret physics differently. What is consciousness? Multiple frameworks compete. The right answers for you mix empirical evidence with metaphysical commitment.`,
            `Some questions are genuinely contested even with all the current evidence in. What is the universe's fate? Heat death, Big Rip, cyclic? What is dark matter or dark energy actually made of? Why are physics constants fine-tuned for chemistry? Is the multiverse real? Are we alone? Real philosophers, physicists, and thoughtful citizens disagree. There isn't a single answer that emerges from pure logic; values and additional considerations matter.`,
            `Knowing which questions are which matters. Settled empirical questions deserve confident answers (the Sun is 4.6 billion years old; don't argue this with anyone who suggests otherwise). Mixed empirical-metaphysical questions need framework thinking that weights both evidence and interpretation. Contested normative questions require humility about your own conclusions, even as you commit to them for your own life. Conflating these categories produces bad thinking in both directions: dogmatic certainty about contested questions, dismissive uncertainty about empirically settled ones.`,
          ],
          image: `/voyager-assets/cosmos/l20-s2-settled.webp`,
          imageCaption: `Settled empirical, mixed empirical-metaphysical, genuinely contested. Different stances for different questions.`,
          vocab: [
            {
              word: `epistemic calibration`,
              definition: `Matching the confidence of your beliefs to the strength of the evidence. Strong confidence on settled questions; framework thinking on mixed questions; humility on contested questions. The opposite is uniform overconfidence (treating everything as settled) or uniform underconfidence (treating everything as uncertain).`,
              audioPrompt: `Epistemic calibration is matching the confidence of your beliefs to the strength of the evidence, {name}. Strong confidence on settled questions where evidence converges across multiple independent lines: the age of the universe, the validity of Einstein's relativity, the basic life cycles of stars. Framework thinking on mixed questions that involve both empirical and metaphysical components: interpretations of quantum mechanics, philosophy of time, theories of consciousness. Humility on contested questions where reasonable people disagree based on the same evidence: cosmic fate, dark matter composition, fine-tuning explanations, cosmic meaning. The opposite of good calibration is uniform overconfidence (treating everything as settled) or uniform underconfidence (treating everything as uncertain). Mature thinking calibrates each question to its actual evidential state.`,
            },
            {
              word: `settled empirical questions`,
              definition: `Questions where the evidence is overwhelming across multiple independent measurement lines and no reasonable scientific dispute remains. Examples include the age of the universe at 13.8 billion years, the validity of Einstein's relativity, and the basic life cycles of stars. These deserve confident answers; argument with anyone who denies them is not productive.`,
              audioPrompt: `Settled empirical questions are questions where the evidence is overwhelming across multiple independent lines of measurement and no reasonable scientific dispute remains, {name}. The universe is 13.8 billion years old; this is determined by multiple independent methods that all converge. Einstein's relativity is confirmed by hundreds of experiments across more than a century. The Sun will become a red giant in approximately 5 billion years and end as a white dwarf; stellar physics is well-established. Atoms, stars, galaxies, and the observable universe exist as described. These are not open questions. Conflating them with genuinely contested questions — treating settled science as if it were disputed — produces bad thinking. Settled empirical questions deserve confident answers. Expressing false uncertainty about them does not represent intellectual humility; it represents miscalibration.`,
            },
            {
              word: `fine-tuning`,
              definition: `The observation that the constants of physics appear to be precisely adjusted to permit the existence of complex chemistry and life. Small changes to values like the strength of gravity, the mass of the electron, or the cosmological constant would produce a universe incapable of forming stars or atoms. A genuinely contested question about which multiple serious explanations compete.`,
              audioPrompt: `Fine-tuning is the observation that the constants of physics appear to be precisely adjusted to permit the existence of complex chemistry and life, {name}. The strength of gravity, the mass of the electron, the strength of the strong nuclear force, and the value of the cosmological constant all have specific values. Small changes to many of these values would produce a universe incapable of forming stars, atoms, or anything complex at all. Why the constants have the values they do is one of the genuinely contested questions in cosmology. Multiple serious explanations compete: the multiverse (if there are enormously many universes with different constants, we necessarily find ourselves in one that permits our existence), religious fine-tuning arguments, anthropic selection effects, and the possibility that a future theory of physics will show the constants must have these values. Real philosophers and physicists disagree.`,
            }
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Integrating Cosmic Worldviews`,
          paragraphs: [
            `Across the twenty lessons, three integrating worldviews emerge for how to actually live in this universe. These aren't tactics; they're frameworks for organizing all the cosmic knowledge around what you fundamentally believe and how you fundamentally engage.`,
            `Worldview 1: Naturalist Awe. The universe is what science describes: vast, ancient, composed of mostly things we don't yet understand, operating by physical laws we partly grasp. We are matter that became aware of itself, atoms forged in stars now contemplating their origin. Meaning is real but constructed by humans within this framework; cosmic facts generate enough awe to live by without supernatural supplements. Defenders include Carl Sagan, Neil deGrasse Tyson, Sean Carroll, and the broader scientific naturalist tradition. The cosmos is a Big Cathedral of stuff and we are how it sees itself.`,
            `Worldview 2: Cosmos Within A Larger Frame. Science accurately describes the natural universe, but reality extends beyond what science can investigate. Some combination of religious cosmology, philosophical idealism, mysterianism, or another tradition supplements the empirical picture. The deepest questions (consciousness, fine-tuning, "why something rather than nothing") require frameworks beyond science. This isn't anti-science; it accepts cosmological facts and adds interpretive layers. Defenders span Lemaître's Catholic cosmology, Polkinghorne's engagement, McGinn's mysterianism, Kastrup's analytic idealism, Eastern philosophical traditions. The cosmos is real plus.`,
            `Worldview 3: Engaged Uncertainty. The universe is genuinely strange, much of it remains beyond current understanding, and your appropriate posture is rigorous engagement combined with epistemic humility about ultimate questions. Don't commit to a metaphysical framework prematurely; do the work, follow the evidence, accept that some questions may remain open over your lifetime. Camus's existentialism, Stoic philosophy, "shut up and calculate" pragmatism, agnosticism all live here. The cosmos is what it is; we keep working at understanding without forcing premature closure.`,
            `These worldviews aren't strict categories. Most thoughtful people blend elements across them. The argument-builder isn't about picking a permanent identity; it's about identifying which worldview is most strongly currently pulling you, and building a coherent case for it that you can revisit, refine, and possibly evolve as you grow.`,
          ],
          image: `/voyager-assets/cosmos/l20-s3-worldviews.webp`,
          imageCaption: `Three integrating cosmic worldviews. None is universally correct. All are intellectually serious.`,
          vocab: [
            {
              word: `cosmic worldview`,
              definition: `Integrated framework for engaging with cosmic facts, cosmic meaning, and cosmic ignorance. Combines empirical understanding (what we know about the universe), metaphysical commitment (what we think it ultimately is), and existential orientation (how we live in it). Most adults operate with an implicit worldview; making it explicit is a major intellectual move.`,
              audioPrompt: `A cosmic worldview is an integrated framework for engaging with cosmic facts, cosmic meaning, and cosmic ignorance, {name}. Combines three components: empirical understanding (what we actually know about the universe), metaphysical commitment (what we think it ultimately is), and existential orientation (how we live within it). Most adults operate with an implicit cosmic worldview shaped by family of origin, cultural background, education, and chance. They've never consciously examined it. Making your cosmic worldview explicit is one of the major intellectual moves available. You don't have to commit to a position you'll hold for life. But making the implicit explicit lets you actually engage with what you believe rather than going through life with a worldview you never chose.`,
            },
            {
              word: `Naturalist Awe`,
              definition: `One of three integrating cosmic worldviews emerging from the band. The universe is what science describes: vast, ancient, operating by physical laws we partly grasp. We are matter that became aware of itself. Meaning is real but constructed within this framework. Cosmic facts generate enough awe without supernatural supplements. Defenders include Sagan, Tyson, and Carroll.`,
              audioPrompt: `Naturalist Awe is one of the three integrating cosmic worldviews emerging from this band, {name}. The universe is what science describes: vast, ancient, composed of mostly things we do not yet understand, operating by physical laws we partly grasp. We are matter that became aware of itself, atoms forged in stars now contemplating their own origin. Meaning is real but constructed by humans within this framework. Cosmic facts generate enough awe to live by without supernatural supplements. Carl Sagan articulated this worldview most beautifully, along with Neil deGrasse Tyson and Sean Carroll, whose poetic naturalism provides the most philosophically rigorous version. The Naturalist Awe worldview distinguishes itself from manifestation pseudoscience by being rigorous about what science actually shows while preserving deep wonder at real cosmic facts.`,
            },
            {
              word: `Engaged Uncertainty`,
              definition: `One of three integrating cosmic worldviews. The universe is genuinely strange and much remains beyond current understanding. The appropriate posture is rigorous engagement combined with epistemic humility about ultimate questions. Camus's existentialism, Stoic philosophy, "shut up and calculate" pragmatism, and agnosticism all live here. Does not commit prematurely to metaphysical closure.`,
              audioPrompt: `Engaged Uncertainty is one of the three integrating cosmic worldviews emerging from this band, {name}. The universe is genuinely strange, much of it remains beyond current understanding, and the appropriate posture is rigorous engagement combined with epistemic humility about ultimate questions. Do not commit prematurely to a metaphysical framework. Do the work, follow the evidence, and accept that some questions may remain open over your lifetime. Camus's existentialist revolt against meaninglessness, Stoic philosophy, the "shut up and calculate" pragmatism of working physicists, and agnosticism all live within this worldview. Engaged Uncertainty is not passivity or giving up. It is continued rigorous investigation combined with honesty about where the investigation might end. Many working scientists and philosophers operate within this worldview without framing it explicitly.`,
            }
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How To Hold This Lightly`,
          paragraphs: [
            `At 12, you're not making the ultimate decisions yet. You're not finalizing your relationship to cosmology, meaning, or science vs religion vs existentialism. What you ARE doing is forming the frameworks, habits, and reflexes you'll use when these questions matter more practically over the coming decades. Today's argument isn't a permanent commitment; it's a snapshot of how you're currently thinking.`,
            `Your worldview will evolve. Many people in their teens and twenties hold strong positions, then encounter experiences in their thirties and forties that complicate or shift them. Religious traditions often emphasize the deepening of faith over a lifetime. Scientific naturalists often deepen their engagement with philosophy of science. Existentialists often soften their stance over time, or sharpen it through encounters with grief, joy, or sustained reflection. None of these shifts is failure. They're growth.`,
            `What matters more than picking the "right" worldview now is developing the underlying skills you've built across this band. Recognizing what's empirically settled vs contested. Distinguishing real science from pseudoscience. Tracking your own epistemic state. Engaging with serious philosophical positions on their actual merits. Recognizing how "quantum manifestation," "cosmic alignment," and similar content fails. Holding "I don't know" as a real answer. These skills serve you in any worldview.`,
            `One more thing. You will encounter people throughout your life who present versions of cosmic worldviews that don't match any of the three serious positions in this band. The marketing-spiritual versions ("the universe wants you to succeed," "you create your reality through quantum vibrations," "manifestation is science"). The flattening dismissals ("science has proven there's no meaning, you're just chemistry"). The dogmatic certainties ("my tradition has all the answers, science is irrelevant"). Each of these is doing something different from serious engagement. You now have the tools to recognize them. Use them with kindness; not everyone will follow the same path you do.`,
          ],
          image: `/voyager-assets/cosmos/l20-s4-lightly.webp`,
          imageCaption: `Hold the worldview lightly. Hold the skills firmly. Both matter.`,
          vocab: [
            {
              word: `intellectual development`,
              definition: `The lifelong process of refining one's beliefs, frameworks, and ways of engaging with hard questions. Different from accumulating facts. Builds across decades through reading, reflection, conversation, and lived experience. The point of formal education is to start this process, not finish it.`,
              audioPrompt: `Intellectual development is the lifelong process of refining one's beliefs, frameworks, and ways of engaging with hard questions, {name}. Different from accumulating facts. Builds across decades through reading, reflection, conversation, and lived experience. The point of formal education is to start this process, not finish it. Most adults stop their intellectual development somewhere in their 20s or 30s and then operate with whatever frameworks they had at that point for the rest of their lives. The opportunity available to you at 12 is to commit, instead, to ongoing development across your whole life. Update your views when evidence accumulates. Read across traditions you initially reject. Examine your own assumptions regularly. The compounding effect of sustained intellectual development across 60 to 80 years is enormous. Most adults don't realize what they're missing.`,
            },
            {
              word: `worldview evolution`,
              definition: `The process by which one's cosmic worldview changes over a lifetime through experience, reading, reflection, and encounters with grief, joy, and sustained thinking. Religious traditions emphasize the deepening of faith over time. Scientific naturalists deepen engagement with philosophy of science. Such shifts are growth, not failure. The worldview built at 12 is a starting point, not a final commitment.`,
              audioPrompt: `Worldview evolution is the process by which one's cosmic worldview changes over a lifetime through experience, reading, reflection, and sustained engagement with hard questions, {name}. Many people in their teens and twenties hold strong positions, then encounter experiences in their thirties and forties that complicate or shift them. Religious traditions often emphasize the deepening of faith over a lifetime. Scientific naturalists often deepen their engagement with philosophy of science. Existentialists sometimes soften their stance over time, or sharpen it through encounters with grief, joy, or sustained reflection. None of these shifts is failure. They are growth. The worldview you build at twelve is a starting point, not a permanent commitment. What matters more than picking the right worldview now is developing the underlying skills that will serve you in any worldview: recognizing pseudoscience, calibrating confidence to evidence, engaging with serious traditions on their merits.`,
            },
            {
              word: `dogmatic certainty`,
              definition: `The stance of treating contested questions as settled and refusing to engage with serious alternatives. One of three problematic cosmic worldview patterns identified in this section, alongside marketing-spiritual versions and flattening dismissals. Dogmatic certainty prevents real engagement with the depth of cosmic questions.`,
              audioPrompt: `Dogmatic certainty is the stance of treating contested questions as settled and refusing to engage seriously with alternatives, {name}. It is one of several problematic patterns you will encounter throughout your life from people presenting versions of cosmic worldviews. The marketing-spiritual versions say things like "the universe wants you to succeed" and "you create your reality through quantum vibrations." The flattening dismissals say things like "science has proven there is no meaning, you are just chemistry." The dogmatically certain say things like "my tradition has all the answers and science is irrelevant." Each of these is doing something different from serious engagement with the cosmic questions. You now have the tools to recognize all three. Using those tools with kindness is important; not everyone will follow the same intellectual path you do.`,
            }
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Capstone Argument`,
          paragraphs: [
            `This is the final argument you'll build in the Cosmos band. The synthesis. You're choosing not just a position on a narrow cosmic question but an integrating framework for how you engage with cosmic questions for the rest of your life.`,
            `As you build, draw on the full twenty lessons. The "what is the universe" debate from Lesson 1. Einstein's relativity from Lesson 2. Quantum mechanics and "quantum manifestation" from Lesson 3. The Big Bang and cosmic origins from Lesson 4. Stellar life cycles from Lesson 5. Black holes from Lesson 6. Dark matter and dark energy from Lesson 7. The multiverse from Lesson 8. The Fermi paradox from Lesson 9. Consciousness from Lesson 10. Time from Lesson 11. Fine-tuning from Lesson 12. Cosmic scale from Lesson 13. The universe's fate from Lesson 14. The black hole information paradox from Lesson 15. Science vs pseudoscience from Lesson 16. Quantum measurement from Lesson 17. Cosmology and meaning from Lesson 18. What we don't know from Lesson 19. Each lesson contributed to the integrated framework you now have. Show that synthesis in your argument.`,
            `The counterargument will push hard. You'll have to defend your worldview against the strongest case for the alternatives. The skill isn't just picking a side; it's holding your position with conviction while engaging seriously with the best arguments against it. That's the mark of a mature thinker.`,
            `One last framing. Most adults never do this exercise. They drift into a cosmic worldview shaped by family of origin, cultural background, what their friends believe, and whatever they happened to encounter in school. You're explicitly choosing your framework. That alone puts you ahead. Now make the choice well.`,
          ],
          image: `/voyager-assets/cosmos/l20-s5-before.webp`,
          imageCaption: `Most adults drift. You're choosing. That alone matters.`,
          vocab: [
            {
              word: `synthesis`,
              definition: `Combining separate concepts, ideas, or experiences into a coherent whole. The highest level of learning. What separates someone who knows individual cosmic facts from someone who has built a working cosmic worldview.`,
              audioPrompt: `Synthesis is combining separate concepts, ideas, or experiences into a coherent whole, {name}. The highest level of learning. What separates someone who knows individual cosmic facts from someone who has built a working cosmic worldview. Synthesis is harder than memorization, harder than analysis, harder than evaluation. It requires holding many pieces simultaneously and seeing how they fit together. The capstone argument you're about to build is an exercise in synthesis. You're pulling together quantum mechanics, relativity, cosmology, philosophy of mind, philosophy of time, science vs pseudoscience, philosophy of religion, existentialism, and your own values into one coherent worldview. Do this well, and the rest of your engagement with cosmic questions has a structure to grow into.`,
            },
            {
              word: `capstone argument`,
              definition: `The final synthesis argument in the Cosmos band, in which the learner chooses one of three integrating cosmic worldviews and builds a case drawing on evidence from all twenty lessons. Requires holding a position with conviction while engaging seriously with the best arguments against it. The mark of a mature thinker.`,
              audioPrompt: `The capstone argument is the final synthesis exercise in the Cosmos band, {name}. You are not just picking a position on a narrow cosmic question. You are choosing an integrating framework for how you engage with cosmic questions for the rest of your life. The argument draws on the full twenty lessons: Einstein's relativity, quantum mechanics, the Big Bang and cosmic origins, stellar life cycles, black holes, dark matter and dark energy, the multiverse, the Fermi paradox, consciousness, time, fine-tuning, cosmic scale, the universe's fate, the black hole information paradox, science versus pseudoscience, quantum measurement, cosmology and meaning, and what we do not know. The counterargument will push hard. The skill is not just picking a side; it is holding your position with conviction while engaging seriously with the best arguments against it. That is the mark of a mature thinker.`,
            },
            {
              word: `personal cosmology`,
              definition: `An individual's integrated framework for understanding their place in the universe, combining empirical knowledge, metaphysical commitments, and existential orientation. Most adults drift into a personal cosmology shaped by family of origin and cultural background without consciously examining it. Making it explicit is a major intellectual move.`,
              audioPrompt: `A personal cosmology is an individual's integrated framework for understanding their place in the universe, {name}. It combines three components: empirical knowledge of what the universe actually is, metaphysical commitments about what it ultimately means, and existential orientation about how to live within it. Most adults drift into a personal cosmology shaped by family of origin, cultural background, what their friends believe, and whatever they happened to encounter in school. They have never consciously examined it or compared it against serious alternatives. Making your personal cosmology explicit — naming what you actually believe and why — is one of the major intellectual moves available to you. You do not have to commit to a framework you will hold for life. But explicitly choosing your framework puts you in a fundamentally different relationship to your own beliefs than simply inheriting them without examination.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER (CAPSTONE) ────────────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `Which Cosmic Worldview Are You Building?`,
          intro: `Pick the worldview that best integrates what you've learned across all 20 lessons. Build your case with 4-5 pieces of evidence drawn from across the band. Then respond to the strongest counterargument. This is the capstone—make it count.`,
          positions: [
            {
              id: `naturalist-awe`,
              label: `Naturalist Awe: cosmos as scientifically described, meaning constructed within it`,
              summary: `The universe is what science describes: vast, ancient, composed of mostly things we don't yet understand, operating by physical laws we partly grasp. We are matter that became aware of itself. Meaning is real but constructed by humans within this framework. Cosmic facts generate enough awe to live by without supernatural supplements. Carl Sagan ("Pale Blue Dot"), Neil deGrasse Tyson, Sean Carroll ("The Big Picture" poetic naturalism), the scientific naturalist tradition. Distinguishes from manifestation pseudoscience while preserving deep wonder at real cosmic facts.`,
            },
            {
              id: `larger-frame`,
              label: `Cosmos Within A Larger Frame: science plus additional interpretive layers`,
              summary: `Science accurately describes the natural universe, but reality extends beyond what science can investigate. Some combination of religious cosmology, philosophical idealism, mysterianism, or another tradition supplements the empirical picture. The deepest questions (consciousness, fine-tuning, "why something rather than nothing") require frameworks beyond science alone. Not anti-science: accepts all empirical findings. Adds interpretive layers. Defenders span Lemaître's Catholic cosmology, Polkinghorne's Anglican engagement, Kastrup's analytic idealism, Eastern philosophical traditions, McGinn's mysterianism about consciousness.`,
            },
            {
              id: `engaged-uncertainty`,
              label: `Engaged Uncertainty: rigorous engagement plus epistemic humility about ultimate questions`,
              summary: `The universe is genuinely strange, much remains beyond current understanding, and your appropriate posture is rigorous engagement combined with epistemic humility about ultimate questions. Don't commit prematurely to a metaphysical framework; do the work, follow the evidence, accept that some questions may remain open over your lifetime. Camus's existentialist "revolt" against meaninglessness, Stoic practice, "shut up and calculate" pragmatism, agnosticism all live here. Knows what we don't know. Comfortable with cosmic mystery without forcing premature closure.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Modern physics works to spectacular precision in tested regimes: quantum mechanics predicts the electron's magnetic moment to 10+ decimal places; general relativity's predictions are essential for GPS; Einstein's 1905 special relativity confirmed by Hafele-Keating, cosmic ray muons, and 120 years of testing.`,
              source: `Lessons 2-3 (relativity, quantum mechanics)`,
            },
            {
              id: `e2`,
              text: `The universe is bigger, older, and stranger than human cognition evolved to grasp: 93 billion light-years across, 13.8 billion years old, with 95% of its energy content being things we don't understand (dark matter, dark energy).`,
              source: `Lessons 4, 7, 13 (Big Bang, dark matter/energy, cosmic scale)`,
            },
            {
              id: `e3`,
              text: `Multiple frontier questions remain genuinely contested by working physicists and philosophers: what is dark matter actually made of? What happens at black hole singularities? Is the multiverse real? What is consciousness? Real disagreement based on the same evidence.`,
              source: `Lessons 6, 7, 8, 10 (black holes, dark matter/energy, multiverse, consciousness)`,
            },
            {
              id: `e4`,
              text: `The science vs pseudoscience framework distinguishes real cosmic science (falsifiable, replicable, peer-reviewed) from cosmic-flavored pseudoscience ("quantum manifestation," "consciousness creates reality," astrology). One of the most useful skills across thousands of claims.`,
              source: `Lessons 3, 6, 10, 12, 16, 17, 18 (multiple source evaluations)`,
            },
            {
              id: `e5`,
              text: `Real working physicists and philosophers actively defend multiple cosmic worldviews: scientific naturalism (Sagan, Tyson, Carroll); religious cosmology (Lemaître, Polkinghorne, Kastrup); philosophical nihilism/existentialism (Camus, Nagel, Stoic tradition); mysterianism (McGinn). The disagreement is genuine, not just popular misunderstanding.`,
              source: `Lessons 1, 18, 19 (what is universe, meaning, ignorance)`,
            },
            {
              id: `e6`,
              text: `Pop "cosmic consciousness" and manifestation content typically borrows vocabulary from real traditions without doing the underlying work. "The universe wants you to succeed" isn't endorsed by Sagan (a confirmed naturalist), Polkinghorne (a serious theologian), Camus (an existentialist), or Kastrup (a serious idealist). Distinguishable from real cosmic engagement.`,
              source: `Lessons 3, 10, 18 (pseudoscience patterns)`,
            },
            {
              id: `e7`,
              text: `Knowing what we don't know is one of the most useful intellectual states. Three serious positions on cosmic ignorance: epistemic humility, scientific optimism, mysterianism. Each shapes engagement with hard questions for a lifetime.`,
              source: `Lesson 19 (what we don't know)`,
            },
            {
              id: `e8`,
              text: `Cosmic scale: the universe spans 61 orders of magnitude from Planck length to observable universe. Humans sit roughly at the geometric middle. We're not at any "extreme"; we're in the size range where complex life can exist.`,
              source: `Lesson 13 (cosmic scale)`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your worldview. Here's the strongest objection. All three worldviews assume that 'choosing how to engage with the cosmos' is a meaningful exercise for individuals to undertake. But cosmic questions have been worked on by sophisticated philosophers, theologians, and scientists for thousands of years. Why think a twelve-year-old's synthesis after reading twenty lessons is doing real intellectual work, rather than just sampling traditions superficially? Maybe the honest answer is: I'm too young, with too little life experience, to commit to a cosmic worldview, and I should just keep reading without trying to synthesize prematurely. What makes your synthesis at 12 valuable rather than a kind of intellectual play-acting?"`,
            promptInstruction: `In 4-5 sentences, respond. Is synthesis at 12 doing real work, or is it premature commitment? Defend the value of building an integrating worldview even at a young age, knowing it will evolve. Why is articulating a tentative worldview better than just continuing to absorb material?`,
          },
          reflectionPrompt: `Looking at the worldviews you didn't choose, which was hardest to leave behind? What does that reveal about you?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the five integrating patterns from the 20 lessons?`,
              options: [
                `Different lessons have nothing in common`,
                `Universe is bigger/older/stranger than we evolved to grasp; physics works to spectacular precision in tested regimes; deepest questions remain contested; distinguishing real cosmic science from cosmic-flavored pseudoscience is a key skill; cosmic questions touch on meaning that three serious traditions answer differently`,
                `Memorize all facts`,
                `Cosmology is settled`,
              ],
              correctIndex: 1,
              explanation: `These five patterns connect every prior lesson into an integrated framework. Individual facts matter less than the unified understanding they produce.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Which cosmic questions are settled vs contested?`,
              options: [
                `Everything is settled`,
                `Settled empirical: age of universe (13.8B years), Einstein's relativity, basic stellar life cycles, atoms exist as described. Mixed empirical/metaphysical: quantum interpretation, philosophy of time, theories of consciousness. Genuinely contested: cosmic fate, dark matter composition, fine-tuning explanations, cosmic meaning`,
                `Everything is contested`,
                `Only government decides`,
              ],
              correctIndex: 1,
              explanation: `Knowing which category a question falls in produces better thinking. Confident answers on settled questions, framework thinking on mixed questions, humility on contested ones.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "epistemic calibration"?`,
              options: [
                `Adjusting instruments`,
                `Matching the confidence of your beliefs to the strength of the evidence; strong confidence on settled questions, framework thinking on mixed, humility on contested; opposite of uniform overconfidence or underconfidence`,
                `Being right about things`,
                `Mathematical alignment`,
              ],
              correctIndex: 1,
              explanation: `Mature thinking calibrates each question to its actual evidential state. This is one of the most useful intellectual habits and one most adults never develop.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is Worldview 1 (Naturalist Awe)?`,
              options: [
                `Hiking and outdoors`,
                `Universe is what science describes; we are matter that became aware of itself; meaning is real but constructed within naturalistic framework; cosmic facts generate enough awe without supernatural supplements; defenders: Sagan, Tyson, Sean Carroll, broader scientific naturalist tradition`,
                `Anti-religion bias`,
                `Modern materialism only`,
              ],
              correctIndex: 1,
              explanation: `Naturalist awe distinguishes itself from manifestation pseudoscience by being rigorous about science while preserving deep wonder at real cosmic facts. The "constructed meaning" framing doesn't make meaning fake.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is Worldview 2 (Cosmos Within A Larger Frame)?`,
              options: [
                `Anti-science`,
                `Science accurately describes the natural universe, but reality extends beyond what science can investigate; supplements empirical picture with religious cosmology, idealism, mysterianism, or other tradition; not anti-science—accepts cosmological facts and adds interpretive layers`,
                `Religious dogma`,
                `Magical thinking`,
              ],
              correctIndex: 1,
              explanation: `This worldview is too diverse to characterize by any single position. It includes everything from sophisticated Christian engagement (Polkinghorne) to academic idealism (Kastrup) to Eastern traditions. All accept scientific facts and add interpretive layers.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is Worldview 3 (Engaged Uncertainty)?`,
              options: [
                `Confused thinking`,
                `Universe is genuinely strange; appropriate posture is rigorous engagement combined with epistemic humility about ultimate questions; don't commit prematurely; Camus's existentialism, Stoic philosophy, "shut up and calculate" pragmatism, agnosticism all live here`,
                `Avoiding all questions`,
                `Pure skepticism`,
              ],
              correctIndex: 1,
              explanation: `Engaged uncertainty isn't passivity. It's continued rigorous work combined with humility about where the work might end. Many working scientists operate within this worldview.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why do these three worldviews not represent strict categories?`,
              options: [
                `They're confused`,
                `Most thoughtful people blend elements across them; worldviews evolve over a lifetime; the argument-builder isn't about picking a permanent identity but identifying which worldview pulls strongest currently while remaining open to evolution`,
                `Categories don't exist`,
                `They're identical`,
              ],
              correctIndex: 1,
              explanation: `Cosmic worldviews evolve through life. Your current commitment is a starting point, not a final destination. The skills you've built (recognizing pseudoscience, calibrating to evidence, distinguishing serious traditions) serve you in any worldview.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is "synthesis" the highest level of learning?`,
              options: [
                `It's hardest`,
                `It combines separate concepts, ideas, or experiences into a coherent whole; separates someone who knows individual cosmic facts from someone who has built a working cosmic worldview; harder than memorization, analysis, or evaluation`,
                `Tests require it`,
                `It saves time`,
              ],
              correctIndex: 1,
              explanation: `Synthesis is what this capstone is designed to develop. Most adults know individual cosmic facts. Few have built integrated worldviews. The worldview is what produces better engagement with cosmic questions over a lifetime.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The cosmic worldview you build at 12 should be the worldview you hold for the rest of your life.`,
              correctAnswer: false,
              explanation: `False. Cosmic worldviews evolve through life. The point of building one now is to make implicit beliefs explicit, develop the skill of integrating concepts, and start the lifelong process of refinement. Religious traditions emphasize the deepening of faith over time. Scientific naturalists deepen engagement with philosophy of science. Existentialists soften or sharpen views through life experience. Evolution is growth, not failure.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend dismissively says "Cosmology is just speculation; we can't really know anything cosmic, so why even think about it?" Based on this entire band, what's the most useful response?`,
              options: [
                `"You're right, give up"`,
                `"Cosmology has produced spectacular confirmed knowledge: the age of the universe, the validity of Einstein's relativity, the basic life cycles of stars, the framework of quantum mechanics. These aren't speculation; they're among the best-supported scientific knowledge we have. Some cosmic questions ARE genuinely contested (dark matter composition, cosmic fate, the multiverse), and engaging with them seriously is one of the deepest intellectual activities available. The 'just speculation' framing collapses 100+ years of empirical achievement and serious philosophical work into a dismissal. The real cosmic conversation is far richer."`,
                `"All science is fake"`,
                `"You're closed-minded"`,
              ],
              correctIndex: 1,
              explanation: `Real applied synthesis. The friend's framing is common but doesn't survive examination. The response articulates what's settled, what's contested, and why engagement is worthwhile. This is the capstone synthesis in action.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved. This is the capstone—these reflections matter.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which of the three worldviews most closely matches how you currently engage with cosmic questions? Be specific about why.` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Across all 20 lessons, which one changed your thinking most? What did you believe before that you don't believe now?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you actually live the worldview you chose, who does that make you at 30? At 50? At 70?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one cosmic question you'll engage with in the next year. How does your chosen worldview shape how you'll approach it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest critique of your chosen worldview? Can you steelman it and still hold your position?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `What intellectual habit could you actually start this month, at 12, that would compound across the next 50 years of engaging with hard questions? Pick one and start it.` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the capstone. The synthesis becomes real when you act on it. Two paths.`,
          familyActivity: {
            title: `The Family Cosmic Worldview Conversation`,
            duration: `60 minutes`,
            description: `At dinner, share what you learned across the entire Cosmos band. Ask each adult: which of the three worldviews (Naturalist Awe, Cosmos Within A Larger Frame, Engaged Uncertainty) is closest to how they actually live? Is it the one they'd choose if starting over? Have they ever shifted worldviews? Then share which worldview you're currently most drawn to and why. This conversation will probably reveal that family members are operating from different worldviews without consciously naming them. That's fine. Naming them lets the family have richer conversations about cosmic questions going forward. Most families never have this conversation. Initiating it at 12 is unusual and valuable.`,
          },
          projectOption: {
            title: `Build Your Own Cosmic Worldview Document, 4 weeks (CAPSTONE PROJECT)`,
            duration: `4 weeks, ~30 minutes per week`,
            description: `Write a 2,500-word personal cosmic worldview document. Sections to include: your chosen integrating worldview and why; your current understanding of cosmic facts (Big Bang, scale, dark matter/energy, etc.); your current position on contested questions (interpretation of QM, multiverse, fate, consciousness); your framework for distinguishing real cosmic science from pseudoscience; how you currently engage with cosmic meaning; what you'd want a future version of yourself reading this document to know. This is the capstone synthesis in document form. Many adults never write anything like this for themselves. Doing it at 12 produces a reference document you can return to throughout your life, update as your thinking evolves, and use as the foundation for engaging with cosmic questions. Save the document. Re-read it in 5 years. Re-read it in 20.`,
            offerToParent: `Parent: opt your kid into this capstone project from the dashboard. The 4-week document is genuinely worth supporting. Reading it together at the end can be one of the most substantive parent-child conversations you'll ever have about cosmology, meaning, and existence.`,
          },
          identityQuestion: `If you build a coherent cosmic worldview at 12 and update it across 60 years of living, who does that make you?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson — and this entire band — making you?`,
          prompt: `One sentence. The biggest one yet. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who designed their cosmic worldview deliberately instead of drifting into one shaped by defaults.`,
            `A person who can integrate physics, philosophy, science vs pseudoscience, and cosmic meaning into one coherent framework.`,
            `Someone willing to commit to a worldview while staying open to evolving it across decades of living.`,
          ],
          saveKey: `identity_responses_cs_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You did it. Twenty Cosmos lessons. Twenty serious investigations into how the universe actually works and how to live within it. You've covered more cosmology and philosophy than most people will encounter in their entire lives. You understand the Big Bang, Einstein's relativity, quantum mechanics, stellar evolution, black holes, dark matter, dark energy, the multiverse, the Fermi paradox, consciousness, time, fine-tuning, cosmic scale, the universe's fate, the information paradox, science vs pseudoscience, quantum measurement, cosmic meaning, and what we don't know. You can synthesize all of it into an integrated worldview for engaging with cosmic questions. You can spot manifestation pseudoscience, "consciousness creates reality" misuses of quantum mechanics, "universe was made for you" cosmic flattery, and astrology-marketing instantly. You can distinguish empirical questions from metaphysical interpretation, settled science from open questions, serious philosophy from popular simplification. The badge for this lesson is Cosmic Philosopher because that's what you are now. The capstone project is optional but transformative; consider doing it. Your cosmic engagement starts being deliberate from this point forward. You have my respect, my gratitude for working through this with me, and my wishes for the long cosmic journey ahead. — Nova, signing off.`,
          badge: `cosmic-philosopher`,
          badgeName: `Cosmic Philosopher`,
          xpEarned: 100,
          competencies: [
            `Synthesizes 19 prior lessons into an integrated cosmic worldview`,
            `Articulates three integrating worldviews (Naturalist Awe, Cosmos Within A Larger Frame, Engaged Uncertainty)`,
            `Distinguishes settled empirical questions, mixed questions, and contested questions`,
            `Applies epistemic calibration: confidence matched to evidence strength`,
            `Has built a coherent personal cosmic framework that can evolve across 60+ years of living`,
          ],
          nextLessonPreview: {
            title: `Cosmos Voyager band: COMPLETE`,
            hook: `You've finished all twenty lessons. The framework is yours. Take it into your life and let it grow with you. — Nova, signing off this subject. See you among the stars.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L20 ${VERSION}] CAPSTONE "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection, ${l.xpReward} XP`
  );
}
