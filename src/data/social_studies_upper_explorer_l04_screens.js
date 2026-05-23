// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L04 — The Three Branches of Government
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.4.3-5 / D2.Civ.6.3-5 / D2.Civ.10.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (How a Bill Becomes a Law — multi-stage)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-04`,
      title: `The Three Branches of Government`,
      duration: 24,
      xpReward: 75,
      badge: `branches-expert`,
      badgeName: `Branches Expert`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. So far you've learned what the Constitution is and what the Bill of Rights protects. Today we look at HOW the US government actually runs day to day. There are three branches. They each have specific jobs. And they're designed to keep each other from getting too powerful. By the end, you'll have walked a real-style bill all the way from "someone's idea" to "law of the land" — and you'll see exactly what each branch does along the way.`,
          headline: `The Three Branches of Government`,
          subtitle: `Who does what, and how they check each other`,
          visual: `/ue-assets/social-studies/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Three Branches?`,
          paragraphs: [
            `The Framers had just escaped a king. The last thing they wanted was to accidentally create a new one. So when they designed the US government, they split it into three separate branches, each with its own powers — and they made sure no single branch could take over the others.`,
            `This idea is called separation of powers. Each branch has a specific job, and the jobs don't overlap. The Legislative branch writes laws. The Executive branch carries them out. The Judicial branch decides what the laws mean.`,
            `On top of that, the branches can check each other. The President can reject a law Congress passes. Congress can override that rejection if enough members agree. The Supreme Court can strike down laws OR presidential actions. This system is called checks and balances. It's slow on purpose. It's frustrating on purpose. But it's the main thing standing between you and a government that could do whatever it wanted.`,
          ],
          image: `/ue-assets/social-studies/l04-s1-three-branches.webp`,
          imageCaption: `Legislative. Executive. Judicial. Three separate jobs, by design.`,
          vocab: [
            { word: `separation of powers`,
              definition: `Splitting government into different branches, each with its own job, so no single branch becomes too powerful.`,
              audioPrompt: `Separation of powers is the idea of splitting government into branches with different jobs, {name}. The US has three: legislative writes laws, executive carries them out, judicial interprets them. The big reason for the split is that giving all power to one person or group is dangerous. History shows this over and over — it leads to tyranny. By forcing the branches to share power, the system slows things down on purpose, and that's actually a feature, not a bug.` },
            { word: `checks and balances`,
              definition: `Each branch having some power to limit what the other branches do.`,
              audioPrompt: `Checks and balances means each branch has some power to limit what the other branches do, {name}. The President can veto a law Congress passes. Congress can override a veto with a two-thirds vote. The Supreme Court can rule that a law or presidential action violates the Constitution. Congress can impeach the President. The President nominates Supreme Court justices, but the Senate has to approve them. The whole point is that no branch can run wild. They keep each other in check.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Legislative Branch: Congress`,
          paragraphs: [
            `Congress is the legislative branch. Its main job is to write laws. Congress has two parts, called houses. Both have to agree before a law can pass.`,
            `The House of Representatives has 435 members. The number from each state is based on population. California has 52 representatives. Wyoming has 1. Representatives serve two-year terms — short, so they stay accountable to voters.`,
            `The Senate has 100 members. Two from each state, no matter the size. So California and Wyoming both have two senators each. Senators serve six-year terms — longer, so they can focus on big-picture decisions.`,
            `Why two houses? It goes back to the Great Compromise from Lesson 2. The House represents people. The Senate represents states. A law has to pass BOTH houses, which means it has to get support from a wide mix of small states and big states. That's hard on purpose.`,
          ],
          image: `/ue-assets/social-studies/l04-s2-legislative.webp`,
          imageCaption: `House: 435 members, by population. Senate: 100, two per state.`,
          vocab: [
            { word: `Congress`,
              definition: `The legislative branch of the US government, made of the House of Representatives and the Senate.`,
              audioPrompt: `Congress is the legislative branch, {name}. It has two houses. The House of Representatives has 435 members, with each state's number based on population. The Senate has 100 members, two from each state. Both houses have to agree on a bill before it can become a law. Congress also approves the federal budget, declares war, and can impeach the President or judges. It's one of the most powerful institutions in the country — when it works.` },
            { word: `legislation`,
              definition: `Laws written and passed by a legislature, like Congress.`,
              audioPrompt: `Legislation is the formal word for laws written and passed by a legislature, {name}. Congress is the legislative branch — its main job is creating legislation. A proposed piece of legislation is called a bill before it's passed. Bills go through hearings, debates, and votes in both the House and Senate. If both houses pass the same version, it goes to the President. If the President signs it, the bill becomes law. If the President vetoes it, Congress can try to override with a two-thirds vote.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Executive Branch: The President`,
          paragraphs: [
            `The executive branch is led by the President. Its job is to enforce the laws Congress passes. But the President's role is bigger than just enforcement.`,
            `The President leads the military as Commander in Chief. The President conducts foreign policy and meets with leaders of other countries. The President signs treaties (which the Senate must approve). The President nominates federal judges, including Supreme Court justices. The President can grant pardons. And the President can veto bills passed by Congress.`,
            `The President doesn't do this alone. The executive branch includes the Cabinet — about 15 top officials who lead departments like Defense, Treasury, Justice, and Education. It also includes about 2 million federal employees. The President is at the top, but the work flows down through this huge structure.`,
            `Presidents serve four-year terms. They can serve a maximum of two terms total. After that, they have to step down — by law.`,
          ],
          image: `/ue-assets/social-studies/l04-s3-executive.webp`,
          imageCaption: `President leads the executive branch. Cabinet helps. Two million employees carry it out.`,
          vocab: [
            { word: `veto`,
              definition: `The President's power to reject a bill passed by Congress.`,
              audioPrompt: `A veto is the President's power to reject a bill that Congress has passed, {name}. When the President vetoes a bill, it doesn't become a law. But Congress isn't stuck. If two-thirds of both houses agree, they can override the veto and the bill becomes a law anyway. This is one of the clearest examples of checks and balances. The President can stop Congress, but Congress can stop right back if there's enough support. Veto overrides are rare, which shows how hard it is to get that much agreement.` },
            { word: `Cabinet`,
              definition: `The group of top officials who help the President lead the executive branch.`,
              audioPrompt: `The Cabinet is the group of senior officials who help the President run the executive branch, {name}. There are about fifteen Cabinet departments — like Defense, Treasury, Justice, and Education. The heads of these departments advise the President and carry out policy. Cabinet members are nominated by the President and confirmed by the Senate. They don't vote on laws, but they shape how laws are actually applied day to day. When you hear about the "Secretary of State" or "Secretary of Defense," those are Cabinet members.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Judicial Branch: The Courts`,
          paragraphs: [
            `The judicial branch is the court system. The most important court is the Supreme Court, but there are hundreds of federal courts below it. The judicial branch's job is to interpret laws and decide if they're being applied correctly.`,
            `The Supreme Court has 9 justices. They're nominated by the President and approved by the Senate. Once approved, they serve for LIFE — or until they choose to retire. Why lifetime appointments? So they can make tough decisions without worrying about losing their jobs.`,
            `The Supreme Court's most powerful tool is called judicial review. If they find that a law passed by Congress, or an action taken by the President, violates the Constitution, they can strike it down. That's the final word. No appeal. This is the ultimate check on the other two branches.`,
            `Most cases never reach the Supreme Court. They're decided in lower courts. The Supreme Court takes maybe 70-80 cases a year, usually ones with big constitutional questions. Those decisions affect the whole country.`,
          ],
          image: `/ue-assets/social-studies/l04-s4-judicial.webp`,
          imageCaption: `Supreme Court: 9 justices, life appointments, final word on the Constitution.`,
          vocab: [
            { word: `judicial review`,
              definition: `The Supreme Court's power to strike down laws or government actions that violate the Constitution.`,
              audioPrompt: `Judicial review is the Supreme Court's power to strike down laws or government actions that violate the Constitution, {name}. Congress can pass a law and the President can sign it, but if the Court says it's unconstitutional, it's done — no appeal. This power isn't even in the original Constitution. The Court claimed it in a case called Marbury v. Madison in 1803, and it's shaped American law ever since. Without it, no one could stop Congress or the President from passing unconstitutional laws.` },
            { word: `Supreme Court`,
              definition: `The highest court in the United States — nine justices with the final say on constitutional questions.`,
              audioPrompt: `The Supreme Court is the highest court in the United States, {name}. Nine justices sit on the Court. They're nominated by the President and confirmed by the Senate. Once confirmed, they serve for life — meaning they don't face elections and can make independent decisions. The Court's main job is deciding cases that involve the Constitution or federal law. When the Court rules, that ruling is final. No higher court exists. This makes the Supreme Court the ultimate referee in the entire American legal system.` },
          ],
        },

        // ── BRANCHING DECISION GAME — How a Bill Becomes a Law ─────────────────
        {
          id: `l04-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Time to walk an actual bill through every branch of government, {name}. You'll make decisions at each stage. The path the bill takes — and whether it ever becomes law — depends on the choices you make. Pay attention to which branch is involved at each step.`,
          scenarioTitle: `From Idea to Law: A Bill's Journey`,
          decisions: [
            {
              id: `d1`,
              situation: `STAGE 1: A Representative proposes a new bill to provide free school lunches to every kid in America. Now the House of Representatives has to vote on it. The bill has support, but not from everyone. What happens?`,
              context: `The House has 435 members. A simple majority (218) is enough to pass a bill.`,
              options: [
                {
                  id: `a`,
                  label: `It passes the House with 250 votes in favor`,
                  preview: `Onward — but the Senate still has to agree.`,
                },
                {
                  id: `b`,
                  label: `It fails — only 200 votes in favor`,
                  preview: `The bill is dead. Game over.`,
                },
                {
                  id: `c`,
                  label: `The House sends it back for changes before voting`,
                  preview: `The bill is rewritten and re-voted.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A. The bill passes the House. But that's just the first hurdle. In the US, BOTH houses of Congress have to pass a bill before it goes to the President. So our bill now heads to the Senate.`,
            },
            {
              id: `d2`,
              situation: `STAGE 2: The bill arrives in the Senate. Some senators argue it costs too much. Others argue every kid deserves a free lunch. The bill goes to a vote. What happens?`,
              context: `The Senate has 100 members. A simple majority (51) is enough to pass a bill.`,
              options: [
                {
                  id: `a`,
                  label: `It passes the Senate with 58 votes`,
                  preview: `Both houses agree. The bill goes to the President.`,
                },
                {
                  id: `b`,
                  label: `It fails — only 48 votes`,
                  preview: `Even though the House passed it, the bill dies in the Senate.`,
                },
                {
                  id: `c`,
                  label: `The Senate changes the bill and sends it back to the House`,
                  preview: `Both houses have to agree on the EXACT same version.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A. The bill passes the Senate. Now BOTH houses have agreed on the same bill. It goes to the President for signature. This is also the most common path — most bills that make it this far get sent on.`,
            },
            {
              id: `d3`,
              situation: `STAGE 3: The bill is on the President's desk. The President doesn't agree with how much it costs. What can the President do?`,
              context: `Three options under the Constitution.`,
              options: [
                {
                  id: `a`,
                  label: `Sign it into law`,
                  preview: `It becomes law. Done.`,
                },
                {
                  id: `b`,
                  label: `Veto it — refuse to sign and send it back to Congress`,
                  preview: `The bill is rejected, but Congress can try to override.`,
                },
                {
                  id: `c`,
                  label: `Just ignore it for 10 days`,
                  preview: `If Congress is in session, it becomes law anyway. If not, it dies.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. The President vetoes. But this isn't over. Congress can OVERRIDE a veto if two-thirds of both houses vote to do it. That's hard — but possible if the bill is popular enough. Let's see what happens.`,
            },
            {
              id: `d4`,
              situation: `STAGE 4: Congress tries to override the President's veto. They need two-thirds in both the House AND the Senate. The vote happens. What's the result?`,
              context: `Two-thirds is roughly 290 House votes and 67 Senate votes.`,
              options: [
                {
                  id: `a`,
                  label: `Override succeeds — bill becomes law despite the veto`,
                  preview: `Congress wins. Powerful but rare.`,
                },
                {
                  id: `b`,
                  label: `Override fails — bill is dead`,
                  preview: `The veto stands. The bill is over.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A. Override succeeds. The bill becomes law, even though the President didn't want it. This is rare — vetoes are overridden only a few percent of the time — but it's the system working as designed. Congress and the President check each other. Now there's one more step.`,
            },
            {
              id: `d5`,
              situation: `STAGE 5: The new law is in effect. But a state government sues, saying the law is unconstitutional — that the federal government can't force states to run a specific lunch program. The case eventually reaches the Supreme Court. What does the Court do?`,
              context: `This is the judicial branch's role.`,
              options: [
                {
                  id: `a`,
                  label: `The Court refuses to hear the case`,
                  preview: `The law stands as is.`,
                },
                {
                  id: `b`,
                  label: `The Court rules the law is constitutional`,
                  preview: `The law stands and the state has to follow it.`,
                },
                {
                  id: `c`,
                  label: `The Court rules the law is unconstitutional and strikes it down`,
                  preview: `The law is dead. Even Congress and the President can't override this.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. The Court rules the law is constitutional. The federal government does have the power to fund nutrition programs. The law stays. But notice — the Supreme Court was the FINAL check. Even after the bill made it through both houses, the President's veto, and Congress's override, the Court still had the last word. That's the design.`,
            },
          ],
          completionMessage: `You just walked a bill through all three branches, {name}. Notice what happened — at every single step, the bill could have died, been changed, or been stopped. The system is slow on purpose. But it's also the reason that no single person can decide what's law in this country. That's checks and balances doing exactly what the Framers designed.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Test time, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `Which branch writes the laws?`,
              options: [
                `Executive`,
                `Legislative (Congress)`,
                `Judicial`,
                `All three together`,
              ],
              correctIndex: 1,
              explanation: `Congress — the legislative branch — writes laws. Both the House and the Senate have to pass a bill before it can become law.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `Which branch enforces the laws?`,
              options: [
                `Legislative`,
                `Executive (President)`,
                `Judicial`,
                `The Supreme Court`,
              ],
              correctIndex: 1,
              explanation: `The executive branch, led by the President, carries out and enforces the laws.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `Which branch decides if a law is constitutional?`,
              options: [
                `Congress`,
                `The President`,
                `Judicial (Supreme Court)`,
                `State governors`,
              ],
              correctIndex: 2,
              explanation: `The Supreme Court has the power of judicial review. It can strike down laws or government actions that violate the Constitution.` },
            { id: `l04-q4`, format: `multiple-choice`,
              question: `Why do Supreme Court justices serve for life?`,
              options: [
                `So they can become rich`,
                `So they can make tough decisions without fearing they'll lose their job over them`,
                `It was a mistake in the Constitution`,
                `They volunteer for it`,
              ],
              correctIndex: 1,
              explanation: `Lifetime appointments protect justices from political pressure. They can rule based on the Constitution, not on what's currently popular.` },
            { id: `l04-q5`, format: `true-false`,
              question: `True or false: Congress can override a presidential veto if enough members agree.`,
              correctAnswer: true,
              explanation: `True. A veto can be overridden with a two-thirds vote in both the House and the Senate. It's hard, but it's possible. This is a classic example of checks and balances.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `Why does the US have TWO houses of Congress?`,
              options: [
                `To have more meetings`,
                `So small states (Senate, equal reps) and big states (House, by population) both have a voice`,
                `To create more jobs`,
                `It was a mistake nobody fixed`,
              ],
              correctIndex: 1,
              explanation: `The two houses were the Great Compromise. The Senate gives equal voice to each state. The House represents by population. Both have to agree on a law.` },
            { id: `l04-q7`, format: `multiple-choice`,
              question: `What does "checks and balances" mean?`,
              options: [
                `The government has a checking account`,
                `Each branch has some power to limit what the other branches can do`,
                `The President checks everyone's homework`,
                `Congress balances the budget every year`,
              ],
              correctIndex: 1,
              explanation: `Each branch can check the others. President vetoes, Congress overrides, Court strikes down. No branch can run wild.` },
            { id: `l04-q8`, format: `multiple-choice`,
              question: `If a bill passes both houses of Congress and the President signs it, but then the Supreme Court rules it unconstitutional, what happens?`,
              options: [
                `Nothing changes — it's still a law`,
                `Congress votes again`,
                `The law is struck down — the Court has the final word`,
                `The President can veto the Court's ruling`,
              ],
              correctIndex: 2,
              explanation: `The Supreme Court's ruling is final on constitutional questions. If they say a law violates the Constitution, the law dies, no matter who signed it.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `One real minute to think, {name}. Pick a prompt and answer it.`,
          prompts: [
            { id: `r1`, text: `Which branch's job sounds most interesting to you, and why?` },
            { id: `r2`, text: `In the bill simulation, which step felt most surprising?` },
            { id: `r3`, text: `Do you think the system being slow is more of a feature or more of a problem? Why?` },
            { id: `r4`, text: `What would change if there were only TWO branches instead of three?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Right now, somewhere in Congress, hundreds of bills are being debated. Most will never become laws. The ones that do will go through some version of the journey you just walked. The President is signing some, vetoing others. The Supreme Court is hearing about 70 cases this year — each one a chance to reshape what the Constitution means in modern life. This system is alive every single day. The people who pay attention to it have more power than the ones who don't.`,
          familyAdventure: `Look up your two US Senators and your one US Representative (you can find them at congress.gov by entering your zip code). Read one current bill each of them is supporting. As a family, discuss whether you would vote yes or no on each, and why. Bonus: write a short message to one of them about a bill you care about. They actually read constituent messages.`,
          creativePrompt: {
            intro: `Imagine you are a Representative in Congress. You can propose ONE new law that would affect every kid in America. What would it be? Walk it through the steps you learned about today.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Describe your bill, why it matters, and predict whether you'd survive a presidential veto.`,
            open: `Write as much as you want. Draft your whole bill and walk it through every branch.`,
            frames: [
              `The law I would propose is ___.`,
              `I care about this issue because ___.`,
              `The House might support this because ___.`,
              `The biggest objection from the Senate might be ___.`,
              `If the President vetoed it, I would try to ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Excellent, {name}. You can now explain why there are three branches, what each one does, and how checks and balances actually work in real life. You walked an actual bill through every step from House to Senate to President to Supreme Court. Next lesson, we zoom OUT — from federal government to state and local. Because most of the government that affects your daily life isn't in Washington at all. — Atlas.`,
          badge: `branches-expert`,
          badgeName: `Branches Expert`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L04;
