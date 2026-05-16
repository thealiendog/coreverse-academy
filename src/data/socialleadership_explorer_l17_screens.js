// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L17 — Historical Leaders Who Changed the World
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L17 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-17`,
      title:     `Historical Leaders Who Changed the World`,
      duration:  12,
      xpReward:  50,
      badge:     `history-maker`,
      badgeName: `History Maker`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Here's something I think about, {name}: when we look at moments in history where things changed — where injustice was confronted, where something new was built, where a community found its way through a crisis — there's almost always a specific person at the center. Someone who saw a situation clearly, decided something needed to change, and acted. Not because they had special powers. Because they made a choice. Today we're going to meet some of those people — leaders from history who changed the world through character, not just power. I want you to think about what their choices might mean for yours.`,
          headline: `Historical Leaders Who Changed the World`,
          subtitle: `History isn't made by impersonal forces — it's made by people who decided to act`,
          visual: `/explorer-assets/leadership/l17-welcome.png`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Nelson Mandela: Forgiveness as Strength`,
          paragraphs: [
            `Nelson Mandela spent 27 years in prison for fighting apartheid.`,
            `When released, many expected revenge. Instead he pursued reconciliation. He became South Africa's first Black president and created a Commission focused on healing over punishment.`,
          ],
          image: `/explorer-assets/leadership/l17-s1-forgiveness-strength.png`,
          imageCaption: `27 years of imprisonment. The choice of forgiveness over revenge. One of the most powerful leadership decisions in modern history.`,
          vocab: [
            { word: `apartheid`,      definition: `A system of harsh racial separation that governed South Africa for decades. The injustice Mandela spent his life fighting.`,
              audioPrompt: `Apartheid was a system designed to keep people apart by race — enforcing inequality through law, {name}. It took decades of courageous resistance to dismantle. Mandela's fight against it cost him 27 years of his life. Understanding what he was fighting — and why it mattered — helps us understand what his forgiveness actually meant.` },
            { word: `reconciliation`, definition: `The process of restoring peace after conflict. Choosing to heal rather than punish — and to build rather than retaliate.`,
              audioPrompt: `Reconciliation is one of the hardest choices a leader can make, {name}. After 27 years in prison, Nelson Mandela had every reason to demand punishment. Instead, he chose healing. Not because he had forgotten — but because he understood that lasting change required bringing even his former enemies along. That choice helped transform an entire country.` },
            { word: `forgiveness`,    definition: `Choosing not to let past harm define future action. One of the most powerful and difficult leadership qualities there is.`,
              audioPrompt: `Valor believes forgiveness is strength, {name} — not weakness. It doesn't mean pretending harm didn't happen. It means deciding that the future matters more than settling the score. Mandela's forgiveness wasn't passive. It was a deliberate, principled choice that made lasting change possible. That's not weakness. That's some of the most powerful leadership in history.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Malala Yousafzai: Voice Under Fire`,
          paragraphs: [
            `At age 11, Malala began writing about life under Taliban rule in Pakistan.`,
            `At 15, she was shot for advocating for girls' education. She survived — and instead of being silenced, became the world's youngest Nobel Peace Prize laureate at 17.`,
          ],
          image: `/explorer-assets/leadership/l17-s2-voice-under-fire.png`,
          imageCaption: `She kept speaking when silence would have been the safer choice. That choice — repeated through real danger — is what changed the world's conversation.`,
          vocab: [
            { word: `advocate`,  definition: `Someone who uses their voice consistently to speak up for others — even when it comes at a personal cost.`,
              audioPrompt: `An advocate doesn't stop speaking when it gets dangerous, {name}. Malala Yousafzai kept writing, kept speaking, kept insisting that girls deserved an education — even under direct threat. She understood that her voice was the tool she had, and she refused to put it down. That sustained commitment, over time, is what makes an advocate powerful.` },
            { word: `anonymous`, definition: `Without revealing your identity. How Malala first shared her story — before she became one of the world's most recognized voices.`,
              audioPrompt: `Malala started anonymously, {name} — writing her blog without her name attached, because the risks were real. That first step, hidden and small, was still a choice to speak when silence would have been safer. Many of the most important acts of courage start quietly, before anyone is watching. The courage was there from the beginning.` },
            { word: `laureate`,  definition: `Someone recognized with a prestigious award for significant achievement. Malala became the youngest Nobel Peace Prize laureate in history.`,
              audioPrompt: `Becoming the youngest Nobel Peace Prize laureate in history didn't define Malala, {name} — the work that came before it did. The award was recognition of choices already made: to speak, to survive, to keep speaking. Recognition is meaningful. But Valor wants you to remember: the character that earned it was there long before the prize was.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Frederick Douglass: Knowledge as Freedom`,
          paragraphs: [
            `Frederick Douglass was born into slavery. Teaching enslaved people to read was illegal.`,
            `He taught himself anyway — understanding that knowledge was the path to freedom. He escaped and became one of America's greatest orators and abolitionists.`,
          ],
          image: `/explorer-assets/leadership/l17-s3-knowledge-as-freedom.png`,
          imageCaption: `Learning to read was illegal. He did it anyway. That single, hidden act of will reshaped what one person — and a country — could become.`,
          vocab: [
            { word: `abolition`, definition: `The movement to completely end slavery. What Frederick Douglass devoted his voice, writing, and life to achieving.`,
              audioPrompt: `Abolition was the fight to end slavery entirely — not to improve it, not to contain it, but to eliminate it, {name}. Douglass understood that partial change wasn't enough. He gave his intellect, his voice, and his story to that cause for decades. What he gave up to do it, and what he built in spite of it, remains one of the most remarkable stories in American history.` },
            { word: `literacy`,  definition: `The ability to read and write. What Douglass secretly taught himself — understanding it was the most powerful resistance available to him.`,
              audioPrompt: `Literacy was illegal for enslaved people, {name} — and Douglass understood exactly why. The ability to read and write is access to ideas, to history, to arguments, to power. He taught himself in secret because he knew what those in control feared most: people who could think, articulate, and demand more. That one act of learning changed the course of his life — and contributed to changing history.` },
            { word: `orator`,    definition: `A skilled public speaker. Douglass became one of the most powerful speakers of his era — using language as his primary tool for change.`,
              audioPrompt: `Frederick Douglass became one of the greatest orators of his time, {name}. His words were so precise, so powerful, that people refused to believe he had been enslaved — because they couldn't imagine someone emerging from that system with that command of language. That impossibility was itself part of his argument. His voice was the evidence.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `They Shared a Vision`,
          paragraphs: [
            `Three different eras. Three different continents. One thing in common: a clear VISION of a more just world.`,
            `Mandela saw a reconciled South Africa. Malala saw every girl in school. Douglass saw an America without slavery. None could see it yet. All believed in it completely.`,
          ],
          image: `/explorer-assets/leadership/l17-s4-shared-vision.png`,
          imageCaption: `Each of them saw a future no one around them could see yet. Vision isn't certainty about the path. It's certainty about the destination.`,
          vocab: [
            { word: `vision`,     definition: `A clear picture of a better world. What drives leaders long before the change they work for is visible to anyone else.`,
              audioPrompt: `Vision is what keeps a leader going when the goal is still far away, {name}. Mandela saw a reconciled South Africa. Malala saw a world where every girl could go to school. Douglass saw an America without slavery. None of them could see that future clearly yet — but they were committed to it completely. Vision isn't knowing the way. It's being certain enough about the destination to keep walking.` },
            { word: `justice`,    definition: `A state of fairness where people are treated rightly. What each of these leaders was fighting to create.`,
              audioPrompt: `Justice was the common thread, {name} — though it looked different in each of their contexts. For Mandela, it was racial equality and reconciliation. For Malala, it was education for every girl. For Douglass, it was the end of slavery. Their methods varied. Their qualities varied. But underneath everything was the same insistence: this isn't how it should be, and I will work to change it.` },
            { word: `commitment`, definition: `Continued belief and action over long stretches of time. What turns vision from a dream into something real.`,
              audioPrompt: `Commitment is what separates a vision from a passing thought, {name}. None of these leaders changed the world in a year. Mandela worked for decades. Malala continues today. Douglass spent his entire adult life on the cause. Commitment over years — through setbacks, through fear, through real cost — is what makes vision into history.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `They Accepted Real Risk`,
          paragraphs: [
            `Real leadership involves real risk.`,
            `Mandela lost 27 years of his freedom. Malala risked her life. Douglass risked recapture every step. None of them acted because it was safe. They acted because something mattered MORE.`,
          ],
          image: `/explorer-assets/leadership/l17-s5-accepted-risk.png`,
          imageCaption: `None of them acted because it was safe. They acted because something mattered more than safety. That calculation is what makes a leader.`,
          vocab: [
            { word: `risk`,      definition: `The personal cost a leader accepts to act on what they believe. What all three of these leaders accepted, repeatedly, for many years.`,
              audioPrompt: `Real leadership involves real risk, {name}. Mandela risked and lost his freedom. Malala risked her life. Douglass risked recapture and punishment every step of the way. None of them acted because it was safe. They acted because something mattered more than the risk. That calculation — this matters more than my comfort — is what makes a leader.` },
            { word: `sacrifice`, definition: `Giving up something important for something more important. The price each of these leaders paid for their work.`,
              audioPrompt: `Each of these leaders sacrificed something real, {name} — and freely. Years of freedom. Physical safety. Family time. Easy lives that were available to them if they had simply stayed quiet. Sacrifice isn't loss when you choose it for something that matters more. But the cost was always real. That's what makes their stories more than just inspirational. They cost something.` },
            { word: `courage`,   definition: `Acting despite fear. What makes risk into a choice rather than a trap — and what every one of these leaders showed, repeatedly.`,
              audioPrompt: `Courage doesn't mean you weren't afraid, {name} — it means you acted anyway. All three of these leaders felt fear. Of course they did. The difference is that they didn't let fear decide for them. They acknowledged the risk and moved forward because something mattered more. That's available to anyone willing to ask: what matters enough to me to act despite the fear?` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `They Served Something Larger`,
          paragraphs: [
            `All three could have made their gifts about themselves. They didn't.`,
            `Mandela's political genius, Malala's voice, Douglass's intellect — each used in service of something far bigger. That's the difference between fame and leadership.`,
          ],
          image: `/explorer-assets/leadership/l17-s6-served-larger.png`,
          imageCaption: `Talent used for self is fame. Talent used for others is leadership. That distinction is what separates these three from many others with similar gifts.`,
          vocab: [
            { word: `service`,   definition: `Using your gifts for something bigger than yourself. The orientation that turns ability into leadership.`,
              audioPrompt: `Service is what makes leadership different from talent, {name}. Plenty of people have remarkable abilities. The ones we remember as leaders chose to direct those abilities outward — toward others, toward justice, toward something larger than personal success. That orientation, sustained over years, is what built the legacies these three left.` },
            { word: `legacy`,    definition: `What remains after you're gone. Built through years of choices, not single dramatic moments.`,
              audioPrompt: `Legacy is what outlasts you, {name} — what other people inherit because of the choices you made. None of these three set out to build a legacy. They set out to change something they couldn't accept. The legacy followed naturally from the work. That's almost always how it goes. Focus on the work. The legacy takes care of itself.` },
            { word: `privilege`, definition: `An advantage some people have that others don't. Notably absent from the starting points of all three leaders in this lesson.`,
              audioPrompt: `None of the three leaders in this lesson started from privilege, {name}. Mandela faced apartheid. Malala faced a regime that threatened her for learning. Douglass was born enslaved. Their leadership didn't come from advantage — it came from character, vision, and an unwillingness to accept that the world couldn't be different. That's the most important lesson their stories hold.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `leadership`,
              label: `🌟 Shows Real Leadership`,
              color: `#34D399`,
            },
            {
              id: `easy-path`,
              label: `🚶 Taking the Easy Path`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l17-g1`,
              image: `l17-game-1.png`,
              label: `Speaking up for what you believe is right, even when everyone around you is staying silent.`,
              matchPhrase: `Using your voice when silence would be safer is one of the clearest forms of leadership courage.`,
              correctMatch: `leadership`,
            },
            {
              id: `l17-g2`,
              image: `l17-game-2.png`,
              label: `Working hard to learn something others say you shouldn't — because you know it matters for your future.`,
              matchPhrase: `The willingness to learn and grow — even against obstacles — is a powerful form of leadership in itself.`,
              correctMatch: `leadership`,
            },
            {
              id: `l17-g3`,
              image: `l17-game-3.png`,
              label: `Going along with something unfair because speaking up feels too risky.`,
              matchPhrase: `Staying quiet to avoid risk keeps things comfortable in the short term — but nothing changes.`,
              correctMatch: `easy-path`,
            },
            {
              id: `l17-g4`,
              image: `l17-game-4.png`,
              label: `Choosing to get back at someone who hurt you, rather than working together toward something better.`,
              matchPhrase: `Revenge feels satisfying but rarely creates lasting change. Mandela showed that the harder choice — reconciliation — builds something that lasts.`,
              correctMatch: `easy-path`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l17-q1`,
              format: `multiple-choice`,
              question: `What made Mandela's leadership after prison so remarkable?`,
              options: [
                `He immediately passed laws to punish those who had imprisoned him`,
                `He chose forgiveness and reconciliation over revenge, which created conditions for lasting change`,
                `He left South Africa to lead from a position of safety abroad`,
                `He organised the largest political protest in South African history`,
              ],
              correctIndex: 1,
              explanation: `After 27 years in prison, Mandela could have pursued revenge — and most people would have understood. Instead he chose reconciliation, understanding that lasting change required bringing former opponents along, not defeating them.`,
            },
            {
              id: `l17-q2`,
              format: `multiple-choice`,
              question: `What was Frederick Douglass's key insight about freedom?`,
              options: [
                `That physical strength was what was needed to resist oppression`,
                `That organising large numbers of people was the only path to change`,
                `That education — specifically literacy — was the path to freedom and liberation`,
                `That nonviolent protest was always the most effective strategy`,
              ],
              correctIndex: 2,
              explanation: `Douglass understood instinctively — before he had words to articulate it — that the ability to read and write was power. Knowledge was what those in power had denied enslaved people, which told him exactly what he needed to fight for.`,
            },
            {
              id: `l17-q3`,
              format: `multiple-choice`,
              question: `What quality did Mandela, Malala, and Douglass all share?`,
              options: [
                `They were all born into privileged circumstances that gave them a platform`,
                `They all achieved change through exactly the same methods`,
                `A clear vision, personal courage, and leadership in service of others rather than themselves`,
                `They all became heads of state or government`,
              ],
              correctIndex: 2,
              explanation: `All three came from very different backgrounds, eras, and contexts — but they shared the same core: a vision of something better, the courage to act despite serious personal risk, and a commitment to change conditions for others, not to gain personal power.`,
            },
            {
              id: `l17-q4`,
              format: `true-false`,
              question: `Each of the three leaders in this lesson faced serious personal risk as part of their fight for change.`,
              correctAnswer: true,
              explanation: `True. Mandela spent 27 years in prison, Malala survived an assassination attempt, and Douglass escaped slavery — teaching himself to read at great personal danger along the way. Their courage was not abstract; it was tested under real consequences.`,
            },
            {
              id: `l17-q5`,
              format: `fill-blank`,
              question: `Mandela, Malala, and Douglass each used their unique gifts in service of something larger than ___.`,
              options: [
                `themselves`,
                `history`,
                `education`,
                `justice`,
              ],
              correctIndex: 0,
              explanation: `All three directed their energy outward — toward changing conditions for others — rather than pursuing personal power or recognition. That orientation is one of the defining marks of great leadership.`,
            },
            {
              id: `l17-q6`,
              format: `multiple-choice`,
              question: `What does Frederick Douglass's story teach us about leadership?`,
              options: [
                `That the most effective leaders always have the support of powerful people around them`,
                `That lasting change only ever happens through large-scale organised protest`,
                `That education and the willingness to keep learning can be the most powerful tools available to anyone`,
                `That writing and speaking matter more than taking real action`,
              ],
              correctIndex: 2,
              explanation: `Douglass's path began with a single act: teaching himself to read. That commitment to knowledge — even at great risk — opened everything that followed. His story is a reminder that learning is never a passive act.`,
            },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Every era produces people who see something that needs changing and decide to act. The qualities that made Mandela, Malala, and Douglass effective — vision, courage, and service to others — are available to anyone who chooses to develop them.`,
          familyAdventure: `Each family member picks a historical leader they admire — from any field or era — and shares: what challenge did that person face, and what did they do that took real courage? Write the names on paper and put them somewhere visible as your family's leadership board.`,
          creativePrompt: `Pick one historical leader not in this lesson who you find inspiring — from any country, any era. Find out one thing they gave up and one thing they stood for.`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that history is made by real people — people who saw something that needed changing and found the courage to act, even when the cost was high. The qualities that drove Mandela, Malala, and Douglass are available to anyone who chooses to develop them. Valor is so proud to share this with you.`,
          badge: `history-maker`,
          badgeName: `History Maker`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L17.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L17] Loaded: "Historical Leaders Who Changed the World" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l17-s1-forgiveness-strength.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-s2-voice-under-fire.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-s3-knowledge-as-freedom.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-s4-shared-vision.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-s5-accepted-risk.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l17-s6-served-larger.png',         { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L17] One or more magazine assets missing'));
}
