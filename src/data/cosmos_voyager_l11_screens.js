// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L11 — Time: What Is It?
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: Coreverse Original — Philosophy of Time, Foundations of Physics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (block universe vs presentism vs growing block)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l11-v1";

const COSMOS_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-11`,
      title: `Time: What Is It?`,
      duration: 35,
      xpReward: 75,
      badge: `time-philosopher`,
      badgeName: `Time Philosopher`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, you've been experiencing time your entire life. Every moment of your existence has been "now." The past feels like it happened, and the future feels like it hasn't yet. This seems so obvious that you've probably never seriously questioned it. But what IS time, fundamentally? Is the past still real somewhere? Does the future already exist, waiting for us? Is only this present moment actually real, with everything else being either memory or anticipation? Real philosophers and physicists hold radically different positions on this. The answer matters: it shapes what we think about free will, meaning, and how to live. Today we work through three serious positions on what time is. Then you build an argument.`,
          headline: `Time: What Is It?`,
          subtitle: `Three serious positions on what time fundamentally IS. Real philosophers disagree.`,
          visual: `/voyager-assets/cosmos/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Question Is Genuinely Hard`,
          paragraphs: [
            `Time is one of the most familiar features of experience and one of the most puzzling features of physics. We experience time as flowing. The present moment moves forward continuously. The past piles up behind us, fixed and unchangeable. The future stretches ahead, open and uncertain. This is how time feels.`,
            `Physics tells a different story. Einstein's special relativity (which we covered in Lesson 2) showed that simultaneity is not absolute. What's "now" for me is not the same as what's "now" for someone moving relative to me. Different observers slice spacetime into "past, present, future" differently. There's no universal "moving present moment" that all observers share. Hermann Minkowski's 1908 work made spacetime a four-dimensional structure in which time and space are unified. Einstein famously wrote in a 1955 letter, after the death of his friend Michele Besso, that "the distinction between past, present, and future is only a stubbornly persistent illusion."`,
            `So which is right? The intuitive flowing-time of experience, or the static four-dimensional spacetime of physics? Or neither? Or both, somehow? These aren't merely academic questions. The answers shape what we think about free will (if the future already exists, is anything genuinely open?), about death (if past moments still exist, are people who have died still real?), about meaning (does living in the moment make sense if "the moment" doesn't have a special status?). Three serious philosophical positions compete for the answer.`,
          ],
          image: `/voyager-assets/cosmos/l11-s1-hard.webp`,
          imageCaption: `Physics and intuition disagree about time. Real philosophers take both seriously.`,
          vocab: [
            {
              word: `philosophy of time`,
              definition: `Branch of philosophy that asks what time fundamentally IS. Major contemporary positions include eternalism (block universe), presentism, and growing block. Connects directly to physics (especially relativity) and to questions about free will, meaning, and death.`,
              audioPrompt: `Philosophy of time is the branch of philosophy that asks what time fundamentally IS, {name}. Not what time looks like in any specific theory, but what its underlying nature is. The major contemporary positions are eternalism (also called block universe theory), presentism, and growing block. The questions connect directly to physics, especially Einstein's relativity, which complicates the intuitive notion of a single universal "now." They also connect to questions about free will, meaning, and death. If past moments are still real somewhere, are dead people still real? If the future already exists, is anything genuinely open? Real working philosophers and physicists take these questions seriously. Different answers produce quite different visions of what kind of universe we live in.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Block Universe / Eternalism`,
          paragraphs: [
            `The block universe view (also called eternalism) holds that all moments of time are equally real. Past, present, and future all exist; the present moment has no special metaphysical status. Time is more like another dimension than like a flowing river. The "feeling" of flowing time is something brains generate, not a feature of reality itself. The universe is a four-dimensional "block" containing all events past, present, and future.`,
            `The case for the block universe rests heavily on relativity. Different observers carve up spacetime into "past, present, future" differently, so there's no universal "moving present" that everyone shares. Whatever is special about "now" can't be a feature of spacetime itself; it must be a feature of how brains experience spacetime. Many physicists and philosophers find this argument compelling. Hermann Minkowski, Albert Einstein, and many modern philosophers (Bradford Skow's "Objective Becoming" 2015 defends a similar view) have endorsed versions of eternalism.`,
            `The block universe has powerful implications. Past moments are still real, in the same sense that the present moment is real. People who have died are not gone; they exist in the past part of spacetime. The future already exists; we just haven't reached our experience of it yet. Free will, in the libertarian sense of "the future is genuinely open," becomes harder to defend. The block universe is sometimes called "the eternal now" by those who find it spiritually comforting and "fatalism" by those who find it constraining.`,
            `The argument against the block universe is partly intuitive (it seems to deny the obvious fact that time flows) and partly philosophical (some argue it can't account for genuine change). Defenders respond that the intuitive sense of flowing time is real as a feature of experience; it's just not a feature of fundamental reality. Change is real in the block universe; it's just that change is the variation of properties across the temporal dimension, not a "moving present."`,
          ],
          image: `/voyager-assets/cosmos/l11-s2-block.webp`,
          imageCaption: `Block universe: all moments equally real. The present has no special status. Time as a fourth dimension.`,
          vocab: [
            {
              word: `block universe`,
              definition: `Philosophical position that all moments of time are equally real. Past, present, and future all exist; the present has no special metaphysical status. Time is more like another dimension than like a flowing river. Supported by relativity's loss of universal simultaneity.`,
              audioPrompt: `The block universe view, also called eternalism, holds that all moments of time are equally real, {name}. Past, present, and future all exist. The present moment has no special metaphysical status. Time is more like another dimension than like a flowing river. The "feeling" of flowing time is something brains generate, not a feature of fundamental reality. The universe is a four-dimensional "block" containing all events past, present, and future. The case for this view rests heavily on Einstein's relativity, which showed that simultaneity is not universal. Hermann Minkowski, Albert Einstein, and modern philosophers like Bradford Skow have endorsed versions of eternalism. It has the powerful implication that past moments and people are still real, just not in our part of spacetime.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Presentism`,
          paragraphs: [
            `Presentism holds the opposite. Only the present moment is real. The past existed but doesn't anymore; it's gone. The future doesn't exist yet; it hasn't happened. Reality is the present moment, full stop. This view is closer to common-sense experience than the block universe but harder to reconcile with relativity.`,
            `Presentism has deep roots. Augustine of Hippo (4th century) argued for something like presentism in his Confessions. Many religious and philosophical traditions emphasize the reality of the present moment. In contemporary academic philosophy, presentism has defenders including Dean Zimmerman, Tim Maudlin, and (in a related framework) Lee Smolin, a theoretical physicist whose 2013 book "Time Reborn" argues that time is fundamentally real and not just an emergent feature of spacetime.`,
            `The presentist's challenge is relativity. If different observers have different "nows," which observer's "now" is the real present? Presentists have proposed various responses: maybe there is a "preferred frame" defined by the cosmic microwave background (which all observers can in principle agree on); maybe relativity tells us about how observers measure time but not about which moments are metaphysically real. Critics argue these responses are awkward attempts to preserve presentism against the spirit of relativity. Defenders argue that taking the present moment seriously is more important than satisfying every implication of relativity.`,
            `Presentism has powerful implications. Past moments don't exist; people who died are gone. The future doesn't exist yet; it's genuinely open. Living in the present moment is metaphysically appropriate, not just psychologically useful. Free will fits more naturally with presentism than with eternalism. Many people find presentism more spiritually nourishing because it locates meaning in the present moment that is the only moment that ever exists.`,
          ],
          image: `/voyager-assets/cosmos/l11-s3-presentism.webp`,
          imageCaption: `Presentism: only the present moment is real. Past gone. Future not yet. Reality is now.`,
          vocab: [
            {
              word: `presentism`,
              definition: `Philosophical position that only the present moment is real. The past existed but doesn't anymore; the future doesn't exist yet. Closer to common-sense experience than the block universe but harder to reconcile with relativity. Defenders include Tim Maudlin and Lee Smolin.`,
              audioPrompt: `Presentism is the philosophical position that only the present moment is real, {name}. The past existed but doesn't anymore. The future doesn't exist yet. Reality is the present moment. The view has roots going back to Augustine of Hippo in the 4th century. Many religious and philosophical traditions emphasize the reality of the present moment. Contemporary academic defenders include philosophers like Dean Zimmerman and Tim Maudlin, and physicist Lee Smolin who argued in his 2013 book "Time Reborn" that time is fundamentally real. The biggest challenge for presentism is relativity, which seems to undermine the idea of a universal present moment. Presentists have proposed various responses. The disagreement with eternalism is one of the most active in current philosophy of time.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Growing Block Universe`,
          paragraphs: [
            `The growing block view (sometimes called the "moving spotlight" or "growing block universe") is a middle position. Past and present moments are real. Future moments are not yet real. Reality grows as time passes; the future "comes into existence" at the moment we call now. C.D. Broad introduced this view in 1923 in "Scientific Thought." Contemporary defenders include Michael Tooley and Peter Forrest.`,
            `The case for the growing block: it preserves the open future of presentism (we can genuinely shape what will be real) while maintaining the reality of past moments and people (your great-grandmother is still real, just located in the past). Some critics of eternalism find it too deterministic, and some critics of presentism find it loses too much of what once existed. Growing block tries to hold the best of both.`,
            `The challenges. Why is "the leading edge" of reality (the present moment) special? Why does reality grow rather than just being whatever it is? What exactly happens at the moment when a future moment "becomes" present? Growing block defenders have proposed various answers, but the position is generally considered more difficult to defend than either eternalism or presentism. It also struggles with relativity in similar ways to presentism.`,
            `One historical note. Growing block was originally introduced partly to handle quirks of British philosophy in the 1920s. It has been refined considerably since. Forrest in particular has developed sophisticated versions that engage with contemporary physics. The position remains a serious minority option in academic philosophy of time, not a fringe view.`,
          ],
          image: `/voyager-assets/cosmos/l11-s4-growing.webp`,
          imageCaption: `Growing block: past and present are real, future grows into being. Middle position with serious defenders.`,
          vocab: [
            {
              word: `growing block universe`,
              definition: `Philosophical position that past and present moments are real but future moments are not yet. Reality grows as time passes. Proposed by C.D. Broad in 1923, defended today by Michael Tooley and Peter Forrest. Tries to combine the reality of the past (from eternalism) with the open future (from presentism).`,
              audioPrompt: `The growing block universe view holds that past and present moments are real, but future moments are not yet, {name}. Reality grows as time passes. The future comes into existence at the moment we call now. The view was proposed by British philosopher C.D. Broad in 1923 in his book "Scientific Thought." Contemporary defenders include Michael Tooley and Peter Forrest. The position tries to combine the reality of the past from eternalism with the open future from presentism. It is a middle position with serious academic defenders. Its biggest challenge is explaining why "the leading edge" of reality is metaphysically special, and reconciling itself with relativity. A serious minority position in contemporary philosophy of time.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that this disagreement is partly empirical (what does relativity say about time?) and partly metaphysical (what is the nature of existence across time?). Different reasonable people weight the considerations differently. Many physicists default to the block universe because it fits most naturally with relativity. Many philosophers find presentism intuitive and seek ways to reconcile it with physics. Growing block defenders try to capture the best of both. The disagreement is genuine and ongoing.`,
            `One framing. The block universe takes physics most seriously and intuition least seriously. Presentism takes intuition most seriously and physics least seriously. Growing block tries to balance them but has its own challenges. There may not be a clean "winner" available with current evidence; the answer may depend partly on which considerations you weigh more heavily.`,
            `The implications matter for daily life. If the block universe is correct, the past is still real and your relationship to deceased loved ones is different from what it seems. If presentism is correct, only the present moment exists, and contemplative practices that emphasize present-moment awareness have metaphysical backing. If growing block is correct, the future is genuinely open and what you do shapes what will become real. All three can be defended thoughtfully.`,
            `One last framing for Voyagers specifically: you may not resolve this question today. Many adults work with these ideas for decades without committing. The skill is to articulate each position fairly and notice what you currently find compelling. Your view may evolve as you encounter more physics, more philosophy, and more life experience. Building the argument today is a starting point, not a final commitment.`,
          ],
          image: `/voyager-assets/cosmos/l11-s5-before.webp`,
          imageCaption: `Real philosophical disagreement. Implications for free will, meaning, death, daily life.`,
          vocab: [
            {
              word: `metaphysics`,
              definition: `Branch of philosophy that asks what fundamentally exists and what is the nature of reality. Distinct from physics (which describes how things behave) and epistemology (which asks how we can know). Philosophy of time is a branch of metaphysics.`,
              audioPrompt: `Metaphysics is the branch of philosophy that asks what fundamentally exists and what the nature of reality is, {name}. It is distinct from physics, which describes how things behave, and from epistemology, which asks how we can know things. Philosophy of time is a branch of metaphysics. The block universe, presentism, and growing block aren't physics theories. They're metaphysical positions about what time fundamentally IS. Physics constrains the metaphysical positions but doesn't fully determine them. Different metaphysical interpretations can be consistent with the same physics. This is why physicists and philosophers can hold different views even when they agree on the empirical evidence. Knowing the distinction helps you engage with debates where evidence and metaphysical interpretation are entangled.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l11-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Time, Fundamentally?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real working philosophers actively defend each of these.`,
          positions: [
            {
              id: `block-universe`,
              label: `Block universe / Eternalism: all moments equally real`,
              summary: `All moments of time (past, present, future) are equally real. The present has no special metaphysical status. Time is more like another dimension than like a flowing river. Strongly supported by relativity, which shows simultaneity isn't universal. Einstein and many modern philosophers (Skow, others) have defended this view. Implications: past moments and people are still real; future already exists; "flowing time" is a feature of how brains experience spacetime, not of spacetime itself.`,
            },
            {
              id: `presentism`,
              label: `Presentism: only the present moment is real`,
              summary: `Only the present moment is real. The past existed but doesn't anymore; the future doesn't exist yet. Closer to common-sense experience. Roots in Augustine and many traditions; contemporary defenders include Tim Maudlin and physicist Lee Smolin ("Time Reborn" 2013). Implications: living in the present has metaphysical backing; the future is genuinely open; free will fits more naturally. Biggest challenge: reconciling with relativity, where different observers have different "nows."`,
            },
            {
              id: `growing-block`,
              label: `Growing block: past and present real, future grows into being`,
              summary: `Middle position. Past and present moments are real. Future moments are not yet. Reality grows as time passes. Proposed by C.D. Broad (1923), defended today by Michael Tooley and Peter Forrest. Tries to combine the reality of the past from eternalism with the open future from presentism. Implications: past people and moments are still real; the future is genuinely open; what you do shapes what becomes real. Challenge: explaining why "the leading edge" of reality is metaphysically special.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Einstein's special relativity (1905, with Minkowski 1908) showed simultaneity is not universal. Different observers have different "nows." This makes a universal moving present moment difficult to defend physically. Generally favors block universe.`,
              source: `Einstein 1905; Minkowski 1908; standard relativity textbooks`,
            },
            {
              id: `e2`,
              text: `Subjective experience of time strongly supports the existence of a flowing present moment. Past feels fixed, future feels open, the present is where action happens. This is universal across cultures and ages. Generally favors presentism.`,
              source: `Standard psychological observations; phenomenology literature`,
            },
            {
              id: `e3`,
              text: `Einstein himself wrote in 1955 (after Michele Besso's death) that "the distinction between past, present, and future is only a stubbornly persistent illusion." Bradford Skow's "Objective Becoming" (2015) defends similar eternalism.`,
              source: `Einstein letter 1955; Skow 2015`,
            },
            {
              id: `e4`,
              text: `Physicist Lee Smolin's "Time Reborn" (2013) argues that time is fundamentally real and not just an emergent feature of spacetime. He proposes specific physics that would make time more fundamental than the standard block-universe interpretation suggests.`,
              source: `Smolin "Time Reborn" 2013`,
            },
            {
              id: `e5`,
              text: `Free will in the libertarian sense (the future is genuinely open) fits more naturally with presentism or growing block than with eternalism. If the future already exists in the block, it's hard to see how it's genuinely open.`,
              source: `Standard free will debates; multiple philosophical sources`,
            },
            {
              id: `e6`,
              text: `Growing block theory (C.D. Broad 1923) tries to preserve both the reality of the past and the open future. Modern defenders like Peter Forrest engage with contemporary physics. A serious minority position but with real intellectual content.`,
              source: `Broad 1923; Forrest 2004 and later work`,
            },
            {
              id: `e7`,
              text: `Augustine of Hippo's Confessions (4th century) contains some of the earliest serious philosophy of time, including arguments for something like presentism. The intuition that "only the present is real" is ancient and widespread.`,
              source: `Augustine, Confessions, Book XI`,
            },
            {
              id: `e8`,
              text: `Physics and metaphysics are not the same. Block universe, presentism, and growing block are metaphysical positions that interpret the same physics differently. The empirical evidence from relativity constrains but doesn't fully determine which metaphysical view is correct.`,
              source: `Standard philosophy of physics; multiple texts`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that 'what time is fundamentally' is a meaningful question with a definite answer. But maybe the question itself is malformed. Maybe 'time' isn't a single thing that has a single nature. Our intuition about flowing time comes from how our brains process memory and prediction. Physics describes spacetime structure. These might not be aspects of one unified phenomenon at all; they might just be two different things that we accidentally use the same word for. Why think any of the three positions is correct, rather than thinking the question is itself confused?"`,
            promptInstruction: `In 3-4 sentences, respond. How does your position handle the possibility that "time" doesn't have a unified nature? Does the position still survive if "time" turns out to be multiple separate phenomena?`,
          },
          reflectionPrompt: `Looking at the positions you didn't choose, which has the strongest piece of evidence for it? Has your sense of what time is shifted?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is the question "what is time?" genuinely hard?`,
              options: [
                `Because clocks are confusing`,
                `Because physics (especially relativity) and intuitive experience seem to disagree about time; physics suggests no universal "moving present" while experience strongly suggests time flows; the answer shapes free will, meaning, and how to live`,
                `Because nobody cares`,
                `Because time is fake`,
              ],
              correctIndex: 1,
              explanation: `The tension between how time feels and what physics says is the central puzzle in philosophy of time. Different reasonable people weight the considerations differently.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the block universe view (eternalism)?`,
              options: [
                `Time is rectangular`,
                `All moments of time (past, present, future) are equally real; the present has no special metaphysical status; time is more like another dimension than a flowing river; strongly supported by relativity; defended by Einstein, Minkowski, Skow`,
                `Time doesn't exist`,
                `Only future is real`,
              ],
              correctIndex: 1,
              explanation: `The block universe takes physics very seriously and treats the felt sense of flowing time as a feature of how brains experience reality, not as a feature of reality itself.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is presentism?`,
              options: [
                `Buying presents`,
                `Only the present moment is real; the past existed but doesn't anymore; the future doesn't exist yet; closer to common-sense experience; roots in Augustine, contemporary defenders include Tim Maudlin and Lee Smolin`,
                `Living for today only`,
                `Ignoring history`,
              ],
              correctIndex: 1,
              explanation: `Presentism takes intuition very seriously and treats the apparent reality of past and future moments as a kind of cognitive shorthand. Its biggest challenge is reconciling with relativity.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the growing block universe view?`,
              options: [
                `Reality is expanding`,
                `Middle position: past and present moments are real, future is not yet; reality grows as time passes; proposed by C.D. Broad 1923, defended today by Tooley and Forrest; tries to combine reality of past with open future`,
                `Building blocks of matter`,
                `Same as presentism`,
              ],
              correctIndex: 1,
              explanation: `Growing block is a sophisticated middle position with real academic defenders. Its biggest challenge is explaining why "the leading edge" is metaphysically special.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does the block universe view tend to be favored by physicists?`,
              options: [
                `Because physicists are cold`,
                `Because special relativity (Einstein 1905, Minkowski 1908) showed simultaneity is not universal; different observers have different "nows"; this is difficult to reconcile with a single universal moving present moment`,
                `Because they're determinists`,
                `By accident`,
              ],
              correctIndex: 1,
              explanation: `Einstein himself wrote in 1955 that "the distinction between past, present, and future is only a stubbornly persistent illusion." This view fits the structure of relativity most naturally.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Lee Smolin argue in "Time Reborn" (2013)?`,
              options: [
                `Time is fake`,
                `That time is fundamentally real and not just an emergent feature of spacetime; defends a version of presentism within contemporary physics; proposes specific physics that would make time more fundamental than standard block universe suggests`,
                `Time travels in circles`,
                `Time goes backwards`,
              ],
              correctIndex: 1,
              explanation: `Smolin is a working theoretical physicist. His position is a minority view in physics but represents serious engagement with the question of time's fundamental status.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the relationship between these positions and free will?`,
              options: [
                `No relationship`,
                `Free will in the libertarian sense (future genuinely open) fits more naturally with presentism or growing block than with block universe; if the future already exists in the block, it's hard to see how it's genuinely open; the metaphysics of time shapes how we think about choice and agency`,
                `Free will is fake`,
                `Time has no free will`,
              ],
              correctIndex: 1,
              explanation: `The connection between philosophy of time and free will is direct and important. Different time metaphysics produce different conclusions about how open the future actually is.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are physics and metaphysics not the same here?`,
              options: [
                `They are the same`,
                `Physics describes how things behave; metaphysics asks what fundamentally exists; the block universe, presentism, and growing block are metaphysical positions that interpret the same physics differently; relativity constrains but doesn't fully determine which view is correct`,
                `Physics is fake`,
                `Metaphysics is wrong`,
              ],
              correctIndex: 1,
              explanation: `This distinction matters for engaging with the debate clearly. Physicists and philosophers can hold different views even when they agree on the empirical evidence. Knowing the distinction prevents confusing physics with metaphysical interpretation.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All physicists agree that the block universe view is correct.`,
              correctAnswer: false,
              explanation: `False. While many physicists default to block universe because it fits naturally with relativity, others (including Lee Smolin) defend versions of presentism or argue time is more fundamental than the block view suggests. The disagreement is real and ongoing.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone says "Time is just an illusion; only this present moment exists." Based on this lesson, what should you notice?`,
              options: [
                `"That's just true"`,
                `"That sounds like a confident version of presentism, but it's framed as if it were established when actually three serious positions compete in philosophy of time: block universe (favored by relativity), presentism (favored by intuition), and growing block. Real working philosophers and physicists defend each. The claim 'only the present moment exists' is one defensible position, but it has serious challenges (especially reconciling with relativity) and is not the consensus view. Spiritual content sometimes presents presentism as obviously true; it isn't."`,
                `"Time is fake"`,
                `"You're wrong"`,
              ],
              correctIndex: 1,
              explanation: `Real applied philosophy of time. Spiritual/wellness content sometimes presents presentism as obviously correct. The reality is that three positions compete, and the question is genuinely open. Engaging with the full debate is more useful than accepting any single position as obviously true.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you assume about what time IS? Has the picture shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position pulled you most? Was it because of the physics, the intuition, the implications for free will, or some other reason?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If the block universe is correct, your great-grandparents are still real in the past. If presentism is correct, they don't exist anywhere. How does this change your relationship to people you've lost?` },
            { id: `reflect-application`, category: `Application`, prompt: `Some spiritual practices (mindfulness, meditation) emphasize the present moment. Does your position on what time IS support or complicate those practices?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the entire question be misframed? Maybe "time" isn't a single thing with a single nature. What would the alternative even look like?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: do they think the past is still real, somewhere? Do they think the future already exists? Most people have never been asked.` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Time is the most personal cosmic question. Two paths.`,
          familyActivity: {
            title: `The "What Is Time?" Family Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned about the three positions on time. Ask each adult: when they think about the past, does it feel real to them in some sense, or completely gone? When they think about the future, does it feel like it already exists or that we're creating it as we go? Most adults have held intuitions about this without ever articulating them. Walk through the three positions. The conversation often becomes more personal than expected: family members deceased, futures imagined, choices made. The philosophy of time touches the most personal questions about existence, loss, and possibility.`,
          },
          projectOption: {
            title: `Map Your Own Theory Of Time, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Spend 14 days reflecting on your own intuitions and beliefs about time. Keep a journal. Each day, write 1-2 paragraphs on a specific question: do past moments still exist somewhere? Does the future already exist? What does "now" mean? After 14 days, write 1,500 words synthesizing your current best understanding. Mark clearly: which conclusions are intuition-based, which are physics-based, which are philosophical reasoning. Real applied metaphysical thinking at a depth few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Sustained philosophical reflection at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone who has thought carefully about what time IS, how does that change your relationship to the past, the future, and the present moment you're in right now?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows three serious positions on what time IS, with real defenders for each.`,
            `A person who can hold the tension between physics and intuitive experience of time without resolving it falsely.`,
            `Someone willing to ask what time fundamentally is instead of taking the question for granted.`,
          ],
          saveKey: `identity_responses_cs_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleventh Cosmos lesson done. You can now articulate three serious positions on what time IS (block universe, presentism, growing block), distinguish physics from metaphysics, recognize how the question shapes free will and meaning, and engage with one of the deepest questions in philosophy. Most adults have never thought about this with any rigor. Next time we look at a strange feature of our universe: the constants of physics seem finely tuned for life. Why? Three serious answers compete, and they connect directly to the multiverse debate from Lesson 8. Source Evaluation format. See you among the stars. — Nova`,
          badge: `time-philosopher`,
          badgeName: `Time Philosopher`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious positions on what time IS (block universe, presentism, growing block)`,
            `Distinguishes physics from metaphysical interpretation of physics`,
            `Knows major defenders: Einstein/Skow for eternalism; Maudlin/Smolin for presentism; Broad/Forrest for growing block`,
            `Recognizes implications for free will, meaning, and how to live`,
            `Can engage with philosophy of time without false confidence`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: The Anthropic Principle`,
            hook: `The constants of physics seem fine-tuned for life. Why? Three serious explanations: design, multiverse selection, lucky accident. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L11 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
