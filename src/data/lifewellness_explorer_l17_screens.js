// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L17 — Healthy Relationships
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L17 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-17`,
      title:     `Healthy Relationships`,
      duration:  12,
      xpReward:  50,
      badge:     `relationship-wise`,
      badgeName: `Relationship Wise`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Something that shapes almost everything about how you feel, {name} — more than most people realise — is the quality of your relationships. The people closest to you affect how you see yourself, how much you trust your own judgement, how much energy you carry into your days. Healthy relationships build you up. Unhealthy ones — even when you care about the person — can quietly wear you down. Today we're going to look at what a healthy relationship actually involves: in friendships, in family, and in how we treat ourselves. This might be some of the most practically useful knowledge you carry with you for years.`,
          headline: `Healthy Relationships`,
          subtitle: `The relationships in your life shape how you feel about yourself every single day — and understanding what a healthy relationship looks and feels like is one of the most valuable things you can know`,
          visual: `/explorer-assets/wellness/l17-welcome.png`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How a Relationship Feels`,
          paragraphs: [
            `The most useful relationship question is also the simplest.`,
            `How do you feel about YOURSELF when you're around this person? Healthy relationships make you feel more fully yourself — more confident, more capable. The opposite is the signal worth paying attention to.`,
          ],
          image: `/explorer-assets/wellness/l17-s1-how-it-feels.png`,
          imageCaption: `Around the right people, you feel more yourself. Around the wrong patterns, you slowly feel smaller. Your inner experience is reliable information.`,
          vocab: [
            { word: `self-concept`, definition: `How you see and feel about yourself. Significantly shaped by your relationships — for better or worse.`,
              audioPrompt: `Your self-concept is built partly in the mirror of your relationships, {name}. The people closest to you affect how you see yourself — whether you feel capable, worthy, and real, or small and uncertain. Healthy relationships tend to strengthen your self-concept. Unhealthy ones quietly erode it. Paying attention to how you feel about yourself in each relationship is one of the most honest ways to assess it.` },
            { word: `signal`,       definition: `Information your feelings give you. Consistently feeling worse about yourself around someone is one worth listening to.`,
              audioPrompt: `Your feelings are signals, {name} — not proof of anything, but information worth taking seriously. Consistently feeling smaller, less confident, or more anxious around a particular person is your inner life trying to tell you something. It doesn't always mean the relationship needs to end. But it always means it deserves your honest attention, not explanation away.` },
            { word: `evaluate`,     definition: `Look honestly at a relationship and what it's doing in your life. Asking "how do I feel?" is one of the clearest ways to do this.`,
              audioPrompt: `Evaluating a relationship doesn't mean keeping score, {name} — it means looking honestly at what it's doing in your life. The simplest evaluation question is "how do I feel about myself when I'm with this person?" The answer, if you let yourself be honest, will tell you more than almost any other question. Awareness is always the first step.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Foundations`,
          paragraphs: [
            `Healthy relationships — friend, family, anyone — share the same core qualities.`,
            `MUTUAL RESPECT. TRUST. HONESTY. SUPPORT (you want each other to do well). EQUITY (neither person carries it all). INDEPENDENCE (you keep your own life). These aren't ideals — they're the baseline.`,
          ],
          image: `/explorer-assets/wellness/l17-s2-foundations.png`,
          imageCaption: `Six foundations. Each one a piece of why a healthy relationship feels safe. Together, they're what makes connection genuinely nourishing.`,
          vocab: [
            { word: `mutual respect`, definition: `Both people treating each other with consideration and value — even when they disagree. The foundation everything else rests on.`,
              audioPrompt: `Mutual respect means both people in a relationship treat each other as worth taking seriously, {name}. It shows up in how you talk to each other, how you respond to disagreements, and whether you genuinely consider the other person's perspective. Without it, even a loving relationship can feel unsafe. With it, even difficult conversations feel manageable.` },
            { word: `equity`,         definition: `A fair balance. Neither person consistently carries all the emotional weight or makes all the decisions. Both people's needs matter equally.`,
              audioPrompt: `Equity in a relationship means the weight is shared, {name}. Neither person is always the one who gives while the other takes. Neither person always makes the decisions while the other follows. Both people's needs count. When the balance is genuinely unfair over a long time, the relationship starts to feel like a burden rather than a support.` },
            { word: `independence`,   definition: `Each person keeping their own identity, friendships, and interests. A healthy relationship adds to your life — it doesn't replace it.`,
              audioPrompt: `A healthy relationship adds to who you are, {name} — it doesn't replace everything else. Independence means both people keep their own friendships, their own interests, their own sense of self. When a relationship starts requiring you to give up other things you care about in order to maintain it, that's worth paying attention to. Real closeness doesn't need to consume your whole world to feel real.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Warning Signs`,
          paragraphs: [
            `Conflict happens in every relationship. Patterns are different.`,
            `Worth noticing: someone who tries to CONTROL what you do. Who DISRESPECTS you consistently. Whose JEALOUSY blocks you from other friendships. Who PRESSURES you. Who HUMILIATES you in front of others. These deserve recognition.`,
          ],
          image: `/explorer-assets/wellness/l17-s3-warning-signs.png`,
          imageCaption: `Not normal friction. Not a bad day. Patterns. Recognizing them clearly is what lets you respond — and tell a trusted adult if you need to.`,
          vocab: [
            { word: `control`,     definition: `Trying to direct another person's choices, appearance, friendships, or behavior. Crosses from care into manipulation — a warning sign.`,
              audioPrompt: `Control in a relationship shows up in many forms, {name}: telling someone what to wear, who they can spend time with, what they're allowed to say, or how they should behave. It might be dressed up as caring, but genuine care doesn't require controlling. Someone who cares about you wants you to be free and full, not limited.` },
            { word: `pressure`,    definition: `Being pushed to do something you haven't freely chosen. Especially when someone keeps asking after you've already said no.`,
              audioPrompt: `Pressure is when a no doesn't feel like it's allowed, {name}. Someone asking once is normal. Someone continuing to push after you've said no — using guilt, comparison, or manipulation to change your answer — is pressure. You are never required to change a no because someone is disappointed or persistent. Your answer belongs to you.` },
            { word: `humiliation`, definition: `Being made to feel ashamed, embarrassed, or small — especially in front of others. A serious warning sign, not normal friction.`,
              audioPrompt: `Humiliation means being made to feel small in front of others, {name} — mocked, embarrassed, or dismissed publicly. All relationships have rough moments and unkind words sometimes. But a pattern of someone making you feel ashamed or ridiculed, especially in front of other people, is a warning sign worth taking seriously and talking to a trusted adult about.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Boundaries`,
          paragraphs: [
            `A BOUNDARY is a limit you set about what you're comfortable with.`,
            `Not a wall. A clear communication. Physical, emotional, time, energy. Anyone who respects you will accept your boundary — even if disappointed. That acceptance is the test.`,
          ],
          image: `/explorer-assets/wellness/l17-s4-boundaries.png`,
          imageCaption: `Boundaries aren't walls keeping people out. They're clear communication about what you need. People who respect you will honor them.`,
          vocab: [
            { word: `boundary`,    definition: `A limit you set about what you're comfortable with. Physical, emotional, time, or energy. Communication, not a wall.`,
              audioPrompt: `A boundary is how you communicate what you need, {name}. It's not a wall that keeps people out — it's a clear statement of what you're comfortable with. "I don't want to be touched that way." "I need you to stop asking me that." You don't need to explain more than that. Anyone who respects you will accept your boundary, even if they're disappointed. That acceptance is the test.` },
            { word: `comfortable`, definition: `How you should generally feel in healthy interactions. Discomfort is information — worth noticing, naming, and listening to.`,
              audioPrompt: `Your sense of comfort is a meaningful signal, {name}. When something feels uncomfortable — physically, emotionally, in how someone is treating you — that feeling is worth listening to. You don't have to be able to explain exactly why something feels off. Discomfort is information. Trust it, name it, and if it persists, tell someone you trust.` },
            { word: `honor`,       definition: `What anyone who respects you will do with your boundary. Accept it even if disappointed — without arguing, pressuring, or guilt-tripping.`,
              audioPrompt: `To honor a boundary is to accept it without trying to negotiate it away, {name}. The person might be disappointed. That's okay — disappointment is a feeling they can manage. What they shouldn't do is argue with you, pressure you, guilt-trip you, or punish you for setting it. How someone responds to your boundary is one of the clearest tests of whether they respect you.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Your No Is Complete`,
          paragraphs: [
            `You have the right to say NO.`,
            `To touch you don't want. To situations that feel wrong. To anything that crosses a line. "I'm not comfortable with that" is enough explanation. Anyone who keeps pressing after a clear no isn't respecting you.`,
          ],
          image: `/explorer-assets/wellness/l17-s5-no-is-complete.png`,
          imageCaption: `Your no doesn't need a long explanation. It doesn't need permission. It doesn't need to be earned. It's already complete the moment you say it.`,
          vocab: [
            { word: `no`,      definition: `A complete sentence. Doesn't require justification, doesn't need to be earned, doesn't need to apologize for itself.`,
              audioPrompt: `Your "no" is already complete the moment you say it, {name}. You don't owe a long explanation. You don't have to convince anyone that your no is valid. "I'm not comfortable with that" is enough. "No, thank you" is enough. "I don't want to" is enough. Your no is your right, and you carry it with you everywhere.` },
            { word: `consent`, definition: `Freely and genuinely agreeing — clear, voluntary, never pressured or assumed. Real consent is always chosen, not given because saying no felt impossible.`,
              audioPrompt: `Consent means you actually want to, {name} — freely, clearly, without pressure. It applies to physical touch, to how your information is used, to anything that affects your body or experience. Real consent is never given because someone persisted until you gave in, or because you were afraid to say no. It's given because you genuinely chose it. That distinction matters enormously.` },
            { word: `respect`, definition: `Accepting another person's no, even when disappointed. The clearest test of whether a relationship is healthy.`,
              audioPrompt: `Respect for someone's no is one of the most basic measures of whether they actually care about you, {name}. Real care can be disappointed without becoming pushy, angry, or manipulative. Someone who continues to pressure you after a clear no — using guilt, charm, persistence, or comparison — is not showing you respect, no matter what they say. The test is in the response.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Patterns Tell the Truth`,
          paragraphs: [
            `A single hard moment doesn't define a relationship. Patterns do.`,
            `Everyone has rough days and sharp words sometimes. What matters is whether care and respect are the CONSISTENT experience — or whether unkindness, disrespect, or control keep happening. Patterns tell you the true character.`,
          ],
          image: `/explorer-assets/wellness/l17-s6-patterns.png`,
          imageCaption: `One bad day isn't a pattern. Many over time is. Watch the consistent experience, not the isolated moments. That's where the truth lives.`,
          vocab: [
            { word: `pattern`,   definition: `Repeated behavior over time. More meaningful than isolated incidents when evaluating whether a relationship is healthy or harmful.`,
              audioPrompt: `A single unkind moment in a friendship doesn't define it, {name}. Patterns do. Everyone has hard days and sharp words sometimes. What matters is whether care, respect, and safety are the consistent experience of the relationship — or whether unkindness, dismissiveness, or control are what keeps happening. Patterns are what tell you the true character of a relationship.` },
            { word: `trust`,     definition: `Built through consistent care over time. Slowly built — and broken by repeated patterns of disrespect, not by isolated moments.`,
              audioPrompt: `Trust is built through patterns, {name} — not single moments. Someone showing up for you once doesn't build it the way showing up for you repeatedly does. And trust isn't broken by a single mistake — it's broken by repeated patterns of disrespect, dishonesty, or harm. That's why patterns matter so much. They're what trust is actually made of, over time.` },
            { word: `attention`, definition: `What patterns deserve. Not always action — sometimes a conversation, sometimes simply awareness. But always attention.`,
              audioPrompt: `Patterns deserve your attention, {name} — not always action, but always awareness. Noticing a pattern doesn't mean you have to end a friendship or confront someone today. Sometimes it just means seeing the truth clearly so you can decide what you want to do. Awareness is always the first step. Action follows when you're ready.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `healthy`,
              label: `💚 Sign of a Healthy Relationship`,
              color: `#34D399`,
            },
            {
              id: `notice`,
              label: `🚨 Worth Paying Attention To`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l17-g1`,
              image: `l17-game-1.png`,
              label: `A friend who celebrates your good news without making you feel like you should downplay it.`,
              matchPhrase: `Genuine support means wanting good things for the other person — not competing, not minimising. A friend who celebrates your wins is showing you exactly what mutual support looks like.`,
              correctMatch: `healthy`,
            },
            {
              id: `l17-g2`,
              image: `l17-game-2.png`,
              label: `Being able to say no to something and having it respected without drama or guilt-tripping.`,
              matchPhrase: `Someone who accepts your no — even if they're disappointed — is showing you that they respect your boundaries. That's one of the clearest signs of a healthy relationship.`,
              correctMatch: `healthy`,
            },
            {
              id: `l17-g3`,
              image: `l17-game-3.png`,
              label: `A person who only reaches out when they need something, then goes quiet the rest of the time.`,
              matchPhrase: `Relationships that only flow one way — where you're always giving and rarely receiving — are worth noticing. A healthy connection has some sense of balance and mutual care over time.`,
              correctMatch: `notice`,
            },
            {
              id: `l17-g4`,
              image: `l17-game-4.png`,
              label: `Someone who gets cold or upset whenever you spend time with other friends.`,
              matchPhrase: `Jealousy that blocks you from maintaining other friendships is a warning sign. Healthy relationships support your independence — they don't require you to give up the rest of your world to prove your loyalty.`,
              correctMatch: `notice`,
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
              question: `What is the key difference between a healthy and an unhealthy relationship pattern?`,
              options: [
                `Healthy relationships never involve any conflict or disagreement`,
                `Healthy relationships involve mutual respect, trust, and support — unhealthy ones involve control, disrespect, or patterns that make you feel worse about yourself`,
                `Healthy relationships last longer than unhealthy ones`,
                `Healthy relationships only exist between people who have known each other for a long time`,
              ],
              correctIndex: 1,
              explanation: `The difference is not whether conflict ever happens — it does in every relationship. The difference is whether the overall pattern is one of mutual respect, support, and trust, or one involving control, disrespect, guilt, fear, or consistent patterns that leave you feeling worse about yourself. Conflict can be worked through; patterns of disrespect are a different matter.`,
            },
            {
              id: `l17-q2`,
              format: `multiple-choice`,
              question: `What is a personal boundary?`,
              options: [
                `A rule you set for others to follow whether they agree or not`,
                `A limit you set about what you're comfortable with — which anyone who respects you will honour`,
                `A wall that prevents you from getting close to anyone`,
                `A formal agreement about how a relationship works`,
              ],
              correctIndex: 1,
              explanation: `A boundary is a limit — not a wall that keeps everyone out, and not a rigid rule imposed on others. It's your clear communication about what you need and what you're comfortable with. Healthy relationships involve both people's limits being respected. Setting a boundary and having it honoured is a sign of mutual respect; having it ignored or pressured past is a warning sign.`,
            },
            {
              id: `l17-q3`,
              format: `multiple-choice`,
              question: `What should a healthy relationship consistently make you feel?`,
              options: [
                `Grateful and lucky to have it, no matter how it makes you feel day-to-day`,
                `Occasionally happy but mostly uncertain about where you stand`,
                `Seen, valued, and safe to be exactly who you are`,
                `Challenged and pushed to be better than you currently are`,
              ],
              correctIndex: 2,
              explanation: `Healthy relationships make you feel seen — like the other person really knows and accepts you. They make you feel valued — like your presence genuinely matters. And they make you feel safe to be yourself — without having to perform, shrink, or pretend. That doesn't mean every moment is perfect, but it should be the consistent experience of the relationship.`,
            },
            {
              id: `l17-q4`,
              format: `true-false`,
              question: `A healthy relationship supports you being more fully yourself — if you consistently feel smaller and less confident around someone, that's a meaningful signal worth paying attention to.`,
              correctAnswer: true,
              explanation: `True. How you feel about yourself when you're around someone is one of the most honest guides to relationship health. Healthy relationships add to your sense of self — they don't diminish it. Feeling occasionally insecure or having a difficult moment is normal. But a consistent pattern of feeling worse about yourself around a particular person is a signal that deserves attention, not explanation away.`,
            },
            {
              id: `l17-q5`,
              format: `fill-blank`,
              question: `A boundary is a ___ you set about what you're comfortable with — and anyone who respects you will honour it.`,
              options: [
                `limit`,
                `wall`,
                `rule`,
                `distance`,
              ],
              correctIndex: 0,
              explanation: `A boundary is a limit — not a wall that keeps everyone out, and not a rigid rule imposed on others. It's your clear communication about what you need and what you're comfortable with. Healthy relationships involve both people's limits being respected. Setting a boundary and having it honoured is a sign of mutual respect; having it ignored or pressured past is a warning sign.`,
            },
            {
              id: `l17-q6`,
              format: `multiple-choice`,
              question: `Why does a healthy relationship include both people maintaining their own friendships and interests?`,
              options: [
                `Because spending time apart prevents arguments`,
                `Because healthy relationships add to your life rather than replacing it — requiring you to give up other friendships or interests is a warning sign`,
                `Because people need variety to stay interested in each other`,
                `Because it shows both people are independent enough not to need the relationship`,
              ],
              correctIndex: 1,
              explanation: `Healthy relationships enrich your life — they don't consume it. Independence means both people continue to have their own friendships, interests, and sense of self outside the relationship. When someone requires you to give up other friendships or parts of your life as a condition of the relationship, that's a pattern of control — not closeness. A relationship that adds to who you are is fundamentally different from one that replaces who you are.`,
            },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Relationship researchers consistently find that the quality of your close relationships is one of the strongest predictors of long-term wellbeing — more than income, achievement, or status. The skills you build now for recognising and nurturing healthy connections are investments that pay back across your entire life.`,
          familyAdventure: `Have a family conversation about what healthy relationships look like to your family. What values matter most? What does respect look like in your household? You might also talk about a time when someone had to set a boundary and how it went. These conversations build the kind of relational awareness that protects people for life.`,
          creativePrompt: `Think about your closest relationships — friendships, family, anyone you spend a lot of time with. For each one, ask: do I feel more like myself around this person, or less? Do I feel respected? Can I be honest? You don't need to take any action — just notice. Awareness is always the first step.`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know what healthy relationships look and feel like — and what the warning signs are when something isn't right. That awareness is one of the most protective things you can carry through life. You deserve connections that make you feel seen, valued, and safe to be yourself. Terra is so proud to walk this path with you.`,
          badge: `relationship-wise`,
          badgeName: `Relationship Wise`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L17.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L17] Loaded: "Healthy Relationships" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l17-s1-how-it-feels.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-s2-foundations.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-s3-warning-signs.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-s4-boundaries.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-s5-no-is-complete.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l17-s6-patterns.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L17] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L17] One or more magazine assets missing'));
}
