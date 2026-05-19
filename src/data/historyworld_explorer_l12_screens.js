// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L12 — World War II
// Age band : explorers (6–8)   Guide: lyra
// Slots between L11 (WWI) and L13 (Civil Rights Movement — coming next)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L12 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-12`,
      title:     `World War II: The Biggest War in History`,
      duration:  13,
      xpReward:  50,
      badge:     `wwii-explorer`,
      badgeName: `World War II Explorer`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. Today's lesson is HARD but IMPORTANT. We're going to talk about WORLD WAR II — the BIGGEST and most DEVASTATING war in human history. It happened about 80 years ago. It involved most of the world. Terrible things happened. People made brave choices. The world learned hard lessons. We'll go through it carefully and honestly — because some of history's most important lessons came from this war. Stay with me.`,
          headline: `World War II: The Biggest War in History`,
          subtitle: `What happened, why it mattered, and what the world learned`,
          visual: `/explorer-assets/history/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A World DIVIDED Again`,
          paragraphs: [
            `WORLD WAR II lasted from 1939 to 1945 — six terrible years. Just 20 years after World War I (which we learned about last lesson), the world went to war AGAIN — even bigger.`,
            `Two sides formed. The AXIS POWERS: Germany, Italy, and Japan — countries led by dictators who wanted to conquer their neighbors. The ALLIED POWERS: the United States, Britain, the Soviet Union (Russia), France, China, and many others — countries fighting to stop the Axis. The war was fought on FOUR CONTINENTS — Europe, Asia, Africa, and even on islands in the Pacific Ocean. Over 70 MILLION people died — soldiers and civilians together. That's more than all the people in many countries today. Whole cities were destroyed. Whole groups of people were targeted for death. It was the deadliest event in human history. Why did it happen? And what can we learn? Let's find out.`,
          ],
          image: `/explorer-assets/history/l12-s1-world-divided.webp`,
          imageCaption: `WWII (1939-1945): Allies vs Axis. Most of the world involved. 70+ million dead. Worst war ever.`,
          vocab: [
            { word: `World War II`,   definition: `The 1939-1945 GLOBAL WAR — Allies vs Axis powers. WORLD WAR II was the largest and deadliest war in history.`,
              audioPrompt: `World War II, {name}, was the nineteen thirty nine to nineteen forty five global war — Allies versus Axis powers. World War II was the largest and deadliest war in history. Six years long. Fought across four continents. Over 70 million people lost. Almost every country in the world was affected somehow. The most important and tragic event of the twentieth century.` },
            { word: `Allies`,         definition: `The COUNTRIES FIGHTING to stop the Axis. The ALLIES included the United States, Britain, the Soviet Union, France, and others.`,
              audioPrompt: `The Allies, {name}, were the countries fighting to stop the Axis. The Allies included the United States, Britain, the Soviet Union (Russia), France, China, and many others. They came together to oppose the dictators who started the war. Different countries, different governments, different cultures — all united against a common danger.` },
            { word: `Axis`,           definition: `The COUNTRIES led by DICTATORS that started the war. The AXIS was Germany, Italy, and Japan.`,
              audioPrompt: `The Axis, {name}, were the countries led by dictators that started the war. The Axis was Germany, Italy, and Japan. Each of them had a leader who wanted to conquer their neighbors and rule over them. Their goal was empire and domination. The Allies stopped them — but at terrible cost.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why It HAPPENED: Dictators Rise`,
          paragraphs: [
            `After WWI, GERMANY was struggling. Their economy was wrecked. People were poor and hungry. In hard times, sometimes DANGEROUS LEADERS rise — promising easy solutions and blaming OTHERS for the problems.`,
            `In Germany, a man named ADOLF HITLER rose to power in 1933. He was a DICTATOR — someone with absolute power, no voting, no real elections after he took control. Hitler blamed Germany's problems on JEWISH people and other groups he considered "less than" Germans. He preached HATRED. He built up a huge army. He started taking over neighboring countries. In ITALY, a dictator named MUSSOLINI did similar things. In JAPAN, military leaders wanted to build a Pacific empire. They invaded China. They prepared for bigger wars. When Hitler invaded POLAND in 1939, Britain and France declared war. World War II had begun. The pattern of dictators rising in hard times, blaming others, then invading their neighbors — it's a pattern we've seen before in history. WWII shows what happens when the world doesn't stop dictators early enough.`,
          ],
          image: `/explorer-assets/history/l12-s2-dictators-rise.webp`,
          imageCaption: `Dictators rose in hard times: Hitler in Germany, Mussolini in Italy, military rulers in Japan. The world saw warning signs too late.`,
          vocab: [
            { word: `dictator`,       definition: `A leader with TOTAL POWER — no voting, no real rights. DICTATORS like Hitler started WWII.`,
              audioPrompt: `A dictator, {name}, is a leader with total power — no voting, no real rights. Dictators like Hitler started World War II. We talked about how Caesar became a dictator in Rome. In the twentieth century, dictators rose in Germany, Italy, and Japan. They controlled everything. They silenced critics. They started wars. Dictators can be very dangerous for the world.` },
            { word: `Hitler`,         definition: `The German DICTATOR who started WWII. HITLER blamed Jewish people and other groups, preached hatred, invaded neighboring countries.`,
              audioPrompt: `Adolf Hitler, {name}, was the German dictator who started World War II. Hitler blamed Jewish people and other groups for Germany's problems. He preached hatred. He built a huge army. He invaded country after country. He was one of the worst leaders in human history. The Allies fought to stop him. They won — but it took six terrible years and millions of lives.` },
            { word: `warning signs`,  definition: `Early clues that something BAD is COMING. The world missed many WARNING SIGNS before WWII.`,
              audioPrompt: `Warning signs, {name}, are early clues that something bad is coming. The world missed many warning signs before World War II. Hitler said openly what he planned. He took over Austria. He took Czechoslovakia. Other countries hoped he'd stop. He didn't. Sometimes hoping isn't enough. Sometimes you have to act early to stop danger before it grows huge.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The HOLOCAUST: Honest Remembrance`,
          paragraphs: [
            `{name} — this part of the lesson is the HARDEST. But we MUST tell it. Honoring those who suffered means NEVER FORGETTING what happened.`,
            `Hitler and his government did something unimaginable. They tried to KILL all the JEWISH PEOPLE in Europe. This planned, organized killing of millions of people is called the HOLOCAUST. About 6 MILLION Jewish people were killed — entire families, entire communities, ended. Roma people, disabled people, LGBTQ people, political prisoners, and others were also targeted — millions more were killed. Why? Because Hitler and the Nazis taught that some humans were "better" than others — and that the world would be improved by killing the "lesser" ones. This was a HORRIBLE lie. We are ALL EQUALLY HUMAN. Every single life matters. The Holocaust shows what happens when HATE is allowed to grow into POWER. Many brave people RESISTED. Anne Frank, a Jewish girl in Amsterdam, wrote a DIARY while hiding from the Nazis — it's still read today. Many non-Jewish people hid Jewish families at risk to themselves — they're called the "RIGHTEOUS." When the war ended and the world learned the full truth, we said: NEVER AGAIN. That promise is still our work.`,
          ],
          image: `/explorer-assets/history/l12-s3-holocaust-memorial.webp`,
          imageCaption: `The Holocaust: 6 million Jewish people and millions of others killed by Nazi hatred. Never forget. Never again.`,
          vocab: [
            { word: `Holocaust`,      definition: `The PLANNED KILLING of millions of Jewish people and other groups by Nazi Germany. The HOLOCAUST teaches us to fight hate at its start.`,
              audioPrompt: `The Holocaust, {name}, was the planned killing of millions of Jewish people and other groups by Nazi Germany. The Holocaust teaches us to fight hate at its start. About six million Jewish people were killed. Millions more — Roma, disabled people, LGBTQ people, and political prisoners — were also killed. This is one of the most painful chapters in human history. We honor the victims by remembering them and by promising it must never happen again.` },
            { word: `Anne Frank`,     definition: `A young JEWISH GIRL who wrote a famous DIARY while hiding from Nazis. ANNE FRANK'S diary lets the world hear one young Holocaust victim's voice.`,
              audioPrompt: `Anne Frank, {name}, was a young Jewish girl who wrote a famous diary while hiding from Nazis. Anne Frank's diary lets the world hear one young Holocaust victim's voice. She and her family hid in a secret room in Amsterdam for two years. She was 15 when they were found. She died in a Nazi camp. Her diary survived. It's been read by millions. It's the voice of one of the 1.5 million Jewish children killed in the Holocaust.` },
            { word: `never again`,    definition: `A PROMISE made after the Holocaust. NEVER AGAIN means humanity must work to prevent this kind of horror.`,
              audioPrompt: `Never again, {name}, is a promise made after the Holocaust. Never again means humanity must work to prevent this kind of horror. It's a promise we keep by remembering, by teaching, by speaking up when we see hatred, by protecting vulnerable people, by voting for leaders who respect everyone. The promise is hard to keep — sadly, similar horrors have happened in other places. But the work continues. Never again is our work.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The ALLIES Fight Back`,
          paragraphs: [
            `For years, the Axis powers seemed unstoppable. Germany conquered most of Europe. Japan conquered much of Asia and the Pacific. But the Allies fought back — bravely and with growing strength.`,
            `In 1941, JAPAN attacked the US naval base at PEARL HARBOR (Hawaii). This brought the UNITED STATES into the war. American factories quickly built thousands of planes, ships, and tanks for the war effort. American soldiers fought in both Europe and the Pacific. WOMEN took factory jobs that men had left for war ("Rosie the Riveter"). The Allies fought hundreds of battles — on land, at sea, in the air. In 1944, on D-DAY (June 6), Allied soldiers stormed the beaches of NORMANDY in France. Tens of thousands of soldiers — Americans, Brits, Canadians, and others — landed on German-occupied beaches. They suffered terrible losses but PUSHED INLAND. Slowly, they freed France, Belgium, and the Netherlands. Meanwhile, the SOVIET UNION pushed Germany from the east. The Allies were closing in. Many soldiers from many countries gave their lives — French, British, American, Russian, Indian, African, and so many more. The fight for freedom was not one nation's job. It was the world's.`,
          ],
          image: `/explorer-assets/history/l12-s4-allies-fighting.webp`,
          imageCaption: `The Allies fight back: D-Day landings, Pearl Harbor response, women in factories. The world united to stop tyranny.`,
          vocab: [
            { word: `Pearl Harbor`,   definition: `A 1941 ATTACK by Japan on US ships in Hawaii. PEARL HARBOR brought America into WWII.`,
              audioPrompt: `Pearl Harbor, {name}, was a nineteen forty one attack by Japan on US ships in Hawaii. Pearl Harbor brought America into World War II. On December 7, 1941, Japanese planes attacked the American naval base, sinking ships and killing over 2,000 people. The next day, America declared war. The full might of American factories and soldiers joined the Allies. That changed the war.` },
            { word: `D-Day`,          definition: `The 1944 ALLIED LANDING at Normandy in France. D-DAY started the freeing of Europe from Nazi rule.`,
              audioPrompt: `D-Day, {name}, was the nineteen forty four Allied landing at Normandy in France. D-Day started the freeing of Europe from Nazi rule. On June 6, 1944, tens of thousands of Allied soldiers stormed the beaches of Normandy in France. The Nazis controlled France. The Allies had to fight their way ashore. Many died. But they succeeded. From the beaches, they pushed inland and freed Western Europe over the next year.` },
            { word: `unity`,          definition: `WORKING TOGETHER. UNITY among Allied countries was crucial to winning the war.`,
              audioPrompt: `Unity, {name}, is working together. Unity among Allied countries was crucial to winning the war. Different countries — America, Britain, the Soviet Union, France, China, and many others — had different cultures and disagreed about many things. But they UNITED against Hitler and the Axis. Without that unity, the Axis might have won. Unity in the face of danger is powerful.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The War ENDS — At a Terrible Cost`,
          paragraphs: [
            `By spring 1945, the Allies were closing in on Germany. Soviet armies entered Berlin (Germany's capital). Hitler killed himself rather than surrender. On MAY 8, 1945, Germany SURRENDERED. Victory in Europe — V-E DAY. People celebrated in streets across Europe and America.`,
            `But the war wasn't over. JAPAN was still fighting in the Pacific. Battles were bloody. America had developed a new weapon — the ATOMIC BOMB. President TRUMAN made the agonizing decision to use it. In August 1945, atomic bombs were dropped on the Japanese cities of HIROSHIMA and NAGASAKI. The destruction was beyond anything humans had seen. Hundreds of thousands of people died — most of them civilians. Japan surrendered days later. The war was OVER. Whether the bombs should have been used is still debated today. Many lives might have been saved by ending the war faster. But the human cost — including children, families, and people who hadn't done anything wrong — was enormous. World War II showed humanity new TERRIFYING power. The atomic age had begun. Humanity now had weapons that could destroy whole cities — and one day, the world. The same gifts of science could heal — or destroy. Choices matter.`,
          ],
          image: `/explorer-assets/history/l12-s5-war-ends.webp`,
          imageCaption: `War ends 1945: Germany surrenders in May. Atomic bombs on Japan in August. Devastating end to the deadliest war.`,
          vocab: [
            { word: `surrender`,      definition: `GIVE UP fighting and ACCEPT defeat. Germany SURRENDERED in May 1945, Japan in August.`,
              audioPrompt: `To surrender, {name}, is to give up fighting and accept defeat. Germany surrendered in May nineteen forty five, Japan in August. Surrender ends a war. Sometimes leaders surrender to save more lives. Sometimes they refuse and more die. The end of World War II came with both kinds of moments. Some leaders chose surrender wisely. Others held on too long.` },
            { word: `atomic bomb`,    definition: `A WEAPON of UNIMAGINABLE power. ATOMIC BOMBS dropped in 1945 ended WWII — and started a dangerous new age.`,
              audioPrompt: `An atomic bomb, {name}, is a weapon of unimaginable power. Atomic bombs dropped in nineteen forty five ended World War II — and started a dangerous new age. Two bombs destroyed Hiroshima and Nagasaki in Japan. The human cost was enormous. After the war, humanity now had weapons that could end civilization itself. Countries since have worked to prevent atomic bombs from being used again. So far, they haven't been used in war since 1945. May it stay that way.` },
            { word: `civilians`,      definition: `Regular PEOPLE — not soldiers. WWII killed millions of CIVILIANS — not just soldiers.`,
              audioPrompt: `Civilians, {name}, are regular people — not soldiers. World War II killed millions of civilians — not just soldiers. Bombs were dropped on cities. Families lost their homes. Children died. Whole communities were destroyed. WWII was the first war in history where as many or more civilians died as soldiers. That fact made the world realize: modern wars hurt everyone. We need to prevent them.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What the World LEARNED`,
          paragraphs: [
            `{name} — WWII was the most devastating event in human history. From its ashes, the world tried to LEARN.`,
            `In 1945, world leaders created the UNITED NATIONS (UN) — a group of countries promising to work TOGETHER for peace and to prevent another world war. Most countries belong to the UN today (now 193). It's not perfect. But it's a forum where countries TALK instead of fight. It coordinates aid during disasters. It protects refugees. It works on global problems. After the Holocaust, in 1948, the UN signed the UNIVERSAL DECLARATION OF HUMAN RIGHTS — a list of rights EVERY human deserves, no matter where they live. The world said: human rights aren't just for citizens of any one country. They're for EVERYONE. The world also recognized that DEMOCRACIES and EDUCATION are stronger barriers against dictators than walls or armies. When people can vote, learn, ask hard questions, and protect each other — dictators have a harder time rising. The biggest lesson of WWII: HATE leads to HORROR. Speak up against hate. Protect those who are different. Watch for warning signs. Build peace before war. Be kind. Tell the truth. Honor those who suffered. NEVER AGAIN is the world's promise. It's also yours.`,
          ],
          image: `/explorer-assets/history/l12-s6-united-nations.webp`,
          imageCaption: `From WWII's ashes: the UN (1945), Universal Declaration of Human Rights (1948), promise of "never again." World's work.`,
          vocab: [
            { word: `United Nations`, definition: `An ORGANIZATION of 193 countries promising to work for PEACE. The UNITED NATIONS was created after WWII.`,
              audioPrompt: `The United Nations, {name}, is an organization of one hundred ninety three countries promising to work for peace. The United Nations was created after World War II. Born from the ashes of the worst war in history. Its mission: prevent another world war. Help refugees. Coordinate disaster aid. Work on global problems. Not perfect — but a place where the world TALKS instead of fights. A real gift of WWII's tough lessons.` },
            { word: `human rights`,   definition: `RIGHTS that EVERY human deserves. The UN's UNIVERSAL DECLARATION OF HUMAN RIGHTS (1948) said human rights are for everyone.`,
              audioPrompt: `Human rights, {name}, are rights that every human deserves. The UN's Universal Declaration of Human Rights, from nineteen forty eight, said human rights are for everyone. Born from the lessons of the Holocaust. The world said: never again can we treat any group of humans as "less than." Every human has rights to life, freedom, education, fair treatment, dignity. Always. Everywhere. Period.` },
            { word: `lessons learned`, definition: `WHAT we know NOW because of HARD experiences. The LESSONS LEARNED from WWII shape our world today.`,
              audioPrompt: `Lessons learned, {name}, are what we know now because of hard experiences. The lessons learned from World War II shape our world today. Don't let dictators rise unchecked. Speak up against hate. Protect vulnerable groups. Build democracies and education. Work together. Take warning signs seriously. The world is still learning these lessons. Each generation must learn them anew. That's part of your job too.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `The HOLOCAUST really happened — about 6 million Jewish people and millions of others were killed by Nazi hatred.`,
              matchPhrase: `Yes — and we must always remember. The Holocaust is one of the most painful chapters in human history. Honoring the victims means never forgetting. Never again.`,
              correctMatch: `fact` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `After WWII, the world created the UNITED NATIONS to work together for peace and prevent another world war.`,
              matchPhrase: `True! The UN was founded in 1945. Today, 193 countries belong. Not perfect, but a place where the world talks instead of fights. Born from WWII's hard lessons.`,
              correctMatch: `fact` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `HATING other groups of people makes a country GREAT — that's what good leaders should do.`,
              matchPhrase: `Not at all! This is the LIE that dictators like Hitler told — and it led to horrors. Hate doesn't make countries great. It destroys them. Real strength comes from unity, kindness, and equal treatment.`,
              correctMatch: `myth` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `World War II has NO LESSONS for today — it's just an old story that doesn't matter.`,
              matchPhrase: `Definitely not! WWII teaches us: watch for warning signs, speak up against hate, protect vulnerable people, build peace before war. These lessons matter every single day.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `WHEN was World War II?`,
              options: [`Long ago`, `1939 to 1945 — six terrible years`, `Last year`, `In ancient times`],
              correctIndex: 1,
              explanation: `1939-1945. Six years. Just 20 years after WWI. The biggest, deadliest war in human history. About 80 years ago — recent enough that some grandparents and great-grandparents remember it.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `Who were the AXIS POWERS?`,
              options: [`The good guys`, `Germany, Italy, and Japan — countries led by DICTATORS who started the war`, `Just one country`, `Don't know`],
              correctIndex: 1,
              explanation: `The Axis: Germany (Hitler), Italy (Mussolini), Japan (military rulers). Three dictatorships that wanted to conquer their neighbors. Together they started WWII.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `What was the HOLOCAUST?`,
              options: [`A celebration`, `The Nazi-organized killing of MILLIONS of Jewish people and others targeted for hate`, `A battle`, `A holiday`],
              correctIndex: 1,
              explanation: `The Holocaust: 6 million Jewish people and millions of others (Roma, disabled, LGBTQ, political prisoners) killed by Nazis. One of the worst chapters in human history. Honored through remembrance. "Never again."` },
            { id: `l12-q4`, format: `true-false`,
              question: `D-DAY (June 6, 1944) was when ALLIED SOLDIERS landed in Normandy, France — starting the LIBERATION of Europe from Nazi rule.`,
              correctAnswer: true,
              explanation: `True! D-Day: tens of thousands of Allied soldiers stormed Normandy beaches. Many died. The survivors pushed inland. Within a year, they liberated France and pressed into Germany. A turning point in the war.` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `After WWII, the world created the ___ to work together for peace and prevent another world war.`,
              options: [`United Nations`, `League of Knights`, `World Council`, `Empire of Peace`],
              correctIndex: 0,
              explanation: `United Nations! Founded 1945. 193 member countries today. Not perfect, but where the world TALKS instead of fights. Born from WWII's hard lessons. Working on peace, refugees, disasters, and global problems.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `What's the BIGGEST LESSON of WWII for us today?`,
              options: [`Nothing`, `HATE leads to HORROR — speak up against hate, protect vulnerable people, watch for warning signs, never again`, `War is fun`, `Old stuff`],
              correctIndex: 1,
              explanation: `The biggest lesson: HATE leads to horror. Speak up against hate. Protect those who are different. Watch for warning signs. Build peace before war. NEVER AGAIN is the world's promise — and yours.` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something to remember, {name}. WWII happened only 80 years ago — recent enough that some great-grandparents may have lived through it. People who SURVIVED the Holocaust are still alive today (though their numbers grow smaller each year). Their stories MATTER. If you ever have the chance to hear a Holocaust survivor speak — listen carefully. Remember their words. Pass them on. The world said NEVER AGAIN — but sadly, similar horrors have happened in other places since (Cambodia, Rwanda, Bosnia, Syria, and others). The work of preventing genocide continues. You can help by: SPEAKING UP when you hear hate, INCLUDING people who are different from you, LEARNING about cultures other than your own, and CHOOSING KINDNESS. Big change starts with small daily choices. Be the kind of person whose great-grandkids will say: "They made the world better." The greatest honor we can pay WWII's victims is to live in a way that prevents another one.`,
          familyAdventure: {
            title: `Stories of Kindness`,
            scenario: `Together, read about ONE brave person who helped others during WWII. Examples: Oskar Schindler, Irena Sendler, Raoul Wallenberg, the Frank family's helpers, the Danish Resistance. Many ordinary people hid Jewish neighbors, smuggled children to safety, or risked their lives for strangers.`,
            talkingPoint: `Talk about: WHY did they help when it was so dangerous? What would YOU have done? What can you do TODAY for someone different from you? Kindness is always a choice.`,
          },
          creativePrompt: {
            title: `Promise of Peace`,
            description: `Make a "PROMISE OF PEACE" art piece. Draw or paint a symbol of peace — a dove, an olive branch, hands holding, or the UN flag. Around it, write the words: NEVER AGAIN. Underneath, write 3 things YOU promise to do to help build a peaceful world. (Examples: include people who feel left out, speak kindly, learn about other cultures, defend someone being bullied, treat everyone with dignity.) Hang it somewhere you'll see it.`,
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Hard lesson, {name}, but so important. You've learned about WORLD WAR II — the deadliest war ever. DICTATORS (Hitler, Mussolini, Japan's military) led the AXIS. The ALLIES (US, Britain, Soviet Union, France, others) fought to stop them. The HOLOCAUST killed 6 million Jewish people and millions of others — we honor them by NEVER FORGETTING. D-DAY started the LIBERATION of Europe. ATOMIC BOMBS ended the war and started a dangerous new age. From the ashes came the UNITED NATIONS and the UNIVERSAL DECLARATION OF HUMAN RIGHTS — the world's promise of NEVER AGAIN. The biggest lesson: hate leads to horror. Speak up. Protect others. Be kind. The world is still learning. So is each generation. Including yours. Next time we explore the CIVIL RIGHTS MOVEMENT — when people fought for equal rights and won. — Lyra 🐘`,
          badge: `wwii-explorer`,
          badgeName: `World War II Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L12;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L12] Loaded: "World War II" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
