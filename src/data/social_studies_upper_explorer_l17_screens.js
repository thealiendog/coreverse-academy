// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L17 — Human Rights
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.3.3-5 / D2.Civ.10.3-5 / D2.His.16.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: investigation (Which right is being violated?)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-17`,
      title: `Human Rights`,
      duration: 23,
      xpReward: 75,
      badge: `rights-defender`,
      badgeName: `Rights Defender`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}. Today we cover one of the most important ideas humanity has ever come up with — human rights. The idea that every human being has basic rights, just by being human. Not earned, not granted by a government, but inherent. We've covered the US Bill of Rights for American citizens. Today we look at the GLOBAL version — what humans have agreed every person on Earth deserves, regardless of where they live.`,
          headline: `Human Rights`,
          subtitle: `What every person on Earth is owed, by being human`,
          visual: `/ue-assets/social-studies/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Where the Idea Came From`,
          paragraphs: [
            `The idea that all humans have rights is older than written history. Many religions and philosophies have taught versions of it for thousands of years. But the modern human rights movement really took off after World War Two, when the world looked at the horrors of the Holocaust and other atrocities and asked a hard question: how do we make sure this never happens again?`,
            `In nineteen forty-eight, the brand-new United Nations adopted the Universal Declaration of Human Rights. The document was drafted by representatives from many countries, led by Eleanor Roosevelt, the widow of US President Franklin D. Roosevelt. It listed 30 specific rights that every human is supposed to have, everywhere, all the time, just by being a person.`,
            `The Declaration isn't a law that can be enforced like a national law. But it's the most influential statement of human rights ever made. It has shaped national constitutions, international treaties, court rulings, and political activism for over 75 years. When people talk about "human rights" today, they're usually talking about the principles in this document or things that grew out of it.`,
          ],
          image: `/ue-assets/social-studies/l17-s1-history.webp`,
          imageCaption: `Nineteen forty-eight: Universal Declaration of Human Rights. Born from World War Two's horrors.`,
          vocab: [
            { word: `Universal Declaration of Human Rights`,
              definition: `A document adopted by the United Nations in nineteen forty-eight listing 30 rights every human should have.`,
              audioPrompt: `The Universal Declaration of Human Rights is a document adopted by the United Nations in nineteen forty-eight, {name}. It lists 30 rights every human should have, regardless of country, race, religion, gender, or any other factor. It was drafted by representatives from many countries, led by Eleanor Roosevelt. It's not a law — countries don't have to follow it — but it's the most influential statement of human rights ever made. It has shaped national constitutions, court rulings, and global activism for over 75 years.` },
            { word: `international law`,
              definition: `A set of rules that countries agree to follow in their relationships with each other.`,
              audioPrompt: `International law is a set of rules that countries agree to follow in their relationships with each other, {name}. Unlike national laws, it can't be enforced by a single government — it depends on countries choosing to respect it. Treaties, agreements, and documents like the Universal Declaration of Human Rights are part of international law. When countries violate it, international courts and global pressure can sometimes hold them accountable. International law isn't perfect, but it's the closest thing the world has to global rules.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Main Categories of Rights`,
          paragraphs: [
            `The Universal Declaration covers many different kinds of rights. They fall into a few main groups.`,
            `Civil rights: Rights about how individuals are treated by their government. The right to equality before the law. The right to be free from torture. The right to a fair trial. The right not to be enslaved. The right to free movement. These are some of the most basic protections.`,
            `Political rights: Rights about participating in government. The right to vote (when of age). The right to freedom of speech. The right to assemble peacefully. The right to take part in your country's government.`,
            `Economic and social rights: Rights about basic needs and human flourishing. The right to education. The right to work for fair wages. The right to a standard of living adequate for health. The right to rest. The right to participate in cultural life. Some of these are more debated than others — countries disagree about whether things like healthcare are rights or services to be paid for.`,
          ],
          image: `/ue-assets/social-studies/l17-s2-categories.webp`,
          imageCaption: `Civil. Political. Economic. Social. Different types of rights.`,
          vocab: [
            { word: `civil rights`,
              definition: `Rights that protect individuals from unfair treatment by the government — like the right to a fair trial or freedom from torture.`,
              audioPrompt: `Civil rights are rights that protect individuals from unfair treatment by the government, {name}. They include the right to equality before the law, freedom from torture, the right to a fair trial, the right not to be enslaved, freedom of movement, and freedom of religion. Civil rights are different from political rights (about participating in government) and economic rights (about basic needs). The civil rights movement in the US in the nineteen-fifties and sixties was about extending these protections to Black Americans, who had been denied them under segregation laws.` },
            { word: `political rights`,
              definition: `Rights about participating in your country's government, like voting, speech, and protest.`,
              audioPrompt: `Political rights are about participating in your country's government, {name}. They include the right to vote, the right to free speech, the right to a free press, the right to assemble peacefully, and the right to organize. Political rights are what let citizens shape what government does. Without them, you might still have civil rights, but you'd have no power to make government respect them. The two work together — civil rights protect you from government, political rights let you influence government.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Rights Are Violated`,
          paragraphs: [
            `Human rights exist in principle. They don't always exist in practice. Many governments around the world today violate rights of their citizens — arresting peaceful protesters, censoring the press, denying education to girls, persecuting religious or ethnic minorities, forcing people into labor, and many more.`,
            `Even in countries that mostly respect rights, violations happen. Police can use excessive force. Courts can be unfair. Discrimination can keep people from getting jobs, housing, or education. The gap between rights on paper and rights in practice is one of the biggest ongoing challenges in any society.`,
            `Organizations like Amnesty International, Human Rights Watch, and many others investigate and report on rights violations. International courts, like the International Criminal Court, can sometimes prosecute leaders who order serious violations. Citizens themselves often play crucial roles by speaking up, organizing, and refusing to be silent. Human rights aren't self-enforcing — they have to be defended, again and again.`,
          ],
          image: `/ue-assets/social-studies/l17-s3-violations.webp`,
          imageCaption: `Rights on paper don't always exist in practice. Defending them is constant work.`,
          vocab: [
            { word: `human rights violation`,
              definition: `When someone — usually a government — denies or violates the basic rights every person should have.`,
              audioPrompt: `A human rights violation is when someone, usually a government, denies or violates the basic rights every person should have, {name}. Examples include imprisoning people for speaking against the government, torturing prisoners, executing people without fair trials, forcing children into labor, denying education to girls, persecuting religious minorities, or enslaving people. Some violations are massive and obvious, like genocide. Others are smaller but still serious — like unfair laws or systemic discrimination. Recognizing violations when they happen — even in your own country — matters.` },
            { word: `accountability`,
              definition: `Being held responsible for your actions, especially when you've done something wrong.`,
              audioPrompt: `Accountability means being held responsible for your actions, especially when you've done something wrong, {name}. In human rights terms, accountability is what happens when governments or officials face consequences for violating rights. It can take many forms — a court trial, international sanctions, public exposure by journalists, or protests that force change. Without accountability, human rights violations often continue. Leaders who face no consequences are more likely to keep violating rights.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why It Matters to You`,
          paragraphs: [
            `Human rights might seem distant — something for international diplomats and activists. But they're not. They're the foundation of how every government should treat its people, including yours. The fact that you can read a book of your choice, attend the school of your choice, speak about politics, and live freely all flow from these principles.`,
            `Not everyone in the world has these freedoms. Right now, in many places, kids your age can't go to school freely. Adults can't speak openly. Whole groups of people are persecuted because of who they are or what they believe. Knowing about human rights — both what they are and where they're being denied — is part of taking the world seriously.`,
            `You can do things about it even as a kid. You can learn about human rights. You can support organizations that defend them. You can talk about them. You can refuse to ignore violations when you see them. Eleanor Roosevelt said that human rights begin "in small places, close to home — so close and so small that they cannot be seen on any maps of the world." That includes your school. Your friend group. Your family. Treating every person with dignity starts there.`,
          ],
          image: `/ue-assets/social-studies/l17-s4-why-matters.webp`,
          imageCaption: `Rights start in small places, close to home.`,
          vocab: [
            { word: `dignity`,
              definition: `The basic worth and respect every human being deserves, simply for being human.`,
              audioPrompt: `Dignity is the basic worth and respect every human being deserves, simply for being human, {name}. It's the foundational idea behind human rights — that every person has inherent value, regardless of where they're from, what they believe, who they love, what they look like, or what they've done. Treating someone with dignity means recognizing them as fully human, even when you disagree with them or don't like them. Human rights only make sense if humans have dignity.` },
            { word: `activism`,
              definition: `Taking organized action to create change in society, especially around political or social causes.`,
              audioPrompt: `Activism is taking organized action to create change in society, especially around political or social causes, {name}. Human rights activism has taken many forms — peaceful protests, legal cases, journalism, education campaigns, boycotts, and more. Activists like Nelson Mandela, Malala Yousafzai, and Eleanor Roosevelt changed history not because they had official power, but because they refused to accept injustice and built movements around that refusal. Showing up, speaking up, and supporting those who do — that's activism.` },
          ],
        },

        // ── INVESTIGATION GAME — Which Right Is Being Violated? ────────────────
        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Detective work, {name}. I'll give you four real-style cases. For each one, read the clues and figure out which type of human right is being violated. Then I'll tell you what's actually happening and where.`,
          options: [
            { id: `free-speech`, label: `Freedom of Speech`,  color: `#34D399`, description: `The right to express ideas without government punishment.` },
            { id: `education`,   label: `Right to Education`,  color: `#FBBF24`, description: `The right of every person to learn.` },
            { id: `fair-trial`,  label: `Right to a Fair Trial`, color: `#A78BFA`, description: `The right to due process under the law.` },
            { id: `equality`,    label: `Right to Equality`,    color: `#F87171`, description: `The right not to be treated unfairly because of race, religion, gender, etc.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Mystery #1`,
              clues: [
                { text: `In some countries, girls are not allowed to attend school past a certain age.` },
                { text: `Schools that try to teach girls are sometimes attacked or shut down.` },
                { text: `Activists who push to change this face threats, arrest, or worse.` },
              ],
              correctAnswer: `education`,
              realWorldExample: `This describes the situation in parts of Afghanistan, particularly after the Taliban returned to power in twenty twenty-one. Activists like Malala Yousafzai have brought global attention to it.`,
              explanation: `Right to Education. The Universal Declaration says everyone has a right to education. Denying it based on gender violates that right directly. The story of Malala Yousafzai — a young Pakistani activist shot by the Taliban for advocating girls' education, who survived and won the Nobel Peace Prize at 17 — is one of the most famous examples of this struggle.`,
            },
            {
              id: `case-2`,
              caseTitle: `Mystery #2`,
              clues: [
                { text: `A journalist publishes an article criticizing the country's leader.` },
                { text: `Within days, the journalist is arrested. The newspaper is shut down.` },
                { text: `Other reporters get the message — they self-censor to avoid the same fate.` },
              ],
              correctAnswer: `free-speech`,
              realWorldExample: `This pattern happens in many countries where the press is not truly free — including Russia, China, Iran, and others.`,
              explanation: `Freedom of Speech. The right to express ideas — including criticism of the government — is foundational. When governments jail journalists for what they write, they're violating this right. They also send a message to every other journalist about what's "safe" to say. Press freedom is a key indicator of how free a society actually is.`,
            },
            {
              id: `case-3`,
              caseTitle: `Mystery #3`,
              clues: [
                { text: `A person is arrested at a peaceful protest. They aren't told what crime they're accused of.` },
                { text: `They're held for months without a trial, and not allowed to contact a lawyer.` },
                { text: `Eventually they're tried in a secret court with no chance to defend themselves.` },
              ],
              correctAnswer: `fair-trial`,
              realWorldExample: `This pattern of detention without trial happens in several authoritarian countries today.`,
              explanation: `Right to a Fair Trial. The right to know what you're charged with, the right to a lawyer, the right to a public trial, the right to defend yourself — all of these are required for a fair trial. Holding someone in secret detention, denying them counsel, or trying them in closed courts all violate fundamental due process rights. These protections matter most exactly when governments want to silence dissent.`,
            },
            {
              id: `case-4`,
              caseTitle: `Mystery #4`,
              clues: [
                { text: `In a certain country, people of a particular ethnic group can't legally own businesses, attend certain schools, or use the same public services as everyone else.` },
                { text: `Police treat members of this group differently — harsher arrests, less protection from crime.` },
                { text: `These laws have been in place for decades and are widely enforced.` },
              ],
              correctAnswer: `equality`,
              realWorldExample: `This describes apartheid in South Africa from nineteen forty-eight to nineteen ninety-four — a legal system separating people by race. Similar patterns have appeared in other times and places, including the Jim Crow era in the US.`,
              explanation: `Right to Equality. The Universal Declaration is clear: every person is entitled to equal treatment regardless of race, religion, gender, or other identity. Legal discrimination by an entire government against an ethnic or racial group is one of the most serious violations of human rights. South Africa's apartheid system was finally dismantled in nineteen ninety-four after decades of struggle led by activists like Nelson Mandela.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is the Universal Declaration of Human Rights?`,
              options: [
                `A US law`,
                `A document adopted by the United Nations in nineteen forty-eight listing 30 rights every human should have`,
                `A speech by George Washington`,
                `A famous book`,
              ],
              correctIndex: 1,
              explanation: `The Universal Declaration of Human Rights was adopted by the UN in nineteen forty-eight, just three years after World War Two. It lists 30 rights every human deserves, and it has shaped global thinking ever since.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `Why did the modern human rights movement take off after World War Two?`,
              options: [
                `Random luck`,
                `The Holocaust and other atrocities led the world to ask how to prevent them from ever happening again`,
                `Because of the moon landing`,
                `Because of a new invention`,
              ],
              correctIndex: 1,
              explanation: `The world's horror at the Holocaust and other WWII atrocities drove the creation of the Universal Declaration. The goal was to establish principles that, if followed, could prevent such horrors in the future.` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `Which of these is a CIVIL right?`,
              options: [
                `The right to vote`,
                `The right to a fair trial`,
                `The right to an internet connection`,
                `The right to a luxury car`,
              ],
              correctIndex: 1,
              explanation: `Civil rights protect individuals from government mistreatment — fair trial, freedom from torture, equality before the law. Voting is a political right; the others aren't actually rights.` },
            { id: `l17-q4`, format: `multiple-choice`,
              question: `Which of these is a POLITICAL right?`,
              options: [
                `The right to a fair trial`,
                `The right to vote`,
                `The right to clean water`,
                `The right to a phone`,
              ],
              correctIndex: 1,
              explanation: `Political rights are about participating in government — voting, free speech, assembly. Fair trial is civil; clean water is closer to an economic/social right.` },
            { id: `l17-q5`, format: `true-false`,
              question: `True or false: Human rights are automatically enforced everywhere they're written into documents.`,
              correctAnswer: false,
              explanation: `False. Rights on paper don't automatically exist in practice. Many governments violate human rights every day. Defending rights takes constant work by citizens, journalists, activists, and international organizations.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `What is dignity?`,
              options: [
                `A type of food`,
                `The basic worth and respect every human being deserves, just for being human`,
                `A college degree`,
                `Money`,
              ],
              correctIndex: 1,
              explanation: `Dignity is the foundational idea behind human rights — that every person has inherent worth, regardless of where they're from, what they believe, or what they've done.` },
            { id: `l17-q7`, format: `multiple-choice`,
              question: `Who led the team that drafted the Universal Declaration of Human Rights?`,
              options: [
                `Albert Einstein`,
                `Eleanor Roosevelt`,
                `Winston Churchill`,
                `Mahatma Gandhi`,
              ],
              correctIndex: 1,
              explanation: `Eleanor Roosevelt led the drafting committee. She was the widow of US President FDR and a major political figure in her own right. The Declaration is considered one of her greatest legacies.` },
            { id: `l17-q8`, format: `multiple-choice`,
              question: `What's something a young person can actually do about human rights?`,
              options: [
                `Nothing — you have to be an adult`,
                `Learn about them, talk about them, support organizations that defend them, refuse to ignore violations you see, treat every person you meet with dignity`,
                `Sign a treaty`,
                `Move to another country`,
              ],
              correctIndex: 1,
              explanation: `You can do all of those things even now. Human rights start, as Eleanor Roosevelt said, in small places close to home. How you treat the people right around you is part of the larger pattern.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Which of the human rights covered today would be hardest to live without? Why?` },
            { id: `r2`, text: `Of the four cases in the game, which felt most important to you? Why?` },
            { id: `r3`, text: `What's something you can do at school or in your daily life that treats every person with dignity?` },
            { id: `r4`, text: `Why do you think governments are sometimes tempted to violate rights, even when they shouldn't?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Right now, around the world, journalists are in prison for writing articles. People are in detention without trial. Children are kept out of school because of who they are. Religious minorities are persecuted. Whole ethnic groups are targeted. None of this is hypothetical. None of it is from history books only. Human rights are not a finished project. They are an ongoing one, and every generation either defends them or lets them slip. Knowing what they are, where they're being denied, and what to do about it — that's part of being a citizen of the modern world.`,
          familyAdventure: `Together, look up one person who is known as a defender of human rights — Malala Yousafzai, Nelson Mandela, Eleanor Roosevelt, Bryan Stevenson, Greta Thunberg if you focus on a broader rights view, or others. Read or watch something short about their work. Discuss: what would it take to do what they did? What kept them going?`,
          creativePrompt: {
            intro: `Pick ONE human right we covered today. Write about why it matters and what you'd do if it were being violated near you.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Take it seriously — give a specific example, explain why it matters, and describe what you'd actually do.`,
            open: `Write as much as you want. Build your full case.`,
            frames: [
              `The right I'm focusing on is ___.`,
              `What it actually protects is ___.`,
              `An example of when it might be violated is ___.`,
              `What I'd do if I saw that happening near me is ___.`,
              `Why this right matters to me is ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Important work, {name}. You can now explain what the Universal Declaration of Human Rights is, name different categories of rights, recognize what violations look like, and see why defending human rights is everyone's job, including yours. Next lesson, we look at one of the biggest forces shaping the planet's future — environmental geography. — Atlas.`,
          badge: `rights-defender`,
          badgeName: `Rights Defender`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L17;
