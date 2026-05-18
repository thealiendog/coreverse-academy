// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L18 — Famous People Who Changed the World
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.His.3.K-2 / D2.His.4.K-2 (historical figures and contributions)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L18 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-18`,
      title:     `Famous People Who Changed the World`,
      duration:  12,
      xpReward:  50,
      badge:     `world-changers-explorer`,
      badgeName: `World Changers Explorer`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. Throughout history, certain PEOPLE made BIG differences in the world. Today, we'll meet some of them. Leaders, scientists, activists, teachers. People from many countries and times. And here's something amazing — they all started as kids, just like you. Let's meet them.`,
          headline: `Famous People Who Changed the World`,
          subtitle: `People — from many backgrounds — who made the world better`,
          visual: `/explorer-assets/social-studies/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Anyone Can Change the World`,
          paragraphs: [
            `Throughout history, some people stood out for the AMAZING things they did. We call them HEROES, LEADERS, or HISTORICAL FIGURES.`,
            `They came from EVERY background. Some were KINGS or PRESIDENTS. Some were SCIENTISTS in labs. Some were ARTISTS. Some were ACTIVISTS fighting for fairness. Some were TEACHERS or DOCTORS. Some were FARMERS. Some were KIDS. Their backgrounds were different. Their countries were different. Their times were different. But they had something in common — they SAW a problem or saw something that could be BETTER, and they did something about it. Anyone can change the world. You don't need to be famous, rich, or special. You just need to CARE and ACT.`,
          ],
          image: `/explorer-assets/social-studies/l18-s1-anyone-can.webp`,
          imageCaption: `World changers come from EVERY background. Kings, scientists, artists, activists, kids. Anyone can do it.`,
          vocab: [
            { word: `hero`,           definition: `A person who did SOMETHING BRAVE or important for others. HEROES come in all kinds.`,
              audioPrompt: `A hero, {name}, is a person who did something brave or important for others. Heroes come in all kinds. Some heroes are famous. Others are quiet people who just helped one neighbor. Heroes don't need superpowers. They need to see a problem and take action. Anyone can be a hero — at any age, from any background.` },
            { word: `historical figure`, definition: `A famous PERSON from the past. HISTORICAL FIGURES often made big changes.`,
              audioPrompt: `A historical figure, {name}, is a famous person from the past. Historical figures often made big changes — in their country, their field, or the world. Their names are remembered. We study them to learn what they did and how they did it. There are thousands of important historical figures throughout time. Today we'll meet just a few.` },
            { word: `change`,         definition: `MAKING things different. World changers MAKE positive change happen.`,
              audioPrompt: `Change, {name}, is making things different. World changers make positive change happen. They see a problem — unfairness, sickness, lack of opportunity — and work to make it better. Change is hard. Lots of people give up. The ones we remember as world changers didn't give up. They kept working until things got better.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `NELSON MANDELA: Peaceful Leader`,
          paragraphs: [
            `Let's meet NELSON MANDELA. He lived in South Africa.`,
            `When he was young, his country had VERY UNFAIR laws. People with different skin colors were treated very differently — and not in a fair way. Black South Africans (like Mandela) had fewer rights. Mandela spent his life fighting against this — using peaceful protest, speeches, and standing up bravely. He was even put in PRISON for 27 years for speaking out. But he didn't give up. Eventually his country changed its unfair laws. Mandela became the FIRST BLACK PRESIDENT of South Africa. He won the Nobel Peace Prize. His message — FORGIVENESS is stronger than hate. He taught the world that peaceful change is possible — even when it's HARD.`,
          ],
          image: `/explorer-assets/social-studies/l18-s2-mandela.webp`,
          imageCaption: `Nelson Mandela: fought unfair laws in South Africa peacefully. Imprisoned 27 years. Became first Black president.`,
          vocab: [
            { word: `unfair`,         definition: `NOT FAIR — treating people DIFFERENTLY without good reason. Mandela fought UNFAIR laws.`,
              audioPrompt: `Unfair, {name}, means not fair — treating people differently without good reason. Mandela fought unfair laws. In his country, people were treated based on their skin color. That's unfair — skin color doesn't make anyone better or worse. Mandela spent his life trying to change those unfair laws. It took a long time, but he succeeded.` },
            { word: `peaceful protest`, definition: `Standing up against UNFAIRNESS WITHOUT violence. Mandela used PEACEFUL PROTEST.`,
              audioPrompt: `Peaceful protest, {name}, is standing up against unfairness without violence. Mandela used peaceful protest. He gave speeches. He marched. He wrote letters. He inspired others. He did not respond to unfairness with violence — even when violence was used against him. Peaceful protest takes incredible courage. It's powerful because it appeals to people's hearts.` },
            { word: `forgiveness`,    definition: `Letting GO of anger toward someone. Mandela taught FORGIVENESS even of enemies.`,
              audioPrompt: `Forgiveness, {name}, is letting go of anger toward someone. Mandela taught forgiveness even of enemies. After 27 years in prison, when he became president, he didn't seek revenge. He worked with the same people who had hurt him. He believed forgiveness was stronger than hate. His example inspired the world. Forgiveness is hard — but powerful.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `MARIE CURIE: Pioneer Scientist`,
          paragraphs: [
            `Now meet MARIE CURIE. She lived in Poland and France about 130 years ago.`,
            `Marie LOVED science. But back then, women weren't allowed to study science in many places. Universities didn't let women in. People said science was for men only. Marie didn't accept that. She worked HARDER than almost anyone. She traveled to Paris to study. She discovered NEW ELEMENTS — substances no one had ever seen — by experimenting carefully. She named one POLONIUM (after her home, Poland) and another RADIUM. She became the FIRST WOMAN to win a NOBEL PRIZE in science. Then she won a SECOND one — the FIRST PERSON ever to win two. Her work helped invent X-RAYS, which doctors still use today to see inside people. Marie showed that SCIENCE BELONGS TO EVERYONE — boys and girls alike.`,
          ],
          image: `/explorer-assets/social-studies/l18-s3-curie.webp`,
          imageCaption: `Marie Curie: discovered new elements. First woman Nobel Prize winner. First person to win two. Opened science to women.`,
          vocab: [
            { word: `science`,        definition: `Studying HOW the world works. Marie Curie did groundbreaking SCIENCE.`,
              audioPrompt: `Science, {name}, is studying how the world works. Marie Curie did groundbreaking science. She discovered new elements that no one had seen before. She studied how certain substances give off energy (called radioactivity). Her work changed what we know about the world. And she did it as a woman in a time when most people thought women shouldn't do science.` },
            { word: `discover`,       definition: `To FIND something NEW. Marie Curie DISCOVERED elements no one had seen.`,
              audioPrompt: `To discover, {name}, is to find something new. Marie Curie discovered elements no one had seen. She named them polonium (after her home) and radium. She worked patiently for years in her lab. She faced many failures before she succeeded. Discovery is exciting — finding something no one knew existed. Marie made discoveries that helped all of humanity.` },
            { word: `belongs to everyone`, definition: `For all PEOPLE — boys and girls, all backgrounds. Marie showed science BELONGS TO EVERYONE.`,
              audioPrompt: `Belongs to everyone, {name}, means for all people — boys and girls, all backgrounds. Marie Curie showed that science belongs to everyone. Before her, many people thought women couldn't be great scientists. Marie proved them wrong. Today, women scientists work all over the world. The path Marie opened helps all curious people regardless of who they are.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `MALALA YOUSAFZAI: Young Hero`,
          paragraphs: [
            `Meet MALALA YOUSAFZAI. She's still alive today — born in Pakistan.`,
            `When Malala was just 11, a group called the Taliban took over her area. They said GIRLS could NOT go to school anymore. Malala loved school. She thought girls everywhere deserved to learn. So she did something brave — she WROTE about her experience and spoke up publicly. She was just a kid, but the world listened. The Taliban tried to hurt her badly to silence her. She survived. After healing, she kept speaking out — even LOUDER. She started organizations to help girls go to school around the world. At age 17, she became the YOUNGEST PERSON EVER to win the Nobel Peace Prize. Malala proved that KIDS — even YOUNG kids — can change the world. Her message: EVERY child deserves an education.`,
          ],
          image: `/explorer-assets/social-studies/l18-s4-malala.webp`,
          imageCaption: `Malala Yousafzai: spoke up for girls' education at 11. Survived attack. Youngest Nobel Peace Prize winner ever.`,
          vocab: [
            { word: `brave`,          definition: `Doing the right thing even when SCARED. Malala was incredibly BRAVE.`,
              audioPrompt: `Brave, {name}, means doing the right thing even when scared. Malala was incredibly brave. She knew speaking up was dangerous. She knew people were angry at her. She did it anyway because she believed in girls' right to learn. Brave doesn't mean not scared. It means doing what's right despite being scared. Kids can be brave too.` },
            { word: `education`,      definition: `LEARNING and going to SCHOOL. Malala fought for EDUCATION for all girls.`,
              audioPrompt: `Education, {name}, is learning and going to school. Malala fought for education for all girls. In many parts of the world, girls still can't go to school. Some are kept home. Some are forced to work. Some don't have schools nearby. Malala has dedicated her life to changing this. Every child — boy or girl — deserves to learn.` },
            { word: `young hero`,     definition: `A YOUNG person who does something BIG. Malala became a YOUNG HERO at age 11.`,
              audioPrompt: `A young hero, {name}, is a young person who does something big. Malala became a young hero at age 11. She wasn't waiting until she was an adult. She acted on what mattered to her right then. Lots of young heroes throughout history have made big differences. You can be one too. Your age doesn't matter — what matters is what you care about and what you do.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `MARTIN LUTHER KING JR: Dreamer of Equality`,
          paragraphs: [
            `Now meet MARTIN LUTHER KING JR. He lived in the United States about 60 years ago.`,
            `When MLK was growing up, the US had UNFAIR LAWS. Black people had to use separate water fountains, sit in the back of buses, go to different schools — and they had fewer rights. MLK believed this was WRONG. He used PEACEFUL marches, speeches, and FAITH to change things. His most famous speech was called "I HAVE A DREAM" — about a future where kids of all colors could be friends and equal. MLK was assassinated when he was just 39. But his work helped CHANGE the laws. Today his birthday is a holiday in the US — MLK Day — when we remember his message of FAIRNESS, EQUALITY, and PEACE. His life reminds us: standing up for what's right takes COURAGE. And dreams of a better world can become real.`,
          ],
          image: `/explorer-assets/social-studies/l18-s5-mlk.webp`,
          imageCaption: `MLK: led peaceful civil rights movement. "I Have a Dream" speech. Helped change unfair US laws.`,
          vocab: [
            { word: `equality`,       definition: `Everyone being TREATED THE SAME. MLK fought for EQUALITY across all races.`,
              audioPrompt: `Equality, {name}, is everyone being treated the same. MLK fought for equality across all races. He believed people shouldn't be treated differently based on the color of their skin. Equality means equal rights, equal opportunities, equal respect for every person. America has come a long way thanks to MLK and others. But the work for equality continues today.` },
            { word: `peaceful`,       definition: `WITHOUT violence. MLK used PEACEFUL marches and speeches to change laws.`,
              audioPrompt: `Peaceful, {name}, means without violence. MLK used peaceful marches and speeches to change laws. Even when people hurt him and his supporters, they did not respond with violence. That was hard. But MLK believed peaceful protest was the only way to win without becoming what they were fighting against. His peaceful methods inspired the world.` },
            { word: `dream`,          definition: `A VISION of a better FUTURE. MLK had a DREAM of equality.`,
              audioPrompt: `A dream, {name}, is a vision of a better future. MLK had a dream of equality. In his famous "I Have a Dream" speech, he described a future where kids of all colors would be friends. Where no one would be judged by their skin. His dream wasn't just for himself — it was for everyone. Dreams of a better world inspire change. They start as ideas, then become real.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Heroes Are EVERYWHERE`,
          paragraphs: [
            `These are just FOUR people. There are THOUSANDS more.`,
            `MAHATMA GANDHI led India's peaceful fight for freedom. JANE GOODALL studied chimpanzees and showed they think and feel. ALBERT EINSTEIN figured out how space and time work. ROSA PARKS refused to give up her seat on a bus, sparking change. HELEN KELLER showed the world that disabilities don't stop you. NEIL ARMSTRONG walked on the moon. CESAR CHAVEZ fought for fair pay for farmworkers. HARRIET TUBMAN helped enslaved people escape to freedom. Each one came from a different background. Each one saw something to make better. Each one ACTED. And here's the secret — most heroes aren't famous. Most are QUIET PEOPLE — teachers, parents, neighbors, friends — who do kind, brave things every day. Heroes are EVERYWHERE. You might be one already.`,
          ],
          image: `/explorer-assets/social-studies/l18-s6-many-more.webp`,
          imageCaption: `Thousands of heroes throughout history. Gandhi, Goodall, Einstein, Parks, Keller, Armstrong, Tubman, more.`,
          vocab: [
            { word: `thousands`,      definition: `A LOT — many many. There are THOUSANDS of historical heroes, not just a few.`,
              audioPrompt: `Thousands, {name}, means a lot — many many. There are thousands of historical heroes, not just a few. Every country has its heroes. Every field has its heroes. Every era has its heroes. The few we hear about are just the tip of the iceberg. Each one had their own story. Each one mattered.` },
            { word: `quiet hero`,     definition: `Someone who does KIND brave things WITHOUT being famous. Most heroes are QUIET HEROES.`,
              audioPrompt: `A quiet hero, {name}, is someone who does kind brave things without being famous. Most heroes are quiet heroes. Teachers helping struggling students. Parents caring for sick kids. Friends standing up to bullies. Volunteers feeding the hungry. They don't get awards. Their names aren't in books. But they make the world better every day. Quiet heroes are everywhere.` },
            { word: `you`,            definition: `YES — YOU. YOU can be a hero too, in your own way, at your own age.`,
              audioPrompt: `You, {name} — yes, YOU. You can be a hero too, in your own way, at your own age. You don't need to wait to be old. You don't need to be famous. You just need to care about something and act. Maybe you stand up for a friend. Maybe you help an elder. Maybe you protect nature. Maybe you study something to help others someday. Whatever you do — that's heroic.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `World changers come from EVERY background — different countries, ages, races, men and women.`,
              matchPhrase: `Yes! Heroes come from everywhere. Different countries, races, religions, ages, men and women. What matters isn't who you are — it's what you DO. Anyone can change the world.`,
              correctMatch: `fact` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `Every famous person who changed the world STARTED as a regular kid — they grew into their work.`,
              matchPhrase: `True! Every world changer was once a kid. Curious. Small. Just like you. They grew into their work through caring, learning, and acting. Heroes aren't born — they're built.`,
              correctMatch: `fact` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `Only ADULTS can ever change the world — kids cannot make any real difference at all.`,
              matchPhrase: `Not at all! Kids change the world. Malala was 11. Greta Thunberg started at 15. Ruby Bridges helped end school segregation at age 6. Kids see things and act. Age doesn't stop you.`,
              correctMatch: `myth` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `World changers are BORN with magical powers — they're not regular people who worked hard.`,
              matchPhrase: `Definitely not! World changers are regular people who cared deeply and worked hard. They had failures. They struggled. They didn't give up. That's what made them heroes — not magical birth.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What did NELSON MANDELA do?`,
              options: [`Climbed mountains`, `Fought UNFAIR LAWS in South Africa peacefully, became first Black president`, `Discovered electricity`, `Wrote songs`],
              correctIndex: 1,
              explanation: `Mandela fought unfair laws in South Africa through peaceful protest. Imprisoned for 27 years. Became the first Black president. Taught the world about forgiveness.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `Why is MARIE CURIE important?`,
              options: [`She invented airplanes`, `She was a SCIENTIST who discovered new elements; first woman to win a Nobel Prize`, `She was a musician`, `She wrote books`],
              correctIndex: 1,
              explanation: `Marie Curie was a groundbreaking scientist. She discovered new elements (polonium, radium). First woman Nobel Prize winner. First person to win two Nobel Prizes. Opened science to women.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is MALALA YOUSAFZAI famous for?`,
              options: [`Climbing mountains`, `Speaking up for GIRLS' EDUCATION at age 11 — youngest Nobel Peace Prize winner`, `Painting`, `Music`],
              correctIndex: 1,
              explanation: `Malala spoke up for girls' education in Pakistan at age 11. Survived an attack. Won the Nobel Peace Prize at 17 — youngest ever. Proved kids can change the world.` },
            { id: `l18-q4`, format: `true-false`,
              question: `MARTIN LUTHER KING JR led the peaceful CIVIL RIGHTS movement in the US — he gave the "I Have a Dream" speech.`,
              correctAnswer: true,
              explanation: `True! MLK led the peaceful civil rights movement. His "I Have a Dream" speech is one of the most famous in history. He helped change unfair US laws. MLK Day honors his legacy.` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `Heroes come from EVERY background. Most heroes aren't famous — they're ___ heroes who do kind brave things every day.`,
              options: [`quiet`, `loud`, `tall`, `flying`],
              correctIndex: 0,
              explanation: `Quiet heroes! Teachers, parents, neighbors, volunteers. Most heroes aren't famous. They just do kind brave things every day. Quiet heroes make the world better.` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `Can YOU change the world?`,
              options: [`No, only adults can`, `YES — caring + acting = real change. Even kids can do it.`, `Only on holidays`, `Maybe when you're 50`],
              correctIndex: 1,
              explanation: `Yes! Caring + acting = real change. Even kids can do it. Stand up for friends. Help your community. Protect nature. Study to help others someday. You can change the world starting now.` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Some of the BIGGEST changes in history started with ONE PERSON deciding to do something. Rosa Parks just sat down on a bus. Malala just wrote about wanting to go to school. Gandhi just marched to the sea to make salt. Each small act started something HUGE. The lesson? You don't need a giant plan to change the world. You just need to start. Pick something you care about. Take ONE step. Then another. Then another. The biggest movements in history started as one person's small actions. The world is full of problems waiting for people who care to act. Could you be one of them? Probably yes.`,
          familyAdventure: `Together, RESEARCH a historical figure your family admires. Pick one from any country, era, or field. Look up: 1) Where they were born. 2) What they did. 3) What problem they were trying to solve. 4) How they succeeded — or what challenges they faced. Talk about WHY you admire them. Maybe pick someone different next month. You'll learn there are heroes EVERYWHERE in history — many you'd never have heard of.`,
          creativePrompt: `Imagine YOU are in a history book 100 years from now. Future kids are reading about you. Draw the page about your life. Show: 1) What problem you cared about and acted on. 2) What you did. 3) How the world is better because of you. It doesn't have to be huge. Even kindness to neighbors can be heroic. Be the hero of your own story.`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You've now met some heroes. NELSON MANDELA — peaceful fight against unfairness. MARIE CURIE — groundbreaking science, first woman Nobel winner. MALALA — girls' education at age 11. MLK — civil rights and "I have a dream." And THOUSANDS more throughout history. Most heroes are QUIET — teachers, parents, friends, neighbors. YOU can be a hero too, at any age, in your own way. Care. Act. Change starts there. — Atlas 🐻`,
          badge: `world-changers-explorer`,
          badgeName: `World Changers Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L18;

// ─── Dev asset check ───────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L18] Loaded: "Famous People" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
