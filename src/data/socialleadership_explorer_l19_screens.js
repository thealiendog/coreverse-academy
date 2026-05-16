// ─────────────────────────────────────────────────────────────────────────────
// Social & Leadership  |  L19 — Starting a Club or Project
// Age band : explorers (6–8)   Guide: valor
// ─────────────────────────────────────────────────────────────────────────────

const SL_L19 = {
  ageBand:   `explorers`,
  subjectId: `leadership`,
  guide:     `valor`,

  lessons: [
    {
      id:        `sl-6-8-19`,
      title:     `Starting a Club or Project`,
      duration:  12,
      xpReward:  50,
      badge:     `founder`,
      badgeName: `Founder`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Think about something you care about, {name} — something in your school, your neighbourhood, or your world that you wish someone would do something about. Here's a thought: what if that someone is you? Every club, campaign, and community project you've ever benefited from was started by one person who looked at a problem and decided to begin. Today we're going to talk about how that actually works — not the inspirational version, but the practical one. What do you do first? How do you get other people on board? How do you keep going when it gets hard? Let's find out.`,
          headline: `Starting a Club or Project`,
          subtitle: `Every organisation you've ever admired started as one person who decided to begin`,
          visual: `/explorer-assets/leadership/l19-welcome.png`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Starting Matters`,
          paragraphs: [
            `When you start something, you learn what no class can teach.`,
            `How to communicate vision. How to handle setbacks. How to organize people and resources. What you're capable of when there's no one to do it for you.`,
          ],
          image: `/explorer-assets/leadership/l19-s1-why-starting-matters.png`,
          imageCaption: `Starting something teaches what nothing else can — including what you're actually capable of.`,
          vocab: [
            { word: `initiative`, definition: `The willingness to begin without being asked. Taking action without waiting for perfect conditions or permission.`,
              audioPrompt: `Initiative means you don't wait for someone else to start, {name}. You see a need, you feel the pull, and you begin. It doesn't require permission. It doesn't require a perfect plan. It just requires the decision to take the first step when something matters to you. That decision is itself the first act of leadership.` },
            { word: `vision`,     definition: `A clear picture of what you're trying to create. What you need to communicate clearly so others want to join.`,
              audioPrompt: `Vision is how you bring others with you, {name}. If your idea only lives in your head, it stays there. When you can explain it clearly enough that someone else feels the pull — when they say "I want to be part of that" — you've crossed from having an idea to building something. That ability to communicate your vision is where projects actually begin.` },
            { word: `confidence`, definition: `Belief in your own capability. Built most reliably through the experience of actually starting and persisting through something real.`,
              audioPrompt: `Real confidence isn't built from preparation, {name} — it's built from doing. Every time you start something and stay with it through the hard parts, your sense of what you're capable of grows. No amount of planning gives you what that experience does. Starting is the confidence-builder. That's why beginning — even small — matters so much.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Start with Purpose`,
          paragraphs: [
            `Before anything else, get clear on PURPOSE.`,
            `What problem does this solve? Who does it help? Why does it matter? When the purpose is clear, every other decision — name, plan, who to recruit — becomes much easier.`,
          ],
          image: `/explorer-assets/leadership/l19-s2-start-with-purpose.png`,
          imageCaption: `Purpose first. Everything else — name, plan, team, launch — is downstream of getting this one thing clear.`,
          vocab: [
            { word: `purpose`,    definition: `The reason your project exists. The problem it solves or the experience it creates — the "why" that draws people in.`,
              audioPrompt: `Purpose is the first question, {name}. Before the name, before the plan, before anything else: what problem does this solve? Who does it help? Why does it matter? When your purpose is clear, everything else — who to recruit, what to do first, how to explain it — becomes much easier to figure out. Start there.` },
            { word: `clarity`,    definition: `A clear sense of what you're building and why. Makes every later decision easier — and helps others understand fast.`,
              audioPrompt: `Clarity is contagious, {name}. When you can explain what you're building in two sentences, other people pick it up quickly. When it takes a paragraph and still feels fuzzy, no one quite knows how to help. The clearer your purpose is in your own head, the more easily it travels. That clarity is one of the first deliverables of a leader.` },
            { word: `foundation`, definition: `What everything else gets built on. Purpose is the foundation of every project — get this wrong and the rest wobbles.`,
              audioPrompt: `Purpose is the foundation, {name} — and like any foundation, the parts you build on top of it depend completely on its strength. If your purpose is vague, your decisions later will feel vague too. If your purpose is sharp and meaningful, you'll know what to do at every fork in the road. Spend time on the foundation. You'll save tenfold later.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Find Your Founding Team`,
          paragraphs: [
            `You don't need a crowd. You need the right two to five people.`,
            `People who genuinely believe in what you're building and will show up when it's hard. A small committed core is worth more than a hundred mildly interested supporters.`,
          ],
          image: `/explorer-assets/leadership/l19-s3-founding-team.png`,
          imageCaption: `Two to five who genuinely believe. That tiny group is worth far more than a hundred mildly interested supporters.`,
          vocab: [
            { word: `founding team`, definition: `The small group of two to five who share your vision and commit to building it with you from the very beginning.`,
              audioPrompt: `Your founding team is everything in the early days, {name}. Not big — just the right people. Two to five who genuinely believe in what you're building and will show up when it's hard. Find those people before you try to find hundreds more. A small committed group at the start is worth far more than a crowd who are only mildly interested.` },
            { word: `core`,          definition: `The central few who carry a project through its early stretch. Small, committed — and the heartbeat of everything that follows.`,
              audioPrompt: `Every project that lasts has a core, {name} — a handful of people who will keep showing up even when energy drops elsewhere. That core is what carries the project through the hardest middle months. Find it. Protect it. The core matters more than the size of the audience or the polish of the launch. Without it, nothing holds.` },
            { word: `commitment`,    definition: `Real belief and follow-through. What you need from every member of your founding team — not enthusiasm alone.`,
              audioPrompt: `Enthusiasm is easy to find at the start, {name}. Commitment is rarer. Enthusiasm shows up to the first meeting. Commitment shows up to the seventh, when the novelty is gone and the work is just work. Look for commitment in your founding team. Test it. Enthusiasm alone, without commitment underneath, will leave you alone when things get hard.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Launch Before You're Ready`,
          paragraphs: [
            `The biggest mistake new founders make: waiting until everything is perfect.`,
            `It never will be. Launch a small version. Learn from what actually happens. The first meeting, the first event, the first post — that's when an idea becomes real.`,
          ],
          image: `/explorer-assets/leadership/l19-s4-launch-before-ready.png`,
          imageCaption: `A small real start beats a perfect imaginary one. Every time. The information from doing is worth more than any amount of additional planning.`,
          vocab: [
            { word: `launch`,        definition: `The moment you begin. Imperfect, real, the only thing that actually makes a project exist outside your head.`,
              audioPrompt: `Launching means you stop planning and start doing, {name}. Not because you're ready — you probably won't feel ready. But because a small real beginning is infinitely more valuable than a perfect plan that never moves. The first meeting, the first event, the first post — that's the launch. And that moment is when something stops being an idea and becomes real.` },
            { word: `perfectionism`, definition: `Waiting for ideal conditions before starting. The most common reason good ideas never become real projects.`,
              audioPrompt: `Perfectionism is one of the most polite ways to never start, {name}. It sounds responsible — "I just want it to be ready." It feels safer than launching. But waiting for perfect almost always means waiting forever. The version you launch will be imperfect. That's not a problem. That's the point. Imperfect and real beats perfect and imaginary every single time.` },
            { word: `ready`,         definition: `A feeling you may never have. The most successful founders launched anyway — and learned by doing.`,
              audioPrompt: `Most people wait to feel ready, {name} — and that feeling rarely arrives on its own. Confidence comes from doing, not from preparing more. The people who started something you admire didn't feel ready either. They just decided that the cost of waiting was higher than the cost of launching imperfectly. Then they started. The feeling of readiness followed.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Small Wins Beat Big Plans`,
          paragraphs: [
            `The hard middle comes after the excitement fades.`,
            `The antidote is SMALL VISIBLE WINS. Finish something quickly. Celebrate it. Share it. Three people at a meeting, done well, is real progress. Momentum is built one win at a time.`,
          ],
          image: `/explorer-assets/leadership/l19-s5-small-wins.png`,
          imageCaption: `Small visible wins keep momentum alive through the hard middle stretch when the launch excitement is gone and the results haven't arrived yet.`,
          vocab: [
            { word: `momentum`, definition: `The forward energy of a project. Built through visible progress — lost through inaction or too long without results.`,
              audioPrompt: `Momentum is the feeling that this is actually happening, {name}. When it's there, people lean in. When it disappears, people drift away. The most reliable way to build it is through small completed things — something done, celebrated, and shared. Every win, however small, tells the team: we're moving. That feeling is what keeps people with you through the hard middle.` },
            { word: `win`,      definition: `A visible completed achievement that shows real progress. Doesn't have to be big — has to be real.`,
              audioPrompt: `A win doesn't have to be big to matter, {name}. It just has to be real. Finishing something. Showing up consistently for a month. Having three people at the meeting instead of one. When people see progress — something done, something tangible — they believe in what you're building. That belief is what carries projects through the hard parts.` },
            { word: `setback`,  definition: `A normal obstacle or disappointment in a project. Expected — not evidence that the idea was wrong.`,
              audioPrompt: `Valor's truth: setbacks aren't signs that you should stop, {name}. They're the price of entry for anyone who starts something real. Low turnout at the first meeting. A founding team member who drops out. An event that doesn't go as planned. These moments aren't failures. They're information — and they're the training ground for the kind of resilience that actually makes projects succeed.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Hand Off When It's Time`,
          paragraphs: [
            `Not every project should run forever. Some need to evolve beyond you.`,
            `Great leaders hand off with generosity, not possessiveness. The goal was never to be in charge forever. It was to create something valuable. Knowing when to step back is its own form of leadership.`,
          ],
          image: `/explorer-assets/leadership/l19-s6-hand-off.png`,
          imageCaption: `Handing off with generosity — not possessiveness — is its own form of leadership. The goal was the project, not the title.`,
          vocab: [
            { word: `transition`, definition: `Deliberately passing leadership of a project to someone who can take it further. A sign of wisdom, not failure.`,
              audioPrompt: `A transition done well is one of the most mature things a leader can do, {name}. It means you care more about what the project becomes than about staying in charge of it. Finding someone who can take it further, handing over with full support, and stepping back — that's not giving up. That's building something that lasts beyond you.` },
            { word: `possessive`, definition: `Holding onto a project beyond the point where it serves the project. The opposite of the generosity great handoffs require.`,
              audioPrompt: `Possessiveness in leadership says: this is mine, {name}. It can quietly strangle the very thing you built. When you can't let go — even when someone else could take the work further — the project suffers for it. The goal was never to own it. The goal was to build something valuable. That goal doesn't require you to be in charge forever.` },
            { word: `legacy`,     definition: `What you leave behind when you step away. Not the title — but the impact and what the project became.`,
              audioPrompt: `A legacy is what continues after you're no longer at the helm, {name}. Not the applause you received or the credit you were given — but the thing you built and what it became. Leaders who think about legacy hand off generously, invest in others' growth, and care more about what the work becomes than about what it does for their reputation. That's the highest form of leadership.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `launches`,
              label: `🚀 Gets a Project Off the Ground`,
              color: `#34D399`,
            },
            {
              id: `stuck`,
              label: `🛑 Keeps It Stuck`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l19-g1`,
              image: `l19-game-1.png`,
              label: `You launch a small first version of your club even though it isn't perfect — so you can learn from what actually happens.`,
              matchPhrase: `Starting before everything is perfect is how you find out what actually works — no amount of planning replaces that.`,
              correctMatch: `launches`,
            },
            {
              id: `l19-g2`,
              image: `l19-game-2.png`,
              label: `Only three people show up to your first meeting — but you make it count and celebrate what you've started.`,
              matchPhrase: `Small wins matter. Three people who feel good about the first meeting is a better start than ten who didn't.`,
              correctMatch: `launches`,
            },
            {
              id: `l19-g3`,
              image: `l19-game-3.png`,
              label: `You keep waiting until you have the perfect name, the perfect plan, and the perfect team before doing anything.`,
              matchPhrase: `Waiting for perfection before starting usually means never starting. A small real beginning beats a perfect imaginary one.`,
              correctMatch: `stuck`,
            },
            {
              id: `l19-g4`,
              image: `l19-game-4.png`,
              label: `After one difficult meeting, you decide the whole idea was wrong and walk away.`,
              matchPhrase: `Hard moments are part of every project — they're not evidence the idea is wrong. They're just the hard middle.`,
              correctMatch: `stuck`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l19-q1`,
              format: `multiple-choice`,
              question: `Why is starting a club or project one of the best ways to develop leadership?`,
              options: [
                `Because it looks impressive on school applications`,
                `It builds skills — vision, communication, organisation, persistence — that can't be learned in a classroom`,
                `Because groups always accomplish more than individuals working alone`,
                `Because it teaches you how to manage other people's time`,
              ],
              correctIndex: 1,
              explanation: `Starting something develops skills that can only be built by doing: communicating a vision to real people, handling real setbacks, organising actual resources. No amount of reading or preparation gives you the same thing.`,
            },
            {
              id: `l19-q2`,
              format: `multiple-choice`,
              question: `What is the biggest mistake people make when starting something new?`,
              options: [
                `Starting without telling enough people about it`,
                `Waiting until everything is perfect before launching`,
                `Not having enough funding or resources to begin`,
                `Starting with too many people on the founding team`,
              ],
              correctIndex: 1,
              explanation: `Waiting for perfect conditions is how most good ideas never happen. A small real start — imperfect, messy, with three people in a room — teaches you more than any amount of planning. Starting is what makes it real.`,
            },
            {
              id: `l19-q3`,
              format: `multiple-choice`,
              question: `What is the best antidote when a new project starts losing momentum?`,
              options: [
                `Adding more people to the team to share the workload`,
                `Making a bigger announcement to re-energise interest`,
                `Creating small visible wins that show people real progress is happening`,
                `Setting more ambitious goals to re-excite the team`,
              ],
              correctIndex: 2,
              explanation: `When motivation drops, people need evidence that the project is moving — something completed, something tangible, something they can point to. Small visible wins provide that proof and give everyone a reason to keep going.`,
            },
            {
              id: `l19-q4`,
              format: `true-false`,
              question: `Starting small and learning from real experience is more valuable than waiting until your plan is completely perfect.`,
              correctAnswer: true,
              explanation: `True. A small real beginning gives you information that no amount of planning can provide. You discover what works, what doesn't, and who actually shows up — and that information makes the next version better.`,
            },
            {
              id: `l19-q5`,
              format: `fill-blank`,
              question: `When a project has achieved its goal, a great leader is willing to hand off leadership with generosity rather than ___.`,
              options: [
                `possessiveness`,
                `pride`,
                `fear`,
                `disappointment`,
              ],
              correctIndex: 0,
              explanation: `The goal was to create something valuable — not to stay in charge forever. Handing off with generosity when the time is right is itself a form of leadership; it gives the project the best chance to grow beyond what you could do alone.`,
            },
            {
              id: `l19-q6`,
              format: `multiple-choice`,
              question: `What does a small visible win do for a project that is losing momentum?`,
              options: [
                `It proves to outsiders that the project deserves their support`,
                `It reduces the amount of work the rest of the team needs to do`,
                `It gives people evidence that real progress is happening, which reignites their motivation to keep going`,
                `It sets a new goal that resets everyone's expectations`,
              ],
              correctIndex: 2,
              explanation: `Progress fuels motivation. When people see that something is actually moving — even if it's a small step — it confirms that the project is real and worth continuing. That feeling is what carries teams through the hard middle.`,
            },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Every team, club, charity, and community project started with someone who decided to begin — without a perfect plan, without permission, and often without knowing exactly how it would go. Starting something real builds more confidence and skill than any amount of preparation alone.`,
          familyAdventure: `As a family, pick one real small thing you could start together — a neighbourhood project, a family tradition, something for a cause you care about. Write the six steps together and commit to doing the first one before the week is out.`,
          creativePrompt: `Think of one thing at school, in your neighbourhood, or with friends that you wish existed or could be better. Write down the purpose and the single first step you could take this week — then take it.`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You now know that every great team, movement, and project started with one person who decided to begin — without a perfect plan, without permission, and often without knowing exactly how it would turn out. You don't need to wait until you're ready. The beginning is the first act of leadership. Valor is so proud to share this with you.`,
          badge: `founder`,
          badgeName: `Founder`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default SL_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SL_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SL_L19.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = SL_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-LEADERSHIP-L19] Loaded: "Starting a Club or Project" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/leadership/l19-s1-why-starting-matters.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-s2-start-with-purpose.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-s3-founding-team.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-s4-launch-before-ready.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-s5-small-wins.png', { method: 'HEAD' }),
    fetch('/explorer-assets/leadership/l19-s6-hand-off.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-LEADERSHIP-L19] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-LEADERSHIP-L19] One or more magazine assets missing'));
}
