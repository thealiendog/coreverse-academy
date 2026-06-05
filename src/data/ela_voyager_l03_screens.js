// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L03 — Seminal American Texts: Declaration and Constitution
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Informational Text, Seminal U.S. Documents
// Interaction: PERSPECTIVES (multi-viewpoint). Calibrated to Voyagers Spec v1.0.
// Paragraphs trimmed (~750-870 chars/section) for karaoke. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l03-v1";

const ELA_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-03`,
      title: `Seminal American Texts: Declaration and Constitution`,
      duration: 35,
      xpReward: 75,
      badge: `founding-reader`,
      badgeName: `Founding Reader`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, you have learned to read persuasion and to take an argument apart. Now we turn those tools on two of the most consequential documents ever written in America: the Declaration of Independence (1776) and the Constitution (1787). These are not dusty relics. They are arguments, carefully built, fiercely debated, and still shaping your life today. The Declaration is an argument for why a people may break away from a government. The Constitution is an argument about how power should be arranged so that it serves people without crushing them. Both were written by real people who disagreed sharply with each other, and both contain soaring ideals alongside painful contradictions, especially around slavery and who counted as "all men." Reading them well means honoring their genius and being honest about their failures at the same time. That double vision, admiration and honesty held together, is exactly what a strong reader of seminal texts must learn. Onward.`,
          headline: `Seminal American Texts: Declaration and Constitution`,
          subtitle: `Two arguments that still shape your life. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Declaration As An Argument`,
          paragraphs: [
              `The Declaration of Independence, drafted mainly by Thomas Jefferson in 1776, is built like an argument. It has a claim: the colonies have the right to become independent. It has a premise: that all men are created equal, with rights to life, liberty, and the pursuit of happiness. And it has evidence: a long list of grievances against King George III.`,
              `The reasoning is the bridge. The Declaration argues that governments exist to protect rights, that they rule by the consent of the governed, and that when a government repeatedly violates rights, the people may replace it. The grievances are the evidence that the king did exactly that.`,
              `Its power was logic plus language. Phrases like we hold these truths to be self-evident turned a political argument into a moral one, appealing to a shared sense of justice and dignity. That is ethos and pathos working alongside logos, and it shows that the greatest arguments braid all three appeals.`,
            ],
          image: `/voyager-assets/ela/l03-s1-declaration.webp`,
          imageCaption: `The Declaration of Independence, drafted mainly by Thomas Jefferson in 1776, is built exactly like an argument. CLAIM: the colonies have the right to become independent. PREMISE: all men are created equal, with rights to life, liberty, and the pursuit of happiness. EVIDENCE: a long list of specific grievances against King George III. REASONING (the bridge): governments exist to protect rights and rule by consent of the governed, so when a government repeatedly violates rights, the people may replace it, and the grievances prove the king did. Its power was logic plus language: "We hold these truths to be self-evident" turned a political argument into a moral one, appealing to shared justice and dignity. That is ethos and pathos alongside logos, the greatest arguments braid all three.`,
          vocab: [
            { word: `Declaration of Independence`,
              definition: `The 1776 document, drafted mainly by Jefferson, arguing that the American colonies had the right to become independent states.`,
              audioPrompt: `The Declaration of Independence, from 1776, is an argument for independence, {name}, drafted mainly by Thomas Jefferson. It claims the colonies have the right to break away, and backs it with a premise about equal rights and a long list of grievances against the king.` },
            { word: `self-evident`,
              definition: `Something treated as obviously true, needing no proof. The Declaration calls human equality and rights self-evident.`,
              audioPrompt: `Self-evident means treated as obviously true, needing no proof, {name}. When Jefferson wrote we hold these truths to be self-evident, he turned a political argument into a moral one, asking readers to accept human equality as a starting point too obvious to argue.` },
            { word: `consent of the governed`,
              definition: `The idea that a government's authority comes from the agreement of the people it governs, not from force or birthright.`,
              audioPrompt: `Consent of the governed means a government's power comes from the people agreeing to it, {name}, not from force or royal birth. It is the heart of the Declaration's reasoning: if rulers govern only by consent, a people may withdraw that consent.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Constitution As A Design`,
          paragraphs: [
              `If the Declaration argued why the colonies should be free, the Constitution of 1787 argued how a free people should be governed. It is less a fiery speech and more an engineering blueprint. Its central problem was hard: how do you build a government strong enough to function, but not so strong it becomes a tyranny?`,
              `The framers' answer was structure. They split power three ways: legislative (Congress makes laws), executive (the president carries them out), and judicial (the courts interpret them). Then they had each branch check the others, so no single part could dominate.`,
              `The Constitution is an argument made in architecture. Every clause is reasoning: if power corrupts, divide it; if a branch overreaches, let another restrain it. The core argument is clear: design a system where no ruler can gather too much power.`,
            ],
          image: `/voyager-assets/ela/l03-s2-constitution.webp`,
          imageCaption: `If the Declaration argued why the colonies should be free, the Constitution (1787) argued how a free people should be governed, less a fiery speech, more an engineering blueprint for arranging power. Its hard central problem: build a government strong enough to function, but not so strong it becomes the tyranny just fought off. The framers' answer was STRUCTURE, splitting power three ways, legislative (Congress makes laws), executive (the president carries them out), judicial (courts interpret them), with each branch checking the others, plus power split between nation and states. It is an argument made in architecture: if power corrupts, divide it; if a branch overreaches, let another restrain it. Full of compromises, some wise, some shameful, but the core argument is clear: design a system where no ruler can gather too much power.`,
          vocab: [
            { word: `Constitution`,
              definition: `The 1787 document that designed the U.S. government, arranging power to be strong enough to work but limited enough to protect liberty.`,
              audioPrompt: `The Constitution, from 1787, is the design for the United States government, {name}. It is less a speech and more a blueprint, solving one hard problem: how to make a government strong enough to function but not so strong it becomes a tyranny.` },
            { word: `separation of powers`,
              definition: `Dividing government into legislative, executive, and judicial branches so no single part can dominate.`,
              audioPrompt: `Separation of powers means dividing government into three branches, {name}: legislative, executive, and judicial. The framers split power on purpose, because they feared any single part gathering enough power to become a tyranny.` },
            { word: `checks and balances`,
              definition: `The system that lets each branch of government restrain the others, so no branch can overreach unchecked.`,
              audioPrompt: `Checks and balances let each branch restrain the others, {name}. If one branch overreaches, another can rein it in. The framers trusted balance over good rulers: design the system so no one can gather too much power, rather than hoping no one tries.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Debates Behind The Documents`,
          paragraphs: [
              `Neither document arrived by magic agreement. Both came from fierce debate. After the Constitution was drafted, the country split. The Federalists, including Madison, Hamilton, and Jay, argued for ratifying it and defended the new national government in essays called The Federalist Papers.`,
              `The Anti-Federalists, including Patrick Henry, feared that strength. They worried a powerful central government would swallow the states and threaten liberty, and they noted the original Constitution listed no protected rights. Both sides had real arguments.`,
              `The resolution shaped the document you live under. To win ratification, the Federalists agreed to add a Bill of Rights, the first ten amendments protecting free speech, religion, and a fair trial. So the Constitution is a product of its critics as much as its authors.`,
            ],
          image: `/voyager-assets/ela/l03-s3-debates.webp`,
          imageCaption: `Neither document arrived by magic agreement, and reading them honestly means understanding the disagreements. After the Constitution was drafted, the country split. FEDERALISTS, including James Madison, Alexander Hamilton, and John Jay, argued for ratifying it and defended a strong national government in The Federalist Papers. ANTI-FEDERALISTS, including Patrick Henry, feared that strength would swallow the states and threaten liberty, and noted the original Constitution had no explicit list of rights. The resolution shaped the document you live under: to win ratification, the Federalists agreed to add a Bill of Rights, the first ten amendments protecting speech, religion, and fair trials. So the Constitution is a product of its critics as much as its authors, rival thinkers hammering out a compromise none fully loved.`,
          vocab: [
            { word: `Federalists`,
              definition: `Supporters of ratifying the Constitution and its strong national government, including Madison, Hamilton, and Jay.`,
              audioPrompt: `The Federalists argued for ratifying the Constitution, {name}, defending a strong national government. Madison, Hamilton, and Jay made their case in The Federalist Papers, a famous set of essays still studied as political argument today.` },
            { word: `Anti-Federalists`,
              definition: `Critics who feared the Constitution gave the national government too much power and wanted explicit protections for rights.`,
              audioPrompt: `The Anti-Federalists feared the Constitution gave too much power to the central government, {name}, and worried it threatened the states and individual liberty. Their pressure is the reason the Bill of Rights was added.` },
            { word: `Bill of Rights`,
              definition: `The first ten amendments to the Constitution, added in 1791, spelling out specific protected rights like free speech and a fair trial.`,
              audioPrompt: `The Bill of Rights is the first ten amendments, {name}, added to win ratification. It spells out protections like free speech, religion, and a fair trial. It exists because the critics of the Constitution insisted on it.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Ideals And Contradictions`,
          paragraphs: [
              `Reading these texts honestly means holding two truths at once. The ideals are genuinely revolutionary: that all people are created equal, that rights come before government, that power must be limited. These ideas were radical in 1776 and have inspired freedom movements ever since.`,
              `And the same documents contain deep contradictions. When Jefferson wrote all men are created equal, millions were enslaved, including people Jefferson himself enslaved. The Constitution counted an enslaved person as three-fifths, protected the slave trade, and required the return of those who escaped. Women and Native Americans were also excluded.`,
              `These are the central moral failure at the founding, and an honest reader names them clearly. But the ideals proved more powerful than the founders' limits: abolitionists, suffragists, and civil rights leaders used the founders' own words to demand the equality they were denied. Reading well means seeing both the betrayal and the promise.`,
            ],
          image: `/voyager-assets/ela/l03-s4-contradictions.webp`,
          imageCaption: `Reading these texts honestly means holding two truths at once. The IDEALS are genuinely revolutionary: all people created equal, rights before government, power limited and accountable, radical in 1776 and inspiring freedom movements ever since. And yet the same documents contain deep CONTRADICTIONS. When Jefferson wrote "all men are created equal," millions were enslaved, including people Jefferson himself enslaved. The Constitution counted an enslaved person as three-fifths for representation, protected the slave trade, and required returning those who escaped. Women, Native Americans, and the property-less were also excluded. These are the central moral failure at the founding. The deeper point: the ideals proved more powerful than the founders' limits, abolitionists, suffragists, and civil rights leaders used "all men are created equal" to demand the equality the founders denied.`,
          vocab: [
            { word: `ideal`,
              definition: `A principle or standard worth striving for. The founding documents set out ideals like equality and liberty that outran their own era.`,
              audioPrompt: `An ideal is a principle worth striving for, {name}. The founding documents set out genuinely revolutionary ideals, equality, liberty, limited power, that were radical for their time and still inspire freedom movements around the world.` },
            { word: `contradiction`,
              definition: `A clash between what a text claims and what it actually does. The founders proclaimed equality while permitting slavery.`,
              audioPrompt: `A contradiction is a clash between what a text says and what it does, {name}. The founders wrote that all men are created equal while millions were enslaved. An honest reader names that contradiction clearly rather than excusing it.` },
            { word: `three-fifths clause`,
              definition: `The Constitution's provision counting each enslaved person as three-fifths of a person for representation, treating human beings as partial property.`,
              audioPrompt: `The three-fifths clause counted each enslaved person as three-fifths of a person for representation, {name}. It treated human beings as partial property, one of the clearest examples of the founding documents' deep moral contradictions.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
              `Pull it together. The Declaration is an argument for independence: a claim, a premise about equal rights, grievance-evidence, and reasoning about government by consent. The Constitution is an argument made in architecture, dividing and balancing power so no ruler can gather too much.`,
              `Both came from fierce debate, Federalists against Anti-Federalists, so real it produced the Bill of Rights. And both hold genius alongside deep contradiction. Honest reading holds admiration and criticism together, noticing that the documents' own ideals later armed the movements that fought their injustices.`,
              `Now the perspectives screen brings several real voices: a Federalist, an Anti-Federalist, an enslaved person, an abolitionist who wielded the founders' words, and a modern reader. Your job is not to pick a winner, but to understand why thoughtful people read the same documents so differently.`,
            ],
          image: `/voyager-assets/ela/l03-s5-before.webp`,
          imageCaption: `Threads together. The Declaration is an argument for independence: claim, premise of equal rights, grievance-evidence, reasoning about government by consent. The Constitution is an argument in architecture, dividing and balancing power so no ruler gathers too much. Both braid logos, ethos, pathos, and both still shape your life. Both came from fierce debate, Federalists against Anti-Federalists, which produced the Bill of Rights. And both hold genius alongside contradiction, ideals of equality written by people who denied it to millions, while those same ideals later armed the movements that fought the injustices. The perspectives screen brings real voices from and about the era. Your job is not to pick a winner but to understand why thoughtful people read the same documents so differently.`,
          vocab: [
            { word: `seminal text`,
              definition: `A foundational document so influential that later thought and law keep returning to it. The Declaration and Constitution are seminal American texts.`,
              audioPrompt: `A seminal text is a foundational document so influential that later thinking keeps returning to it, {name}. The Declaration and Constitution are seminal American texts, still argued over, still shaping law and life centuries later.` },
            { word: `ratification`,
              definition: `The formal approval that made the Constitution law. Winning it required the compromise that added the Bill of Rights.`,
              audioPrompt: `Ratification is the formal approval that turned the Constitution into law, {name}. Winning it was not guaranteed. The Federalists had to promise a Bill of Rights to satisfy the critics before enough states would agree.` },
            { word: `interpretation`,
              definition: `The act of reading a text to decide what it means. Thoughtful readers can interpret the same founding document very differently.`,
              audioPrompt: `Interpretation is reading a text to decide what it means, {name}. Thoughtful people interpret the same founding words very differently, which is why the perspectives screen shows you several defensible readings rather than one official answer.` },
          ],
        },

        {
          id: `l03-perspectives`,
          type: `perspectives`,
          headline: `How Different Voices Read The Founding`,
          intro: `{name}, the same two documents, read by very different people. Each perspective is defensible in its own terms. Your job is not to crown a winner, but to understand why thoughtful people reach such different readings, and to build your own honest view that holds both the genius and the failures.`,
          perspectives: [
            {
              id: `p1`,
              voice: `A Federalist (in the spirit of James Madison)`,
              era: `1787-1788`,
              stance: `The strong, balanced national government the Constitution designs is the best protection of liberty.`,
              quote: `"If men were angels, no government would be necessary."`,
              argument: `A loose collection of states is too weak to survive or to protect rights. The answer is a national government strong enough to govern, but split into branches that check one another so it can never become a tyranny. Liberty is safest not when we trust good rulers, but when the structure itself prevents any ruler from gathering too much power.`,
              evidence: `The failures of the weak Articles of Confederation; the careful separation of powers and checks and balances written into the Constitution; the argument laid out in The Federalist Papers.`,
              strengths_and_limits: `Strength: a clear, durable design that has limited concentrated power for centuries. Limit: a strong national government really could threaten states and individuals, which is exactly what the Anti-Federalists warned, and the missing Bill of Rights was a real gap.`,
            },
            {
              id: `p2`,
              voice: `An Anti-Federalist (in the spirit of Patrick Henry)`,
              era: `1787-1788`,
              stance: `This new government is too powerful and dangerously short on explicit protections for the people.`,
              quote: `"A powerful government, left unchecked by a written guarantee of rights, will not stay the people's servant."`,
              argument: `Liberty was just won from one distant, powerful government. Why build another? A strong central government will swallow the states and threaten ordinary people's freedom. Worst of all, the document lists no protected rights, no guarantee of free speech, religion, or fair trial, so what stops the new government from taking them?`,
              evidence: `The Constitution's original lack of a Bill of Rights; the recent experience of fighting a distant central power; the historical tendency of strong governments to expand at the people's expense.`,
              strengths_and_limits: `Strength: this pressure directly produced the Bill of Rights, the protections you rely on today. Limit: a government too weak to act has its own dangers, and the Anti-Federalists did not fully solve how a loose union could survive.`,
            },
            {
              id: `p3`,
              voice: `An enslaved person at the founding`,
              era: `1776-1790s`,
              stance: `The documents proclaim liberty and equality while holding me and millions of others as property.`,
              quote: `"You write that all are created equal, yet you own me. The words and the chains cannot both be true."`,
              argument: `Whatever genius these documents hold for free men, they were built on a foundation that denied my humanity. "All men are created equal" was written in a nation that enslaved people, counted us as three-fifths, protected the slave trade, and forced the return of those who fled. The promise was real for some and a cruel mockery for others.`,
              evidence: `The three-fifths clause; constitutional protection of the slave trade; the fugitive slave clause; the lived reality of millions held in bondage while the documents proclaimed liberty.`,
              strengths_and_limits: `Strength: names the central moral failure at the founding plainly, refusing to let admiration erase injustice. Limit: it is a verdict on the founders' betrayal, not a denial that the ideals themselves, once written, could later be turned against that very betrayal.`,
            },
            {
              id: `p4`,
              voice: `An abolitionist wielding the founders' words (in the spirit of Frederick Douglass)`,
              era: `1850s`,
              stance: `The founders' own ideals condemn the founders' own injustice, and we can use their words against their failures.`,
              quote: `"The principle is the lever. Hold the nation to the words it dared to write."`,
              argument: `Yes, the founders betrayed their own stated ideals by permitting slavery. But the ideals, once written down, became a weapon. If all men are truly created equal, then slavery is a violation of the nation's own founding claim. We do not need new principles; we need the nation to live up to the ones it already proclaimed. The Declaration's argument turns against the Declaration's own hypocrisy.`,
              evidence: `Abolitionists' strategic use of "all men are created equal"; the later use of founding language by suffragists and civil rights leaders; the way the documents' ideals outran their authors' limits.`,
              strengths_and_limits: `Strength: shows how a flawed text can carry ideals more just than its authors, fueling real liberation. Limit: holding the nation to its words took bloody, generations-long struggle, the words alone freed no one without that fight.`,
            },
            {
              id: `p5`,
              voice: `A modern student reading both honestly`,
              era: `Today`,
              stance: `Honor the genius and name the failures, both at once, and notice the documents are still being argued over.`,
              quote: `"I can admire the bridge they built and still see who was left off it."`,
              argument: `Reading these texts well today means refusing both blind worship and total dismissal. The structural genius, rights, consent, separated and balanced power, genuinely protects me. The contradictions, slavery, exclusion, were real and grievous. And the work is unfinished: these are living documents, still amended, still interpreted, still fought over. My job is to read them clearly enough to take part in that ongoing argument.`,
              evidence: `The amendment process that ended slavery and expanded the vote; ongoing constitutional debate in courts and politics; the documents' continuing power to both inspire and be challenged.`,
              strengths_and_limits: `Strength: holds admiration and criticism together, the honest double vision the lesson teaches. Limit: 'hold both' can become an excuse to avoid hard judgments, so it must lead to actual thinking, not comfortable fence-sitting.`,
            },
          ],
          synthesisPrompt: `After hearing all five: write your own honest reading of the founding documents. How do you hold their genius and their contradictions together at the same time? Which perspective challenged you most, and why? In 5-6 sentences.`,
          reflectionPrompt: `The abolitionists used the founders' own words, "all men are created equal," to fight injustice the founders allowed. What does it tell you that a document's ideals can be more just than the people who wrote it? Where do you see ideals today that we still haven't lived up to?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `The lesson says the Declaration of Independence is structured like an argument. What is its central claim?`,
              options: [
                `That the Constitution should replace the Articles of Confederation soon.`,
                `That the American colonies have the right to become independent states.`,
                `That all governments everywhere should be abolished entirely and at once.`,
                `That King George III was a basically fair and reasonable ruler overall.`,
              ],
              correctIndex: 1,
              explanation: `The Declaration's claim is that the colonies have the right to become independent. It supports this with a premise (all men are created equal, with rights), evidence (grievances against the king), and reasoning (governments rule by consent and may be replaced when they violate rights). The distractors name the wrong document, an extreme position the text never takes, or the opposite of its argument.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What core problem was the Constitution designed to solve?`,
              options: [
                `How to make a government strong enough to work but not so strong it becomes tyranny.`,
                `How to write the most beautiful and quotable sentences in all of political history.`,
                `How to permanently guarantee that only good and wise people would ever hold office.`,
                `How to abolish the states entirely and rule everything from one central capital city.`,
              ],
              correctIndex: 0,
              explanation: `The Constitution's central problem was building a government strong enough to function yet limited enough not to become the tyranny the colonists had fought. Its answer was structure: separated, balanced power. The distractors mistake it for a literary project, an impossible guarantee of good rulers, or the abolition of states, which is the opposite of its federal design.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "separation of powers"?`,
              options: [
                `Keeping the federal government completely separate from all foreign nations.`,
                `Dividing the country into separate states with their own laws and borders.`,
                `Dividing government into legislative, executive, and judicial branches so none can dominate.`,
                `Separating citizens into voters and non-voters based on how much property they own.`,
              ],
              correctIndex: 2,
              explanation: `Separation of powers divides government into three branches, legislative (makes laws), executive (carries them out), and judicial (interprets them), so no single part can dominate, with checks and balances letting each restrain the others. The distractors describe foreign policy, federalism, or voting restrictions, not the three-branch structure.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why did the Bill of Rights get added to the Constitution?`,
              options: [
                `The Federalists wanted to make the national government even more powerful.`,
                `Jefferson personally insisted on it before he would sign the Declaration.`,
                `It was part of the original Constitution from the very first day it was drafted.`,
                `Anti-Federalists demanded explicit protected rights as the price of ratification.`,
              ],
              correctIndex: 3,
              explanation: `The Bill of Rights exists because the Anti-Federalists feared a strong government with no listed protections, so the Federalists agreed to add the first ten amendments to win ratification. It came from the document's critics. The distractors invert the Federalists' aim, misattribute it to Jefferson and the Declaration, or wrongly claim it was original.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What was the disagreement between Federalists and Anti-Federalists really about?`,
              options: [
                `How much to trust a strong central government with power over the states and people.`,
                `Whether to declare independence from Great Britain in the first place.`,
                `Which founder should be honored with his face on the new nation's money.`,
                `Whether the documents should be written in English or in Latin.`,
              ],
              correctIndex: 0,
              explanation: `At its heart, the split was about how much to trust a strong national government: Federalists defended it as necessary and safely balanced; Anti-Federalists feared it would swallow the states and threaten liberty. Both had real arguments. The distractors name an earlier debate (independence) or trivial matters the dispute was not about.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `The lesson says to read the founding documents with "double vision." What does that mean?`,
              options: [
                `Reading each document twice in a row to make sure you didn't miss anything.`,
                `Holding admiration for the ideals and honesty about the failures at the same time.`,
                `Comparing the American documents to the founding documents of other countries.`,
                `Reading both the Declaration and the Constitution before forming any opinion.`,
              ],
              correctIndex: 1,
              explanation: `Double vision means honoring the documents' genuine genius (revolutionary ideals of equality, rights, limited power) while being honest about their failures (slavery, exclusion) at the same time, refusing both blind worship and total dismissal. The distractors reduce it to re-reading, cross-national comparison, or reading order.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What was the "three-fifths clause," and why does it matter for honest reading?`,
              options: [
                `A rule that laws needed three-fifths of Congress to pass, showing careful design.`,
                `A clause giving states three-fifths of federal tax money, showing fair sharing.`,
                `A promise to free three-fifths of enslaved people, showing gradual progress.`,
                `It counted each enslaved person as three-fifths of a person, revealing a deep moral contradiction.`,
              ],
              correctIndex: 3,
              explanation: `The three-fifths clause counted each enslaved person as three-fifths of a person for representation, treating human beings as partial property, one of the clearest contradictions between the documents' ideals and their reality. An honest reader names it plainly. The distractors invent unrelated meanings to soften or disguise it.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says the founders' ideals proved "more powerful than the founders' own limits." What's the evidence?`,
              options: [
                `Later movements used "all men are created equal" to demand the equality the founders had denied.`,
                `The founders eventually freed all the people they had personally enslaved.`,
                `No country has ever again written a document containing any contradictions.`,
                `The Constitution has somehow never once been changed or amended at all in any way since 1787.`,
              ],
              correctIndex: 0,
              explanation: `Abolitionists, suffragists, and civil rights leaders turned the founders' own words, "all men are created equal," against the founders' own injustices, demanding the equality the documents had denied. The ideals outran their authors. The distractors invent a false history of the founders freeing everyone, a world without contradictions, or an unamended Constitution.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because the founding documents permitted slavery and excluded many people, the honest conclusion is that their ideals were worthless and we should simply dismiss the texts entirely.`,
              correctAnswer: false,
              explanation: `False, and seeing why is the heart of reading seminal texts well. It is absolutely true and essential to name the documents' grievous failures: slavery, the three-fifths clause, the exclusion of women, Native Americans, and the property-less from the "we" the documents claimed to speak for. An honest reader never excuses or minimizes those failures. But "name the failures honestly" and "dismiss the texts entirely" are not the same conclusion, and the lesson's whole point is the double vision that holds admiration and criticism together. The ideals the founders wrote, equality, rights before government, limited and accountable power, were genuinely revolutionary, and they proved more powerful than the founders' own limits: abolitionists, suffragists, and civil rights leaders used those very words, "all men are created equal," as a lever to fight the injustices the founders allowed. To dismiss the texts as worthless would throw away the very ideals that armed the movements for justice. Honest reading means holding both truths at once, the betrayal and the promise, not collapsing into either blind worship or total dismissal.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A classmate says: "The founders were hypocrites who owned slaves, so the Declaration is just propaganda and means nothing today." Using the whole lesson, what's the most thoughtful response?`,
              options: [
                `Agree completely: since the founders were hypocrites, nothing they wrote has any value.`,
                `Disagree completely: the founders were great men, so we shouldn't dwell on slavery at all.`,
                `Both things are true at once: the hypocrisy was real and must be named, AND the ideals were real and powerful enough that abolitionists later used the founders' own words to fight that very hypocrisy, so the text still matters today.`,
                `Change the subject, because the founding documents are too old to be relevant to anyone now.`,
              ],
              correctIndex: 2,
              explanation: `This is the double vision the lesson builds. The most thoughtful response holds both truths: the hypocrisy was real and naming it is essential, AND the ideals were real and powerful, so powerful that abolitionists like Frederick Douglass, and later suffragists and civil rights leaders, used the founders' own words to demand the justice the founders denied. Dismissing the text as "just propaganda" throws away the ideals that fueled liberation; ignoring the slavery whitewashes a moral catastrophe. The distractors are the two failure modes (total dismissal, blind worship) plus avoidance.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-double`, category: `Holding two truths`, prompt: `The lesson asks you to admire the founding ideals AND name their failures at the same time. Which is harder for you, and why? Is there anything else in your life, a person, a country, a tradition, that you have to hold with that same double vision?` },
            { id: `reflect-design`, category: `Design over trust`, prompt: `The framers chose to limit power by design rather than by trusting good rulers. Do you think that's wise, or too cynical about people? Where in your own life do you rely on good design (rules, systems) versus trusting people to do right?` },
            { id: `reflect-ideals`, category: `Ideals outrunning their authors`, prompt: `The founders wrote ideals more just than they themselves lived up to. Have you ever set a standard for yourself you didn't fully meet? Is it still worth writing down ideals you can't yet reach? Why?` },
            { id: `reflect-heritage`, category: `Founding texts and you`, prompt: `Caro, Colombia has its own founding history and documents, its own independence and constitutions, with their own ideals and contradictions. What do you know of them, and how does reading the U.S. founding with double vision change how you'd read your own country's founding story?` },
            { id: `reflect-debate`, category: `Argument inside the text`, prompt: `These documents came from fierce disagreement, not single voices. Does knowing that make them stronger or weaker to you? When have you seen a better result come from real disagreement than from everyone agreeing too easily?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "judging the founders by today's standards is unfair, they were people of their time." State that view fairly and fully. Where does it have a point, and where does the existence of abolitionists at that very time complicate it?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `These documents still govern your daily life, and they're still being argued over. These bring them off the page. Two paths.`,
          familyActivity: {
            title: `Read The Real Words`,
            duration: `40 minutes`,
            description: `Go to the source. As a family, find the actual text of the Declaration of Independence's opening (the preamble, through "pursuit of Happiness") and the Constitution's Preamble ("We the People..."), both easily found online and short. Read them aloud together. Then do what this whole lesson trained you to do: take them apart. In the Declaration, find the claim, the premise about equality, and the reasoning about consent of the governed. In the Constitution's Preamble, list the goals "We the People" set out (justice, domestic tranquility, the common defense, the general welfare, liberty). Then discuss honestly: who was included in "We the People" in 1787, and who wasn't? Which ideals do you think the country has lived up to, and which are still unfinished? Reading the real words, instead of summaries, lets everyone feel both the genius of the language and the weight of who was left out, and it shows kids these are documents they're allowed to read, question, and one day help shape.`,
          },
          projectOption: {
            title: `Write Your Own Declaration, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Learn the structure of a great argument by building one. Week 1: choose something you believe should change, in your home, your school, or your community, and write your own "Declaration" modeled on the real one. Follow its structure exactly: state your claim (what should change), state your premise (the principle or right it rests on), list your evidence (specific grievances or reasons, like the Declaration's list against the king), and lay out your reasoning (why the evidence justifies the change). Use language deliberately, the way Jefferson did, to make it not just logical but moving. Week 2: revise it with a critic, like the founding documents got. Have a family member play the Anti-Federalist, pushing back on every weak point, then strengthen your argument and, if needed, add your own "Bill of Rights", protections or limits that answer the objections. You'll learn that a powerful founding argument isn't a single voice declaring truth; it's a careful structure, refined under real disagreement, which is exactly how the actual documents were made.`,
            offerToParent: `Parent: opt your child into the write-your-own-declaration project. Modeling a real argument on the Declaration's structure (claim, premise, evidence, reasoning) and then strengthening it against an "Anti-Federalist" critic teaches both argumentative writing and how foundational documents are actually forged through disagreement. It's rigorous CCSS-aligned writing practice wrapped in something personally meaningful, and the revision-under-critique step builds resilience and real argument skill.`,
          },
          identityQuestion: `If you become someone who can read a founding document and see all of it at once, the structure of its argument, the genius of its ideals, the gravity of its failures, and the ongoing fight to live up to it, what does that let you be as a citizen, that someone who can only either worship these texts or dismiss them can never be?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can admire the ideals and name the failures at the same time.`,
            `A reader who sees the argument inside a famous document, not just the famous words.`,
            `Someone who knows these documents are still being argued over, and I get a voice.`,
          ],
          saveKey: `identity_responses_ela_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Three done, and you read two of history's most important texts the way a real scholar does. You saw the Declaration of Independence as an argument, claim, premise of equal rights, grievance-evidence, and reasoning about government by consent, braiding all three appeals into words that changed the world. You saw the Constitution as an argument made in architecture, dividing and balancing power so that liberty is protected not by trusting good rulers, but by designing a system where no ruler can gather too much. You learned both came from fierce debate between Federalists and Anti-Federalists, a disagreement so real it gave you the Bill of Rights. And most important, you practiced double vision: honoring genuine genius while naming grievous failure, and seeing how the founders' own ideals later armed the movements that fought the founders' own injustices. That is how a thoughtful citizen reads the documents that govern them, with clear eyes, honest judgment, and a sense that the argument is still going, and that you are part of it. Next: we step back into the literature of that founding era, the colonial and revolutionary writers who shaped a new nation's voice. Onward, {name}. — Quill`,
          badge: `founding-reader`,
          badgeName: `Founding Reader`,
          xpEarned: 75,
          competencies: [
            `Reads the Declaration of Independence as a structured argument: claim, premise, evidence (grievances), and reasoning (consent of the governed)`,
            `Understands the Constitution as a deliberate design solving the problem of power: separation of powers and checks and balances`,
            `Explains the Federalist vs. Anti-Federalist debate and why it produced the Bill of Rights`,
            `Names the founding contradictions plainly, including the three-fifths clause and the exclusion of many from "We the People"`,
            `Practices double vision: holding the documents' genius and failures together without collapsing into worship or dismissal`,
            `Sees how the founders' ideals outran their limits, arming later movements for equality`,
            `Recognizes seminal texts as living, contested documents that citizens continue to interpret and shape`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: American Literature — Colonial and Revolutionary Period`,
            hook: `The writers who gave a new nation its voice, from Puritan sermons to revolutionary pamphlets. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L03 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
