// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L16 — Safety: Protecting Your Body
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L16 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-16`,
      title:     `Safety: Protecting Your Body`,
      duration:  12,
      xpReward:  50,
      badge:     `safety-smart`,
      badgeName: `Safety Smart`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Here's something I want to start with today, {name}: the goal is not to protect you from every risk. The goal is to understand risk clearly enough to make smart choices about it. The people who live the most fully — who adventure, who try things, who build remarkable lives — are not the ones who avoid everything dangerous. They're the ones who know the difference between a calculated risk and a reckless one. Today we're going to look at safety in a grown-up way: understanding hazards, thinking about consequences, and building the habits that protect you without limiting the life you want to live.`,
          headline: `Safety: Protecting Your Body`,
          subtitle: `The people who live most fully and adventurously are not the ones who take no risks — they're the ones who understand risk clearly and make smart choices`,
          visual: `/explorer-assets/wellness/l16-welcome.png`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Safety Isn't About Fear`,
          paragraphs: [
            `The goal isn't to protect you from every risk.`,
            `It's to understand risk clearly enough to make smart choices. The people who live most boldly are not the ones who avoid everything — they're the ones who know the difference between calculated and reckless.`,
          ],
          image: `/explorer-assets/wellness/l16-s1-not-about-fear.png`,
          imageCaption: `The people who live the boldest, most adventurous lives aren't the ones who avoid risk. They're the ones who understand it.`,
          vocab: [
            { word: `safety`,     definition: `Not avoidance. Clear thinking about risk — the kind that lets you live boldly and confidently rather than fearfully.`,
              audioPrompt: `Safety often gets confused with fear, {name}, but they're very different. Fear says: don't do anything that could go wrong. Safety says: understand what could go wrong, reduce the risk where you can, and then live boldly. The people who navigate the world most safely are usually also the ones living the fullest, most adventurous lives. Clear thinking, not fear.` },
            { word: `bold`,       definition: `Living fully, willing to take calculated risks. The opposite of reckless — and the opposite of timid.`,
              audioPrompt: `Boldness isn't the absence of fear, {name} — it's the willingness to act wisely in the presence of it. Bold people climb, travel, try new things, build new things. They don't do it carelessly. They do it after thinking clearly about what could go wrong and deciding the reward is worth it. That's what living bold actually looks like.` },
            { word: `calculated`, definition: `Thought through, evaluated. A calculated risk is one you've assessed clearly — the kind that leads to growth, not harm.`,
              audioPrompt: `Calculated risk is the kind worth taking, {name}. You've thought about what could go wrong. You've considered how likely and how serious. You've taken steps to reduce what you can. And you've decided it's worth it. That's very different from reckless risk, where the thinking didn't happen. Calculated risks are how people build lives they're proud of.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How to Think About Risk`,
          paragraphs: [
            `Before you do something, ask yourself a few questions.`,
            `What could go wrong? How LIKELY is that? How BAD would it be? What can I do to REDUCE the risk? Is it worth it? That's risk assessment — and it leads to bolder, safer lives.`,
          ],
          image: `/explorer-assets/wellness/l16-s2-risk-assessment.png`,
          imageCaption: `Five questions. Asked quietly, before you act. The framework that turns scary uncertainty into clear decisions.`,
          vocab: [
            { word: `risk assessment`, definition: `A thinking process. What could go wrong, how likely, how serious, what can be done to reduce it — and whether the benefit is worth it.`,
              audioPrompt: `Risk assessment is just clear thinking before you act, {name}. What could go wrong here? How bad would it be if it did? What can I do to reduce that chance? And is it worth it? These questions don't make you cautious — they make you smart. People who assess risk well tend to take more worthwhile adventures, not fewer, because they know the difference between calculated and reckless.` },
            { word: `hazard`,          definition: `Something with the potential to cause harm. Recognizing hazards is the first step in good risk assessment — it's observation, not fear.`,
              audioPrompt: `A hazard is simply something with the potential to hurt you, {name} — a slippery surface, an unfamiliar current, a stranger who seems suspicious. Recognizing hazards isn't about being fearful; it's about being observant. The people who navigate the world most confidently are usually the ones who see hazards clearly and respond to them wisely, not the ones who pretend they don't exist.` },
            { word: `consequence`,     definition: `What happens next if something goes wrong. Size and reversibility of consequences shape how much caution makes sense.`,
              audioPrompt: `Consequence is just another word for "what happens next," {name}. Good risk assessment asks: if this goes wrong, what does that actually look like? A scraped knee is a very different consequence from a head injury. The size and reversibility of consequences are what determine how much caution makes sense. Understanding that is the core of safe, confident decision-making.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Road Safety`,
          paragraphs: [
            `Roads are one of the most genuinely risky places most kids go.`,
            `SEATBELTS every time, no exceptions. HELMETS for cycling and scooters — your brain is irreplaceable. EYE CONTACT with drivers before stepping out. Be VISIBLE at night.`,
          ],
          image: `/explorer-assets/wellness/l16-s3-road-safety.png`,
          imageCaption: `Seatbelts. Helmets. Eye contact. Visibility. Four habits that dramatically change outcomes in the highest-stakes environment most people are in regularly.`,
          vocab: [
            { word: `helmet`,     definition: `Protective headgear when cycling or scootering. Dramatically reduces the risk of serious head injury — and your brain is the one organ you can't replace.`,
              audioPrompt: `Your brain is the one organ you cannot replace, {name}, and a helmet is the one habit that protects it when you're on a bike or scooter. The research on helmets is clear: they dramatically reduce the risk of serious head injury in a fall. The inconvenience of wearing one is genuinely small compared to what it protects. This is the habit worth making non-negotiable, every time.` },
            { word: `seatbelt`,   definition: `A vehicle restraint. One of the most effective safety devices ever invented. Three seconds to click in. No exceptions, every ride.`,
              audioPrompt: `A seatbelt is one of the simplest, most effective safety habits in the world, {name}. In a sudden stop or collision, the forces involved are enormous — and a seatbelt keeps your body from moving with them. It takes three seconds to click in. Making it completely automatic — no exceptions, every ride — is one of the highest-return safety habits you can build.` },
            { word: `visibility`, definition: `Being clearly seen by drivers. Especially important at night — bright colors, reflective gear, lights. Drivers can only respond to what they can see.`,
              audioPrompt: `Near roads at night, {name}, the most dangerous thing is being invisible. Drivers can only respond to what they can see — and a pedestrian or cyclist in dark clothing can be almost invisible until it's too late. Bright colors and reflective gear are simple, inexpensive ways to make yourself visible. In an environment where the stakes are high, being seen is one of the most important safety steps there is.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Home and Outdoor Safety`,
          paragraphs: [
            `Most accidents happen in familiar places — which is why people underestimate them.`,
            `FALLS (stairs, climbing). BURNS (stoves, flames). POISONING (medicines, cleaners — know your poison control number). WATER (never alone, never unfamiliar conditions). It's awareness, not fear.`,
          ],
          image: `/explorer-assets/wellness/l16-s4-home-outdoor.png`,
          imageCaption: `Familiar doesn't mean safe. Most accidents happen at home or in places we know well. Awareness — not fear — is the protection.`,
          vocab: [
            { word: `awareness`,   definition: `Active attention to your surroundings. The safety tool that goes everywhere with you — quieter than fear, more useful than panic.`,
              audioPrompt: `Awareness is the safety tool that goes everywhere with you, {name}. It's not about being scared of everything — it's about staying present and noticing what's actually happening around you. What's on the stove. Where the currents are in the water. Whether a driver has seen you. That noticing is quiet, fast, and it makes an enormous difference to outcomes.` },
            { word: `toxic`,       definition: `Harmful to the body. Some medicines, cleaning products, and plants are toxic if touched or swallowed. Recognition is practical, not scary.`,
              audioPrompt: `Toxic means harmful to the body, {name}, and it applies to more things in a typical home than most kids realize: medicines taken in the wrong dose, cleaning products, certain garden plants. Knowing what's toxic in your environment isn't scary — it's practical. It means you know what to handle carefully and what numbers to call if something does go wrong. That's knowledge worth having.` },
            { word: `preparation`, definition: `Knowing emergency numbers, having a plan, understanding your environment — before something goes wrong. The work safety habits do.`,
              audioPrompt: `Preparation is what separates a small incident from a bigger one, {name}. Knowing your local emergency number. Knowing where the first aid kit is. Knowing the plan if something goes wrong. None of these take long to learn. All of them dramatically change outcomes in the moment they're needed. Preparation isn't fear — it's competence, ready to use.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Online Safety`,
          paragraphs: [
            `Online safety follows the same principles as street safety.`,
            `Never share LOCATION, address, school, or routine with people you don't know in person. Never agree to MEET someone you only know online without a trusted adult. Online identities can be fake.`,
          ],
          image: `/explorer-assets/wellness/l16-s5-online-safety.png`,
          imageCaption: `The same instincts that keep you safe in person apply online. Protect your information. Don't trust online-only strangers. Tell someone if anything feels off.`,
          vocab: [
            { word: `personal information`, definition: `Your name, address, school, location, daily routine. Yours to protect online the same way you'd protect them from a stranger in person.`,
              audioPrompt: `Your personal information is yours to protect, {name}. Your address, your school name, your location, your daily routine — these are details that belong in the hands of people you actually know and trust in real life. Online, they can reach people you've never met. The same instinct that would stop you from giving your address to a stranger on the street applies equally in any online space.` },
            { word: `verify`,               definition: `Confirm someone is who they claim to be. Not possible online the way it is in person — which is why caution with online-only contacts matters.`,
              audioPrompt: `Online, you cannot verify who someone actually is, {name} — only who they say they are. People can present any version of themselves in text or photos. That gap between claimed identity and real identity is exactly why the same caution you'd apply to a stranger in person applies online. If you've never met someone in the real world, you genuinely don't know them.` },
            { word: `stranger`,             definition: `Anyone you haven't met in real life. The same stranger-safety principles apply online and off — protect your information, never meet alone.`,
              audioPrompt: `Online or off, a stranger is anyone you haven't actually met in real life, {name}. Chatting with someone online for months doesn't make them not a stranger — it just makes you feel like they aren't. The principles that have always kept people safe with strangers apply just as much online: protect your information, never agree to meet alone, tell a trusted adult if anything feels off.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `When Something Feels Wrong`,
          paragraphs: [
            `If something feels wrong — anywhere, anytime — tell a TRUSTED ADULT.`,
            `They can help you see it clearly and figure out what to do. You don't have to handle uncomfortable situations alone. Knowing your emergency numbers and having a family plan matters.`,
          ],
          image: `/explorer-assets/wellness/l16-s6-something-wrong.png`,
          imageCaption: `Your instincts are good information. If something feels off, that's worth listening to. Speaking up to a trusted adult is strength, not getting in trouble.`,
          vocab: [
            { word: `trusted adult`,  definition: `A safe, reliable person in your life. Always the right next step when something feels wrong, uncomfortable, or threatening — anywhere, anytime.`,
              audioPrompt: `If something online feels uncomfortable or wrong, {name}, a trusted adult is always the right next step. Not because you're in trouble — but because they can help you see it clearly and figure out what to do. You should never feel like you have to handle an uncomfortable situation alone. That's exactly what trusted adults are for.` },
            { word: `emergency plan`, definition: `Knowing who to call, where to meet, what to do in different scenarios. Discussed and practiced before you need it.`,
              audioPrompt: `An emergency plan is something every family benefits from having, {name} — a shared understanding of who to call, where to meet, what to do if something goes wrong. Talking about it ahead of time means everyone knows what to do in the moment. That preparation, done once when nothing is happening, can make an enormous difference when something does.` },
            { word: `speak up`,       definition: `Telling someone when something feels wrong. Strength, not weakness — and never something you have to handle alone.`,
              audioPrompt: `Speaking up when something feels wrong is strength, {name} — not getting someone in trouble, not overreacting, not being dramatic. Your instincts are good information. When something feels off, that's worth taking seriously and bringing to a trusted adult. They want you to tell them. They'd rather know and have it turn out to be nothing than not know when something was real.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `smart`,
              label: `🛡️ Smart Safety Habit`,
              color: `#34D399`,
            },
            {
              id: `risk`,
              label: `⚠️ Puts You at Unnecessary Risk`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l16-g1`,
              image: `l16-game-1.png`,
              label: `Wearing a properly fitted helmet every single time you ride a bike, no exceptions.`,
              matchPhrase: `Helmets dramatically reduce the risk of head injury — and your brain is the one thing you absolutely cannot replace. This habit is worth making non-negotiable.`,
              correctMatch: `smart`,
            },
            {
              id: `l16-g2`,
              image: `l16-game-2.png`,
              label: `Looking both ways and making eye contact with a driver before stepping into the road.`,
              matchPhrase: `Never assume a driver has seen you — eye contact is the only confirmation. This simple habit can make the difference in an environment where the stakes are genuinely high.`,
              correctMatch: `smart`,
            },
            {
              id: `l16-g3`,
              image: `l16-game-3.png`,
              label: `Heading out alone without telling any trusted adult where you're going or when you'll be back.`,
              matchPhrase: `Letting someone you trust know your plans is one of the simplest and most effective safety habits there is — if something goes wrong, someone knows where to look.`,
              correctMatch: `risk`,
            },
            {
              id: `l16-g4`,
              image: `l16-game-4.png`,
              label: `Agreeing to meet in person someone you only know online, without telling a parent or trusted adult.`,
              matchPhrase: `People can present themselves very differently online than they are in reality. The same stranger-safety principles that apply in person apply online — your safety always comes first.`,
              correctMatch: `risk`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l16-q1`,
              format: `multiple-choice`,
              question: `What is risk assessment?`,
              options: [
                `Avoiding any activity that has any chance of going wrong`,
                `Evaluating what could go wrong, how likely and serious it would be, what you can do to reduce the risk, and whether the benefit is worth it`,
                `Checking whether something is allowed by the rules before doing it`,
                `Asking an adult to decide for you whether an activity is safe`,
              ],
              correctIndex: 1,
              explanation: `Risk assessment is a practical thinking skill — not about fear, but about clarity. When you understand what could go wrong and how to reduce that risk, you can make confident, informed decisions. The goal is not to avoid everything — it's to live boldly and wisely at the same time.`,
            },
            {
              id: `l16-q2`,
              format: `multiple-choice`,
              question: `Why is wearing a helmet one of the most important cycling safety habits?`,
              options: [
                `Because it is required by law in all countries`,
                `Because it dramatically reduces the risk of serious head injury — and your brain is irreplaceable`,
                `Because it makes you more visible to drivers on the road`,
                `Because it protects your whole body from the impact of a fall`,
              ],
              correctIndex: 1,
              explanation: `Helmets dramatically reduce the risk of serious head injury in a fall or collision. Your brain is the one organ you absolutely cannot replace or repair after severe damage — which is exactly why this habit is worth making non-negotiable, every time, no exceptions.`,
            },
            {
              id: `l16-q3`,
              format: `multiple-choice`,
              question: `Why does online safety connect directly to physical safety?`,
              options: [
                `Because spending too much time online makes you less physically active`,
                `Because people can build false trust online before arranging dangerous in-person meetings — the same principles that protect you in person apply online too`,
                `Because online platforms collect data that can be sold to advertisers`,
                `Because screen time affects your eyesight over time`,
              ],
              correctIndex: 1,
              explanation: `Online and physical safety are connected because real-world consequences can follow from online interactions. People can present themselves very differently online than they really are, and build false trust before suggesting an in-person meeting. The same instincts and principles that protect you with strangers in person — protecting your location, your information, and your safety — apply equally online.`,
            },
            {
              id: `l16-q4`,
              format: `true-false`,
              question: `Safety is not about avoiding all risk — it's about understanding risk clearly so you can live boldly and make smart choices.`,
              correctAnswer: true,
              explanation: `True. The goal of safety awareness is not to become fearful or stop doing things — it's to think clearly about risk so you can make informed decisions. People who understand risk well tend to live both more safely and more confidently, because they're not guessing. They know what to watch for, what to avoid, and when something is genuinely worth a small risk.`,
            },
            {
              id: `l16-q5`,
              format: `fill-blank`,
              question: `Good risk assessment asks: what could go wrong, how likely is it, how bad would it be — and what can I do to ___ the risk?`,
              options: [
                `reduce`,
                `avoid`,
                `ignore`,
                `celebrate`,
              ],
              correctIndex: 0,
              explanation: `Reducing risk — not eliminating it entirely — is the realistic and empowering goal of safety thinking. You assess what could go wrong, consider how serious it could be, and then ask what practical steps you can take to make it less likely or less severe. This is the thinking behind seatbelts, helmets, eye contact before crossing roads, and not sharing personal information online.`,
            },
            {
              id: `l16-q6`,
              format: `multiple-choice`,
              question: `Why does online safety connect to physical safety in the same way?`,
              options: [
                `Because phones can be tracked by satellites`,
                `Because the same principles that keep you safe with strangers in person — protecting your information, your location, and your safety — apply online too`,
                `Because online platforms are required by law to verify identities`,
                `Because most online interactions become in-person ones`,
              ],
              correctIndex: 1,
              explanation: `Online and physical safety share the same underlying logic: protect your personal information, be cautious with people you don't know in person, and never put yourself in a vulnerable position with a stranger. Whether the stranger is on a street corner or a chat app, the same principles apply — your information, your location, and your safety are yours to protect.`,
            },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Safety experts, paramedics, and public health researchers consistently find the same thing: most serious accidents are preventable with simple, consistent habits. The gap between a safe outcome and a dangerous one is often just one small decision — a helmet, a seatbelt, a quick look before stepping out. These habits are worth making automatic.`,
          familyAdventure: `Do a family safety check together. Walk through your home and identify any hazards you haven't thought about. Talk about your family emergency plan: who to call, where to meet, what to do in different scenarios. Discuss online safety as a family — what information is OK to share and with whom. Knowledge shared across the whole family makes everyone safer.`,
          creativePrompt: `Do a quick safety audit of your everyday routine. Do you always wear your seatbelt? Do you have a helmet and do you wear it every time? Do you know your home address and a trusted adult's phone number? Do you know your local emergency number? These are the basics — check which ones you have solid, and which ones you want to strengthen.`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that safety isn't about fear — it's about awareness. The people who live most fully and adventurously are not the ones who take no risks — they're the ones who understand risk clearly and make smart choices. That awareness is yours now. Terra is so proud to walk this path with you.`,
          badge: `safety-smart`,
          badgeName: `Safety Smart`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L16.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L16] Loaded: "Safety: Protecting Your Body" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l16-s1-not-about-fear.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-s2-risk-assessment.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-s3-road-safety.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-s4-home-outdoor.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-s5-online-safety.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-s6-something-wrong.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L16] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L16] One or more magazine assets missing'));
}
