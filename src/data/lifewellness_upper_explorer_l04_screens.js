// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L04 — The Power of Movement
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : movement as joy not punishment, real research on movement and
//            mood/brain/health. Anti-diet-culture framing. NEVER about
//            "burning calories" or "earning food."
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of building movement into your daily life)
// SCOPE: movement is joy, what movement does (brain, mood, body), every
//        body needs different kinds of movement, building a daily movement
//        life
// VOICE: Terra = playful, joyful about movement, never moralizing
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-04`,
      title: `The Power of Movement`,
      duration: 18,
      xpReward: 75,
      badge: `joyful-mover`,
      badgeName: `Joyful Mover`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something your body was literally DESIGNED for: MOVEMENT. Not exercise as punishment. Not "working out" to "earn" food or "burn off" what you ate. Not movement to fix or shrink your body. Movement as JOY. As fuel for your brain. As one of life's deep pleasures, when you find the kinds you love. Most adults have forgotten this. They've turned movement into chores. You don't have to. Today, you learn movement as a wolf does, instinctive, joyful, woven into life itself. Take a stretchy breath, and let's begin.`,
          headline: `The Power of Movement`,
          subtitle: `Movement as joy and fuel. Never punishment, never "earning"`,
          visual: `/ue-assets/lw/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body Was Designed to Move`,
          paragraphs: [
            `Here's a truth most adults forget but kids still know: your body is DESIGNED to move. Humans evolved over hundreds of thousands of years walking, running, climbing, lifting, dancing, playing. Sitting still for hours and hours is actually unusual in human history. Your body works BEST when it moves regularly throughout the day, not just for an hour at the gym, but as a natural part of life. When you don't move enough, your body responds by getting stiff, sluggish, foggy-brained, and moody. When you move regularly, your body responds with energy, clearer thinking, better sleep, and more stable emotions.`,
            `Here's something important: movement is NOT exercise as punishment. It's not about burning calories. It's not about "earning" food or shrinking your body. Those are diet-culture ideas that have ruined movement for many adults. Researchers have repeatedly found that people who move because they ENJOY it stick with it for life. People who move out of guilt or to fix their bodies usually quit, then start again, then quit. The kid who learns movement as JOY (running because it feels good, dancing because the music is happy, climbing because climbing is fun) builds a lifelong relationship with movement that no rigid "workout plan" can match. Your body is your friend (L01!), not your enemy to whip into shape.`,
          ],
          image: `/ue-assets/lw/l04-s1-designed.webp`,
          imageCaption: `Your body is designed to move. Joyfully, throughout the day, not as punishment.`,
          vocab: [
            { word: `movement`,
              definition: `Any physical activity your body does, walking, running, climbing, dancing, playing, biking, swimming, stretching, sports. Designed to be enjoyable and woven into daily life, not punishment to "burn calories" or "earn food." The kid who finds joy in movement keeps it for life.`,
              audioPrompt: `Movement is any physical activity your body does, {name}. Walking, running, climbing, dancing, playing, biking, swimming, stretching, sports. Your body is literally designed to move. Humans evolved walking, running, climbing, dancing, and playing over hundreds of thousands of years. Sitting still for hours is actually unusual in human history. Your body works best when it moves regularly throughout the day. Movement is NOT punishment. It's NOT about burning calories or earning food. It's about joy, energy, and feeling good in your body.` },
            { word: `joy-based movement`,
              definition: `The practice of choosing physical activity because you love it, not to burn calories or earn food. Researchers find that kids and adults who move for enjoyment stick with it for life. Those who move from guilt usually quit. The secret: find movement that feels genuinely fun, and you're not forcing yourself into a workout — you're doing something you love.`,
              audioPrompt: `Joy-based movement is the practice of choosing physical activity because you LOVE it, not to burn calories or earn food or fix your body, {name}. Researchers consistently find that kids and adults who move because they enjoy it stick with movement for life. Those who move out of guilt or obligation usually quit, start again, then quit. The secret is simple: find the kinds of movement that feel genuinely fun, exhilarating, or satisfying to you. Then you're not forcing yourself into a workout. You're just doing something you love.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Movement Actually Does`,
          paragraphs: [
            `Movement does so much more than make your muscles bigger or stronger. Here's some of what's actually happening when you move. Your BRAIN gets a flood of nutrients and oxygen, which improves focus, learning, memory, and creativity. Research shows that even 20 minutes of movement before studying or a test measurably improves performance. Your MOOD lifts because movement releases neurotransmitters (chemical messengers in your brain) that include serotonin and dopamine, which feel good. Movement is one of the most powerful natural antidepressants known. Your SLEEP improves, kids who move enough during the day fall asleep faster and sleep deeper.`,
            `Your STRESS resets, movement helps complete the body's stress response (Inner World L01!) and brings your nervous system back to calm. Your HEART, BONES, MUSCLES, JOINTS all get stronger and more resilient. Your IMMUNE system works better. Your GUT health improves. Your ENERGY goes up (not down) when you move regularly, even though it sounds backwards. Researchers studying movement consistently find that people who move regularly have LESS fatigue, not more. The body actually makes more energy when you use it. That's why moving in the morning often gives you more energy for the whole day. Movement is one of life's best deals: spend a little physical effort, get back massive returns in mood, energy, focus, and health. Free, available anytime, more powerful than almost anything else.`,
          ],
          image: `/ue-assets/lw/l04-s2-what-does.webp`,
          imageCaption: `Movement helps brain, mood, sleep, stress, energy, immunity, gut, heart. The best deal in wellness.`,
          vocab: [
            { word: `movement returns`,
              definition: `The huge benefits your body gives back when you move regularly, sharper brain, stable mood, deeper sleep, less stress, more energy, stronger immunity, better gut, healthier heart and bones. Spend a little physical effort, get massive returns. One of life's best deals.`,
              audioPrompt: `Movement returns are the huge benefits your body gives back when you move regularly, {name}. Your brain gets nutrients and oxygen, improving focus, learning, memory, creativity. Your mood lifts because movement releases serotonin and dopamine, natural mood-boosters. Your sleep improves. Your stress resets and your nervous system calms. Your heart, bones, muscles, joints get stronger. Your immune system works better. Your energy goes up, not down. Researchers studying movement consistently find people who move regularly have less fatigue. The body makes more energy when you use it.` },
            { word: `serotonin and dopamine`,
              definition: `Two chemical messengers in your brain that regulate mood, motivation, and how you feel. Movement is one of the most powerful natural triggers for both. Serotonin stabilizes mood and creates calm wellbeing. Dopamine creates motivation and a sense of reward. Even a short walk or dance can shift a bad mood — no medication or screens needed.`,
              audioPrompt: `Serotonin and dopamine are two chemical messengers in your brain that regulate mood, motivation, and how you feel, {name}. Movement is one of the most powerful natural triggers for both. When you move, your brain releases serotonin, which stabilizes mood and creates feelings of calm wellbeing. It also releases dopamine, which creates motivation and a sense of reward. This is why even a short walk or dance can shift a bad mood. You don't need medication or screens to get this effect. Movement gives it to you.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Every Body Needs Different Kinds of Movement`,
          paragraphs: [
            `Movement isn't ONE thing. Your body needs different KINDS of movement for different reasons. CARDIOVASCULAR movement (running, biking, swimming, dancing, sports) gets your heart pumping faster and strengthens your heart and lungs. STRENGTH movement (lifting things, climbing, carrying, push-ups, even backpack-carrying) builds strong muscles and bones (super important during your growing years). FLEXIBILITY movement (stretching, yoga, gymnastics, dance) keeps your joints mobile and your body limber. BALANCE movement (skateboarding, biking, balance beam, certain dances, hopping on one foot) trains your nervous system to control your body in space.`,
            `The good news, you don't have to do all four every day. Most kids naturally get a mix when they're allowed to PLAY freely, kids playing tag are getting cardio + agility, kids playing on a playground are getting strength + balance, kids dancing are getting cardio + flexibility. The trouble is that modern life keeps kids still for many hours a day (school, screens), and active play has shrunk. The fix isn't a rigid workout plan, it's getting movement back into your life in WAYS YOU ENJOY. Bike to a friend's house. Play tag with siblings. Try a sport. Take a walk while listening to music. Have a dance party in your room. Find the movement you LOVE, and you'll do it because it's fun, not because you "should." The bodies that get used joyfully across a lifetime are the strongest, healthiest ones.`,
          ],
          image: `/ue-assets/lw/l04-s3-different-kinds.webp`,
          imageCaption: `Four kinds. Cardiovascular, strength, flexibility, balance. Most kids get all four through free play.`,
          vocab: [
            { word: `four kinds of movement`,
              definition: `Cardiovascular (heart and lungs), strength (muscles and bones), flexibility (joints and limberness), balance (nervous-system control). Free play naturally provides a mix; the key is finding kinds you ENJOY, not following a rigid plan.`,
              audioPrompt: `The four kinds of movement are cardiovascular, strength, flexibility, and balance, {name}. Cardiovascular like running, biking, swimming, dancing, sports gets your heart pumping and strengthens heart and lungs. Strength like lifting, climbing, carrying, push-ups builds muscles and bones, super important during growing years. Flexibility like stretching, yoga, gymnastics, dance keeps joints mobile. Balance like skateboarding, biking, balance beam trains your nervous system to control your body in space. Most kids naturally get a mix through play. Find the kinds you enjoy.` },
            { word: `free play`,
              definition: `Unstructured play that kids choose for themselves — one of the most natural ways to get all four kinds of movement at once. Tag and chasing: cardiovascular. Playground equipment: strength and balance. Dancing and gymnastics: flexibility. Researchers link the decline of free play with increases in childhood anxiety, attention problems, and physical health issues.`,
              audioPrompt: `Free play is unstructured play that kids choose for themselves, and it's one of the most natural ways to get all four kinds of movement at once, {name}. Tag and chasing are cardiovascular. Playground equipment builds strength and balance. Dancing, tumbling, and gymnastics add flexibility. The trouble is that modern life keeps kids sitting for many hours each day, at school, and on screens. Active free play has shrunk significantly. Researchers have linked the decline of free play with increases in childhood anxiety, attention problems, and physical health issues.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building Movement Into Your Daily Life`,
          paragraphs: [
            `The biggest myth about movement is that it has to be a big planned thing, like "I'm going to the gym" or "this is my workout time." Researchers studying lifelong healthy movers find that the people who keep moving for life DON'T mostly do big planned workouts. They WEAVE movement into their daily life. They walk instead of driving for short trips. They take stairs. They dance while doing chores. They play with their pets. They garden. They walk and talk with friends. They stand and stretch during long sitting. Movement is woven into ordinary life, not separated from it.`,
            `Same goes for you. The kids who become lifelong movers don't usually have rigid workout schedules. They have HOBBIES and ACTIVITIES they love that happen to involve moving, sports, dance, hiking, biking, skateboarding, swimming, martial arts, yoga, climbing, walking with friends, throwing a ball with family. They also have a "MOVEMENT MINDSET", they choose movement when given options. Walk vs. ride? Sometimes walk. Sit vs. play? Often play. Take the elevator vs. stairs? Often stairs. None of this has to be perfect. Just default to movement when it's available and fits. Terra's first teaching about movement: your body LOVES to move. Find the kinds you genuinely enjoy. Make movement a default, not a chore. Move because it feels good. The kid who learns this builds a lifelong, joyful relationship with movement that no rigid workout plan can match. And your body, brain, sleep, mood, and energy will all reward you, every single day.`,
          ],
          image: `/ue-assets/lw/l04-s4-daily-life.webp`,
          imageCaption: `Lifelong movers don't have big workouts. They weave movement into ordinary days.`,
          vocab: [
            { word: `movement mindset`,
              definition: `The default of choosing movement when it's available and fits — walking instead of driving short trips, taking stairs, playing instead of sitting. Not rigid rules. The hidden pattern of lifelong movers who keep their bodies vibrant across decades.`,
              audioPrompt: `A movement mindset is the default of choosing movement when it's available and fits, {name}. Walking instead of driving short trips. Taking stairs. Playing instead of sitting. Dancing while doing chores. Standing and stretching during long sitting. Not rigid rules, just a default that nudges your life toward more movement and less stillness. Researchers find that lifelong movers don't mostly do big planned workouts. They weave movement into ordinary daily life. Same goes for you. Find activities you love that involve moving, and let movement become a default choice.` },
            { word: `sedentary behavior`,
              definition: `Extended time spent sitting or lying still — not resting or sleeping, but passively inactive. Screen time, long car rides, sitting at desks for hours. Even people who exercise regularly but sit most of the day have worse health outcomes than people who move more throughout the day. Short movement bursts throughout the day reduce the harm significantly.`,
              audioPrompt: `Sedentary behavior is extended time spent sitting or lying still, not resting or sleeping, but passively inactive, {name}. Screen time, long car rides, sitting at desks for hours. Researchers have found that even people who exercise regularly but sit for most of the rest of the day have measurably worse health outcomes than people who move more throughout the day. Breaking up sitting with short movement bursts, standing, stretching, walking to get water, a quick dance in the kitchen, reduces the harm of sedentary behavior and improves energy and mood.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put a movement-into-daily-life practice in order, {name}. Here are five real moves of building movement into your daily life, scrambled. Use the arrows to arrange them from FOUNDATION (mindset shift) to OUTERMOST (active life). This is a real practice you can start this week.`,
          items: [
            { id: `step-mindset`,    label: `SHIFT YOUR MINDSET. Movement isn't punishment or "earning" food. It's joy, energy, and fuel for your brain`,                                       position: 1 },
            { id: `step-listen`,     label: `LISTEN to your body (L01). Different days need different kinds of movement, sometimes intense, sometimes gentle, sometimes just stretching`,        position: 2 },
            { id: `step-find-joy`,   label: `FIND KINDS YOU LOVE. Try lots of things, sports, dance, hiking, biking, swimming, skating, climbing. Keep what feels good`,                       position: 3 },
            { id: `step-weave`,      label: `WEAVE MOVEMENT INTO DAILY LIFE. Walk for short trips, take stairs, dance while doing chores, play with pets or siblings`,                          position: 4 },
            { id: `step-default`,    label: `MAKE MOVEMENT YOUR DEFAULT. When given a choice (walk vs. ride, play vs. sit, stairs vs. elevator), often pick movement`,                          position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of joyful daily movement: shift the mindset (joy not punishment), listen to your body, find kinds you love, weave movement into ordinary life, and default to movement when given the choice. You don't need a rigid plan. You need a relationship with movement that grows for life. Your body will thank you every single day.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l04-q1`, format: `true-false`,
              question: `True or false: Movement is exercise as punishment, to burn calories and "earn" food.`,
              correctAnswer: false,
              explanation: `False. That's diet-culture thinking that ruins movement for many adults. Movement is JOY, energy, fuel for brain and body. People who move because they enjoy it stick with it for life. People who move out of guilt usually quit, then start, then quit. Movement should feel good.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What is your body DESIGNED for?`,
              options: [
                `Sitting still`,
                `MOVEMENT. Humans evolved walking, running, climbing, dancing, playing. The body works best when it moves regularly`,
                `Lying down`,
                `Only typing`,
              ],
              correctIndex: 1,
              explanation: `Your body is DESIGNED to move. Humans evolved over hundreds of thousands of years walking, running, climbing, dancing, playing. Sitting still for hours is actually unusual in human history. Your body works best when it moves regularly throughout the day.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What does movement DO for you (beyond muscles)?`,
              options: [
                `Just makes you tired`,
                `Improves BRAIN (focus, learning, creativity), MOOD (serotonin/dopamine), SLEEP, STRESS, ENERGY, IMMUNITY, GUT, HEART. Best deal in wellness`,
                `Nothing important`,
                `Only burns calories`,
              ],
              correctIndex: 1,
              explanation: `Movement improves brain (focus, learning, memory, creativity), mood (releases serotonin and dopamine), sleep, stress recovery, energy, immunity, gut, heart, bones, joints. Spend a little physical effort, get massive returns. One of life's best deals.` },

            { id: `l04-q4`, format: `true-false`,
              question: `True or false: When you move regularly, you have MORE energy, not less.`,
              correctAnswer: true,
              explanation: `True. Researchers studying movement consistently find that people who move regularly have LESS fatigue, not more. The body actually makes more energy when you use it. That's why moving in the morning often gives you more energy all day. Counterintuitive but real.` },

            { id: `l04-q5`, format: `multiple-choice`,
              question: `What are the FOUR kinds of movement?`,
              options: [
                `Just one kind`,
                `CARDIOVASCULAR (heart and lungs), STRENGTH (muscles and bones), FLEXIBILITY (joints and limberness), and BALANCE (nervous-system control)`,
                `Loud, quiet, medium, slow`,
                `Only sports`,
              ],
              correctIndex: 1,
              explanation: `Four kinds: cardiovascular (running, biking, swimming, dancing), strength (lifting, climbing, carrying), flexibility (stretching, yoga, gymnastics), balance (skateboarding, beam, hopping). Most kids naturally get a mix through free play. The key is finding kinds you enjoy.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `What's the SECRET of lifelong movers?`,
              options: [
                `Rigid daily workouts`,
                `They WEAVE movement into daily life. Walk for short trips, take stairs, dance while doing chores, play with pets. Not big planned workouts`,
                `They hate sitting`,
                `Special equipment`,
              ],
              correctIndex: 1,
              explanation: `Researchers found that lifelong movers don't usually have big planned workouts. They weave movement into daily life. Walk instead of drive short trips. Take stairs. Dance while doing chores. Garden. Walk and talk with friends. Movement woven into ordinary days, not separated from life.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `What is a MOVEMENT MINDSET?`,
              options: [
                `Hating exercise`,
                `The DEFAULT of choosing movement when it's available and fits. Walking vs. riding, stairs vs. elevator, play vs. sit, often pick movement`,
                `A rigid plan`,
                `Always sprinting`,
              ],
              correctIndex: 1,
              explanation: `A movement mindset is the default of choosing movement when it's available and fits. Not rigid rules. Just nudging your life toward more movement and less stillness. Walk vs. drive short trips? Sometimes walk. Stairs vs. elevator? Often stairs. Default to movement when given the choice.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about movement?`,
              options: [
                `Work out hard every day`,
                `Your body LOVES to move. Find kinds you genuinely enjoy. Make movement a DEFAULT, not a chore. Move because it feels good`,
                `Movement is for athletes only`,
                `Sitting is fine`,
              ],
              correctIndex: 1,
              explanation: `Your body LOVES to move. Find the kinds you genuinely enjoy. Make movement a default, not a chore. Move because it feels good. The kid who learns this builds a lifelong, joyful relationship with movement that no rigid workout plan can match.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Take a stretchy breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What kinds of movement do you GENUINELY enjoy (not what you "should" do, but what you actually love)?` },
            { id: `r2`, text: `Have you ever thought of movement as punishment or "earning" food? How does the joy framing feel different?` },
            { id: `r3`, text: `Of the four kinds (cardio, strength, flexibility, balance), which do you get a lot of? Which do you get less of?` },
            { id: `r4`, text: `What's ONE small way you could weave more movement into a daily moment this week (walk a short trip, take stairs, dance in your room)?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Movement research is one of the most consistent areas in health science. Across studies of kids, teens, and adults, the findings are unanimous: regular movement is one of the most powerful wellness practices, affecting mood, brain function, sleep, immunity, energy, and physical health more than almost any other single habit. The kids who grow up with a JOYFUL relationship with movement carry that into adulthood. The kids who learn movement as punishment or "earning" usually struggle with movement (and often with their bodies) for years. Terra's note: movement is one of life's deep pleasures, when you find the kinds you love. Try lots of things. Notice what feels good. Move because it makes you feel alive, not because you "should." Walk, dance, climb, run, swim, skate, bike, lift, stretch. Your body was made for it. The lifelong dance with movement starts now, and the kid who builds it joyfully gives themselves one of the greatest gifts of a healthy, vibrant life.`,
          familyAdventure: `Family Daily Movement Practice. As a family, commit to ONE small movement habit this week. Maybe an after-dinner walk together. Maybe a 10-minute dance party while cleaning up. Maybe biking somewhere instead of driving. Maybe taking the stairs together when possible. The goal isn't a big workout, it's weaving movement into your shared life. Adults model the joy of it. Notice how everyone feels after a week of more movement. Most families feel more connected, more energized, happier. Movement is one of the family practices that pays back forever.`,
          creativePrompt: {
            intro: `Write about movement — what you love, what doesn't work, and the joyful mover you want to grow into.`,
            floor: `Write at least 5 sentences. Name 2-3 kinds of movement you love, and one small way to add more movement to your week.`,
            stretch: `Write 8 to 10 sentences. Build a fuller picture of your relationship with movement and what you want to grow.`,
            open: `Write as much as you want. Write a full piece about your relationship with movement. Describe the kinds of movement that genuinely bring you joy (sports, dance, hiking, biking, skating, swimming, climbing, walking with friends, whatever moves you). Reflect on whether you've ever thought of movement as punishment or chore, and how the JOY frame feels different. Identify which of the four kinds (cardiovascular, strength, flexibility, balance) you get a lot of, and which less. End with a vivid picture of the joyful mover you want to be in your life, plus 2-3 small daily ways you'll weave more movement into your weeks. Make it specific, joyful, and personal.`,
            frames: [
              `Kinds of movement I genuinely love are ___.`,
              `When I move joyfully, I feel ___.`,
              `Movement I get a LOT of: ___. Movement I get LESS of: ___.`,
              `The joyful mover I want to become is ___.`,
              `My small daily ways will be ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand movement as JOY, not punishment. You know what movement does (brain, mood, sleep, stress, energy, immunity, more), the four kinds, and the secret of lifelong movers, weave it into ordinary days, default to movement. Find what you love. Move because it feels good. Your body and brain will reward you. Next, we explore two simple but powerful tools your body needs every day, water and breath. HYDRATION & BREATH. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `joyful-mover`,
          badgeName: `Joyful Mover`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
