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
          headline: `How the Voice Works`,
          paragraphs: [
            `Your voice is produced by **vocal cords** — two small folds of tissue inside your larynx (voice box) in your throat. When air passes through them, they vibrate. Those vibrations create **sound waves** — and those sound waves are your voice. The faster the cords vibrate, the **higher** the pitch. The slower, the **lower**. You control pitch by adjusting the tension in the cords — tighter for high notes, looser for low ones. The sound then travels through your throat, mouth, and nasal cavities, which shape and amplify it into the specific voice that is uniquely yours. No two voices are identical — not even among twins.`,
          ],
          image: `/explorer-assets/creative-arts/l06-magazine-1.png`,
          imageCaption: `Vocal cords vibrate as air passes through — faster vibration means higher pitch, slower means lower`,
          vocab: [
            { word: `vocal cords`, definition: `Two small folds of tissue in the larynx that vibrate as air passes through them, producing the sound waves that become your voice.`, audioPrompt: `Your voice comes from two tiny folds of tissue in your throat, {name} — your vocal cords. When air from your lungs passes through them, they vibrate, and those vibrations become sound. Tighten them and you get higher pitches. Loosen them and the pitch drops. It's the same principle as a guitar string: tighter means higher. Your voice is a living instrument you've been playing your whole life.` },
            { word: `vibration`, definition: `The rapid back-and-forth movement that creates sound waves — faster vibration produces higher pitch, slower vibration produces lower pitch.`, audioPrompt: `Every sound you've ever heard, {name}, began as a vibration. Your vocal cords vibrate. A guitar string vibrates. A drum skin vibrates. Sound is vibration moving through air until it reaches your ear. What changes the pitch is the speed of that vibration. This is why a hummingbird's wings sound higher than a bee's — faster vibration, higher pitch. Your voice is just a very particular, very personal way of creating vibrations.` },
            { word: `larynx`, definition: `The structure in your throat that houses your vocal cords — also called the voice box — where air from the lungs is turned into sound.`, audioPrompt: `The larynx is your voice box, {name} — the small structure in your throat where breathing becomes speaking, becomes singing. You can feel it if you place a hand on your throat and hum: that's the larynx vibrating. When voices change during adolescence, it's the larynx growing — which temporarily shifts how the vocal cords can produce sound. Every voice, in its own larynx, is completely unique. No two are exactly alike.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Breath: The Foundation of Voice`,
          paragraphs: [
            `Singing runs on breath. The **diaphragm** — a dome-shaped muscle beneath your lungs — is your engine. When you breathe in deeply, the diaphragm moves **down**, pulling air into the lungs. When you breathe out to sing, it pushes up, sending a steady stream of air over your vocal cords. **Diaphragmatic breathing** (sometimes called belly breathing) gives you far more air — and far more control — than shallow chest breathing. Place a hand on your belly: if it moves out when you inhale, you're using your diaphragm. Singers, speakers, actors, and wind instrument players all train this way. Breath support is what allows a note to be held steadily rather than wavering or running out before the phrase ends.`,
          ],
          image: `/explorer-assets/creative-arts/l06-magazine-2.png`,
          imageCaption: `The diaphragm is the engine of the voice — deep belly breathing gives singers control and sustain`,
          vocab: [
            { word: `diaphragm`, definition: `The dome-shaped muscle beneath the lungs that controls breathing — the engine of singing, giving you more air and more control than shallow chest breathing.`, audioPrompt: `Place a hand on your belly and take a deep breath, {name}. Does your belly move out? That's your diaphragm doing its job — pulling air deep into your lungs. Singers train this way because diaphragmatic breathing gives far more air — and far more control — than shallow chest breathing. It's the foundation of every sustained note, every powerful phrase, every whisper that fills a theater.` },
            { word: `breath support`, definition: `The controlled flow of air from the diaphragm that powers and sustains singing — what allows a note to be held steadily without wavering or running out.`, audioPrompt: `Breath support is what holds a note up, {name}. Without it, a long note wavers, runs out of air, or loses its quality halfway through. With it, a singer can hold a phrase steady from beginning to end, controlling exactly how much air reaches the vocal cords at every moment. All the other skills of singing — pitch, resonance, expression — build on breath support as their foundation. It's the engine everything else runs on.` },
            { word: `sustain`, definition: `The ability to hold a note steady and full for a long duration — made possible by controlled diaphragmatic breathing and good breath support.`, audioPrompt: `Sustain is the ability to hold, {name} — to keep a note full and alive without it fading or cracking. When a singer holds a long note at the climax of a song and it just keeps going, full and resonant all the way through, that's sustain. It's not just breath — it's controlled breath, directed with precision. Practicing sustain builds both physical strength and the mental focus to keep a sound steady under pressure.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Resonance and Placement`,
          paragraphs: [
            `Once your vocal cords create sound, the **resonating spaces** in your body — your chest, throat, mouth, and head — amplify and colour that sound. **Chest voice** is the deeper, fuller sound you feel vibrating in your chest — most speaking voices live here. **Head voice** is lighter and higher, felt more in the space behind the nose and forehead. Opera singers call the area between them the **passaggio** — the bridge between registers. **Placement** means directing the sound intentionally: sending your voice forward into the lips and teeth creates bright, clear tone. Letting it sit too far back in the throat creates a muffled or strained sound. Professional singers learn to move between registers smoothly and place their tone with intention.`,
          ],
          image: `/explorer-assets/creative-arts/l06-magazine-3.png`,
          imageCaption: `Chest voice resonates lower and fuller; head voice sits higher and lighter — singers move between both`,
          vocab: [
            { word: `resonance`, definition: `The amplification and enriching of the voice as sound vibrates through the chest, throat, mouth, and head cavities — what gives each voice its unique quality and fullness.`, audioPrompt: `Your voice resonates in your whole body, {name} — not just your throat. The chest, the sinuses, the mouth, the forehead: all of these are resonating chambers that amplify and color the sound. Hum a low note and feel your chest vibrate. Hum a high one and feel it buzz behind your nose. Singers learn to consciously direct resonance — sending sound into different spaces to create different qualities of tone.` },
            { word: `chest voice`, definition: `The deeper, fuller vocal register felt resonating in the chest — the register most speaking voices use, and which provides richness and power in the lower range.`, audioPrompt: `When you speak normally, {name}, you're probably in chest voice — the register that resonates in your chest, feels grounded and full, and has weight and warmth in its lower range. Put a hand on your sternum and speak: you'll feel it vibrate. Singers build chest voice for power and depth. It's the foundation of a strong lower range and the register most people associate with a "full" sound.` },
            { word: `placement`, definition: `Where a singer consciously directs the focus of their sound — forward into the face, into the chest, or into the head — to achieve a particular tone quality.`, audioPrompt: `Placement is about directing sound, {name}. Sing into your lips and teeth and the tone becomes bright and forward, easy to project. Let the sound sit too far back in the throat and it becomes muffled. Great singers think of "placing" their voice — imagining the sound landing at a specific point in the face or body — to produce exactly the tone quality a phrase calls for. It's a mental image that produces a physical result.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Using Your Voice Expressively`,
          paragraphs: [
            `The technical side of singing — pitch, breath, resonance — is only part of what makes a performance powerful. The other part is **expression**: how you use your voice to communicate meaning and emotion. The same words sung with different **dynamics** (loud vs. soft), **phrasing** (where you breathe and pause), and **tone colour** can convey completely different feelings. A soft, breathy tone suggests intimacy. A full, resonant tone suggests strength or joy. A wavering tone can suggest grief. Skilled singers make deliberate choices about all of these elements — not just hitting the right notes, but telling the right story. Your voice is not just an instrument for making sound: it's a tool for expressing what words alone cannot say.`,
          ],
          image: `/explorer-assets/creative-arts/l06-magazine-4.png`,
          imageCaption: `Expression — dynamics, phrasing, tone colour — is what makes singing tell a story beyond the notes`,
          vocab: [
            { word: `dynamics`, definition: `The variation in volume in music — from very soft (pianissimo) to very loud (fortissimo) — which singers use to communicate emotion and shape a song's story.`, audioPrompt: `Dynamics are the volume of your feelings, {name}. A whispered phrase creates intimacy. A sudden full-voiced note creates power. The contrast between soft and loud in a performance is what creates drama and surprise — an unexpected drop to silence can be more emotionally powerful than the biggest note in the song. Singers who only sing at one volume, however beautifully, are telling only one shade of the story.` },
            { word: `phrasing`, definition: `How a singer shapes the flow of a musical line — where to breathe, where to lean in, where to pull back — which determines how a song feels to the listener.`, audioPrompt: `Phrasing is the interpretation layer of singing, {name} — it's not what notes you sing but how you move between them. Where you take a breath. Which word you lean into. Whether a phrase builds toward its end or arrives early and then floats. Two singers can perform the same song with the same notes and produce completely different emotional experiences through phrasing alone. It's where the singer's personality shows.` },
            { word: `tone color`, definition: `The quality or character of a vocal sound — whether it feels warm, bright, dark, breathy, or resonant — which a singer adjusts to match the mood of what they're singing.`, audioPrompt: `Tone color is the mood inside the note, {name}. The same pitch can sound warm or bright, breathy or full, intimate or projected — depending on how the singer shapes their sound. A dark tone color creates weight and gravity. A bright tone cuts through. A breathy quality creates vulnerability. Great singers shift tone color as a storytelling tool — not just matching the emotion, but creating it, note by note.` },
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
    fetch('/explorer-assets/creative-arts/l06-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l06-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L06] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L06] One or more magazine assets missing'));
}
