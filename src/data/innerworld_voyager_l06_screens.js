// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L06 — Dr. Joe Dispenza: Three Honest Views
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Contested Figures, Scientific Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: PERSPECTIVES (3 views on a contested figure)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l06-v1";

const INNERWORLD_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-06`,
      title: `Dr. Joe Dispenza: Three Honest Views`,
      duration: 35,
      xpReward: 75,
      badge: `nuanced-thinker`,
      badgeName: `Nuanced Thinker`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, Joe Dispenza has millions of followers and makes extraordinary claims about healing through meditation. The evidence is contested. This lesson doesn't tell you what to think about him — it teaches you to hold three different perspectives simultaneously: his practitioners, working neuroscientists, and direct skeptics. That skill is more valuable than any verdict.`,
          headline: `Dr. Joe Dispenza`,
          subtitle: `How to think clearly about a contested figure.`,
          visual: `/voyager-assets/inner-world/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Who Is Joe Dispenza`,
          paragraphs: [
            `Joe Dispenza was born in 1962 in New Jersey. He trained as a chiropractor and graduated from Life University's chiropractic program. In 1986, he was hit by an SUV while cycling in a triathlon and broke six vertebrae. Doctors told him he needed surgery and would likely have lasting impairment. He refused the surgery. He chose instead to spend ten weeks lying still, visualizing every cell of his spine healing. He has said he made a full recovery. This experience became the foundation of his career.`,
            `Since the early 2000s, Dispenza has built one of the largest personal-development and mind-body healing brands in the world. He has written several bestselling books including Breaking the Habit of Being Yourself, You Are the Placebo, and Becoming Supernatural. He runs weeklong workshops attended by thousands of people. He has a large online program and a substantial YouTube and social media presence.`,
            `What does he claim? In his teaching, he argues that meditation combined with specific mental states can change physical reality, heal serious illness, and even produce phenomena he calls "supernatural." He cites neuroscience, quantum physics, and the placebo effect to support his claims. Whether his interpretations of those fields are accurate is exactly what the three views in today's lesson disagree about.`,
          ],
          image: `/voyager-assets/inner-world/l06-s1-bio.webp`,
          imageCaption: `Joe Dispenza, the most-followed figure in mind-body healing.`,
          vocab: [
            {
              word: `contested figure`,
              definition: `A public person whose work or claims sincere, intelligent people disagree strongly about. Not the same as a fraud or a hero, but someone whose actual value is genuinely debated.`,
              audioPrompt: `A contested figure is a public person whose work sincere intelligent people disagree about, {name}. The disagreement isn't between believers and idiots. It's between people who genuinely interpret the same evidence differently, or who weight different kinds of evidence differently. Joe Dispenza is contested. So is Jordan Peterson. So is Deepak Chopra. So are many figures who blend real science with personal interpretation. Learning to hold three or more views of a contested figure in your mind at once, without rushing to pick a side, is a real cognitive skill.`,
            },
            {
              word: `placebo effect`,
              definition: `The measurable phenomenon in which a person's belief or expectation that a treatment will work produces real physiological change, independent of the treatment itself.`,
              audioPrompt: `The placebo effect is the measurable phenomenon in which a person's belief that a treatment will work produces real physiological change, {name}. It is not a trick or a sign that someone was fooled. It is a genuine biological mechanism. Dispenza cites the placebo effect as part of the evidence for his claims about mental states healing the body. Researchers take the placebo effect seriously. It is real. The debate is whether Dispenza's interpretation of it, extending it to heal serious illness through belief alone, is supported by the evidence or goes far beyond it.`,
            },
            {
              word: `mind-body healing`,
              definition: `The field of practice and research concerned with how mental states, beliefs, and practices can influence physical health.`,
              audioPrompt: `Mind-body healing refers to the field concerned with how mental states and practices can influence physical health, {name}. Dispenza has built one of the largest mind-body healing brands in the world, drawing on neuroscience and the placebo effect to support his claims. The field itself is real and actively researched. Meditation reducing stress, visualization improving performance, expectation affecting pain pathways, all of these are established findings. What gets contested is how far those real findings can be extended, whether they support the most dramatic healing claims being made.`,
            }
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What His Practitioners Say`,
          paragraphs: [
            `Millions of people credit Dispenza's work with real change in their lives. The community around him is large, devoted, and sincere. People in his workshops report reductions in chronic pain, improvements in anxiety and depression, better sleep, and stronger relationships. Some report things harder to verify: shrinking tumors, reversed autoimmune conditions, healings doctors couldn't explain.`,
            `What's the practice? The core of Dispenza's method is long daily meditations combining visualization, emotional cultivation, and what he calls "elevated states." Practitioners are asked to viscerally imagine their healed self while feeling deep gratitude and joy. The idea is that combining a clear mental image with strong positive emotion sends a signal to the body that creates physical change. He layers in concepts from quantum physics, suggesting that focused attention can collapse multiple possible realities into one.`,
            `Even researchers who criticize Dispenza's claims acknowledge that long daily meditation, visualization, and emotional regulation are practices that have real benefits when done seriously. Reducing chronic stress affects inflammation. Visualization improves motor performance in athletes. Sustained positive emotion correlates with better health outcomes. Some of what's happening in his workshops is almost certainly real benefit from real practices. The disagreement is about whether the mechanism is what he claims, and whether the most dramatic healing claims are accurate.`,
          ],
          image: `/voyager-assets/inner-world/l06-s2-practitioners.webp`,
          imageCaption: `Real practices, real reported benefits, contested mechanism.`,
          vocab: [
            {
              word: `practitioner`,
              definition: `Someone who actively practices a method. In Dispenza's world, practitioners are people doing his meditations, attending workshops, and reporting results.`,
              audioPrompt: `A practitioner is someone who actively does a practice, {name}. Dispenza's practitioners are people who do his meditations regularly, attend his workshops, and report results. When considering a contested figure, you have to take practitioner experience seriously without taking it as final proof. Real things often happen to practitioners. The question is what's actually causing those things. The same workshop attendee who reports a healing might be experiencing the placebo effect, the benefits of meditation generally, regression to the mean, spontaneous recovery, or any combination. Honoring their experience without confusing it with the mechanism Dispenza claims is the move.`,
            },
            {
              word: `elevated states`,
              definition: `In Dispenza's method, the specific emotional states of deep gratitude and joy that practitioners are guided to cultivate during meditation, believed to send a healing signal to the body.`,
              audioPrompt: `Elevated states is the term Dispenza uses for the specific emotional states, deep gratitude and joy, that practitioners cultivate during his meditations, {name}. His method combines a clear mental image of a healed self with these elevated states, based on the idea that the combination sends a signal to the body that creates physical change. Researchers who are skeptical of his framework still acknowledge that visualization and positive emotional regulation are practices with real documented benefits. The debate is about the specific mechanism he claims, not about whether emotional cultivation does anything at all.`,
            },
            {
              word: `emotional cultivation`,
              definition: `The deliberate practice of generating and sustaining specific emotional states, such as gratitude or joy, as part of a meditative or healing method.`,
              audioPrompt: `Emotional cultivation is the deliberate practice of generating and sustaining specific emotional states as part of a meditative method, {name}. In Dispenza's workshops, practitioners viscerally feel deep gratitude and joy while visualizing their healed self. Even researchers who dispute his mechanism acknowledge that sustained positive emotion correlates with better health outcomes. The question his critics raise is whether those effects work through the channel Dispenza claims, or through well-understood mechanisms of stress reduction and emotional regulation.`,
            }
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Working Neuroscientists Say`,
          paragraphs: [
            `Many working neuroscientists and placebo researchers have publicly stated that Dispenza significantly overstates what the evidence supports. They are not dismissive of meditation or mind-body practices. Often they are doing the actual research in these fields. Their concern is specific: Dispenza takes real findings (meditation reduces stress, expectation activates pain-relief pathways, visualization helps athletes) and extrapolates them into claims the evidence does not support (curing terminal illness through belief, becoming "supernatural" through meditation, using quantum physics to manifest healing).`,
            `The quantum physics piece is particularly contested. Working physicists have stated that Dispenza's use of quantum terms is not consistent with how quantum mechanics actually works. Concepts like observer effects, superposition, and wave function collapse have specific technical meanings at subatomic scales. Applying them to human-scale events like healing a tumor is, in physicist Sean Carroll's words, "not physics." Many self-help teachers use quantum language this way. It sounds scientific. It is not.`,
            `These scientists would say something like this. Long meditation has real benefits. Visualization works for some things. The placebo effect is genuine. Practitioners may be experiencing genuine improvements from real mechanisms. But the framework Dispenza wraps around those benefits, the specific mechanism he claims, and the most dramatic healing claims he supports, are not consistent with current evidence. People in serious medical situations who follow his methods instead of evidence-based treatment can be harmed. This is the core concern.`,
          ],
          image: `/voyager-assets/inner-world/l06-s3-scientists.webp`,
          imageCaption: `The scientists doing the actual research often dispute the framework.`,
          vocab: [
            {
              word: `extrapolation`,
              definition: `Taking a real finding and extending it beyond what the evidence supports.`,
              audioPrompt: `Extrapolation is taking a real finding and extending it beyond what the evidence supports, {name}. A real finding might be "meditation reduces stress measurably in 8 weeks." Extrapolation turns that into "meditation can cure any disease." Both contain the word meditation. Both sound related. But the second goes far beyond what the first actually shows. Spotting extrapolation is one of the most useful scientific literacy moves. When a claim sounds bigger than what the underlying research supports, the extra is extrapolation, not evidence.`,
            },
            {
              word: `quantum physics`,
              definition: `The branch of physics describing the behavior of matter and energy at subatomic scales. Its technical concepts, such as observer effects and wave function collapse, have specific meanings that do not apply at human scale.`,
              audioPrompt: `Quantum physics describes behavior at subatomic scales, {name}. Concepts like observer effects, superposition, and wave function collapse have precise technical meanings that apply only at subatomic scales. Working physicists have stated that Dispenza's use of quantum language is not consistent with how quantum mechanics works. Applying these concepts to human-scale events like healing a tumor is, in physicist Sean Carroll's words, not physics. Quantum language is one of the most common ways wellness writing sounds scientific without being so. Recognizing the difference is a genuine scientific literacy skill.`,
            },
            {
              word: `evidence-based treatment`,
              definition: `Medical or psychological treatment that has been tested in controlled studies and shown to produce reliable results. The standard of care in medicine and regulated health professions.`,
              audioPrompt: `Evidence-based treatment refers to medical or psychological interventions tested in controlled studies and shown to produce reliable results, {name}. Working neuroscientists and skeptics share one core concern about Dispenza's framework: people in serious medical situations who follow his methods instead of evidence-based treatment can be harmed. The debate about mechanisms and quantum language would matter less if the stakes were lower. They are not lower when someone with a serious illness skips rigorously tested treatment in favor of an untested framework.`,
            }
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Direct Skeptics Say`,
          paragraphs: [
            `A third group is more directly critical. The science-based medicine community, including doctors like Steven Novella and David Gorski, and the broader skeptic movement, see Dispenza as a more concerning figure. Their view goes further than the cautious scientists in Section 3. They argue that Dispenza's combination of medical-sounding claims, expensive workshops, testimonials over evidence, and conspiracy implications about mainstream medicine creates real risk to vulnerable people.`,
            `Their specific concerns. The workshops cost thousands of dollars and attract people in serious medical situations. Testimonials are not controlled studies. People who attend and improve may have improved anyway, or may be experiencing temporary placebo benefit. People who attend and don't improve are rarely heard from. People with serious illness who skip evidence-based treatment for Dispenza's methods can die. Skeptics also note that Dispenza has not published peer-reviewed research of his own claims in the time he has been making them, despite running a large operation with substantial resources.`,
            `Skeptics are sometimes accused of being closed-minded. The honest version of skepticism isn't closed-mindedness. It is a high standard of evidence specifically because the cost of being wrong is high. If meditation doesn't cure cancer and you tell someone with cancer that it can, the cost is potentially their life. Skeptics argue this asymmetry, real harm from wrong belief, real harm rarely from waiting for better evidence, justifies their stricter standard. Whether you agree with how strongly they apply that standard is part of what's contested.`,
          ],
          image: `/voyager-assets/inner-world/l06-s4-skeptics.webp`,
          imageCaption: `The strictest standard: high evidence required because the cost of being wrong is high.`,
          vocab: [
            {
              word: `skepticism`,
              definition: `An approach to claims that requires strong evidence before acceptance. Not the same as cynicism; honest skepticism is open to being convinced by good evidence.`,
              audioPrompt: `Skepticism is an approach to claims that requires strong evidence before acceptance, {name}. Honest skepticism is not cynicism or closed-mindedness. A real skeptic says "show me the evidence" and then actually updates their view when evidence comes. The closed-minded version refuses to update no matter what. Real skeptics can be convinced. They just have a high standard, especially when the cost of being wrong is high. When evaluating contested figures, ask whether the skeptics making the case have the open-to-evidence kind or the closed kind. Both exist.`,
            },
            {
              word: `peer-reviewed research`,
              definition: `Scientific research that has been evaluated by other experts in the field before publication. The standard quality-control mechanism for scientific claims.`,
              audioPrompt: `Peer-reviewed research is scientific work evaluated by other experts in the field before it is published, {name}. It is the standard quality-control mechanism for scientific claims. Skeptics note that Dispenza has not published peer-reviewed research supporting his own claims in the time he has been making them, despite running a large operation with substantial resources. This is a specific, pointed critique. If a teacher claims to have discovered how the mind heals the body, and has the resources to study it, but does not submit that claim to the scrutiny of other experts, that is itself a signal worth weighing.`,
            },
            {
              word: `testimonial`,
              definition: `A personal account of a result or experience. Sincere and potentially real, but not controlled for placebo, spontaneous recovery, or selection bias, making it weaker evidence than a study.`,
              audioPrompt: `A testimonial is a personal account of a result or experience, {name}. Testimonials can be completely sincere and describe real changes. Skeptics argue they are insufficient evidence because they don't account for placebo effect, regression to the mean, spontaneous recovery, or the fact that people who tried the method and did not improve rarely speak publicly. The skeptic critique is not that testimonials are lies. It is that testimonials alone cannot distinguish what actually caused the improvement. Controlled studies exist precisely to answer the causal question that testimonials cannot.`,
            }
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Holding Three Views At Once`,
          paragraphs: [
            `Here is the move you are learning. Instead of asking "is Dispenza right or wrong," ask "what is each view seeing accurately, and what is each view missing?" The practitioners are seeing that long meditation and emotional cultivation produce real benefits. They may be missing that those benefits come from well-understood mechanisms, not from Dispenza's unique framework. The neuroscientists are seeing that he extrapolates beyond evidence. They may be missing that real subjective improvement matters even when the explanation is wrong. The skeptics are seeing the harm risk for vulnerable people. They may be missing that not every workshop attendee is a vulnerable cancer patient skipping chemo.`,
            `Holding all three lets you think more clearly than picking any one. You can take meditation seriously, recognize what placebo and visualization actually do, acknowledge that some of Dispenza's framework probably overstates the science, and notice that people in real medical trouble should get real medical treatment. None of these positions contradict each other. They are partial views of a complicated situation.`,
            `This is the skill: don't pick a team. Pick the truth in each view. The mature thinker can say, "I think Dispenza's meditation practices produce real benefits AND his quantum physics framework isn't accurate AND skeptics are right that vulnerable people can be harmed AND practitioners aren't lying about what they experience." All four are simultaneously defensible. The world is full of contested figures where this level of holding multiple views is the actual answer.`,
          ],
          image: `/voyager-assets/inner-world/l06-s5-holding.webp`,
          imageCaption: `Mature thinking holds multiple partial views without forcing a single verdict.`,
          vocab: [
            {
              word: `nuanced thinking`,
              definition: `Holding multiple partial views of a complicated situation at once, instead of collapsing it into a simple yes/no verdict.`,
              audioPrompt: `Nuanced thinking is holding multiple partial views of a complicated situation at once, {name}. Most contested topics aren't 100% right or 100% wrong. They have multiple sides each seeing something real and missing something real. The mature thinker doesn't rush to a verdict. They identify what each view is seeing accurately, what each view is missing, and where the actual truth lies in the combination. Nuanced thinking is a real skill that takes practice. It is the opposite of social media debate where everyone has to pick a team. Practice it on small things first. It will protect you from a lot of bad thinking.`,
            },
            {
              word: `partial views`,
              definition: `Perspectives that each see something real and accurate while also missing something. Most contested situations are better understood as a combination of partial views than as one completely right answer.`,
              audioPrompt: `Partial views are perspectives that each see something real and also miss something, {name}. Practitioners see real benefits from long meditation. Scientists see the explanatory framework overstating the evidence. Skeptics see harm risk for vulnerable people. Each is accurate about something and misses something the others catch. The mature move is not to pick the one right view and discard the rest. It is to identify what each view sees accurately and build a more complete picture from the combination. Most complicated situations are better understood through partial views than through a single verdict.`,
            },
            {
              word: `placebo`,
              definition: `A treatment with no active ingredient that produces real measurable effects through expectation and belief. A genuine biological mechanism, not just imagination.`,
              audioPrompt: `A placebo is a treatment with no active ingredient that nonetheless produces real measurable effects, {name}. It works through expectation and belief activating genuine biological mechanisms. When thinking through contested figures like Dispenza, placebo is one of the real mechanisms that might explain why practitioners experience genuine improvement even if the specific framework they are given is not accurate. Honoring placebo as a real explanation, rather than treating it as a dismissal, is an important nuanced move. Real improvement from real mechanisms matters, even when the mechanism isn't the one being claimed.`,
            }
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l06-perspectives`,
          type: `perspectives`,
          headline: `Three Views On Joe Dispenza`,
          intro: `Below are three positions on Dispenza, each strongly held by sincere people. They aren't all equally weighted, but they are all real views. Read them carefully. Then weigh in.`,
          positions: [
            {
              id: `practitioner`,
              label: `The Practitioner View`,
              thinker: `Long-term workshop attendees and meditation practitioners in his community`,
              statement: `Long daily meditation, visualization, and emotional cultivation produce real, life-changing benefits. The framework Dispenza provides organizes practices that work. Even if some of his more specific neuroscience or quantum claims oversimplify the science, the practical effect on practitioners is real. Reductions in chronic pain, anxiety, and stress are common and measurable. Some workshop attendees report dramatic healings. Even if not every story is fully accurate, the overall transformative effect of the practice is clear in this community.`,
            },
            {
              id: `neuroscientist`,
              label: `The Working Scientist View`,
              thinker: `Placebo researchers and neuroscientists like Tor Wager, and physicists like Sean Carroll`,
              statement: `The underlying practices Dispenza teaches (meditation, visualization, emotional regulation) have well-documented modest benefits. But his framework, especially the quantum physics claims and the suggestion that meditation can cure serious illness, significantly overstates what evidence supports. People may be benefitting from real mechanisms while being told the cause is something it isn't. The danger is that this framework gets applied to serious illness where real treatment is needed.`,
            },
            {
              id: `skeptic`,
              label: `The Direct Skeptic View`,
              thinker: `Steven Novella, Edzard Ernst, and the science-based medicine community`,
              statement: `Dispenza combines medical-sounding language with anecdotal evidence and expensive workshops. He has not published peer-reviewed research of his own claims in 20+ years of making them. He profits from people in serious situations. The harm risk for vulnerable people who skip real treatment based on his framework is real and serious. Even if some practitioners benefit, the systemic effect of his work is net harmful because of how it's structured and what it claims.`,
            },
          ],
          reflectionPrompt: `Which view sits with you most? Notice: you don't have to pick one. Could you imagine holding pieces of all three at once? What would that look like?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is Joe Dispenza's professional training?`,
              options: [
                `MD in neurology`,
                `PhD in physics`,
                `Chiropractic degree`,
                `PhD in placebo research`,
              ],
              correctIndex: 2,
              explanation: `Dispenza holds a chiropractic degree. He has not trained as a medical doctor, neuroscientist, or physicist. This becomes relevant when he makes specific claims in those fields.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a "contested figure"?`,
              options: [
                `A fraud everyone agrees is wrong`,
                `A public person whose work sincere intelligent people genuinely disagree about`,
                `A celebrity who is famous`,
                `Someone who fights a lot`,
              ],
              correctIndex: 1,
              explanation: `Contested figures aren't frauds or heroes. They're people where smart sincere people interpret the same evidence differently. Dispenza is contested in this technical sense.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the strongest version of the practitioner view?`,
              options: [
                `Dispenza is 100% scientifically correct about everything`,
                `Long meditation, visualization, and emotional cultivation produce real benefits, and Dispenza's framework organizes practices that work for many practitioners`,
                `Anyone who criticizes Dispenza is closed-minded`,
                `Mainstream medicine is wrong`,
              ],
              correctIndex: 1,
              explanation: `The strongest practitioner view acknowledges Dispenza's framework may not be fully scientifically accurate, but argues the practices produce real benefits. Mature views from any side acknowledge where the other side has a point.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What concern do working neuroscientists most commonly raise about Dispenza?`,
              options: [
                `That he is a fraud`,
                `That he takes real findings and extrapolates them dramatically beyond what the evidence supports, particularly the quantum physics claims`,
                `That meditation doesn't work`,
                `That he should be banned`,
              ],
              correctIndex: 1,
              explanation: `Working neuroscientists generally don't say "fraud." They say "extrapolation beyond evidence." Meditation works; the framework Dispenza wraps around it overstates what's been measured.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is the quantum physics critique particularly important?`,
              options: [
                `Because quantum physics is the most important science`,
                `Because using quantum terms loosely makes claims sound scientific when they aren't, and many self-help teachers use this pattern`,
                `Because physicists are smarter than chiropractors`,
                `Because quantum physics is too complicated for non-experts`,
              ],
              correctIndex: 1,
              explanation: `Quantum language is one of the most common ways pseudoscience disguises itself as science. Real quantum mechanics has specific technical meanings at subatomic scales. Applying it to human-scale events is what physicists call "not physics."`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the difference between an honest skeptic and a cynic?`,
              options: [
                `They're the same thing`,
                `An honest skeptic requires strong evidence but is genuinely willing to update their view when evidence appears; a cynic refuses to update no matter what`,
                `Skeptics are always right`,
                `Cynics are smarter`,
              ],
              correctIndex: 1,
              explanation: `Real skepticism is openness to being convinced by good evidence, paired with a high standard for what counts. Cynicism is closed regardless of evidence. The distinction matters because both get called "skeptical."`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why are testimonials weaker evidence than controlled studies?`,
              options: [
                `Because people lie`,
                `Because testimonials don't account for placebo effect, regression to the mean, spontaneous improvement, or selection bias (we hear from people who improved, not from people who didn't)`,
                `Because testimonials are too short`,
                `Because they're not written by scientists`,
              ],
              correctIndex: 1,
              explanation: `Testimonials may be honest reports. But without controls, you can't tell if the improvement came from the intervention or from many other factors. Controlled studies are designed to answer that specific question.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does "holding three views at once" mean?`,
              options: [
                `Being indecisive`,
                `Refusing to ever pick a side`,
                `Identifying what each view sees accurately and what each view misses, so you can think more clearly than picking any single view alone`,
                `Believing everything everyone says`,
              ],
              correctIndex: 2,
              explanation: `Nuanced thinking isn't fence-sitting. It's recognizing that complicated topics often have multiple partial truths, and the most accurate view combines what each side is seeing rightly.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If a workshop attendee reports a genuine improvement, that proves the workshop's framework is scientifically accurate.`,
              correctAnswer: false,
              explanation: `False. The improvement may be real but caused by mechanisms different from what the framework claims (placebo, regression to mean, real benefits of meditation generally, etc.). Real subjective improvement is not the same as proof of the explanation.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A family member is excited about a Dispenza workshop and thinking of attending. Based on this lesson, what's the most thoughtful response?`,
              options: [
                `Tell them it's all fake and they shouldn't go`,
                `Tell them it's all real and Dispenza is right about everything`,
                `Acknowledge that the practices (meditation, visualization) have real benefits, gently mention that some of the framework is contested by working scientists, and check whether they have any serious medical condition where the workshop might replace real treatment`,
                `Refuse to discuss it`,
              ],
              correctIndex: 2,
              explanation: `Nuanced thinking applied to a real conversation: honor what's real about the practice, name what's contested, focus the concern where actual harm could happen (replacing real treatment for serious conditions). This is mature engagement, not dismissal or endorsement.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which of the three views did you find yourself agreeing with most strongly? What did the other two views get right that yours might miss?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Was it uncomfortable to hold three views at once instead of picking one? What did the discomfort feel like? What might that say about how you usually think?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most adults pick a team on figures like this. What would it look like for you to NOT pick a team, while still being a clear thinker? What kind of person does that make you?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of another contested figure in your world (a politician, an athlete, a teacher, a public personality). Apply the three-views move to them. What do practitioners, neutral observers, and direct critics each see?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the entire "three views" frame be wrong? Are there times when one view is just correct and the others should be dismissed? When?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Have you ever followed a teacher, influencer, or community where you might have been overstating their accuracy? What signals would have helped you notice sooner?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Contested figures are everywhere in modern life. The skill of holding multiple views without rushing to a verdict will serve you in politics, news, social media, family arguments, and your own intellectual life. Two paths below.`,
          familyActivity: {
            title: `The Three Views Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, pick one figure your family disagrees about (a politician, a public personality, a coach, a celebrity, even a relative). Have each person try to articulate the strongest version of three views: the fan view, the neutral observer view, and the critic view. The rule: nobody can mock any of the three views. Then together discuss: what is each view seeing accurately? What is each missing? This exercise is harder than it sounds. Practice it as a family and you will be one of very few who think this way in public life.`,
          },
          projectOption: {
            title: `The Contested Figure Notebook, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, pick one public figure from the news, social media, or your own life. Write a paragraph for each of the three views (fan, neutral, critic) on that figure. Try to make each view as strong as you can. After 14 days, write 500 words on what you've learned about thinking through contested figures. You'll find patterns. You'll also find your own automatic responses get exposed (the figures you wanted to defend versus the ones you wanted to attack). This is real intellectual training.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If most people pick a team and stop thinking, what does it look like to be the kind of person who keeps thinking?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can hold three views of a contested figure without rushing to pick one.`,
            `A person who looks for what each side is seeing accurately, not just who to side with.`,
            `Someone who can take meditation seriously and notice extrapolation at the same time.`,
          ],
          saveKey: `identity_responses_iw_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three honest views of a contested public figure, distinguish what each view sees accurately and what each view misses, recognize when real practices are wrapped in overstated scientific claims, and hold multiple partial truths in mind at once. This is rare and valuable thinking. Most adults default to picking a team. The few who don't are the clearest thinkers in any room. Next time we go into the actual science of what meditation does to the brain. We will read directly from one of the lab papers that started the modern neuroscience of meditation. Real science, primary source, close reading. See you there. — Sage`,
          badge: `nuanced-thinker`,
          badgeName: `Nuanced Thinker`,
          xpEarned: 75,
          competencies: [
            `Can articulate three sincere views of a contested figure`,
            `Can identify what each view sees accurately and what each misses`,
            `Recognizes overstated scientific framing around real practices`,
            `Has practiced nuanced thinking on a current controversial figure`,
            `Knows the difference between honest skepticism and cynicism`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Meditation Neuroscience — Reading the Research`,
            hook: `We move from the contested into the well-established. Real fMRI studies of meditators. We read one together, sentence by sentence.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.positions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L06 ${VERSION}] "${l.title}" — ${mags} magazine, ${persp} perspectives, ${quiz} quiz, ${reflect} reflection`
  );
}
