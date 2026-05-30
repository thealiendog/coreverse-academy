const CREATIVEARTS_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `ca`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-9-10-07`,
      title: `Singing & The Voice You Have`,
      duration: 18,
      xpReward: 75,
      badge: `voice-claimer`,
      badgeName: `Voice Claimer`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Today's lesson is about something that belongs to every human and that many people have been told isn't theirs: SINGING. Maybe you love to sing. Maybe you only sing when you're alone. Maybe someone once told you you "can't sing" and you stopped. Whatever your story, I want you to hear this carefully. The voice you have is YOURS. It is interesting. It is worth using. The voice is one of the only instruments built into your body, and almost every kid is born wanting to sing. Today, we look at what really makes voices work, what the myths are, and how to reclaim yours. Gently. Carefully. Truly.`,
          headline: `Singing & The Voice You Have`,
          subtitle: `The voice you have is yours. Interesting. Worth using. Built into your body.`,
          visual: `/ue-assets/ca/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Every Voice Is Interesting (Not "Good" or "Bad")`,
          paragraphs: [
            `Here's the first protective truth. The framing of voices as "good" or "bad" is mostly a CULTURAL invention. There are voices that match certain styles (pop, opera, gospel, musical theater) and voices that don't. There are voices trained for certain things and voices that aren't. But "good voice" usually just means "voice that fits what we expect." Every voice is INTERESTING in some way. Some voices are smoky. Some are bright. Some are deep. Some are airy. Some are unusual. The unusual voices are often the ones that become beloved over time once we get used to them. Bob Dylan's voice. Billie Holiday's. Tom Waits. Macy Gray. Indie singers with strange voices. None of them sound "pretty" by traditional standards. They're beloved BECAUSE their voices are distinct.`,
            `Researchers studying music and voice have found something important. The "I can't sing" identity that many kids carry usually came from a SPECIFIC MOMENT, a teacher said something, a sibling laughed, a kid was told to mouth the words during a school concert. That moment shaped years of self-belief. The voice itself is usually fine. The shame is what stopped it. If you've been told you "can't sing," I want you to know two things. One, it almost certainly isn't true the way you've taken it in. Two, the voice you have is still yours, still interesting, still worth using. The shame can be unlearned. We start by getting curious about what voices actually DO.`,
          ],
          image: `/ue-assets/ca/l07-s1-interesting.webp`,
          imageCaption: `Every voice is interesting. "Good" vs. "bad" is mostly cultural. Beloved singers often have unusual voices.`,
          vocab: [
            { word: `every voice is interesting`,
              definition: `The protective truth that the "good voice / bad voice" framing is mostly cultural, not real. "Good voice" usually means "voice that fits what we expect." Some of the most beloved singers (Bob Dylan, Billie Holiday, Tom Waits) have unusual voices. The "I can't sing" identity usually came from a specific shaming moment. The voice itself is usually fine; the shame is what stopped it.`,
              audioPrompt: `Every voice is interesting, {name}. The framing of voices as good or bad is mostly a cultural invention. But good voice usually just means voice that fits what we expect. Every voice is interesting in some way. Some are smoky, some bright, some deep, some airy, some unusual. The unusual ones are often the ones that become beloved over time. Bob Dylan, Billie Holiday, Tom Waits, Macy Gray. None of them sound pretty by traditional standards. They're beloved BECAUSE their voices are distinct.` },
            { word: `vocal shame and healing`,
              definition: `The research finding that most people who identify as "can't sing" carry a specific shaming wound from childhood — a teacher's comment, a sibling's laugh, being told to mouth the words. The voice itself is usually fine. Shame can be unlearned through gentle private practice, belly breathing, and singing for joy rather than performance.`,
              audioPrompt: `Vocal shame and healing is one of the most documented findings in music education research, {name}. Most people who identify as unable to sing can point to a specific shaming moment. A teacher said something. A sibling laughed. A kid was told to mouth the words at a concert. That moment shaped years of identity. The voice itself is usually fine. The shame is what stopped it. The wound was theirs, not yours. The voice can come back. Private practice, belly breath, singing for joy. Reclaim what was always yours.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Breath Is the Foundation of the Voice`,
          paragraphs: [
            `Here's the first technical truth that almost no one tells kids. The voice is made of BREATH. When you sing or speak, air moves from your lungs, past your vocal cords (which vibrate to make sound), and out through your mouth shaped by your tongue, teeth, and lips. The QUALITY of your singing voice depends way more on your BREATH than on anything else. Trained singers spend years learning to breathe. Kids who sing freely use breath naturally. Kids who feel ashamed about their voice often hold their breath, sing from their throat instead of their belly, and produce thin, tight sound — and then think their voice is the problem. Usually the breath is the problem.`,
            `Here's a practice you can try right now. Put your hand on your BELLY (not your chest). Breathe in slowly through your nose, and feel your belly EXPAND outward. Hold for a second. Then sing or speak any sound while letting your belly slowly come back in. This is BELLY BREATHING (also called diaphragmatic breathing), the same breath that singers, public speakers, and meditation teachers use. It produces a fuller, warmer, more relaxed sound than chest breathing. It also calms your nervous system. Most kids breathe shallowly into their chest, especially when nervous about being heard. Learn to breathe into your belly, and your singing voice opens up immediately. This single change makes a bigger difference than years of "trying to sing better."`,
          ],
          image: `/ue-assets/ca/l07-s2-breath.webp`,
          imageCaption: `Breath is the foundation. Belly breath, not chest breath. Fuller sound, calmer nervous system.`,
          vocab: [
            { word: `belly breathing for voice`,
              definition: `The foundation of singing well. Hand on belly, breathe in through nose, feel belly EXPAND. Then sing or speak while letting belly slowly come back in. Produces fuller, warmer, relaxed sound. Same breath used by singers, speakers, meditation teachers. Calms the nervous system too. Most kids breathe shallowly into their chest, especially when nervous. Belly breath opens the voice immediately.`,
              audioPrompt: `Belly breathing is the foundation of voice, {name}. The voice is made of breath. The quality of your voice depends way more on breath than on anything else. Try this. Put your hand on your belly, not your chest. Breathe in slowly through your nose, feel your belly expand. Then sing or speak any sound while letting your belly come back in. This is belly breathing, the same breath singers and meditation teachers use. Most kids breathe shallowly into their chest, especially when nervous. Belly breath opens the voice immediately.` },
            { word: `diaphragmatic breathing`,
              definition: `The technical name for belly breathing. The diaphragm (the dome-shaped muscle below the lungs) expands downward, pushing the belly out. Used by singers, public speakers, actors, and meditation teachers. Produces fuller, warmer, more relaxed sound than shallow chest breathing. Also calms the nervous system by triggering the parasympathetic response. Single most impactful technique for improving voice immediately.`,
              audioPrompt: `Diaphragmatic breathing is the technical name for belly breathing, {name}. The diaphragm is the dome-shaped muscle below your lungs. When you breathe diaphragmatically, the diaphragm flattens and pushes down, your belly expands out. This is what singers, public speakers, actors, and meditation teachers all learn. It produces a fuller, warmer, more relaxed sound than shallow chest breathing. It also calms the nervous system by triggering the parasympathetic response. The stress response makes you breathe shallow and tight, which tightens the voice. Belly breath reverses this.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Pitch Matching Is Trainable (Almost Always)`,
          paragraphs: [
            `Now the second technical truth. PITCH is the high-or-lowness of a note. PITCH MATCHING is the ability to sing the same note you hear. This is the actual skill people are talking about when they say "in tune" or "off-key." Here's what researchers have found, and this matters. Pitch matching is TRAINABLE for almost everyone. Even people who think they can't do it can improve dramatically with practice, especially at your age. The myth that "some people are tone deaf" is mostly false. A real medical condition called AMUSIA exists, but it affects only about 4% of people. The other 96% of "tone deaf" people aren't actually tone deaf. They just haven't practiced pitch matching, or they were shamed early and stopped trying.`,
            `Pitch matching practice is surprisingly simple. Have someone (or an app, or a piano, or a video) play ONE note. Try to sing the same note. Listen carefully. If you went too high, come down. If too low, come up. Adjust until you're matching. With a few minutes of this daily for a few weeks, most kids dramatically improve. Researchers studying voice training have found this almost universally. The kid who thinks they're "tone deaf" is usually just a kid who never practiced pitch matching with patient guidance. The voice can hear better than people think. The brain can adjust the voice better than people think. The system works. It just needs gentle practice.`,
          ],
          image: `/ue-assets/ca/l07-s3-pitch.webp`,
          imageCaption: `Pitch matching is trainable for ~96% of people. "Tone deaf" is mostly a label kids use after early shame.`,
          vocab: [
            { word: `pitch matching is trainable`,
              definition: `The ability to sing the same note you hear (what people call "in tune"). Trainable for ~96% of people. True amusia (medical tone-deafness) is only about 4%. Most "tone deaf" labels are kids who never practiced or were shamed early. Practice: hear one note, sing it, adjust until matching. A few minutes daily for weeks = dramatic improvement.`,
              audioPrompt: `Pitch matching is the ability to sing the same note you hear, {name}. True amusia, medical tone-deafness, affects only about 4% of people. The other 96% of tone-deaf people aren't actually tone deaf. They just haven't practiced pitch matching, or they were shamed early. Practice is simple. Hear one note. Try to sing the same note. Listen carefully. If too high, come down. If too low, come up. A few minutes daily for weeks, most kids dramatically improve.` },
            { word: `natural vocal range`,
              definition: `The span from your lowest to highest comfortable notes. Ranges vary and every voice has its own. Singing OUTSIDE your natural range sounds strained or thin. Pop music is mostly written for adult voices, often higher than kids naturally sing. Finding songs that fit your natural range makes your voice sound completely different.`,
              audioPrompt: `Natural vocal range is the span from your lowest to highest comfortable notes, {name}. Every voice has a range. When you try to sing a song that's in the wrong range, your voice strains or goes thin. This isn't your voice being bad. It's physics. Pop songs are mostly written for adult voices, often in ranges that don't fit kids your age. Find songs in your natural range, or use an app to lower the key. Your voice in its own range sounds completely different.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Finding Your Range (And Reclaiming the Voice)`,
          paragraphs: [
            `Every voice has a RANGE, the span from the lowest note you can comfortably sing to the highest. Trying to sing in someone else's range is a setup for sounding bad. A kid whose natural range is medium-low trying to sing high pop songs will sound strained. A kid whose natural range is high trying to sing low songs will sound thin. Find SONGS that fit YOUR range, and your voice immediately sounds better. Range also stretches with use. The more you sing, the more range you develop. But singing comfortably in your natural range first is the gentle way in. Pop music is mostly written for adult voices. If something doesn't fit yours, that's the SONG, not your voice.`,
            `Here's how to reclaim the voice that may have gotten quiet. Sing in PRIVATE first, no audience pressure. Sing along to songs you love. Use belly breath. Match pitches gently. Don't push for big sound; let it come. Sing for the joy of singing, not for performance. As your voice gets familiar to YOU again, you'll start feeling braver about letting others hear it. Singing is also one of the most-proven mood lifters in psychology research, singing literally releases mood-supporting chemicals in the brain. People who sing regularly report higher happiness and lower stress. Muse-truth, your voice is yours. The shame can be unlearned. Singing belongs to every human. Reclaim what was always yours. Even if you only sing in the shower, sing.`,
          ],
          image: `/ue-assets/ca/l07-s4-range.webp`,
          imageCaption: `Find your natural range. Sing in private first. Singing lifts mood chemically. Your voice is yours.`,
          vocab: [
            { word: `finding your range and reclaiming voice`,
              definition: `RANGE is the span from your lowest to highest comfortable notes. Singing OUTSIDE your range sounds strained; finding songs that FIT your range makes your voice sound better immediately. Reclaiming voice: sing in private first, no audience pressure, belly breath, sing for joy. Singing also chemically lifts mood and lowers stress (research-backed).`,
              audioPrompt: `Finding your range and reclaiming the voice, {name}. Every voice has a range, the span from the lowest note you can comfortably sing to the highest. Trying to sing in someone else's range sounds bad. Find songs that fit YOUR range, and your voice immediately sounds better. To reclaim a voice that may have gotten quiet, sing in private first, no audience pressure. Sing along to songs you love. Use belly breath. Match pitches gently. Don't push for big sound. Sing for joy, not performance.` },
            { word: `singing for joy`,
              definition: `Singing without performance pressure — for the physiological and emotional benefits of the act itself. Research shows singing releases mood-supporting chemicals, reduces stress, and builds social bonding. Singing in private first, for the joy of moving air through the body in patterns, is how reclaimed singers grow. The voice strengthens when singing feels safe.`,
              audioPrompt: `Singing for joy is the practice of singing without performance pressure, {name}. Research shows singing releases mood-supporting chemicals in the brain. People who sing regularly report higher happiness and lower stress. Group singing has measurable bonding effects. The benefits come from the act itself, not from performing for others. Singing in private first, for the joy of moving air through the body in patterns, is how reclaimed singers grow. The voice strengthens when singing feels safe. Even if you only sing in the shower, sing.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four ideas about singing. Classify each: REAL SINGING WISDOM (research-backed, true), SINGING MYTH (sounds true but mostly isn't), or SINGING BLOCKER (kills the voice through shame or fear)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `wisdom`,  label: `Real Singing Wisdom`, color: `#34D399`, description: `Research-backed, true. Breath foundation, pitch matching is trainable, every voice is interesting, find your range, sing for joy first.` },
            { id: `myth`,    label: `Singing Myth`,         color: `#FBBF24`, description: `Sounds true and gets repeated, but research and experience contradict it. Often used to explain away the discomfort of trying.` },
            { id: `blocker`, label: `Singing Blocker`,      color: `#F87171`, description: `Actively kills the voice through shame, comparison, or fear. The thing that stopped many kids from singing around your age.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Idea #1`,
              clues: [
                { text: `A kid wants to learn to sing. They start by practicing belly breath for a few minutes a day.` },
                { text: `Then they sing along to songs they love in the privacy of their room.` },
                { text: `They don't worry about being good. They just sing.` },
              ],
              correctAnswer: `wisdom`,
              realWorldExample: `Belly breath + private practice + singing for joy = exactly how voices grow.`,
              explanation: `Pure singing wisdom. The kid is doing everything right. They're practicing the foundation (breath). They're singing in a low-pressure setting (private). They're singing for joy, not performance. This is exactly how voices grow. Researchers studying vocal development have found this kind of low-stakes regular singing strengthens the voice dramatically. Within months, this kid will have a more confident, fuller, more expressive voice. Most adults who think they "can't sing" never had this kind of gentle practice. The kid is on the right path.`,
            },
            {
              id: `case-2`,
              caseTitle: `Idea #2`,
              clues: [
                { text: `A teacher told a kid years ago to "just mouth the words" during a school concert because their voice wasn't strong enough.` },
                { text: `The kid hasn't sung out loud since. They're 9 now.` },
                { text: `They love music but believe they "have a terrible voice."` },
              ],
              correctAnswer: `blocker`,
              realWorldExample: `One shaming moment + years of silenced voice = textbook singing blocker.`,
              explanation: `Pure singing blocker. This is one of the most common stories researchers hear from people who think they "can't sing." A specific shaming moment, often from a teacher or family member, became a years-long identity. The voice itself was probably fine; it just needed practice and patience. By telling the kid to mouth the words, the teacher created a wound that's now blocking the voice from developing. If this happened to you, please know, the voice can come back. The wound was theirs, not yours. The voice is still there.`,
            },
            {
              id: `case-3`,
              caseTitle: `Idea #3`,
              clues: [
                { text: `A kid sings along to a song that's way too high for their natural voice.` },
                { text: `They strain to reach the high notes and sound thin and screechy.` },
                { text: `They conclude "I'm a bad singer" instead of "this song is in the wrong range for me."` },
              ],
              correctAnswer: `myth`,
              realWorldExample: `Wrong range + thinking it means "bad voice" = the most common singing myth.`,
              explanation: `Pure singing myth. The kid is conflating two completely different things, the SONG being in the wrong range vs. their VOICE being bad. Adult pop songs are mostly written for adult voices, often higher than kids your age can comfortably sing. Trying to sing them and sounding strained doesn't mean your voice is bad, it means the song doesn't fit your current range. The fix: find songs that fit your natural range, or sing pop songs in a lower key (many apps and karaoke systems let you adjust). Your voice in its own range will sound completely different.`,
            },
            {
              id: `case-4`,
              caseTitle: `Idea #4 — The Tricky One`,
              clues: [
                { text: `A kid declares "I'm just TONE DEAF. I literally can't hear pitch correctly. There's no point in even trying."` },
                { text: `They've never actually tested whether they can match pitch with practice.` },
                { text: `They use "tone deaf" as a shield to never have to try and risk being judged.` },
              ],
              correctAnswer: `myth`,
              realWorldExample: `"I'm tone deaf" + never tested + used as shield from trying = singing myth in shame's disguise.`,
              explanation: `Tricky, {name}! It LOOKS like the kid is being honest about their medical reality ("I'm tone deaf"). So you might call this wisdom or even just truth. But pause. True medical amusia (actually being unable to perceive pitch) affects only about 4% of people. The vast majority of people who say "I'm tone deaf" haven't been medically tested and have never practiced pitch matching with patient guidance. They use the label as a SHIELD from the discomfort of trying and possibly sounding bad. Pure singing myth in the disguise of self-knowledge. Real tone-deafness is rare. "Tone deaf" as identity is usually unpracticed pitch matching plus shame. The fix: just try pitch matching for a few minutes daily for a few weeks, kindly. Most "tone deaf" kids improve dramatically.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l07-q1`, format: `true-false`,
              question: `True or false: The framing of voices as "good" or "bad" is mostly objective truth.`,
              correctAnswer: false,
              explanation: `False. The "good voice / bad voice" framing is mostly a cultural invention. "Good voice" usually means "voice that fits what we expect." Every voice is interesting. Some of the most beloved singers (Bob Dylan, Billie Holiday, Tom Waits) have unusual voices that wouldn't be called "pretty." They're beloved BECAUSE their voices are distinct.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `Where does the "I can't sing" identity usually come from?`,
              options: [
                `Real lack of voice`,
                `A SPECIFIC SHAMING MOMENT — a teacher's comment, a sibling's laugh, being told to mouth the words; the voice itself is usually fine; the shame is what stopped it`,
                `Random`,
                `Birth`,
              ],
              correctIndex: 1,
              explanation: `Researchers found the "I can't sing" identity usually came from a specific moment: a teacher said something, a sibling laughed, a kid was told to mouth the words during a concert. That moment shaped years of self-belief. The voice itself is usually fine. The shame is what stopped it. The shame can be unlearned.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `What is the FOUNDATION of singing well?`,
              options: [
                `Natural talent`,
                `BREATH — voice quality depends way more on breath than anything else; BELLY BREATHING (hand on belly, breathe in, feel belly expand) produces fuller, warmer, relaxed sound`,
                `Random luck`,
                `Loud voice`,
              ],
              correctIndex: 1,
              explanation: `Breath is the foundation. The voice is made of breath. Air moves from lungs past vocal cords. Voice quality depends way more on breath than anything else. Belly breathing (hand on belly, breathe in through nose, feel belly expand, then sing or speak while belly comes back in) produces fuller, warmer, relaxed sound. Most kids breathe shallowly into chest when nervous.` },

            { id: `l07-q4`, format: `true-false`,
              question: `True or false: "Tone deafness" is real and affects most people.`,
              correctAnswer: false,
              explanation: `False. A real medical condition called AMUSIA exists, but it affects only about 4% of people. The other 96% of "tone deaf" people aren't actually tone deaf. They just haven't practiced pitch matching, or were shamed early. Pitch matching is trainable for almost everyone with a few minutes of daily practice over a few weeks.` },

            { id: `l07-q5`, format: `multiple-choice`,
              question: `How does PITCH MATCHING actually work?`,
              options: [
                `Magic`,
                `Hear ONE note, try to sing the SAME note, listen carefully, adjust (if too high, come down; too low, come up); a few minutes daily for weeks = dramatic improvement`,
                `Random`,
                `Just intuition`,
              ],
              correctIndex: 1,
              explanation: `Pitch matching practice is simple. Have someone (or app, piano, video) play ONE note. Try to sing the same note. Listen carefully. If too high, come down. If too low, come up. A few minutes of this daily for a few weeks, most kids dramatically improve. The voice can hear better than people think. The brain can adjust the voice better than people think.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What is your VOCAL RANGE?`,
              options: [
                `How loud you can sing`,
                `The span from the LOWEST note you can comfortably sing to the HIGHEST — singing outside your range sounds strained; finding songs that FIT your range makes your voice sound better immediately`,
                `Random`,
                `How long you can sing`,
              ],
              correctIndex: 1,
              explanation: `Range is the span from your lowest to highest comfortable notes. Trying to sing in someone else's range sounds strained. A kid whose natural range is medium-low trying to sing high pop songs will sound strained. Find songs that FIT your range, and your voice immediately sounds better. Pop music is mostly written for adult voices.` },

            { id: `l07-q7`, format: `true-false`,
              question: `True or false: SINGING actually releases mood-supporting chemicals in the brain.`,
              correctAnswer: true,
              explanation: `True. Singing is one of the most-proven mood lifters in psychology research. It literally releases mood-supporting chemicals in the brain. People who sing regularly report higher happiness and lower stress. Even if you only sing in the shower, sing. Your voice is yours, and using it lifts your mood chemically.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What's Muse's first teaching about the voice?`,
              options: [
                `Some people can't sing`,
                `The voice you have is YOURS — interesting, worth using. "Good/bad voice" is mostly cultural. Breath is the foundation. Pitch matching is trainable. Singing is birthright`,
                `Random`,
                `Only trained singers count`,
              ],
              correctIndex: 1,
              explanation: `The voice you have is yours. Interesting. Worth using. Built into your body. "Good voice/bad voice" is mostly cultural. Breath is the foundation. Pitch matching is trainable for almost everyone. Find your natural range. Sing for joy, not performance. The voice is one of the only instruments built into your body. Almost every kid is born wanting to sing. Reclaim what was always yours.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Take a soft breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What's your STORY with singing? Did someone shape your sense of your voice, kindly or unkindly? Notice it without judgment.` },
            { id: `r2`, text: `Try the belly breath RIGHT NOW. Hand on your belly. Slow breath in, feel belly expand. Slow breath out. What did you notice?` },
            { id: `r3`, text: `Have you been carrying the label "tone deaf" or "bad singer"? How might that label have started? What might it feel like to set it down for a while?` },
            { id: `r4`, text: `What's a song you secretly love to sing along to? Where do you only sing it (car, shower, alone)? What would help you sing it more freely?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Research on voice and singing has consistently confirmed several truths. (1) True congenital tone-deafness (amusia) affects only about 4% of people; the rest who think they're "tone deaf" can learn pitch matching with patient practice. (2) Singing supports mental health, mood regulation, and even immune function. (3) Group singing has measurable bonding effects on the people doing it together. (4) The "I can't sing" identity is one of the most well-documented results of childhood shaming in music education. None of this is woo. It's measured science. Muse-note: somewhere between ages 8 and 11, an enormous number of kids stop singing freely. They've absorbed the message that singing is for "talented people." This silencing has real costs: lower mood, less self-expression, weakened relationship with one's own body. If you've been silenced, please know it isn't permanent. The voice can come back. Start in private. Use belly breath. Sing songs you love. Don't perform for anyone. Just sing for the joy of moving air through your body in patterns. The voice you have is one of the most personal things about you. It deserves to be used. Singing is a birthright. Reclaim yours.`,
          familyAdventure: `Family Singing Reclamation. As a family, pick ONE song everyone in the household loves. Put it on. Sing along together this week. No critiquing anyone's voice. No "you sound funny." Just sing together. Adults model singing freely, this matters more than anything. When kids see adults sing without shame (even if the adult thinks they "can't sing"), they get permission too. The car is a great place for this. The kitchen while making dinner. Anywhere. Many families discover they ALL stopped singing somewhere along the way, and reclaiming family singing becomes one of the most healing rituals they have. Voices belong in homes.`,
          creativePrompt: {
            intro: `Write about your relationship with your voice and what you want to reclaim.`,
            floor: `Write at least 5 sentences. Name your singing story and one small reclaim move.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on your voice and singing.`,
            open: `Write as much as you want. Reflect honestly on your relationship with your voice. Have you been told (or told yourself) that you "can't sing"? Where did that belief start? Was there a specific moment? Describe how you feel when you sing alone vs. in front of others. What's the difference? Acknowledge that the voice is YOURS, regardless of what anyone has said about it. Describe ONE small practice you'll try this week (belly breath for 5 minutes, singing along to one song in your room, matching pitches gently with a piano or app). Acknowledge that reclaiming the voice is a tender practice and takes time. End with a kindness to the voice you have, the actual voice in your actual body. Make it real and brave and gentle.`,
            frames: [
              `My singing story: ___.`,
              `Where the "I can't sing" belief started (if it did): ___.`,
              `How I feel singing alone vs. with others: ___.`,
              `One small reclaim move this week: ___.`,
              `A kindness to the voice I actually have: ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Beautifully done, {name}. You now know what almost no one tells kids about the voice. Every voice is interesting. Breath is the foundation. Pitch matching is trainable for almost everyone. Find your natural range. Sing for joy, not performance. The voice is yours. The shame can be unlearned. Singing is a birthright. Even if you only sing in the shower, sing. Next, we step into another art form built from breath and rhythm. WRITING AS ART, poetry and story. Fluttering on. Muse 🦋.`,
          badge: `voice-claimer`,
          badgeName: `Voice Claimer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default CREATIVEARTS_UE_L07;
