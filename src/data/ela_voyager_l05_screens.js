// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L05 — American Literature: Romanticism and Transcendentalism
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Literature, American Literary Movements
// Interaction: PERSPECTIVES. Paragraphs <=970ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l05-v1";

const ELA_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-05`,
      title: `American Literature: Romanticism and Transcendentalism`,
      duration: 35,
      xpReward: 75,
      badge: `romantic-reader`,
      badgeName: `Romantic Reader`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, the Declaration of Independence is one of the most influential documents in human history — and one of the most carefully constructed rhetorical arguments ever written. This lesson reads it as both a historical text and a rhetorical artifact: what moves did Jefferson make, why did they work, and where are the tensions between the argument and the reality?`,
          headline: `American Literature: Romanticism and Transcendentalism`,
          subtitle: `The writers who asked what it means to be a free soul. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A New Question: The Individual Soul`,
          paragraphs: [
            `By the early 1800s, American writing turned in a bold new direction. The colonial voices had focused outward, on God, sin, and community. A new generation turned inward, asking what it means to be a free individual with a soul of one's own. This movement was Romanticism, and it valued feeling, imagination, and the inner life over cold logic and rigid rules.`,
            `The Romantics believed that emotion and intuition could reach truths reason alone could not. They were drawn to wild nature, where they felt something vast and sublime, a sense of awe larger than any human institution. They celebrated the individual, the imagination, and the freedom to feel deeply. Where the Puritans had distrusted the self, the Romantics began to trust it.`,
            `Reading a literary movement differs from reading a single text. A movement is a shared set of questions many writers explore in their own ways. To read one well, you ask: what big questions are these writers circling, and where do they agree or split? Romanticism asked what the free soul could know and become, and that question shaped American writing for decades.`,
          ],
          image: `/voyager-assets/ela/l05-s1-individual.webp`,
          imageCaption: `By the early 1800s, American writing turned inward. Colonial voices focused outward on God, sin, and community; a new generation asked what it means to be a free individual with a soul of one's own. This was ROMANTICISM, valuing feeling, imagination, and the inner life over cold logic and rigid rules. The Romantics believed emotion and intuition could reach truths reason alone could not, were drawn to wild nature where they felt the sublime, and celebrated the individual and the imagination. Where the Puritans distrusted the self, the Romantics began to trust it. Reading a movement differs from reading one text: a movement is a shared set of questions many writers explore their own ways. Ask what big questions they all circle, and where they agree or split.`,
          vocab: [
            { word: `Romanticism`,
              definition: `An early-1800s movement valuing feeling, imagination, nature, and the individual soul over cold reason and rigid rules.`,
              audioPrompt: `Romanticism was a movement of the early 1800s, {name}, that turned inward and valued feeling, imagination, and the individual soul. The Romantics trusted emotion and intuition to reach truths that cold reason alone could not.` },
            { word: `the sublime`,
              definition: `A feeling of overwhelming awe and vastness, often inspired by wild nature, larger than any human institution.`,
              audioPrompt: `The sublime is a feeling of overwhelming awe, {name}, the sense of something vast and powerful, often found in wild nature. The Romantics chased that feeling because it made them feel part of something far larger than themselves.` },
            { word: `literary movement`,
              definition: `A shared set of ideas, feelings, and questions that many writers explore in their own ways during the same period.`,
              audioPrompt: `A literary movement is a shared set of questions many writers explore at once, {name}, each in their own way. To read a movement, you ask what big questions they all circle, and where they agree and where they split apart.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Transcendentalism: Truth From Within`,
          paragraphs: [
            `Out of Romanticism grew a bold American branch: Transcendentalism. Led by Ralph Waldo Emerson, it made a radical claim: each person can know truth directly, through intuition, by looking within and into nature. You do not need a church or government to hand truth down; the divine speaks through your own soul if you learn to listen.`,
            `Emerson's essay "Self-Reliance" became the movement's anthem. Trust yourself, he urged; do not just follow the crowd or borrow opinions secondhand. This was inspiring and risky at once: it lifted the individual high, but placed enormous weight on the self as the source of truth.`,
            `Henry David Thoreau lived the idea. He spent two years in a cabin at Walden Pond, simplifying his life to see what was essential, and wrote "Walden" about it. In "Civil Disobedience," he argued that conscience can rightly stand against an unjust law, an idea that later inspired Gandhi and Martin Luther King Jr. Transcendentalism's answer was clear: the free soul can find truth within, and must have courage to live by it.`,
          ],
          image: `/voyager-assets/ela/l05-s2-transcendental.webp`,
          imageCaption: `Out of Romanticism grew a bold American branch: TRANSCENDENTALISM, led by Ralph Waldo Emerson. Its radical claim: each person can know truth directly, through their own intuition, by looking within and into nature, without needing a church or government to hand truth down. Emerson's essay "Self-Reliance" became the anthem: trust yourself, think your own thoughts, do not borrow opinions secondhand. Inspiring but risky, it placed enormous weight on the self as the source of truth. Henry David Thoreau lived it, spending two years in a cabin at Walden Pond and writing "Walden," and in "Civil Disobedience" argued that conscience can rightly stand against an unjust law, later inspiring Gandhi and Martin Luther King Jr. The free soul can find truth within, and must have courage to live by it.`,
          vocab: [
            { word: `Transcendentalism`,
              definition: `An American branch of Romanticism holding that each person can know truth directly through intuition and nature, without outside authority.`,
              audioPrompt: `Transcendentalism, {name}, was the bold American branch of Romanticism led by Emerson. Its radical claim was that each person can reach truth directly, through their own intuition and through nature, without needing any outside authority to hand it down.` },
            { word: `self-reliance`,
              definition: `Emerson's idea that one should trust one's own mind and conscience rather than blindly following the crowd or borrowed opinions.`,
              audioPrompt: `Self-reliance was Emerson's anthem, {name}: trust yourself, think your own thoughts, do not just follow the crowd. It was inspiring and risky at once, lifting the individual high but placing huge weight on the self as the source of truth.` },
            { word: `civil disobedience`,
              definition: `Thoreau's idea that an individual's conscience can rightly refuse to obey an unjust law. It later inspired Gandhi and King.`,
              audioPrompt: `Civil disobedience was Thoreau's idea, {name}, that a person's conscience can rightly stand against an unjust law. He wrote it after refusing a tax, and it later helped inspire leaders like Gandhi and Martin Luther King Junior.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Poet Of The Open Road`,
          paragraphs: [
            `If Emerson gave the movement its philosophy, Walt Whitman gave it a voice. His book "Leaves of Grass" (1855) broke nearly every rule of poetry, throwing out strict rhyme and meter for long, rolling lines. He wrote in plain American speech about ordinary people, the body, the open road. His poetry felt like a person talking to you, breathing on the page.`,
            `Whitman's poems overflow with the Transcendentalist spirit. In "Song of Myself" he celebrates the individual self, yet insists that self is connected to everyone and everything. He famously contained "multitudes," holding contradictions without shame, and sang a vast, democratic America in a form as free as the country itself.`,
            `Whitman shows a movement's ideas becoming new art. Romanticism prized the individual and imagination; Transcendentalism trusted the soul. Whitman forged a brand-new form to carry those ideas, free verse, that still shapes how poets write today. To read him is to feel a movement not as a set of beliefs but as a living, breathing voice.`,
          ],
          image: `/voyager-assets/ela/l05-s3-whitman.webp`,
          imageCaption: `If Emerson gave the movement its philosophy, WALT WHITMAN gave it a voice. His "Leaves of Grass" (1855) broke nearly every rule of poetry, throwing out strict rhyme and meter for long, rolling, free-flowing lines, written in plain American speech about ordinary people, the body, the city, the open road. His poems overflow with the Transcendentalist spirit: in "Song of Myself" he celebrates the individual self yet insists that self is connected to everyone and everything, famously containing "multitudes." His America was vast, democratic, bursting with life, sung in a form as free as the country itself. Whitman shows a movement's ideas becoming new art, forging free verse, which still shapes how poets write today. To read him is to feel a movement as a living, breathing voice.`,
          vocab: [
            { word: `Walt Whitman`,
              definition: `The poet of "Leaves of Grass" (1855) who broke poetic rules to celebrate the individual, democracy, and the connected self.`,
              audioPrompt: `Walt Whitman gave the movement its voice, {name}. His book Leaves of Grass broke nearly every rule of poetry, using long, free-flowing lines and plain American speech to celebrate the individual, the body, and the vast democratic country.` },
            { word: `free verse`,
              definition: `Poetry without strict rhyme or meter, using natural rhythms of speech. Whitman pioneered it in American poetry.`,
              audioPrompt: `Free verse is poetry without strict rhyme or meter, {name}, following the natural rhythms of speech instead. Whitman pioneered it in America, forging a brand-new form free enough to carry the movement's huge ideas.` },
            { word: `multitudes`,
              definition: `Whitman's word for the many contradictory selves a person can hold at once. "I contain multitudes."`,
              audioPrompt: `Multitudes was Whitman's word, {name}, for the many different and even contradictory selves a person can hold at once. When he wrote I contain multitudes, he meant a single soul is large enough to hold contradictions without shame.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Dark Side Of The Soul`,
          paragraphs: [
            `Not every Romantic was an optimist. While Emerson and Whitman celebrated the soul's bright possibilities, a darker branch explored the shadows: guilt, fear, madness, death, the hidden corners of the heart. These were the Dark Romantics, and their greatest voices were Edgar Allan Poe and Nathaniel Hawthorne.`,
            `Poe was a master of horror and the mind in distress. In tales like "The Tell-Tale Heart" and poems like "The Raven," he showed how guilt and obsession twist a person from within, taking the Romantic love of deep feeling and turning it toward terror. Hawthorne, in "The Scarlet Letter," examined sin, secrecy, and the weight of judgment in a Puritan-haunted New England.`,
            `The Dark Romantics complete the picture. A movement is rarely a single mood; it is a conversation, often an argument. The Transcendentalists trusted the self and saw light; the Dark Romantics looked at that same self and saw shadows it could not escape. Reading both shows the whole movement, its hope and its dread, and reveals that the era's great question, what is the free soul?, had more than one honest answer.`,
          ],
          image: `/voyager-assets/ela/l05-s4-dark.webp`,
          imageCaption: `Not every Romantic was an optimist. While Emerson and Whitman celebrated the soul's bright possibilities, a darker branch explored the shadows: guilt, fear, madness, death, the hidden corners of the heart. These were the DARK ROMANTICS, and their greatest voices were Edgar Allan Poe and Nathaniel Hawthorne. Poe, a master of horror, showed in "The Tell-Tale Heart" and "The Raven" how guilt and obsession twist a person from within, turning Romantic deep feeling toward terror. Hawthorne, in "The Scarlet Letter," examined sin, secrecy, and judgment in a Puritan-haunted New England. They complete the picture: a movement is rarely one mood but a conversation, often an argument. The Transcendentalists saw light in the self; the Dark Romantics saw shadows it could not escape.`,
          vocab: [
            { word: `Dark Romantics`,
              definition: `Romantic-era writers like Poe and Hawthorne who explored guilt, fear, death, and the shadowy side of the human soul.`,
              audioPrompt: `The Dark Romantics, {name}, were writers like Poe and Hawthorne who explored the shadows the optimists skipped: guilt, fear, madness, and death. They looked at the same human soul Emerson celebrated and saw the darkness it could not escape.` },
            { word: `Edgar Allan Poe`,
              definition: `A Dark Romantic master of horror whose tales and poems, like "The Raven," explore guilt, obsession, and the mind in distress.`,
              audioPrompt: `Edgar Allan Poe was the master of horror, {name}. In tales like The Tell-Tale Heart and poems like The Raven, he showed how guilt and obsession can twist a person from within, turning the Romantic love of deep feeling toward pure terror.` },
            { word: `conversation`,
              definition: `The idea that a literary movement is not one fixed mood but an ongoing exchange, often an argument, among its writers.`,
              audioPrompt: `A literary movement is a conversation, {name}, often an argument, not a single fixed mood. The Transcendentalists and the Dark Romantics looked at the same free soul and reached opposite answers, and reading both shows you the whole movement.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. Romanticism turned American writing inward, prizing feeling, imagination, nature, and the individual soul. Transcendentalism, led by Emerson and Thoreau, pushed further: each person can know truth directly through intuition, and self-reliance is almost sacred. Whitman turned those ideas into free verse that sang the democratic self.`,
            `But the movement was a conversation, not a chorus. The Dark Romantics, Poe and Hawthorne, looked at the same free soul and saw guilt, dread, and shadow. Reading a movement well means hearing all these voices at once, noticing the shared question, what is the free individual soul?, and the very different answers honest writers gave it.`,
            `Now the perspectives screen brings the movement's key voices: Emerson the philosopher of self-reliance, Thoreau who lived it, Whitman who sang it, a Dark Romantic who doubted the optimism, and a modern reader. Your job is not to crown a winner, but to understand why these thinkers, circling the same question, reached such different conclusions, and to build your own reading of what the free soul can be. Onward.`,
          ],
          image: `/voyager-assets/ela/l05-s5-before.webp`,
          imageCaption: `Threads together. Romanticism turned American writing inward, prizing feeling, imagination, nature, and the individual soul. Transcendentalism, led by Emerson and Thoreau, pushed further: each person can know truth directly through intuition, and self-reliance is almost sacred. Whitman turned those ideas into free verse that sang the democratic self. But the movement was a conversation: the Dark Romantics, Poe and Hawthorne, saw guilt, dread, and shadow in the same free soul. The perspectives screen brings the key voices: Emerson the philosopher, Thoreau who lived it, Whitman who sang it, a Dark Romantic who doubted, and a modern reader. Understand why thinkers circling the same question reached such different conclusions, and build your own honest reading of what the free soul can be.`,
          vocab: [
            { word: `intuition`,
              definition: `Direct inner knowing, not reasoned out step by step. The Transcendentalists trusted it as a path to truth.`,
              audioPrompt: `Intuition is direct inner knowing, {name}, truth felt at once rather than reasoned out step by step. The Transcendentalists trusted intuition deeply, believing the soul could sense truth directly if a person learned to listen within.` },
            { word: `nonconformity`,
              definition: `Refusing to simply follow the crowd, choosing instead to live by one's own conscience. Central to Emerson and Thoreau.`,
              audioPrompt: `Nonconformity, {name}, means refusing to just follow the crowd, choosing instead to live by your own conscience. Emerson and Thoreau prized it, though it takes real courage to think and live differently from everyone around you.` },
            { word: `transcend`,
              definition: `To rise above or go beyond ordinary limits. Transcendentalists believed the soul could transcend the material world to reach truth.`,
              audioPrompt: `To transcend means to rise above ordinary limits, {name}. The Transcendentalists took their name from the belief that the soul could go beyond the everyday material world to touch a higher truth, directly and from within.` },
          ],
        },

        {
          id: `l05-perspectives`,
          type: `perspectives`,
          headline: `Voices Of The American Soul`,
          intro: `{name}, the great American question of the era was: what is the free individual soul, and what can it know and become? Here are five voices answering it. Each is defensible. Do not crown a winner. Understand why thinkers circling the same question reached such different conclusions, and build your own honest reading.`,
          perspectives: [
            {
              id: `p1`,
              voice: `Ralph Waldo Emerson, philosopher of self-reliance`,
              era: `1830s-1840s`,
              stance: `Trust yourself. Each soul can reach truth directly, and to conform blindly is to betray your own genius.`,
              quote: `"Trust thyself: every heart vibrates to that iron string."`,
              argument: `The divine speaks through every individual soul. You do not need church or state to hand you truth; look within and into nature, and you can know it directly. To imitate others or follow the crowd is to throw away the one thing only you can give the world: your own authentic thought.`,
              evidence: `His essays "Self-Reliance" and "Nature"; the whole Transcendentalist project of finding truth through intuition; the lasting influence of self-reliance on American individualism.`,
              strengths_and_limits: `Strength: deeply empowering, it tells every person their mind and conscience matter. Limit: it places enormous weight on the self, and "trust yourself" gives little guidance when your own intuitions are mistaken or selfish.`,
            },
            {
              id: `p2`,
              voice: `Henry David Thoreau, who lived the idea`,
              era: `1840s-1850s`,
              stance: `Don't just believe it, live it. Simplify your life and let conscience stand even against the law.`,
              quote: `"That government is best which governs least."`,
              argument: `Ideas are worthless unless you live them. So I went to the woods at Walden to live deliberately and find what is essential. And when the state asked me to support what I believed unjust, I refused, because a single awake conscience can rightly stand against an unjust law. The free soul must act, not just think.`,
              evidence: `"Walden," his two-year experiment in simple living; "Civil Disobedience," written after he was jailed for refusing a tax; its later influence on Gandhi and Martin Luther King Jr.`,
              strengths_and_limits: `Strength: turns philosophy into courageous action with world-changing consequences. Limit: not everyone can retreat to a cabin or risk jail, and "follow your conscience against the law" can justify harm as easily as heroism, depending on the conscience.`,
            },
            {
              id: `p3`,
              voice: `Walt Whitman, the poet of the democratic self`,
              era: `1850s-1880s`,
              stance: `The free soul is vast, connected, and contradictory, and it deserves a wholly new song.`,
              quote: `"I am large, I contain multitudes."`,
              argument: `The self the Transcendentalists describe is not small or tidy; it is enormous, holding contradictions without shame, connected to every other person and to all of nature. Such a soul cannot be sung in the old, neat forms. It needs free verse, lines as sprawling and democratic as America itself. To celebrate yourself, truly, is to celebrate everyone.`,
              evidence: `"Leaves of Grass" and "Song of Myself"; his invention of American free verse; his fusion of fierce individualism with radical connection to all people.`,
              strengths_and_limits: `Strength: turns the movement's ideas into a thrilling, lasting new art form and resolves the self-versus-others tension by holding both. Limit: the boundless optimism can feel like it skips over real suffering, which the Dark Romantics insisted on facing.`,
            },
            {
              id: `p4`,
              voice: `A Dark Romantic (in the spirit of Poe and Hawthorne)`,
              era: `1830s-1850s`,
              stance: `You celebrate the soul's light, but you are ignoring its shadows, guilt, dread, and the dark it cannot escape.`,
              quote: `"Look into the heart, yes, but do not pretend you will only find light there."`,
              argument: `Trust yourself, you say. But the self is not all goodness and genius. Look honestly and you find guilt, obsession, cruelty, and fear. Hawthorne saw how sin and secrecy rot a soul; Poe showed how a mind can turn against itself. Your sunny faith in intuition ignores half of what a human being actually is. An honest writer faces the darkness, not just the dawn.`,
              evidence: `Poe's "The Tell-Tale Heart" and "The Raven"; Hawthorne's "The Scarlet Letter"; the Dark Romantic insistence on guilt, mortality, and the limits of human goodness.`,
              strengths_and_limits: `Strength: a necessary corrective, it keeps the movement honest by facing what optimism skips. Limit: focusing only on shadow can become its own distortion, denying the real hope and courage the Transcendentalists rightly saw in the soul.`,
            },
            {
              id: `p5`,
              voice: `A modern reader weighing the whole movement`,
              era: `Today`,
              stance: `Take the empowerment and the warning together; the free soul is real, and so are its shadows.`,
              quote: `"Trust yourself, but know yourself, including the parts you would rather not see."`,
              argument: `Reading the whole movement, I take something from each voice. Emerson and Thoreau are right that my mind and conscience matter and can resist injustice. Whitman is right that the self is vast and connected. But the Dark Romantics are right too: trusting yourself without knowing yourself, shadows included, is dangerous. The fullest answer holds the light and the dark of the soul at once.`,
              evidence: `The lasting influence of self-reliance and civil disobedience on movements for justice; the enduring power of Poe and Hawthorne; the way both optimism and honesty about darkness are needed for wisdom.`,
              strengths_and_limits: `Strength: refuses to flatten a rich conversation into one slogan, holding empowerment and caution together. Limit: 'take a bit of each' can become vague unless you do the hard work of deciding what you actually believe about the self.`,
            },
          ],
          synthesisPrompt: `After all five: what do YOU think the free individual soul can know and become? Which voice spoke most to you, and what did the Dark Romantics add that the optimists missed? Hold the light and the shadow together in your answer. In 5-6 sentences.`,
          reflectionPrompt: `Emerson said trust yourself; the Dark Romantics said the self has shadows. When has trusting yourself served you well? When has knowing your own shadow, the parts you would rather not see, mattered just as much?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What new question did Romanticism bring to American writing?`,
              options: [
                `How best to record the daily weather and harvests of colonial farm life.`,
                `Which European country had produced the greatest literature of all time.`,
                `What it means to be a free individual soul, trusting feeling and the inner life.`,
                `How to write sermons frightening enough to spark a religious revival.`,
              ],
              correctIndex: 2,
              explanation: `Romanticism turned American writing inward, asking what it means to be a free individual soul, and prizing feeling, imagination, nature, and the inner life over cold reason. The distractors describe colonial record-keeping, a comparison the movement wasn't about, and the earlier Puritan sermon tradition.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What was Transcendentalism's radical central claim?`,
              options: [
                `That each person can know truth directly through their own intuition and nature.`,
                `That only ordained ministers could correctly interpret religious truth.`,
                `That truth comes only from carefully reasoned scientific experiments.`,
                `That the government should decide what every citizen is allowed to believe.`,
              ],
              correctIndex: 0,
              explanation: `Transcendentalism, led by Emerson, claimed each person can reach truth directly through intuition and nature, without church, state, or any authority handing it down. The distractors describe the opposite views the movement rejected: religious gatekeeping, pure empiricism, and state control of belief.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Emerson's essay "Self-Reliance" urged readers to do what?`,
              options: [
                `Obey tradition and authority without ever questioning what they teach.`,
                `Move to the wilderness and never speak to another human being again.`,
                `Memorize the opinions of famous experts and repeat them exactly.`,
                `Trust their own mind and conscience instead of blindly following the crowd.`,
              ],
              correctIndex: 3,
              explanation: `"Self-Reliance" urged people to trust themselves, to think their own thoughts and live by their own light rather than borrowing opinions or following the crowd. The distractors describe blind obedience, total isolation, and mere imitation, all of which the essay argues against.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Thoreau do that turned Transcendentalist ideas into action?`,
              options: [
                `He became a powerful senator who passed laws protecting the wilderness.`,
                `He lived simply at Walden Pond and refused, on conscience, to obey an unjust law.`,
                `He sailed to Europe to study under the most famous philosophers there.`,
                `He founded a large church to spread Emerson's teachings across the country.`,
              ],
              correctIndex: 1,
              explanation: `Thoreau lived the ideas: he spent two years simplifying his life at Walden Pond, and in "Civil Disobedience" argued that conscience can rightly refuse an unjust law, an idea that later inspired Gandhi and King. The distractors invent a political, academic, or religious career he didn't have.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `How did Walt Whitman's poetry break from tradition?`,
              options: [
                `He wrote only in strict, traditional rhyme and perfectly regular meter.`,
                `He refused to write about America, focusing only on ancient Greece.`,
                `He used long, free-flowing lines and plain speech to sing the democratic self.`,
                `He wrote exclusively short, silent poems meant never to be read aloud.`,
              ],
              correctIndex: 2,
              explanation: `Whitman pioneered free verse, throwing out strict rhyme and meter for long, rolling lines in plain American speech, celebrating the individual, the body, and the democratic country. The distractors describe the traditional forms he rejected or subjects he didn't focus on.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Who were the "Dark Romantics," and what did they explore?`,
              options: [
                `Writers like Poe and Hawthorne who explored guilt, fear, death, and the soul's shadows.`,
                `Poets who wrote only at night and refused to publish any of their work.`,
                `Critics who argued that all Romantic writing was worthless and should be banned.`,
                `Scientists who studied darkness and light using early photography equipment.`,
              ],
              correctIndex: 0,
              explanation: `The Dark Romantics, like Poe and Hawthorne, explored the shadows the optimists skipped: guilt, fear, madness, death, and the hidden corners of the human heart. The distractors invent a literal "night" theme, a hostile critic group, and a scientific field unrelated to the literary movement.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `The lesson says a literary movement is best understood as what?`,
              options: [
                `A single, fixed mood that every writer of the era shared identically.`,
                `A conversation, often an argument, where writers reach different answers to a shared question.`,
                `A list of rules that all writers had to follow or be expelled from publishing.`,
                `A competition to see which single author could sell the most books.`,
              ],
              correctIndex: 1,
              explanation: `A movement is a conversation, often an argument: the Transcendentalists and Dark Romantics circled the same question about the free soul and reached opposite answers, and reading both reveals the whole movement. The distractors reduce it to a single mood, a rulebook, or a sales contest.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does Whitman's line "I contain multitudes" mean?`,
              options: [
                `That he had personally met and counted multitudes of people in his travels.`,
                `That he wrote a multitude of poems, more than any other American writer.`,
                `That a single soul is vast enough to hold many contradictory selves without shame.`,
                `That America's population had grown to a multitude of millions of citizens.`,
              ],
              correctIndex: 2,
              explanation: `"I contain multitudes" means a single self is large enough to hold many different, even contradictory selves at once, without shame, an idea central to Whitman's vision of the vast, connected soul. The distractors take the word literally as people met, poems written, or population.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The Transcendentalists and the Dark Romantics agreed completely about the nature of the human soul.`,
              correctAnswer: false,
              explanation: `False, and the disagreement is exactly what makes the movement a rich conversation. The Transcendentalists, Emerson and Thoreau and their kin, looked at the free individual soul and saw light: they trusted intuition, celebrated self-reliance, and believed each person could reach truth directly by looking within. The Dark Romantics, Poe and Hawthorne, looked at that same soul and saw shadows the optimists skipped over: guilt, obsession, fear, cruelty, and death. Hawthorne explored how sin and secrecy rot a person from inside; Poe showed how a mind can turn against itself. They were not agreeing, they were arguing, two honest answers to the same enormous question of what the free soul actually is. And that is the deeper point about reading a literary movement: it is rarely a chorus singing one note. It is a conversation, often a genuine disagreement, and you only understand the whole movement when you hold the optimists' light and the Dark Romantics' shadow together, rather than pretending everyone agreed.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend reads "Self-Reliance," gets fired up, and says: "Emerson proves I should always trust my gut and never listen to anyone else." Using the whole lesson, what's the wisest response?`,
              options: [
                `Agree fully: Emerson said trust yourself, so ignoring everyone else is exactly right.`,
                `Tell them Emerson was wrong and that they should only ever obey authority instead.`,
                `Emerson really does say trust yourself, and that's powerful, but the lesson's full picture adds a warning: the Dark Romantics showed the self also holds shadows, guilt and blind spots, so the wisest move is to trust yourself AND know yourself, including the parts you'd rather not see.`,
                `Change the subject, since old literary movements have nothing to teach anyone today.`,
              ],
              correctIndex: 2,
              explanation: `This holds the whole movement together. Emerson genuinely champions self-reliance, and that's empowering, but the lesson is a conversation: the Dark Romantics insisted the same self holds shadows, guilt, obsession, blind spots, so "always trust your gut, never listen to anyone" ignores half of what a person is. The wisest response keeps the empowerment and adds the warning: trust yourself, but know yourself too. The distractors take only the optimism, flip to pure obedience, or dismiss the movement entirely.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-selfreliance`, category: `Trusting yourself`, prompt: `Emerson said trust yourself; do not just follow the crowd. When have you trusted your own mind against what everyone around you believed, and how did it feel? When is following your own intuition wise, and when is it risky?` },
            { id: `reflect-conscience`, category: `Conscience and law`, prompt: `Thoreau said a person's conscience can rightly stand against an unjust law. Do you agree? When, if ever, is it right to refuse to obey a rule you believe is wrong, and how do you tell a true matter of conscience from just not wanting to follow a rule?` },
            { id: `reflect-shadow`, category: `Light and shadow`, prompt: `The Dark Romantics said the soul has shadows the optimists ignore. What does it mean to know yourself honestly, including the parts you would rather not see? Is facing your own shadow a weakness or a strength?` },
            { id: `reflect-heritage`, category: `The free soul, your way`, prompt: `Caro, these were American answers to "what is the free soul?" Latin American and Colombian thinkers and poets, like the great voices of your own heritage, asked it too. How might the answer look different from a Colombian or Latin American view of the self, family, and community?` },
            { id: `reflect-nature`, category: `Nature and the self`, prompt: `The Romantics found something vast and sublime in wild nature. When have you felt that, awe at something far larger than yourself, in the desert at Alien Dog, by the river at Shadowpeak, under the stars? What did it show you about your own place in things?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this self-reliance just breeds selfishness and people who think their gut is always right." State that objection as strongly as you can. Where does it land a real hit on Emerson, and how might Whitman's "connected self" answer it?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `These writers wanted ideas lived, not just read. These bring the movement into your days. Two paths.`,
          familyActivity: {
            title: `A Walden Experiment`,
            duration: `One afternoon`,
            description: `Live a little of Thoreau's idea together. Thoreau went to Walden to "live deliberately" and find what was essential by stripping away the rest. As a family, try a scaled-down version: pick one afternoon and simplify on purpose. Turn off all screens and notifications. Go outside, to a park, the desert, a riverbank, anywhere with real nature, and just be there with no agenda for an hour: notice, sit, walk, observe. Then come back and talk about it. What did you notice when the noise was gone? What felt essential, and what turned out to be just clutter? Each person can also try Emerson's self-reliance: write down one belief you hold that's truly your own, not borrowed from friends or the internet, and explain why you hold it. The point isn't to live in a cabin forever; it's to feel, even briefly, what these writers were chasing, the clarity that comes from simplifying and listening to your own mind in nature.`,
          },
          projectOption: {
            title: `Your Own Leaves of Grass, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a Transcendentalist writer. Week 1: keep a "Walden journal" for several days. Each entry, spend real time in nature or in honest solitude, then write, in free verse like Whitman (no rhyme or meter rules, just true lines in your own voice), about what you observed and what it stirred in you. Write about ordinary things, the way Whitman did: a leaf, a street, your own breathing, a feeling you usually ignore. Try to "contain multitudes", let your entries hold contradictions honestly. Week 2: write one short essay in the spirit of Emerson's "Self-Reliance," titled with a belief you've truly thought through yourself. Argue for it in your own voice, then, taking the Dark Romantics seriously, add an honest paragraph about the shadow side, where might this belief mislead you, what blind spot might it hide? You'll come away having lived the movement from the inside: trusting your voice, singing the ordinary, and knowing yourself honestly, light and shadow both.`,
            offerToParent: `Parent: opt your child into the Leaves of Grass project. Writing free verse about real observation builds voice, attention, and creative courage, while the Emerson-style essay with an honest "shadow" paragraph develops both argumentation and genuine self-reflection. It turns a literary movement into lived practice, which is exactly what Thoreau and Emerson intended, and it's rich, CCSS-aligned creative and analytical writing with deep personal value.`,
          },
          identityQuestion: `If you become someone who can both trust yourself, think your own thoughts, follow your own conscience, and know yourself, facing the shadows as honestly as the light, what kind of free soul does that make you, that someone who only trusts their gut, or only doubts themselves, can never quite become?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who trusts my own mind and still knows my own shadows.`,
            `A person who can read a whole movement, not just one writer.`,
            `Someone who follows my conscience, even when it is hard.`,
          ],
          saveKey: `identity_responses_ela_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. Five done, and you just read an entire literary movement, not a single text but a whole conversation across many voices. You learned that Romanticism turned American writing inward, prizing feeling, imagination, nature, and the free individual soul. You learned that Transcendentalism, through Emerson and Thoreau, made the radical claim that each person can reach truth directly through intuition, and that self-reliance and conscience are almost sacred, ideas powerful enough to inspire Gandhi and King. You met Whitman, who turned those ideas into a wholly new art, free verse, singing a self that was vast, democratic, and connected to all. And you met the Dark Romantics, Poe and Hawthorne, who looked at that same soul and honestly faced its shadows, its guilt and dread. Most of all, you learned that a movement is a conversation, often an argument, and that wisdom means holding the light and the shadow of the soul together. Next: we widen the lens beyond America entirely, to world literature, the voices of diverse cultures across the globe. Onward, {name}. — Quill`,
          badge: `romantic-reader`,
          badgeName: `Romantic Reader`,
          xpEarned: 75,
          competencies: [
            `Defines Romanticism as the inward turn prizing feeling, imagination, nature, and the individual soul`,
            `Explains Transcendentalism's claim that each person can know truth directly through intuition (Emerson, Thoreau)`,
            `Understands self-reliance and civil disobedience and their lasting influence on movements for justice`,
            `Recognizes Whitman's free verse as a new art form expressing the vast, connected, democratic self`,
            `Identifies the Dark Romantics (Poe, Hawthorne) and the soul's shadows they insisted on facing`,
            `Reads a literary movement as a conversation among differing voices, not a single fixed mood`,
            `Holds the movement's optimism and its honesty about darkness together to build a fuller view of the self`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: World Literature — Voices from Diverse Cultures`,
            hook: `Beyond America entirely, great voices from across the globe, and what literature looks like through other eyes. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L05 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
