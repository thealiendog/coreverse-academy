// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L11 — Human Geography and Migration
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Geo.7.3-5 / D2.Geo.8.3-5 / D2.His.4.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (Why People Move — real migration stories)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-11`,
      title: `Human Geography and Migration`,
      duration: 23,
      xpReward: 75,
      badge: `migration-thinker`,
      badgeName: `Migration Thinker`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Last lesson we looked at the planet itself — landforms, climate, biomes. Today we add the most interesting variable: PEOPLE. Where do humans live, why there, and why are billions of us also moving from place to place every year? Migration isn't just a current-events topic — it's been part of human life since the very beginning. By the end, you'll understand why people move, and you'll have walked through real reasons behind some of the biggest migrations in history.`,
          headline: `Human Geography and Migration`,
          subtitle: `Where people live, where they move, and why`,
          visual: `/ue-assets/social-studies/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Where Humans Live`,
          paragraphs: [
            `If you mapped every human on Earth, you'd notice immediately: people aren't spread out evenly. Roughly 60 percent of humanity lives in just one continent — Asia. India and China alone have over 2.8 billion people between them, more than a third of the world. Africa has about 1.4 billion people. The Americas have about a billion. Europe is around 750 million. Australia and Oceania, around 45 million.`,
            `Within continents, people cluster heavily. Rivers, coastlines, and farmable land draw populations. Deserts, mountains, and frozen regions repel them. The map of human population is almost the same as the map of habitable land — places with water, mild climate, and food potential.`,
            `Cities concentrate this even more. Today, over half of all humans live in urban areas — a number that's never been higher in history. Mega-cities like Tokyo, Delhi, Shanghai, and São Paulo each have over 20 million people. The trend is toward MORE concentration, not less.`,
          ],
          image: `/ue-assets/social-studies/l11-s1-where-humans-live.webp`,
          imageCaption: `8 billion people. Clustered along rivers, coasts, and farmable land.`,
          vocab: [
            { word: `population density`,
              definition: `How many people live in a given amount of land area — usually measured per square mile or kilometer.`,
              audioPrompt: `Population density is how many people live in a given area, {name}. Bangladesh has very high population density — about 1,200 people per square kilometer. Mongolia has very low population density — about 2 people per square kilometer. High density usually means lots of farming land, mild climate, and cities. Low density usually means hard land — deserts, mountains, frozen regions. Where humans cluster says a lot about the planet — the easiest places to live are also the most crowded.` },
            { word: `urbanization`,
              definition: `The trend of more and more people moving from the countryside to cities over time.`,
              audioPrompt: `Urbanization is the trend of people moving from the countryside to cities over time, {name}. For most of human history, the majority of people lived in rural areas — small villages, farms. Today, more than half of all humans live in cities, and the number keeps rising. Cities tend to offer more jobs, education, and services, which pulls people in. But they also create challenges — housing shortages, pollution, inequality. Understanding urbanization is part of understanding modern life almost everywhere.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Migration Is`,
          paragraphs: [
            `Migration is the movement of people from one place to live in another. It can happen within a country (called internal migration) or between countries (international migration). It can be voluntary or forced. It can be temporary or permanent. Almost every human alive today is descended from migrants — humanity itself started in Africa and spread to every continent over tens of thousands of years.`,
            `Geographers describe migration using "push" and "pull" factors. Push factors are reasons people leave a place — war, poverty, lack of jobs, persecution, natural disaster. Pull factors are reasons people are drawn to a destination — better jobs, family already there, safety, education, freedom.`,
            `Most migration involves BOTH at once. People rarely leave a place they love for no reason, and rarely arrive randomly. They're pushed away from one place and pulled toward another. Understanding the specific push and pull factors of any migration helps you understand what's actually happening — beyond the headlines.`,
          ],
          image: `/ue-assets/social-studies/l11-s2-push-pull.webp`,
          imageCaption: `Push factors drive people out. Pull factors draw them in. Most migration has both.`,
          vocab: [
            { word: `migration`,
              definition: `The movement of people from one place to live in another.`,
              audioPrompt: `Migration is the movement of people from one place to live in another, {name}. It can be inside a country, like a family moving from a small town to a big city. It can be between countries, like a family moving from Mexico to the United States. It can be voluntary — someone choosing to move — or forced, like a family fleeing a war. Migration is one of humanity's oldest stories. Humanity itself migrated out of Africa tens of thousands of years ago and spread across the entire planet.` },
            { word: `push and pull factors`,
              definition: `The reasons people leave one place (push) and are attracted to another (pull).`,
              audioPrompt: `Push and pull factors explain why people migrate, {name}. Push factors are reasons to leave a place — war, poverty, no jobs, persecution, natural disasters. Pull factors are reasons to go somewhere new — better jobs, safer environment, family already there, freedom, education. Most migration involves both at once. Someone isn't usually just pushed or just pulled — they're moving away from something AND toward something else. Knowing both factors tells you the real story behind any migration.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Big Migrations in History`,
          paragraphs: [
            `Migration has shaped almost every major moment in human history. About 50,000 years ago, our ancestors began leaving Africa and spreading across Asia, Europe, and eventually the Americas. That initial human migration created every population on Earth today.`,
            `In the past few centuries, several massive migrations stand out. From the 1500s to the 1800s, around 12 million Africans were forcibly migrated to the Americas through the transatlantic slave trade — one of the largest and most brutal migrations in history. Their descendants form major parts of populations across the Americas today. Between eighteen twenty and nineteen twenty, around 30 million Europeans migrated to the United States, mostly seeking work and escape from poverty or persecution.`,
            `In the 20th century, the Great Migration moved about 6 million Black Americans from the rural South to industrial cities in the North between nineteen-ten and nineteen seventy, transforming American culture. Today, ongoing migrations include people moving from Central America to the US, from North Africa and the Middle East to Europe, and within China from countryside to cities — the largest internal migration in human history.`,
          ],
          image: `/ue-assets/social-studies/l11-s3-big-migrations.webp`,
          imageCaption: `The biggest migrations have reshaped civilizations.`,
          vocab: [
            { word: `refugee`,
              definition: `A person forced to leave their home because of war, persecution, or disaster.`,
              audioPrompt: `A refugee is a person forced to leave their home because of war, persecution, or disaster, {name}. Refugees are different from regular migrants because they didn't really choose to leave — staying meant danger. International law gives refugees specific protections. Today, more than 100 million people around the world are refugees or displaced from their homes — the most in recorded history. Major refugee crises in recent years have come from countries like Syria, Ukraine, Venezuela, and Afghanistan. Most refugees end up in nearby countries, not far-off ones.` },
            { word: `diaspora`,
              definition: `A community of people living outside their homeland who still share identity, culture, or connection to where they came from.`,
              audioPrompt: `A diaspora is a community of people living outside their homeland who still share identity and culture, {name}. The Jewish diaspora has existed for thousands of years, with communities across Europe, the Middle East, and North Africa. The African diaspora includes descendants of enslaved Africans throughout the Americas. The Irish diaspora, formed largely by famine migrations, produced large communities in the US, UK, and Australia. Diaspora communities often maintain their languages, foods, religions, and traditions even generations after leaving their homeland.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why It Matters Today`,
          paragraphs: [
            `Migration is one of the most discussed and most misunderstood topics in modern politics. Some people see migrants as competition or as threats to culture. Others see them as essential workers, entrepreneurs, and contributors who strengthen the places they move to. The truth, like usual, is more complicated than either simple story.`,
            `Migrants have founded businesses, paid taxes, taken jobs nobody else would take, brought new ideas, and enriched cultures. They've also faced discrimination, exploitation, and policies that treat them as problems. The same country can see migrants as both a strength and a challenge — sometimes at the same time, sometimes by different people.`,
            `Knowing the actual push and pull factors helps you cut through political noise. A wave of migration from Central America isn't random — it correlates strongly with violence, poverty, and climate disasters in those specific countries. A wave from Ukraine isn't random — it's the result of a specific war. Following the actual causes leads to actual understanding, instead of just opinions.`,
          ],
          image: `/ue-assets/social-studies/l11-s4-migration-today.webp`,
          imageCaption: `Migration is a constant force. Understanding causes helps cut through the noise.`,
          vocab: [
            { word: `internal migration`,
              definition: `When people move from one part of a country to another, not crossing international borders.`,
              audioPrompt: `Internal migration is when people move within their own country, {name}, not across international borders. The biggest example today is in China, where over 200 million people have moved from rural villages to cities since nineteen eighty — the largest internal migration in human history. In the US, the Great Migration of Black Americans from the South to Northern cities between nineteen-ten and nineteen seventy was a defining internal migration. Internal migrations don't usually get as much news coverage as international ones, but they often shape countries even more.` },
            { word: `immigrant`,
              definition: `A person who moves permanently or long-term to a new country.`,
              audioPrompt: `An immigrant is a person who moves to live in a new country, {name}. Immigrants differ from tourists — they're staying. They differ from refugees in that they usually had more choice in their decision to move. The US is famously a nation built largely by immigrants — from the colonial era through major waves in the 1800s and 1900s and continuing today. Most immigrants are looking for better economic conditions, family reunification, or safety. Almost every society with immigrants has debated how many to accept and on what terms.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Why People Move ─────────────────────────
        {
          id: `l11-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Time to step into the shoes of people who actually had to make these decisions, {name}. You'll see four different migration scenarios — all based on real historical and current situations. For each, you'll see the family's situation and the choice they faced. You pick what you would have done. Then I'll tell you what actually happened.`,
          scenarioTitle: `The Decisions Behind Real Migrations`,
          decisions: [
            {
              id: `d1`,
              situation: `It's eighteen-fifty in rural Ireland. A potato disease has destroyed crops three years in a row. Your family has run out of food. Many neighbors have already died. There's no work, no aid, no end in sight. What does your family do?`,
              context: `This is the Irish Potato Famine. About 1 million Irish people died, and another 1.5 million emigrated, mostly to the US and Canada.`,
              options: [
                {
                  id: `a`,
                  label: `Stay in Ireland and hope things improve`,
                  preview: `Risky — but you stay near family and language.`,
                },
                {
                  id: `b`,
                  label: `Sell everything for one-way passage to America`,
                  preview: `Hard, scary, but possibly survival.`,
                },
                {
                  id: `c`,
                  label: `Try to move to a different region in Ireland`,
                  preview: `The famine affected the whole country. Limited relief possible.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. About 1.5 million Irish emigrated during the famine, mostly to the United States and Canada. Many didn't survive the brutal ocean voyage. Those who did formed huge Irish-American communities in cities like Boston, New York, and Chicago. The push factor was starvation. The pull factor was the chance to survive and eventually rebuild. Almost 1 in 10 Americans today have some Irish ancestry — most of it tracing back to this period.`,
            },
            {
              id: `d2`,
              situation: `It's nineteen-fifteen in Mississippi. You're a Black family working as sharecroppers. Wages are terrible, racist laws keep you stuck, and lynchings happen in the area. You hear that factories in Chicago and Detroit are hiring African Americans for real wages. What does your family do?`,
              context: `This is the Great Migration. Between nineteen-ten and nineteen seventy, about 6 million Black Americans moved from the rural South to Northern industrial cities.`,
              options: [
                {
                  id: `a`,
                  label: `Stay where you are and hope things get better`,
                  preview: `Familiar but dangerous. Real risks every day.`,
                },
                {
                  id: `b`,
                  label: `Take the train north to Chicago`,
                  preview: `New life, real wages, but also new struggles.`,
                },
                {
                  id: `c`,
                  label: `Move to a nearby Southern city`,
                  preview: `Some opportunity, but the racist laws follow you everywhere in the South.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B. About 6 million Black Americans made this exact choice between nineteen-ten and nineteen seventy. They headed north to industrial cities — Chicago, Detroit, New York, Philadelphia. Push factors included violence, racist laws, and economic exploitation. Pull factors included factory jobs, better wages, and more rights, though Northern cities had their own racism. The Great Migration completely reshaped American culture — including music, literature, and politics. The Black populations of Northern cities exploded.`,
            },
            {
              id: `d3`,
              situation: `It's right now in rural China. Your family farms a tiny plot of land. Income is barely enough to survive. Factories near Shanghai are paying ten times what farming pays. But going there means leaving your village, your parents, possibly your children behind. What do you do?`,
              context: `This is the largest internal migration in human history. Over 200 million people have moved from China's countryside to its cities since nineteen eighty.`,
              options: [
                {
                  id: `a`,
                  label: `Stay on the farm with your family intact`,
                  preview: `Less money, but you stay together.`,
                },
                {
                  id: `b`,
                  label: `One parent moves to the city to work, sends money home`,
                  preview: `Common solution. Family is split, money flows back.`,
                },
                {
                  id: `c`,
                  label: `Whole family moves to the city`,
                  preview: `Huge change. New life, but lots of challenges with housing, schools, and registration.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B is by far the most common choice. Tens of millions of Chinese families have done this. One or both parents move to the city for work, often leaving children behind with grandparents in the village. The money they send home — called remittances — supports the children and elderly parents. Over 60 million Chinese children today are "left-behind children" — raised by grandparents while parents work in distant cities. It's a massive, painful, modern human story most of the world barely knows about.`,
            },
            {
              id: `d4`,
              situation: `It's twenty twenty-two. You and your family live in Ukraine. Russia has just invaded. Bombs fall on your city. Your husband has to stay to fight. You have two young kids and an elderly parent. What do you do?`,
              context: `This is the Russia-Ukraine war. About 8 million Ukrainians have left the country since the twenty twenty-two invasion — the largest refugee crisis in Europe since World War II.`,
              options: [
                {
                  id: `a`,
                  label: `Stay and shelter in place`,
                  preview: `You're with family, but in immediate danger.`,
                },
                {
                  id: `b`,
                  label: `Move to a safer part of Ukraine`,
                  preview: `Still in your country, but war can reach there too.`,
                },
                {
                  id: `c`,
                  label: `Leave Ukraine for neighboring Poland or Germany`,
                  preview: `Hard, but your kids are safe and you can come back.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C is what about 8 million Ukrainian women, children, and elderly chose to do (men of military age were generally required to stay). Most are now refugees in Poland, Germany, the Czech Republic, and other European countries. The push factor was war and danger. The pull factor was safety and the hope of returning when the war ends. This is one of the biggest refugee crises in recent history — and it's happening right now, on a continent that thought such things were history.`,
            },
          ],
          completionMessage: `Real lives, real choices, {name}. Notice the pattern? Almost no one wants to leave their home. People migrate when staying becomes worse than going. Knowing the actual push factors and pull factors of any migration helps you understand it way better than the headlines do. Most migrants are just people who looked at impossible situations and chose the option that gave them a chance.`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Quick test, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `Where does roughly 60 percent of the world's population live?`,
              options: [
                `Europe`,
                `Africa`,
                `Asia`,
                `The Americas`,
              ],
              correctIndex: 2,
              explanation: `About 60 percent of humanity lives in Asia. India and China alone have over 2.8 billion people between them — more than a third of all humans on Earth.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `What's population density?`,
              options: [
                `Total population of a country`,
                `How many people live in a given amount of land area`,
                `How many people are in a single building`,
                `Total population times birth rate`,
              ],
              correctIndex: 1,
              explanation: `Population density is people per unit of area. Bangladesh has very high density. Mongolia has very low. It tells you a lot about how habitable a place is.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `What are "push factors" in migration?`,
              options: [
                `Reasons people are attracted to a new place`,
                `Reasons people leave their current place — war, poverty, persecution, etc.`,
                `The cost of moving`,
                `The weather`,
              ],
              correctIndex: 1,
              explanation: `Push factors are reasons to leave — bad ones that drive people out. Pull factors are reasons to come somewhere — good ones that draw people in. Most migration has both.` },
            { id: `l11-q4`, format: `multiple-choice`,
              question: `What's the difference between a regular migrant and a refugee?`,
              options: [
                `There's no difference`,
                `A refugee is forced to leave their home because of war, persecution, or disaster — staying meant danger`,
                `Refugees are always poor`,
                `Migrants always come from Europe`,
              ],
              correctIndex: 1,
              explanation: `Refugees are migrants who were FORCED to flee — they didn't have a real choice. Staying meant danger. International law gives refugees specific protections. Today there are over 100 million refugees worldwide.` },
            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Internal migration (within a country) is usually larger than international migration in terms of total people moving.`,
              correctAnswer: true,
              explanation: `True. Internal migration is usually bigger. The largest single migration in human history is happening right now — over 200 million Chinese moving from countryside to cities since nineteen eighty. The US Great Migration moved 6 million within the country.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `What was the Great Migration?`,
              options: [
                `Europeans moving to the US in the 1800s`,
                `About 6 million Black Americans moving from the rural South to Northern cities between nineteen-ten and nineteen seventy`,
                `People moving to the moon`,
                `Animals migrating in spring`,
              ],
              correctIndex: 1,
              explanation: `The Great Migration was a defining American story. Push factors: racism, violence, low wages in the South. Pull factors: factory jobs and (somewhat) more rights in Northern cities. It reshaped American culture in huge ways.` },
            { id: `l11-q7`, format: `multiple-choice`,
              question: `Which of these is a PUSH factor for migration?`,
              options: [
                `A better job opportunity in a new city`,
                `War in your home country`,
                `Family already living somewhere else`,
                `Better schools in a new place`,
              ],
              correctIndex: 1,
              explanation: `War is a push factor — it drives people OUT. The other three options are pull factors — they draw people TOWARD a destination.` },
            { id: `l11-q8`, format: `multiple-choice`,
              question: `Why is understanding push and pull factors useful?`,
              options: [
                `It's not useful`,
                `It helps you understand the actual causes of migration, not just headlines or opinions`,
                `It teaches you to drive`,
                `It tells you the weather`,
              ],
              correctIndex: 1,
              explanation: `Push and pull factors explain the real reasons behind migration. They cut through political slogans and show you the actual conditions driving the movement. Useful for cutting through noise.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `If you had to migrate from where you live, where would you go and why?` },
            { id: `r2`, text: `Which of the four migration stories felt hardest? Why?` },
            { id: `r3`, text: `Does anyone in your family history come from migrants? If so, what was their story?` },
            { id: `r4`, text: `What would have to be happening for you to leave your country entirely?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `At this exact moment, somewhere on Earth, a family is packing up to migrate. Maybe to escape danger. Maybe to find work. Maybe to be near family already settled. Maybe to give their kids a chance. They aren't a number on a politician's chart. They're a family making one of the hardest decisions of their lives. Roughly 280 million people worldwide today are international migrants. Hundreds of millions more are internal migrants. Migration shapes culture, economy, language, food, music. It's not new. It's not optional. It's humanity itself in motion.`,
          familyAdventure: `Together, trace your own family's migration story as far back as you can. Where did your great-grandparents live? Their parents? Were they from somewhere else originally? What pushed them to leave? What pulled them to where they ended up? If you don't know, that's okay — it's worth asking older family members. Most families have an interesting story.`,
          creativePrompt: {
            intro: `Pretend you're a parent making the decision to migrate to a new country. Pick a real or imaginary push factor (war, lack of jobs, climate disaster, etc.) and write about your decision.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Make it specific — describe your home, what you're leaving, where you're going, what you hope for.`,
            open: `Write as much as you want. Tell the full story.`,
            frames: [
              `The push factor making us leave is ___.`,
              `What I'm leaving behind is ___.`,
              `Where we're going and why is ___.`,
              `What I hope for is ___.`,
              `What scares me most is ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Real work, {name}. You can now explain where humans live and why, define push and pull factors, name major migrations in history, and recognize that almost every migration story is about people making hard choices in tough situations. Next lesson we expand even wider — we look at world cultures. The astonishing variety of how humans live, eat, celebrate, and create. — Atlas.`,
          badge: `migration-thinker`,
          badgeName: `Migration Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L11;
