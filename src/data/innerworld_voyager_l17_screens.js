// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L17 — Synchronicity: Meaningful Coincidence or Statistical Illusion?
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Critical Thinking, Probability, Jungian Concepts
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (Jung's claim vs statistics vs viral spiritual content)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l17-v1";

const INNERWORLD_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-17`,
      title: `Synchronicity: Meaningful Coincidence or Statistical Illusion?`,
      duration: 35,
      xpReward: 75,
      badge: `pattern-detective`,
      badgeName: `Pattern Detective`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, Jung called meaningful coincidence synchronicity — events connected by meaning rather than cause. Statistics says coincidences at that rate are mathematically expected. The middle view says both can be true. This lesson examines the debate and asks what a mature relationship with meaningful coincidence looks like.`,
          headline: `Synchronicity`,
          subtitle: `Meaningful coincidence or your brain doing what brains do?`,
          visual: `/voyager-assets/inner-world/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Jung Meant By Synchronicity`,
          paragraphs: [
            `Carl Jung introduced the term "synchronicity" in 1952 in a paper he wrote with the physicist Wolfgang Pauli. Jung defined it as "meaningful coincidence" of two or more events where something other than the probability of chance is involved. His most famous example: a patient was telling him a dream about a golden scarab beetle when a real scarab beetle, rare in his region, tapped on his window. Jung opened the window, caught it, and handed it to the patient. The synchronicity, he claimed, broke through a therapeutic impasse and helped the patient progress.`,
            `Jung's central claim: some coincidences are not random. They are connected by meaning rather than by ordinary cause and effect. He proposed an "acausal connecting principle" operating alongside cause and effect, where events can be related not because one caused the other but because they share meaning in a particular consciousness. He thought of this as evidence for a deeper unity in reality, where the inner world of psyche and the outer world of events are not as separate as they seem.`,
            `Jung was careful to distinguish synchronicity from coincidence in general. He acknowledged that most coincidences ARE just chance. Synchronicity, for him, applied to specific cases where the meaning seemed too precise, too personally relevant, or too consequential to be plausibly explained by chance alone. The criterion was subjective: did the coincidence feel meaningful to the person experiencing it? This subjective criterion is exactly what makes the concept hard to evaluate scientifically.`,
          ],
          image: `/voyager-assets/inner-world/l17-s1-jung.webp`,
          imageCaption: `Jung's 1952 claim: some coincidences are connected by meaning, not chance.`,
          vocab: [
            {
              word: `synchronicity`,
              definition: `Jung's term (1952) for meaningful coincidence between events where the connection is felt to be deeper than mere chance. The concept is unfalsifiable in its strong form, which is part of what makes it contested.`,
              audioPrompt: `Synchronicity is Jung's term for meaningful coincidence, {name}. He introduced it in 1952. The claim: some coincidences feel too meaningful, too personally relevant, to be explained by chance alone. Jung proposed an acausal connecting principle, a way events could be related by meaning rather than by ordinary cause and effect. The famous example was a patient describing a scarab beetle dream as a real scarab tapped on the window. Whether synchronicity is a real principle or whether all such moments are explainable by ordinary statistics is the question of today's lesson.`,
            },
            {
              word: `acausal connecting principle`,
              definition: `Jung's proposed mechanism for synchronicity: a way events can be related by shared meaning rather than by ordinary cause and effect. The concept operates alongside, not instead of, physical causation.`,
              audioPrompt: `Acausal connecting principle is Jung's proposed explanation for synchronicity, {name}. He introduced the term in 1952 in a paper co-authored with physicist Wolfgang Pauli. The claim: some events are connected not because one caused the other but because they share meaning in a particular consciousness. This principle would operate alongside ordinary cause and effect, not replacing it. Jung distinguished this carefully from coincidence in general. He was not saying all coincidences are meaningful, only specific ones where the meaning seemed too precise to be plausibly explained by chance. The concept is what makes synchronicity scientifically difficult to evaluate — it is not falsifiable in the standard sense.`,
            },
            {
              word: `therapeutic impasse`,
              definition: `A point in psychological therapy where progress has stalled and neither the therapist nor the patient can find a way forward. Jung's famous scarab example involved a synchronicity breaking through such a stalemate.`,
              audioPrompt: `A therapeutic impasse is a point in psychological treatment where progress has stalled, {name}. Jung's most famous synchronicity example involves one. A patient was describing a dream about a golden scarab beetle when a real scarab — rare in his region — tapped on his window. Jung caught it and handed it to the patient. He claimed the synchronicity broke through the impasse and allowed the patient to progress. Whether the coincidence itself caused the breakthrough or whether something about the moment shifted the emotional atmosphere between them is exactly the kind of question that makes synchronicity difficult to evaluate cleanly. The report is real. The interpretation is contested.`,
            }
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Statistics Actually Predicts`,
          paragraphs: [
            `Mathematicians and statisticians have a different view. Humans are pattern-finding machines. We evolved this way because spotting patterns (predators in the grass, signs of seasonal change, which berries to eat) was crucial to survival. The same pattern-finding now operates in a world of vastly more information than our ancestors handled. We see patterns everywhere, including in random data. This is so well documented that statisticians have specific names for it.`,
            `The Law of Large Numbers states that, with enough events, even unlikely combinations become near-certain to occur somewhere. There are roughly 8 billion people on earth. Each has dozens of meaningful events per year. Across all those people and events, statistically guaranteed are millions of stunning coincidences each year. The Birthday Problem demonstrates this principle in miniature. In a room of just 23 people, the probability that two share a birthday is over 50 percent. Most people guess much higher (50 or 100 people). Our intuition about coincidence probability is consistently wrong.`,
            `Then there's confirmation bias. We notice and remember coincidences that feel meaningful. We don't notice or remember the millions of moments when "I thought about someone" did NOT correlate with anything. If you think about a friend dozens of times a week, and once a year they happen to text you in the same moment, you'll remember the synchronicity and forget the dozens of times nothing happened. The math is unforgiving: across enough opportunities, striking coincidences are guaranteed.`,
          ],
          image: `/voyager-assets/inner-world/l17-s2-stats.webp`,
          imageCaption: `Statistics predicts millions of stunning coincidences every year.`,
          vocab: [
            {
              word: `confirmation bias`,
              definition: `The well-documented tendency to notice, remember, and weight information that confirms existing beliefs while overlooking information that contradicts them.`,
              audioPrompt: `Confirmation bias is the tendency to notice, remember, and weight information that confirms what you already believe, {name}. It is one of the most documented and powerful cognitive biases in psychology. We notice the hits and miss the misses. We remember when our hunch was right and forget when it was wrong. In the context of synchronicity, we remember the times "I thought of someone and they texted" and forget the hundreds of times we thought of someone and nothing happened. The bias isn't a flaw to fix; it's a feature of how brains work. Knowing it helps you correct for it.`,
            },
            {
              word: `Law of Large Numbers`,
              definition: `The mathematical principle that with enough events, even highly unlikely combinations become near-certain to occur somewhere. A central statistical explanation for why striking coincidences are expected, not surprising.`,
              audioPrompt: `The Law of Large Numbers states that with enough events, even unlikely combinations become near-certain to occur somewhere, {name}. The lesson applies this directly to coincidences. There are roughly eight billion people on earth, each having dozens of meaningful events per year. Across all those people and events, millions of striking coincidences are statistically guaranteed to occur annually. The Birthday Problem demonstrates the same principle on a small scale: in a room of just 23 people, the probability that two share a birthday exceeds fifty percent. Our intuition about coincidence probability is consistently wrong. Knowing the Law of Large Numbers corrects that intuition.`,
            },
            {
              word: `Birthday Problem`,
              definition: `A mathematical demonstration that in a group of just 23 people, two sharing a birthday is more likely than not — far surprising most people's intuition. Used to illustrate how our sense of coincidence probability is systematically unreliable.`,
              audioPrompt: `The Birthday Problem is a mathematical demonstration that our intuitions about coincidence are systematically unreliable, {name}. In a room of just 23 people, the probability that two share a birthday is over fifty percent. Most people guess the group would need to be fifty or a hundred. The intuition is wrong by a large margin. The lesson uses this to make a concrete point: if we miscalculate birthday coincidences this badly, we almost certainly miscalculate the probability of all the other striking coincidences that feel meaningful in our lives. The math of large numbers, not supernatural connection, is why stunning coincidences happen regularly.`,
            }
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What The Middle View Says`,
          paragraphs: [
            `A more careful position exists between Jung's strong claim and pure statistical dismissal. The middle view goes something like this. Most coincidences are real coincidences. The math of large numbers, our pattern-finding brains, and confirmation bias together explain most "synchronicities" without needing any acausal principle. We should default to chance plus cognitive bias as the explanation for most cases.`,
            `That said, the experience of meaningful coincidence matters psychologically even if the underlying mechanism is statistics plus brain. When you have a synchronicity moment, your attention focuses, your emotional state shifts, you may pay closer attention to your life and inner state. These effects are real even though the moment itself wasn't supernaturally meaningful. The phenomenology is interesting; the metaphysics is overreach.`,
            `Some thinkers go further. Robert Hopcke, a Jungian analyst, argues in his book There Are No Accidents that synchronicity is real but he frames it psychologically: meaningful coincidences function as messages from the unconscious mind, integrating information you weren't consciously tracking. Under this view, the coincidence doesn't violate physics; your unconscious mind has been doing pattern recognition you weren't aware of, and the coincidence brings something to consciousness that was already being worked on internally. This is a much more bounded claim than Jung's original "acausal connecting principle" and it's compatible with mainstream cognitive science.`,
          ],
          image: `/voyager-assets/inner-world/l17-s3-middle.webp`,
          imageCaption: `Middle view: real psychological phenomenon, no metaphysical leap required.`,
          vocab: [
            {
              word: `phenomenology`,
              definition: `The study of subjective experience. Phenomenology takes seriously what something feels like, even when the underlying mechanism is debated.`,
              audioPrompt: `Phenomenology is the study of subjective experience, {name}. It takes seriously what something feels like, regardless of the underlying mechanism. The phenomenology of synchronicity is the felt experience of meaningful coincidence: the sense of connection, of being seen, of something pointing to you specifically. That experience is real even when the underlying cause is statistics plus pattern-finding. Phenomenology and mechanism are different questions. Both are legitimate. Mixing them up is a common source of error. Synchronicity may have ordinary causes and extraordinary phenomenology at the same time.`,
            },
            {
              word: `unconscious pattern recognition`,
              definition: `The process by which the mind tracks and integrates information below the level of conscious awareness. Robert Hopcke's framework proposes that synchronicity moments can bring unconsciously processed patterns to conscious attention.`,
              audioPrompt: `Unconscious pattern recognition is the process by which the mind tracks information below the level of conscious awareness, {name}. The lesson presents this as the most bounded version of the synchronicity claim, described by Jungian analyst Robert Hopcke. Under this view, meaningful coincidences function as moments when something your unconscious mind has been working on is suddenly brought to consciousness. The coincidence does not violate physics. It surfaces something already being processed internally. This framing is compatible with mainstream cognitive science, unlike Jung's original acausal connecting principle. It treats synchronicity as a psychological phenomenon rather than a metaphysical one.`,
            },
            {
              word: `metaphysical overreach`,
              definition: `Making claims that go beyond what evidence or experience actually supports, particularly claims about the fundamental nature of reality derived from subjective experiences.`,
              audioPrompt: `Metaphysical overreach is making claims about the fundamental nature of reality that go beyond what the evidence actually supports, {name}. The lesson uses this term in its middle view on synchronicity. The phenomenology of meaningful coincidence is interesting — the felt experience is real and often psychologically significant. But concluding from that experience that an acausal principle governs reality, or that the universe is sending personal messages, is overreach. The experience and the mechanism are different questions. Keeping them separate is a core intellectual discipline. The middle view holds that the phenomenology is real and worth paying attention to, while the metaphysics is where careful thinkers stop short.`,
            }
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Synchronicity Gets Hijacked`,
          paragraphs: [
            `In modern spirituality and wellness culture, "synchronicity" gets used to justify all kinds of claims. People interpret minor coincidences as "the universe sending signs" or "alignment with their higher self." TikTok accounts teach you to "manifest synchronicities." Astrologers use the concept to validate their readings. Spiritual influencers offer courses on "noticing the signs the universe is giving you."`,
            `Most of this is the same overreach pattern you've seen in other lessons. Jung's careful 1952 concept gets stretched into "the universe is responding to me personally" or "everything happens for a reason." These extensions weren't in Jung's original work, and they make claims that go far beyond what synchronicity (even in the strong Jungian sense) actually supports. The pop spiritual version often combines synchronicity with the Law of Attraction, manifestation, vibration, and other concepts we've already seen are not well supported.`,
            `What's especially harmful: this pop version can become a form of self-importance disguised as spirituality. The universe isn't actually sending personal messages to billions of people simultaneously. Pattern-finding brains plus large numbers of events plus confirmation bias produce the experience of being singled out, but the experience isn't evidence that the universe is actually attending to you specifically. Real humility about this is healthier than the spiritual ego that interprets every coincidence as a personal cosmic communication.`,
          ],
          image: `/voyager-assets/inner-world/l17-s4-hijack.webp`,
          imageCaption: `The pop version: spiritual self-importance disguised as openness.`,
          vocab: [
            {
              word: `apophenia`,
              definition: `The tendency to perceive meaningful patterns or connections in random data. Related to confirmation bias. A well-documented cognitive pattern, sometimes adaptive, sometimes misleading.`,
              audioPrompt: `Apophenia is the tendency to perceive meaningful patterns or connections in random data, {name}. We see faces in clouds and electrical outlets. We hear words in random noise. We feel that random events have personal significance. Apophenia is a well-documented cognitive pattern. Sometimes it serves us: spotting a predator in patterns of grass was useful for survival. Sometimes it misleads us: seeing the universe sending personal signs in random coincidences. Knowing apophenia exists helps you check your own pattern-finding. The patterns might be real. Or they might be apophenia doing what brains do.`,
            },
            {
              word: `spiritual self-importance`,
              definition: `A form of self-centeredness disguised as openness, in which a person interprets random coincidences as personal cosmic communications directed specifically at them.`,
              audioPrompt: `Spiritual self-importance is a form of self-centeredness disguised as openness, {name}. The lesson names it specifically in the section on how synchronicity gets hijacked. The pattern: treating every coincidence as a personal message from the universe, as proof of cosmic alignment or communication directed specifically at you. The lesson is clear that pattern-finding brains plus large numbers of events plus confirmation bias produce the experience of being singled out. But that experience is not evidence that the universe is actually attending to you specifically. Real humility about this is healthier than the spiritual ego that builds an identity around being cosmically seen.`,
            },
            {
              word: `Law of Attraction`,
              definition: `A pop spiritual concept claiming that positive or negative thoughts attract corresponding experiences into a person's life. Often combined with synchronicity in online wellness content despite not being part of Jung's original work.`,
              audioPrompt: `The Law of Attraction is a pop spiritual concept claiming that thoughts attract corresponding experiences, {name}. The lesson brings it up in the context of how synchronicity gets hijacked in modern wellness culture. Pop spiritual content often combines Jung's careful 1952 concept with the Law of Attraction, manifestation, vibration, and numerology — freely mixing concepts that were never connected in Jung's original work. These extensions make claims that go far beyond what synchronicity, even in the strong Jungian sense, actually supports. Recognizing when concepts are being mixed together to amplify their apparent power is one of the key pattern-recognition skills this lesson builds.`,
            }
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why This Matters For How You Live`,
          paragraphs: [
            `Whether you take meaningful coincidences as cosmic signals or as patterns your brain creates makes a real difference in how you live. If you treat every coincidence as a personal message from the universe, you might make life decisions based on signs that aren't actually there. You might wait for "the right sign" instead of doing the work to decide what you actually want. You might attribute outcomes to cosmic alignment rather than to choices and circumstances you could analyze and learn from.`,
            `On the other hand, dismissing all sense of meaningful pattern as mere statistics can also be limiting. The phenomenology of synchronicity moments often correlates with periods of inner growth, transition, or attentiveness. Even if the moments themselves aren't supernaturally meaningful, paying attention to when they happen in your life can be informative. You're often most likely to experience synchronicity moments when you're psychologically engaged with a real question. The moments may not be signals; they may be markers of where your attention is alive.`,
            `The mature approach: don't try to settle the metaphysics. Take the moments seriously without overclaiming what they mean. Notice them, enjoy them, use them as cues to pay attention to what you're working on inwardly. But don't make major decisions based on them. Don't treat them as proof of supernatural attention. Don't build a spiritual ego around them. The honest position is that we don't know what's behind these experiences, the experiences are real, and the best response is curiosity rather than either dismissal or worship.`,
          ],
          image: `/voyager-assets/inner-world/l17-s5-living.webp`,
          imageCaption: `Take the moments seriously. Hold the meaning loosely.`,
          vocab: [
            {
              word: `epistemic humility`,
              definition: `The willingness to acknowledge what you don't know and to hold beliefs proportional to the actual evidence. A cardinal virtue in good thinking.`,
              audioPrompt: `Epistemic humility is the willingness to acknowledge what you don't know, {name}. It is one of the most important features of good thinking. Most contested questions don't have clean answers. Most strong evidence supports moderate conclusions, not extreme ones. Epistemic humility lets you say "I don't know if synchronicity is a real principle or just statistics plus pattern-finding. Both views have something to them. I'm not going to commit to either until I have better evidence." That stance is harder than picking a side. It is also usually more accurate.`,
            },
            {
              word: `markers of attention`,
              definition: `A reframe of synchronicity moments as indicators of where a person's inner attention is most alive, rather than as supernatural signals. A psychologically grounded use of meaningful coincidence without metaphysical claims.`,
              audioPrompt: `Markers of attention is a reframe for synchronicity moments that the lesson offers as a mature approach, {name}. Rather than treating coincidences as signals from the universe, you treat them as indicators of where your attention is currently alive. You are most likely to experience what feels like meaningful coincidence when you are psychologically engaged with a real question. The coincidence may not be a cosmic message. It may be a marker of something you are genuinely working on inwardly. This reframe lets you take the moments seriously and use them productively without overclaiming what they mean or building a spiritual identity around them.`,
            },
            {
              word: `manufactured doubt`,
              definition: `Artificially creating the impression that a question is uncertain when it is not, often for commercial or ideological purposes. Distinct from genuine uncertainty, where evidence genuinely does not favor one answer.`,
              audioPrompt: `Manufactured doubt is the artificial creation of uncertainty about something where evidence is actually clear, {name}. The lesson introduces this concept in contrast to epistemic humility. Epistemic humility is appropriate when evidence genuinely does not settle a question. Manufactured doubt is something different: pretending a question is open when it isn't, usually to avoid acknowledging inconvenient evidence. The lesson applies this distinction to synchronicity. Whether meaningful coincidences are real metaphysical events is genuinely uncertain. Whether the universe sends personal messages through number patterns to millions of people simultaneously is not equally uncertain. Knowing the difference between the two is itself a real thinking skill.`,
            }
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l17-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Meaningful Coincidence`,
          intro: `Three sources make claims about whether coincidences carry deeper meaning. Rank them from most credible to least credible. Explain your reasoning. Then see how a careful thinker would evaluate them.`,
          topic: `Are meaningful coincidences pointing to a deeper order in events, or are they explained by statistics and cognitive bias?`,
          sources: [
            {
              id: `source-a`,
              name: `Diaconis & Mosteller, 1989 — "Methods for Studying Coincidences"`,
              type: `Peer-reviewed paper, Journal of the American Statistical Association, by two of the most respected statisticians of the 20th century`,
              claim: `Most striking coincidences can be explained by ordinary probability principles, especially the Law of Large Numbers (with enough trials, unlikely events become probable somewhere). Human intuition consistently underestimates how often coincidences will occur by chance alone. The Birthday Problem demonstrates this principle: in a room of 23 people, two share a birthday more than 50% of the time, which surprises most people.`,
              evidence: `Mathematical proofs of the relevant probability principles. Specific worked examples (the Birthday Problem, repeated dreams, "I thought of someone and they called" coincidences). Published in a top statistical journal. Authors are widely respected mathematicians. Methodology is mathematics itself, which doesn't require empirical replication but can be checked by any competent mathematician.`,
            },
            {
              id: `source-b`,
              name: `Carl Jung, 1952 — "Synchronicity: An Acausal Connecting Principle"`,
              type: `Foundational paper by Carl Jung, co-authored with physicist Wolfgang Pauli, published as part of Jung's Collected Works`,
              claim: `Some coincidences are meaningfully connected by an "acausal connecting principle" that operates alongside ordinary cause and effect. These synchronicities suggest a deeper unity in reality where psyche and matter are connected through meaning rather than through physical causation. They are evidence of something that ordinary materialistic science misses.`,
              evidence: `Anecdotes from Jung's clinical practice including the famous scarab beetle case. Theoretical argument drawing on Jungian psychology and Pauli's quantum mechanics interpretations. No peer-reviewed empirical studies in the modern sense. The concept has remained influential in Jungian psychology and some popular spirituality but has not been validated by mainstream scientific methodology.`,
            },
            {
              id: `source-c`,
              name: `@cosmic_synchronicity_signs`,
              type: `TikTok account with 1.4 million followers, posts daily videos about "signs from the universe"`,
              claim: `The universe sends specific personal signs through synchronicities like seeing the number 1111, finding feathers, hearing certain songs, or running into people. These signs tell you you're "on the right path" or "manifesting your reality." Pay attention to your synchronicities to know what the universe wants you to do. Buy our "Synchronicity Decoder" course for $97 to learn how to interpret the signs you're getting.`,
              evidence: `Personal testimonials from creator and followers. References to Jung in passing without engaging with his actual ideas. Mixes Law of Attraction, astrology, and number symbolism (numerology) freely. No empirical evidence or peer-reviewed citation. Strong financial incentive (paid course). Comments section full of "this changed my life" testimonials with no verification.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? What separates the most credible source from the others? Is there nuance to where Source B sits?`,
          reveal: {
            title: `How a careful thinker would evaluate these`,
            content: [
              `Source A is the strongest. Notice everything it has: mathematical rigor (probability theory), specific worked examples (Birthday Problem), peer-reviewed publication, authors at the top of their field, and bounded claims. The paper doesn't claim "all coincidences are random." It claims that ordinary probability explains most striking coincidences AND that human intuition consistently underestimates how often coincidences should occur. This is careful, specific, and supported by mathematics anyone competent can verify.`,
              `Source B is interesting and complicated. Jung was a serious thinker, and the paper is foundational in a specific intellectual tradition. But the claim he makes (an "acausal connecting principle") is essentially unfalsifiable. If a coincidence feels meaningful, it counts as synchronicity. If it doesn't, it doesn't. This structure makes the claim immune to scientific test. Many Jungian-trained therapists find the concept clinically useful as a psychological framework, even while acknowledging the metaphysical claim is not empirically supported. Source B is "somewhat credible" not because Jung was wrong about everything but because his specific metaphysical claim about reality goes beyond what evidence can support.`,
              `Source C is the most familiar by now. Vague claims (signs from the universe), no evidence beyond testimonials, references to legitimate thinkers without engaging their ideas seriously, a paid course at the end. This is the now-recognizable pattern of viral spiritual content. The harm isn't just inaccuracy. It's that it teaches people to interpret random events as personal messages, which can lead to magical thinking, delayed real decisions, and a spiritual self-importance disguised as openness.`,
              `The key insight: Jung's careful concept and viral synchronicity content are not the same thing, even though they use the same word. Source B is a serious intellectual position you can engage with seriously even while disagreeing. Source C is using Jung's word to sell something. The skill is distinguishing genuine intellectual claims (which deserve real evaluation) from commercial overreach (which deserves pattern recognition and dismissal). Both can use the same vocabulary while doing completely different work.`,
            ],
          },
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What did Jung mean by "synchronicity"?`,
              options: [
                `Any coincidence`,
                `Meaningful coincidence of events connected by an "acausal connecting principle" rather than by ordinary cause and effect; some specific cases where the meaning feels too precise to be chance`,
                `Two clocks showing the same time`,
                `Group meditation`,
              ],
              correctIndex: 1,
              explanation: `Jung was specific. Not all coincidences. Only ones where meaning seemed too precise or personally relevant. He proposed an acausal connecting principle to explain them.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the Law of Large Numbers, as it relates to coincidence?`,
              options: [
                `That bigger numbers are more accurate`,
                `That with enough events, even unlikely combinations become near-certain to occur somewhere; across 8 billion people having dozens of meaningful events per year, millions of stunning coincidences are statistically guaranteed annually`,
                `That you should count carefully`,
                `That probabilities are always 50%`,
              ],
              correctIndex: 1,
              explanation: `The math is unforgiving. Stunning coincidences happen all the time, statistically. We just notice them because they feel meaningful. The Law of Large Numbers explains why "amazing coincidences" are expected, not surprising.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the Birthday Problem?`,
              options: [
                `Remembering everyone's birthday`,
                `In a room of 23 people, the probability that two share a birthday is over 50%, which is much higher than most people intuitively guess; demonstrates that our intuitions about coincidence probability are unreliable`,
                `Birthdays are bad luck`,
                `An astrological problem`,
              ],
              correctIndex: 1,
              explanation: `The Birthday Problem is a classic demonstration that human intuition about coincidence probability is consistently wrong. We dramatically underestimate how often coincidences will occur by chance.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is confirmation bias as it relates to synchronicity?`,
              options: [
                `Always confirming you're right`,
                `The well-documented tendency to notice and remember coincidences that feel meaningful while overlooking the millions of moments when nothing meaningful happened`,
                `Believing only confirmed facts`,
                `A type of memory loss`,
              ],
              correctIndex: 1,
              explanation: `We remember when "I thought of someone and they called." We forget the hundreds of times we thought of someone and nothing happened. The bias creates the appearance of synchronicity from ordinary statistics.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is apophenia?`,
              options: [
                `A musical instrument`,
                `The tendency to perceive meaningful patterns or connections in random data; well-documented cognitive pattern sometimes adaptive, sometimes misleading`,
                `A type of cake`,
                `A philosophical school`,
              ],
              correctIndex: 1,
              explanation: `Apophenia is one of the most common cognitive patterns. We see faces in clouds, hear words in random sounds, find meaning in coincidences. Sometimes useful. Sometimes misleading.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the middle view propose?`,
              options: [
                `That Jung was completely right`,
                `That statistics are wrong`,
                `That most coincidences are explained by statistics plus brain pattern-finding, AND the phenomenology of meaningful coincidence is psychologically real even when the underlying cause is ordinary; phenomenology and mechanism are different questions`,
                `That nothing means anything`,
              ],
              correctIndex: 2,
              explanation: `The middle view holds both. The experience is real. The mechanism is mundane. These don't contradict each other.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is Jung's "acausal connecting principle" hard to evaluate scientifically?`,
              options: [
                `Because Jung wrote in German`,
                `Because the claim is essentially unfalsifiable: if a coincidence feels meaningful, it counts as synchronicity; if it doesn't, it doesn't; this structure makes the claim immune to empirical test`,
                `Because Jung was secretive`,
                `Because the math is too hard`,
              ],
              correctIndex: 1,
              explanation: `Unfalsifiability is the deep methodological issue. The same problem appeared with the Law of Attraction in Lesson 13. Claims that can't be tested can't be scientifically evaluated.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the danger of treating every coincidence as a "sign from the universe"?`,
              options: [
                `Nothing, it's all positive`,
                `You may make life decisions based on signs that aren't actually there; wait for "right signs" instead of doing real decision work; attribute outcomes to cosmic alignment rather than to choices you could analyze; develop a spiritual self-importance disguised as openness`,
                `It uses too much time`,
                `It's expensive`,
              ],
              correctIndex: 1,
              explanation: `The danger is real and specific. Real decisions get delayed or distorted. Real learning from outcomes gets short-circuited. And the pattern can build a self-image of being cosmically attended to that isn't actually accurate.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Jung's careful 1952 concept of synchronicity and modern viral "the universe is sending you signs" content are essentially the same thing.`,
              correctAnswer: false,
              explanation: `False. They share a word but make different claims with different evidence and different levels of commercial incentive. Jung deserves serious intellectual engagement. Viral synchronicity content deserves pattern recognition. The skill is telling them apart.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend tells you "I keep seeing 11:11 everywhere lately, the universe is trying to tell me something." Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Wow, what is the universe saying?"`,
                `"That's just confirmation bias, get over it"`,
                `"You're probably checking your phone more often, or paying more attention to clocks. Your brain notices 11:11 because it's a distinctive pattern. The phenomenology might still be telling you something though, when does 11:11 catch your eye? What are you preoccupied with right now? The pattern might be a marker of where your attention is alive, even if it isn't a cosmic signal."`,
                `"Probably a coincidence"`,
              ],
              correctIndex: 2,
              explanation: `Nuanced. Honor the experience. Explain the mechanism. Use the phenomenology productively without overclaiming. This is the mature stance toward meaningful coincidence in actual conversation.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Have you experienced what felt like a meaningful coincidence? When? What do you think was actually happening?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which source was easiest to evaluate? Which was hardest? What did the difficulty reveal about how you think?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you adopted the middle view (take experiences seriously, hold meanings loosely), what changes about how you live? About how you talk to friends who interpret coincidences as cosmic signs?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of one "meaningful coincidence" you remember vividly. Apply confirmation bias and Law of Large Numbers to it. Does ordinary statistics explain it? Or is something else genuinely there?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could there be something to Jung's claim that the statistical explanation misses? What would have to be true for that to be the case?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Try this experiment: pick a random number (say 47). For one week, count every time you see 47 anywhere. Compare to your baseline awareness of numbers. What do you predict will happen?` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Synchronicity is one of the most viral and misunderstood concepts in modern spirituality. Two paths below to apply real thinking to it.`,
          familyActivity: {
            title: `The Coincidence Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share one meaningful coincidence each family member remembers. (Examples: "I was thinking of grandma and she called." "I found exactly what I needed at the perfect moment.") Then run each through the lesson's framework. How many trials had there been (how many times had you thought of grandma and nothing happened)? Could the Law of Large Numbers explain it? Could confirmation bias be selecting for the hits? What's left unexplained, if anything? This conversation can be revealing without being deflating. You can still treasure the coincidence and understand the mechanism.`,
          },
          projectOption: {
            title: `The Coincidence Log, 2 weeks (optional)`,
            duration: `2 weeks, ~5 minutes per day`,
            description: `Each day for 14 days, log every coincidence you notice (no matter how small) and every "almost-coincidence" you catch yourself NOT noticing (the moments where confirmation bias would normally make you discard non-meaningful events). After 14 days, count both. Write 500 words on what you learned. You may find your apparent rate of synchronicities much higher than you thought, AND your rate of unnoticed non-coincidences much higher still. This is real applied cognitive science on your own pattern-finding.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If most of the meaning you find in coincidences is your brain doing what brains do, are the moments less precious or more honest?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can enjoy meaningful coincidences without making big decisions based on them.`,
            `A person who notices their own confirmation bias instead of trusting every felt pattern.`,
            `Someone who tells Jung's serious version apart from viral cosmic signs.`,
          ],
          saveKey: `identity_responses_iw_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can describe Jung's specific concept of synchronicity and its acausal connecting principle, articulate the statistical explanation involving Law of Large Numbers and confirmation bias, hold the middle view that takes phenomenology seriously without metaphysical overreach, and evaluate three different sources making related claims with very different evidence. You can also tell Jung's serious work apart from viral spiritual content using his name. Most adults conflate these. Next time we go into one of the most contested and human topics: near-death experiences. What people report, what neuroscience says, and how to think about evidence at the edges of what science can investigate. Source Evaluation. See you there. — Sage`,
          badge: `pattern-detective`,
          badgeName: `Pattern Detective`,
          xpEarned: 75,
          competencies: [
            `Can describe Jung's specific concept of synchronicity`,
            `Can articulate Law of Large Numbers, Birthday Problem, and confirmation bias as explanations for meaningful coincidences`,
            `Can hold a middle view that takes phenomenology seriously without metaphysical overreach`,
            `Has practiced source evaluation on contested phenomena`,
            `Distinguishes serious philosophical claims from viral commercial content using the same vocabulary`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Near-Death Experiences — Honest Evaluation Of Contested Evidence`,
            hook: `Millions of people report similar experiences during clinical death. Neuroscientists have specific explanations. Some researchers find anomalies in the data. Three sources, your call.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L17 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
