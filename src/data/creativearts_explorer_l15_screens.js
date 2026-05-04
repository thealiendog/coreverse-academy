// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L15 — Graphic Design Basics
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L15 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-15`,
      title:     `Graphic Design Basics`,
      duration:  12,
      xpReward:  50,
      badge:     `graphic-designer`,
      badgeName: `Graphic Designer`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Look around at any surface with words or images on it, {name} — a book cover, a food label, a bus stop poster, the icons on a phone screen. All of it was designed. Someone made deliberate choices about typeface, color, layout, and imagery — designed to make you feel something, understand something, or do something. Most people move through this designed world without seeing the decisions behind it. Today we're going to change that. Once you understand the principles of graphic design — hierarchy, contrast, alignment, color — you'll start reading the designed world instead of just receiving it. And you'll be able to create within it too.`,
          headline: `Graphic Design Basics`,
          subtitle: `The sign on that coffee shop. The logo on your favourite brand. The poster for the film you want to see. All of it was designed by someone making deliberate choices. Graphic design is everywhere — and once you understand its principles, you'll see exactly what those choices are and why they work`,
          visual: `/explorer-assets/creative-arts/l15-welcome.png`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Four Core Principles`,
          paragraphs: [
            `One of the most widely used frameworks in design identifies four fundamental principles that underlie all effective graphic design. **Contrast**: make different elements clearly different — large vs small, dark vs light, bold vs thin. Without contrast, everything competes and nothing stands out. **Repetition**: repeat visual elements throughout a design to create unity and consistency. **Alignment**: every element should be visually connected to something else — nothing should look randomly placed. **Proximity**: related items should be grouped together; unrelated items should be visually separated. These four principles — sometimes remembered together as **CRAP** (Contrast, Repetition, Alignment, Proximity) — transform random arrangements of text and image into intentional, readable, effective design.`,
          ],
          image: `/explorer-assets/creative-arts/l15-magazine-1.png`,
          imageCaption: `Contrast, repetition, alignment, proximity — four principles that transform random arrangements into intentional design`,
          vocab: [
            { word: `contrast`, definition: `Making different elements clearly different from each other — large vs. small, dark vs. light, bold vs. thin — so that important elements stand out and nothing competes equally for attention.`, audioPrompt: `Contrast is how design shows you where to look, {name}. Without it, everything is equally loud and the eye doesn't know where to start. A large bold headline against a small quiet body of text — that's contrast. Dark text on a light background — contrast. A bright color on a neutral one — contrast. Every effective design decision about emphasis is really a decision about contrast. What needs to be seen first? Make that different from everything else.` },
            { word: `alignment`, definition: `The visual connection between elements in a design — nothing should look randomly placed, everything should have a visual relationship with something else on the page.`, audioPrompt: `Alignment is the invisible grid that holds a design together, {name}. Elements don't have to be centered or lined up against each other — but they should be in relationship. Text that aligns to the left edge of an image. Headings that all begin at the same point. Nothing floating randomly. When alignment is good, the design feels orderly without feeling rigid. When it's missing, even beautiful elements feel like they were dropped without intention.` },
            { word: `proximity`, definition: `Grouping related elements close together and separating unrelated elements — which creates visual organization and tells the viewer which pieces of information belong together.`, audioPrompt: `Proximity is about belonging, {name}. Elements that are close together appear related. Elements that are separated appear independent. This is how design organizes information without words: the caption sits close to its image, the contact details cluster together, the navigation groups its links. When related things are scattered across a layout, the reader has to do extra work to understand the relationships. Proximity does that work for them.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Typography: The Art of Text`,
          paragraphs: [
            `**Typography** is the art of arranging text to make it readable, beautiful, and meaningful. Typefaces have **personalities**: **serif fonts** (with small decorative strokes on the ends of letters — like Times New Roman) feel traditional, authoritative, and trustworthy. **Sans-serif fonts** (without those strokes — like Arial or Helvetica) feel modern, clean, and direct. **Script fonts** feel personal, elegant, or handmade. **Display fonts** make bold visual statements — used for headlines, never for body text. A design's typography communicates **before the reader reads a single word**: the personality of the typeface signals what kind of message is coming. Great typographers choose fonts that amplify the message of the content — not fonts that contradict or compete with it.`,
          ],
          image: `/explorer-assets/creative-arts/l15-magazine-2.png`,
          imageCaption: `Typefaces have personalities — serif feels traditional, sans-serif feels modern, and the choice sends a message before a word is read`,
          vocab: [
            { word: `typography`, definition: `The art of selecting and arranging text to make it readable, beautiful, and meaningful — including choices about typeface, size, spacing, weight, and color.`, audioPrompt: `Typography is design made from letters, {name}. The choice of typeface, the size of the headline, the spacing between lines, whether the text is centered or aligned left — all of it communicates before a single word is read. Good typography is largely invisible: it just feels right. Bad typography announces itself by making reading harder or sending the wrong signal about what kind of message is coming.` },
            { word: `serif`, definition: `A typeface that has small decorative strokes at the ends of letterforms — which gives it a traditional, authoritative, and trustworthy feel, used in books, newspapers, and formal documents.`, audioPrompt: `Serif fonts have little feet, {name} — tiny horizontal strokes at the ends of letters. Look at Times New Roman or Georgia: see those small finishing strokes? They originated in Roman stone carvings and have carried a feeling of authority and tradition ever since. Books, newspapers, and formal institutions tend to use serifs because they communicate: we've been here for a long time, and we're worth trusting. The detail is small. The effect is significant.` },
            { word: `sans-serif`, definition: `A typeface without decorative end strokes — clean, simple, and modern-feeling — widely used in digital design, signage, and contemporary branding.`, audioPrompt: `Sans-serif fonts have no feet, {name} — clean, simple endings with nothing extra. Arial, Helvetica, Futura: they feel modern, direct, and uncluttered. Digital screens tend to favor sans-serif because the simplicity renders more clearly at small sizes. Contemporary brands often choose sans-serif to signal: we're current, efficient, and forward-looking. The same information in a serif versus a sans-serif feels like two different institutions telling you the same thing.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Visual Hierarchy`,
          paragraphs: [
            `**Visual hierarchy** guides the viewer's eye through a design in a specific order — telling them what to look at first, second, and third. Hierarchy is created through: **size** (larger = more important), **weight** (bold draws more attention than regular), **colour** (high contrast = more attention), **position** (the top-left is where Western eyes naturally begin reading), and **space** (elements with more space around them stand out from those crowded together). Without hierarchy, everything competes for attention and the viewer doesn't know where to start — so they often don't start at all. With clear hierarchy, the viewer naturally follows the designer's intended path through the information, arriving at the most important content first and understanding the rest in relation to it.`,
          ],
          image: `/explorer-assets/creative-arts/l15-magazine-3.png`,
          imageCaption: `Visual hierarchy guides the eye — size, weight, colour, position, and space all tell viewers where to look first`,
          vocab: [
            { word: `visual hierarchy`, definition: `The intentional organization of design elements by importance — guiding the viewer's eye through a design in a specific order using size, weight, color, position, and spacing.`, audioPrompt: `Visual hierarchy is the design decision that says: look here first, then here, then here, {name}. Without it, the eye wanders and the viewer doesn't know what matters. With it, even complex layouts become navigable — you know where to enter, what's most important, and how to find what you need. Every poster, webpage, and book spread you've ever found easy to read had strong visual hierarchy. You just didn't notice it, because that's how good hierarchy works.` },
            { word: `weight`, definition: `In typography, how thick or thin the strokes of letterforms are — bold is heavy, light is thin — which creates emphasis and contributes to visual hierarchy.`, audioPrompt: `Bold text feels heavier, {name} — it takes up more space, demands more attention. Light weight text recedes. This is typographic weight, and designers use it to establish hierarchy: what's the most important thing on this page? Make it bold. What's secondary information? Keep it regular or light. The same word in different weights sends a completely different signal about its importance. Weight is one of the simplest and most effective tools in design.` },
            { word: `white space`, definition: `The empty space in a design — around and between elements — which helps important content stand out, improves readability, and makes layouts feel considered and professional.`, audioPrompt: `White space isn't emptiness, {name} — it's breathing room. The space around a headline makes it more important. The margin around a photograph gives the eye somewhere to rest. Crowded designs feel anxious and overwhelming. Designs with generous white space feel calm and considered. Beginning designers often try to fill every inch. Experienced ones learn that what you leave out is as important as what you put in. Space is a design tool.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Logo Design: Identity in an Image`,
          paragraphs: [
            `A **logo** is a visual identity — it must communicate what an organisation is and what it values, often in the simplest possible image. The Nike swoosh communicates speed and movement in a single flowing line. The Apple logo communicates simplicity and a hint of playfulness with that bite taken out. The Golden Arches communicate exactly what they are from across a car park. Great logos share the same qualities: **simple** (recognisable at tiny sizes), **distinctive** (not confused with competitors), **appropriate** (fits the brand's personality), **versatile** (works in black and white and at any size), and **timeless** (not tied to a current trend — it should still work in 20 years). Designing a great logo is one of the hardest creative challenges in design, because it requires communicating everything with almost nothing.`,
          ],
          image: `/explorer-assets/creative-arts/l15-magazine-4.png`,
          imageCaption: `A great logo is simple, distinctive, appropriate, versatile, and timeless — communicating everything with almost nothing`,
          vocab: [
            { word: `logo`, definition: `A visual symbol or mark that represents an organization, brand, or idea — designed to be immediately recognizable, distinctive, and communicative at any size.`, audioPrompt: `A logo is identity reduced to its essence, {name}. The Nike swoosh communicates movement in a single flowing line. The Apple logo communicates simplicity with one witty bite taken out. The Golden Arches are recognizable from across a parking lot at speed. Great logos work at the size of a business card and on the side of a building. They communicate who you are before anyone reads a word. That's a hard problem — which is why good logo design is one of the most respected skills in the field.` },
            { word: `distinctive`, definition: `Having a quality that is different enough from everything else to be immediately recognizable — a key requirement of great logo design, so the mark is never confused with competitors.`, audioPrompt: `Distinctive means impossible to confuse, {name}. The Coca-Cola script is distinctive. The Olympic rings are distinctive. FedEx's arrow hidden in the negative space between the E and x — once you see it, you never unsee it, and you never forget the logo. Distinctiveness in a logo means the mark is genuinely different from anything else in its field. It stands apart. That requires not following the crowd, which is why truly distinctive design always requires some creative courage.` },
            { word: `versatile`, definition: `Able to work effectively across many different sizes, colors, contexts, and surfaces — a great logo must communicate clearly whether it's on a screen, a building, a button, or a pen.`, audioPrompt: `A logo has to work everywhere, {name}: on a phone screen and on the side of a truck. In color and in black and white. At the size of a stamp and blown up on a billboard. That's versatility — and it's what eliminates logos with too many fine details, too many colors, or effects that only work digitally. The most durable logos are simple enough to work in any context. Complexity is the enemy of versatility, and versatility is the test of how real a logo design actually is.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `designer`,
              label: `✅ Thinking like a graphic designer`,
              color: `#34D399`,
            },
            {
              id: `against`,
              label: `⚠️ A layout habit that works against clear design`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l15-g1`,
              image: `l15-game-1.png`,
              label: `Making the title of a poster much larger and bolder than everything else, so the viewer's eye goes there first before reading anything smaller.`,
              matchPhrase: `That's visual hierarchy in action — deliberately controlling where the eye goes and in what order. Size and weight are two of the most powerful tools for creating hierarchy: what's biggest and boldest gets seen first. When you control that sequence intentionally, you control how the viewer experiences your design.`,
              correctMatch: `designer`,
            },
            {
              id: `l15-g2`,
              image: `l15-game-2.png`,
              label: `Designing a simple symbol for a made-up business that works just as well tiny on a business card as blown up large on a billboard.`,
              matchPhrase: `That's the versatility principle of great logo design — one of the five qualities that separates a logo that lasts from one that fails. A logo that only works at one size, or only in colour, or only in certain contexts, hasn't solved the problem. Simplicity is usually what makes versatility possible: the fewer the parts, the more reliably it scales.`,
              correctMatch: `designer`,
            },
            {
              id: `l15-g3`,
              image: `l15-game-3.png`,
              label: `Using eight different fonts on the same poster because each one looks interesting on its own.`,
              matchPhrase: `Typography communicates personality — and using too many typefaces creates a design that feels chaotic, inconsistent, and hard to read. Great typographers typically use two fonts maximum: one for headings and one for body text, chosen because they work together. More than that, and the fonts start competing rather than collaborating. Repetition and consistency create unity; too much variety creates noise.`,
              correctMatch: `against`,
            },
            {
              id: `l15-g4`,
              image: `l15-game-4.png`,
              label: `Scattering related pieces of information randomly across the page without grouping them together.`,
              matchPhrase: `That works against the proximity principle — one of the four core design principles. When related elements are grouped together, viewers naturally understand they belong together and process them as a unit. When they're scattered randomly, viewers have to work hard to find connections, and the design feels disorganised and confusing. Grouping related things and separating unrelated ones is one of the simplest ways to make a design instantly more readable.`,
              correctMatch: `against`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l15-q1`,
              format: `multiple-choice`,
              question: `What does the "proximity" principle in graphic design mean?`,
              options: [
                `Placing the most important element as close to the centre of the design as possible`,
                `Making sure text is always positioned close to its related image`,
                `Grouping related items together and separating unrelated items — so viewers can see which elements belong together without being told`,
                `Keeping all design elements within a certain distance of each other to create a compact layout`,
              ],
              correctIndex: 2,
              explanation: `Proximity is about using spatial relationships to communicate conceptual relationships. When elements are grouped together, the viewer's brain automatically reads them as belonging together — even without labels or lines connecting them. When unrelated elements are placed close together, viewers assume they're connected and get confused when they're not. Proximity is one of the most effortless and powerful tools in design: just moving elements closer or farther apart can completely change how a layout is understood.`,
            },
            {
              id: `l15-q2`,
              format: `multiple-choice`,
              question: `What is visual hierarchy in graphic design?`,
              options: [
                `Arranging design elements from oldest to newest in historical order`,
                `Guiding the viewer's eye through a design in a specific order by making more important elements more visually prominent`,
                `Organising text purely from the largest to the smallest font size`,
                `Creating a ranking system to decide which design elements are most important before starting`,
              ],
              correctIndex: 1,
              explanation: `Visual hierarchy is the designer's tool for controlling attention. By making some elements larger, bolder, higher contrast, or more spatially prominent, the designer tells the viewer where to look first — and then second, and then third. Without hierarchy, every element competes equally for attention, and the viewer doesn't know where to start. A well-constructed hierarchy makes the experience of reading a design feel effortless, because the eye is guided smoothly from the most important information to the least, in exactly the order the designer intended.`,
            },
            {
              id: `l15-q3`,
              format: `multiple-choice`,
              question: `What makes a great logo?`,
              options: [
                `Using many colours and complex imagery so it stands out from competitors`,
                `Simple, distinctive, appropriate for the brand, versatile at all sizes, and timeless rather than tied to current trends`,
                `Always including the company name written out in full so there's no confusion`,
                `Following the latest design trends to signal that the brand is modern and current`,
              ],
              correctIndex: 1,
              explanation: `The five qualities of a great logo — simple, distinctive, appropriate, versatile, and timeless — are almost a checklist for design restraint. Complexity fails at small sizes. Trends age. Non-versatile logos break in certain contexts. The paradox of logo design is that the simpler the solution, the harder it is to find — because simplicity requires that you communicate everything with as little as possible. The Nike swoosh is one stroke. The Apple apple is one shape. Simplicity isn't the easy answer; it's the hardest one.`,
            },
            {
              id: `l15-q4`,
              format: `true-false`,
              question: `Typography communicates before a reader reads a single word — the personality of the typeface sends a message independently of the content it carries.`,
              correctAnswer: true,
              explanation: `True. A serif font used on a law firm's sign communicates authority and tradition before you've read the firm's name. A playful hand-drawn font on a children's book cover communicates warmth and fun before a word is read. The typeface choice is itself a design decision that carries meaning — and a mismatch between typeface personality and content creates immediate confusion. Great typographers choose fonts that amplify the message; poor typographers choose fonts that merely look appealing in isolation.`,
            },
            {
              id: `l15-q5`,
              format: `fill-blank`,
              question: `Fonts with small decorative strokes on the ends of their letters — traditionally used in newspapers and books — are called ___ fonts.`,
              options: [
                `serif`,
                `sans-serif`,
                `display`,
                `script`,
              ],
              correctIndex: 0,
              explanation: `Serif fonts are named for those small finishing strokes (serifs) at the ends of letterforms. They have been used in print for centuries because the serifs were believed to help guide the eye along lines of text — making them well-suited to long body copy. They carry associations of tradition, authority, and trustworthiness. Sans-serif fonts (without serifs) feel more modern and clean. The choice between them is a personality decision — and in graphic design, every personality decision is also a communication decision.`,
            },
            {
              id: `l15-q6`,
              format: `multiple-choice`,
              question: `Why is contrast described as one of the most important principles in graphic design?`,
              options: [
                `Because high contrast makes designs look more modern and professional`,
                `Because contrast between colours helps people with colour blindness read designs`,
                `Because without contrast, everything in a design feels equally important — so nothing stands out and the viewer doesn't know where to look`,
                `Because contrast between elements is what creates the alignment and proximity needed for good design`,
              ],
              correctIndex: 2,
              explanation: `Contrast is what creates distinction — it's what allows important elements to stand out from less important ones, headings to read above body text, and call-to-action buttons to jump off a page. Without contrast, a design is visually flat: everything competes at the same level, nothing communicates priority, and the viewer's eye has nowhere to go. Contrast doesn't require bright colours or extreme differences — even subtle differences in size, weight, or spacing can create the hierarchy that makes a design immediately readable.`,
            },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Graphic design principles are used in every form of visual communication: websites, apps, packaging, wayfinding systems in airports and hospitals, book covers, film posters, political campaigns, scientific journals, and social media. The same four principles — contrast, repetition, alignment, proximity — that make a poster readable make a website navigable and a dashboard understandable. Design literacy is increasingly a form of general literacy: understanding how visual communication works helps you both create it and read it critically.`,
          familyAdventure: `Go on a logo hunt together — through a neighbourhood, a shopping area, or even just by looking at packaging at home. Find 10 logos and photograph or sketch them. Bring them together and analyse each: Is it simple or complex? What does it communicate? What colours and why? Is it timeless or trendy? Which is most effective and why? Which is the weakest? Try to agree — you might find you disagree, which is also interesting. Design decisions are rarely objectively right or wrong.`,
          creativePrompt: `Design a logo for an imaginary business of your choice. Follow the full process: (1) Write one sentence describing what the business does and its personality — fun or serious, modern or classic, bold or gentle. (2) Sketch at least 10 quick thumbnail ideas, small and rough — don't overthink. (3) Choose your best three and refine them. (4) Select your final design, choose a colour, and add a font if needed. (5) Explain: what does it communicate? Why those colours? Why that shape? Does it work small? Run it through the five qualities — simple, distinctive, appropriate, versatile, timeless — and see how it holds up.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that every sign, poster, logo, and layout you've ever seen was built from a handful of the same principles — contrast, hierarchy, alignment, proximity — applied with intention. Design is everywhere, and now you can see exactly how it works. Muse is delighted that the visual world just got a lot more interesting for you.`,
          badge: `graphic-designer`,
          badgeName: `Graphic Designer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L15.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L15] Loaded: "Graphic Design Basics" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l15-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l15-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l15-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l15-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L15] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L15] One or more magazine assets missing'));
}
