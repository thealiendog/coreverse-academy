// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L04 — American Literature: Colonial and Revolutionary Period
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Literature & Informational Text, American Literature
// Interaction: CASE STUDY. Calibrated to Voyagers Spec v1.0.
// Paragraphs trimmed (~750-870 chars/section) for karaoke. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l04-v1";

const ELA_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-04`,
      title: `American Literature: Colonial and Revolutionary Period`,
      duration: 35,
      xpReward: 75,
      badge: `early-american-reader`,
      badgeName: `Early American Reader`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, evidence is not all equal. Anecdote, correlation, peer-reviewed study, expert consensus — these carry different weight and should. This lesson teaches you to evaluate evidence quality, understand what different study designs can and can't prove, and recognize when someone is using weak evidence to support a strong claim.`,
          headline: `American Literature: Colonial and Revolutionary Period`,
          subtitle: `The voices that gave a new nation its words. A Case Study.`,
          visual: `/voyager-assets/ela/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Reading Literature, Not Just Argument`,
          paragraphs: [
              `So far you have analyzed writing mostly as argument: claim, evidence, reasoning. Literature asks one more layer. A poem, a sermon, a diary, or a speech is not only making a point; it is revealing a world, the beliefs, fears, and hopes of the person who wrote it. Reading literature means asking both what does this say and what does this reveal.`,
              `This matters for early American writing because it was so varied. There was no single American literature yet, only many voices writing to worship, record, persuade, or survive. A Puritan sermon and a revolutionary pamphlet are wildly different, but both reveal something true about the people who made them. The form itself is part of the meaning.`,
              `Here is the skill: read each text on two levels at once. First the surface, what is it literally saying? Second the depth, what does it reveal about its author's world and purpose? A diary about a hard winter is also a window into colonial fear and faith. Literature rewards readers who look through the words to the world behind them.`,
            ],
          image: `/voyager-assets/ela/l04-s1-reading-lit.webp`,
          imageCaption: `So far you analyzed writing mostly as argument: claim, evidence, reasoning. Literature asks one more layer. A poem, sermon, diary, or speech is not only making a point, it is revealing a world, the beliefs, fears, hopes, and struggles of its author and their time. Reading literature well means asking both what does this say AND what does this reveal. This matters for early American writing because it was so varied, no single "American literature" yet, just many voices writing to worship, record, persuade, or survive. The form itself, sermon, diary, pamphlet, speech, is part of the meaning. The skill: read each text on two levels, the surface (what it literally says) and the depth (what it reveals about its author's world, values, and purpose). Look through the words to the world behind them.`,
          vocab: [
            { word: `literature`,
              definition: `Writing valued not only for what it says but for how it reveals a world, its author's beliefs, feelings, and time.`,
              audioPrompt: `Literature is writing valued for more than its surface message, {name}. A poem or sermon reveals a world, the beliefs and struggles of its author and their era. Reading literature means asking both what it says and what it reveals.` },
            { word: `purpose`,
              definition: `The reason a text was written, to worship, record, persuade, or survive. Knowing the purpose unlocks the meaning.`,
              audioPrompt: `Purpose is the reason a text was written, {name}, to worship, record, persuade, or survive. Early American writers had very different purposes, and knowing why a text was made is one of the fastest ways to understand what it really means.` },
            { word: `context`,
              definition: `The historical world surrounding a text, the events, beliefs, and pressures that shaped why and how it was written.`,
              audioPrompt: `Context is the historical world around a text, {name}, the events, beliefs, and pressures of its time. A diary about a hard winter is also a window into colonial fear and faith. Context turns words on a page into a window into a world.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Puritan Voice`,
          paragraphs: [
              `The earliest English colonial writing in New England was shaped by the Puritans, who came to build a religious community. Their writing was deeply serious, focused on God, sin, and salvation. They wrote sermons, diaries, and poems with a religious purpose, in a world where a storm or harvest was read as a sign from God.`,
              `Two voices stand out. Anne Bradstreet, the first published poet in the colonies, wrote tender, personal poems about family, home, and faith, including grief when her house burned. Jonathan Edwards delivered Sinners in the Hands of an Angry God in 1741, a sermon so vivid it helped fuel a revival called the Great Awakening.`,
              `Reading them on two levels reveals a great deal. On the surface, Edwards warns of damnation and Bradstreet mourns a home. Underneath lies a whole worldview: a people who believed life was a test and that the soul mattered more than worldly comfort. Their literature is a window into beliefs that still echo in American culture.`,
            ],
          image: `/voyager-assets/ela/l04-s2-puritan.webp`,
          imageCaption: `The earliest English colonial writing in New England was shaped by the Puritans, who came to build a religious community. Their writing was deeply serious, focused on God, sin, salvation, and constant self-examination, almost always with a religious purpose, in a world where a storm or harvest was read as a sign from God. Two voices stand out: ANNE BRADSTREET, the first published poet in the colonies, wrote tender personal poems about family, home, and faith, including grief when her house burned. JONATHAN EDWARDS delivered "Sinners in the Hands of an Angry God" in 1741, a sermon so vivid it helped fuel the Great Awakening revival. On two levels: the surface warns of damnation or mourns a home; underneath lies a whole worldview, a people who believed life was a test and the soul mattered more than comfort.`,
          vocab: [
            { word: `Puritans`,
              definition: `English religious settlers in colonial New England whose serious, God-centered writing shaped early American literature.`,
              audioPrompt: `The Puritans were English religious settlers in colonial New England, {name}. Their writing was deeply serious and God-centered, sermons, diaries, poems, in a world where everything was read as a sign from God. Their beliefs still echo in American culture.` },
            { word: `sermon`,
              definition: `A religious speech meant to teach and persuade a congregation. The dominant literary form of the Puritan world.`,
              audioPrompt: `A sermon is a religious speech meant to teach and persuade, {name}, the dominant literary form of the Puritan world. Jonathan Edwards's Sinners in the Hands of an Angry God was so vivid it helped spark a whole religious revival.` },
            { word: `Anne Bradstreet`,
              definition: `The first published poet in the American colonies, known for tender, personal poems about family, home, and faith.`,
              audioPrompt: `Anne Bradstreet was the first published poet in the American colonies, {name}. Inside the strict Puritan world, she wrote tender, personal poems about her family and home, showing a real human heart, including her grief when her house burned down.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `A Poet Who Claimed Her Own Genius`,
          paragraphs: [
              `One of the most remarkable voices of the colonial period belonged to Phillis Wheatley. Kidnapped from West Africa and enslaved in Boston, she learned English, Latin, and Greek, and in 1773 became the first African American to publish a book of poetry. Her existence as a poet was an argument in a world that denied enslaved people were fully human.`,
              `Her poems are accomplished and classical, in the polished style admired in her day. Reading on two levels reveals their power: a young enslaved woman, writing in the forms of those who enslaved her people, showing undeniable genius. Her skill itself refuted the racist claim that Black people were incapable of art.`,
              `Her story shows literature as evidence and argument at once. Doubters could not believe she had written such poems, so prominent men examined her and signed a statement confirming the work was hers, a humiliation no white poet faced. Her poetry became living proof that the humanity slavery denied was real and impossible to ignore.`,
            ],
          image: `/voyager-assets/ela/l04-s3-wheatley.webp`,
          imageCaption: `One of the most remarkable colonial voices belonged to PHILLIS WHEATLEY. Kidnapped from West Africa and enslaved in Boston, she learned English, Latin, and Greek, and in 1773 became the first African American to publish a book of poetry. Her existence as a poet was an argument in a world that denied enslaved people were fully human. Her poems are accomplished and classical, polished in the admired style of her day. Read on two levels: a young enslaved woman, writing in the forms of those who enslaved her people, showing undeniable genius that refuted the racist claim that Black people could not make art. White doubters made her submit to an examination confirming the work was hers, a humiliation no white poet faced. Her poetry became living proof against slavery's lie.`,
          vocab: [
            { word: `Phillis Wheatley`,
              definition: `Kidnapped from Africa and enslaved as a child, she became in 1773 the first African American to publish a book of poetry.`,
              audioPrompt: `Phillis Wheatley was kidnapped from West Africa and enslaved as a child, {name}, yet learned English, Latin, and Greek and in 1773 became the first African American to publish a book of poetry. Her very existence as a poet was an argument against slavery.` },
            { word: `classical style`,
              definition: `A polished, formal style modeled on Greek and Roman literature, full of mythological and learned references, admired in Wheatley's day.`,
              audioPrompt: `The classical style is polished and formal, {name}, modeled on Greek and Roman writing and full of learned references. Wheatley mastered it completely, using the very forms admired by the society that enslaved her people to prove her genius.` },
            { word: `literature as evidence`,
              definition: `The idea that a work can be proof as well as art. Wheatley's poems were living evidence against the lie that enslaved people lacked humanity.`,
              audioPrompt: `Literature as evidence means a work can be proof as well as art, {name}. Wheatley's poems were not only beautiful, they were living evidence against the racist lie that enslaved people were not fully human. The poetry itself made the argument.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Words That Sparked A Revolution`,
          paragraphs: [
              `As the colonies moved toward revolution, literature became a weapon. The most powerful writing was no longer the sermon but the pamphlet and the speech, made to persuade ordinary people to risk everything for independence. This was rhetoric in action, aimed at changing a nation's mind.`,
              `Thomas Paine's pamphlet Common Sense, from 1776, is the great example. Written in plain, forceful language any colonist could understand, it argued that it was absurd for a continent to be ruled by a distant island. It sold in huge numbers and helped turn public opinion toward revolution, logos and pathos in plain speech.`,
              `Spoken words mattered too. Patrick Henry's reported cry, give me liberty or give me death, captured the revolutionary spirit in one unforgettable line. These texts show both the argument and the world behind it: a people discovering that words, printed and spoken, could move a population to remake society. Literature was helping to cause the revolution.`,
            ],
          image: `/voyager-assets/ela/l04-s4-revolution.webp`,
          imageCaption: `As the colonies moved toward revolution, literature became a weapon. The most powerful writing was now the pamphlet and the speech, designed to persuade ordinary people to risk everything for independence, rhetoric in action. THOMAS PAINE's "Common Sense" (1776), in plain, forceful language any colonist could grasp, argued it was absurd for a continent to be ruled by a distant island and that independence was simply common sense; it sold hugely and turned public opinion toward revolution, logos and pathos in plain speech. PATRICK HENRY's reported "Give me liberty, or give me death!" (1775) captured the revolutionary spirit in one line, pathos fused with a stark choice. On two levels: the argument for breaking from Britain, and a people discovering that printed and spoken words could move a population to remake society. Literature helped cause the revolution.`,
          vocab: [
            { word: `pamphlet`,
              definition: `A short, cheap printed work arguing a position, the key persuasive form of the revolutionary era. Paine's "Common Sense" is the famous example.`,
              audioPrompt: `A pamphlet is a short, cheap printed argument, {name}, the key persuasive form of the revolutionary era. Because pamphlets were affordable and easy to share, a single one, like Paine's Common Sense, could change the mind of an entire nation.` },
            { word: `Common Sense`,
              definition: `Thomas Paine's 1776 pamphlet that argued plainly for independence and helped turn public opinion toward revolution.`,
              audioPrompt: `Common Sense was Thomas Paine's 1776 pamphlet, {name}, written so plainly any colonist could understand it. It argued that independence was simply common sense, sold in huge numbers, and helped push public opinion decisively toward revolution.` },
            { word: `Thomas Paine`,
              definition: `The writer of "Common Sense," whose plain, forceful prose made the case for independence to ordinary people.`,
              audioPrompt: `Thomas Paine wrote Common Sense, {name}. His genius was clear reasoning in plain speech, logos and pathos that ordinary people could both follow and feel. He proved that the right words, written simply, could help spark a revolution.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Study`,
          paragraphs: [
              `Pull it together. Early American literature asks you to read on two levels: the surface (what a text says) and the depth (what it reveals about its author's world and purpose). The form itself, sermon, diary, poem, pamphlet, speech, is part of the meaning, and there was no single American voice yet, only many.`,
              `You met the Puritans, whose God-centered writing, from Bradstreet's tender poems to Edwards's fiery sermon, reveals a world that read life as a test of the soul. You met Phillis Wheatley, whose existence as a published poet was living evidence against slavery's lie. And you met Paine and Henry, who turned plain words into weapons that helped cause a revolution.`,
              `Now the case-study screen hands you five real early American texts. For each, read the surface and the depth. What is it saying? What is its purpose and form? And what does it reveal about the person and the world that made it? You are learning to hear, through their words, the voices of a nation being born.`,
            ],
          image: `/voyager-assets/ela/l04-s5-before.webp`,
          imageCaption: `Threads together. Early American literature asks you to read on two levels: the surface (what it says) and the depth (what it reveals about its author's world, values, and purpose), with the form itself, sermon, diary, poem, pamphlet, speech, part of the meaning. You met the Puritans, whose God-centered writing, from Bradstreet's tender poems to Edwards's fiery sermon, reveals a world that read life as a test of the soul; Phillis Wheatley, whose existence as a published poet was living evidence against slavery's lie; and the revolutionary writers, Paine and Henry, who turned plain words into weapons. The case-study screen hands you five real early American texts. For each, read surface and depth: what it says, its purpose and form, and what it reveals about the world that made it.`,
          vocab: [
            { word: `colonial period`,
              definition: `The era of the American colonies (roughly 1600s-1770s) before independence, when writing was mostly religious, personal, or practical.`,
              audioPrompt: `The colonial period covers the American colonies before independence, {name}, roughly the 1600s through the 1770s. Its writing was mostly religious, personal, or practical, sermons, diaries, and histories, before pamphlets and speeches turned toward revolution.` },
            { word: `revolutionary period`,
              definition: `The era around the 1760s-1780s when literature became a tool of persuasion to argue for independence.`,
              audioPrompt: `The revolutionary period, around the 1760s to 1780s, {name}, is when literature became a weapon. Pamphlets and speeches replaced sermons as the most powerful writing, aimed at persuading ordinary people to risk everything for independence.` },
            { word: `two-level reading`,
              definition: `Reading a text for both its surface meaning and what it reveals about its author and world. The core skill for reading literature.`,
              audioPrompt: `Two-level reading is the core skill for literature, {name}: read both the surface, what a text literally says, and the depth, what it reveals about its author and their world. A diary about a hard winter is also a window into colonial fear and faith.` },
          ],
        },

        {
          id: `l04-case-study`,
          type: `case-study`,
          headline: `Five Early American Texts`,
          intro: `{name}, five real texts from the colonial and revolutionary world. For each, read on two levels: first the surface (what is it saying or arguing, and in what form?), then the depth (what does it reveal about its author's purpose, values, and world?). You are learning to hear a nation being born through its writing.`,
          cases: [
            {
              id: `c1`,
              title: `Anne Bradstreet, a personal Puritan poem`,
              type: `Colonial poetry (Puritan)`,
              description: `A tender poem in which Bradstreet, after her house burns down, wrestles between grief for her lost home and possessions and her Puritan faith that her true home is in heaven. Personal feeling and religious belief pull against each other.`,
              questions: [
                `On the surface, what is the poem about? What is its form and purpose?`,
                `What does it reveal about the Puritan world and Bradstreet's place in it?`,
                `Why is the tension between grief and faith the heart of the poem?`,
              ],
              evaluation: `On the surface, it is a personal poem mourning a burned home, in the religious, reflective form typical of Puritan writing, with the purpose of working through loss in light of faith. On the depth level, it reveals a great deal: a real human heart, a woman who genuinely loved her home and things, living inside a strict Puritan world that taught her to value heaven over earthly comfort. The tension between grief and faith is the heart of the poem precisely because it is honest, Bradstreet does not pretend the loss does not hurt, even as she reminds herself where her true treasure should lie. That honesty is what makes her, the first published colonial poet, feel human across the centuries, and it shows that even inside a rigid worldview, individual feeling found its voice.`,
            },
            {
              id: `c2`,
              title: `Jonathan Edwards, "Sinners in the Hands of an Angry God" (1741)`,
              type: `Colonial sermon`,
              description: `A famous sermon using vivid, frightening images, a spider held over a fire, to warn listeners of damnation and urge them to repent. It was delivered during the Great Awakening and is built almost entirely on intense emotional appeal.`,
              questions: [
                `What is the sermon's claim and main rhetorical appeal?`,
                `Is its heavy use of fear honest pathos or manipulation, in its own context?`,
                `What does it reveal about the Puritan worldview?`,
              ],
              evaluation: `The claim is that sinners are in constant danger of damnation and must repent now, and the main appeal is overwhelmingly pathos, vivid, terrifying imagery designed to make listeners feel their peril. Whether that fear is honest pathos or manipulation depends on context and on what you believe: within the Puritan worldview, Edwards genuinely believed damnation was real and imminent, so to him the fear fit the truth of the situation, which is the test of honest pathos, even though to a modern reader the technique looks like fear used to overwhelm thought. What it clearly reveals is the Puritan world itself: a people who believed life was a knife's edge between salvation and hell, that the soul's fate was the only thing that ultimately mattered, and that powerful preaching could shake a whole community into religious revival, which is exactly what the Great Awakening was.`,
            },
            {
              id: `c3`,
              title: `Phillis Wheatley, a classical poem by an enslaved poet (1773)`,
              type: `Colonial poetry (enslaved African American)`,
              description: `An accomplished, formal poem full of classical and Christian references, written by an enslaved young woman who taught herself the languages and forms admired by the society that enslaved her people, and published it despite a world that doubted she could.`,
              questions: [
                `What is remarkable about this text beyond the words on the page?`,
                `How is the poem itself an argument, not just a work of art?`,
                `What does the doubt she faced reveal about her world?`,
              ],
              evaluation: `What is remarkable goes far beyond the polished words: the poem exists at all, written and published by an enslaved African woman in 1773, the first African American to publish a book of poetry. That makes the poem itself an argument, not just art, it is living evidence against the racist lie that enslaved people lacked the humanity, intellect, and soul to create literature. By mastering the very classical forms her enslavers admired, Wheatley refuted their claims on their own terms. The doubt she faced, a panel of prominent men examining her to certify the work was truly hers, a humiliation no white poet endured, reveals a world so committed to denying Black humanity that it could not accept genius staring it in the face. Her poetry became part of the early case against slavery precisely because it was undeniable.`,
            },
            {
              id: `c4`,
              title: `Thomas Paine, "Common Sense" (1776)`,
              type: `Revolutionary pamphlet`,
              description: `A pamphlet written in deliberately plain, forceful language arguing that independence from Britain is simply common sense. It avoids fancy vocabulary so that ordinary colonists, not just the educated, can follow and feel its argument. It sold in enormous numbers.`,
              questions: [
                `Why did Paine write in such plain language, and what appeals does he use?`,
                `What does the pamphlet's huge popularity reveal about its moment?`,
                `How is this literature "causing" history rather than describing it?`,
              ],
              evaluation: `Paine wrote in deliberately plain language because his purpose was persuasion of ordinary people, not impressing the educated, he wanted every colonist to follow the logic (logos) and feel the rightness (pathos) of independence. The appeals work together: clear reasoning that a continent should not be ruled by a distant island, delivered with enough force that readers felt it as common sense. The pamphlet's enormous popularity reveals a moment ripe for change, a population whose minds were ready to be tipped, and Paine's plain words tipped them. This is literature causing history rather than describing it: Common Sense did not report on a revolution already happening, it helped move public opinion decisively toward revolution, proving that the right words, written simply and widely shared, can change what a whole people is willing to do.`,
            },
            {
              id: `c5`,
              title: `Patrick Henry, "Give me liberty, or give me death!" (1775)`,
              type: `Revolutionary speech`,
              description: `The famous reported climax of a speech urging the colonies to take up arms against Britain. The single line reduces the entire revolutionary choice to a stark, unforgettable alternative, fusing intense emotion with a sharp logical either-or.`,
              questions: [
                `Why is this line so memorable and powerful?`,
                `What appeals are fused together in it?`,
                `What does its enduring fame reveal about the power of spoken literature?`,
              ],
              evaluation: `The line is memorable because it compresses an enormous, frightening choice into seven unforgettable words, making the abstract stakes of revolution feel personal and absolute. It fuses appeals: pathos in its raw emotional force and the courage it dramatizes, and logos in its stark either-or structure, framing the choice as liberty versus death with no comfortable middle ground. That fusion is what gives it power, it makes you feel the stakes and accept the logic in the same breath. Its enduring fame, still quoted nearly 250 years later, reveals the unique power of spoken literature: a single sentence, delivered at the right moment, can crystallize a movement's spirit and outlive its speaker by centuries. It shows that in the revolutionary period, words, spoken as well as printed, were genuine instruments of historical change.`,
            },
          ],
          synthesisPrompt: `After all five: what did reading on two levels (surface and depth) let you see that reading for the argument alone would have missed? Choose the text that revealed the most about its world, and explain what it showed you. In 5-6 sentences.`,
          reflectionPrompt: `You read a Puritan, an enslaved poet, and revolutionary persuaders, all "early American" yet wildly different. What does that variety tell you about who and what "America" was even at the start? Which voice felt most alive to you, and why?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `The lesson says reading literature adds a layer beyond reading argument. What's the extra question literature asks?`,
              options: [
                `Whether the writing follows all the correct rules of spelling and grammar.`,
                `Not just what the text says, but what it reveals about its author and world.`,
                `Whether the text is long enough to count as real, serious literature.`,
                `Which famous author the writing most closely imitates in its style.`,
              ],
              correctIndex: 1,
              explanation: `Beyond analyzing claim, evidence, and reasoning, literature asks what a text reveals about its author's beliefs, fears, hopes, and world, reading on two levels: surface and depth. The distractors reduce literature to grammar, length, or imitation, none of which is the two-level reading the lesson teaches.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Who was Anne Bradstreet?`,
              options: [
                `A revolutionary pamphlet writer who argued for independence from Britain.`,
                `An enslaved poet who was the first African American to publish a book.`,
                `A fiery preacher whose sermon helped start the Great Awakening revival.`,
                `The first published poet in the American colonies, known for personal Puritan poems.`,
              ],
              correctIndex: 3,
              explanation: `Anne Bradstreet was the first published poet in the American colonies, writing tender, personal poems about family, home, and faith from inside the Puritan world. The distractors describe Paine, Wheatley, and Edwards, the other figures in the lesson, not Bradstreet.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does the lesson say Phillis Wheatley's poetry was "an argument," not just art?`,
              options: [
                `Because her poems openly and directly demanded that the Congress vote to abolish all slavery at once.`,
                `Her existence as a published enslaved poet was living evidence against slavery's lie about Black humanity.`,
                `Because she wrote angry political pamphlets in addition to her formal poems.`,
                `Because her poems contained detailed logical arguments with evidence and reasoning.`,
              ],
              correctIndex: 1,
              explanation: `Wheatley's poetry was an argument because its very existence, an enslaved African woman publishing accomplished poetry in 1773, was living evidence against the racist claim that Black people lacked the humanity to create literature. The distractors invent direct political demands or pamphlets; the argument was the fact of the poetry itself.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What humiliating test did Wheatley face that white poets did not, and what did it reveal?`,
              options: [
                `She was forced to pay a large fee just to publish, revealing the very high cost of colonial printing.`,
                `She had to translate her poems into Latin, revealing strict colonial schooling.`,
                `She had to recite her poems from memory, revealing colonial standards for poets.`,
                `A panel of men examined her to certify the poems were hers, revealing a world that couldn't accept Black genius.`,
              ],
              correctIndex: 3,
              explanation: `Doubters could not believe an enslaved African girl wrote such poems, so prominent men examined her and signed a statement confirming the work was hers, a humiliation no white poet faced. It reveals a world so committed to denying Black humanity it could not accept genius before its eyes. The distractors invent fees, translation, or recitation tests.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why did Thomas Paine write "Common Sense" in deliberately plain language?`,
              options: [
                `So that ordinary colonists, not just the educated, could follow and feel the argument.`,
                `Because he was not skilled enough to write in a fancy, educated style.`,
                `Because plain language was legally required for all colonial pamphlets.`,
                `So that British officials reading it would not understand his real meaning.`,
              ],
              correctIndex: 0,
              explanation: `Paine's purpose was to persuade ordinary people, so he used plain, forceful language any colonist could follow (logos) and feel (pathos). That accessibility helped it sell hugely and shift public opinion toward revolution. The distractors misread plainness as lack of skill, a legal rule, or a code, when it was a deliberate rhetorical choice.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `The lesson says revolutionary literature "caused" history rather than just describing it. What does that mean?`,
              options: [
                `Writers like Paine simply recorded events that were already fully decided.`,
                `Pamphlets and speeches actively changed public opinion and helped bring on the revolution.`,
                `The literature was written long after the revolution, looking back on it.`,
                `Only the actual battles, not any writing, had any real effect on history.`,
              ],
              correctIndex: 1,
              explanation: `Works like Common Sense and Henry's speech didn't just report a revolution already underway, they actively moved public opinion and helped cause it, proving the right words can change what a people is willing to do. The distractors treat the writing as mere recording, written afterward, or irrelevant beside battles.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Jonathan Edwards's sermon relied almost entirely on which appeal?`,
              options: [
                `Logos, through careful statistics about how many people were sinners.`,
                `Ethos, by listing his many impressive religious degrees and titles.`,
                `Pathos, through vivid, frightening images designed to make listeners feel danger.`,
                `None; the sermon was a calm, neutral description of religious doctrine.`,
              ],
              correctIndex: 2,
              explanation: `"Sinners in the Hands of an Angry God" is built overwhelmingly on pathos, vivid, terrifying imagery (like a spider held over a fire) designed to make listeners feel their peril and repent. Within the Puritan worldview, Edwards believed the danger was literally real. The distractors misassign it to logos, ethos, or call it neutral.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson stresses that early American literature had no single voice. What does the variety of voices reveal?`,
              options: [
                `That "America" was, from the very start, many different people, purposes, and worlds.`,
                `That colonial writers were simply disorganized and never agreed on anything.`,
                `That only Puritan religious writing should really count as American literature.`,
                `That early American writing was all basically the same once you look closely.`,
              ],
              correctIndex: 0,
              explanation: `The wild variety, Puritan sermons, an enslaved poet's classical verse, revolutionary pamphlets, reveals that "America" was many different people, purposes, and worlds even at its start, not a single unified voice. The distractors misread the variety as disorganization, privilege only Puritan writing, or deny the variety exists.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Reading a text only for its surface meaning, what it literally says, is enough to fully understand a work of early American literature.`,
              correctAnswer: false,
              explanation: `False, and this is the core skill the whole lesson builds. Surface reading, grasping what a text literally says or argues, is necessary but never sufficient for literature, because a poem, sermon, diary, or pamphlet is not only making a point, it is revealing a world: the beliefs, fears, hopes, and purposes of the person who wrote it and the time they lived in. Reading literature well means asking both what does this say AND what does this reveal. Anne Bradstreet's poem about her burned house is, on the surface, about grief and faith, but on the depth level it reveals a whole Puritan worldview and a human heart inside a strict religious world. Phillis Wheatley's poems, read only on the surface, are accomplished classical verse, but their real power is what they reveal and prove: that an enslaved African woman possessed undeniable genius, which was living evidence against slavery's central lie. Stopping at the surface would miss exactly what makes these texts literature, and what makes them windows into a nation being born. Two-level reading, surface and depth together, is the skill.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You find an old colonial diary describing, in plain factual sentences, surviving a brutal winter, with frequent thanks to God for small mercies. Using the lesson's two-level reading, what do you do with it?`,
              options: [
                `Dismiss it as boring, since it's just a factual list of weather and has no real meaning.`,
                `Read only the surface: note the cold, the food shortages, and move on to something else.`,
                `Read both levels: the surface (a hard winter survived), AND the depth, what the constant thanks to God reveals about a colonial worldview where survival was read as divine mercy and faith was woven into daily life.`,
                `Judge it a bad text because it lacks a clear argument with evidence and reasoning.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's central skill. Reading both levels: the surface tells you a hard winter was survived, but the depth, the constant thanks to God for small mercies, reveals a colonial worldview in which everyday survival was read as a sign of divine mercy and faith was woven into ordinary life. That depth is exactly what turns a plain diary into a window onto a vanished world. The distractors stop at the surface, dismiss the text, or wrongly judge literature by whether it makes a formal argument.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-twolevel`, category: `Surface and depth`, prompt: `The lesson taught reading on two levels, what a text says and what it reveals. Has anything you've read (or watched, or scrolled past) suddenly meant more when you asked what it revealed about the person who made it? What was it?` },
            { id: `reflect-wheatley`, category: `Existence as argument`, prompt: `Phillis Wheatley's very existence as a poet was an argument against a lie about who could create. Is there a way your own existence, your achievements, your voice, quietly argues against an assumption someone might make about you? Sit with that.` },
            { id: `reflect-words-power`, category: `Words that change things`, prompt: `Paine's pamphlet helped cause a revolution; Henry's seven words still echo. Do you believe words can still change what a whole people is willing to do? When have you seen words, online or in person, actually move people to act?` },
            { id: `reflect-heritage`, category: `Founding voices`, prompt: `Caro, Latin America has its own revolutionary writers and orators, voices like Bolívar who used words to help free nations. Think of a powerful voice from Colombian or Latin American independence. What did it reveal about the world it came from, read on two levels?` },
            { id: `reflect-faith-world`, category: `A world not your own`, prompt: `The Puritans read a storm or an illness as a message from God. That worldview is very far from most modern life. What did reading them on two levels help you understand about how differently people in another time genuinely saw reality?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "old colonial writing is irrelevant, it's hard to read and has nothing to do with my life." State that view fairly. Where does it have a point, and what would you say is genuinely worth the effort of reading these voices anyway?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `These voices are still readable, and reading on two levels works on everything, not just old texts. Two paths.`,
          familyActivity: {
            title: `Two-Level Reading Night`,
            duration: `35 minutes`,
            description: `Practice the lesson's core skill together on real texts. As a family, find one short, accessible early American piece online, the opening of Paine's "Common Sense," a short Wheatley poem, or a few lines of Henry's speech are all easy to find and brief. Read it aloud together. Then run the two-level reading as a team. First level, the surface: what is it literally saying or arguing? Put it in your own words. Second level, the depth: what does it reveal about the person who wrote it and the world they lived in, their purpose, their fears, their hopes, what they were up against? Then turn the skill on something modern: pick a current ad, song lyric, or viral post, and do the exact same two levels on it. What does it say, and what does it reveal about the world that made it? Doing both shows everyone that two-level reading isn't just for old documents, it's how you read everything more deeply, from a 1776 pamphlet to today's feed.`,
          },
          projectOption: {
            title: `Voices of Your World, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become an early American writer, and then a historian of your own time. Week 1: choose one colonial or revolutionary form, a Puritan-style diary entry, a Wheatley-style formal poem, or a Paine-style persuasive pamphlet, and write your own version about something real in your life or community. Match the form's purpose: a diary that records and reflects, a poem that proves something through its craft, or a pamphlet that argues plainly to persuade ordinary people. Week 2: write a short "historian's note" analyzing your own piece on two levels, exactly as you analyzed the real texts. What does your writing say on the surface? And what does it reveal, to a reader 250 years from now, about your world, your values, your fears and hopes, the pressures of your time? Writing in these old forms makes you feel why each one existed, and analyzing your own work the way we analyzed Wheatley and Paine shows you that you, too, are a voice that reveals a world, that someday someone might read on two levels.`,
            offerToParent: `Parent: opt your child into the voices-of-your-world project. Writing in an authentic colonial or revolutionary form (diary, formal poem, or persuasive pamphlet) and then analyzing their own work on two levels builds genre awareness, historical empathy, and analytical writing at once. The "historian's note" step is especially powerful, it teaches kids to see their own writing as a revealing artifact, which deepens both their reading and their self-understanding. It's rich, CCSS-aligned literary work with real creative ownership.`,
          },
          identityQuestion: `If you become someone who can read any text, a 1741 sermon, a 1776 pamphlet, or today's viral post, on two levels at once, hearing both what it says and what it reveals about the world that made it, what kind of reader and thinker does that make you, that someone who only ever reads the surface can never be?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads both what a text says and what it reveals.`,
            `A reader who can hear a whole vanished world inside a few old words.`,
            `Someone who knows that words, written simply, can change history.`,
          ],
          saveKey: `identity_responses_ela_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Four done, and you have learned to do something that turns reading into time travel: hearing a whole world inside a text. You learned that literature asks more than argument does, not just what does this say, but what does this reveal about the person and the time that made it, reading on two levels at once. You met the Puritans, whose serious, God-soaked writing, from Bradstreet's tender grief to Edwards's terrifying sermon, opens a window into a world that read life as a test of the soul. You met Phillis Wheatley, whose very existence as a published poet was living, undeniable evidence against slavery's lie. And you met Paine and Henry, who proved that plain, powerful words could not just describe a revolution but help cause one. Most of all, you saw that "America" was never a single voice, even at its birth, but many people, many purposes, many worlds, and that reading them on two levels lets you hear them all. Next: we move forward in time to the great flowering of American literature, the Romantics and Transcendentalists, writers who asked what it means to be an individual soul in nature and society. Onward, {name}. — Quill`,
          badge: `early-american-reader`,
          badgeName: `Early American Reader`,
          xpEarned: 75,
          competencies: [
            `Reads literature on two levels: the surface meaning and what the text reveals about its author and world`,
            `Understands the Puritan literary world through Anne Bradstreet's poetry and Jonathan Edwards's sermon`,
            `Explains why Phillis Wheatley's poetry functioned as living evidence against slavery, not only as art`,
            `Analyzes revolutionary persuasion in Paine's "Common Sense" and Patrick Henry's speech, including the appeals at work`,
            `Recognizes how form (sermon, diary, poem, pamphlet, speech) is part of a text's meaning and purpose`,
            `Sees that early American literature was many voices and worlds, not a single unified tradition`,
            `Grasps that revolutionary literature helped cause history rather than merely describing it`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: American Literature — Romanticism and Transcendentalism`,
            hook: `Emerson, Thoreau, and the writers who asked what it means to be a free individual soul. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L04 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz}`);
}
