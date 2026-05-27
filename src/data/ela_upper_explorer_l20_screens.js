// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L20 — Media Literacy: Analyzing Information Sources
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RI.4.7 / RI.5.7 — Interpret information from multiple media
//            CCSS SL.4.3 / SL.5.3 — Identify reasons and evidence in media
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — all media is constructed, key questions to ask,
//        persuasion techniques (bandwagon, etc), why media literacy
//        is the most important 21st-century skill
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-20`,
      title: `Media Literacy: Analyzing Information Sources`,
      duration: 18,
      xpReward: 100,
      badge: `media-literacy-master`,
      badgeName: `Media Literacy Master`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. This is our final lesson, and it might be the most important one of all. Every day, you see hundreds of videos, ads, news clips, posts, and articles. Most of them were MADE by someone with a goal. To sell you something, to change your mind, to keep you watching. Media literacy is the skill of seeing through all that. Today you'll learn how media gets constructed, what questions to ask, common manipulation tricks, and why this skill is the single most important 21st-century literacy. Let's go.`,
          headline: `Media Literacy`,
          subtitle: `How to read the constant flow of information you see every day`,
          visual: `/ue-assets/ela/l20-welcome.webp`,
        },

        // ── SECTION 1 — ALL MEDIA IS CONSTRUCTED ──────────────────────────────
        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `All Media Is CONSTRUCTED`,
          paragraphs: [
            `The first rule of media literacy: every piece of media was MADE by someone. A news article didn't just appear. A reporter wrote it, an editor approved it, and a publisher distributed it. A YouTube video was filmed, edited, and uploaded. A photo on social media was chosen out of dozens, maybe with filters applied. Every choice was a choice. Nothing in media is accidental.`,
            `That's not bad. It's just a fact. The same event can be filmed, written, or photographed in ten different ways, and each version shows you something different. Once you remember that media is CONSTRUCTED, you stop seeing it as a window onto reality. You see it as a window someone deliberately shaped. The skill is recognizing the shaping.`,
          ],
          image: `/ue-assets/ela/l20-s1-constructed.webp`,
          imageCaption: `Every piece of media was built. Every choice was a choice.`,
          vocab: [
            { word: `media`,
              definition: `Anything that shares information with an audience: news articles, videos, photos, podcasts, social media posts, ads, songs.`,
              audioPrompt: `Media is anything that shares information with an audience, {name}. News articles. YouTube videos. Photos on social media. Podcasts. Songs. Ads. TV shows. Movies. All of it is media. And all of it was made by someone with a goal. Once you start seeing media as constructed instead of just "the world," you stop being a passive consumer and start being an active reader.` },
            { word: `constructed`,
              definition: `Deliberately built or shaped. All media is constructed — every word, image, and edit was a deliberate choice made by someone with a goal.`,
              audioPrompt: `Constructed means deliberately built and shaped, {name}. A news article wasn't just "reported" — it was written, edited, headlined, and placed in a specific order. A photo was chosen from dozens and maybe filtered. A video was cut and scored with music. Every element of media was constructed by someone. Recognizing this is the first step of media literacy.` },
          ],
        },

        // ── SECTION 2 — KEY QUESTIONS TO ASK ──────────────────────────────────
        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Five Key Questions`,
          paragraphs: [
            `Strong media analysts ask the same five questions about every piece of media they see. WHO made this? WHY did they make it (sell, inform, persuade, entertain)? WHAT TECHNIQUES did they use to grab attention (music, colors, language)? WHAT'S MISSING (other viewpoints, context, evidence)? WHO BENEFITS if I believe this or share this?`,
            `Most people never ask any of these questions. They scroll, they react, they share. Asking even one of these per piece of media makes you instantly sharper than the average viewer. The most powerful question is usually the last one. WHO BENEFITS if I believe this? If the answer is "the people selling something," or "people with a political agenda," that's a clue. Real information doesn't usually depend on you believing it.`,
          ],
          image: `/ue-assets/ela/l20-s2-five-questions.webp`,
          imageCaption: `Who made it. Why. What techniques. What's missing. Who benefits.`,
          vocab: [
            { word: `media literacy`,
              definition: `The ability to analyze the videos, ads, articles, and posts you encounter every day. Recognizing how they were made, why, and what they're trying to do.`,
              audioPrompt: `Media literacy is the skill of analyzing media instead of just consuming it, {name}. Asking who made this, why, what techniques they used, and who benefits. People with media literacy can spot ads disguised as news, persuasion disguised as information, and emotional manipulation in real time. It's one of the highest-leverage skills you can build in the 21st century.` },
            { word: `critical thinking`,
              definition: `The habit of questioning, analyzing, and evaluating information rather than accepting it automatically. The core skill behind media literacy.`,
              audioPrompt: `Critical thinking is questioning and analyzing information rather than accepting it automatically, {name}. It's the habit of asking: who made this, why, what's the evidence, and who benefits? Critical thinking is what separates people who get pulled around by media from people who navigate it clearly. Media literacy is critical thinking applied to everything you see, read, and hear.` },
          ],
        },

        // ── SECTION 3 — PERSUASION TECHNIQUES ─────────────────────────────────
        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Common Persuasion Techniques to Spot`,
          paragraphs: [
            `Some persuasion techniques get used constantly in ads, news, and social media. BANDWAGON: "Everyone is doing this, you should too." EMOTIONAL APPEAL: using fear, anger, or excitement instead of facts. EXPERT or AUTHORITY: a famous person or doctor saying it, even if they're paid. TESTIMONIALS: real-person stories meant to feel relatable (often cherry-picked or fake). REPETITION: saying the same thing many times to make it feel true.`,
            `None of these techniques is automatically dishonest. Real news uses emotion. Real experts give endorsements. But knowing the techniques helps you spot when they're being used to manipulate you instead of inform you. When you notice a piece of media leaning heavily on emotion, bandwagon, or a paid celebrity, slow down. Ask the five questions. Don't trust your first reaction.`,
          ],
          image: `/ue-assets/ela/l20-s3-techniques.webp`,
          imageCaption: `Bandwagon. Emotional appeal. Authority. Testimonials. Repetition.`,
          vocab: [
            { word: `bandwagon`,
              definition: `A persuasion technique that says "everyone is doing this, so you should too." Plays on the desire to fit in.`,
              audioPrompt: `Bandwagon is a persuasion technique that says "everyone is doing this," {name}. "Join the millions who already switched." "All your friends use this." The idea is to make you feel left out if you don't go along. Real evidence doesn't depend on how many people believe something. But bandwagon works because humans naturally want to fit in. Once you see it, you'll spot it in ads, social media, and politics every day.` },
            { word: `emotional appeal`,
              definition: `A persuasion technique that uses fear, anger, excitement, or sadness to push you toward a decision before you have time to think critically.`,
              audioPrompt: `Emotional appeal is using feelings to persuade you instead of facts, {name}. Fear. Anger. Excitement. Sadness. These bypass your reasoning. When an ad shows a frightened child, or a headline says "URGENT DANGER," they're appealing to your emotions. That's not automatically dishonest. But when emotion is doing the persuading instead of evidence, slow down. Check the facts before you react.` },
          ],
        },

        // ── SECTION 4 — WHY MEDIA LITERACY IS CRITICAL ───────────────────────
        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Might Be the Most Important Literacy of All`,
          paragraphs: [
            `Two hundred years ago, the most important literacy was being able to READ. Today, you have way more reading than anyone in history has had access to. But most of what you read or watch was made by people with goals. Some good. Some bad. Some honest. Some not. The new literacy is the ability to separate the trustworthy from the manipulative, the honest from the dishonest, the real from the fake.`,
            `People who can do this make better decisions about products, vote on more accurate information, fall for fewer scams, and waste less time on content designed to upset them. People who can't do this get pulled around by whoever is best at manipulating their attention. Media literacy isn't just one skill among many. It might be THE skill that defines how well you navigate the rest of your life.`,
          ],
          image: `/ue-assets/ela/l20-s4-most-important.webp`,
          imageCaption: `The 21st-century literacy. Knowing what to trust.`,
          vocab: [
            { word: `manipulation`,
              definition: `Using techniques to influence what people think, feel, or do without giving them honest information to decide for themselves.`,
              audioPrompt: `Manipulation is using techniques to influence what people think or do without giving them honest information, {name}. Ads that pull on your fears. News that hides the other side. Social media that exaggerates anger to keep you watching. Not all persuasion is manipulation. But manipulation is persuasion that doesn't respect the audience's right to decide for themselves. Media literacy is what protects you.` },
            { word: `persuasion`,
              definition: `Attempting to influence what someone thinks, feels, or does. Persuasion uses evidence and argument. Manipulation uses deception or emotional exploitation.`,
              audioPrompt: `Persuasion is trying to change what someone thinks or does, {name}. All ads persuade. All opinion pieces persuade. Even this lesson is persuading you that media literacy matters. Persuasion isn't bad. The question is how. Persuasion built on honest evidence and sound argument is legitimate. Persuasion built on manipulation, deception, or exploiting emotions crosses a line. Media literacy helps you tell the difference.` },
          ],
        },

        // ── INTERACTIVE GAME — Media Investigation ────────────────────────────
        {
          id: `l20-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Final investigation, {name}. Four pieces of media. For each one, identify the MAIN persuasion technique being used. Is it BANDWAGON ("everyone's doing it"), EMOTIONAL APPEAL (fear, anger, excitement), or PAID EXPERT (a celebrity or "doctor" with a financial connection)?\n\nOne is sneakier than it looks. Trust your training.`,
          options: [
            { id: `bandwagon`,           label: `Bandwagon`,           color: `#A78BFA`, description: `"Everyone is doing this, you should too." Pressure to fit in.` },
            { id: `emotional-appeal`,    label: `Emotional Appeal`,    color: `#F87171`, description: `Uses fear, anger, or excitement to push you to a decision before you think.` },
            { id: `paid-expert`,         label: `Paid Expert`,         color: `#FBBF24`, description: `A celebrity or "doctor" with a financial reason to recommend the product.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Ad #1`,
              clues: [
                { text: `"Join the 4 million parents who already switched their kids to SuperBerry Vitamins."` },
                { text: `"Don't be the last one to know."` },
                { text: `Lots of statistics about how popular the product is.` },
              ],
              correctAnswer: `bandwagon`,
              realWorldExample: `Classic bandwagon ad copy.`,
              explanation: `"4 million parents already switched." "Don't be the last one to know." Pure bandwagon. Real evidence about the vitamin would be ingredients, studies, and safety data, not how many other people use it. Popularity isn't truth.`,
            },
            {
              id: `case-2`,
              caseTitle: `Ad #2`,
              clues: [
                { text: `Headline: "WHAT'S IN YOUR CHILD'S WATER? You won't believe what scientists found."` },
                { text: `Image of a frightened child.` },
                { text: `Ad copy uses words like "urgent," "danger," "act now," and "every minute counts."` },
              ],
              correctAnswer: `emotional-appeal`,
              realWorldExample: `Common pattern in fear-based marketing.`,
              explanation: `Pure emotional appeal. Fear is doing the persuading. The actual evidence (what scientists found, how serious the risk really is) takes a back seat to the urgency. The product probably solves a real problem, but the ad is selling fear, not facts.`,
            },
            {
              id: `case-3`,
              caseTitle: `Ad #3`,
              clues: [
                { text: `"Dr. James Bell, M.D., recommends MemoryBoost for anyone over 50."` },
                { text: `Small text at the bottom: "Dr. Bell is a paid spokesperson for MemoryBoost."` },
                { text: `No mention of any actual studies showing the product works.` },
              ],
              correctAnswer: `paid-expert`,
              realWorldExample: `Common in supplement advertising.`,
              explanation: `Paid expert. The "Dr." title and recommendation are designed to feel credible, but Dr. Bell is paid by the company. His endorsement isn't independent. Real credibility would be studies in real medical journals, not a paid pitch. Always read the fine print.`,
            },
            {
              id: `case-4`,
              caseTitle: `Ad #4 — The Sneakiest One`,
              clues: [
                { text: `A "news article" titled "Why everyone is switching to this new study app."` },
                { text: `Quotes "users" saying things like "I'd be lost without it."` },
                { text: `At the bottom in tiny letters: "Sponsored content by StudyMaster App."` },
              ],
              correctAnswer: `bandwagon`,
              realWorldExample: `Combo move: bandwagon + sponsored content disguised as news.`,
              explanation: `Tricky because it has multiple techniques at once. The headline uses BANDWAGON ("everyone is switching"). The "user quotes" are TESTIMONIALS that may or may not be real. And the whole thing is sponsored content (an ad pretending to be news). The main pull, though, is bandwagon. The fear of being left behind is what most readers will respond to. The lesson: real ads layer multiple techniques. Once you can see them all, you can see right through the ad.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Final quiz, {name}. Let's see what stuck.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What does it mean that "all media is CONSTRUCTED"?`,
              options: [
                `Most media is fake`,
                `Every piece of media was made by someone with a goal — every choice was a choice`,
                `Media buildings are constructed`,
                `Only old media is constructed`,
              ],
              correctIndex: 1,
              explanation: `Every article, video, ad, and post was made by a person or team with a goal. Realizing this is the foundation of media literacy. Nothing in media is accidental.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `What's the FIRST question to ask about any piece of media?`,
              options: [
                `How long is it?`,
                `WHO made this, and WHY?`,
                `Is it old?`,
                `How many people shared it?`,
              ],
              correctIndex: 1,
              explanation: `"Who made this and why?" is the master question. Once you know who made something and what their goal was, you know how to read the rest of it.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `An ad shouts "Join the 5 million parents already using ProductX!" This is which persuasion technique?`,
              options: [
                `Emotional appeal`,
                `Bandwagon — pressure to fit in with what everyone else is doing`,
                `Paid expert`,
                `Repetition`,
              ],
              correctIndex: 1,
              explanation: `Bandwagon. The pressure to be left behind is the persuasion. Real evidence about the product would be data, not "everyone else is doing it." Popularity isn't truth.` },

            { id: `l20-q4`, format: `multiple-choice`,
              question: `MEDIA LITERACY is defined as:`,
              options: [
                `Being able to read books`,
                `The ability to analyze the videos, ads, articles, and posts you encounter every day, recognizing how they were made, why, and what they're trying to do`,
                `Only watching the news`,
                `Memorizing media history`,
              ],
              correctIndex: 1,
              explanation: `Media literacy is active reading of all the media you see daily. It's the modern, expanded version of "literacy." Reading the world, not just words.` },

            { id: `l20-q5`, format: `true-false`,
              question: `True or false: Media literacy means distrusting everything you read.`,
              correctAnswer: false,
              explanation: `False. Media literacy isn't about distrust. It's about ANALYSIS. Some media is trustworthy. Some isn't. The skill is being able to tell the difference instead of automatically trusting OR automatically rejecting.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `Which persuasion technique uses fear, anger, or excitement instead of facts?`,
              options: [
                `Bandwagon`,
                `Emotional appeal`,
                `Paid expert`,
                `Repetition`,
              ],
              correctIndex: 1,
              explanation: `Emotional appeal pushes you to feel before you think. Fear, anger, and excitement bypass your reasoning. Once you notice an ad or article is leaning heavily on emotion, slow down and check the actual evidence.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `Why is "WHO BENEFITS if I believe this?" such a powerful question?`,
              options: [
                `It's easy`,
                `Because the people who benefit from your belief often shaped the content to make you believe it. Spotting the beneficiary tells you a lot about the truth.`,
                `Teachers like the question`,
                `It's optional`,
              ],
              correctIndex: 1,
              explanation: `If the people who benefit from your belief made the content, they had every reason to shape it favorably. Spotting the beneficiary is one of the fastest ways to evaluate trustworthiness.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `Why might MEDIA LITERACY be considered the most important 21st-century skill?`,
              options: [
                `Because phones are popular`,
                `Because almost everything you'll see in your life is constructed media — and the people who can analyze it make better decisions about products, votes, scams, and time`,
                `Because the internet is new`,
                `Because it's easy`,
              ],
              correctIndex: 1,
              explanation: `You'll see more constructed media in your life than any humans before you. The ones who can analyze it move through life with more clarity, make better decisions, and don't get pulled around by whoever's best at manipulation. The stakes are real.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Final reflection, {name}. Pick ONE question and actually answer it. Your response gets saved.`,
          prompts: [
            { id: `r1`, text: `What's the last piece of media you saw that made you feel strong emotions? Looking back, was it designed to make you feel that way?` },
            { id: `r2`, text: `Out of the five key questions (who, why, techniques, what's missing, who benefits), which one feels most useful to YOU?` },
            { id: `r3`, text: `Have you ever shared something online and later realized it wasn't quite true? What happened?` },
            { id: `r4`, text: `Of all 20 lessons in this subject, which skill do you think will be most useful to you in real life? Why?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `This is where everything connects. Every lesson you've done this year (close reading, evaluating sources, spotting bias, paraphrasing, comparing texts) feeds into media literacy. The skills aren't separate. They're the same set of habits, applied to different kinds of input. Be curious. Ask who made this. Ask why. Check what's missing. Check who benefits. Cross-check before you share. These habits will protect you from misinformation for the rest of your life, no matter what kind of media gets invented next.`,
          familyAdventure: `Final Family Adventure: Five Questions Night. As a family, watch a 5-minute YouTube video, news clip, or ad. Then go through the five key questions out loud together. Who made this? Why? What techniques? What's missing? Who benefits? Notice how different the experience is when you analyze instead of just consume. Do this once a week for a month, and watching media will never feel the same again.`,
          creativePrompt: {
            intro: `Pick one piece of media you've seen recently. Run the full media-literacy analysis on it.`,
            floor: `Write at least 5 sentences. Name the media. Answer the five key questions: who made it, why, what techniques, what's missing, who benefits.`,
            stretch: `Write 8 to 10 sentences. Cover all five questions in depth, identify the persuasion techniques used, and judge whether you'd trust this source.`,
            open: `Write as much as you want. Build a complete media-literacy report that demonstrates everything you've learned in this lesson AND across the year. Connect it to other skills: close reading, source evaluation, bias detection, cross-checking.`,
            frames: [
              `The media I'm analyzing is ___.`,
              `Who made it: ___. Why: ___.`,
              `Techniques used: ___.`,
              `What's missing: ___.`,
              `Who benefits if I believe this: ___. So I'd trust it ___ much.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}, you did it. Twenty lessons completed. You can now close-read a passage, evaluate sources, analyze bias, paraphrase honestly, compare multiple texts, write arguments and explanations and narratives, fix grammar, decode unfamiliar words, give a presentation, AND analyze any piece of media that comes your way. That's a real toolbox. The same toolbox that scholars, lawyers, journalists, and serious thinkers use every day. Carry it with you. You're not just a reader anymore. You're someone who understands HOW the world of words and media works. Proud of you. — Quill.`,
          badge: `media-literacy-master`,
          badgeName: `Media Literacy Master`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default ELA_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L20 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
