// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L12 — Pain & Listening to It
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real pain science — pain as information not enemy. Distinguishes
//            "rest pain" (body asking to slow down) from "push-through
//            soreness" (productive challenge). Critical anti-toughness-culture
//            lesson; teaches kids that listening to pain is wisdom.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 steps of listening to pain wisely)
// SCOPE: pain is information, three kinds (acute warning / overuse signal /
//        productive challenge), how to respond to each, when to seek help
// VOICE: Terra = nurturing, protective, anti-tough-it-out, deeply respects
//        body wisdom around pain
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-12`,
      title: `Pain & Listening to It`,
      duration: 18,
      xpReward: 75,
      badge: `pain-listener`,
      badgeName: `Pain Listener`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something many people get wrong: PAIN. Most kids and adults learn one of two unhelpful approaches, either to be SCARED of pain (panicking at every ache) or to IGNORE it ("just tough it out, push through"). Both miss what pain actually is. Pain is INFORMATION, your body's most important alarm system. It tells you when something needs your attention, when to rest, when to slow down, sometimes when to push gently. Learning to LISTEN to pain wisely is one of the most important wellness skills. Take a gentle breath, and let's begin.`,
          headline: `Pain & Listening to It`,
          subtitle: `Pain is information. Your body's wisest alarm system. How to listen well.`,
          visual: `/ue-assets/lw/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Pain Is Your Body's Most Important Messenger`,
          paragraphs: [
            `Here's the truth most people miss: pain is NOT the enemy. Pain is your body's most important communication system. Without pain, we wouldn't pull our hands off hot stoves. We wouldn't notice broken bones. We wouldn't know when to stop pushing a muscle past its limit. Pain has saved billions of lives across human history by ALERTING us to harm. Your nerves and brain work together to send pain signals when something needs attention. The signal isn't punishment, it's PROTECTION. The wise response isn't to be scared of pain or to ignore it. It's to LISTEN to what it's telling you.`,
            `Researchers studying pain have found that people who view pain as INFORMATION (rather than enemy) cope with it better, recover faster, and have fewer long-term issues. The kids who learn this early avoid two big mistakes adults often make. The first mistake is FEAR, panicking at every small pain, missing the difference between minor and serious. The second mistake is OVERRIDE, ignoring real pain and pushing through, then ending up injured. Both are unwise. The middle path is LISTENING, treating pain as a message worth understanding, and responding accordingly. Today, you'll learn how to do this.`,
          ],
          image: `/ue-assets/lw/l12-s1-messenger.webp`,
          imageCaption: `Pain is your body's most important communication system. Not enemy. Alarm.`,
          vocab: [
            { word: `pain as information`,
              definition: `The mature understanding that pain is your body's MESSENGER, not an enemy. It signals when something needs attention. Wise response isn't fear or ignoring, it's LISTENING and responding to what the pain is communicating. Research shows people who view pain this way cope better and recover faster.`,
              audioPrompt: `Pain as information is the mature understanding that pain is your body's messenger, not an enemy, {name}. Without pain, we wouldn't pull our hands off hot stoves, wouldn't notice broken bones. Pain has saved billions of lives across human history by alerting us to harm. The signal isn't punishment. It's protection. Researchers found that people who view pain as information cope with it better and recover faster than people who view pain as an enemy to fight or ignore. The wise response is listening.` },
            { word: `pain override`,
              definition: `The habit of ignoring real pain and pushing through it, often to appear tough or avoid slowing down. Causes many long-term injuries. When you push through real acute or overuse pain, the body's alarm system escalates. Ignoring it makes injuries worse. The wise middle path is listening — neither fear nor override.`,
              audioPrompt: `Pain override is the habit of ignoring real pain and pushing through it, often to appear tough or avoid slowing down, {name}. It's the second of the two unwise approaches to pain. Pain override causes many of the injuries that damage athletes and active people long-term. When you push through real acute or overuse pain, the body's alarm system keeps escalating the signal. Ignoring it makes injuries worse, not better. The wise middle path is neither fear nor override. It's listening, treating pain as a message worth understanding.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Kinds of Pain (And What Each Means)`,
          paragraphs: [
            `Most pain falls into one of three categories, and learning to tell them apart is a key skill. First, ACUTE WARNING pain. Sudden, sharp, intense. Twisted ankle, stubbed toe, cut finger, hit head, sudden bad stomach pain. This pain is your body saying "STOP, something just happened, attend to this NOW." Acute warning pain almost always needs immediate attention. Stop what you're doing, assess, get help if needed, rest. Ignoring acute warning pain to "be tough" causes worse injuries.`,
            `Second, OVERUSE or REST signals. Aching pain that builds slowly, often after a lot of activity. Sore muscles after sports, headache after hours of screens, back ache from too much sitting, joint discomfort after lots of repetitive movement. This pain is your body saying "I've been working hard, I need rest now." The wise response is to actually REST, change positions, take breaks, hydrate, sleep, give the body the recovery it's asking for. Ignoring overuse pain leads to real injury over time. Third, PRODUCTIVE CHALLENGE soreness. This is different. It's the mild burn during exercise when you're working a muscle, the slight discomfort of stretching a tight area, the moderate effort of doing something hard but safe. This pain is your body saying "I'm working, this is okay." Productive challenge pain is part of healthy movement and growth. The trick is knowing it's different from the other two kinds.`,
          ],
          image: `/ue-assets/lw/l12-s2-three-kinds.webp`,
          imageCaption: `Acute warning (stop now). Overuse signal (rest). Productive challenge (work continuing).`,
          vocab: [
            { word: `three kinds of pain`,
              definition: `ACUTE WARNING (sudden, sharp, attend immediately), OVERUSE (slow-building ache, body asking for rest), and PRODUCTIVE CHALLENGE (mild burn during healthy work). Learning to tell them apart is core wellness wisdom. Ignoring the first two causes injury. Misreading the third stops you from healthy growth.`,
              audioPrompt: `The three kinds of pain are acute warning, overuse, and productive challenge, {name}. Acute warning pain is sudden, sharp, intense, like a twisted ankle or hit head. Your body says stop, attend to this now. Overuse pain builds slowly after a lot of activity, sore muscles, headaches after screens, back aches from sitting. Your body says I need rest. Productive challenge is the mild burn during exercise or the slight discomfort of stretching. Your body says I'm working, this is okay. Learning to tell them apart is core wellness wisdom.` },
            { word: `acute warning pain`,
              definition: `The sudden, sharp, intense pain that tells you to stop immediately. A twisted ankle, stubbed toe, cut finger, hit head, or sudden sharp stomach pain. Your body's most urgent signal: stop, assess, get help if needed. Ignoring acute warning pain to be tough always makes the injury worse.`,
              audioPrompt: `Acute warning pain is the sudden, sharp, intense pain that tells you to stop what you're doing immediately, {name}. A twisted ankle, stubbed toe, cut finger, hit head, or sudden sharp stomach pain. This is your body's most urgent signal: stop, assess, get help if needed. Ignoring acute warning pain to be tough always makes the injury worse. The wise response is to pause, look at what happened, and get a trusted adult right away if anything looks wrong, is severely painful, or involves swelling or inability to move.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Responding to Each Kind Wisely`,
          paragraphs: [
            `For ACUTE WARNING pain, the rule is simple: STOP and assess. Pause what you're doing. Notice what just happened. If it's a real injury (something looks wrong, severe pain, can't put weight on it, swelling), get help from a trusted adult right away. For minor things (small stub, brief bump), check it out, take a few minutes to settle, and use sense about whether to continue. Don't try to be tough through real injuries, you make them worse. For OVERUSE pain, the rule is: REST and RECOVER. Listen to the signal. Change positions if you've been still. Take screen breaks if you've been on devices. Hydrate. Stretch gently. Sleep well (L02!). Sometimes a day off from a sport or activity is exactly what your body needs. Pushing through overuse pain almost always leads to bigger injury later.`,
            `For PRODUCTIVE CHALLENGE pain, the rule is: keep working WITH AWARENESS. Lean into the work, but stay attuned to your body. If "mild burn" becomes "sharp warning," stop. Productive challenge should leave you feeling stronger and capable afterward, not damaged. Coaches and teachers sometimes push kids too hard, "push through the pain!" Watch out for that. Productive challenge has a calm, doable feel. Real pain has a different signal. Trust your body. Honor the difference. Here's a deeper truth: in our culture, kids (especially in sports and athletics) are sometimes praised for "toughing out" real pain. This is unwise and can cause serious long-term harm. There is no glory in damaging your body to look strong. Real strength is listening to your body and respecting what it's telling you. The kid who learns this early avoids many of the lifelong injuries adults wish they'd prevented.`,
          ],
          image: `/ue-assets/lw/l12-s3-responding.webp`,
          imageCaption: `Acute, stop. Overuse, rest. Productive, work with awareness. Honor the difference.`,
          vocab: [
            { word: `respecting pain`,
              definition: `The wise practice of treating each kind of pain appropriately. Acute warning, stop. Overuse, rest. Productive challenge, work with awareness. Refusing to "tough out" real pain. Cultural pressure to push through pain often causes lifelong injury. Real strength is listening.`,
              audioPrompt: `Respecting pain is the wise practice of treating each kind of pain appropriately, {name}. Acute warning pain, stop and assess. Overuse pain, rest and recover. Productive challenge pain, keep working with awareness. In our culture, kids in sports are sometimes praised for toughing out real pain. This is unwise and can cause serious long-term harm. There is no glory in damaging your body to look strong. Real strength is listening to your body and respecting what it tells you.` },
            { word: `overuse pain`,
              definition: `The slow-building ache that appears after too much activity, telling you your body needs rest and recovery. Sore muscles after sports, headaches after long screen sessions, back aches from sitting, joint discomfort from repetitive movement. Wise response: rest, hydrate, sleep well. Pushing through consistently leads to real injury.`,
              audioPrompt: `Overuse pain is the slow-building ache that appears after too much activity, telling you your body needs rest and recovery, {name}. Sore muscles after sports, headaches after hours of screens, back aches from too much sitting, joint discomfort from repetitive movement. This is your body saying I've been working hard, I need to rest now. The wise response is to actually rest, change positions, hydrate, sleep well, and give your body what it's asking for. Pushing through overuse pain consistently leads to real injury. Rest is the correct response.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When to Seek Help (And Telling Adults)`,
          paragraphs: [
            `Some pain needs adult help. Trust this list: pain that's SEVERE (much worse than normal aches). Pain that's GETTING WORSE over time instead of better. Pain after a real injury (a fall, hit, twist that felt serious). Pain with other symptoms (fever, vomiting, can't move something, swelling, bruising, dizziness). Pain that's lasted MORE THAN A FEW DAYS without clear improvement. Pain that wakes you up at night. Pain in your CHEST, HEAD (severe), or BELLY (severe). All of these deserve telling a trusted adult AND likely seeing a doctor. You don't have to "be tough" about real pain. Doctors and nurses handle pain questions every day, that's their job.`,
            `Here's the other side: don't be afraid to mention pain even when it's "small." Trusted adults won't think you're being dramatic. They'd rather hear about something you're not sure about and help you decide if it matters. Many kids hide pain because they don't want to be "babies" or worry their parents. This is unwise and sometimes dangerous. Tell trusted adults what your body is telling you. Together you can decide if it needs action. Terra's first teaching about pain: pain is information, not enemy. Listen to it. Acute warning, stop. Overuse, rest. Productive challenge, work with awareness. Don't override real pain to look tough. Tell trusted adults when something hurts. Doctors are there for this. The kid who treats their body's pain as wisdom builds a lifetime of healthy listening. Real strength isn't toughness, it's wisdom.`,
          ],
          image: `/ue-assets/lw/l12-s4-seek-help.webp`,
          imageCaption: `Real pain needs adult help. Tell trusted adults. Real strength is wisdom, not toughness.`,
          vocab: [
            { word: `pain that needs help`,
              definition: `Pain that's severe, getting worse, after real injury, with other symptoms (fever, swelling, dizziness), lasting more than a few days, waking you up at night, or in chest/head/belly. Always tell a trusted adult. Doctors handle pain every day. Don't hide pain to look tough.`,
              audioPrompt: `Pain that needs help includes pain that's severe, getting worse over time, after a real injury, with other symptoms like fever or swelling or dizziness, lasting more than a few days, waking you up at night, or in your chest or head or belly, {name}. Always tell a trusted adult. Doctors and nurses handle pain questions every day, that's their job. Don't hide pain to look tough. Tell trusted adults what your body is telling you. Together you can decide if it needs action.` },
            { word: `productive challenge pain`,
              definition: `The mild burn or discomfort you feel during healthy physical work — telling you your body is being used, not harmed. The slight burn during a hard run, muscle effort during strength exercise, a tight muscle gently stretching. Should leave you feeling stronger, not damaged. If it sharpens into warning pain, stop.`,
              audioPrompt: `Productive challenge pain is the mild burn or discomfort you feel during healthy physical work, telling you your body is being used, not harmed, {name}. The slight burn during a hard run, the muscle effort during a strength exercise, the stretch of a tight muscle gently lengthening. This pain has a calm, workable quality. It should leave you feeling stronger and capable afterward, not damaged. If productive challenge pain sharpens into warning pain, that's the signal to stop. Trusting the difference keeps you growing without injury.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put listening to pain wisely in order, {name}. Here are five steps of how to respond when your body sends a pain signal, scrambled. Use the arrows to arrange them from FIRST (when you notice) to LAST (taking action). This is a real practice you can use anytime.`,
          items: [
            { id: `step-notice`,    label: `NOTICE THE PAIN. Don't ignore it. Pain is information, your body's most important alarm system`,                                                              position: 1 },
            { id: `step-pause`,     label: `PAUSE. Stop or slow down what you're doing. Give yourself a moment to check in with your body`,                                                                 position: 2 },
            { id: `step-ask`,       label: `ASK WHAT KIND. Acute warning (sudden, sharp)? Overuse signal (slow build, body asking for rest)? Productive challenge (mild burn during healthy work)?`,        position: 3 },
            { id: `step-respond`,   label: `RESPOND APPROPRIATELY. Acute, stop and assess. Overuse, rest and recover. Productive, work with awareness, watching for any escalation`,                       position: 4 },
            { id: `step-help`,      label: `SEEK HELP IF NEEDED. Tell a trusted adult about severe, worsening, or unclear pain. Doctors handle pain every day. Never tough out real injury`,             position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of listening to pain wisely: notice, pause, ask what kind, respond appropriately, and seek help when needed. Pain is wisdom. Honoring it is strength. Practice this. Your body will keep you healthier for a lifetime.`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l12-q1`, format: `true-false`,
              question: `True or false: Pain is the enemy and the goal is to ignore it or fight through it.`,
              correctAnswer: false,
              explanation: `False. Pain is NOT the enemy. Pain is your body's most important communication system, an alarm that protects you from harm. Researchers found that people who view pain as INFORMATION (rather than enemy) cope better, recover faster, and have fewer long-term issues. Wise response is LISTENING, not fighting.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `What are the THREE kinds of pain?`,
              options: [
                `Big, medium, small`,
                `ACUTE WARNING (sudden, sharp), OVERUSE (slow build, body asking for rest), and PRODUCTIVE CHALLENGE (mild burn during healthy work)`,
                `All the same`,
                `Real and fake`,
              ],
              correctIndex: 1,
              explanation: `Three kinds: ACUTE WARNING (sudden, sharp, attend immediately), OVERUSE (slow-building ache from too much activity, body asking for rest), PRODUCTIVE CHALLENGE (mild burn during healthy work like exercise or stretching). Learning to tell them apart is core wisdom.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `What should you do for ACUTE WARNING pain (sudden, sharp)?`,
              options: [
                `Push through it`,
                `STOP and ASSESS. Pause what you're doing. If it's a real injury, get adult help right away. Don't try to be tough through real injuries`,
                `Ignore it`,
                `Just keep going`,
              ],
              correctIndex: 1,
              explanation: `For acute warning pain, STOP and assess. Pause what you're doing. Notice what just happened. If real injury (something looks wrong, severe pain, can't put weight on it, swelling), get adult help right away. Don't try to be tough through real injuries, you make them worse.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What should you do for OVERUSE pain (slow-building ache after lots of activity)?`,
              options: [
                `Push harder`,
                `REST and RECOVER. Listen to the signal. Change positions, take breaks, hydrate, stretch gently, sleep well. Pushing through almost always leads to bigger injury`,
                `Ignore it`,
                `Get worried`,
              ],
              correctIndex: 1,
              explanation: `For overuse pain, REST and recover. Listen. Change positions if still, take screen breaks, hydrate, stretch gently, sleep well. Sometimes a day off from sports is exactly what your body needs. Pushing through overuse almost always leads to bigger injury later.` },

            { id: `l12-q5`, format: `multiple-choice`,
              question: `What about PRODUCTIVE CHALLENGE pain (mild burn during exercise)?`,
              options: [
                `Always stop`,
                `Keep working WITH AWARENESS. Lean into the work but stay attuned. If "mild burn" becomes "sharp warning," stop. Productive challenge should leave you stronger, not damaged`,
                `Ignore your body completely`,
                `Never exercise`,
              ],
              correctIndex: 1,
              explanation: `For productive challenge, keep working with awareness. Lean in but stay attuned. If "mild burn" becomes "sharp warning," stop. Productive challenge should leave you feeling stronger and capable, not damaged. Has a calm, doable feel.` },

            { id: `l12-q6`, format: `true-false`,
              question: `True or false: There is glory in "toughing out" real pain to look strong.`,
              correctAnswer: false,
              explanation: `False. There is NO glory in damaging your body to look strong. Real strength is listening to your body and respecting what it's telling you. Kids in sports are sometimes praised for toughing out real pain, this is unwise and can cause serious long-term harm. Wisdom is real strength.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `Which pain ALWAYS needs adult help?`,
              options: [
                `Tiny stubs only`,
                `SEVERE, getting WORSE over time, after a real injury, with other symptoms (fever, swelling, dizziness), lasting MORE THAN A FEW DAYS, waking you up at night, or in chest/head/belly`,
                `Random aches`,
                `Never tell adults`,
              ],
              correctIndex: 1,
              explanation: `Always tell a trusted adult about pain that's severe, getting worse, after real injury, with other symptoms (fever, vomiting, swelling, bruising, dizziness), lasting more than a few days, waking you up at night, or in chest/head/belly. Doctors handle pain questions every day. Never hide real pain.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about pain?`,
              options: [
                `Always be tough`,
                `Pain is INFORMATION, not enemy. Listen. Acute warning, stop. Overuse, rest. Productive challenge, work with awareness. Don't override real pain to look tough. Real strength is wisdom`,
                `Pain is bad`,
                `Ignore your body`,
              ],
              correctIndex: 1,
              explanation: `Pain is information, not enemy. Listen to it. Acute warning, stop. Overuse, rest. Productive challenge, work with awareness. Don't override real pain to look tough. Tell trusted adults when something hurts. Real strength isn't toughness, it's wisdom.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Take a gentle breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever pushed through pain you should have listened to? What happened?` },
            { id: `r2`, text: `Have you ever hidden pain from adults because you didn't want to "be a baby"? What was that like? Would you do it differently now?` },
            { id: `r3`, text: `Right now, do a quick body scan. Is there any pain or discomfort? What kind is it (acute, overuse, productive challenge)? What does it need?` },
            { id: `r4`, text: `Who are the trusted adults you'd go to if you had pain that needed help? Name them.` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Pain research is some of the most important work in modern medicine and psychology. Studies on athletes, kids, and adults consistently show that people who LISTEN to their pain wisely have fewer injuries, faster recoveries, and longer healthy careers in sports and active lives. People who push through real pain end up with chronic injuries, surgeries, and lifetime limitations. The toughness-culture pressure to "play through pain" has caused real lifelong harm in kids and athletes. Terra's note: you have a body you'll live in for many decades. Treating it kindly when it sends pain signals is one of the most important things you can do for its long-term health. Listen to pain as wisdom, not weakness. Tell trusted adults when something hurts. Push only when the signal is productive challenge, never acute warning. Real strength is the kid who knows the difference, and protects their body for the lifetime ahead.`,
          familyAdventure: `Family Pain Honesty. As a family, talk openly: each person shares ONE time they pushed through pain they should have listened to, OR ONE time they listened well and were glad. Adults model it too. Normalize talking about pain as information. Many kids hide pain because they think it shows weakness. This conversation opens the door for them to bring up real pain in the future, which protects them from injuries that grow worse from being ignored. You're building a family that respects body wisdom together.`,
          creativePrompt: {
            intro: `Write about your relationship with pain, when you've listened, when you haven't, and the wisdom you want to grow.`,
            floor: `Write at least 5 sentences. Describe a time pain told you something important and how you responded.`,
            stretch: `Write 8 to 10 sentences. Reflect on the three kinds of pain in your own life and what you've learned.`,
            open: `Write as much as you want. Write a full piece about pain in your life. Describe a memorable moment when your body sent you a pain signal, what kind it was (acute warning, overuse, productive challenge), how you responded, and what happened. Reflect on the cultural pressure to "tough out" pain and how that's actually unwise. Describe the wiser pain-listener you want to be, attentive, respectful of body wisdom, willing to tell trusted adults when something matters, able to push through productive challenge while honoring real warning signals. End with one specific commitment for the next time pain shows up. Make it kind, specific, and self-honoring.`,
            frames: [
              `A memorable pain moment in my life was ___.`,
              `What kind of pain it was: ___.`,
              `How I responded was ___.`,
              `What I'd do differently now is ___.`,
              `The kind of pain-listener I want to be is ___.`,
              `My commitment for next time is ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Strong, wise work, {name}. You now understand the truth most people miss, pain is INFORMATION, not enemy. You know the three kinds (acute warning, overuse, productive challenge), the wise response to each, and the cultural lie that "toughing out real pain" is strength. It's not. Listening is. Tell trusted adults. Respect your body's signals. Real strength is wisdom. Next, we explore something deeply healing for your body and brain, time in NATURE and outside. Real research, beautiful science. SUNLIGHT, NATURE & OUTSIDE. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `pain-listener`,
          badgeName: `Pain Listener`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
