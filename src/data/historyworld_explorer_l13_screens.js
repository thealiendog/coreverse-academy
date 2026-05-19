// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L13 — The Civil Rights Movement
// Age band : explorers (6–8)   Guide: lyra
// Slots between L12 (WWII) and L14 (Mandela)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L13 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-13`,
      title:     `The Civil Rights Movement: Fighting for Fairness`,
      duration:  12,
      xpReward:  50,
      badge:     `civil-rights-explorer`,
      badgeName: `Civil Rights Explorer`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. Last lesson — WWII — was hard. Today's lesson is also serious — but it has more HOPE. We're going to meet the AMERICAN CIVIL RIGHTS MOVEMENT — when ordinary people stood up against unfair laws and CHANGED their country. People like ROSA PARKS, MARTIN LUTHER KING JR., RUBY BRIDGES, and so many others. They used PEACEFUL action and won. Their work still matters today. Let's go.`,
          headline: `The Civil Rights Movement`,
          subtitle: `When ordinary Americans stood up for fairness — and changed everything`,
          visual: `/explorer-assets/history/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `An UNEQUAL America`,
          paragraphs: [
            `Just 70 years ago, the United States had some VERY UNFAIR LAWS. These laws separated people by SKIN COLOR — called SEGREGATION.`,
            `Black Americans had to use SEPARATE water fountains, SEPARATE bathrooms, SEPARATE schools, SEPARATE seats on buses. Many restaurants wouldn't serve them. Many businesses wouldn't hire them. The "separate" places were usually WORSE — older buildings, fewer books, less money. Black Americans often couldn't VOTE — even though they were citizens with the right to vote — because some places made it nearly impossible. This was wrong. It was happening 100 years AFTER slavery had ended. The Civil War had freed enslaved people in 1865 — but unfair laws (called Jim Crow laws) kept segregation going for the next 100 years. By the 1950s, brave people started saying: "ENOUGH. This must CHANGE." The Civil Rights Movement was born.`,
          ],
          image: `/explorer-assets/history/l13-s1-unequal-america.webp`,
          imageCaption: `Segregation: separate water fountains, schools, buses, seats. Black Americans treated unfairly by law. The 1950s.`,
          vocab: [
            { word: `segregation`,    definition: `LAWS that KEPT PEOPLE APART by skin color. SEGREGATION was the unfair system the Civil Rights Movement worked to end.`,
              audioPrompt: `Segregation, {name}, was laws that kept people apart by skin color. Segregation was the unfair system the Civil Rights Movement worked to end. Black Americans had separate water fountains, schools, restaurants, and seats on buses. The "separate" places were almost always worse. It was unfair and it was wrong.` },
            { word: `Jim Crow laws`,  definition: `The UNFAIR SOUTHERN LAWS that enforced SEGREGATION. JIM CROW LAWS lasted about 100 years after slavery ended.`,
              audioPrompt: `Jim Crow laws, {name}, were the unfair southern laws that enforced segregation. Jim Crow laws lasted about one hundred years after slavery ended in 1865. They controlled where Black Americans could eat, sit, live, and even vote. The laws were terrible. The Civil Rights Movement worked to end them.` },
            { word: `unfair`,         definition: `NOT TREATING people EQUALLY. SEGREGATION laws were deeply UNFAIR.`,
              audioPrompt: `Unfair, {name}, means not treating people equally. Segregation laws were deeply unfair. Two people doing the same thing got different treatment based on skin color. Same job, different pay. Same school district, different schools. Same store, different doors. Anything unequal because of who someone IS is unfair. The Civil Rights Movement said: enough.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `ROSA PARKS Won't Move`,
          paragraphs: [
            `In December 1955, in MONTGOMERY, ALABAMA, a woman named ROSA PARKS got on a city bus after a long day at work. She sat down in a seat. When a white man got on, the bus driver told Rosa to MOVE to a "colored" section in the back.`,
            `Rosa REFUSED. Quietly. Firmly. She was tired — not just from her day, but tired of being treated as less than. The driver called the police. Rosa was ARRESTED. But her courage SPARKED something huge. Black leaders in Montgomery called for a BUS BOYCOTT — meaning Black Americans would refuse to ride the buses until they were treated fairly. For 381 DAYS, Black Montgomery citizens WALKED, carpooled, and avoided the buses entirely. The bus company lost a lot of money. Finally, the US Supreme Court ruled that bus segregation was UNCONSTITUTIONAL. The boycott had WON. Rosa Parks didn't plan to be a hero. She was just one tired person who said "no" to unfairness. But her quiet courage CHANGED HISTORY. One person doing one brave thing — that's how movements often start.`,
          ],
          image: `/explorer-assets/history/l13-s2-rosa-parks-bus.webp`,
          imageCaption: `Rosa Parks (1955): refused to give up her bus seat. Sparked the Montgomery Bus Boycott. 381 days. The boycott won.`,
          vocab: [
            { word: `Rosa Parks`,     definition: `A WOMAN who REFUSED to give up her bus SEAT. ROSA PARKS sparked the Montgomery Bus Boycott in 1955.`,
              audioPrompt: `Rosa Parks, {name}, was a woman who refused to give up her bus seat. Rosa Parks sparked the Montgomery Bus Boycott in nineteen fifty five. She was tired. She was a seamstress, an NAACP member, and ordinary in many ways. But she had courage. Her quiet "no" started something huge. Now she's a hero remembered in books and statues everywhere.` },
            { word: `boycott`,        definition: `When people REFUSE to BUY or USE something to PROTEST. The MONTGOMERY BUS BOYCOTT lasted 381 days.`,
              audioPrompt: `A boycott, {name}, is when people refuse to buy or use something to protest. The Montgomery Bus Boycott lasted three hundred eighty one days. Black Americans in Montgomery refused to ride city buses for over a year. They walked. They carpooled. They walked some more. The bus company lost so much money it had to give in. Boycotts are a peaceful but powerful tool.` },
            { word: `Supreme Court`,  definition: `The HIGHEST COURT in America. The SUPREME COURT can declare laws UNCONSTITUTIONAL.`,
              audioPrompt: `The Supreme Court, {name}, is the highest court in America. The Supreme Court can declare laws unconstitutional. In nineteen fifty six, the Supreme Court declared bus segregation unconstitutional after the Montgomery boycott. The Court has nine justices. When they decide a case, that decision is law for the whole country. Many civil rights wins came through Supreme Court decisions.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `MARTIN LUTHER KING JR. and "I Have a Dream"`,
          paragraphs: [
            `MARTIN LUTHER KING JR. was a young Black Baptist minister who became one of the GREATEST LEADERS of the Civil Rights Movement. He believed in NONVIOLENT protest — peaceful action, even when others used violence against you.`,
            `Dr. King helped lead marches across the South. He organized boycotts. He gave speeches. He was beaten. He was arrested many times. He kept going. In 1963, he led a HUGE march in WASHINGTON D.C. — over 250,000 people of all colors gathered together to demand civil rights. There, Dr. King gave his famous "I HAVE A DREAM" speech: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character." It became one of the most famous speeches in American history. Dr. King won the Nobel Peace Prize in 1964 for his work. Tragically, he was assassinated in 1968. He was only 39 years old. But his words and his dream live on. Every January, America celebrates MARTIN LUTHER KING JR. DAY in his honor.`,
          ],
          image: `/explorer-assets/history/l13-s3-mlk-dream.webp`,
          imageCaption: `Dr. Martin Luther King Jr.: nonviolent protest leader. "I Have a Dream" speech, 1963, March on Washington. 250,000 people.`,
          vocab: [
            { word: `Martin Luther King Jr.`, definition: `The greatest LEADER of the Civil Rights Movement. DR. KING preached PEACEFUL action and dreamed of an equal America.`,
              audioPrompt: `Martin Luther King Jr., {name}, was the greatest leader of the Civil Rights Movement. Dr. King preached peaceful action and dreamed of an equal America. A Baptist minister, brilliant speaker, brave organizer. He led marches, faced violence, went to jail many times. He kept choosing nonviolence even when attacked. He was killed in nineteen sixty eight. His work changed the country. He's a hero.` },
            { word: `nonviolent`,     definition: `Without USING VIOLENCE — through peaceful action only. NONVIOLENT protest was Dr. King's method.`,
              audioPrompt: `Nonviolent, {name}, means without using violence — through peaceful action only. Nonviolent protest was Dr. King's method. He learned it from Gandhi in India. The idea: don't fight back with fists, even if attacked. Just keep showing up. Keep marching. Keep peaceful. Eventually, the world sees who's right. It worked. Powerful and brave.` },
            { word: `I have a dream`, definition: `The most FAMOUS speech of the Civil Rights Movement. "I HAVE A DREAM" — Dr. King's 1963 vision of an equal America.`,
              audioPrompt: `I have a dream, {name}, was the most famous speech of the Civil Rights Movement. "I have a dream" was Dr. King's nineteen sixty three vision of an equal America. He spoke to 250,000 people at the March on Washington. His dream: that children of all colors would be judged not by their skin but by their character. The speech is still studied in schools today. Words that changed America.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `RUBY BRIDGES: One Brave Kid`,
          paragraphs: [
            `In 1960, a 6-YEAR-OLD GIRL named RUBY BRIDGES became one of the FIRST Black students at a previously all-white elementary school in NEW ORLEANS.`,
            `It wasn't easy. Angry crowds shouted at her every day. Some parents pulled their white kids out of the school rather than let them learn with Ruby. Most teachers refused to teach her. The school had to provide FEDERAL MARSHALS to walk Ruby safely into the building each morning. For her ENTIRE first year, Ruby was the ONLY student in her class. Her teacher, Barbara Henry, taught Ruby alone. Despite all of it, Ruby kept going. She kept showing up. She kept learning. She was 6 years old. And she helped INTEGRATE schools across America. Her courage made it easier for the next Black student. And the next. Today, Ruby Bridges is a grown-up who travels and speaks about kindness, courage, and standing up for what's right. She often says: "Don't follow the path. Make your OWN path. And help others come along behind you." A 6-year-old changed her country.`,
          ],
          image: `/explorer-assets/history/l13-s4-ruby-bridges-school.webp`,
          imageCaption: `Ruby Bridges (1960): age 6. First Black student at her school. Federal marshals escorted her. Brave beyond words.`,
          vocab: [
            { word: `Ruby Bridges`,   definition: `A 6-YEAR-OLD GIRL who INTEGRATED a New Orleans school. RUBY BRIDGES showed courage beyond her years.`,
              audioPrompt: `Ruby Bridges, {name}, was a six-year-old girl who integrated a New Orleans school. Ruby Bridges showed courage beyond her years. In nineteen sixty, she walked into a previously all-white school surrounded by angry crowds. Federal marshals protected her. She did it. She helped change America. Today, she's grown up and still teaches courage and kindness.` },
            { word: `integrate`,      definition: `To BRING TOGETHER people of all RACES. To INTEGRATE schools meant Black and white kids learning together.`,
              audioPrompt: `To integrate, {name}, is to bring together people of all races. To integrate schools meant Black and white kids learning together. Before integration, segregation kept them apart. Integration was sometimes very hard — angry resistance, even violence. But brave kids like Ruby walked into the schools. Slowly, integration spread. Today, kids of all colors learn together in most American schools.` },
            { word: `kid courage`,    definition: `BRAVERY shown by CHILDREN. RUBY'S kid courage helped change America.`,
              audioPrompt: `Kid courage, {name}, is bravery shown by children. Ruby's kid courage helped change America. Kids can be heroes too. They don't need to be old. They don't need power. They just need to do the right thing when it counts. Ruby was six. Anne Frank was fifteen. Malala was fifteen. Kid courage changes the world.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `MARCHES, LAWS, and WINS`,
          paragraphs: [
            `The Civil Rights Movement won REAL VICTORIES through years of MARCHES, SIT-INS, BOYCOTTS, and SPEECHES.`,
            `In 1954, the Supreme Court ruled in BROWN v. BOARD OF EDUCATION that segregated schools were unconstitutional. School segregation HAD to end. In 1957, nine Black students integrated Little Rock High School in Arkansas — protected by federal soldiers. They became known as the LITTLE ROCK NINE. In 1960, college students started SIT-INS at "whites only" lunch counters. They sat peacefully, were refused service, were sometimes beaten. They kept coming. The lunch counters integrated. In 1964, the CIVIL RIGHTS ACT became law — banning segregation in public places and discrimination in employment. In 1965, the VOTING RIGHTS ACT made it ILLEGAL to keep Black Americans from voting. JOHN LEWIS led peaceful marches in Selma, Alabama — he was beaten on the Edmund Pettus Bridge in front of TV cameras. The country watched. The country was shocked. The laws changed. PEACEFUL action — combined with media attention and good leaders in government — won real change. Slowly, then suddenly, segregation was illegal across America.`,
          ],
          image: `/explorer-assets/history/l13-s5-peaceful-protest.webp`,
          imageCaption: `Decade of wins: Brown v Board (1954), Civil Rights Act (1964), Voting Rights Act (1965). Marches, sit-ins, courage.`,
          vocab: [
            { word: `Brown v Board`,  definition: `The 1954 SUPREME COURT case that ended SCHOOL segregation. BROWN V BOARD OF EDUCATION changed American schools.`,
              audioPrompt: `Brown versus Board, {name}, was the nineteen fifty four Supreme Court case that ended school segregation. Brown versus Board of Education changed American schools. Before this, "separate but equal" schools were allowed. The Supreme Court said: separate is never really equal. Schools had to integrate. It was the start of the legal end of segregation.` },
            { word: `sit-in`,         definition: `A PEACEFUL protest where you SIT QUIETLY in a place to demand fair treatment. SIT-INS integrated lunch counters.`,
              audioPrompt: `A sit-in, {name}, is a peaceful protest where you sit quietly in a place to demand fair treatment. Sit-ins integrated lunch counters. Black college students sat at "whites only" counters and ordered food. They were refused service. They didn't leave. They came back the next day. And the next. Some were beaten. They didn't fight back. Slowly, lunch counters integrated. Sit-ins worked.` },
            { word: `Civil Rights Act`, definition: `The 1964 LAW that ended SEGREGATION in PUBLIC places. The CIVIL RIGHTS ACT was a huge victory.`,
              audioPrompt: `The Civil Rights Act, {name}, was the nineteen sixty four law that ended segregation in public places. The Civil Rights Act was a huge victory. President Lyndon Johnson signed it after fierce debates. It banned segregation in restaurants, hotels, and public spaces. It banned employment discrimination. It gave the federal government power to enforce equality. The biggest civil rights win in American history.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Rights KEEP GROWING`,
          paragraphs: [
            `{name} — the Civil Rights Movement won real victories. But the work CONTINUES today.`,
            `The movement also INSPIRED other movements for fairness. Women's rights expanded. The Americans with Disabilities Act (1990) gave disabled people equal access. LGBTQ rights expanded — marriage equality became law in 2015. Native American rights movements gained ground. The methods learned in the Civil Rights Movement — peaceful protest, marches, court cases, voting — became tools for many causes. Around the WORLD, the Civil Rights Movement inspired others. NELSON MANDELA in South Africa (you'll meet him next lesson!) studied King and Gandhi. The same nonviolent methods helped end apartheid. Today, civil rights work goes on. There's still racism. There's still inequality. There are still people fighting for fair treatment. The same nonviolent tools — speech, voting, marches, courts, kindness — are still used. The Civil Rights Movement taught the world: ORDINARY PEOPLE can change UNFAIR systems through COURAGE and PEACEFUL action. That's true 60 years ago. It's true today. It will be true tomorrow. The dream isn't finished. But it's CLOSER. And each generation has the choice: continue the dream, or let it slow down. You're part of the next chapter.`,
          ],
          image: `/explorer-assets/history/l13-s6-rights-expand.webp`,
          imageCaption: `Civil Rights inspired more rights movements: women's, disability, LGBTQ, native rights. Work continues. You're part of it.`,
          vocab: [
            { word: `keeps growing`,  definition: `EXPANDING to more PEOPLE. Rights movements KEEP GROWING — adding more groups to equal treatment.`,
              audioPrompt: `Keeps growing, {name}, means expanding to more people. Rights movements keep growing — adding more groups to equal treatment. Civil rights for Black Americans inspired women's rights. Then disability rights. Then LGBTQ rights. Then Native American rights. Each group used similar peaceful methods. Each won real protections. Rights aren't fixed — they expand as society grows.` },
            { word: `peaceful tools`, definition: `WAYS to change things WITHOUT violence. PEACEFUL TOOLS like marches, voting, and speech work.`,
              audioPrompt: `Peaceful tools, {name}, are ways to change things without violence. Peaceful tools like marches, voting, and speech work. Civil rights leaders showed that peaceful action is POWERFUL — not weak. Speech, art, signs, marches, sit-ins, voting, courts. These can change unfair laws and unfair attitudes. Slow but real. Used around the world today.` },
            { word: `your chapter`,   definition: `YOUR ROLE in continuing the story. The dream isn't finished — YOUR CHAPTER is to keep it growing.`,
              audioPrompt: `Your chapter, {name}, is your role in continuing the story. The dream isn't finished — your chapter is to keep it growing. Each generation makes the world a little fairer or a little less fair. You're starting your chapter. Small things matter — including everyone, standing up to unfairness, voting when you grow up, treating people with dignity. You're a Civil Rights Movement descendant. The work continues with you.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `PEACEFUL PROTEST — marches, boycotts, sit-ins, courts — can change unfair laws and win equal rights.`,
              matchPhrase: `Yes! Dr. King, Rosa Parks, Ruby Bridges, John Lewis — all used peaceful action. They won the Civil Rights Act, Voting Rights Act, school integration. Nonviolence is powerful.`,
              correctMatch: `fact` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `ORDINARY people — like Rosa Parks (seamstress) and Ruby Bridges (6 years old!) — can spark MASSIVE change with one brave act.`,
              matchPhrase: `True! Rosa Parks was tired. She said "no." Sparked a 381-day boycott. Ruby Bridges was 6. She walked into school. Helped integrate America. Ordinary courage. Extraordinary change.`,
              correctMatch: `fact` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `Fairness and equal rights are AUTOMATIC — they just happen by themselves, no one has to work for them.`,
              matchPhrase: `Not at all! Every right you have was FOUGHT FOR. Voting, school integration, fair workplaces — all won by people working for years. Rights have to be defended every generation.`,
              correctMatch: `myth` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `Civil rights are ONLY important for SOME people — they don't affect anyone else.`,
              matchPhrase: `Definitely not! Civil rights are HUMAN rights. They affect EVERYONE. When some are treated unfairly, all of society is hurt. Civil rights movements inspired women's rights, disability rights, LGBTQ rights — all connected.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What was SEGREGATION?`,
              options: [`A school subject`, `Unfair laws that KEPT PEOPLE APART by skin color — separate water fountains, schools, buses, seats`, `A holiday`, `A game`],
              correctIndex: 1,
              explanation: `Segregation was the unfair system that separated Black and white Americans by law. Separate (and usually worse) places for everything. The Civil Rights Movement worked to end it.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What did ROSA PARKS do that sparked a 381-day boycott?`,
              options: [`Sang a song`, `Refused to give up her bus SEAT in 1955 Montgomery — quiet courage that started something huge`, `Painted a picture`, `Ran in a race`],
              correctIndex: 1,
              explanation: `Rosa Parks refused to give up her bus seat. She was arrested. Black Montgomery citizens then boycotted buses for 381 days. The Supreme Court ruled bus segregation unconstitutional. The boycott won.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `Who gave the "I HAVE A DREAM" speech?`,
              options: [`Rosa Parks`, `MARTIN LUTHER KING JR. — at the 1963 March on Washington, to 250,000 people`, `Ruby Bridges`, `George Washington`],
              correctIndex: 1,
              explanation: `Dr. Martin Luther King Jr.! His most famous speech, dreaming of an America where his children would be judged by character, not skin color. Still studied today.` },
            { id: `l13-q4`, format: `true-false`,
              question: `RUBY BRIDGES was just 6 YEARS OLD when she became one of the first Black students at her elementary school in 1960.`,
              correctAnswer: true,
              explanation: `True! Ruby was 6. Federal marshals walked her to school past angry crowds. She was alone in her class for a year. Pure kid courage. She helped change America.` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `The Civil Rights Movement used ___ protest — peaceful action, no fighting back even when attacked. Inspired by Gandhi.`,
              options: [`nonviolent`, `loud`, `quick`, `angry`],
              correctIndex: 0,
              explanation: `Nonviolent! Peaceful action. Marches, sit-ins, boycotts, speeches. Even when attacked, don't fight back. Dr. King learned it from Gandhi. It's hard. It works.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `What did the Civil Rights Movement TEACH the world?`,
              options: [`Nothing`, `Ordinary people can change UNFAIR systems through COURAGE and PEACEFUL action`, `Just stories`, `Only one country matters`],
              correctIndex: 1,
              explanation: `The big lesson: ordinary people can change unfair systems through courage and peaceful action. Methods used in America inspired movements worldwide — Mandela, Malala, and many others.` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's something to know, {name}. ALL THE RIGHTS you grow up with — going to any school, sitting anywhere on a bus, voting (when you turn 18), using any restaurant — were FOUGHT FOR by people just a generation or two ago. Your grandparents may remember when these rights didn't exist. That's HOW RECENT this is. The Civil Rights Movement also taught the world a powerful method — that peaceful action works. NELSON MANDELA (next lesson!) used these same methods to end apartheid in South Africa. MALALA YOUSAFZAI used them to fight for girls' education. People in HONG KONG, MYANMAR, IRAN, RUSSIA — wherever rights are at risk — use these methods today. You can be part of it too. Small acts matter. Include the kid who feels left out. Speak up if someone is being treated unfairly. Listen to people whose lives are different from yours. When you grow up, VOTE. Stay informed. Defend others' rights as your own. That's how the movement keeps going.`,
          familyAdventure: {
            title: `People Who Made Change`,
            scenario: `Together, research THREE civil rights heroes you haven't met yet (besides King, Parks, and Bridges). Examples: JOHN LEWIS (Selma marches, later congressman), FANNIE LOU HAMER (voting rights), MEDGAR EVERS, FRED SHUTTLESWORTH, DIANE NASH, THURGOOD MARSHALL (Supreme Court justice). For each, talk about: what they did, what risks they took, what they helped change.`,
            talkingPoint: `So many heroes that history sometimes forgets. Honor them by remembering. Which hero surprised you most?`,
          },
          creativePrompt: {
            title: `Equality March`,
            description: `Draw an "EQUALITY MARCH." Imagine a huge peaceful march down a street. The marchers are people of EVERY kind — different skin colors, different ages, different abilities, different cultures, different religions. They're holding signs about FAIRNESS, KINDNESS, and EQUAL RIGHTS. Maybe Dr. King is leading. Maybe Rosa Parks is there. The crowd extends as far as you can see. Above, sunny sky. This is the dream. Draw it. Live it.`,
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Powerful lesson, {name}! You've explored the AMERICAN CIVIL RIGHTS MOVEMENT. Brave people stood up against SEGREGATION. ROSA PARKS refused to give up her bus seat. DR. MARTIN LUTHER KING JR. led nonviolent marches and gave the "I Have a Dream" speech. RUBY BRIDGES integrated a school at age 6. They WON real changes — Brown v Board (1954), Civil Rights Act (1964), Voting Rights Act (1965). They INSPIRED other movements — women's rights, disability rights, LGBTQ rights, and around the world. The lessons: ORDINARY people + COURAGE + PEACEFUL action = real change. The dream isn't finished. Your chapter is next. Next lesson — NELSON MANDELA in South Africa, who used similar methods to end apartheid. — Lyra 🐘`,
          badge: `civil-rights-explorer`,
          badgeName: `Civil Rights Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L13;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L13] Loaded: "Civil Rights Movement" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
