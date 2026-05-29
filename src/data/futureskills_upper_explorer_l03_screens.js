// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L03 — Spotting What's Real (Critical Thinking)
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : misinformation research, source evaluation, media literacy.
//            Builds on L01 (sharp thinking) and L02 (good questions) by
//            applying them to real-world information.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (trustworthy / questionable / misleading)
//            Trick case = source that LOOKS authoritative but is actually
//            a single anonymous social media account with no evidence.
// SCOPE: misinformation is everywhere, signs of trustworthy vs. questionable
//        vs. misleading sources, how to evaluate before believing/sharing,
//        the cost of sharing things that aren't true
// VOICE: Byte = sharp, slightly mischievous, treats truth-detection like
//        the best puzzle game
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-03`,
      title: `Spotting What's Real`,
      duration: 18,
      xpReward: 75,
      badge: `truth-tracker`,
      badgeName: `Truth Tracker`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we put your sharp thinking and good questions to work on one of the most important challenges of modern life: SPOTTING WHAT'S REAL in a world full of information. You're growing up with more information at your fingertips than any kids in human history. Some of it is GREAT (real research, careful journalism, trustworthy experts). Some of it is QUESTIONABLE (rumors, half-true claims, people making stuff up). And some of it is DESIGNED TO DECEIVE you (deliberate misinformation, fake news, manipulated content). The kids who learn to tell these apart have a superpower. Today, you start building yours. Sharpen those fox ears, let's hunt for truth.`,
          headline: `Spotting What's Real`,
          subtitle: `Critical thinking in a world of infinite information`,
          visual: `/ue-assets/fs/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Misinformation Is Everywhere`,
          paragraphs: [
            `Here's an honest truth about the world you're growing up in: A LOT of information you'll encounter isn't true. This isn't to scare you, it's to prepare you. Researchers studying misinformation have found that false claims spread FASTER than true ones online. Fake news travels about SIX TIMES faster than real news through social media. Why? Because false claims are often more DRAMATIC, more EMOTIONAL, and more SHAREABLE than careful, accurate ones. People share them before checking. Algorithms amplify them because they get clicks. Within hours, millions of people believe something that isn't true.`,
            `Here's what makes it harder. Some misinformation is just mistakes, people getting things wrong. But some is DELIBERATE, designed to make you believe something false on purpose. Reasons people create misinformation include: making money (clicks pay), spreading their political view, scamming people, or just causing trouble. AI tools now make it easy to create fake photos, videos, and articles that look real. This means YOUR THINKING skills, sharp thinking (L01) and good questions (L02), are more important than they've ever been. Foxes have a saying: in a world full of false trails, the smart hunter follows the real one. Today you learn how to tell the difference.`,
          ],
          image: `/ue-assets/fs/l03-s1-misinfo.webp`,
          imageCaption: `Misinformation spreads 6x faster than truth. Dramatic, emotional, shareable. Sharp thinking is the defense.`,
          vocab: [
            { word: `misinformation`,
              definition: `False or misleading information that spreads through media, internet, and conversation. Sometimes accidental, sometimes deliberate (designed to deceive for money, politics, or scams). Research shows false claims spread 6x faster than truth online. Defense: sharp thinking + good questions.`,
              audioPrompt: `Misinformation is false or misleading information that spreads through media and internet, {name}. Sometimes it's accidental, people just getting things wrong. Sometimes it's deliberate, designed to deceive on purpose for money, political views, or scams. Researchers studying misinformation found that false claims spread about six times faster than true ones online. Why? Because false claims are often more dramatic, more emotional, and more shareable than careful accurate ones. AI tools now make fake content easier to create. Your sharp thinking skills are more important than ever.` },
            { word: `disinformation`,
              definition: `Deliberately false information created to deceive people on purpose — unlike misinformation, which can spread by accident. People create it to make money, push political views, scam others, or cause trouble. AI tools now make fake images, videos, and articles easier than ever to produce. The defense: sharp thinking, good questions, and the 4-step truth check.`,
              audioPrompt: `Disinformation is deliberately false information created to deceive people on purpose, {name}. Unlike misinformation, which can spread by accident, disinformation is INTENTIONAL. People create it to make money, push political views, scam others, or cause trouble. AI tools now make high-quality fake images, videos, and articles easier than ever to produce. Disinformation is designed to look like real news or expert information. The defense is the same as for all false information: sharp thinking, good questions, and the 4-step truth check before believing or sharing anything.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Kinds of Sources`,
          paragraphs: [
            `Once you learn to look for signs, you'll start seeing three patterns. TRUSTWORTHY sources have these qualities: they cite EVIDENCE (studies, data, named experts, not just opinions). Multiple sources CONFIRM the same finding. The author and publisher are CLEAR (you can find out who they are). Claims are CAREFUL (saying "research suggests" not "definitely proven forever"). They UPDATE or correct when wrong. They have a track record over time. Examples: peer-reviewed scientific journals, established journalism (Reuters, AP, BBC, New York Times), .gov and .edu websites, real experts in the field. Trustworthy doesn't mean perfect, but it means they're trying to be accurate.`,
            `QUESTIONABLE sources have warning signs: they make DRAMATIC claims without evidence. They're the ONLY ONE saying it (no other sources confirm). The author is anonymous or vague. They say "definitely," "they don't want you to know," or "shocking truth." They don't update when proven wrong. They might be real people, just careless or biased. Treat with extra slow thinking. MISLEADING sources are deliberately designed to fool you. They use FAKE AUTHORITY (made-up experts, fake credentials, official-looking logos). They selectively edit information to support a false claim. They might steal or fabricate images. They often profit from your belief (clicks, sales, manipulation). With these, slow down hard. Check multiple OTHER sources. Don't share. The cost of spreading misleading content is real — it hurts other people, and it makes the world dumber.`,
          ],
          image: `/ue-assets/fs/l03-s2-three-sources.webp`,
          imageCaption: `Trustworthy: evidence + multiple + clear + careful. Questionable: dramatic + alone + vague. Misleading: fake.`,
          vocab: [
            { word: `trustworthy source`,
              definition: `A source that cites real evidence (studies, named experts), is confirmed by multiple other sources, has clear authorship, makes careful (not dramatic) claims, and updates when wrong. Not perfect, but trying to be accurate. Examples: peer-reviewed journals, established journalism, .gov/.edu sites, real experts.`,
              audioPrompt: `A trustworthy source has these qualities, {name}. It cites evidence like studies, data, and named experts, not just opinions. Multiple other sources confirm the same finding. The author and publisher are clear — you can find out who they are. Claims are careful, saying research suggests rather than definitely proven. They update when wrong. They have a track record over time. Examples include peer-reviewed journals, established journalism like Reuters and BBC, .gov and .edu sites, and real experts. Trustworthy doesn't mean perfect, but they're trying to be accurate.` },
            { word: `questionable source`,
              definition: `A source that makes dramatic claims without real evidence. Warning signs: only one source saying it, no other confirmation, anonymous or vague author, words like "definitely" or "shocking truth." May be careless or biased. When you spot these signs, slow down, don't believe yet, cross-check with trustworthy sources before deciding.`,
              audioPrompt: `A questionable source makes dramatic claims without real evidence, {name}. Warning signs: only one source is saying it, no other reliable confirmation. The author is anonymous or vague. Words like definitely, they don't want you to know, or shocking truth appear. It might be a real person who is just careless or biased. When you spot these signs, slow way down. Don't believe yet, and definitely don't share. Cross-check with trustworthy sources before deciding. The fact that something is stated dramatically doesn't make it true. Often it's the opposite.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The 4-Step Truth Check`,
          paragraphs: [
            `Researchers and journalists use a simple practice to evaluate claims. You can use the same one. Call it the 4-STEP TRUTH CHECK. Step 1: WHO is making this claim? Look at the author, the publisher, the platform. Are they known to be reliable? Are they anonymous? Do they have something to gain (money, attention, a political win) by you believing this? Real experts and trustworthy outlets are usually clear about who they are. Step 2: WHAT is the actual evidence? Are there studies, data, named experts? Or is it just one person's opinion presented as fact? Real claims show their evidence; weak claims hide behind "everyone knows" or "trust me."`,
            `Step 3: WHO ELSE is saying this? If a claim is true, multiple reliable sources will report similar findings. If only ONE source is saying it, especially in a dramatic way, that's a warning sign. Cross-check with at least 2-3 trusted sources before believing. Step 4: WHAT MIGHT BE WRONG with this claim? Apply your sharp thinking. Could the data be cherry-picked? Could the expert be biased? Could there be another explanation? Could it be true sometimes but not always? Even good information has limits. This isn't about being paranoid, it's about being CAREFUL. Sharp thinkers run claims through this check before believing OR sharing. It takes a minute. It's worth a minute.`,
          ],
          image: `/ue-assets/fs/l03-s3-four-step.webp`,
          imageCaption: `Who claims it. What's the evidence. Who else confirms. What might be wrong.`,
          vocab: [
            { word: `4-step truth check`,
              definition: `A practical method for evaluating claims. (1) WHO is making this claim? (2) WHAT is the actual evidence? (3) WHO ELSE is saying it? (4) WHAT MIGHT BE WRONG? Used by journalists and researchers. Takes about a minute. Run it on important claims before believing or sharing.`,
              audioPrompt: `The 4-step truth check is a practical method for evaluating claims, {name}. Step 1: who is making this claim? Are they known to be reliable? Do they have something to gain? Step 2: what is the actual evidence? Studies, data, named experts — or just opinion? Step 3: who else is saying this? Multiple reliable sources confirm true claims. One dramatic source alone is a warning sign. Step 4: what might be wrong? Could the data be biased? Another explanation? Run this check before believing or sharing.` },
            { word: `lateral reading`,
              definition: `A technique used by professional fact-checkers to evaluate sources. Instead of reading deeply into one source, you read ACROSS multiple sources to see what others say about the original. Check what trustworthy sources say about the claim, author, or publisher. Fact-checkers who use lateral reading identify false content far faster than those who don't.`,
              audioPrompt: `Lateral reading is a technique used by professional fact-checkers to evaluate sources, {name}. Instead of reading deeply into one source, you read ACROSS multiple sources to see what others say about the original. Open several tabs. Check what trustworthy sources say about the claim, the author, or the publisher. Fact-checkers who use lateral reading identify false content far faster than those who don't. Multiple sources matter more than one convincing voice. Before deciding about one trail, check what the rest of the forest says.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Cost of Sharing What Isn't True`,
          paragraphs: [
            `Here's something most kids and adults don't think about: when you SHARE something false (even by accident), you become part of the problem. Misinformation only spreads because people share it. If everyone slowed down for 30 seconds to do a truth check before sharing, false claims would die in the dark instead of going viral. Researchers studying misinformation found that MOST people who share false content don't realize it's false, they just like the content and forward it. Their good intentions accidentally help bad information spread.`,
            `The simple rule: DON'T SHARE WHAT YOU HAVEN'T CHECKED. Especially for big or important claims (politics, health, accusations about people, big news). Take 30 seconds. Run the 4-step check. If you can't confirm it, don't share. That's not censorship or being scared, that's being a careful, responsible thinker. The world has enough confident sharers. It needs more careful checkers. Byte's first teaching: in a world of infinite information, your sharp thinking and good questions are how you protect yourself AND others. Be skeptical of dramatic claims. Cross-check important things. Don't share without checking. Foxes follow real trails, not false ones. Today, you're learning to be one of the careful, sharp humans the world really needs.`,
          ],
          image: `/ue-assets/fs/l03-s4-sharing.webp`,
          imageCaption: `Don't share what you haven't checked. Misinformation only spreads because people share it.`,
          vocab: [
            { word: `careful sharing`,
              definition: `The practice of running the 4-step truth check BEFORE sharing important information. Don't share dramatic claims, accusations, health info, or big news without verifying. Misinformation only spreads because people share it. 30 seconds of checking saves the world from a lot of dumber moments.`,
              audioPrompt: `Careful sharing is the practice of running the 4-step truth check before sharing information, {name}. Don't share dramatic claims, accusations, health info, or big news without verifying. Misinformation only spreads because people share it. Researchers found that most people who share false content don't realize it's false. They just like the content and forward it. Their good intentions accidentally help bad information spread. The rule is, don't share what you haven't checked. Take 30 seconds. Run the check. The world has enough confident sharers. It needs more careful checkers.` },
            { word: `source skepticism`,
              definition: `The habit of pausing before believing ANY claim and asking what makes this source worth trusting. Not cynicism (trust nothing) — skepticism means asking for good reasons before believing. The source skeptic asks: who wrote this? What's the evidence? Who else confirms? What might they be missing? A quiet, powerful habit that protects from foolishness.`,
              audioPrompt: `Source skepticism is the habit of pausing before believing ANY claim and asking what makes this source worth trusting, {name}. Not cynicism, which says trust nothing. Skepticism means asking for good reasons before believing. The source skeptic asks: who wrote this? What do they know? What evidence supports it? Who else confirms? What might they be missing or hiding? Source skepticism is a quiet, powerful habit that takes seconds to practice and protects you from foolishness. The world would be less misinformed if more people developed it. You can.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four pieces of information a kid encounters online. Classify each: TRUSTWORTHY SOURCE (evidence, multiple confirmations, careful claims), QUESTIONABLE SOURCE (dramatic claims, only one source, missing evidence), or MISLEADING SOURCE (deliberately designed to deceive, fake authority, edited content)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `trustworthy`,  label: `Trustworthy Source`, color: `#34D399`, description: `Cites real evidence, confirmed by multiple sources, clear authorship, careful (not dramatic) claims, updates when wrong.` },
            { id: `questionable`, label: `Questionable Source`, color: `#FBBF24`, description: `Dramatic claims, only one source saying it, vague authorship, missing evidence. Maybe careless or biased.` },
            { id: `misleading`,   label: `Misleading Source`,   color: `#F87171`, description: `Deliberately designed to deceive. Fake authority, edited information, fabricated content. Profits from your belief.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Source #1`,
              clues: [
                { text: `A kid reads an article on a health study, published by a major university research department.` },
                { text: `The article cites a peer-reviewed study with hundreds of participants, names the researchers, and says "results suggest" (not "definitely proves").` },
                { text: `Three other major news outlets and one science magazine confirm the same findings.` },
              ],
              correctAnswer: `trustworthy`,
              realWorldExample: `Real study + named researchers + multiple confirmations + careful language = trustworthy.`,
              explanation: `Pure trustworthy source. Notice all the signs. Clear author and publisher (university research department), named researchers, real study with method described, careful language ("suggests" rather than "proves"), and multiple other reliable sources confirm. This doesn't mean it's 100% certain — science can update with new findings — but it's the kind of source you can trust as your best current understanding. The fox-style takeaway: this is what real evidence-based information looks like.`,
            },
            {
              id: `case-2`,
              caseTitle: `Source #2`,
              clues: [
                { text: `A kid sees a viral social media post claiming "scientists have found ONE TRICK to make kids smarter."` },
                { text: `The post has lots of likes and shares but doesn't name any scientists or studies.` },
                { text: `When the kid searches, no other reliable source is talking about this "trick."` },
              ],
              correctAnswer: `questionable`,
              realWorldExample: `Viral, dramatic claim + no named sources + no other confirmation = questionable.`,
              explanation: `Pure questionable source. Big warning signs everywhere. Dramatic claim ("ONE TRICK"), no named scientists or studies, no other source confirming, social-media virality is the only "evidence." This MIGHT be true (unlikely), but more likely it's careless content designed for shares, not truth. The truth check would catch this fast. The kid is wise to be skeptical and not share.`,
            },
            {
              id: `case-3`,
              caseTitle: `Source #3`,
              clues: [
                { text: `A kid sees a "news article" with an official-looking design, claiming a famous celebrity said something shocking.` },
                { text: `The website name is similar to a real news outlet but slightly different.` },
                { text: `The kid checks the celebrity's actual social media — the celebrity says they NEVER said this and it's fabricated.` },
              ],
              correctAnswer: `misleading`,
              realWorldExample: `Fake official look + slightly-off website + actually fabricated quote = misleading source.`,
              explanation: `Pure misleading source. This is deliberately designed to deceive. The fake official design, the slightly-off website name (a classic trick), the fabricated quote. This isn't a mistake — it's deliberate misinformation. These exist for clicks, political reasons, scams, or just causing trouble. Once spotted, don't engage, don't share, and you can sometimes report them to platforms. The kid did exactly the right thing by checking the celebrity's actual account. Cross-checking saves you.`,
            },
            {
              id: `case-4`,
              caseTitle: `Source #4 — The Tricky One`,
              clues: [
                { text: `A kid sees an Instagram account with a fancy name like "Daily Science Facts" with 500,000 followers.` },
                { text: `The account posts a dramatic health claim. It LOOKS authoritative because of the name and follower count.` },
                { text: `When the kid checks, the account is anonymous, doesn't cite real studies, and no other reliable source confirms the claim.` },
              ],
              correctAnswer: `questionable`,
              realWorldExample: `Big followers + fancy name doesn't equal trustworthy. Look at evidence and authorship.`,
              explanation: `Tricky, {name}! It LOOKS like a trustworthy source because of the fancy name "Daily Science Facts" and 500,000 followers. But look closely. Anonymous, no real studies cited, no other reliable confirmation. Pure questionable source in disguise (the "looks authoritative" version). Lesson: BIG follower counts and FANCY NAMES don't make sources trustworthy. The real test is the same as always — who said it (real person/org)? What evidence? Who else confirms? What might be wrong? Many huge social media accounts post questionable content because dramatic claims get followers. Don't be fooled by size. Look at the evidence.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `How does FALSE information spread compared to TRUE information online?`,
              options: [
                `Slower`,
                `About 6 TIMES FASTER — because false claims are often more DRAMATIC, EMOTIONAL, and SHAREABLE than careful accurate ones`,
                `The same speed`,
                `Doesn't spread`,
              ],
              correctIndex: 1,
              explanation: `Research shows false claims spread about 6x faster than true ones online. Because false content is often more dramatic, emotional, and shareable than careful accurate content. People share before checking. Algorithms amplify clicks. Within hours, millions believe something that isn't true.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What are the qualities of a TRUSTWORTHY SOURCE?`,
              options: [
                `Lots of likes`,
                `Cites EVIDENCE, multiple sources CONFIRM, CLEAR author/publisher, CAREFUL claims (not dramatic), UPDATES when wrong`,
                `Has a fancy name`,
                `Anonymous`,
              ],
              correctIndex: 1,
              explanation: `Trustworthy sources cite real evidence (studies, named experts), are confirmed by multiple other sources, have clear authorship, make careful (not dramatic) claims, and update when wrong. Examples: peer-reviewed journals, established journalism (Reuters, AP, BBC), .gov/.edu sites, real experts. Not perfect, but trying to be accurate.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `What are signs of a QUESTIONABLE SOURCE?`,
              options: [
                `Real evidence`,
                `DRAMATIC claims without evidence, only ONE source saying it, VAGUE or anonymous author, no other confirmation, doesn't update when wrong`,
                `Multiple sources`,
                `Careful language`,
              ],
              correctIndex: 1,
              explanation: `Questionable sources make dramatic claims without evidence. Only one saying it (no other sources confirm). Anonymous or vague author. Words like "definitely," "they don't want you to know," "shocking truth." Might be real people who are just careless or biased. Treat with extra slow thinking.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `What is a MISLEADING SOURCE?`,
              options: [
                `Mistake by a real reporter`,
                `DELIBERATELY designed to fool you — fake authority, fake credentials, manipulated content, often profits from your belief`,
                `Just questionable`,
                `Random opinion`,
              ],
              correctIndex: 1,
              explanation: `Misleading sources are deliberately designed to fool you. Fake authority (made-up experts, fake credentials, official-looking logos). Selectively edited information. Stolen or fabricated images. Often profit from your belief (clicks, sales, manipulation). With these, slow down hard. Check other sources. Don't share.` },

            { id: `l03-q5`, format: `multiple-choice`,
              question: `What is the 4-STEP TRUTH CHECK?`,
              options: [
                `A workout`,
                `(1) WHO is making this claim? (2) WHAT'S the evidence? (3) WHO ELSE is saying it? (4) WHAT MIGHT BE WRONG? — used by journalists and researchers`,
                `Random check`,
                `A quiz`,
              ],
              correctIndex: 1,
              explanation: `The 4-step truth check: WHO is making the claim, WHAT is the actual evidence, WHO ELSE is saying it (cross-check), and WHAT MIGHT BE WRONG with this claim. Used by journalists and researchers. Takes about a minute. Run it on important claims before believing or sharing.` },

            { id: `l03-q6`, format: `true-false`,
              question: `True or false: BIG follower counts and FANCY NAMES automatically make sources trustworthy.`,
              correctAnswer: false,
              explanation: `False. Many huge social media accounts are anonymous and post questionable content because dramatic claims get followers. Don't be fooled by size. Look at the evidence. The real test is the 4-step check: who said it, what evidence, who else confirms, what might be wrong.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `What's the RULE for sharing information?`,
              options: [
                `Share everything`,
                `DON'T share what you haven't CHECKED — misinformation only spreads because people share it; 30 seconds of checking saves a lot of dumber moments`,
                `Only share fun stuff`,
                `Always be quiet`,
              ],
              correctIndex: 1,
              explanation: `Don't share what you haven't checked. Especially for big or important claims (politics, health, accusations, big news). Take 30 seconds. Run the 4-step check. If you can't confirm, don't share. The world has enough confident sharers. It needs more careful checkers. Misinformation only spreads because people share it.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about spotting what's real?`,
              options: [
                `Believe nothing`,
                `Sharp thinking and good questions are how you protect yourself AND others. Be skeptical of dramatic claims. Cross-check important things. Don't share without checking. Foxes follow real trails`,
                `Believe everything`,
                `Trust your friends`,
              ],
              correctIndex: 1,
              explanation: `In a world of infinite information, your sharp thinking and good questions are how you protect yourself AND others. Be skeptical of dramatic claims. Cross-check important things. Don't share without checking. Foxes follow real trails, not false ones. Today, you're becoming one of the careful, sharp humans the world really needs.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever shared something online or with friends, then learned it wasn't true? What happened?` },
            { id: `r2`, text: `When you see a dramatic claim on social media, what's your usual reaction — believe instantly, ignore, or check it?` },
            { id: `r3`, text: `Pick a recent claim you've seen and run it through the 4-step truth check. What did you notice?` },
            { id: `r4`, text: `What's one habit you want to build for being a careful, sharp consumer of information?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Research on misinformation is some of the most important work in modern media and psychology. Studies consistently show that misinformation has real costs to public health, politics, relationships, and society. The MIT study that found false claims spread 6x faster than truth is now famous. AI tools have made misinformation easier to create than ever — fake images, fake videos, fake articles all look real now. The skills you're learning — source evaluation, cross-checking, careful sharing — are quite literally the survival skills of the modern information world. Byte's note: foxes have always been good at spotting false trails. The world doesn't need more confident sharers. It needs more careful trackers — people who slow down, check sources, ask questions, and refuse to spread what they haven't verified. You can be one of those people. The kid who builds this skill now becomes an adult who doesn't get fooled, doesn't accidentally hurt people by spreading lies, and helps the world be less misinformed. That's a quiet kind of heroism. Step into it.`,
          familyAdventure: `Family Truth-Check Practice. As a family, pick one dramatic claim from the news, social media, or a viral post this week and run the 4-step truth check together. (1) Who said it? (2) What's the evidence? (3) Who else confirms? (4) What might be wrong? Talk through what you find. Adults model it too. Building a family habit of checking before believing or sharing protects everyone, and grows sharp thinkers at every age. Many families find that just doing this once a week dramatically changes their relationship with information.`,
          creativePrompt: {
            intro: `Write about misinformation in your life and the careful information consumer you want to become.`,
            floor: `Write at least 5 sentences. Describe your relationship with information and one new practice you'll try.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on misinformation and sharp consumption.`,
            open: `Write as much as you want. Write a full piece about misinformation in your life. Describe one or two specific times you encountered something false (or shared something you later realized wasn't true). Reflect on what you've learned about trustworthy, questionable, and misleading sources. Describe how you'll apply the 4-step truth check going forward, especially for big or important claims. Describe the careful, sharp information consumer you want to become — skeptical of dramatic claims, willing to cross-check, careful before sharing, comfortable saying "I'm not sure, let me check." End with one specific commitment for your information habits this month. Make it honest and forward-looking.`,
            frames: [
              `A time I encountered misinformation was ___.`,
              `What I learned from it is ___.`,
              `My usual reaction to dramatic claims has been ___.`,
              `The careful information consumer I want to become is ___.`,
              `My specific commitment this month is ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Sharp, careful work, {name}! You now know how to spot what's real in a world of infinite information. Three kinds of sources (trustworthy, questionable, misleading). The 4-step truth check. The cost of careless sharing. Be a careful tracker, not a confident sharer. Next, we zoom out to look at the ENTIRE STREAM of information flowing into your life every day, and how to curate it wisely. THE INFORMATION DIET. Sharpen your ears, and I'll see you there. — Byte.`,
          badge: `truth-tracker`,
          badgeName: `Truth Tracker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L03;
