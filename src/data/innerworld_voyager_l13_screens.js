// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L13 — Manifestation: Real Psychology vs Viral Magic
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Scientific Literacy, Goal Psychology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (goal-setting research vs The Secret vs viral TikTok)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l13-v1";

const INNERWORLD_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-13`,
      title: `Manifestation: Real Psychology vs Viral Magic`,
      duration: 35,
      xpReward: 75,
      badge: `manifestation-translator`,
      badgeName: `Manifestation Translator`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, "manifestation" is one of the most viral concepts in modern culture. Tens of millions of people post about it. Influencers sell courses on it. People claim they manifested money, jobs, partners, healing, and luxury cars by visualizing them and believing hard. Some of what's said about manifestation lines up with real psychology research. Some of it is fantasy thinking that often makes people's lives worse. The same word covers both, and the gap matters enormously. Today we separate the real psychology of how visualization, intention, and goal-setting actually affect outcomes from the viral magic version that promises the universe will deliver if you just believe enough. By the end you will be able to use what works without falling for what doesn't.`,
          headline: `Manifestation`,
          subtitle: `The real psychology vs the viral magic.`,
          visual: `/voyager-assets/inner-world/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What People Mean By "Manifestation"`,
          paragraphs: [
            `The word "manifestation" in current usage usually refers to a cluster of claims, often without distinguishing them. Claim one: if you visualize what you want clearly and feel as if you already have it, you can attract it into your life. Claim two: the universe responds to your vibration; raise your vibration and you raise what you receive. Claim three: writing down goals and visualizing them helps you achieve them. Claim four: gratitude practices change your mental and physical state.`,
            `Notice these four claims are very different. Claim three and claim four have decades of psychological research behind them. They are about the well-studied effects of goal-setting, visualization, and positive emotion on behavior, motivation, and outcomes. These are real, well-documented effects with bounded explanations.`,
            `Claim one and claim two are different. They make metaphysical claims: that the universe itself responds to your inner states, that "vibration" is a real physical thing that affects reality, that you can "attract" specific outcomes you visualize. These claims are not supported by any peer-reviewed evidence. They draw on quantum mysticism and New Thought philosophy from the early 1900s. They sound similar to claims three and four but are doing something completely different. Conflating them is the central confusion in modern manifestation culture.`,
          ],
          image: `/voyager-assets/inner-world/l13-s1-cluster.webp`,
          imageCaption: `Four claims, two are real psychology, two are magical thinking.`,
          vocab: [
            {
              word: `magical thinking`,
              definition: `Believing that internal mental events (thoughts, wishes, intentions) directly cause external outcomes through some unspecified mechanism, without ordinary causal pathways like action, planning, or skill.`,
              audioPrompt: `Magical thinking is believing that your inner mental events directly cause external outcomes, {name}. Without action. Without ordinary cause-and-effect. Just the thought or wish itself reaching out and changing reality. Children develop magical thinking around ages 3 to 6 and most grow out of it as their understanding of causation matures. Adult magical thinking shows up in things like superstition, certain forms of manifestation belief, and conspiracy theories. The clinical sense of the term is not insulting; it is a specific cognitive pattern. Spotting it in your own thinking is one of the most useful skills.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real Goal-Setting Research`,
          paragraphs: [
            `Edwin Locke and Gary Latham began studying goal-setting in the 1960s. Over decades of research across hundreds of studies, they established what's now called Goal Setting Theory. The findings are robust and replicable. Specific, measurable goals lead to better performance than vague intentions. Difficult but achievable goals produce better outcomes than easy goals. Written goals have higher achievement rates than unwritten ones. Goals reviewed regularly outperform goals set once and forgotten.`,
            `These effects are not mystical. They work through ordinary cognitive mechanisms. Specific goals direct attention. Difficult goals increase effort and persistence. Written goals get reviewed and revised. Visualization of specific goal-relevant actions improves performance because your brain rehearses the steps, the same way athletes mentally rehearse before competition. None of this requires the universe to "deliver" anything. It works because clear goals change what you notice, what you decide, and what you practice.`,
            `Gabriele Oettingen's research at NYU added a critical insight. Visualizing positive outcomes (just imagining success) without considering obstacles actually reduces motivation. People who only visualize success have less energy to actually pursue the goal because their brain partly experiences the success as already achieved. Oettingen developed a technique called WOOP (Wish, Outcome, Obstacle, Plan) that pairs visualization with realistic obstacle-thinking and concrete planning. WOOP is supported by multiple controlled studies.`,
          ],
          image: `/voyager-assets/inner-world/l13-s2-research.webp`,
          imageCaption: `Decades of research: specific goals + obstacle-thinking + planning works.`,
          vocab: [
            {
              word: `WOOP`,
              definition: `Wish, Outcome, Obstacle, Plan. A research-backed goal-setting technique developed by Gabriele Oettingen that combines visualization with realistic obstacle-thinking and concrete planning.`,
              audioPrompt: `WOOP stands for Wish, Outcome, Obstacle, Plan, {name}. It is a goal-setting technique developed by psychologist Gabriele Oettingen at NYU, supported by multiple controlled studies. The four steps. First, name what you want clearly. Second, vividly imagine the positive outcome. Third, identify the most likely internal obstacle that could block you. Fourth, make a specific if-then plan for handling that obstacle. WOOP works because it pairs the motivating power of visualization with the realism of obstacle-thinking and concrete planning. Pure positive visualization alone, without these other steps, often backfires by making your brain feel like you already succeeded.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Visualization Actually Does`,
          paragraphs: [
            `Visualization, used carefully, has measurable real effects. Athletes have used mental rehearsal for decades. Brain imaging shows that visualizing a physical movement activates many of the same motor regions as actually performing it. This is why mental practice improves performance on physical skills, sometimes nearly as much as physical practice. The mechanism is not magic. The brain is partly rehearsing the actual neural patterns of the action.`,
            `For non-physical goals, visualization works partly through priming attention. If you vividly imagine yourself giving a presentation confidently, you're more likely to notice opportunities to practice confident presentation, more likely to remember tips you've heard about it, and more likely to recognize moments where you can apply what you've learned. Visualization tunes your attention toward goal-relevant information you would otherwise miss.`,
            `What visualization cannot do, regardless of how detailed or emotionally charged: cause specific external events to happen without action. You cannot visualize a check in the mail and have one arrive. You cannot visualize a romantic partner and have them text you. The universe does not deliver requests from your visualization practice. What visualization does is change you, which changes what you notice, what you do, and what you persist at. Those changes can then produce real outcomes. The "magic" is just the cumulative effect of slightly better attention, motivation, and behavior over time.`,
          ],
          image: `/voyager-assets/inner-world/l13-s3-visualization.webp`,
          imageCaption: `Visualization changes you, not the universe. The change matters.`,
          vocab: [
            {
              word: `priming`,
              definition: `In psychology, when exposure to one stimulus influences your response to a later stimulus. Visualization primes attention toward goal-relevant information.`,
              audioPrompt: `Priming is when exposure to one stimulus influences your response to a later stimulus, {name}. In the context of visualization, when you vividly imagine yourself doing something, your brain becomes more sensitive to information related to it. You notice opportunities you'd otherwise miss. You remember relevant advice. You recognize moments where you can apply what you've learned. Priming is a well-documented psychological mechanism. It is part of how visualization works without requiring any mystical claim about the universe responding to your mental states.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Manifestation Got Confused`,
          paragraphs: [
            `Modern manifestation culture mostly traces back to a 1906 book called Thought Vibration by William Walker Atkinson, part of the "New Thought" movement that taught the mind has powers to affect external reality. New Thought ideas spread through self-help books for a century before becoming mainstream with Rhonda Byrne's 2006 book and film The Secret, which introduced the phrase "Law of Attraction" to tens of millions of readers. The Secret made dramatic claims: the universe gives you what you focus on, vibration determines what you attract, anyone can manifest anything by following these principles.`,
            `The Secret was a publishing phenomenon and a magnet for criticism. Real psychologists and skeptics pointed out that the claims went far beyond any evidence, that the "Law of Attraction" was not a law in any scientific sense, and that the book's promise of unlimited manifestation was both empirically false and potentially harmful. People who failed to manifest often blamed themselves for not believing hard enough, which compounded the harm.`,
            `Despite the criticism, the basic frame caught on. In the 2010s and 2020s, social media accelerated manifestation culture. TikTok and Instagram are full of accounts promising specific techniques: the 369 method, the pillow method, scripting your reality, raising your vibration. Some of these accounts are sincere people sharing what worked for them. Others are selling courses, journals, and coaching. The line between real psychological technique and mystical promise gets blurred constantly. Today's source evaluation will help you spot the difference.`,
          ],
          image: `/voyager-assets/inner-world/l13-s4-history.webp`,
          imageCaption: `From 1906 New Thought to viral TikTok: the same confusion getting louder.`,
          vocab: [
            {
              word: `Law of Attraction`,
              definition: `A New Thought belief, popularized by The Secret, that the universe gives you what you focus on; you "attract" outcomes that match your inner state. Not a scientific law. No peer-reviewed evidence supports the metaphysical version.`,
              audioPrompt: `The Law of Attraction is a New Thought belief that the universe gives you what you focus on, {name}. It claims you attract outcomes that match your inner state and "vibration." Despite the word "law," it is not a scientific law and has no peer-reviewed evidence supporting the metaphysical version. The Secret, a 2006 book by Rhonda Byrne, popularized this belief for tens of millions of readers. Many of the specific manifestation techniques you see on social media trace back to Law of Attraction thinking. Knowing the historical lineage helps you see what's being claimed.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Using What Works Without Falling For What Doesn't`,
          paragraphs: [
            `Here's a practical translation. When you hear "manifestation," translate it into "what mechanism is being claimed?" If the mechanism is "specific goals direct attention and behavior," that's real psychology with strong evidence. If the mechanism is "the universe responds to my vibration and delivers outcomes," that's a metaphysical claim with no peer-reviewed evidence. These need to be evaluated differently.`,
            `Use what works. Set specific written goals. Visualize the actions and feelings of pursuing them. Pair visualization with obstacle-thinking and concrete planning (WOOP). Notice opportunities your priming reveals. Persist through challenges. These practices produce real results over time and are supported by decades of research. You can call this "manifesting" if you want. It's just careful goal psychology.`,
            `Avoid what doesn't work. Don't expect the universe to deliver based on your inner state alone. Don't blame yourself for "low vibration" when goals fail; failure is information about strategy and circumstance, not evidence of insufficient belief. Don't pay for courses promising guaranteed manifestation. Don't replace evidence-based help for serious problems with vision boards. The fantasy version of manifestation has real costs when people in serious situations rely on it instead of effective action. Discerning between the two is what today's lesson has been training you to do.`,
          ],
          image: `/voyager-assets/inner-world/l13-s5-practical.webp`,
          imageCaption: `Use the goal psychology. Skip the universe-delivers fantasy.`,
          vocab: [
            {
              word: `mechanism`,
              definition: `The specific process by which a cause produces an effect. When evaluating any health or behavior claim, asking "what's the mechanism?" is one of the most clarifying questions.`,
              audioPrompt: `A mechanism is the specific process by which a cause produces an effect, {name}. When you hear any claim about influencing reality, asking "what's the mechanism?" is one of the most clarifying questions. If the answer is "specific goals direct attention and behavior," you have a real mechanism with evidence. If the answer is vague like "the universe responds," you have a metaphysical claim without a tested mechanism. The question separates real psychology from magical thinking. Train yourself to ask it about every claim involving how your mind affects outcomes.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l13-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On How To "Manifest"`,
          intro: `Three sources tell you how to create the life you want. Rank them from most credible to least credible. Explain your reasoning. Then see how a careful psychologist would evaluate them.`,
          topic: `Can you create the life you want by visualizing it clearly and intending it strongly?`,
          sources: [
            {
              id: `source-a`,
              name: `Oettingen et al., 2010 — Mental contrasting facilitates academic performance`,
              type: `Peer-reviewed psychology study, journal Motivation Science (multiple related studies in the Oettingen lab)`,
              claim: `Pairing positive visualization with realistic identification of obstacles and concrete if-then planning (the WOOP technique) significantly improves goal achievement across academic, health, and personal domains, compared to pure positive visualization alone.`,
              evidence: `Multiple controlled studies across decades. Students randomly assigned to WOOP vs control conditions. Specific measured outcomes (grades, exercise adherence, weight goals, relationship goals). Effect sizes modest but consistent. Methodology peer-reviewed and replicated by independent labs. Honest about scope: works on motivation and behavior, not on outcomes outside the person's control.`,
            },
            {
              id: `source-b`,
              name: `The Secret by Rhonda Byrne (book and film, 2006)`,
              type: `Bestselling self-help book and documentary; over 30 million copies sold worldwide`,
              claim: `The Law of Attraction is a universal law: the universe gives you whatever you focus on with strong emotion. By visualizing what you want and feeling as if you already have it, you can attract anything: money, relationships, health, success. Anyone can do this if they believe and apply the principles correctly.`,
              evidence: `Anecdotes and testimonials from individuals featured in the book and film. No controlled studies. Concept draws on early 1900s "New Thought" philosophy. Mainstream psychology has rejected the metaphysical claim as unfalsifiable and unsupported. Sold extensively as a paid course, audiobook, journal, and franchise. Multiple critics including James Randi and academic psychologists have publicly challenged the central claims.`,
            },
            {
              id: `source-c`,
              name: `@vibration_goddess TikTok (78 second video, 1.8 million views)`,
              type: `Viral TikTok account run by a self-described manifestation coach`,
              claim: `Use the 369 method to manifest your specific reality in 17 days. Write your desire 3 times in the morning, 6 times at noon, 9 times at night. The universe will deliver. I manifested $10,000 and a soulmate using this method. The numbers are sacred because Nikola Tesla said so. Buy my $89 manifestation journal to amplify the effect.`,
              evidence: `One personal testimonial from the creator. No verified evidence of the claimed money or relationship. No study referenced. Tesla quote is widely shared online but unverified; Tesla wrote about resonance, not about manifestation through writing numbers. Numerology is not a recognized branch of mathematics or physics. Ends with a product sale. Comments full of "this worked for me!" but no measurable evidence.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? What separates the most credible source from the others?`,
          reveal: {
            title: `How a careful psychologist would evaluate these`,
            content: [
              `Source A is real psychology. Notice everything it has: specific mechanism (mental contrasting + planning), specific population (controlled experimental groups), specific outcomes measured (grades, exercise adherence), peer-reviewed publication, multiple replications by independent labs, honest scope (works on what the person controls, doesn't claim to alter outcomes outside their control). The claim is bounded. The effect sizes are modest. This is what real goal psychology looks like. Nothing magical.`,
              `Source B is the most influential book ever sold on manifestation, and the most pointed example of confusion. The Secret claims a universal law without peer-reviewed evidence. The Law of Attraction is unfalsifiable: if you manifest, the law worked. If you don't, you didn't believe enough. This structure makes the claim immune to disproof and is a classic feature of pseudoscience. The 30 million copies sold are evidence of cultural appeal, not of the claim's truth. Many people report life improvements after reading; researchers attribute these to placebo effects, increased attention to goals, and the practices the book recommends that overlap with real goal psychology.`,
              `Source C is what happens when manifestation goes fully viral. The 369 method, the pillow method, scripting, and dozens of similar techniques have no peer-reviewed support. The Tesla quote is misattributed (a common pattern: real famous person's name attached to a quote they never said to give viral content credibility). The $89 journal is the giveaway: many manifestation accounts are funnels for paid products. The claimed personal results are unverified. The comments aren't evidence; they're selection bias (people who tried it and felt it worked are more likely to comment than people who tried it and got nothing).`,
              `The most important takeaway: real goal psychology and viral manifestation often share surface practices (visualization, writing goals, gratitude) while making completely different claims about mechanisms and limits. The practices overlap; the explanations and promises don't. Use the practices. Don't believe the promises. When you encounter manifestation content, ask: what mechanism is being claimed, and what evidence supports that specific mechanism? That single question filters out almost all the viral nonsense without dismissing the real underlying psychology.`,
            ],
          },
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "magical thinking" in the clinical sense?`,
              options: [
                `Doing magic tricks`,
                `Believing that internal mental events (thoughts, wishes) directly cause external outcomes through some unspecified mechanism, without ordinary causal pathways`,
                `Imagination`,
                `Creativity`,
              ],
              correctIndex: 1,
              explanation: `The clinical term isn't insulting; it's specific. Children develop magical thinking around ages 3-6 and most grow out of it. Adult magical thinking shows up in superstition, conspiracy thinking, and certain forms of manifestation belief.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does Locke and Latham's Goal Setting Theory establish?`,
              options: [
                `Goals don't work`,
                `Specific, measurable, difficult-but-achievable, written goals produce better outcomes than vague intentions; this is well-replicated across hundreds of studies`,
                `Only easy goals work`,
                `Goals are mystical`,
              ],
              correctIndex: 1,
              explanation: `Goal Setting Theory is well-supported in psychology. The mechanisms are ordinary cognitive ones: clear goals direct attention, difficult goals increase effort, written goals get reviewed.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does WOOP stand for?`,
              options: [
                `Want, Open, Order, Push`,
                `Wish, Outcome, Obstacle, Plan`,
                `Work On One Project`,
                `Watch Over Other People`,
              ],
              correctIndex: 1,
              explanation: `WOOP = Wish, Outcome, Obstacle, Plan. Developed by Gabriele Oettingen at NYU. The breakthrough insight: positive visualization alone reduces motivation; pair it with obstacle-thinking and concrete planning.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does pure positive visualization sometimes backfire?`,
              options: [
                `Because the universe punishes positivity`,
                `Because the brain partly experiences the visualized success as already achieved, reducing the motivational energy to actually pursue it`,
                `Because visualization isn't real`,
                `Because it makes you arrogant`,
              ],
              correctIndex: 1,
              explanation: `Oettingen's finding. Pure positive visualization without obstacle-thinking acts like a kind of pre-celebration that drains motivation. This is why WOOP includes the obstacle and plan steps.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is visualization actually doing for athletes?`,
              options: [
                `Casting a spell`,
                `Activating many of the same motor regions as actual physical practice, so the brain partly rehearses the actual neural patterns of the movement`,
                `Wasting time`,
                `Causing supernatural improvements`,
              ],
              correctIndex: 1,
              explanation: `Brain imaging shows mental rehearsal activates overlapping motor regions. This is a real, measurable mechanism for why visualization improves physical skills. Nothing magical.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "Law of Attraction" actually?`,
              options: [
                `A peer-reviewed scientific law`,
                `A New Thought belief popularized by The Secret claiming the universe gives you what you focus on; has no peer-reviewed evidence for the metaphysical version`,
                `A law from quantum physics`,
                `An ancient Eastern teaching`,
              ],
              correctIndex: 1,
              explanation: `Not a scientific law despite the word "law." The metaphysical claim that the universe responds to your vibration has no peer-reviewed support. It's a 100+ year old New Thought belief, not science.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What makes a claim "unfalsifiable" and why does that matter?`,
              options: [
                `Unfalsifiable means absolutely true`,
                `Unfalsifiable means no possible observation could disprove it; this is a classic feature of pseudoscience because if no evidence could refute the claim, no evidence can support it either`,
                `Unfalsifiable means easily testable`,
                `Unfalsifiable is good science`,
              ],
              correctIndex: 1,
              explanation: `The Law of Attraction is structured this way: if you manifest, the law worked. If you don't, you didn't believe enough. This makes the claim immune to disproof, which is a red flag for pseudoscience.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is the Nikola Tesla quote on many manifestation accounts suspect?`,
              options: [
                `Tesla is too old to quote`,
                `Many famous-person quotes online are misattributed; in this case Tesla wrote about resonance in physics, not about manifestation through writing numbers; the misattribution gives viral content false credibility`,
                `Tesla didn't speak English`,
                `Tesla didn't believe in physics`,
              ],
              correctIndex: 1,
              explanation: `The misattribution-of-famous-people pattern is common in viral content. Real famous person + invented quote = appearance of credibility without actual support. Always check the source of any quote attributed to a famous historical figure.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Goal-setting research and "manifestation" influencers often promote some overlapping practices (visualization, writing goals) but make completely different claims about what's actually happening.`,
              correctAnswer: true,
              explanation: `True. This is the central insight. The practices can overlap. The mechanisms and promises are different. Use the practices. Don't believe the metaphysical claims unless they're separately supported.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend tells you they're going to "manifest a date with their crush" by writing it 3 times every morning. Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Great idea, definitely works"`,
                `"That's nonsense, you're foolish"`,
                `"The writing part might prime your attention toward your crush and increase the chance you'll notice opportunities to interact with them. That's real. The 'universe will deliver' part isn't supported. If you actually want this, combine the visualization with thinking about what's blocking you and planning specific actions you can take."`,
                `"Try the pillow method instead"`,
              ],
              correctIndex: 2,
              explanation: `Nuanced response. Honor the real psychology of priming and visualization. Name the metaphysical overreach. Offer the WOOP-style alternative. This is using what works without falling for what doesn't, applied to a real friendship.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Did anything shift in how you think about "manifestation"? What did you previously believe that now looks different?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Did any of the three sources fool you for a moment before you noticed something off? What signal would catch it faster next time?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most of your friends will probably believe at least some manifestation claims. How will you talk about this without sounding superior or dismissive?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one real goal you have right now. Try WOOP on it: Wish, Outcome, Obstacle, Plan. Write it out.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the "manifestation" people be onto something the scientific frame misses? Where might pure goal psychology be missing pieces?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Have YOU ever "manifested" something? Be honest. What likely happened mechanically? Goal-priming? Coincidence? Real magical universe response? What evidence would distinguish these?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Real goal psychology is genuinely useful. Manifestation magic is mostly cosplay. Two paths below to use what works without falling for what doesn't.`,
          familyActivity: {
            title: `The Manifestation Audit`,
            duration: `30 minutes`,
            description: `At dinner, each family member shares one goal they're working toward. Then, together, run each goal through both frames. Real goal psychology: is the goal specific and measurable? Is it difficult but achievable? Is it written down? Have you identified obstacles? Do you have an if-then plan? Manifestation-style frame: are you mostly visualizing the outcome without planning the path? Are you waiting for the universe to deliver? Are you blaming yourself for "not believing enough"? You'll see immediately which goals are set up for real progress and which are running on magical thinking.`,
          },
          projectOption: {
            title: `WOOP One Goal, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Pick one specific goal for the next 14 days. Apply WOOP daily. Each morning: state your wish, visualize the outcome briefly, identify the most likely obstacle today, make a concrete if-then plan. Each evening: 2-3 sentences on what happened, what worked, what blocked you. After 14 days, write 500 words on what you learned. This is real applied goal psychology. The same technique used by elite performers, students, and clinical patients in controlled trials.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If you can use real goal psychology while everyone around you is running on manifestation fantasy, what kind of advantage does that give you over decades?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who uses real goal psychology without buying the universe-delivers fantasy.`,
            `A person who asks "what's the mechanism?" before believing a manifestation claim.`,
            `Someone who can plan and visualize without confusing the two.`,
          ],
          saveKey: `identity_responses_iw_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can distinguish real goal-setting psychology from metaphysical manifestation claims, articulate the WOOP framework, identify pseudoscience markers like unfalsifiable claims and misattributed quotes, and apply real techniques to your own life. The viral manifestation industry is massive and confusing. You can now use what works in it without falling for what doesn't. Next time we go into a more contested but interesting area: claims about the heart in consciousness. HeartMath research, traditional teachings, and the science of cardiac neurons. Argument Builder format. See you there. — Sage`,
          badge: `manifestation-translator`,
          badgeName: `Manifestation Translator`,
          xpEarned: 75,
          competencies: [
            `Can distinguish real goal psychology from metaphysical manifestation claims`,
            `Can apply the WOOP framework to actual goals`,
            `Recognizes unfalsifiability and misattribution as pseudoscience markers`,
            `Has practiced source evaluation on viral wellness content`,
            `Knows that overlapping practices don't mean overlapping mechanisms`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: The Heart in Consciousness — What's Actually Real?`,
            hook: `HeartMath claims your heart has its own intelligence. Neuroscientists say the brain runs the show. Some research is genuinely interesting. Some is overstated. Build your argument.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L13 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
