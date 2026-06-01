// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L11 — Followership
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Leadership Theory, Applied Ethics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (loyal effective / engaged critical / dynamic role-switching)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l11-v1";

const SOCIALLEADERSHIP_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-11`,
      title: `Followership`,
      duration: 35,
      xpReward: 75,
      badge: `effective-follower`,
      badgeName: `Effective Follower`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, almost everything about leadership focuses on leaders. But for every leader, there are many followers, and the quality of followership shapes outcomes as much as the quality of leadership. Real research on followership has been developing since the 1990s and identifies specific patterns of what makes followers effective. Today we work through three positions: loyal effective followership (execute well, support the leader), engaged critical followership (think for yourself, challenge bad leadership), and dynamic role-switching (move between leading and following situationally). The question matters because you'll spend much of your life as a follower in some contexts even as you lead in others. The skills are distinct and equally important.`,
          headline: `Followership`,
          subtitle: `The other half of leadership. Distinct skills, equally important.`,
          visual: `/voyager-assets/social-leadership/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Followership Matters`,
          paragraphs: [
            `Most leadership content treats followers as the passive background against which leaders act. The implicit story: leaders lead, followers follow, the interesting question is the leader. This framing is both inaccurate and limiting. Most decisions in organizations and groups are shaped at least as much by followers as by leaders. A skilled follower amplifies a leader's good decisions and tempers their bad ones; an unskilled follower can undermine even excellent leadership.`,
            `Robert Kelley's 1992 book "The Power of Followership" was one of the first major academic works to take followership seriously as a distinct subject. Kelley studied effective followers across organizations and identified patterns that differed from passive compliance. His framework distinguishes followers along two dimensions: independent thinking (do you think for yourself or just go along?) and active engagement (do you do the work or just go through motions?). Effective followers score high on both: they think for themselves AND engage actively.`,
            `Ira Chaleff's "The Courageous Follower" (1995) extended this work into more ethically demanding territory. Chaleff identified five dimensions of effective followership: courage to assume responsibility (taking ownership rather than waiting to be told), courage to serve (doing the work that needs doing), courage to challenge (speaking up when something is wrong), courage to participate in transformation (helping things change when needed), and courage to take moral action (refusing complicity in wrong actions).`,
            `Barbara Kellerman's "Followership" (2008) added empirical research showing that effective followership has been systematically undervalued in both research and practice. Her work identified five types of followers based on level of engagement: isolates (entirely disengaged), bystanders (aware but uninvolved), participants (engaged at standard level), activists (highly engaged on specific issues), and diehards (deeply committed across the board). Different followership types produce different outcomes; teams with too many of any one type tend to function badly.`,
            `One important insight from this research. Followership is its own skill, not just the absence of leadership skill. Effective followers know how to: execute well on what they've agreed to do, raise concerns through appropriate channels, support good decisions even when not their preferred ones, push back on bad decisions without becoming obstructive, build trust with leaders while maintaining their own judgment, and shift to leadership when situations call for it.`,
          ],
          image: `/voyager-assets/social-leadership/l11-s1-matters.webp`,
          imageCaption: `Followership matters. Real research since 1990s identifies it as distinct skill. Kelley, Chaleff, Kellerman.`,
          vocab: [
            {
              word: `effective followership (Kelley)`,
              definition: `Followership characterized by both independent thinking and active engagement, identified by Robert Kelley in "The Power of Followership" (1992). Distinct from passive compliance (high engagement but no independent thinking) and from cynical disengagement (independent thinking but no active engagement). Effective followers think for themselves AND engage actively in shared work.`,
              audioPrompt: `Effective followership is followership characterized by both independent thinking and active engagement, identified by Robert Kelley in his 1992 book "The Power of Followership," {name}. Kelley distinguished followers along two dimensions. Independent thinking: do you think for yourself or just go along with whatever's directed? Active engagement: do you do the work or just go through motions? Effective followers score high on both. They think for themselves AND engage actively. Passive followers engage actively but don't think for themselves; they execute well but don't add their own judgment. Cynical followers think for themselves but don't engage actively; they have opinions but don't contribute. Both alternatives fall short of effective followership. The framework helps you both evaluate your own followership behavior and develop the specific capabilities that effective followership requires. Most leadership content ignores this distinction; explicit framework gives you what most adults don't have.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Loyal Effective Followership`,
          paragraphs: [
            `The first position: a good follower executes well on what leaders direct, supports the leader's vision, and is a reliable team member. Followership is its own skill that contributes to organizational success. Constant challenging or second-guessing prevents teams from functioning. The follower's job is to make the leader and the larger mission successful, not to make their own preferences dominant.`,
            `The case has real strength. Most successful organizations require many people who execute well on direction without constantly relitigating decisions. A military unit can't function if every order is debated. A company can't operate if every strategic decision is challenged by individual employees. A team can't perform if individual members constantly push their own preferences. Some level of trust and follow-through on shared direction is necessary for collective work to happen.`,
            `Defenders include much of military and athletic tradition, business management focused on execution, religious traditions that emphasize community submission to spiritual authority, parts of Confucian ethics on hierarchy and harmony, and many working professionals across fields who've experienced the costs of teams without sufficient loyalty and execution. Examples include military units, sports teams, surgical teams, and tightly-coordinated business operations where execution requires aligned action.`,
            `The position also recognizes that constant challenging is exhausting and often unproductive. Most decisions in organizations aren't crucial; relitigating them wastes time without changing outcomes. Most leader decisions are reasonable even when not optimal; pushing back on every decision produces friction without proportional benefit. Strong loyal followers free leaders to focus on the decisions that actually matter while ensuring execution on those that don't require ongoing debate.`,
            `The limits. Pure loyal-execution followership can produce serious problems when leaders are wrong. Military history includes many examples of catastrophic outcomes from loyal execution of bad orders. Business history includes companies that collapsed because employees executed loyally on doomed strategies. Family and religious systems with too much loyalty can perpetuate abuse and prevent reform. The "good German" problem from World War II illustrates the extreme case: loyal effective followers can enable terrible outcomes when leaders are evil. Loyal followership without judgment about when to challenge is dangerous.`,
          ],
          image: `/voyager-assets/social-leadership/l11-s2-loyal.webp`,
          imageCaption: `Position 1: loyal effective followership. Execute, support, be reliable. Military, athletic, business management traditions. Real value, real limits.`,
          vocab: [
            {
              word: `the "good German" problem`,
              definition: `Reference to ordinary Germans who loyally executed Nazi orders during WWII without active malice but without resistance to evident wrong. Hannah Arendt's "Eichmann in Jerusalem" (1963) and her concept of "the banality of evil" engaged with this problem directly. The concept names the failure mode of pure loyal followership: doing what authority says without independent moral judgment can enable terrible outcomes even when individual followers aren't malicious.`,
              audioPrompt: `The good German problem is a reference to ordinary Germans who loyally executed Nazi orders during World War Two without active malice but without resistance to evident wrong, {name}. Hannah Arendt's 1963 book "Eichmann in Jerusalem" engaged with this problem directly through her concept of "the banality of evil." Arendt argued that Adolf Eichmann, who organized much of the logistics of the Holocaust, wasn't a sadistic monster but a bureaucrat who executed his job competently without moral reflection. The horror wasn't malice; it was the absence of moral thought combined with effective execution. The concept names the failure mode of pure loyal followership: doing what authority says without independent moral judgment can enable terrible outcomes even when individual followers aren't malicious. The problem applies far beyond Nazi Germany. Every authoritarian system has involved many ordinary people executing orders that, with reflection, they would have refused. The good-German problem is the strongest argument against pure loyal-execution followership.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Engaged Critical Followership`,
          paragraphs: [
            `The second position: a good follower thinks for themselves, challenges bad leadership through appropriate channels, raises concerns about decisions they question, and refuses to comply with actions that are clearly wrong. The "good German" problem demonstrates the catastrophic cost of pure loyal execution. Followership without judgment isn't actually a virtue; it's a way of being complicit in whatever the leader does.`,
            `The case has real strength. The most influential research on obedience to authority — Stanley Milgram's experiments at Yale in the 1960s — showed that most ordinary people will follow authority figures to do things they would never do on their own initiative, including (in the experimental setup) administering what they believed were painful electric shocks to others. The experiments have been replicated across cultures and time periods. Pure followership instinct is strong; it produces compliance with terrible directives more often than people predict.`,
            `Solomon Asch's conformity experiments (1950s) showed similar patterns: people will go along with group consensus even when the consensus is clearly wrong about easily verifiable facts. The combination of authority pressure and group pressure can produce compliance with wrong direction from people who, in isolation, would have known better.`,
            `Ira Chaleff's "The Courageous Follower" (1995) explicitly addresses this challenge. His framework's middle dimensions — courage to challenge, courage to participate in transformation, courage to take moral action — describe what effective followership looks like when leaders go wrong. The framework rejects both passive loyalty and reflexive opposition; the goal is engaged critical participation that strengthens the organization while preventing the worst outcomes when leadership fails.`,
            `Defenders include Chaleff, contemporary leadership researchers who emphasize psychological safety and dissent, organizational ethics literature, military ethics in modern democracies (which explicitly trains soldiers to refuse illegal orders), professional ethics in medicine and other fields, and people who've studied institutional failures. Examples include the engineers at Boeing who tried to raise safety concerns about the 737 MAX, the FBI agents who warned about pre-9/11 intelligence, and many institutional whistleblowers across history.`,
            `The position recognizes that good leadership requires good followership including willingness to challenge. Leaders who surround themselves with pure loyalists make worse decisions because they don't get the information and pushback that prevents errors. Leaders genuinely interested in good outcomes typically value engaged critical followers more than passive loyalists, though the dynamics can be hard.`,
            `The limits. The position requires significant judgment about what to challenge and how. Constant challenging of every decision produces friction without benefit; selecting the right battles requires skill. Critical engagement without trust and execution becomes obstruction rather than contribution. The framework also doesn't fully address how to balance critical engagement with continued participation when challenges aren't accepted. And the framing can be used to justify obstruction by people who simply disagree with reasonable leadership decisions.`,
          ],
          image: `/voyager-assets/social-leadership/l11-s3-critical.webp`,
          imageCaption: `Position 2: engaged critical followership. Think for yourself, challenge bad leadership, refuse complicity. Milgram, Asch, Chaleff, institutional ethics.`,
          vocab: [
            {
              word: `Milgram experiments`,
              definition: `Stanley Milgram's 1960s experiments at Yale studying obedience to authority. Subjects were instructed by an experimenter to administer what they believed were increasingly painful electric shocks to another person (actually an actor). Most subjects continued administering shocks past what they would have predicted, demonstrating that obedience to authority can override individual moral judgment in many people. Replicated across cultures and time periods.`,
              audioPrompt: `The Milgram experiments are Stanley Milgram's 1960s experiments at Yale studying obedience to authority, {name}. Subjects were told they were participating in a learning experiment. They were instructed by an authority figure (an experimenter in a lab coat) to administer what they believed were increasingly painful electric shocks to another person when the person answered incorrectly. The other person was actually an actor; no shocks were actually administered. Subjects didn't know this; they believed they were really shocking someone. Despite the apparent screams and protests from the actor, most subjects continued administering shocks past what they had predicted they would. Many continued to the highest setting on the apparatus. The experiments demonstrated that obedience to authority can override individual moral judgment in many people. Most subjects, asked beforehand, would have said they wouldn't comply with such instructions; most actually did comply. The experiments have been replicated across cultures and time periods. The findings are sobering: pure followership instinct is stronger than people predict, and it can produce compliance with terrible directives.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Dynamic Role-Switching`,
          paragraphs: [
            `The third position: leadership and followership are situational roles, not fixed identities. The same person should be able to lead in one context and follow in another, depending on what the situation requires. The skill is knowing which role to take when, and being able to do both well. Many groups perform best when leadership rotates based on expertise, situation, and need rather than remaining fixed.`,
            `The case has real strength. Most working teams have multiple leaders depending on context. A project leader may follow a technical expert on technical questions. A senior person may follow a junior expert on emerging topics. A team captain may follow a teammate's call on a specific play. Fixed hierarchy works for some situations; situational role-switching works for many others. Organizations that can fluidly shift leadership often outperform organizations with rigid hierarchies.`,
            `Defenders include contemporary research on "shared leadership" (where leadership distributes across multiple team members), agile and self-organizing team frameworks, military doctrine on distributed leadership in modern unconventional warfare, parts of community organizing tradition, and research on high-performing teams across many fields. Stephen Covey's "The 7 Habits of Highly Effective People" includes related ideas, though without the explicit followership framing.`,
            `The position fits with research showing that pure hierarchical models perform badly in conditions of complexity, distributed knowledge, and rapid change. Fixed hierarchies optimize for clear command structure but lose information from people closer to specific situations. Dynamic role-switching captures expertise wherever it actually exists in the group, which often produces better outcomes than expertise being constrained by formal rank.`,
            `Practical implications. Develop both leadership and followership skills explicitly. Recognize that you'll be in many situations where you should follow (someone else has better information, expertise, or judgment about the specific question), and many where you should lead (you have specific information, expertise, or judgment others don't). The skill is reading the situation accurately, not defending a fixed identity as "leader" or "follower."`,
            `The position also addresses the ethical dimension. Following well requires the same moral judgment as leading well. The "good German" problem applies to followers who lack independent moral thought; dynamic role-switching includes refusing roles you shouldn't take regardless of formal authority. Critical engagement applies in both directions: when you're leading, you should welcome critical engagement from followers; when you're following, you should provide it.`,
            `The limits. Dynamic role-switching requires both leadership and followership skills to be well-developed, plus the situational judgment to know which to deploy. Many people are skilled at one but not the other; they often default to the role they're comfortable with even when the situation calls for the other. Dynamic role-switching also doesn't always work in formal hierarchies where rank determines authority regardless of situation. And the framing can become an excuse for leaders to avoid hard decisions ("I'm following the team's lead") or for followers to undermine necessary authority ("I'm exercising leadership here").`,
          ],
          image: `/voyager-assets/social-leadership/l11-s4-dynamic.webp`,
          imageCaption: `Position 3: dynamic role-switching. Lead and follow situationally based on expertise and need. Shared leadership research, agile frameworks, distributed teams.`,
          vocab: [
            {
              word: `shared leadership`,
              definition: `Contemporary research framework where leadership distributes across multiple team members rather than residing in a single person. Different members lead based on expertise, situation, or need. Different from rotating leadership (where leadership cycles through people) or hierarchical leadership (where one person leads always). Often correlates with high team performance in complex situations with distributed knowledge.`,
              audioPrompt: `Shared leadership is a contemporary research framework where leadership distributes across multiple team members rather than residing in a single person, {name}. Different members lead based on expertise, situation, or need. Different from rotating leadership, which is where leadership cycles through people on a schedule, regardless of situation. Different from hierarchical leadership, where one person leads always regardless of context. Shared leadership is more situational than either. Has been studied across many team types: software development (where agile frameworks formalize aspects of shared leadership), military special operations (where small units distribute leadership during operations), surgical teams (where different members lead different phases), scientific research teams (where different members lead in their specialties), and community organizing (where leadership emerges from the people closest to specific work). Research consistently finds shared leadership correlates with high team performance in complex situations with distributed knowledge. Fixed hierarchical leadership often outperforms shared leadership in situations requiring clear command structure and quick decisions.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature views blend elements: loyal execution where appropriate, critical engagement when warranted, dynamic role-switching when situations require. The forcing function of the argument is committing to a primary framing.`,
            `One framing to consider. Each position implies different defaults in ambiguous situations. Position 1: default to executing on direction; raise concerns through proper channels but don't obstruct. Position 2: default to thinking critically about every significant decision; speak up when something seems wrong. Position 3: default to assessing what the situation calls for and adjusting your role accordingly. Most people have one implicit default; making it explicit is the first step.`,
            `Another framing. The right position may depend on context. Some contexts genuinely require strong loyal execution (crisis response, time-sensitive operations, formal hierarchies with clear roles). Some require strong critical engagement (ethical violations, strategic errors, decisions made without adequate information). Some benefit from dynamic role-switching (complex projects, distributed expertise, evolving situations). Maturity is having all three available and knowing when to use which.`,
            `One last framing. You'll spend much of your life as a follower in some contexts. Family roles. School roles. Work roles. Religious or community roles. Friendships. The followership skills you build matter as much as the leadership skills. Most adults focus exclusively on leadership and never develop explicit followership capability. Building both at 12 puts you ahead of most working adults.`,
          ],
          image: `/voyager-assets/social-leadership/l11-s5-before.webp`,
          imageCaption: `Three positions on followership. Most adults focus on leadership only; explicit followership skill is rare.`,
          vocab: [
            {
              word: `followership skill (as distinct skill)`,
              definition: `Specific competencies of effective followership: executing well on agreed direction, raising concerns through appropriate channels, supporting good decisions including not-preferred ones, pushing back on bad decisions without becoming obstructive, building trust with leaders while maintaining own judgment, shifting to leadership when situations call for it. Distinct from leadership skill though overlapping. Real research field since 1990s.`,
              audioPrompt: `Followership skill as a distinct skill refers to the specific competencies of effective followership, {name}. These include executing well on what you've agreed to do, raising concerns through appropriate channels rather than passive aggressive resistance, supporting good decisions including ones that weren't your preferences, pushing back on bad decisions without becoming generally obstructive, building trust with leaders while maintaining your own judgment, and shifting to leadership when situations call for it. Distinct from leadership skill though overlapping. Real research field since the 1990s through work by Robert Kelley, Ira Chaleff, Barbara Kellerman, and others. Most leadership content doesn't address followership skill explicitly, which leaves most adults with much better leadership development than followership development. The asymmetry produces predictable problems: people who can lead but can't follow well struggle in roles where they need to follow, and they undervalue followership skills in others. Developing both deliberately is part of leadership maturity.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l11-argument-builder`,
          type: `argument-builder`,
          headline: `What Makes A Good Follower?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious researchers and practitioners defend each.`,
          positions: [
            {
              id: `loyal-effective`,
              label: `Loyal effective followership: execute well, support the leader, be reliable`,
              summary: `Good follower executes on direction, supports leader's vision, is reliable team member. Constant challenging prevents functioning; some trust and follow-through on shared direction is necessary for collective work. Defenders include military and athletic tradition, business management focused on execution, religious traditions, parts of Confucian ethics, working professionals who've experienced costs of insufficient loyalty. Strength: enables coordinated action; frees leaders to focus on decisions that actually matter; most decisions don't require relitigation. Limit: can enable terrible outcomes when leaders are wrong; "good German" problem; loyal followership without judgment is dangerous.`,
            },
            {
              id: `engaged-critical`,
              label: `Engaged critical followership: think for yourself, challenge bad leadership, refuse complicity`,
              summary: `Good follower thinks for themselves, challenges bad leadership through appropriate channels, raises concerns, refuses to comply with clearly wrong actions. "Good German" problem demonstrates the catastrophic cost of pure loyal execution. Defenders include Ira Chaleff's "Courageous Follower" (1995), contemporary leadership research, Milgram/Asch findings on dangerous obedience, military ethics in modern democracies, institutional whistleblowers. Strength: prevents catastrophic outcomes; produces better decisions; addresses real research on obedience risks. Limit: requires significant judgment about what to challenge and how; constant challenging produces friction; can excuse obstruction by people who simply disagree.`,
            },
            {
              id: `dynamic-switching`,
              label: `Dynamic role-switching: lead and follow situationally based on expertise and need`,
              summary: `Leadership and followership are situational roles, not fixed identities. Same person should lead in some contexts, follow in others, based on what situation requires. Defenders include contemporary "shared leadership" research, agile and self-organizing team frameworks, military doctrine on distributed leadership, community organizing tradition, Stephen Covey's related work. Strength: captures expertise wherever it exists in the group; produces better outcomes in complexity; addresses real research showing pure hierarchy performs badly in complex situations. Limit: requires both leadership and followership skills well-developed plus situational judgment; doesn't work in formal hierarchies where rank determines authority; can excuse avoiding hard decisions.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Robert Kelley's "The Power of Followership" (1992) was one of the first major academic works to take followership seriously as a distinct subject. His framework distinguishes followers along two dimensions: independent thinking and active engagement. Effective followers score high on both.`,
              source: `Kelley 1992 and subsequent research`,
            },
            {
              id: `e2`,
              text: `Most successful organizations require many people executing on direction without constantly relitigating decisions. Military units can't function if every order is debated. A team can't perform if individual members constantly push their own preferences. Some level of loyal execution is necessary for collective work.`,
              source: `Organizational behavior research and military doctrine`,
            },
            {
              id: `e3`,
              text: `Stanley Milgram's 1960s experiments showed most ordinary people will follow authority to do things they wouldn't do on their own initiative, including administering what they believed were painful shocks. Pure followership instinct is strong and can produce compliance with terrible directives.`,
              source: `Milgram 1963+ and many replications across cultures`,
            },
            {
              id: `e4`,
              text: `Ira Chaleff's "The Courageous Follower" (1995) identified five dimensions of effective followership: courage to assume responsibility, courage to serve, courage to challenge, courage to participate in transformation, courage to take moral action. The framework addresses how followers should engage when leaders go wrong.`,
              source: `Chaleff 1995 and ongoing followership ethics work`,
            },
            {
              id: `e5`,
              text: `Hannah Arendt's "Eichmann in Jerusalem" (1963) and her concept "the banality of evil" engaged with the "good German" problem: ordinary people executing terrible orders without moral reflection. The concept names the failure mode of pure loyal followership across many contexts.`,
              source: `Arendt 1963 and subsequent moral philosophy`,
            },
            {
              id: `e6`,
              text: `Contemporary research on "shared leadership" shows leadership distributes across multiple team members in high-performing teams in complex situations. Different members lead based on expertise, situation, or need. Often outperforms fixed hierarchy in complexity.`,
              source: `Shared leadership research; multiple sources`,
            },
            {
              id: `e7`,
              text: `Leaders who surround themselves with pure loyalists make worse decisions because they don't get the information and pushback that prevents errors. Leaders genuinely interested in good outcomes typically value engaged critical followers more than passive loyalists.`,
              source: `Decision-making research; team performance studies`,
            },
            {
              id: `e8`,
              text: `Most leadership content doesn't address followership explicitly, leaving most adults with much better leadership development than followership development. The asymmetry produces predictable problems: people who can lead but can't follow well struggle in roles where they need to follow.`,
              source: `Leadership development literature and observed patterns`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions treat the leader/follower distinction as real and meaningful, with followership being a distinct role and skill from leadership. But maybe the entire distinction is dated. Modern work happens increasingly in flat structures, peer relationships, distributed teams, networks rather than hierarchies. The 'follower' role is becoming less common as a primary identity; most working adults are simultaneously leading and following in different relationships throughout each day. If that's right, the framing of 'what makes a good follower' might be approaching a question that increasingly doesn't apply to how people actually work and live. Why think 'followership' is still the right frame, when modern collaboration may be making the leader/follower distinction increasingly obsolete?"`,
            promptInstruction: `In 3-4 sentences, respond. Is "followership" still a useful distinct frame, or is modern collaboration making the distinction obsolete? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "effective followership" (Kelley)?`,
              options: [
                `Just doing what told`,
                `Followership characterized by both independent thinking AND active engagement; from Robert Kelley's "The Power of Followership" (1992); distinct from passive compliance (engagement without thinking) and cynical disengagement (thinking without engagement); effective followers think for themselves AND engage actively in shared work`,
                `Random pattern`,
                `Following orders`,
              ],
              correctIndex: 1,
              explanation: `The framework helps you both evaluate your own followership behavior and develop the specific capabilities effective followership requires. Most leadership content ignores this distinction; explicit framework gives you what most adults don't have.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the "loyal effective followership" position argue?`,
              options: [
                `Be obedient`,
                `Good follower executes on direction, supports leader's vision, is reliable team member; constant challenging prevents teams from functioning; some trust and follow-through is necessary for collective work; defenders include military and athletic tradition, business management focused on execution, parts of Confucian ethics`,
                `Be passive`,
                `Random position`,
              ],
              correctIndex: 1,
              explanation: `The position has real strength: military units and similar organizations need loyal execution to function. Limit: can enable terrible outcomes when leaders are wrong; the "good German" problem.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "the good German problem"?`,
              options: [
                `Ethnic stereotype`,
                `Reference to ordinary Germans who loyally executed Nazi orders during WWII without active malice but without resistance to evident wrong; Hannah Arendt's "banality of evil" concept; names the failure mode of pure loyal followership — doing what authority says without independent moral judgment can enable terrible outcomes`,
                `Cultural critique`,
                `Random reference`,
              ],
              correctIndex: 1,
              explanation: `Arendt argued Eichmann wasn't a sadistic monster but a bureaucrat who executed his job competently without moral reflection. The horror wasn't malice; it was the absence of moral thought combined with effective execution. The problem applies far beyond Nazi Germany.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did the Milgram experiments show?`,
              options: [
                `Random study`,
                `Stanley Milgram's 1960s Yale experiments on obedience to authority; subjects instructed to administer what they believed were painful electric shocks; most continued past what they would have predicted; demonstrated obedience to authority can override individual moral judgment in many people; replicated across cultures`,
                `People are nice`,
                `Random results`,
              ],
              correctIndex: 1,
              explanation: `Most subjects, asked beforehand, said they wouldn't comply; most actually did. The findings are sobering: pure followership instinct is stronger than people predict and can produce compliance with terrible directives. Foundational study for the engaged-critical followership position.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does Ira Chaleff's "Courageous Follower" framework include?`,
              options: [
                `Random list`,
                `Five dimensions of effective followership: courage to assume responsibility (ownership), courage to serve (do the work), courage to challenge (speak up when something's wrong), courage to participate in transformation (help things change), courage to take moral action (refuse complicity in wrong actions); from his 1995 book`,
                `Five emotions`,
                `Five personality types`,
              ],
              correctIndex: 1,
              explanation: `The framework's middle dimensions (challenge, transformation, moral action) describe what effective followership looks like when leaders go wrong. Rejects both passive loyalty and reflexive opposition; goal is engaged critical participation.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "shared leadership" (contemporary research)?`,
              options: [
                `Group leader`,
                `Framework where leadership distributes across multiple team members rather than residing in one person; different members lead based on expertise, situation, or need; different from rotating leadership and from hierarchical leadership; correlates with high team performance in complex situations with distributed knowledge`,
                `Co-leaders`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Studied across software development (agile frameworks), military special operations, surgical teams, scientific research teams, community organizing. Pure hierarchy often outperforms shared leadership in situations requiring clear command structure; shared leadership outperforms in complexity.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why do leaders who surround themselves with pure loyalists make worse decisions?`,
              options: [
                `Random claim`,
                `They don't get the information and pushback that prevents errors; pure loyalists execute on bad decisions without flagging them; leaders genuinely interested in good outcomes typically value engaged critical followers more than passive loyalists`,
                `Loyalists are lazy`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `This is one of the strongest practical arguments for engaged critical followership: it actually produces better outcomes for the organization, not just better ethics. Leaders who genuinely want good results should welcome the pushback rather than seeking pure loyalty.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "followership skill" as a distinct skill?`,
              options: [
                `Just compliance`,
                `Specific competencies of effective followership: executing well on agreed direction, raising concerns through appropriate channels, supporting good decisions including not-preferred ones, pushing back on bad decisions without becoming obstructive, building trust with leaders while maintaining own judgment, shifting to leadership when situations call for it; distinct from leadership skill though overlapping`,
                `Listening`,
                `Random skill`,
              ],
              correctIndex: 1,
              explanation: `Real research field since the 1990s through work by Kelley, Chaleff, Kellerman. Most leadership content doesn't address followership explicitly, leaving most adults with much better leadership development than followership development. The asymmetry produces predictable problems.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Most mature views blend elements: loyal execution where appropriate, critical engagement when warranted, dynamic role-switching when situations require. Maturity is having all three available and knowing when to use which.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "My coach told me to do something that I think is going to hurt my long-term joint health, but I should just do it because he's the coach." Based on this lesson, what should you point out?`,
              options: [
                `"Just do it"`,
                `"That's close to position 1 (loyal effective followership) but it's missing the engaged-critical layer. Pure loyalty without judgment can produce real harm — that's exactly the 'good German' problem applied to a smaller scale. Better followership involves both executing on legitimate direction AND raising concerns through appropriate channels when something seems wrong. A coach with good judgment will welcome legitimate concerns about athlete health; if he doesn't, that's information about his coaching that matters. Chaleff's framework includes 'courage to challenge' for exactly this kind of situation. Try: have a private conversation with your coach explaining what you're worried about, share specifics, ask questions about why he's choosing this approach. Listen carefully. If his reasoning is good, you'll learn something; if his reasoning is bad, you'll know what you're dealing with. Either way, you've engaged as a real follower rather than as a passive executor."`,
                `"Defy him"`,
                `"Quit the team"`,
              ],
              correctIndex: 1,
              explanation: `Real applied followership literacy. Don't moralize about either obedience or defiance; engage with what mature followership actually looks like in this specific situation. Reference the framework (Chaleff's courage to challenge) and give specific guidance on how to engage.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for followership? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which position do you currently default to as a follower? What does that produce?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with deliberate followership skills alongside leadership skills, what does that change about your effectiveness across the many situations where you'll follow over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current followership situation (a team, family, school role). Apply the three positions. Which would serve best here?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations the framework doesn't capture well? What about situations of legitimate disobedience? Civil resistance? Defying tyranny?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask an adult about a time they felt they should have spoken up but didn't. What stopped them? What would they do differently now?` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Followership skill compounds across thousands of situations where you'll follow over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Followership Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Ask family members about followership situations they've been in (work, sports, religious community, family roles). Which position did they default to? Were there times they wished they'd been more loyal, or more critical, or more flexible? Most adults have meaningful followership stories at this depth. The conversation often surfaces real patterns and produces useful learning.`,
          },
          projectOption: {
            title: `Read Chaleff's "The Courageous Follower" or Kellerman's "Followership," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Ira Chaleff's "The Courageous Follower" (1995, accessible at 12 with attention) or Barbara Kellerman's "Followership" (2008, more academic). Apply concepts to followership situations in your life during the reading period. Write 1,500 words on what you learned. Reading a real followership book at 12 produces capability most working adults lack.`,
            offerToParent: `Parent: opt your kid into this project. Real followership literacy is rare and valuable.`,
          },
          identityQuestion: `If you become someone with deliberate followership skills — knowing when to execute loyally, when to challenge, when to shift to leadership — what does that change about your contribution across thousands of group situations over a lifetime?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone with deliberate followership skills alongside leadership skills.`,
            `A person who follows loyally on most things and engages critically on what matters.`,
            `Someone who can shift between leading and following based on what the situation requires.`,
          ],
          saveKey: `identity_responses_sl_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleventh Social Leadership lesson done. You can now articulate three positions on followership (loyal effective, engaged critical, dynamic role-switching), know the major thinkers (Kelley, Chaleff, Kellerman, Arendt, Milgram), and recognize followership as a distinct skill from leadership. Most adults focus exclusively on leadership and never develop explicit followership capability; you have both at 12. Next time we go into one of the most practical applied skills: building effective teams. Match five elements to applications. Matching game format. Let's go. — Valor`,
          badge: `effective-follower`,
          badgeName: `Effective Follower`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on followership (loyal effective, engaged critical, dynamic role-switching)`,
            `Knows Kelley's framework, Chaleff's five dimensions, Kellerman's five types`,
            `Understands "the good German problem" and Milgram findings`,
            `Recognizes followership as distinct skill from leadership`,
            `Can match followership approach to specific situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Building Teams`,
            hook: `Five elements of effective teams matched to applications. Matching Game.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L11 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
