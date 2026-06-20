// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L06 — World Literature: Voices from Diverse Cultures
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Literature, World/Global Literature
// Interaction: PERSPECTIVES. Paragraphs <=970ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l06-v1";

const ELA_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-06`,
      title: `World Literature: Voices from Diverse Cultures`,
      duration: 35,
      xpReward: 75,
      badge: `world-reader`,
      badgeName: `World Reader`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, Martin Luther King Jr. was one of the greatest rhetoricians of the 20th century. 'Letter from Birmingham Jail' is a masterclass — written in the margins of a newspaper, responding to eight clergymen who called his protests unwise and untimely. This lesson reads it closely: what did he do, and why does it still work?`,
          headline: `World Literature: Voices from Diverse Cultures`,
          subtitle: `The magnificent conversation among all the world's cultures. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Literature Belongs To Everyone`,
          paragraphs: [
            `Literature is not the property of one country or language. Every human culture, on every continent, across all of recorded history, has told stories, sung poems, and wrestled with what it means to be alive. World literature is the name for that vast conversation, the entire human library, written in hundreds of languages and shaped by countless ways of seeing.`,
            `Reading the world's literature does two things at once. It reveals astonishing variety: the forms and concerns of a Japanese poet differ deeply from those of a Nigerian novelist or a Persian mystic. And it reveals what is universal. Beneath the differences run the same deep currents, love, grief, courage, longing, that connect every human being who has ever lived.`,
            `So the skill for reading world literature is double awareness. First, honor the difference: notice what makes each culture's voice distinct, its history, beliefs, and ways of telling, and never flatten it into "it's all the same." Second, recognize the shared humanity underneath. The richest reading holds both: respect for what is unique, and recognition of what we share.`,
          ],
          image: `/voyager-assets/ela/l06-s1-everyone.webp`,
          imageCaption: `Literature is not the property of one country or language. Every human culture, on every continent, across recorded history, has told stories, sung poems, and wrestled with being alive. WORLD LITERATURE is that vast conversation, the entire human library in hundreds of languages and countless ways of seeing. Reading it does two things at once: it reveals astonishing VARIETY (a Japanese poet, a Nigerian novelist, and a Persian mystic differ deeply), and it reveals what is UNIVERSAL (love, grief, courage, longing run beneath all of it). The skill is double awareness: honor the difference, noticing what makes each voice distinct, never flattening into "it's all the same"; and recognize the shared humanity underneath. The richest reading holds both: respect for the unique and recognition of the shared.`,
          vocab: [
            { word: `world literature`,
              definition: `The vast global conversation of stories, poems, and plays from every human culture across all of history.`,
              audioPrompt: `World literature, {name}, is the vast conversation among all the world's cultures, the entire human library written in hundreds of languages. It belongs to everyone, because every culture that ever lived has told stories and asked the deepest questions.` },
            { word: `universal`,
              definition: `True across all cultures and times. Themes like love, grief, and courage are universal even when expressed in very different ways.`,
              audioPrompt: `Universal means true across all cultures and times, {name}. Love, grief, courage, and longing are universal: they appear in every literature on earth, even when each culture expresses them through very different stories and forms.` },
            { word: `double awareness`,
              definition: `Reading world literature by honoring what makes each culture distinct while recognizing the shared humanity underneath.`,
              audioPrompt: `Double awareness, {name}, is the skill of reading world literature well: honor what makes each culture's voice distinct, never flattening it, while also recognizing the shared humanity running underneath all of it. Hold both at once.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Ancient Roots, Many Lands`,
          paragraphs: [
            `World literature reaches back thousands of years, older than any nation. One of the oldest stories humanity preserved is the Epic of Gilgamesh, from Mesopotamia four thousand years ago, and it already asks what we still ask: what is friendship, what is death, how do we face mortality? Reading it, you touch people who lived before almost all recorded history.`,
            `Every great tradition has its towering early works. India gave vast epics like the Mahabharata and the Bhagavad Gita. China produced Confucius and the nature poetry of Li Bai and Du Fu. Greece gave Homer's Iliad and Odyssey. The Arabic and Persian worlds produced One Thousand and One Nights and the mystical poetry of Rumi and Hafiz, beloved across the globe today.`,
            `These ancient roots matter for two reasons. They show that the impulse to make literature, to shape experience into story and song, is one of the oldest, most universal human acts. And they reveal that great literature was never centered in one place: the map of human storytelling spreads across every continent, and the voices we treat as central are just a few among many.`,
          ],
          image: `/voyager-assets/ela/l06-s2-ancient.webp`,
          imageCaption: `World literature reaches back thousands of years, older than any nation. The EPIC OF GILGAMESH, from ancient Mesopotamia over four thousand years ago, already asks what we still ask: what is friendship, what is death, how does a person face mortality? Every great tradition has towering early works: India gave vast epics like the Mahabharata and Ramayana and the Bhagavad Gita; China produced Confucius and the nature poetry of Li Bai and Du Fu; Greece gave Homer's Iliad and Odyssey; the Arabic and Persian worlds produced One Thousand and One Nights and the mystical poetry of Rumi and Hafiz. These roots show that making literature is one of the oldest, most universal human acts, and that "great literature" was never centered in one place but spread across every continent.`,
          vocab: [
            { word: `epic`,
              definition: `A long narrative poem about heroic deeds and grand themes. The Epic of Gilgamesh is among the oldest in the world.`,
              audioPrompt: `An epic, {name}, is a long narrative poem about heroic deeds and grand themes. The Epic of Gilgamesh, from ancient Mesopotamia, is among the oldest stories humanity preserved, and it already wrestles with friendship and death.` },
            { word: `tradition`,
              definition: `A body of literature and storytelling passed down within a culture over generations, like the Persian, Chinese, or Indian traditions.`,
              audioPrompt: `A literary tradition, {name}, is the body of stories and poems a culture passes down across generations. Every great tradition, Indian, Chinese, Greek, Persian, has its towering early works, and none of them is more central than the others.` },
            { word: `Rumi`,
              definition: `A 13th-century Persian mystic poet whose luminous verses on love and the divine are still beloved worldwide.`,
              audioPrompt: `Rumi, {name}, was a Persian mystic poet of the thirteenth century. His luminous poetry about love and the divine is still read and loved all over the world today, a reminder that great voices arise far beyond any one culture.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Modern Global Voice`,
          paragraphs: [
            `In the last century, world literature exploded with modern voices from places long ignored by the old centers of power. Writers across Africa, Asia, and Latin America claimed the right to tell their own stories, their own ways. To read only one region now is to miss most of the conversation.`,
            `Latin America gave the world magical realism, where the magical and everyday blend seamlessly. Colombia's Gabriel García Márquez, in "One Hundred Years of Solitude," made the extraordinary feel ordinary and won the Nobel Prize; Chile's Isabel Allende carried it forward. In Africa, Nigeria's Chinua Achebe, in "Things Fall Apart," told colonialism from the inside, the African point of view earlier European novels had erased.`,
            `These voices teach a crucial lesson: whose story gets told, and who tells it, matters enormously. For centuries much of the world was written about by outsiders. The gift of modern global literature is that more cultures now speak for themselves, in their own voices. Reading widely is how you hear the whole human chorus, not just the few voices that once dominated the room.`,
          ],
          image: `/voyager-assets/ela/l06-s3-modern.webp`,
          imageCaption: `In the last century, world literature exploded with modern voices, especially from places long ignored by the old centers of power. Writers across Africa, Asia, and Latin America claimed the right to tell their own stories their own ways. Latin America gave the world MAGICAL REALISM, where the magical and everyday blend: Colombia's Gabriel García Márquez, in "One Hundred Years of Solitude," made the extraordinary ordinary and won the Nobel Prize; Chile's Isabel Allende carried it forward. In Africa, Nigeria's Chinua Achebe, in "Things Fall Apart," told colonialism from the inside, the African view earlier European novels had erased. The lesson: whose story gets told, and who tells it, matters enormously. Modern global literature lets more cultures speak for themselves, so you hear the whole human chorus.`,
          vocab: [
            { word: `magical realism`,
              definition: `A style, central to Latin American literature, where magical events blend seamlessly into ordinary, realistic life.`,
              audioPrompt: `Magical realism, {name}, is a style where the magical and the everyday blend seamlessly, as if enchantment were simply part of ordinary life. It is central to Latin American literature, perfected by Colombia's own Gabriel García Márquez.` },
            { word: `Gabriel García Márquez`,
              definition: `The Colombian Nobel laureate whose "One Hundred Years of Solitude" made magical realism world-famous.`,
              audioPrompt: `Gabriel García Márquez, {name}, was the Colombian writer who made magical realism world-famous. His novel One Hundred Years of Solitude won the Nobel Prize, and made the extraordinary feel ordinary and the ordinary feel enchanted.` },
            { word: `point of view`,
              definition: `Whose perspective a story is told from. Modern global literature lets cultures tell their own stories from the inside, in their own voice.`,
              audioPrompt: `Point of view, {name}, means whose perspective a story is told from, and it matters enormously. For centuries the world was written about by outsiders. Modern global literature lets each culture tell its own story from the inside.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reading Across A Border`,
          paragraphs: [
            `Reading literature from another culture is a skill that begins with humility. When a story comes from a world unfamiliar to you, expect not to understand everything at first, and treat that as exciting. The names, foods, and customs may be new. A little curiosity, looking something up, opens doors that quick judgment slams shut.`,
            `Two traps are worth naming. The first dismisses the unfamiliar as "weird" because it differs from what you know. The second is the opposite: erasing real differences by assuming everyone is "just like me." Both flatten the work. The goal is to meet a culture's literature on its own terms, neither judging it by your rules nor pretending it has none.`,
            `Most world literature reaches us through translation. A translator makes countless choices to carry a work into another language, and something is always both lost and found in the crossing. Knowing you read a translation keeps you humble: you meet the work through a careful bridge, not directly. Read with curiosity, and you can still be moved across thousands of miles and years.`,
          ],
          image: `/voyager-assets/ela/l06-s4-border.webp`,
          imageCaption: `Reading literature from another culture is a skill that begins with humility. When a story comes from an unfamiliar world, expect not to understand everything at first, and treat that as exciting. Names, foods, customs, beliefs may be new; curiosity and looking things up open doors that quick judgment slams shut. Two traps: dismissing the unfamiliar as "weird" or "wrong" because it differs from what you know (that says more about your limits than the work's); and the opposite, erasing real differences by assuming everyone is "just like me." Both flatten the work. Meet another culture's literature on its own terms. Most reaches us through TRANSLATION, where something is always lost and found in the crossing, so read humbly, knowing you meet the work through a careful bridge.`,
          vocab: [
            { word: `translation`,
              definition: `Carrying a work from one language into another. Most world literature reaches readers through a translator's careful choices.`,
              audioPrompt: `Translation, {name}, is the careful work of carrying a story from one language into another. Most world literature reaches you this way, through a translator's many choices, and something is always both lost and found in the crossing.` },
            { word: `humility`,
              definition: `The readiness to admit you don't understand everything yet, and to meet an unfamiliar work with curiosity rather than judgment.`,
              audioPrompt: `Humility, {name}, is the readiness to admit you do not understand everything yet. When reading another culture's literature, humility turns confusion into curiosity, and opens doors that quick judgment would slam shut.` },
            { word: `own terms`,
              definition: `Meeting a work by its own culture's values and logic, rather than judging it only by your own.`,
              audioPrompt: `To meet a work on its own terms, {name}, means understanding it by its own culture's values and logic, not just judging it by your own rules. It avoids both dismissing the unfamiliar and pretending all differences vanish.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. World literature is the vast conversation among all cultures, and reading it takes double awareness: honoring what makes each voice distinct while recognizing the shared humanity underneath. Its roots are ancient and global, from Gilgamesh to Rumi, proving storytelling is one of the oldest human acts, never centered in one place.`,
            `Modern global voices, García Márquez, Achebe, Allende, teach that whose story gets told, and who tells it, matters enormously, and that the gift of recent literature is more cultures speaking for themselves. And reading across a border is a skill of humility: avoid both dismissing the unfamiliar and erasing real difference, and remember translation is a careful bridge.`,
            `Now the perspectives screen brings several ways people approach world literature: a reader seeking the universal, one insisting on cultural specificity, a translator, a writer telling their own people's story, and a global reader. Your job is not to crown one, but to understand the tension between honoring difference and finding common ground. Onward.`,
          ],
          image: `/voyager-assets/ela/l06-s5-before.webp`,
          imageCaption: `Threads together. World literature is the vast conversation among all cultures, and reading it takes double awareness: honor what makes each voice distinct while recognizing shared humanity underneath. Its roots are ancient and global, from Gilgamesh to Rumi, proving storytelling is among the oldest, most universal human acts, never centered in one place. Modern voices, García Márquez, Achebe, Allende, teach that whose story gets told, and who tells it, matters. Reading across a border is a skill of humility: avoid dismissing the unfamiliar and erasing real difference, and remember most works reach you through translation. The perspectives screen brings several approaches: the universalist, the specificity-insister, the translator, the writer of their own people, and a global reader. Understand the real tension and build your own way of reading.`,
          vocab: [
            { word: `cultural specificity`,
              definition: `The particular history, beliefs, and ways of telling that make a culture's literature uniquely itself.`,
              audioPrompt: `Cultural specificity, {name}, means the particular history, beliefs, and ways of telling that make a culture's literature uniquely its own. Honoring it keeps you from flattening every voice into one bland sameness.` },
            { word: `common ground`,
              definition: `The shared human experiences and themes that connect readers and writers across very different cultures.`,
              audioPrompt: `Common ground, {name}, is the shared human experience that connects readers across cultures, the love, grief, and courage we all know. Finding it is what lets a reader today be moved by a poet who lived across the world long ago.` },
            { word: `chorus`,
              definition: `The image of all the world's literary voices sounding together. Reading widely lets you hear the whole human chorus, not just a few voices.`,
              audioPrompt: `The human chorus, {name}, is the image of all the world's literary voices sounding together. Reading widely across cultures lets you hear the whole chorus, instead of only the few voices that once dominated the room.` },
          ],
        },

        {
          id: `l06-perspectives`,
          type: `perspectives`,
          headline: `Ways Of Reading The World`,
          intro: `{name}, how should we read literature from across the whole world? There is a real, honest tension between honoring what makes each culture distinct and finding the humanity we share. Here are five ways people answer it. Each has a genuine point. Do not crown one. Understand the tension, and build your own way of reading the human chorus.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The universalist reader`,
              era: `A way of reading`,
              stance: `What matters most is the shared humanity: love, grief, and courage connect us all, across every border.`,
              quote: `"A Persian poet's heartbreak and mine are the same heartbreak."`,
              argument: `The greatest gift of world literature is discovering that a stranger who lived four thousand years ago, on the far side of the earth, felt what I feel. Beneath every culture's differences run the same deep human currents. Focus on those, and literature becomes a bridge proving we are, finally, one human family.`,
              evidence: `The Epic of Gilgamesh asking the same questions about death we still ask; the worldwide love of Rumi; the way readers everywhere weep and laugh at stories from cultures not their own.`,
              strengths_and_limits: `Strength: builds genuine empathy and connection across all borders. Limit: if pushed too far, "we're all the same" can erase the real, precious differences between cultures and flatten a unique voice into a generic one.`,
            },
            {
              id: `p2`,
              voice: `The reader who insists on cultural specificity`,
              era: `A way of reading`,
              stance: `Honor the difference. A work means what it means within its own culture, not yours.`,
              quote: `"Before you say it's universal, learn what it actually meant to the people who made it."`,
              argument: `Rushing to "we're all the same" is a way of not really seeing the other culture at all. A story carries a specific history, set of beliefs, and way of telling that you must learn to understand it truly. Honoring those differences is the deepest form of respect; pretending they vanish quietly recenters everything on yourself.`,
              evidence: `How much of Achebe's "Things Fall Apart" depends on Igbo customs and worldview; how Japanese poetic forms carry meanings no English form holds; the way context unlocks works that seem "weird" at first.`,
              strengths_and_limits: `Strength: produces deep, respectful, genuinely informed reading. Limit: pushed too far, an extreme "you can never understand another culture" can build walls and discourage the very cross-cultural reading that connects us.`,
            },
            {
              id: `p3`,
              voice: `The translator`,
              era: `A way of reading`,
              stance: `I live in the gap between languages, and I know something is always both lost and found in the crossing.`,
              quote: `"I do not move the poem; I build a bridge and hope you can feel the far shore."`,
              argument: `Every choice I make, a word, a rhythm, an image, carries the work toward you and away from its original at the same time. You are never touching the work directly; you are meeting it through me. That should make you humble, but not despairing: a good bridge really can carry the heart of a thing across, even if it cannot carry everything.`,
              evidence: `The countless decisions in rendering Rumi or García Márquez into English; the way different translations of the same work feel different; the reality that nearly all world literature reaches most readers translated.`,
              strengths_and_limits: `Strength: keeps readers honest about how they actually access world literature, through a careful, imperfect bridge. Limit: focusing on what's lost can make readers distrust translation so much they stop reading across languages at all.`,
            },
            {
              id: `p4`,
              voice: `A writer telling their own people's story (in the spirit of Achebe)`,
              era: `20th century onward`,
              stance: `For too long others wrote about us. Now we tell our own story, from the inside, in our own voice.`,
              quote: `"Until the lions have their own historians, the hunt will always glorify the hunter."`,
              argument: `For centuries, my culture was written about by outsiders who saw us through their assumptions and erased our point of view. The great work of modern literature is reclaiming the telling: we describe our own world, our own way, so the full humanity others ignored is finally on the page. Whose voice tells the story changes everything about the story.`,
              evidence: `Achebe's "Things Fall Apart" telling colonialism from the African inside; the global rise of voices from once-colonized nations; the difference between a culture described by outsiders and one speaking for itself.`,
              strengths_and_limits: `Strength: corrects centuries of erasure and vastly enriches the world's chorus. Limit: it's a call about who tells the story, not a claim that outsiders can never read or learn, the goal is more voices, not fewer readers.`,
            },
            {
              id: `p5`,
              voice: `A global reader weighing it all`,
              era: `Today`,
              stance: `Hold the tension: honor each culture's difference AND reach for the humanity we share.`,
              quote: `"Read humbly, learn the context, and still let your heart be moved across the distance."`,
              argument: `I don't think I must choose between difference and shared humanity, the richest reading does both. I learn a work's specific world so I truly see it, not my reflection in it. And I let myself be genuinely moved by what we share, knowing I reach it through translation and across real distance. Respect the difference, find the common ground, and never stop reading widely.`,
              evidence: `The way deep context makes a foreign work hit harder, not less; the universal themes that survive translation; the simple fact that reading the whole world's literature makes a person wiser and kinder.`,
              strengths_and_limits: `Strength: refuses a false either/or and models how to read the world generously and well. Limit: holding both takes real effort, and "do both" is easy to say but demands the slow work of learning, humility, and wide reading.`,
            },
          ],
          synthesisPrompt: `After all five: how will YOU read literature from cultures far from your own? How do you honor what makes a culture distinct AND reach for the humanity you share, without falling into either trap? Which voice helped you most? In 5-6 sentences.`,
          reflectionPrompt: `You're Colombian, and García Márquez's magical realism comes from your own culture. When have you seen your culture told from the inside versus described by outsiders? What does it feel like to read a story that truly knows your world, versus one that flattens it?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "world literature," according to the lesson?`,
              options: [
                `Only the books that have been officially translated into the English language.`,
                `The vast conversation of stories and poems from every human culture across history.`,
                `Literature written specifically about traveling to different countries of the world.`,
                `The small handful of ancient European classics everyone is expected to read.`,
              ],
              correctIndex: 1,
              explanation: `World literature is the vast global conversation of stories, poems, and plays from every culture across all of history, the entire human library in hundreds of languages. The distractors shrink it to translations only, travel writing, or a few European classics, all of which miss its true scope.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `The lesson says reading world literature well requires "double awareness." What two things must you hold at once?`,
              options: [
                `Honoring what makes each culture distinct AND recognizing shared humanity underneath.`,
                `Reading the book twice and then writing a long summary of the plot.`,
                `Knowing both the author's name and the exact year the work was published.`,
                `Comparing every foreign book to a similar American book you've already read.`,
              ],
              correctIndex: 0,
              explanation: `Double awareness means honoring what makes each culture's voice distinct (never flattening it) while recognizing the universal humanity underneath. The distractors reduce it to re-reading, basic facts, or comparison to American works, none of which is the balance the lesson teaches.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does the lesson point to the ancient Epic of Gilgamesh?`,
              options: [
                `Because it is the only story that survived from the entire ancient world.`,
                `Because it proves ancient people could not write as well as modern people.`,
                `Because it was originally written in English thousands of years ago.`,
                `It's among the oldest stories and already asks the human questions we still ask.`,
              ],
              correctIndex: 3,
              explanation: `Gilgamesh, over four thousand years old, already wrestles with friendship, death, and mortality, the same questions we ask, showing that making literature is one of the oldest, most universal human acts. The distractors invent false claims about it being the only survivor, proving inferiority, or being written in English.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "magical realism," and which Colombian writer made it world-famous?`,
              options: [
                `Stories set entirely in imaginary worlds; made famous by J.R.R. Tolkien.`,
                `A style blending magic seamlessly into ordinary life; Gabriel García Márquez.`,
                `Poetry that uses magic tricks as metaphors; made famous by Walt Whitman.`,
                `Realistic fiction with no fantasy at all; made famous by Chinua Achebe.`,
              ],
              correctIndex: 1,
              explanation: `Magical realism blends the magical and the everyday seamlessly, and Colombia's Gabriel García Márquez made it world-famous with "One Hundred Years of Solitude," winning the Nobel Prize. The distractors confuse it with high fantasy, misattribute it, or wrongly define it as having no magic.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does the lesson say "whose story gets told, and who tells it" matters so much?`,
              options: [
                `Because only the most famous writers deserve to have their stories told at all.`,
                `Because stories told by outsiders are always more accurate than insider accounts.`,
                `For centuries cultures were written about by outsiders; now more tell their own stories.`,
                `Because the country with the most published books automatically wins world respect.`,
              ],
              correctIndex: 2,
              explanation: `For centuries much of the world was written about by outsiders who erased the insider point of view; the great gift of modern global literature is that more cultures now speak for themselves, in their own voices. The distractors elevate fame, claim outsiders are more accurate, or reduce it to a book-count contest.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `The lesson names two traps when reading another culture's literature. What are they?`,
              options: [
                `Reading a story far too fast, and then reading it too slowly to even remember the plot.`,
                `Dismissing the unfamiliar as "weird," and erasing real difference by assuming "everyone's just like me."`,
                `Liking the book too much, and not liking the book enough to finish it.`,
                `Reading only old books, and reading only books from your own country.`,
              ],
              correctIndex: 1,
              explanation: `The two traps are opposite: dismissing what's unfamiliar as "weird" or "wrong," and the subtler one of erasing real differences by assuming everyone everywhere is just like you. Both flatten the work. The distractors describe reading pace, enjoyment level, or reading habits, not these two flattening errors.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the lesson say about translation?`,
              options: [
                `Most world literature reaches readers through a translator's careful, imperfect choices.`,
                `Translation is so perfect that reading a translation is identical to the original.`,
                `Translated books should be avoided because they are always completely wrong.`,
                `Only books that need no translation count as real world literature.`,
              ],
              correctIndex: 0,
              explanation: `Most world literature reaches readers through translation, where a translator makes countless choices and something is always both lost and found, so you meet the work through a careful bridge, not directly. The distractors treat translation as perfect, worthless, or claim only untranslated works count.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Chinua Achebe's "Things Fall Apart" was important because it did what?`,
              options: [
                `It was the first novel ever written anywhere in human history.`,
                `It described African life exactly the way European explorers had.`,
                `It told the story of colonialism from the African point of view that had been erased.`,
                `It proved that African cultures had no stories worth telling before Europeans came.`,
              ],
              correctIndex: 2,
              explanation: `"Things Fall Apart" told colonialism from the inside, from the African point of view that earlier European novels had erased, an example of a culture reclaiming the telling of its own story. The distractors invent a "first novel ever" claim or state the opposite of what Achebe actually did.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The best way to respect literature from another culture is to immediately conclude that "deep down, everyone everywhere is exactly the same."`,
              correctAnswer: false,
              explanation: `False, and seeing why is the heart of double awareness. It is true and beautiful that universal currents, love, grief, courage, longing, run through all the world's literature, and recognizing that shared humanity is one half of reading the world well. But rushing immediately to "everyone is exactly the same" is actually one of the two traps the lesson warns about: it quietly erases the real, precious differences that make each culture's voice unique, and it often recenters everything on yourself, seeing your own reflection instead of truly seeing the other culture. Much of Achebe's "Things Fall Apart" depends on specific Igbo customs and worldview; Japanese poetic forms carry meanings no English form holds. To flatten all that into "it's all the same" is to not really see the work at all. The deepest respect comes from double awareness: honoring what makes each culture genuinely distinct, learning its specific world, AND recognizing the humanity you share. You hold both at once, you don't collapse one into the other.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You start a famous Japanese novel and feel lost, the customs, names, and assumptions are unfamiliar, and a friend says "this is too weird, just read American books instead." Using the lesson, what's the wisest move?`,
              options: [
                `Agree and quit; if a book feels unfamiliar at first, it's not worth your time.`,
                `Push through but decide the culture is simply wrong wherever it differs from yours.`,
                `Treat the confusion as exciting, not a stop sign: read with humility, look up the context, expect to meet the work on its own terms, and stay open to being moved across the distance, knowing you're reading a translated bridge.`,
                `Assume the Japanese novel is secretly "just like" an American one and skip learning anything about its world.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's whole method. Feeling lost in an unfamiliar world is expected and exciting, not a stop sign; the move is humility, curiosity, and looking up context so you meet the work on its own terms, while staying open to the shared humanity that can move you across the distance, and remembering you read it through translation. The distractors are the failure modes: quitting, judging the culture wrong, or erasing its difference by assuming sameness.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-universal`, category: `What we share`, prompt: `World literature shows the same love, grief, and courage across every culture. When has a story from a place or time far from your own made you feel deeply understood, as if the writer knew something true about you? What was the shared human thing?` },
            { id: `reflect-specific`, category: `What makes us distinct`, prompt: `The lesson warns against flattening every culture into sameness. What is something specific about your own Colombian culture, a value, a way of telling stories, a feeling, that an outsider might miss or misread? Why does honoring that specificity matter?` },
            { id: `reflect-whotells`, category: `Whose voice`, prompt: `Achebe said until the lions have their own historians, the hunt glorifies the hunter. Where in the world, or in your own life, have you seen the difference between a story told by those who lived it and one told about them by outsiders?` },
            { id: `reflect-heritage`, category: `Your own chorus`, prompt: `Caro, García Márquez turned Colombian life into world literature loved everywhere. What stories from your own family, region, or heritage feel worth telling to the world? What would be lost if only outsiders ever told them?` },
            { id: `reflect-translation`, category: `Across languages`, prompt: `You live between Spanish and English. What gets lost, and what gets found, when you move a feeling or a story from one of your languages to the other? When has something only been sayable in one of them?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "you can never truly understand a culture that isn't yours, so reading other cultures' literature is pointless." State that view as strongly as you can. Where does it have a real point, and where does it go too far and build walls?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The whole world's library is open to you. These help you actually read across it. Two paths.`,
          familyActivity: {
            title: `Around The World In Five Stories`,
            duration: `Over a week`,
            description: `Take a literary trip around the globe together. Over a week, as a family, read (or read aloud, or listen to) five short pieces of literature, a poem, folktale, or very short story, from five different cultures, ideally five different continents. Make a point of including a work from your own Colombian or Latin American heritage so the world's chorus includes your own voice. For each one, practice double awareness out loud. First, honor the difference: what is specific to this culture, its setting, beliefs, way of telling? Look up one piece of context you didn't know. Second, find the common ground: what did this story make you feel that you've felt yourself? Keep a simple "world map" on paper, marking each story's origin. By the end, everyone will have traveled the planet through literature in a single week, and felt firsthand that every culture has treasures, and that we are connected across all of them. It's a small, joyful antidote to a narrow reading life.`,
          },
          projectOption: {
            title: `A Reader's Passport, ongoing (optional)`,
            duration: `Ongoing, set your own pace`,
            description: `Become a true reader of the world. Create a "Reader's Passport," a notebook or document where you log every work you read from a culture other than your own. For each entry, "stamp" it with: the country or culture, the author, whether you read it in translation, one thing specific to that culture you learned, and one universal human thing it made you feel. Set yourself a generous goal, say, voices from a dozen different countries across a year, deliberately seeking out regions and cultures you've never read before: an African novel, a Japanese poet, a Middle Eastern story, an Indigenous tale, and of course the riches of Latin American literature. The double-column habit, "what was specific" beside "what was universal", trains the exact skill this lesson teaches. Over time your passport becomes a record of a mind that refuses to stay in one small room, and you'll find your empathy, your understanding, and your sense of the whole human family growing with every stamp.`,
            offerToParent: `Parent: opt your child into the Reader's Passport project. Deliberately reading across many cultures, while logging both what's culturally specific and what's universally human, builds empathy, global awareness, and sophisticated reading skill at once. It directly counters a narrow literary diet and develops exactly the double awareness that defines a wise reader of world literature. It's open-ended, self-paced, and grows richer the longer your child keeps it.`,
          },
          identityQuestion: `If you become someone who reads the whole world's literature, honoring what makes every culture distinct while recognizing the humanity you share with all of them, what kind of person does that make you, in a world that often wants you to listen to only one kind of voice, that a person who reads only their own culture can never quite become?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads the whole human chorus, not just one voice.`,
            `A reader who honors what's different and finds what we share.`,
            `Someone who meets every culture's story on its own terms.`,
          ],
          saveKey: `identity_responses_ela_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Six done, and you just opened the windows to the entire world. You learned that literature belongs to everyone, that world literature is the vast conversation among all the world's cultures, and that reading it takes double awareness, honoring what makes each voice distinct while recognizing the shared humanity underneath. You traveled from the ancient Epic of Gilgamesh to the luminous poetry of Rumi, seeing that storytelling is one of the oldest and most universal human acts, never centered in just one place. You met the great modern global voices, your own Colombia's García Márquez and his magical realism, Nigeria's Achebe reclaiming his people's story, and learned that whose voice tells the tale changes everything. And you learned the humble, skillful way to read across a border: avoid both dismissing the unfamiliar and erasing real difference, and remember the careful bridge of translation. You can now hear the whole human chorus, not just a few voices in one room. Next: we zoom back in to a single, powerful form, the novel, and learn to read its structure, theme, and character with real depth. Onward, {name}. — Quill`,
          badge: `world-reader`,
          badgeName: `World Reader`,
          xpEarned: 75,
          competencies: [
            `Defines world literature as the global conversation among all cultures across history`,
            `Practices double awareness: honoring cultural specificity while recognizing universal humanity`,
            `Recognizes the ancient, global roots of literature (Gilgamesh, Rumi, and many traditions)`,
            `Understands magical realism and the contribution of modern global voices like García Márquez and Achebe`,
            `Grasps why "whose story gets told, and who tells it" matters for world literature`,
            `Avoids the twin traps of dismissing the unfamiliar and erasing real difference`,
            `Reads across cultures with humility, context-seeking, and awareness of translation as a bridge`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: The Novel — Structure, Theme, and Character`,
            hook: `How a great novel is actually built, and how to read its deeper layers. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L06 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
