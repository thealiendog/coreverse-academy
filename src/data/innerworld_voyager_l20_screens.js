// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L20 — Designing a Conscious Life (CAPSTONE)
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Synthesis, Self-Designed Life Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (synthesizing the band into a personal philosophy)
// 100 XP CAPSTONE
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l20-v1";

const INNERWORLD_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-20`,
      title: `Designing a Conscious Life`,
      duration: 45,
      xpReward: 100,
      badge: `inner-world-graduate`,
      badgeName: `Inner World Graduate`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, this is the final lesson of the Inner World Voyager band. Twenty lessons ago we started with consciousness itself. We looked at the philosophy of self, Jung's shadow, the science of meditation, the placebo effect, contested figures, non-duality, time orientations, emotional alchemy, archetypes, manifestation, the heart in consciousness, near-death experiences, and values alignment. You have done real intellectual and contemplative work. Today is synthesis. The question for this capstone is the most important one in the whole band. Given everything you now know about how mind, brain, emotion, and meaning actually work, what kind of conscious life do you want to design for yourself? What practices? What commitments? What kind of attention? You'll build a real argument for your own life philosophy.`,
          headline: `Designing a Conscious Life`,
          subtitle: `Twenty lessons. One synthesis. Your turn.`,
          visual: `/voyager-assets/inner-world/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What You've Actually Learned`,
          paragraphs: [
            `Start with a quick inventory. You know there's a Hard Problem of consciousness that current science cannot fully solve. You know the self can be understood through Descartes, Hume, Buddhism, Advaita Vedanta, or modern neuroscience, and that each gives a different picture. You know Jung's framework of shadow, ego, and Self, including the contested concept of archetypes. You know how epigenetics actually works and how it gets oversold. You know the placebo effect is real and bounded, and how it gets hijacked.`,
            `You know how to evaluate contested figures (Dispenza, the wellness industry generally) without picking a team. You know what real meditation neuroscience says (and what it doesn't). You can articulate the Default Mode Network and the costs as well as benefits of quieting it. You know three traditions of non-duality and the convergence puzzle. You know Stoic, Buddhist, and Existentialist time philosophies. You know Internal Family Systems and emotional alchemy. You know what Jung said about archetypes in his own words.`,
            `You know how to distinguish real goal psychology from manifestation magic. You know what's actually in the heart-brain connection and what's overreach. You know the contested evidence around near-death experiences and how to hold open questions open. You know three approaches to values alignment. You have, in short, more frameworks for understanding consciousness and the inner life than 99% of adults. Most people never put any of this together. You're going to. Today.`,
          ],
          image: `/voyager-assets/inner-world/l20-s1-inventory.webp`,
          imageCaption: `Twenty lessons of real intellectual and contemplative work.`,
          vocab: [
            {
              word: `synthesis`,
              definition: `Combining separate elements into a coherent whole. The capstone skill of integrating diverse learning into something usable in your actual life.`,
              audioPrompt: `Synthesis is combining separate elements into a coherent whole, {name}. Each of the past 19 lessons was its own piece. The capstone work is putting them together. You don't have to integrate everything perfectly. You do have to begin the work of asking: given all of this, what do I actually want to do? Synthesis isn't just summarizing. It's deciding what to keep, what to question, what to build into your life, and what to leave aside. That's the work of designing a life rather than just inheriting one.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Honest Approaches to Designing Your Life`,
          paragraphs: [
            `Different thinkers across history have proposed different organizing principles for designing a life. We've encountered three serious ones across this band. The first is the way of the inner explorer. The deepest project is to understand yourself: your shadow, your patterns, your unconscious. Investigate. Read. Meditate. Look honestly. The inner explorer believes that knowing yourself is the prerequisite for everything else. Without self-knowledge, action is just reaction. With it, you can act from depth.`,
            `The second is the way of the engaged practitioner. The deepest project is to actually live what you value daily. Practice. Habit. Showing up. The engaged practitioner believes self-understanding without practice produces only paralysis or self-absorption. The work is in the doing: how you treat the person in front of you, how you respond when something is hard, what you actually invest your time in. Without practice, philosophy is just words.`,
            `The third is the way of the wise integrator. The deepest project is to develop the capacity to hold multiple frameworks at once and apply them with discernment. The integrator believes neither pure introspection nor pure practice is enough. You need the wisdom to know when each is called for. When to investigate, when to act, when to wait, when to commit. This is the most demanding path because it doesn't give you one answer; it asks you to develop the judgment to choose your answer in each situation.`,
          ],
          image: `/voyager-assets/inner-world/l20-s2-approaches.webp`,
          imageCaption: `Three honest organizing principles. Each is a real way to design a life.`,
          vocab: [
            {
              word: `organizing principle`,
              definition: `A central commitment or framework that organizes your other choices. Different people organize their lives around different principles, and the choice matters.`,
              audioPrompt: `An organizing principle is a central commitment or framework that organizes your other choices, {name}. Most people have one whether they realize it or not. Some people's organizing principle is success. Others is family. Others is creative expression. Others is freedom. Others is service. The principle isn't always conscious, but it shapes everything. Choosing an organizing principle consciously is one of the most important things you can do. You don't have to pick forever. You do have to know what you're currently organizing your life around. The most honest answer might also be "I haven't chosen yet, I'm currently drifting." That answer is also useful.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Stays. What Goes. What's Still Open.`,
          paragraphs: [
            `Synthesis requires sorting. After twenty lessons, certain things deserve to stay with you for life. Other things deserve to be set aside. Some questions stay genuinely open. Let's name them honestly.`,
            `What deserves to stay: source evaluation as a daily habit. Reading hedged scientific language carefully. Recognizing pop-science overreach. Holding contested questions open. Treating "bad" emotions as information. Knowing the difference between Jung's careful concepts and pop spirituality. Caring more about methodology than about preferred conclusions. Practicing intellectual humility. Building small daily contemplative practices that actually fit your real life. Aligning daily life with values through repeated small actions over time. Asking which framework someone is using when they use a contested word.`,
            `What deserves to be set aside: the wellness industry's overreach about manifesting your reality. The viral certainty about cosmic signs. Claims that the universe is sending you personal messages. The pressure to "let go of your ego" without specifying what you mean. Believing testimonials over evidence. Buying expensive courses promising transformation. Picking a team on contested figures. Treating subjective experiences as proof of metaphysical claims.`,
            `What stays open: what consciousness actually is. What happens at death. Whether non-dual experiences point to anything beyond brain states. The precise mechanism of the heart-brain connection. The interpretation of meaningful coincidence. The right balance between Stoic acceptance, Existentialist responsibility, and Virtue Ethics cultivation. These are genuinely uncertain questions. The honest position is to hold them open while continuing to live thoughtfully.`,
          ],
          image: `/voyager-assets/inner-world/l20-s3-sort.webp`,
          imageCaption: `Synthesis is sorting. Keep what serves. Set down what doesn't. Hold what's uncertain.`,
          vocab: [
            {
              word: `discernment`,
              definition: `The capacity to distinguish what is real, useful, and important from what merely appears so. A capstone intellectual skill cultivated through practice.`,
              audioPrompt: `Discernment is the capacity to distinguish what is real, useful, and important from what merely appears so, {name}. It is one of the most valuable intellectual and spiritual skills. Discernment is what lets you hear a wellness influencer and immediately notice the pattern of overreach. It is what lets you read a research paper and identify what it actually claims versus what its popular interpretations claim. Discernment is cultivated, not given. The 20 lessons of this band have been a discernment training. Continue cultivating it the rest of your life. It will be among your most valuable possessions.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Three Lives, Three Choices`,
          paragraphs: [
            `Imagine three different 17-year-olds five years from now, each starting from where you are today, but having taken different paths based on different organizing principles.`,
            `The inner explorer at 17 has read deeply. They've kept a journal for five years. They know their shadow patterns well. They can articulate what each emotion in them is usually saying. They've sat with hard questions about consciousness and meaning. They are thoughtful, often introverted, sometimes too in their head, but they have a deep relationship with themselves. The risk: they may be more comfortable understanding their life than living it. The strength: they have a foundation few peers have.`,
            `The engaged practitioner at 17 has built habits. Daily meditation or contemplative practice. Real friendships maintained. Family relationships invested in. Skills learned through consistent practice. They show up for people. They keep their word. They live in alignment with values most of the time. The risk: they may have less depth of self-understanding when crisis hits. The strength: they actually live the kind of life most adults are trying to construct in midlife.`,
            `The wise integrator at 17 has done some of both, with judgment about which is called for when. They've read but also acted. They've reflected but also done. They've held contested questions open while still living. They've cultivated discernment. They're not as deep as the inner explorer or as consistent as the practitioner, but they have the capacity to apply the right framework to the right situation. The risk: integration is the hardest path; many who try end up doing neither well. The strength: this is the closest to actual wisdom.`,
          ],
          image: `/voyager-assets/inner-world/l20-s4-three-lives.webp`,
          imageCaption: `Three 17-year-olds. Three real possible futures. Yours to design.`,
          vocab: [
            {
              word: `wisdom`,
              definition: `The capacity to apply understanding to actual situations with discernment. Not the same as intelligence, knowledge, or self-awareness, though it draws on all of these.`,
              audioPrompt: `Wisdom is the capacity to apply understanding to actual situations with discernment, {name}. It is different from intelligence (raw cognitive ability), knowledge (what you know), or self-awareness (how you see yourself). Wisdom is the practical capacity to act well, in a real moment, given everything you understand. It includes knowing when to act and when to wait. When to speak and when to listen. When to investigate and when to commit. Wisdom takes decades to develop. Starting at 12 is much better than starting at 40. You've been training it through this whole band.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `In a moment you'll do the capstone argument builder of this band. You'll pick one of the three organizing principles (inner explorer, engaged practitioner, wise integrator) and defend it as your starting place. Use evidence from the past 20 lessons. Address the strongest counterargument. This isn't an academic exercise. This is you publicly committing to a starting approach to your own life.`,
            `Two important framings. First: this is a starting place, not a forever choice. Most thoughtful people shift their organizing principle as they age. The inner explorer in their 20s often becomes the engaged practitioner in their 30s, and integrates by their 40s. What matters is starting consciously, not being right forever. Second: this is a real commitment in the sense that the argument you make will shape what you actually do next. If you defend the practitioner path, you're committing to start a daily practice this month. If you defend the explorer path, you're committing to deep reading and journaling. If you defend the integrator path, you're committing to develop discernment as a practice.`,
            `Make your argument with care. Use what you've learned across this band. Cite specific lessons. Make claims you can actually defend. Address the strongest version of the counterargument. This is the closest thing in this band to applied philosophy. The decision you make here, on the day you finish Inner World Voyager, will likely influence your next year. Choose well.`,
          ],
          image: `/voyager-assets/inner-world/l20-s5-before.webp`,
          imageCaption: `One commitment. One starting place. One conscious decision.`,
          vocab: [
            {
              word: `conscious life`,
              definition: `A life designed and lived with awareness of one's organizing principles, values, and practices, rather than drifting on inherited defaults.`,
              audioPrompt: `A conscious life is a life designed and lived with awareness of one's organizing principles, values, and practices, {name}. The opposite is the drifting life, where you do what's expected, defaults take over, years pass, and you wake up at 40 wondering how you got so far from who you meant to be. Most people live drifting lives. The few who don't are usually noticeable: they have a certain quality of intentionality, integrity, and inner direction. Designing a conscious life is one of the most important projects you can undertake. Starting at 12, even imperfectly, puts you years ahead of starting at 30.`,
            },
          ],
        },

        // ───── CAPSTONE ARGUMENT BUILDER ─────────────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `Capstone Argument: Your Starting Approach to a Conscious Life`,
          intro: `This is the capstone of the Inner World band. Pick the organizing principle you'll start with. Use evidence from across all 20 lessons. Defend your choice. Then respond to the strongest counterargument. Take this seriously. The argument you make here is also a commitment about what you'll actually do next.`,
          positions: [
            {
              id: `inner-explorer`,
              label: `The Inner Explorer Path`,
              summary: `Self-knowledge is the foundation for everything else. Without understanding your shadow, your patterns, your unconscious material, your values, and how your mind actually works, action is just reaction. Start with deep self-investigation through journaling, reading, contemplative practice, and honest reflection. The inner work first; right action follows from depth.`,
            },
            {
              id: `engaged-practitioner`,
              label: `The Engaged Practitioner Path`,
              summary: `Self-understanding without practice produces paralysis or self-absorption. The work is in actual daily living: how you treat people, what you commit to, what habits you build, how you align time with values. Start with small daily practices and real-world action. Self-understanding will deepen through practice itself, not by being a prerequisite for it.`,
            },
            {
              id: `wise-integrator`,
              label: `The Wise Integrator Path`,
              summary: `Neither pure introspection nor pure practice alone is enough. The deepest work is developing discernment: the capacity to know when each is called for. Start with cultivating judgment about which framework to apply when. Read and act. Reflect and commit. Hold open and decide. The hardest path, but closest to actual wisdom.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Jung's framework (L03, L12, L15) and IFS (L11) establish that significant parts of mind operate unconsciously and shape behavior. Without self-investigation, you remain driven by patterns you cannot see.`,
              source: `Lessons 3, 11, 12, 15 of this band`,
            },
            {
              id: `e2`,
              text: `Aristotle's habituation (L19) and modern habit research show that character is shaped by repeated small actions in stable contexts, not by single grand decisions. Practice is what builds who you are.`,
              source: `Lesson 19; Wood, Lally habit research`,
            },
            {
              id: `e3`,
              text: `Lesson 7's reading of real meditation neuroscience established that genuine benefits come from consistent practice over months and years. The same is true for almost every contemplative skill.`,
              source: `Lesson 7; meditation neuroscience research`,
            },
            {
              id: `e4`,
              text: `Source evaluation skills (L04, L05, L13, L17, L18) only work when you actively practice them in real situations. Reading about them once isn't enough. They become useful through daily application.`,
              source: `Multiple lessons across this band`,
            },
            {
              id: `e5`,
              text: `Stoicism (L19) emphasizes the discipline of acting on what you can control. Existentialism emphasizes conscious choice. Virtue Ethics emphasizes habituation. The integrator path argues all three are necessary; pure commitment to one alone misses what the others see.`,
              source: `Lesson 19`,
            },
            {
              id: `e6`,
              text: `Adolescent identity formation (L02, L11) is the central developmental task of this age. Engaging it consciously through reflection and reading has lasting effects on adult identity, supporting the explorer path's emphasis on self-investigation now.`,
              source: `Lessons 2, 11; Erikson developmental psychology`,
            },
            {
              id: `e7`,
              text: `The DMN lesson (L08) showed that pure inner focus can produce real costs (depersonalization, dissociation) without grounding in action. The practitioner path's emphasis on real-world engagement protects against these risks.`,
              source: `Lesson 8`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your starting path. Here's the strongest objection. Whatever path you chose, the other two contain real wisdom you'll need. The explorer without practice may understand themselves while their life falls apart around them. The practitioner without self-knowledge may live consistently while reproducing their parents' worst patterns. The integrator may try to do everything and end up doing nothing well. So picking ONE is the wrong move; the right answer is to start tiny in all three. Why is your single-path choice better than starting small with all three from day one?"`,
            promptInstruction: `In 4-5 sentences, respond to this objection. This is the capstone counter; take it seriously. Why does starting with a primary path make sense for an actual 12-year-old, given that all three traditions are needed long-term?`,
          },
          reflectionPrompt: `Looking at the path you didn't pick, write 2-3 sentences on what you'd most want to add to your practice in the next year. Synthesis is rarely about picking one path; it's about picking a starting place and growing.`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Final Check: The Whole Band`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Across all 20 lessons of this band, what is the most consistent skill being developed?`,
              options: [
                `Memorizing facts about the brain`,
                `Source evaluation: distinguishing real evidence and careful argument from overreach, regardless of which side or tradition is being evaluated`,
                `Following a single contemplative tradition`,
                `Becoming spiritual`,
              ],
              correctIndex: 1,
              explanation: `Source evaluation cuts across every lesson. Every contested figure, every viral wellness claim, every primary source, every disagreement among scientists. The skill is portable to almost every area of life.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Which best summarizes what this band claims about contemplative practice?`,
              options: [
                `It cures all problems`,
                `It does nothing real`,
                `Real benefits exist (improved attention, reduced anxiety, modest brain changes, emotional regulation), they are bounded, they come from consistent practice over time, and the wellness industry consistently oversells them`,
                `Only certain religions count`,
              ],
              correctIndex: 2,
              explanation: `This is the careful integrated view the band has developed: take the real benefits seriously, recognize the overreach when you see it, and build small consistent practices that produce the measured benefits.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the difference between Jung's careful concepts and pop versions of "Jungian" ideas?`,
              options: [
                `There's no difference`,
                `Jung's actual writing is denser, more careful, more qualified, often less dramatic; pop versions flatten his thought into simplified slogans that often go beyond what he himself claimed`,
                `Jung was wrong; pop is right`,
                `Pop is older than Jung`,
              ],
              correctIndex: 1,
              explanation: `This distinction matters because Jung is one of the most influential and most misrepresented thinkers of the 20th century. Reading him directly produces different understanding than reading pop summaries.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does the band repeatedly emphasize "asking which framework someone is using"?`,
              options: [
                `Because all frameworks are equally valid`,
                `Because contested words like "ego," "consciousness," "manifestation," "synchronicity," and "ego" get used by different traditions to mean different things, and clarity about which framework is in play prevents arguments where people are talking past each other`,
                `Because frameworks don't matter`,
                `Because only one framework is correct`,
              ],
              correctIndex: 1,
              explanation: `This is one of the most useful intellectual moves in the band. Different traditions use the same words differently. Knowing which framework is in play is what separates real conversation from talking past each other.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the band's recommendation about wellness industry health claims?`,
              options: [
                `Believe them all`,
                `Reject them all`,
                `Apply systematic source evaluation: what specifically is being claimed, who is making the claim, what evidence supports the specific mechanism, is the claim falsifiable, is there a product being sold, what's the gap between the actual research and the claim being made`,
                `Don't pay attention`,
              ],
              correctIndex: 2,
              explanation: `Systematic evaluation. Not blanket trust, not blanket dismissal. Real assessment based on specific signals. This is the literacy skill most adults lack.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the band recommend about contested figures like Dispenza?`,
              options: [
                `Believe them completely`,
                `Dismiss them completely`,
                `Hold multiple views at once: identify what practitioners are seeing accurately, what working scientists are concerned about, what skeptics are protecting against; recognize where real practices wrap in overstated claims, without either embracing or dismissing the whole figure`,
                `Avoid talking about them`,
              ],
              correctIndex: 2,
              explanation: `Nuanced thinking on contested figures is one of the most valuable cognitive skills. Most adults pick a team. The few who don't are the clearest thinkers in any room.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the most honest answer to "what is consciousness?"`,
              options: [
                `It's just brain chemistry`,
                `It's a soul`,
                `Modern science can explain many cognitive functions of the brain but cannot fully explain why there is subjective experience at all (Chalmers' Hard Problem); the question is genuinely unresolved, and intellectual humility is appropriate`,
                `It's the universe waking up`,
              ],
              correctIndex: 2,
              explanation: `This is the honest answer the band has tried to model: real uncertainty acknowledged, careful framing of what is and isn't known, no overclaiming in any direction.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the recommended posture toward NDEs, non-duality, and other phenomena at the edges of what science can investigate?`,
              options: [
                `Believe them fully`,
                `Dismiss them fully`,
                `Take reports seriously without taking interpretations as final; engage with multiple framings; hold contested questions open while continuing to live thoughtfully; evaluate sources on methodology rather than on preferred conclusion`,
                `Avoid them`,
              ],
              correctIndex: 2,
              explanation: `This is the intellectual humility framework. It's harder than picking a side. It's also usually more accurate when evidence genuinely doesn't settle the question.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: After completing this band, the goal is to have all answers about consciousness, mind, and meaning.`,
              correctAnswer: false,
              explanation: `False. The goal is to have better questions, better tools for evaluating answers others offer, and the discipline to hold genuine uncertainty without rushing to comfortable conclusions. Wisdom is partly knowing what you don't know.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Given everything you've learned, what is the most useful next step for actually using this knowledge?`,
              options: [
                `Memorize all the lessons`,
                `Forget the lessons and live spontaneously`,
                `Pick one or two specific practices from across the band (a small daily contemplative practice, a journaling habit, regular source evaluation of health claims, alignment audits) and actually start them, then refine and add over time as practices land or don't`,
                `Wait until you're older`,
              ],
              correctIndex: 2,
              explanation: `The whole band has built toward this practical answer. Knowledge becomes useful only when applied. Starting small, with one or two specific practices, beats trying to integrate everything at once. This is exactly the integrator approach: discernment about what to start with given who you actually are.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Final Reflection: The Whole Band`,
          intro: `This is the last reflection screen of the Inner World Voyager band. Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which lesson in this band changed your thinking most? Why? What specifically shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which intellectual skill have you most clearly developed across these 20 lessons? When did you first notice yourself using it?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Who are you now that you weren't 20 lessons ago? Be specific about how your thinking has changed.` },
            { id: `reflect-application`, category: `Application`, prompt: `What's ONE specific practice or habit from this band you actually want to start in your real life in the next month?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest critique of this whole band? Where might these 20 lessons have led you astray or missed something important?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Five years from now, when you're 17, what do you most hope you'll be doing differently because of what you learned in these lessons?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `From Band To Life`,
          guideContext: `The lessons end. The work begins. Two paths below for actually using everything you learned.`,
          familyActivity: {
            title: `The Capstone Conversation`,
            duration: `45 minutes`,
            description: `At a family dinner this week, share that you've completed a 20-lesson program on consciousness, mind, and meaning. Tell them about three specific things you learned that most changed your thinking. Then ask each family member: what's one thing you've been wondering about consciousness, mind, or meaning that you'd like to discuss? Have a real conversation about deep questions. You now have the framework to engage with these conversations more thoughtfully than most people in your family. This isn't to show off. It's to share what you've worked hard to develop, in a way that strengthens the family's collective thinking.`,
          },
          projectOption: {
            title: `Build Your Practice, 30 days (optional capstone project)`,
            duration: `30 days, ~10-15 minutes per day`,
            description: `Based on the argument you made today, commit to a specific 30-day starting practice. If you chose Inner Explorer: daily 15-minute journaling on questions from the band. If you chose Engaged Practitioner: daily 10-minute contemplative practice plus one daily action toward a chosen value. If you chose Wise Integrator: 5 minutes of reflection plus 5 minutes of practice plus 5 minutes of values-aligned action daily. Each day log briefly what you did. After 30 days, write 1,000 words on what you learned about your own practice. This is the most ambitious project in the whole band. Many adults never do anything like this. Doing it at 12, even imperfectly, puts you somewhere very few people are.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. The 30-day commitment is real. Support its quiet seriousness.`,
          },
          identityQuestion: `Twenty lessons in. The work doesn't end here. Who are you choosing to become with what you now know?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who are you, having completed this band?`,
          prompt: `One sentence. This is your capstone declaration.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can evaluate any health claim, philosophical argument, or contested figure with discernment.`,
            `A person who is consciously designing my own inner life instead of inheriting one.`,
            `Someone who knows the difference between real science and pop overreach, real philosophy and viral content, real contemplation and spiritual self-importance.`,
          ],
          saveKey: `identity_responses_iw_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You have completed the Inner World Voyager band. Twenty lessons. Real philosophy. Real neuroscience. Real contemplative inquiry. Real primary source reading. Real argument construction. Real source evaluation. You can think more clearly about consciousness, mind, emotion, and meaning than the vast majority of adults. You can read Jung directly. You can evaluate Dispenza's claims with nuance. You can hold contested questions open. You can build a small contemplative practice that actually fits your life. You can align daily action with values. This is real intellectual and spiritual training, completed at 12. What you do with it now is the work of the next decades. I am proud of you. The lessons have ended. The conscious life begins. — Sage`,
          badge: `inner-world-graduate`,
          badgeName: `Inner World Graduate`,
          xpEarned: 100,
          competencies: [
            `Has completed comprehensive education in philosophy of mind, neuroscience, contemplative traditions, and applied wisdom`,
            `Can synthesize 20 lessons into a coherent personal life philosophy`,
            `Can build and defend a real argument about how to design a conscious life`,
            `Has practiced source evaluation, primary source reading, perspective-taking, and argument construction across diverse domains`,
            `Is equipped to continue lifelong inner work with the tools developed in this band`,
          ],
          nextLessonPreview: {
            title: `Inner World Voyager Band Complete`,
            hook: `Twenty lessons. One synthesis. Your conscious life now begins. The next bands of Coreverse continue to deepen, but Inner World as foundation is now yours. Carry it well.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L20 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection — CAPSTONE 100 XP`
  );
}
