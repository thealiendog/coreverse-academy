// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L05 — Being a Good Citizen
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Civ.6.K-2 / D2.Civ.10.K-2 / D4.Civ.7.K-2 (civic participation)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L05 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-05`,
      title:     `Being a Good Citizen`,
      duration:  12,
      xpReward:  50,
      badge:     `good-citizen-explorer`,
      badgeName: `Good Citizen Explorer`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. You've learned about communities, rules, government, rights, and responsibilities. Today, we put it all together. We answer the question — what does it mean to be a GOOD CITIZEN? And here's the best part — you don't have to wait until you're a grown-up. You can be a good citizen RIGHT NOW. Today. Let's see how.`,
          headline: `Being a Good Citizen`,
          subtitle: `What YOU can do — right now — to make your community better`,
          visual: `/explorer-assets/social-studies/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's a CITIZEN?`,
          paragraphs: [
            `A CITIZEN is a MEMBER of a community. Everyone in a community is a citizen — including kids.`,
            `You're a citizen of your FAMILY. Your SCHOOL. Your NEIGHBORHOOD. Your CITY. Your COUNTRY. You're a citizen of EARTH. Being a citizen means you BELONG to that community — and the community shapes who you are. A GOOD citizen is one who makes their community BETTER. They follow rules. They help others. They take care of where they live. They speak up for what's right. Good citizens come in every age, color, and background. You can be one — starting today.`,
          ],
          image: `/explorer-assets/social-studies/l05-s1-citizen.webp`,
          imageCaption: `A CITIZEN is a member of a community. You're a citizen of family, school, city, country, Earth. A good citizen makes it better.`,
          vocab: [
            { word: `citizen`,        definition: `A MEMBER of a community. You're a CITIZEN of many communities at once.`,
              audioPrompt: `A citizen, {name}, is a member of a community. You're a citizen of many communities at once. Your family. Your school. Your neighborhood. Your country. Earth. Being a citizen means you belong. You have rights — and responsibilities. You're part of how your community works. Kids are citizens too — full members of their communities.` },
            { word: `belong`,         definition: `To be PART of a community. Citizens BELONG to their communities.`,
              audioPrompt: `To belong, {name}, is to be part of a community. Citizens belong to their communities. You belong to your school. You belong to your country. Belonging matters. It means you have a place. It means you have a voice. It means the community is partly yours — and you're partly the community's. We all belong somewhere.` },
            { word: `good citizen`,   definition: `Someone who makes their community BETTER. A GOOD CITIZEN helps and contributes.`,
              audioPrompt: `A good citizen, {name}, is someone who makes their community better. They don't just take from their community — they also give back. They help others. They follow rules. They care for shared spaces. They speak up for what's right. Anyone can be a good citizen. Kids, adults, elders. It's about the choices you make every day.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Action 1: BE KIND to Others`,
          paragraphs: [
            `The FIRST and easiest way to be a good citizen — BE KIND.`,
            `Smile at someone who looks lonely. Say nice things to friends. Help your sister or brother when they're stuck. Hold the door for someone carrying lots of stuff. Share when you can. Notice when someone seems sad and ask if they're okay. Use kind words instead of mean ones. KINDNESS COSTS NOTHING — but it MAKES SOMEONE'S DAY. Imagine if everyone in your community did ONE kind thing each day. That would be MILLIONS of kind acts every day. Kindness is the heart of being a good citizen.`,
          ],
          image: `/explorer-assets/social-studies/l05-s2-kindness.webp`,
          imageCaption: `Action 1: BE KIND. Smile. Help. Share. Listen. Kind words. Kindness costs nothing but changes everything.`,
          vocab: [
            { word: `kindness`,       definition: `Being NICE and CARING. KINDNESS is the easiest way to be a good citizen.`,
              audioPrompt: `Kindness, {name}, is being nice and caring toward others. Kindness is the easiest way to be a good citizen. You don't need money. You don't need to be tall or strong. You just need to choose kindness in small daily moments. A smile. A nice word. A helpful hand. Kindness is free, simple, and powerful.` },
            { word: `notice`,         definition: `To PAY ATTENTION to others. NOTICING when someone needs help is part of kindness.`,
              audioPrompt: `To notice, {name}, is to pay attention to others. Noticing when someone needs help is part of kindness. Look around. Is someone alone at recess? Are they struggling with a task? Do they seem sad? Just noticing matters. Then you can do something — ask if they're okay, sit with them, help them. Noticing is the first step.` },
            { word: `costs nothing`,  definition: `Kindness COSTS NOTHING — no money needed — but is HUGELY valuable.`,
              audioPrompt: `Costs nothing, {name}, means kindness costs no money but is hugely valuable. You don't need to buy anything to be kind. You just need to choose it in moments throughout your day. Yet a kind word might change someone's day. A helpful hand might mean everything to them. The most valuable things in life often cost nothing.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Action 2: HELP Your Community`,
          paragraphs: [
            `Beyond your individual kindness, you can HELP YOUR WHOLE COMMUNITY.`,
            `Pick up TRASH you see in the park. Help an OLDER neighbor carry groceries. PLANT something in a garden. Donate a TOY you don't play with anymore to kids who don't have many. VOLUNTEER with your family at a local food pantry or animal shelter. Help OUT at school events. Walk a friend's dog when they can't. These actions take a LITTLE bit of time but make a BIG difference. Lots of small helping acts add up to a stronger, kinder, cleaner community. You don't have to do everything — just SOMETHING.`,
          ],
          image: `/explorer-assets/social-studies/l05-s3-help-community.webp`,
          imageCaption: `Action 2: HELP COMMUNITY. Pick up trash. Help neighbors. Volunteer. Donate. Small acts, big difference.`,
          vocab: [
            { word: `volunteer`,      definition: `To CHOOSE to help without being paid. VOLUNTEERING is a great way to help your community.`,
              audioPrompt: `To volunteer, {name}, is to choose to help without being paid. Volunteering is a great way to help your community. Animal shelters need help walking dogs. Food pantries need help packing boxes. Parks need help picking up trash. Older neighbors need help with chores. Kids can volunteer too — with a parent or trusted adult. Volunteering teaches you a lot and helps others.` },
            { word: `donate`,         definition: `To GIVE something to help others. DONATING toys, clothes, or food helps people in need.`,
              audioPrompt: `To donate, {name}, is to give something to help others. Donating toys you don't play with anymore. Donating clothes you've grown out of. Donating food cans for people who don't have enough. Donating books to a library. Donations help people who don't have as much. They also teach you that giving feels good — sometimes even better than getting.` },
            { word: `add up`,         definition: `When many SMALL THINGS combine into something BIG. Small good acts ADD UP.`,
              audioPrompt: `To add up, {name}, means when many small things combine into something big. Small good acts add up. One person picking up one piece of trash isn't much. But if everyone in the community picks up one piece of trash, the whole community is cleaner. Same with kindness. Same with helping. Your one act counts. Combined with millions of others, change happens.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Action 3: CARE for the Earth`,
          paragraphs: [
            `Earth is our shared home. Good citizens CARE for it.`,
            `RECYCLE — paper, cans, plastic bottles. Don't throw them away if your community recycles. SAVE WATER — turn off the tap while brushing teeth. Don't take super long showers. SAVE ENERGY — turn off lights when you leave a room. Wear a sweater instead of turning up the heat. WALK or BIKE when you can — instead of getting a ride. RESPECT NATURE — don't trample plants or hurt animals. PROTECT LIVING THINGS — feed birds, plant flowers, help bees. Earth gives us everything. Caring for it is one of the most important things any citizen — kid or adult — can do.`,
          ],
          image: `/explorer-assets/social-studies/l05-s4-care-environment.webp`,
          imageCaption: `Action 3: CARE FOR EARTH. Recycle. Save water and energy. Walk or bike. Respect nature. Protect living things.`,
          vocab: [
            { word: `recycle`,        definition: `To USE something AGAIN as a new product. RECYCLING saves resources.`,
              audioPrompt: `To recycle, {name}, is to use something again as a new product. Recycling saves resources. Used paper becomes new paper. Used plastic becomes new plastic. Used cans become new cans. If you don't recycle, that material just goes to a landfill and might pollute Earth. If you recycle, the same material gets to live many lives. Recycling is one of the easiest ways to care for Earth.` },
            { word: `save`,           definition: `To NOT WASTE. SAVING water, energy, and resources helps Earth.`,
              audioPrompt: `To save, {name}, means to not waste. Saving water, energy, and resources helps Earth. Turn off lights when you leave. Take shorter showers. Don't run the tap while brushing. These small habits, multiplied by everyone, save HUGE amounts of resources for the whole planet. Saving isn't about being cheap — it's about being smart and caring.` },
            { word: `protect`,        definition: `To KEEP SAFE. Citizens PROTECT living things and the environment.`,
              audioPrompt: `To protect, {name}, is to keep safe. Citizens protect living things and the environment. Birds, bugs, plants, trees, parks, beaches, oceans, forests — all need protection. Sometimes that means putting out water for bees. Sometimes it means not littering. Sometimes it means voting for laws that protect Earth. Even small actions add up. Earth needs all of us protecting her.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Action 4: SPEAK UP for What's Right`,
          paragraphs: [
            `Sometimes being a good citizen means SPEAKING UP for what's RIGHT.`,
            `If you see SOMEONE BEING BULLIED — say something kind to them, tell a trusted adult, or be their friend. If you see UNFAIRNESS — point it out to someone who can help. If you have an IDEA for making your community better — share it with parents, teachers, or other adults. Some adults speak up in BIG ways — they protest, they write letters, they run for office. KIDS can speak up too. In small but important ways. Your voice matters. Use it. The world changes when people speak up. History is full of brave people — kids and adults — who spoke up for what was right. You can too.`,
          ],
          image: `/explorer-assets/social-studies/l05-s5-speak-up.webp`,
          imageCaption: `Action 4: SPEAK UP. For someone being bullied. Against unfairness. For your ideas. Your voice matters.`,
          vocab: [
            { word: `speak up`,       definition: `To USE YOUR VOICE to say something IMPORTANT. SPEAKING UP for what's right matters.`,
              audioPrompt: `To speak up, {name}, is to use your voice to say something important. Speaking up for what's right matters. If you see someone being treated unfairly — say something or get help. If you have an idea — share it. If something feels wrong — talk about it with a trusted adult. Speaking up doesn't have to be loud. It can be quiet, brave, and kind.` },
            { word: `unfair`,         definition: `When something is NOT FAIR. Citizens speak up when they see something UNFAIR.`,
              audioPrompt: `Unfair, {name}, means when something is not fair. Citizens speak up when they see something unfair. Like when someone gets bullied just because they're different. Or when one group gets less than another for no reason. Unfairness happens in big and small ways. Speaking up — even just to a trusted adult — is how change starts.` },
            { word: `your voice`,     definition: `Your IDEAS and FEELINGS expressed. YOUR VOICE matters — use it.`,
              audioPrompt: `Your voice, {name}, is your ideas and feelings expressed. Your voice matters. Use it. You don't need to wait until you're older. You have valuable ideas and opinions right now. Share them with adults who listen. With friends. With anyone who asks. Sometimes the youngest voices see things most clearly. Don't be afraid to use yours.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Small Acts. BIG Difference.`,
          paragraphs: [
            `Here's the most important thing to remember — YOU DON'T HAVE TO BE BIG to make a BIG DIFFERENCE.`,
            `One kind word might brighten someone's whole day. One piece of trash you pick up makes the park cleaner. One time you stand up for someone might change their life. One time you help an elder might mean the world. The biggest changes in history often started with SMALL ACTIONS by ordinary people. Famous adults who changed the world were once kids — kids like YOU — who decided to be kind, to help, to speak up. YOU are already a good citizen. Just keep going. The world is better because of people like you.`,
          ],
          image: `/explorer-assets/social-studies/l05-s6-small-big-difference.webp`,
          imageCaption: `Small acts. Big difference. One kind word, one pickup, one stand-up. Big change starts small. You matter.`,
          vocab: [
            { word: `make a difference`, definition: `To CHANGE things for the BETTER. You MAKE A DIFFERENCE through your actions.`,
              audioPrompt: `Make a difference, {name}, means to change things for the better. You make a difference through your actions. Every kind word. Every help. Every speaking up. Every small act of caring. They add up to real change in your community. You don't need to wait to be older to make a difference. You're making a difference right now.` },
            { word: `start small`,    definition: `Begin with EASY actions. Big change STARTS SMALL — with daily kind acts.`,
              audioPrompt: `Start small, {name}, means begin with easy actions. Big change starts small. You don't need to do everything at once. Pick ONE thing — be kind today, pick up one piece of trash, help one person. Then tomorrow do another small thing. Keep going. Over time, your small acts add up to real changes. That's how every big change in history happened.` },
            { word: `you matter`,     definition: `Your ACTIONS and VOICE matter. YOU are a real citizen with real power.`,
              audioPrompt: `You matter, {name}. Your actions matter. Your voice matters. You're a real citizen with real power — even at your age. Maybe especially at your age. Kids see things adults miss. Kids care fiercely. Kids change the world. You're one of those kids. The world is better because you're in it. Keep being kind. Keep helping. Keep speaking up. You matter.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `KIDS can help their communities — even right now, before they're grown-ups.`,
              matchPhrase: `Yes! Kids can be good citizens right now. Be kind. Help neighbors. Pick up trash. Care for animals. Speak up. You don't have to wait to make a difference.`,
              correctMatch: `fact` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `SMALL acts of kindness and helping really do matter — they add up to big changes.`,
              matchPhrase: `True! One kind word. One pickup. One stand-up. Each small act matters. When millions of people do small kind acts, the world changes. Big change starts small.`,
              correctMatch: `fact` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `Only ADULTS can help their communities — kids can't do anything useful.`,
              matchPhrase: `Not at all! Kids can do tons. Be kind. Help neighbors. Volunteer with family. Care for Earth. Speak up. Donate. Kids are real citizens with real power. Today.`,
              correctMatch: `myth` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `Small acts of kindness are WORTHLESS — they don't make any real difference.`,
              matchPhrase: `Definitely not! Small acts are HUGELY important. They add up. They spread. They change people's days. They start movements. Don't ever doubt the power of small acts.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is a CITIZEN?`,
              options: [`A type of fruit`, `A MEMBER of a community — including kids`, `Only adults`, `Only government workers`],
              correctIndex: 1,
              explanation: `A citizen is a member of a community. You're a citizen of family, school, neighborhood, city, country, Earth. Kids are citizens too. Being a citizen means belonging.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `What's the EASIEST way to be a good citizen?`,
              options: [`Run for president`, `BE KIND to others — every day`, `Buy expensive things`, `Wait until you're older`],
              correctIndex: 1,
              explanation: `Be kind! Kindness costs nothing and makes someone's day. Smile, help, listen, share. Kids can be kind every day. It's the heart of being a good citizen.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `Which is an example of CARING FOR THE EARTH?`,
              options: [`Wasting water`, `RECYCLING, saving water and energy, respecting nature`, `Leaving lights on`, `Throwing trash on the ground`],
              correctIndex: 1,
              explanation: `Recycle. Save water. Save energy. Walk or bike. Respect nature. Protect plants and animals. Earth needs us to care for it. Every small action helps.` },
            { id: `l05-q4`, format: `true-false`,
              question: `Kids can SPEAK UP for what's right — even if it's just telling a trusted adult about something unfair.`,
              correctAnswer: true,
              explanation: `True! Kids can speak up. Tell a trusted adult if you see bullying or unfairness. Share your ideas. Use your voice. Speaking up doesn't have to be loud — it can be brave and quiet.` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `Even SMALL acts of kindness ___ — they add up to real change.`,
              options: [`matter`, `disappear`, `hide`, `sleep`],
              correctIndex: 0,
              explanation: `Matter! Small acts matter. They add up. They spread. One kind word, one helping hand, one piece of trash picked up. Multiplied by many people, they change the world.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `When can YOU start being a good citizen?`,
              options: [`When you're an adult`, `RIGHT NOW — today, you can be a good citizen`, `On your 18th birthday`, `When you have a job`],
              correctIndex: 1,
              explanation: `Right now! Today. You don't have to wait. Be kind. Help. Care for Earth. Speak up. You're already a real citizen with real power. The world is better because of kids like you.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something inspiring, {name}. Many great changes in history started with KIDS or YOUNG PEOPLE who decided to act. Malala Yousafzai stood up for girls' education when she was just 11. Greta Thunberg started talking about climate change at 15. Ruby Bridges helped end school segregation at age 6. Many great leaders, scientists, and inventors started as curious kids who wanted to help their communities. You don't have to be famous to make a difference. Most heroes are ordinary people doing kind things daily. Maybe one day you'll be the person someone tells stories about. Today is a good day to start.`,
          familyAdventure: `Pick ONE thing your family can do TOGETHER to be good citizens this week. Examples: Pick up trash at a local park. Bake cookies for a neighbor. Donate old toys or clothes. Volunteer at an animal shelter. Plant a flower. Write a kind letter to a teacher. Do it together. Talk about how it felt. Notice — being a good citizen feels GOOD.`,
          creativePrompt: `Draw YOURSELF as a SUPER CITIZEN. Show yourself doing 3 things to help your community — being kind, helping, caring for Earth, or speaking up. Maybe you're picking up trash with a magical bag. Maybe you're shielding a friend from being bullied. Maybe you're planting trees that grow into a forest. Be the citizen you want to be. The picture is your reminder.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Well done, {name}. You now know what it means to be a GOOD CITIZEN. BE KIND to others. HELP your community. CARE for the Earth. SPEAK UP for what's right. SMALL acts make BIG differences. Kids — including YOU — are real citizens with real power. You can start today. The world is better because of kids like you. CIVICS BLOCK COMPLETE! Up next — Geography. See you there. — Atlas 🐻`,
          badge: `good-citizen-explorer`,
          badgeName: `Good Citizen Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L05] Loaded: "Being a Good Citizen" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
