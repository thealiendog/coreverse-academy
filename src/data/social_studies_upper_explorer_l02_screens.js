// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L02 — The US Constitution: How It Was Built
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.3.3-5 / D2.Civ.8.3-5 / D2.His.1.3-5
// CALIBRATED: UE spec v1.1 (scope discipline) + game toolkit v1
// Game format: branching-decision (Constitutional Convention delegate)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-02`,
      title: `The US Constitution: How It Was Built`,
      duration: 23,
      xpReward: 75,
      badge: `constitution-architect`,
      badgeName: `Constitution Architect`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Last lesson we looked at the big picture — what government is and how different countries organize it. Today we zoom in on one specific document. It's about 4,500 words long. Shorter than the terms-of-service you scroll past on apps. And it has shaped the United States for over 230 years. We're going to take it apart to understand how it works, and then you're going to step into the shoes of the people who wrote it.`,
          headline: `The US Constitution`,
          subtitle: `The document that built a country`,
          visual: `/ue-assets/social-studies/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is a Constitution?`,
          paragraphs: [
            `A constitution is a written document that sets the basic rules for how a country's government works. It explains what the government CAN do, what it CAN'T do, and how power is divided up. Think of it as the rulebook everyone agrees to follow — including the people running the government.`,
            `Most modern countries have one. The United States Constitution is one of the most famous because it was one of the first, and because it's still the same document, mostly, after more than two centuries. It was written in seventeen eighty-seven in Philadelphia by 55 delegates from 13 newly-independent states.`,
            `Why bother having a constitution at all? Because written rules are harder to break or twist than spoken ones. Without one, whoever has the most power can just decide what the rules are. A constitution is what stops that. Even the President of the United States is bound by it.`,
          ],
          image: `/ue-assets/social-studies/l02-s1-what-is-constitution.webp`,
          imageCaption: `A constitution is the rulebook for a government — even the government has to follow it.`,
          vocab: [
            { word: `constitution`,
              definition: `A written document that sets the basic rules for how a government works.`,
              audioPrompt: `A constitution is a written document that sets the basic rules for how a country's government works, {name}. It defines what the government can do, what it can't do, and how power is divided. The United States Constitution was written in seventeen eighty-seven and is still the same core document today, with some updates added over the years. Most countries now have one. The big idea is that having rules in writing protects citizens — including from the government itself.` },
            { word: `delegate`,
              definition: `A person chosen to represent a group at an important meeting or conference.`,
              audioPrompt: `A delegate is a person chosen to represent a group at an important meeting or conference, {name}. When the Constitution was written in seventeen eighty-seven, each state sent delegates to Philadelphia for the Constitutional Convention. These fifty-five people represented over three million Americans. Their job was to debate and design a new government. A delegate speaks and votes on behalf of others, not just for themselves. Today you can see delegates at political conventions, where they vote to choose candidates for President on behalf of their home state.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Preamble: "We the People"`,
          paragraphs: [
            `The Constitution opens with one of the most famous sentences in American history. It's called the Preamble. It starts with three words: "We the People." Those three words were a revolutionary statement at the time.`,
            `Why? Because in seventeen eighty-seven, almost every other country in the world was ruled by kings who claimed their power came from God or from inheritance. The Framers said something different. They said the government's power comes from the citizens — from us — and exists to serve us. Not the other way around.`,
            `The full Preamble lists six goals: form a more perfect union, establish justice, ensure peace at home, provide for defense, promote the general welfare, and secure liberty for ourselves and our descendants. These aren't decorations. They're the reason the whole document exists. Every rule that follows ties back to one of those six goals.`,
          ],
          image: `/ue-assets/social-studies/l02-s2-preamble.webp`,
          imageCaption: `"We the People" — three words that changed how governments work.`,
          vocab: [
            { word: `preamble`,
              definition: `The opening section of a document that explains its purpose.`,
              audioPrompt: `A preamble is the opening section of a document that explains its purpose, {name}. The Constitution's Preamble is the most famous one. It starts with "We the People" and lists six goals — including establishing justice and securing liberty. The whole rest of the Constitution exists to achieve those goals. When people debate whether a law is "constitutional," they're really asking: does this law serve those six goals, or work against them?` },
            { word: `popular sovereignty`,
              definition: `The idea that a government's power comes from the people, not from kings or inherited authority.`,
              audioPrompt: `Popular sovereignty is the idea that government's power comes from the people, {name}. It's why the Constitution starts with "We the People" instead of "We the Rulers." Before seventeen eighty-seven, most governments got power from kings who claimed God gave it to them. The Framers said no — in America, the people are the source of power, and government exists to serve citizens. Every elected official holds power on behalf of voters. When voters disagree, they can vote officials out. That's the deal.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What the Constitution Sets Up`,
          paragraphs: [
            `Most of the Constitution is structural. It builds the framework of how the US government actually works. Three key ideas show up over and over.`,
            `First: three branches of government. Congress writes laws. The President carries them out. The Supreme Court interprets them. No single person or group does all three. We'll go deep on these in Lesson 4. For now, just notice the pattern — power is split, not concentrated.`,
            `Second: power is shared between the federal government and the states. The federal government handles things like national defense, foreign treaties, and printing money. States handle things like running schools, building most roads, and licensing drivers. This split is called federalism.`,
            `Third: the Constitution can be CHANGED. The Framers knew they weren't perfect. They built in a process to add amendments. It's hard on purpose — you need agreement from two-thirds of Congress and three-fourths of the states. So far, 27 amendments have been added. The first 10 are called the Bill of Rights, and we'll cover those next lesson.`,
          ],
          image: `/ue-assets/social-studies/l02-s3-structure.webp`,
          imageCaption: `Three branches. Power split between federal and state. A way to amend it.`,
          vocab: [
            { word: `federalism`,
              definition: `A system where power is divided between a national government and state governments.`,
              audioPrompt: `Federalism is a system where power is divided between a national government and state governments, {name}. The US uses this system. The federal government handles things that need to be the same for the whole country — like the military, the currency, and treaties with other countries. State governments handle things that work better when done locally — like public schools, driver's licenses, and most laws about everyday life. This split is one of the most important parts of how the Constitution organizes power.` },
            { word: `amendment`,
              definition: `An addition or change made to the Constitution to update it.`,
              audioPrompt: `An amendment is a formal change or addition to the Constitution, {name}. The Framers knew they couldn't predict everything, so they built in a way to update the document. Adding an amendment is intentionally hard — you need two-thirds of Congress and three-fourths of the states to agree. Twenty-seven amendments have been added so far. They've done things like ending slavery, giving women the right to vote, and lowering the voting age to 18. The amendment process is how the Constitution stays relevant as the country changes.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why It Still Matters`,
          paragraphs: [
            `The Constitution was written when there were no cars, no airplanes, no internet, no electricity. So why does a seventeen eighty-seven document still rule a country in twenty twenty-six? Because what it actually defines — how to divide power, how to protect citizens, how to make changes — works across centuries.`,
            `Every single law passed by Congress, every order signed by the President, every ruling by the Supreme Court has to fit within the Constitution. When something doesn't fit, the courts can strike it down. The Constitution is the ceiling no one can break through, even the most powerful person in the country.`,
            `Here's a thing most people miss: the Constitution doesn't give YOU rights. The Framers believed rights come from being human — they're not granted by government. The Constitution just says the government can't TAKE them away. That's a different relationship between citizen and government than almost any country had before, and it's why this document matters.`,
          ],
          image: `/ue-assets/social-studies/l02-s4-why-matters.webp`,
          imageCaption: `Still the ceiling. Even the President has to fit under it.`,
          vocab: [
            { word: `unconstitutional`,
              definition: `Something that violates the Constitution and is therefore not allowed.`,
              audioPrompt: `Unconstitutional means something violates the Constitution and is therefore not allowed, {name}. Even if Congress passes a law and the President signs it, the Supreme Court can rule it unconstitutional — and that strikes it down. This has happened many times in American history. The whole idea is that the Constitution sets a ceiling. No branch, no leader, no majority of voters can break through it. That ceiling is what protects every citizen, including ones who lose elections, from having their rights taken away.` },
            { word: `checks and balances`,
              definition: `A system where each branch of government can limit the power of the other branches.`,
              audioPrompt: `Checks and balances is the system where each branch of government can limit the others, {name}. Congress makes laws, but the President can veto them. The President signs treaties, but the Senate must approve them. The Supreme Court can strike down laws passed by Congress or actions taken by the President. No single branch runs everything. This system was designed to prevent any one person or group from gaining too much power — a direct lesson the Framers took from living under a king.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Constitutional Convention ────────────────
        {
          id: `l02-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Now it's your turn, {name}. The year is seventeen eighty-seven. You are a delegate at the Constitutional Convention in Philadelphia. Fifty-five people just like you are gathered to design a new government from scratch. You'll face four big decisions. For each one, choose what YOU think is best. Then I'll show you what the actual Framers picked — and why.`,
          scenarioTitle: `The Constitutional Convention, seventeen eighty-seven`,
          decisions: [
            {
              id: `d1`,
              situation: `How should Congress represent the states?`,
              context: `Small states are afraid they'll be ignored if voting is based on population — big states would always outvote them. Big states think it's unfair that tiny states like Rhode Island would have the same voice as huge states like Virginia.`,
              options: [
                {
                  id: `a`,
                  label: `Equal representation — every state gets the same number of votes`,
                  preview: `Small states are happy. Big states are furious.`,
                },
                {
                  id: `b`,
                  label: `Population-based — bigger states get more votes`,
                  preview: `Big states are happy. Small states threaten to leave.`,
                },
                {
                  id: `c`,
                  label: `Compromise — TWO houses, one each way`,
                  preview: `Nobody loves it. Everybody can live with it.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `The Framers picked option C — the Great Compromise. Congress has two houses. The Senate gives every state two senators, no matter the size. The House of Representatives is based on population. A law has to pass BOTH houses to become a law. This way, small states aren't crushed and big states aren't ignored.`,
            },
            {
              id: `d2`,
              situation: `How long should the President serve?`,
              context: `Some delegates think the President should serve for life, like a king. Others think four years isn't long enough to get anything done. Others worry that long terms lead to tyranny.`,
              options: [
                {
                  id: `a`,
                  label: `Life — let them serve until they die`,
                  preview: `Stable, but dangerously similar to a king.`,
                },
                {
                  id: `b`,
                  label: `4-year term — with no limit on how many they can serve`,
                  preview: `Balanced, but risks one person hanging on for decades.`,
                },
                {
                  id: `c`,
                  label: `4-year term, with a limit of two terms maximum`,
                  preview: `Strong limit on any one person's power.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `The Framers picked option B — 4 years, no limit. But here's the twist: George Washington voluntarily stepped down after two terms, setting a tradition. That tradition held for 150 years. Then in nineteen forty, Franklin Roosevelt won a third term, and a fourth. After he died, the country added the 22nd Amendment in nineteen fifty-one, which made option C the actual rule. So you and the Framers were both partly right.`,
            },
            {
              id: `d3`,
              situation: `Should there be a way to change the Constitution after we sign it?`,
              context: `Some delegates say the Constitution should be permanent and never changed — otherwise future generations will mess it up. Others say it's impossible to predict everything, and we need flexibility.`,
              options: [
                {
                  id: `a`,
                  label: `No changes ever — the document is final`,
                  preview: `Stable, but frozen in seventeen eighty-seven forever.`,
                },
                {
                  id: `b`,
                  label: `Easy changes — a simple majority of Congress can amend it`,
                  preview: `Flexible, but politics could easily reshape it every few years.`,
                },
                {
                  id: `c`,
                  label: `Hard changes — possible, but requires huge agreement`,
                  preview: `Updates happen, but only when most of the country agrees.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `The Framers picked option C. Amending the Constitution requires two-thirds of Congress AND three-fourths of the states. This makes change possible but never easy. In over 230 years, only 27 amendments have been added. The first ten — the Bill of Rights — were added almost immediately. The rest took serious work. This balance is why the Constitution can last and still adapt.`,
            },
            {
              id: `d4`,
              situation: `Who decides if a law violates the Constitution?`,
              context: `Once the Constitution exists, someone needs to enforce it. If Congress passes a law that breaks the Constitution, who has the power to strike it down?`,
              options: [
                {
                  id: `a`,
                  label: `Congress polices itself`,
                  preview: `Convenient, but the fox is guarding the hen house.`,
                },
                {
                  id: `b`,
                  label: `The President decides`,
                  preview: `Risky — gives one person enormous power.`,
                },
                {
                  id: `c`,
                  label: `An independent Supreme Court`,
                  preview: `Slow, but unbiased.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `The Framers picked option C — the Supreme Court. Court justices are appointed for life, which means they don't have to worry about being voted out. This makes them less likely to bend to public pressure or political moods. The Court's power to strike down unconstitutional laws is one of the strongest checks on government in the world. It's the reason no single branch can run wild.`,
            },
          ],
          completionMessage: `Nice work, delegate. You just walked through four of the actual decisions the Framers made in Philadelphia. Notice the pattern? Almost every major choice was about LIMITING power, not granting it. That's the spirit of the whole Constitution.`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's check what stuck, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is a constitution?`,
              options: [
                `A long speech`,
                `A written document that sets the basic rules for how a government works`,
                `A type of building`,
                `A vote held every four years`,
              ],
              correctIndex: 1,
              explanation: `A constitution is the rulebook for a government. It defines what government can and can't do, and how power is divided.` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `Why were the first three words of the Preamble — "We the People" — revolutionary in seventeen eighty-seven?`,
              options: [
                `They were written in beautiful handwriting`,
                `They said government's power comes from citizens, not from kings or inheritance`,
                `They were the longest words in the document`,
                `They were translated from Latin`,
              ],
              correctIndex: 1,
              explanation: `Most countries at the time were ruled by kings who claimed power from God or family. "We the People" flipped that idea on its head.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What does federalism mean?`,
              options: [
                `The government can do whatever it wants`,
                `Only the President makes decisions`,
                `Power is divided between a national government and state governments`,
                `The country has no rules`,
              ],
              correctIndex: 2,
              explanation: `Federalism splits power between national and state governments. National handles things like defense and currency. States handle things like schools and licenses.` },
            { id: `l02-q4`, format: `multiple-choice`,
              question: `Approximately how many amendments have been added to the Constitution since seventeen eighty-seven?`,
              options: [
                `5`,
                `27`,
                `100`,
                `250`,
              ],
              correctIndex: 1,
              explanation: `27 amendments. The first 10 — the Bill of Rights — were added almost immediately. The rest took years or decades of work.` },
            { id: `l02-q5`, format: `true-false`,
              question: `True or false: Even the President of the United States has to follow the Constitution.`,
              correctAnswer: true,
              explanation: `True. The Constitution is the ceiling no one can break through, no matter how powerful. The Supreme Court can strike down even presidential actions that violate it.` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `Why did the Framers make it hard to amend the Constitution?`,
              options: [
                `They were lazy`,
                `They wanted to make sure changes only happen when most of the country actually agrees`,
                `They didn't think it was important`,
                `They wanted to charge money for amendments`,
              ],
              correctIndex: 1,
              explanation: `The hard amendment process keeps the Constitution stable. Easy changes would mean politicians could reshape it every election cycle. Hard changes mean updates only happen when there's real, lasting agreement.` },
            { id: `l02-q7`, format: `multiple-choice`,
              question: `Who decides if a law passed by Congress is unconstitutional?`,
              options: [
                `The President`,
                `Congress itself`,
                `The Supreme Court`,
                `State governors`,
              ],
              correctIndex: 2,
              explanation: `The Supreme Court has the power to strike down unconstitutional laws. Justices serve for life so they can't be pressured by politics.` },
            { id: `l02-q8`, format: `multiple-choice`,
              question: `According to the Framers, where do your rights actually come from?`,
              options: [
                `The government gives them to you`,
                `From being human — the Constitution just protects them from being taken away`,
                `You have to earn them by voting`,
                `Only adults have rights`,
              ],
              correctIndex: 1,
              explanation: `The Framers believed rights are part of being human. The Constitution's job is to stop the government from taking them away — not to grant them in the first place. This is a huge philosophical idea.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Take a moment to think about what we covered, {name}. Pick ONE question and answer it for real. Your response gets saved.`,
          prompts: [
            { id: `r1`, text: `If you could amend the Constitution to add one new rule, what would it be?` },
            { id: `r2`, text: `Which of the four delegate decisions felt hardest to make? Why?` },
            { id: `r3`, text: `Why do you think the Framers split power instead of giving it all to one person?` },
            { id: `r4`, text: `What's one part of your daily life that depends on the Constitution working?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Every single day in the United States, lawyers argue in courts about whether something violates the Constitution. School policies get challenged. Police actions get reviewed. Laws get struck down or upheld. A document written in seventeen eighty-seven is being applied to questions about social media, AI, and technology the Framers couldn't have imagined. The fact that it still works is partly because of how carefully it was built — and partly because each generation keeps figuring out how to apply it to new questions.`,
          familyAdventure: `Read the Preamble of the Constitution out loud together. Then write a "Family Preamble" — what is your family for? What are its goals? Write it in the same style: "We the [Family Name], in order to..." Hang it somewhere everyone can see it. Then talk: was it harder than you expected to write?`,
          creativePrompt: {
            intro: `Imagine you and your friends are forming a brand new country together. You have to write ONE rule into your founding document that you think is the most important. What is it, and why?`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Defend your choice — explain why this rule matters more than other rules someone might pick.`,
            open: `Write as much as you want. Draft your full one-page Constitution.`,
            frames: [
              `My country's most important rule is ___.`,
              `I picked this rule because ___.`,
              `If this rule didn't exist, the biggest problem would be ___.`,
              `Some people might disagree with me because ___.`,
              `My response to them is ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Real work today, {name}. You can now explain what a constitution is, why "We the People" was revolutionary, how federalism splits power, and why amending the Constitution is hard on purpose. You also got to walk through the same decisions the Framers actually made. Next lesson, we go into the most famous part of the Constitution — the Bill of Rights — and see how it shows up in your real life. — Atlas.`,
          badge: `constitution-architect`,
          badgeName: `Constitution Architect`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L02;
