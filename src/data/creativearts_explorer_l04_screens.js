// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L04 — Watercolor Painting
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L04 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-04`,
      title:     `Watercolor Painting`,
      duration:  12,
      xpReward:  50,
      badge:     `watercolor-artist`,
      badgeName: `Watercolor Artist`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Watercolor is one of the most beautiful and most humbling art forms, {name}, and I want to tell you something upfront: it will do things you didn't plan. The pigment will bloom. The water will spread. Colors will bleed into each other in unexpected ways. A lot of beginners find this frustrating. But here's what experienced watercolor artists know: that unpredictability is not the problem — it's the medium's greatest quality. Today we're going to learn the basics of watercolor. The central lesson isn't technique. It's learning to work with the paint's nature rather than against it. That turns out to be useful in art, and in life.`,
          headline: `Watercolor Painting`,
          subtitle: `Watercolor is transparent, luminous, and alive — and it will do things you didn't plan. Learning to work with the medium's nature rather than against it is the secret to watercolor, and to a lot of other things too`,
          visual: `/explorer-assets/creative-arts/l04-welcome.png`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Medium With Its Own Mind`,
          paragraphs: [
            `Watercolor will do things you didn't plan. Pigment blooms. Water spreads. Colors bleed in unexpected ways.`,
            `Beginners fight this. Experienced watercolorists embrace it. The medium has its own voice — learning to work WITH it is the whole skill.`,
          ],
          image: `/explorer-assets/creative-arts/l04-s1-medium-with-mind.png`,
          imageCaption: `Some mediums obey you. Watercolor collaborates with you. Once you accept that, everything changes.`,
          vocab: [
            { word: `watercolor`,    definition: `Pigment suspended in water. Transparent, luminous, and alive — a medium with a mind of its own.`,
              audioPrompt: `Watercolor is the most honest medium, {name} — it shows you exactly what it wants to do. Pigment in water, applied to paper. The water evaporates, the color stays. Simple to describe. Endlessly complex to master. And impossible to fully control.` },
            { word: `medium`,        definition: `The material an artist works with — paint, clay, pencil. Each medium has its own character and rules.`,
              audioPrompt: `Every medium has a personality, {name} — and learning a medium is partly learning that personality. Oil paint is patient and forgiving. Pencil is precise and controlled. Watercolor is loose and surprising. None is better. They're each their own conversation.` },
            { word: `responsiveness`, definition: `Working WITH a material's nature rather than forcing it. The core mindset of watercolor.`,
              audioPrompt: `Responsiveness is what watercolor teaches more than any other medium, {name}. You can't force watercolor. You have to respond to what it's doing — adjust on the fly, listen, collaborate. That habit of responsiveness turns out to be useful far beyond art.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Watercolor Glows`,
          paragraphs: [
            `Watercolor is pigment suspended in water. When the water evaporates, the pigment stays.`,
            `The glow comes from light passing THROUGH the transparent paint and bouncing back off the white paper. No other medium quite does this.`,
          ],
          image: `/explorer-assets/creative-arts/l04-s2-watercolor-glow.png`,
          imageCaption: `Light goes IN through the paint, bounces off the white paper, comes back OUT. That's why watercolor seems lit from within.`,
          vocab: [
            { word: `transparency`, definition: `Light passes through. The defining quality of watercolor — and the source of its luminosity.`,
              audioPrompt: `Transparency is watercolor's superpower, {name}. Light actually passes through the paint and bounces back off the white paper. That's what creates the glow you can't quite get with thicker paints. More water, more transparent. Less water, more saturated.` },
            { word: `luminosity`,   definition: `A glowing quality of light — like a painting is lit from within. Watercolor's signature gift.`,
              audioPrompt: `Luminosity is that feeling of inner light, {name} — like the painting is lit from inside rather than outside. Oil painters work hard for it. Watercolor gives it to you almost automatically, as long as you trust the medium and don't overwork it.` },
            { word: `saturation`,   definition: `How intense or concentrated a color is. In watercolor, you control it with water — more water = lighter, less water = stronger.`,
              audioPrompt: `Saturation is how loud a color is, {name}. A fully saturated red screams. Dilute it with water and it whispers. Your water-to-pigment ratio controls everything in watercolor. Learning to feel that ratio is one of the most satisfying skills in the medium.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Wet-on-Wet`,
          paragraphs: [
            `Apply wet paint to already-wet paper, and the pigment spreads and blooms.`,
            `Soft edges. Merging colors. Cloud-like shapes you didn't draw. Perfect for skies, water, mist, distant backgrounds.`,
          ],
          image: `/explorer-assets/creative-arts/l04-s3-wet-on-wet.png`,
          imageCaption: `Wet meets wet. Pigment spreads where it wants. The medium gives you shapes you could never plan.`,
          vocab: [
            { word: `wet-on-wet`, definition: `Wet paint applied to wet paper. Pigment spreads, edges go soft, colors bloom and merge.`,
              audioPrompt: `Wet-on-wet is where watercolor gets magical, {name}. Wet the paper first, drop color onto it, and the pigment spreads and blooms in ways you can't fully control. Soft edges, merging colors. Perfect for skies, mist, distant backgrounds.` },
            { word: `bloom`,      definition: `When wet pigment spreads into another wet area — soft cloud-like edges, often more beautiful than what you planned.`,
              audioPrompt: `A bloom happens when you touch a wet brush to a wet area, {name}, and watch the color push outward like a flower opening. Beginners fight blooms. Experienced artists court them. A bloom in the right place becomes a cloud, a petal, a shadow.` },
            { word: `atmosphere`, definition: `The soft, airy feeling of distance and mist in a painting. Wet-on-wet's specialty.`,
              audioPrompt: `Atmosphere is the feeling of air itself in a painting, {name} — haze, distance, mist. It softens everything in the background. Wet-on-wet is how watercolor creates atmosphere effortlessly. The diffusion the medium does naturally is what oil painters work for hours to achieve.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Wet-on-Dry`,
          paragraphs: [
            `Apply wet paint to dry paper, and you get sharp edges and full control.`,
            `Most paintings use both: wet-on-wet for soft backgrounds, wet-on-dry for the details laid on top.`,
          ],
          image: `/explorer-assets/creative-arts/l04-s4-wet-on-dry.png`,
          imageCaption: `Wet on dry: sharp edges, full control. After the soft wet-on-wet base, this is where the details live.`,
          vocab: [
            { word: `wet-on-dry`, definition: `Wet paint on dry paper. Sharp edges, defined shapes, control. Where details get added after softer washes dry.`,
              audioPrompt: `Wet-on-dry is where you regain control, {name}. Paint on dry paper stays where you put it. Crisp edges, defined shapes. After a soft wet-on-wet sky, this is how you add the branches, the figures, the specific details that turn atmosphere into a scene.` },
            { word: `detail`,     definition: `Small, precise marks added on top of softer backgrounds. The specifics that bring a painting into focus.`,
              audioPrompt: `Detail is what your eye lands on, {name} — the specific edge of a leaf, the dark eye of a bird, the sharp shadow under a roofline. Watercolor paintings usually have detail in some places and softness in others. The contrast between them is where life lives.` },
            { word: `layer`,      definition: `Each pass of paint over a previous one. Watercolor builds in layers — light to dark, soft to sharp.`,
              audioPrompt: `Layers in watercolor are like coats of varnish, {name} — each one adds depth, but the earlier ones still show through. You start light and build up. You can always go darker. You can almost never go back to lighter. So you build slowly, in layers, watching what each one does.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `White Is the Paper`,
          paragraphs: [
            `In watercolor, you can't add white paint to lighten — it makes everything chalky and kills the glow.`,
            `White IS the paper. You preserve it by NOT painting there. This means planning in reverse: protect your lights from the very first stroke.`,
          ],
          image: `/explorer-assets/creative-arts/l04-s5-white-is-paper.png`,
          imageCaption: `In watercolor, the highlights are wherever you didn't paint. Plan backward — protect light from stroke one.`,
          vocab: [
            { word: `reserve`,       definition: `To protect an area of paper from paint so it stays white. The watercolor way of "adding" white.`,
              audioPrompt: `In watercolor, you reserve your whites, {name} — protect them from being painted over. The highlight on a glass of water, the edge of a sunlit petal: these have to be planned before a single stroke. Thinking in reserve is one of the medium's great mental challenges.` },
            { word: `masking fluid`, definition: `A liquid you paint on to block areas from paint, then peel off later to reveal pure white.`,
              audioPrompt: `Masking fluid is a watercolorist's planning tool, {name}. Paint it over the areas you want to keep white, let it dry, paint freely over everything — then peel it off like a second skin. Useful for sparkles on water, falling snow, intricate highlights you'd never reserve by hand.` },
            { word: `opaque`,        definition: `Paint that covers what's beneath. The opposite of watercolor's transparency — and watercolor's enemy.`,
              audioPrompt: `Opaque paint covers everything beneath it, {name} — you can't see through it. Adding opaque white to watercolor kills the luminosity. It becomes chalky and flat. That's why watercolorists protect their whites instead of painting them. Transparency is the magic. Opacity undoes it.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Happy Accidents`,
          paragraphs: [
            `The paint will do things you didn't plan. Blooms. Backruns. Surprising color mixes.`,
            `Beginners panic. Experienced artists ask: what could this become? A bloom in the right place IS a cloud. Letting the medium speak is half the art.`,
          ],
          image: `/explorer-assets/creative-arts/l04-s6-happy-accidents.png`,
          imageCaption: `Most "mistakes" in watercolor are gifts in disguise. The whole skill is recognizing them in time.`,
          vocab: [
            { word: `happy accident`, definition: `An unplanned effect that turns out to be more beautiful than what you intended. The watercolor experience.`,
              audioPrompt: `The phrase "happy accident" became famous through painter Bob Ross, {name}, but watercolorists have lived by it for centuries. The medium does things you didn't plan. Beginners panic. Experienced artists ask: what could this become? The answer is often better than the original plan.` },
            { word: `backrun`,        definition: `When paint is added to almost-dry paint, water pushes the pigment outward into frilly, irregular edges.`,
              audioPrompt: `A backrun happens when you're impatient, {name} — adding wet paint to almost-dry paint. The water pushes the pigment outward into frilly cauliflower edges. Beginners try to avoid them. But a backrun in the right place looks exactly like a petal, a flame, a cloud. The medium is proposing something.` },
            { word: `spontaneity`,    definition: `Responding in the moment instead of forcing tight control. Where watercolor's life comes from.`,
              audioPrompt: `Watercolor rewards spontaneity more than almost any other medium, {name}. Painters who fight for perfect control produce stiff, overworked paintings. The ones who stay loose — who respond to what the paint is doing — end up with work that breathes. Spontaneity without carelessness is the deep skill.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `with`,
              label: `✅ Working WITH Watercolor's Nature`,
              color: `#34D399`,
            },
            {
              id: `against`,
              label: `🚧 Working AGAINST It`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l04-g1`,
              image: `l04-game-1.png`,
              label: `Leaving areas of white paper unpainted to show where the light hits in your painting.`,
              matchPhrase: `In watercolor, white IS the paper. Preserving it by not painting over it is a deliberate, skilled choice — and the glowing white that results can't be replicated by adding paint on top later.`,
              correctMatch: `with`,
            },
            {
              id: `l04-g2`,
              image: `l04-game-2.png`,
              label: `Noticing an unexpected paint bloom forming in your wash and letting it become a cloud.`,
              matchPhrase: `Experienced watercolorists treat the medium's surprises as gifts, not mistakes. Integrating what happens spontaneously — rather than fighting it — is one of the things that makes watercolor feel so alive.`,
              correctMatch: `with`,
            },
            {
              id: `l04-g3`,
              image: `l04-game-3.png`,
              label: `Trying to add thick white paint on top of dried watercolor to fix a section that got too dark.`,
              matchPhrase: `White paint makes watercolor opaque and kills the luminosity. The transparency is what makes watercolor glow — and heavy paint on top destroys the effect. Planning ahead to preserve white areas is the watercolor way.`,
              correctMatch: `against`,
            },
            {
              id: `l04-g4`,
              image: `l04-game-4.png`,
              label: `Going over and over a wet area with your brush trying to make it perfectly even while it's still wet.`,
              matchPhrase: `Overworking wet watercolor lifts and muddies the paint. The medium rewards laying a stroke and letting it be — not pushing it around. Working wet-on-dry with fresh layers is the way to refine, not scrubbing at a wet surface.`,
              correctMatch: `against`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l04-q1`,
              format: `multiple-choice`,
              question: `Why does watercolor look luminous compared to other paints?`,
              options: [
                `Watercolor pigments are made from luminescent minerals`,
                `Light passes through the transparent paint, reflects off the white paper, and bounces back to your eye — creating a glow`,
                `Watercolor dries with a glossy finish that reflects light`,
                `The water in the paint creates a natural sheen`,
              ],
              correctIndex: 1,
              explanation: `Watercolor's luminosity comes from its transparency. Light passes through the thin layers of pigment, hits the white paper beneath, and bounces back through the pigment to your eye — creating a glow from within. Opaque paints block this effect because they sit on top of the surface rather than letting light pass through. This is why watercolor has a quality no other medium quite matches.`,
            },
            {
              id: `l04-q2`,
              format: `multiple-choice`,
              question: `What is the wet-on-wet technique?`,
              options: [
                `Rinsing your brush with water between each color`,
                `Applying wet paint to already-wet paper, creating soft, blooming, unpredictable edges`,
                `Mixing paint with a lot of water before applying to dry paper`,
                `Using two wet brushes at the same time on the same area`,
              ],
              correctIndex: 1,
              explanation: `Wet-on-wet means applying wet paint to paper that's already wet — either pre-wetted with water or still wet from a previous wash. The pigment spreads and blooms in soft, unpredictable ways because it has no dry edges to stop it. This creates the atmospheric, soft effects seen in skies, water, and misty backgrounds. It's contrasted with wet-on-dry, where wet paint on dry paper gives sharp, defined edges.`,
            },
            {
              id: `l04-q3`,
              format: `multiple-choice`,
              question: `How do you create white areas in a watercolor painting?`,
              options: [
                `By adding white paint on top of other colors after they dry`,
                `By leaving the paper unpainted in those areas — white paint makes it opaque and loses the luminosity`,
                `By washing the paint off with water while it's still wet`,
                `By painting over the area with a very diluted mix of all colors`,
              ],
              correctIndex: 1,
              explanation: `In watercolor, white is the paper itself — you preserve it by not painting over it. Adding white paint on top creates an opaque, chalky effect that destroys the luminosity that makes watercolor special. This means planning ahead: deciding where your lightest, brightest areas will be before you even pick up the brush, and protecting those areas throughout the painting process.`,
            },
            {
              id: `l04-q4`,
              format: `true-false`,
              question: `In watercolor, unexpected things like paint blooming in surprising shapes are often something experienced artists embrace rather than try to fight.`,
              correctAnswer: true,
              explanation: `True. What beginners call "mistakes" in watercolor — paint blooms, backruns, colors mixing unexpectedly — are often the things experienced watercolorists value most. The medium has its own energy and unpredictability, and working with that energy rather than against it produces effects that controlled, planned painting simply can't. Many of the most beautiful watercolor effects are accidental discoveries that became techniques.`,
            },
            {
              id: `l04-q5`,
              format: `fill-blank`,
              question: `Applying wet paint to already-wet paper creates soft, spreading effects — this is called the ___-on-wet technique.`,
              options: [
                `wet`,
                `dry`,
                `light`,
                `warm`,
              ],
              correctIndex: 0,
              explanation: `Wet-on-wet is the technique of applying wet paint to paper that's already wet. The moisture prevents the paint from forming a sharp edge — instead it spreads and blooms, creating the soft atmospheric effects that make watercolor so distinctive. The alternative, wet-on-dry, uses wet paint on completely dry paper and gives crisp, defined edges. Most watercolor paintings use both techniques together.`,
            },
            {
              id: `l04-q6`,
              format: `multiple-choice`,
              question: `Why do watercolorists say "work from light to dark"?`,
              options: [
                `Because light colors must be completely dry before dark colors can be applied over them`,
                `Because you can always add more pigment to make an area darker, but you can't easily remove paint once it's on the paper — so building up gradually keeps you in control`,
                `Because watercolor naturally flows from dark to light areas on its own`,
                `Because using dark paint first makes the rest of the painting look muddy`,
              ],
              correctIndex: 1,
              explanation: `In watercolor, adding pigment is easy — removing it is much harder. This means you can always make an area darker by adding another wash of paint. But if you start too dark, you have very few options for lightening it again (the paper white is gone). Starting light and gradually building toward darker values keeps you in control at every stage and prevents the most common watercolor regrets.`,
            },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Watercolor has been used by artists for centuries — from detailed botanical and scientific illustrations to expressive landscapes and portraits. Its unique luminosity, created by light bouncing off the paper through transparent pigment, is impossible to replicate with opaque media and has made it one of the most beloved and technically demanding mediums in the history of art.`,
          familyAdventure: `Do a family watercolor painting session at the kitchen table. Everyone paints the same simple subject — a bowl of fruit, a vase of flowers, or the view from a window. No judgment, no comparison — just explore. Afterward, lay all the paintings side by side. Notice how different they are even from the same subject. Display them.`,
          creativePrompt: `If you have watercolours, set up four experiment areas on a sheet of paper (thick paper works best). Try: (1) wet the paper first with a damp brush, then drop colour in and watch it bloom — that's wet-on-wet; (2) paint a shape on completely dry paper for a sharp edge — that's wet-on-dry; (3) brush a stripe from full-strength colour on one end to almost-clear water on the other; (4) mix two colours directly on the paper rather than the palette. Then use all the techniques to paint a simple sunset or ocean scene. No watercolours? Food colouring on thick paper works beautifully for exploring the same effects.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that watercolor has a spirit of its own — and that working with it, rather than against it, is what creates something truly magical. Every happy accident is the medium adding its own voice to your painting. Muse believes the best art always has some surprise in it. Keep your brushes wet and your mind wide open.`,
          badge: `watercolor-artist`,
          badgeName: `Watercolor Artist`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L04.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L04] Loaded: "Watercolor Painting" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l04-s1-medium-with-mind.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-s2-watercolor-glow.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-s3-wet-on-wet.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-s4-wet-on-dry.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-s5-white-is-paper.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l04-s6-happy-accidents.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L04] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L04] One or more magazine assets missing'));
}
