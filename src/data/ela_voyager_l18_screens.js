// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L18 — Digital Literacy: Evaluating Online Information
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Evaluating Sources, Information Literacy
// Interaction: SOURCE EVALUATION. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l18-v1";

const ELA_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-18`,
      title: `Digital Literacy: Evaluating Online Information`,
      duration: 35,
      xpReward: 75,
      badge: `truth-navigator`,
      badgeName: `Truth Navigator`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, you live in the first era of human history where anyone, anywhere, can publish anything to the whole world in seconds, for free, with no editor, no fact-checker, no gatekeeper. That's a miracle and a minefield. The miracle: the sum of human knowledge is at your fingertips. The minefield: so is an ocean of error, spin, scams, and outright lies, often dressed up to look exactly like the truth. Digital literacy is the survival skill of our time: the ability to navigate that flood and tell what's trustworthy from what's not. It's not about being cynical and believing nothing; that's just as useless as believing everything. It's about being a smart, calm navigator who knows how to check. You'll learn the questions that reveal a source's trustworthiness, who made this and why, where's the evidence, what do other sources say, and the specific tricks that fool people online, from clickbait and fake experts to doctored images and information that's true but stripped of context. Most powerfully, you'll learn lateral reading, the single move professional fact-checkers use that ordinary people almost never do. By the end, you'll be far harder to fool than most adults. Onward.`,
          headline: `Digital Literacy: Evaluating Online Information`,
          subtitle: `Navigating a world where anyone can publish anything. A Source Evaluation.`,
          visual: `/voyager-assets/ela/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Miracle And The Minefield`,
          paragraphs: [
            `You live in the first era where anyone can publish anything to the whole world in seconds, free, with no editor, no fact-checker, no gatekeeper standing between a claim and your eyes. For most of history, getting information to many people was hard and filtered. Now the filter is gone. That single change is both a miracle and a minefield.`,
            `The miracle is staggering: the sum of human knowledge, much of it, sits in your pocket, searchable in seconds. The minefield is just as real: that same open flood carries error, spin, scams, propaganda, and outright lies, often dressed up to look exactly like the truth. A lie can now travel the planet before the truth has its shoes on.`,
            `So digital literacy, the ability to navigate that flood and tell trustworthy from untrustworthy, is the survival skill of our time. It isn't about cynically believing nothing, which is as useless as believing everything; both leave you helpless. It's about becoming a calm, skilled navigator who knows how to check, and who is much harder to fool than most people.`,
          ],
          image: `/voyager-assets/ela/l18-s1-minefield.webp`,
          imageCaption: `You live in the first era where ANYONE can publish ANYTHING to the world in seconds, free, with no editor or fact-checker between a claim and your eyes. For most of history, reaching many people was hard and filtered; now the filter is gone, a miracle and a minefield at once. The MIRACLE: the sum of human knowledge sits in your pocket, searchable in seconds. The MINEFIELD: that same flood carries error, spin, scams, propaganda, and lies, often dressed to look exactly like truth, a lie can circle the planet before truth has its shoes on. DIGITAL LITERACY, telling trustworthy from untrustworthy, is the survival skill of our time. It isn't cynically believing nothing (as useless as believing everything); it's being a calm navigator who knows how to check.`,
          vocab: [
            { word: `digital literacy`,
              definition: `The ability to navigate the flood of online information and tell what's trustworthy from what's not. The survival skill of our time.`,
              audioPrompt: `Digital literacy, {name}, is the ability to navigate the flood of online information and tell trustworthy from untrustworthy. In an age where anyone can publish anything, it's one of the most important survival skills there is.` },
            { word: `no gatekeeper`,
              definition: `The defining fact of the internet: anyone can publish to the world instantly, with no editor or fact-checker filtering it first.`,
              audioPrompt: `No gatekeeper, {name}, is the defining fact of the internet: anyone can publish anything to the whole world in seconds, with no editor or fact-checker in between. That's both a miracle and a minefield.` },
            { word: `healthy skepticism`,
              definition: `A calm, checking mindset, neither believing everything nor cynically believing nothing, both of which leave you helpless.`,
              audioPrompt: `Healthy skepticism, {name}, is a calm, checking mindset. It's not believing everything you see, but it's also not cynically believing nothing, both of those leave you helpless. It's knowing how to check before you trust.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Core Questions`,
          paragraphs: [
            `Evaluating any source starts with a few questions that cut through the noise. First, who made this, and why? Is there a real, identifiable author or organization with relevant expertise, and what's their motive, to inform, to sell, to persuade, to provoke? A site with something to gain, or that hides who's behind it, earns extra caution.`,
            `Second, where's the evidence? Strong information cites real sources you could check, names studies, data, and experts. Weak information makes big claims with vague backing ("studies show," "experts say") or none at all. And ask: is it current? On many topics, an out-of-date page can be as misleading as a wrong one.`,
            `Third, what do other sources say? This is the big one. A claim that appears only on one site, or only on sites that all clearly share an agenda, is a red flag. When many independent, credible sources agree, confidence rises. When a dramatic claim appears nowhere reputable, that absence is itself powerful evidence that something is off.`,
          ],
          image: `/voyager-assets/ela/l18-s2-questions.webp`,
          imageCaption: `Evaluating any source starts with questions that cut through noise. First, WHO made this, and WHY? Is there a real, identifiable author or organization with relevant expertise, and what's their motive, to inform, sell, persuade, or provoke? A site that hides who's behind it earns extra caution. Second, WHERE'S THE EVIDENCE? Strong information cites real sources you could check; weak information makes big claims with vague backing ("studies show," "experts say") or none. Also ask: is it CURRENT? Third, and biggest, WHAT DO OTHER SOURCES SAY? A claim appearing only on one site, or only on agenda-sharing sites, is a red flag. When many independent, credible sources agree, confidence rises; when a dramatic claim appears nowhere reputable, that absence is itself evidence.`,
          vocab: [
            { word: `author and motive`,
              definition: `Who created a source and why. Knowing the author's expertise and purpose (to inform, sell, persuade) is the first check.`,
              audioPrompt: `Author and motive, {name}, are the first thing to check: who made this, and why? A real, expert author who wants to inform is different from an anonymous site that wants to sell you something or provoke a reaction.` },
            { word: `verifiable evidence`,
              definition: `Real, checkable sources, named studies, data, and experts, rather than vague claims like "studies show" with no citation.`,
              audioPrompt: `Verifiable evidence, {name}, means real sources you could actually check, named studies, data, and experts, not vague phrases like studies show or experts say with nothing behind them. Strong information shows its work.` },
            { word: `corroboration`,
              definition: `Checking whether many independent, credible sources agree. A claim found on only one site, or only agenda-driven ones, is a red flag.`,
              audioPrompt: `Corroboration, {name}, means checking whether many independent, credible sources agree on a claim. If something dramatic appears on only one site, or nowhere reputable at all, that absence is itself a powerful warning sign.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Tricks That Fool People`,
          paragraphs: [
            `Misinformation uses predictable tricks, and naming them is half the defense. Clickbait uses shocking or emotional headlines to get the click, often with little real substance behind them. If a headline makes you furious or amazed, that's exactly when to slow down, strong emotion is the tool used to switch off your careful thinking.`,
            `Other tricks hide the source of authority. A "fake expert" may have an impressive-sounding title that's irrelevant or invented. A claim may be backed by a study that doesn't say what's claimed, or by no study at all. And images lie too: photos can be edited, and real photos can be ripped from another time or place and presented as something they're not.`,
            `The sneakiest trick is information that's technically true but stripped of context, a real statistic with the crucial comparison removed, a real quote with the surrounding words that change its meaning cut away. This fools careful people precisely because nothing in it is false. The defense isn't just spotting lies; it's asking what's missing, and whether the framing is fair.`,
          ],
          image: `/voyager-assets/ela/l18-s3-tricks.webp`,
          imageCaption: `Misinformation uses predictable tricks, and naming them is half the defense. CLICKBAIT uses shocking or emotional headlines to get the click, with little substance, if a headline makes you furious or amazed, slow down, strong emotion is the tool used to switch off careful thinking. Other tricks hide authority: a FAKE EXPERT has an impressive-sounding but irrelevant or invented title; a claim may cite a study that doesn't say what's claimed, or none at all. Images lie too, photos get edited, or real photos are ripped from another time and place. The sneakiest trick is information that's TRUE BUT STRIPPED OF CONTEXT, a real statistic with the key comparison removed, a real quote with surrounding words cut. It fools careful people because nothing is false. The defense: ask what's missing, and whether the framing is fair.`,
          vocab: [
            { word: `clickbait`,
              definition: `Shocking or emotional headlines designed to get a click, often with little real substance behind them.`,
              audioPrompt: `Clickbait, {name}, is a shocking or emotional headline built to get your click, often with little real substance behind it. When a headline makes you furious or amazed, that's exactly the moment to slow down and check.` },
            { word: `fake expert`,
              definition: `Someone given an impressive-sounding title that is actually irrelevant or invented, to lend false authority to a claim.`,
              audioPrompt: `A fake expert, {name}, is someone with an impressive-sounding title that's actually irrelevant or even invented, used to make a claim seem authoritative. Always check whether an expert's expertise actually fits the topic.` },
            { word: `missing context`,
              definition: `The sneakiest trick: information that's technically true but stripped of the comparison or surrounding words that change its meaning.`,
              audioPrompt: `Missing context, {name}, is the sneakiest trick: a real fact or quote stripped of the context that changes its meaning. Nothing in it is false, which is why it fools careful people. Always ask what's been left out.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Lateral Reading: The Pro Move`,
          paragraphs: [
            `Here's the single most powerful move, the one professional fact-checkers use and ordinary people almost never do: lateral reading. When you land on an unfamiliar source, the instinct is to read down the page, judging it by how it looks. Fact-checkers do the opposite. They leave the page almost immediately.`,
            `Instead of staying put, they open new tabs and search for what other, trustworthy sources say about this source and this claim. They read across the web, laterally, before trusting what's in front of them. A slick, professional-looking site tells you nothing; what others independently say about it tells you almost everything. Appearance is not credibility.`,
            `This flips the usual habit. Don't ask "does this page seem convincing?", a skilled liar can make any page look convincing. Ask "what does the wider web of credible sources say about this?" Lateral reading takes a couple of extra minutes and makes you dramatically harder to fool. It's the closest thing there is to a superpower for the digital age.`,
          ],
          image: `/voyager-assets/ela/l18-s4-lateral.webp`,
          imageCaption: `Here's the single most powerful move, used by professional fact-checkers and almost no one else: LATERAL READING. When you land on an unfamiliar source, the instinct is to read DOWN the page, judging it by how it looks. Fact-checkers do the opposite, they leave the page almost immediately. Instead of staying put, they open new tabs and search for what OTHER trustworthy sources say about this source and this claim, reading ACROSS the web, laterally, before trusting it. A slick, professional-looking site tells you nothing; what others independently say about it tells you almost everything. Appearance is not credibility. Don't ask "does this page seem convincing?" (a skilled liar makes any page convincing); ask "what does the wider web of credible sources say?" It's a superpower for the digital age.`,
          vocab: [
            { word: `lateral reading`,
              definition: `Leaving an unfamiliar page to check what other credible sources say about it, instead of judging it by how it looks. The pro fact-checker move.`,
              audioPrompt: `Lateral reading, {name}, is the pro fact-checker's move: instead of reading down an unfamiliar page, you leave it and search what other credible sources say about it. You read across the web before trusting what's in front of you.` },
            { word: `appearance is not credibility`,
              definition: `The key insight: a slick, professional-looking site proves nothing. A skilled liar can make any page look convincing.`,
              audioPrompt: `Appearance is not credibility, {name}. A slick, professional-looking website tells you nothing about whether it's trustworthy, a skilled liar can make any page look convincing. That's why you check laterally, not by looks.` },
            { word: `reading down vs. across`,
              definition: `The amateur stays on the page reading down it; the pro reads across the web, checking other sources before trusting.`,
              audioPrompt: `Reading down versus across, {name}, is the key difference: amateurs stay on a page reading down it, judging by looks, while pros read across the web, opening new tabs to see what trustworthy sources say first.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together. We live in an age with no gatekeeper, a miracle of access and a minefield of misinformation, so digital literacy, telling trustworthy from untrustworthy, is the survival skill of our time. It means healthy skepticism: not believing everything, but not cynically believing nothing either, just knowing how to check.`,
            `The core questions cut through noise: who made this and why, where's the verifiable evidence, and above all, what do other independent, credible sources say? You learned the tricks, clickbait, fake experts, doctored images, and the sneaky one, true-but-stripped-of-context, and the pro move that beats them all: lateral reading, leaving the page to check what the wider web says, because appearance is never credibility.`,
            `Now the source-evaluation screen drops you into a real research moment: five online sources on one question, ranging from trustworthy to deceptive. Evaluate each using the questions and tricks you've learned, and think like a fact-checker: which would survive lateral reading, which are designed to fool you, and how do you tell? Onward.`,
          ],
          image: `/voyager-assets/ela/l18-s5-before.webp`,
          imageCaption: `Threads together. We live in an age with NO GATEKEEPER, a miracle of access and a minefield of misinformation, so DIGITAL LITERACY is the survival skill of our time. It means healthy skepticism: not believing everything, but not cynically believing nothing, just knowing how to check. The CORE QUESTIONS cut through noise: who made this and why, where's the verifiable evidence, and above all, what do other independent credible sources say? You learned the TRICKS, clickbait, fake experts, doctored images, and the sneaky true-but-stripped-of-context, and the pro move that beats them: LATERAL READING, leaving the page to check the wider web, because appearance is never credibility. The source-evaluation screen drops you into a real research moment with five online sources.`,
          vocab: [
            { word: `misinformation`,
              definition: `False or misleading information, whether spread by mistake or on purpose. Digital literacy is the defense against it.`,
              audioPrompt: `Misinformation, {name}, is false or misleading information, whether spread by accident or on purpose. It travels fast online, dressed to look like truth, and digital literacy is your main defense against being fooled by it.` },
            { word: `echo chamber`,
              definition: `An online space where you only see views that agree with you, making one-sided claims feel more confirmed than they are.`,
              audioPrompt: `An echo chamber, {name}, is an online space where you only encounter views that already agree with you. It can make a one-sided or false claim feel widely confirmed, which is why checking independent sources matters so much.` },
            { word: `fact-checker`,
              definition: `Someone whose job is verifying claims. Their signature method is lateral reading, checking sources against the wider web.`,
              audioPrompt: `A fact-checker, {name}, is someone whose job is to verify whether claims are true. Their signature method is lateral reading: leaving a page to see what the wider web of credible sources says, rather than trusting how a page looks.` },
          ],
        },

        {
          id: `l18-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources In The Wild`,
          intro: `{name}, you're researching whether a new "miracle" supplement really boosts focus, the kind of question the internet floods with noise. Here are five sources you'd actually find. Evaluate each with the core questions, spot the tricks, and think like a fact-checker: which survive lateral reading, and which are built to fool you?`,
          sources: [
            {
              id: `s1`,
              tier: `Strong`,
              title: `A government health agency's evidence page`,
              type: `Official / expert`,
              context: `A page from a national health agency reviewing the supplement, written by named medical experts, citing multiple peer-reviewed studies, last updated this year.`,
              quote: `"Current evidence does not support claims that this supplement improves focus in healthy adults."`,
              questions: [
                `What signals of credibility does this source show?`,
                `Why might its cautious, undramatic conclusion actually be a good sign?`,
                `How would lateral reading treat this source?`,
              ],
              evaluation: `This source shows strong credibility signals across every core question: an identifiable, expert author (named medical experts at a recognized health agency), verifiable evidence (multiple cited peer-reviewed studies you could check), and a recent update date, so it's current. Its cautious, undramatic conclusion, that the evidence doesn't support the focus claims, is actually a good sign: real science is usually careful and qualified, while scams promise dramatic miracles. Honest sources tell you what the evidence does and doesn't show, even when that's boring. Under lateral reading, this source holds up beautifully: search the agency and you'll find it widely recognized as legitimate, and search the claim and you'll find other independent, credible sources reaching the same careful conclusion. This is the kind of source you weight heavily, and it usefully reframes the flashier sources: when a product page promises a miracle this agency can't find, that gap is itself revealing.`,
            },
            {
              id: `s2`,
              tier: `Weak`,
              title: `The supplement seller's own website`,
              type: `Commercial`,
              context: `A glossy, professional-looking site selling the supplement, headlined "Unlock Limitless Focus," featuring glowing testimonials and a "doctor recommended" badge with no doctor named.`,
              quote: `"Thousands report life-changing focus, doctors recommend it!"`,
              questions: [
                `What's the obvious motive problem here?`,
                `Why doesn't the slick, professional design make it trustworthy?`,
                `What's wrong with "doctors recommend it" and the testimonials?`,
              ],
              evaluation: `The obvious problem is motive: the site sells the product, so it has every incentive to make it look miraculous, which means its claims need heavy skepticism. The slick, professional design proves nothing, this is exactly the "appearance is not credibility" trap, since a skilled marketer can make any page look polished and authoritative; lateral reading exists precisely because looks fool people. "Doctors recommend it" with no doctor named is a fake-expert and vague-authority red flag: real, checkable expertise names names and cites studies, while this names no one and offers no verifiable evidence. The glowing testimonials are anecdotes, hand-picked, unverifiable, and self-serving, not evidence; they're emotional persuasion, not data. A fact-checker wouldn't trust this for its claims at all, but could use it as an example of how the product is marketed, then check the actual evidence elsewhere, where, as the health agency showed, the miracle claims don't hold up.`,
            },
            {
              id: `s3`,
              tier: `Weak`,
              title: `A viral "shocking truth" article`,
              type: `Clickbait / sensational`,
              context: `A widely-shared article headlined "The SHOCKING Focus Secret THEY Don't Want You To Know!", with urgent language, no named author, and a single uncited statistic.`,
              quote: `"Studies PROVE a 300% focus boost, but the truth is being hidden from you!"`,
              questions: [
                `What clickbait and emotional-manipulation signals appear?`,
                `Why is "studies PROVE" with no citation a red flag?`,
                `What does the "THEY don't want you to know" framing do?`,
              ],
              evaluation: `This source is dense with red flags. The headline is pure clickbait, all-caps shock words ("SHOCKING," "SECRET") engineered to trigger amazement and curiosity so you click before thinking, which is exactly when strong emotion is being used to switch off your careful judgment. "Studies PROVE a 300% boost" is a classic vague-authority and fake-evidence move: it invokes "studies" with no citation, no named researcher, nothing you could verify, and dramatic, precise-sounding numbers ("300%") with no source are a hallmark of fabrication. The "THEY don't want you to know" framing is a conspiracy hook: it flatters you as one of the enlightened few and preemptively explains away the absence of credible support (of course real sources disagree, "they're" hiding the truth!), which is a trick to make you distrust exactly the legitimate sources you should be checking. There's no identifiable author and no verifiable evidence. A fact-checker would dismiss this for its claims instantly, and lateral reading would confirm the "300% boost" appears nowhere reputable, which is itself the answer.`,
            },
            {
              id: `s4`,
              tier: `Moderate`,
              title: `A reputable newspaper's health article`,
              type: `Journalism`,
              context: `A balanced article from a respected newspaper, by a named health reporter, summarizing the research, quoting two independent scientists, and noting where evidence is still unclear.`,
              quote: `"Experts say the early findings are mixed, and larger studies are still needed."`,
              questions: [
                `What makes this a fairly credible source?`,
                `Why is reporting that the evidence is "mixed" a sign of quality?`,
                `How does it compare with the seller's site and the viral article?`,
              ],
              evaluation: `This is fairly credible: it has a named author (a health reporter) at a respected outlet, it cites real, named, independent scientists rather than vague "experts," and it does the honest thing of noting where the evidence is still unclear. Reporting that findings are "mixed" and that larger studies are needed is a sign of quality, not weakness: it matches how real science actually works (careful, provisional, qualified) and shows the reporter isn't overselling a clean answer for clicks. Compared with the seller's site and the viral article, the contrast is stark: where they offered miracle promises, fake authority, and manufactured certainty, this offers named sources, acknowledged uncertainty, and no product to sell. Under lateral reading it holds up well, the outlet is widely regarded as legitimate, and its careful summary aligns with the health agency's cautious conclusion. It's a strong source to synthesize with the agency page, journalism translating and contextualizing the expert evidence, while honestly flagging what remains unknown.`,
            },
            {
              id: `s5`,
              tier: `Moderate`,
              title: `A real study, but quoted with missing context`,
              type: `True-but-misleading`,
              context: `A blog cites a genuine, real peer-reviewed study to claim the supplement "boosts focus", but the study was tiny, tested only sleep-deprived adults, and the authors themselves called the result preliminary.`,
              quote: `"A peer-reviewed study found the supplement improved focus, it's science!"`,
              questions: [
                `Everything cited is technically real, so what's the trick?`,
                `Why is "it's peer-reviewed" not enough on its own?`,
                `How would you catch this kind of distortion?`,
              ],
              evaluation: `This is the sneakiest source of the five, because nothing in it is literally false, the study is real and genuinely peer-reviewed, which is exactly the "true but stripped of context" trick. The deception lives in what's left out: the study was tiny (so its result is statistically shaky), it tested only sleep-deprived adults (so it says little about focus in healthy people), and the authors themselves called it preliminary (so even they don't claim it's settled). Strip those facts away and "a peer-reviewed study found it improves focus" sounds authoritative while badly misrepresenting what the science actually shows. "It's peer-reviewed" isn't enough on its own: peer review means the study was vetted, not that it's large, definitive, or applicable to you, and a single small study is never the last word. You'd catch this distortion by reading laterally and digging into the actual study, checking its size, its subjects, and the authors' own stated caveats, and by noticing that the careful health agency and the balanced news article, looking at the whole body of evidence, reached a far more cautious conclusion. The defense against true-but-misleading isn't spotting a lie; it's always asking what's missing.`,
            },
          ],
          synthesisPrompt: `Now think like a fact-checker: after these five sources, what would you actually conclude about the supplement, and how confident are you? Which sources earned your trust and why, which were built to fool you, and how did lateral reading and "what's missing?" help you decide? In 5-6 sentences.`,
          reflectionPrompt: `The lesson says strong emotion, outrage, amazement, is the tool used to switch off careful thinking online. When has a headline or post made you feel a big emotion and want to share or believe it instantly? Looking back, was it trying to bypass your judgment?`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the lesson mean by calling the internet a "miracle and a minefield"?`,
              options: [
                `The internet is mostly broken and rarely works the way it should.`,
                `It gives access to vast knowledge, but also carries error, scams, and lies dressed as truth.`,
                `Only certified experts are ever allowed to access the most valuable and useful parts of it.`,
                `It was a miracle in the past but is now entirely a minefield of lies.`,
              ],
              correctIndex: 1,
              explanation: `The internet is a miracle (vast human knowledge at your fingertips) and a minefield (error, spin, scams, and lies, often dressed to look like truth, with no gatekeeper). The distractors call it broken, gatekept by experts, or purely negative.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `According to the lesson, what is healthy digital literacy NOT?`,
              options: [
                `Asking who made a source and why.`,
                `Checking what other credible sources say.`,
                `Cynically believing nothing you ever read online.`,
                `Looking for verifiable, checkable evidence.`,
              ],
              correctIndex: 2,
              explanation: `Digital literacy is not cynically believing nothing, which is as useless as believing everything; it's calmly knowing how to check. The other options are exactly the good practices the lesson teaches.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `The lesson says one core question matters above the others. Which is "the big one"?`,
              options: [
                `What do other independent, credible sources say about the claim?`,
                `How professional and polished does the website look?`,
                `How strongly does the article make you feel?`,
                `How many total words are on the page?`,
              ],
              correctIndex: 0,
              explanation: `The big question is what other independent, credible sources say: agreement across many raises confidence, while a dramatic claim appearing nowhere reputable is a red flag. The distractors rely on appearance, emotion, or length, none of which indicate truth.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does the lesson warn that strong emotion is a danger sign online?`,
              options: [
                `Because emotional content is always completely false.`,
                `Because feeling anything at all means a source is untrustworthy.`,
                `Because strong emotion is used as a tool to switch off your careful thinking.`,
                `Because real news is never about anything emotional.`,
              ],
              correctIndex: 2,
              explanation: `Strong emotion (outrage, amazement) is the tool used to switch off careful thinking and get you to click or share before you check, so a headline that makes you furious or amazed is the moment to slow down. The distractors overclaim that emotional content is always false or that news is never emotional.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "lateral reading"?`,
              options: [
                `Reading an article from the bottom up instead of top down.`,
                `Reading several articles on the same site one after another.`,
                `Reading only the headline and skipping the rest of the page.`,
                `Leaving an unfamiliar page to check what other credible sources say about it.`,
              ],
              correctIndex: 3,
              explanation: `Lateral reading is the pro fact-checker move: leaving the page almost immediately to search what other credible sources say about this source and claim, rather than judging by how the page looks. The distractors describe reading order, same-site reading, or skimming.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the lesson say "appearance is not credibility"?`,
              options: [
                `Because a skilled liar can make any page look polished and convincing.`,
                `Because credible sources are always ugly and poorly designed.`,
                `Because professional design legally guarantees a site is honest.`,
                `Because you should only trust pages with no design at all.`,
              ],
              correctIndex: 0,
              explanation: `Appearance isn't credibility because a skilled liar can make any page look slick and authoritative, which is exactly why fact-checkers read laterally instead of judging by looks. The distractors wrongly equate design with honesty (or dishonesty) rather than checking elsewhere.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the "true but stripped of context" trick, and why is it especially sneaky?`,
              options: [
                `It's such an obvious and clumsy lie that virtually anyone could spot it right away without checking.`,
                `It's a real fact or quote with crucial context removed, so it fools even careful people because nothing in it is false.`,
                `It's when a source has too much context and becomes confusing.`,
                `It's an entirely harmless and accidental mistake that never actually ends up misleading anyone at all in practice.`,
              ],
              correctIndex: 1,
              explanation: `The trick presents real information (a true statistic or quote) with the crucial comparison or surrounding words removed, so it misleads even careful readers precisely because nothing in it is literally false; the defense is asking what's missing. The distractors call it obvious, blame too much context, or deny it misleads.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `A blog claims a supplement works, citing a real, peer-reviewed study, but the study was tiny, tested only sleep-deprived adults, and the authors called it preliminary. What's the lesson's takeaway?`,
              options: [
                `"Peer-reviewed" means the claim is proven, so the blog is right.`,
                `The study itself must be completely fake and fabricated simply because the blog has a motive.`,
                `One small, preliminary study isn't the last word; check its size, subjects, and the authors' own caveats.`,
                `Peer-reviewed studies should always be ignored entirely.`,
              ],
              correctIndex: 2,
              explanation: `"Peer-reviewed" means vetted, not large, definitive, or applicable to everyone; a single small, preliminary study (here, only sleep-deprived adults) isn't the last word, so you check its size, subjects, and the authors' own caveats. The distractors treat peer review as proof, assume the study is fake, or dismiss all studies.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If a website looks slick, professional, and authoritative, that's strong evidence that the information on it is trustworthy.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important and counterintuitive lessons in all of digital literacy. How a page looks tells you almost nothing about whether it's true, because appearance is not credibility. A skilled liar, scammer, or propagandist can make any page look polished, professional, and authoritative, clean design, confident headlines, official-sounding language, even fake "doctor recommended" badges, are all cheap and easy to fake. Judging a source by how convincing the page itself looks is exactly the trap that fools most people, because our instinct is to "read down" the page and let its appearance persuade us. Professional fact-checkers do the opposite, and it's their single most powerful move: lateral reading. Instead of staying on the unfamiliar page, they leave it almost immediately, open new tabs, and search for what other independent, credible sources say about this source and this claim. A slick site tells you nothing; what the wider web of trustworthy sources independently says about it tells you almost everything. So the right question is never "does this page seem convincing?" (any well-made page seems convincing) but "what do credible sources elsewhere say about this?" Lateral reading takes only a couple of extra minutes and makes you dramatically harder to fool, the closest thing there is to a superpower for the digital age. Trusting a source because it looks impressive is precisely the habit this lesson is built to break.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You see a furious viral post: "BREAKING: officials caught HIDING this proof!" with a real photo and one shocking statistic, no author, no links. It makes you angry and you almost share it. Using the lesson, what's the smartest move?`,
              options: [
                `Share it immediately; the strong emotion proves it must be important and true.`,
                `Believe it because there's a real photo, since photos can't be faked or misused.`,
                `Dismiss everything online forever, since nothing can ever be trusted at all.`,
                `Notice the danger signs (manufactured outrage, no author, uncited stat, conspiracy framing, a photo that could be old or edited), then read laterally: leave the post and check what credible, independent sources say about the claim before believing or sharing anything.`,
              ],
              correctIndex: 3,
              explanation: `This applies the whole lesson. The post is built to bypass judgment: manufactured outrage (emotion to switch off careful thinking), no identifiable author, an uncited statistic, conspiracy framing ("HIDING this"), and a photo that could be edited or ripped from another context. The smart move is lateral reading, leaving the page to check what credible independent sources say before believing or sharing. The distractors mistake emotion for truth, trust a photo blindly, or collapse into useless cynicism.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-emotion`, category: `When emotion spikes`, prompt: `Strong emotion is the tool used to switch off careful thinking. When has a headline or post made you instantly angry or amazed and want to share it? Looking back, was it informing you, or trying to bypass your judgment? What would slowing down have shown?` },
            { id: `reflect-lateral`, category: `Leaving the page`, prompt: `Lateral reading means checking what others say before trusting a source. Be honest, how often do you judge something online by how it looks or feels, versus actually checking it elsewhere? What would change if lateral reading became a habit?` },
            { id: `reflect-missing`, category: `What's left out`, prompt: `The sneakiest lies are technically true but stripped of context. When have you later learned that a "fact" you believed was missing crucial context, a comparison, a caveat, the other half of the story? How did finding the missing piece change things?` },
            { id: `reflect-heritage`, category: `Truth for your family`, prompt: `Caro, you're raising kids and building a platform for conscious families in an age of misinformation. What digital-literacy habits do you most want your children, and the families you serve, to carry? How do you teach checking without teaching cynicism?` },
            { id: `reflect-echo`, category: `Your own echo chamber`, prompt: `An echo chamber shows you only views you already agree with, making them feel more confirmed than they are. Where might you be in one? When did you last genuinely seek out a credible source that disagreed with you, and what did it feel like?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this checking is exhausting and pointless, you can never really know what's true online, so just trust your gut." State that view as strongly as you can. Where does it have a real point, and where does the lesson show it leads somewhere dangerous?` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Digital literacy is built by practicing the checks until they're automatic. These make fact-checking a habit. Two paths.`,
          familyActivity: {
            title: `Fact-Check Night`,
            duration: `One evening`,
            description: `Turn your family into a team of fact-checkers for an evening, and make it a game. Each person finds one surprising claim online, a viral post, a "shocking" headline, a health or product claim, a forwarded message, and brings it to the group. Then, together, run each one through the core questions out loud: Who made this, and why? Where's the evidence, is it real and checkable, or vague? And the big one: what do other credible sources say? Practice the pro move on every claim, lateral reading: instead of arguing about whether the page looks convincing, actually open new tabs and search what trustworthy, independent sources say about that source and that claim. Hunt for the tricks too, is there clickbait emotion, a fake or unnamed expert, a photo that might be old or edited, or a true fact stripped of its context? Give each claim a verdict together: trustworthy, misleading, or false, and explain why. To make it stick, notice your own emotions: which claims made you want to instantly believe or share, and were those the ones using emotion to bypass your thinking? The goal isn't to become cynical and trust nothing; it's to make checking a calm, normal, even fun reflex, so that everyone in the family becomes genuinely hard to fool, which is one of the most valuable protections you can give each other in this age.`,
          },
          projectOption: {
            title: `The Misinformation Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a real investigator of online truth. Week 1, the deep dive: pick one widely-shared claim you're genuinely curious about (a viral health tip, a "shocking statistic," a hotly forwarded story). Investigate it like a professional fact-checker. Trace it to its origin: who first said it, and why? Read laterally, open many tabs and gather what credible, independent sources say about both the claim and the original source. Check the evidence: are there real, named studies or experts, and do they actually say what's claimed? Hunt for tricks: clickbait, fake experts, doctored or misused images, and especially the "true but stripped of context" move. Write up your findings like an investigation: the claim, where it came from, what credible sources say, which tricks (if any) it used, and your evidence-based verdict, true, false, or misleading-with-missing-context. Week 2, teach it: turn your investigation into something that helps others, a short guide, a slideshow, a one-page "how I checked this" explainer, or a clear post for family and friends, that not only gives your verdict but shows the checking process so others can do it themselves. Teaching the method is the deepest way to own it. You'll come away having done real, rigorous fact-checking, and having built a tool that makes the people around you harder to fool too.`,
            offerToParent: `Parent: opt your child into the Misinformation Investigation project. Tracing a viral claim to its source, reading laterally across credible sources, identifying manipulation tactics, and reaching an evidence-based verdict develops information literacy that the standards prioritize and that life in a digital age absolutely demands. Turning the investigation into a teaching tool deepens mastery and spreads the skill. It's rigorous, real-world, CCSS-aligned work that builds one of the single most protective abilities your child can have: the power to tell truth from manipulation online, calmly and without cynicism.`,
          },
          identityQuestion: `If you become someone who can calmly navigate the flood, ask who made this and why, check what credible sources say, spot the tricks, and read laterally instead of trusting how a page looks, what kind of person does that make you in an age of misinformation, that someone who believes whatever feels true, or cynically believes nothing at all, can never quite become?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who checks what credible sources say before believing or sharing.`,
            `A calm navigator who isn't fooled by how a page looks.`,
            `Someone who can spot the tricks and still avoid cynicism.`,
          ],
          saveKey: `identity_responses_ela_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighteen done, and you've gained one of the most important survival skills of our age. You learned that we live in the first era with no gatekeeper, where anyone can publish anything, a miracle of access and a minefield of misinformation, and that digital literacy is how you navigate it. You learned it isn't cynicism (believing nothing) or naivety (believing everything), but calm, skilled checking. You learned the core questions: who made this and why, where's the verifiable evidence, and above all, what do other independent, credible sources say? You learned the tricks that fool people, clickbait and emotional manipulation, fake experts, doctored images, and the sneakiest one, information that's true but stripped of context. And most powerfully, you learned lateral reading, the professional fact-checker's move of leaving the page to check the wider web, because appearance is never credibility. You are now genuinely harder to fool than most adults. Next, our final ELA lesson: media analysis, going beyond text to read the messages, framing, and persuasion in the images, videos, and ads that surround you every day. Onward, {name}. — Quill`,
          badge: `truth-navigator`,
          badgeName: `Truth Navigator`,
          xpEarned: 75,
          competencies: [
            `Understands the "no gatekeeper" internet as both a miracle of access and a minefield of misinformation`,
            `Practices healthy skepticism, neither believing everything nor cynically believing nothing`,
            `Applies the core questions: author and motive, verifiable evidence, and corroboration across sources`,
            `Recognizes common tricks: clickbait, emotional manipulation, fake experts, and doctored images`,
            `Catches the "true but stripped of context" distortion by asking what's missing`,
            `Uses lateral reading to check sources against the wider web rather than judging by appearance`,
            `Evaluates real online sources of varying credibility like a professional fact-checker`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: Media Analysis`,
            hook: `Reading the messages and persuasion hidden in images, video, and ads. A Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L18 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
