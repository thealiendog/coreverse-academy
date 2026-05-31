// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L08 — The Default Mode Network: Is Quieter Always Better?
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Neuroscience of Self, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (is quieting the DMN actually good?)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l08-v1";

const INNERWORLD_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-08`,
      title: `The Default Mode Network: Is Quieter Always Better?`,
      duration: 35,
      xpReward: 75,
      badge: `dmn-debater`,
      badgeName: `DMN Debater`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, two lessons ago we mentioned the Default Mode Network. Last lesson we read a real paper about it. Today we go deeper into a strange and important question. The DMN is what generates the feeling of being you. Your inner narrator. Your sense of past and future. Your mind-wandering. Meditation reduces DMN activity. Psychedelics dramatically reduce it. Wellness culture has decided the DMN is bad and quieting it is always good. But the DMN does real and necessary work. Quieting it isn't free. Today's question, which we will let you build an argument about: is quieting the DMN actually good? You will have to pick a position and defend it with real evidence.`,
          headline: `The Default Mode Network`,
          subtitle: `Less ego sounds good. But what are you giving up?`,
          visual: `/voyager-assets/inner-world/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Discovered By Accident`,
          paragraphs: [
            `In 2001, neuroscientist Marcus Raichle was studying brain activity during cognitive tasks. He wanted to see what regions activated when people did mental work. To do this, he needed a baseline: what was the brain doing when it wasn't on task? He scanned people while they rested between trials. He expected the brain to mostly be quiet. He found the opposite.`,
            `Specific regions of the brain were active during rest, then deactivated when people did tasks. This was backwards from what most neuroscientists expected. Raichle proposed that these regions formed a network the brain "defaults to" when not focused on something external. He called it the Default Mode Network. The discovery was published in PNAS in 2001 and is now one of the most cited findings in modern neuroscience.`,
            `Subsequent research mapped what the DMN actually does. It activates during mind-wandering, daydreaming, autobiographical memory, imagining the future, thinking about other people's mental states, and reflecting on yourself. In short, the DMN generates much of what we call "being a self." Your sense of having a personal story, a future to plan for, relationships to navigate, identity to maintain. All of this involves DMN activity.`,
          ],
          image: `/voyager-assets/inner-world/l08-s1-discovery.webp`,
          imageCaption: `Raichle 2001: the brain is busy doing self-stuff when it isn't doing anything else.`,
          vocab: [
            {
              word: `Default Mode Network`,
              definition: `A network of brain regions including the medial prefrontal cortex and posterior cingulate cortex that activates during rest, mind-wandering, and self-referential thought. Identified by Marcus Raichle in 2001.`,
              audioPrompt: `The Default Mode Network is a set of brain regions that activates during rest and self-referential thought, {name}. The key regions include the medial prefrontal cortex and the posterior cingulate cortex. When you're not focused on a specific task, when your mind wanders, when you imagine your future or remember your past or think about who you are, the DMN is active. It generates the constant inner narrative most people experience as "being themselves." Marcus Raichle discovered it accidentally in 2001 while looking for the brain's resting baseline. It is one of the most important findings in modern neuroscience.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What The DMN Does Well`,
          paragraphs: [
            `The DMN gets a bad reputation in wellness culture, but the network does essential work. It is critical for planning. When you imagine yourself in the future (figuring out what you want to do this weekend, planning what to say in a hard conversation, deciding what high school you might want to attend), DMN regions are active. Without this network, sustained future-oriented thinking would be impossible.`,
            `The DMN is also central to social cognition. When you think about what your friend is feeling, when you imagine how your parents will react to news, when you try to figure out why someone said what they said, you are using DMN regions. The network is essentially your model of other people's minds. People with damage to certain DMN areas have measurable difficulty with social understanding. This isn't a coincidence.`,
            `Autobiographical memory and identity also live here. Remembering your sixth birthday, knowing what kind of person you are, holding a sense of continuity across time, integrating who you were last year with who you are now, all of this is DMN work. The network is what makes you feel like a continuous person rather than just a stream of momentary experiences. There are real benefits to having that sense.`,
          ],
          image: `/voyager-assets/inner-world/l08-s2-functions.webp`,
          imageCaption: `Planning, social understanding, identity: real essential work.`,
          vocab: [
            {
              word: `social cognition`,
              definition: `The mental processes involved in understanding other people's thoughts, feelings, and intentions. Largely DMN-mediated.`,
              audioPrompt: `Social cognition is the mental processes involved in understanding other people, {name}. When you figure out what your friend is feeling, when you guess why your parent reacted a certain way, when you imagine what someone meant by a comment, you are doing social cognition. Much of this work happens in DMN regions. This matters for the lesson's central question. If you quiet the DMN too much, you may reduce some negative aspects (rumination, self-criticism) but you also reduce social cognition itself. The tradeoffs are real.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why People Want To Quiet It`,
          paragraphs: [
            `The same network that does all that essential work also produces the most painful parts of being a self. Rumination, the repeated chewing-over of negative thoughts, lives in the DMN. So does excessive self-criticism. So does worry about the future and regret about the past. People with depression often have hyperactive DMN activity. Studies of patients with generalized anxiety show similar patterns. The DMN, doing what it does in a stuck loop, generates much of what we call psychological suffering.`,
            `This is why quieting it became attractive. Meditation reduces DMN activity, both during practice and in long-term meditators even at rest. People who meditate often report less rumination, less self-attack, less stuck thinking. The brain imaging is consistent with their reports. Quieting the DMN does seem to reduce a specific kind of internal suffering.`,
            `Psychedelics dramatically reduce DMN activity. fMRI studies of people on psilocybin (the active compound in psychedelic mushrooms) show pronounced DMN suppression. Many users report a temporary "loss of self" experience. This is being researched seriously for treatment-resistant depression. Early results from Johns Hopkins and Imperial College London suggest psychedelic-assisted therapy can produce lasting reductions in depression for some patients. The mechanism appears to involve, at least partly, DMN suppression.`,
          ],
          image: `/voyager-assets/inner-world/l08-s3-quiet.webp`,
          imageCaption: `Rumination, depression, anxiety: real suffering that quieter DMN may help.`,
          vocab: [
            {
              word: `rumination`,
              definition: `The repeated chewing-over of negative thoughts, regrets, or worries. A DMN-related pattern strongly associated with depression and anxiety.`,
              audioPrompt: `Rumination is the repeated chewing-over of negative thoughts, {name}. It's when your mind goes around the same painful loop over and over: replaying an embarrassing moment, worrying about the same upcoming event, criticizing yourself for the same flaw. Rumination is a DMN activity. People with depression often have higher DMN activity, and that hyperactivity is linked to more rumination. Reducing rumination is one of the genuine benefits people report from meditation. Quieting the rumination loop is real. The question is whether all DMN activity should be quieted, or just this particular pattern.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Tradeoffs People Don't Mention`,
          paragraphs: [
            `Wellness culture has decided the DMN is the enemy. The slogan, often unspoken, is: less self equals more peace. But quieting the DMN has real costs that don't get mentioned. Reduced future planning capacity. Reduced social cognition. Reduced sense of continuous identity. In some psychedelic experiences, the loss of self is profoundly disorienting and lasting effects can include depersonalization, the feeling that you aren't quite real or aren't quite present in your own life.`,
            `Research from psychedelic-assisted therapy is honest about this. The same studies showing benefit for depression note that not all participants improve. Some experience the dissolution of self as a freeing relief. Others experience it as terrifying. Long-term meditators sometimes report what researchers call "dark night" experiences, periods of months or years of feeling disconnected, unmotivated, or hollow. Willoughby Britton's research at Brown documents these adverse effects in serious practitioners. They are not rare. They are rarely talked about.`,
            `There's a deeper question worth holding. The DMN is what generates "you" as a continuous person with a story and a future. If you quiet it too much, who is left to actually live the life you have? Maybe the answer is "the same person, just less anxious." Maybe the answer is "someone meaningfully different, with both gains and losses." This is exactly the kind of question 11- and 12-year-olds rarely get asked but really can engage with.`,
          ],
          image: `/voyager-assets/inner-world/l08-s4-tradeoffs.webp`,
          imageCaption: `Quieter DMN isn't free. The costs are real and underreported.`,
          vocab: [
            {
              word: `depersonalization`,
              definition: `A psychological state of feeling disconnected from yourself or your own experience, as if you aren't fully real or fully present. A documented adverse effect of intense contemplative practice or psychedelics in some people.`,
              audioPrompt: `Depersonalization is a state of feeling disconnected from yourself, {name}. People experiencing it describe feeling unreal, watching themselves from outside, or not quite present in their own life. Mild depersonalization is common after intense stress. More serious cases can be lasting and distressing. Some long-term meditators and some psychedelic users develop depersonalization symptoms. The research community is increasingly honest about this. Quieting the network that builds the self isn't always purely positive. For some people, it produces these specific costs. The full picture includes both the benefits and these effects.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `So What's The Actual Answer?`,
          paragraphs: [
            `Three serious positions exist on this question. Position one: quieter is better. The DMN drives so much suffering (rumination, anxiety, depression, self-attack) that reducing its activity produces meaningful psychological gain. The benefits exceed the costs for most people. This is the dominant wellness view.`,
            `Position two: it depends on what's being quieted. A balanced DMN that supports planning, social cognition, and identity while not being stuck in rumination loops is the goal. Quieting too much risks losing capacities you actually want. The goal isn't less DMN, it's better-functioning DMN. This is closer to where careful neuroscientists land.`,
            `Position three: leave it alone unless you have a problem. The DMN evolved for good reasons. Healthy young people with normal DMN activity should not be aggressively trying to suppress it. The intense quieting practices were developed for specific contexts (advanced contemplatives, monastic settings) and may be inappropriate for casual use, especially in still-developing adolescent brains. Children and teens may be particularly at risk from aggressive DMN suppression. This is the careful adolescent psychology view.`,
            `In a moment you will build an argument for one of these positions. Choose carefully. You will be defending it with real evidence from the lesson.`,
          ],
          image: `/voyager-assets/inner-world/l08-s5-positions.webp`,
          imageCaption: `Three serious positions. Pick one. Defend it with evidence.`,
          vocab: [
            {
              word: `adolescent neuroscience`,
              definition: `The study of how the brain develops during adolescence. A field where careful researchers note that interventions safe for adults may have different effects on developing brains.`,
              audioPrompt: `Adolescent neuroscience is the study of how the brain develops during adolescence, {name}. One of the field's recurring findings is that adolescent brains are different from adult brains in measurable ways. The prefrontal cortex is still developing. Reward sensitivity is heightened. Network connections are being pruned and strengthened. This matters when adults consider what practices to recommend to kids. Some practices well-studied in adults have not been studied in teens. Caution is warranted not because adolescents are fragile but because their brains are uniquely in flux.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l08-argument-builder`,
          type: `argument-builder`,
          headline: `Build Your Argument: Is Quieting The DMN Good?`,
          intro: `Pick one of three positions. Choose 3-4 pieces of evidence from the lesson to defend it. Then respond to the strongest counterargument. There isn't a right answer, but some arguments are stronger than others.`,
          positions: [
            {
              id: `quieter-better`,
              label: `Quieter is better`,
              summary: `The DMN drives so much suffering (rumination, anxiety, depression, self-attack) that reducing its activity produces meaningful psychological gain. The benefits exceed the costs for most people. Aggressive DMN-quieting practices like meditation should be widely encouraged.`,
            },
            {
              id: `balanced-better`,
              label: `Balanced is better`,
              summary: `The goal isn't less DMN, it's better-functioning DMN. A network that supports planning, social cognition, and identity while not being stuck in rumination loops is what we want. Quieting too much risks losing real capacities. Practices should target rumination specifically, not the whole network.`,
            },
            {
              id: `leave-alone`,
              label: `Leave it alone (especially for kids)`,
              summary: `The DMN evolved for good reasons. Healthy people with normal DMN activity shouldn't aggressively suppress it. Intense quieting practices were developed for specific contexts and may be inappropriate for casual use, especially in still-developing adolescent brains. Default position should be caution, not intervention.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Hyperactive DMN activity is consistently associated with depression. Studies of depressed patients show elevated DMN activity correlated with severity of rumination symptoms.`,
              source: `Multiple neuroimaging studies, 2007-2020`,
            },
            {
              id: `e2`,
              text: `Long-term meditators show reduced DMN activity even at rest, and report less rumination and stuck thinking compared to non-meditators of similar age.`,
              source: `Brewer et al. 2011, PNAS; Hasenkamp et al. multiple studies`,
            },
            {
              id: `e3`,
              text: `The DMN is essential for future planning, social cognition (understanding other people's minds), and maintaining a continuous sense of identity across time. Damage to certain DMN regions produces measurable social and planning deficits.`,
              source: `Established consensus in cognitive neuroscience`,
            },
            {
              id: `e4`,
              text: `Psychedelic-assisted therapy trials (Johns Hopkins, Imperial College London) show DMN suppression correlates with lasting reductions in treatment-resistant depression for many patients, but not all.`,
              source: `Carhart-Harris et al. multiple studies, 2016-2023`,
            },
            {
              id: `e5`,
              text: `Willoughby Britton's research at Brown documents adverse effects of intensive meditation including depersonalization, dissociation, and "dark night" experiences lasting months or years. These are not rare in serious practitioners.`,
              source: `Britton et al. various studies, 2011-2021`,
            },
            {
              id: `e6`,
              text: `The DMN is still developing during adolescence. Aggressive interventions safe in adults have not been comprehensively studied in still-developing adolescent brains.`,
              source: `Established consensus in developmental neuroscience`,
            },
            {
              id: `e7`,
              text: `Mindfulness-based interventions targeting rumination specifically (rather than general DMN suppression) show clinical benefits in adolescents with anxiety and depression, with apparent safety in standard 8-week formats.`,
              source: `Multiple MBSR/MBCT clinical trials in adolescent populations`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. Whatever position you took, someone could say: rumination and depression are real, current, urgent problems for adolescents. Whatever caution you raised about over-quieting, that caution sounds abstract compared to a 12-year-old's actual mental suffering right now. If meditation could meaningfully reduce that suffering, shouldn't we prioritize the urgent over the theoretical concerns? Why isn't the right answer just 'try it carefully and see what happens'?"`,
            promptInstruction: `In 3-4 sentences, respond to this objection. What does your position offer that "just try it and see" misses?`,
          },
          reflectionPrompt: `Looking at the evidence you didn't pick, which piece bothers you most? Could you imagine changing your position in 2 years if more research came out?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Who discovered the Default Mode Network and when?`,
              options: [
                `Sigmund Freud, 1900`,
                `Marcus Raichle, 2001`,
                `Carl Jung, 1925`,
                `Joe Dispenza, 2010`,
              ],
              correctIndex: 1,
              explanation: `Marcus Raichle published the discovery in PNAS in 2001. It was accidental — he was looking for the brain's resting baseline and found these specific regions active during rest, deactivating during tasks.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the DMN actually do?`,
              options: [
                `Generates the feeling of being a self, supports planning, social cognition, autobiographical memory, and mind-wandering`,
                `Controls movement only`,
                `Just produces rumination`,
                `Stores memories of facts`,
              ],
              correctIndex: 0,
              explanation: `The DMN does multiple important things: planning future actions, understanding other people's minds, holding autobiographical memory, generating a sense of continuous identity. It is not just "the rumination network."`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is rumination?`,
              options: [
                `A meditation technique`,
                `The repeated chewing-over of negative thoughts and worries, strongly associated with depression and anxiety, a DMN-related activity`,
                `A type of brain scan`,
                `Healthy reflection`,
              ],
              correctIndex: 1,
              explanation: `Rumination is when your mind cycles through the same painful loop. It's DMN activity, but it's a specific dysfunctional pattern, not all DMN activity.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What do studies show about long-term meditators and the DMN?`,
              options: [
                `Their DMN disappears completely`,
                `Their DMN shows reduced activity both during meditation AND at rest, and they report less rumination`,
                `Their DMN works exactly like non-meditators'`,
                `Meditation increases DMN activity`,
              ],
              correctIndex: 1,
              explanation: `Long-term meditators show measurable DMN reduction even when not actively meditating. They also report less rumination. The reduction is real but bounded — not disappearance.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the relationship between psychedelics and the DMN?`,
              options: [
                `Psychedelics activate the DMN strongly`,
                `Psychedelics like psilocybin produce dramatic DMN suppression, which appears to be part of the mechanism by which they help some patients with treatment-resistant depression`,
                `Psychedelics have no effect on the DMN`,
                `Psychedelics are a meditation technique`,
              ],
              correctIndex: 1,
              explanation: `Psychedelic-assisted therapy research (Johns Hopkins, Imperial College) shows DMN suppression correlates with lasting depression reduction in many patients. The "loss of self" experience tracks with DMN suppression.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is depersonalization?`,
              options: [
                `A meditation goal`,
                `A psychological state of feeling disconnected from yourself, sometimes a documented adverse effect of intensive contemplative practice or psychedelics`,
                `A type of meditation`,
                `Always positive`,
              ],
              correctIndex: 1,
              explanation: `Depersonalization is feeling unreal or disconnected from yourself. It's a real risk of aggressive DMN suppression in some people. Willoughby Britton at Brown documents this in serious meditation practitioners.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is adolescent neuroscience relevant to this debate?`,
              options: [
                `Because teens are fragile`,
                `Because adolescent brains are still developing, and interventions well-studied in adults haven't been comprehensively studied in adolescent populations`,
                `Because adolescents can't meditate`,
                `Because teens always reject practices`,
              ],
              correctIndex: 1,
              explanation: `The adolescent brain is uniquely in flux. Prefrontal cortex still developing. Networks being pruned. Practices that have specific effects in adults may have different effects in still-developing brains. This isn't fragility, it's biological reality.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is targeting rumination specifically different from suppressing the DMN generally?`,
              options: [
                `They're the same thing`,
                `Rumination is one dysfunctional pattern of DMN activity, but the DMN does many other essential things (planning, social cognition, identity) you may not want to suppress`,
                `Rumination is good`,
                `The DMN is always bad`,
              ],
              correctIndex: 1,
              explanation: `This is the key insight underneath the "balanced" position. Practices targeting rumination specifically (like MBCT) get the benefit without losing the rest. General DMN suppression risks losing more than just the rumination.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All DMN activity is bad and should be reduced as much as possible.`,
              correctAnswer: false,
              explanation: `False. The DMN does essential work (planning, social cognition, identity). The argument for reducing DMN activity is typically about reducing problematic patterns like rumination, not eliminating the network.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend tells you they want to take psychedelic mushrooms to "kill the ego" because they read about DMN suppression. Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Great idea, the DMN is bad"`,
                `"Don't do drugs, they're all bad"`,
                `"That research is being done in supervised clinical contexts with screened patients and trained therapists. Doing this casually has different risks, especially in adolescent brains. The DMN does important things; quieting it isn't free."`,
                `"I don't have an opinion"`,
              ],
              correctIndex: 2,
              explanation: `Nuanced response: honor the research that's happening, name the difference between supervised clinical use and casual self-experimentation, identify the specific concern (adolescent brain, real costs of DMN suppression). This is what mature thinking on contested practices looks like.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Did anything surprise you about the costs of quieting the DMN? Did this change how you think about practices like meditation?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position did you pick and why? Was it because the evidence supported it, or because it matched what you already believed? Be honest.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If your DMN is generating "you" as a continuous person, how much of "you" would you want to keep? What pieces are precious? What pieces would you let go?` },
            { id: `reflect-application`, category: `Application`, prompt: `Do you ruminate? When? What does your rumination loop typically look like? Could it be reduced without losing what's good about the DMN?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest argument against the position you picked? Where could you be wrong?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pay attention for the next hour. When does your DMN seem to be running? What are you doing during quieter moments? Notice without trying to change anything.` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The DMN isn't an abstract concept. It runs all day in everyone in your family. Two paths below to bring this lesson into real life.`,
          familyActivity: {
            title: `The Rumination Map`,
            duration: `30 minutes`,
            description: `At dinner, each family member shares one rumination loop they get stuck in. Examples: replaying an embarrassing moment, worrying about the same upcoming event, criticizing yourself for the same flaw. Notice that everyone has them. Then discuss together: when does the rumination start? What seems to make it worse? What has worked, even a little, to interrupt it? This isn't therapy. It's just shared honesty about a universal pattern of the human brain. You may discover your family members have similar loops to yours.`,
          },
          projectOption: {
            title: `The DMN Diary, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, notice and log three DMN states: a rumination episode (a stuck negative loop), a productive planning episode (imagining your future helpfully), and a social cognition episode (thinking about someone else's mind). Write 2-3 sentences each. After 14 days, write 500 words: how does your DMN actually work? What does it do well? Where does it get stuck? What might "balanced DMN" look like for you specifically? This level of self-observation is real cognitive neuroscience applied to your own life.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If your DMN is making you, are you the producer or the product? Both?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can hold the position 'quieter isn't always better' without rejecting meditation.`,
            `A person who notices their own rumination loops and knows what's happening.`,
            `Someone who asks 'what would I lose?' before optimizing away parts of myself.`,
          ],
          saveKey: `identity_responses_iw_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. You just built and defended a real argument about one of the most important findings in modern neuroscience. You picked a position. You weighed evidence. You faced a strong counterargument. That is real thinking. Most adults can't articulate three positions on the DMN, let alone defend one against pushback. You can now. Next time we leave the science cluster for a while and go into something more philosophical: non-duality. The contemplative claim that the separation between self and world isn't quite as solid as it seems. Three traditions, three views, your turn to weigh in. Perspectives format. See you there. — Sage`,
          badge: `dmn-debater`,
          badgeName: `DMN Debater`,
          xpEarned: 75,
          competencies: [
            `Can explain what the Default Mode Network is and what it does`,
            `Can describe both benefits and costs of DMN suppression`,
            `Can articulate three serious positions on quieting the DMN`,
            `Has built and defended a real argument with evidence`,
            `Knows the difference between targeting rumination and general DMN suppression`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Non-Duality — Three Traditions, One Strange Claim`,
            hook: `Advaita Vedanta, Buddhist non-dualism, and Christian mystical traditions all converged on the same strange idea: the line between you and not-you isn't where you think it is.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L08 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
