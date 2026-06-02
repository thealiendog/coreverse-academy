// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L15 — Body Image and Self-Perception
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Media Literacy, Body Image Research
// CALIBRATED: Voyager spec v1.1 (May 2026) + extra-care calibration
//
// SAFETY CALIBRATION (HIGHEST PRIORITY):
//   - NO specific body measurements, weight numbers, BMI, sizes, proportions
//   - NO before/after framings or appearance prescriptions
//   - NO "techniques to feel better about specific body parts"
//   - Frame as MEDIA LITERACY not body prescription
//   - Beauty standards as industrially constructed for profit (Wolf, Engeln, Kite)
//   - Reference back to L04 (food/diet culture) framework
//   - Warning signs of body dysmorphia and eating disorders
//   - National Alliance for Eating Disorders helpline (NEDA disconnected per system)
//   - Acknowledge gendered nature without prescribing
//   - Don't reinforce comparison/perfectionism even in service of feeling better
//
// Interaction format: ARGUMENT BUILDER (body neutrality / body positivity / critical structural)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l15-v1";

const LIFEWELLNESS_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-15`,
      title: `Body Image and Self-Perception`,
      duration: 35,
      xpReward: 75,
      badge: `body-image-literate`,
      badgeName: `Body Image Literate`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, body image is one of the most consequential wellness topics, especially for your generation. The research is clear: constant exposure to beauty-evaluation content (social media, advertising, entertainment) produces measurable harm; what researcher Renee Engeln calls "beauty sickness." This lesson works through three serious positions on body image: body neutrality (focusing on function rather than appearance), body positivity (loving the body as it is), and critical/structural (recognizing beauty standards as constructed by industries with profit motives, requiring media literacy). The framing throughout is media literacy, not body prescription. This lesson does not include specific advice about how your body should look, measurements, or appearance goals because that's not what produces wellbeing. What does produce wellbeing is recognition of how the industries work, frameworks for thinking about your body, and skills to navigate the constant evaluation environment.`,
          headline: `Body Image and Self-Perception`,
          subtitle: `Three serious positions. Media literacy framework. Research-grounded.`,
          visual: `/voyager-assets/life-wellness/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The Research Actually Shows`,
          paragraphs: [
            `Body image research has produced substantial findings over the past several decades that pop content largely ignores. Understanding these findings shifts what's worth thinking about and what isn't.`,
            `Beauty sickness as documented condition. Renee Engeln at Northwestern is one of the leading researchers on body image and beauty culture. Her book "Beauty Sick" (2017) synthesizes decades of research on what happens when girls and women (and increasingly boys and men) are exposed to constant body evaluation. The findings are consistent: body monitoring, body shame, body dissatisfaction, and disordered eating all increase with exposure to beauty-evaluation environments. Engeln's term "beauty sickness" describes the cognitive, emotional, and behavioral cost of constantly evaluating and being evaluated for appearance.`,
            `Social media research specifically. Marika Tiggemann and Amy Slater, Jasmine Fardouly, Lenny Vartanian, and others have conducted extensive research on social media and body image. The findings: even brief exposure to image-based social media (Instagram, TikTok) produces measurable decreases in body satisfaction in adolescents and young adults, particularly girls. The effects are stronger for image-based platforms than text-based ones, stronger for "fitspiration" and beauty content than other content, and stronger for adolescents who compare themselves to images they see. These are direct experimental findings, not just correlations.`,
            `Internal Facebook research that became public in 2021 (the "Facebook Files" revelations from Frances Haugen) showed that Instagram specifically was making teen girls feel worse about their bodies, that Facebook knew this from internal research, and that the company continued operating the product despite this knowledge. The specific internal slide stated that for teen girls, Instagram made body image worse for 1 in 3 girls who already had body image concerns. This is internal industry research, not external speculation.`,
            `Body dysmorphic disorder and disordered eating. These are clinical conditions with substantial research, not just "bad body image days." Body dysmorphic disorder (BDD) involves preoccupation with perceived appearance flaws that significantly impair functioning. Disordered eating exists on a spectrum from occasional restrictive eating to clinical eating disorders (anorexia nervosa, bulimia nervosa, binge eating disorder). Adolescent rates of both have risen substantially over the past 15-20 years, correlating with image-based media expansion. If you're experiencing significant distress about your appearance that's affecting your functioning, that warrants professional support, not just more self-improvement.`,
            `What's well-supported across the literature. Constant exposure to image-based beauty-evaluation content reduces body satisfaction in measurable ways. Reducing exposure produces measurable improvements. Building identity sources that don't require appearance evaluation buffers against the effects. Industries that monetize beauty insecurity have direct financial interest in maintaining body dissatisfaction. The research isn't contested on these specific findings, though specific interventions and framings are.`,
          ],
          image: `/voyager-assets/life-wellness/l15-s1-research.webp`,
          imageCaption: `Engeln's "Beauty Sick" (Northwestern). Fardouly, Vartanian, Tiggemann research on social media and body image. Facebook internal research 2021. Body dysmorphic disorder and disordered eating as clinical conditions; rising rates.`,
          vocab: [
            {
              word: `body image research findings`,
              definition: `Renee Engeln at Northwestern, "Beauty Sick" 2017: "beauty sickness" as documented condition from constant body evaluation environment. Tiggemann, Slater, Fardouly, Vartanian: experimental research showing image-based social media reduces body satisfaction, particularly girls; strongest for "fitspiration"/beauty content; strongest for comparing-prone adolescents. Facebook internal research 2021 (Haugen revelations): Instagram known to worsen body image for teen girls. Body dysmorphic disorder (BDD) and disordered eating as clinical conditions; rates rising with image-based media expansion. Significant appearance distress warrants professional support.`,
              audioPrompt: `Body image research has produced substantial findings over the past several decades, {name}. Renee Engeln at Northwestern is one of the leading researchers on body image and beauty culture. Her book "Beauty Sick" from 2017 synthesizes decades of research on what happens when girls and women, and increasingly boys and men, are exposed to constant body evaluation. The findings are consistent: body monitoring, body shame, body dissatisfaction, and disordered eating all increase with exposure to beauty-evaluation environments. Engeln's term "beauty sickness" describes the cognitive, emotional, and behavioral cost of constantly evaluating and being evaluated for appearance. Marika Tiggemann, Jasmine Fardouly, Lenny Vartanian, and others have conducted experimental research on social media and body image. Even brief exposure to image-based social media produces measurable decreases in body satisfaction in adolescents and young adults, particularly girls. Internal Facebook research that became public in 2021 showed that Instagram was making teen girls feel worse about their bodies, that Facebook knew this from internal research, and that the company continued operating the product despite this knowledge.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Body Neutrality`,
          paragraphs: [
            `The first serious position is body neutrality. The framework argues that the most useful response to constant body evaluation isn't to feel better about your appearance but to substantially reduce the importance of appearance to your identity entirely. Bodies are functional vehicles; the body's value is what it does and experiences, not how it looks.`,
            `Defenders include Anne Poirier ("The Body Joyful"), various therapists working in eating disorder recovery, and researchers studying alternatives to appearance-focused frameworks. The position has grown in influence over the past decade as critiques of body positivity (covered next) accumulated.`,
            `Specific claims and arguments. Bodies serve functional purposes (movement, sensation, expression, connection, capacity for experience) that have nothing to do with how they look. Centering function rather than appearance shifts the relationship with the body from object-being-evaluated to subject-living-through. The shift reduces beauty sickness measurably because it removes the appearance-evaluation frame entirely rather than trying to feel better within that frame. For people in eating disorder recovery, body neutrality has emerged as one of the most useful frameworks; trying to "feel beautiful" can be a setup for failure, while "my body lets me do things I value" is more achievable.`,
            `What this position implies practically. When you catch yourself evaluating your appearance, redirect to what your body is doing or capable of. Reduce exposure to content that triggers appearance evaluation. Build identity sources that don't require appearance evaluation at all. Notice when you're being objectified by others (treated as appearance-object) and recognize the shift. Develop language for what your body is doing rather than how it looks ("I'm hungry," "I'm tired," "I felt strong climbing those stairs" rather than appearance language).`,
            `Strengths of the position. Most empirically supported approach for people with eating disorder histories or strong beauty sickness. Removes the comparison loop entirely rather than trying to win within it. Aligns with research on what produces wellbeing (function, capability, connection are more wellbeing-relevant than appearance). Achievable in a way that "love how you look" sometimes isn't.`,
            `Limits of the position. Other people will still evaluate your appearance whether or not you do; complete neutrality may not be possible while living in the actual world. Bodies do change (puberty, illness, aging) in ways that have real significance; pure neutrality can feel like denial. Can feel cold or unfeeling when applied to bodies that do have meaning beyond function (intimacy, embodiment, sensory experience). Can be co-opted as "just don't think about appearance" advice that doesn't address the underlying conditions producing constant evaluation.`,
          ],
          image: `/voyager-assets/life-wellness/l15-s2-neutrality.webp`,
          imageCaption: `Position 1: body neutrality. Anne Poirier "The Body Joyful." Reduces importance of appearance to identity. Strengths: removes comparison loop, eating disorder recovery support. Limits: can feel cold, others still evaluate.`,
          vocab: [
            {
              word: `body neutrality position`,
              definition: `Framework arguing most useful response to constant body evaluation is substantially reducing importance of appearance to identity entirely. Bodies are functional vehicles; value is what they do and experience, not how they look. Defenders include Anne Poirier ("The Body Joyful"), therapists in eating disorder recovery work, researchers on alternatives to appearance-focused frameworks. Strengths: most empirically supported for eating disorder histories or strong beauty sickness; removes comparison loop entirely; aligns with research on what produces wellbeing; achievable in ways "love how you look" sometimes isn't. Limits: others still evaluate; bodies do change in meaningful ways; can feel cold; can be co-opted as "don't think about appearance" advice.`,
              audioPrompt: `The body neutrality position argues that the most useful response to constant body evaluation isn't to feel better about your appearance but to substantially reduce the importance of appearance to your identity entirely, {name}. Bodies are functional vehicles; the body's value is what it does and experiences, not how it looks. Defenders include Anne Poirier in her book "The Body Joyful," various therapists working in eating disorder recovery, and researchers studying alternatives to appearance-focused frameworks. Bodies serve functional purposes (movement, sensation, expression, connection, capacity for experience) that have nothing to do with how they look. Centering function rather than appearance shifts the relationship with the body from object-being-evaluated to subject-living-through. The shift reduces beauty sickness measurably because it removes the appearance-evaluation frame entirely rather than trying to feel better within that frame. For people in eating disorder recovery, body neutrality has emerged as one of the most useful frameworks; trying to "feel beautiful" can be a setup for failure, while "my body lets me do things I value" is more achievable.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Body Positivity`,
          paragraphs: [
            `The second position is body positivity. The framework argues that the response to oppressive beauty standards is to affirm all bodies as valuable and beautiful, particularly bodies that have been historically marginalized (fat bodies, disabled bodies, bodies of color, queer bodies, aging bodies, bodies that don't fit dominant beauty standards).`,
            `Defenders include Sonya Renee Taylor ("The Body Is Not An Apology" 2018), the fat acceptance movement (which has roots in the 1960s and influences body positivity), various activists and writers in disability studies, and the broader social justice tradition. The position has substantial cultural influence; "body positivity" appears widely in marketing, social media, and pop framings.`,
            `Specific claims and arguments. Beauty standards have historically been used to oppress particular groups (fat people experience documented discrimination in employment, healthcare, and many other domains; disability has been excluded from beauty entirely; race-based beauty standards have caused real harm). The political response is collective: making space for marginalized bodies as beautiful rather than just acceptable. The personal response is internalized: loving your body as it is, refusing to participate in self-hatred that the system depends on.`,
            `What this position implies practically. Affirm bodies that have been excluded from beauty standards. Engage with content that shows diverse bodies. Refuse the framing that some bodies are problems to be fixed. Recognize the political dimensions of body image: who benefits from making people hate their bodies (industries), who is harmed (everyone, especially marginalized people). Build communities that affirm bodies rather than evaluating them.`,
            `Strengths of the position. Addresses real political dimensions of body image (oppression of marginalized bodies, industries profiting from body hatred). Provides community and movement infrastructure. Particularly important for people in marginalized bodies who don't experience the "neutral" body neutrality is built around. Creates content and representation that shifts what's visible as beautiful.`,
            `Limits and critiques. Keeps body appearance central to identity rather than reducing its importance (the critique that gave rise to body neutrality). The "love your body" prescription can feel forced or impossible for people experiencing genuine distress; saying "love it!" doesn't make the underlying conditions go away. Has been substantially co-opted by industries that originally created the problem (companies using "body positive" marketing to sell the same products that produce body dissatisfaction). Some critiques argue body positivity has been narrowed to mean "all body types are pretty" rather than its original political critique of how beauty operates. Can produce pressure to perform body acceptance that doesn't match actual experience.`,
            `Important framing. Body positivity and body neutrality are not opposed in their best forms; many people benefit from both. Body positivity may be more useful for political and community work; body neutrality may be more useful for individual cognitive work, especially for people with eating disorder histories. The specific application matters.`,
          ],
          image: `/voyager-assets/life-wellness/l15-s3-positivity.webp`,
          imageCaption: `Position 2: body positivity. Sonya Renee Taylor "The Body Is Not An Apology." Fat acceptance, disability studies roots. Strengths: political dimensions, marginalized bodies. Limits: keeps appearance central; co-opted by industries.`,
          vocab: [
            {
              word: `body positivity position`,
              definition: `Framework affirming all bodies as valuable and beautiful, particularly historically marginalized bodies. Defenders include Sonya Renee Taylor ("The Body Is Not An Apology" 2018), fat acceptance movement (1960s roots), disability studies activists. Strengths: addresses political dimensions (oppression of marginalized bodies, industries profiting from body hatred); provides community and movement infrastructure; particularly important for marginalized people. Limits: keeps body appearance central rather than reducing importance; "love your body" prescription can feel forced; substantially co-opted by industries that created the problem; can produce pressure to perform acceptance. Not opposed to body neutrality in best forms; complementary.`,
              audioPrompt: `The body positivity position argues that the response to oppressive beauty standards is to affirm all bodies as valuable and beautiful, particularly bodies that have been historically marginalized, {name}. Fat bodies, disabled bodies, bodies of color, queer bodies, aging bodies, bodies that don't fit dominant beauty standards. Defenders include Sonya Renee Taylor in her book "The Body Is Not An Apology" from 2018, the fat acceptance movement which has roots in the 1960s, various activists and writers in disability studies, and the broader social justice tradition. Beauty standards have historically been used to oppress particular groups; fat people experience documented discrimination in employment, healthcare, and many other domains; disability has been excluded from beauty entirely; race-based beauty standards have caused real harm. Body positivity has limits: it keeps body appearance central to identity rather than reducing its importance. The "love your body" prescription can feel forced or impossible for people experiencing genuine distress. Body positivity has been substantially co-opted by industries that originally created the problem, using "body positive" marketing to sell the same products that produce body dissatisfaction.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Critical/Structural (Media Literacy)`,
          paragraphs: [
            `The third position argues that the most important framing isn't how you relate to your own body but understanding the system producing constant body evaluation in the first place. Beauty standards aren't natural or universal; they're constructed by industries with specific profit motives. The intervention is at the system level (media literacy, recognition of industry mechanics) as well as the individual level.`,
            `Defenders include Naomi Wolf ("The Beauty Myth" 1991), Susie Orbach ("Bodies" 2009 and "Fat Is A Feminist Issue" 1978), Renee Engeln (whose research connects to this position), Lindsay and Lexie Kite ("More Than a Body" 2020 and the Beauty Redefined project), and feminist scholars across multiple disciplines.`,
            `Specific claims and arguments. Beauty standards vary enormously across cultures and time periods; what's considered beautiful in one era or culture is unattractive in another. This indicates beauty standards are constructed, not natural. The current beauty standards in your environment have been substantially shaped by industries that profit from your body dissatisfaction: beauty industry ($500+ billion globally), diet industry ($200+ billion), cosmetic surgery industry, fitness industry's appearance-focused segment, advertising industry whose products are bought partly through manufactured insecurity. These industries have direct financial interest in your body dissatisfaction; their products solve "problems" they helped create.`,
            `Lindsay and Lexie Kite's "More Than a Body" framework. They identify three layers: body objectification (treating your body as object to be evaluated), body monitoring (constantly checking how your body looks), and body image disruption (when monitoring interrupts other activities). They argue the response isn't loving your body or being neutral about it but building "body image resilience" through media literacy, awareness of objectification, and what they call "more than a body" identity development (identity sources that aren't about appearance at all).`,
            `What this position implies practically. Audit your media diet for content that triggers body monitoring or evaluation; reduce exposure to it deliberately. Recognize specific industry mechanics: how advertising creates insecurity to sell solutions; how social media algorithms reward beauty-evaluation content; how beauty/diet/fitness products are marketed using manufactured problems. Develop identity sources that don't require body evaluation. Engage in collective rather than just individual response: critique industries, demand regulation, support media literacy education, hold platforms accountable.`,
            `Strengths of the position. Addresses cause rather than just symptoms. Provides framework that doesn't require feeling differently about your specific body (which can be unreliable). Empowers media literacy that generalizes across many domains. Acknowledges political and economic dimensions other positions can underweight.`,
            `Limits of the position. Structural change is slow; individuals still have to navigate current conditions. Can be intellectually satisfying without producing immediate emotional shift. Doesn't replace individual cognitive work for people in significant distress. Best as complement to (not replacement for) body neutrality or body positivity at the individual level.`,
            `Specific connection back to L04. The critical/structural framework on body image is closely connected to the critical/structural framework on food and diet culture from L04 (Harrison "Anti-Diet," Gordon "What We Don't Talk About When We Talk About Fat"). The diet industry, beauty industry, and fitness-as-appearance industry are intersecting, all monetizing body insecurity. Recognizing this overlap helps make sense of how pervasive the system is.`,
          ],
          image: `/voyager-assets/life-wellness/l15-s4-structural.webp`,
          imageCaption: `Position 3: critical/structural. Wolf "Beauty Myth," Engeln "Beauty Sick," Kite & Kite "More Than a Body." Beauty standards constructed by industries with profit motives. Media literacy as intervention.`,
          vocab: [
            {
              word: `critical/structural position on body image`,
              definition: `Framework arguing most important framing is understanding the system producing constant body evaluation. Beauty standards constructed by industries with profit motives (beauty $500B+, diet $200B+, cosmetic surgery, fitness-as-appearance, advertising). Defenders: Naomi Wolf "The Beauty Myth" 1991; Susie Orbach "Bodies" 2009; Renee Engeln research; Lindsay and Lexie Kite "More Than a Body" 2020 and Beauty Redefined project. Three layers (Kite): body objectification, body monitoring, body image disruption. Intervention: media literacy, exposure audit, identity sources beyond appearance, collective response. Closely connected to L04 critical/structural food framework.`,
              audioPrompt: `The critical and structural position on body image argues that the most important framing isn't how you relate to your own body but understanding the system producing constant body evaluation in the first place, {name}. Beauty standards aren't natural or universal; they're constructed by industries with specific profit motives. Defenders include Naomi Wolf in "The Beauty Myth" from 1991, Susie Orbach in "Bodies" from 2009, Renee Engeln whose research connects to this position, and Lindsay and Lexie Kite in "More Than a Body" from 2020 and their Beauty Redefined project. Beauty standards vary enormously across cultures and time periods; what's considered beautiful in one era or culture is unattractive in another. The current beauty standards in your environment have been substantially shaped by industries that profit from your body dissatisfaction: beauty industry globally over 500 billion dollars, diet industry over 200 billion, cosmetic surgery industry, fitness industry's appearance-focused segment, advertising industry. These industries have direct financial interest in your body dissatisfaction; their products solve "problems" they helped create.`,
            },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, the three positions aren't strictly exclusive. Many people who think carefully about body image integrate elements: media literacy from the critical/structural position; body neutrality for individual cognitive work; body positivity for political and community engagement. The forcing function of the argument is committing to a primary framing that shapes how you'll respond.`,
            `One framing as you decide. Each position implies different responses. Body neutrality: reduce appearance importance to identity; focus on function. Body positivity: affirm bodies as they are, especially marginalized bodies; refuse self-hatred politically. Critical/structural: media literacy first; understand industry mechanics; build identity sources beyond appearance.`,
            `Another framing. The positions operate at different levels. Body neutrality: cognitive (how you think about your body). Body positivity: identity and political (how you and your community relate to bodies). Critical/structural: systemic (the conditions producing body evaluation).`,
            `One specific framing for your generation. The conditions you're navigating are unprecedented. Previous generations weren't exposed to thousands of curated beauty-evaluation images daily; you are. Research shows this exposure produces measurable harm, and the harm is structurally engineered (Facebook's own internal research confirmed Instagram makes teen body image worse and the company knew). Whichever position you commit to, the critical/structural recognition matters because it explains why this is so hard for your generation specifically.`,
            `Important reminder before you argue. If you're experiencing significant distress about your body that's affecting your functioning (eating becoming complicated, mood significantly affected, daily activities interrupted by body monitoring, or specific symptoms of disordered eating or body dysmorphic disorder) is beyond what an argument can address and warrants professional support. The National Alliance for Eating Disorders helpline (1-866-662-1235) is available in the US, school counselors can help connect to resources, and pediatricians can identify when professional support is needed. Building good frameworks at this level is one thing; experiencing clinical distress is another, and professional support exists for it.`,
            `One last framing. You're 12. The body-image patterns you build now shape decades of relationship with your body. Adults who absorbed beauty culture without media literacy often spend years navigating effects they didn't have framework to recognize. Building research-grounded framework now (whichever position you commit to) is one of the most consequential wellness investments at this age.`,
          ],
          image: `/voyager-assets/life-wellness/l15-s5-before.webp`,
          imageCaption: `Three positions integrate in practice. Different levels (cognitive, identity/political, systemic). Generational conditions unprecedented. Significant distress warrants professional support: National Alliance for Eating Disorders 1-866-662-1235.`,
          vocab: [
            {
              word: `integrating body image frameworks`,
              definition: `Three positions integrate in practice at different levels: body neutrality (cognitive: reducing appearance importance to identity); body positivity (identity/political: affirming marginalized bodies, refusing self-hatred); critical/structural (systemic: media literacy, industry mechanics, identity sources beyond appearance). Mature literacy integrates all three. Generational conditions unprecedented for adolescents today (thousands of curated beauty-evaluation images daily). Significant distress affecting functioning warrants professional support: National Alliance for Eating Disorders 1-866-662-1235, school counselors, pediatricians.`,
              audioPrompt: `Integrating body image frameworks is what mature literacy involves, {name}. The three positions aren't strictly exclusive. Many people integrate: media literacy from the critical/structural position; body neutrality for individual cognitive work; body positivity for political and community engagement. The positions operate at different levels. Body neutrality is cognitive: how you think about your body. Body positivity is identity and political: how you and your community relate to bodies. Critical and structural is systemic: the conditions producing body evaluation. The conditions you're navigating are unprecedented. Previous generations weren't exposed to thousands of curated beauty-evaluation images daily; you are. Whichever position you commit to, the critical and structural recognition matters because it explains why this is so hard for your generation specifically. If you're experiencing significant distress about your body that's affecting your functioning, that's beyond what an argument can address and warrants professional support. The National Alliance for Eating Disorders helpline at 1-866-662-1235 is available in the US. School counselors and pediatricians can connect you to professional resources.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l15-argument-builder`,
          type: `argument-builder`,
          headline: `How Should We Think About Bodies?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders and limits.`,
          positions: [
            {
              id: `neutrality`,
              label: `Body neutrality: reduce the importance of appearance to identity; focus on function and capability`,
              summary: `Bodies are functional vehicles; value is what they do/experience, not how they look. Most useful response to constant evaluation is reducing appearance importance to identity entirely, not feeling better within the evaluation frame. Defenders: Anne Poirier, eating disorder recovery therapists. Strengths: most empirically supported for ED histories; removes comparison loop; achievable. Limits: others still evaluate; can feel cold; can be co-opted as "don't think about it."`,
            },
            {
              id: `positivity`,
              label: `Body positivity: affirm all bodies as valuable, especially historically marginalized bodies`,
              summary: `Response to oppressive beauty standards is affirming all bodies, particularly fat bodies, disabled bodies, bodies of color, queer bodies, aging bodies. Roots in fat acceptance, disability studies. Defenders: Sonya Renee Taylor "The Body Is Not An Apology," activists. Strengths: addresses real political dimensions, community infrastructure, important for marginalized people. Limits: keeps appearance central; "love your body" can feel forced; co-opted by industries.`,
            },
            {
              id: `structural`,
              label: `Critical/structural: media literacy first; recognize industries constructing beauty standards for profit`,
              summary: `Most important framing is understanding the system. Beauty standards constructed by industries with profit motives (beauty $500B+, diet $200B+, cosmetic surgery, fitness-as-appearance, advertising). Defenders: Wolf "Beauty Myth," Engeln "Beauty Sick," Kite & Kite "More Than a Body." Strengths: addresses cause not just symptoms; generalizable media literacy. Limits: structural change is slow; needs to complement individual work.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Renee Engeln's research at Northwestern documents "beauty sickness": the cognitive, emotional, and behavioral cost of constant body evaluation. Effects: increased body monitoring, body shame, body dissatisfaction, disordered eating with exposure to beauty-evaluation environments.`,
              source: `Engeln "Beauty Sick" 2017; ongoing research`,
            },
            {
              id: `e2`,
              text: `Experimental research (Tiggemann, Slater, Fardouly, Vartanian, others): even brief exposure to image-based social media produces measurable decreases in body satisfaction in adolescents and young adults, particularly girls. Effects stronger for "fitspiration"/beauty content.`,
              source: `Multiple experimental studies, replicated`,
            },
            {
              id: `e3`,
              text: `Internal Facebook research (2021 Haugen revelations): Instagram known internally to worsen body image for teen girls, specifically 1 in 3 girls who already had body image concerns. Company continued operating product despite knowledge. Industry-internal confirmation of measurable harm.`,
              source: `Facebook Files 2021; Haugen testimony`,
            },
            {
              id: `e4`,
              text: `Naomi Wolf's "The Beauty Myth" (1991) and subsequent feminist scholarship document beauty standards as constructed by industries with profit motives. Beauty industry over $500B globally, diet industry over $200B; products solve "problems" they helped create.`,
              source: `Wolf 1991, Orbach 2009, industry statistics`,
            },
            {
              id: `e5`,
              text: `Lindsay and Lexie Kite's "More Than a Body" (2020) and Beauty Redefined research identify three layers: body objectification (treating body as object to be evaluated), body monitoring (constantly checking how it looks), body image disruption (monitoring interrupting other activities). Resilience built through media literacy and identity beyond appearance.`,
              source: `Kite & Kite 2020; Beauty Redefined project`,
            },
            {
              id: `e6`,
              text: `Beauty standards vary enormously across cultures and time periods; what's considered beautiful in one era or culture is unattractive in another. This indicates standards are constructed, not natural. Anthropological and historical evidence.`,
              source: `Cross-cultural and historical scholarship`,
            },
            {
              id: `e7`,
              text: `Body neutrality has emerged as one of the most useful frameworks in eating disorder recovery (Poirier "The Body Joyful"; clinical research). Trying to "feel beautiful" can be a setup for failure, while "my body lets me do things I value" is more achievable.`,
              source: `Poirier; eating disorder recovery literature`,
            },
            {
              id: `e8`,
              text: `Body positivity has substantially shifted what's visible as beautiful in media and provided community infrastructure for marginalized bodies (fat acceptance, disability representation, racial diversity in beauty). Has also been substantially co-opted by industries that originally created the problem (companies using "body positive" marketing to sell same products).`,
              source: `Movement history; marketing critique`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that bodies are appropriately a major topic of intellectual and emotional attention. But maybe the meta-problem is that body image has become a topic at all; the amount of cognitive and emotional energy your generation is being asked to spend on body image (even in service of feeling better about your body) is itself the problem. Previous generations didn't have body neutrality, body positivity, or body image media literacy as concepts because they weren't being subjected to thousands of beauty-evaluation images daily. The frameworks themselves are responses to a problem that maybe shouldn't exist. The most radical response isn't picking the right body image framework but refusing to make this a major topic of your inner life at all, directing the attention to things that matter (relationships, meaning, work, contribution) and letting the body image industry's manufactured topic slide off. Why are we even having this conversation? Maybe the conversation itself is the problem."`,
            promptInstruction: `In 3-4 sentences, respond. Is body image appropriately a topic at all? Or is the topic itself part of what the industries created? How does your position handle this meta-challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does Renee Engeln's research on "beauty sickness" document?`,
              options: [
                `Just feelings`,
                `Documented condition from constant body evaluation environment; cognitive, emotional, and behavioral costs; body monitoring, body shame, body dissatisfaction, disordered eating all increase with exposure to beauty-evaluation content; effects measurable; Northwestern researcher, "Beauty Sick" book (2017)`,
                `Random`,
                `Just teens`,
              ],
              correctIndex: 1,
              explanation: `Engeln's framework treats beauty sickness as a documented condition with specific effects, not just "bad self-esteem." The research has shifted how serious body image scholarship treats the topic: as a public health issue with structural causes, not just individual feelings.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did the 2021 Facebook Files revelations show about Instagram and teen body image?`,
              options: [
                `Random`,
                `Internal Facebook research showed Instagram known to worsen body image for teen girls (specifically 1 in 3 girls who already had body image concerns); company knew this from internal research; continued operating product despite knowledge; Haugen testimony made this public; industry-internal confirmation of measurable harm beyond external research`,
                `Just speculation`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Facebook Files matter because they're industry-internal confirmation of what external researchers had been arguing. The company knew its product was harming teen girls and made the business decision to continue anyway. This changes how to think about platform-level interventions and accountability.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the body neutrality position argue?`,
              options: [
                `Just ignore bodies`,
                `Most useful response to constant body evaluation is substantially reducing the importance of appearance to identity entirely; bodies are functional vehicles, value is what they do/experience not how they look; centering function shifts relationship from object-being-evaluated to subject-living-through; particularly useful in eating disorder recovery; Anne Poirier "The Body Joyful"`,
                `Random`,
                `Just don't think`,
              ],
              correctIndex: 1,
              explanation: `Body neutrality has grown in influence as critiques of body positivity accumulated. The key shift is removing the appearance-evaluation frame entirely rather than trying to feel better within that frame. For people with eating disorder histories specifically, this has emerged as one of the most useful frameworks.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the body positivity position argue?`,
              options: [
                `Random`,
                `Affirm all bodies as valuable and beautiful, particularly historically marginalized bodies (fat bodies, disabled bodies, bodies of color, queer bodies, aging bodies); response to oppressive beauty standards is collective affirmation and refusal of self-hatred; defenders include Sonya Renee Taylor "The Body Is Not An Apology" (2018), fat acceptance movement (1960s roots), disability studies`,
                `Just be happy`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Body positivity has substantial political and community infrastructure. It's particularly important for people in marginalized bodies who don't experience the "neutral" body neutrality is built around. Critiques include that it keeps appearance central and has been substantially co-opted by industries.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the critical/structural position argue?`,
              options: [
                `Random`,
                `Most important framing is understanding the system producing constant body evaluation; beauty standards constructed by industries with profit motives (beauty $500B+, diet $200B+, cosmetic surgery, fitness-as-appearance, advertising); these industries have direct financial interest in body dissatisfaction; intervention at system level (media literacy, industry recognition) as well as individual; Wolf, Orbach, Engeln, Kite & Kite`,
                `Just blame industries`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The critical/structural position addresses cause rather than just symptoms. It provides framework that doesn't require feeling differently about your specific body (which can be unreliable). It empowers media literacy that generalizes across many domains.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What three layers do Lindsay and Lexie Kite identify in their "More Than a Body" framework?`,
              options: [
                `Random three`,
                `Body objectification (treating your body as object to be evaluated); body monitoring (constantly checking how your body looks); body image disruption (when monitoring interrupts other activities); intervention is "body image resilience" through media literacy, awareness of objectification, identity sources beyond appearance`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Kite & Kite framework is useful because it identifies specific layers that can be addressed separately. Body monitoring can be reduced through specific awareness; identity sources beyond appearance can be deliberately built; media literacy can be developed.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is body image a particularly challenging topic for your generation?`,
              options: [
                `Same as always`,
                `Conditions unprecedented: thousands of curated beauty-evaluation images daily through social media; image-based platforms (Instagram, TikTok) specifically optimized for engagement around appearance; Facebook internal research confirmed Instagram harms teen body image; previous generations weren't exposed to this volume or curation; body dysmorphic disorder and disordered eating rates rising correlating with image-based media expansion`,
                `Random`,
                `Just normal`,
              ],
              correctIndex: 1,
              explanation: `The conditions are unprecedented and structurally engineered. The amount of body-evaluation exposure your generation experiences daily would have been unimaginable to previous generations at the same age. Recognition of the unprecedented conditions matters for how to respond.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `When does body image distress warrant professional support?`,
              options: [
                `Never`,
                `When significantly affecting functioning: eating becoming complicated, mood significantly affected, daily activities interrupted by body monitoring, specific symptoms of disordered eating or body dysmorphic disorder. Beyond what frameworks can address. Resources: National Alliance for Eating Disorders helpline (1-866-662-1235), school counselors, pediatricians, therapists; building good frameworks at functional level is different from experiencing clinical distress`,
                `Always`,
                `Just sometimes`,
              ],
              correctIndex: 1,
              explanation: `Some body image distress is beyond what frameworks alone can address. Recognizing the threshold matters because professional support exists and produces good outcomes for clinical conditions. The threshold isn't "feeling bad sometimes" but "functioning being affected."`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Beauty standards are universal and reflect natural preferences.`,
              correctAnswer: false,
              explanation: `False. Beauty standards vary enormously across cultures and time periods; what's considered beautiful in one era or culture is unattractive in another. The variation indicates standards are constructed, not natural. Current beauty standards in your environment have been substantially shaped by industries with profit motives.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I just need to lose weight and get fit and then I'll feel good about my body." Based on this lesson, what should you point out?`,
              options: [
                `"Yes do that"`,
                `"The plan you're describing assumes that body change will solve how you feel about your body, but research consistently shows this doesn't work the way people predict. Several specific things. First, Renee Engeln's research on beauty sickness shows the cognitive and emotional cost of constant body evaluation comes from the evaluation itself, not from specific body characteristics. People with bodies that meet beauty standards often have similar or worse body image than people with bodies that don't, because the underlying issue is the evaluation frame, not the body. Second, the research from Tiggemann, Fardouly, and others shows that body satisfaction is reduced by exposure to image-based content, not by your actual body. Changing your body doesn't change your exposure to beauty-evaluation content; the next standard to meet is always just above where you are. Third, the framing 'lose weight and get fit and then feel good' is exactly what the diet/fitness/beauty industries sell (and L04 covered this directly: the diet industry has measurable failure rates, with most weight loss attempts failing within 2-5 years and many producing worse outcomes than not dieting). Fourth, what does work better according to research: reducing exposure to beauty-evaluation content; building identity sources that don't require appearance; potentially body neutrality framing (what does my body let me do?) rather than body-as-object framing. Fifth, if your relationship with your body has reached the point of feeling like body change is required to feel okay (particularly if it's affecting your eating, mood, or daily functioning), that warrants professional support, not just more discipline. The National Alliance for Eating Disorders helpline is 1-866-662-1235; a school counselor or doctor can also help connect to resources. The intervention isn't body change; it's at the evaluation-frame level."`,
                `"Random"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied body image literacy. Address the underlying assumption (body change will solve how you feel about your body) which research shows doesn't work. Reference Engeln, Fardouly, the diet/fitness/beauty industry critique from L04, and the alternative frameworks (body neutrality, identity sources beyond appearance, exposure reduction). Include the professional support threshold explicitly because the "lose weight and feel good" framing can be the leading edge of clinical disordered eating.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for body image? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how much body monitoring (constantly checking how you look) do you currently do? When? In response to what?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `What are your identity sources beyond appearance? If body evaluation suddenly disappeared from your life, what would still matter about you?` },
            { id: `reflect-application`, category: `Application`, prompt: `Audit your media diet for one day. Which accounts/content trigger body monitoring? What happens if you unfollow them?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument questioned whether body image should even be a major topic. Is the conversation itself part of the problem? Where do you land?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read one of the recommended books (Engeln "Beauty Sick," Kite & Kite "More Than a Body," or Taylor "The Body Is Not An Apology") and notice what shifts.` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Body-image patterns at 12 shape decades of relationship with your body. Two paths.`,
          familyActivity: {
            title: `The Family Media-Diet Conversation`,
            duration: `45 minutes`,
            description: `Share the research findings (Engeln beauty sickness, Facebook internal research, Kite framework). Many adults absorbed beauty culture without media literacy framework; many families benefit from explicit conversation about media diet, industries profiting from body dissatisfaction, and identity sources beyond appearance. Consider establishing family practices: audit family media exposure (TV, social media, advertising); reduce exposure to body-evaluation content collectively; build family appreciation of bodies for what they do; avoid appearance-evaluation language (including "compliments" about weight/body changes which research shows aren't actually helpful).`,
          },
          projectOption: {
            title: `Read on body image and media literacy, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Renee Engeln's "Beauty Sick" (research synthesis on beauty culture costs), Lindsay and Lexie Kite's "More Than a Body" (body image resilience framework), Sonya Renee Taylor's "The Body Is Not An Apology" (body positivity political framework), or Naomi Wolf's "The Beauty Myth" (industry critique, foundational). Apply concepts during reading. Write 1,500 words on what you learned about body image and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Body image literacy at 12 protects against decades of beauty sickness patterns. This is among the highest-leverage media literacy investments for adolescents in current conditions.`,
          },
          identityQuestion: `If you become someone with sophisticated body image literacy (recognizing industry mechanics, building identity sources beyond appearance, integrating the three frameworks), what does that protect about your relationship with your body across decades?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes beauty standards as constructed by industries with profit motives.`,
            `A person who builds identity sources beyond appearance.`,
            `Someone with body image resilience built on media literacy.`,
          ],
          saveKey: `identity_responses_lw_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteenth Life Wellness lesson done. You now have three serious positions on body image (neutrality, positivity, critical/structural), specific research (Engeln beauty sickness, Tiggemann/Fardouly experimental studies, Facebook internal research, Kite & Kite framework), and explicit media literacy framework. The lesson didn't tell you how your body should look because that's not what produces wellbeing; what produces wellbeing is recognition of how industries work, framework for thinking about your body, and skills to navigate constant evaluation. Five lessons to go. Next time: grief and difficult experiences. Case Study format. Let's go. — Terra`,
          badge: `body-image-literate`,
          badgeName: `Body Image Literate`,
          xpEarned: 75,
          competencies: [
            `Knows body image research (Engeln "Beauty Sick," Tiggemann/Fardouly social media research, Facebook internal research)`,
            `Distinguishes three positions (body neutrality, body positivity, critical/structural)`,
            `Applies Kite & Kite framework (body objectification, monitoring, disruption)`,
            `Recognizes industries constructing beauty standards (beauty, diet, cosmetic surgery, fitness-as-appearance, advertising)`,
            `Knows professional support resources (National Alliance for Eating Disorders helpline 1-866-662-1235, school counselor, pediatrician)`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Grief and Difficult Experiences`,
            hook: `Three real situations involving grief and life difficulty. Case Study.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L15 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
