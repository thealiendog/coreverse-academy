// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L14 — Nelson Mandela: The Man Who Chose Forgiveness
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L14 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-14`,
      title:     `Nelson Mandela: The Man Who Chose Forgiveness`,
      duration:  12,
      xpReward:  50,
      badge:     `mandela-explorer`,
      badgeName: `Mandela Explorer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to tell you about one of the most remarkable people who ever lived — NELSON MANDELA. He lived in a country called SOUTH AFRICA. He spent 27 YEARS in prison for trying to make his country fair. When he finally got out, he could have chosen REVENGE — to punish the people who hurt him. Instead, he chose something amazing: FORGIVENESS. His story is one of courage, patience, and love.`,
          headline: `Nelson Mandela: The Man Who Chose Forgiveness`,
          subtitle: `The story of a hero who spent 27 years in prison and came out choosing love over revenge`,
          visual: `/explorer-assets/history/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Beautiful Country`,
          paragraphs: [
            `In the southern part of Africa is a beautiful country called SOUTH AFRICA.`,
            `It has mountains, beaches, jungles, savannas, and incredible animals like elephants, lions, and giraffes. People have lived there for thousands of years. But for a long time, South Africa had a BIG problem — and Nelson Mandela was born right into the middle of it.`,
          ],
          image: `/explorer-assets/history/l14-s1-south-africa.webp`,
          imageCaption: `South Africa — a beautiful country at the tip of Africa. Lions, elephants, mountains, beaches. And once, a very big problem to solve.`,
          vocab: [
            { word: `South Africa`, definition: `A country at the southern tip of Africa, with beautiful mountains, beaches, and wildlife.`,
              audioPrompt: `South Africa is a country at the very bottom of Africa, {name}. It's beautiful. There are mountains, beaches, jungles, and amazing animals like elephants, lions, giraffes, and zebras. Many different kinds of people live there, with many languages and cultures. The capital city is Cape Town. Today, anyone can visit. But it wasn't always so welcoming.` },
            { word: `Africa`,       definition: `One of the seven continents — a HUGE land with many countries, languages, and amazing animals.`,
              audioPrompt: `Africa is one of the seven continents, {name} — and it's HUGE. The whole United States could fit inside Africa three times! There are 54 countries in Africa, with thousands of languages spoken. Africa is the birthplace of humans — the very first humans lived there, hundreds of thousands of years ago. It's a continent of incredible history and beauty.` },
            { word: `problem`,      definition: `Something that's hard or wrong that needs to be fixed. South Africa had a big problem.`,
              audioPrompt: `A problem is something hard or wrong that needs to be fixed, {name}. South Africa had a big problem when Nelson Mandela was born. The rules in the country were UNFAIR. Black Africans were treated badly in their own homeland. Smaller things, like which beaches they could swim at, and bigger things, like whether they could vote, were all decided by skin color. It was wrong. Mandela's life was about fixing this problem.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Unfair Rules Called Apartheid`,
          paragraphs: [
            `For 46 years, South Africa had unfair laws called APARTHEID.`,
            `Apartheid means "apartness." The rules separated people by their skin color. Black Africans — the MAJORITY of people in their own country — were not allowed to vote, live in certain places, or use many public spaces. White people made all the rules. It was deeply unfair.`,
          ],
          image: `/explorer-assets/history/l14-s2-unfair.webp`,
          imageCaption: `Apartheid — unfair laws that kept South African people apart based on skin color. It was wrong, and brave people worked to end it.`,
          vocab: [
            { word: `apartheid`,  definition: `A system of unfair laws in South Africa that separated people by skin color. Apartheid means "apartness."`,
              audioPrompt: `Apartheid is a word from South Africa that means "apartness," {name}. It was a system of unfair laws that kept Black Africans separated from white people. Black Africans — the MAJORITY of the population — couldn't vote in their own country. They had to live in certain areas. They had to carry special papers. White South Africans made all the rules. Apartheid started in 1948 and lasted 46 years. Brave people worked very hard to end it.` },
            { word: `majority`,   definition: `The bigger group. In South Africa, Black Africans were the majority — but had the fewest rights.`,
              audioPrompt: `Majority means the bigger group, {name}. In South Africa, Black Africans were the MAJORITY of the population. Way more Black Africans lived there than white Africans. But under apartheid, the SMALLER group made all the rules. The MAJORITY had the FEWEST rights. That's part of what made apartheid so unfair. It put the smallest group in charge of everyone.` },
            { word: `separate`,   definition: `To keep apart. Apartheid kept South African people separated by skin color.`,
              audioPrompt: `Separate means kept apart, {name}. Apartheid was all about keeping people SEPARATE based on skin color. Different beaches. Different buses. Different schools. Different neighborhoods. Black Africans even had to carry special papers to prove they were allowed to be in certain places. Imagine being separated from people just because of how you look. Mandela couldn't accept that. Neither could millions of others.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Young Mandela Stands Up`,
          paragraphs: [
            `Nelson Mandela was born into apartheid. He saw the unfairness all around him.`,
            `He became a LAWYER — someone who helps people with laws. He worked to change the unfair rules. He gave speeches. He led peaceful protests. He believed that ALL South Africans should be equal. But the government didn't want to change. They ARRESTED him.`,
          ],
          image: `/explorer-assets/history/l14-s3-mandela-young.webp`,
          imageCaption: `Young Mandela became a lawyer and a leader. He believed in fairness. Standing up to apartheid was dangerous — but he did it anyway.`,
          vocab: [
            { word: `lawyer`,   definition: `A person who knows about laws and helps people. Mandela was a lawyer.`,
              audioPrompt: `A lawyer is a person who knows about laws and helps people, {name}. Mandela became a lawyer. He used his knowledge of laws to defend Black South Africans who were being treated unfairly. He believed laws should protect EVERYONE, not just some people. Many people thought it was amazing that a Black African could become a lawyer in apartheid South Africa. He worked very hard to get there.` },
            { word: `stand up`, definition: `To take action when something is unfair. Mandela stood up to apartheid.`,
              audioPrompt: `To stand up means to take action when something is unfair, {name}. Mandela stood up to apartheid. He gave speeches against it. He helped people understand why it was wrong. He led peaceful marches. He worked with others who believed the same thing. Standing up to powerful people who are doing wrong is one of the bravest things a person can do. Mandela did it knowing it could cost him his freedom.` },
            { word: `arrested`, definition: `Taken away by the police. Mandela was arrested for standing up to apartheid.`,
              audioPrompt: `Arrested means taken away by police, {name}. The South African government didn't like that Mandela was working to end apartheid. They arrested him. They put him in court. They gave him a long, long punishment — he would have to stay in PRISON for the rest of his life. He was 46 years old when he went to prison. Most people would have given up. Mandela didn't.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `27 Years in Prison`,
          paragraphs: [
            `For 27 LONG YEARS, Nelson Mandela was in prison.`,
            `He was on a small island called ROBBEN ISLAND, off the coast of South Africa. The prison was hard. He missed his family. He missed freedom. But he NEVER GAVE UP HIS DREAM. He read books. He stayed strong. He kept hoping. Meanwhile, people all over the world heard about him and started speaking up — calling for his freedom.`,
          ],
          image: `/explorer-assets/history/l14-s4-prison.webp`,
          imageCaption: `Twenty-seven years. On a small island. Away from family. But Mandela never gave up hope. The world started watching.`,
          vocab: [
            { word: `prison`,      definition: `A place where people who break the law are kept. Mandela was in prison for 27 years.`,
              audioPrompt: `A prison is a place where people who break the law are kept, {name}. Mandela's prison was on a small island called ROBBEN ISLAND. He was there for 27 years. Imagine — almost three decades. Most people who go to school start when they're about 5 and finish college when they're about 22. That's 17 years. Mandela was in prison for 10 MORE years on top of that. It's an incredible amount of time.` },
            { word: `27 years`,    definition: `The amount of time Mandela was in prison. That's longer than most kids have been alive.`,
              audioPrompt: `27 years is a really long time, {name}. Longer than your parents have probably been parents. Longer than most kids alive today have been alive. When Mandela went into prison, computers and cell phones didn't exist. When he came out, they were everywhere. The whole world had changed. But Mandela kept his hope and his dream alive that whole time. That's almost unbelievable patience.` },
            { word: `world`,       definition: `The whole Earth — all the people. The world watched what was happening to Mandela.`,
              audioPrompt: `The world means everyone on Earth, {name}. While Mandela was in prison, the WORLD started watching what was happening in South Africa. Countries stopped trading with South Africa. Musicians wrote songs about Mandela. People marched in cities all over the world. They had t-shirts that said FREE MANDELA. The pressure built and built. The world wouldn't accept apartheid.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Freedom`,
          paragraphs: [
            `After 27 years, on February 11, 1990, Nelson Mandela WALKED OUT of prison.`,
            `He was 71 years old. The whole world watched on TV. People cheered. They cried. They danced in the streets. South Africa had a new chance. The unfair laws of apartheid were ENDING. And four years later, in 1994, South Africa held its first FAIR election. EVERYONE could vote. Mandela won. He became PRESIDENT of South Africa.`,
          ],
          image: `/explorer-assets/history/l14-s5-freedom.webp`,
          imageCaption: `February 11, 1990. After 27 years, Mandela walked out of prison. The world watched and cheered. South Africa had a new chance.`,
          vocab: [
            { word: `freedom`,   definition: `Being free to live your life. Mandela's freedom after 27 years made the whole world celebrate.`,
              audioPrompt: `Freedom is being free to live your own life, {name}. When Mandela walked out of prison after 27 years, the whole world celebrated his freedom. He held his wife's hand. He raised his other fist in the air — the symbol of the fight against apartheid. He smiled. He'd waited 27 years for this moment. He didn't waste a second of freedom. He went straight back to work for South Africa.` },
            { word: `election`,  definition: `When everyone votes to choose their leaders. South Africa's first fair election was in 1994.`,
              audioPrompt: `An election is when everyone votes to choose their leaders, {name}. In 1994, South Africa held its first FAIR election — where every adult, no matter their skin color, could vote. People stood in lines for HOURS, sometimes all day, just to vote for the first time. Some had waited their whole LIVES. The whole country was joyful. Mandela won. He became the first Black president of South Africa.` },
            { word: `president`, definition: `The leader of a country. Mandela became the first Black president of South Africa in 1994.`,
              audioPrompt: `A president is the leader of a country, {name}. After 27 years in prison, Mandela became the PRESIDENT of South Africa. Imagine the people who put him in prison. They were now his fellow citizens. The country he was now leading was the same country that had been so unfair to him. What he chose to do next is the most amazing part of his story.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Choice of Forgiveness`,
          paragraphs: [
            `When Mandela became president, he had a choice.`,
            `He could have been angry. He could have punished the white South Africans who had hurt him and his people. Many expected he would. Instead, he chose FORGIVENESS. He invited the white population to work with him. He said: "Let's build South Africa TOGETHER. The past is the past. The future is bigger." It was one of the most remarkable choices in history.`,
          ],
          image: `/explorer-assets/history/l14-s6-forgiveness.webp`,
          imageCaption: `Mandela chose forgiveness. Not because what happened was okay — but because he wanted South Africa to heal. He chose unity over revenge.`,
          vocab: [
            { word: `forgiveness`, definition: `Choosing to let go of anger when someone has hurt you. Mandela forgave the people who hurt him.`,
              audioPrompt: `Forgiveness is one of the hardest things humans can do, {name}. It's choosing to let go of anger when someone has hurt you. Mandela had been treated so badly. His friends. His family. His whole community. He had every right to be angry. But he made a CHOICE. He said: I forgive. Not because what happened was okay. But because holding on to anger would hurt his country. Forgiveness doesn't mean you forget. It means you choose to move forward in peace.` },
            { word: `revenge`,     definition: `Hurting someone because they hurt you. Mandela chose NOT to take revenge.`,
              audioPrompt: `Revenge is hurting someone because they hurt you, {name}. Many people thought Mandela would take revenge when he became president. Many of his enemies thought so too. But Mandela said NO. He chose forgiveness instead. He knew that revenge would only make more pain. He wanted his country to HEAL. So he refused revenge. He chose peace.` },
            { word: `together`,    definition: `Working as one. Mandela wanted ALL South Africans — Black and white — to work together.`,
              audioPrompt: `Together means working as one, {name}. Mandela wanted ALL South Africans — Black and white — to work TOGETHER to build a new country. He invited people from every side. He kept his enemies as part of his team. He showed everyone that being together was stronger than being apart. South Africa is still working on this today. But Mandela's example showed the way. Together is how broken places heal.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about Nelson Mandela, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `Nelson Mandela spent 27 years in prison for working to end apartheid.`,
              matchPhrase: `Yes! Mandela was in prison from 1962 to 1990 — 27 long years. The whole world eventually called for his freedom. When he finally walked out, history changed.`,
              correctMatch: `fact` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `After he was freed, Mandela became the first Black president of South Africa.`,
              matchPhrase: `True! In 1994, South Africa had its first fair election. Mandela won. He became president of the very same country that had imprisoned him. And he chose forgiveness over revenge.`,
              correctMatch: `fact` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `Mandela used a magic wand to instantly fix all of South Africa's problems.`,
              matchPhrase: `Not even close! There was no magic wand, {name}. Mandela worked HARD for decades — even from prison — to change South Africa. Real change takes patience and courage, not magic.`,
              correctMatch: `myth` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `Nelson Mandela was a famous professional wrestler.`,
              matchPhrase: `Ha! That's a different kind of fighting, {name}. Mandela was a LAWYER and a LEADER. The only ring he was in was the political one. He fought with words and ideas — not body slams.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What was APARTHEID?`,
              options: [`A type of food`, `A system of unfair laws in South Africa that separated people by skin color`, `A famous dance`, `A kind of car`],
              correctIndex: 1,
              explanation: `Apartheid was a system of unfair laws in South Africa that kept people separated by skin color. The word means "apartness." It lasted 46 years before brave people like Nelson Mandela helped end it.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `How long was Nelson Mandela in prison?`,
              options: [`One year`, `Five years`, `Twenty-seven years`, `One hundred years`],
              correctIndex: 2,
              explanation: `Twenty-seven YEARS! That's longer than most kids have been alive. Mandela was put in prison for working to end apartheid. He spent 27 years on a small island called Robben Island. But he never gave up his dream.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What did Mandela choose to do when he became president?`,
              options: [`Get revenge on everyone who had hurt him`, `Choose forgiveness and build South Africa together with everyone`, `Move to another country`, `Make new prisons`],
              correctIndex: 1,
              explanation: `Mandela chose FORGIVENESS over revenge. He invited everyone — Black and white South Africans — to build a new country together. It was one of the most remarkable choices in history. He showed the whole world a different way.` },
            { id: `l14-q4`, format: `true-false`,
              question: `When Mandela walked out of prison after 27 years, the whole world celebrated.`,
              correctAnswer: true,
              explanation: `True! On February 11, 1990, Mandela walked out of prison. People all over the world watched on TV. They cheered. They cried. They danced. After 27 long years, freedom had finally come.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `In 1994, South Africa had its first fair ___, and Mandela won.`,
              options: [`election`, `birthday`, `party`, `breakfast`],
              correctIndex: 0,
              explanation: `An election! The first FAIR election in South Africa. Everyone could finally vote. Some people stood in line for hours, even all day, just for the chance to vote for the first time. Mandela won. He became the first Black president of South Africa.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What's one of the most important lessons from Nelson Mandela's life?`,
              options: [`Always seek revenge`, `Forgiveness is brave and powerful — and can change a whole country`, `Time machines work`, `Being a wrestler is best`],
              correctIndex: 1,
              explanation: `Forgiveness is brave and powerful. Mandela showed the world that you can stand strong against unfairness, and ALSO choose forgiveness when the time comes. Both take courage. Both change the world.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Today, Nelson Mandela is honored all over the world, {name}. There's a Nelson Mandela Day every July 18th — his birthday. Many schools, parks, and streets are named after him. The prison where he spent 27 years on Robben Island is now a museum. People visit and see the small cell where he lived. South Africa is still working on making sure ALL its citizens are treated fairly. Mandela's example of forgiveness is studied by leaders around the world.`,
          familyAdventure: `Read a story about Nelson Mandela together — there are wonderful kid-friendly books like "Long Walk to Freedom" (a picture book version) or "Nelson Mandela" by Kadir Nelson. After, talk about FORGIVENESS. Has anyone in your family ever forgiven someone who hurt them? Has someone forgiven YOU? What does forgiveness feel like?`,
          creativePrompt: `Draw or write about someone you choose to FORGIVE. It can be a small thing — like forgiving a friend who borrowed your toy without asking. Or something bigger that's hurt you. You don't have to share it with anyone. Forgiveness is a gift you give yourself. Just like Mandela.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about Nelson Mandela — apartheid, 27 years in prison, his walk to freedom, and the extraordinary choice of forgiveness that changed a country and inspired the world. His story is about more than history. It's about who we can choose to be — even when we've been hurt. I carry his story with me. Thank you for journeying with me.`,
          badge: `mandela-explorer`,
          badgeName: `Mandela Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L14] Loaded: "Nelson Mandela: The Man Who Chose Forgiveness" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
