// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L18 — Famous People Who Changed the World
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.His.3.K-2 / D2.His.4.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L18 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-18`,
      title: `Famous People Who Changed the World`,
      duration: 12,
      xpReward: 50,
      badge: `world-changers-explorer`,
      badgeName: `World Changers Explorer`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we meet some heroes. People who changed the world for the better. Each one was once a kid like you. They cared about something. Then they acted. Let's meet them.`,
          headline: `Famous People Who Changed the World`,
          subtitle: `Heroes who made the world better`,
          visual: `/explorer-assets/social-studies/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Anyone Can Change the World`,
          paragraphs: [
            `Throughout history, some people did amazing things. We call them heroes.`,
            `They came from every kind of background. Kings and farmers. Scientists and artists. Famous and quiet. What they had in common was caring. They saw a problem. Then they did something about it. Anyone can do that. Even you.`,
          ],
          image: `/explorer-assets/social-studies/l18-s1-anyone-can.webp`,
          imageCaption: `Heroes come from every background. What matters is caring and acting.`,
          vocab: [
            { word: `hero`, definition: `A person who did something brave for others.`,
              audioPrompt: `A hero is a person who did something brave for others, {name}. Heroes come in all kinds. Some famous. Some quiet. They do not need superpowers. They just need to see a problem and act.` },
            { word: `change`, definition: `Making things different.`,
              audioPrompt: `Change means making things different, {name}. World changers make positive change. They see a problem. They work to fix it. Change is hard. The people we remember did not give up.` },
            { word: `still`, definition: `Continuing even now.`,
              audioPrompt: `Still means continuing even now, {name}. The heroes from long ago still inspire us today. Their stories still teach us. The good they did still matters. Still helps us connect the past to now.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Nelson Mandela`,
          paragraphs: [
            `Let's meet Nelson Mandela. He lived in South Africa.`,
            `When he was young, his country had very unfair laws. People with different skin colors were treated differently. Mandela spent his life fighting this with peaceful protest. He was even put in prison for 27 years. He did not give up. He became the first Black president of South Africa.`,
          ],
          image: `/explorer-assets/social-studies/l18-s2-mandela.webp`,
          imageCaption: `Nelson Mandela fought unfair laws in South Africa. Became the first Black president.`,
          vocab: [
            { word: `unfair`, definition: `Treating people differently for no good reason.`,
              audioPrompt: `Unfair means treating people differently for no good reason, {name}. Mandela's country had unfair laws. People were treated based on skin color. Mandela spent his life fighting to change those laws.` },
            { word: `peaceful`, definition: `Without violence. Using words and actions instead.`,
              audioPrompt: `Peaceful means without violence, {name}. Mandela used peaceful protest. He gave speeches. He marched. He did not respond with violence. Peaceful protest takes courage. It is very powerful.` },
            { word: `forgiveness`, definition: `Letting go of anger toward someone.`,
              audioPrompt: `Forgiveness is letting go of anger, {name}. After 27 years in prison, Mandela became president. He chose forgiveness over anger. He worked with those who hurt him. Forgiveness was his power.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Marie Curie`,
          paragraphs: [
            `Now meet Marie Curie. She lived about 130 years ago in Poland and France.`,
            `Marie loved science. But back then, women were not allowed to study science in most places. She did not accept that. She worked harder than anyone. She discovered new elements. She was the first woman to win a Nobel Prize. Then she won a second one. The first person ever to win two.`,
          ],
          image: `/explorer-assets/social-studies/l18-s3-curie.webp`,
          imageCaption: `Marie Curie was the first woman to win a Nobel Prize. Opened science to all.`,
          vocab: [
            { word: `science`, definition: `Studying how the world works.`,
              audioPrompt: `Science is studying how the world works, {name}. Marie Curie did amazing science. She discovered new elements no one had seen. She studied how things give off energy. Her work helped invent X-rays.` },
            { word: `discover`, definition: `To find something new.`,
              audioPrompt: `To discover means to find something new, {name}. Marie Curie discovered elements no one had seen. She named one polonium after her home Poland. Discovery means finding something the world did not know.` },
            { word: `opened`, definition: `Made it possible for others.`,
              audioPrompt: `Opened means made it possible for others, {name}. Marie Curie opened science to women. Before her, many people thought women could not be great scientists. She proved them wrong. Now women scientists work all over the world.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Malala Yousafzai`,
          paragraphs: [
            `Meet Malala Yousafzai. She is still alive today. Born in Pakistan.`,
            `When Malala was just 11, a group took over her area. They said girls could not go to school. Malala loved school. She thought every girl should learn. So she spoke up. She kept speaking even when it was dangerous. At age 17, she became the youngest person ever to win the Nobel Peace Prize.`,
          ],
          image: `/explorer-assets/social-studies/l18-s4-malala.webp`,
          imageCaption: `Malala spoke up for girls' education at age 11. Youngest Nobel Peace Prize winner.`,
          vocab: [
            { word: `brave`, definition: `Doing the right thing even when scared.`,
              audioPrompt: `Brave means doing the right thing even when scared, {name}. Malala was brave. She knew speaking up was dangerous. She did it anyway. Brave does not mean not scared. It means doing right despite being scared.` },
            { word: `education`, definition: `Learning and going to school.`,
              audioPrompt: `Education is learning and going to school, {name}. Malala fought for girls' education. In many parts of the world, girls still cannot go to school. Every kid, boy or girl, deserves to learn.` },
            { word: `young`, definition: `Not old. A small age.`,
              audioPrompt: `Young means not old, {name}. Malala did big things when she was very young. She did not wait until she grew up. She acted right then. Kids can change the world too. Age does not stop you.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Martin Luther King Jr.`,
          paragraphs: [
            `Meet Martin Luther King Jr. He lived in the United States about 60 years ago.`,
            `When MLK was growing up, the US had unfair laws. Black people had fewer rights. MLK believed this was wrong. He used peaceful marches and speeches. His most famous speech was called I Have a Dream. He talked about a future where kids of all colors could be friends.`,
          ],
          image: `/explorer-assets/social-studies/l18-s5-mlk.webp`,
          imageCaption: `MLK led the peaceful civil rights movement. His "I Have a Dream" speech is famous.`,
          vocab: [
            { word: `equality`, definition: `Everyone being treated the same.`,
              audioPrompt: `Equality means everyone being treated the same, {name}. MLK fought for equality across all races. He believed people should not be treated differently because of skin color. Equality is still important today.` },
            { word: `march`, definition: `When many people walk together to speak up.`,
              audioPrompt: `A march is when many people walk together, {name}. To speak up. MLK led peaceful marches. Thousands of people walked together. They sang. They held signs. Marches showed how many people wanted change.` },
            { word: `dream`, definition: `A vision of a better future.`,
              audioPrompt: `A dream is a vision of a better future, {name}. MLK had a dream. He talked about a future where kids of all colors would be friends. Where no one would be judged by skin. Dreams of better worlds inspire change.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Heroes Everywhere`,
          paragraphs: [
            `These are just four people. There are thousands more.`,
            `Jane Goodall studied chimps. Rosa Parks refused to give up her bus seat. Helen Keller showed disabilities do not stop you. Neil Armstrong walked on the moon. And the best part. Most heroes are not famous. Most are quiet people. Teachers. Parents. Friends. Doing kind brave things every day. You can be one too.`,
          ],
          image: `/explorer-assets/social-studies/l18-s6-many-more.webp`,
          imageCaption: `Thousands of heroes. Famous and quiet. You can be one too.`,
          vocab: [
            { word: `thousands`, definition: `A really big number.`,
              audioPrompt: `Thousands is a really big number, {name}. There are thousands of heroes throughout history. Every country has them. Every time has them. The few we hear about are just a small part of all of them.` },
            { word: `quiet hero`, definition: `Someone who helps without being famous.`,
              audioPrompt: `A quiet hero is someone who helps without being famous, {name}. Teachers helping kids. Parents caring for sick kids. Friends standing up to bullies. Most heroes are quiet ones. The world needs them.` },
            { word: `you`, definition: `Yes, you. You can be a hero too.`,
              audioPrompt: `You, {name}. You can be a hero too. In your own way. At your own age. You just need to care about something. And do something about it. Famous or quiet, your actions matter.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each fact, {name}. Which hero does it match?`,
          buckets: [
            { id: `mandela`, label: `Mandela`, color: `#34D399` },
            { id: `curie`,   label: `Curie`,   color: `#A78BFA` },
            { id: `malala`,  label: `Malala`,  color: `#F472B6` },
            { id: `mlk`,     label: `MLK`,     color: `#FBBF24` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `Fought unfair laws in South Africa peacefully`,
              matchPhrase: `Yes! That is Nelson Mandela. Used peaceful protest in South Africa.`, correctMatch: `mandela` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `Became the first Black president of South Africa`,
              matchPhrase: `Right! Mandela became president after 27 years in prison.`, correctMatch: `mandela` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `The first woman to win a Nobel Prize`,
              matchPhrase: `Yes! That is Marie Curie. She opened science to women.`, correctMatch: `curie` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `Discovered new elements like polonium and radium`,
              matchPhrase: `Right! Marie Curie discovered new elements through careful science.`, correctMatch: `curie` },
            { id: `l18-g5`, image: `l18-game-5.webp`, label: `Spoke up for girls' education at age 11`,
              matchPhrase: `Yes! That is Malala. Brave at a very young age.`, correctMatch: `malala` },
            { id: `l18-g6`, image: `l18-game-6.webp`, label: `Youngest person ever to win the Nobel Peace Prize`,
              matchPhrase: `Right! Malala won at age 17. Kids can change the world.`, correctMatch: `malala` },
            { id: `l18-g7`, image: `l18-game-7.webp`, label: `Gave the famous "I Have a Dream" speech`,
              matchPhrase: `Yes! That was Martin Luther King Jr. His dream changed America.`, correctMatch: `mlk` },
            { id: `l18-g8`, image: `l18-game-8.webp`, label: `Led peaceful marches for equal rights in the US`,
              matchPhrase: `Right! MLK led the civil rights movement peacefully.`, correctMatch: `mlk` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What did Nelson Mandela do?`,
              options: [`Climbed mountains`, `Fought unfair laws in South Africa peacefully`, `Discovered electricity`, `Wrote songs`],
              correctIndex: 1,
              explanation: `Mandela used peaceful protest to fight unfair laws. He became the first Black president of South Africa.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `Why is Marie Curie important?`,
              options: [`She invented planes`, `She was a scientist who discovered new elements. First woman to win a Nobel Prize.`, `She was a musician`, `She wrote books`],
              correctIndex: 1,
              explanation: `Marie Curie was a groundbreaking scientist. First woman Nobel winner. First person to win two. Opened science to women.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is Malala Yousafzai famous for?`,
              options: [`Climbing mountains`, `Speaking up for girls' education at age 11`, `Painting`, `Music`],
              correctIndex: 1,
              explanation: `Malala spoke up for girls' education in Pakistan at age 11. Youngest Nobel Peace Prize winner ever.` },
            { id: `l18-q4`, format: `true-false`,
              question: `MLK gave the famous "I Have a Dream" speech and led the peaceful civil rights movement in the US.`,
              correctAnswer: true,
              explanation: `True! MLK led the civil rights movement. His speech is one of the most famous in history.` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `Most heroes are not famous. They are ___ heroes who do kind, brave things every day.`,
              options: [`quiet`, `loud`, `tall`, `flying`],
              correctIndex: 0,
              explanation: `Quiet! Teachers, parents, neighbors, volunteers. Most heroes are quiet ones. They make the world better every day.` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `Can YOU change the world?`,
              options: [`No, only adults can`, `Yes. Caring plus acting equals real change. Even kids can do it.`, `Only on holidays`, `Maybe when you are 50`],
              correctIndex: 1,
              explanation: `Yes! Care plus act equals change. Even kids. Stand up for friends. Help your community. Study to help others someday.` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Some of the biggest changes started with one person deciding to act. Rosa Parks sat down on a bus. Malala wrote about wanting to go to school. Each small act started something huge. You do not need a big plan. You just need to start.`,
          familyAdventure: `Research a hero your family admires together. Pick one from any country or time. Look up where they were born. What problem they cared about. How they helped. Talk about why you admire them.`,
          creativePrompt: {
            intro: `Imagine YOU are in a history book 100 years from now. Draw the page about your life. Show what you cared about and how you helped.`,
            floor: `Write 3 sentences about future-you. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why people remember you.`,
            frames: [
              `I cared about ___.`,
              `So I decided to ___.`,
              `The world became better because ___.`,
              `Kids my age were inspired to ___.`,
              `My biggest lesson was ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Great work, {name}! You met some heroes. Mandela. Curie. Malala. MLK. Plus thousands more. Most heroes are quiet people. Teachers, parents, friends. Doing kind brave things daily. You can be one too. At any age. Care. Act. The world changes. Atlas the Bear.`,
          badge: `world-changers-explorer`,
          badgeName: `World Changers Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L18] Loaded: "Famous People" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
