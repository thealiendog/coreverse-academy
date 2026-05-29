// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L04 — Speaking Up Kindly
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real communication research — assertive communication (vs
//            passive or aggressive), "I" statements, Marshall Rosenberg's
//            NVC basics, behavior vs character distinction.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (5 steps of speaking up kindly when something
//            matters: notice → check timing → use "I" → name behavior not
//            character → leave space)
// SCOPE: 4 concepts — three styles of speaking (passive/aggressive/assertive),
//        why speaking up matters, the steps of doing it kindly, how to
//        practice (small honest moments build the skill)
// VOICE: Valor = noble, brave, encouraging. Models speaking up himself.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-04`,
      title: `Speaking Up Kindly`,
      duration: 18,
      xpReward: 75,
      badge: `kind-truth-teller`,
      badgeName: `Kind Truth-Teller`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. You've learned to listen deeply and respond with real empathy. Today we turn the other direction, learning to SPEAK UP kindly. To share what you actually think, ask for what you need, or tell someone something difficult, without crushing them. This is one of the trickiest balances in being human. Many kids stay quiet when they should speak; many lash out when they could be kind. Today, you learn the middle path that real leaders walk: HONEST AND KIND, both at once. Take a brave, settled breath, and let's begin.`,
          headline: `Speaking Up Kindly`,
          subtitle: `Honest AND kind, both at once — the leader's middle path`,
          visual: `/ue-assets/sl/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Three Ways People Speak (Only One Works)`,
          paragraphs: [
            `When something hard needs to be said, people generally fall into one of three styles. First, the PASSIVE style. These kids stay silent, swallow what they feel, and let things bother them without ever speaking up. They tell themselves "it's fine" when it isn't. Over time, the unspoken stuff builds up, leading to resentment, withdrawal, or one day a sudden explosion. Passive feels safe in the moment but slowly damages friendships, family, and self-respect. Second, the AGGRESSIVE style. These kids speak up alright, but harshly. They yell, blame, attack character ("you're so selfish"), or speak with cruelty. They get their point across, but they crush the other person, damage trust, and rarely change anything. Aggressive feels powerful but actually weakens relationships.`,
            `Third, and the only one that actually works: the ASSERTIVE style. Assertive kids speak up honestly, AND they do it kindly. They share what they really think or need, with respect for the other person. They name the behavior, not the character. They use "I" statements instead of attacks. They stay calm and direct. The assertive style is the one used by real leaders, healthy friends, and people who navigate hard moments well. The wonderful truth: assertiveness is a learnable skill. It might not come naturally yet, but with practice, it becomes your default. Today, you learn how.`,
          ],
          image: `/ue-assets/sl/l04-s1-three-ways.webp`,
          imageCaption: `Passive (silent), Aggressive (harsh), Assertive (honest AND kind). Only one works.`,
          vocab: [
            { word: `assertive`,
              definition: `The communication style that's both HONEST and KIND. Sharing what you really think or need, calmly and directly, with respect for the other person. Not passive (silent) or aggressive (harsh). The middle path real leaders walk.`,
              audioPrompt: `Assertive is the communication style that's both honest and kind, {name}. Sharing what you really think or need, calmly and directly, with respect for the other person. Not passive, which means staying silent when you shouldn't, and not aggressive, which means yelling or attacking. The assertive style is the one used by real leaders, healthy friends, and people who navigate hard moments well. It might not come naturally yet, but it's a learnable skill that becomes your default with practice. Today, you learn how.` },
            { word: `passive communication`,
              definition: `Staying silent about things that genuinely bother you, swallowing what you feel, and going along even when you shouldn't. Feels safe short-term but leads to resentment, withdrawal, or sudden blowups. The opposite of assertive.`,
              audioPrompt: `Passive communication is staying silent about things that genuinely bother you, {name}. Swallowing what you feel. Going along even when you shouldn't. Passive feels safe in the moment, but it costs more over time. Unspoken stuff piles up. Resentment builds quietly. Then either you withdraw from the relationship or you explode over something small, because the real thing was never named. Passive communicators often feel like they don't matter, because their needs and feelings are never heard. The answer isn't to become aggressive. It's to practice the middle path: assertive.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Speaking Up Matters`,
          paragraphs: [
            `When you stay silent about things that genuinely matter, several things happen, none of them good. Inside YOU, the unspoken stuff piles up. You start feeling resentful, anxious, or like you don't matter. You may explode later over something small, because the real thing was never named. Outside, the OTHER person doesn't know what's bothering you and can't change anything. The friendship, team, or family situation stays stuck. Silence isn't the kind thing it sometimes feels like, it's often the thing that quietly breaks things.`,
            `Speaking up kindly, on the other hand, opens doors. It tells the other person you care enough to be honest with them. It gives the relationship a chance to grow. It builds your own self-respect: you become someone who can be counted on to say true things. And it builds trust both ways, because people know where they stand with you. Real leaders speak up. They tell hard truths. They name what's not working. They ask for what's needed. They don't do it loudly or cruelly, they do it calmly and kindly. But they DO it. Because silence about things that matter eventually costs more than the conversation would have. Knowing this is your foundation; the next sections give you the actual practice.`,
          ],
          image: `/ue-assets/sl/l04-s2-matters.webp`,
          imageCaption: `Silence builds resentment; kind honesty opens doors. Real leaders speak up.`,
          vocab: [
            { word: `assertive courage`,
              definition: `The willingness to say true things kindly, even when staying silent would be easier. The courage to risk a hard conversation because the relationship matters too much to stay quiet. A core leadership trait.`,
              audioPrompt: `Assertive courage is the willingness to say true things kindly, even when staying silent would be easier, {name}. The courage to risk a hard conversation because the relationship matters too much to stay quiet. Real leaders have this. When you stay silent about things that matter, unspoken stuff piles up inside you. You feel resentful or like you don't matter. Speaking up kindly opens doors. It gives the relationship a chance to grow. And it builds who you are: someone counted on to say true things, even when it's hard.` },
            { word: `resentment`,
              definition: `The bitter feeling that builds when you stay silent about things that matter. Unexpressed hurt or frustration doesn't disappear; it piles up and quietly damages relationships from the inside until the unspoken truth is finally named.`,
              audioPrompt: `Resentment is the bitter feeling that builds when you stay silent about things that matter, {name}. Unexpressed hurt or frustration doesn't go away. It piles up. It quietly changes how you feel about the person you're silent toward. You pull away, go cold, or react to a small thing as if it were everything, because inside, all those unspoken moments add up. Resentment is the cost of too much silence. The cure isn't to explode. It's to speak up kindly, in small moments, before the pile gets too high.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Practice: Saying Hard Things Kindly`,
          paragraphs: [
            `Here's the actual practice, broken into clear moves. First, NOTICE what you want to say, with honesty. Before speaking, get clear inside yourself: What actually bothered me? What do I really want or need? Sometimes naming it just to yourself is the harder part. Second, CHECK THE TIMING. Hard conversations rarely land well in the middle of an angry moment, in front of others, or when someone's exhausted. A calm moment, in private, with both of you settled, is far better than a hot reaction. Sometimes the kindest move is "Can we talk about something later?"`,
            `Third, USE "I" STATEMENTS instead of "you" attacks. There's a HUGE difference between "you're so rude" (attacks character, puts them on defense) and "I felt hurt when the joke happened" (describes your experience, invites understanding). "I" statements share your feeling without accusation. Fourth, NAME THE BEHAVIOR, not the character. "You're selfish" attacks who they ARE. "When you took the whole snack without asking, I felt left out" describes what HAPPENED. Behavior can be changed; character attacks just wound. Fifth, LEAVE SPACE for them to respond. Don't pile on every grievance you've ever had. Say what matters, then PAUSE. Let them speak. Listen with the L02 practice. The goal isn't winning the conversation, it's being heard and understanding each other. Use these moves together and even hard conversations become doable.`,
          ],
          image: `/ue-assets/sl/l04-s3-practice.webp`,
          imageCaption: `Notice, check timing, use "I", name behavior not character, leave space.`,
          vocab: [
            { word: `I statement`,
              definition: `A way of speaking that describes your OWN experience or feeling, instead of attacking the other person. "I felt hurt when X happened" instead of "You're so rude." Avoids defense, invites understanding. The core move of assertive communication.`,
              audioPrompt: `An I statement describes your own experience or feeling, instead of attacking the other person, {name}. There's a huge difference between "you're so rude," which attacks character and puts them on defense, and "I felt hurt when the joke happened," which describes your experience and invites understanding. I statements share your feeling without accusation. They're the core move of assertive communication. The pattern: I felt [feeling] when [specific behavior]. That structure works almost anywhere, with friends, family, and teammates.` },
            { word: `nonviolent communication`,
              definition: `A framework developed by Dr. Marshall Rosenberg for speaking honestly without blame or judgment. Its four parts: observe what happened, name the feeling, name the need behind it, make a clear request. "I" statements are its heart.`,
              audioPrompt: `Nonviolent communication is a framework developed by Dr. Marshall Rosenberg for speaking honestly without blame or judgment, {name}. It has four parts: observe what happened without evaluating, name the feeling it created, name the need behind the feeling, and make a clear request. You already know the heart of it from I statements: I felt hurt when the joke happened. That's an observation plus a feeling. Nonviolent communication turns hard conversations from attacks into genuine exchanges. It's used by leaders, therapists, and couples worldwide to navigate difficult moments with dignity.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Practicing It in Real Life`,
          paragraphs: [
            `Like any skill, speaking up kindly grows with practice. And the best way to practice ISN'T to wait for a huge dramatic moment. It's to practice in SMALL daily moments. Tell your sibling, kindly, that something they did bothered you. Ask a friend, calmly, if you can change the topic of a hurtful joke. Tell a parent honestly when you're not okay, instead of saying "I'm fine." Speak up in a group when you have an idea, even if your voice shakes. Each small honest moment builds the muscle. The kids who speak up well by the time they're teens or adults are the ones who started practicing in low-stakes situations. Don't wait until a big moment to try this for the first time.`,
            `One last truth: speaking up kindly is BRAVE. It's actually harder than staying silent OR yelling. Both of those are easier in the short term. The middle path, honest AND kind, takes real courage. You may be scared. Your voice may shake. The other person may not respond perfectly. None of that means you did it wrong. The courage is in the trying. Valor's teaching: a real leader can say true things kindly, even when scared. The people you love deserve your honesty AND your respect, both at once. And you deserve to be someone who doesn't shrink, doesn't shout, and doesn't bury what matters. You deserve to speak the truth, and to be heard. Practice it gently, in small moments. The brave kind voice you build will serve you your whole life.`,
          ],
          image: `/ue-assets/sl/l04-s4-practicing.webp`,
          imageCaption: `Practice in small moments. Speaking up kindly is brave; both silence and shouting are easier.`,
          vocab: [
            { word: `behavior vs character`,
              definition: `The key distinction in saying hard things kindly. "Behavior" is what someone DID ("when you took the snack..."); "character" is who they ARE ("you're selfish"). Behavior can be changed and discussed. Character attacks just wound. Always speak to behavior.`,
              audioPrompt: `Behavior versus character is the key distinction in saying hard things kindly, {name}. Behavior is what someone did. When you took the whole snack without asking, I felt left out. Character is who they are. You're selfish. Behavior can be changed and discussed. Character attacks just wound, and put the other person on defense. Always speak to behavior, not character. The structure works in friendships, family, teams, anywhere. I felt [feeling] when [specific behavior]. It's honest, it's kind, and it invites real conversation instead of starting a fight.` },
            { word: `low-stakes practice`,
              definition: `The method of building skills like assertive communication by starting in small, everyday moments before you need them for something big. Small daily honest moments with siblings, friends, and family build the muscle for harder conversations later.`,
              audioPrompt: `Low-stakes practice is how real skills get built, {name}. Not by waiting for a big dramatic moment, but by starting in small everyday moments first. Tell a sibling kindly that something bothered you. Ask a friend calmly to change the topic of a hurtful joke. Speak up in a group when you have an idea, even if your voice shakes. Each small moment builds the muscle. The kids who speak up well as teenagers practiced in quiet daily moments. Don't wait. Start small, start now.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the practice in order, {name}. Here are five moves of speaking up kindly when something matters, scrambled. Use the arrows to arrange them from the FIRST move (inside yourself) to the LAST move (in the conversation). This is a real practice you can use today.`,
          items: [
            { id: `step-notice`,   label: `NOTICE inside yourself: What actually bothered me? What do I really need or want to say?`,                            position: 1 },
            { id: `step-timing`,   label: `CHECK THE TIMING: not in the heat of the moment, not in front of others — find a calm, private time`,                 position: 2 },
            { id: `step-i`,        label: `USE "I" STATEMENTS: "I felt hurt when..." instead of "You're so rude"`,                                               position: 3 },
            { id: `step-behavior`, label: `NAME THE BEHAVIOR, not the character: describe what HAPPENED, not who the person IS`,                                  position: 4 },
            { id: `step-space`,    label: `LEAVE SPACE for them to respond. Say what matters, then pause and listen with full attention`,                         position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the practice of speaking up kindly: notice what's true inside, check the timing, use "I" statements, name behavior not character, leave space to listen. Practice in small daily moments. The brave kind voice you build will serve you your whole life, with friends, family, teammates, and one day, anyone you ever lead.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What are the THREE styles of speaking when something hard needs to be said?`,
              options: [
                `Loud, medium, quiet`,
                `PASSIVE (silent), AGGRESSIVE (harsh), ASSERTIVE (honest AND kind); only assertive works`,
                `Happy, sad, neutral`,
                `Only one style exists`,
              ],
              correctIndex: 1,
              explanation: `Three styles: passive (stay silent, swallow it, resentment builds), aggressive (yell, attack character, damage trust), and assertive (honest AND kind, calm and direct, respectful). Only assertive actually works. It's a learnable skill that becomes your default with practice.` },

            { id: `l04-q2`, format: `true-false`,
              question: `True or false: Staying silent about things that genuinely matter is the kind, safe choice.`,
              correctAnswer: false,
              explanation: `False. Silence about things that matter usually causes resentment, anxiety, and stuck situations. The other person can't change what they don't know. Silence often costs MORE than the conversation would have. Kind honesty opens doors that silence never can.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What is an "I" STATEMENT?`,
              options: [
                `Bragging about yourself`,
                `A way of describing your OWN experience or feeling instead of attacking. "I felt hurt when..." vs "You're so rude"`,
                `Yelling louder`,
                `Avoiding speaking`,
              ],
              correctIndex: 1,
              explanation: `An "I" statement describes your own experience or feeling instead of attacking. "I felt hurt when the joke happened" lands very differently from "You're so rude!" The structure: I felt [feeling] when [specific behavior]. Invites understanding instead of defense.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `What's the difference between speaking to BEHAVIOR vs CHARACTER?`,
              options: [
                `There's no difference`,
                `Behavior is what someone DID; character is who they ARE. Behavior can change, character attacks wound`,
                `Character is always better to attack`,
                `Behavior doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Behavior is what someone DID; character is who they ARE. "You're selfish" attacks character and puts them on defense. "When you took the whole snack without asking, I felt left out" describes behavior and invites real conversation. Always speak to behavior, not character.` },

            { id: `l04-q5`, format: `multiple-choice`,
              question: `Why does TIMING matter for hard conversations?`,
              options: [
                `It doesn't, just speak whenever`,
                `Hard conversations rarely land in the heat of the moment, in front of others, or when someone's exhausted. Calm, private timing is better`,
                `Always do it angrily`,
                `Only at midnight`,
              ],
              correctIndex: 1,
              explanation: `Timing matters a lot. Hard conversations rarely land well in the heat of the moment, in front of others, or when someone's exhausted. A calm moment, in private, with both of you settled, is far better. Sometimes the kindest move is "Can we talk about something later?"` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `What's the LAST step of speaking up kindly?`,
              options: [
                `Pile on every grievance`,
                `LEAVE SPACE for them to respond. Say what matters, then pause and listen`,
                `Walk away immediately`,
                `Start yelling`,
              ],
              correctIndex: 1,
              explanation: `The last step is leaving space. Don't pile on every complaint. Say what matters, then PAUSE and listen with the L02 listening practice. The goal isn't winning the conversation, it's being heard and understanding each other. Hard conversations need space for both voices.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `What's the best way to PRACTICE speaking up kindly?`,
              options: [
                `Wait for a huge dramatic moment`,
                `Practice in SMALL daily moments (sibling, friend, family), so the muscle is built before you need it for something bigger`,
                `Never practice, just hope`,
                `Yell at everyone`,
              ],
              correctIndex: 1,
              explanation: `Best practice is in SMALL daily moments. Tell a sibling kindly something bothered you. Ask a friend calmly if you can change the joke topic. Tell a parent honestly when you're not okay. Each small honest moment builds the muscle. Don't wait for a huge moment to try this for the first time.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `What's Valor's truth about speaking up kindly?`,
              options: [
                `It's the easy way out`,
                `It's actually HARDER than staying silent or yelling, and the courage is in the trying, even with a shaky voice`,
                `Only adults can do it`,
                `It never works`,
              ],
              correctIndex: 1,
              explanation: `Speaking up kindly is HARDER than staying silent OR yelling. Both of those are easier short-term. The middle path takes real courage. You may be scared, your voice may shake, the other person may not respond perfectly. None of that means you did it wrong. The courage is in the trying.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Take a brave, steady breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be gentle and honest with yourself, when something bothers you, do you tend toward PASSIVE (silent), AGGRESSIVE (harsh), or ASSERTIVE (honest and kind)? No judgment, just noticing.` },
            { id: `r2`, text: `Is there something you've been staying SILENT about that's been quietly bothering you? You don't have to say what, just notice if there's something.` },
            { id: `r3`, text: `Practice right now in your head: take something small, and put it in the "I felt ___ when ___" structure. How does it sound?` },
            { id: `r4`, text: `What would change in your friendships, family, or life if you became someone who could say true things kindly, calmly, and bravely?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Assertive communication is one of the most studied and most empowering skills in psychology. The ability to say true things kindly, without disappearing or attacking, is at the heart of healthy friendships, families, marriages, teams, careers, and leadership. People who can't speak up tend to build resentment and feel powerless. People who only attack damage every relationship they touch. The ones who walk the assertive middle path tend to have the strongest relationships and the calmest lives. Valor's note: this skill might be one of the most life-changing in this whole subject. Many adults never learn it. You're learning it at the perfect age. Practice in small low-stakes moments first, sibling, friend, family, then trust that the muscle grows. The brave kind voice you build will help you in friendships, schools, eventually work, and one day, in being the kind of leader who can say true things gently and be heard.`,
          familyAdventure: `Family "I Statement" Practice. As a family, agree to try this for one week: when someone has a complaint or hard feeling toward someone else in the family, use the "I felt ___ when ___" structure instead of attacks. ("I felt frustrated when the door was slammed" instead of "You're so loud!") Practice it on small daily moments. Adults model it too, kids learn assertive communication best by seeing the grown-ups practice. Notice how different the conversations feel. Most arguments shrink dramatically when you stop attacking character and stick to behavior. You're learning to be honest AND kind, together.`,
          creativePrompt: {
            intro: `Write a scene where a kid speaks up kindly about something that matters. Show all five moves of the practice in action.`,
            floor: `Write at least 5 sentences. Set up what bothered them, show them speaking up using "I" statements and naming behavior.`,
            stretch: `Write 8 to 10 sentences. Build a fuller scene with all five moves clearly visible: notice, timing, "I" statement, behavior not character, leaving space.`,
            open: `Write as much as you want. Write a full scene showing real assertive communication. Set up the situation: a kid has been bothered by something a friend, sibling, or teammate has been doing. Show them moving through all five moves of speaking up kindly. First, NOTICE inside themselves what's really bothering them. Second, CHECK THE TIMING (waiting for a calm private moment). Third, USE "I" STATEMENTS. Fourth, NAME the BEHAVIOR, not the character. Fifth, LEAVE SPACE for the other person to respond, and listen well. Show the courage it takes, the voice that might shake, and the kindness of saying true things while honoring the other person. End with the conversation actually improving the relationship, not damaging it. Make it specific and real.`,
            frames: [
              `What was really bothering [kid] was ___.`,
              `When they noticed inside themselves, they realized ___.`,
              `They waited for a calm moment and said: "I felt ___ when ___."`,
              `Instead of attacking who [the other person] was, they described ___.`,
              `Then they paused and ___, and the conversation ended with ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Brave work, {name}. You've learned one of the most powerful skills in this whole subject: speaking up kindly. You understand the three styles, why silence costs, the five-move practice, and that the courage is in the trying. This is the kind of communication that builds friendships, families, and one day, the leader you become. Practice it gently, in small moments. Next, we explore the close partner of speaking up: knowing where your "yes" and your "no" really live. HEALTHY BOUNDARIES. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `kind-truth-teller`,
          badgeName: `Kind Truth-Teller`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
