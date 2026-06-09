// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L19 — Living in Alignment with Values
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Ethics, Practical Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (Stoic / Existentialist / Virtue Ethics)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l19-v1";

const INNERWORLD_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-19`,
      title: `Living in Alignment with Values`,
      duration: 35,
      xpReward: 75,
      badge: `aligned-life-architect`,
      badgeName: `Aligned Life Architect`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, after 18 lessons about how mind, brain, emotion, and meaning work, today we ask the most practical question of all. How do you actually live a life that matches what you say you value? Most people fail at this. Most adults you know say they value family, integrity, growth, kindness, and meaning. Most of them also live in ways that don't fully match those words. The gap between stated values and actual life is one of the most common sources of suffering. Three serious philosophical traditions have addressed this directly: Stoicism, Existentialism, and Virtue Ethics. Each offers a different practical approach to alignment. Today you'll build an argument for the strongest approach for someone your age starting now.`,
          headline: `Living in Alignment with Values`,
          subtitle: `Three serious approaches to closing the gap.`,
          visual: `/voyager-assets/inner-world/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Gap Most People Live In`,
          paragraphs: [
            `Take a quick honest survey of the adults you know. Most of them have stated values they would say are important: family, kindness, integrity, growth, meaning, justice, contribution. Now look at how those same adults actually spend their time, money, attention, and energy. There's usually a gap. Sometimes a small one. Often a large one. The person who says family matters most works 70 hours a week. The person who says they value health eats badly and never sleeps. The person who says they care about justice rarely takes action on it.`,
            `This gap isn't because adults are bad people. It's because aligning your daily life with your stated values is genuinely hard. Daily life has its own momentum: schedules, expectations, social pressure, exhaustion, distraction. Real values get displaced by easier defaults. We end up living lives we didn't fully choose. Years go by. People wake up at 40 wondering how they got so far from who they meant to be.`,
            `The opportunity for someone your age is real. You're young enough that your patterns aren't hardened yet. You can start the practice of alignment early, before defaults take over. You can make it part of who you are rather than something you try to fix later. Three philosophical traditions offer different approaches to this work. Each has been used for centuries with real effects. Each has strengths and limits. Each will look different applied to a 12-year-old's life than to a 50-year-old's. Today you choose one to defend as the strongest starting place.`,
          ],
          image: `/voyager-assets/inner-world/l19-s1-gap.webp`,
          imageCaption: `The gap between stated values and actual life. Most adults live in it.`,
          vocab: [
            {
              word: `values alignment`,
              definition: `The practice of consciously matching how you spend time, money, attention, and energy to what you say you value. Hard in practice, well-documented to increase well-being and life satisfaction.`,
              audioPrompt: `Values alignment is the practice of consciously matching how you live to what you say you value, {name}. It is harder than it sounds. Daily life has its own momentum. Schedules, expectations, social pressure, and exhaustion push you toward defaults. Real values get displaced. The work of alignment is noticing this displacement and choosing differently, again and again, until your life actually reflects your values. Research consistently shows that people whose lives align with their values report higher meaning and well-being than people who live by default. Starting early is much easier than fixing it later.`,
            },
            {
              word: `daily defaults`,
              definition: `The patterns of behavior that take over when life's momentum — schedules, social pressure, exhaustion, distraction — replaces deliberate choice. The main mechanism by which stated values get displaced in everyday life.`,
              audioPrompt: `Daily defaults are the patterns of behavior that take over when momentum replaces deliberate choice, {name}. The lesson names them as the main reason people fail to live in alignment with their values. It is not that the person who says family matters most but works seventy hours a week is lying. It is that daily life has its own pull. Schedules fill. Exhaustion sets in. Social pressure shapes what gets done. Real values get displaced by easier patterns. Years pass. The gap widens. Defaults are not the enemy; they are what happens without conscious effort. The whole project of values alignment is the practice of interrupting defaults and choosing again.`,
            },
            {
              word: `inherited defaults`,
              definition: `Patterns of spending time, attention, and energy that are absorbed from family, culture, and environment rather than consciously chosen. A core reason why the gap between stated values and actual life persists.`,
              audioPrompt: `Inherited defaults are patterns absorbed from family, culture, and environment rather than consciously chosen, {name}. The lesson uses the term in the context of why alignment is genuinely difficult. Most people repeat values they have taken in without examining. Most people also live by time and energy patterns they inherited without choosing. The result is a life that reflects what surrounded you, not necessarily what you actually value. The lesson argues that starting the practice of noticing and interrupting these defaults at twelve — before they harden — is one of the most valuable things a young person can do. The patterns can be changed, but it is much easier early than at forty.`,
            }
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Stoicism: Focus On What You Control`,
          paragraphs: [
            `The Stoic approach to alignment is one of the oldest and most rigorous. Epictetus, a Greek philosopher who was born a slave, opened his Enchiridion with the central Stoic insight: "Some things are in our control, and others are not." What you can control: your thoughts, your responses, your character, your choices. What you cannot control: other people's actions, external events, outcomes, what happens to your body and possessions.`,
            `Stoic alignment, then, is the disciplined practice of caring about and acting on what you control while accepting what you don't. Your character is up to you. Whether other people like your character is not. Your effort is up to you. Whether your effort succeeds is not. The Stoic doesn't lower their aim. They aim entirely at what they can actually shape: their own moral and intellectual response to whatever happens.`,
            `Modern psychology has substantially validated this. People who focus their energy on what they can control report lower anxiety and higher well-being than people who try to control what they can't. Cognitive Behavioral Therapy descends partly from Stoic ideas. Acceptance and Commitment Therapy uses the same insight. The Stoic discipline, applied to a 12-year-old, looks like: focus on your effort, your character, your kindness, your honesty. Don't make your sense of self depend on grades, social outcomes, or what other people think. Live well. Outcomes follow imperfectly.`,
          ],
          image: `/voyager-assets/inner-world/l19-s2-stoic.webp`,
          imageCaption: `Stoicism: aim entirely at what you can actually shape.`,
          vocab: [
            {
              word: `Stoicism`,
              definition: `Ancient Greek and Roman philosophy emphasizing virtue, present-moment focus, and the discipline of caring about only what you can control. Still practiced and influential.`,
              audioPrompt: `Stoicism is an ancient Greek and Roman philosophy still actively practiced today, {name}. The central insight is from Epictetus: some things are in our control, others are not. What you control: your thoughts, responses, character, choices. What you don't: outcomes, other people, events. Stoic alignment is disciplined practice in caring about what you can shape while accepting what you can't. Modern Cognitive Behavioral Therapy and Acceptance and Commitment Therapy descend partly from Stoic ideas. The discipline produces measurable reductions in anxiety and increases in well-being when applied consistently.`,
            },
            {
              word: `Acceptance and Commitment Therapy`,
              definition: `A modern psychological treatment that descends partly from Stoic ideas, emphasizing acceptance of what cannot be controlled and committed action toward what can be. Has strong clinical evidence for reducing anxiety and improving well-being.`,
              audioPrompt: `Acceptance and Commitment Therapy is a modern psychological treatment that descends partly from Stoic ideas, {name}. The lesson names it alongside Cognitive Behavioral Therapy as evidence that the Stoic discipline of focusing on what you can control while accepting what you cannot has been validated by modern psychology. The therapy has strong clinical evidence for reducing anxiety and improving well-being. What is striking is that the core Stoic insight — distinguish what is in your control from what is not, and care about only the first — was articulated by Epictetus nearly two thousand years before the clinical research confirmed its usefulness. The ancient and the contemporary point to the same practical discipline.`,
            },
            {
              word: `Enchiridion`,
              definition: `The foundational text of Stoic practice written by Epictetus, a Greek philosopher who was born a slave. Opens with the central Stoic distinction between what is and is not in our control.`,
              audioPrompt: `The Enchiridion is the foundational text of Stoic practice written by Epictetus, {name}. Epictetus was a Greek philosopher who was born a slave. The lesson quotes the opening of the Enchiridion directly: some things are in our control, and others are not. What you control — your thoughts, responses, character, choices. What you do not — other people's actions, external events, outcomes, what happens to your body and possessions. The Enchiridion is a short text. Its central insight is one of the most practically useful in any philosophical tradition. Modern Cognitive Behavioral Therapy and Acceptance and Commitment Therapy both draw from it, even when they do not name it.`,
            }
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Existentialism: Choose Your Values, Then Live Them`,
          paragraphs: [
            `The Existentialist approach is more recent and more radical. Jean-Paul Sartre, Simone de Beauvoir, Søren Kierkegaard, and Viktor Frankl all share a basic claim: humans don't have a fixed nature. You become who you are through your choices. There's no cosmic blueprint telling you who you should be. There's just the freedom and responsibility of deciding for yourself, and then living what you've chosen.`,
            `Existentialist alignment starts with a question most people never ask seriously: what do you actually value? Not what your parents value. Not what your culture says you should value. Not what's easiest to defend in conversation. What do YOU value, when you look honestly at yourself? This question is harder than it sounds. Most people repeat values they've absorbed without examining. The Existentialist work is to take the question seriously, often through writing, conversation, reflection, and time.`,
            `Once you've chosen values, the alignment work is to live them with what Sartre called "good faith." Bad faith, for Sartre, is when you act as if your nature determined your choices ("I had no choice," "this is just who I am"). Good faith is acknowledging that every action is a choice, and choosing in ways that match the person you're committing to become. Viktor Frankl's research in concentration camps showed that even under extreme circumstances, people retained the freedom to choose their response. Values alignment is the daily practice of exercising that freedom intentionally.`,
          ],
          image: `/voyager-assets/inner-world/l19-s3-existentialist.webp`,
          imageCaption: `Existentialism: choose your values, then live them in good faith.`,
          vocab: [
            {
              word: `good faith`,
              definition: `Sartre's term for acknowledging that your actions are real choices, not products of fixed nature. Living as if you are responsible for who you are becoming.`,
              audioPrompt: `Good faith is Sartre's term for acknowledging that your actions are real choices, {name}. Its opposite is bad faith, which is acting as if your nature determined your choices, as if you "had no choice" or "couldn't help it." Bad faith denies responsibility. Good faith accepts it. Every action, in Sartre's view, is a commitment about the kind of person you're becoming. Living in good faith means making those commitments consciously rather than drifting into them. This is harder than it sounds. Most of our choices feel automatic. Recognizing them as choices is the existentialist discipline.`,
            },
            {
              word: `bad faith`,
              definition: `Sartre's term for acting as though your nature or circumstances determined your choices, denying that you are genuinely free and responsible for who you are becoming. The opposite of good faith.`,
              audioPrompt: `Bad faith is Sartre's term for acting as though your nature or circumstances determined your choices, {name}. It is the existentialist failure mode. Bad faith says: I had no choice. This is just who I am. The situation made me do it. In Sartre's view, these statements deny genuine freedom and genuine responsibility. Every action is a real choice. Every choice contributes to who you are becoming. Pretending otherwise is bad faith. The lesson pairs this with Viktor Frankl's observation from concentration camps: even under extreme circumstances, the freedom to choose your response remained. Bad faith is a refusal of that freedom. Recognizing it in yourself is the beginning of the existentialist practice.`,
            },
            {
              word: `Viktor Frankl`,
              definition: `Psychiatrist and existentialist thinker whose research in concentration camps demonstrated that even under extreme deprivation, humans retain the freedom to choose their response to circumstances. Author of Man's Search for Meaning.`,
              audioPrompt: `Viktor Frankl was a psychiatrist and existentialist thinker whose research was conducted in concentration camps, {name}. The lesson names him alongside Sartre, de Beauvoir, and Kierkegaard as sharing the basic existentialist claim that humans become who they are through their choices. What distinguishes Frankl is where he observed this. Under conditions of extreme deprivation and violence, he documented that people retained the freedom to choose how they responded. Meaning came from that freedom, even when nothing else could be changed. His book Man's Search for Meaning is one of the most widely read accounts of existentialist insight applied to the most difficult circumstances imaginable.`,
            }
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Virtue Ethics: Become A Person of Character`,
          paragraphs: [
            `Virtue Ethics is the oldest of the three traditions, going back to Aristotle around 350 BCE and continuing through Confucian thought, medieval Christian ethics, and modern philosophers like Alasdair MacIntyre and Martha Nussbaum. The central question of Virtue Ethics isn't "what should I do in this situation?" but "what kind of person should I become?" Right action follows from right character, not from following rules.`,
            `Aristotle's framework: every virtue is a kind of excellence in something. Courage is the excellence of facing fear well. Kindness is the excellence of treating others with care. Honesty is the excellence of relating to truth accurately. Each virtue lies between two failures, called vices. Courage lies between cowardice (too little) and recklessness (too much). Generosity lies between stinginess and wastefulness. Wisdom is the practical capacity to know what each virtue requires in a specific situation.`,
            `Virtue Ethics alignment is the slow shaping of character. You don't become courageous by reading about courage. You become courageous by repeatedly doing brave things, especially small ones, until courage becomes part of who you are. Aristotle called this habituation. The same goes for kindness, honesty, patience, and every other virtue. The practice is daily, small, and cumulative. Over years it changes who you are. Modern research on habit formation (Wood, Lally) substantially supports this view: character is shaped by repeated small actions in stable contexts, not by single grand decisions.`,
          ],
          image: `/voyager-assets/inner-world/l19-s4-virtue.webp`,
          imageCaption: `Virtue Ethics: shape character through repeated small actions over years.`,
          vocab: [
            {
              word: `habituation`,
              definition: `Aristotle's process by which repeated practice of a virtue makes the virtue become part of who you are. Supported by modern habit formation research.`,
              audioPrompt: `Habituation, in Aristotle's framework, is the process by which repeated practice of a virtue makes the virtue become part of who you are, {name}. You don't become courageous by reading about courage. You become courageous by repeatedly choosing to face fear well, especially in small situations, until courage becomes your habit. Modern habit formation research substantially supports this. Character is shaped over time by repeated small actions in stable contexts, not by single grand decisions. The implication is hopeful: you can intentionally cultivate the character you want, slowly, through practice. The implication is also demanding: there are no shortcuts.`,
            },
            {
              word: `virtue`,
              definition: `In Aristotle's framework, an excellence in some dimension of character — courage, kindness, honesty — that lies between two failure modes (vices) of excess and deficiency. Developed through repeated practice, not through single decisions.`,
              audioPrompt: `A virtue, in Aristotle's framework, is an excellence in some dimension of character, {name}. The lesson describes the structure clearly. Every virtue lies between two failures called vices. Courage lies between cowardice, too little, and recklessness, too much. Generosity lies between stinginess and wastefulness. Kindness is the excellence of treating others with care. Honesty is the excellence of relating to truth accurately. Virtues are not dispositions you are born with. They are developed through repeated practice — through habituation. The lesson draws on modern habit formation research to confirm Aristotle's basic claim: character is shaped by what you repeatedly do, especially in small consistent situations.`,
            },
            {
              word: `practical wisdom`,
              definition: `Aristotle's term for the capacity to know what each virtue requires in a specific situation. The ability to apply general principles to particular real circumstances with sound judgment.`,
              audioPrompt: `Practical wisdom is Aristotle's term for the capacity to know what each virtue requires in a specific situation, {name}. It is the meta-virtue in his framework: the skill of applying all the other virtues appropriately. Knowing that courage is the relevant virtue in a given moment, and knowing how much of it is called for, requires judgment that goes beyond following rules. The lesson notes that Virtue Ethics does not primarily ask what you should do in this situation. It asks what kind of person you should become. Practical wisdom is what makes that character useful in real situations. It is cultivated through experience, reflection, and repeated small choices over time.`,
            }
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Comparing The Three Approaches`,
          paragraphs: [
            `All three traditions agree on a basic goal: align your daily life with your values so you become the person you want to be. They differ in emphasis. Stoicism emphasizes acceptance of what you cannot control, which frees energy for working on what you can. Existentialism emphasizes the freedom and responsibility of choosing your values consciously and living them in good faith. Virtue Ethics emphasizes the slow daily shaping of character through repeated practice.`,
            `Each tradition has practical strengths. Stoicism is excellent for high-stress situations and for people prone to anxiety about outcomes they can't control. Existentialism is powerful for people grappling with identity questions and trying to figure out who they want to be. Virtue Ethics is the most patient and structured, giving a daily roadmap for character development without requiring big philosophical questions to be settled first.`,
            `Each tradition has limits when taken alone. Stoicism, in its extreme form, can lead to disengagement: if outcomes don't matter, why try? Existentialism can lead to paralysis: if every choice creates who you are, every choice feels weighted. Virtue Ethics can lead to traditionalism: focusing on inherited virtues without examining whether they fit you. Mature practice often integrates elements of all three. But you have to start somewhere. In the argument builder you'll defend the starting place you find strongest for someone your age.`,
          ],
          image: `/voyager-assets/inner-world/l19-s5-compare.webp`,
          imageCaption: `Three approaches, three emphases, one shared goal.`,
          vocab: [
            {
              word: `integrated ethics`,
              definition: `Drawing on multiple ethical traditions rather than committing dogmatically to one. The mature practice most thoughtful people arrive at over time.`,
              audioPrompt: `Integrated ethics is drawing on multiple ethical traditions rather than committing dogmatically to one, {name}. Most thoughtful people, over decades of practice, end up integrating Stoic acceptance of what they can't control, Existentialist responsibility for their choices, and Virtue Ethics' patient cultivation of character. The traditions aren't really competitors. They emphasize different aspects of the same underlying work. Starting with one tradition that fits your current life is reasonable. Over time, you'll likely add elements of others. The mature position is rarely pure allegiance to a single school.`,
            },
            {
              word: `decision paralysis`,
              definition: `A state in which the weight of choice becomes so heavy that deciding becomes difficult. Named as a potential limit of Existentialism when taken to extremes, because every choice feels weighted by its identity implications.`,
              audioPrompt: `Decision paralysis is the state in which the weight attached to choices makes deciding feel difficult or impossible, {name}. The lesson names it as a potential limit of Existentialism when taken to extremes. Sartre's insight that every choice creates who you are is both powerful and demanding. If every action is a commitment about the kind of person you're becoming, every decision can feel overwhelming. Mature existentialists balance this with practice and habit. The extreme form, where every choice feels like an identity referendum, can produce the very paralysis that makes alignment harder. Knowing this limit is part of understanding why many thoughtful people eventually integrate elements of more than one tradition.`,
            },
            {
              word: `traditionalism`,
              definition: `The tendency to follow inherited virtues and practices without examining whether they fit your actual life and values. Named as a potential limit of Virtue Ethics when taken to extremes.`,
              audioPrompt: `Traditionalism is the tendency to follow inherited virtues and practices without examining whether they actually fit your life, {name}. The lesson names it as a potential limit of Virtue Ethics when taken to extremes. Virtue Ethics focuses attention on character development through repeated practice. But which virtues? The tradition may name virtues that reflect a particular culture or historical moment. Without examination, practicing inherited virtues uncritically may shape you into someone you didn't actually choose to become. The lesson pairs this with the Existentialist corrective: consciously examining what you value before you commit to habituating it. Each tradition can protect against the failure mode of the others.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l19-argument-builder`,
          type: `argument-builder`,
          headline: `Build Your Argument: The Strongest Starting Approach`,
          intro: `Pick one of three approaches as the strongest starting place for living in alignment with your values, given that you are 12 years old and starting now. Build your case using evidence from this lesson. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `stoic`,
              label: `Stoic: focus on what you control`,
              summary: `Anxiety about outcomes you can't control is one of the biggest obstacles to alignment. Stoic discipline of focusing on what you actually control (your effort, character, choices) clears the most energy for real values work. Modern psychology validates this through CBT and ACT. For an adolescent navigating school stress, social pressure, and uncertainty about the future, the Stoic discipline produces immediate and lasting benefit.`,
            },
            {
              id: `existentialist`,
              label: `Existentialist: choose your values consciously`,
              summary: `Most people fail at alignment because they never seriously examined what they actually value; they live by inherited defaults. Existentialism's demand to consciously choose your values is the foundational step. For an adolescent forming identity, the existentialist question "who am I choosing to become" is exactly the question that matters most. Acceptance and habit-building work better after you've actually chosen what you're aiming for.`,
            },
            {
              id: `virtue-ethics`,
              label: `Virtue Ethics: shape character through daily practice`,
              summary: `Stated values mean nothing without the daily practice that builds character. Aristotle's habituation works because it shapes WHO you are, not just what you decide. Modern habit research validates this. For an adolescent, starting small daily practices of specific virtues (one act of kindness, one moment of courage, one truthful conversation) builds the foundation everything else rests on.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Epictetus's central Stoic insight: "Some things are in our control, and others are not." The discipline of focusing on what you control while accepting what you can't is the foundation of Stoic practice.`,
              source: `Epictetus, Enchiridion, ~135 CE`,
            },
            {
              id: `e2`,
              text: `Cognitive Behavioral Therapy and Acceptance and Commitment Therapy descend partly from Stoic ideas and have strong clinical evidence for reducing anxiety and improving well-being.`,
              source: `Multiple clinical research traditions, 1950s-present`,
            },
            {
              id: `e3`,
              text: `Viktor Frankl's research in concentration camps showed that even under extreme circumstances, the freedom to choose your response remained. Meaning came from how one chose to face what could not be changed.`,
              source: `Viktor Frankl, Man's Search for Meaning, 1946`,
            },
            {
              id: `e4`,
              text: `Sartre's concept of "good faith" identifies the central existentialist discipline: acknowledging that every action is a real choice rather than a product of fixed nature, and choosing in alignment with the person you're becoming.`,
              source: `Sartre, Being and Nothingness, 1943`,
            },
            {
              id: `e5`,
              text: `Aristotle's habituation: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." Modern habit formation research (Wood, Lally) substantially supports this view.`,
              source: `Aristotle, Nicomachean Ethics, 4th century BCE; modern habit research`,
            },
            {
              id: `e6`,
              text: `Adolescent identity formation (Erikson) is the central developmental task of ages 11-18. Engaging values consciously during this period has lasting effects on adult identity.`,
              source: `Erik Erikson and subsequent developmental psychology research`,
            },
            {
              id: `e7`,
              text: `Mature long-term practice often integrates elements of all three traditions. Most thoughtful people, over decades, end up combining Stoic acceptance, Existentialist responsibility, and Virtue Ethics cultivation rather than choosing pure allegiance to one school.`,
              source: `Practical ethics tradition; observation of long-term practitioners`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three traditions agree on the basic goal: align your life with your values. They emphasize different aspects of the same work. So isn't the right answer to integrate all three, not to pick one as 'strongest'? Maybe you're choosing your favorite tradition rather than what would actually work best for an actual 12-year-old."`,
            promptInstruction: `In 3-4 sentences, respond. Why does picking one starting tradition make practical sense for an actual teenager, even if the mature long-term form integrates all three?`,
          },
          reflectionPrompt: `Looking at the two traditions you didn't pick, which one most challenged your choice? Could you imagine integrating it into your practice within a year?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the gap between stated values and actual life?`,
              options: [
                `A small problem most people solve`,
                `One of the most common sources of suffering: most adults say they value certain things but live in ways that don't fully match those words; the gap usually grows with age unless explicitly worked on`,
                `Not a real problem`,
                `Only a problem for old people`,
              ],
              correctIndex: 1,
              explanation: `The gap is real, common, and grows over time without conscious work. Starting young to close it is much easier than trying to close it at 40.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the central Stoic insight from Epictetus?`,
              options: [
                `Everything is fate`,
                `"Some things are in our control, and others are not"; the discipline is focusing on what you control while accepting what you don't`,
                `Pain is good`,
                `Only the present matters`,
              ],
              correctIndex: 1,
              explanation: `This is the foundation of Stoic practice. The discipline produces measurable reductions in anxiety and is the root of modern Cognitive Behavioral Therapy.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does Sartre mean by "good faith"?`,
              options: [
                `Being religious`,
                `Acknowledging that every action is a real choice, not a product of fixed nature; choosing in ways that match the person you're committing to become`,
                `Trusting people`,
                `Being honest`,
              ],
              correctIndex: 1,
              explanation: `Good faith is the existentialist discipline of recognizing responsibility for choice. Bad faith is acting as if your nature determined your action.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is Aristotle's "habituation"?`,
              options: [
                `Getting used to bad situations`,
                `The process by which repeated practice of a virtue makes the virtue become part of who you are; you become courageous by repeatedly doing brave things, especially small ones`,
                `A boring routine`,
                `Mindless repetition`,
              ],
              correctIndex: 1,
              explanation: `Habituation is the practice mechanism in Virtue Ethics. Repeated small actions in stable contexts gradually shape character. Modern habit research substantially supports this.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did Viktor Frankl observe about freedom under extreme circumstances?`,
              options: [
                `That freedom disappears`,
                `That even in concentration camps, the freedom to choose your response remained; meaning came from how one chose to face what couldn't be changed`,
                `That suffering is meaningless`,
                `That existentialism is wrong`,
              ],
              correctIndex: 1,
              explanation: `Frankl's observation grounds the existentialist claim that the freedom to choose your response is irreducible, even under extreme circumstances. This freedom is also the basis for alignment work.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the central question of Virtue Ethics?`,
              options: [
                `What should I do in this specific situation?`,
                `What kind of person should I become? (Right action follows from right character, not from following rules)`,
                `What's the law?`,
                `What feels good?`,
              ],
              correctIndex: 1,
              explanation: `Virtue Ethics shifts the question from "what should I do" to "who should I become." Character is the foundation; actions flow from it.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's a potential limit of pure Stoicism when taken to extremes?`,
              options: [
                `It makes you too active`,
                `Disengagement: if outcomes don't matter, why try?`,
                `It's too modern`,
                `It only works for Greeks`,
              ],
              correctIndex: 1,
              explanation: `Pure focus on what you control, taken to extremes, can become withdrawal from caring about outcomes at all. Marcus Aurelius didn't actually live this way, but the philosophy in pure form has this risk.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's a potential limit of pure Existentialism?`,
              options: [
                `It's too easy`,
                `Paralysis: if every choice creates who you are, every choice feels weighted and decision becomes hard`,
                `It's not philosophical enough`,
                `It's too old`,
              ],
              correctIndex: 1,
              explanation: `Existentialism puts enormous weight on every choice. Mature existentialists balance this with practice and habit. The extreme form can produce decision paralysis.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All three traditions share the basic goal of aligning daily life with values, but emphasize different aspects of how to do that work.`,
              correctAnswer: true,
              explanation: `True. They're complementary more than competitive. Stoic acceptance, Existentialist responsibility, and Virtue Ethics cultivation all serve the same fundamental goal through different emphases.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You realize you've been saying you value being a good friend, but you've been ignoring a friend who needs support because you're busy with school. Based on this lesson, what's the most aligned response?`,
              options: [
                `Decide friendship isn't actually your value`,
                `Accept the gap and move on`,
                `Notice the gap honestly; choose a specific small action you can do today to honor the value (text the friend, schedule time, listen carefully when you see them); let this small action be a step in habituating the character you want; this combines Existentialist conscious choice, Stoic focus on what you can do now, and Virtue Ethics' daily practice`,
                `Wait until next weekend`,
              ],
              correctIndex: 2,
              explanation: `All three traditions integrated in a practical response. Notice the gap (honesty). Choose a specific action (existentialist responsibility). Focus on what you can do now (Stoic). Make it part of your character (Virtue Ethics). This is what mature alignment work actually looks like.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What gap between stated values and actual life do you notice in yourself right now? Be specific.` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you chose your tradition, did you choose the one that fits your current life or the one that sounds most appealing? Notice the difference.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you actually lived in alignment with your stated values for a year, who would you become? What's most different from now?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick ONE value you say you care about. Choose ONE specific small action you could take this week to honor it. Write it down concretely.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is "stated values" itself a flawed concept? What if you don't fully know what you value until you've lived a while? How does that complicate alignment?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Make a quick list: three values you would put on a poster if asked, three values you actually live by based on your past week. How similar or different are the two lists?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Values alignment is one of the most useful frameworks in this entire band. Two paths below.`,
          familyActivity: {
            title: `The Family Values Audit`,
            duration: `40 minutes`,
            description: `At dinner, each family member writes down (privately) three values they would say they care most about, and then estimates what percentage of their last week actually reflected those values. Share the gaps honestly. (Not to attack each other; to be honest together.) Then discuss as a family: what makes the alignment work hard? What would make it easier? Are there family-level changes (how time is spent, how decisions are made) that would help everyone? This conversation can be transformative if approached with curiosity rather than judgment.`,
          },
          projectOption: {
            title: `The Alignment Practice, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, choose ONE value you want to live more aligned with that day. (Examples: kindness, courage, honesty, patience, attention to my family, focus on my own work, integrity.) Make ONE small concrete action toward it. Each evening, write 2-3 sentences: what did you do, what did you notice, what got in the way. After 14 days, write 500 words on what you learned about your own alignment. You will see real patterns emerge. You will also see that small daily practice is more powerful than grand declarations.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. This is the kind of practice that compounds for a lifetime.`,
          },
          identityQuestion: `If you live in alignment with your values starting now, who do you become at 25? At 40? At 70?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who closes the gap between what I say I value and how I actually live.`,
            `A person who chooses values consciously and practices them in small daily ways.`,
            `Someone who knows alignment is a discipline, not a one-time decision.`,
          ],
          saveKey: `identity_responses_iw_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three serious ethical traditions for living in alignment with values, name their strengths and limits, build an argument for the strongest starting place for someone your age, and apply integrated alignment thinking to actual decisions. You're nearly through the Inner World band. The final lesson is a capstone. Designing a Conscious Life. It pulls together everything you've learned over the past 19 lessons and asks you to synthesize what you actually want to do with what you now know. See you there. — Sage`,
          badge: `aligned-life-architect`,
          badgeName: `Aligned Life Architect`,
          xpEarned: 75,
          competencies: [
            `Can articulate Stoic, Existentialist, and Virtue Ethics approaches to values alignment`,
            `Can identify the gap between stated values and actual life as a common phenomenon`,
            `Has built an argument for a specific approach grounded in evidence`,
            `Knows how to identify and start one small alignment practice`,
            `Understands that mature practice often integrates multiple traditions over time`,
          ],
          nextLessonPreview: {
            title: `Lesson 20: Designing a Conscious Life — The Capstone`,
            hook: `Twenty lessons. One synthesis. What do you actually want to do with everything you've learned about consciousness, mind, emotion, and meaning?`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L19 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
