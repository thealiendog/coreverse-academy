// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L02 — The Constitution in Depth: Federalism & Separation of Powers
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics) — D2.Civ
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l02-v1";

const SOCIAL_STUDIES_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-02`,
      title: `The Constitution in Depth: Federalism and Separation of Powers`,
      duration: 35,
      xpReward: 75,
      badge: `constitution-architect`,
      badgeName: `Constitution Architect`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, ideas alone don't govern anyone. The Constitution took the big ideas — consent, rights, divided power — and built a machine out of them. Federalism splits authority between national and state governments. Separation of powers splits authority within the national government. Both were designed to prevent tyranny. How well they work depends on how well citizens understand them. This lesson is that understanding.`,
          headline: `The Constitution in Depth: Federalism and Separation of Powers`,
          subtitle: `How a real constitution turns big ideas into a working machine that divides and limits power. A Case Study.`,
          visual: `/voyager-assets/social-studies/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Problem They Had To Solve`,
          paragraphs: [
            `In 1787, the writers of the U.S. Constitution faced a dilemma. They had just won independence from a king they considered a tyrant, so they feared concentrated power. But their first government, under the Articles of Confederation, was so weak it couldn't tax or enforce laws and nearly fell apart. They needed government strong enough to work, but limited enough to stay safe.`,
            `Their core insight, from thinkers like Montesquieu, was that the danger isn't who holds power, but how much any one group can accumulate. Concentrated power, even in good hands, tends toward abuse. So instead of trusting rulers to be virtuous, they engineered the structure itself so power could never pile up in one place.`,
            `The result was a constitution built on a single strategy applied twice: divide power so the pieces check each other. They split it vertically, between the nation and the states (federalism), and horizontally, among three branches (separation of powers). The design assumes people will seek power and ensures that when they do, other power-holders push back. Distrust, engineered into architecture.`,
          ],
          image: `/voyager-assets/social-studies/l02-s1-problem.webp`,
          imageCaption: `In 1787, the writers of the U.S. Constitution faced a dilemma. They'd just won independence from a king they saw as a tyrant, so they feared concentrated power. But their first government, the ARTICLES OF CONFEDERATION, was so weak it couldn't tax or enforce laws and nearly collapsed. They needed government strong enough to WORK but limited enough to stay SAFE. Their insight, from Montesquieu: the danger isn't who holds power, but how MUCH any one group can accumulate. So instead of trusting rulers to be good, they engineered the STRUCTURE so power could never pile up. They divided it twice: vertically between nation and states (FEDERALISM), and horizontally among three branches (SEPARATION OF POWERS). Distrust, built into architecture.`,
          vocab: [
            { word: `constitution`,
              definition: `The fundamental framework of a government: the document and rules that establish its structure, distribute its powers, and set the limits within which it must operate.`,
              audioPrompt: `A constitution, {name}, is the master blueprint of a government, the highest set of rules that creates its structure, hands out its powers, and, crucially, sets the limits on what it can do. Everyday laws have to obey the constitution, not the other way around. Think of it like the rulebook that even the referees have to follow. As you go through this lesson, notice how much of the U.S. Constitution is actually about limiting power rather than granting it. Why do you think the writers were so focused on limits?` },
            { word: `Articles of Confederation`,
              definition: `The first U.S. government framework (1781), which created a national government so weak it couldn't tax or enforce laws. Its failure shaped the Constitution that replaced it.`,
              audioPrompt: `The Articles of Confederation, {name}, were America's first try at a national government, and they failed. So afraid of a strong central power after fighting a king, the founders made the national government almost powerless, it couldn't even collect taxes or enforce its own laws. The country nearly fell apart. That failure taught a hard lesson: a government too weak to function is its own kind of danger. The Constitution was the second attempt, designed to fix exactly that. What does this tell you about the cost of fearing power too much?` },
            { word: `divided power`,
              definition: `The Constitution's central strategy: splitting government power among different levels and branches so that no single person or group can accumulate enough to become a tyrant.`,
              audioPrompt: `Divided power, {name}, is the master strategy of the whole Constitution. Rather than trusting any leader to be good, the founders split power into pieces and set those pieces against each other, so that anyone reaching for too much would be blocked by someone else. They did it two ways at once: between the nation and the states, and among three branches. It's a design that assumes people will grab for power, and makes sure they get checked when they do. Smart, or too cynical? What do you think?` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Federalism: Splitting Power By Level`,
          paragraphs: [
            `The first division is federalism: power split between a national (federal) government and the states. Neither fully controls the other; each has its own authority. The federal government handles country-wide matters, defense, currency, treaties, interstate commerce. States handle local matters, schools, traffic laws, most criminal law, elections.`,
            `Some powers are shared (both can tax, build roads). The Constitution declares that when federal and state law genuinely conflict within federal authority, federal law wins, the "supremacy clause." But states keep real, independent power; they aren't branch offices of Washington. This is why laws differ across state lines, on speed limits, taxes, and much else.`,
            `Federalism is itself a check on power. By dividing authority between levels, it stops the national government from controlling everything, and lets states experiment and serve as what Justice Louis Brandeis called "laboratories of democracy," testing policies that, if they work, can spread. The tradeoff: complexity and inconsistency, fifty states can mean fifty answers.`,
          ],
          image: `/voyager-assets/social-studies/l02-s2-federalism.webp`,
          imageCaption: `The first division is FEDERALISM: power split between a NATIONAL (federal) government and the STATES. Neither fully controls the other; each has its own authority. The federal government handles what affects the whole country, defense, currency, treaties, interstate commerce. States handle local matters, schools, traffic laws, most criminal law, elections. Some powers are SHARED (both can tax, build roads). When federal and state law genuinely conflict within federal authority, federal law wins, the SUPREMACY CLAUSE. But states keep real power; they aren't branch offices of Washington, which is why laws differ across state lines. Federalism checks power and lets states be "laboratories of democracy" (Justice Brandeis), testing policies that can spread. The tradeoff: complexity and inconsistency.`,
          vocab: [
            { word: `federalism`,
              definition: `A system that divides power between a national (federal) government and state governments, each with its own areas of authority, so neither fully controls the other.`,
              audioPrompt: `Federalism, {name}, is the way the Constitution splits power between the national government and the states, with each having its own turf. The federal government handles country-wide matters like defense and currency; states handle local matters like schools and traffic laws. Neither is fully in charge of the other. It's why your state can have totally different laws from the state next door. Can you think of a rule that's different where you live than somewhere else you've been? That difference is federalism in action.` },
            { word: `supremacy clause`,
              definition: `The constitutional rule that when valid federal law and state law genuinely conflict within the federal government's proper authority, federal law takes priority.`,
              audioPrompt: `The supremacy clause, {name}, settles what happens when a valid federal law and a state law genuinely clash within the federal government's proper authority: federal law wins. Without this rule, a single state could simply ignore national laws, and the country couldn't function as one nation. But notice the limits, it only applies when the federal government is acting within its real authority. States still keep huge areas of independent power. Why do you think the founders needed a tie-breaker like this?` },
            { word: `laboratories of democracy`,
              definition: `Justice Brandeis's phrase for how individual states can test new policies on a smaller scale; successful experiments can then spread to other states or the nation.`,
              audioPrompt: `Laboratories of democracy, {name}, is Justice Louis Brandeis's famous phrase for one of federalism's best features: because states have their own power, each can try out new ideas, on schools, health, the environment, on a smaller scale. If a policy works in one state, others can adopt it; if it fails, the damage is contained. It turns fifty states into fifty experiments running at once. Where else in life is it smart to test an idea small before going big? That's the same logic.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Separation Of Powers: Three Branches`,
          paragraphs: [
            `The second division is separation of powers, splitting the national government into three branches. The legislative branch (Congress) makes the laws. The executive branch (the president and agencies) carries out and enforces them. The judicial branch (the courts, topped by the Supreme Court) interprets them and applies them to cases.`,
            `Why split it three ways? Because combining these powers is the recipe for tyranny. If one person could write the laws, enforce them, and judge violations, nothing could stop them from making any rule and punishing any enemy. Giving each function to a separate branch ensures no single branch can do everything alone, real power requires cooperation.`,
            `Each branch also has its own source of authority and term, so they don't all answer to the same master. Congress is elected by states and districts; the president nationally; federal judges appointed for life, shielded from political pressure. This fragmentation means the branches often have different interests, which is exactly the point: ambition is set against ambition.`,
          ],
          image: `/voyager-assets/social-studies/l02-s3-three-branches.webp`,
          imageCaption: `The second division is SEPARATION OF POWERS, splitting the national government into three branches with different jobs. LEGISLATIVE (Congress) MAKES laws. EXECUTIVE (the president and agencies) CARRIES OUT and enforces laws. JUDICIAL (the courts, topped by the Supreme Court) INTERPRETS laws and applies them to cases. Why three? Because combining these powers is the recipe for tyranny, if one person could write laws, enforce them, AND judge violations, nothing could stop them. Splitting the functions means no branch can act alone; real power requires cooperation. Each branch has its own source of authority and term, Congress elected by states, president elected nationally, judges appointed for life, so ambition is set against ambition.`,
          vocab: [
            { word: `separation of powers`,
              definition: `Dividing government into three branches, legislative (makes laws), executive (enforces laws), and judicial (interprets laws), so that no single branch can control everything.`,
              audioPrompt: `Separation of powers, {name}, splits the national government into three branches, each with one main job: Congress makes the laws, the president and executive branch enforce them, and the courts interpret them. The reason is simple and powerful: if one person or group could make, enforce, AND judge the laws all at once, there'd be nothing to stop them from becoming a tyrant. Splitting the jobs forces cooperation. Imagine if your school's principal also wrote every rule AND decided every punishment with no appeal, what would go wrong?` },
            { word: `the three branches`,
              definition: `Legislative (Congress, makes laws), executive (president and agencies, enforces laws), and judicial (courts, interprets laws). Each has a distinct function and source of authority.`,
              audioPrompt: `The three branches, {name}, are the legislative, executive, and judicial. Congress, the legislative branch, writes the laws. The president and the agencies beneath, the executive branch, carry them out. The courts, the judicial branch, interpret what the laws mean and apply them to real cases. Each gets its power from a different place, voters, national election, lifetime appointment, so they don't all answer to the same boss. That independence is what lets them stand up to each other. Which branch do you think has the hardest job, and why?` },
            { word: `ambition counters ambition`,
              definition: `James Madison's idea that because each branch will guard its own power and resist the others, the very self-interest of officials becomes a force protecting liberty.`,
              audioPrompt: `Ambition counters ambition, {name}, is James Madison's brilliant insight, written in the Federalist Papers. The system doesn't depend on leaders being unselfish. Instead, it expects each branch to jealously guard its own power and resist the others grabbing too much. So the very ambition of politicians becomes a force that protects everyone's liberty, each one blocks the others out of self-interest. It's a design that works with human nature instead of against it. Do you think that's wise realism, or a little too cynical about people?` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Checks And Balances: Making Them Share`,
          paragraphs: [
            `Separating the branches isn't enough, you also need to make sure none can dominate the others. That's the job of checks and balances: each branch gets specific powers to block or limit the other two. The branches aren't fully independent; they're deliberately tangled so each depends partly on the others.`,
            `The examples are everywhere. Congress passes a law, but the president can veto it; Congress can override with a two-thirds vote. The president nominates judges, but the Senate must confirm them. The courts can declare a law unconstitutional (judicial review), but judges are appointed and confirmed by the others, and Congress can even impeach and remove officials, including a president or judge.`,
            `The result: almost nothing big happens without cooperation across branches, and any branch reaching for too much gets checked. This is the system's genius and its frustration at once. It guards against tyranny, but makes government slow and prone to gridlock, by design. The founders chose safety over speed, a government that can't easily be captured over one that can easily act.`,
          ],
          image: `/voyager-assets/social-studies/l02-s4-checks-balances.webp`,
          imageCaption: `Separating the branches isn't enough, you must stop any one from dominating. That's CHECKS AND BALANCES: each branch gets specific powers to block the other two. They're deliberately tangled so each depends on the others. Examples: Congress passes a law, but the president can VETO it; Congress can OVERRIDE with two-thirds. The president nominates judges, but the Senate must CONFIRM. Courts can declare a law unconstitutional (JUDICIAL REVIEW), but judges are appointed and confirmed by the others; Congress can even IMPEACH and remove officials. The result: almost nothing big happens without cooperation, and any branch grabbing too much gets checked. The genius and the frustration at once, it guards against tyranny but makes government slow by design. Safety over speed.`,
          vocab: [
            { word: `checks and balances`,
              definition: `The system giving each branch specific powers to block or limit the others (like the veto, confirmation, and judicial review), so no branch can dominate the rest.`,
              audioPrompt: `Checks and balances, {name}, is what makes separation of powers actually work. It's not enough to give each branch a different job; you have to let each one block the others when they overreach. So the president can veto Congress's laws, Congress can override the veto or impeach the president, and the courts can strike down both. Every branch holds a leash on the others. It means real power requires cooperation, and grabbing too much gets you stopped. Can you see why this makes government safer but also slower?` },
            { word: `veto and override`,
              definition: `The president can reject (veto) a bill passed by Congress; Congress can override that veto and pass it anyway with a two-thirds vote in both chambers. A classic check.`,
              audioPrompt: `The veto and override, {name}, is a perfect example of checks and balances in motion. Congress passes a bill, but the president can refuse to sign it, that's a veto, blocking it. But Congress isn't powerless: if two-thirds of both chambers still want it, they can override the veto and make it law anyway. Back and forth, each side checking the other. It means a president can stop Congress, but not if Congress is united enough. Why do you think the founders made the override require a big two-thirds majority, not just a simple one?` },
            { word: `judicial review`,
              definition: `The power of courts, especially the Supreme Court, to declare a law or government action unconstitutional and therefore void. It makes the courts a powerful check.`,
              audioPrompt: `Judicial review, {name}, is the courts' power to examine a law or government action and declare it unconstitutional, striking it down. It's how the judicial branch checks the other two: even if Congress passes a law and the president signs it, the Supreme Court can rule it violates the Constitution and cancel it. Interestingly, this power isn't spelled out in the Constitution, the Court claimed it in a famous 1803 case, Marbury versus Madison. We'll dig into landmark cases like that soon. Should unelected judges have the power to overrule elected leaders? Hold that question.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. The founders needed government strong enough to work but limited enough to stay safe, having failed with the too-weak Articles of Confederation. Their solution, from Montesquieu: divide power so the pieces check each other, engineering distrust into the structure itself.`,
            `They divided it two ways. Federalism splits power vertically, nation versus states, letting states be "laboratories of democracy." Separation of powers splits it horizontally, among the legislative (makes laws), executive (enforces), and judicial (interprets) branches. Checks and balances then tangle the branches together, veto, override, judicial review, impeachment, so none can dominate.`,
            `The whole machine trades speed for safety: it resists tyranny but produces gridlock on purpose. Now you become the constitutional analyst. The case-study screen presents five real situations where these mechanisms collided, a veto, a state-federal clash, a court striking a law, a gridlock standoff, and a power grab that got checked. Reason with federalism, separation of powers, and checks and balances.`,
          ],
          image: `/voyager-assets/social-studies/l02-s5-before.webp`,
          imageCaption: `Threads together. The founders needed government strong enough to WORK but limited enough to stay SAFE, having failed with the too-weak Articles of Confederation. Their solution, from Montesquieu: divide power so the pieces check each other, engineering distrust into the structure. FEDERALISM splits power vertically (nation versus states, "laboratories of democracy"). SEPARATION OF POWERS splits it horizontally (legislative makes, executive enforces, judicial interprets). CHECKS AND BALANCES tangle the branches, veto, override, confirmation, judicial review, impeachment, so none dominates. The machine trades speed for safety. Now you're the analyst: five real cases where these mechanisms collided, a veto, a state-federal clash, a court striking a law, a gridlock standoff, and a power grab that got checked.`,
          vocab: [
            { word: `gridlock`,
              definition: `When the branches (or parties) block each other so thoroughly that government cannot act. A frequent side effect, by design, of checks and balances and divided power.`,
              audioPrompt: `Gridlock, {name}, is what happens when the system's checks work so well that government grinds to a halt, the branches or parties block each other and nothing gets done. It's frustrating, and people often blame politicians for it, but it's partly built into the design on purpose: a system that requires cooperation to act will sometimes fail to act when there's no cooperation. The founders accepted that risk to prevent something worse, one group seizing total control. Is gridlock a flaw in the system, or the system working as intended? It's worth debating.` },
            { word: `impeachment`,
              definition: `The constitutional process by which Congress can formally charge and, if convicted, remove high officials, including the president or judges, for serious misconduct. A powerful check.`,
              audioPrompt: `Impeachment, {name}, is one of the strongest checks of all: Congress's power to formally accuse and, if convicted, remove high officials, even the president or a Supreme Court justice, for serious wrongdoing. The House brings the charges; the Senate holds the trial. It's deliberately hard to do, requiring big majorities, so it can't be used lightly for ordinary political disagreements. It's the ultimate backstop when an official badly abuses power. Why do you think the founders made removing a leader possible, but also intentionally difficult?` },
            { word: `the speed-safety tradeoff`,
              definition: `The deliberate design choice that the U.S. system resists tyranny and sudden change, at the cost of being slow, frictional, and prone to gridlock. Safety was chosen over speed.`,
              audioPrompt: `The speed-safety tradeoff, {name}, is the deep bargain at the heart of the Constitution. By dividing power and forcing branches to cooperate, the founders made it very hard for any one group to seize control, that's the safety. But the same design makes government slow, full of friction, and prone to gridlock, that's the cost. They chose safety over speed deliberately, deciding a government that's hard to capture is worth a government that's hard to move. Knowing that, do you think they made the right call? What would you have chosen?` },
          ],
        },

        {
          id: `l02-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Constitutional Machinery`,
          intro: `{name}, you're the constitutional analyst now. Here are five real situations where the Constitution's mechanisms collided. For each, reason with federalism, separation of powers, and checks and balances, and ask: which part of the machine is operating, and is it preventing tyranny, producing gridlock, or both?`,
          cases: [
            {
              id: `c1`,
              title: `The bill the president won't sign`,
              type: `Checks and balances: veto`,
              description: `Congress passes a major spending bill that the president strongly opposes. The president refuses to sign it and sends it back, vetoing it. Furious, the bill's supporters in Congress vow to make it law anyway, without the president's signature. Can they, and what does this reveal about how the branches share power?`,
              questions: [
                `What power did the president just use, and where does it come from?`,
                `Can Congress make the bill law despite the president's refusal? How?`,
                `What does this back-and-forth reveal about the design of the system?`,
              ],
              evaluation: `This is a textbook example of checks and balances in motion, specifically the veto and override, and it reveals exactly how the Constitution forces the legislative and executive branches to share power rather than letting either dominate. First, what power did the president use? The veto, the executive branch's constitutional power to reject a bill passed by the legislative branch (Congress). This is a crucial check: even though Congress makes the laws, the president can block a law from taking effect by refusing to sign it and returning it. The veto exists precisely so that one branch (Congress) cannot make law entirely on its own; the executive gets a say. Without it, Congress could pass anything it wanted with no executive check at all. Second, can Congress make the bill law anyway? Yes, but only by clearing a high bar, which is itself a check running in the other direction. Congress can override the veto, but only with a two-thirds vote in both the House and the Senate (a supermajority, far more than the simple majority needed to pass a bill originally). If two-thirds of both chambers still support the bill, it becomes law despite the president's objection; if supporters can't reach two-thirds, the veto stands and the bill dies. So neither branch fully wins: the president can block Congress, but a sufficiently united Congress can overcome the president. Third, and most importantly, what does this back-and-forth reveal about the design? It shows the core logic of checks and balances: power is deliberately shared and tangled so that no single branch can act alone on big matters. The president checks Congress (veto); Congress checks the president back (override); and crucially, the override threshold is set high (two-thirds) on purpose, so that a president can be overruled only when there's overwhelming agreement, not a slim, partisan majority. This means the system favors broad consensus and makes unilateral action hard for everyone. It also reveals the speed-safety tradeoff in action: this process can be slow and produce stalemate (if Congress can't reach two-thirds, a popular-in-Congress bill simply dies over one person's objection), which can feel frustrating or even undemocratic. But that friction is the point, the founders deliberately made it hard for either branch to impose its will alone, to guard against any one part of government accumulating too much power. The veto-and-override dance is the machine working exactly as designed: power preventing power, cooperation required, tyranny resisted, even at the cost of speed and ease. As an analyst, you'd identify this as separation of powers protected by checks and balances, with the high override threshold revealing the founders' preference for safety and consensus over swift, unilateral action.`,
            },
            {
              id: `c2`,
              title: `When state and federal law collide`,
              type: `Federalism: the supremacy clause`,
              description: `A state passes a law that directly contradicts a valid federal law on something clearly within the national government's authority, like rules for interstate commerce. The state insists it has the right to govern its own affairs and refuses to follow the federal rule. A court has to decide whose law controls. What should it rule, and why?`,
              questions: [
                `Which level of government wins this genuine conflict, and on what principle?`,
                `Does this mean states have no real independent power?`,
                `Why does the system need a tie-breaker like this at all?`,
              ],
              evaluation: `This case puts federalism, and its essential tie-breaker, the supremacy clause, directly to the test, and analyzing it reveals both the limits and the genuine independence of state power. First, which level wins? When a state law genuinely conflicts with a valid federal law, and the federal government is acting within its proper constitutional authority (here, regulating interstate commerce, which is clearly a federal power), federal law wins. This is the supremacy clause: the Constitution declares federal law (made within the federal government's legitimate authority) to be the "supreme law of the land," taking priority over conflicting state law. So the court should rule that the federal law controls, and the state must yield on this point. The state's argument that it can govern its own affairs is true in general, but it doesn't extend to overriding valid federal law in an area, like interstate commerce, that the Constitution assigns to the national government. Second, and crucially, does this mean states have no real independent power? Absolutely not, and this is the nuance that's easy to miss. The supremacy clause only applies when two conditions are met: there is a genuine conflict between the laws, AND the federal government is acting within its proper authority. States retain enormous, real, independent power over vast areas, education, most criminal law, traffic and local regulations, local elections, and much more, where the federal government has no authority to override them. States are not "branch offices" of Washington; they're co-sovereigns with their own protected sphere. The supremacy clause is a tie-breaker for genuine conflicts in federal areas, not a grant of total federal control. (This is exactly why laws can differ so dramatically from state to state, that diversity reflects real state power that federal law does not touch.) Third, why does the system need this tie-breaker at all? Because without it, federalism would be unworkable. If any state could simply ignore federal law whenever it disagreed, there would be no functioning national government, fifty states could each go their own way on national defense, currency, or interstate trade, and the country would fragment. The supremacy clause provides the rule that holds the union together: in the federal government's proper domain, national law prevails, so the nation can function as one. But by limiting the clause to genuine conflicts within federal authority, the design preserves robust state independence everywhere else. This is federalism's balancing act: enough national supremacy to keep the country unified, enough state power to keep it diverse, adaptable, and resistant to total central control. As an analyst, you'd rule for the federal law here (genuine conflict, federal area), while emphasizing that this outcome does not diminish the vast independent authority states hold in the many areas the Constitution leaves to them. The case shows federalism working as designed: a layered division of power with a clear, limited rule for resolving the conflicts that inevitably arise between levels.`,
            },
            {
              id: `c3`,
              title: `The court strikes down a law`,
              type: `Checks and balances: judicial review`,
              description: `Congress passes a law and the president signs it, so both elected branches agree on it. But someone challenges the law in court, arguing it violates the Constitution. The Supreme Court agrees and strikes the law down, voiding it entirely. Some people are outraged that unelected judges overruled the elected branches. Is this legitimate, and how does it fit the system?`,
              questions: [
                `What power is the Court using, and how does it check the other branches?`,
                `Is it a problem that unelected judges can overrule elected officials?`,
                `What checks exist on the Court's own power in return?`,
              ],
              evaluation: `This case explores judicial review, the most debated of all the checks, and analyzing it reveals both why the power exists and how it, too, is checked, keeping the system balanced. First, what power is the Court using? Judicial review: the power of the courts, ultimately the Supreme Court, to examine a law or government action, determine whether it violates the Constitution, and if so, declare it unconstitutional and void. This is how the judicial branch checks the legislative and executive branches: even when Congress passes a law and the president signs it (both elected branches agreeing), the Court can strike it down if it conflicts with the Constitution. Interestingly, this power isn't explicitly written in the Constitution; the Supreme Court established it in the landmark 1803 case Marbury v. Madison, reasoning that since the Constitution is the supreme law, someone must be able to enforce it against ordinary laws that violate it, and that is the courts' job. Second, the heart of the controversy: is it a problem that unelected judges can overrule elected officials? This is a genuine, serious tension with reasonable arguments on both sides, exactly the kind of question that has no single clean answer. On one hand, it can seem undemocratic: nine unelected justices, appointed for life, can cancel a law that the people's elected representatives passed. On the other hand, that's largely the point. The whole purpose of a constitution is to set limits that even majorities cannot cross, to protect fundamental rights and the structure of government from being overridden by whoever currently holds power. If a simple majority could violate the Constitution whenever it wished, the Constitution's protections would be meaningless. Judicial review makes the Constitution's limits real and enforceable, protecting minorities and individual rights from majority overreach. The justices' independence (lifetime appointment, insulation from elections) is deliberate: it's meant to let them rule based on the Constitution rather than bending to political pressure or popular passion. So judicial review is legitimate within the system's logic, it's how the supreme law stays supreme, even against the elected branches, though reasonable people debate how much deference courts should give to elected officials. Third, and crucially for balance, what checks exist on the Court's own power? The Court is powerful but not unchecked, the same logic of checks and balances applies to it. Justices are nominated by the president and confirmed by the Senate (so the elected branches shape who sits on the Court). Congress can propose constitutional amendments to override Court decisions, can pass new legislation, and in extreme cases can impeach judges for serious misconduct. The Court also has no army or budget of its own; it depends on the other branches to enforce its rulings, which constrains it. And the Court generally limits itself to actual cases and tends to respect precedent. So judicial review fits the system not as an unaccountable super-power, but as one branch's check that is itself checked by the others, ambition countering ambition, all the way around. As an analyst, you'd conclude that the Court's action is legitimate and central to constitutionalism (making the Constitution's limits enforceable against even the elected branches), while honestly acknowledging the real democratic tension it creates, and noting that the Court, too, operates within the web of checks and balances rather than above it.`,
            },
            {
              id: `c4`,
              title: `The standoff that stops everything`,
              type: `The speed-safety tradeoff: gridlock`,
              description: `Congress and the president are controlled by opposing parties and refuse to compromise. Congress won't pass the president's priorities; the president vetoes Congress's. Nothing significant gets done for months, and parts of the government even shut down. Citizens are furious. Is this a failure of the Constitution, or the system working as designed?`,
              questions: [
                `What is causing this paralysis, in constitutional terms?`,
                `Is gridlock a flaw in the system or a built-in feature?`,
                `What tradeoff did the founders accept that produces situations like this?`,
              ],
              evaluation: `This case confronts gridlock, the frustrating flip side of checks and balances, and analyzing it reveals the deliberate tradeoff at the very heart of the constitutional design. First, what is causing the paralysis, in constitutional terms? It's the same checks and balances and separation of powers that prevent tyranny, now producing stalemate. Because the Constitution deliberately divides power and requires cooperation across branches for big things to happen (Congress must pass laws, the president must sign or have a veto overridden, etc.), when the branches are controlled by opposing parties unwilling to compromise, they block each other. Congress won't pass the president's priorities; the president vetoes Congress's bills, and there aren't two-thirds to override. The very mechanisms designed to stop any one branch from dominating now stop anything from happening at all. This is gridlock: government unable to act because the power-sharing system requires a cooperation that isn't there. Second, the key question: is gridlock a flaw or a built-in feature? The honest, sophisticated answer is: it's largely a built-in feature, an intended consequence of the design, though it can certainly go too far. The founders deliberately made it hard for government to act unilaterally or quickly. They required multiple branches to agree, set high thresholds (like the two-thirds override), and divided power so thoroughly that significant action demands broad cooperation and consensus. This means that when there's no consensus, the default is that nothing big happens, which is gridlock. The founders preferred this to the alternative: a government that could act swiftly and easily would also be a government that could be captured and abused swiftly and easily. So gridlock is, in a real sense, the system working as designed, the friction is a feature, not a bug. That said, reasonable people debate whether modern gridlock has become more extreme than the founders intended (due to intense partisanship), and whether it now sometimes prevents government from doing genuinely necessary things, like funding itself, which is a real cost. Third, what tradeoff did the founders accept? The speed-safety tradeoff. By dividing power and requiring cooperation, they made the system highly resistant to tyranny and sudden, unchecked change, that's the safety. But the same choices make government slow, frictional, and prone to gridlock, that's the cost in speed and efficiency. They consciously chose safety over speed, judging that a government that's hard to capture and hard to abuse is worth a government that's hard to move and sometimes can't act. So when citizens are furious about gridlock, they're experiencing the deliberate cost of a system designed above all to prevent concentrated power. As an analyst, you'd explain that this paralysis, frustrating as it is, flows directly from the Constitution working as designed: the checks that prevent tyranny are the same ones that produce gridlock, and that's the bargain the founders knowingly struck. You might add the nuanced point that while gridlock is built in, its modern severity raises a legitimate question about whether the balance between safety and the ability to govern has tipped too far, exactly the kind of real, unsettled debate that makes constitutional analysis more than memorizing rules.`,
            },
            {
              id: `c5`,
              title: `The power grab that gets checked`,
              type: `Separation of powers: resisting concentration`,
              description: `A popular, ambitious president tries to expand executive power dramatically, claiming the authority to spend money Congress didn't approve, ignore court rulings he dislikes, and act without legislative approval. He argues he's just being decisive and effective. One by one, the other branches push back. Trace how the system responds, and why it matters.`,
              questions: [
                `Which branches can check an overreaching president, and how?`,
                `Why does the system resist even a popular, well-meaning leader gaining more power?`,
                `What does this scenario reveal about the founders' deepest fear?`,
              ],
              evaluation: `This case is the constitutional system facing exactly the danger it was built to stop, the concentration of power in one set of hands, and tracing the response reveals the founders' deepest insight about power itself. First, which branches can check an overreaching president, and how? Both of the other branches have powerful tools. The judicial branch can use judicial review to declare the president's actions unconstitutional, if he spends money Congress didn't approve or ignores legal limits, courts can rule those actions illegal and void them. The legislative branch (Congress) has even more tools: it controls the "power of the purse" (the president generally cannot lawfully spend money Congress hasn't appropriated, so Congress can simply refuse funding), it can pass laws constraining executive action, it can refuse to confirm the president's appointments, it can conduct investigations and oversight, and in the most serious cases, it can impeach and remove the president for abuse of power. The president's attempt to ignore court rulings runs into the reality that he depends on others to carry out his will, and that defying the courts is itself an impeachable abuse. So the overreach gets met from multiple directions at once. Second, and this is the crucial conceptual point: why does the system resist even a popular, well-meaning leader gaining more power? Because the entire design is built on the principle that the danger isn't who holds power or their intentions, but the concentration of power itself. The founders, following Montesquieu, concluded that concentrated power tends toward abuse regardless of how it's acquired or how good the person seems, today's "decisive and effective" leader using expanded power for popular ends sets the precedent for tomorrow's leader to use that same expanded power for tyranny. The president's argument that he's "just being effective" is exactly the argument that erodes liberty, because efficiency and decisiveness are precisely what the system deliberately sacrifices to prevent the dangerous accumulation of power (the speed-safety tradeoff again). The branches resist not because the leader is necessarily bad, but because allowing power to concentrate, for any reason, in any hands, is the very thing the Constitution exists to prevent. Recall "ambition counters ambition": the system expects each branch to jealously guard its own powers and resist encroachment, so Congress and the courts push back partly out of institutional self-interest, and that self-interested resistance is exactly what protects everyone's liberty. Third, what does this reveal about the founders' deepest fear? Tyranny, the concentration of unchecked power in one person or group, which they had just fought a revolution to escape. They feared it so deeply that they designed a government that would resist it even when it comes dressed as popularity, effectiveness, and good intentions, because that's precisely how tyranny usually arrives, not as an obvious villain seizing power, but as a popular leader gradually accumulating it for seemingly good reasons. The whole architecture, divided power, separated branches, checks and balances, federalism, exists for this moment: to ensure that when someone reaches for too much power, the structure itself, not the goodwill of individuals, pushes back. As an analyst, you'd trace the multi-branch response (courts voiding illegal actions, Congress withholding funds, refusing appointments, investigating, ultimately impeachment) and explain that the system resists concentration regardless of the leader's popularity or intentions, because the founders' deepest conviction was that liberty is protected not by trusting good rulers, but by structuring power so that no ruler, however beloved, can accumulate enough of it to become a tyrant. This case is the Constitution doing the single most important job it was designed to do.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, explain how the Constitution divides power two different ways (federalism and separation of powers) and how checks and balances tie the branches together. Why does the system trade speed for safety, and is gridlock a flaw or a feature? Which case best showed you the design working? In 5-6 sentences.`,
          reflectionPrompt: `The Constitution was built by people who assumed leaders would reach for too much power, and engineered a structure to stop them, rather than just hoping for good rulers. How does it feel to live inside a machine deliberately designed around distrust, and do you think that distrust was wise?`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What problem were the writers of the U.S. Constitution mainly trying to solve in 1787?`,
              options: [
                `How to quickly crown an entirely new king to replace the old British one.`,
                `How to build a government strong enough to work but limited enough to avoid tyranny.`,
                `How to make every state completely independent from the others.`,
                `How to eliminate the need for any government at all.`,
              ],
              correctIndex: 1,
              explanation: `Having failed with the too-weak Articles of Confederation but fearing a new tyrant, the founders needed a government strong enough to function yet limited enough to stay safe. The distractors describe a king, total state independence, or no government.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is federalism?`,
              options: [
                `Dividing the national government into three separate branches.`,
                `Giving all power to the federal government in Washington.`,
                `Dividing power between a national government and the state governments.`,
                `Letting the president overrule any state law at will.`,
              ],
              correctIndex: 2,
              explanation: `Federalism divides power between the national (federal) government and the states, each with its own areas of authority. The distractors describe separation of powers, total centralization, or unchecked presidential power.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the three branches of the national government and their main jobs?`,
              options: [
                `Federal, state, and local, each governing a different region.`,
                `Legislative (makes laws), executive (enforces laws), judicial (interprets laws).`,
                `President, king, and a royal council, all of whom rule together.`,
                `House, Senate, and Supreme Court, which all make laws.`,
              ],
              correctIndex: 1,
              explanation: `The legislative branch (Congress) makes laws, the executive (president) enforces them, and the judicial (courts) interprets them. The distractors confuse branches with levels, invent a king, or misassign roles.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why did the founders separate the powers of government into different branches?`,
              options: [
                `Because combining law-making, enforcement, and judging in one hand invites tyranny.`,
                `Because three branches are simply easier to pay than one.`,
                `Because each branch represents a different state.`,
                `Because the British king himself ordered them to do it exactly that way.`,
              ],
              correctIndex: 0,
              explanation: `Separating the functions prevents any one person or group from making, enforcing, and judging the laws all at once, the recipe for tyranny, so real power requires cooperation. The distractors are trivial or false.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are "checks and balances"?`,
              options: [
                `A rule that the richest branch controls the others.`,
                `The requirement that all laws be reviewed by the states.`,
                `A system where the president checks everyone and no one checks him.`,
                `Specific powers each branch has to block or limit the other two.`,
              ],
              correctIndex: 3,
              explanation: `Checks and balances give each branch specific powers (veto, override, confirmation, judicial review, impeachment) to block or limit the others, so none can dominate. The distractors invent wealth-based or one-sided control.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `If the president vetoes a bill, how can Congress still make it law?`,
              options: [
                `By asking the Supreme Court to sign it instead.`,
                `By overriding the veto with a two-thirds vote in both chambers.`,
                `By waiting until a new president is elected.`,
                `Congress cannot ever overcome a veto.`,
              ],
              correctIndex: 1,
              explanation: `Congress can override a presidential veto with a two-thirds supermajority in both the House and Senate, a check running back against the executive. The distractors misassign the power or wrongly deny the override exists.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is judicial review?`,
              options: [
                `The courts' power to declare a law or action unconstitutional and void it.`,
                `The president's power to choose which laws to enforce.`,
                `Congress's power to rewrite court decisions whenever it wants.`,
                `The states' power to ignore any federal law they dislike.`,
              ],
              correctIndex: 0,
              explanation: `Judicial review is the courts' power, established in Marbury v. Madison (1803), to strike down laws or actions that violate the Constitution, the judiciary's key check on the other branches. The distractors misassign the power to other actors.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the U.S. system often produce gridlock and slow action?`,
              options: [
                `Because politicians are simply lazy and unmotivated.`,
                `Because the Constitution requires a king's approval for everything.`,
                `Because dividing power and requiring cooperation trades speed for safety, by design.`,
                `Because there are too few branches of government.`,
              ],
              correctIndex: 2,
              explanation: `By dividing power and requiring cross-branch cooperation, the system deliberately trades speed for safety; when cooperation breaks down, gridlock results, a built-in cost of resisting tyranny. The distractors blame laziness, a king, or too few branches.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Under the supremacy clause, the federal government can override any state law it wants, on any topic, which means states have no real independent power of their own.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals how federalism actually balances national unity against genuine state power. The supremacy clause does establish that federal law is the "supreme law of the land", but its reach is limited by two essential conditions, and missing those conditions leads to the misconception in this statement. The supremacy clause applies only when (1) there is a genuine conflict between a federal law and a state law, AND (2) the federal government is acting within its proper constitutional authority. When both conditions are met, federal law wins, this is the tie-breaker that keeps the country functioning as one nation, so that, for example, a single state cannot ignore valid national laws on interstate commerce, currency, or defense. But the clause does NOT give the federal government power to override "any state law it wants, on any topic." Far from it. Federalism reserves vast areas of authority to the states, where the federal government generally has no power to override them at all: most criminal law, education, traffic and local regulations, local elections, family law, and much more. In these areas, states exercise real, independent, constitutionally protected power, they are not merely "branch offices" of the national government. This is precisely why laws can differ so dramatically as you cross a state line, on speed limits, taxes, schooling, and countless other matters; that diversity reflects genuine state power that federal law does not touch. The supremacy clause is a limited tie-breaker for genuine conflicts within the federal government's proper domain, not a blanket grant of total federal control over everything. In fact, this balance is the whole point of federalism: it gives the national government enough supremacy in its proper areas to keep the country unified, while preserving enough independent state power to keep the system diverse, adaptable, and resistant to total central control, with states even serving as "laboratories of democracy" that can test new policies on their own. So the statement is false: states retain enormous real, independent power, and the supremacy clause overrides state law only in cases of genuine conflict within the federal government's legitimate authority, not on any topic the federal government might choose.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A new president announces he will spend money Congress never approved, ignore court rulings he disagrees with, and govern without legislative approval, insisting he's "just being efficient." Using the lesson, what's the best analysis of what should happen?`,
              options: [
                `The president should be allowed to proceed, since efficiency is the most important goal of government.`,
                `Nothing can stop him, because the president is the most powerful branch and answers to no one.`,
                `The system is designed to check exactly this: courts can void his illegal actions, and Congress can withhold funding, refuse appointments, investigate, and ultimately impeach, because the design resists concentrated power regardless of a leader's popularity or intentions.`,
                `Only the voters in the next election can ever respond, and until then he has unlimited power.`,
              ],
              correctIndex: 2,
              explanation: `This is precisely the danger the system is built to stop. Courts can use judicial review to void illegal actions; Congress controls funding, confirmations, oversight, and impeachment. The design resists concentrated power regardless of the leader's popularity or intentions, ambition countering ambition. The distractors prize efficiency over liberty or wrongly claim the president is unchecked.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-distrust`, category: `A machine built on distrust`, prompt: `The Constitution was built by people who assumed leaders would reach for too much power, and engineered a structure to stop them rather than hoping for good rulers. How does it feel to live inside a machine deliberately designed around distrust, and do you think that distrust was wise?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, "the Constitution" was probably just a famous old document. What surprised you most about seeing it as a working machine for dividing power, and did anything change in how you understand the government around you?` },
            { id: `reflect-tradeoff`, category: `Speed versus safety`, prompt: `The founders chose safety over speed, accepting gridlock to prevent tyranny. Knowing that tradeoff, do you think they got the balance right, or has it tipped too far in one direction for the modern world? What's your reasoning?` },
            { id: `reflect-heritage`, category: `Teaching the machine`, prompt: `Caro, you're building social studies for conscious families. How would you help a child see the Constitution not as rules to memorize but as a machine they can read, maybe using a household example of dividing power, so government feels understandable rather than intimidating?` },
            { id: `reflect-application`, category: `Spotting the machine`, prompt: `Now that you can see federalism, separation of powers, and checks and balances, where might you notice them operating in the news or in your own state? What would you watch for to tell whether the system is working as designed?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Judicial review lets unelected judges overrule elected officials, and gridlock can stop government from acting even on urgent problems. What's the strongest objection to this design, and how would you answer it, or do you find the objection convincing?` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Run the Constitutional Machine`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a working model of how the Constitution actually divides and checks power, so the machine becomes something your family can see and feel. Start by mapping the two divisions: on paper, draw the vertical split of federalism (national government on top, your state below, with examples of what each controls, defense and currency for federal; schools, traffic, and local law for the state) and the horizontal split of separation of powers (three boxes: legislative makes laws, executive enforces, judicial interprets). Then play the checks-and-balances game: assign family members to be Congress, the president, and the courts, and run a pretend law through the system. Congress "passes" a household rule; the president can sign or veto it; if vetoed, Congress tries to override with a two-thirds vote; the courts can strike it down if it breaks the "household constitution" you agreed on. Watch how hard it is to get anything through when the branches disagree, that's the system working. Stage a power grab: have the "president" try to seize too much power (make rules alone, ignore the courts, spend without approval) and let the other branches push back using their real tools (withholding funding, refusing to confirm, striking down actions, even "impeachment"). Feel how the structure, not anyone's goodwill, stops the overreach. Explore federalism in real life: look up two or three laws that differ between your state and a neighboring one (speed limits, sales tax, age rules), and discuss why federalism allows that, and whether it's a strength or a frustration. Find the machine in the news: pick a current story about Congress and the president clashing, a veto, a confirmation fight, a court ruling, or a government shutdown, and identify which part of the constitutional machine is operating and whether it's preventing tyranny, producing gridlock, or both. Finally, debate the big tradeoff as a family: was choosing safety over speed the right call? Have people argue both sides. The goal is to move past memorizing "three branches" to actually understanding the Constitution as an ingenious, deliberately frustrating machine for dividing power, one you can now read, analyze, and judge for yourself whenever you encounter it in the real world.`,
          },
          projectOption: {
            title: `The Constitutional Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate how the Constitution's machinery operates in real life, becoming an analyst who can read government the way an engineer reads a machine. Week 1, track the machine in action: choose a real, ongoing or historical example of the constitutional system at work, a major bill moving through Congress, a presidential veto and possible override, a Supreme Court case striking down or upholding a law, a confirmation battle over a nominee, a federal-versus-state legal conflict, or a government shutdown. Research it carefully and analyze it through the lesson's framework: Which branches and levels of government are involved? Which mechanism is operating, veto, override, judicial review, confirmation, the supremacy clause, impeachment, the power of the purse? Is the system preventing an abuse of power, producing gridlock, or both? Document the play-by-play and identify exactly where each check and balance appears. Week 2, evaluate and propose: step back and assess what your case reveals about the design. Did the system work as the founders intended? Did it protect against concentrated power, or did it produce paralysis on something important, or both at once? Then take a position on the central tradeoff: based on your case, did the founders get the balance between safety and speed right, or should something be adjusted? If you think a change is warranted, propose a specific reform (and honestly weigh what it would cost, since loosening a check to gain speed usually means losing some protection against power). Produce your final piece, an analytical report, a slide deck, a video explainer, or a visual "machine diagram" of your case, that walks through the constitutional mechanics step by step, identifies every check and balance in play, and delivers your reasoned judgment on whether the design served the country well in this instance. The aim is to experience constitutional analysis as a real skill: not memorizing the branches, but reading the living machinery of government, tracing how power flows and gets checked, and forming your own evidence-based judgment about one of the most consequential pieces of engineering in human history, the one you live inside every day.`,
            offerToParent: `Parent: opt your child into the Constitutional Analyst Project. Tracking a real example of constitutional machinery, a veto and override, a Supreme Court ruling, a federal-state conflict, a confirmation fight, or a shutdown, then analyzing which checks and balances are operating and whether the system is preventing tyranny or producing gridlock, directly develops the core C3 Framework civics concepts: the structure and functions of government, federalism, separation of powers, checks and balances, and how constitutional principles operate in practice. Evaluating whether the design served the country well, and proposing reasoned reforms with honest tradeoffs, builds civic reasoning, current-events literacy, and analytical thinking. It's rigorous, standards-aligned work that turns the Constitution from a document to memorize into a living system your child can read and judge.`,
          },
          identityQuestion: `If you become someone who can look at any government clash, a veto, a court ruling, a shutdown, a power grab, and read exactly which part of the machine is operating and why, who understands the Constitution as an ingenious structure for dividing power rather than a list of rules, what kind of citizen does that make you, one who can hold power accountable because you understand how it's meant to be checked, that someone who sees only confusing political noise never can?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read the Constitution as a machine for dividing power.`,
            `A person who can spot checks and balances operating in the real news.`,
            `Someone who understands why government is slow, and why that's on purpose.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just looked under the hood of the machine you live inside every day, and now you can read it. You saw the problem the founders faced in 1787: needing a government strong enough to work but limited enough to stay safe, after their first attempt, the Articles of Confederation, proved too weak to function. You learned their ingenious solution, dividing power so the pieces check each other, drawn straight from Montesquieu and built on a realistic, even cynical, assumption that people will reach for power. You traced the two divisions: federalism, splitting power between the nation and the states, with the supremacy clause as tie-breaker and states as "laboratories of democracy"; and separation of powers, splitting the national government into legislative, executive, and judicial branches. You saw how checks and balances, the veto and override, confirmation, judicial review, impeachment, tangle the branches together so none can dominate, with ambition set against ambition. And as a constitutional analyst, you worked through real collisions: a veto fight, a state-federal clash, a court striking down a law, a gridlock standoff, and a power grab that got checked, seeing the system trade speed for safety on purpose. You can now look at any political clash and read the machinery underneath it. Next, we turn from the structure of power to the protections against it: the civil liberties and civil rights that guard individuals even from the government, and from the majority, and how those protections have been fought for and expanded across history. Onward, {name}. — Atlas`,
          badge: `constitution-architect`,
          badgeName: `Constitution Architect`,
          xpEarned: 75,
          competencies: [
            `Understands the problem the Constitution was designed to solve: power without tyranny`,
            `Knows federalism: power divided between national and state governments`,
            `Understands the supremacy clause and the genuine independent power states retain`,
            `Knows separation of powers: the legislative, executive, and judicial branches and their jobs`,
            `Understands checks and balances: veto, override, confirmation, judicial review, impeachment`,
            `Grasps the deliberate speed-safety tradeoff and why gridlock is partly built in`,
            `Can analyze real political conflicts by identifying the constitutional mechanisms at work`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Civil Liberties and Civil Rights — A Living History`,
            hook: `The protections that guard individuals even from the government and the majority, and the long fight to expand them. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L02 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
