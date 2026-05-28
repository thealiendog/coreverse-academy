// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L12 — The Gig Economy and Future of Work
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Career planning;
//            C3 D2.Eco — Modern labor markets
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the gig economy is, how work is changing,
//        multiple income streams, skills that matter in the future
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-12`,
      title: `The Gig Economy and Future of Work`,
      duration: 18,
      xpReward: 75,
      badge: `future-of-work`,
      badgeName: `Future of Work`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. The world of work is changing FAST. Your grandparents mostly worked at ONE COMPANY for decades. Your parents probably work at one company but switch every 5-10 years. By the time YOU are working, "having a job" might mean something completely different. Today we look at the GIG ECONOMY, how work is changing, why multiple income streams are becoming common, and what skills matter most for the future. The work world you'll enter looks different from anything that came before. Let's go.`,
          headline: `The Gig Economy and Future of Work`,
          subtitle: `Work is changing fast. Understand it now to thrive later.`,
          visual: `/ue-assets/money/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Gig Economy Is`,
          paragraphs: [
            `The GIG ECONOMY is a job market where lots of people work as INDEPENDENT CONTRACTORS or FREELANCERS rather than as full-time EMPLOYEES of one company. Instead of having one boss and one steady paycheck, gig workers do shorter projects ("gigs") for many different clients. Uber drivers, Airbnb hosts, freelance designers, food delivery couriers, online tutors, and consultants are all examples. Apps like Uber, DoorDash, Upwork, and Fiverr have made gig work much easier to find and do.`,
            `The gig economy has GROWN dramatically in the past 15 years. Estimates vary, but somewhere between 30-40% of U.S. workers do some kind of gig work, even if it's just part-time. Some love it (flexibility, variety, being their own boss). Some don't (no benefits, unpredictable income, no job security). It's neither perfect nor terrible. It's a different model. Whether you love or hate it probably depends on what you value most, what your skills are, and how stable your situation needs to be.`,
          ],
          image: `/ue-assets/money/l12-s1-gig.webp`,
          imageCaption: `Gig work: independent projects for multiple clients, not full-time employment.`,
          vocab: [
            { word: `gig economy`,
              definition: `A job market where many people work as independent contractors or freelancers doing short projects, rather than as full-time employees of one company. Apps like Uber, DoorDash, and Upwork have made gig work easier.`,
              audioPrompt: `The gig economy is a job market where lots of people work as independent contractors or freelancers, {name}. Rather than as full-time employees of one company. Instead of one boss and one steady paycheck, gig workers do shorter projects (called gigs) for many different clients. Uber drivers, Airbnb hosts, freelance designers, food delivery couriers, online tutors, and consultants are all examples. Apps have made gig work much easier to find and do. Between 30 and 40 percent of U.S. workers now do at least some gig work.` },
            { word: `independent contractor`,
              definition: `Someone who works for businesses without being a permanent employee. Hired for specific projects. Responsible for their own taxes and benefits. The gig economy is largely built on independent contractors.`,
              audioPrompt: `An independent contractor is someone who works for businesses or clients without being a permanent employee, {name}. Hired for specific projects, then the relationship ends. Independent contractors set their own schedules, work for multiple clients, and handle their own taxes and benefits. No health insurance, paid vacation, or retirement from the businesses they work for. The gig economy is largely built on independent contractors. Uber drivers, freelance designers, and consultants are often independent contractors. More flexibility, but fewer protections than employees.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Work Is Changing`,
          paragraphs: [
            `Several big trends are reshaping work right now. (1) REMOTE WORK exploded after 2020 and is now common in many industries. Lots of jobs that once required offices can be done from anywhere. (2) AUTOMATION is replacing some kinds of work (especially repetitive tasks) while creating new ones (especially involving creativity, judgment, and human connection). (3) FREELANCE PLATFORMS make it easier than ever to sell skills directly to customers worldwide. (4) WORKERS are switching jobs more often. The "lifetime job" is largely gone for most people.`,
            `These shifts have winners and losers. People with valuable skills who can work independently often gain freedom and earning power. People in routine jobs face more uncertainty. The next 20-30 years will probably see EVEN BIGGER changes, especially as AI advances. Some experts predict the very idea of a "career" might change. Workers may have many different jobs at the same time, change fields entirely several times, or build their own businesses with online tools. Nothing about your future work is certain except that it will look different from your parents'.`,
          ],
          image: `/ue-assets/money/l12-s2-changing.webp`,
          imageCaption: `Remote. Automation. Platforms. Job-switching. The four forces reshaping work.`,
          vocab: [
            { word: `freelance`,
              definition: `Working for yourself, doing projects for multiple clients instead of working for one employer. Common in design, writing, coding, consulting, photography, and many other skilled fields.`,
              audioPrompt: `Freelance means working for yourself, doing projects for multiple clients instead of working for one employer, {name}. Common in design, writing, coding, consulting, photography, video editing, and many other skilled fields. Freelancers set their own schedules, choose their own clients, and pick their own prices. They also handle their own taxes and have no employer benefits. Some freelancers earn more than they would as employees because they can serve many clients at once. Others struggle with the unpredictability. It's a different way of working.` },
            { word: `automation`,
              definition: `When machines or software replace tasks previously done by people. Creates some job losses (especially repetitive tasks) while creating new jobs requiring creativity, judgment, and human connection.`,
              audioPrompt: `Automation is when machines or software do tasks that people used to do, {name}. A factory robot that welds car parts is automation. Software that processes insurance claims is automation. AI that answers customer service questions is automation. Automation has eliminated many repetitive jobs and created new ones requiring creativity, judgment, and human connection. Most economists believe automation creates as many jobs as it destroys, but not always in the same places or for the same people. Understanding automation helps you choose skills that machines can't easily replace.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Multiple Income Streams`,
          paragraphs: [
            `In the old economy, most people had ONE income stream: a single job. The MODERN trend, especially among younger workers, is to have MULTIPLE income streams at the same time. A graphic designer might (1) work part-time for a company, (2) freelance projects on the side, (3) sell digital products online, and (4) teach courses on Skillshare or YouTube. Four income streams. Multiple sources. If one disappears (lost client, market shift), the others keep money coming in.`,
            `Multiple income streams aren't just for safety. They also support BUILDING WEALTH FASTER. Earning $5,000/month from one job lets you save what's left after expenses. Earning $5,000/month from a job AND $1,500/month from a side business creates a much bigger gap to save. Over time, the side income can grow until it becomes more important than the day job. Many successful entrepreneurs started this way: gradually building side income until they could leave their job entirely. For your generation, multiple income streams will likely be the norm, not the exception. Building skills that generate income in multiple ways is a smart strategy.`,
          ],
          image: `/ue-assets/money/l12-s3-streams.webp`,
          imageCaption: `Multiple streams. Built gradually. Same path many entrepreneurs follow.`,
          vocab: [
            { word: `income stream`,
              definition: `A single source of income. Common income streams include: full-time job, part-time work, freelancing, business ownership, investments, and royalties. Many modern workers have multiple income streams at once.`,
              audioPrompt: `An income stream is a single source of income, {name}. Common income streams include a full-time job, part-time work, freelance projects, owning a business, investments that pay dividends, or royalties from creative work. In the old economy, most people had only one income stream. In the modern economy, especially among younger workers, having multiple income streams is becoming more common. Multiple streams provide both safety (if one disappears, others continue) and faster wealth building (more total income means a bigger gap to save).` },
            { word: `side hustle`,
              definition: `A small income-generating activity done alongside a main job. Freelance work, selling products online, tutoring, or creating content. Side hustles are one of the most common ways people build multiple income streams.`,
              audioPrompt: `A side hustle is a small income-generating activity done alongside your main job or school, {name}. Selling handmade crafts online. Tutoring younger students. Walking dogs in the neighborhood. Freelancing on evenings and weekends. Side hustles are one of the most common ways people build multiple income streams. They're also low-risk ways to try entrepreneurship while keeping a steady income. Many successful businesses started as side hustles that grew large enough to become someone's primary income. Your generation has more tools to start side hustles than any previous generation.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Skills That Will Matter Most`,
          paragraphs: [
            `Predicting the FUTURE OF WORK exactly is impossible. But some skills look very valuable regardless of how things change. CRITICAL THINKING (analyzing problems carefully). CREATIVITY (combining ideas in new ways). COMMUNICATION (explaining clearly, listening well). ADAPTABILITY (learning new things as the world changes). EMOTIONAL INTELLIGENCE (working well with others). DIGITAL LITERACY (using technology effectively). LEARNING HOW TO LEARN (because you'll keep needing to learn new things forever). These are sometimes called META-SKILLS because they help with almost any specific job.`,
            `Specific SKILLS (like coding, design, writing, video editing, finance) also matter, but specific skills go in and out of fashion. The meta-skills are durable. Someone who has them can pick up new specific skills as the world changes. Ace's note: the most valuable thing about Coreverse is that the WHOLE curriculum is designed to develop both meta-skills AND specific skills. The lessons on Inner World, Future Skills, Cosmos, and even this Money & Business subject are designed to help you become someone who can adapt to whatever the future brings. Most of your peers won't have this foundation. You will.`,
          ],
          image: `/ue-assets/money/l12-s4-skills.webp`,
          imageCaption: `Meta-skills: critical thinking, creativity, communication, adaptability. Always valuable.`,
          vocab: [
            { word: `passive income`,
              definition: `Income that continues to come in with little ongoing work, like royalties from a book, rental income from real estate, or dividends from investments. Different from "active" income that requires you to keep working.`,
              audioPrompt: `Passive income is income that continues to come in with little ongoing work, {name}. Examples include royalties from a book you wrote, rental income from real estate you own, or dividends from investments. Different from active income, which requires you to keep working to earn it. Salary is active income. A subscription business creates partially passive income (the system runs without you doing the same work every day). Truly passive income usually requires a lot of work to set up first. After that, it generates money even while you sleep.` },
            { word: `adaptability`,
              definition: `The ability to adjust to new situations, learn new skills, and thrive when things change. One of the most consistently valuable meta-skills in a rapidly changing world and job market.`,
              audioPrompt: `Adaptability is the ability to adjust to new situations and learn new skills as the world changes, {name}. It's one of the most valuable qualities you can develop. Specific skills go in and out of demand. Industries rise and fall. Technologies appear and disappear. Someone with strong adaptability can learn new tools, pivot to new fields, and thrive through change. Someone without it can become stuck. Adaptability isn't just about being flexible — it includes staying curious, tolerating uncertainty, and being willing to start over when necessary.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four work situations. For each one, identify what kind of work it is: TRADITIONAL EMPLOYMENT (full-time job, one employer), GIG WORK (independent projects for multiple clients), or MULTIPLE INCOME STREAMS (combining different kinds of work at once)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `traditional`,  label: `Traditional Employment`,    color: `#60A5FA`, description: `Full-time job at one company, with one boss, one paycheck, and one set of benefits.` },
            { id: `gig`,           label: `Gig Work`,                  color: `#FBBF24`, description: `Independent projects for many clients. No single employer. Variable income.` },
            { id: `multiple`,     label: `Multiple Income Streams`,   color: `#34D399`, description: `Combining different kinds of work at once. Often includes some employment AND some freelance or business income.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Person #1`,
              clues: [
                { text: `Sarah works at a marketing firm 9-5, Monday through Friday.` },
                { text: `She has one boss, gets one paycheck every two weeks, and has health insurance through the company.` },
                { text: `She doesn't do any other paid work.` },
              ],
              correctAnswer: `traditional`,
              realWorldExample: `Many adults work in traditional employment.`,
              explanation: `One employer, one paycheck, full benefits, full-time hours. Pure traditional employment. This was the dominant model for most of the 20th century.`,
            },
            {
              id: `case-2`,
              caseTitle: `Person #2`,
              clues: [
                { text: `David drives for Uber and Lyft on weekends.` },
                { text: `He delivers for DoorDash during the week.` },
                { text: `He has no single employer. He's an independent contractor with multiple apps.` },
              ],
              correctAnswer: `gig`,
              realWorldExample: `Many people earn full incomes through gig apps.`,
              explanation: `Multiple apps, no single employer, all independent contractor work. Pure gig work. Some gig workers are part-time. David's doing it full-time. Both are valid.`,
            },
            {
              id: `case-3`,
              caseTitle: `Person #3`,
              clues: [
                { text: `Maya works 4 days a week as a school teacher.` },
                { text: `She also writes a children's book that pays royalties.` },
                { text: `She tutors 3 students online on evenings, and she sells art on Etsy.` },
              ],
              correctAnswer: `multiple`,
              realWorldExample: `This pattern is becoming more common, especially among educators and creatives.`,
              explanation: `Four different income streams: salary, royalties, tutoring fees, and Etsy sales. Pure multiple income streams. Each stream is moderate, but together they create both safety and earning power.`,
            },
            {
              id: `case-4`,
              caseTitle: `Person #4 — The Tricky One`,
              clues: [
                { text: `James is a freelance graphic designer. He has 5-7 regular clients who give him steady work.` },
                { text: `He's been with most of them for years.` },
                { text: `He doesn't have a single employer, but his income is actually pretty predictable.` },
              ],
              correctAnswer: `gig`,
              realWorldExample: `Established freelancers often have stable client bases.`,
              explanation: `Tricky because his income feels stable (like traditional employment). But he has NO single employer. He's a freelancer with multiple clients. That's gig work. Pure gig work. Lesson: stability isn't the dividing line between gig and traditional. The relationship to employers is. James is genuinely a freelancer — multiple clients, no benefits, his own business — even though his work has the predictability of a regular job.`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What's the GIG ECONOMY?`,
              options: [
                `Music industry`,
                `A job market where many people work as independent contractors or freelancers, doing short projects for multiple clients`,
                `Concert work`,
                `Only ride-sharing`,
              ],
              correctIndex: 1,
              explanation: `Gig economy means independent work for multiple clients, instead of one job for one employer. Uber drivers, freelance designers, food couriers, online tutors. Apps like Uber, DoorDash, and Upwork have made it easier.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `Roughly how many U.S. workers do AT LEAST SOME gig work today?`,
              options: [
                `Less than 1%`,
                `Between 30% and 40% (estimates vary)`,
                `Less than 5%`,
                `Everyone`,
              ],
              correctIndex: 1,
              explanation: `30-40% of U.S. workers do at least some gig work, even if it's part-time. The gig economy has grown dramatically in the past 15 years and continues growing. For many people, gig work supplements a regular job rather than replacing it.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `What are the BIG TRENDS reshaping work today?`,
              options: [
                `Nothing is changing`,
                `Remote work, automation, freelance platforms, more job-switching, and AI`,
                `Only longer hours`,
                `Just higher pay`,
              ],
              correctIndex: 1,
              explanation: `Several big trends are happening at once. Remote work exploded after 2020. Automation changes what jobs exist. Freelance platforms make selling skills easier. People switch jobs more often. AI will change things further. By 2050, work may look very different.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What does FREELANCE mean?`,
              options: [
                `Free work`,
                `Working for yourself, doing projects for multiple clients, instead of working for one employer`,
                `Volunteer work`,
                `Cheap labor`,
              ],
              correctIndex: 1,
              explanation: `Freelancers set their own schedules, choose their own clients, and pick their own prices. They also handle their own taxes and have no employer benefits. Common in design, writing, coding, consulting, photography.` },

            { id: `l12-q5`, format: `true-false`,
              question: `True or false: Many modern workers have MULTIPLE INCOME STREAMS at once — a job plus freelancing plus side businesses or investments.`,
              correctAnswer: true,
              explanation: `True. Multiple income streams is increasingly common, especially among younger workers. It provides safety (if one disappears, others continue) and faster wealth building (more total income, bigger gap to save).` },

            { id: `l12-q6`, format: `multiple-choice`,
              question: `What's PASSIVE INCOME?`,
              options: [
                `Being lazy`,
                `Income that keeps coming in with little ongoing work: royalties, rentals, or dividends`,
                `Free money`,
                `Active income`,
              ],
              correctIndex: 1,
              explanation: `Passive income comes from systems you've already built. Royalties from a book. Rent from property. Dividends from investments. Truly passive income usually takes a lot of work to set up, but then keeps generating money. We'll cover this more in L19.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `What META-SKILLS will likely matter regardless of how the future of work changes?`,
              options: [
                `Only coding`,
                `Critical thinking, creativity, communication, adaptability, emotional intelligence, digital literacy, and learning how to learn`,
                `Just hard work`,
                `Memorization`,
              ],
              correctIndex: 1,
              explanation: `Specific skills come and go. Meta-skills last. Critical thinking, creativity, communication, adaptability — these help with almost any job. Someone who has them can pick up new specific skills as the world changes.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `What's the most likely TRUTH about your future work life?`,
              options: [
                `It will be exactly like your parents' work`,
                `It will look different from anything that came before — more remote, more flexible, more multiple income streams, and reshaped by AI`,
                `You'll have one job for life`,
                `Work won't exist`,
              ],
              correctIndex: 1,
              explanation: `Your work life will probably look different from your parents' in several ways. More flexibility, more remote work, more multiple income streams, more job-switching, more freelancing, and reshaped by AI. The specifics aren't clear, but the change is. Adapting well requires building meta-skills now.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you could choose between (a) one full-time job at a stable company, (b) freelancing with multiple clients, or (c) a mix of part-time work + side businesses — which appeals to you most? Why?` },
            { id: `r2`, text: `Pick one META-SKILL (critical thinking, creativity, communication, adaptability, emotional intelligence, digital literacy, learning how to learn). How are you developing it right now, even without realizing it?` },
            { id: `r3`, text: `Your grandparents probably worked at ONE company their whole lives. Your parents probably switched companies every 5-10 years. How do you think work will look by the time you're an adult?` },
            { id: `r4`, text: `If you could build a small income stream RIGHT NOW (as a kid), what would it be? Selling something? Tutoring? Creating something online?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `The future of work is one of the biggest topics in economics, education, and policy right now. Nobody knows exactly how it will unfold, but the directions are clear: more flexibility, more independence, more multiple income streams, more change overall. The kids who develop META-SKILLS now and stay curious about how the world is changing will be best positioned. The kids who memorize for grades alone may struggle when the rules change. Ace's note: Coreverse's whole curriculum is built around preparing you for this future. The Future Skills subject (Byte) goes deeper into many of these themes.`,
          familyAdventure: `Family Future-of-Work Conversation. As a family, talk about how WORK has changed across generations. What did grandparents do for work? What do parents do? How has the workplace changed in the past 20 years? What might it look like in another 20? No right answers — just thinking together. This kind of conversation builds awareness of the world your kids will enter.`,
          creativePrompt: {
            intro: `Imagine you're 25 in the year 2041 (your future self). Describe a typical week of your work life.`,
            floor: `Write at least 5 sentences. Cover what kinds of work you do (job? freelance? business?), how many income streams you have, and what your typical week looks like.`,
            stretch: `Write 8 to 10 sentences. Include multiple income streams, remote vs in-person work, what skills you use most, and one technology that's part of your daily work that doesn't exist now.`,
            open: `Write as much as you want. Build a full snapshot of your future work life. Cover income streams, work locations, technology, what you find satisfying, and how it's different from your parents' work life. Be imaginative AND realistic.`,
            frames: [
              `In 2041, I'm 25 years old, and my typical week looks like ___.`,
              `My main income stream is ___.`,
              `I also earn from ___.`,
              `Most of my work happens ___ (location).`,
              `Compared to my parents' work life, the biggest difference is ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain the gig economy, the trends reshaping work, the value of multiple income streams, and the meta-skills that will matter most. Next lesson: a controversial topic many adults still don't really understand. CRYPTOCURRENCY. What it is, how it works, and what to think of it. — Ace.`,
          badge: `future-of-work`,
          badgeName: `Future of Work`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
