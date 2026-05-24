// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L14 — World Wars
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.His.1.3-5 / D2.His.14.3-5 / D2.His.16.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: investigation (Mystery WWI/WWII cases)
// TONE: Honest about scale of harm. Age-appropriate. No graphic detail.
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-14`,
      title: `World Wars`,
      duration: 24,
      xpReward: 75,
      badge: `history-detective`,
      badgeName: `History Detective`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today's lesson is about the two biggest wars in human history. World War One and World War Two reshaped the entire planet in the first half of the twentieth century. Tens of millions of people died. Maps were redrawn. Empires fell. New superpowers rose. We'll cover what happened, why, and what it left behind. This is heavy material, but it's central to understanding the world you live in.`,
          headline: `World Wars`,
          subtitle: `The two conflicts that shaped the modern world`,
          visual: `/ue-assets/social-studies/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `World War One: A New Kind of War`,
          paragraphs: [
            `World War One started in nineteen-fourteen and ended in nineteen-eighteen. It was the first truly global war. The main fighting was in Europe, but it pulled in countries from every continent. About 20 million people died — soldiers and civilians combined.`,
            `The deeper causes had been building for decades. European countries had formed two opposing alliance systems, like two teams promising to defend each other. Industrial economies had built up huge armies and weapons. Nationalist feelings ran high. Colonial rivalries created tensions. When a Serbian nationalist assassinated an Austrian archduke in nineteen-fourteen, the alliance system pulled country after country into war within weeks.`,
            `The war introduced terrible new weapons — machine guns, poison gas, tanks, submarines, airplanes used for combat. Soldiers spent years in trenches dug into the ground, often within a few hundred yards of the enemy. Battles could kill tens of thousands in a day with little ground gained. The war ended only after the US joined in nineteen seventeen, helping the Allied side break the deadlock. Germany surrendered in nineteen-eighteen.`,
          ],
          image: `/ue-assets/social-studies/l14-s1-ww1.webp`,
          imageCaption: `Nineteen-fourteen to nineteen-eighteen. About 20 million dead. The first global industrial war.`,
          vocab: [
            { word: `alliance`,
              definition: `A formal agreement between countries to support each other, often militarily.`,
              audioPrompt: `An alliance is a formal agreement between countries to support each other, {name}, often by promising to defend each other in case of war. Before World War One, Europe was divided into two opposing alliances. When a small conflict triggered one country to act, all its allies got pulled in. This is part of how a single assassination led to a war involving most of the world's major powers. Alliances can prevent wars by making aggression risky. They can also widen wars by linking countries together.` },
            { word: `nationalism`,
              definition: `Strong pride in and loyalty to one's country or people, sometimes to the point of hostility toward others.`,
              audioPrompt: `Nationalism is strong pride in and loyalty to one's country, {name}. It's not always negative — national pride can inspire people to build better societies. But extreme nationalism, the kind that says my country is better than all others or targets outsiders as enemies, has been one of history's most dangerous forces. In the years before World War One, fierce nationalism was spreading across Europe — especially in places where ethnic groups felt they deserved their own countries. That tension helped push a regional conflict into a global war.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Between the Wars`,
          paragraphs: [
            `World War One ended with the Treaty of Versailles in nineteen-nineteen. The treaty blamed Germany for the war and required Germany to pay enormous reparations. The German economy collapsed. By the early nineteen-twenties, German money had become almost worthless — people needed wheelbarrows of cash to buy bread.`,
            `Meanwhile, the Great Depression of the nineteen-thirties spread economic disaster across the entire world. Unemployment soared. Many people lost faith in democracy and turned toward extreme movements that promised quick solutions. In Germany, the Nazi Party led by Adolf Hitler used this crisis to gain power in nineteen thirty-three. They promised to restore Germany's strength — and they targeted Jewish people and other minorities as scapegoats for Germany's problems.`,
            `Across the world, similar movements grew. In Italy, Mussolini led a Fascist government. In Japan, militarists took over. These regimes shared a willingness to use violence at home and start wars abroad. The peace that came after World War One was crumbling within twenty years.`,
          ],
          image: `/ue-assets/social-studies/l14-s2-between-wars.webp`,
          imageCaption: `A harsh peace treaty + economic collapse + scapegoating = a path to another war.`,
          vocab: [
            { word: `fascism`,
              definition: `A political system based on a single all-powerful leader, extreme nationalism, and the suppression of opposition.`,
              audioPrompt: `Fascism is a political system based on a single all-powerful leader, extreme nationalism, and the violent suppression of opposition, {name}. Fascist governments rose in the nineteen-twenties and nineteen-thirties, especially in Italy under Mussolini and Germany under Hitler. They blamed their countries' problems on outsiders or minorities, often targeting Jewish people, Roma people, communists, and others. They used propaganda to control what people heard and harsh laws to crush anyone who resisted. Fascism led directly to World War Two and to the Holocaust.` },
            { word: `reparations`,
              definition: `Payments demanded from a country that lost a war to compensate for damages caused.`,
              audioPrompt: `Reparations are payments demanded from a country that lost a war to compensate for damages caused, {name}. After World War One, the Treaty of Versailles required Germany to pay enormous reparations to the Allied countries. The amounts were so large that Germany's economy collapsed under the strain. By the early nineteen-twenties, German currency had become nearly worthless. This economic devastation fueled resentment that extremist politicians like Hitler would later exploit. Reparations can punish a defeated country — but they can also sow the seeds of future conflict.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `World War Two: The Largest War in History`,
          paragraphs: [
            `World War Two ran from nineteen thirty-nine to nineteen forty-five. About 75 million people died — over three times as many as in World War One. About two-thirds of those deaths were civilians, not soldiers.`,
            `The war began when Germany invaded Poland in nineteen thirty-nine. Britain and France declared war on Germany. Within a year, Germany had conquered most of Western Europe. The Soviet Union initially had an agreement with Germany, but Germany broke it in nineteen forty-one and invaded the Soviet Union. The US entered the war after Japan attacked the US naval base at Pearl Harbor in December nineteen forty-one.`,
            `The two sides were called the Allies — mainly the US, the Soviet Union, the United Kingdom, France, and China — and the Axis Powers — mainly Germany, Italy, and Japan. The war was fought on multiple continents and oceans. After years of brutal fighting, the Allies won. Germany surrendered in May nineteen forty-five. Japan surrendered in August nineteen forty-five, after the US used the first atomic bombs ever deployed in war on the cities of Hiroshima and Nagasaki — a moment that ended the war but opened a new era of nuclear weapons.`,
          ],
          image: `/ue-assets/social-studies/l14-s3-ww2.webp`,
          imageCaption: `Nineteen thirty-nine to nineteen forty-five. About 75 million dead. The largest war in human history.`,
          vocab: [
            { word: `Holocaust`,
              definition: `The systematic murder of about 6 million Jewish people, and millions of others, by Nazi Germany during World War Two.`,
              audioPrompt: `The Holocaust was the systematic murder of about 6 million Jewish people by Nazi Germany during World War Two, {name}. Millions more people were also killed — Roma people, disabled people, gay people, political prisoners, Soviet prisoners of war, and many others. The Nazis built death camps specifically to carry out this killing. It is one of the most thoroughly documented atrocities in human history. Studying the Holocaust is about understanding how a modern, educated society can be turned to mass murder.` },
            { word: `atomic bomb`,
              definition: `A weapon that uses nuclear reactions to release enormous destructive energy.`,
              audioPrompt: `An atomic bomb uses nuclear reactions to release enormous destructive energy, {name}. The US used atomic bombs against the Japanese cities of Hiroshima and Nagasaki in August nineteen forty-five, killing about 200,000 people, mostly civilians. These were the only atomic bombs ever used in war. Their use ended World War Two but also opened the nuclear age — a period when several countries built these weapons and the world has lived under the possibility of nuclear war. Today, about nine countries have nuclear weapons.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What the Wars Left Behind`,
          paragraphs: [
            `The two wars together killed about 95 million people and reshaped the planet completely. Empires that had existed for centuries collapsed. European colonies began winning independence within years of the war's end. Two countries — the United States and the Soviet Union — emerged as superpowers with global influence and rival ideologies. We'll cover the Cold War between them next lesson.`,
            `New institutions were built to try to prevent another world war. The United Nations was founded in nineteen forty-five, with the goal of giving countries a place to talk through disputes rather than fight them. The Universal Declaration of Human Rights was adopted in nineteen forty-eight, laying out rights every human should have. These institutions haven't prevented all conflict — far from it — but they have changed how the world responds when conflict happens.`,
            `Memory of the wars also reshaped culture and politics. The phrase "Never Again" became a rallying cry for those who studied the Holocaust. Democracies invested in education about what happened and why. Many countries built memorials. The lesson many people drew was simple — be vigilant about the warning signs that led to fascism and genocide, because they aren't ancient history. They happened within living memory.`,
          ],
          image: `/ue-assets/social-studies/l14-s4-aftermath.webp`,
          imageCaption: `New superpowers. New global institutions. New commitments to "Never Again."`,
          vocab: [
            { word: `United Nations`,
              definition: `An international organization founded in nineteen forty-five to promote peace and cooperation between countries.`,
              audioPrompt: `The United Nations is an international organization founded in nineteen forty-five, right after World War Two, {name}. It was created to give countries a place to talk through disputes instead of going to war. Today, 193 countries are members. The UN runs peacekeeping missions, delivers humanitarian aid, defends human rights, and coordinates on global problems like climate change and pandemics. It hasn't prevented all wars — many have happened since nineteen forty-five — but it has changed how the international community responds when conflicts begin.` },
            { word: `genocide`,
              definition: `The deliberate killing of a large group of people based on their ethnicity, religion, or nationality.`,
              audioPrompt: `Genocide is the deliberate killing of a large group of people based on their ethnicity, religion, or nationality, {name}. The word was coined in the nineteen forties to describe what the Nazis did to Jewish people during World War Two. The Holocaust is the most documented genocide in history. Others include the Armenian genocide, the Rwandan genocide, and the Cambodian genocide under the Khmer Rouge. International law now defines genocide as a crime and obligates countries to try to prevent it.` },
          ],
        },

        // ── INVESTIGATION GAME — Mystery Cases from the World Wars ─────────────
        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `History Detective time, {name}. I'll give you four real cases from the World Wars era. For each one, you read the clues and figure out: was this a cause of war, an effect of war, an act of resistance, or a turning point? Then I'll explain what actually happened.`,
          options: [
            { id: `cause`,        label: `Cause of War`,        color: `#F87171`, description: `An event or condition that helped lead to war.` },
            { id: `effect`,       label: `Effect of War`,       color: `#A78BFA`, description: `A consequence that came after war.` },
            { id: `resistance`,   label: `Act of Resistance`,   color: `#34D399`, description: `People standing up to oppression or invasion.` },
            { id: `turning-point`, label: `Turning Point`,      color: `#FBBF24`, description: `A moment that changed the direction of the war.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Mystery #1`,
              clues: [
                { text: `In June of nineteen-fourteen, a Serbian nationalist shot and killed Archduke Franz Ferdinand of Austria in the city of Sarajevo.` },
                { text: `Within weeks, Austria declared war on Serbia, and the alliance system pulled in Russia, Germany, France, Britain, and many other countries.` },
                { text: `Within a few months, a war that started with one assassination had drawn most of Europe into combat.` },
              ],
              correctAnswer: `cause`,
              realWorldExample: `This is the assassination of Archduke Franz Ferdinand, the famous trigger for World War One.`,
              explanation: `Cause of war. The assassination didn't single-handedly cause World War One — deeper tensions had been building for decades. But it was the spark that ignited the powder keg. The alliance system meant that once one country acted, the whole network was pulled in. It's a textbook example of how small events can trigger huge consequences when conditions are already set.`,
            },
            {
              id: `case-2`,
              caseTitle: `Mystery #2`,
              clues: [
                { text: `In June of nineteen forty-four, more than 150,000 Allied soldiers landed on the beaches of Normandy, France.` },
                { text: `It was the largest amphibious invasion in history. Many soldiers died in the first hours.` },
                { text: `Within weeks, the Allies had a strong foothold in occupied France and began driving German forces back toward Germany.` },
              ],
              correctAnswer: `turning-point`,
              realWorldExample: `This is D-Day, June 6th, nineteen forty-four — the Normandy invasion.`,
              explanation: `Turning point. D-Day marked the beginning of the end for Nazi Germany. The Allies finally established a major front in Western Europe, complementing the Soviet advance from the east. Germany was now being squeezed from both sides. Less than a year later, Germany surrendered. Some moments in war really do change everything afterward — this was one of them.`,
            },
            {
              id: `case-3`,
              caseTitle: `Mystery #3`,
              clues: [
                { text: `In April of nineteen forty-three, in the Warsaw Ghetto in Nazi-occupied Poland, Jewish residents took up arms to resist Nazi orders to send them to death camps.` },
                { text: `They had almost no weapons — some pistols, homemade explosives, smuggled supplies. The Nazis had tanks, soldiers, and air support.` },
                { text: `The Jewish fighters held out for nearly a month before being overwhelmed. Almost all died in the fighting or were sent to camps afterward.` },
              ],
              correctAnswer: `resistance`,
              realWorldExample: `This is the Warsaw Ghetto Uprising — one of the largest armed Jewish resistance efforts during the Holocaust.`,
              explanation: `Resistance. The Warsaw Ghetto Uprising is one of the most studied examples of Jewish resistance during the Holocaust. The fighters knew they couldn't win militarily. They fought anyway, because they refused to be killed without resistance. There were many resistance movements throughout occupied Europe — Polish, French, Dutch, Greek, Norwegian, and others — that fought against Nazi occupation in many different ways. These movements show that even in the worst conditions, people found ways to push back.`,
            },
            {
              id: `case-4`,
              caseTitle: `Mystery #4`,
              clues: [
                { text: `After the Treaty of Versailles in nineteen-nineteen, Germany faced enormous payments to other countries and lost much of its territory.` },
                { text: `By the early nineteen-twenties, the German economy collapsed and unemployment soared. The currency became almost worthless.` },
                { text: `Many Germans came to believe their country had been unfairly punished, and they were open to leaders who promised to restore Germany's strength.` },
              ],
              correctAnswer: `cause`,
              realWorldExample: `These are the economic and political conditions that helped Hitler rise to power and contributed to World War Two.`,
              explanation: `Cause — specifically a cause of World War Two. The harsh terms of the Treaty of Versailles, combined with the Great Depression, created the conditions for the Nazi Party to gain power. Hitler told Germans that they had been betrayed and humiliated, and that he would make Germany strong again. Many Germans believed him, partly because the previous democratic government had failed to fix the economic crisis. World War Two was set up by the unresolved problems of World War One.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `When did World War One start and end?`,
              options: [
                `Nineteen-ten to nineteen-fifteen`,
                `Nineteen-fourteen to nineteen-eighteen`,
                `Nineteen thirty to nineteen forty`,
                `Nineteen forty to nineteen forty-five`,
              ],
              correctIndex: 1,
              explanation: `World War One ran from nineteen-fourteen to nineteen-eighteen. About 20 million people died, and it set the stage for World War Two by leaving Germany humiliated and economically devastated.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `What was the immediate trigger of World War One?`,
              options: [
                `Germany invading Poland`,
                `The assassination of Archduke Franz Ferdinand in Sarajevo in nineteen-fourteen`,
                `The bombing of Pearl Harbor`,
                `A natural disaster`,
              ],
              correctIndex: 1,
              explanation: `The assassination of Franz Ferdinand triggered the chain reaction. Alliance systems and decades of tensions did the rest, pulling country after country into war.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What is fascism?`,
              options: [
                `A type of music`,
                `A political system based on a single all-powerful leader, extreme nationalism, and crushing opposition through violence`,
                `A type of democracy`,
                `A religion`,
              ],
              correctIndex: 1,
              explanation: `Fascism is a far-right political system with concentrated power, extreme nationalism, scapegoating of minorities, and violent suppression of dissent. Italy and Germany were the clearest examples in the nineteen thirties.` },
            { id: `l14-q4`, format: `multiple-choice`,
              question: `When did World War Two run, and roughly how many people died?`,
              options: [
                `Nineteen forty to nineteen fifty; 10 million`,
                `Nineteen thirty-nine to nineteen forty-five; about 75 million`,
                `Nineteen-fourteen to nineteen-eighteen; 20 million`,
                `Nineteen sixty to nineteen seventy; 5 million`,
              ],
              correctIndex: 1,
              explanation: `World War Two ran from nineteen thirty-nine to nineteen forty-five. About 75 million people died — the deadliest war in human history. About two-thirds were civilians, not soldiers.` },
            { id: `l14-q5`, format: `true-false`,
              question: `True or false: The Holocaust was the systematic murder of about 6 million Jewish people, along with millions of others, by Nazi Germany.`,
              correctAnswer: true,
              explanation: `True. The Holocaust killed about 6 million Jewish people. Millions of others — including Roma people, disabled people, gay people, political prisoners, and Soviet POWs — were also murdered. It's one of the most documented atrocities in history.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What event brought the US into World War Two?`,
              options: [
                `A speech by Hitler`,
                `Japan attacking the US naval base at Pearl Harbor in December nineteen forty-one`,
                `A vote in Congress`,
                `Germany invading France`,
              ],
              correctIndex: 1,
              explanation: `Japan attacked Pearl Harbor on December 7th, nineteen forty-one. The US declared war the next day, joining the Allies in fighting both Japan and Germany.` },
            { id: `l14-q7`, format: `multiple-choice`,
              question: `What did the use of atomic bombs in nineteen forty-five do?`,
              options: [
                `Started World War One`,
                `Ended World War Two, killed about 200,000 people, and opened the nuclear age`,
                `Created the United Nations`,
                `Caused the Great Depression`,
              ],
              correctIndex: 1,
              explanation: `The US dropped atomic bombs on Hiroshima and Nagasaki in August nineteen forty-five. Japan surrendered. About 200,000 people died, mostly civilians. The era of nuclear weapons had begun.` },
            { id: `l14-q8`, format: `multiple-choice`,
              question: `Why was the United Nations created?`,
              options: [
                `To start wars`,
                `To give countries a place to talk through disputes and try to prevent future world wars`,
                `To rule the world`,
                `To collect taxes`,
              ],
              correctIndex: 1,
              explanation: `The UN was created in nineteen forty-five, right after WWII, to give nations a way to work through conflicts without going to war. It hasn't prevented all conflict, but it has changed how the international community handles disputes.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Heavy lesson, {name}. Pick a real prompt and answer it.`,
          prompts: [
            { id: `r1`, text: `What surprised you most about either World War?` },
            { id: `r2`, text: `Why do you think understanding the warning signs of fascism still matters today?` },
            { id: `r3`, text: `Which of the four detective cases stuck with you most? Why?` },
            { id: `r4`, text: `What would you want a friend who hasn't learned about these wars to understand?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `The world we live in today was shaped almost entirely by these two wars. The borders of Europe, the rise of the US and Russia as superpowers, the existence of the United Nations, the European Union, NATO, international human rights law, and the long shadow of nuclear weapons — all came directly from these two conflicts. Many of the survivors and witnesses are still alive. Their stories are part of how the next generation learns the warning signs.`,
          familyAdventure: `Together, pick one person who lived through one of the world wars — a family member if you can, or a famous figure (Anne Frank, Winston Churchill, FDR, Eleanor Roosevelt, Elie Wiesel) if not. Read or watch something short about their life. Talk about what their experience teaches us that we can't get from textbooks alone.`,
          creativePrompt: {
            intro: `Imagine you're a journalist asked to explain one key lesson from the World Wars to people today. Pick ONE lesson that matters most to you. Write about it.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Take it seriously — explain why this lesson matters, with specific examples.`,
            open: `Write as much as you want. Make your case.`,
            frames: [
              `The key lesson I want to focus on is ___.`,
              `Why this matters today is ___.`,
              `One specific example that shows this is ___.`,
              `Something a 9-year-old reader might not realize is ___.`,
              `The thing I'd most want people to take away is ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You handled hard material. You can now place both World Wars in time, name their major causes and effects, recognize the warning signs of fascism, and understand why institutions like the UN were created. Next lesson we cover what came right after — the Cold War, when the world divided into two camps for decades and almost destroyed itself with nuclear weapons. — Atlas.`,
          badge: `history-detective`,
          badgeName: `History Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L14;
