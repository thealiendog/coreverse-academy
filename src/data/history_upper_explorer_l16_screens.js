// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L16 — The Korean and Vietnam Wars
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.4.3-5 — Multiple perspectives
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Cold War context, Korean War, Vietnam War,
//        long-term impact and lessons
// VERSION: v1
// CONTESTED TOPIC: Cover settled facts. Acknowledge that Vietnam was
//                  controversial in the US itself. Honor families with
//                  direct connections. No political agenda.
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-16`,
      title: `The Korean and Vietnam Wars`,
      duration: 18,
      xpReward: 75,
      badge: `cold-war-historian`,
      badgeName: `Cold War Historian`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Today we cover two major wars from the Cold War era. The Korean War (1950-1953) and the Vietnam War (1955-1975). Both involved the United States fighting alongside one side against another in an Asian country split by Cold War politics. The Korean War ended in a frozen stalemate that still divides Korea today. The Vietnam War was much longer and was deeply controversial in the U.S. itself, with many Americans supporting it and many opposing it. We'll cover both wars carefully. Many families have direct connections to these wars, including grandparents who served. Let's go.`,
          headline: `The Korean and Vietnam Wars`,
          subtitle: `Two Cold War conflicts with lasting impact`,
          visual: `/ue-assets/history/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Cold War Setting`,
          paragraphs: [
            `Both wars happened during the COLD WAR you learned about earlier (the rivalry between the U.S. and the Soviet Union, 1947-1991). After World War II, the two superpowers competed for influence around the world. They supported different governments and different movements in many countries. Often when a country was split or unstable, the U.S. would back one side and the Soviet Union (or its ally China) would back the other.`,
            `Both Korea and Vietnam became "PROXY WARS." A proxy war is when two big powers fight each other indirectly through other countries. Instead of attacking each other directly (which could have started a nuclear war), the U.S. and Soviet Union sent weapons, advisors, and sometimes troops to support their preferred side in smaller conflicts. Both Korea and Vietnam ended up split between a communist side backed by the Soviets and China, and an anti-communist side backed by the United States and allies.`,
          ],
          image: `/ue-assets/history/l16-s1-context.webp`,
          imageCaption: `Cold War rivalries played out through smaller conflicts around the world.`,
          vocab: [
            { word: `proxy war`,
              definition: `A war where two big powers fight indirectly by supporting different sides in another country's conflict. The Korean and Vietnam Wars were proxy wars in the Cold War.`,
              audioPrompt: `A proxy war is a war where two big powers fight indirectly through other countries, {name}. The Cold War rivalry between the United States and the Soviet Union mostly played out as proxy wars. Instead of attacking each other directly, which could have caused nuclear war, the two sides sent weapons, advisors, and troops to support their preferred sides in smaller conflicts. Korea and Vietnam were two of the biggest proxy wars of the Cold War. Both countries paid a huge price.` },
            { word: `containment`,
              definition: `The U.S. Cold War strategy of preventing communism from spreading to new countries. Containment was the main reason the U.S. got involved in the Korean and Vietnam Wars.`,
              audioPrompt: `Containment was the main U.S. strategy during the Cold War, {name}. The idea was to prevent communism from spreading to new countries. If one country fell to communism, the thinking went, others nearby might follow — a theory called the domino effect. Containment is why the U.S. sent troops to Korea in 1950 and got deeply involved in Vietnam in the 1960s. Both times, the goal was to stop communist governments from taking over. Whether containment worked as a strategy is still debated.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Korean War (1950-1953)`,
          paragraphs: [
            `After World War II, Korea was divided into two zones. NORTH KOREA was occupied by Soviet forces and became communist. SOUTH KOREA was occupied by U.S. forces and was anti-communist. In June 1950, North Korean troops invaded South Korea. The United Nations (led mostly by the U.S.) sent forces to defend South Korea. China later entered the war to defend North Korea. Three years of brutal fighting followed.`,
            `The war ended in 1953 with an ARMISTICE, which is an agreement to stop fighting. Korea was left divided almost exactly where the war started. About 3 million people died, including many Korean civilians. The two Koreas have technically been at war ever since, with no permanent peace treaty. Modern North Korea and South Korea are now drastically different countries. South Korea grew into a wealthy democracy. North Korea remained a poor authoritarian state. The 1953 line still divides Korean families to this day.`,
          ],
          image: `/ue-assets/history/l16-s2-korea.webp`,
          imageCaption: `Three years of war. About 3 million dead. A line that still divides Korea today.`,
          vocab: [
            { word: `armistice`,
              definition: `A formal agreement to stop fighting, often before a permanent peace treaty. The Korean War ended in armistice in 1953 with no permanent peace treaty signed even now.`,
              audioPrompt: `An armistice is a formal agreement to stop fighting, {name}. It's different from a permanent peace treaty. An armistice halts the war, but the underlying conflict is not officially resolved. The Korean War ended in an armistice in 1953. The two sides agreed to stop fighting, but no permanent peace treaty was ever signed. Technically, North Korea and South Korea are still in a state of war. The same armistice line drawn in 1953 still divides the Korean peninsula today.` },
            { word: `Korean War`,
              definition: `A conflict from 1950 to 1953 in which North Korea (backed by China and the Soviet Union) fought South Korea and UN forces (led by the U.S.). It ended in armistice with Korea still divided.`,
              audioPrompt: `The Korean War lasted from 1950 to 1953, {name}. North Korea, backed by China and the Soviet Union, invaded South Korea in June 1950. United Nations forces led by the United States defended South Korea. After three years of brutal fighting, the war ended in armistice with Korea divided almost exactly where it had started. About 3 million people died. The war settled nothing permanently. North Korea and South Korea remain divided today, technically still at war.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Vietnam War (1955-1975)`,
          paragraphs: [
            `Vietnam had been a French colony before World War II. After the war, Vietnamese forces led by Ho Chi Minh won independence from France in 1954. Vietnam was then split, like Korea, into a communist NORTH and an anti-communist SOUTH. The U.S. became deeply involved in supporting South Vietnam, eventually sending hundreds of thousands of American troops to fight against communist forces. The war lasted about 20 years total.`,
            `The Vietnam War was deeply controversial in the United States. Many Americans supported the war as fighting against communism. Many other Americans opposed it, especially as the fighting dragged on, casualties mounted, and graphic images appeared on the nightly news. Massive antiwar protests erupted across U.S. cities. Soldiers came home to a country divided about whether their service had been worth the cost. The U.S. eventually withdrew, and North Vietnam took over the South in 1975. About 1-2 million Vietnamese and over 58,000 American soldiers died. Many families in the U.S. and Vietnam are still affected. The grief and the disagreement are still real.`,
          ],
          image: `/ue-assets/history/l16-s3-vietnam.webp`,
          imageCaption: `20 years of war. Deeply controversial in the U.S. itself. Real grief on every side.`,
          vocab: [
            { word: `veteran`,
              definition: `A person who has served in the armed forces, especially in a war. Veterans of the Korean and Vietnam Wars are still alive today. Many faced very different welcomes when they returned home.`,
              audioPrompt: `A veteran is a person who has served in the armed forces, especially in a war, {name}. Korean War veterans came home to a country generally supportive of their service. Vietnam War veterans often came home to a country deeply divided about the war. Some were welcomed. Others were criticized or even attacked by antiwar protesters. Many veterans of both wars carried physical and psychological wounds for the rest of their lives.` },
            { word: `Vietnam War`,
              definition: `A conflict from roughly 1955 to 1975 in which the U.S. and South Vietnam fought against communist North Vietnam. The U.S. eventually withdrew and North Vietnam unified the country in 1975.`,
              audioPrompt: `The Vietnam War lasted roughly from 1955 to 1975, {name}. The United States got deeply involved in supporting South Vietnam against communist North Vietnam. The war was controversial in America itself. Many Americans supported it as fighting communism. Many opposed it, especially as casualties grew. The U.S. eventually withdrew, and North Vietnam unified the country under communist rule in 1975. About 58,000 American soldiers and 1 to 2 million Vietnamese died. The war changed how Americans thought about military involvement overseas, and that debate still echoes today.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Long-Term Impact and Lessons`,
          paragraphs: [
            `Both wars left lasting marks. KOREA today is the clearest example of a divided country still suffering from Cold War politics. South Korea is one of the world's wealthiest democracies. North Korea is one of the world's poorest and most closed-off countries. Same people. Same culture. Different paths because of the war and the politics that followed. Families separated in 1950 have mostly never been able to reunite.`,
            `VIETNAM eventually unified under communist rule and became, decades later, a regular U.S. trading partner. But the Vietnam War changed how Americans thought about military commitments overseas. Future presidents had to consider whether new wars might become "another Vietnam." The war also affected veterans deeply. Many came home with PTSD (a condition called post-traumatic stress disorder) and struggled for decades. Modern recognition of veterans' mental health needs grew partly from the Vietnam experience. Both wars teach hard lessons about the costs of war, the difficulty of foreign conflicts, and the importance of honoring those who served regardless of which side of the political debate you were on.`,
          ],
          image: `/ue-assets/history/l16-s4-legacy.webp`,
          imageCaption: `Korea still divided. Vietnam unified. Both wars still in living memory.`,
          vocab: [
            { word: `Cold War`,
              definition: `The decades of political and military tension between the Soviet Union and the United States (about 1947-1991). The Korean and Vietnam Wars were two of its hottest conflicts.`,
              audioPrompt: `The Cold War was the long rivalry between the Soviet Union and the United States, {name}. From about 1947 to 1991. The two sides never directly fought each other but competed everywhere else. Most of the Cold War's actual fighting happened in PROXY WARS, where the two superpowers backed opposite sides in conflicts in smaller countries. Korea and Vietnam were two of the biggest. Both wars are now seen as part of the larger Cold War, though both countries paid terrible prices for being caught between superpowers.` },
            { word: `PTSD`,
              definition: `Post-traumatic stress disorder. A mental health condition triggered by experiencing or witnessing a traumatic event. Many Korean and Vietnam War veterans experienced PTSD after returning home.`,
              audioPrompt: `PTSD stands for post-traumatic stress disorder, {name}. It's a mental health condition that can develop after experiencing or witnessing something traumatic, like combat. Symptoms include flashbacks, nightmares, anxiety, and difficulty functioning in daily life. Many veterans of the Korean and Vietnam Wars came home with PTSD. At the time, it was often not recognized or treated. Veterans suffered in silence. Modern understanding of PTSD and better treatment for veterans grew significantly from the Vietnam experience. PTSD can affect anyone who goes through trauma, not just soldiers.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about the Korean and Vietnam Wars. For each one, identify the category: COLD WAR CONTEXT (showing the bigger U.S./Soviet rivalry), DIRECT WAR EVENT (a specific battle, decision, or event), or HUMAN COST (the real impact on people)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `cold-war-context`,    label: `Cold War Context`,   color: `#60A5FA`, description: `Big picture: how these wars fit into the larger U.S./Soviet Cold War rivalry.` },
            { id: `direct-war-event`,    label: `Direct War Event`,   color: `#F87171`, description: `A specific battle, military decision, or event during the war itself.` },
            { id: `human-cost`,          label: `Human Cost`,         color: `#A78BFA`, description: `The real impact on people: deaths, refugees, families divided, veterans affected.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `After WWII, the Soviet Union supported communist North Korea, while the U.S. supported anti-communist South Korea.` },
                { text: `Both superpowers sent weapons and advisors to their preferred sides.` },
                { text: `This pattern repeated in many countries throughout the Cold War, from Korea to Vietnam to Angola.` },
              ],
              correctAnswer: `cold-war-context`,
              realWorldExample: `The pattern of superpowers backing opposite sides defined much of Cold War history.`,
              explanation: `The big picture of two superpowers backing opposite sides. Pure Cold War context. Both Korea and Vietnam fit this pattern. They were caught in a larger global struggle.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `In June 1950, North Korean troops crossed the 38th parallel and invaded South Korea.` },
                { text: `Within months, they had captured most of South Korea before UN forces pushed them back.` },
                { text: `Then Chinese forces entered the war on North Korea's side, pushing UN forces back south again.` },
              ],
              correctAnswer: `direct-war-event`,
              realWorldExample: `These are documented military events of the Korean War.`,
              explanation: `Specific military actions, dates, and movements. This is a direct war event. The back-and-forth fighting of 1950-1951 led to the eventual stalemate near the original border, which is roughly where the armistice line still exists today.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `About 58,000 American soldiers died in the Vietnam War.` },
                { text: `Their names are inscribed on the Vietnam Veterans Memorial in Washington, DC.` },
                { text: `Many surviving veterans struggled with PTSD for decades after returning home.` },
              ],
              correctAnswer: `human-cost`,
              realWorldExample: `The Vietnam Veterans Memorial wall is a powerful representation of war's human cost.`,
              explanation: `Death tolls. PTSD. Memorial walls. This is pure human cost. The Vietnam War left lasting wounds in American families, and recognizing those wounds has been part of how the country processes the war's legacy.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `North Korea and South Korea have been technically at war since 1950.` },
                { text: `Only an armistice (not a peace treaty) ended the Korean War in 1953.` },
                { text: `Many Korean families separated in 1950 have never been able to see each other again. Some have died waiting.` },
              ],
              correctAnswer: `human-cost`,
              realWorldExample: `The Korean armistice still affects families today.`,
              explanation: `Tricky because the armistice line is also COLD WAR CONTEXT (Cold War politics still divides Korea). But the FOCUS of the scene is on real families separated by the line. Generations have been kept apart. Many have died never seeing relatives again. This is one of the clearest examples of how a war's human cost continues long after the fighting stops. The lesson: events can fit multiple categories. Pick the one most central to what's being highlighted.`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is a PROXY WAR?`,
              options: [
                `A war fought in stadiums`,
                `A war where two big powers fight indirectly by supporting different sides in another country's conflict`,
                `A war between brothers`,
                `A practice war`,
              ],
              correctIndex: 1,
              explanation: `Proxy wars let big powers fight each other without directly attacking each other (which could have caused nuclear war during the Cold War). Korea and Vietnam were both proxy wars in the U.S./Soviet rivalry.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `When did the KOREAN WAR happen?`,
              options: [
                `1900-1903`,
                `1950-1953`,
                `1939-1945`,
                `1965-1973`,
              ],
              correctIndex: 1,
              explanation: `The Korean War lasted from 1950 to 1953. It ended in an armistice (not a peace treaty) that still divides Korea today.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `What is an ARMISTICE?`,
              options: [
                `A type of weapon`,
                `A formal agreement to stop fighting, but not necessarily a permanent peace treaty`,
                `A peace medal`,
                `A type of treaty between religions`,
              ],
              correctIndex: 1,
              explanation: `An armistice halts a war without officially ending the underlying conflict. The Korean War ended in armistice in 1953. North and South Korea are technically still at war today because no peace treaty was signed.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `What's true about the VIETNAM WAR's impact on the United States?`,
              options: [
                `Almost all Americans supported it`,
                `It was deeply controversial in the U.S. itself, with many supporting and many opposing the war`,
                `Few Americans knew about it`,
                `Most opposed it from the start`,
              ],
              correctIndex: 1,
              explanation: `Vietnam divided the United States. Some Americans supported the war as fighting communism. Others opposed it strongly. Antiwar protests grew large. Families and communities were divided. This was one of the most controversial U.S. wars.` },

            { id: `l16-q5`, format: `true-false`,
              question: `True or false: South Korea and North Korea today are very similar in wealth and government style.`,
              correctAnswer: false,
              explanation: `False. South Korea is one of the world's wealthiest democracies with a major technology industry. North Korea is one of the world's poorest and most closed-off countries. Same people. Same starting culture. Completely different paths after the war.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `Approximately how many AMERICAN SOLDIERS died in the Vietnam War?`,
              options: [
                `About 1,000`,
                `About 58,000`,
                `About 500,000`,
                `About 10 million`,
              ],
              correctIndex: 1,
              explanation: `About 58,000 American soldiers died in Vietnam. Their names are inscribed on the Vietnam Veterans Memorial in Washington, DC. About 1-2 million Vietnamese also died, mostly civilians.` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `What is a VETERAN?`,
              options: [
                `A person who teaches history`,
                `A person who has served in the armed forces, especially in a war`,
                `An elected official`,
                `A military officer only`,
              ],
              correctIndex: 1,
              explanation: `Veterans served in the armed forces. Korean and Vietnam War veterans had very different experiences coming home. Korean veterans were generally welcomed. Vietnam veterans often returned to a divided country. Modern attention to veteran mental health grew partly from the Vietnam experience.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What's the most accurate way to think about the Vietnam War today?`,
              options: [
                `It was clearly right`,
                `It was clearly wrong`,
                `It was a difficult conflict that real Americans of good faith disagreed about, with real costs to everyone involved, and the disagreement is still part of how it's remembered`,
                `It's not important`,
              ],
              correctIndex: 2,
              explanation: `Honest history acknowledges that Vietnam was deeply contested in the U.S. itself, with thoughtful people on both sides. The war left real grief, real questions, and real lessons that the country is still working through. Both the costs and the differing views are part of the honest story.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Do you know any veterans of Korea, Vietnam, or other wars (family, neighbors, friends)? What's something they've shared about their experience, if anything?` },
            { id: `r2`, text: `Why might honoring veterans be important even when people disagree about the war they fought in?` },
            { id: `r3`, text: `Korean families have been divided since 1950 — over 70 years. How would it feel to never be able to see a parent or sibling because of a border?` },
            { id: `r4`, text: `Why do you think proxy wars caused so much suffering in countries that weren't even the main powers in the Cold War?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Both wars are still in living memory. Many grandparents and great-grandparents served in Korea or Vietnam. The Vietnam Veterans Memorial is one of the most visited monuments in Washington, DC. Modern attention to veterans' mental health, PTSD treatment, and family support all grew from how Vietnam veterans returned home. Future U.S. leaders considering military commitments overseas often ask whether the conflict might become "another Vietnam." These wars are not just history. They shape how the modern U.S. thinks about military force, peace, and supporting those who serve.`,
          familyAdventure: `Family Veteran Conversation. If your family has any veterans (Korea, Vietnam, or later wars), ask if they'd be willing to share one story. If your family doesn't, consider visiting a veterans' memorial in your area, or watching a documentary about Korean or Vietnam War veterans together. Listen carefully. Recognize that real people lived through these events. Their stories deserve attention regardless of any political views about the wars themselves.`,
          creativePrompt: {
            intro: `Imagine you're writing a letter to a soldier coming home from Vietnam in 1973. Think carefully about what to say.`,
            floor: `Write at least 5 sentences. Welcome them home. Acknowledge their service. Show respect even if you don't know what they went through.`,
            stretch: `Write 8 to 10 sentences. Cover gratitude for their service, acknowledgment that the war was hard, hope for their healing, and respect for what they sacrificed regardless of any debate about the war itself.`,
            open: `Write as much as you want. Build a full letter that honors a veteran honestly. Don't pretend the war wasn't controversial. Don't make assumptions about how they feel. Just respect their humanity and service.`,
            frames: [
              `Dear soldier, welcome home.`,
              `I know your service in Vietnam was ___.`,
              `Whatever you went through, ___.`,
              `I hope ___.`,
              `Thank you for ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what proxy wars were during the Cold War, describe the Korean War and how it left Korea divided, describe the Vietnam War and acknowledge that Americans disagreed about it, and understand the long-term impact on veterans, families, and U.S. foreign policy. Next lesson: a completely different kind of revolution. The DIGITAL REVOLUTION. We'll trace how computers, the internet, and smartphones changed how humans live in just a few decades. See you there. — Lyra.`,
          badge: `cold-war-historian`,
          badgeName: `Cold War Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
