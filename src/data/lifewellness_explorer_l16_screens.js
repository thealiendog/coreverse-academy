// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L16 — Safety: Protecting Your Body
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L16 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-16',
      title:     `Safety: Protecting Your Body`,
      duration:  12,
      xpReward:  50,
      badge:     'safety-smart',
      badgeName: 'Safety Smart',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l16-welcome',
          type:     'welcome',
          headline: `Safety: Protecting Your Body`,
          subtitle: `The people who live most fully and adventurously are not the ones who take no risks — they're the ones who understand risk clearly and make smart choices`,
          visual:   '/explorer-assets/wellness/l16-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l16-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What is risk assessment?`,
            body: `Safety isn't about avoiding everything that could go wrong — it's about **thinking clearly about risk**. Whenever you're about to do something, you can ask yourself a few simple questions: What could go wrong? How likely is that? How bad would it be if it did? What can I do to reduce that risk? And is the benefit worth it? This is **risk assessment** — a skill that applies to everything from crossing a road to deciding whether to try something new. The goal is not fear — it's awareness. People who understand risk clearly tend to live **more confidently and more safely at the same time**, because they're not guessing. They're thinking.`,
            image:   '/explorer-assets/wellness/l16-magazine-1.png',
            caption: `Risk assessment: not about fear — about thinking clearly so you can live boldly`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l16-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Road safety: the rules that protect you`,
            body: `Roads are one of the most genuinely risky environments most of us encounter regularly. **Seatbelts significantly reduce the risk** of serious injury in a crash — buckle up every time, no exceptions. **Helmets dramatically reduce the risk of head injury** when cycling or using a scooter — your brain is irreplaceable. When crossing a road, never assume a driver sees you — **make eye contact before stepping out**. Watch out for drivers who appear distracted or impaired. At night, be visible — wear bright colours or reflective gear. These habits are not about being fearful. They're about being smart in an environment where the stakes are high.`,
            image:   '/explorer-assets/wellness/l16-magazine-2.png',
            caption: `Seatbelts, helmets, eye contact before crossing — simple habits that dramatically change outcomes`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l16-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Home and outdoor safety`,
            body: `Many accidents happen at home or in familiar outdoor places — which is part of why people underestimate the risk. **Falls** are the most common cause of injury for children — be aware on stairs, rooftops, and climbing structures. **Burns** happen fast — take care around hot surfaces, stoves, and open flames. **Poisoning** is a real risk — medicines, cleaning products, and some garden plants can be toxic if touched or swallowed. Know your local **poison control number**. Near **water**, never swim alone or in unfamiliar conditions without a trusted adult present. Outdoors, know how to recognise and respond to **weather changes**, uneven terrain, and wildlife. None of these require fear — just awareness.`,
            image:   '/explorer-assets/wellness/l16-magazine-3.png',
            caption: `Most accidents happen in familiar places — awareness, not fear, is the best protection`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l16-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Online safety as physical safety`,
            body: `Online safety and physical safety are connected by exactly the same principles. The same street-safety wisdom applies online: **never share your location, home address, school name, or daily routine** with people you don't know in person. **Never agree to meet someone you only know online** without telling a trusted adult — people can present themselves very differently online than they are in reality. Treat your personal information online the way you'd treat your address in the physical world: it's yours, and you don't give it out to strangers. If something online feels uncomfortable or wrong, tell a trusted adult. Your digital self deserves the same protection as your physical self.`,
            image:   '/explorer-assets/wellness/l16-magazine-4.png',
            caption: `The same street-safety principles apply online — your information, your location, and your safety`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l16-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'smart',  label: `🛡️ Smart Safety Habit`,             color: '#34D399' },
              { id: 'risk',   label: `⚠️ Puts You at Unnecessary Risk`,   color: '#F87171' },
            ],
            items: [
              {
                id:            'l16-g1',
                image:         'l16-game-1.png',
                label:         `Wearing a properly fitted helmet every single time you ride a bike, no exceptions.`,
                correctBucket: 'smart',
                matchPhrase:   `Helmets dramatically reduce the risk of head injury — and your brain is the one thing you absolutely cannot replace. This habit is worth making non-negotiable.`,
              },
              {
                id:            'l16-g2',
                image:         'l16-game-2.png',
                label:         `Looking both ways and making eye contact with a driver before stepping into the road.`,
                correctBucket: 'smart',
                matchPhrase:   `Never assume a driver has seen you — eye contact is the only confirmation. This simple habit can make the difference in an environment where the stakes are genuinely high.`,
              },
              {
                id:            'l16-g3',
                image:         'l16-game-3.png',
                label:         `Heading out alone without telling any trusted adult where you're going or when you'll be back.`,
                correctBucket: 'risk',
                matchPhrase:   `Letting someone you trust know your plans is one of the simplest and most effective safety habits there is — if something goes wrong, someone knows where to look.`,
              },
              {
                id:            'l16-g4',
                image:         'l16-game-4.png',
                label:         `Agreeing to meet in person someone you only know online, without telling a parent or trusted adult.`,
                correctBucket: 'risk',
                matchPhrase:   `People can present themselves very differently online than they are in reality. The same stranger-safety principles that apply in person apply online — your safety always comes first.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l16-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l16-q1',
              format:       'mc',
              question:     `What is risk assessment?`,
              options:      [
                `Avoiding any activity that has any chance of going wrong`,
                `Evaluating what could go wrong, how likely and serious it would be, what you can do to reduce the risk, and whether the benefit is worth it`,
                `Checking whether something is allowed by the rules before doing it`,
                `Asking an adult to decide for you whether an activity is safe`,
              ],
              correctIndex: 1,
              explanation:  `Risk assessment is a practical thinking skill — not about fear, but about clarity. When you understand what could go wrong and how to reduce that risk, you can make confident, informed decisions. The goal is not to avoid everything — it's to live boldly and wisely at the same time.`,
            },

            // Q2 — MC (replaced — Flag 4)
            {
              id:           'l16-q2',
              format:       'mc',
              question:     `Why is wearing a helmet one of the most important cycling safety habits?`,
              options:      [
                `Because it is required by law in all countries`,
                `Because it dramatically reduces the risk of serious head injury — and your brain is irreplaceable`,
                `Because it makes you more visible to drivers on the road`,
                `Because it protects your whole body from the impact of a fall`,
              ],
              correctIndex: 1,
              explanation:  `Helmets dramatically reduce the risk of serious head injury in a fall or collision. Your brain is the one organ you absolutely cannot replace or repair after severe damage — which is exactly why this habit is worth making non-negotiable, every time, no exceptions.`,
            },

            // Q3 — MC (source)
            {
              id:           'l16-q3',
              format:       'mc',
              question:     `Why does online safety connect directly to physical safety?`,
              options:      [
                `Because spending too much time online makes you less physically active`,
                `Because people can build false trust online before arranging dangerous in-person meetings — the same principles that protect you in person apply online too`,
                `Because online platforms collect data that can be sold to advertisers`,
                `Because screen time affects your eyesight over time`,
              ],
              correctIndex: 1,
              explanation:  `Online and physical safety are connected because real-world consequences can follow from online interactions. People can present themselves very differently online than they really are, and build false trust before suggesting an in-person meeting. The same instincts and principles that protect you with strangers in person — protecting your location, your information, and your safety — apply equally online.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l16-q4',
              format:       'tf',
              question:     `Safety is not about avoiding all risk — it's about understanding risk clearly so you can live boldly and make smart choices.`,
              correctAnswer: true,
              explanation:  `True. The goal of safety awareness is not to become fearful or stop doing things — it's to think clearly about risk so you can make informed decisions. People who understand risk well tend to live both more safely and more confidently, because they're not guessing. They know what to watch for, what to avoid, and when something is genuinely worth a small risk.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l16-q5',
              format:       'fill-blank',
              question:     `Good risk assessment asks: what could go wrong, how likely is it, how bad would it be — and what can I do to ___ the risk?`,
              options:      ['reduce', 'avoid', 'ignore', 'celebrate'],
              correctIndex: 0,
              explanation:  `Reducing risk — not eliminating it entirely — is the realistic and empowering goal of safety thinking. You assess what could go wrong, consider how serious it could be, and then ask what practical steps you can take to make it less likely or less severe. This is the thinking behind seatbelts, helmets, eye contact before crossing roads, and not sharing personal information online.`,
            },

            // Q6 — MC (adjustment 3 applied)
            {
              id:           'l16-q6',
              format:       'mc',
              question:     `Why does online safety connect to physical safety in the same way?`,
              options:      [
                `Because phones can be tracked by satellites`,
                `Because the same principles that keep you safe with strangers in person — protecting your information, your location, and your safety — apply online too`,
                `Because online platforms are required by law to verify identities`,
                `Because most online interactions become in-person ones`,
              ],
              correctIndex: 1,
              explanation:  `Online and physical safety share the same underlying logic: protect your personal information, be cautious with people you don't know in person, and never put yourself in a vulnerable position with a stranger. Whether the stranger is on a street corner or a chat app, the same principles apply — your information, your location, and your safety are yours to protect.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l16-realworld',
          type: 'real-world',
          content: {
            scenario:    `Safety Audit`,
            description: `Do a quick safety audit of your everyday routine. Do you always wear your seatbelt? Do you have a helmet and do you wear it every time? Do you know your home address and a trusted adult's phone number? Do you know your local emergency number? These are the basics — check which ones you have solid, and which ones you want to strengthen.`,
            familyAdventure: `Do a family safety check together. Walk through your home and identify any hazards you haven't thought about. Talk about your family emergency plan: who to call, where to meet, what to do in different scenarios. Discuss online safety as a family — what information is OK to share and with whom. Knowledge shared across the whole family makes everyone safer.`,
            realWorldConnection: `Safety experts, paramedics, and public health researchers consistently find the same thing: most serious accidents are preventable with simple, consistent habits. The gap between a safe outcome and a dangerous one is often just one small decision — a helmet, a seatbelt, a quick look before stepping out. These habits are worth making automatic.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l16-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that safety isn't about fear — it's about awareness. The people who live most fully and adventurously are not the ones who take no risks — they're the ones who understand risk clearly and make smart choices. That awareness is yours now. Terra is so proud to walk this path with you.`,
          },
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
    fetch('/explorer-assets/wellness/l16-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l16-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L16] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L16] One or more magazine assets missing'));
}
