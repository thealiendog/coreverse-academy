// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L08 — Intellectual Property and Copyright
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Copyright, Fair Use, Public Domain, Creative Ethics
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort real claims about what is/isn't legal
// and fair to use). Contract matches L03/L06: sources[] with tier/title/type/context/
// quote/questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// NOTE: explains general principles; explicitly NOT legal advice. Names that laws
// differ by country and change over time.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l08-v1";

const CREATIVE_ARTS_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-08`,
      title: `Intellectual Property and Copyright`,
      duration: 35,
      xpReward: 75,
      badge: `ip-literate`,
      badgeName: `IP & Copyright Literate`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you learned that the contract is where the money lives. This lesson goes one level deeper, to the rules that decide who owns an idea in the first place. They are called intellectual property laws, and they answer a question that turns out to be surprisingly hard: when you make something out of your own mind, a song, a drawing, a story, a logo, what exactly do you own, and what can other people do with it? You meet these rules every single day already, every time you use a meme, quote a song, copy an image, or wonder if you can use a clip in a video. Most people guess at the rules and guess wrong, in both directions: some think they can use anything, others are scared to use anything. Today you learn the real shape of it, enough to protect your own work and to use other people's fairly. One honest note up front: laws differ by country and change over time, so this is how to think about it, not legal advice. Onward.`,
          headline: `Intellectual Property and Copyright`,
          subtitle: `Who owns an idea, a song, a logo, a style? Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Copyright Actually Is`,
          paragraphs: [
            `Start with the core idea, in plain terms. Copyright is a rule that says: when you create an original work, a song, a story, a drawing, a photo, a video, you automatically get the right to control who copies it, shares it, sells it, or builds on it, usually for a long time. You do not have to file anything or add a little circled C; in most countries the protection happens automatically the moment you make the work and fix it in some form, like writing it down or saving the file. That is worth knowing right now: the doodle you drew yesterday is, technically, already protected by copyright as yours.`,
            `Here is the part people get wrong most often: copyright protects the specific expression, not the underlying idea. You cannot copyright the idea of "a boy who discovers he is a wizard," but you can copyright the specific book you wrote telling that story, the exact words, characters, and details. Anyone can write a story about a young wizard; no one can copy your particular sentences and characters. This split between idea (free for everyone) and expression (owned by the maker) is the single most useful thing to understand about copyright, because almost every real argument about "did they steal this?" comes down to whether someone copied the protected expression or just used the free idea.`,
            `Copyright also does not last forever, and that matters. After a long time, usually many decades after the creator dies, a work's copyright expires and it enters the "public domain," meaning anyone can use it freely. This is why you can freely perform Beethoven, retell Greek myths, or print a Shakespeare play, those works are old enough that no one owns them anymore. The public domain is a kind of shared treasure chest of human creativity that everyone is allowed to reach into, and it grows every year as older works age out of copyright. Knowing what is in it, and what is not, is part of using other people's work fairly.`,
          ],
          image: `/voyager-assets/creative-arts/l08-s1-what.webp`,
          imageCaption: `Copyright in plain terms: when you create an original work (song, story, drawing, photo, video) you automatically get the right to control who copies, shares, sells, or builds on it, usually for a long time, with no filing needed in most countries (protection happens the moment you fix the work in some form). The doodle you drew yesterday is already protected as yours. The key split most people get wrong: copyright protects the specific expression, NOT the underlying idea. You cannot copyright "a boy who discovers he is a wizard," but you can copyright the exact book you wrote telling it (your words, characters, details). Idea = free for everyone; expression = owned by the maker. Copyright does not last forever: usually many decades after the creator dies, a work enters the "public domain" and anyone can use it freely (Beethoven, Greek myths, Shakespeare), a shared treasure chest that grows every year.`,
          vocab: [
            {
              word: `public domain`,
              definition: `Copyright is a rule that says when you create an original work (a song, story, drawing, photo, video) you automatically get the right to control who copies it, shares it, sells it, or builds on it, usually for a long time. In most countries you do not have to file anything or add a circled C; protection happens automatically the moment you make the work and fix it in some form (writing it down, saving the file), so the doodle you drew yesterday is already protected as yours. The part people get wrong most: copyright protects the specific expression, not the underlying idea. You cannot copyright the idea of "a boy who discovers he is a wizard," but you can copyright the specific book you wrote telling that story, the exact words, characters, and details; anyone can write a story about a young wizard, but no one can copy your particular sentences and characters. This idea-versus-expression split (idea free for everyone, expression owned by the maker) is the single most useful copyright concept, because almost every "did they steal this?" argument comes down to whether someone copied the protected expression or just used the free idea. Copyright also does not last forever: usually many decades after the creator dies, a work's copyright expires and it enters the "public domain," where anyone can use it freely (this is why you can freely perform Beethoven, retell Greek myths, or print a Shakespeare play). The public domain is a shared treasure chest of human creativity that everyone may reach into, and it grows every year as older works age out.`,
              audioPrompt: `Start with the core idea, {name}, in plain terms. Copyright is a rule that says: when you create an original work, a song, a story, a drawing, a photo, a video, you automatically get the right to control who copies it, shares it, sells it, or builds on it, usually for a long time. You do not have to file anything or add a little circled C; in most countries the protection happens automatically the moment you make the work and fix it in some form, like writing it down or saving the file. So the doodle you drew yesterday is, technically, already protected by copyright as yours. Here is the part people get wrong most often: copyright protects the specific expression, not the underlying idea. You cannot copyright the idea of "a boy who discovers he is a wizard," but you can copyright the specific book you wrote telling that story, the exact words, characters, and details. Anyone can write a story about a young wizard; no one can copy your particular sentences and characters. This split between idea, which is free for everyone, and expression, which is owned by the maker, is the single most useful thing to understand about copyright. Copyright also does not last forever. After a long time, usually many decades after the creator dies, a work enters the public domain, meaning anyone can use it freely. This is why you can freely perform Beethoven, retell Greek myths, or print a Shakespeare play. The public domain is a shared treasure chest of human creativity that everyone is allowed to reach into.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Fair Use: The Important Gray Zone`,
          paragraphs: [
            `Now the part everyone argues about, because it is genuinely fuzzy: fair use. The basic idea is that you are sometimes allowed to use a piece of someone else's copyrighted work without permission, for certain purposes, like commenting on it, criticizing it, teaching with it, reporting news, or making something genuinely new out of it. This is why a movie reviewer can show a short clip, why a teacher can quote a poem in class, and why a parody song can borrow from the original it is mocking. Fair use exists because copyright is supposed to encourage creativity, not lock culture in a vault, and sometimes using existing work is how new creativity happens.`,
            `But fair use is a gray zone on purpose, not a clear line, and that is the single most important thing to understand about it. There is no rule like "you can use ten seconds of any song" or "you can use anything if you credit it" (those are common myths). Instead, courts weigh several questions together: Are you transforming the work into something new and different, or just copying it? Are you using a little or a lot? Are you hurting the original creator's ability to make money? A short clip in a thoughtful review that adds real commentary leans toward fair use; reposting someone's whole song so people do not need to buy it leans against it. Because it is weighed case by case, even experts often cannot be certain in advance.`,
            `This is exactly why the source-evaluation skill matters so much here. The internet is full of confident, simple claims about copyright that are flatly wrong: "if I credit the artist it is legal," "if I do not make money it is fine," "anything on the internet is free to use," "if I change it 30% it is mine now." Every one of those is a myth, and believing them can get a real person into real trouble, or scare them away from things they are actually allowed to do. The honest truth is messier: fair use is real and important, it is genuinely uncertain at the edges, and the confident one-line "rules" floating around online are mostly false. Holding that uncertainty accurately is the skill.`,
          ],
          image: `/voyager-assets/creative-arts/l08-s2-fairuse.webp`,
          imageCaption: `Fair use, the genuinely fuzzy part: you are sometimes allowed to use someone's copyrighted work without permission for certain purposes, commenting, criticizing, teaching, news, or making something genuinely new (a reviewer showing a short clip, a teacher quoting a poem, a parody song). It exists because copyright should encourage creativity, not lock culture in a vault. But it is a gray zone ON PURPOSE, not a clear line. No rule like "ten seconds of any song" or "legal if I credit it", those are myths. Courts weigh several questions together: transforming into something new vs. just copying; using a little vs. a lot; hurting the creator's ability to earn. Common false myths: "credit makes it legal," "non-profit makes it fine," "anything online is free," "change it 30% and it's yours." All false. The honest truth is messier and uncertain at the edges; holding that uncertainty accurately is the skill.`,
          vocab: [
            {
              word: `copyright myths`,
              definition: `Fair use is the genuinely fuzzy part of copyright: you are sometimes allowed to use a piece of someone else's copyrighted work without permission, for certain purposes, like commenting on it, criticizing it, teaching with it, reporting news, or making something genuinely new out of it. This is why a movie reviewer can show a short clip, a teacher can quote a poem, and a parody song can borrow from the original it mocks; fair use exists because copyright is meant to encourage creativity, not lock culture in a vault. But fair use is a gray zone on purpose, not a clear line, which is the most important thing to understand. There is no rule like "you can use ten seconds of any song" or "you can use anything if you credit it", those are common myths. Instead courts weigh several questions together: are you transforming the work into something new and different or just copying it; are you using a little or a lot; are you hurting the original creator's ability to make money? A short clip in a thoughtful review that adds real commentary leans toward fair use; reposting someone's whole song so people do not need to buy it leans against it. Because it is weighed case by case, even experts often cannot be certain in advance. The internet is full of confident, simple, false claims: "if I credit the artist it is legal," "if I do not make money it is fine," "anything on the internet is free to use," "if I change it 30% it is mine now", every one is a myth. The honest truth is messier: fair use is real and important, genuinely uncertain at the edges, and the confident one-line rules online are mostly false. Holding that uncertainty accurately is the skill.`,
              audioPrompt: `Now the part everyone argues about, {name}, because it is genuinely fuzzy: fair use. The basic idea is that you are sometimes allowed to use a piece of someone else's copyrighted work without permission, for certain purposes, like commenting on it, criticizing it, teaching with it, reporting news, or making something genuinely new out of it. This is why a movie reviewer can show a short clip, why a teacher can quote a poem in class, and why a parody song can borrow from the original it is mocking. Fair use exists because copyright is supposed to encourage creativity, not lock culture in a vault. But fair use is a gray zone on purpose, not a clear line. There is no rule like "you can use ten seconds of any song" or "you can use anything if you credit it." Those are myths. Instead, courts weigh several questions together: Are you transforming the work into something new and different, or just copying it? Are you using a little or a lot? Are you hurting the original creator's ability to make money? Because it is weighed case by case, even experts often cannot be certain in advance. This is exactly why source evaluation matters here. The internet is full of confident, simple claims about copyright that are flatly wrong: "if I credit the artist it is legal," "if I do not make money it is fine," "anything on the internet is free to use." Every one of those is a myth. The honest truth is messier, and holding that uncertainty accurately is the skill.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Other Kinds Of Intellectual Property`,
          paragraphs: [
            `Copyright is the one you meet most, but it is only one room in a larger house called intellectual property, and knowing the others keeps you from confusing them. A trademark protects the names, logos, and symbols that identify who made something, so customers are not fooled. The swoosh on a shoe, a brand name, a logo: those are trademarks, and they exist mostly to protect customers from fakes and protect a business's reputation, not to protect art. This connects to your own life, Caro: securing the name and logo for a brand or company is trademark work, a different thing from the copyright that protects the actual creative content.`,
            `A patent protects inventions, new machines, processes, or devices, for a limited time, in exchange for the inventor explaining publicly how it works. Patents are mostly about technology and inventions, not art, so they matter less for a creative career, but it is worth knowing the word so you do not mix it up with copyright. The quick way to keep them straight: copyright is for creative expression (songs, art, writing), trademark is for brand identity (names, logos), and patent is for inventions (machines, processes). People constantly use these words wrongly, and just knowing which is which already puts you ahead of most adults.`,
            `There is also a quieter idea worth meeting: some creators choose to give away rights on purpose. A "Creative Commons" license lets a creator say, in advance, "you may use my work freely, as long as you follow these conditions," like crediting them or not selling it. Lots of music, images, and writing online are shared this way, which is genuinely free to use within the stated rules. So the real landscape has three zones, not two: work that is fully protected (ask permission), work in the public domain (free for anyone), and work the creator has deliberately licensed for sharing (free within the rules they set). Knowing which zone something is in is most of using other people's work fairly.`,
          ],
          image: `/voyager-assets/creative-arts/l08-s3-kinds.webp`,
          imageCaption: `Copyright is one room in the larger house of intellectual property. TRADEMARK protects names, logos, and symbols that identify who made something (a shoe's swoosh, a brand name), mostly to protect customers from fakes and protect a business's reputation, not art; securing a company's name and logo is trademark work. PATENT protects inventions (machines, processes, devices) for a limited time in exchange for explaining publicly how they work, mostly technology, not art. Quick keep-straight: copyright = creative expression (songs, art, writing); trademark = brand identity (names, logos); patent = inventions. Plus a quieter idea: "Creative Commons" licenses let a creator say in advance "use my work freely if you follow these conditions" (credit me, do not sell it). So three zones, not two: fully protected (ask permission), public domain (free for anyone), and deliberately licensed for sharing (free within the creator's rules).`,
          vocab: [
            {
              word: `creative commons`,
              definition: `Copyright is only one room in the larger house of intellectual property. A TRADEMARK protects the names, logos, and symbols that identify who made something, so customers are not fooled: a shoe's swoosh, a brand name, a logo. Trademarks exist mostly to protect customers from fakes and protect a business's reputation, not to protect art; securing the name and logo for a brand or company is trademark work, different from the copyright that protects the actual creative content. A PATENT protects inventions, new machines, processes, or devices, for a limited time, in exchange for the inventor explaining publicly how it works; patents are mostly about technology and inventions, not art, so they matter less for a creative career, but knowing the word keeps you from mixing it up with copyright. The quick way to keep them straight: copyright is for creative expression (songs, art, writing), trademark is for brand identity (names, logos), and patent is for inventions (machines, processes). A quieter idea worth meeting: some creators give away rights on purpose with a "Creative Commons" license, saying in advance "you may use my work freely as long as you follow these conditions" (credit them, or do not sell it). Lots of music, images, and writing online are shared this way and are genuinely free to use within the stated rules. So the real landscape has three zones, not two: work that is fully protected (ask permission), work in the public domain (free for anyone), and work the creator has deliberately licensed for sharing (free within the rules they set). Knowing which zone something is in is most of using other people's work fairly.`,
              audioPrompt: `Copyright is the one you meet most, {name}, but it is only one room in a larger house called intellectual property. A trademark protects the names, logos, and symbols that identify who made something, so customers are not fooled. The swoosh on a shoe, a brand name, a logo: those are trademarks, and they exist mostly to protect customers from fakes and protect a business's reputation, not to protect art. A patent protects inventions, new machines, processes, or devices, for a limited time, in exchange for the inventor explaining publicly how it works. Patents are mostly about technology, not art. The quick way to keep them straight: copyright is for creative expression like songs, art, and writing; trademark is for brand identity like names and logos; and patent is for inventions like machines and processes. There is also a quieter idea worth meeting: some creators choose to give away rights on purpose. A Creative Commons license lets a creator say, in advance, "you may use my work freely, as long as you follow these conditions," like crediting them or not selling it. So the real landscape has three zones, not two: work that is fully protected, where you ask permission; work in the public domain, free for anyone; and work the creator has deliberately licensed for sharing, free within the rules they set. Knowing which zone something is in is most of using other people's work fairly.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Legal, Fair, And The Hard Cases`,
          paragraphs: [
            `Now the deepest point, the one that separates a thoughtful person from someone just memorizing rules: legal and fair and right are three different things, and they do not always agree. Something can be legal but feel unfair (a giant company using a tiny artist's public work in a way the law allows). Something can be illegal but feel harmless (a kid making a meme from a movie still). Something can be technically allowed but still wrong to do (copying a struggling friend's idea just because you can). The law is one tool for sorting creative conflicts, but it is not the same as your conscience, and a whole-person education means holding all three: what is legal, what is fair, and what you actually think is right.`,
            `Consider sampling in music, a real, rich example. Hip-hop was built partly on sampling, taking a piece of an older recording and building something new on top of it, and some of the most important music ever made was created this way. Early on, the rules were unclear; then lawsuits made sampling expensive and risky, which changed how music got made. Was sampling "stealing," or was it a new art form that transformed old work into something genuinely new, exactly the kind of creativity copyright is supposed to encourage? Reasonable people still disagree, and the law landed in a complicated place. This is not a clean story with a villain; it is a real collision between protecting creators and allowing new creativity, which is the central tension of this whole field.`,
            `Here is the balance to carry. Copyright protecting creators is genuinely good: it is part of how the songwriter from last lesson gets paid, how an artist can make a living, how your own future work could support you. But copyright locking everything down too tightly is genuinely bad: it can freeze culture, let powerful companies bully small creators, and stop the remixing and building-on that creativity has always depended on. A wise person does not cheer only for "protect everything" or only for "information wants to be free." They hold the tension, supporting creators' right to be paid and respected, and supporting culture's need to remix, learn, quote, and build. That balance, not a slogan, is the grown-up position.`,
          ],
          image: `/voyager-assets/creative-arts/l08-s4-fair.webp`,
          imageCaption: `The deepest point: legal, fair, and right are three different things that do not always agree. Legal but unfair (a giant company using a tiny artist's public work within the law); illegal but harmless (a kid's meme from a movie still); technically allowed but wrong (copying a struggling friend's idea because you can). The law sorts creative conflicts but is not your conscience. Real example, music sampling: hip-hop was built partly on sampling (taking a piece of an older recording, building something new on top); lawsuits later made it expensive and risky. Stealing, or a new art form transforming old work, the creativity copyright should encourage? Reasonable people still disagree. The balance to carry: protecting creators is genuinely good (it is how artists get paid), but locking everything down too tightly is genuinely bad (it freezes culture and lets the powerful bully small creators). Hold the tension; do not pick a slogan.`,
          vocab: [
            {
              word: `central tension`,
              definition: `The deepest point: legal, fair, and right are three different things that do not always agree. Something can be legal but feel unfair (a giant company using a tiny artist's public work in a way the law allows); illegal but feel harmless (a kid making a meme from a movie still); technically allowed but still wrong to do (copying a struggling friend's idea just because you can). The law is one tool for sorting creative conflicts, but it is not the same as your conscience, and a whole-person education means holding all three: what is legal, what is fair, and what you actually think is right. A rich real example is sampling in music: hip-hop was built partly on sampling (taking a piece of an older recording and building something new on top), and some of the most important music ever made was created this way; early rules were unclear, then lawsuits made sampling expensive and risky, changing how music got made. Was sampling "stealing," or a new art form that transformed old work into something genuinely new (exactly the creativity copyright is meant to encourage)? Reasonable people still disagree, and the law landed in a complicated place. The balance to carry: copyright protecting creators is genuinely good (it is how artists get paid and respected, including your own future work), but locking everything down too tightly is genuinely bad (it can freeze culture, let powerful companies bully small creators, and stop the remixing and building-on creativity has always depended on). A wise person holds the tension, supporting both creators' right to be paid and culture's need to remix, learn, quote, and build, rather than cheering only for "protect everything" or only for "information wants to be free."`,
              audioPrompt: `Now the deepest point, {name}, the one that separates a thoughtful person from someone just memorizing rules: legal and fair and right are three different things, and they do not always agree. Something can be legal but feel unfair, like a giant company using a tiny artist's public work in a way the law allows. Something can be illegal but feel harmless, like a kid making a meme from a movie still. Something can be technically allowed but still wrong to do, like copying a struggling friend's idea just because you can. The law is one tool for sorting creative conflicts, but it is not the same as your conscience. Consider sampling in music. Hip-hop was built partly on sampling, taking a piece of an older recording and building something new on top of it, and some of the most important music ever made was created this way. Then lawsuits made sampling expensive and risky, which changed how music got made. Was sampling stealing, or was it a new art form that transformed old work into something genuinely new? Reasonable people still disagree. Here is the balance to carry. Copyright protecting creators is genuinely good: it is how an artist can make a living, how your own future work could support you. But copyright locking everything down too tightly is genuinely bad: it can freeze culture and let powerful companies bully small creators. A wise person holds the tension instead of cheering for a slogan.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You learned what copyright actually is (automatic protection of original work) and its most useful idea, the split between the free idea and the owned expression. You learned that fair use is a real but genuinely fuzzy gray zone, weighed case by case, and that the confident one-line "rules" online are mostly myths. You learned the other rooms of intellectual property, trademark for brand identity, patent for inventions, and the three zones of use: protected, public domain, and deliberately licensed. And you learned the deepest thing, that legal, fair, and right are not the same, and that the field lives in a real tension between protecting creators and freeing culture.`,
            `Now the source-evaluation screen will hand you several real or realistic claims about copyright, the kind you actually see online, a confident "if you credit it, it is legal" myth, a careful explanation from a real legal source, a scary "you will get sued for everything" exaggeration, a balanced account of a real case, and ask you to sort them by how much you should trust them and why. This is the exact skill from Lessons 3 and 6, now aimed at a field absolutely flooded with confident misinformation.`,
            `One steadying thought. It is genuinely impossible to memorize copyright law, and you are not supposed to; even lawyers look things up and argue about the gray areas. What you can carry is the shape: know that your own work is protected, know the idea-versus-expression split, know that fair use is real but fuzzy, know the three zones, and know that the loud simple online "rules" are usually wrong. With that shape, you know enough to protect yourself, use others' work fairly, and crucially, to know when a situation is serious enough that you should slow down and ask a real expert instead of trusting a confident stranger online. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l08-s5-before.webp`,
          imageCaption: `Threads together. Copyright = automatic protection of original work; its key idea is the free idea vs. the owned expression. Fair use is a real but fuzzy gray zone weighed case by case; the confident one-line online "rules" are mostly myths. Other IP rooms: trademark (brand identity), patent (inventions); three zones of use: protected, public domain, deliberately licensed. Deepest point: legal, fair, and right are not the same; the field lives in tension between protecting creators and freeing culture. The source-evaluation screen ahead hands you real/realistic claims (a "credit makes it legal" myth, a careful legal source, a "you'll get sued for everything" scare, a balanced case account) to sort by trustworthiness. Steadying thought: you cannot memorize copyright law and are not supposed to; carry the SHAPE, and know when to slow down and ask a real expert instead of a confident stranger online.`,
          vocab: [
            {
              word: `memorizing law`,
              definition: `The synthesis before the source-evaluation screen. You learned what copyright actually is (automatic protection of original work the moment it is fixed) and its most useful idea, the split between the free idea and the owned expression. You learned that fair use is a real but genuinely fuzzy gray zone, weighed case by case on questions like transformation, amount used, and market harm, and that the confident one-line "rules" online ("credit makes it legal," "non-profit makes it fine," "anything online is free," "change it 30%") are mostly myths. You learned the other rooms of intellectual property, trademark for brand identity (names, logos) and patent for inventions, and the three zones of use: fully protected (ask permission), public domain (free for anyone), and deliberately licensed like Creative Commons (free within stated rules). And you learned the deepest thing, that legal, fair, and right are not the same, illustrated by music sampling, and that the field lives in a real tension between protecting creators and freeing culture. The source-evaluation screen will hand you several real or realistic copyright claims to sort by trustworthiness, the exact Lesson 3 and 6 skill aimed at a field flooded with confident misinformation. The steadying thought: it is impossible to memorize copyright law and you are not supposed to (even lawyers look things up and argue the gray areas). What you carry is the shape: your own work is protected; idea versus expression; fair use is real but fuzzy; the three zones; the loud simple online "rules" are usually wrong. With that shape you know enough to protect yourself, use others' work fairly, and recognize when a situation is serious enough to slow down and ask a real expert instead of trusting a confident stranger online.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You learned what copyright actually is, the automatic protection of original work, and its most useful idea, the split between the free idea and the owned expression. You learned that fair use is a real but genuinely fuzzy gray zone, weighed case by case, and that the confident one-line rules online are mostly myths. You learned the other rooms of intellectual property, trademark for brand identity, patent for inventions, and the three zones of use: protected, public domain, and deliberately licensed. And you learned the deepest thing, that legal, fair, and right are not the same. Now the source-evaluation screen will hand you several real or realistic claims about copyright, the kind you actually see online, and ask you to sort them by how much you should trust them and why. One steadying thought. It is genuinely impossible to memorize copyright law, and you are not supposed to; even lawyers look things up and argue about the gray areas. What you can carry is the shape: know that your own work is protected, know the idea-versus-expression split, know that fair use is real but fuzzy, know the three zones, and know that the loud simple online rules are usually wrong. With that shape, you know enough to protect yourself, use others' work fairly, and know when to slow down and ask a real expert instead of trusting a confident stranger online.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l08-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Claims About Copyright`,
          intro: `{name}, five claims about copyright, the kind you actually meet online and in real life. For each, decide how much you should trust it and why. Watch for the two failure modes: confident myths that sound official, and scary exaggerations that make you afraid to use anything. The honest sources will sound a little more careful and a little less certain.`,
          sources: [
            {
              id: `s1`,
              tier: `myth`,
              title: `"If you credit the artist, it's legal to use anything"`,
              type: `Common online myth`,
              context: `A widely repeated claim, often in video descriptions and social posts, that you can use any copyrighted song, image, or clip as long as you write the creator's name or say "no copyright infringement intended."`,
              quote: `"I don't own this song, all rights go to the artist, no copyright infringement intended."`,
              questions: [
                `Does crediting someone actually give you permission to use their work?`,
                `Why does this myth feel true even though it is false?`,
                `What would actually give you permission?`,
              ],
              evaluation: `Low trust, this is a flat myth. Crediting the creator is polite and honest, but it does not give you permission; using someone's work without permission is still using it without permission, credit or not, and "no copyright infringement intended" has no legal power at all. The myth feels true because crediting feels fair and respectful, and people assume fairness equals legality, but legal and fair are different things (the deepest idea from this lesson). What would actually give you permission: the work being in the public domain, the creator having released it under a license like Creative Commons that allows your use, your use genuinely qualifying as fair use, or you simply asking and getting a yes. Credit is something you should do; it is not something that makes unauthorized use legal.`,
            },
            {
              id: `s2`,
              tier: `A`,
              title: `A government copyright office's plain-language explainer`,
              type: `Official source`,
              context: `An official copyright office (the kind of government body that registers copyrights) publishes a careful, plain-language page explaining that copyright protects original expression automatically, that fair use exists but is decided case by case on several factors, and that they cannot tell you in advance whether a specific use is fair.`,
              quote: `"Whether a particular use qualifies as fair use depends on the specific facts and is evaluated case by case. We cannot advise whether your specific use is permitted."`,
              questions: [
                `Why is "we cannot tell you for sure" actually a sign of a trustworthy source here?`,
                `How does this match what the lesson said about fair use?`,
                `What does this source give you, even though it will not give you a yes or no?`,
              ],
              evaluation: `High trust, this is Tier A: an official source explaining the actual law carefully. Counterintuitively, the fact that it will NOT promise you a simple yes or no is exactly what makes it trustworthy, because fair use genuinely is decided case by case, and any source claiming otherwise is overselling certainty the law does not have. It matches the lesson precisely: copyright is automatic, fair use is a real but fuzzy gray zone, no magic percentages. What it gives you, even without a verdict, is the accurate framework, the real factors courts weigh, and the honest signal that for a high-stakes use you should consult an actual expert. An official source that admits uncertainty is more trustworthy than a confident stranger who does not.`,
            },
            {
              id: `s3`,
              tier: `myth`,
              title: `"If you change it 30%, it becomes yours"`,
              type: `Common online myth`,
              context: `A very common claim that there is a specific percentage, often "30%" or "if you change three things", you can alter someone's work by, after which it legally counts as your own original creation.`,
              quote: `"Just change at least 30% of it and you're totally fine, that's the rule, it's yours now."`,
              questions: [
                `Is there actually a magic percentage in copyright law?`,
                `Where does this myth come from, and why is it appealing?`,
                `What actually matters instead of a percentage?`,
              ],
              evaluation: `Low trust, another flat myth. There is no magic percentage in copyright law, not 30%, not "three changes," nothing like it; the "rule" is invented. It is appealing because people desperately want a clear, simple line in a genuinely fuzzy area, and a number feels safe and official. What actually matters is not a percentage but the real fair-use questions: did you transform the work into something genuinely new with its own meaning and purpose, how much of the heart of the original did you take, and are you harming the creator's ability to earn? You could change 50% of something and still infringe, or use a small amount transformatively and be fine. The desire for a clean number is understandable; the number itself is fiction.`,
            },
            {
              id: `s4`,
              tier: `hype (scare)`,
              title: `"Use anything copyrighted and you'll be sued into oblivion"`,
              type: `Fear-based exaggeration`,
              context: `A scary post claiming that any use of any copyrighted material, even a tiny quote, a meme, or a few seconds of background music, will get an ordinary person sued for huge amounts and ruined, so you should never touch anything you did not make.`,
              quote: `"Use one second of a song or one movie image and they WILL find you and sue you for millions. Never use anything you didn't create. Ever."`,
              questions: [
                `What real thing is this exaggerating from?`,
                `Why is fear-based certainty just as unreliable as myth-based certainty?`,
                `What does this scare make people wrongly afraid to do?`,
              ],
              evaluation: `Low trust, this is the opposite failure mode, fear-based exaggeration. It twists a real thing (copyright is enforceable and serious misuse can have real consequences) into a terrifying absolute that is not how things usually work for ordinary people, especially for things like memes, short quotes, classroom use, or genuine fair use. Notice that fear-based certainty is just as unreliable as myth-based certainty; both are confident and simple where the truth is nuanced. The harm of this scare is real but opposite to the myths: it makes people too afraid to do things they are actually allowed to do, quoting for criticism, teaching, making transformative work, using public-domain and Creative Commons material. Being needlessly frightened away from legitimate creativity is its own kind of loss. The honest middle: copyright is real and worth respecting, and most everyday, fair, transformative uses are not the catastrophe this claims.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `A balanced article explaining a real copyright case`,
              type: `Fact-checked journalism / explainer`,
              context: `A well-reported article walks through an actual copyright or sampling dispute, explains what each side argued, what the court weighed (transformation, amount, market harm), how it was decided, and notes that other similar cases came out differently because the facts differed.`,
              quote: `"The court weighed whether the new work transformed the original. Similar cases have gone both ways, because fair use turns on the specific facts, not a fixed rule."`,
              questions: [
                `Why is "similar cases have gone both ways" useful rather than frustrating?`,
                `What makes this more trustworthy than the myth and the scare?`,
                `What are the limits of even a good explainer?`,
              ],
              evaluation: `Solid trust, this is good Tier B: fact-checked explanation of a real case that shows how the factors actually get weighed and admits that similar cases came out differently. "Cases have gone both ways" is useful, not frustrating, because it is the truth, fair use turns on specific facts, and a source that teaches you that is teaching you to think rather than handing you a false rule. It beats the myth and the scare because it offers checkable specifics and honest nuance instead of confident absolutes in either direction. Its limits: one case does not predict yours, the law differs by country and changes over time, and even a great explainer reports how the law works rather than telling you what to do in your exact situation, which, for anything high-stakes, still calls for a real expert.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your actual rule for spotting a trustworthy copyright claim versus a myth or a scare? You met two opposite failure modes, "it's all totally fine if X" and "you'll be sued for everything", what do they have in common that makes both unreliable? In 5-6 sentences.`,
          reflectionPrompt: `Both the myths and the scare were confident and simple; the trustworthy sources were careful and admitted uncertainty. Where else in your life do you reach for a confident simple "rule" because the honest "it depends" feels too uncomfortable to sit with?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Two songs share the same basic theme but sound totally different. Using copyright's key distinction, why isn't that automatically "stealing"?`,
              options: [
                `Because copyright protects expression, not the underlying idea — and only the idea was shared.`,
                `Because copyright only applies to songs that are officially registered first.`,
                `Because copyright protects ideas, so sharing a theme is always fine.`,
                `Because any two different songs can never possibly be similar enough to truly count as copying.`,
              ],
              correctIndex: 0,
              explanation: `Copyright automatically protects original expression, not the underlying idea. The idea-versus-expression split is the most useful concept here, since most "did they steal it?" arguments turn on which was copied — the protectable expression or the free-to-share idea. The distractors invent a registration requirement, reverse the rule (protecting ideas), or deny similarity is ever possible.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does the "public domain" exist, according to the lesson?`,
              options: [
                `Because some creators forgot to claim copyright on their work.`,
                `Because copyright is long but limited, then returns work to shared culture to build on.`,
                `Because the government buys old works and gives them away for free.`,
                `Because it is only ever the boring or genuinely unpopular works that end up entering it.`,
              ],
              correctIndex: 1,
              explanation: `The public domain holds works whose copyright has expired, free for anyone to use. It exists because copyright is meant to be long but limited, then return work to shared culture so others can build on it. The distractors treat it as an accident of forgetting, a government purchase, or a dumping ground for bad work.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is "fair use" a gray zone rather than a clear rule with a fixed percentage?`,
              options: [
                `Because the law simply hasn't gotten around to writing the exact rule yet.`,
                `Because fair use only applies to schools, and schools change every year.`,
                `Because it's weighed case by case — transformation, amount, market harm — with no magic percentage.`,
                `Because the judges essentially flip a coin whenever they genuinely cannot decide a case.`,
              ],
              correctIndex: 2,
              explanation: `Fair use allows some unpermitted use for purposes like comment, teaching, or transformation, but it's weighed case by case (how transformative, how much was used, harm to the market). There's no magic percentage and no "credit makes it legal" rule. The distractors imagine a missing rule, limit it to schools, or reduce it to chance.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `A logo, a novel, and a new kind of engine each need protection. Which type of intellectual property fits each?`,
              options: [
                `Copyright for all three, since they're all someone's creative work.`,
                `Patent for the logo, copyright for the engine, trademark for the novel.`,
                `Trademark for everything, because each represents a brand.`,
                `Trademark for the logo, copyright for the novel, patent for the engine.`,
              ],
              correctIndex: 3,
              explanation: `Copyright protects creative expression (the novel), trademark protects brand identity like names and logos (the logo), and patent protects inventions (the engine). Keeping them straight already puts you ahead of most people. The distractors jam everything into one category or scramble the matches.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson describes three "zones" of using other people's creative work. Which correctly names them?`,
              options: [
                `Fully protected (ask permission), public domain (free), and licensed like Creative Commons.`,
                `Cheap, expensive, and free — depending on how much the work costs.`,
                `Music, images, and video — sorted purely by the type of media the work happens to be.`,
                `Old, new, and famous — depending on the work's age and fame.`,
              ],
              correctIndex: 0,
              explanation: `The three zones are: fully protected (ask permission), public domain (free for anyone), and deliberately licensed such as Creative Commons (free within the creator's rules). Knowing which zone a work is in is most of using it fairly. The distractors sort by price, media type, or age instead of by the actual permission status.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the lesson insist "legal," "fair," and "right" are three different things?`,
              options: [
                `Because the law is always fair, so the three words mean the same thing.`,
                `Because only trained lawyers are ever allowed to decide which one of them actually applies.`,
                `Because they can come apart — legal-but-unfair, illegal-but-harmless — so law isn't your conscience.`,
                `Because the word "right" is really just an old-fashioned way of saying "legal."`,
              ],
              correctIndex: 2,
              explanation: `Legal, fair, and right can come apart: something can be legal but unfair, illegal but harmless, or allowed but wrong. The law isn't your conscience, so a thoughtful person holds all three rather than collapsing them into one. The distractors collapse them, hand the judgment to lawyers, or treat the words as synonyms.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the example of music sampling reveal about the central tension in copyright?`,
              options: [
                `That music sampling is always simply theft and so it should always be completely banned.`,
                `That information wants to be free, so all sampling should be legal.`,
                `That music sampling has essentially nothing whatsoever to do with copyright law at all.`,
                `It sits on the tension between protecting creators and freeing culture to remix.`,
              ],
              correctIndex: 3,
              explanation: `Sampling sits exactly on the tension between protecting creators and freeing culture to remix and build. It shows why "it's all theft" and "information should be free" are both too simple; the wise position holds the tension rather than collapsing to one side. The distractors are precisely the two oversimple poles, plus a dodge that denies the connection.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `A copyright source says "we can't tell you for sure whether your use is fair." Why is that a sign it's TRUSTWORTHY, not weak?`,
              options: [
                `Because fair use is case-by-case, so honest sources admit they can't promise a verdict.`,
                `Because genuinely trustworthy sources should never give you any direct answer at all, ever.`,
                `Because admitting uncertainty means they don't actually know copyright law.`,
                `Because a source should always tell you what you want to hear.`,
              ],
              correctIndex: 0,
              explanation: `Fair use genuinely is case-by-case, so an honest source admits it can't promise a verdict. Confident certainty in either direction is the tell of a myth or a scare; careful uncertainty is the mark of accuracy. The distractors mistake honesty for ignorance, demand false certainty, or want comfort over truth.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: As long as you write "no copyright infringement intended" and credit the creator, you can legally use any song, image, or clip you want.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most widespread myths there is. Crediting the creator and writing "no copyright infringement intended" are common online, but neither gives you permission to use someone's work; using copyrighted work without permission is still using it without permission, credit or not, and that phrase has no legal power at all. The myth feels true because crediting is polite and respectful and people assume being fair automatically makes something legal — but, as this lesson stressed, legal and fair are different things. What actually lets you use someone else's work is one of a few real things: the work is in the public domain, the creator released it under a license like Creative Commons that permits your use, your use genuinely qualifies as fair use (transformative, limited, not harming their market), or you asked and got permission. Credit is something you should do as a matter of honesty and respect, and it matters, but it's not a magic key that turns unauthorized use into authorized use. Believing this myth is exactly how well-meaning people accidentally cross real lines.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 14 and make a YouTube video reviewing a movie you love. You include several short clips to discuss specific scenes, add your own commentary throughout, and credit the film. One friend says "you'll get sued, you used their clips." Another says "no, you credited it and it's a review, so it's automatically 100% legal." Using this lesson, what's the most accurate and thoughtful thing to say?`,
              options: [
                `Agree with the first friend — any use of clips means a lawsuit is coming.`,
                `Agree with the second friend — crediting it and calling it a review makes it automatically legal.`,
                `Reject both certainties: a real review with short clips and genuine commentary is the kind of transformative, critical use fair use is meant to protect, so it leans okay — while honestly admitting fair use is case-by-case and not guaranteed.`,
                `Delete the video to be safe, since copyright is too confusing to risk.`,
              ],
              correctIndex: 2,
              explanation: `Applied copyright literacy. The move is to reject both simple certainties — the "credit makes it legal" myth and the "you'll get sued" scare — and land on the accurate middle: a real review with short clips and genuine commentary is the transformative, critical use fair use is meant to protect, so it leans okay, while honestly admitting fair use is case-by-case and not guaranteed. The self-protecting moves (short clips, real added commentary, don't replace the market) come straight from the actual fair-use factors. The distractors are the two scares/myths and a fearful over-correction.`,
            },
          ]
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, what did you assume about copyright, that you could use anything, or that you could use nothing? Now that you know the idea-versus-expression split and the three zones, where were you most wrong, and what surprised you?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `Fair use is genuinely fuzzy. Which part still feels uncertain to you, and is that uncertainty the kind you should sit with (because the law really is unsure) or the kind you should resolve by asking an expert (because the stakes are real)?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson tried to make you someone who can use others' work fairly AND protect their own, without believing either the myths or the scares. Does holding that careful middle feel possible, or do you feel pulled toward one simple extreme? Which one?` },
            { id: `reflect-heritage`, category: `Your own work and brand`, prompt: `Caro, you are building a brand and securing names and logos, which is trademark work, while the lessons and content are protected by copyright. How does knowing the difference between trademark and copyright change how you think about protecting what you are building?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You use memes, clips, songs, and images constantly. Pick one thing you have used or want to use, and actually run it through the three zones (protected, public domain, licensed) and the fair-use questions. What do you conclude, and where are you unsure?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "copyright is just big companies protecting profits; information should be free and you should be able to use anything." State the strongest version of that view. Where is it pointing at something real, and where does it ignore the artist who needs to get paid?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `You use copyrighted work every day; this turns the rules into something you can actually act on. Two paths.`,
          familyActivity: {
            title: `The Three-Zones Sort`,
            duration: `40 minutes`,
            description: `As a family, gather a handful of creative things you use or love, a favorite song, a meme you sent recently, a photo from online, an old classic book or piece of music, an image you found for a school project, and sort each one into the three zones together: fully protected (you would need permission), public domain (old enough that anyone can use it), or deliberately licensed for sharing (like Creative Commons). For the protected ones, talk about what it would actually take to use them properly. For each, also ask the deeper trio from the lesson: would using it be legal, would it be fair, and would it be right? You will quickly find cases where those three answers do not match, which is exactly the point. The goal is to replace vague guessing with a real habit of asking which zone something is in before you use it.`,
          },
          projectOption: {
            title: `Make Something From The Public Domain, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Create a new work built legally and openly on top of older work, using only the public domain and Creative Commons. Week 1: find your raw material. Browse genuinely free sources, public-domain texts (old myths, fairy tales, classic poems, Shakespeare), public-domain images and music, and Creative Commons material where you follow the credit rules. Pick something to build on: retell a Greek myth in a modern setting, illustrate a public-domain poem, remix Creative Commons music into something new, or make a comic from a classic story. Week 2: make your new work, and write a short "rights note" explaining exactly what you used, which zone it came from, and why you were free to use it (and how you followed any license conditions, like crediting). The point is to feel, from the inside, the difference between freely building on the shared treasure chest of culture and copying protected work, and to practice doing it the clean, honest way.`,
            offerToParent: `Parent: opt your child into the public-domain project. Building something new specifically from public-domain and properly licensed material teaches the rules by doing rather than memorizing, and it builds the lifelong habit of checking which zone a work is in before using it, plus the creative confidence that there is a vast, genuinely free treasure chest of culture they are allowed to build on.`,
          },
          identityQuestion: `If you become someone who understands copyright well enough to protect your own work, use other people's fairly, see past both the myths and the scares, and know when a situation is serious enough to get real expert help, what does that let you create and share that someone ruled by guessing or fear cannot?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the difference between a free idea and an owned expression.`,
            `A person who can spot a copyright myth and a copyright scare and trust neither.`,
            `Someone who can build on the public domain freely and protect my own work too.`,
          ],
          saveKey: `identity_responses_ca_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eight down. You now understand the rules that decide who owns an idea, which most adults only guess at. You know what copyright actually is, automatic protection of original work, and its most useful idea, the split between the free idea and the owned expression, which settles most "did they steal this?" arguments. You know fair use is real but a genuine gray zone, weighed case by case on transformation, amount, and market harm, and you know the confident one-line online "rules" ("credit makes it legal," "change it 30%," "anything online is free") are myths. You can tell copyright from trademark (brand identity) and patent (inventions), and you know the three zones: protected, public domain, and deliberately licensed. You met the deepest idea, that legal, fair, and right are three different things, through the real story of music sampling and the central tension between protecting creators and freeing culture. And you learned to distrust both the myths and the scares, because on a genuinely complex topic, confident simplicity, in either direction, is the warning sign. Next: building a creative career, where everything you have learned about money, value, and rights becomes a practical plan you can actually follow. Onward, {name}. — Muse`,
          badge: `ip-literate`,
          badgeName: `IP & Copyright Literate`,
          xpEarned: 75,
          competencies: [
            `Explains copyright as automatic protection of original expression, and the crucial idea-versus-expression split`,
            `Understands the public domain and why copyright is long but limited`,
            `Explains fair use as a real but case-by-case gray zone, and identifies common copyright myths (credit, percentage, "online is free") as false`,
            `Distinguishes copyright (expression), trademark (brand identity), and patent (inventions)`,
            `Names the three zones of use: fully protected, public domain, and deliberately licensed (Creative Commons)`,
            `Holds that legal, fair, and right are distinct, illustrated by music sampling and the protect-creators vs. free-culture tension`,
            `Distrusts both copyright myths and copyright scares, recognizing confident simplicity as the warning sign on a complex topic`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Building a Creative Career`,
            hook: `Money, value, and rights become a real, practical plan you can actually follow. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L08 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
