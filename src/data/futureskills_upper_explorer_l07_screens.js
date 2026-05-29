// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L07 — Spotting AI-Generated Content
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : visual literacy for AI-generated images/video, detecting
//            AI-written text, deepfake awareness. Completes the AI trilogy
//            (L05 what AI is, L06 how to use it, L07 how to spot it).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (real human / questionable / probably AI).
//            Trick case = AI image that's been EDITED by a human to fix
//            tells, making it harder to spot.
// SCOPE: visual tells (weird hands, smooth skin, off shadows, wrong text),
//        text tells (too polished, no specifics, weird structure),
//        behavioral tells (instant responses, perfect-looking accounts),
//        why this matters (deepfakes, scams, misinformation)
// VOICE: Byte = curious detective, treats AI-spotting like the best puzzle
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-07`,
      title: `Spotting AI-Generated Content`,
      duration: 18,
      xpReward: 75,
      badge: `ai-spotter`,
      badgeName: `AI Spotter`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. We've talked about what AI IS (L05) and how to USE it wisely (L06). Now the third critical skill, how to SPOT AI-generated content in the wild. You're growing up in a world where AI can create photos, videos, articles, social media posts, and entire conversations that LOOK real. Some of it is harmless. Some of it is misleading. Some of it is designed to scam, manipulate, or trick people. The kids who can tell the difference between real human content and AI-generated content have a huge advantage. Today, you become a fox-eyed AI spotter. Sharpen those eyes, let's go.`,
          headline: `Spotting AI-Generated Content`,
          subtitle: `How to tell real human content from AI-generated content in the wild`,
          visual: `/ue-assets/fs/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why This Skill Matters Now`,
          paragraphs: [
            `Here's the world you're growing up in. AI can now create images, videos, voices, articles, and social media posts that look or sound like real humans. Some of these uses are fine, art, entertainment, education. But some are designed to fool people. SCAMS use AI-generated photos of "people" who don't exist to seem real. MISINFORMATION uses fake-but-believable images and "news articles" to spread false claims. DEEPFAKES are AI-generated videos that show real people saying or doing things they never actually said or did. Bullies sometimes use AI to create fake content about classmates. Researchers studying online content have found that AI-generated content is now EVERYWHERE, in social media feeds, search results, and even some news.`,
            `The good news, AI-generated content has TELLS, signs you can learn to spot. Like an animal track in the snow, AI leaves clues. Once you know what to look for, you'll start seeing the signs naturally. This isn't about being paranoid. Most content you encounter is fine. This is about being CAREFUL, especially when something feels off, seems too perfect, or is asking you to believe, share, or do something. Foxes don't follow false trails. You're learning to do the same with content.`,
          ],
          image: `/ue-assets/fs/l07-s1-matters.webp`,
          imageCaption: `AI content is everywhere now. Scams, deepfakes, misinformation. Learning the tells protects you.`,
          vocab: [
            { word: `ai-generated content`,
              definition: `Images, videos, voices, articles, and posts created by AI rather than humans. Some uses are fine (art, entertainment). Some are designed to deceive (scams, misinformation, deepfakes). Researchers have found it's now everywhere online. The skill of spotting it protects you from being fooled.`,
              audioPrompt: `AI-generated content is images, videos, voices, articles, and posts created by AI rather than humans, {name}. Some uses are fine, art, entertainment, education. Some are designed to fool people. Scams use AI-generated photos of people who don't exist to seem real. Misinformation uses fake-but-believable images. Deepfakes are AI-generated videos showing real people saying things they never said. Researchers have found AI-generated content is now everywhere, in social media, search results, even some news. AI leaves tells you can learn to spot.` },
            { word: `deepfake`,
              definition: `An AI-generated video showing a real person saying or doing something they never actually said or did. Made using AI trained on real footage of someone. Used to spread misinformation, create fake celebrity content, and bully people. Signs: mouths slightly out of sync, skin that moves unnaturally, blinking that looks wrong. When you see a shocking video of someone famous, ask: could this be fake?`,
              audioPrompt: `A deepfake is an AI-generated video showing a real person saying or doing something they never actually said or did, {name}. Deepfakes are made using AI trained on real videos of someone until it can generate convincing new footage. They've been used to spread misinformation, fake celebrity content, and bully people. Signs to watch: mouths slightly out of sync, skin that moves unnaturally, blinking that looks wrong. When you see a shocking video of someone famous, ask yourself: could this be fake?` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Visual Tells (Images and Video)`,
          paragraphs: [
            `Here are the most common signs that an IMAGE or VIDEO is AI-generated. HANDS AND FINGERS often go wrong, extra fingers, missing fingers, twisted thumbs, blurry hand details. AI has gotten better at this, but hands are still a frequent giveaway. EYES sometimes look slightly off, asymmetric in unnatural ways, weird reflections, pupils that look painted on. TEETH may be too perfect or weirdly blurred. SKIN can look too smooth, weirdly waxy, or have no texture. BACKGROUNDS often have nonsense, blurry signs with fake letters, objects that don't make sense, perspective that's slightly off.`,
            `TEXT in images (like signs, books, t-shirts) is a HUGE tell, AI usually generates fake-looking gibberish text. LIGHTING and SHADOWS may not match across the image, like the sun is coming from two directions at once. JEWELRY, GLASSES, AND DETAILED OBJECTS often have parts that don't connect properly. For VIDEOS especially, look at FACES MOVING (especially mouths when speaking, deepfake mouths often look weird, slightly out of sync, or oddly smooth). Look at HAIR (AI hair can look painted on or move strangely). If a person blinks weird, has skin that doesn't shift naturally with expression, or looks slightly "off" without you being able to say exactly why, that's worth being suspicious of.`,
          ],
          image: `/ue-assets/fs/l07-s2-visual.webp`,
          imageCaption: `Visual tells: weird hands, off eyes, fake text in image, mismatched shadows, too-perfect skin.`,
          vocab: [
            { word: `visual ai tells`,
              definition: `Signs that an image or video is AI-generated. Hands and fingers (extra, missing, twisted). Eyes (asymmetric, weird reflections). Skin (too smooth, waxy). Backgrounds (nonsense details, fake text). Lighting and shadows (don't match). Detailed objects (don't connect right). Faces in video (weird mouths, strange blinking).`,
              audioPrompt: `Visual AI tells are signs an image or video is AI-generated, {name}. Hands and fingers often go wrong: extra fingers, missing fingers, twisted thumbs. Eyes can look slightly off, asymmetric, weird reflections. Skin can look too smooth or waxy. Backgrounds have nonsense details and fake-looking text. Lighting and shadows may not match. Detailed objects like jewelry don't connect properly. In videos, mouths when speaking can look weird or out of sync. Hair can look painted on. AI is getting better, but these tells still appear.` },
            { word: `reverse image search`,
              definition: `A tool that lets you upload an image and find where else it appears online. If a photo of a person only appears on one brand-new account, that's a red flag. If a supposedly recent news photo turns up on a site from years ago, it's been reused or faked. Most browsers let you right-click any image to search for it. Use it whenever a photo is being used to support a claim.`,
              audioPrompt: `Reverse image search is a tool that lets you upload an image and find where else it appears online, {name}. If a photo of a person only appears on one brand-new account, that's a red flag. If a supposedly recent news photo shows up on a site from three years ago, it's been reused or faked. Most browsers let you right-click any image to search for it. Any time a photo is being used to support a claim, reverse image search it first.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Text and Behavior Tells`,
          paragraphs: [
            `AI-written text has tells too. OVERLY POLISHED prose is a sign, AI tends to write very smoothly, with perfect grammar, balanced sentence lengths, and no personality quirks. Real human writing often has natural irregularities. NO SPECIFIC PERSONAL DETAILS, AI text often stays generic ("it was a wonderful experience" vs. a real person saying "the cookies my grandma makes have walnuts on top"). FORMULAIC STRUCTURE, AI loves to write in tidy lists, numbered points, and predictable arcs. GENERIC EMOTIONAL LANGUAGE without specific stories. PHRASES like "delve into," "in conclusion," "it's important to note," and "tapestry of" appear way more often in AI text. None of these tells alone PROVE AI, but multiple together raise suspicion.`,
            `BEHAVIORAL tells matter too, especially on social media. Accounts that POST CONSTANTLY (more than humanly possible). Accounts with PERFECT-LOOKING profile photos but no real personal details. Accounts that respond INSTANTLY to anything. Comment sections full of generic supportive comments ("Great post!" "Love this!") with no specific reference to what was said. Profiles that follow thousands of people but have no real human connections. Strangers messaging you who seem oddly perfect, photos look great, conversation flows smoothly, but they avoid showing themselves on video calls and won't share details that would prove they're real. These are huge warning signs for scams. The fox's rule, if something feels too smooth, too perfect, or too eager to engage, BE SUSPICIOUS.`,
          ],
          image: `/ue-assets/fs/l07-s3-text-behavior.webp`,
          imageCaption: `Text tells: too polished, no specifics, formulaic. Behavior tells: posts too much, too perfect, too eager.`,
          vocab: [
            { word: `text and behavior ai tells`,
              definition: `Signs AI is behind text or behavior. Text: too polished, no personal specifics, formulaic structure, generic emotional language, phrases like "delve into" and "tapestry of." Behavior: posts too often, perfect profile with no real details, responds instantly, generic comments, scam-like strangers who avoid video calls.`,
              audioPrompt: `Text and behavior AI tells are signs that AI is behind text or social media activity, {name}. Text tells: overly polished prose, no personality quirks, no specific personal details, formulaic structure, generic emotional language, phrases like delve into or tapestry of. Behavior tells: accounts that post more than humanly possible, perfect profiles with no real details, instant responses, generic supportive comments, strangers who seem oddly perfect but avoid video calls. The fox rule: if something feels too smooth or too eager, be suspicious.` },
            { word: `ai scam account`,
              definition: `A fake social media profile using AI-generated photos and content to appear real. The goal is usually to steal money, personal information, or trust. Signs: perfect-looking profile photo, new account with no real history, oddly smooth conversation, avoids video calls, offers or requests that seem too good or too urgent. If a stranger messages you online and something feels off, tell a trusted adult immediately.`,
              audioPrompt: `An AI scam account is a fake social media profile using AI-generated photos and content to appear real, {name}. The goal is usually to steal money, personal information, or trust. Signs: a perfect-looking profile photo, a new account with no real history, oddly smooth conversation, someone who avoids video calls, and offers that seem too good or too urgent. If a stranger messages you online and something feels off, tell a trusted adult immediately.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What to Do When You Suspect AI`,
          paragraphs: [
            `When you spot signs that something might be AI-generated, here's the practical response. Don't TRUST IT, especially if it's asking you to believe a claim, share something, take action, or make a decision. Use your 4-step truth check from L03 (who said it, what's the evidence, who else confirms, what might be wrong). For images and videos, do REVERSE IMAGE SEARCH if you can (browsers let you upload an image and find where else it appears). If the photo "of a person" only appears on one new account, that's a huge red flag. Look at the ORIGINAL SOURCE, was it posted by someone real and known, or by an anonymous account that just appeared?`,
            `Most importantly, DON'T SHARE OR BELIEVE just because something looks dramatic or emotional. AI-generated misinformation often spreads BECAUSE it triggers strong emotions, scary, outrageous, exciting, sympathetic. Pause. Use slow thinking. Check sources. When in doubt, don't share. For SCAMS especially (strangers messaging you, "celebrities" reaching out, offers that seem too good), assume AI is involved and tell a trusted adult. Byte's first teaching: AI-generated content is everywhere now. The kid who learns to spot the tells (visual, text, behavioral) protects themselves and others from being fooled. This isn't paranoia, it's the fox skill of seeing tracks others miss. Stay sharp. Stay curious. Don't trust dramatic content without verifying. Real eyes and real questions are still the best defense.`,
          ],
          image: `/ue-assets/fs/l07-s4-what-do.webp`,
          imageCaption: `When you suspect AI: don't trust, use 4-step truth check, reverse image search, tell trusted adults about scams.`,
          vocab: [
            { word: `ai response practice`,
              definition: `What to do when you spot AI signs. Don't trust automatically. Run the 4-step truth check (L03). Reverse image search images you're suspicious of. Look at original source and posting history. Don't share dramatic content without verifying. For suspected scams, tell a trusted adult. Real eyes and real questions are still the best defense.`,
              audioPrompt: `AI response practice is what to do when you spot AI signs, {name}. Don't trust automatically, especially if it's asking you to believe, share, or take action. Use your 4-step truth check from L03: who said it, what's the evidence, who else confirms, what might be wrong. For images, do a reverse image search. Look at the original source. Don't share dramatic content without verifying. When in doubt, don't share. For suspected scams, strangers messaging, or offers too good to be true, tell a trusted adult.` },
            { word: `pause and verify`,
              definition: `The core protective habit for handling potentially AI-generated content. When something online triggers strong emotion: stop, slow down, don't share immediately. Ask who made this, what's the source, can I verify with another trustworthy source? AI-generated misinformation spreads because it triggers emotions before people think. The pause breaks that reaction. Real foxes don't bolt at every sound. They pause, assess, then decide.`,
              audioPrompt: `Pause and verify is the core protective habit for handling potentially AI-generated content, {name}. When you encounter something online that triggers strong emotion: stop, slow down, don't share immediately. Ask: who made this, what's the source, can I verify this with another trustworthy source? AI-generated misinformation spreads BECAUSE it triggers emotions before people think. The pause breaks that automatic reaction. Real foxes don't bolt at every sound. They pause, assess, then decide. Pausing before sharing is one of the most powerful habits you can build.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four pieces of online content. Classify each: REAL HUMAN CONTENT (made by a person, specific details, imperfect, personal voice), QUESTIONABLE (could be either, mixed signs), or PROBABLY AI-GENERATED (multiple AI tells, too perfect, generic)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `real`,     label: `Real Human Content`,    color: `#34D399`, description: `Specific details, natural imperfections, personal voice, real human quirks, traceable to a real person or organization.` },
            { id: `question`, label: `Questionable`,           color: `#FBBF24`, description: `Some signs suggest AI, some suggest human. Hard to tell without more checking. Treat with caution.` },
            { id: `ai`,       label: `Probably AI-Generated`,  color: `#F87171`, description: `Multiple AI tells. Too perfect, too generic, weird visual details, no specifics, suspicious behavior.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Content #1`,
              clues: [
                { text: `A long social media post about a family vacation, with mention of a specific seafood restaurant, the name of their server, and how their younger sibling refused to eat the calamari.` },
                { text: `Photos show slightly blurry family snapshots with imperfect lighting, hands visible normally, real-looking signs in the background.` },
                { text: `The poster has years of similar specific content tied to a real-name profile.` },
              ],
              correctAnswer: `real`,
              realWorldExample: `Specific names + real imperfections + years of tied history = real human content.`,
              explanation: `Pure real human content. Notice all the signs of authenticity. Specific named details (the server's name, the calamari moment), natural photo imperfections, real-looking background details, multi-year posting history tied to a real-name profile. AI-generated content rarely has THIS level of specific, idiosyncratic detail across years. Real people leave specific traces. This is the signature of a real human.`,
            },
            {
              id: `case-2`,
              caseTitle: `Content #2`,
              clues: [
                { text: `A perfectly smooth Instagram post about "the importance of self-care."` },
                { text: `Photo shows a person whose hand has six fingers if you look carefully, and a coffee mug with gibberish text on it.` },
                { text: `The account was created two weeks ago, has 50,000 followers, and posts every hour.` },
              ],
              correctAnswer: `ai`,
              realWorldExample: `Visual tells (extra finger, fake text) + brand-new account + impossible posting frequency = AI.`,
              explanation: `Pure probably-AI-generated content. Multiple major tells. Visual: six fingers (classic AI hand error), gibberish text on the mug (classic AI text-in-image fail). Behavioral: account two weeks old, 50K followers (suspicious growth), posts every hour (more than humanly possible). Text: "the importance of self-care" is the kind of generic content AI loves to produce, no specific personal story, no real voice. Triple-confirmed AI. Don't trust, don't share, don't follow.`,
            },
            {
              id: `case-3`,
              caseTitle: `Content #3`,
              clues: [
                { text: `A polished article on a website, well-written, no obvious AI giveaways.` },
                { text: `The author is "Jordan Smith" but you can't find that person anywhere else online.` },
                { text: `The article cites studies but, when you check, the studies don't seem to exist.` },
              ],
              correctAnswer: `ai`,
              realWorldExample: `Polished + unfindable author + fake-citation tells = AI-generated article.`,
              explanation: `Probably AI-generated. The article LOOKS clean (no obvious visual or grammar tells), but the deeper checks reveal it. The author has no other online presence (real journalists usually do). The "studies" cited don't exist, this is classic AI hallucination (L05!). AI can write fluent prose, so polish alone doesn't prove human; the giveaway is when you look DEEPER at sources and author identity. Lesson: always check the author and the citations, especially on important topics.`,
            },
            {
              id: `case-4`,
              caseTitle: `Content #4 — The Tricky One`,
              clues: [
                { text: `A photo of a sunset that looks beautiful and natural.` },
                { text: `When you look carefully, you notice the rocks in the foreground have shadows going one direction and the trees have shadows going the OPPOSITE direction.` },
                { text: `The photo was posted by an account that mostly shares photos, but a few posts up, there's a totally normal-looking selfie of a real person.` },
              ],
              correctAnswer: `question`,
              realWorldExample: `Mixed signs (real-looking account but mismatched shadows in this photo) = questionable, dig deeper.`,
              explanation: `Tricky, {name}! At first you might think it's real (looks beautiful) or AI (mismatched shadows). But notice the MIXED signs. Account looks real (has a normal selfie). But THIS image has a real AI tell (shadows from different directions). What's likely happening? The account is real, but this PARTICULAR image might be AI-generated and posted, OR heavily edited, OR a real photo with weird natural lighting. Pure questionable. Lesson: sometimes content is mixed; a real account might post AI-generated images, an AI-generated image might be edited to fix some tells. When signs are mixed, don't say definitely AI or definitely real, say "I'm not sure, I'll be cautious." Especially if the image is being used to support a claim, dig deeper before believing or sharing. Real foxes know when to say "not sure yet."`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l07-q1`, format: `true-false`,
              question: `True or false: AI-generated content is everywhere online now, in social media, search results, and even some news.`,
              correctAnswer: true,
              explanation: `True. Researchers studying online content have found AI-generated content is now everywhere, in social media feeds, search results, and even some news. Some uses are fine (art, entertainment). Some are designed to fool people (scams, misinformation, deepfakes). The skill of spotting it protects you.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What are common VISUAL TELLS that an image is AI-generated?`,
              options: [
                `Real-looking everything`,
                `Weird HANDS (extra/missing fingers), off EYES, too-smooth SKIN, GIBBERISH TEXT in image, mismatched SHADOWS, detailed objects that don't connect`,
                `Always perfect`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Visual AI tells: hands and fingers (extra, missing, twisted), eyes (asymmetric, weird reflections), skin (too smooth, waxy), text in image (gibberish, fake letters), lighting and shadows (don't match), detailed objects like jewelry (don't connect properly). AI is getting better, but these tells still appear often.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `What are common TEXT TELLS that something is AI-written?`,
              options: [
                `Personal stories`,
                `OVERLY POLISHED prose, NO specific personal details, FORMULAIC structure, generic emotional language, phrases like "delve into" and "tapestry of"`,
                `Mistakes everywhere`,
                `Slang`,
              ],
              correctIndex: 1,
              explanation: `Text AI tells: overly polished prose (perfect grammar, balanced sentences, no quirks), no specific personal details (stays generic), formulaic structure (tidy lists, numbered points), generic emotional language without specific stories, certain phrases like "delve into," "tapestry of," "in conclusion." None alone prove AI; multiple together raise suspicion.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What are BEHAVIORAL TELLS of an AI account on social media?`,
              options: [
                `Real friends and conversations`,
                `Posts CONSTANTLY (more than human), PERFECT-LOOKING profile with no real details, responds INSTANTLY to anything, GENERIC supportive comments`,
                `Slow responses`,
                `Specific stories`,
              ],
              correctIndex: 1,
              explanation: `Behavioral AI tells: accounts that post more than humanly possible, perfect-looking profile photos with no real personal details, respond instantly to anything, comment sections full of generic supportive comments without specific reference. Profiles that follow thousands but have no real connections. Strangers who seem oddly perfect but avoid video calls.` },

            { id: `l07-q5`, format: `true-false`,
              question: `True or false: AI can now create DEEPFAKE videos of real people saying or doing things they never actually said or did.`,
              correctAnswer: true,
              explanation: `True. Deepfakes are AI-generated videos that show real people saying or doing things they never actually said or did. Bullies sometimes use AI for fake content about classmates. Politicians have been deepfaked. Look at faces moving (mouths, blinking, skin), AI tells in motion are still visible if you watch carefully.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What should you do when you SUSPECT AI-generated content?`,
              options: [
                `Share it`,
                `DON'T trust automatically. Use 4-step truth check (L03). Reverse image search. Check original source. Don't share dramatic content without verifying. Tell adults about suspected scams`,
                `Believe it`,
                `Forward it`,
              ],
              correctIndex: 1,
              explanation: `When you suspect AI: don't trust automatically. Run the 4-step truth check (who said it, what's evidence, who else confirms, what might be wrong). Reverse image search suspicious images. Look at original source and posting history. Don't share dramatic content without verifying. For suspected scams (strangers messaging, "celebrities" reaching out), tell a trusted adult.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `Why does AI-generated MISINFORMATION often spread fast?`,
              options: [
                `It's always true`,
                `Triggers STRONG EMOTIONS (scary, outrageous, exciting, sympathetic), and dramatic emotional content gets shared without checking`,
                `Random`,
                `Boring content`,
              ],
              correctIndex: 1,
              explanation: `AI-generated misinformation spreads because it triggers strong emotions, scary, outrageous, exciting, sympathetic. Dramatic emotional content gets shared without checking. Pause. Use slow thinking. Check sources. When in doubt, don't share. Misinformation only spreads because people share it (L03!).` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about spotting AI content?`,
              options: [
                `Trust everything`,
                `AI-generated content is everywhere now. Learn the tells (visual, text, behavioral). Protect yourself and others from being fooled. Real eyes and real questions are still the best defense`,
                `Be paranoid`,
                `Avoid the internet`,
              ],
              correctIndex: 1,
              explanation: `AI-generated content is everywhere now. The kid who learns to spot the tells (visual, text, behavioral) protects themselves and others from being fooled. This isn't paranoia, it's the fox skill of seeing tracks others miss. Stay sharp, stay curious. Don't trust dramatic content without verifying. Real eyes and real questions are still the best defense.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever seen something online that turned out to be AI-generated? How did you find out?` },
            { id: `r2`, text: `Have you ever almost been fooled by a deepfake or AI image? What helped you (or might help you) catch it?` },
            { id: `r3`, text: `Have you ever received messages from a stranger who seemed "too perfect"? What did you do? What might you do now?` },
            { id: `r4`, text: `Of all the AI tells (visual, text, behavioral), which feels most useful for YOUR life right now?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Detection of AI-generated content is one of the most important emerging digital literacy skills. Researchers, journalists, and educators are working hard to teach this because misinformation, scams, and deepfakes are causing real harm. Studies have found kids who learn the tells are dramatically less likely to be fooled by AI content, fall for scams, or share misinformation. This isn't theoretical, it protects you from real harm. Byte's note: you're going to live your entire life in a world where AI content keeps getting better. The tells you learn today will keep evolving as AI does. But the underlying skills, looking for specific details, checking sources, being suspicious of too-perfect content, verifying before sharing, will protect you for life. Stay curious about HOW things are made. Foxes have always been the animals who notice the small signs others miss. Your eyes are becoming sharper every lesson. Use them.`,
          familyAdventure: `Family AI Detective Practice. As a family, try this. Each family member finds one piece of content online this week (an image, video, post, or article) and analyzes it together using the AI tells. Visual? Text? Behavioral? Real, questionable, or probably AI? Talk through what you notice. Adults model curiosity (not fear). Building this as a family habit grows everyone's AI-spotting skills together, and creates a home where checking before believing is normal. Many families find this practice surprisingly fun, like detective work.`,
          creativePrompt: {
            intro: `Write about your developing AI-spotting eye and how you'll protect yourself and others.`,
            floor: `Write at least 5 sentences. Describe 2-3 AI tells and one protective habit.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on your AI literacy detective skills.`,
            open: `Write as much as you want. Write a full piece about your developing skill of spotting AI-generated content. Describe the VISUAL tells you've learned (weird hands, off eyes, fake text in images, mismatched shadows). Describe the TEXT tells (too polished, no specifics, formulaic). Describe the BEHAVIORAL tells (posts too much, perfect-but-anonymous accounts, scam-like strangers). Reflect on how this skill protects you from being fooled, scammed, or manipulated. Describe the practices you'll build (don't trust automatically, use 4-step truth check, reverse image search, tell trusted adults about scams). End with a commitment to be one of the kids who SEE through fake content instead of being fooled by it. Make it specific and detective-sharp.`,
            frames: [
              `Visual tells I'll watch for: ___.`,
              `Text tells I'll watch for: ___.`,
              `Behavioral tells I'll watch for: ___.`,
              `My protective practices will be ___.`,
              `When I'm not sure, I'll ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Sharp, detective work, {name}! You've completed the AI trilogy. You know what AI IS (L05), how to USE it wisely (L06), and now how to SPOT AI-generated content (L07). Visual tells, text tells, behavioral tells. The world will keep getting more AI-saturated. You'll be one of the kids who can see through it. Next, we shift gears to one of the most powerful skills of all, how to LEARN ANYTHING. The real science of learning that almost no school teaches. HOW TO LEARN ANYTHING. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `ai-spotter`,
          badgeName: `AI Spotter`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L07;
