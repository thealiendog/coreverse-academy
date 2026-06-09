// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L10 — Past, Present, Future: Which Time Relationship Matters Most?
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Philosophy of Time, Practical Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (which time orientation produces the best life?)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l10-v1";

const INNERWORLD_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-10`,
      title: `Past, Present, Future: Which Time Relationship Matters Most?`,
      duration: 35,
      xpReward: 75,
      badge: `time-philosopher`,
      badgeName: `Time Philosopher`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, time is the most ordinary thing in your life and also one of the strangest. The past has already happened and you can't change it, but you spend a lot of mental energy on it. The future hasn't happened yet, and you can't fully predict it, but it shapes how you live right now. The present is the only place anything actually happens, but it's also the part most people miss. Different philosophical traditions take strong positions on which of these three you should focus on to live well. Today we look at three positions seriously. Then you pick one and defend it with real evidence.`,
          headline: `Past, Present, Future`,
          subtitle: `Which time relationship produces the best life?`,
          visual: `/voyager-assets/inner-world/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Time Actually Is`,
          paragraphs: [
            `Physicists have a strange relationship with time. The laws of physics, with one or two exceptions, work the same forward and backward. There's nothing in the basic equations that says time should flow in one direction. And yet we experience time flowing relentlessly forward. Why? This is called the arrow of time problem and physicists still debate it. One leading explanation involves entropy, the tendency of systems to become more disordered over time. The universe started in a low-entropy state and is moving toward higher entropy. That asymmetry may be what gives us our experience of past flowing into future.`,
            `Cognitive science has its own findings about time. Your brain doesn't experience time as a smooth flow. It constructs the experience of time from many separate processes. Different brain regions process duration, sequence, and timing in different ways. The feeling of "now" is itself constructed: by the time you're conscious of a present moment, it's actually 200-500 milliseconds in the past, because that's how long it takes your brain to process incoming signals. The "now" you experience is your brain's best reconstruction.`,
            `This matters for today's lesson because it means how you relate to time isn't a fixed feature of being human. It's shaped by which time orientations you cultivate. Some people live mostly in their past. Some live mostly in their future. Some, with practice, live mostly in their present. None of these is automatically right or wrong, but they produce very different kinds of lives. The wisdom traditions have a lot to say about which orientation produces a good life.`,
          ],
          image: `/voyager-assets/inner-world/l10-s1-time.webp`,
          imageCaption: `Time is real, but your relationship to it is partly chosen.`,
          vocab: [
            {
              word: `arrow of time`,
              definition: `The asymmetry between past and future in human experience, despite the laws of physics being mostly time-symmetric. A still-unresolved puzzle in physics.`,
              audioPrompt: `The arrow of time is the asymmetry between past and future in our experience, {name}. Most of the laws of physics work the same forward and backward. But we clearly experience time flowing one way. This is called the arrow of time problem. Physicists are still debating it. One leading explanation involves entropy, the tendency of systems to become more disordered. The universe started ordered and is moving toward disorder, and that asymmetry may be what gives our experience of past flowing into future. The question itself is one of the deepest in physics.`,
            },
            {
              word: `entropy`,
              definition: `The tendency of systems to become more disordered over time. One leading explanation for why time appears to flow in one direction rather than being symmetric.`,
              audioPrompt: `Entropy is the tendency of systems to become more disordered over time, {name}. It is one of the leading explanations physicists offer for the arrow of time. The universe started in a low-entropy, highly ordered state and is moving toward higher entropy and greater disorder. That asymmetry may be what gives us our experience of past flowing into future, rather than time being reversible in both directions. The laws of physics work the same forward and backward, but entropy only increases in one direction. This asymmetry is not just a fact about thermodynamics. It may be the deep reason time feels like it flows.`,
            },
            {
              word: `time orientation`,
              definition: `A habitual pattern of where attention and mental energy tend to flow: toward the past, the present, or the future. Shaped by practice and philosophical commitment.`,
              audioPrompt: `Time orientation is the habitual direction in which your attention and mental energy tend to flow, {name}. Some people live mostly in their past, replaying memories and regrets. Some live mostly in their future, planning and worrying. Some, with practice, live mostly in their present. Cognitive science has found that this is not a fixed feature of being human. It is shaped by what you cultivate. The philosophical traditions in this lesson take strong positions on which orientation produces a good life. Your time orientation shapes the texture of your daily experience and, over years, the shape of your life.`,
            }
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Stoicism: Focus On The Present`,
          paragraphs: [
            `Stoicism is a philosophical tradition that began in Athens around 300 BCE and reached its mature form in Roman thinkers like Marcus Aurelius, Epictetus, and Seneca. The Stoics had a clear position on time: the only moment that ever actually exists is the present moment. The past is gone and cannot be changed. The future hasn't happened yet and cannot be controlled. Your power, the entire scope of your real influence, is now.`,
            `Marcus Aurelius wrote his Meditations while serving as Roman emperor, often during military campaigns under enormous stress. The Meditations is full of present-focused reminders. "Confine yourself to the present." "The present is the only thing of which a man can be deprived." "Nowhere can a man find a quieter or more untroubled retreat than in his own soul." For Stoics, focusing on the present isn't an escape from responsibility. It's the most rigorous form of responsibility, because the present is the only place action is actually possible.`,
            `Modern psychology has substantially confirmed parts of the Stoic view. Mindfulness-based interventions (which descend partly from Stoic ideas via Buddhist mindfulness) reduce anxiety and depression in clinical trials. People who report living "in the moment" score higher on multiple measures of well-being. Excessive rumination about the past and excessive worry about the future correlate strongly with mental health problems. The Stoic position has real research behind it, even though the Stoics didn't know that's what they were doing.`,
          ],
          image: `/voyager-assets/inner-world/l10-s2-stoics.webp`,
          imageCaption: `Marcus Aurelius wrote his most lasting work focused entirely on the present.`,
          vocab: [
            {
              word: `Stoicism`,
              definition: `An ancient philosophical school emphasizing virtue, present-moment focus, and acceptance of what cannot be controlled. Lived rather than just thought.`,
              audioPrompt: `Stoicism is an ancient philosophical school emphasizing present-moment focus and acceptance of what cannot be controlled, {name}. It started in Athens around 300 BCE and reached its mature form in Roman thinkers like Marcus Aurelius. The core insight is that your real power exists only in the present. The past is gone. The future hasn't happened yet. What you can do, you can only do now. Stoicism is one of the few ancient philosophical schools that has been continuously practiced and read for over 2,000 years. Many modern therapy approaches descend partly from Stoic ideas.`,
            },
            {
              word: `Marcus Aurelius`,
              definition: `Roman emperor and Stoic philosopher (121–180 CE) who wrote the Meditations, a collection of personal Stoic reflections written during military campaigns. One of the best-known exemplars of applied Stoic philosophy.`,
              audioPrompt: `Marcus Aurelius was a Roman emperor and Stoic philosopher who lived from 121 to 180 CE, {name}. He wrote his Meditations while serving as emperor, often during military campaigns under enormous stress. The Meditations is a personal record of Stoic practice applied to a real and demanding life. Confine yourself to the present. The present is the only thing of which a man can be deprived. These are not abstract principles. They are what Aurelius told himself under real pressure. The fact that he wrote lasting philosophy while running an empire is itself evidence that present-focus is compatible with major responsibility.`,
            },
            {
              word: `acceptance`,
              definition: `In Stoic philosophy, the practice of acknowledging what cannot be controlled without resistance or distress, freeing attention and energy for what actually can be influenced.`,
              audioPrompt: `Acceptance in Stoic philosophy is the practice of acknowledging what cannot be controlled without inner resistance or distress, {name}. The past is gone and cannot be changed. The future hasn't happened and cannot be fully controlled. Accepting these facts is not resignation. It is the freeing of attention for the only place action is actually possible: the present. Modern clinical psychology, including mindfulness-based therapy, has substantially confirmed this Stoic insight. Acceptance of what cannot be changed is one of the evidence-based mechanisms by which present-focused practice reduces anxiety and depression.`,
            }
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Buddhism: Even The Present Is Constructed`,
          paragraphs: [
            `Buddhism shares the Stoic emphasis on the present moment but goes a step further. Buddhists generally say: yes, focus on the present, but also notice that the present itself is constantly arising and passing away. Holding onto it as a solid thing is another kind of suffering. The teaching of impermanence (anicca in Pali) is one of the three central marks of existence in Buddhist thought.`,
            `What does this mean practically? Stoics try to hold the present steady. Buddhists try to flow with the present's constant transformation. Each moment arises, has its moment, and passes. Trying to grasp it makes you suffer. Letting it pass freely makes the suffering loosen. The famous Buddhist meditation practice of vipassana (insight meditation) is largely about training the mind to observe arising and passing without grasping at any particular moment.`,
            `The Buddhist position is subtle. It doesn't say live recklessly in the moment with no thought of past or future. The Buddha was quite practical: prepare for the future, learn from the past. But don't mistake either for solid ground. The only ground that exists is this present moment, and even that is constantly changing. Practice noticing change. The acceptance of impermanence is itself part of what makes Buddhist time-philosophy distinct from Stoicism.`,
          ],
          image: `/voyager-assets/inner-world/l10-s3-buddhist.webp`,
          imageCaption: `Buddhists: yes the present, but the present itself is flowing.`,
          vocab: [
            {
              word: `impermanence`,
              definition: `In Buddhist philosophy, the teaching that all things constantly arise and pass away. Translated from Pali "anicca," one of the three marks of existence.`,
              audioPrompt: `Impermanence is the Buddhist teaching that all things constantly arise and pass away, {name}. The Pali word is anicca. It's one of the three marks of existence in Buddhist philosophy. The teaching isn't depressing, even though it sometimes sounds that way. Impermanence is what makes change possible, makes growth possible, makes the present moment fresh. Buddhists argue that suffering comes from trying to hold onto things, including pleasant moments, that are by their nature passing. Releasing the grip on transience is the practice.`,
            },
            {
              word: `vipassana`,
              definition: `An insight meditation practice in which the practitioner trains the mind to observe the arising and passing of experience without grasping or aversion. One of the core formal practices in Theravada Buddhism.`,
              audioPrompt: `Vipassana is an insight meditation practice training the mind to observe the arising and passing of experience without grasping or aversion, {name}. The Pali word means insight or clear seeing. The practice is largely about training direct observation of impermanence: watching each sensation and thought arise, have its moment, and pass, without clinging or pushing away. Buddhist contemplatives describe this as loosening the grip of clinging on experience. Practitioners report reduced suffering even in the face of major life changes, which several contemplative psychology studies have now examined.`,
            },
            {
              word: `anicca`,
              definition: `The Pali word for impermanence, one of the three marks of existence in Buddhist philosophy. The teaching that all things constantly arise and pass away.`,
              audioPrompt: `Anicca is the Pali word for impermanence, {name}. It is one of the three central marks of existence in Buddhist thought. The teaching is that all things constantly arise and pass away, with nothing remaining fixed. Buddhist time philosophy is built on anicca: yes, focus on the present, but notice that the present itself is constantly changing. Grasping at any moment creates suffering because you are trying to hold something that is by nature passing. Releasing the grip on what is transient is what the practice cultivates. This step beyond Stoic present-focus is what makes Buddhist time philosophy distinct.`,
            }
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Existentialism: The Future You Choose Creates You`,
          paragraphs: [
            `Existentialism is a 20th-century philosophical movement led by thinkers like Jean-Paul Sartre, Simone de Beauvoir, and Søren Kierkegaard. Existentialists have a very different take on time. For them, what matters most isn't the present in itself. What matters is the future you are creating through your choices right now. You become who you choose to be. Without that orientation toward the future, you are not yet anyone in particular.`,
            `Sartre's famous line is "existence precedes essence." This means: you don't have a fixed nature you were born with. You become someone through what you choose to do. Your essence (who you are) is built from your choices, which are always future-oriented. Every action is essentially a commitment about the kind of person you are becoming. To live without this future-oriented sense of becoming is, for existentialists, to live in "bad faith," to deny the responsibility of choice.`,
            `Modern psychology has its own version of this. Research on goal-setting shows that people who have specific meaningful goals report higher well-being than people who don't, even though goals are by definition about the future. Viktor Frankl, a Holocaust survivor and psychologist, argued in Man's Search for Meaning that having a sense of future meaning was one of the strongest predictors of who survived the camps psychologically. The existentialist emphasis on future-creation has real psychological support.`,
          ],
          image: `/voyager-assets/inner-world/l10-s4-existential.webp`,
          imageCaption: `You're not yet anyone. You become through what you choose.`,
          vocab: [
            {
              word: `existentialism`,
              definition: `A 20th-century philosophical movement emphasizing radical freedom, responsibility, and the creation of one's identity through future-oriented choices.`,
              audioPrompt: `Existentialism is a 20th-century philosophical movement emphasizing radical freedom and the creation of identity through choice, {name}. Existentialists like Sartre, Beauvoir, and Kierkegaard argue that you don't have a fixed nature. You become someone through your choices, which are always about the future. Every action is a kind of commitment about who you are becoming. This makes existentialism a future-oriented philosophy, even though existentialists are clear that the choosing happens in the present. The future you're creating shapes what the present action means.`,
            },
            {
              word: `bad faith`,
              definition: `In existentialist philosophy, the refusal to acknowledge one's own freedom and responsibility for choosing who to become. Living as if your identity is fixed rather than created through choice.`,
              audioPrompt: `Bad faith is the existentialist concept for the refusal to acknowledge your own freedom and responsibility for who you become, {name}. Sartre argued that humans have no fixed inner nature. You become someone through what you choose to do. To live without that future-oriented sense of becoming, to act as if your identity is simply given rather than built through choice, is to live in bad faith. It is a specific kind of self-deception about what you actually are. Bad faith is not a moral failure in the ordinary sense. It is a denial of the freedom that existentialists see as the defining feature of human existence.`,
            },
            {
              word: `Viktor Frankl`,
              definition: `An Austrian psychiatrist, Holocaust survivor, and author of Man's Search for Meaning (1946), who argued that having a sense of future meaning was one of the strongest predictors of psychological survival in extreme conditions.`,
              audioPrompt: `Viktor Frankl was an Austrian psychiatrist who survived the Nazi concentration camps and wrote Man's Search for Meaning in 1946, {name}. His central observation was that having a sense of future meaning was one of the strongest predictors of who survived psychologically. Pure present-focus without future purpose was associated with despair. This finding has become one of the strongest psychological arguments for the existentialist emphasis on future-creation. Goal-setting research since Frankl has found consistent support: people with specific meaningful long-term goals report higher well-being than people without them.`,
            }
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What Each Position Risks Missing`,
          paragraphs: [
            `Each position has strong evidence and serious thinkers behind it. Each also has potential blind spots worth knowing. The Stoic focus on the present, taken to extremes, can lead to short-term thinking and failure to plan. If only the present is real, why save for college? Why invest in long-term relationships? The strongest Stoics didn't actually live this way (Marcus Aurelius made plenty of long-term plans as emperor), but the philosophy in its pure form has this risk.`,
            `The Buddhist emphasis on impermanence, taken to extremes, can lead to detachment from things worth being attached to. The Dalai Lama himself has noted that some Western Buddhists mistake non-attachment for cold disengagement. Real Buddhist practice is supposed to produce deeper engagement with life, not less. But the philosophy gets misused.`,
            `The existentialist focus on future-becoming, taken to extremes, can lead to never being where you actually are. If you are always becoming someone, you are never anyone now. Existentialists are vulnerable to anxiety about choosing wrongly, to feeling like every present moment is a project rather than a place to actually live. Mature existentialists have answers to this, but the basic orientation creates the tension.`,
            `In the next screen, you will pick one of these positions and defend it. As you choose, remember: the question isn't which is theoretically perfect. The question is which produces a better actual life for a person, especially a person your age starting to make real decisions about who to become.`,
          ],
          image: `/voyager-assets/inner-world/l10-s5-tradeoffs.webp`,
          imageCaption: `Three serious positions, three different risks. Choose carefully.`,
          vocab: [
            {
              word: `philosophical orientation`,
              definition: `A general way of approaching life shaped by a philosophical commitment. Not just an idea but a habitual stance that affects how you act.`,
              audioPrompt: `A philosophical orientation is a general way of approaching life shaped by a philosophical commitment, {name}. It's not just an idea you hold. It's a habitual stance that affects how you act, what you notice, what you prioritize. A present-focused Stoic and a future-focused existentialist will live very differently even if they agree on most facts. The philosophical orientation you cultivate shapes the texture of your daily experience over years and decades. Choosing one consciously is a real act, not just an intellectual exercise.`,
            },
            {
              word: `non-attachment`,
              definition: `In Buddhist philosophy, the practice of engaging fully with life without clinging to outcomes or grasping at pleasant experiences. Often misunderstood as emotional detachment or indifference.`,
              audioPrompt: `Non-attachment in Buddhist philosophy means engaging fully with life without clinging to outcomes or grasping at pleasant experiences, {name}. It is often misunderstood as emotional detachment or cold disengagement. The Dalai Lama himself has noted that some Western Buddhists make this mistake. Real Buddhist practice is supposed to produce deeper engagement with life, not less. Non-attachment is not indifference. It is the ability to care without requiring things to be permanent. When the impermanence position is misused, the practice becomes a justification for disconnection rather than training in clear-eyed presence.`,
            },
            {
              word: `short-term thinking`,
              definition: `A pattern of decision-making focused on immediate outcomes without adequate consideration of long-term consequences or commitments.`,
              audioPrompt: `Short-term thinking is a pattern of decision-making focused on immediate outcomes without adequate consideration of long-term consequences, {name}. The lesson identifies this as a risk of Stoic present-focus taken to extremes. If only the present is real, why save for college? Why invest in long-term relationships? The strongest Stoics did not actually live this way. Marcus Aurelius made long-term plans as emperor. But in its pure form, extreme present-focus has this potential blind spot. Recognizing this limit is a reason to hold the philosophy thoughtfully rather than apply it without seeing what the extreme version misses.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l10-argument-builder`,
          type: `argument-builder`,
          headline: `Build Your Argument`,
          intro: `Which time relationship matters most for living well? Pick a position, build your case with 3-4 pieces of evidence, then respond to the strongest counterargument.`,
          positions: [
            {
              id: `present-focus`,
              label: `Stoic: focus on the present`,
              summary: `The only moment that exists is now. Past is unchangeable, future is uncontrollable. Power exists in the present. A life focused on what you can do now, with acceptance of what you cannot control, is the most rigorous form of responsibility and produces the most well-being. Research on mindfulness supports this view.`,
            },
            {
              id: `impermanence-focus`,
              label: `Buddhist: flow with impermanence`,
              summary: `Yes focus on the present, but also notice it's constantly arising and passing. Grasping at any moment, pleasant or unpleasant, creates suffering. The practice is to flow with change rather than resist it. Acceptance of impermanence produces deeper peace than holding the present steady.`,
            },
            {
              id: `future-focus`,
              label: `Existentialist: the future you choose creates you`,
              summary: `You become someone through choices, which are always about the future. Without future-oriented commitment, you're not yet anyone in particular. The future you're creating gives meaning to present action. Viktor Frankl's research on meaning supports this view; goal-setting research supports it too.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Marcus Aurelius wrote: "Confine yourself to the present. The present is the only thing of which a man can be deprived." He wrote this while serving as Roman emperor under enormous stress, suggesting present-focus is compatible with major responsibility.`,
              source: `Marcus Aurelius, Meditations, ~170 CE`,
            },
            {
              id: `e2`,
              text: `Mindfulness-Based Stress Reduction and Mindfulness-Based Cognitive Therapy show measurable benefits in clinical trials for anxiety, depression, and chronic pain. Both descend partly from present-focused traditions.`,
              source: `Multiple peer-reviewed clinical trials, 1990s-present`,
            },
            {
              id: `e3`,
              text: `Studies on rumination consistently show that excessive past-focus correlates with depression. Studies on worry consistently show that excessive future-focus correlates with anxiety. Both forms of time-distraction predict mental health problems.`,
              source: `Established psychology research`,
            },
            {
              id: `e4`,
              text: `Viktor Frankl, who survived the Nazi concentration camps, argued that having a sense of future meaning was one of the strongest psychological predictors of survival. Pure present-focus without future-meaning was associated with despair.`,
              source: `Viktor Frankl, Man's Search for Meaning, 1946`,
            },
            {
              id: `e5`,
              text: `Goal-setting research shows that people with specific meaningful long-term goals report higher subjective well-being than people without. Future-orientation has real psychological value.`,
              source: `Locke and Latham, multiple studies, 1980s-present`,
            },
            {
              id: `e6`,
              text: `Buddhist insight meditation (vipassana) practitioners report reduced suffering even in the face of major life changes. The practice trains observation of impermanence directly, which seems to reduce the grip of clinging.`,
              source: `Multiple contemplative psychology studies; Buddhist textual tradition`,
            },
            {
              id: `e7`,
              text: `Modern criticism of mindfulness in some cases notes that pure present-focus can lead to detachment from injustice, future-planning, or long-term commitments. Some practitioners report feeling disconnected from their lives over time.`,
              source: `Critical mindfulness research; Ronald Purser, McMindfulness, 2019`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. Notice that all three positions agree the present is where action happens. The Stoic says focus on it, the Buddhist says watch it flow, the existentialist says make future-oriented choices in it. So maybe the disagreement is smaller than it looks. Maybe a mature person uses all three: present focus for daily action, awareness of impermanence to avoid grasping, and future-oriented purpose for direction. Why isn't the right answer simply integrating all three?"`,
            promptInstruction: `In 3-4 sentences, respond to this objection. If you pick the "integrate all three" answer, what do you actually do day-to-day? If integration isn't the answer, why does your single position win?`,
          },
          reflectionPrompt: `Looking at the two positions you didn't pick, which one bothered you most to leave behind? What did your chosen position offer that the others didn't?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the "arrow of time" problem in physics?`,
              options: [
                `That clocks run too fast`,
                `That most laws of physics work the same forward and backward, yet we experience time flowing one direction; what causes this asymmetry is still debated`,
                `That time doesn't exist`,
                `That you can travel back in time`,
              ],
              correctIndex: 1,
              explanation: `The arrow of time problem is one of the deepest unresolved questions in physics. A leading explanation involves entropy, the universe's tendency toward increasing disorder.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the central Stoic teaching about time?`,
              options: [
                `Live in the past`,
                `The only moment that actually exists is the present; past is unchangeable, future uncontrollable, power exists now`,
                `Time is an illusion`,
                `Stoics didn't think about time`,
              ],
              correctIndex: 1,
              explanation: `Stoics like Marcus Aurelius taught present-focus rigorously. Their teaching wasn't escapism; it was concentrated responsibility. Now is the only place you can act.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `How does Buddhism differ from Stoicism on time?`,
              options: [
                `Buddhism says ignore the present entirely`,
                `Buddhism shares the present-focus but emphasizes that the present is constantly arising and passing; grasping any moment causes suffering`,
                `Buddhism says only the future matters`,
                `They agree completely`,
              ],
              correctIndex: 1,
              explanation: `Buddhists go a step further than Stoics: yes the present, but the present is impermanent. Flow with it rather than hold it. The teaching of impermanence (anicca) is central.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is Sartre's "existence precedes essence"?`,
              options: [
                `That existing is more important than thinking`,
                `That you don't have a fixed inner nature; you become who you are through your choices, which are always future-oriented`,
                `That existentialism is older than essentialism`,
                `That existence and essence are the same`,
              ],
              correctIndex: 1,
              explanation: `Existentialism's central claim: humans aren't born with a fixed nature. You become someone through your choices. Your "essence" is built. This makes the future fundamental to identity.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did Viktor Frankl observe in the Nazi concentration camps?`,
              options: [
                `That everyone responded the same way`,
                `That having a sense of future meaning was one of the strongest predictors of psychological survival, supporting the existentialist emphasis on future-orientation`,
                `That past memories were the only thing that mattered`,
                `That the present was irrelevant`,
              ],
              correctIndex: 1,
              explanation: `Frankl's Man's Search for Meaning makes the case that future-oriented meaning sustained survivors. This has been one of the strongest psychological arguments for future-focus.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's a risk of pure Stoic present-focus taken to extremes?`,
              options: [
                `That you become too anxious`,
                `That you fail to plan, save, or invest in long-term commitments because only the present is real`,
                `That you focus on the past`,
                `There are no risks`,
              ],
              correctIndex: 1,
              explanation: `Pure present-focus, taken to extreme, can lead to short-term thinking. Marcus Aurelius himself made long-term plans as emperor, but the philosophy in pure form has this potential blind spot.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's a risk of extreme Buddhist impermanence-focus?`,
              options: [
                `That you become too focused`,
                `That you become detached from things worth being attached to; the Dalai Lama himself notes some Western Buddhists mistake non-attachment for cold disengagement`,
                `That you can't meditate`,
                `That you live in the past`,
              ],
              correctIndex: 1,
              explanation: `Real Buddhist practice is supposed to produce deeper engagement, not less. But the philosophy gets misused. The risk is real even though serious practitioners avoid it.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's a risk of extreme existentialist future-focus?`,
              options: [
                `That you become too present`,
                `That you're always becoming someone and never anyone now; you live in projects rather than in actual moments`,
                `That you forget the past`,
                `There are no risks`,
              ],
              correctIndex: 1,
              explanation: `Future-focus, taken to extreme, produces a life that's perpetually preparatory. Mature existentialists have answers to this, but the orientation creates the tension.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The three positions completely contradict each other and only one can be correct.`,
              correctAnswer: false,
              explanation: `False. The positions emphasize different things but they aren't strictly contradictory. The mature thinker often integrates elements of all three. The counterargument in the lesson raises exactly this point.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `An adult close to you constantly says "live for today, don't worry about the future." Based on this lesson, what should you notice?`,
              options: [
                `Agree completely, that's the only wise position`,
                `Dismiss them as foolish`,
                `Notice they're taking the present-focus position to its extreme; that orientation has real benefits (less anxiety, more present awareness) but also real risks (failure to plan, save, build long-term commitments); the mature view usually integrates present-focus with some future-orientation`,
                `Tell them they should be Buddhist`,
              ],
              correctIndex: 2,
              explanation: `Nuanced response: honor what's true in the present-focus advice while noticing where the extreme version misses what existentialists and even moderate Stoics would say. This is mature time philosophy applied to a real comment from a real person.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which time orientation do you actually use most right now? Past, present, or future? Notice without judgment.` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Was it hard to pick one position? Why? What did the difficulty tell you about how you actually think?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you could choose your default time orientation for the next year, which would you choose and why? What would that change about your life?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of someone you admire. What's their time orientation? Mostly present, mostly future, mostly past? Why does it work for them?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could all three positions be wrong in a way the lesson didn't mention? Is there a fourth orientation that might be better?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pay attention for the next hour: where does your mind actually go? How much time in the present, in the past, in the future? Just notice.` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Time orientation isn't just philosophy. It's the texture of your daily life. Two paths below to bring this lesson into real practice.`,
          familyActivity: {
            title: `The Time Map`,
            duration: `30 minutes`,
            description: `At dinner, each family member shares what percentage of their mental energy goes to past, present, and future on a typical day. (Examples: 40% future, 40% present, 20% past.) Then everyone shares one thing they wish they could shift. The future-heavy person might want more present. The past-heavy person might want more future. Discuss as a family: what does each member's time orientation get right? What might shift over the next year? This is rare conversation. You may discover you understand each other better.`,
          },
          projectOption: {
            title: `The Time Orientation Experiment, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Pick one of the three orientations (present-focus, impermanence-flow, or future-creation) and live it deliberately for 14 days. Each day, spend 10 minutes journaling: how did the orientation show up? What did it make easier? What did it cost? At the end of 14 days, write 500 words on what you learned. Different orientations produce different lives. You are old enough to start experimenting deliberately with which orientation actually works for you.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `Time keeps moving whether you orient yourself wisely toward it or not. Who do you want to be when it does?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can be in the present without losing the future.`,
            `A person who picks a time orientation deliberately instead of drifting.`,
            `Someone who knows pure present-focus and pure future-focus both have costs.`,
          ],
          saveKey: `identity_responses_iw_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three serious philosophical positions on time, defend one with real evidence, and recognize the risks of each in its extreme form. Most adults never explicitly think about their time orientation. You just did. Whether you stay with your chosen position or shift over the years, you now have the framework for thinking about it. Next time we go into emotional alchemy: how the parts of yourself you've decided are bad might actually be valuable in disguise. Annotate format with a real primary text. See you there. — Sage`,
          badge: `time-philosopher`,
          badgeName: `Time Philosopher`,
          xpEarned: 75,
          competencies: [
            `Can articulate three philosophical positions on time orientation`,
            `Can describe risks of each position when taken to extremes`,
            `Has built and defended a real argument about time and well-being`,
            `Understands the physics and cognitive science of time experience`,
            `Can apply time philosophy to evaluating real-life advice`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Emotional Alchemy — What If Your "Bad" Feelings Are Information?`,
            hook: `What if anger, fear, and sadness aren't problems to fix but messages with crucial information? We read a primary text from Internal Family Systems and analyze it closely.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L10 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
