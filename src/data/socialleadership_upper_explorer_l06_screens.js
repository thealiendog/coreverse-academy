// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP UE  |  L06 — Resolving Conflict
// Age band : upper_explorers (9–10)   Guide: valor (lion)
// Domain   : real conflict resolution research — Crucial Conversations,
//            Marshall Rosenberg's NVC, Gottman's research, repair vs win.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (5 steps of resolving a real conflict)
// SCOPE: 4 concepts — conflict isn't bad, win-lose vs win-win mindset,
//        the 5 steps of resolution, repair after conflict
// VOICE: Valor = noble, calm, brave. Models conflict as something we walk
//        through, not around.
// VERSION: v1 — spec-clean
// ─────────────────────────────────────────────────────────────────────────────

const SOCIALLEADERSHIP_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `sl`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-9-10-06`,
      title: `Resolving Conflict`,
      duration: 18,
      xpReward: 75,
      badge: `peacemaker`,
      badgeName: `Peacemaker`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Valor here. Today we tackle something every kid (and every human) faces: CONFLICT. Disagreements with friends, siblings, teammates, family. Most kids handle conflict in one of two unhelpful ways: AVOID it (pretend everything's fine, bury the feeling) or BLOW UP (yell, attack, damage the relationship). Today you learn the third way, the leader's way: walking THROUGH conflict, calmly and bravely, in a way that often strengthens the relationship instead of breaking it. This is real, learnable, and one of the most powerful skills you'll ever build. Take a brave breath, and let's begin.`,
          headline: `Resolving Conflict`,
          subtitle: `Walking THROUGH disagreement, calmly, in a way that strengthens relationships`,
          visual: `/ue-assets/sl/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Conflict Isn't Bad — Avoidance and Explosion Are`,
          paragraphs: [
            `Here's a truth that surprises a lot of kids: conflict itself isn't bad. Two people who care about each other will sometimes disagree, want different things, hurt each other accidentally, or see things from different angles. That's NORMAL, and even healthy. Conflict is just life happening between people who matter to each other. What MAKES conflict damaging isn't the disagreement itself, it's how we HANDLE it. Most people handle it badly because no one ever taught them better.`,
            `Two big mistakes. First, AVOIDANCE: pretending everything's fine, swallowing the feeling, going silent, or ghosting the person. Avoidance feels safe in the moment, but the unresolved stuff piles up. Resentment grows. The relationship slowly weakens. Second, EXPLOSION: yelling, attacking character, saying things you can't unsay, escalating. Explosion feels powerful but burns bridges. Both choices make things worse over time. The third way, the leader's way, is to walk THROUGH conflict: calmly, kindly, and bravely. When you do, conflict often makes the relationship STRONGER. Friends who navigate hard moments well end up trusting each other more, not less. The skill is real, and it changes everything.`,
          ],
          image: `/ue-assets/sl/l06-s1-not-bad.webp`,
          imageCaption: `Conflict isn't the problem. Avoidance and explosion are. Walking through it kindly builds trust.`,
          vocab: [
            {
              word: `conflict`,
              definition: `Disagreement between people who matter to each other. Conflict itself isn't bad, it's normal and even healthy when handled well. What makes it damaging is avoidance or explosion. Walking through it kindly often makes relationships stronger.`,
              audioPrompt: `Conflict is disagreement between people who matter to each other, {name}. Here's a truth that surprises most kids: conflict itself isn't bad. Two people who care will sometimes disagree or see things differently. That's normal. What makes conflict damaging isn't the disagreement, it's how we handle it. Most people handle it badly with avoidance or explosion. Avoidance builds resentment. Explosion burns bridges. Walking through conflict calmly and kindly is the third way, and friendships that survive hard moments end up trusting each other more.`,
            },
            {
              word: `avoidance`,
              definition: `The habit of pretending everything's fine to skip a hard conversation. Going silent, swallowing the feeling, or ghosting. Feels safe in the moment but allows resentment to build quietly underneath, slowly weakening the relationship.`,
              audioPrompt: `Avoidance is the habit of pretending everything's fine to skip a hard conversation, {name}. You go silent, swallow the feeling, or ghost the person. Avoidance feels safe in the moment. No one gets upset, no fight, no awkwardness. But the unresolved feeling doesn't disappear. It builds underneath, quietly. Resentment grows. The relationship slowly weakens. Most people who grow apart don't drift because of one explosion. They drift because small hurts kept getting swallowed instead of addressed. Walking through discomfort protects relationships far better than avoiding it.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Win-Lose vs Win-Win Thinking`,
          paragraphs: [
            `Most kids approach conflict thinking it's a CONTEST. One person wins, the other loses. "I'm right, they're wrong." "I have to make them admit it." With that mindset, you spend the whole conversation trying to PROVE your point, defending yourself, scoring points. Even if you "win," you damage the relationship and the other person leaves resentful. Both people lose, even when one feels like they won. That's because relationships aren't a competition. The other person isn't an opponent. They're a friend, family member, or teammate you actually want in your life.`,
            `The leader's mindset is WIN-WIN. The goal isn't to defeat the other person, it's to find a solution where BOTH people end up okay. That doesn't mean you give in. It means you stay curious about their perspective, share your own honestly, and work together to find what's true and fair for both sides. Most disagreements have something true on EACH side, not all on one. When you approach conflict like a puzzle to solve TOGETHER (instead of a battle to win), something amazing happens: the other person stops being defensive, the conversation gets honest, and you often reach an outcome better than either side originally wanted. Win-win isn't "soft," it's actually the strongest, smartest approach. It builds trust, solves the real problem, and protects the relationship. Real leaders almost always approach conflict this way.`,
          ],
          image: `/ue-assets/sl/l06-s2-winwin.webp`,
          imageCaption: `Win-lose thinking damages relationships even when "you win." Win-win solves AND protects.`,
          vocab: [
            {
              word: `win-win mindset`,
              definition: `Approaching conflict as a problem to solve TOGETHER, not a battle to win. The goal is a solution where both people end up okay, not defeating the other person. Builds trust, solves the real problem, and protects the relationship.`,
              audioPrompt: `A win-win mindset means approaching conflict as a problem to solve together, not a battle to win, {name}. The goal isn't defeating the other person. It's finding a solution where both people end up okay. That doesn't mean giving in. It means staying curious about their perspective and working together to find what's fair. Most disagreements have something true on each side. When you approach conflict like a puzzle to solve together, the conversation gets honest and you often reach a better outcome than either side wanted.`,
            },
            {
              word: `win-lose thinking`,
              definition: `Approaching conflict like a contest where someone must be defeated. Even when you "win," the other person leaves resentful and the relationship suffers. Both people lose, even when one feels victorious. The most common mistake people make in conflict.`,
              audioPrompt: `Win-lose thinking is approaching conflict like a contest where someone must be defeated, {name}. With this mindset, you spend the conversation proving your point and defending yourself. Even if you win, the other person leaves resentful. The relationship suffers, even for the person who felt victorious. Both people lose, even when one thinks they won. The win-lose mindset makes the other person an opponent to defeat instead of a friend to work through a problem with. Real leaders almost never approach conflict this way.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Five Steps of Resolving Conflict`,
          paragraphs: [
            `Here's the real practice, five clear steps. First, COOL OFF FIRST. When you're hot with anger or hurt, your amygdala (Inner World L01!) is in charge, not your wise prefrontal cortex. Trying to "talk it out" in that state usually makes things worse. Take a breath, walk away for a few minutes, do some heart-focused breathing (Inner World L16). Come back when your nervous system has settled. The goal isn't to suppress the feeling, just to bring your wise brain back online before talking. Second, SEEK TO UNDERSTAND THEM FIRST. Use the L02 listening practice. Ask, "Can you help me understand what happened from your view?" Then actually LISTEN. Don't plan your reply, don't argue in your head. Hear them. Often, just being heard drops the conflict's intensity by half.`,
            `Third, SHARE YOUR OWN SIDE clearly. Use L04 tools: "I" statements, name behavior not character, calm and direct. ("I felt left out when the plans changed without me.") Don't dump every grievance, just speak the current truth. Fourth, FIND WHAT'S TRUE ON BOTH SIDES. This is where the win-win mindset really helps. Almost every conflict has some real point on EACH side. "I hear that you didn't mean to leave me out. And I needed to be told sooner." Acknowledging the other person's truth doesn't mean you give up yours. It means both can exist together. Fifth, AGREE ON WHAT'S NEXT. What can you both do differently? What does repair look like? Even a small agreement ("next time, let's text first") moves the relationship forward. These five steps together turn most conflicts into chances to deepen trust.`,
          ],
          image: `/ue-assets/sl/l06-s3-five-steps.webp`,
          imageCaption: `Cool off, understand them first, share your side, find both truths, agree on what's next.`,
          vocab: [
            {
              word: `seek to understand first`,
              definition: `The most important conflict resolution move: listen to the other person's view FIRST, before sharing your own. Often drops conflict's intensity dramatically just by making them feel heard. From Stephen Covey's "habits of effective people."`,
              audioPrompt: `Seek to understand first is one of the most important conflict moves, {name}. Listen to the other person's view first, before sharing your own. Ask, can you help me understand what happened from your view? Then actually listen. Don't plan your reply. Don't argue in your head. Hear them. Often, just being understood drops the conflict's intensity by half. Stephen Covey called this one of the habits of highly effective people. The leader's instinct is to understand first, before defending.`,
            },
            {
              word: `cool-off period`,
              definition: `A brief pause before a hard conversation to let your nervous system settle. When you're angry or hurt, your amygdala runs the show and your wise brain goes quiet. Cooling off first brings your prefrontal cortex back online so you can think and speak clearly.`,
              audioPrompt: `A cool-off period is a brief pause before a hard conversation to let your nervous system settle, {name}. When you're angry or hurt, your amygdala is running the show. Your wise prefrontal cortex, the part that thinks clearly and chooses words carefully, has gone quiet. Trying to talk it out in that state usually makes things worse. Step away briefly. Take a breath. Walk around the block. When your nervous system settles, your wise brain comes back. Then go have the conversation.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Repair After Conflict`,
          paragraphs: [
            `Even when conflict is handled well, there's often still some hurt left over. Real relationships need REPAIR, the small acts of reconnection that follow a hard moment. Repair can be simple: a sincere apology if you contributed to the hurt, a kind gesture, a check-in the next day ("hey, are we okay?"), or just returning to normal warmth gently. Famous relationship researcher Dr. JOHN GOTTMAN found that what makes some relationships last while others fall apart isn't the absence of conflict, it's the presence of REPAIR. Couples (and friends, and families) who repair well after hard moments build deep, durable trust over time.`,
            `Don't expect everything to feel instantly fixed after a hard conversation. Sometimes it takes a few days for things to feel normal again. That's okay. Keep being kind, keep showing up, keep checking in gently. Most relationships survive conflict beautifully when both people stay committed to repair. And one more truth: you don't have to be PERFECT in a conflict to repair well. If you lost your cool, apologize for that part. If you said something you regret, name it and take it back. ("I'm sorry I called you that. I was hurt, but that wasn't fair.") Real leaders own their part in conflicts, even imperfect parts, and that ownership is itself a powerful repair. Valor's teaching: conflict handled well isn't something that damages a relationship, it's often what builds the deepest trust. The kid who can walk through hard moments calmly and repair afterward becomes someone friends, family, and teammates know they can count on. That is leadership at its quiet best.`,
          ],
          image: `/ue-assets/sl/l06-s4-repair.webp`,
          imageCaption: `Repair (small reconnection moves) is what makes relationships last after conflict.`,
          vocab: [
            {
              word: `repair`,
              definition: `The small acts of reconnection that follow a conflict: sincere apology, kind gesture, gentle check-in, returning to warmth. Gottman's research found repair, not the absence of conflict, is what makes relationships last.`,
              audioPrompt: `Repair is the small acts of reconnection that follow a conflict, {name}. A sincere apology if you contributed to the hurt. A kind gesture. A gentle check-in the next day. Returning to normal warmth slowly. Dr. John Gottman found that what makes relationships last isn't the absence of conflict, it's the presence of repair. Relationships that repair well after hard moments build deep, durable trust. Don't expect things to feel instantly fixed. Keep showing up kindly. Most relationships survive conflict beautifully when both people stay committed to repair.`,
            },
            {
              word: `relationship rupture`,
              definition: `The damage to trust that happens when conflict is left unrepaired. Every conflict leaves a small tear in the connection. Most tears can be mended through repair. But when ruptures pile up without repair, the relationship weakens — what Gottman's research identifies as the pattern that ends friendships.`,
              audioPrompt: `A relationship rupture is the damage to trust that happens when conflict is left unrepaired, {name}. Every conflict leaves a small tear in the connection between two people. Most of the time, that tear can be mended. Repair, a kind word, a real apology, a gentle check-in, stitches it back. But when ruptures keep piling up without repair, the relationship weakens. Researcher John Gottman found this is what separates lasting friendships from ones that slowly drift apart. Rupture alone doesn't end relationships. Repeated rupture without repair does.`,
            },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put real conflict resolution in order, {name}. Here are five steps of walking through a real disagreement, scrambled. Use the arrows to arrange them from FIRST (right after the conflict starts) to LAST (after the hard part is over). This is a real practice you can use today.`,
          items: [
            { id: `step-cool`,       label: `COOL OFF FIRST: take a breath, walk away briefly, settle your nervous system before talking`,                 position: 1 },
            { id: `step-understand`, label: `SEEK TO UNDERSTAND THEM FIRST: ask "can you help me see your view?" — then actually listen, no defending`,   position: 2 },
            { id: `step-share`,      label: `SHARE YOUR OWN SIDE clearly with "I" statements, naming behavior not character ("I felt hurt when...")`,        position: 3 },
            { id: `step-both`,       label: `FIND WHAT'S TRUE ON BOTH SIDES — most conflicts have something real on each side, not all on one`,            position: 4 },
            { id: `step-next`,       label: `AGREE ON WHAT'S NEXT: a small concrete change, what repair looks like, how to move forward together`,          position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the practice of resolving conflict: cool off first, understand them first, share your own side, find both truths, agree on what's next. With those five steps, most conflicts become chances to deepen trust instead of damaging it. Practice them gently in real life. The kid who can walk through hard moments becomes someone friends, family, and teammates deeply trust.`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l06-q1`, format: `true-false`,
              question: `True or false: Conflict itself is always BAD for relationships.`,
              correctAnswer: false,
              explanation: `False. Conflict itself isn't bad, it's normal when two people who care will sometimes disagree. What makes conflict damaging isn't the disagreement, it's HOW we handle it. Walking through conflict calmly often makes relationships stronger.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What are the TWO common ways people handle conflict badly?`,
              options: [
                `Listening and asking questions`,
                `AVOIDANCE (pretend everything's fine, go silent) and EXPLOSION (yell, attack, escalate). Both make things worse`,
                `Being kind and curious`,
                `Walking through it`,
              ],
              correctIndex: 1,
              explanation: `Two common bad approaches: AVOIDANCE (pretending it's fine, going silent, ghosting), which builds resentment. And EXPLOSION (yelling, attacking, escalating), which burns bridges. Both feel safer or stronger in the moment but make things worse over time.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `What's the LEADER'S mindset in conflict?`,
              options: [
                `Win at all costs`,
                `WIN-WIN: approach conflict as a problem to solve TOGETHER, where both people end up okay, not a battle to win`,
                `Always give in`,
                `Never engage`,
              ],
              correctIndex: 1,
              explanation: `Win-win means approaching conflict as a problem to solve together, not a battle to win. The goal isn't defeating the other person, it's finding a solution where both end up okay. This isn't "soft," it's the strongest approach because it solves the real problem and protects the relationship.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `Why is COOLING OFF FIRST so important?`,
              options: [
                `It's just polite`,
                `When hot, your amygdala is in charge, not your wise brain. Settling first lets your prefrontal cortex come back online`,
                `It doesn't matter`,
                `Only adults need to cool off`,
              ],
              correctIndex: 1,
              explanation: `When you're hot with anger or hurt, your amygdala is in charge, not your wise prefrontal cortex (Inner World L01). Trying to talk it out in that state usually makes things worse. Cool off first, then come back when your wise brain is back online.` },

            { id: `l06-q5`, format: `multiple-choice`,
              question: `What does SEEK TO UNDERSTAND FIRST mean?`,
              options: [
                `Defending yourself first`,
                `Listen to THEIR view first, before sharing yours. Ask "can you help me understand?" and actually hear them, no defending`,
                `Ignoring them`,
                `Arguing harder`,
              ],
              correctIndex: 1,
              explanation: `Seek to understand FIRST means listening to their view before sharing your own. Ask "can you help me see your view?" and actually listen, no defending or arguing. Just being understood often drops the conflict's intensity by half. The instinct is to defend; the leader's instinct is to understand first.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `What's the truth about most conflicts?`,
              options: [
                `One person is fully right, the other fully wrong`,
                `Most conflicts have something TRUE on BOTH sides, not all on one`,
                `Truth never matters`,
                `Both people are always wrong`,
              ],
              correctIndex: 1,
              explanation: `Almost every conflict has something true on each side, not all on one. Acknowledging the other person's truth doesn't mean you give up yours, both can exist together. ("I hear you didn't mean to leave me out. AND I needed to be told sooner.") Win-win recognizes both truths.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `What did researcher Dr. John GOTTMAN find about lasting relationships?`,
              options: [
                `They never have conflict`,
                `What makes them last isn't the ABSENCE of conflict, it's the PRESENCE of REPAIR, the small reconnection moves after hard moments`,
                `They always agree`,
                `Conflict is unavoidable doom`,
              ],
              correctIndex: 1,
              explanation: `Dr. Gottman found that lasting relationships aren't ones without conflict, they're ones with strong REPAIR. The small acts of reconnection (apology, kind gesture, check-in) after hard moments build deep, durable trust over time.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `What's Valor's teaching about handling conflict well?`,
              options: [
                `It destroys friendships`,
                `Conflict handled well often BUILDS the deepest trust. Friends who navigate hard moments well end up trusting each other MORE, not less`,
                `Only avoid it forever`,
                `Always pick a side`,
              ],
              correctIndex: 1,
              explanation: `Conflict handled well isn't what damages relationships, it's often what builds the deepest trust. Friends who navigate hard moments well end up trusting each other more. The kid who can walk through conflict calmly and repair afterward becomes someone deeply trusted. That's quiet leadership.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Take a brave, settled breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Be honest with yourself, do you tend toward AVOIDANCE (silent, fine, ghost) or EXPLOSION (yell, attack, escalate) in conflict? Notice gently, without judgment.` },
            { id: `r2`, text: `Think of a recent conflict. If you'd used the five steps (cool off, understand them first, share your side, find both truths, agree on next), how might it have gone differently?` },
            { id: `r3`, text: `Is there a conflict in your life right now that needs REPAIR (a small reconnection move)? What might that look like?` },
            { id: `r4`, text: `What would your friendships, family, and teams look like if you became the kid who could walk through conflict calmly and bravely?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Conflict resolution is one of the most studied skills in psychology, family research, and leadership. The skills you've learned today, cool-off first, understanding before defending, win-win mindset, repair after, are used by therapists, mediators, leaders, and high-performing teams everywhere. Research consistently shows that people who handle conflict well have stronger friendships, healthier families, better teams, and more peaceful lives. Most people never learn this. You're learning it at the perfect age. Valor's note: conflict will be part of your life forever. Friends will disappoint you. Family will hurt you. You'll hurt people too. The question isn't whether conflict happens, it's how you handle it. The kid who learns to walk through hard moments calmly and repair afterward becomes someone deeply trusted, loved, and respected. Practice these moves in small daily moments. They'll serve you across every relationship you ever have.`,
          familyAdventure: `Family Conflict Repair Practice. As a family, talk about a recent small conflict (low-stakes is best to start, not the biggest fight in family history). Walk through the five steps together: 1) Did everyone cool off? 2) Did each person feel heard? 3) Did each person share their side calmly? 4) What was true on each side? 5) What can be different next time? Then practice REPAIR, a kind word, a check-in, a small reconnection move. Adults model it too. The goal isn't relitigating the past, it's practicing the muscle. Families that learn to repair stay strong through everything else life brings.`,
          creativePrompt: {
            intro: `Write a scene showing a conflict resolved through the five steps — cool off, understand first, share, find both truths, agree on next.`,
            floor: `Write at least 5 sentences. Set up the conflict and show the kid moving through at least 3 of the 5 steps.`,
            stretch: `Write 8 to 10 sentences. Build a fuller scene with all 5 steps clearly visible, ending with repair.`,
            open: `Write as much as you want. Write a full scene showing real conflict resolution between two kids (friends, siblings, teammates). Set up the conflict honestly, something that genuinely hurt or frustrated one or both of them. Show the kid moving through all five steps clearly. First, COOL OFF (take a breath, step away briefly). Second, SEEK TO UNDERSTAND THEM FIRST (ask, listen with full attention, no defending). Third, SHARE YOUR OWN SIDE calmly with "I" statements, naming behavior not character. Fourth, FIND WHAT'S TRUE ON BOTH SIDES (acknowledge the other person's point, hold yours too). Fifth, AGREE ON WHAT'S NEXT (a small concrete change, what repair looks like). End with repair, a sincere apology where appropriate, a kind gesture, the warmth returning. Show that the friendship actually grew stronger through the conflict because of how it was handled. Make it specific and real.`,
            frames: [
              `The conflict was about ___.`,
              `Before talking, the kid took a breath and ___.`,
              `Instead of defending first, they asked ___ and really listened to ___.`,
              `Then they shared their own side, calmly: "I felt ___ when ___."`,
              `They both saw what was true on each side, and agreed to ___.`,
              `The friendship was stronger after because ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Strong, brave work, {name}. You've learned one of life's most powerful skills: walking THROUGH conflict, calmly and kindly. You know the win-win mindset, the five steps (cool off, understand first, share your side, find both truths, agree on next), and the importance of repair afterward. Practice in small moments. This skill will serve you in every relationship you ever have. Next, we explore how to work well with others in groups, where every leader's character is tested daily. WORKING IN TEAMS. Carry your noble heart, and I'll see you there. — Valor.`,
          badge: `peacemaker`,
          badgeName: `Peacemaker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIALLEADERSHIP_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SL-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
