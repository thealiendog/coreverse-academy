// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L20 — Building Your Portfolio  (CAPSTONE / FINALE)
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Creative Identity, Portfolio, Self-Presentation, Synthesis
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: CASE STUDY (real portfolio-building decisions: what to include,
// range vs. focus, honest presentation, the living portfolio, sharing your work). Contract
// matches L04/L07/L09/L12/L16/L19: cases[] with title/type/description/questions[]/
// evaluation; synthesisPrompt + reflectionPrompt.
//
// CAPSTONE DIFFERENCES (deliberate, confirmed):
//   - xpReward: 100  (not 75)
//   - celebration xpEarned: 100  (not 75)
//   - nextLessonPreview: null  (band complete, no next lesson)
// This is the band finale: it gathers the whole arc (skills + L19 manifesto + the
// Voyager's voice) into the body of work that shows the world who they are, and sends them
// off into their creative life. Empowering, forward-looking, a genuine send-off.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l20-v1";

const CREATIVE_ARTS_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-20`,
      title: `Building Your Portfolio`,
      duration: 35,
      xpReward: 100,
      badge: `portfolio-builder`,
      badgeName: `Portfolio Builder`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, here we are. The last lesson of the whole band. For nineteen lessons you have studied art and made your own, sharpened how you think, and decided what you stand for. Now you gather it. A portfolio is a body of work, a collection of the things you have made, chosen and arranged to show who you are as a creator. It is how artists, designers, musicians, writers, and makers of every kind show the world, and themselves, what they can do and what they care about. It is also where everything in this band comes together: your skills, the values from your manifesto, and your own emerging voice, all in one place. This is not really an ending; it is a beginning. Today you learn how to build a portfolio that is honest, that shows who you actually are, and that grows with you for the rest of your creative life. And when we finish, you will not just be someone who knows about art. You will be a creator with a body of work, a set of values, and a voice. Let's gather it all. Onward.`,
          headline: `Building Your Portfolio`,
          subtitle: `Gathering everything you are into the work that shows the world. The finale. Case Study.`,
          visual: `/voyager-assets/creative-arts/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Portfolio Really Is`,
          paragraphs: [
            `Start with what a portfolio actually is, because the word can sound formal and grown-up when the idea is simple and yours. A portfolio is a curated collection of your work, "curated" meaning chosen and arranged on purpose, not just a pile of everything you have ever made. It is the body of work you put forward to show who you are as a creator: what you can do, what you care about, and how you have grown. Artists, designers, photographers, musicians, writers, architects, filmmakers, makers of every kind keep portfolios, because at some point everyone who creates needs a way to show their work to others, and to see it gathered for themselves.`,
            `Crucially, a portfolio is not a trophy case of only your "best" or most impressive pieces ranked by how good they are. It is more like a self-portrait made of your work: chosen and arranged to communicate who you are, what you make, and where you are headed. That means a portfolio can include a piece not because it is technically perfect, but because it shows something true about you, your interests, your growth, your voice, your willingness to take a risk. The question for each piece is less "is this my most impressive thing?" and more "does this help show who I am as a creator?" That shift, from ranking to representing, is the heart of building a portfolio well.`,
            `And a portfolio serves two audiences at once, which is worth holding in mind as you build. The outward audience is other people, anyone you might show your work to: a teacher, a program, a collaborator, eventually maybe a client or an audience. But the inward audience is you. Gathering your work in one place lets you see your own growth, notice your real interests and patterns, and recognize the creator you are becoming, which you cannot see when everything is scattered. A good portfolio is both a window others look through to see you, and a mirror you look into to see yourself, and both of those matter, especially at the start of a creative life.`,
          ],
          image: `/voyager-assets/creative-arts/l20-s1-whatis.webp`,
          imageCaption: `What a portfolio actually is, the idea is simple and yours even if the word sounds formal. A portfolio is a CURATED collection of your work, "curated" meaning chosen and arranged on purpose, not a pile of everything you ever made. It is the body of work you put forward to show who you are as a creator: what you can do, what you care about, how you've grown. Artists, designers, musicians, writers, filmmakers, all keep them, because everyone who creates eventually needs a way to show their work, and to see it gathered for themselves. Crucially, it is NOT a trophy case of only your "best" pieces ranked by quality, it is more like a SELF-PORTRAIT made of your work. So a piece can earn its place not because it is technically perfect but because it shows something true about you (your interests, growth, voice, willingness to risk). The shift from RANKING to REPRESENTING is the heart of it. And it serves two audiences: outward (others who look through it like a window to see you) and inward (you, looking in like a mirror to see your own growth).
`,
          vocab: [
            {
              word: `your work`,
              definition: `A portfolio is a curated collection of your work, where "curated" means chosen and arranged on purpose rather than just a pile of everything you have ever made, and it is the body of work you put forward to show who you are as a creator: what you can do, what you care about, and how you have grown. Artists, designers, photographers, musicians, writers, architects, filmmakers, and makers of every kind keep portfolios, because at some point everyone who creates needs a way to show their work to others and to see it gathered for themselves. Crucially, a portfolio is not a trophy case of only your "best" or most impressive pieces ranked by how good they are; it is more like a self-portrait made of your work, chosen and arranged to communicate who you are, what you make, and where you are headed, which means a piece can belong not because it is technically perfect but because it shows something true about you, your interests, your growth, your voice, your willingness to take a risk. The question for each piece is less "is this my most impressive thing?" and more "does this help show who I am as a creator?", and that shift from ranking to representing is the heart of building a portfolio well. A portfolio also serves two audiences at once: the outward audience is other people (a teacher, a program, a collaborator, eventually a client or an audience), and the inward audience is you, because gathering your work in one place lets you see your own growth, notice your real interests and patterns, and recognize the creator you are becoming, which you cannot see when everything is scattered, so a good portfolio is both a window others look through to see you and a mirror you look into to see yourself.`,
              audioPrompt: `Start with what a portfolio actually is, {name}, because the word can sound formal and grown-up when the idea is simple and yours. A portfolio is a curated collection of your work, "curated" meaning chosen and arranged on purpose, not just a pile of everything you have ever made. It is the body of work you put forward to show who you are as a creator: what you can do, what you care about, and how you have grown. Artists, designers, musicians, writers, filmmakers, makers of every kind keep portfolios, because at some point everyone who creates needs a way to show their work to others, and to see it gathered for themselves. Crucially, a portfolio is not a trophy case of only your best or most impressive pieces ranked by how good they are. It is more like a self-portrait made of your work: chosen and arranged to communicate who you are, what you make, and where you are headed. That means a portfolio can include a piece not because it is technically perfect, but because it shows something true about you, your interests, your growth, your voice, your willingness to take a risk. The question for each piece is less "is this my most impressive thing?" and more "does this help show who I am as a creator?" That shift, from ranking to representing, is the heart of building a portfolio well. And a portfolio serves two audiences at once. The outward audience is other people, anyone you might show your work to. But the inward audience is you. Gathering your work in one place lets you see your own growth, notice your real interests, and recognize the creator you are becoming. A good portfolio is both a window others look through to see you, and a mirror you look into to see yourself.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Choosing What Goes In`,
          paragraphs: [
            `So how do you actually choose what goes in, since a portfolio is curated and cannot be everything? Start with the guiding question from a moment ago, applied to each piece: "does this help show who I am as a creator?" That single question does more work than any rule, because it shifts you from ranking pieces by impressiveness to choosing pieces by what they reveal. A technically rough piece that shows a real risk you took, or an obsession that is truly yours, can belong more than a polished piece that says nothing about you.`,
            `A few practical principles help. First, show range OR focus on purpose, not by accident: if you do many kinds of things, a portfolio can show your range, but if you care most about one thing, it can go deep instead, and either is fine as long as it is a choice that fits who you are, rather than a random scatter. Second, include growth, not just peaks: showing how you have developed, even a piece that is not your best but marks a turning point, often tells a truer and more interesting story than only your shiniest results, and the people who matter usually find growth more compelling than flawless polish. Third, quality over quantity: a smaller set of pieces you genuinely stand behind beats a huge pile that buries the good work, because every weak piece you include slightly lowers what the whole says about you.`,
            `And here your manifesto from the last lesson becomes a real tool, not just an exercise. The values you chose can guide what goes in: if you value honesty, you present your work truthfully, which the next section is about; if you value substance over surface, you include work with real meaning, not just things that look flashy; if you value your own voice over copying trends, you favor the pieces that actually sound like you, even the riskier ones, over safe imitations of whatever is winning. A portfolio is, in a real sense, your manifesto made visible, the place where the values you wrote down show up in what you actually choose to put your name on. Let your manifesto help you choose.`,
          ],
          image: `/voyager-assets/creative-arts/l20-s2-choosing.webp`,
          imageCaption: `How to choose what goes in, since a portfolio is curated and cannot be everything. The guiding question applied to each piece: "does this help show who I am as a creator?", it shifts you from ranking by impressiveness to choosing by what reveals you, so a rough piece showing a real risk or a true obsession can belong more than a polished piece that says nothing. Practical principles: (1) show RANGE or FOCUS on purpose (many kinds of things, or deep in one, either is fine if it is a choice that fits you, not a random scatter); (2) include GROWTH, not just peaks (a turning-point piece tells a truer story than only your shiniest results; growth is often more compelling than flawless polish); (3) QUALITY OVER QUANTITY (a small set you stand behind beats a pile that buries the good work, every weak piece lowers what the whole says). And your L19 MANIFESTO becomes a real tool: value honesty, present truthfully; value substance, include meaning not flash; value your own voice, favor the pieces that sound like you. A portfolio is your manifesto made visible.
`,
          vocab: [
            {
              word: `made visible`,
              definition: `Since a portfolio is curated and cannot be everything, you choose what goes in using the guiding question applied to each piece: "does this help show who I am as a creator?", which does more work than any rule because it shifts you from ranking pieces by impressiveness to choosing pieces by what they reveal, so a technically rough piece that shows a real risk you took or an obsession that is truly yours can belong more than a polished piece that says nothing about you. A few practical principles help. First, show range or focus on purpose rather than by accident: if you do many kinds of things a portfolio can show your range, but if you care most about one thing it can go deep instead, and either is fine as long as it is a choice that fits who you are rather than a random scatter. Second, include growth, not just peaks: showing how you have developed, even a piece that is not your best but marks a turning point, often tells a truer and more interesting story than only your shiniest results, since the people who matter usually find growth more compelling than flawless polish. Third, quality over quantity: a smaller set of pieces you genuinely stand behind beats a huge pile that buries the good work, because every weak piece you include slightly lowers what the whole says about you. And here your manifesto from the last lesson becomes a real tool rather than just an exercise, because the values you chose can guide what goes in: if you value honesty you present your work truthfully, if you value substance over surface you include work with real meaning rather than just flashy things, and if you value your own voice over copying trends you favor the pieces that actually sound like you, even the riskier ones, over safe imitations of whatever is winning. A portfolio is, in a real sense, your manifesto made visible, the place where the values you wrote down show up in what you actually choose to put your name on.`,
              audioPrompt: `So how do you actually choose what goes in, {name}, since a portfolio is curated and cannot be everything? Start with the guiding question, applied to each piece: "does this help show who I am as a creator?" That single question does more work than any rule, because it shifts you from ranking pieces by impressiveness to choosing pieces by what they reveal. A technically rough piece that shows a real risk you took, or an obsession that is truly yours, can belong more than a polished piece that says nothing about you. A few practical principles help. First, show range or focus on purpose, not by accident: if you do many kinds of things, a portfolio can show your range, but if you care most about one thing, it can go deep instead, and either is fine as long as it is a choice that fits who you are. Second, include growth, not just peaks: showing how you have developed, even a piece that marks a turning point, often tells a truer and more interesting story than only your shiniest results. Third, quality over quantity: a smaller set of pieces you genuinely stand behind beats a huge pile that buries the good work. And here your manifesto from the last lesson becomes a real tool, not just an exercise. The values you chose can guide what goes in: if you value honesty, you present your work truthfully; if you value substance over surface, you include work with real meaning, not just things that look flashy; if you value your own voice over copying trends, you favor the pieces that actually sound like you. A portfolio is, in a real sense, your manifesto made visible. Let your manifesto help you choose.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Presenting Your Work Honestly`,
          paragraphs: [
            `How you present your work matters almost as much as the work itself, and this is where the band's whole spine, honesty, credit, substance, comes back one last time. The first rule is the one you have met again and again: present your work truthfully. Show what you actually made and did, do not claim skills you do not have or work that is not yours, and credit collaborators and influences honestly, the same credit principle from the intellectual-property and fusion lessons, now in how you present yourself. A portfolio built on exaggeration or borrowed credit is a house on sand: it can collapse the moment anyone looks closely, and it costs you the one thing a creator most needs, the trust that your work is really yours.`,
            `Honest presentation also means being truthful about growth and context without either bragging or apologizing. You do not need to oversell ("this masterpiece changed everything"), and you do not need to tear yourself down ("this is probably bad, sorry"). The confident, honest middle is simply to show the work and, where helpful, say plainly what it is and what you were exploring: "this was my first attempt at X," or "here I was trying to capture Y." That kind of plain, truthful framing respects both your work and the viewer, and it is far more compelling than either inflation or self-deprecation, both of which actually distract from the work.`,
            `And presentation is itself a creative act, which is a lovely note to end the craft on. How you arrange, order, and frame your pieces shapes the story your portfolio tells, the same way editing shapes a film: the order you put things in, what you place first and last, how you group them, and the few words you write around them all guide how someone experiences your work. So caring about presentation is not vanity; it is finishing the job. A strong piece presented carelessly undersells itself, and a thoughtfully arranged portfolio lets each piece be seen at its best and adds up to more than the sum of its parts. You have spent this whole band learning that how something is made and shown shapes how it is received, present your own work with that same awareness.`,
          ],
          image: `/voyager-assets/creative-arts/l20-s3-honestly.webp`,
          imageCaption: `How you present your work matters almost as much as the work, and the band's spine, honesty, credit, substance, returns one last time. (1) PRESENT TRUTHFULLY: show what you actually made and did, do not claim skills you lack or work that is not yours, credit collaborators and influences honestly (the IP and fusion credit principle, now in self-presentation). A portfolio built on exaggeration or borrowed credit is a house on sand, it collapses under a close look and costs you a creator's most needed thing: trust that the work is really yours. (2) Be truthful about growth and context without bragging OR apologizing, skip overselling ("this masterpiece changed everything") AND self-tearing-down ("this is probably bad, sorry"); the honest middle just shows the work and plainly says what it is ("my first attempt at X," "here I was exploring Y"). (3) PRESENTATION IS A CREATIVE ACT: how you order, group, and frame pieces shapes the story, like editing shapes a film. Caring about it is not vanity, it is finishing the job.
`,
          vocab: [
            {
              word: `work honestly`,
              definition: `How you present your work matters almost as much as the work itself, and this is where the band's whole spine, honesty, credit, substance, comes back one last time. The first rule is the one you have met again and again: present your work truthfully, showing what you actually made and did, not claiming skills you do not have or work that is not yours, and crediting collaborators and influences honestly, the same credit principle from the intellectual-property and fusion lessons, now in how you present yourself, because a portfolio built on exaggeration or borrowed credit is a house on sand that can collapse the moment anyone looks closely and costs you the one thing a creator most needs, the trust that your work is really yours. Honest presentation also means being truthful about growth and context without either bragging or apologizing: you do not need to oversell ("this masterpiece changed everything") and you do not need to tear yourself down ("this is probably bad, sorry"), because the confident, honest middle is simply to show the work and, where helpful, say plainly what it is and what you were exploring ("this was my first attempt at X" or "here I was trying to capture Y"), a plain, truthful framing that respects both your work and the viewer and is far more compelling than either inflation or self-deprecation, both of which actually distract from the work. And presentation is itself a creative act: how you arrange, order, and frame your pieces shapes the story your portfolio tells, the same way editing shapes a film, since the order you put things in, what you place first and last, how you group them, and the few words you write around them all guide how someone experiences your work, so caring about presentation is not vanity but finishing the job, because a strong piece presented carelessly undersells itself while a thoughtfully arranged portfolio lets each piece be seen at its best and adds up to more than the sum of its parts. You have spent this whole band learning that how something is made and shown shapes how it is received, so present your own work with that same awareness.`,
              audioPrompt: `How you present your work matters almost as much as the work itself, {name}, and this is where the band's whole spine, honesty, credit, substance, comes back one last time. The first rule is the one you have met again and again: present your work truthfully. Show what you actually made and did, do not claim skills you do not have or work that is not yours, and credit collaborators and influences honestly, the same credit principle from the intellectual-property and fusion lessons, now in how you present yourself. A portfolio built on exaggeration or borrowed credit is a house on sand: it can collapse the moment anyone looks closely, and it costs you the one thing a creator most needs, the trust that your work is really yours. Honest presentation also means being truthful about growth and context without either bragging or apologizing. You do not need to oversell, and you do not need to tear yourself down. The confident, honest middle is simply to show the work and, where helpful, say plainly what it is and what you were exploring: "this was my first attempt at X," or "here I was trying to capture Y." That kind of plain, truthful framing respects both your work and the viewer, and it is far more compelling than either inflation or self-deprecation. And presentation is itself a creative act. How you arrange, order, and frame your pieces shapes the story your portfolio tells, the same way editing shapes a film. So caring about presentation is not vanity; it is finishing the job. A strong piece presented carelessly undersells itself, and a thoughtfully arranged portfolio lets each piece be seen at its best and adds up to more than the sum of its parts.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `A Living Thing, And A Beginning`,
          paragraphs: [
            `Here is the most freeing truth about a portfolio, especially your first one: it is a living thing, never finished, always growing, and that is exactly how it should be. Your portfolio right now is not a final verdict on whether you are "good enough"; it is a snapshot of who you are as a creator today, and it is meant to change as you do. You will add new work, remove old pieces that no longer represent you, and watch the whole thing evolve as your skills and voice develop. A portfolio you are slightly embarrassed by in a year is not a failure, it is proof you grew, which is the entire point. So start now, with what you have, however small, because a real, growing portfolio of modest work beats an imaginary perfect one you are always waiting to be ready for.`,
            `This connects straight to the persistence value from the career lesson. You do not build a portfolio, or a creative life, in one heroic burst; you build it piece by piece, over years, by making things and keeping the ones that matter. The pressure to have an impressive body of work right now is a trap, because every creator you admire started with a first piece, a rough early collection, a portfolio that would look thin next to their later one. The only way to a deep body of work is to begin a shallow one and keep going. Starting small and imperfect is not the lesser path; it is the only path anyone has ever actually walked.`,
            `And so this is where the band ends, and your creative life begins in earnest, {name}. Look at what you carry now: real skills practiced across many forms, a way of thinking that can tell substance from spectacle and truth from hype, a manifesto of values you chose for yourself, and a portfolio, even a tiny first one, that gathers your work and your voice in one place. That is not the equipment of someone who merely knows about art. That is the equipment of a creator. Whatever you go on to make, music, films, paintings, stories, designs, performances, things that do not have names yet, you will make it as someone with skill, judgment, values, and a growing body of work behind you. The portfolio is not the finish line. It is the launchpad. Keep making things. Keep gathering the ones that matter. And keep becoming who your work is showing you that you are.`,
          ],
          image: `/voyager-assets/creative-arts/l20-s4-living.webp`,
          imageCaption: `The most freeing truth, especially about your first portfolio: it is a LIVING THING, never finished, always growing, exactly as it should be. Yours right now is not a final verdict on whether you are "good enough", it is a snapshot of who you are as a creator today, meant to change as you do (add new work, remove pieces that no longer represent you, watch it evolve). A portfolio you are slightly embarrassed by in a year is not failure, it is proof you grew, the whole point. So start NOW, with what you have, however small, a real growing portfolio of modest work beats an imaginary perfect one you keep waiting to be ready for. This is the persistence value from the career lesson: you build a portfolio, and a creative life, piece by piece over years, not in one heroic burst, every creator you admire started with a thin first collection. Starting small and imperfect is not the lesser path, it is the only path anyone ever walked. And so the band ends and your creative life begins: you carry real skills, sharp judgment, a chosen manifesto, and a portfolio, the equipment of a CREATOR. Not the finish line, the launchpad.
`,
          vocab: [
            {
              word: `thing beginning`,
              definition: `The most freeing truth about a portfolio, especially your first one, is that it is a living thing, never finished and always growing, and that is exactly how it should be, because your portfolio right now is not a final verdict on whether you are "good enough" but a snapshot of who you are as a creator today, meant to change as you do: you will add new work, remove old pieces that no longer represent you, and watch the whole thing evolve as your skills and voice develop, so a portfolio you are slightly embarrassed by in a year is not a failure but proof you grew, which is the entire point, and the move is to start now with what you have, however small, because a real, growing portfolio of modest work beats an imaginary perfect one you are always waiting to be ready for. This connects straight to the persistence value from the career lesson, because you do not build a portfolio, or a creative life, in one heroic burst but piece by piece over years, by making things and keeping the ones that matter, so the pressure to have an impressive body of work right now is a trap, since every creator you admire started with a first piece and a rough early collection that would look thin next to their later one, and the only way to a deep body of work is to begin a shallow one and keep going, which makes starting small and imperfect not the lesser path but the only path anyone has ever actually walked. And so this is where the band ends and your creative life begins in earnest: you now carry real skills practiced across many forms, a way of thinking that can tell substance from spectacle and truth from hype, a manifesto of values you chose for yourself, and a portfolio (even a tiny first one) that gathers your work and your voice in one place, which is not the equipment of someone who merely knows about art but the equipment of a creator, so whatever you go on to make you will make it as someone with skill, judgment, values, and a growing body of work behind you, and the portfolio is not the finish line but the launchpad: keep making things, keep gathering the ones that matter, and keep becoming who your work is showing you that you are.`,
              audioPrompt: `Here is the most freeing truth about a portfolio, {name}, especially your first one: it is a living thing, never finished, always growing, and that is exactly how it should be. Your portfolio right now is not a final verdict on whether you are good enough; it is a snapshot of who you are as a creator today, and it is meant to change as you do. You will add new work, remove old pieces that no longer represent you, and watch the whole thing evolve as your skills and voice develop. A portfolio you are slightly embarrassed by in a year is not a failure, it is proof you grew, which is the entire point. So start now, with what you have, however small, because a real, growing portfolio of modest work beats an imaginary perfect one you are always waiting to be ready for. This connects straight to the persistence value from the career lesson. You do not build a portfolio, or a creative life, in one heroic burst; you build it piece by piece, over years. Every creator you admire started with a first piece, a rough early collection. The only way to a deep body of work is to begin a shallow one and keep going. And so this is where the band ends, and your creative life begins in earnest. Look at what you carry now: real skills practiced across many forms, a way of thinking that can tell substance from spectacle and truth from hype, a manifesto of values you chose for yourself, and a portfolio, even a tiny first one, that gathers your work and your voice in one place. That is the equipment of a creator. The portfolio is not the finish line. It is the launchpad. Keep making things. Keep gathering the ones that matter. And keep becoming who your work is showing you that you are.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before the final dilemmas. You learned what a portfolio really is, a curated, chosen-on-purpose collection that works like a self-portrait made of your work, showing who you are rather than just ranking your most impressive pieces, and serving two audiences: others, and you. You learned how to choose what goes in, by asking "does this show who I am as a creator?", showing range or focus on purpose, including growth and not just peaks, favoring quality over quantity, and letting your manifesto guide what you put your name on. You learned to present honestly, truthfully, without bragging or apologizing, with presentation itself as a creative act. And you learned the most freeing truth: a portfolio is a living thing you start now and grow for life.`,
            `Now the case-study screen will hand you the real decisions of building a first portfolio: whether to include a rough piece that shows who you are or cut it for being imperfect, whether to show wide range or deep focus, how to present a piece honestly without inflating or apologizing, what to do with old work you have outgrown, and whether to wait until you are "good enough" or start now. As in the last lesson, these are not tests with hidden answers; they are the actual choices you will face, and working them is how you learn to build a body of work that is truly yours.`,
            `And then, {name}, you are done, with the lesson, and with the whole band. Twenty lessons. You started by looking at conceptual art and asking what art even is, and you arrive here, building the body of work that announces what kind of creator YOU are. Between those two points you learned to think clearly about beauty and hype, power and respect, money and meaning, tradition and innovation, and you turned all of it inward into values and a voice that are yours. Whatever you make from here, you carry this band with you, not as facts to recite, but as judgment, values, and skill living in how you create. So let's finish the way we started, by doing the real work, and then I am going to send you off into your creative life properly. One last set of choices. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l20-s5-before.webp`,
          imageCaption: `Threads together, the band's last synthesis. What a portfolio really is: a curated, chosen-on-purpose collection that works like a self-portrait made of your work, showing who you are (not just ranking your best), serving others AND you. How to choose what goes in: ask "does this show who I am?", show range or focus on purpose, include growth not just peaks, quality over quantity, let your manifesto guide what you put your name on. Present honestly, no bragging or apologizing, with presentation itself a creative act. The freeing truth: a portfolio is a living thing you start now and grow for life. The case-study screen ahead hands you the real first-portfolio decisions (a rough revealing piece vs. cut it, range vs. focus, honest presentation, outgrown work, start-now vs. wait). Then you are done, twenty lessons, from "what is art?" to "what kind of creator am I?" Whatever you make, you carry this band as judgment, values, and skill. One last set of choices.
`,
          vocab: [
            {
              word: `synthesis sendoff`,
              definition: `The synthesis before the final case studies, and the close of the whole band. You learned what a portfolio really is: a curated, chosen-on-purpose collection that works like a self-portrait made of your work, showing who you are as a creator rather than just ranking your most impressive pieces, and serving two audiences at once, the others who look through it like a window and you who look into it like a mirror to see your own growth. You learned how to choose what goes in by asking "does this help show who I am as a creator?", showing range or focus on purpose rather than by accident, including growth and turning points and not only your peaks, favoring quality over quantity, and letting the manifesto you wrote in the last lesson guide what you actually put your name on, since a portfolio is your manifesto made visible. You learned to present your work honestly, truthfully and with credit, without either bragging or apologizing, landing in the confident honest middle, and with presentation itself treated as a creative act that shapes the story your work tells, the way editing shapes a film. And you learned the most freeing truth: a portfolio is a living thing, never finished, that you start now with whatever you have and grow for the rest of your creative life, so starting small and imperfect is not the lesser path but the only path anyone ever walked, connected to the persistence value from the career lesson. The case-study screen will hand you the real decisions of building a first portfolio (a rough but revealing piece versus cutting it, range versus focus, honest presentation, outgrown work, and starting now versus waiting to be "good enough"), the actual choices you will face. And then the band is complete, twenty lessons that traveled from "what even is art?" to "what kind of creator am I?", and whatever you make from here you carry this band with you not as facts to recite but as judgment, values, and skill living in how you create.`,
              audioPrompt: `Pull it together before the final dilemmas, {name}. You learned what a portfolio really is, a curated, chosen-on-purpose collection that works like a self-portrait made of your work, showing who you are rather than just ranking your most impressive pieces, and serving two audiences: others, and you. You learned how to choose what goes in, by asking "does this show who I am as a creator?", showing range or focus on purpose, including growth and not just peaks, favoring quality over quantity, and letting your manifesto guide what you put your name on. You learned to present honestly, truthfully, without bragging or apologizing, with presentation itself as a creative act. And you learned the most freeing truth: a portfolio is a living thing you start now and grow for life. Now the case-study screen will hand you the real decisions of building a first portfolio. As in the last lesson, these are not tests with hidden answers; they are the actual choices you will face, and working them is how you learn to build a body of work that is truly yours. And then, you are done, with the lesson, and with the whole band. Twenty lessons. You started by looking at conceptual art and asking what art even is, and you arrive here, building the body of work that announces what kind of creator you are. Whatever you make from here, you carry this band with you, not as facts to recite, but as judgment, values, and skill living in how you create. So let's finish the way we started, by doing the real work, and then I am going to send you off into your creative life properly. One last set of choices.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l20-case-study`,
          type: `case-study`,
          headline: `Five Decisions For Your First Portfolio`,
          intro: `{name}, the last set of choices in the whole band: the real decisions of building your first portfolio. As before, these are mirrors, not tests with hidden answers. For each, reason through what is really at stake, and let your skills, your judgment, and the manifesto you just wrote guide you toward what YOU would choose.`,
          cases: [
            {
              id: `c1`,
              title: `The rough piece that's really you`,
              type: `Representing vs. ranking`,
              description: `You have a piece that is not technically your best, it is a little rough, but it shows something genuinely true about you: a real risk you took, an obsession that is uniquely yours, a turning point in your growth. You also have polished, competent pieces that are "better" but say almost nothing about who you are. Your portfolio can't hold everything. What do you do?`,
              questions: [
                `Which question matters more here: "is this my best?" or "does this show who I am?"`,
                `What does keeping the rough-but-true piece communicate that the polished one can't?`,
                `When might you still cut it?`,
              ],
              evaluation: `This is the heart of the "representing, not ranking" idea, and the rough-but-true piece usually earns its place. The deciding question is not "is this my most impressive piece?" but "does this help show who I am as a creator?", and a piece that reveals a real risk, a genuine obsession, or a turning point communicates exactly that, while a polished piece that says nothing about you fills space without doing the portfolio's actual job. Keeping it signals confidence and self-knowledge: you are showing who you are, not just what looks slick, and viewers who matter often find an honest, characterful piece more compelling than flawless-but-empty competence. There are still times to cut it: if it is so rough that it actively misrepresents your skill in a way that works against you for a specific purpose, or if you have another piece that shows the same true thing about you better, then it can go. But the instinct to cut everything imperfect in favor of safe polish is exactly the ranking trap to resist. A portfolio of who-you-are beats a portfolio of merely-impressive almost every time.`,
            },
            {
              id: `c2`,
              title: `Range or focus?`,
              type: `Choosing on purpose`,
              description: `You make many different kinds of things, music, drawing, writing, video, and you cannot decide whether your portfolio should show your wide range (lots of different work) or focus deeply on the one thing you care about most. You worry that range looks scattered but focus looks narrow. What's the right move?`,
              questions: [
                `Is there a single "correct" answer, or does it depend on you?`,
                `What's the difference between purposeful range and a random scatter?`,
                `How could your manifesto or your real interests settle this?`,
              ],
              evaluation: `There is no single correct answer here, and that is the actual lesson: range and focus are both legitimate, and the right move depends on who you are and what the portfolio is for, as long as it is a choice made on purpose rather than an accident. Purposeful range, deliberately showing that you work meaningfully across forms, tells a true story about a genuinely multi-disciplinary creator; a random scatter, just dumping every different thing you have ever touched with no thread, tells a story of someone unfocused, and the difference is intention and coherence, not the number of forms. Equally, deep focus on the one thing you care about most is not "narrow" in any bad sense, it shows commitment and depth, which are valuable. The way to settle it is to look honestly at yourself and your manifesto: if you genuinely are someone whose creativity lives across many forms and that range is part of your identity, show it on purpose; if one form is truly your center, focus there and let the portfolio go deep. Either is strong when chosen; both are weak when they happen by default. Decide who you are, then build to show it.`,
            },
            {
              id: `c3`,
              title: `How to present it without lying or cringing`,
              type: `Honest self-presentation`,
              description: `You're writing the few words that go with a piece. You feel pulled two ways: one voice says to oversell it ("this groundbreaking work..."), another says to apologize for it ("this is probably bad, sorry, I'm not very good..."). Both feel wrong but you're not sure what to write instead. What's the honest move?`,
              questions: [
                `Why are BOTH overselling and apologizing problems?`,
                `What does the confident, honest middle actually sound like?`,
                `How does this connect to the honesty value from your manifesto?`,
              ],
              evaluation: `The honest move is the confident middle, and seeing why both extremes fail is the key. Overselling ("this groundbreaking masterpiece") is a form of dishonesty that the band warned against throughout, it inflates, it invites a letdown, and it makes a viewer distrust everything else you say. Apologizing ("this is probably bad, sorry") is its own problem: it is not modesty but a kind of pre-emptive self-protection that actually distracts from the work, undermines it before the viewer even looks, and is, in its way, also dishonest if you do not truly believe the work is bad. The confident, honest middle simply shows the work and, where helpful, states plainly what it is and what you were exploring: "my first attempt at stop-motion," or "here I was trying to capture how a memory feels." That plain truthfulness respects both your work and the viewer, lets the piece speak, and is far more compelling than either inflation or self-deprecation. This connects directly to the honesty value most people put in their manifesto: present your work truthfully, neither more nor less than it is, and trust the work and the viewer enough to let it stand.`,
            },
            {
              id: `c4`,
              title: `The work you've outgrown`,
              type: `The living portfolio`,
              description: `A piece that used to be the star of your portfolio now feels embarrassing, you've grown, and it no longer represents who you are as a creator. Part of you is sentimental about it or proud of how it was once received. Do you keep it, cut it, or something else, and what does the choice teach you?`,
              questions: [
                `What does it MEAN that you've outgrown a piece you were once proud of?`,
                `Is removing old work erasing your past, or something healthier?`,
                `How does "a portfolio is a living thing" guide you here?`,
              ],
              evaluation: `Outgrowing a piece you were once proud of is not a problem to feel bad about, it is proof of exactly the growth a creative life is supposed to produce, so the embarrassment is actually good news. Because a portfolio is a living thing meant to show who you are now, not a permanent monument to who you were, it is usually right to cut work that no longer represents you, and doing so is not erasing your past but curating your present: the piece still existed, it still mattered to your growth, and removing it from your current portfolio does not undo any of that, it just keeps the portfolio honest about who you are today. (If you are sentimental, you can keep it somewhere personal, an archive of your own journey, without it having to live in the portfolio you put forward.) The deeper lesson is the freeing one from this lesson: your portfolio is meant to change as you do, and the very fact that you have pieces you have outgrown is the sign of a creator who is developing, not stalling. Let it evolve. A portfolio that never changes is a portfolio of someone who stopped growing.`,
            },
            {
              id: `c5`,
              title: `Start now, or wait until you're "good enough"?`,
              type: `Persistence vs. the perfection trap`,
              description: `Part of you wants to wait to build a portfolio until your work is impressive enough to be "worth" gathering, until you're really good, until you have something amazing. Another part says start now with what you have, even though it feels small and imperfect. Which is right, and why does it matter so much?`,
              questions: [
                `What's the trap in "wait until I'm good enough"?`,
                `How does the career lesson's persistence value apply here?`,
                `What does starting small and imperfect actually get you?`,
              ],
              evaluation: `Start now, and this may be the most important decision in the lesson. The trap in "wait until I'm good enough" is that the moment never comes: there is no line you cross where you suddenly feel worthy, every creator can always imagine being better, so "wait until I'm impressive" usually means "wait forever," and the imaginary perfect portfolio you are always getting ready for never gets built. This is the persistence value from the career lesson exactly: you do not build a body of work, or a creative life, in one heroic burst once you are finally good enough, you build it piece by piece over years by starting where you are and continuing, and every creator you admire began with a thin, rough first collection that looked nothing like their later one. Starting small and imperfect actually gets you the only thing that leads anywhere: a real, living portfolio that exists, that you can see yourself in, that you can grow, and that begins the lifelong habit of gathering your work. A modest portfolio that is real beats a magnificent one that is imaginary every single time, so begin now, with what you have, and let it grow. Beginning is the whole secret.`,
            },
          ],
          synthesisPrompt: `Looking across all five decisions: describe, in your own words, the first portfolio you would actually build, starting now. What would you include and why, would you show range or focus, and how would you present it honestly? Name one piece you already have (or could make this week) that shows who you are as a creator. This is your portfolio beginning, for real.`,
          reflectionPrompt: `This is the last reflection of the whole band. Look back across all twenty lessons: who were you as a "creator" when you started, and who are you now? What is the single most important thing you will carry forward into your creative life, and what is the very next thing you want to make?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
              {
                id: `q1`,
                type: `multiple-choice`,
                question: `What is a portfolio, really, and how is it different from a "trophy case" of your best work?`,
                options: [
                  `A pile of everything you've ever made, different from a trophy case because it leaves nothing out.`,
                  `A curated self-portrait in work, chosen to show who you are — not just your most impressive pieces ranked.`,
                  `A ranked list of your top pieces, the same as a trophy case but kept on a screen instead of a shelf.`,
                  `A collection only professionals are allowed to build, unlike a trophy case anyone can fill.`,
                ],
                correctIndex: 1,
                explanation: `A portfolio is a curated collection, "curated" meaning chosen and arranged on purpose, that you put forward to show who you are as a creator: what you can do, care about, and how you've grown. It differs from a trophy case of only your "best" pieces ranked by impressiveness, because it works like a self-portrait made of your work, so a piece can belong not because it's perfect but because it shows something true about you, a risk you took, your growth. The guiding question is "does this help show who I am?" not "is this my most impressive thing?", a shift from ranking to representing. It serves two audiences: others (a window) and you (a mirror). The distractors make it a pile, a ranked trophy case, or pros-only.`,
              },
              {
                id: `q2`,
                type: `multiple-choice`,
                question: `What principles help you choose what actually goes into a portfolio?`,
                options: [
                  `Always maximize quantity, since more pieces make the portfolio look more impressive overall.`,
                  `Only include your single most polished piece, so nothing weaker drags down the average.`,
                  `Ask "does this show who I am?", show range or focus on purpose, include growth, let your manifesto guide.`,
                  `Just copy whatever successful creators happen to include, since their choices have already been fully proven to work for them.`,
                ],
                correctIndex: 2,
                explanation: `Start with "does this help show who I am as a creator?", shifting from ranking by impressiveness to choosing by what a piece reveals. Then: show range or focus on purpose, not by accident (both fine if deliberate); include growth, not just peaks (a turning-point piece can tell a truer story than only your shiniest results); and quality over quantity (a smaller set you stand behind beats a pile that buries the good work). Above all, let your manifesto guide it: value honesty, present truthfully; value substance, include real meaning; value your voice, favor pieces that sound like you, so the portfolio becomes your manifesto made visible. The distractors chase quantity, over-prune to one piece, or copy others instead of representing you.`,
              },
              {
                id: `q3`,
                type: `multiple-choice`,
                question: `What does it mean to present your work honestly, and why are BOTH overselling and apologizing problems?`,
                options: [
                  `Show what you actually made, neither inflating it nor apologizing — both are forms of dishonesty that cost trust.`,
                  `Always describe your work modestly, since apologizing for it is the safest and most honest approach.`,
                  `Always describe your work as groundbreaking, since confidence is what convinces viewers it's good.`,
                  `Say nothing about your work at all, since any description risks misleading the viewer.`,
                ],
                correctIndex: 0,
                explanation: `Presenting honestly means showing what you actually made and did, not claiming skills or work that isn't yours, and crediting collaborators truthfully, because a portfolio built on exaggeration collapses under a close look and costs you trust. Overselling ("this groundbreaking masterpiece") inflates, invites a letdown, and makes viewers distrust everything. Apologizing ("this is probably bad, sorry") isn't real modesty but pre-emptive self-protection that undermines the work before the viewer looks, and is dishonest if you don't believe it's bad. The honest middle is to show the work and plainly say what it is ("my first attempt at X"). The distractors endorse apologizing, overselling, or saying nothing, instead of the honest middle.`,
              },
              {
                id: `q4`,
                type: `multiple-choice`,
                question: `Why is it described as freeing that "a portfolio is a living thing, never finished"?`,
                options: [
                  `Because it means you never have to finish anything, so nothing is ever really expected of you.`,
                  `Because it proves your early work was worthless and should be deleted as soon as possible.`,
                  `It removes the pressure to be impressive now — it's a snapshot of who you are today, meant to grow.`,
                  `Because a finished portfolio would be better, but most people simply never manage to complete one.`,
                ],
                correctIndex: 2,
                explanation: `Because it removes the paralyzing pressure to have an impressive, finished body of work right now. Your portfolio isn't a final verdict on whether you're "good enough"; it's a snapshot of who you are today, meant to change as you do, so you add new work and remove pieces that no longer represent you. That reframes things that would feel like failure: a portfolio you're slightly embarrassed by in a year is proof you grew, the entire point. It frees you to start now with whatever you have, because a real growing portfolio of modest work beats an imaginary perfect one. This connects to persistence: you build a body of work piece by piece over years, and every creator started with a thin, rough first collection. The distractors twist "never finished" into no expectations, worthless early work, or chronic incompletion.`,
              },
              {
                id: `q5`,
                type: `multiple-choice`,
                question: `In the "rough piece that's really you vs. polished piece that says nothing" decision, what's the right instinct, and when might you still cut the rough piece?`,
                options: [
                  `Always cut the rough piece — polish is what viewers judge, so only your cleanest work belongs.`,
                  `Always keep the rough piece — imperfection is always more authentic than anything polished.`,
                  `Keep the rough-but-true piece, but cut it if it badly misrepresents your skill or another shows it better.`,
                  `Simply keep both pieces regardless of anything, since a bigger portfolio is always far more convincing than a smaller one.`,
                ],
                correctIndex: 2,
                explanation: `The right instinct is usually to keep the rough-but-true piece, because the deciding question is "does this show who I am?" not "is this my most impressive piece?", and a piece revealing a real risk, obsession, or turning point does the portfolio's actual job, while a polished piece that says nothing just fills space. Keeping it signals confidence and self-knowledge. That said, cut it if it's so rough it actively misrepresents your skill against you for a specific purpose, or if another piece shows the same true thing better. The point isn't "always keep rough work" but to choose by what each piece reveals rather than defaulting to polish. The distractors make it always-cut, always-keep, or keep-everything, instead of choosing by what it reveals.`,
              },
              {
                id: `q6`,
                type: `multiple-choice`,
                question: `For "range vs. focus," why is there no single correct answer, and what actually makes either one work?`,
                options: [
                  `Focus is always correct, because doing one thing deeply is the only way to be taken seriously.`,
                  `Range is always correct, because showing many skills always looks more impressive than one.`,
                  `There's no answer because it's random — whichever you happen to have more of is the one to show.`,
                  `Both are legitimate; what makes either work is choosing it on purpose to reflect who you actually are.`,
                ],
                correctIndex: 3,
                explanation: `There's no single answer because range and focus are both legitimate, and the right move depends on who you are and what the portfolio is for, as long as it's a choice made on purpose. Purposeful range (deliberately showing meaningful work across forms) tells a true story of a multi-disciplinary creator, while a random scatter tells a story of someone unfocused, so the difference is intention and coherence, not the number of forms. Deep focus shows commitment and depth. What makes either work is that it's chosen to reflect who you actually are: if your creativity lives across many forms, show it on purpose; if one form is your center, go deep. Either is strong when deliberate, weak by default. The distractors crown focus, crown range, or call it random instead of deliberate.`,
              },
              {
                id: `q7`,
                type: `multiple-choice`,
                question: `What does it mean that you've "outgrown" a piece you were once proud of, and how should you handle it?`,
                options: [
                  `It means you wasted your time on that piece, so you should regret having made it.`,
                  `It's proof of real growth — cut it from your current portfolio, keep it privately if you wish.`,
                  `It means your taste has gotten worse, so you should keep the piece to stay humble.`,
                  `It really means nothing at all — you should simply never remove a piece you were once proud of, purely on principle.`,
                ],
                correctIndex: 1,
                explanation: `Outgrowing a piece you were once proud of isn't a problem but proof of exactly the growth a creative life should produce, so the embarrassment is good news. Because a portfolio is a living thing meant to show who you are now, it's usually right to cut work that no longer represents you, which isn't erasing your past but curating your present, the piece still existed and still mattered to your growth. If you feel sentimental, keep it somewhere personal, an archive of your journey, without it living in the portfolio you put forward. Having pieces you've outgrown is the sign of a developing creator, not a stalling one, and letting the portfolio evolve is how a healthy creative life works. The distractors frame outgrowing as waste, declining taste, or a reason never to remove anything.`,
              },
              {
                id: `q8`,
                type: `multiple-choice`,
                question: `Why does the lesson say to start a portfolio NOW rather than wait until your work is "good enough"?`,
                options: [
                  `Because starting early is what lets you firmly lock in your own style before you can ever be influenced by anyone else at all.`,
                  `Because there's a deadline, and creators who wait too long miss their only chance to be discovered.`,
                  `Because "wait until I'm good enough" is a trap where the moment never comes — a real modest one beats an imaginary perfect one.`,
                  `Because early work is actually better than later work, so you should capture it before you decline.`,
                ],
                correctIndex: 2,
                explanation: `Because "wait until I'm good enough" is a trap where the moment never comes: there's no line you cross where you suddenly feel worthy, since every creator can always imagine being better, so "wait until I'm impressive" usually means "wait forever," and the imaginary perfect portfolio never gets built. This is the persistence value: you build a body of work piece by piece over years by starting where you are, and every creator you admire began with a thin, rough first collection. Starting small and imperfect gets you the only thing that leads somewhere: a real, living portfolio you can grow. A modest portfolio that's real beats a magnificent one that's imaginary every time. The distractors invent style-locking, a deadline, or the false claim that early work is better.`,
              },
              {
                id: `q9`,
                type: `true-false`,
                question: `True or false: Your portfolio should only ever contain your most technically impressive, polished pieces, and you should wait to build one until your work is good enough to be worth gathering.`,
                correctAnswer: false,
                explanation: `False on both counts, and seeing why ties the whole lesson together. A portfolio isn't a trophy case of only your most impressive, polished pieces; it's more like a self-portrait made of your work, chosen to show who you are as a creator, so the guiding question for each piece is "does this help show who I am?" not "is this my most impressive thing?" That means a rough piece capturing a real risk, a genuine obsession, or a turning point can absolutely belong, sometimes telling a truer, more compelling story than flawless-but-empty polish, because people who matter often find honest growth more interesting than perfection. And you should not wait until your work is "good enough," because that moment never arrives, every creator can always imagine being better, so waiting to be impressive usually means waiting forever. A portfolio is a living thing, never finished, meant to change as you do, and you build it piece by piece over years by starting now with whatever you have. A real, modest, growing portfolio beats an imaginary perfect one every single time, which is why beginning today, with imperfect work, is not the lesser path but the only path anyone has ever walked.`,
              },
              {
                id: `q10`,
                type: `inference`,
                question: `This is the last question of the whole band. A younger friend just starting to make things comes to you nervous: "I want to be a real creator someday, but I'm not good enough yet, I don't even know what I'd put anywhere, and everyone online seems way ahead of me." Using everything from this lesson and the whole band, what do you actually tell them?`,
                options: [
                  `Reassure them they're secretly already great and the people ahead of them just got lucky.`,
                  `Tell them "good enough" was never the gate: start now with what you have, a portfolio is a self-portrait not a trophy case, everyone online is a highlight reel, and beginning and persisting is the whole secret.`,
                  `Tell them they're right to wait — they should keep practicing privately until their work can compete with what's online.`,
                  `Tell them being a creator is mostly about talent, so they should find out early whether they have it.`,
                ],
                correctIndex: 1,
                explanation: `This friend is standing where you stood twenty lessons ago. Tell them the freeing truth: you don't become a "real creator" by crossing a line where you're finally good enough, you become one by making things and gathering the ones that matter, starting now, because "good enough" never arrives for anyone. Reframe what a portfolio is so it stops being scary: not a trophy case but a self-portrait, so the question is "does this show something true about me?", and they probably already have things that belong. Take the comparison trap head-on: everyone online seems "way ahead" because you're seeing their highlight reel and later work, not the thin rough first collections they all started with, so measure against your own growth. Hand them persistence: nobody builds a creative life in one heroic burst. Encourage honest presentation, neither overselling nor apologizing. And the deepest thing: being a creator isn't mostly talent or polish, it's making things you care about, thinking clearly, knowing what you value, and persisting honestly, all of which they can start today. The gift isn't "you're secretly great," it's "beginning is the whole secret." The distractors offer false reassurance, tell them to wait, or reduce it to talent.`,
              },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `The last reflection of the whole band. Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-firstpiece`, category: `Your real first portfolio`, prompt: `Name one piece you already have, or could make this week, that genuinely shows who you are as a creator. Why that one? What does it say about you? This is the real seed of your portfolio, the actual beginning.` },
            { id: `reflect-trap`, category: `Your perfection trap`, prompt: `Be honest: are you waiting to be "good enough" before you start gathering your work or sharing it? What exactly are you waiting for, and now that you know the moment never comes, what would it take to start now instead?` },
            { id: `reflect-wholeband`, category: `Who you've become`, prompt: `Look back across all twenty lessons. Who were you as a "creator" when you started this band, and who are you now? What changed in how you see art, and in how you see yourself making it?` },
            { id: `reflect-carry`, category: `What you carry forward`, prompt: `Of everything in this whole band, the skills, the ways of thinking, the values, what is the single most important thing you will carry into the rest of your creative life? Why that one?` },
            { id: `reflect-manifesto`, category: `Manifesto made visible`, prompt: `Your portfolio is meant to be your manifesto made visible. Looking at the values you chose last lesson, how would they actually shape what you include and how you present it? Where would someone see your values in your work?` },
            { id: `reflect-next`, category: `The very next thing`, prompt: `The band is ending, but your creative life is beginning. What is the very next thing you want to make? Not someday, soon. Picture it. What's stopping you from starting it this week?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the last one. Don't just learn it, build it. Two paths, and I hope you take one for real.`,
          familyActivity: {
            title: `Build Your First Real Portfolio, Together`,
            duration: `60 minutes`,
            description: `Actually build a first portfolio, do not just talk about it. Gather the creative work you have made (drawings, music, writing, videos, photos, designs, anything) into one place, physical or digital, it does not matter which. Then curate, using the lesson: for each piece ask "does this show who I am as a creator?", and choose a smaller set you genuinely stand behind rather than including everything, aiming to represent who you are, not just rank your most impressive pieces, and making sure to keep at least one rough-but-true piece that shows a real risk or a genuine part of you. Decide on purpose whether yours shows range or focus, and let the manifesto from the last lesson guide your choices. Arrange them in an order that tells your story, remembering that presentation is itself a creative act, and write a plain, honest line or two for the pieces that need it (no overselling, no apologizing). Family members can build their own alongside, of any kind of work, and then share: walk each other through your portfolios and say what each piece shows about you. The goal is for the young creator to leave this band with a real, started portfolio that exists, not a someday-plan, because beginning is the whole secret.`,
          },
          projectOption: {
            title: `Launch It, And Keep It Alive, ongoing (optional)`,
            duration: `Ongoing, starting with ~2 weeks`,
            description: `Take the first portfolio you built and make it real and lasting, then commit to keeping it alive. First two weeks: choose a form for your portfolio that fits you and that you can actually maintain, a physical folder or sketchbook, a simple digital folder, a slideshow, a basic webpage or online gallery, a video reel, whatever suits your work, and set it up properly, with your pieces curated, arranged in a deliberate order, and honestly presented. If you have a manifesto from the last lesson, consider putting a short version of it at the front, so your portfolio literally opens with what you stand for. Then the ongoing part, which is the real point: treat the portfolio as the living thing it is by setting a simple rhythm to keep it alive, for example, once a month, add any new work worth keeping and remove anything you have outgrown, so the portfolio grows and evolves with you instead of freezing in place. The aim is not a perfect finished object but a living practice: the lifelong habit of making things, honestly gathering the ones that matter, and watching the body of work, and the creator, grow over time.`,
            offerToParent: `Parent: this is the final project of the entire Creative Arts Voyager band, and the most valuable one to actually do. Help your child build a real first portfolio and, even more importantly, set up a simple monthly rhythm to keep it alive (add new work, remove outgrown pieces). A living portfolio does three lasting things at once: it gives them a concrete record of their growth, it builds the lifelong creator's habit of gathering and curating their own work, and it lets them literally watch themselves develop over the years. Opening it with their manifesto ties the whole band together. This is the launchpad the band was built to reach, please help them actually launch.`,
          },
          identityQuestion: `You started this band asking what art even is. You end it with skills, judgment, chosen values, and a real, started body of work that shows who you are. So: not "do you know about art?" but the question the whole band was really for, who are you as a creator, and what are you going to make next?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this whole band making you?`,
          prompt: `The last one. One sentence. No wrong answer.`,
          placeholder: `I am a creator who...`,
          examples: [
            `A creator with real skills, chosen values, and a body of work I've actually started.`,
            `Someone who makes things, thinks clearly about them, and keeps going.`,
            `A maker who knows what I stand for and is building the work to show it.`,
          ],
          saveKey: `identity_responses_ca_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You did it. Twenty lessons. The whole band, complete. Take that in for a second, because it is real. You learned what a portfolio is, a curated self-portrait made of your work, showing who you are, not just ranking your best, serving both others and yourself. You learned to choose what goes in by asking "does this show who I am?", to show range or focus on purpose, to value growth and quality, and to let your manifesto guide what you put your name on. You learned to present your work honestly, without bragging or apologizing, with presentation itself as a creative act. And you learned the most freeing truth of all: a portfolio is a living thing you start now, however small, and grow for the rest of your life. But look at the bigger picture. You began this band asking what art even is, and you arrive here, building the body of work that shows what kind of creator YOU are. Between those points you learned to tell substance from spectacle, truth from hype, power used well from power that manipulates, blending that honors from taking that harms. You chose your values and wrote them down. And now you carry all of it, not as facts to recite, but as skill, judgment, and character living in how you create. You are not someone who knows about art, {name}. You are a creator. So go make things. Gather the ones that matter. And keep becoming who your work is showing you that you are. This is not the end. It is your launch. Onward, always. — Muse`,
          badge: `portfolio-builder`,
          badgeName: `Portfolio Builder`,
          xpEarned: 100,
          competencies: [
            `Understands a portfolio as a curated self-portrait made of one's work, showing who you are rather than ranking your most impressive pieces, serving both others and yourself`,
            `Chooses what to include by asking "does this show who I am as a creator?", showing range or focus on purpose, valuing growth and quality over quantity`,
            `Uses the manifesto as a real tool, letting chosen values guide what work to put one's name on (the portfolio as manifesto made visible)`,
            `Presents work honestly, crediting truthfully and avoiding both overselling and self-deprecation, treating presentation itself as a creative act`,
            `Understands the portfolio as a living thing to start now and grow for life, reframing outgrown work as proof of growth`,
            `Overcomes the "wait until I'm good enough" trap with the persistence value: bodies of work are built piece by piece, starting small and imperfect`,
            `Synthesizes the whole band, skills, critical judgment, chosen values, and voice, into the identity and practice of a creator with a started body of work`,
          ],
          nextLessonPreview: null,
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  const xp = l.xpReward;
  const nextNull = l.screens.find((s) => s.type === `celebration`)?.nextLessonPreview === null;
  console.log(
    `[LESSON-CA-VOYAGER-L20 ${VERSION}] "${l.title}" CAPSTONE mags=${mags} cases=${cases} q=${quiz} r=${reflect} xp=${xp} nextNull=${nextNull}`
  );
}
