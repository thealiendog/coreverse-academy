// STUB — replace with full authored content before shipping
// Spanish Explorer L01 — placeholder to confirm Luna routes correctly
const SpanishExplorerL01Screens = {
  lessons: [
    {
      id:        'sp-6-8-01',
      subjectId: 'languages',
      title:     '[STUB] Spanish L01',
      guideId:   'luna',
      xpReward:  50,
      screens: [
        {
          id:        'sp01-welcome',
          type:      'welcome',
          guideText: `¡Hola, {name}! I'm Luna, and we're going to discover Spanish together. Every word you learn opens a door to a whole new world.`,
        },
        {
          id:            'sp01-mag-1',
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `[STUB] Section One Headline`,
          paragraphs:    [`Placeholder paragraph.`],
          image:         `/explorer-assets/languages/sp01-magazine-1.png`,
          imageCaption:  `Placeholder caption`,
          vocab: [
            { word: `hola`, definition: `The most common Spanish greeting — hello.`, audioPrompt: `Hola, {name}! This is where every Spanish conversation begins. Say it like: OH-lah. The h is silent in Spanish — your lips just open and the word flows. Try it out loud right now.` },
            { word: `gracias`, definition: `Thank you in Spanish — one of the most important words in any language.`, audioPrompt: `Gracias is one of the first words Luna wants you to own, {name}. Say it: GRAH-see-ahs. Three syllables, a little roll on the r, and you've already got something beautiful. Spanish speakers love hearing it.` },
            { word: `amigo`, definition: `Friend in Spanish — amigo for a male friend, amiga for a female friend.`, audioPrompt: `Amigo means friend, {name} — ah-MEE-go. Notice how Spanish tells you something extra: amigo is masculine, amiga is feminine. The language itself carries information about the world. That's one of the things that makes it so rich.` },
          ],
        },
        {
          id:            'sp01-mag-2',
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `[STUB] Section Two Headline`,
          paragraphs:    [`Placeholder paragraph.`],
          image:         `/explorer-assets/languages/sp01-magazine-2.png`,
          imageCaption:  `Placeholder caption`,
          vocab: [
            { word: `casa`, definition: `House or home in Spanish.`, audioPrompt: `Casa — KAH-sah — means house or home, {name}. Short, clear, musical. Spanish words often feel that way: crisp and bright. Mi casa means my home. You've already built your first Spanish sentence.` },
            { word: `familia`, definition: `Family in Spanish — you can hear the English word "family" hiding inside it.`, audioPrompt: `Familia, {name} — fah-MEE-lee-ah. Listen: it sounds almost like the English word "family," because both come from the same Latin root. That's one of Luna's favorite discoveries — how many Spanish words are hiding in plain sight, just wearing different clothes.` },
            { word: `escuela`, definition: `School in Spanish — where students go to learn.`, audioPrompt: `Escuela — es-KWAY-lah — means school, {name}. That qu makes a k sound in Spanish, not a kw sound like in English. Escuela. It has a rhythm to it. Say it a few times and feel how it sits differently in your mouth than "school" does.` },
          ],
        },
        {
          id:            'sp01-mag-3',
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `[STUB] Section Three Headline`,
          paragraphs:    [`Placeholder paragraph.`],
          image:         `/explorer-assets/languages/sp01-magazine-3.png`,
          imageCaption:  `Placeholder caption`,
          vocab: [
            { word: `uno`, definition: `The number one in Spanish — the starting point of every count.`, audioPrompt: `Uno — OO-noh — one, {name}. You already know this word, probably from games. That's how language leaks in without you noticing. Uno, dos, tres — three words and you're counting in a language spoken by 500 million people.` },
            { word: `rojo`, definition: `Red in Spanish — one of the most vivid color words to say aloud.`, audioPrompt: `Rojo — ROH-hoh — red, {name}. Notice the j: in Spanish, j makes a soft h sound, like a breath. Rojo. Say it and you can almost feel the color. Spanish colors are one of the most satisfying things to collect.` },
            { word: `bonito`, definition: `Beautiful or pretty in Spanish — used for things, places, and sometimes people.`, audioPrompt: `Bonito means beautiful, {name} — boh-NEE-toh. And here's something wonderful: in Spanish, you can make words smaller and sweeter by adding -ito or -ita. Bonito already has it built in. The language is always doing something like that — adding feeling to the shape of a word.` },
          ],
        },
        {
          id:            'sp01-mag-4',
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `[STUB] Section Four Headline`,
          paragraphs:    [`Placeholder paragraph.`],
          image:         `/explorer-assets/languages/sp01-magazine-4.png`,
          imageCaption:  `Placeholder caption`,
          vocab: [
            { word: `hablar`, definition: `To speak or to talk in Spanish — an essential verb for any language learner.`, audioPrompt: `Hablar — ah-BLAR — means to speak, {name}. The h is silent, so you start with ah. This is the verb that describes exactly what you're learning to do. Yo quiero hablar español — I want to speak Spanish. You already know enough to say that.` },
            { word: `aprender`, definition: `To learn in Spanish — the verb that describes every lesson you take with Luna.`, audioPrompt: `Aprender — ah-pren-DAIR — to learn, {name}. It's related to the English word "apprentice." Every time you come back to these lessons, you're doing exactly what this verb means. Luna thinks aprender is one of the most important words in any language.` },
            { word: `¡buena suerte!`, definition: `Good luck in Spanish — a phrase of encouragement used before challenges and adventures.`, audioPrompt: `¡Buena suerte! — BWAY-nah SWAIR-teh — good luck, {name}! This is what Luna says before every challenge. Buena means good, suerte means luck. Put them together and you've got a whole pocket full of encouragement. You're going to need it — and you're going to do great.` },
          ],
        },
        {
          id:       'sp01-game',
          type:     'interactive',
          guideText: `Let's match these Spanish words to their meanings, {name}!`,
          columnHeaders: ['Spanish', 'Meaning'],
          items: [
            { id: 'hola-i',    label: 'hola',    correctMatch: 'greeting' },
            { id: 'gracias-i', label: 'gracias', correctMatch: 'thanks'   },
            { id: 'amigo-i',   label: 'amigo',   correctMatch: 'friend'   },
            { id: 'casa-i',    label: 'casa',    correctMatch: 'home'     },
          ],
          buckets: [
            { id: 'greeting', label: 'hello',    color: '#60A5FA' },
            { id: 'thanks',   label: 'thank you', color: '#34D399' },
            { id: 'friend',   label: 'friend',   color: '#F59E0B' },
            { id: 'home',     label: 'home',     color: '#A78BFA' },
          ],
        },
        {
          id:        'sp01-quiz',
          type:      'quiz',
          guideText: `¿Listo, {name}? Let's see what you remember!`,
          questions: [
            { id: 'q1', format: 'multiple-choice', text: `How do you say "hello" in Spanish?`, options: ['Gracias', 'Hola', 'Amigo', 'Casa'], answer: 'Hola', explanation: `Hola is the standard Spanish greeting — said like OH-lah.` },
            { id: 'q2', format: 'multiple-choice', text: `What does "gracias" mean?`, options: ['Hello', 'Friend', 'Thank you', 'Beautiful'], answer: 'Thank you', explanation: `Gracias (GRAH-see-ahs) is thank you in Spanish.` },
            { id: 'q3', format: 'true-false', text: `The letter h is always silent in Spanish.`, answer: 'True', explanation: `In Spanish, h is always silent. Hola sounds like "ola."` },
            { id: 'q4', format: 'multiple-choice', text: `What does "familia" mean?`, options: ['School', 'House', 'Family', 'Friend'], answer: 'Family', explanation: `Familia shares its Latin root with the English word "family."` },
            { id: 'q5', format: 'multiple-choice', text: `How is the letter j pronounced in Spanish?`, options: ['Like English j', 'Like a soft h', 'Like the letter y', 'Silent'], answer: 'Like a soft h', explanation: `Spanish j makes a breathy h sound — as in rojo (ROH-hoh).` },
            { id: 'q6', format: 'multiple-choice', text: `What does "aprender" mean?`, options: ['To speak', 'To play', 'To learn', 'To read'], answer: 'To learn', explanation: `Aprender means "to learn" — related to the English word apprentice.` },
          ],
        },
        {
          id:               'sp01-realworld',
          type:             'real-world',
          guideText:        `Let's bring Spanish into your home this week, {name}!`,
          familyAdventure:  `Label five things in your home in Spanish — put sticky notes on la puerta (door), la ventana (window), la mesa (table), la silla (chair), and el libro (book). Challenge each family member to read one label aloud before the day ends.`,
          creativePrompt:   `Draw a picture of your casa (home) and label at least six things inside it in Spanish. Use a dictionary or ask Luna if you get stuck. Write your name at the top in Spanish — tu nombre es... — and your name follows.`,
        },
        {
          id:        'sp01-celebration',
          type:      'celebration',
          message:   `¡Excelente, {name}! You've taken your first real step into the Spanish-speaking world. Luna is so proud of you.`,
          badge:     'languages-l01',
          badgeName: 'Spanish Starter',
          xpEarned:  50,
        },
      ],
    },
  ],
};

export default SpanishExplorerL01Screens;
