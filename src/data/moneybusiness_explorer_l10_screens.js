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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Job?`,
          paragraphs: [
            `A job is an agreement between two parties: you do work for a person or company, and they pay you money in exchange. Most jobs pay in one of two ways. Hourly wages pay you a set amount for each hour you work — the more hours you work, the more you earn. A salary is a fixed annual amount paid regularly, usually every two weeks, regardless of exactly how many hours you worked.`,
            `When you have a job, the person or company paying you is your employer. You are their employee. The employer sets the work that needs doing and agrees to pay for it. The employee agrees to do the work to a required standard. This exchange — work for money — is the foundation of how most people in the world earn their income.`,
            `Jobs come in enormous variety. A surgeon and a school bus driver both have jobs. A software engineer and a chef both have jobs. A professional athlete and a librarian both have jobs. What they share: an agreement to do specific work in exchange for specific pay. The content of the work, the pay, and the working conditions vary enormously — but the fundamental structure is the same.`,
          ],
          image:        '/explorer-assets/money-business/l10-magazine-what-is-a-job.png',
          imageCaption: `A job — an agreement to do work for an employer in exchange for wages or salary`,
          vocab: [
            { word: `employer`,  definition: `A person or organisation that hires workers and pays them for their work — employers create jobs, set requirements, and provide wages or salaries in exchange for employees' time and skills.`,  audioPrompt: `Employer — a person or organisation that hires workers and pays them for their work. Employers create jobs, set requirements, and provide wages or salaries in exchange for employees' time and skills.` },
            { word: `employee`,  definition: `A person who works for an employer in exchange for pay — employees agree to do specific work to a required standard in return for wages, a salary, and often additional benefits.`,           audioPrompt: `Employee — a person who works for an employer in exchange for pay. Employees agree to do specific work to a required standard in return for wages, a salary, and often additional benefits.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Do You Get a Job?`,
          paragraphs: [
            `Getting a job involves a specific process that most employers use. It begins with a resume — a document that summarises your skills, experience, and accomplishments. A good resume is clear, honest, and tailored to the specific job you're applying for. It's the first impression you make, often before anyone has met you in person.`,
            `Along with the resume, many employers ask for a cover letter — a short written message explaining why you want this specific job and why you believe you'd be a strong fit for it. The cover letter is your chance to show personality and enthusiasm in a way the resume alone can't. Together, the resume and cover letter are your application package.`,
            `If the employer finds your application interesting, they invite you to an interview — a conversation, in person or by video, where they ask questions to learn more about you. Common interview questions focus on your skills, your experience, how you handle challenges, and why you want to work there. If the interview goes well, the employer may make a job offer — a formal invitation to join, specifying your pay and start date.`,
          ],
          image:        '/explorer-assets/money-business/l10-magazine-getting-a-job.png',
          imageCaption: `Getting a job — resume, cover letter, interview, and offer: the four steps of the application process`,
          vocab: [
            { word: `resume`,       definition: `A document summarising a job applicant's skills, experience, and accomplishments — the first step in applying for a job, designed to show an employer why you're worth interviewing.`, audioPrompt: `Resume — a document summarising a job applicant's skills, experience, and accomplishments. The first step in applying for a job, designed to show an employer why you're worth interviewing.` },
            { word: `interview`,    definition: `A conversation between a job applicant and an employer to determine whether the applicant is a good fit for the role — interviews assess skills, personality, and cultural fit.`,       audioPrompt: `Interview — a conversation between a job applicant and an employer to determine whether the applicant is a good fit for the role. Interviews assess skills, personality, and cultural fit.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `What Employers Actually Look For`,
          paragraphs: [
            `When employers evaluate applicants, they're thinking about four things. Reliability: will this person actually show up, meet deadlines, and follow through on commitments? Skills: can this person do the work the job requires? Attitude: is this person positive, curious, and easy to work with? And problem-solving: can this person think independently and handle challenges without needing to be managed every minute?`,
            `Here's something that surprises many people: a great attitude often beats more experience. An employer who has to choose between someone experienced but difficult to work with and someone eager, reliable, and easy to teach will very often choose the latter. Skills can be taught. Attitude is much harder to change.`,
            `This means that even before you have significant work experience, you can already build the qualities that make employers want to hire you. Showing up on time, doing what you say you'll do, staying positive under pressure, and trying to solve problems rather than just report them — these behaviours distinguish great candidates from average ones at any level.`,
          ],
          image:        '/explorer-assets/money-business/l10-magazine-employers-look-for.png',
          imageCaption: `What employers look for — reliability, skills, attitude, and problem-solving, in that order of importance`,
          vocab: [
            { word: `reliability`,     definition: `Consistently doing what you say you will do, showing up when expected, and meeting your commitments — often the quality employers value most in employees at every level.`,                      audioPrompt: `Reliability — consistently doing what you say you will do, showing up when expected, and meeting your commitments. Often the quality employers value most in employees at every level.` },
            { word: `problem-solving`, definition: `The ability to identify a challenge and work out a solution independently — employers value problem-solvers because they create less work for managers and more value for the organisation.`, audioPrompt: `Problem-solving — the ability to identify a challenge and work out a solution independently. Employers value problem-solvers because they create less work for managers and more value for the organisation.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Beyond Jobs: Other Ways to Earn`,
          paragraphs: [
            `A job is one way to earn money — but it's not the only way, and it's worth knowing all your options. Starting a business means becoming your own employer. Instead of doing work for someone else's goals, you build something of your own, keep the profits, and make the decisions. This involves more risk than a job, but also more upside.`,
            `Freelancing means doing skilled work — writing, designing, coding, consulting, photographing — for multiple clients instead of a single employer. Freelancers have more flexibility and often higher hourly rates, but they're responsible for finding their own clients and don't have the stability of a regular salary.`,
            `Investing means putting money to work so it generates more money over time — through stocks, real estate, or other assets. Creating things — music, writing, art, online courses, software — and selling them repeatedly is another path. The most financially powerful people typically don't rely on a single income source; they build multiple streams over time. Understanding all your options early puts you ahead of most people.`,
          ],
          image:        '/explorer-assets/money-business/l10-magazine-beyond-jobs.png',
          imageCaption: `Beyond jobs — businesses, freelancing, investing, and creative work as other paths to earning`,
          vocab: [
            { word: `freelance`,          definition: `Working independently for multiple clients or projects rather than as a permanent employee of one organisation — freelancers control their own time but find their own work.`,                        audioPrompt: `Freelance — working independently for multiple clients or projects rather than as a permanent employee of one organisation. Freelancers control their own time but find their own work.` },
            { word: `income streams`,     definition: `Different sources of money flowing in — a salary from a job, profits from a business, and returns from investments are three separate income streams. Multiple streams reduce financial risk.`, audioPrompt: `Income streams — different sources of money flowing in. A salary from a job, profits from a business, and returns from investments are three separate income streams. Multiple streams reduce financial risk.` },
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
    fetch('/explorer-assets/money-business/l10-magazine-what-is-a-job.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-magazine-getting-a-job.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-magazine-employers-look-for.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l10-magazine-beyond-jobs.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L10] what-is-a-job: ${r1.ok}, getting-a-job: ${r2.ok}, employers-look-for: ${r3.ok}, beyond-jobs: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L10] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l10_screens;
