// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L06 — Singing and the Voice
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L06 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-06`,
      title:     `Singing and the Voice`,
      duration:  12,
      xpReward:  50,
      badge:     `voice-explorer`,
      badgeName: `Voice Explorer`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Something remarkable, {name}: you were born carrying a musical instrument. Not a trumpet or a violin you had to save up for — your voice. And it can do things no other instrument can: it can carry words with emotional weight, it can imitate, it can improvise, it can express something precise about how a specific person feels in a specific moment in ways a piano simply cannot. Today we're going to look at how your voice actually works — the real mechanics of it — and what it means to use it with intention. Whether you think of yourself as a singer or not, this lesson is for you.`,
          headline: `Singing and the Voice`,
          subtitle: `Your voice is the only instrument you were born with — and it can do things no other instrument can. Learning how it works, and how to use it with intention, opens a whole world that was always already inside you`,
          visual: `/explorer-assets/creative-arts/l06-welcome.png`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Instrument You Were Born With`,
          paragraphs: [
            `You were born carrying a musical instrument. Your voice.`,
            `It can do things no piano can: carry words with weight, imitate, improvise, express what a specific person feels in a specific moment.`,
          ],
          image: `/explorer-assets/creative-arts/l06-s1-born-instrument.png`,
          imageCaption: `You didn't have to buy it or save up for it. You were born with the most personal instrument there is.`,
          vocab: [
            { word: `voice`,     definition: `The sound a human makes with their vocal cords. The only instrument you were born with.`,
              audioPrompt: `Your voice is the most personal instrument there is, {name}. No two voices are identical — not even between twins. Yours is acoustically unique, shaped by everything from the size of your skull to the precise length of your vocal cords. It's already yours. The question is what you'll do with it.` },
            { word: `intention`, definition: `Deliberate purpose. Using your voice with intention means choosing how it sounds on purpose, not by accident.`,
              audioPrompt: `Intention is the difference between making sound and making art, {name}. Most people use their voice unconsciously. Singers, actors, and speakers use it on purpose — choosing volume, color, phrasing as deliberately as a painter chooses colors. Intention is what turns noise into expression.` },
            { word: `unique`,    definition: `One of a kind. Every human voice is acoustically unique — yours has never existed before and never will again.`,
              audioPrompt: `Every voice is unique, {name} — even between identical twins. The shape of your throat, the length of your cords, the way your skull resonates: all of it conspires to produce a sound that is only yours. The world has never heard your exact voice before, and it never will again.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How the Voice Works`,
          paragraphs: [
            `Your voice comes from vocal cords — two folds of tissue in your throat. Air passes through. They vibrate. That vibration becomes your voice.`,
            `Faster vibration = higher pitch. Slower = lower. You adjust the tension without thinking.`,
          ],
          image: `/explorer-assets/creative-arts/l06-s2-vocal-cords.png`,
          imageCaption: `Two folds of tissue. Air passing through. Vibration becoming sound. Your voice is simpler than you'd think.`,
          vocab: [
            { word: `vocal cords`, definition: `Two small folds of tissue in your throat that vibrate as air passes through them, producing sound.`,
              audioPrompt: `Your voice comes from two tiny folds of tissue in your throat, {name} — your vocal cords. When air passes through, they vibrate. Tighter cords = higher pitches. Looser cords = lower. Same principle as a guitar string. A living instrument you've been playing your whole life.` },
            { word: `vibration`,   definition: `The rapid back-and-forth movement that creates sound waves. Faster vibration produces higher pitch.`,
              audioPrompt: `Every sound began as a vibration, {name}. Vocal cords vibrate. Guitar strings vibrate. Drum skins vibrate. Sound is vibration moving through air to your ear. Your voice is just a very particular way of creating vibrations — and your brain controls it without you ever noticing.` },
            { word: `larynx`,      definition: `The structure in your throat that houses your vocal cords. Also called the voice box.`,
              audioPrompt: `Your larynx is your voice box, {name} — the small structure in your throat where breathing becomes speaking, becomes singing. Place a hand on your throat and hum — that vibration you feel is the larynx at work. Every voice's unique larynx makes it unrepeatable.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Breath Is the Engine`,
          paragraphs: [
            `Singing runs on breath. The DIAPHRAGM — a dome-shaped muscle below your lungs — is the engine.`,
            `Place a hand on your belly. If it pushes OUT when you inhale, you're using your diaphragm. That deep breathing is what gives singers their power and control.`,
          ],
          image: `/explorer-assets/creative-arts/l06-s3-diaphragm-engine.png`,
          imageCaption: `Belly out on the inhale = diaphragm working. That's the engine of every powerful note ever sung.`,
          vocab: [
            { word: `diaphragm`,      definition: `The dome-shaped muscle beneath the lungs that drives deep breathing. The engine of singing.`,
              audioPrompt: `Place a hand on your belly and breathe deeply, {name}. If your belly pushes out, that's your diaphragm doing its job — pulling air deep into your lungs. Singers train this way because diaphragmatic breathing gives far more air and far more control than shallow chest breathing.` },
            { word: `breath support`, definition: `The controlled flow of air from the diaphragm that powers and sustains singing. The foundation of vocal control.`,
              audioPrompt: `Breath support is what holds a note up, {name}. Without it, long notes waver or run out. With it, a singer can hold a phrase steady from beginning to end. All the other singing skills — pitch, resonance, expression — build on breath support as their foundation.` },
            { word: `sustain`,        definition: `The ability to hold a note long and full without it wavering. Made possible by good breath support.`,
              audioPrompt: `Sustain is the ability to hold, {name} — to keep a note full and alive without it fading or cracking. When a singer holds a long note at the climax of a song and it just keeps going, that's sustain. Not just breath — controlled breath, directed with precision.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Chest, Head, and Placement`,
          paragraphs: [
            `Once your cords create sound, your chest, throat, and head amplify and color it.`,
            `CHEST VOICE is deeper, fuller, felt in the chest. HEAD VOICE is lighter, higher, felt behind the forehead. Skilled singers move between both, and place the sound on purpose.`,
          ],
          image: `/explorer-assets/creative-arts/l06-s4-chest-head-resonance.png`,
          imageCaption: `Chest voice rumbles low. Head voice rings high. Real singers don't pick one — they learn the bridge between them.`,
          vocab: [
            { word: `resonance`,   definition: `The amplifying and enriching of the voice through chest, throat, mouth, and head cavities. What gives each voice its color.`,
              audioPrompt: `Your voice resonates in your whole body, {name} — not just your throat. Chest, sinuses, mouth, forehead: all resonating chambers. Hum a low note and feel your chest vibrate. Hum a high one and feel it buzz behind your nose. Singers learn to direct resonance on purpose.` },
            { word: `chest voice`, definition: `The deeper, fuller vocal register felt vibrating in the chest. Most speaking voices live here.`,
              audioPrompt: `When you speak normally, {name}, you're probably in chest voice — the register that resonates in your chest, feels grounded and full. Put a hand on your sternum and speak: you'll feel it vibrate. Chest voice is the foundation of a strong lower range.` },
            { word: `head voice`,  definition: `The lighter, higher register felt in the head and nasal cavities. Used for the upper part of a singer's range.`,
              audioPrompt: `Head voice lives higher up, {name} — felt more behind the nose and forehead than in the chest. It's lighter, airier, capable of reaching pitches chest voice can't easily get to. Learning to move between chest and head voice smoothly is one of the great challenges of singing.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Expression`,
          paragraphs: [
            `Hitting the right notes is only half of singing. The other half is expression.`,
            `Soft vs loud (dynamics). Where you breathe (phrasing). Warm vs bright (tone color). The same notes with different choices tell completely different stories.`,
          ],
          image: `/explorer-assets/creative-arts/l06-s5-expression-color.png`,
          imageCaption: `Same notes, different choices, different story. Expression is the part technique can't replace.`,
          vocab: [
            { word: `dynamics`,   definition: `The variation in volume — from very soft to very loud. Singers use dynamics to create emotional shape.`,
              audioPrompt: `Dynamics are the volume of your feelings, {name}. A whispered phrase creates intimacy. A sudden full-voiced note creates power. A drop to silence can be more emotionally powerful than the biggest note in the song. Singers who only sing at one volume are telling only one shade of the story.` },
            { word: `phrasing`,   definition: `How a singer shapes the flow of a melody — where to breathe, lean in, pause, pull back.`,
              audioPrompt: `Phrasing is the interpretation layer, {name} — not what notes you sing but how you move between them. Where you breathe. Which word you lean into. Two singers can perform the same song with the same notes and produce completely different emotional experiences through phrasing alone.` },
            { word: `tone color`, definition: `The quality of a vocal sound — warm, bright, dark, breathy, full. The mood inside the note.`,
              audioPrompt: `Tone color is the mood inside the note, {name}. The same pitch can sound warm or bright, breathy or full. A dark tone creates weight. A bright tone cuts through. A breathy quality creates vulnerability. Great singers shift tone color as a storytelling tool, note by note.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Voice That Means What It Sings`,
          paragraphs: [
            `Your voice is not just an instrument for making sound. It's a tool for expressing what words alone cannot say.`,
            `Whether or not you call yourself a singer, your voice was made to be used with intention.`,
          ],
          image: `/explorer-assets/creative-arts/l06-s6-voice-meaning.png`,
          imageCaption: `The voice exists to carry meaning across. Use it on purpose, and it stops being noise — and starts being you.`,
          vocab: [
            { word: `expression`,    definition: `How your voice communicates feeling beyond just the words. The deeper purpose of using a voice at all.`,
              audioPrompt: `Expression is why a voice exists at all, {name}. Not just to make sounds, but to carry feelings across. A voice that means what it says — really means it — does something words alone can't do. That's the difference between speaking and being heard.` },
            { word: `communication`, definition: `The act of sharing what you feel or think with another person. The voice's deepest purpose.`,
              audioPrompt: `Communication is the heart of why we have voices at all, {name}. Not just information — feeling. Connection. The reason a voice across a room can comfort you in a way that the same words on a page can't quite reach. Your voice is the most direct line you have to other humans.` },
            { word: `artistry`,      definition: `The deliberate use of skill in service of expression. What technique becomes when used with intention.`,
              audioPrompt: `Artistry is technique with a purpose, {name}. A singer can hit every note perfectly and still feel cold. Or hit imperfect notes and move you to tears. The difference is artistry — the deliberate use of every skill in service of expression. Technique is the floor. Artistry is the building.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `builds`,
              label: `✅ A Habit That Builds Your Voice`,
              color: `#34D399`,
            },
            {
              id: `limits`,
              label: `⚠️ A Habit That Holds It Back`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l06-g1`,
              image: `l06-game-1.png`,
              label: `Taking a deep breath that makes your belly push out before singing a long phrase.`,
              matchPhrase: `That's diaphragmatic breathing — the engine of the singing voice. When the belly expands on the inhale, the diaphragm is pulling in a full, deep breath. That steady air flow is what gives a note its staying power and keeps it from running out before the phrase ends.`,
              correctMatch: `builds`,
            },
            {
              id: `l06-g2`,
              image: `l06-game-2.png`,
              label: `Singing the same words softly and gently, then loudly and boldly, to see how different they feel.`,
              matchPhrase: `That's exploring expressive dynamics — one of the most powerful tools a singer has. The same notes sung at different volumes, with different tone colours, communicate completely different emotions. Experimenting with this trains your voice to tell stories, not just make sounds.`,
              correctMatch: `builds`,
            },
            {
              id: `l06-g3`,
              image: `l06-game-3.png`,
              label: `Taking quick, shallow breaths into the chest before every phrase, only filling the top of the lungs.`,
              matchPhrase: `Shallow chest breathing gives you far less air and far less control than belly breathing. Without the diaphragm driving a steady stream of air, notes waver, run out too soon, and the voice tires quickly. The diaphragm is the engine — chest breathing leaves it unused.`,
              correctMatch: `limits`,
            },
            {
              id: `l06-g4`,
              image: `l06-game-4.png`,
              label: `Singing every song with the same flat, even tone — no louder, no softer, no change in how warm or bright it sounds.`,
              matchPhrase: `A voice that never changes dynamic or tone colour can hit every note correctly and still feel flat and emotionless. Expression — the choices you make about loud and soft, bright and warm, where to breathe and pause — is what makes singing communicate something. Without it, technique has no soul.`,
              correctMatch: `limits`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l06-q1`,
              format: `multiple-choice`,
              question: `What causes your voice to produce different pitches when you sing?`,
              options: [
                `The amount of air you breathe in before singing`,
                `The size of your mouth and how wide you open it`,
                `The speed at which your vocal cords vibrate — faster vibration creates higher pitch, slower creates lower`,
                `The position of your tongue against your teeth`,
              ],
              correctIndex: 2,
              explanation: `Pitch is controlled by the vibration rate of your vocal cords. When the cords are tighter, they vibrate faster and produce higher pitches. When looser, they vibrate more slowly and produce lower pitches. This is why your voice changes as you sing up or down a scale — your brain and muscles are adjusting the tension of the vocal cords in real time, even though you don't consciously think about it.`,
            },
            {
              id: `l06-q2`,
              format: `multiple-choice`,
              question: `Why do singers train diaphragmatic (belly) breathing rather than shallow chest breathing?`,
              options: [
                `Because chest breathing creates unwanted vibration in the ribcage`,
                `Because belly breathing fills the lungs more completely and gives far greater control over the steady flow of air that powers the voice`,
                `Because diaphragmatic breathing raises the pitch of the voice`,
                `Because chest breathing is too loud and overpowers the vocal cords`,
              ],
              correctIndex: 1,
              explanation: `The diaphragm is a large, powerful muscle that, when used properly, pulls in a full breath and then releases it in a steady, controlled stream. This gives singers much greater air volume and much finer control over how that air drives the vocal cords. Shallow chest breathing uses only a small part of lung capacity and provides an unsteady air stream — notes waver, run out too soon, and the voice tires quickly.`,
            },
            {
              id: `l06-q3`,
              format: `multiple-choice`,
              question: `How can a singer make the same words feel completely different without changing the notes?`,
              options: [
                `By singing them at a different tempo only`,
                `By changing dynamics, phrasing, and tone colour — soft vs. loud, where they breathe, and warm vs. bright sound`,
                `By singing with a different accent`,
                `By repeating the words more times`,
              ],
              correctIndex: 1,
              explanation: `Expression in singing comes from the choices a singer makes about dynamics (volume), phrasing (where to breathe and pause), and tone colour (breathy vs. full, bright vs. warm). The same melody sung softly with a breathy tone feels intimate and vulnerable. Sung loudly with a full resonant tone it feels powerful and joyful. The notes haven't changed — only the expressive choices have. This is why skilled singers can make a simple song feel deeply moving.`,
            },
            {
              id: `l06-q4`,
              format: `true-false`,
              question: `Both chest voice and head voice are real and useful registers — professional singers learn to move between them smoothly rather than staying in just one.`,
              correctAnswer: true,
              explanation: `True. Chest voice (the deeper, fuller sound felt vibrating in the chest) and head voice (the lighter, higher sound felt in the head and nasal area) are both genuine and valuable. Limiting yourself to one register limits your range and expression. Professional singers train to transition smoothly between the two — and the ability to blend them creates the richest, most flexible vocal sound.`,
            },
            {
              id: `l06-q5`,
              format: `fill-blank`,
              question: `Deep breathing where the ___ pushes out on the inhale is called diaphragmatic breathing — the foundation of vocal control.`,
              options: [
                `belly`,
                `chest`,
                `throat`,
                `shoulders`,
              ],
              correctIndex: 0,
              explanation: `Diaphragmatic breathing is recognisable by the belly expanding outward on the inhale — a sign that the diaphragm is pulling down and filling the full capacity of the lungs. When the belly doesn't move and the chest rises instead, only the top portion of the lungs is being used. The belly expanding is the cue that the singer is using the powerful, efficient breathing that supports a strong, controlled voice.`,
            },
            {
              id: `l06-q6`,
              format: `multiple-choice`,
              question: `Why is breath described as the foundation of the singing voice?`,
              options: [
                `Because breathing louder makes the voice louder`,
                `Because the air stream from the lungs is what sets the vocal cords vibrating — without it, there is no sound at all`,
                `Because holding breath between phrases is the main way singers control pitch`,
                `Because breath controls the resonance chambers in the head`,
              ],
              correctIndex: 1,
              explanation: `The vocal cords don't vibrate on their own — they need a stream of air passing through them to set them in motion. Breath is literally what generates the sound. The quality, quantity, and steadiness of that breath stream determines whether the voice sounds strong and controlled or thin and wavering. Everything else — pitch, tone, expression — is built on top of this foundation. A singer without breath support is like a musician with no strings on the instrument.`,
            },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `The voice is used in every human culture as the primary instrument of music and communication. Opera singers spend years developing the power to fill a concert hall with no microphone. Spoken-word artists, actors, auctioneers, and teachers all depend on breath support and vocal expression. The same principles that make a professional singer powerful — deep breathing, intentional expression, resonant placement — apply to anyone who uses their voice to communicate.`,
          familyAdventure: `Sing a favourite family song together — a lullaby, a pop song, a hymn, anything familiar. Sing it once normally. Then sing it again very softly and gently. Then once more as big and boldly as you can. Talk about what felt different — what emotions each version brought up, and how the same song can feel so different. Then try letting each person in the family lead a verse in any way they choose.`,
          creativePrompt: `Try these three experiments with your own voice. (1) Place one hand on your belly and breathe in — does it push out? If not, try lying on the floor: breathing naturally in this position often triggers diaphragmatic breathing automatically. (2) Say the words "I love this day" four different ways: happily, sadly, excitedly, and sleepily — notice how your voice changes without changing the words. (3) Hum with your lips closed and feel where you sense vibration — move it up to feel head resonance, down to feel chest resonance. You've just explored three fundamental elements of the singing voice.`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that your voice is not just something that happens — it's something you can understand, develop, and use with real intention. Every breath you take before a phrase, every choice to sing it soft or full or warm — that's artistry. Muse believes there is nothing more human than a voice that means what it sings.`,
          badge: `voice-explorer`,
          badgeName: `Voice Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L06.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L06] Loaded: "Singing and the Voice" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l06-s1-born-instrument.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-s2-vocal-cords.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-s3-diaphragm-engine.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-s4-chest-head-resonance.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-s5-expression-color.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-s6-voice-meaning.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L06] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L06] One or more magazine assets missing'));
}
