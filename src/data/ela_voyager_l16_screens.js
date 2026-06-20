// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L16 — College Application Essays
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Writing: Narrative & Reflective, Audience & Purpose
// Interaction: PERSPECTIVES. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l16-v1";

const ELA_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-16`,
      title: `College Application Essays`,
      duration: 35,
      xpReward: 75,
      badge: `personal-essayist`,
      badgeName: `Personal Essayist`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, narrative is how humans make sense of experience — it's the cognitive structure we use to organize time, causality, and meaning. Literary fiction uses that structure deliberately. This lesson covers narrative technique: point of view, voice, structure, time — the craft decisions that shape what a story does to its reader.`,
          headline: `College Application Essays`,
          subtitle: `The most important short piece you'll write so far, and how to make it unmistakably you. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What This Essay Is Really For`,
          paragraphs: [
            `Someday you may face one of the strangest writing tasks of your life: a personal essay, often for a college application, where you must tell a stranger who you are in a few hundred words. It feels impossible. How do you sum up a whole self for someone who holds part of your future in their hands?`,
            `Here's the key that unlocks it: this essay isn't a list of achievements. The reader already has your grades, scores, and activities on a form, that information exists elsewhere. So repeating it in the essay wastes the one chance you have. The essay does a completely different job, and knowing that job changes everything about how you write it.`,
            `The essay is the one place the reader hears your actual voice and meets you as a real person. What they're looking for isn't a résumé in paragraph form; it's a specific human being thinking honestly on the page. The purpose is connection and authenticity, not a highlight reel. Once you understand that, the impossible task becomes something you can actually do.`,
          ],
          image: `/voyager-assets/ela/l16-s1-purpose.webp`,
          imageCaption: `Someday you may face one of the strangest writing tasks of your life: a PERSONAL ESSAY, often for a college application, where you must tell a stranger who you are in a few hundred words. It feels impossible. The key that unlocks it: this essay isn't a list of ACHIEVEMENTS. The reader already has your grades, scores, and activities on a form, that information exists elsewhere, so repeating it wastes your one chance. The essay does a completely different job: it's the one place the reader hears your actual VOICE and meets you as a real person. What they want isn't a résumé in paragraph form; it's a specific human being thinking honestly on the page. The purpose is connection and authenticity, not a highlight reel. Understand that, and the impossible task becomes doable.`,
          vocab: [
            { word: `personal essay`,
              definition: `A short piece where a writer reveals who they are to a reader, valuing authentic voice over a list of achievements.`,
              audioPrompt: `A personal essay, {name}, is a short piece where you reveal who you are to a reader, often for a college application. Its purpose isn't to list achievements but to let a real person come through on the page.` },
            { word: `purpose`,
              definition: `What a piece of writing is meant to do. A personal essay's purpose is connection and authenticity, not impressing with a résumé.`,
              audioPrompt: `Purpose, {name}, is what a piece of writing is meant to do. A personal essay's purpose is connection, letting the reader meet the real you, not impressing them with a list they already have on a form.` },
            { word: `authenticity`,
              definition: `Being genuinely yourself on the page. The thing readers most want in a personal essay, far more than polish or prestige.`,
              audioPrompt: `Authenticity, {name}, is being genuinely yourself on the page. It's the thing a personal essay reader most wants to find, a real, specific human being thinking honestly, far more than a polished highlight reel.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Authenticity Beats Impressiveness`,
          paragraphs: [
            `The biggest mistake in personal essays is trying to sound impressive. Writers reach for grand achievements, big words, and lofty themes about "leadership" or "perseverance," and the result is generic, the same essay a thousand others wrote. Trying to impress almost always makes you sound like everyone else, which is the opposite of what you want.`,
            `Authenticity does the opposite. A small, true, specific story, the moment you learned something real, a quiet failure, an ordinary obsession, reveals far more than a list of trophies. Specific beats grand every time. The reader doesn't remember "I am a passionate leader"; they remember the precise, honest detail only you could have written.`,
            `Why does authenticity win? Because the reader has read thousands of essays and can feel the difference instantly between performance and a real voice. Honesty, even about small or imperfect things, signals a real person they can connect with. The bravest, most effective move is simply to be genuinely yourself, not the impressive person you think they want.`,
          ],
          image: `/voyager-assets/ela/l16-s2-authentic.webp`,
          imageCaption: `The biggest mistake in personal essays is trying to sound IMPRESSIVE. Writers reach for grand achievements, big words, and lofty themes about "leadership" or "perseverance," and the result is generic, the same essay a thousand others wrote. Trying to impress makes you sound like everyone else. AUTHENTICITY does the opposite: a small, true, specific story, the moment you learned something real, a quiet failure, an ordinary obsession, reveals far more than a list of trophies. Specific beats grand every time; the reader remembers the precise, honest detail only you could have written, not "I am a passionate leader." Why does authenticity win? The reader has read thousands of essays and feels instantly the difference between performance and a real voice. The bravest move is simply to be genuinely yourself.`,
          vocab: [
            { word: `specific beats grand`,
              definition: `The principle that a small, precise, true detail reveals more, and lands harder, than a big, impressive-sounding generality.`,
              audioPrompt: `Specific beats grand, {name}, is the core principle of personal essays. A small, precise, true detail, the kind only you could write, reveals far more and lands far harder than a grand, impressive-sounding generality.` },
            { word: `generic`,
              definition: `Sounding like everyone else. The trap of trying to impress, which produces the same essay a thousand other writers wrote.`,
              audioPrompt: `Generic, {name}, means sounding like everyone else. It's the trap of trying to impress with big themes and grand achievements, which ironically produces the exact same essay a thousand other people already wrote.` },
            { word: `real self`,
              definition: `Letting a genuine, specific human being come through honestly, which readers value far above polish or prestige.`,
              audioPrompt: `Showing a real self, {name}, means letting a genuine, specific human being come through honestly on the page. A reader who has seen thousands of essays can feel the difference instantly, and it's what they're looking for.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Show, Don't Tell, Yourself`,
          paragraphs: [
            `Everything you learned about narrative craft applies here. The golden rule is show, don't tell. Don't tell the reader "I am compassionate" or "I am curious", anyone can claim that. Instead, show one specific moment, a story, where your compassion or curiosity is visible in what you actually did, and let the reader conclude it themselves.`,
            `This is why the best personal essays often work like tiny stories. They pick one small, focused moment, a conversation, a failure, a strange hobby, a turning point, and tell it with real, concrete, sensory detail. Through that single window, the reader sees how you think and what you value, far more clearly than any list of adjectives could convey.`,
            `Reflection is the other half. A personal essay isn't just a story; it's a story plus your thinking about it. After showing the moment, you reflect: what did it mean, what did you learn, how did it shape you? That blend, a vivid specific scene and honest reflection on it, is the engine of a powerful personal essay.`,
          ],
          image: `/voyager-assets/ela/l16-s3-show.webp`,
          imageCaption: `Everything you learned about narrative craft applies here. The golden rule is SHOW, DON'T TELL. Don't tell the reader "I am compassionate" or "I am curious", anyone can claim that. Instead, show one specific moment, a story, where your compassion or curiosity is visible in what you actually did, and let the reader conclude it. This is why the best personal essays work like tiny STORIES: they pick one small, focused moment, a conversation, a failure, a strange hobby, a turning point, and tell it with concrete, sensory detail. Through that single window the reader sees how you think and what you value. REFLECTION is the other half: a personal essay is a story plus your thinking about it, what it meant, what you learned. A vivid scene plus honest reflection is the engine of a powerful essay.`,
          vocab: [
            { word: `show don't tell`,
              definition: `Revealing a trait through a specific story rather than just claiming it. Lets the reader conclude who you are.`,
              audioPrompt: `Show, don't tell, {name}, is the golden rule here. Don't claim "I am compassionate", show one specific moment where your compassion is visible in what you did, and let the reader reach the conclusion themselves.` },
            { word: `focused moment`,
              definition: `One small, specific scene, a conversation, a failure, a hobby, that becomes a window into who you are.`,
              audioPrompt: `A focused moment, {name}, is one small, specific scene: a single conversation, failure, or turning point, told with real detail. Through that one window, the reader sees how you think far better than any list could show.` },
            { word: `reflection`,
              definition: `Your honest thinking about what a moment meant and how it shaped you. The story is only half; reflection is the other.`,
              audioPrompt: `Reflection, {name}, is your honest thinking about what a moment meant and how it shaped you. A personal essay is a story plus reflection, the vivid scene shows, and your thinking about it reveals what it taught you.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Voice, Honesty, And The Long Game`,
          paragraphs: [
            `Your voice matters more here than almost anywhere. The essay should sound like you actually talk and think, not like a thesaurus or a textbook. Resist the urge to inflate your language to seem smart; readers see through it instantly. A genuine, natural voice, the real you on the page, is what makes an essay memorable and human.`,
            `Honesty includes being willing to show imperfection. Counterintuitively, essays about a failure, a doubt, a flaw you grew from often land harder than tales of triumph, because they're real and brave. You don't have to have a tragic story or a dramatic life; an honest, thoughtful take on an ordinary one is powerful precisely because it's true.`,
            `And remember the long game: these skills outlast any single application. Knowing how to present yourself authentically, to write so a stranger meets the real you, serves you in scholarships, jobs, cover letters, and life. The personal essay is really training in a lifelong skill: telling the truth about who you are, clearly and without pretense, to people who matter.`,
          ],
          image: `/voyager-assets/ela/l16-s4-voice.webp`,
          imageCaption: `Your VOICE matters more here than almost anywhere. The essay should sound like you actually talk and think, not like a thesaurus or textbook. Resist inflating your language to seem smart, readers see through it instantly. A genuine, natural voice is what makes an essay memorable and human. HONESTY includes showing imperfection: counterintuitively, essays about a failure, a doubt, a flaw you grew from often land harder than tales of triumph, because they're real and brave. You don't need a tragic story; an honest take on an ordinary life is powerful because it's true. And the LONG GAME: these skills outlast any application, serving you in scholarships, jobs, cover letters, and life. The personal essay trains a lifelong skill: telling the truth about who you are, clearly and without pretense.`,
          vocab: [
            { word: `natural voice`,
              definition: `Writing that sounds like you actually talk and think, not inflated to seem smart. It makes an essay memorable.`,
              audioPrompt: `A natural voice, {name}, sounds like you actually talk and think, not like a thesaurus. Resist puffing up your language to seem smart, readers see through it, and a genuine voice is what makes an essay truly memorable.` },
            { word: `showing imperfection`,
              definition: `The brave move of writing honestly about a failure, doubt, or flaw you grew from, which often lands harder than triumph.`,
              audioPrompt: `Showing imperfection, {name}, means writing honestly about a failure or flaw you grew from. Counterintuitively, these often land harder than triumph stories, because they're real and brave, and readers trust them.` },
            { word: `transferable skill`,
              definition: `An ability that serves far beyond its first use. Presenting yourself authentically helps in scholarships, jobs, and life.`,
              audioPrompt: `A transferable skill, {name}, serves far beyond its first use. Learning to present yourself authentically in a personal essay helps you for life, in scholarships, jobs, cover letters, anywhere you must show a stranger the real you.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. The personal essay isn't a list of achievements, the reader has those on a form. It's the one place they hear your real voice and meet you as a specific human being. So authenticity beats impressiveness: trying to sound grand makes you generic, while a small, true, specific story reveals far more.`,
            `The craft is everything you've learned: show, don't tell (reveal yourself through one focused moment, then reflect on what it meant), keep a natural voice that sounds like you, and be honest enough to show imperfection, which often lands harder than triumph. And the skill is for life, not just college, training in telling the truth about who you are.`,
            `Now the perspectives screen brings voices that often clash about these essays: a student who wants to impress, an admissions reader who's seen thousands, a parent who wants it "safe," a writing coach who prizes voice, and a thoughtful student who's found their own approach. Each sees something real. Your job is not to crown one, but to understand the genuine tension and decide how you'd write your own. Onward.`,
          ],
          image: `/voyager-assets/ela/l16-s5-before.webp`,
          imageCaption: `Threads together. The personal essay isn't a list of ACHIEVEMENTS, the reader has those on a form. It's the one place they hear your real VOICE and meet you as a specific human being. So AUTHENTICITY beats impressiveness: trying to sound grand makes you generic, while a small, true, specific story reveals far more. The craft is everything you've learned: SHOW, DON'T TELL (one focused moment, then reflect), keep a natural voice, and be honest enough to show imperfection, which often lands harder than triumph. And it's a skill for life. The perspectives screen brings voices that clash: a student who wants to impress, an admissions reader, a cautious parent, a writing coach who prizes voice, and a student who found their own way. Understand the tension and decide how you'd write yours.`,
          vocab: [
            { word: `audience`,
              definition: `Who you're writing for. Knowing the reader, an admissions officer who's seen thousands of essays, shapes every choice you make.`,
              audioPrompt: `Audience, {name}, is who you're writing for, and it shapes everything. Knowing your reader is an admissions officer who has seen thousands of essays tells you that authenticity, not performance, is what will actually reach them.` },
            { word: `cliche`,
              definition: `An overused idea or phrase. Personal essays full of clichés ("I learned to never give up") blur into all the others.`,
              audioPrompt: `A cliché, {name}, is an overused idea or phrase, like "I learned to never give up." Personal essays packed with clichés blur into every other essay, which is why specific, true detail beats them every time.` },
            { word: `self-presentation`,
              definition: `How you show who you are to others. Done with authenticity, it's a lifelong skill, in essays, interviews, and beyond.`,
              audioPrompt: `Self-presentation, {name}, is how you show who you are to others. Learning to do it with honesty rather than pretense is a skill for life, useful far beyond any college essay, in interviews, jobs, and every introduction.` },
          ],
        },

        {
          id: `l16-perspectives`,
          type: `perspectives`,
          headline: `What Makes A Personal Essay Work`,
          intro: `{name}, what actually makes a personal essay succeed? People disagree, sometimes sharply. Here are five voices, each with a genuine point. Do not crown one. Understand the real tension between impressing and being real, and decide how you would write your own essay.`,
          perspectives: [
            {
              id: `p1`,
              voice: `A student who wants to impress`,
              era: `A common instinct`,
              stance: `The essay is your chance to prove you're impressive, so lead with your biggest achievements and loftiest themes.`,
              quote: `"This is the moment to show them I'm a leader who's overcome adversity and changed the world."`,
              argument: `Admissions is a competition, and you should put your best, most impressive self forward. Write about your greatest accomplishment, use sophisticated language, and choose a serious, weighty theme like leadership or perseverance. Anything small or ordinary risks looking like you have nothing impressive to say. Aim high.`,
              evidence: `The real competitiveness of admissions; the instinct that big achievements signal worth; the fear that a small topic seems unambitious.`,
              strengths_and_limits: `Strength: takes the stakes seriously and understands you're being evaluated. Limit: this instinct usually backfires, grand themes and inflated language produce the exact generic essay thousands of others write, drowning out the real, specific person the reader actually wants to meet.`,
            },
            {
              id: `p2`,
              voice: `An admissions reader who's seen thousands`,
              era: `The reader's view`,
              stance: `I already have your résumé. The essay is where I find out if there's a real person I'd want in our community.`,
              quote: `"I can feel the difference between a performance and a real voice in the first three sentences."`,
              argument: `I read thousands of these. The ones about "passion" and "leadership" blur into one. The ones I remember are specific and honest, a small true moment, an odd detail, a real voice thinking on the page. I'm not looking to be impressed; I'm looking to meet someone. Authenticity reaches me; performance doesn't.`,
              evidence: `The sea of identical "achievement" essays; the memorability of specific, honest ones; the reader's ability to sense performance instantly.`,
              strengths_and_limits: `Strength: this is the actual audience, so their view is decisive about what works. Limit: "just be authentic" can feel paralyzing to a nervous student who doesn't yet know how to translate a real self onto the page, the how still has to be learned.`,
            },
            {
              id: `p3`,
              voice: `A cautious parent who wants it "safe"`,
              era: `A protective instinct`,
              stance: `Don't take risks. Write something polished, positive, and inoffensive, why gamble on something personal?`,
              quote: `"Just write something nice and impressive. Don't share anything too private or unusual."`,
              argument: `So much is riding on this. Better to play it safe: a polished, upbeat, conventional essay can't hurt you, while something raw or unusual might turn a reader off. Stick to clear strengths, avoid anything vulnerable or weird, and don't risk a strange topic. Safe and positive is the responsible choice when the stakes are high.`,
              evidence: `The genuine high stakes; the worry that vulnerability could be judged; the comfort of conventional, "acceptable" writing.`,
              strengths_and_limits: `Strength: the care and the stakes are real, and some boundaries about privacy are wise. Limit: "safe" usually means forgettable, the polished, inoffensive essay blurs into the pile, and refusing any vulnerability often removes the very specificity and honesty that makes an essay land.`,
            },
            {
              id: `p4`,
              voice: `A writing coach who prizes voice`,
              era: `The craft view`,
              stance: `Forget impressing. Find one true, specific story and tell it in your own honest voice, that's the whole game.`,
              quote: `"Don't tell me you're resilient. Show me the Tuesday you wanted to quit and didn't, in your own words."`,
              argument: `Every technique you've learned applies: show don't tell, a focused moment with concrete detail, real reflection, a natural voice. Pick something small and true, even an odd hobby or a quiet failure, and render it honestly. Specific beats grand, and your actual voice beats any impressive imitation. Authenticity isn't a vibe; it's craft.`,
              evidence: `The power of show-don't-tell and concrete detail; the memorability of a genuine voice; the way small true stories reveal more than grand ones.`,
              strengths_and_limits: `Strength: turns vague "be yourself" advice into usable craft, giving the student a real method. Limit: an intense focus on craft and voice can tip into over-polishing or performing authenticity, so it still needs the reader's reminder that genuine honesty, not technique alone, is the point.`,
            },
            {
              id: `p5`,
              voice: `A thoughtful student who found their own way`,
              era: `Today`,
              stance: `Be real and use the craft. Tell a small true story honestly, reflect on it, and sound like yourself.`,
              quote: `"I stopped trying to sound like a great applicant and just wrote about something I actually cared about."`,
              argument: `I take the reader and the coach together: write authentically, but skillfully. I picked one specific, true moment that mattered to me, even though it wasn't grand, showed it with real detail, reflected honestly on what it taught me, and kept my own voice. I cared more about being true than impressive, and used everything I'd learned to do it well.`,
              evidence: `The combination of authenticity and craft; choosing a small true topic over a grand one; honest reflection in a natural voice.`,
              strengths_and_limits: `Strength: resolves the tension by marrying honesty with skill, exactly what the best essays do. Limit: it takes real self-knowledge and courage to write this way, and finding your one true story is genuine work, not a quick formula, so it asks more of you than the easy routes.`,
            },
          ],
          synthesisPrompt: `After all five: how would YOU approach a personal essay about yourself? How do you balance being authentic with the real stakes of being evaluated, and avoid both the "impress them" trap and the "play it safe" trap? Which voice helped you most? In 5-6 sentences.`,
          reflectionPrompt: `The lesson says the bravest, most effective move is to be genuinely yourself rather than the impressive person you think they want. When have you tried to perform an impressive version of yourself, and when have you just been real? Which actually connected better with people?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `According to the lesson, what is a personal/college essay really for?`,
              options: [
                `To repeat your grades, scores, and activities in paragraph form.`,
                `To let the reader hear your real voice and meet you as a specific person.`,
                `To prove you can use the most sophisticated vocabulary possible.`,
                `To list every award and leadership position you've ever held.`,
              ],
              correctIndex: 1,
              explanation: `The essay is the one place the reader hears your actual voice and meets you as a real, specific person, the reader already has your achievements on a form. The distractors describe repeating the résumé or showing off vocabulary, which waste the essay's purpose.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does "trying to sound impressive" usually backfire?`,
              options: [
                `Because impressive essays are against the official application rules.`,
                `Because readers prefer essays with as few specific details as possible.`,
                `Because grand themes and inflated language make you sound generic, like everyone else.`,
                `Because admissions readers never read past the first sentence anyway.`,
              ],
              correctIndex: 2,
              explanation: `Trying to impress with grand achievements, big words, and lofty themes produces the same generic essay a thousand others wrote, the opposite of standing out. The distractors invent a rule, misstate reader preferences, or claim essays go unread.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does "specific beats grand" mean in a personal essay?`,
              options: [
                `Always write about the single grandest event in your entire life.`,
                `A small, precise, true detail reveals more and lands harder than a big generality.`,
                `Specific essays must be longer than grand ones to count.`,
                `You should be vague so the reader can imagine whatever they want.`,
              ],
              correctIndex: 1,
              explanation: `"Specific beats grand" means a small, precise, true detail, the kind only you could write, reveals far more and is far more memorable than an impressive-sounding generality. The distractors reverse it, tie it to length, or confuse specific with vague.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How does "show, don't tell" apply to writing about yourself?`,
              options: [
                `Claim your best traits directly so the reader doesn't miss them.`,
                `Avoid telling any story and just list your qualities.`,
                `Simply use an actual photograph instead of any words at all to show the reader who you really are.`,
                `Reveal a trait through a specific story, and let the reader conclude it themselves.`,
              ],
              correctIndex: 3,
              explanation: `Show, don't tell means revealing a trait (like compassion) through a specific moment where it's visible in what you did, letting the reader conclude it, rather than just claiming "I am compassionate." The distractors describe telling, listing, or using literal pictures.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson says a personal essay is "a story plus" what?`,
              options: [
                `Your honest reflection on what the moment meant and how it shaped you.`,
                `A long list of all your other achievements at the end.`,
                `A summary of the story repeated twice for emphasis.`,
                `A formal conclusion stating your overall grade point average.`,
              ],
              correctIndex: 0,
              explanation: `A personal essay is a story plus reflection, your honest thinking about what the moment meant and how it shaped you; the vivid scene shows, and the reflection reveals what it taught you. The distractors add a résumé, repetition, or grades instead of reflection.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the lesson say about your "voice" in a personal essay?`,
              options: [
                `It should sound as formal and complicated as a textbook.`,
                `It should sound like you actually talk and think, not inflated to seem smart.`,
                `It should imitate the voice of a famous author you admire.`,
                `Your voice honestly doesn't matter at all, just so long as the grammar in the essay is perfectly correct.`,
              ],
              correctIndex: 1,
              explanation: `Your voice should sound like you actually talk and think, a genuine, natural voice, because inflating your language to seem smart is something readers see through instantly. The distractors push for textbook formality, imitation, or dismiss voice entirely.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why can an essay about a failure or flaw sometimes land harder than one about triumph?`,
              options: [
                `Because readers enjoy seeing applicants suffer and struggle.`,
                `Because stories about failures are simply much easier to write about than stories about real successes.`,
                `Because it's real and brave, and honesty about imperfection signals a genuine person.`,
                `Because applications require at least one story about failure.`,
              ],
              correctIndex: 2,
              explanation: `An honest essay about a failure, doubt, or flaw you grew from often lands harder because it's real and brave, and honesty about imperfection signals a genuine person the reader can connect with. The distractors imagine cruelty, ease, or a false requirement.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the lesson call the personal essay a skill "for life, not just for college"?`,
              options: [
                `Because you'll have to rewrite the exact same essay every year forever.`,
                `Because the colleges will secretly forward your essay along to all of your future employers later on.`,
                `Because only the college essay will ever matter in your whole life.`,
                `Because presenting yourself authentically helps in scholarships, jobs, cover letters, and beyond.`,
              ],
              correctIndex: 3,
              explanation: `Knowing how to present yourself authentically, so a stranger meets the real you, is a transferable skill that serves you in scholarships, jobs, cover letters, and life far beyond any single application. The distractors imagine endless rewrites, secret sharing, or that only the college essay matters.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The smartest strategy for a personal essay is to choose your single most impressive achievement, describe it in big, sophisticated language, and build the essay around a grand theme like leadership or perseverance.`,
              correctAnswer: false,
              explanation: `False, and this is the single most common and self-defeating instinct in personal-essay writing. It feels logical: the stakes are high, so put your most impressive self forward in your grandest language around a weighty theme. But this almost always backfires, for reasons the whole lesson explains. First, the reader already has your achievements, your grades, scores, awards, and activities, on a separate form; the essay is the one place they hear your actual voice, so spending it re-listing accomplishments wastes your single best chance to be a real person to them. Second, and crucially, trying to sound impressive makes you sound generic. Grand themes like "leadership" and "perseverance," inflated vocabulary, and big triumphant achievements produce the exact same essay a thousand other anxious applicants write, so instead of standing out, you blur into the pile. An admissions reader who has seen thousands of essays can feel the difference between a performance and a real voice in the first few sentences, and the performance doesn't reach them. What actually works is the opposite: authenticity over impressiveness, and specific over grand. A small, true, precisely detailed moment, an odd hobby, a quiet failure you grew from, a single conversation that changed how you see something, revealed through show-don't-tell and honest reflection in your own natural voice, lets the reader meet a genuine, specific human being. That's memorable. The bravest and most effective move isn't to perform the impressive applicant you think they want; it's to be honestly, specifically yourself.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Two students write college essays. Priya writes about leading a club, in lofty language, concluding "I learned that perseverance is key to success." Marcus writes about the morning he failed to fix his grandmother's old radio, what the silence in the room taught him, in his own plain voice. The reader remembers Marcus's. Using the lesson, why?`,
              options: [
                `Because Marcus's topic was objectively more important than leading a club.`,
                `Because Priya should have used even bigger words and a grander theme.`,
                `Because Marcus chose a small, specific, true moment and showed it with real detail and honest reflection in his own voice, while Priya reached for an impressive achievement and a cliché theme that made her essay sound exactly like a thousand others, authenticity and specificity beat performance and grandness.`,
                `Because failure essays are the only kind admissions readers will accept.`,
              ],
              correctIndex: 2,
              explanation: `This captures the lesson's central lesson. Marcus's essay works because it's authentic and specific: a small, true, focused moment shown with concrete detail and honest reflection, in his own natural voice, so the reader meets a real person. Priya's reaches for an impressive achievement and a cliché theme ("perseverance is key"), making it generic, the same essay countless others wrote. Specificity and authenticity beat performance and grandness. The distractors misattribute it to topic importance, demand bigger words, or invent a rule that only failure essays work.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-real`, category: `Real vs impressive`, prompt: `The bravest move is to be genuinely yourself, not the impressive person you think others want. When have you performed an impressive version of yourself, and when have you just been real? Which actually connected better with people, and why?` },
            { id: `reflect-small`, category: `The small true moment`, prompt: `Specific beats grand. Think of one small, ordinary moment from your life that quietly revealed something true about who you are, not a big achievement, but a real moment. What would that moment show a stranger about you?` },
            { id: `reflect-imperfect`, category: `Showing the flaw`, prompt: `Essays about failure or doubt often land harder than triumph because they're brave and real. What's a failure or imperfection you grew from? Why might sharing it honestly reveal more about you than any success could?` },
            { id: `reflect-heritage`, category: `Your whole self`, prompt: `Caro, your story holds your Colombian roots, two languages, a journey across cultures, things that make you unmistakably you. If you had to show a stranger who you really are in one small true scene, what moment would you choose, and what would it reveal?` },
            { id: `reflect-voice`, category: `Sounding like you`, prompt: `A personal essay should sound like you actually talk and think. When does your writing or speaking feel most like the real you, and when do you catch yourself inflating it to seem more impressive? What's lost when you do?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this 'authenticity' talk is naive, admissions is a competition, so of course you should present the most impressive version of yourself." State that view as strongly as you can. Where does it have a point, and where does the lesson show it backfires?` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Telling a stranger who you really are, honestly and well, is a skill for a lifetime, not just an application. These build it now. Two paths.`,
          familyActivity: {
            title: `The Small True Story`,
            duration: `One conversation`,
            description: `Practice the heart of the personal essay together, finding the small true story that reveals a real person. As a family, take turns. Each person picks one small, ordinary, true moment from their life, not a big achievement, but something quiet and specific: a time they failed at something, an odd hobby they love, a conversation that stuck with them, a moment they realized something. Then tell it to the others using the rules of a great personal essay: show, don't tell (describe what actually happened, with real concrete detail, instead of stating a lesson), and then reflect, what did that moment mean, what did it reveal about you? The listeners' job is to say what the story showed them about the person, what value, trait, or way of seeing came through, without anyone having to claim it directly. Notice how much more you learn about each other from one small honest story than from any list of accomplishments. For a twist, try the contrast: first have someone describe themselves with grand, generic labels ("I'm a hardworking, passionate person"), then with one specific true moment, and feel the difference. The goal is to discover, together, that the realest, most memorable picture of a person comes not from impressive summaries but from small, honest, specific truth, the exact insight that makes a personal essay (and real connection) work.`,
          },
          projectOption: {
            title: `Write Your Real Essay, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Write a genuine personal essay, the kind that reveals the real you, using everything you've learned this year. Week 1, find your moment: brainstorm small, true moments from your life that quietly reveal something about who you are, deliberately avoiding the "impressive achievement" trap. Look for the odd, the specific, the honest, a failure you grew from, a strange passion, a turning point no one else would think to write about. Pick one. Then draft it as a tiny story: show the moment with real, concrete, sensory detail (show, don't tell), in your own natural voice, the way you actually talk and think. Week 2, deepen and revise: add honest reflection, what did this moment mean, what did it teach you, how did it shape who you are? Then revise hard using the skills from last lesson: cut anything generic or inflated, kill any cliché, make sure your real voice comes through, and get honest feedback (ask a reader: "does this sound like a real person? does it sound like me?"). Edit it clean at the very end. You'll come away with a genuine personal essay you can actually use and build on, and far more importantly, you'll have practiced the lifelong skill of showing a stranger who you really are, with honesty instead of performance. That skill will serve you in college, scholarships, jobs, and every important introduction for the rest of your life.`,
            offerToParent: `Parent: opt your child into the personal essay project. Writing an authentic personal essay, choosing a small true moment, showing it with narrative craft, reflecting honestly, and revising in their own voice, integrates nearly every skill in the writing standards and produces something genuinely useful for future applications. More importantly, it builds the lifelong ability to present oneself with honesty rather than performance, which serves in scholarships, interviews, and adult life. Resisting the "impress them" trap also builds self-knowledge and courage. It's rigorous, CCSS-aligned, and deeply practical, work whose value long outlasts any single application.`,
          },
          identityQuestion: `If you become someone who can show a stranger who you really are, honestly and specifically, in your own true voice, without hiding behind impressive performance, what does that let you do, in college, in work, in every important introduction of your life, that someone who only knows how to perform an impressive version of themselves can never quite do?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can show a stranger the real me, not a performance.`,
            `A writer who trusts a small true story over an impressive one.`,
            `Someone brave enough to be honest about who I actually am.`,
          ],
          saveKey: `identity_responses_ela_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteen done, and you've learned to put a real human being, you, on the page. You learned what the personal essay is truly for: not a list of achievements the reader already has on a form, but the one place they hear your actual voice and meet you as a specific person. So authenticity beats impressiveness every time, because trying to sound grand makes you generic, the same essay a thousand others wrote, while a small, true, specific story reveals far more. You learned that all your craft comes together here: show, don't tell, reveal yourself through one focused moment and reflect honestly on what it meant; keep a natural voice that sounds like you actually talk; and be brave enough to show imperfection, since an honest essay about a failure often lands harder than a tale of triumph. And you learned this is a skill for life, telling the truth about who you are, clearly and without pretense, to people who matter, useful in scholarships, jobs, and every important introduction ahead. Next: we step up to the podium, public speaking and formal debate, where your ideas meet a live audience. Onward, {name}. — Quill`,
          badge: `personal-essayist`,
          badgeName: `Personal Essayist`,
          xpEarned: 75,
          competencies: [
            `Understands the personal essay's true purpose: authentic connection, not a list of achievements`,
            `Recognizes why authenticity beats impressiveness and "specific beats grand"`,
            `Applies show-don't-tell to reveal character through a focused moment`,
            `Pairs a vivid specific scene with honest reflection on its meaning`,
            `Writes in a natural, genuine voice rather than inflated language`,
            `Has the courage to show imperfection and honesty over performance`,
            `Treats self-presentation as a transferable lifelong skill beyond any single application`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Public Speaking and Formal Debate`,
            hook: `Your ideas, out loud, in front of a live audience, and how to make them land. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L16 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
