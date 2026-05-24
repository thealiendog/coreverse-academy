// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L15 — The Cold War
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.His.1.3-5 / D2.His.2.3-5 / D2.His.14.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (Cuban Missile Crisis: you're JFK)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-15`,
      title: `The Cold War`,
      duration: 24,
      xpReward: 75,
      badge: `cold-war-strategist`,
      badgeName: `Cold War Strategist`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Last lesson we ended World War Two. Today we cover what came right after — the Cold War. From nineteen forty-five to nineteen ninety-one, the world was divided into two camps led by two superpowers — the United States and the Soviet Union. They never fought each other directly, but they came terrifyingly close, multiple times. By the end of this lesson, you'll have stepped into one of the closest moments to nuclear war the world ever experienced.`,
          headline: `The Cold War`,
          subtitle: `Forty-five years of tension between two superpowers`,
          visual: `/ue-assets/social-studies/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Superpowers, Two Worldviews`,
          paragraphs: [
            `When World War Two ended in nineteen forty-five, two countries stood far above the rest in power — the United States and the Soviet Union. They had been allies during the war against Nazi Germany. But they had very different ideas about how the world should be organized.`,
            `The United States represented democracy and capitalism — free elections, private businesses, individual freedom. The Soviet Union represented communism — single-party rule, government ownership of industry, and a system run by a small group of leaders. Each side believed its system was right. Each side wanted other countries to follow its model.`,
            `So instead of cooperating after the war, the two superpowers competed. They tried to influence countries everywhere — through aid, trade, propaganda, alliances, and sometimes through wars by proxy. The competition was called the Cold War because the two superpowers never fought each other directly — but the rivalry shaped almost every major event for the next 45 years.`,
          ],
          image: `/ue-assets/social-studies/l15-s1-superpowers.webp`,
          imageCaption: `Two superpowers. Two ideologies. One planet to share.`,
          vocab: [
            { word: `superpower`,
              definition: `A country with such vast military, economic, and political influence that it can shape global events.`,
              audioPrompt: `A superpower is a country with such vast military, economic, and political influence that it can shape events worldwide, {name}. After World War Two, the US and Soviet Union were the only two true superpowers. Today the term is sometimes used for the US, China, and a few other countries. Being a superpower means having a huge military, a powerful economy, and the ability to influence many other countries. The dynamics between superpowers — how they cooperate or compete — shape the global system in major ways.` },
            { word: `Cold War`,
              definition: `The political rivalry between the US and the Soviet Union from about nineteen forty-five to nineteen ninety-one, marked by tension and competition without direct war.`,
              audioPrompt: `The Cold War was the political rivalry between the United States and the Soviet Union from about nineteen forty-five to nineteen ninety-one, {name}. The two superpowers never fought each other directly — that's why it was called "cold." But they competed everywhere — through propaganda, the space race, aid to other countries, and proxy wars. Both built huge arsenals of nuclear weapons. The Cold War shaped global politics for nearly half a century and only ended when the Soviet Union itself collapsed in nineteen ninety-one.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Proxy Wars and Divided Countries`,
          paragraphs: [
            `Because the US and the Soviet Union both had nuclear weapons, direct war between them would have meant destroying the world. So they competed through what historians call proxy wars — conflicts in other countries, where each side backed a different team.`,
            `The Korean War in the nineteen fifties divided Korea into North (backed by the Soviets and China) and South (backed by the US). It killed about 3 million people. The Vietnam War in the nineteen sixties and seventies played out the same pattern — North backed by the Soviets, South backed by the US. About 3 million Vietnamese died. The US lost about 58,000 soldiers.`,
            `Across Africa, Latin America, and Asia, the Cold War turned many local conflicts into superpower battlegrounds. Countries that wanted to stay neutral often found themselves pulled in anyway. Many ordinary people in many countries died in wars that were partly about superpower rivalry happening on their land.`,
          ],
          image: `/ue-assets/social-studies/l15-s2-proxy-wars.webp`,
          imageCaption: `Cold between the superpowers. Hot in many other countries.`,
          vocab: [
            { word: `proxy war`,
              definition: `A war where two opposing powers don't fight each other directly but back different sides in someone else's conflict.`,
              audioPrompt: `A proxy war is a war where two opposing powers don't fight each other directly, {name}. Instead, they back different sides in someone else's conflict. During the Cold War, the US and Soviet Union avoided fighting each other but supported opposite sides in wars in Korea, Vietnam, Afghanistan, Angola, and many other places. Proxy wars are a way for big powers to compete without risking nuclear war. They can also turn local disputes into much larger, deadlier conflicts. Many of the wars during the Cold War era were proxy wars.` },
            { word: `communism`,
              definition: `A political and economic system in which the government owns all property and manages the economy, with the goal of equal distribution.`,
              audioPrompt: `Communism is a political and economic system in which the government owns all property and manages the economy, {name}. The Soviet Union was the most powerful communist state. It controlled its economy entirely, with no private businesses. In theory, communism aims for equality — everyone shares resources. In practice, Soviet communism meant a small group of leaders controlled everything, and ordinary citizens had little freedom. The Cold War was partly a clash between the communist Soviet model and the capitalist democratic model of the United States.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Nuclear Weapons and the Arms Race`,
          paragraphs: [
            `Both superpowers built enormous arsenals of nuclear weapons. By the nineteen eighties, the US and Soviet Union together had roughly 60,000 nuclear warheads — enough to destroy most of human civilization many times over. This buildup is called the arms race.`,
            `Why so many? The theory was called mutual assured destruction, or MAD for short. If either side started a nuclear war, both sides would be destroyed. The terrifying logic was that no one would dare attack first, because doing so would mean killing yourself too. For decades, that logic seemed to hold. Several close calls almost broke it.`,
            `The most famous was the Cuban Missile Crisis in October nineteen sixty-two. The Soviet Union had secretly placed nuclear missiles in Cuba, less than 100 miles from the US coast. For 13 days, the world stood on the edge of nuclear war. President John F. Kennedy and Soviet leader Nikita Khrushchev negotiated under extreme pressure. The Soviets eventually agreed to remove the missiles. The world survived — barely. Many historians say this was the closest the world ever came to nuclear war.`,
          ],
          image: `/ue-assets/social-studies/l15-s3-nuclear.webp`,
          imageCaption: `60,000 warheads. The most dangerous standoff in history.`,
          vocab: [
            { word: `arms race`,
              definition: `When two opposing countries each try to build more and better weapons than the other.`,
              audioPrompt: `An arms race is when two opposing countries each try to build more and better weapons than the other, {name}. During the Cold War, the US and Soviet Union built tens of thousands of nuclear weapons over decades. The theory was that more weapons would scare the other side from attacking. The cost was enormous — money that could have gone to schools, hospitals, and roads went instead to weapons no one wanted to use. Arms races often end up creating the very dangers they were meant to prevent.` },
            { word: `mutual assured destruction`,
              definition: `The idea that if two sides both have enough nuclear weapons to destroy each other, neither will dare to attack first.`,
              audioPrompt: `Mutual assured destruction, or MAD, is the idea that if two sides both have enough nuclear weapons to destroy each other, neither will dare attack first, {name}. If you launch, I launch, and we both die — so neither of us launches. That logic is what kept the Cold War cold. It's deeply unsettling because it means nuclear peace depends on both sides staying rational and not making mistakes. During the Cuban Missile Crisis, both sides nearly broke the logic.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The End of the Cold War`,
          paragraphs: [
            `By the nineteen eighties, the Soviet Union's economy was struggling. Decades of military spending, inefficient central planning, and corruption had weakened it. Soviet leader Mikhail Gorbachev introduced reforms — more openness, more freedom of speech, and economic restructuring.`,
            `But the reforms accelerated changes Gorbachev didn't fully control. In nineteen eighty-nine, the Berlin Wall — which had divided East and West Germany for 28 years — was opened by East German citizens demanding freedom. Communist governments across Eastern Europe collapsed one after another. By the end of nineteen ninety-one, the Soviet Union itself had broken up into 15 independent countries.`,
            `The Cold War had ended. The US emerged as the world's sole superpower for a time. New democracies formed across former Soviet territory. The end was largely peaceful, which surprised many observers. But the Cold War's effects — divided countries like Korea, nuclear arsenals that still exist, tensions between Russia and the West — are still with us today.`,
          ],
          image: `/ue-assets/social-studies/l15-s4-end.webp`,
          imageCaption: `Berlin Wall, nineteen eighty-nine. The Cold War ended faster than anyone expected.`,
          vocab: [
            { word: `Berlin Wall`,
              definition: `A wall built across Berlin in nineteen sixty-one to separate East and West Germany. It came down in nineteen eighty-nine.`,
              audioPrompt: `The Berlin Wall was built in nineteen sixty-one to separate communist East Germany from democratic West Germany, {name}. It was heavily guarded and hundreds of people were killed trying to cross it. It stood for 28 years as a symbol of Cold War division. When East German citizens demanded freedom in November nineteen eighty-nine, the wall was opened and people on both sides chipped at it with hammers. Its fall marked the symbolic end of the Cold War.` },
            { word: `Iron Curtain`,
              definition: `The term for the political and physical barrier that divided communist Eastern Europe from democratic Western Europe during the Cold War.`,
              audioPrompt: `The Iron Curtain was the political and physical barrier separating communist Eastern Europe from democratic Western Europe during the Cold War, {name}. Churchill coined the term in a famous nineteen forty-six speech. It wasn't just a wall — it was a whole system of fences, border guards, and checkpoints. People in Eastern bloc countries couldn't freely travel to the West. The Berlin Wall was the Iron Curtain's most visible symbol. When that wall fell in nineteen eighty-nine, it marked the end of the Cold War divide.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Cuban Missile Crisis ─────────────────────
        {
          id: `l15-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Time travel to October nineteen sixty-two, {name}. You're President John F. Kennedy. You've just been told the Soviet Union has placed nuclear missiles in Cuba, less than 100 miles from the US mainland. You have to decide how to respond. The wrong choice could mean nuclear war. You have four decisions to make. After each, I'll tell you what JFK actually did and why.`,
          scenarioTitle: `The Cuban Missile Crisis, October nineteen sixty-two`,
          decisions: [
            {
              id: `d1`,
              situation: `You've just received the intelligence. US spy planes have confirmed Soviet nuclear missiles in Cuba. Your military advisors are pushing for an immediate response. What's your first move?`,
              context: `This is the start of the Cuban Missile Crisis, October 16th, nineteen sixty-two.`,
              options: [
                {
                  id: `a`,
                  label: `Order an immediate airstrike on the missile sites`,
                  preview: `Decisive — but likely starts a war.`,
                },
                {
                  id: `b`,
                  label: `Gather your top advisors and review options in secret first`,
                  preview: `Slower — but lets you weigh consequences before acting.`,
                },
                {
                  id: `c`,
                  label: `Announce the discovery publicly and demand the Soviets remove the missiles`,
                  preview: `Forces the Soviets' hand — but also boxes you in.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B is what Kennedy did. He convened a secret group called ExComm (the Executive Committee of the National Security Council) for several days to weigh options before doing anything public. Many of his military advisors pushed hard for option A — air strikes. Kennedy resisted, knowing that hitting Soviet missile sites would likely start a war. His decision to take time, even under immense pressure, may have prevented nuclear catastrophe.`,
            },
            {
              id: `d2`,
              situation: `Your advisors have laid out the options. The most aggressive option is invading Cuba. The most cautious is doing nothing. You need a middle path. What do you choose?`,
              context: `This is the second major decision of the crisis — what action to take publicly.`,
              options: [
                {
                  id: `a`,
                  label: `Invade Cuba — destroy the missile sites with a ground operation`,
                  preview: `Decisive — likely triggers Soviet retaliation. Possible nuclear war.`,
                },
                {
                  id: `b`,
                  label: `Set up a naval blockade — stop Soviet ships from delivering more weapons`,
                  preview: `Strong but not direct war. Pressures the Soviets to back down.`,
                },
                {
                  id: `c`,
                  label: `Take it to the United Nations and try diplomacy`,
                  preview: `Peaceful but slow. The missiles stay armed in the meantime.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. Kennedy chose a naval blockade — though they called it a "quarantine" because a blockade is technically an act of war under international law. US Navy ships ringed Cuba and would stop and inspect any Soviet ships approaching. This was a major show of force that didn't directly start a war. It gave Khrushchev time to react and negotiate. The blockade option was suggested by Robert McNamara, the Defense Secretary, and supported by Kennedy's brother Robert F. Kennedy, the Attorney General.`,
            },
            {
              id: `d3`,
              situation: `Soviet ships are approaching the blockade line. One of them refuses to stop. Your Navy is preparing to fire warning shots. What do you do?`,
              context: `This is the most dangerous moment of the crisis — October 24th, nineteen sixty-two.`,
              options: [
                {
                  id: `a`,
                  label: `Order the Navy to fire warning shots, then fire to disable if they continue`,
                  preview: `Could escalate to war within minutes.`,
                },
                {
                  id: `b`,
                  label: `Hold fire while continuing to communicate with the Soviet leader directly`,
                  preview: `Risky — but keeps escalation off the table.`,
                },
                {
                  id: `c`,
                  label: `Order the ships to retreat — show the Soviets you don't want war`,
                  preview: `Backs down too publicly. Looks weak.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. Kennedy held fire. Meanwhile, he and Khrushchev were exchanging messages directly, trying to find a way out without war. Multiple Soviet ships actually did turn back from the blockade line — the famous moment when Secretary of State Dean Rusk said, "We're eyeball to eyeball, and I think the other fellow just blinked." This wasn't bravado. It was extraordinary restraint by both leaders, holding fire while looking for an exit.`,
            },
            {
              id: `d4`,
              situation: `Khrushchev sends a private offer: the Soviets will remove their missiles from Cuba IF the US publicly promises not to invade Cuba AND privately removes US missiles from Turkey (which are aimed at the Soviet Union). What do you do?`,
              context: `This is the final decision of the crisis. The Soviet missiles in Cuba are still armed.`,
              options: [
                {
                  id: `a`,
                  label: `Reject the deal — accept only complete Soviet surrender`,
                  preview: `Looks tough. Leaves the missiles armed.`,
                },
                {
                  id: `b`,
                  label: `Accept the public promise about Cuba, and quietly agree to remove the Turkey missiles too`,
                  preview: `Compromise that lets everyone save face.`,
                },
                {
                  id: `c`,
                  label: `Publicly accept the full Soviet terms`,
                  preview: `Ends crisis. Domestically very damaging — looks like backing down.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. Kennedy accepted the public deal — the US would promise not to invade Cuba — and PRIVATELY agreed to remove the US missiles from Turkey within a few months. The Turkey part was kept secret for decades, because making it public would have made Kennedy look weak. The Soviets removed their missiles from Cuba. The world stepped back from the brink of nuclear war. Kennedy and Khrushchev both gave up something to find a path out. Many historians credit this dual restraint with saving the world from catastrophe.`,
            },
          ],
          completionMessage: `You just walked through the closest the world has ever come to nuclear war, {name}. Notice the pattern — at every step, Kennedy faced enormous pressure to act aggressively. He resisted. He took time. He looked for off-ramps. So did Khrushchev. Both knew that one wrong move could end everything. We're alive today because two leaders, under unimaginable pressure, chose restraint over confrontation. Real history sometimes turns on small decisions made by people who didn't know if they'd be remembered as heroes or destroyers of the world.`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Quick test, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `Roughly how long did the Cold War last?`,
              options: [
                `About 5 years`,
                `About 45 years, from nineteen forty-five to nineteen ninety-one`,
                `100 years`,
                `It's still going`,
              ],
              correctIndex: 1,
              explanation: `The Cold War lasted from about nineteen forty-five (end of WWII) to nineteen ninety-one (collapse of the Soviet Union). Roughly 45 years of tension between two superpowers.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `Why was it called "Cold" War?`,
              options: [
                `It was cold outside`,
                `The two superpowers competed and threatened but never fought each other directly`,
                `It only happened in winter`,
                `They were really polite to each other`,
              ],
              correctIndex: 1,
              explanation: `It was "cold" because the US and Soviet Union never fought each other directly — that would have meant nuclear war. They competed through proxy wars, propaganda, the space race, and the arms race instead.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is a proxy war?`,
              options: [
                `A war fought online`,
                `A war where opposing powers back different sides in someone else's conflict instead of fighting each other directly`,
                `A war using only proxies`,
                `A peaceful disagreement`,
              ],
              correctIndex: 1,
              explanation: `In a proxy war, big powers don't fight each other directly — they support opposite sides in someone else's war. Korea and Vietnam are famous examples, with the US and Soviet Union backing opposing sides.` },
            { id: `l15-q4`, format: `multiple-choice`,
              question: `What was Mutual Assured Destruction (MAD)?`,
              options: [
                `A type of bomb`,
                `The theory that if either superpower started a nuclear war, both sides would be destroyed — so neither would dare attack first`,
                `A peace treaty`,
                `An old movie`,
              ],
              correctIndex: 1,
              explanation: `MAD was the chilling theory that nuclear weapons prevented their own use. If you fire, the other side fires back, and everyone dies. The theory held for decades — but it required nerves of steel and some incredibly close calls.` },
            { id: `l15-q5`, format: `true-false`,
              question: `True or false: The Cuban Missile Crisis in nineteen sixty-two is widely considered the closest the world has ever come to nuclear war.`,
              correctAnswer: true,
              explanation: `True. For 13 days in October nineteen sixty-two, the US and Soviet Union were on the brink of nuclear war. Most historians agree this was the closest the world ever came to nuclear catastrophe. Kennedy and Khrushchev both chose restraint.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What was the Berlin Wall?`,
              options: [
                `A famous painting`,
                `A wall built in nineteen sixty-one across Berlin to separate East and West Germany. It came down in nineteen eighty-nine.`,
                `An ancient ruin`,
                `A border fence between Mexico and the US`,
              ],
              correctIndex: 1,
              explanation: `The Berlin Wall divided communist East Germany from democratic West Germany for 28 years. Its fall in nineteen eighty-nine marked the symbolic end of the Cold War.` },
            { id: `l15-q7`, format: `multiple-choice`,
              question: `In the Cuban Missile Crisis simulation, what was the main strategic move Kennedy actually used?`,
              options: [
                `Immediate invasion of Cuba`,
                `A naval blockade combined with private diplomacy with Khrushchev`,
                `Doing nothing`,
                `Asking the UN to solve it`,
              ],
              correctIndex: 1,
              explanation: `Kennedy used a naval blockade (called a "quarantine") as a strong show of force without direct attack, while privately negotiating with Khrushchev. The combination gave both sides room to maneuver without firing first.` },
            { id: `l15-q8`, format: `multiple-choice`,
              question: `What ultimately ended the Cold War?`,
              options: [
                `A peace treaty`,
                `The collapse of the Soviet Union in nineteen ninety-one, after years of internal struggles and reform attempts`,
                `A major war`,
                `A coin flip`,
              ],
              correctIndex: 1,
              explanation: `The Soviet Union collapsed in nineteen ninety-one — partly from economic struggles, partly from reform attempts by Gorbachev that he couldn't fully control. The end was largely peaceful, which surprised many observers.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Of the four decisions Kennedy faced, which would have been the hardest for you? Why?` },
            { id: `r2`, text: `What's something about the Cold War that surprised you?` },
            { id: `r3`, text: `Do you think nuclear weapons make the world safer or more dangerous? Why?` },
            { id: `r4`, text: `What lessons from the Cold War feel relevant to the world today?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `The Cold War officially ended in nineteen ninety-one. But many of its features are still with us. About nine countries still have nuclear weapons. The Korean Peninsula is still divided. Russia and the US still don't fully trust each other. China has emerged as a new global power, and tensions over Taiwan and other issues have echoes of Cold War dynamics. Understanding the Cold War helps you understand the current world — including why people get nervous about certain headlines.`,
          familyAdventure: `Together, look up "Stanislav Petrov" — a Soviet officer who, in nineteen eighty-three, may have prevented nuclear war by ignoring an automated alert that turned out to be a false alarm. Read about what he did and what it cost him. Talk about it. What does his story teach about how one person's judgment can matter enormously?`,
          creativePrompt: {
            intro: `Imagine you're a leader during the Cold War facing a major decision. Pick a moment — Cuban Missile Crisis, Vietnam, the Berlin Wall, anything — and describe a decision you would have to make.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Show the pressure of the decision, the options, and what you'd actually choose.`,
            open: `Write as much as you want. Imagine the full scenario.`,
            frames: [
              `The moment I'm imagining is ___.`,
              `The decision I face is ___.`,
              `The pressures on me are ___.`,
              `What I would choose is ___.`,
              `What might go wrong is ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Heavy lesson handled, {name}. You can now define the Cold War, name its two superpowers, explain what proxy wars and the arms race were, and describe how close the world came to nuclear war in nineteen sixty-two. You walked through Kennedy's actual decisions. Next lesson we move into the modern era — globalization. How the whole world became interconnected in ways no one really controls. — Atlas.`,
          badge: `cold-war-strategist`,
          badgeName: `Cold War Strategist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L15;
