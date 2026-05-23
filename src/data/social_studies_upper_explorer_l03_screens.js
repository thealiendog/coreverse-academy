// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L03 — The Bill of Rights in Daily Life
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.3.3-5 / D2.Civ.5.3-5 / D2.Civ.10.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: investigation (which amendment applies?)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-03`,
      title: `The Bill of Rights in Daily Life`,
      duration: 23,
      xpReward: 75,
      badge: `rights-detective`,
      badgeName: `Rights Detective`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey {name}. Last lesson you helped design a Constitution. But right after it was finished, a bunch of people refused to support it. Why? Because they said it didn't do enough to protect citizens FROM the new government. They demanded a list of guaranteed rights, in writing. The result is what we're studying today — the Bill of Rights. By the end of this lesson, you'll be able to spot when these rights are at work in your real life.`,
          headline: `The Bill of Rights`,
          subtitle: `How the first 10 amendments protect you every day`,
          visual: `/ue-assets/social-studies/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is the Bill of Rights?`,
          paragraphs: [
            `The Bill of Rights is the name we give to the first 10 amendments to the Constitution. They were added in seventeen ninety-one, just two years after the Constitution itself took effect.`,
            `Why so fast? Because a lot of Americans were nervous. They had just escaped from a king. Now they were being asked to support a new central government. Many of them said: "We need this in writing — what exactly can the government NOT do to us?" Without those guarantees, several states refused to support the Constitution at all.`,
            `So James Madison drafted a list. After debate, 10 amendments were ratified together. Each one defines a right or protection that the government can't take away. They form the backbone of American liberty, and they affect your real life more directly than almost any other part of the Constitution.`,
          ],
          image: `/ue-assets/social-studies/l03-s1-bill-of-rights.webp`,
          imageCaption: `Ten amendments. Added in seventeen ninety-one. The deal that made the Constitution stick.`,
          vocab: [
            { word: `Bill of Rights`,
              definition: `The first 10 amendments to the US Constitution, listing rights the government cannot take away.`,
              audioPrompt: `The Bill of Rights is the name for the first 10 amendments to the US Constitution, {name}. They were added in seventeen ninety-one, right after the Constitution took effect. People were worried the new government might become too powerful, so these amendments were added as guarantees — specific rights the government cannot take away. They cover things like free speech, freedom of religion, protection from unfair searches, and the right to a fair trial. Knowing these is one of the most useful things you can learn as a citizen.` },
            { word: `ratify`,
              definition: `To officially approve a law, treaty, or amendment so it takes effect.`,
              audioPrompt: `Ratify means to officially approve something so it takes effect, {name}. The Constitution had to be ratified by at least nine of the thirteen states before it could take effect. The Bill of Rights was ratified by three-fourths of the states. Ratification is the final approval step, usually by a larger group than just one body. Today, constitutional amendments require ratification by three-fourths of all fifty states. If that sounds hard, it's supposed to be — big changes to the rules should require big agreement.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The First Amendment: The Big Five Freedoms`,
          paragraphs: [
            `The First Amendment is probably the most famous one. It packs FIVE freedoms into a single sentence. Each one protects you in different ways.`,
            `Freedom of speech means the government can't punish you for what you say or write — even if your opinion is unpopular. Freedom of religion means the government can't tell you what to believe or force you to attend a specific church. Freedom of the press means newspapers and reporters can criticize the government without being arrested. Freedom of assembly means people can gather peacefully to protest or organize. Freedom to petition means you can formally complain to the government and ask for change.`,
            `An important note: these rights protect you from the GOVERNMENT specifically, not from private people or businesses. Your school principal at a public school CAN'T punish you for your political opinion. But a private company CAN fire someone for what they post online — that's not a First Amendment issue. The distinction matters a lot when these cases come up.`,
          ],
          image: `/ue-assets/social-studies/l03-s2-first-amendment.webp`,
          imageCaption: `Speech. Religion. Press. Assembly. Petition. Five freedoms in one amendment.`,
          vocab: [
            { word: `freedom of speech`,
              definition: `The right to express opinions without the government punishing you, even if your opinion is unpopular.`,
              audioPrompt: `Freedom of speech is the right to express your opinions without the government punishing you, {name} — even if your opinion is unpopular. This is one of the most important protections in the Bill of Rights. A free country must allow people to criticize their leaders, or citizens get scared into silence. There are limits — you can't make direct threats of violence — but the protection is very broad. It applies even to opinions most people disagree with.` },
            { word: `freedom of religion`,
              definition: `The right to believe and practice whatever religion you choose, or no religion at all.`,
              audioPrompt: `Freedom of religion is the right to believe and practice any religion you want, or no religion at all, {name}. The government can't tell you what to believe. It can't make one religion the official one. It can't force you to attend any place of worship. It can't punish you for following your religion's practices, as long as you don't hurt others. This was a HUGE deal in seventeen ninety-one because most countries at the time had an official state religion. The Framers wanted Americans to be free to choose.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Fourth Amendment: Privacy and Searches`,
          paragraphs: [
            `The Fourth Amendment protects you from "unreasonable searches and seizures." That means the government — including police — generally can't search your home, your stuff, or your body without a good reason and usually a written permission slip called a warrant.`,
            `A warrant has to be approved by a judge. The police have to explain to the judge what they're looking for and why they think they'll find it where they want to search. Without a warrant, most searches by police are illegal — and anything they find can be thrown out of court.`,
            `There are exceptions. If police see something illegal in plain view, they can act. If they reasonably believe someone is in danger, they can act fast. If you give permission, they can search. But the BASELINE rule is: government needs a real reason, usually a warrant, before they can search you or your property. This is a huge protection that most countries on Earth don't give their citizens.`,
          ],
          image: `/ue-assets/social-studies/l03-s3-fourth-amendment.webp`,
          imageCaption: `Fourth Amendment: protection from unreasonable searches and seizures.`,
          vocab: [
            { word: `warrant`,
              definition: `Written permission from a judge that lets police search a specific place for specific things.`,
              audioPrompt: `A warrant is written permission from a judge that lets police search a specific place for specific things, {name}. The Fourth Amendment generally requires one before police can search someone's home or belongings. To get a warrant, police have to convince a judge that there's a good reason to believe they'll find evidence of a crime where they want to search. This protection means the government can't just decide to search you because they feel like it. They have to go through a check first. The judge is the check.` },
            { word: `probable cause`,
              definition: `A reasonable basis for believing a crime has occurred — required before police can search or arrest.`,
              audioPrompt: `Probable cause means a reasonable basis for believing a crime occurred, {name}. Police need probable cause before they can get a warrant to search someone's home or make an arrest. It's not the same as proof — they don't have to prove a crime already happened. But they need more than a hunch. A judge decides whether the probable cause is strong enough. This standard protects citizens from police searching people for no real reason, which has historically been used as a tool of oppression in many countries.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Fifth and Sixth Amendments: When You're Accused`,
          paragraphs: [
            `If you're ever accused of a crime, several amendments kick in to protect you. They exist because, historically, governments have been very tempted to punish people without proof or fair process — especially people they don't like.`,
            `The Fifth Amendment gives you the right to remain silent. You don't have to say anything that could incriminate you. This is what people mean when they say "I plead the Fifth." It also says you can't be tried twice for the same crime ("double jeopardy"), and that the government can't take your property without paying you fairly.`,
            `The Sixth Amendment guarantees a fair trial. You have the right to a speedy public trial — not a secret one. You have the right to know what you're accused of. You have the right to face the witnesses against you. You have the right to call your own witnesses. And critically, you have the right to a lawyer, even if you can't afford one — the government has to provide one. These aren't decorations. They're what protect innocent people from being railroaded.`,
          ],
          image: `/ue-assets/social-studies/l03-s4-fifth-sixth.webp`,
          imageCaption: `Right to remain silent. Right to a lawyer. Right to a fair trial.`,
          vocab: [
            { word: `due process`,
              definition: `The right to fair treatment and proper legal procedures before the government can punish you.`,
              audioPrompt: `Due process means the right to fair treatment and proper legal procedures before the government can punish you, {name}. It comes from the Fifth Amendment. The government can't just decide you're guilty and punish you — it has to follow specific steps: informing you of the charges, giving you a fair trial, letting you defend yourself, and proving the case with evidence. Due process is what stands between an accused person and an unfair government. Even people accused of terrible things get due process — that's the deal.` },
            { word: `right to counsel`,
              definition: `Your right to have a lawyer help you if you're accused of a crime, even if you can't afford one.`,
              audioPrompt: `Right to counsel means your right to have a lawyer if you're accused of a crime, {name}, even if you can't afford one. The Sixth Amendment guarantees this. If you can't pay for a lawyer, the government has to provide one for free. This matters because the law is complicated, and going up against trained prosecutors without a lawyer almost guarantees you lose, whether or not you're guilty. The right to counsel was strengthened in nineteen sixty-three by a famous Supreme Court case called Gideon v. Wainwright.` },
          ],
        },

        // ── INVESTIGATION GAME — Which amendment applies? ──────────────────────
        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Detective time, {name}. You'll see four real-world cases, one at a time. For each one, read the clues carefully and figure out: which amendment in the Bill of Rights protects the person in this scenario? Then I'll explain why.`,
          options: [
            { id: `first`,  label: `First Amendment`,  color: `#34D399`, description: `Speech, religion, press, assembly, petition.` },
            { id: `fourth`, label: `Fourth Amendment`, color: `#A78BFA`, description: `Protection from unreasonable searches.` },
            { id: `fifth`,  label: `Fifth Amendment`,  color: `#FBBF24`, description: `Right to remain silent, due process.` },
            { id: `sixth`,  label: `Sixth Amendment`,  color: `#F87171`, description: `Fair trial, right to a lawyer.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Case #1`,
              clues: [
                { text: `A student at a public school writes an opinion essay for the school newspaper criticizing the principal's new dress code policy.` },
                { text: `The principal is angry and tells the student they will be suspended if the article is published.` },
                { text: `The student wonders whether the school can actually do that.` },
              ],
              correctAnswer: `first`,
              realWorldExample: `This is based on a famous Supreme Court case called Tinker v. Des Moines (nineteen sixty-nine), which protected student speech.`,
              explanation: `First Amendment. Public schools are part of the government, and the government can't punish you for criticizing it — even if you're a student. The student has freedom of speech and freedom of the press. A private school is different, but this is a public school, so the First Amendment applies.`,
            },
            {
              id: `case-2`,
              caseTitle: `Case #2`,
              clues: [
                { text: `Police knock on someone's door and ask to come in and look around. They don't have a warrant.` },
                { text: `They don't see anything illegal from outside. They just want to check.` },
                { text: `The homeowner says no. The police say they'll come in anyway.` },
              ],
              correctAnswer: `fourth`,
              realWorldExample: `This kind of situation has come up many times in real cases. The principle is firmly established.`,
              explanation: `Fourth Amendment. Police generally can't search your home without a warrant or your permission. There are exceptions (emergency, plain view of a crime, etc.), but "we just want to check" isn't one of them. The homeowner is fully protected.`,
            },
            {
              id: `case-3`,
              caseTitle: `Case #3`,
              clues: [
                { text: `A person is arrested. They can't afford a lawyer.` },
                { text: `The judge tells them they'll have to defend themselves at trial.` },
                { text: `The person isn't sure what to do — they don't know the law.` },
              ],
              correctAnswer: `sixth`,
              realWorldExample: `This is exactly what happened in Gideon v. Wainwright (nineteen sixty-three). Gideon was forced to defend himself, lost, and went to prison — until the Supreme Court ruled the government MUST provide a lawyer to anyone who can't afford one.`,
              explanation: `Sixth Amendment. If you're accused of a crime and can't afford a lawyer, the government has to provide one for free. The judge in this scenario was wrong — and the person's Sixth Amendment rights are being violated.`,
            },
            {
              id: `case-4`,
              caseTitle: `Case #4 — The Tricky One`,
              clues: [
                { text: `A person is being questioned by police about a crime they may or may not have done.` },
                { text: `The police keep pressuring them to confess.` },
                { text: `The person doesn't want to say anything. They aren't sure they have to.` },
              ],
              correctAnswer: `fifth`,
              realWorldExample: `This is what "Miranda rights" come from — police have to tell you that you have the right to remain silent.`,
              explanation: `Fifth Amendment. You have the right to remain silent. You don't have to answer police questions, and your silence cannot be used as proof of guilt. This is what people mean when they say "I plead the Fifth." The person doesn't have to say a word, no matter how much police pressure them.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see how much of this stuck, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is the Bill of Rights?`,
              options: [
                `The first 10 amendments to the Constitution`,
                `A famous speech by George Washington`,
                `A list of taxes`,
                `The first part of the Declaration of Independence`,
              ],
              correctIndex: 0,
              explanation: `The Bill of Rights is the first 10 amendments, added in seventeen ninety-one. Each one limits what the government can do to citizens.` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `Which of these is NOT one of the five freedoms in the First Amendment?`,
              options: [
                `Freedom of speech`,
                `Freedom of religion`,
                `Freedom to drive a car`,
                `Freedom of the press`,
              ],
              correctIndex: 2,
              explanation: `Driving isn't in the First Amendment. The five First Amendment freedoms are speech, religion, press, assembly, and petition.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What is a warrant?`,
              options: [
                `A type of money`,
                `Written permission from a judge that lets police search a specific place`,
                `A police uniform`,
                `A type of trial`,
              ],
              correctIndex: 1,
              explanation: `A warrant is written permission from a judge. Police need one for most searches under the Fourth Amendment.` },
            { id: `l03-q4`, format: `true-false`,
              question: `True or false: A private company firing someone for posting an opinion online is a First Amendment violation.`,
              correctAnswer: false,
              explanation: `False. The First Amendment protects you from the GOVERNMENT, not from private companies. A private business can fire someone for their posts. A public school punishing you for the same thing would be a violation.` },
            { id: `l03-q5`, format: `multiple-choice`,
              question: `What does "I plead the Fifth" mean?`,
              options: [
                `I want to leave the trial`,
                `I'm using my Fifth Amendment right to remain silent`,
                `I want to plead guilty`,
                `I want the fifth option`,
              ],
              correctIndex: 1,
              explanation: `"I plead the Fifth" means using your Fifth Amendment right to remain silent so you don't say anything that could be used against you.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `If someone can't afford a lawyer when they're accused of a crime, what happens?`,
              options: [
                `They have to defend themselves alone`,
                `The government has to provide a lawyer for free`,
                `They go straight to jail`,
                `They have to wait until they can save up`,
              ],
              correctIndex: 1,
              explanation: `Sixth Amendment. If you can't afford a lawyer, the government provides one for free. This was made absolute in nineteen sixty-three by the Gideon v. Wainwright case.` },
            { id: `l03-q7`, format: `multiple-choice`,
              question: `Why was the Bill of Rights added so quickly after the Constitution?`,
              options: [
                `Because the Constitution wasn't long enough`,
                `Because many people refused to support the Constitution without explicit, written protections from the new government`,
                `Because someone forgot to write them down`,
                `Because the Framers wanted to keep working`,
              ],
              correctIndex: 1,
              explanation: `Many Americans had just escaped a king and didn't trust ANY new government with too much power. They demanded a list of rights in writing, or they wouldn't support the Constitution. The Bill of Rights was the deal.` },
            { id: `l03-q8`, format: `multiple-choice`,
              question: `Which amendment protects you from being searched without a good reason?`,
              options: [
                `First Amendment`,
                `Fourth Amendment`,
                `Fifth Amendment`,
                `Sixth Amendment`,
              ],
              correctIndex: 1,
              explanation: `Fourth Amendment. It protects against unreasonable searches and seizures. Police usually need a warrant or your permission to search.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Take a real minute, {name}. Pick ONE prompt and answer it.`,
          prompts: [
            { id: `r1`, text: `Which Bill of Rights protection do you think you're most likely to need someday?` },
            { id: `r2`, text: `What's something you can say or do today that wouldn't be allowed in a country without these rights?` },
            { id: `r3`, text: `Which case felt hardest to solve, and why?` },
            { id: `r4`, text: `If you could add a brand-new amendment for the 21st century, what would it be?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Every day in courts across America, lawyers use the Bill of Rights to defend people. Sometimes it's someone famous. Most of the time, it's regular people. Students arguing for their right to wear a controversial T-shirt to school. Journalists fighting to publish stories the government would rather hide. People who can't afford lawyers getting a public defender. These aren't ancient history — they're happening right now, in the country you live in.`,
          familyAdventure: `Together, watch a short news story or read a short article about a recent Bill of Rights case. Then have each family member pick a side and argue for it, even if they don't really agree. After, vote on which side made the stronger case. Then talk: how does your opinion change when you have to argue the other side?`,
          creativePrompt: {
            intro: `Pick ONE of the Bill of Rights protections you learned about today (speech, religion, press, assembly, petition, unreasonable search, right to silence, right to a fair trial). Write about a situation where it could matter in your real life — at school, in your community, with the police, or somewhere else.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Describe the situation in detail and explain how the right would actually protect someone.`,
            open: `Write as much as you want. Tell a whole story.`,
            frames: [
              `The right I'm focusing on is ___.`,
              `A real-life situation where it matters is ___.`,
              `Without this right, what could happen is ___.`,
              `With this right, the person is protected because ___.`,
              `One thing most people don't realize about this right is ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Sharp work, {name}. You can now name the Bill of Rights, list the five freedoms in the First Amendment, explain why warrants exist, and know what to do if you're ever accused of something. Next lesson we look at the three branches of government in action — and you'll walk a bill through every step from idea to law. — Atlas.`,
          badge: `rights-detective`,
          badgeName: `Rights Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L03;
