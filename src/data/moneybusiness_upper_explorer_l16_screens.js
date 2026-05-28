// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L16 — Networking: Building Relationships
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: C3 D2.Civ — Building relationships and community;
//            Jump$tart — Career development and professional skills
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what networking really is, give-first principle,
//        how relationships compound, building a genuine network
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-16`,
      title: `Networking: Building Relationships`,
      duration: 18,
      xpReward: 75,
      badge: `relationship-builder`,
      badgeName: `Relationship Builder`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today's topic is one many people misunderstand. NETWORKING. A lot of people imagine networking as fake smiles, collecting business cards, and using people to get ahead. That's BAD networking, and it doesn't even work well. REAL networking is just BUILDING GENUINE RELATIONSHIPS with people over time. It turns out that the people you know, and who know and trust you, shape your opportunities more than almost anything else. Today we cover what networking really is and how to do it in a way that's honest and actually works. Let's go.`,
          headline: `Networking`,
          subtitle: `Building genuine relationships the real way, not the fake way`,
          visual: `/ue-assets/money/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Networking Really Is`,
          paragraphs: [
            `NETWORKING is simply BUILDING and MAINTAINING relationships with other people. That's it. Your "network" is all the people you know: friends, family, teachers, neighbors, teammates, and eventually coworkers, mentors, and professional contacts. A strong network means you know many people, and importantly, that they know and TRUST you. The fake version of networking (collecting contacts to use them) doesn't build trust and usually fails. The real version (genuinely caring about people and helping them) builds relationships that last and benefit everyone.`,
            `Why does networking matter so much? Because most OPPORTUNITIES in life come through PEOPLE. Studies suggest that the majority of jobs are filled through personal connections, not public job postings. Business deals, partnerships, advice, introductions, recommendations, and countless other opportunities flow through relationships. The person who knows lots of people (and is known as trustworthy and helpful) has access to far more opportunities than someone equally talented but isolated. Talent matters. Relationships often determine whether your talent gets a chance.`,
          ],
          image: `/ue-assets/money/l16-s1-what-is.webp`,
          imageCaption: `Networking: building genuine relationships. Most opportunities flow through people.`,
          vocab: [
            { word: `networking`,
              definition: `Building and maintaining genuine relationships with other people over time. Your "network" is everyone who knows and trusts you. Most life opportunities come through relationships.`,
              audioPrompt: `Networking is simply building and maintaining relationships with other people, {name}. That's it. Your network is all the people you know. Friends, family, teachers, neighbors, teammates, and eventually coworkers and mentors. A strong network means you know many people, and importantly, they know and trust you. The fake version of networking (collecting contacts to use them) usually fails. The real version (genuinely caring about people and helping them) builds lasting relationships. Most opportunities in life come through people, which is why genuine networking matters so much.` },
            { word: `social capital`,
              definition: `The value created by your relationships and network. Like money, it can be built up over time and drawn on when you need it. High social capital means people want to help you, open doors, and recommend you.`,
              audioPrompt: `Social capital is the value created by your relationships and network, {name}. Like financial capital, which is money, social capital can be built up over time and drawn on when you need it. When you've helped many people and built trust widely, you have high social capital. People want to help you, open doors for you, and recommend you. When you've taken without giving, you have low social capital, and few people step up for you. Building genuine relationships is how you build social capital. It compounds over a lifetime.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Give-First Principle`,
          paragraphs: [
            `The single most important idea in real networking is GIVE FIRST. Most people approach relationships asking "what can I GET from this person?" The best networkers flip it: "what can I GIVE to this person?" They help others, make introductions, share useful information, offer encouragement, and add value without immediately expecting anything back. Over time, this generosity builds deep trust and goodwill. People remember those who helped them, and they want to help back.`,
            `This isn't about being a pushover or letting people take advantage of you. It's about understanding that generosity COMPOUNDS in relationships, the same way money compounds with interest (L02). When you consistently help people without keeping a strict scorecard, you build a reputation as someone valuable to know. Opportunities flow toward generous, trustworthy people. Givers who are also smart about boundaries tend to end up with the strongest networks. Ace's observation: the people with the best networks are almost always generous people. They didn't build their networks by taking. They built them by giving.`,
          ],
          image: `/ue-assets/money/l16-s2-give-first.webp`,
          imageCaption: `Give first. Generosity compounds. The best networkers are generous people.`,
          vocab: [
            { word: `give-first`,
              definition: `The principle of helping others and adding value before expecting anything in return. The foundation of genuine networking. Generosity builds trust and goodwill that compounds over time.`,
              audioPrompt: `Give-first is the principle of helping others and adding value before expecting anything in return, {name}. Most people approach relationships asking what can I get from this person. The best networkers flip it. They ask what can I give. They help others, make introductions, share useful information, and offer encouragement without expecting anything back. Over time, this generosity builds trust and goodwill. People remember those who helped them. This isn't about being a pushover. It's about understanding that generosity compounds in relationships, the same way money compounds with interest.` },
            { word: `reciprocity`,
              definition: `The natural human tendency to give back when someone gives to you. One of the most powerful forces in relationships — why the give-first principle works. Generosity tends to come back around.`,
              audioPrompt: `Reciprocity is the natural human tendency to give back when someone gives to you, {name}. One of the most powerful forces in relationships. When someone does you a genuine favor, you naturally want to return it. Not always immediately, sometimes years later. This is why the give-first principle works so well. When you help people generously and consistently, reciprocity means many of them will eventually want to help you back. Reciprocity isn't manipulation. It's just how human relationships naturally work. Give genuinely, and it tends to come back around.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Relationships Compound`,
          paragraphs: [
            `Relationships, like compound interest, GROW OVER TIME if you invest in them. A small kindness today (helping a classmate, being reliable, showing genuine interest in someone) might seem to do nothing immediately. But years later, that classmate might become a colleague who recommends you for an opportunity. The teacher you respected might write you a powerful recommendation. The neighbor you helped might connect you to exactly the right person. You usually can't predict WHICH relationships will matter most, which is exactly why you treat everyone well.`,
            `This is why your REPUTATION is one of your most valuable assets. People talk. If you're known as reliable, kind, honest, and helpful, that reputation travels ahead of you and opens doors. If you're known as selfish, unreliable, or dishonest, that reputation also travels and closes doors. Every interaction is a small deposit (or withdrawal) in your reputation account. Over years, these add up to either a strong network full of people who vouch for you, or a weak one. Start building good relationships NOW, even as a kid. The friend you're kind to today might be an important connection in 20 years. You never know.`,
          ],
          image: `/ue-assets/money/l16-s3-compound.webp`,
          imageCaption: `Relationships compound like interest. Small kindnesses today, big opportunities later.`,
          vocab: [
            { word: `reputation`,
              definition: `What people believe and say about you. One of your most valuable assets. A reputation for being reliable, honest, and helpful opens doors. The opposite closes them.`,
              audioPrompt: `Reputation is what people believe and say about you, {name}. It's one of your most valuable assets. People talk. If you're known as reliable, kind, honest, and helpful, that reputation travels ahead of you and opens doors. If you're known as selfish, unreliable, or dishonest, that reputation also travels and closes doors. Every interaction is a small deposit or withdrawal in your reputation account. Over years, these add up to either a strong network of people who trust you, or a weak one.` },
            { word: `referral`,
              definition: `A recommendation from someone who knows you to someone else who needs what you offer. One of the most common ways opportunities flow through networks. Trust transfers when trusted people recommend you.`,
              audioPrompt: `A referral is a recommendation from someone who knows you to someone else who needs what you offer, {name}. One of the most common ways opportunities flow through networks. When a trusted person says I know someone perfect for this, that recommendation carries far more weight than a cold application or resume. Referrals work because trust transfers. If you trust me, and I trust someone, you extend some of that trust to them. People with strong networks get referrals regularly. Building relationships and a reputation naturally generates referrals over time.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building a Genuine Network`,
          paragraphs: [
            `You don't build a real network through fake events or collecting contacts. You build it through GENUINE practices done consistently. BE INTERESTED in others (ask questions, remember what people tell you, follow up). BE RELIABLE (do what you say, show up, keep your word). BE GENEROUS (help when you can, make introductions, share knowledge). STAY IN TOUCH (relationships fade without contact, so check in with people you care about). BE YOURSELF (fake relationships don't last; genuine ones do).`,
            `For kids and teens, networking happens naturally through being a good friend, a reliable teammate, a respectful student, and a kind person. You're already building your network right now, whether you realize it or not. The habits you build now (kindness, reliability, generosity, genuine interest in others) will shape your relationships for life. Ace's note: don't think of networking as something fake you do for selfish reasons. Think of it as becoming the kind of person others trust, respect, and want to help. That's not a trick. It's just being a genuinely good person, consistently, over time. The rewards follow naturally.`,
          ],
          image: `/ue-assets/money/l16-s4-building.webp`,
          imageCaption: `Be interested. Be reliable. Be generous. Stay in touch. Be yourself.`,
          vocab: [
            { word: `mentor`,
              definition: `An experienced person who guides and advises someone less experienced. Mentors are one of the most valuable relationships you can build. Most successful people had mentors who helped them along the way.`,
              audioPrompt: `A mentor is an experienced person who guides and advises someone less experienced, {name}. Mentors are one of the most valuable relationships you can build. They might be teachers, coaches, older relatives, or bosses. Most successful people had mentors who guided them, shared wisdom, opened doors, and helped them avoid mistakes. Good mentor relationships are built through genuine respect and the give-first principle. If you find someone you admire, being genuinely interested and respectful is how mentor relationships begin.` },
            { word: `mentorship`,
              definition: `An ongoing relationship where a more experienced person guides and supports someone less experienced. More than just advice — a mentor invests in your growth, shares wisdom, and opens doors.`,
              audioPrompt: `Mentorship is an ongoing relationship where a more experienced person guides and supports someone less experienced, {name}. More than just occasional advice. A mentor invests time in your growth, shares wisdom from their own experience, helps you navigate challenges, and opens doors. Most people who thrived in their field had mentors. Mentorship is often one of the biggest differences between people with the same talent. Finding and nurturing a mentorship relationship is one of the smartest moves you can make.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four networking behaviors. For each one, identify what it is: GENUINE NETWORKING (building real relationships through giving and care), TRANSACTIONAL/FAKE (using people, collecting contacts, all take and no give), or REPUTATION BUILDING (consistent behavior that shapes how others see you)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `genuine`,        label: `Genuine Networking`,    color: `#34D399`, description: `Building real relationships through generosity, interest, and care for others.` },
            { id: `fake`,           label: `Transactional/Fake`,     color: `#F87171`, description: `Using people, collecting contacts, taking without giving. Usually fails.` },
            { id: `reputation`,     label: `Reputation Building`,    color: `#60A5FA`, description: `Consistent behavior that shapes how others see and talk about you.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Behavior #1`,
              clues: [
                { text: `Maya hears that her friend's mom is looking for a dog walker.` },
                { text: `Maya knows another friend who's great with dogs and needs work, so she introduces them.` },
                { text: `Maya gets nothing directly out of it. She just connected two people who could help each other.` },
              ],
              correctAnswer: `genuine`,
              realWorldExample: `Making helpful introductions is core to genuine networking.`,
              explanation: `Helping two people connect, expecting nothing back. Pure genuine networking (give-first in action). These small acts of generosity build deep goodwill. Both people will remember that Maya helped them.`,
            },
            {
              id: `case-2`,
              caseTitle: `Behavior #2`,
              clues: [
                { text: `At a school event, a kid quickly introduces himself to the "popular" kids and important parents.` },
                { text: `He's not actually interested in them — he just wants to be associated with them.` },
                { text: `He ignores everyone he thinks isn't "useful" to him.` },
              ],
              correctAnswer: `fake`,
              realWorldExample: `Status-chasing networking is transparent and usually backfires.`,
              explanation: `All take, no give. Using people for status. Ignoring those who aren't "useful." Pure transactional/fake networking. People can usually sense this, and it damages rather than builds relationships. It also misses the truth that you never know which relationships will matter most.`,
            },
            {
              id: `case-3`,
              caseTitle: `Behavior #3`,
              clues: [
                { text: `David always does what he says he'll do. If he promises to help, he shows up.` },
                { text: `Over years, teachers, teammates, and friends learn they can count on him.` },
                { text: `When opportunities come up, people think of David because they trust him.` },
              ],
              correctAnswer: `reputation`,
              realWorldExample: `Reliability over time builds a powerful reputation.`,
              explanation: `Consistent reliability over years shaping how everyone sees him. Pure reputation building. David isn't "networking" in any active way. He's just being reliable, and that reputation opens doors naturally. Reputation is one of your most valuable assets.`,
            },
            {
              id: `case-4`,
              caseTitle: `Behavior #4 — The Tricky One`,
              clues: [
                { text: `Sara genuinely admires a local business owner and asks thoughtful questions about her work.` },
                { text: `She offers to help with small tasks for free, just to learn.` },
                { text: `Over a year, the business owner becomes a mentor and eventually offers Sara a paid role.` },
              ],
              correctAnswer: `genuine`,
              realWorldExample: `Many mentor relationships start exactly like this.`,
              explanation: `Tricky because Sara DID eventually benefit (a paid job). Some might call that "using" the business owner. But look at HOW it happened: genuine admiration, thoughtful interest, offering help first, building a real relationship over a year. The benefit came as a NATURAL RESULT of genuine connection, not the goal she manipulated toward. Pure genuine networking. Lesson: benefiting from a relationship isn't fake networking. Fake networking is when GETTING is the only goal and you don't genuinely care. Sara cared first, gave first, and the opportunity followed naturally. That's how real mentor relationships and genuine networks actually work.`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is NETWORKING really?`,
              options: [
                `Collecting business cards`,
                `Building and maintaining genuine relationships with people over time`,
                `Using people to get ahead`,
                `Going to fancy events`,
              ],
              correctIndex: 1,
              explanation: `Networking is just building genuine relationships. Your network is everyone who knows and trusts you. The fake version (collecting contacts to use them) usually fails. The real version (genuinely caring about people) builds lasting relationships that benefit everyone.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `Why does networking matter SO MUCH?`,
              options: [
                `It doesn't`,
                `Because most opportunities in life — jobs, deals, advice, introductions — come through people and relationships`,
                `Only for famous people`,
                `Just for business`,
              ],
              correctIndex: 1,
              explanation: `Most opportunities flow through people. Studies suggest most jobs are filled through personal connections, not public postings. The person who's known and trusted has access to far more opportunities than someone equally talented but isolated.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `What's the GIVE-FIRST principle?`,
              options: [
                `Always take what you can`,
                `Helping others and adding value BEFORE expecting anything in return. The foundation of genuine networking.`,
                `Give away all your money`,
                `Never ask for help`,
              ],
              correctIndex: 1,
              explanation: `Give-first means flipping "what can I get?" to "what can I give?" Help others, make introductions, share knowledge, offer encouragement. Generosity builds trust and goodwill that compounds over time. The best networkers are generous people.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `How do relationships COMPOUND over time?`,
              options: [
                `They don't`,
                `Like compound interest — small kindnesses today can become important opportunities years later, in ways you can't predict`,
                `Only with rich people`,
                `Instantly`,
              ],
              correctIndex: 1,
              explanation: `Relationships grow over time if you invest in them. A small kindness today might lead to a recommendation, introduction, or opportunity years later. You usually can't predict which relationships will matter most, which is why you treat everyone well.` },

            { id: `l16-q5`, format: `true-false`,
              question: `True or false: Your REPUTATION is one of your most valuable assets, built through every interaction over time.`,
              correctAnswer: true,
              explanation: `True. People talk. A reputation for being reliable, honest, and helpful opens doors. A reputation for being selfish or dishonest closes them. Every interaction is a small deposit or withdrawal in your reputation account. It takes years to build and moments to damage.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `What's a MENTOR?`,
              options: [
                `A type of boss`,
                `An experienced person who guides and advises someone less experienced — one of the most valuable relationships you can build`,
                `A paid tutor`,
                `A celebrity`,
              ],
              correctIndex: 1,
              explanation: `Mentors guide and advise less experienced people. They might be teachers, coaches, relatives, or bosses. Most successful people had mentors. Good mentor relationships start through genuine respect and the give-first principle, not just asking for favors.` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `How do you build a GENUINE network?`,
              options: [
                `Collect as many contacts as possible`,
                `Be interested in others, be reliable, be generous, stay in touch, and be yourself — consistently over time`,
                `Only talk to important people`,
                `Attend lots of events`,
              ],
              correctIndex: 1,
              explanation: `Genuine networks are built through real practices: being interested in others, being reliable, being generous, staying in touch, and being yourself. For kids, this happens naturally through being a good friend, teammate, and kind person.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `Is it FAKE networking to eventually benefit from a relationship?`,
              options: [
                `Yes, always`,
                `No — benefiting naturally from genuine relationships is normal. Fake networking is when GETTING is the only goal and you don't truly care.`,
                `Yes, you should never benefit`,
                `Only if you planned it`,
              ],
              correctIndex: 1,
              explanation: `Benefiting from relationships isn't fake. Fake networking is when getting is the ONLY goal and you don't genuinely care about people. When you give first and care genuinely, benefits follow naturally. That's how real mentor relationships and networks work.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think about someone who has helped you (a teacher, coach, friend, relative). What did they give you, and how did it make you feel about them?` },
            { id: `r2`, text: `The give-first principle means helping before expecting anything back. What's ONE way you could help someone this week, expecting nothing in return?` },
            { id: `r3`, text: `Your reputation is built through every interaction. What's ONE word you'd want people to use when they describe you? What are you doing to earn it?` },
            { id: `r4`, text: `Imagine a friend you're kind to today becomes an important connection in 20 years. Does that change how you think about being a good friend now?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Networking (the real kind) shapes lives more than most people realize. The relationships you build determine many of your opportunities, from jobs to partnerships to friendships to mentorships. The good news is that genuine networking isn't a special talent or a manipulative skill. It's just being a genuinely good, reliable, generous person, consistently, over time. The habits you build now will shape your relationships for decades. Ace's note: in a world that often rewards taking, the people who give, who are trustworthy, and who genuinely care about others stand out and build the strongest networks of all.`,
          familyAdventure: `Family Give-First Challenge. As a family, each person picks ONE way to help someone this week without expecting anything back. Could be helping a neighbor, encouraging a friend, making an introduction, or sharing something useful. At the end of the week, talk about how it felt and what happened. Notice that giving feels good AND tends to come back around in unexpected ways.`,
          creativePrompt: {
            intro: `Imagine writing about the kind of person you want to BE known as by the time you're an adult. Write about your future reputation.`,
            floor: `Write at least 5 sentences. Describe the reputation you want, why it matters, and one habit you'd build to earn it.`,
            stretch: `Write 8 to 10 sentences. Cover the reputation you want, how the give-first principle fits in, what kind of relationships you'd build, and how you'd treat people.`,
            open: `Write as much as you want. Build a full vision of the person you want to become. Cover your reputation, your approach to relationships, how you'd give first, how you'd treat everyone (not just "important" people), and the kind of network you'd build over a lifetime. Show you understand it's about being genuinely good, not just strategic.`,
            frames: [
              `By the time I'm an adult, I want to be known as ___.`,
              `This matters to me because ___.`,
              `One way I'll give first is ___.`,
              `I want to treat people by ___.`,
              `The network I'd build would be full of ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what real networking is, the power of giving first, how relationships compound over time, and how to build a genuine network by being a good person consistently. Next lesson: how you present yourself to the world. YOUR PERSONAL BRAND. — Ace.`,
          badge: `relationship-builder`,
          badgeName: `Relationship Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
