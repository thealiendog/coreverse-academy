const CREATIVEARTS_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `ca`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-9-10-04`,
      title: `Drawing What You See vs. What You Know`,
      duration: 18,
      xpReward: 75,
      badge: `true-seer`,
      badgeName: `True Seer`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Today is one of the most important lessons in this whole subject for visual art. I want to share with you the single biggest reason most kids think they "can't draw." It's not talent. It's not eyes. It's not luck. It's that they draw what they THINK is there instead of what's ACTUALLY there. This sounds small. It's huge. Today, you learn the shift that researchers and art teachers have been teaching for decades, drawing what you SEE, not what you KNOW. Once you understand this, your drawings will start to change. This is real craft, made simple. Let's see together.`,
          headline: `Drawing What You See vs. What You Know`,
          subtitle: `The single most important shift in learning to draw.`,
          visual: `/ue-assets/ca/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Symbol Problem`,
          paragraphs: [
            `Here's what happens in your brain when you try to draw an eye. Your brain has built a SYMBOL for "eye" over years of seeing them. The symbol looks something like a flat football shape with a circle in the middle and some eyelashes coming off the top. When someone asks you to draw an eye, you don't draw the actual eye in front of you, you draw the SYMBOL. That's why kid drawings of faces tend to look similar across kids: they're all drawing the symbol "face," not specific faces. Same for "tree" (puffy round shape on a brown stick), "house" (square with triangle roof and four-pane window), "sun" (circle with lines coming out), "cat" (round head with triangles for ears).`,
            `These symbols aren't wrong, they're an amazing thing your brain does to organize the world. But for DRAWING, they're a trap. Researcher Betty EDWARDS spent her career studying this. She found that almost everyone who thinks they "can't draw" is using symbols. And almost everyone, even adults who'd given up on art, dramatically improved within DAYS once they learned to switch off the symbol-brain and use the seeing-brain. This isn't an opinion. Tens of thousands of people have done her exercises with dramatic results. The shift is teachable. You can learn it now, at 9 or 10, and have a 70-year head start on the adults still drawing symbols.`,
          ],
          image: `/ue-assets/ca/l04-s1-symbol.webp`,
          imageCaption: `Your brain stores SYMBOLS (eye, tree, face, house). For drawing, the symbol is a trap. See the actual thing.`,
          vocab: [
            { word: `the symbol problem`,
              definition: `The biggest reason most people think they "can't draw." Your brain stores SYMBOLS for things (a symbol for "eye," "tree," "face"). When you try to draw, you draw the symbol, not the actual thing in front of you. Researcher Betty Edwards found people improve dramatically within days once they learn to switch from symbol-brain to seeing-brain.`,
              audioPrompt: `The symbol problem is the biggest reason most people think they can't draw, {name}. Your brain has built a symbol for eye over years of seeing them. When you try to draw an eye, you don't draw the actual eye in front of you, you draw the symbol. The symbols are an amazing thing your brain does to organize the world. But for drawing, they're a trap. Researcher Betty Edwards found people improve dramatically within days once they switch off the symbol-brain and use the seeing-brain.` },
            { word: `the seeing-brain`,
              definition: `Betty Edwards's term for the brain mode that draws what's actually there — the actual shapes, angles, proportions, light and shadow — rather than the stored SYMBOL. The seeing-brain can be trained through upside-down drawing, slow looking, and negative space. It doesn't require talent, only practice at looking carefully.`,
              audioPrompt: `The seeing-brain is Betty Edwards's term for the brain mode that sees what's actually there, {name}. Shapes, angles, proportions, light and shadow, rather than the symbols the analytical brain has stored. Switching to seeing-brain mode is what makes drawings improve dramatically. People who think they can't draw are using the symbol-brain. The seeing-brain can be trained through exercises like upside-down drawing, slow looking, and negative space. It doesn't require talent. It requires practice at looking carefully.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Look Slowly. See SHAPES, Not Things.`,
          paragraphs: [
            `The first move out of the symbol trap is the Creator's Eye from L02. SLOW LOOKING. Don't draw fast. Look at your subject for real seconds. Notice things you'd miss in symbol-mode. Then, as you draw, see SHAPES, not "things." If you're drawing a chair, you're not drawing "chair." You're drawing the angle of the back, the rectangle of the seat, the angles of the legs, the negative space between rungs. If you're drawing a face, you're not drawing "face." You're drawing the oval of the head, the precise spacing between features, the actual shape (not symbol) of the eyes, the angle of the nose.`,
            `One of Betty Edwards' most famous exercises shows this dramatically. She has people copy a drawing UPSIDE DOWN. They can't recognize the symbols anymore (an upside-down face doesn't look like "face"), so they're forced to draw what's actually there, the shapes, the angles, the spaces. People who couldn't "draw" produce surprisingly accurate copies because the symbol-brain is bypassed. The same technique works for kids. If you're stuck drawing something, try turning the reference upside down. You'll see shapes you missed. This is the seeing-brain in action.`,
          ],
          image: `/ue-assets/ca/l04-s2-shapes.webp`,
          imageCaption: `See shapes, not "things." Drawing upside down forces the seeing-brain to engage. Symbols bypassed.`,
          vocab: [
            { word: `see shapes not things`,
              definition: `The shift from symbol-drawing to actual-drawing. Don't draw "chair," draw the angle of the back, the rectangle of the seat, the angles of the legs. Betty Edwards' upside-down drawing exercise proves this: when you can't recognize the symbol, you're forced to draw the actual shapes, and people who "couldn't draw" produce accurate work.`,
              audioPrompt: `See shapes, not things, {name}. The first move out of the symbol trap is slow looking. Then as you draw, see shapes. If you're drawing a chair, you're not drawing chair. You're drawing the angle of the back, the rectangle of the seat, the angles of the legs. Betty Edwards has a famous exercise where people copy drawings upside down. They can't recognize the symbols anymore, so they're forced to draw the actual shapes. People who couldn't draw produce surprisingly accurate copies because the symbol-brain is bypassed.` },
            { word: `upside-down drawing`,
              definition: `Betty Edwards's classic exercise for training the seeing-brain. You copy a drawing while leaving the reference upside down. Your brain can't recognize the symbols (upside-down face doesn't look like "face"), so you're forced to draw actual shapes and angles. Even people who think they can't draw produce surprisingly accurate copies.`,
              audioPrompt: `Upside-down drawing is Betty Edwards's classic exercise for bypassing the symbol-brain, {name}. You copy a drawing while leaving it upside down. Your brain can't read the symbols, an upside-down face doesn't look like face, so you're forced to draw the actual shapes and angles. People who thought they couldn't draw routinely produce surprisingly accurate copies. The symbol-brain gets quiet when it can't recognize what it's seeing. The seeing-brain takes over. Try it this week.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Measure With Your Eye. Notice Negative Space.`,
          paragraphs: [
            `Two more concrete moves that transform drawings. FIRST, MEASURE WITH YOUR EYE. Hold up your pencil at arm's length, close one eye, and use the pencil to measure things in your subject. How wide is the head compared to the shoulder? How tall is the chair compared to the table? You can compare lengths and angles this way. Artists do this constantly. It corrects the proportion mistakes the symbol-brain wants to make (kids tend to draw heads too big, hands too small, eyes too high on the face, because those are symbol-driven mistakes). Eye-measuring brings drawings into real proportion.`,
            `SECOND, see NEGATIVE SPACE. Negative space is the space AROUND and BETWEEN things, not the things themselves. If you're drawing a chair, the negative space is the empty space between the legs, between the back rungs, around the whole chair. Here's the magic. Drawing the NEGATIVE SPACE is often easier than drawing the chair itself, because there's no symbol for "the space between chair legs." Your symbol-brain shuts up and you just draw what's there. When you draw the negative space accurately, the chair appears in what's left over. Artists use negative space all the time. It's one of the best tricks for drawing complicated subjects.`,
          ],
          image: `/ue-assets/ca/l04-s3-measure-negative.webp`,
          imageCaption: `Measure with your eye (pencil at arm's length). Draw negative space (between things) to bypass symbols.`,
          vocab: [
            { word: `eye-measuring and negative space`,
              definition: `Two techniques that bypass the symbol-brain. EYE-MEASURING: hold pencil at arm's length, compare proportions (head vs. shoulder, chair vs. table). Corrects symbol-driven mistakes. NEGATIVE SPACE: draw the empty space AROUND and BETWEEN things, not the things themselves. Your symbol-brain has no symbol for "space between chair legs" so it stays quiet.`,
              audioPrompt: `Two more concrete moves that transform drawings, {name}. First, measure with your eye. Hold up your pencil at arm's length, close one eye, use the pencil to measure things. How wide is the head compared to the shoulder. Eye-measuring corrects symbol-brain proportion mistakes. Second, see negative space. Negative space is the space around and between things, not the things themselves. There's no symbol for the space between chair legs, so your symbol-brain shuts up and you draw what's actually there.` },
            { word: `proportion and measuring`,
              definition: `Getting the size relationships between parts of a subject right. Proportional errors are the most common drawing mistakes — heads too big, hands too small, eyes too high — because the symbol-brain drives them. Eye-measuring (pencil at arm's length, one eye closed, comparing measurements) corrects them. When proportions are right, a drawing feels believable before detail is added.`,
              audioPrompt: `Proportion and measuring is about getting the size relationships between parts of a subject right, {name}. The most common drawing mistakes are proportion errors. The symbol-brain draws heads too big, hands too small, eyes too high on the face. These are symbol-driven mistakes, not eye mistakes. Eye-measuring corrects them. Pencil at arm's length, one eye closed, compare how wide the head is to the shoulder. How tall the ear is to the eye. When proportions are right, a drawing feels believable before detail is even added.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Trust What's There`,
          paragraphs: [
            `Here's the deepest move. As you practice seeing-brain drawing, you'll start to notice something strange. The shape your eye SEES will sometimes look "wrong" to your symbol-brain. The actual eye-shape of a friend is more like a tilted almond than a flat football. The actual nose seen from straight on is mostly two shadows, not the side-view nose you might be tempted to draw. The actual hand has fingers of surprising lengths that don't match the symbol-hand. Your symbol-brain will fight you. It will say "but eyes don't look like that. But that's not how a hand goes." Your job is to TRUST WHAT'S THERE more than what the symbol says.`,
            `This is one of the most important practices in this whole subject for visual artists, learning to trust your seeing eye over your symbol-brain. Researchers studying skilled artists found this is one of the longest-running tensions in artist development. The seeing-brain develops with practice. The symbol-brain doesn't go away, it just stops bossing the artist around. Muse-truth, drawings start looking real when you stop drawing what you THINK is there and start drawing what's ACTUALLY there. This is a lifelong practice. Even master artists keep refining it. You're learning it at 9 or 10. That's a real gift. The kid who builds seeing-brain skills now starts the visual journey with a foundation many adults never get.`,
          ],
          image: `/ue-assets/ca/l04-s4-trust.webp`,
          imageCaption: `Trust what your eye sees over what your symbol-brain says. Drawings look real when you draw what's actually there.`,
          vocab: [
            { word: `trust the seeing eye`,
              definition: `The deepest move in seeing-brain drawing. As you practice, the shape your eye SEES will sometimes look "wrong" to your symbol-brain. Your symbol-brain will fight ("eyes don't look like that"). Your job is to TRUST WHAT'S THERE more than what the symbol says. Drawings look real when you draw what's actually there, not what you THINK is there.`,
              audioPrompt: `Trust what's there is the deepest move in seeing-brain drawing, {name}. As you practice, the shape your eye sees will sometimes look wrong to your symbol-brain. The actual hand has fingers of surprising lengths. Your symbol-brain will fight you. It will say but eyes don't look like that. Your job is to trust what's there more than what the symbol says. Drawings start looking real when you stop drawing what you think is there and start drawing what's actually there.` },
            { word: `the symbol-brain`,
              definition: `Betty Edwards's term for the analytical brain mode that stores SYMBOLS for things — a symbol for "eye," "face," "tree." When drawing, it draws the stored symbol instead of what's actually there. It's not the enemy (it helps you read and navigate the world fast), but for drawing, you need to quiet it and switch to the seeing-brain. With practice, it stops bossing the artist around.`,
              audioPrompt: `The symbol-brain is Betty Edwards's term for the analytical brain mode that stores symbols for things, {name}. A symbol for eye, a symbol for face, a symbol for tree. When drawing, the symbol-brain draws the stored symbol instead of what's actually there. It's not the enemy. The symbol-brain helps you read and navigate the world fast. But for drawing, you need to quiet it and switch to the seeing-brain. The symbol-brain doesn't go away with practice. It just stops bossing the artist around.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the 5 moves of drawing what you see in order, {name}. From FIRST LOOK to FINAL TRUST. Use the arrows to arrange them.`,
          items: [
            { id: `step-look`,     label: `LOOK SLOWLY. Don't draw fast. Spend real seconds with your subject. Notice what you'd miss in symbol-mode. The Creator's Eye applied to drawing`,                                            position: 1 },
            { id: `step-shapes`,   label: `SEE SHAPES, NOT THINGS. Don't draw "chair," draw the angle of the back, the rectangle of the seat, the angles of the legs. If stuck, turn your reference UPSIDE DOWN to bypass symbols`, position: 2 },
            { id: `step-measure`,  label: `MEASURE WITH YOUR EYE. Pencil at arm's length, one eye closed. Compare proportions (head to shoulder, chair to table). Corrects the symbol-brain mistakes`,                              position: 3 },
            { id: `step-negative`, label: `NOTICE NEGATIVE SPACE. Draw the space AROUND and BETWEEN things, not the things themselves. No symbol exists for "space between chair legs," so the symbol-brain shuts up`,             position: 4 },
            { id: `step-trust`,    label: `TRUST WHAT'S THERE. Your symbol-brain will fight you when the actual shape looks "wrong." Trust your seeing eye. Drawings look real when you draw what's there, not what you THINK`,  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of drawing what you see: look slowly, see shapes (not things), measure with your eye, notice negative space, trust what's there. Use these every time you draw. Your drawings will start to change. Most adults never learn this. You're learning it now.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What's the SINGLE BIGGEST reason most kids think they "can't draw"?`,
              options: [
                `Lack of talent`,
                `They draw the SYMBOL their brain stored (the idea of "eye") instead of the ACTUAL shape of what's in front of them`,
                `Bad pencils`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Not talent. Not eyes. Not luck. People draw the SYMBOL their brain has stored for things (the idea of "eye," "tree," "face") instead of what's actually there. Betty Edwards's research found almost everyone who thinks they can't draw is using symbols. The shift is teachable, and people improve dramatically within days once they learn it.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What did Betty Edwards find about people who can't "draw"?`,
              options: [
                `They have no hope`,
                `Almost ALL of them improve dramatically WITHIN DAYS once they learn to switch off the symbol-brain and use the seeing-brain. The shift is teachable`,
                `They need years`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Betty Edwards spent her career on this. She found that almost everyone who thinks they "can't draw" is using symbols, and almost everyone, even adults who'd given up on art, dramatically improved within days once they learned to switch off the symbol-brain. Tens of thousands of people have done her exercises with dramatic results.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What is the UPSIDE-DOWN DRAWING exercise?`,
              options: [
                `Random trick`,
                `Copying a drawing UPSIDE DOWN forces the seeing-brain to engage. You can't recognize the symbols (upside-down face doesn't look like "face"), so you draw the actual shapes. People who "couldn't draw" produce accurate work`,
                `For fun only`,
                `Useless`,
              ],
              correctIndex: 1,
              explanation: `Betty Edwards's famous exercise. She has people copy a drawing upside down. They can't recognize the symbols anymore (an upside-down face doesn't look like "face"), so they're forced to draw what's actually there, the shapes, angles, spaces. People who couldn't "draw" produce surprisingly accurate copies because the symbol-brain is bypassed.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `What is EYE-MEASURING in drawing?`,
              options: [
                `Squinting only`,
                `Holding a PENCIL at arm's length, one eye closed, using it to COMPARE proportions (head to shoulder, chair to table). Corrects the symbol-brain's proportion mistakes`,
                `Random looking`,
                `Counting`,
              ],
              correctIndex: 1,
              explanation: `Eye-measuring is holding your pencil at arm's length, closing one eye, and using the pencil to compare proportions. How wide is the head compared to the shoulder. How tall is the chair compared to the table. Artists do this constantly. It corrects the proportion mistakes the symbol-brain wants to make (kids tend to draw heads too big, eyes too high on the face).` },

            { id: `l04-q5`, format: `multiple-choice`,
              question: `What is NEGATIVE SPACE in drawing?`,
              options: [
                `Bad feelings`,
                `The space AROUND and BETWEEN things, not the things themselves. Drawing negative space is often EASIER because no symbol exists for "space between chair legs," so the symbol-brain shuts up`,
                `Empty page`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Negative space is the space AROUND and BETWEEN things, not the things themselves. If you're drawing a chair, the negative space is the empty space between the legs, between the back rungs. Drawing the negative space is often EASIER than drawing the chair itself, because there's no symbol for "space between chair legs." Your symbol-brain shuts up.` },

            { id: `l04-q6`, format: `true-false`,
              question: `True or false: As you draw what you actually see, your SYMBOL-BRAIN will fight you when the real shape looks "wrong."`,
              correctAnswer: true,
              explanation: `True. As you practice seeing-brain drawing, the shape your eye SEES will sometimes look "wrong" to your symbol-brain. The actual eye is more like a tilted almond than a flat football. Your symbol-brain will say "but eyes don't look like that." Your job is to trust what's there more than what the symbol says.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `When do DRAWINGS START LOOKING REAL?`,
              options: [
                `With talent`,
                `When you stop drawing what you THINK is there and start drawing what's ACTUALLY there. The seeing-brain over the symbol-brain`,
                `With expensive supplies`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Drawings start looking real when you stop drawing what you THINK is there and start drawing what's ACTUALLY there. The seeing-brain develops with practice. The symbol-brain doesn't go away; it just stops bossing the artist around. This is a lifelong practice; even master artists keep refining it.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `What's Muse's first teaching about drawing what you see?`,
              options: [
                `Talent is everything`,
                `Don't draw "things." Draw SHAPES. Look slowly. Measure with your eye. See negative space. Trust what's actually there over the symbol your brain stored. The seeing-brain develops with practice`,
                `Random advice`,
                `Use a ruler`,
              ],
              correctIndex: 1,
              explanation: `Don't draw "things," draw SHAPES. Look slowly. Measure with your eye. See negative space. Trust what's actually there over the symbol your brain has stored. The seeing-brain develops with practice. This is the single most important shift in learning to draw, and most adults never learn it. You're learning it at 9 or 10.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Try this NOW: draw a simple object near you (a cup, a shoe, your hand). Notice when your symbol-brain takes over. What did "I know" tell you that "I see" disagreed with?` },
            { id: `r2`, text: `Try drawing the NEGATIVE SPACE around an object (the space between chair legs, around a leaf). What was different about how that felt compared to drawing the thing?` },
            { id: `r3`, text: `What's ONE "thing" you've been drawing the SYMBOL for (face, tree, eye, house)? What might it look like if you actually SAW one and drew the shapes?` },
            { id: `r4`, text: `How do you feel about the idea that you can dramatically improve at drawing in days, not years? What might you commit to trying?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Betty Edwards's "Drawing on the Right Side of the Brain" was first published in 1979 and has sold over 4 million copies. It's required reading in many art schools because the techniques actually work. Decades of teaching have confirmed her findings: the symbol-to-seeing shift is teachable, and people across every age and background improve dramatically when they make it. The neuroscience supports the original framing, the symbol-using parts of the brain (more analytical, language-related) often dominate; the seeing-brain (more spatial, holistic) gets bypassed unless trained. Edwards's exercises train the seeing-brain by giving it space to work. Muse-note: most adults you know have never learned this. They still draw the symbols they did at 9 or 10, which is exactly why their drawings haven't improved since then. By learning the seeing-brain at this age, you have a lifelong head start. Practice the upside-down drawing, the negative space, the eye-measuring, the slow looking. Within weeks, your drawings will look different. Within months, dramatically different. Within years, you'll be drawing what most adults wish they could draw. The seeing-brain compounds.`,
          familyAdventure: `Family Upside-Down Drawing. As a family, find a simple line drawing online (a Picasso line drawing works well, they're already simplified). Turn it upside down. Everyone copies it WHILE LEAVING IT UPSIDE DOWN. Then turn yours right-side up at the end and compare. Adults often surprise themselves with how much better their upside-down copy is than what they'd normally draw. This single exercise can shift a whole family's relationship with drawing. Many families find this becomes the moment when adults who "can't draw" realize they actually can.`,
          creativePrompt: {
            intro: `Write about the symbol problem and the seeing-brain you're starting to build.`,
            floor: `Write at least 5 sentences. Name a symbol you've been drawing and what you'll practice instead.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on the shift you're making.`,
            open: `Write as much as you want. Reflect on the SYMBOL PROBLEM in your own drawings. What symbols have you been drawing for? (eye, face, tree, house, hand). Name them honestly. Then describe what you noticed when you tried slow looking, shape-seeing, eye-measuring, or negative space. Was your symbol-brain loud? Did it fight you? Describe ONE specific seeing-brain practice you'll commit to (regular upside-down drawing, drawing negative space for 10 minutes a day, doing close studies of one object a week, anything). Acknowledge that the seeing-brain takes practice and that's okay. End with a promise to your future-artist-self about the shift you're making. Make it specific and brave.`,
            frames: [
              `Symbols I've been drawing instead of seeing: ___.`,
              `When I tried slow looking, my symbol-brain said: ___.`,
              `What I noticed about negative space (or eye-measuring): ___.`,
              `My seeing-brain practice will be: ___.`,
              `A promise to my future-artist-self: ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Brilliant, brave work, {name}. You've made one of the most important shifts in learning to draw. Look slowly. See shapes, not things. Measure with your eye. Notice negative space. Trust what's there. Most adults never learn this. You're learning it at 9 or 10. The seeing-brain grows with practice. Your drawings will start to change. Next, we go deep into COLOR — not as theory but as how color carries feeling. Color as emotion. Fluttering on. Muse 🦋.`,
          badge: `true-seer`,
          badgeName: `True Seer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default CREATIVEARTS_UE_L04;
