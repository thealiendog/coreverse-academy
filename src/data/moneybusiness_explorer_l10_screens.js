// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 10
// "What Is a Job and How Do You Get One?"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l10_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-10',
      title:     `What Is a Job and How Do You Get One?`,
      duration:  12,
      xpReward:  50,
      badge:     'career-explorer',
      badgeName: `Career Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every adult you know has or had a job. But how does someone actually GET a job? What are employers looking for? And here's a bigger question — is a job the only way to earn money?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is a Job?`,
          paragraphs: [
            `A job is an agreement: you do work for a person or company, and they pay you money in exchange.`,
            `The person or company paying you is the employer. You are the employee. This trade — work for money — is how most adults earn their income.`,
          ],
          image:        '/explorer-assets/money-business/l10-s1-employer-employee.png',
          imageCaption: `A job is a trade — work for money. Employer pays. Employee works.`,
          vocab: [
            { word: 'employer', definition: `A person or company that hires workers and pays them. Employers create jobs and set what the work is.`, audioPrompt: `Employer — a person or company that hires workers and pays them. Employers create jobs and set what the work is.` },
            { word: 'employee', definition: `A person who works for an employer in exchange for pay. Employees do the work, employers do the paying.`, audioPrompt: `Employee — a person who works for an employer in exchange for pay. Employees do the work, employers do the paying.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Hourly vs Salary`,
          paragraphs: [
            `Jobs pay in one of two ways. Hourly wages pay you for each hour you work — more hours, more pay.`,
            `A salary is a fixed annual amount paid regularly. Same paycheck whether you worked 35 hours or 50. Each has trade-offs.`,
          ],
          image:        '/explorer-assets/money-business/l10-s2-hourly-salary.png',
          imageCaption: `Hourly tracks each hour. Salary pays the same no matter what. Two ways jobs pay.`,
          vocab: [
            { word: 'hourly wage', definition: `Pay calculated by the hour. Work more hours, earn more. The number on your paycheck depends on hours worked.`, audioPrompt: `Hourly wage — pay calculated by the hour. Work more hours, earn more. The number on your paycheck depends on hours worked.` },
            { word: 'salary',      definition: `A fixed annual amount paid regularly, regardless of exact hours worked. Steady paycheck — but no extra pay for extra hours.`, audioPrompt: `Salary — a fixed annual amount paid regularly, regardless of exact hours worked. Steady paycheck, but no extra pay for extra hours.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `How to Apply`,
          paragraphs: [
            `Getting a job follows a specific process. You start with a resume — a document listing your skills, experience, and accomplishments.`,
            `Then a cover letter explaining why you want this specific job. Then an interview to meet you. Then, if it all goes well, a job offer.`,
          ],
          image:        '/explorer-assets/money-business/l10-s3-application-flow.png',
          imageCaption: `Resume → cover letter → interview → offer. The four steps to a job.`,
          vocab: [
            { word: 'resume',    definition: `A document listing your skills, experience, and accomplishments. It's the first thing an employer sees — your written introduction.`, audioPrompt: `Resume — a document listing your skills, experience, and accomplishments. It's the first thing an employer sees, your written introduction.` },
            { word: 'interview', definition: `A conversation where an employer asks you questions to decide if you're right for the job.`, audioPrompt: `Interview — a conversation where an employer asks you questions to decide if you're right for the job.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `What Employers Want`,
          paragraphs: [
            `When employers hire, they look for four things. Reliability (will you show up?), skills (can you do the work?), attitude (are you positive?), and problem-solving.`,
            `Reliability comes first. An employer can teach skills. They can't teach showing up on time.`,
          ],
          image:        '/explorer-assets/money-business/l10-s4-what-employers-want.png',
          imageCaption: `Reliability, skills, attitude, problem-solving. Reliability matters most.`,
          vocab: [
            { word: 'reliability',     definition: `Doing what you say you will, when you said you would. The single most valuable quality in any employee.`, audioPrompt: `Reliability — doing what you say you will, when you said you would. The single most valuable quality in any employee.` },
            { word: 'problem-solving', definition: `Figuring out solutions on your own without being told step-by-step. Employers love people who solve problems instead of just reporting them.`, audioPrompt: `Problem-solving — figuring out solutions on your own without being told step-by-step. Employers love people who solve problems instead of just reporting them.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Attitude Beats Experience`,
          paragraphs: [
            `Here's something that surprises most people: a great attitude often beats more experience.`,
            `An employer choosing between an experienced grump and an eager, reliable, easy-to-teach person will often pick the latter. Skills can be taught. Attitude is much harder to change.`,
          ],
          image:        '/explorer-assets/money-business/l10-s5-attitude-wins.png',
          imageCaption: `Skills can be taught. Attitude can't. Employers know this — and hire accordingly.`,
          vocab: [
            { word: 'attitude',   definition: `How you approach work and people. Positive, curious, willing to learn — these traits matter more than most people realize.`, audioPrompt: `Attitude — how you approach work and people. Positive, curious, willing to learn — these traits matter more than most people realize.` },
            { word: 'experience', definition: `Time spent doing something. Experience is useful, but it isn't the only thing employers care about — and sometimes not the most important.`, audioPrompt: `Experience — time spent doing something. Experience is useful, but it isn't the only thing employers care about, and sometimes not the most important.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Beyond Jobs`,
          paragraphs: [
            `A job isn't the only way to earn money. You can start a business. Or freelance — work for many clients, not one employer.`,
            `Or invest — put money to work so it grows. Or create things and sell them. The most powerful earners build many income streams.`,
          ],
          image:        '/explorer-assets/money-business/l10-s6-many-paths.png',
          imageCaption: `Jobs are one path. Business, freelancing, investing, creating — all real paths too.`,
          vocab: [
            { word: 'freelance',     definition: `Working for multiple clients on your own instead of one employer. More flexibility, more freedom — but you find your own work.`, audioPrompt: `Freelance — working for multiple clients on your own instead of one employer. More flexibility, more freedom, but you find your own work.` },
            { word: 'income stream', definition: `A source of money flowing in. A job is one income stream. The most financially powerful people build several streams.`, audioPrompt: `Income stream — a source of money flowing in. A job is one income stream. The most financially powerful people build several streams.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which step of the job-getting process it describes!`,
          guideText:     `Getting a job follows a specific sequence — from your first written application through to a formal offer. Each of these four descriptions shows one step in that process. Can you match them to the right stage?`,
          columnHeaders: [`What's Happening?`, `Job-Getting Step`],
          items: [
            { image: 'l10-game-resume.png',       label: `A document listing your skills, past experience, and accomplishments for an employer to review before meeting you.`,      correctMatch: 'resume',       objectPosition: 'center 50%', matchPhrase: `Resume! The resume is the first step — it's your written introduction to an employer before you've ever met. A strong resume is clear, honest, and tailored to the specific job. It answers the employer's first question: "Is this person worth my time to talk to?" A great resume gets you an interview. A weak one ends the process before it starts.` },
            { image: 'l10-game-cover-letter.png', label: `A written message explaining why you want this specific job and why you'd be a great fit for it.`,                       correctMatch: 'cover-letter', objectPosition: 'center 50%', matchPhrase: `Cover letter! The cover letter accompanies your resume and adds personality to the package. While the resume lists facts, the cover letter tells a story — why this job, why you, why now. A good cover letter shows enthusiasm and makes you feel like a real person, not just a list of qualifications on a page.` },
            { image: 'l10-game-interview.png',    label: `A face-to-face or video conversation where the employer asks you questions to see if you're a good match for the role.`, correctMatch: 'interview',    objectPosition: 'center 50%', matchPhrase: `Interview! The interview is where the employer meets you in person (or by video) and gets to know you beyond the paper. Common questions cover your skills, how you've handled challenges, and why you want the job. Your job is to listen carefully, answer honestly, and show the reliability, skills, and attitude that make great employees.` },
            { image: 'l10-game-job-offer.png',    label: `An official message from the employer saying they'd like to hire you, with your pay and start date included.`,           correctMatch: 'job-offer',    objectPosition: 'center 50%', matchPhrase: `Job offer! The offer is the finish line — the employer formally invites you to join the team. It specifies your title, pay, start date, and sometimes benefits. You can accept, negotiate (ask for better terms), or decline. Getting a job offer means your resume, cover letter, and interview all worked. The whole process from application to offer can take days or months, depending on the role.` },
          ],
          buckets: [
            { id: 'resume',       label: `📄 Resume`,       color: '#60A5FA' },
            { id: 'cover-letter', label: `✉️ Cover Letter`, color: '#818CF8' },
            { id: 'interview',    label: `💬 Interview`,    color: '#F59E0B' },
            { id: 'job-offer',    label: `✅ Job Offer`,    color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about jobs and how to get them. Answer all 6 questions to earn your Career Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the difference between an employer and an employee?`,
              options:      [`The employer always works more hours than the employee`, `The employer pays for work — the employee does the work`, `Employers are always older than employees`, `Employees own the company they work for`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Name three things employers look for when hiring.`,
              options:      [`Age, height, and favorite color`, `Reliability, skills, and attitude`, `How many friends you have`, `Where you went to school`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Besides getting a job, what is one other way to earn money?`,
              options:      [`Waiting for someone to give it to you`, `Starting a business, freelancing, investing, or creating and selling things`, `Winning the lottery`, `Finding money on the ground`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `A job is an agreement where you do work for an employer and they pay you money in return.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A document that lists your skills, experience, and accomplishments to share with a potential employer is called a ___.`,
              options:      [`resume`, `budget`, `cover letter`, `contract`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is freelancing?`,
              options:      [`Working for one company under a long-term permanent contract`, `Doing paid work for multiple different clients instead of a single employer`, `A type of job that only takes place outdoors`, `Working for free in order to gain experience`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Ask a parent or family friend: what was the very first job you ever had, and how did you get it? Every story is different, and every one teaches something.`,
          familyAdventure: `Ask a parent if you can interview them about their job. Ask: How did you get your job? What do you do every day? What skills do you use most? What do you like best about it? What would you change? Take notes like a real journalist. Then look up one job you're curious about — what skills does it require, and what does it pay?`,
          creativePrompt:  `Write a resume for yourself right now. Include: your name, a one-sentence description of what you're good at, a list of your skills (drawing, reading, cooking, sports — anything real), any experience you have (babysitting, helping at home, school projects), and a sentence about what kind of role you're looking for. Now write a three-sentence cover letter for a job you'd actually want. What would you say?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'career-explorer',
          badgeName: `Career Explorer`,
          message:   `Excellent work, {name}! You now know what a job really is, how to get one, and — most importantly — that a job isn't the only path. The most powerful earners understand all their options. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l10_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L10] Loaded: "What Is a Job and How Do You Get One?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l10-s1-employer-employee.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-s2-hourly-salary.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-s3-application-flow.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-s4-what-employers-want.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-s5-attitude-wins.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-s6-many-paths.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L10] employer-employee: ${r1.ok}, hourly-salary: ${r2.ok}, application-flow: ${r3.ok}, what-employers-want: ${r4.ok}, attitude-wins: ${r5.ok}, many-paths: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L10] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l10_screens;
