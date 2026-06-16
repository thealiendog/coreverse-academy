// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L16 — Grief and Difficult Experiences
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Grief Research, Loss and Adolescent Development
// CALIBRATED: Voyager spec v1.1 (May 2026) + high-sensitivity calibration
//
// SAFETY CALIBRATION (HIGHEST PRIORITY):
//   - Grief framed as normal human response, NOT pathology
//   - Multiple research frameworks (not just Kübler-Ross stages, which are criticized)
//   - Distinguish grief from depression and prolonged grief disorder
//   - Continuing bonds model (Klass, Silverman, Nickman) over "letting go"
//   - Cultural variability of grief acknowledged
//   - Resources: 988 Suicide and Crisis Lifeline, Crisis Text Line (HOME to 741741),
//     school counselors, grief-specialized therapists
//   - Bereavement (death) and ambiguous loss (Boss — living losses) both covered
//   - Cases reflect age-typical adolescent loss without being maximally heavy
//
// Interaction format: CASE STUDY (grandparent death / pet loss / parent illness)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l16-v1";

const LIFEWELLNESS_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-16`,
      title: `Grief and Difficult Experiences`,
      duration: 35,
      xpReward: 75,
      badge: `grief-literate`,
      badgeName: `Grief Literate`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, grief is one of the most consequential human experiences and one of the most misunderstood in pop content. Most people grow up with framings of grief that don't match research and that often make grief harder rather than easier. Today we work through what grief research actually shows, multiple frameworks for understanding loss, and three cases of difficult experiences adolescents commonly encounter. The framing throughout is that grief is a normal human response to loss, not a pathology to be fixed. The lesson also names when grief becomes complicated enough to warrant professional support. By the end you'll have framework most adults navigating loss have never explicitly built.`,
          headline: `Grief and Difficult Experiences`,
          subtitle: `Three real situations. Research-grounded. Grief as normal human response.`,
          visual: `/voyager-assets/life-wellness/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Grief Actually Is`,
          paragraphs: [
            `Start with the basic framing. Grief is the normal human response to loss. It's not a problem, a pathology, or a sign something is wrong with you; it's evidence that something or someone mattered to you. The fact that you grieve is information about what was important. The intensity of grief tracks the depth of attachment, not personal weakness.`,
            `What loss can include. Death of someone close (grandparent, parent, sibling, friend, pet). Living losses: divorce, parental illness, family member with addiction or mental illness, friend moving away, loss of a pet's health, family financial hardship, immigration, loss of a community. Identity losses: changes in friend group, ending of a sport or activity, leaving a school. The category "ambiguous loss" (named by researcher Pauline Boss) covers losses where the person or relationship is partly still present but substantially changed; these can be particularly hard because they're not socially recognized as losses but produce real grief.`,
            `What the research has established about grief. George Bonanno's research at Columbia, summarized in "The Other Side of Sadness" (2009), has shown that most people are resilient through loss; severe pathological grief is the exception, not the norm. Most people experience grief that's intense but moves through them over time without requiring professional intervention. This is important because pop framings often suggest grief should be heavy, prolonged, and require treatment; the research shows resilience is the typical response, including in adolescents.`,
            `What the Kübler-Ross stages got wrong. Elisabeth Kübler-Ross's "five stages of grief" (denial, anger, bargaining, depression, acceptance) is widely known but extensively criticized in current grief research. The stages were originally proposed for people facing their own dying (terminal patients), not for those grieving losses. They were never validated by research as describing the actual experience of grief, and current research shows grief doesn't move through stages in any consistent order. The stages framework can actively harm grieving people by suggesting they should be "doing grief wrong" if they don't experience it in this order.`,
            `What current research suggests instead. Grief is not linear. People oscillate between focusing on the loss (sadness, missing the person/thing) and focusing on restoration (rebuilding life, taking care of practical needs). Margaret Stroebe and Henk Schut's "dual-process model" (1999) frames healthy grief as moving fluidly between these two orientations. Both are necessary; getting stuck in either one tends to produce difficulty. Grief intensity typically decreases over time but rarely disappears completely; significant losses leave marks across lifetimes.`,
            `What's particularly important for adolescents. Grief in adolescence has specific features. Adolescents may show grief through behavior changes, mood shifts, or withdrawal rather than open expression. Adolescents often need to grieve in their own way while also continuing functioning (school, friendships, etc.). Adolescents are sometimes told to be "strong" for grieving parents in ways that create parentification (covered in Lesson 11). Cultural and family norms shape how grief is expressed, and adolescents often have to navigate between different norms (family, peer group, school).`,
          ],
          image: `/voyager-assets/life-wellness/l16-s1-grief.webp`,
          imageCaption: `Grief as normal human response, not pathology. Bonanno: most people resilient. Kübler-Ross stages criticized; not research-supported. Stroebe & Schut dual-process model (loss orientation + restoration orientation, oscillating).`,
          vocab: [
            {
              word: `human response`,
              definition: `Grief is the normal human response to loss; evidence of attachment, not pathology. Loss includes death (grandparent, parent, sibling, friend, pet), living losses (divorce, illness, addiction in family, friend moving away), ambiguous loss (Pauline Boss: partly present but changed relationships), identity losses. George Bonanno's research: most people resilient through loss; severe pathological grief is exception, not norm. Kübler-Ross "five stages" criticized in current research (originally for dying patients not grievers; never validated as describing actual grief). Stroebe & Schut dual-process model (1999): healthy grief oscillates between loss orientation and restoration orientation.`,
              audioPrompt: `Grief is the normal human response to loss, {name}. It's not a problem, a pathology, or a sign something is wrong with you; it's evidence that something or someone mattered to you. The fact that you grieve is information about what was important. The intensity of grief tracks the depth of attachment, not personal weakness. What loss can include: death of someone close, living losses like divorce or parental illness or a friend moving away, ambiguous loss as named by researcher Pauline Boss, where the person or relationship is partly still present but substantially changed. George Bonanno's research at Columbia, in his book "The Other Side of Sadness" from 2009, has shown that most people are resilient through loss; severe pathological grief is the exception, not the norm. The Kübler-Ross five stages of grief (denial, anger, bargaining, depression, acceptance) are widely known but extensively criticized in current grief research. The stages were never validated by research as describing the actual experience of grief, and current research shows grief doesn't move through stages in any consistent order. Margaret Stroebe and Henk Schut's dual-process model from 1999 frames healthy grief as oscillating between focusing on the loss and focusing on restoration.`,
            },
            {
              word: `dual-process model`,
              definition: `Margaret Stroebe and Henk Schut's 1999 framework for healthy grief: people oscillate fluidly between loss orientation (focusing on the loss, sadness, missing the person or thing) and restoration orientation (rebuilding life, attending to practical needs, ongoing functioning). Both orientations are necessary; getting stuck in either one tends to produce difficulty. The model explains why grievers can seem fine in one moment and devastated the next — healthy oscillation, not inconsistency.`,
              audioPrompt: `The dual-process model is Margaret Stroebe and Henk Schut's 1999 framework for understanding healthy grief, {name}. The model frames healthy grief as oscillating fluidly between two orientations. Loss orientation means focusing on the loss itself: the sadness, missing the person, the continuing connection, the weight of what's absent. Restoration orientation means focusing on rebuilding and ongoing life: attending to practical needs, maintaining school and friendships, finding ways to continue living. Both orientations are necessary; healthy grief moves between them fluidly. Getting stuck in either one tends to produce difficulty. Getting stuck in loss orientation produces prolonged grief that prevents ongoing engagement with life. Getting stuck in restoration orientation produces avoidance of grief that tends to return and complicate things later. The model explains something important about how grievers seem to others: someone can be devastated one moment and laughing at dinner the next, and both are genuine. The oscillation isn't inconsistency; it's what healthy grief looks like. This is also why the Kübler-Ross stages model is misleading — grief doesn't move through a sequence; it oscillates, sometimes many times in a single day.`,
            },
            {
              word: `ambiguous loss`,
              definition: `Pauline Boss's research framework for losses where the person or relationship is partly still present but substantially changed. Examples include serious parental illness, a family member with addiction or mental illness, immigration, family financial hardship, divorce. Ambiguous loss is often harder than clean death losses because it is not socially recognized as loss, has no rituals, has no clear closure, and continues across years while hope and fear mix with the grief.`,
              audioPrompt: `Ambiguous loss is Pauline Boss's research framework for losses where the person or relationship is partly still present but substantially changed, {name}. The term names a category of loss that is extremely common but rarely recognized as loss. Examples from the lesson: a parent's serious illness, a family member with addiction or mental illness, immigration, family financial hardship that changes the family's life substantially, divorce where a parent is still present but the relationship has changed. What makes ambiguous loss particularly hard is that it lacks the social recognition that death receives. There are no rituals. There is no clear closure. The loss continues across years while the person is still physically present. Grief mixes with hope (maybe things will get better) and fear (maybe they'll get worse), which complicates the processing. People experiencing ambiguous loss often feel guilty for grieving someone who is still alive, or confused about why they feel grief when the person hasn't died. Boss's research validates: the grief is real and the lack of social recognition makes it harder, not less real. Naming the experience as ambiguous loss is itself one of the most useful interventions, because the disorientation often compounds the grief.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Continuing Bonds, Not Letting Go`,
          paragraphs: [
            `One of the most important shifts in grief research over the past 30 years involves the framing of what healthy grief produces. Older framings (still common in pop content) treated successful grief as "letting go," "moving on," "achieving closure," or "saying goodbye." Current research shows this framing is largely wrong.`,
            `The continuing bonds framework. Dennis Klass, Phyllis Silverman, and Steven Nickman's 1996 book "Continuing Bonds: New Understandings of Grief" was one of the most influential shifts in grief research. Their argument, supported by extensive research since: healthy grief generally involves continuing relationship with the lost person or thing, not severing it. People maintain ongoing connection with deceased loved ones through memory, internal dialogue, identification, meaning-making, and various rituals. This isn't pathological "holding on" or "stuck"; it's how human attachment normally works across separations including death.`,
            `What this looks like in practice. After a death, people often continue talking to the deceased person (in their head or out loud), find themselves doing things "for" the person, notice when they're acting like the person, keep belongings that maintain connection, and weave memories of the person into ongoing life. These aren't signs of incomplete grief; they're signs of healthy continuing relationship with someone who mattered.`,
            `Why "letting go" was wrong. The older framing came partly from Freud's theory that successful grief required "withdrawal of cathexis" (essentially: emotional withdrawal from the lost person). Cross-cultural research has shown this framing reflects specific Western mid-20th-century cultural assumptions rather than universal psychology. Many cultures throughout history have built grief practices around continuing relationship rather than severing it (ancestor veneration in many cultures, ongoing rituals, memorial practices). The continuing bonds research validates what most cultures have always known.`,
            `What this means for adolescents grieving. You don't need to "get over" the person or thing you've lost. Building ongoing relationship (through memory, conversation, identification, doing things in honor of them, keeping items that maintain connection) is healthy, not pathological. Cultures that have specific continuing-bonds practices (Día de los Muertos, ancestor rituals, memorial customs, religious frameworks for ongoing relationship with the dead) often provide grievers with stronger support than the dominant Western "move on" framing.`,
            `One important caveat. Continuing bonds can become unhealthy when they prevent ongoing engagement with life (this is what prolonged grief disorder describes), when they involve elaborate avoidance of grief reality, or when they're built on idealization that denies who the person actually was. The dual-process model from earlier matters: oscillating between connection (loss orientation) and ongoing life (restoration orientation) is healthy; getting stuck in either creates difficulty.`,
          ],
          image: `/voyager-assets/life-wellness/l16-s2-bonds.webp`,
          imageCaption: `Continuing bonds (Klass, Silverman, Nickman 1996). Healthy grief involves ongoing relationship, not severing it. Cross-cultural validation. "Letting go" framing largely wrong.`,
          vocab: [
            {
              word: `continuing bonds framework`,
              definition: `Klass, Silverman, Nickman 1996 book "Continuing Bonds": healthy grief generally involves continuing relationship with lost person/thing, not severing it. People maintain ongoing connection through memory, internal dialogue, identification, meaning-making, rituals. Not pathological "holding on"; how human attachment normally works across separations including death. Replaces older "letting go," "closure," "withdrawal of cathexis" (Freud) framing now seen as Western mid-20th-century specific. Many cultures (Día de los Muertos, ancestor veneration) have continuing-bonds practices. Caveat: can become unhealthy when preventing engagement with life, involving elaborate avoidance, or built on idealization.`,
              audioPrompt: `Continuing bonds is one of the most important shifts in grief research over the past 30 years, {name}. Older framings, still common in pop content, treated successful grief as "letting go," "moving on," "achieving closure," or "saying goodbye." Current research shows this framing is largely wrong. Dennis Klass, Phyllis Silverman, and Steven Nickman's 1996 book "Continuing Bonds: New Understandings of Grief" was one of the most influential shifts. Their argument, supported by extensive research since: healthy grief generally involves continuing relationship with the lost person or thing, not severing it. People maintain ongoing connection with deceased loved ones through memory, internal dialogue, identification, meaning-making, and various rituals. This isn't pathological holding on or stuck; it's how human attachment normally works across separations including death. After a death, people often continue talking to the deceased person, find themselves doing things "for" the person, notice when they're acting like the person, keep belongings that maintain connection. These aren't signs of incomplete grief; they're signs of healthy continuing relationship.`,
            },
            {
              word: `withdrawal of cathexis`,
              definition: `Sigmund Freud's term for what he believed successful grief required: emotional withdrawal from the lost person so that the grieving person's energy could be reinvested elsewhere. This framing is the historical origin of "letting go" and "closure" language common in pop grief content. Cross-cultural research has shown it reflects specific Western mid-20th-century cultural assumptions rather than universal psychology, and it has been substantially superseded by the continuing bonds framework.`,
              audioPrompt: `Withdrawal of cathexis is Sigmund Freud's term for what he believed successful grief required, {name}. Freud theorized that healthy grief involved emotional withdrawal from the lost person — essentially, detaching the emotional energy that had been invested in the relationship — so that the grieving person could reinvest that energy in new relationships and ongoing life. This framing became the historical origin of the "letting go," "closure," and "moving on" language that is still common in pop grief content today. For decades it shaped how Western culture understood grief and what was considered healthy or pathological. Current research has substantially superseded it. Cross-cultural research has shown the withdrawal-of-cathexis model reflects specific Western mid-20th-century cultural assumptions rather than universal human psychology. Many cultures throughout history have built grief practices explicitly around continuing relationship with the deceased, not severing it: Día de los Muertos in Mexican culture, ancestor veneration in many East Asian, African, and indigenous cultures, various ongoing ritual memorial practices. The continuing bonds framework from Klass, Silverman, and Nickman validates what most cultures have always known: that ongoing connection with the lost person is healthy, not incomplete grieving.`,
            },
            {
              word: `grief resilience`,
              definition: `George Bonanno's research finding that most people are resilient through loss: severe pathological grief is the exception, not the norm. Most people experience grief that is intense but moves through them over time without requiring professional intervention. The resilience finding is important because pop framings often suggest grief should be prolonged and require treatment; research shows that resilience — including the capacity to experience positive emotions even while grieving — is the typical response.`,
              audioPrompt: `Grief resilience is George Bonanno's research finding that most people are resilient through loss, {name}. Bonanno's research at Columbia, summarized in his book "The Other Side of Sadness" from 2009, found that severe pathological grief is the exception rather than the norm. Most people experience grief that is intense but moves through them over time without requiring professional intervention. One of the more surprising findings in Bonanno's research is that many bereaved people experience positive emotions — even laughter — relatively early after significant losses, and that this is healthy, not a sign they didn't care about the person. Pop framings that suggest grief should be uniformly heavy and prolonged are not supported by research; what research supports is a more complex oscillating pattern in which intensity varies and resilience is a common and legitimate response. The resilience finding matters because it protects against pathologizing normal grief. Most grief does not require professional intervention; recognizing that is as important as recognizing when complicated grief does warrant support.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Grief Becomes Complicated`,
          paragraphs: [
            `Most grief moves through people over time without requiring professional intervention. Some grief becomes "complicated" (prolonged, intense, and impairing) in ways that warrant professional support. Recognizing the distinction matters because pop content often pathologizes normal grief and underestimates clinical conditions.`,
            `Prolonged grief disorder. Recent research (Holly Prigerson at Weill Cornell, others) has established a clinical condition called prolonged grief disorder, included in the most recent DSM (the standard psychiatric diagnostic manual). It involves persistent yearning and longing for the deceased, intense emotional pain, and substantial impairment in functioning that continues for more than 12 months after the death (6 months in some criteria, longer in others). It's not "grief that lasts too long"; most grief continues at some level indefinitely. It's grief that's severe enough that the person can't substantially engage with ongoing life and where professional support meaningfully helps.`,
            `Distinguishing grief from depression. Grief and depression share some features (sadness, low mood, reduced interest in activities) but differ in important ways. Grief is typically focused on the specific loss; depression is more diffuse. Grief usually involves intact self-worth (the world feels diminished, but the self isn't); depression often involves persistent worthlessness. Grief usually involves preserved ability to feel positive emotions in some contexts; depression often involves persistent loss of capacity for positive emotion. Sometimes grief leads to depression, particularly if loss compounds with other factors. When you're not sure whether something is grief or depression, professional assessment helps.`,
            `Traumatic loss specifically. Loss that involves trauma (suicide, accidents, violence, witnessing death, sudden deaths of young people, deaths involving difficult circumstances) often produces grief that's harder than other losses. The grief is the same response to loss, but the trauma adds additional features (intrusive memories, hyperarousal, avoidance behaviors, sometimes PTSD). Traumatic grief often benefits from specialized support. The 988 Suicide and Crisis Lifeline is available 24/7 for crisis situations including grief involving suicide.`,
            `When to seek professional support for grief. If grief is severe enough to substantially prevent functioning across an extended period (months). If you're experiencing thoughts of suicide or self-harm. If grief involves trauma (any of the situations above). If symptoms of depression are emerging alongside grief. If you can't talk to anyone about what you're experiencing. If you're using alcohol, drugs, or other coping that's becoming a problem. If the loss was complicated (the relationship was difficult, the death was traumatic, multiple losses are compounding). Resources: school counselors are often the first available support and can connect to others; grief-specialized therapists exist and produce good outcomes; bereavement support groups (often free, often community-based) help many people; for immediate crisis, the 988 Suicide and Crisis Lifeline (call or text 988 in the US) is available 24/7, and the Crisis Text Line (text HOME to 741741) is available for non-voice support.`,
            `Important framing. Seeking professional support for grief isn't a sign of weakness or that you're "grieving wrong." Grief involving trauma, complicated circumstances, or major loss (parent, sibling, spouse, close friend) often benefits substantially from professional support. Adolescents specifically often have less developed coping framework than adults and may need more explicit support; this is normal, not failure.`,
          ],
          image: `/voyager-assets/life-wellness/l16-s3-complicated.webp`,
          imageCaption: `Prolonged grief disorder (Prigerson, recent DSM). Distinguishing grief from depression. Traumatic loss. Resources: 988 Suicide and Crisis Lifeline (call/text 988), Crisis Text Line (HOME to 741741), school counselors, grief-specialized therapists.`,
          vocab: [
            {
              word: `seek support`,
              definition: `Most grief moves through people without professional intervention; some becomes complicated. Prolonged grief disorder (Prigerson research, recent DSM): persistent yearning, intense pain, substantial functional impairment >12 months after death. Distinguishing grief from depression: grief focused on loss with preserved self-worth and some positive emotion capacity; depression more diffuse with persistent worthlessness. Traumatic loss adds PTSD-like features. Seek professional support when grief prevents functioning across extended period; suicidal thoughts; traumatic circumstances; emerging depression. Resources: school counselors, grief-specialized therapists, 988 Suicide and Crisis Lifeline (call/text 988 US), Crisis Text Line (text HOME to 741741).`,
              audioPrompt: `Complicated grief is grief that becomes prolonged, intense, and impairing in ways that warrant professional support, {name}. Most grief moves through people over time without requiring professional intervention. Some grief becomes complicated. Holly Prigerson at Weill Cornell and other researchers have established a clinical condition called prolonged grief disorder, included in the most recent DSM. It involves persistent yearning and longing for the deceased, intense emotional pain, and substantial impairment in functioning that continues for more than 12 months after the death. Grief and depression share some features but differ in important ways. Grief is typically focused on the specific loss; depression is more diffuse. When to seek professional support for grief: if grief is severe enough to substantially prevent functioning across an extended period; if you're experiencing thoughts of suicide or self-harm; if grief involves trauma; if symptoms of depression are emerging; if you can't talk to anyone about what you're experiencing. Resources: school counselors are often the first available support. Grief-specialized therapists exist. For immediate crisis, the 988 Suicide and Crisis Lifeline at call or text 988 in the US is available 24 hours, 7 days. The Crisis Text Line at text HOME to 741741 is available for non-voice support.`,
            },
            {
              word: `prolonged grief disorder`,
              definition: `A clinical condition established by recent research (Holly Prigerson at Weill Cornell and others) and included in the most recent DSM. It involves persistent yearning and longing for the deceased, intense emotional pain, and substantial impairment in functioning continuing for more than 12 months after the death. It is not "grief that lasts too long" — most grief continues at some level indefinitely and can involve continuing bonds across a lifetime. It is grief that is severe enough that the person cannot substantially engage with ongoing life.`,
              audioPrompt: `Prolonged grief disorder is a clinical condition established by recent research and included in the most recent edition of the DSM, the standard psychiatric diagnostic manual, {name}. Holly Prigerson at Weill Cornell and other researchers have established its criteria: persistent yearning and longing for the deceased, intense emotional pain, and substantial impairment in functioning that continues for more than 12 months after the death. The lesson is careful to note what prolonged grief disorder is not: it is not simply grief that lasts a long time. Most grief continues at some level indefinitely, and continuing bonds with the lost person across decades is healthy, not pathological. Prolonged grief disorder is specifically grief that is severe enough that the person cannot substantially engage with ongoing life — school, work, relationships, basic functioning — over an extended period. The clinical framing matters because professional support for prolonged grief disorder produces good outcomes, and recognizing the threshold helps people access appropriate support rather than either pathologizing all grief or underrecognizing clinical conditions that genuinely warrant intervention.`,
            },
            {
              word: `traumatic loss`,
              definition: `Loss that involves trauma — suicide, accidents, violence, witnessing death, sudden deaths of young people, deaths involving difficult circumstances. Traumatic loss often produces grief that is harder than other losses because the trauma adds additional features on top of the grief: intrusive memories, hyperarousal, avoidance behaviors, sometimes PTSD. Traumatic grief often benefits from specialized professional support beyond standard bereavement support.`,
              audioPrompt: `Traumatic loss describes loss that involves trauma — suicide, accidents, violence, witnessing death, sudden deaths of young people, deaths involving difficult circumstances, {name}. The lesson distinguishes traumatic loss from other losses because it often produces grief that is harder to navigate. The grief is the same response to loss that all significant loss produces, but the trauma adds additional features on top: intrusive memories of the circumstances of the death, hyperarousal and difficulty feeling safe, avoidance behaviors around reminders, sometimes full PTSD symptoms. These additional features mean that traumatic grief often benefits from specialized support — specifically, therapists trained in both grief and trauma, not just standard bereavement support. The lesson notes that the 988 Suicide and Crisis Lifeline is available 24 hours a day, 7 days a week, for crisis situations including grief involving suicide. If you or someone you know has experienced traumatic loss, the appropriate threshold for professional support is lower than for other forms of grief; the combination of grief and trauma is specifically something that professional support helps with.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Cultural Variability And Meaning-Making`,
          paragraphs: [
            `Grief expression and what counts as healthy grief varies enormously across cultures. Recognizing this matters because much of what passes as "natural" grief framework in dominant US culture is actually culturally specific, and adolescents from different cultural backgrounds often have to navigate between cultural framings.`,
            `Specific cultural variability. Some cultures emphasize public expression of grief (loud crying, communal lamentation, extended mourning periods); others emphasize restrained private grief. Some cultures have specific time-bounded mourning practices (Jewish shiva of 7 days followed by structured grief stages; Catholic novena and year of mourning; various Hindu and Buddhist practices). Some cultures maintain explicit continuing relationship with the dead through ongoing rituals (Día de los Muertos in Mexican culture; ancestor veneration in many East Asian, African, and indigenous cultures). Some cultures process grief largely communally; others largely individually. None of these is wrong; they're different ways human beings have organized response to loss.`,
            `What dominant US culture often gets wrong. The "stages" framing (covered above). The "letting go" framing (covered above). The expectation of relatively short, contained grief (often 1-2 weeks of intense expression before "moving on"). The discomfort with ongoing visible grief that pushes grievers to perform "doing well." The lack of community ritual that other cultures provide (which leaves grievers more alone). The medicalization of grief that frames intense grief as something to fix rather than to experience.`,
            `Meaning-making after loss. Multiple research traditions (Robert Neimeyer's narrative reconstruction work, post-traumatic growth research by Calhoun and Tedeschi, others) have documented that humans often construct meaning from loss over time. This isn't "everything happens for a reason" (which can actually be unhelpful and is rejected in current research); it's the active process of integrating the loss into ongoing life and identity in ways that allow continued living. Meaning-making can include: continuing the values or projects of the lost person; building identity that includes the loss as part of who you are; finding ways the loss has changed you that you can live with; constructing narrative that gives the loss a place in your life story. This process happens over years, not weeks.`,
            `For adolescents specifically. Cultural background shapes how grief looks and is permitted to look. Adolescents often have to navigate between family/cultural norms (which may favor expression or restraint differently than your peers' norms) and broader cultural pressure (often the dominant "be okay quickly" framing). Both can be honored to some degree. Religious and spiritual frameworks often provide more sophisticated grief support than secular frameworks; for adolescents whose families have these, accessing the framework can be helpful even if you're not personally religious.`,
            `One important framing. There's no single "right" way to grieve. The research-supported features (oscillating between loss and restoration; continuing bonds; meaning-making over time) leave room for enormous individual and cultural variation. Don't let pop framings or other people's framings tell you you're "grieving wrong"; check whether what you're doing serves your ongoing engagement with life, and adjust if it doesn't.`,
          ],
          image: `/voyager-assets/life-wellness/l16-s4-culture.webp`,
          imageCaption: `Cultural variability of grief: public/private, time-bounded/ongoing, communal/individual, continuing bonds practices. Meaning-making (Neimeyer narrative reconstruction, Calhoun & Tedeschi post-traumatic growth). No single "right" way.`,
          vocab: [
            {
              word: `meaningmaking grief`,
              definition: `Grief expression varies enormously across cultures: public/private, time-bounded/ongoing, communal/individual, ongoing rituals vs single ceremonies. Continuing bonds practices (Día de los Muertos, ancestor veneration in many cultures) often provide stronger support than dominant "letting go" framing. Meaning-making research (Robert Neimeyer narrative reconstruction; Calhoun & Tedeschi post-traumatic growth): humans often construct meaning from loss over years through continuing values/projects of lost person, integrating loss into identity, narrative reconstruction. Not "everything happens for a reason" (rejected in research). Religious/spiritual frameworks often provide sophisticated grief support.`,
              audioPrompt: `Cultural variability and meaning-making are important in grief, {name}. Grief expression and what counts as healthy grief varies enormously across cultures. Some cultures emphasize public expression of grief; others emphasize restrained private grief. Some cultures have specific time-bounded mourning practices like Jewish shiva of 7 days or Catholic novena. Some cultures maintain explicit continuing relationship with the dead through ongoing rituals like Día de los Muertos in Mexican culture or ancestor veneration in many East Asian, African, and indigenous cultures. None of these is wrong; they're different ways human beings have organized response to loss. Multiple research traditions, including Robert Neimeyer's narrative reconstruction work and post-traumatic growth research by Calhoun and Tedeschi, have documented that humans often construct meaning from loss over time. This isn't "everything happens for a reason," which can actually be unhelpful and is rejected in current research; it's the active process of integrating the loss into ongoing life and identity in ways that allow continued living.`,
            },
            {
              word: `narrative reconstruction`,
              definition: `Robert Neimeyer's research framework for how people process significant loss: rebuilding the personal narrative (the story of who you are and what your life means) that a major loss has disrupted. Loss can challenge or shatter the assumptions underlying a person's life story; narrative reconstruction is the active process of integrating the loss into a revised identity and life story that allows continued living. This is one of the research-supported mechanisms of meaning-making in grief.`,
              audioPrompt: `Narrative reconstruction is Robert Neimeyer's research framework for how people process significant loss, {name}. Neimeyer argues that major loss often disrupts the personal narrative — the story that gives life meaning and coherence — that the person has built. The loss can challenge or shatter the assumptions underlying that story: assumptions about the future, about relationships, about who you are, about what the world is like. Narrative reconstruction is the active process of rebuilding that story in a way that incorporates the loss. It's not returning to the narrative you had before; it's building a new one that includes the loss as part of who you are. This happens over years rather than weeks. Examples of narrative reconstruction in practice: continuing the values or projects of the lost person, building identity that includes the loss as part of your history, finding ways the loss has changed you that you can live with, constructing a way of understanding the loss that gives it a place in your life story. The lesson notes this is not "everything happens for a reason" (which can actually be unhelpful and is rejected in current grief research) but rather the active, often effortful work of building meaning from what happened.`,
            },
            {
              word: `post-traumatic growth`,
              definition: `Research by Richard Calhoun and Lawrence Tedeschi documenting that some people experience positive psychological changes following highly challenging life circumstances, including loss. Post-traumatic growth can include increased personal strength, new possibilities, relating to others differently, appreciation for life, or spiritual/existential change. It does not mean the loss was good or that suffering was necessary; it describes a pattern of growth that some people report alongside or following significant loss and difficulty.`,
              audioPrompt: `Post-traumatic growth is Richard Calhoun and Lawrence Tedeschi's research framework for positive psychological changes that some people experience following highly challenging life circumstances, including loss, {name}. The research documents several domains where growth can occur: increased personal strength, discovery of new possibilities in life, changed relating to others, greater appreciation for life, and spiritual or existential change. Post-traumatic growth doesn't mean the loss was good, that the suffering was worth it, or that everyone who suffers grows. It describes a pattern that some people report alongside or following significant loss and difficulty. The lesson mentions it alongside Neimeyer's narrative reconstruction work as part of the meaning-making research tradition: how humans often construct meaning from loss over years in ways that allow continued living. The practical significance is that meaning-making — integrating the loss into ongoing identity and life — is a real and documented process, not just a platitude. It happens through active work over time, and recognizing it as a process (rather than a sudden arrival at acceptance) helps people navigate loss with more framework.`,
            },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `The three cases that follow involve real types of loss adolescents encounter. None of them involve traumatic loss (suicide, violence, accidents); none involve maximally heavy circumstances. Each is meant to be workable through the frameworks. If you've experienced loss that's substantially heavier than what's in the cases (parent death, sibling death, traumatic loss, suicide of someone close, complicated circumstances), please know that loss is real, the frameworks still apply but the grief is harder, and professional support is appropriate and likely helpful.`,
            `One framing as you work. The cases test whether you can integrate the four frameworks. Grief as normal human response (not pathology). Continuing bonds (not letting go). When grief becomes complicated (recognizing thresholds for professional support). Cultural variability and meaning-making (no single right way).`,
            `Another framing. Each case involves specific cognitive reframings as well as specific supportive responses. Common errors in pop framings of grief: telling people to "move on" or "get over it"; suggesting grief should be done by a specific timeline; framing continuing connection as pathological; expecting standardized stages; medicalizing normal grief; underestimating real complicated grief; offering "everything happens for a reason" responses. Research-grounded responses look different.`,
            `One important reminder. If you're currently grieving something (anything), these cases may be activating. That's normal. Take breaks if needed. The frameworks apply to your own grief, too, not just hypothetical adolescents in cases. If you're experiencing significant grief that's affecting your functioning, please talk to a school counselor, trusted adult, or professional support. The 988 Suicide and Crisis Lifeline is available 24/7; the Crisis Text Line (text HOME to 741741) is available for text support.`,
            `One last framing. You're 12. The framework you build now for understanding loss will shape how you navigate the major losses that come across decades: losses of grandparents, eventually parents, friends, partners, pets, possibilities. Building research-grounded framework now is one of the highest-leverage life-skill investments at this age, and most adults around you don't have it explicitly.`,
          ],
          image: `/voyager-assets/life-wellness/l16-s5-before.webp`,
          imageCaption: `Three cases of age-typical loss. Cases workable through frameworks; heavier losses warrant professional support. 988 Suicide and Crisis Lifeline (call/text 988), Crisis Text Line (HOME to 741741) always available.`,
          vocab: [
            {
              word: `integrated grief framework`,
              definition: `Mature grief literacy integrates multiple research frameworks. Grief as normal human response (not pathology; Bonanno resilience research). Continuing bonds (Klass, Silverman, Nickman; ongoing relationship with lost person/thing). When grief becomes complicated (Prigerson prolonged grief disorder; distinguishing from depression; traumatic loss). Cultural variability and meaning-making (Neimeyer narrative reconstruction, Calhoun & Tedeschi post-traumatic growth; no single right way). Different framings appropriate for different situations. Crisis resources: 988 Suicide and Crisis Lifeline (call/text 988 US), Crisis Text Line (text HOME to 741741), school counselors, grief-specialized therapists.`,
              audioPrompt: `Integrated grief framework is what mature grief literacy involves, {name}. It integrates multiple research frameworks rather than relying on pop framings. Grief as normal human response from Bonanno's resilience research. Continuing bonds from Klass, Silverman, and Nickman, framing healthy grief as ongoing relationship with lost person or thing. Recognition of when grief becomes complicated from Prigerson's prolonged grief disorder research and distinguishing grief from depression. Cultural variability and meaning-making from Neimeyer's narrative reconstruction work and Calhoun and Tedeschi on post-traumatic growth. Crisis resources are always available: the 988 Suicide and Crisis Lifeline at call or text 988 in the US is available 24 hours, 7 days. The Crisis Text Line at text HOME to 741741 is available for non-voice support. School counselors and grief-specialized therapists produce good outcomes for grief that warrants professional support.`,
            },
            {
              word: `pet grief`,
              definition: `Grief over the loss of a pet that research has shown can be comparable in intensity to grief over human family members for many people. Pets provide significant attachment, daily presence, and sometimes specific emotional support roles. Pet grief is often dismissed in dominant culture ("it was just a dog"), but the dismissal compounds the loss and is not research-supported. The grief is proportional to attachment, not to social rankings of which losses are considered valid.`,
              audioPrompt: `Pet grief is grief over the loss of a pet, and research has consistently shown it can be comparable in intensity to grief over human family members for many people, {name}. Pets provide significant attachment, daily presence, routine, and sometimes specific emotional support roles. For someone who had a pet for most of their conscious life, the loss is genuinely major in terms of what was present daily and what is now absent. Pet grief is often dismissed in dominant culture with framings like "it was just a dog" or "you can get another one." The lesson's case of Zoe illustrates how this dismissal compounds the loss: she is already grieving; being told her grief is disproportionate or wrong adds shame and isolation on top of the grief itself. The frameworks in the lesson apply fully to pet grief. The grief is evidence of attachment and proportional to what was actually lost, not to social rankings of which losses are valid. Continuing bonds apply to pets as well: keeping pictures, telling stories about the pet, honoring the pet's memory are healthy continuing relationship, not pathological holding on. And at one week out from a major loss, significant grief affecting basic functioning is within normal range; the threshold for professional support is about sustained impairment over months, not intensity in the immediate aftermath.`,
            },
            {
              word: `grief in adolescence`,
              definition: `Grief in adolescence has specific features documented in research. Adolescents may express grief through behavior changes, mood shifts, or withdrawal rather than open expression. They often need to grieve in their own way while continuing to function. They are sometimes told to be "strong" for grieving parents in ways that create parentification. Cultural and family norms shape expression, and adolescents often navigate between different norms (family, peer group, school). Less developed coping frameworks than adults means more explicit support often helps.`,
              audioPrompt: `Grief in adolescence has specific features worth knowing, {name}. The lesson identifies several that are documented in research. Adolescents may show grief through behavior changes, mood shifts, withdrawal, or changes in academic performance rather than open expression of sadness — which means grief can be missed or misread by adults as behavior problems. Adolescents often need to grieve in their own way while also continuing functioning: school, friendships, activities. This creates a dual burden that adults sometimes don't acknowledge. Adolescents are sometimes told to be "strong" for grieving parents in ways that create parentification — taking on emotional support responsibilities that belong with adults — which the lesson connects to Lesson 11 on family relationships. Cultural and family norms shape how grief is permitted to be expressed, and adolescents often have to navigate between different norms: what's expected at home, what peers understand, what's acceptable at school. And because adolescents typically have less developed coping framework than adults, they may need more explicit support with grief — not because adolescent grief is worse, but because the tools for navigating it are still being built. This is normal, not failure, and professional support is appropriate for grief that substantially impairs functioning.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l16-case-study`,
          type: `case-study`,
          headline: `Three Difficult Experiences`,
          intro: `{name}, three real situations involving loss. For each, identify what's actually happening and what would actually serve the person.`,
          cases: [
            {
              id: `case-1`,
              title: `Death Of A Grandparent`,
              context: `Mateo's grandmother died three months ago after a long illness. They were close; she lived nearby, he spent time at her house weekly, she was a major source of stability and warmth in his life. Mateo went through the funeral and seemed "okay" afterward, but recently he's been struggling more, not less. He cries at unexpected moments. He keeps catching himself wanting to call her. He has a knit hat she made him that he wears constantly. He's been thinking about her every day. His parents are getting worried because he doesn't seem to be "moving on" and they wonder if he needs therapy. Mateo isn't sure if what he's experiencing is normal.`,
              question: `What's actually happening with Mateo?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Mateo is grieving wrong. He should be moving on by now. He needs therapy to help him "let go."`,
                  outcome: `This reflects exactly the pop framing of grief that current research has shown is largely wrong. Mateo is showing classic signs of healthy grief: ongoing sadness about a significant loss, continuing bonds (wanting to call her, wearing the hat she made, thinking of her), and natural oscillation between difficulty and functioning. The "should be moving on by now" framing is unsupported by research; significant losses don't resolve on any specific timeline, and 3 months is well within the range of intense grief for a meaningful loss. Pushing him to "let go" actively works against what research shows is healthy: continuing relationship with the deceased. Therapy isn't wrong as a possibility, but framing what he's experiencing as pathological grief that needs fixing is.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `What Mateo is experiencing is classic healthy grief, not pathological grief. Specific frameworks help. Grief as normal response: he's grieving someone who genuinely mattered to him; the intensity and continuation reflect depth of attachment, not personal weakness. Continuing bonds (Klass, Silverman, Nickman framework): wanting to call her, wearing the hat she made, thinking of her daily; these are healthy continuing relationship with someone he loved, not pathological "holding on." Pop framings of grief that emphasize "moving on" and "letting go" are largely wrong according to research; healthy grief usually involves ongoing relationship with the lost person, not severing it. Stroebe and Schut's dual-process model: he's oscillating between loss orientation (sadness, missing her, continuing connection) and restoration orientation (functioning, ongoing life); this oscillation is what healthy grief looks like. Three months for a meaningful loss is well within range of intense grief; significant losses often involve heavy grief at unexpected times for a year or more, and ongoing connection across decades. What might help Mateo. First, the reframe itself: what he's experiencing isn't pathological; it's evidence of attachment. Second, the parents may benefit from understanding what current grief research shows, so they're not pressuring him to "move on." Third, building deliberate continuing-bonds practices can help (talking to her in his head, doing things in honor of her, family conversations about her, possibly cultural/religious frameworks if his family has them). Fourth, if the grief is substantially preventing functioning (not just causing sadness, but preventing school work, friendships, basic functioning over extended period), therapy with a grief-specialized therapist could help, but as support, not as fixing what isn't broken. Fifth, his parents' worry is itself an opportunity for family conversation about how grief actually works rather than how pop content suggests it should work.`,
                  outcome: `This is the research-informed response. Names continuing bonds as healthy not pathological. Validates Mateo's grief as evidence of love, not as failure. Provides specific framework (dual-process, continuing bonds). Includes appropriate threshold for professional support (substantial functional impairment, not just ongoing sadness). The reframing from "grieving wrong" to "grieving normally" empowers Mateo and his parents to support rather than pathologize the experience.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Mateo should stop thinking about her, throw away the hat, and force himself to be happy.`,
                  outcome: `This is essentially the "letting go" framing applied as forced suppression. Research is clear that this approach doesn't work and often makes grief harder. Suppressing grief doesn't resolve it; it stores it. Continuing bonds (the hat, the memories) are healthy, not problems to be removed. Forced happiness around grief reduces capacity for both grief processing and authentic ongoing life. The intervention isn't suppression but recognition of what healthy grief actually involves.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates healthy grief misread as pathological because of pop framings. Mateo is doing what healthy grief looks like: continuing bonds, oscillating between connection and functioning, ongoing intensity at three months. The intervention isn't fixing him; it's reframing for him and his parents what grief actually involves. Professional support is appropriate when grief substantially impairs functioning over extended periods, not when it produces ongoing sadness and continuing connection.`,
            },
            {
              id: `case-2`,
              title: `Death Of A Pet`,
              context: `Zoe's dog Cooper died last week. Cooper had been with her family since she was 4; he was 12 years old. He was sick for several months and was finally put down by the vet. Zoe is devastated. She can't stop crying. She's barely eating. She's been having trouble sleeping. She doesn't want to see friends. Her dad keeps saying things like "he was just a dog" and "you'll get over it" and "we can get a new dog." Her friends mostly didn't understand the depth of her grief and one even said pet grief shouldn't be "this big a deal." She feels like she's losing it and also like no one understands.`,
              question: `What's actually happening with Zoe?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Pet grief isn't a real form of grief. Zoe is overreacting and being dramatic.`,
                  outcome: `This is exactly the dismissive framing that often surrounds pet loss and that research on pet grief has shown is wrong. Pet grief is real grief; research has consistently shown that loss of a close pet can produce grief comparable in intensity to loss of human family members for many people. Pets provide significant attachment, daily presence, sometimes specific emotional support roles. Zoe had Cooper for 8 of her 12 years, most of her conscious life. The grief intensity is proportional to what was actually lost, not to social rankings of which losses are "valid." The "you'll get over it / just get a new dog" framing actively harms grievers; pets aren't replaceable like that, and the dismissal compounds the loss.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Zoe is experiencing real grief for a real loss. Pet grief research consistently shows that loss of a close pet can produce grief comparable in intensity to loss of human family members for many people; pets provide significant attachment, daily presence, sometimes specific emotional support; the grief is proportional to attachment, not to social rankings of which losses are "valid." Cooper was with her for 8 of her 12 years (most of her conscious life). The current intensity, including not eating well, sleep difficulty, withdrawal, is consistent with significant grief and is within normal range for a major loss at one week out. What might help Zoe. First, the reframe: her grief is real and proportional, not dramatic or wrong. The dismissive framings from her dad and friends are common but not research-supported. Second, finding support from people or communities who understand pet grief specifically; many do (other pet owners, online communities, sometimes school counselors). Pet grief is often dismissed in dominant culture but real among people who've experienced it. Third, continuing bonds apply to pets too: keeping pictures, talking to Cooper in her head, telling stories about him, eventually deciding on a way to honor him. Fourth, she should pay attention to functioning: at one week, intense grief affecting basic functioning is normal; if it continues at this level over months and substantially prevents her from school, friendships, basic activities, professional support is appropriate. Fifth, "you'll get over it / get a new dog" framings actively harm grievers; she can know they don't reflect what research shows even if she can't change them in her dad and friends. Sixth, this is also an opportunity to learn that grief support varies enormously by culture and community; some traditions handle pet loss with seriousness others don't.`,
                  outcome: `This is the research-informed response. Validates pet grief as real grief. Provides specific framework (attachment-proportional grief, continuing bonds applicable, normal intensity at one week). Identifies dismissive framings as not research-supported. Includes appropriate threshold for professional support and acknowledges the social isolation pet grief often produces.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Zoe should get a new puppy immediately to replace Cooper and "move on."`,
                  outcome: `This is the "replace and move on" framing applied to pet loss. Research is clear that this doesn't work the way people often hope. New pets can be wonderful additions to life but don't replace lost ones; pets aren't fungible, and trying to "replace" them often produces complicated grief (where the new pet is unfairly compared to the lost one) and incomplete processing of the original loss. Getting a new pet eventually can be healthy; doing it immediately as grief-avoidance often isn't. The intervention is grieving Cooper fully, not skipping to replacement.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates pet grief as real grief often dismissed in dominant culture. Pet grief research consistently shows comparable intensity to human-family-member grief for many people. The intervention isn't dismissing the grief or skipping to replacement; it's recognition, finding supportive community (who don't dismiss), continuing bonds practice, and attention to functioning thresholds. The dismissive framings are common but not research-supported.`,
            },
            {
              id: `case-3`,
              title: `Parent's Serious Illness (Ambiguous Loss)`,
              context: `Sam's mom was diagnosed with a serious chronic illness six months ago. She's still alive, still loving, but substantially different: less energy, more limitations, mood changes from medication, less able to do things she used to do. The future is uncertain. Sam is experiencing what she can only describe as grief, but her mom is still there. She doesn't know what to call what she's feeling. She feels guilty for grieving someone who's still alive. Her mom keeps saying everything is fine, which makes Sam feel like she shouldn't be struggling. But Sam is struggling: missing the mom from before, anxious about the future, exhausted from being "okay" all the time.`,
              question: `What's actually happening with Sam?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Sam shouldn't be grieving because her mom is still alive. She should just be grateful and stop being negative.`,
                  outcome: `This reflects the common dismissal of ambiguous loss and produces real harm. What Sam is experiencing has a clinical name: ambiguous loss (Pauline Boss's research framework). The person is physically present but substantially changed; the relationship has changed; the future is uncertain. This produces real grief that's often harder to navigate than clean death because it's not socially recognized, has no rituals, has no closure, and continues across years. Telling Sam to "just be grateful" reflects misunderstanding of how loss actually works and adds shame to an already complicated experience.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Sam is experiencing ambiguous loss, a clinical category named by researcher Pauline Boss for losses where the person or relationship is partly still present but substantially changed. Boss's research framework: ambiguous loss is often harder than clean loss because it's not socially recognized, has no rituals or closure, continues across years, and produces grief mixed with hope/fear in ways that complicate processing. Specific patterns Sam is experiencing match: missing "the mom from before"; grieving the relationship and future that's now uncertain; feeling guilty because the loss isn't "supposed" to be grievable; exhausted from emotional labor of being "okay." What might help Sam. First, the reframe: ambiguous loss is real loss, even though it's not socially recognized as such. Her grief is appropriate, not wrong or selfish. Boss's research validates this experience. Second, naming what she's experiencing (ambiguous loss specifically) can itself help; the lack of name is part of what makes ambiguous loss disorienting. Third, the "everything is fine" framing from her mom is common (often coming from the mom's own difficulty with the illness and not wanting to burden her kid) but isn't sustainable; honest age-appropriate conversation about the situation usually serves families better than maintaining facade. Fourth, professional support is often particularly helpful for ambiguous loss because the cultural script for it is limited; family therapists, grief counselors with experience in illness, and adolescent therapists can provide framework and support that family and friends often can't. Fifth, taking care of her own wellbeing (sleep, basic care, ongoing friendships, school, activities she values) matters even more in ambiguous loss because the loss continues over time and exhaustion compounds. Sixth, if her grief substantially impairs functioning, includes depression symptoms, or involves suicidal thoughts, professional support is urgent: 988 Suicide and Crisis Lifeline available 24/7. Sam should know that what she's experiencing is real, has a name, is researched, and warrants real support.`,
                  outcome: `This is the research-informed response. Names ambiguous loss (Boss framework) explicitly. Validates Sam's experience as real loss even though the person is still alive. Provides specific framework (ambiguous loss as researched category, common patterns, appropriate responses). Includes professional support thresholds with specific resources. The reframing from "shouldn't be grieving" to "experiencing researched form of loss that warrants support" empowers Sam to access appropriate help.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Sam should just pretend everything is fine like her mom does. Suppress what she's feeling.`,
                  outcome: `This is essentially what Sam is already doing, and it's producing real harm (exhaustion, unprocessed grief, isolation in her experience). Suppression during ambiguous loss is particularly damaging because the loss continues across time; what gets suppressed accumulates rather than resolving. The intervention isn't more suppression but explicit recognition, appropriate support, and honest conversation when possible.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates ambiguous loss (Pauline Boss's research framework). The loss is real even though the person is still alive; the lack of social recognition makes the experience harder, not less real. The intervention is naming the experience, accessing appropriate support (often professional given the limited cultural script), honest conversation when possible, and taking care of own wellbeing over the extended timeframe of ambiguous loss. The "should be grateful" dismissal common in pop framings actively harms people experiencing this type of loss.`,
            },
          ],
          reflectionPrompt: `All three cases involve grief being dismissed, mis-framed, or unrecognized in ways that compound the loss. What's common about how research-grounded recognition shifts the responses?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does current grief research show about grief as a human experience?`,
              options: [
                `Just sad`,
                `Grief is the normal human response to loss; not pathology; evidence of attachment, not personal weakness; most people are resilient (Bonanno's research); severe pathological grief is the exception not the norm; intensity tracks depth of attachment not "doing grief wrong"`,
                `Random`,
                `Just bad`,
              ],
              correctIndex: 1,
              explanation: `Bonanno's research has substantially shifted how grief is understood. Most people are resilient through loss; the older framing that grief is mostly pathological and requires professional intervention isn't supported by research. This matters because pop framings often pathologize normal grief.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why are the Kübler-Ross "five stages of grief" problematic according to current research?`,
              options: [
                `Random`,
                `Originally proposed for people facing their own dying (terminal patients), not for grievers; never validated by research as describing the actual experience of grief; current research shows grief doesn't move through stages in any consistent order; framework can actively harm grievers by suggesting they're "doing grief wrong" if they don't experience it in this order`,
                `They're fine`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The stages framework is widely known but not research-supported. Current grief research (Stroebe & Schut, Bonanno, others) provides much better framework. The persistence of the stages framework in pop content is one of the clearer examples of unsupported pop framings dominating despite being wrong.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the Stroebe & Schut dual-process model of grief?`,
              options: [
                `Random`,
                `1999 model framing healthy grief as oscillating between loss orientation (focusing on the loss, sadness, missing the person) and restoration orientation (rebuilding life, practical needs, ongoing functioning); both are necessary; getting stuck in either tends to produce difficulty; grief is not linear but fluid movement between these orientations`,
                `Just stages`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The dual-process model is one of the most influential current frameworks for understanding grief. It explains why grievers can seem to be "doing well" one moment and devastated the next; it's healthy oscillation, not inconsistency.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the continuing bonds framework?`,
              options: [
                `Random`,
                `Klass, Silverman, Nickman 1996: healthy grief generally involves continuing relationship with lost person/thing, not severing it; people maintain ongoing connection through memory, internal dialogue, identification, meaning-making, rituals; not pathological "holding on"; how human attachment normally works across separations; replaces older "letting go" framing now seen as Western mid-20th-century specific`,
                `Just memories`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Continuing bonds is one of the most important shifts in grief research in recent decades. Many cultures throughout history have built grief practices around continuing relationship (Día de los Muertos, ancestor veneration, memorial customs). The research validates what most cultures have always known.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is prolonged grief disorder?`,
              options: [
                `Just sad too long`,
                `Clinical condition established by recent research (Prigerson and others); included in most recent DSM; persistent yearning and longing for the deceased, intense emotional pain, and substantial impairment in functioning continuing more than 12 months after death; not "grief that lasts too long" (most grief continues at some level indefinitely) but grief severe enough that person can't substantially engage with ongoing life`,
                `Random`,
                `Just normal`,
              ],
              correctIndex: 1,
              explanation: `Prolonged grief disorder is a real clinical condition warranting professional support. Distinguishing it from normal ongoing grief matters: most grief continues indefinitely at some level (consistent with continuing bonds), but prolonged grief disorder specifically involves substantial impairment in functioning over extended time.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `How do grief and depression differ?`,
              options: [
                `Same`,
                `Grief typically focused on specific loss; depression more diffuse. Grief usually involves intact self-worth (world feels diminished, self isn't); depression often involves persistent worthlessness. Grief usually involves preserved capacity to feel positive emotions in some contexts; depression often involves persistent loss of capacity. Sometimes grief leads to depression. When uncertain, professional assessment helps`,
                `Random`,
                `Always different`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the distinction matters because grief and depression call for somewhat different responses. Grief generally moves through people over time with appropriate support; depression often requires specific clinical intervention. Both can coexist; professional assessment helps when uncertain.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `When does grief warrant professional support?`,
              options: [
                `Never`,
                `Severe enough to substantially prevent functioning across extended period (months); thoughts of suicide or self-harm; grief involves trauma (suicide, accidents, violence, witnessing death); symptoms of depression emerging alongside grief; can't talk to anyone about what experiencing; alcohol/drug use becoming a problem as coping; loss was complicated (difficult relationship, traumatic death, multiple losses compounding); particularly for major losses (parent, sibling, close friend)`,
                `Always`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Most grief moves through people without professional intervention; some warrants support. Recognizing the threshold matters because professional support exists and produces good outcomes when needed. Resources: school counselors, grief-specialized therapists, 988 Suicide and Crisis Lifeline (call/text 988), Crisis Text Line (HOME to 741741).`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is ambiguous loss?`,
              options: [
                `Random`,
                `Pauline Boss's research framework for losses where the person or relationship is partly still present but substantially changed; examples include serious illness (parent or sibling), addiction in family, mental illness, immigration, divorce in some forms; often harder than clean loss because not socially recognized, no rituals, no closure, continues across years, grief mixed with hope/fear in ways that complicate processing`,
                `Just unclear`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Ambiguous loss is one of the most useful concepts in current grief research for understanding losses that don't fit clean-death framing. Many adolescents experience ambiguous loss without having a name for it; naming it can itself help.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Healthy grief means "moving on" and "letting go" of the person who died.`,
              correctAnswer: false,
              explanation: `False. Current research (Klass, Silverman, Nickman continuing bonds framework, and extensive subsequent research) shows healthy grief generally involves continuing relationship with the lost person, not severing it. The "letting go" framing reflects specific Western mid-20th-century cultural assumptions rather than universal psychology. Many cultures throughout history have built grief practices around continuing connection.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend's grandparent died two months ago. She tells you she's been crying randomly, feels guilty for thinking about her grandmother daily, and her parents are pushing her to "move on." She asks if she's grieving wrong. Based on this lesson, what should you point out?`,
              options: [
                `"Yeah move on"`,
                `"What you're describing is healthy grief, not pathological grief. Several specific things. First, two months is well within range of intense grief for a meaningful loss; significant grief at two months isn't 'taking too long.' Second, thinking about your grandmother daily isn't pathological; that's what the continuing bonds research (Klass, Silverman, Nickman) calls healthy continuing relationship with someone you love. Most cultures across history have built grief practices around continuing connection rather than severing it; the 'move on' framing your parents are using reflects specific Western mid-20th-century cultural assumptions that current research has substantially rejected. Third, crying at unexpected moments is normal grief; the Stroebe & Schut dual-process model frames healthy grief as oscillating between loss orientation (sadness, missing her, ongoing connection) and restoration orientation (functioning, ongoing life). Both are necessary; getting stuck in either creates difficulty. Fourth, the 'five stages' framing your parents might be using isn't research-supported either: Kübler-Ross's stages were proposed for terminal patients, not grievers, and have never been validated as describing grief; current research shows grief doesn't move through stages. Fifth, what would help: continuing the bonds with your grandmother (talking to her in your head, doing things in honor of her, keeping items that maintain connection), recognizing the dual-process oscillation as normal, possibly conversation with your parents about what grief research actually shows, taking care of basic things (sleep, food, friends, school). Sixth, professional support would be appropriate if your grief is substantially preventing functioning over extended period or you're experiencing thoughts of suicide: school counselor can help connect, 988 Suicide and Crisis Lifeline is always available. Otherwise: you're not grieving wrong. You're grieving someone who mattered to you, and that's what grief looks like. Your parents are using outdated framings; the research doesn't support what they're pushing you to do."`,
                `"Just stop"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied grief literacy. Reference all major frameworks (continuing bonds, dual-process model, Kübler-Ross critique, Bonanno resilience). Validate the experience as healthy not pathological. Distinguish appropriate response (continuing the bonds, dual-process oscillation, basic self-care) from outdated pop framings (move on, let go, stages). Include professional support threshold with specific resources.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for grief? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: what losses (death, living loss, ambiguous loss) are present in your life that you may not have recognized as loss? What's the grief that goes with them?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who navigates loss with research-grounded framework across decades, what does that change about how you carry losses and support others through them?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific loss you've experienced or are experiencing. Apply the frameworks. What would research-grounded support of yourself look like?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The lesson critiqued dominant US framings of grief. What grief framings come from your family or culture that might be more or less aligned with research?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read about grief from a culture different from your own (Día de los Muertos practices, Buddhist grief frameworks, Jewish shiva, indigenous mourning traditions). What does it shift?` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Loss framework at 12 shapes decades of navigating losses and supporting others through them. Two paths.`,
          familyActivity: {
            title: `The Family Grief Conversation`,
            duration: `60 minutes`,
            description: `Share the research findings (continuing bonds, dual-process model, Kübler-Ross critique, ambiguous loss). Many families have inherited grief framings from dominant US culture that don't match research; the conversation often surfaces specific shifts worth considering. Many cultures have explicit grief practices that families can recover or build (rituals around anniversaries of deaths, ways of honoring deceased family members, recognition of ambiguous losses). Consider establishing family practices: explicit recognition of losses including ambiguous ones, continuing bonds practices, support norms for grieving family members.`,
          },
          projectOption: {
            title: `Read on grief, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: George Bonanno's "The Other Side of Sadness" (resilience research, accessible), Pauline Boss's "Ambiguous Loss" or "Loss, Trauma, and Resilience" (ambiguous loss framework), Joan Didion's "The Year of Magical Thinking" (lived experience of grief, beautifully written), Robert Neimeyer's work on meaning-making in grief, or Klass/Silverman/Nickman's "Continuing Bonds" (foundational research). Apply during reading. Write 1,500 words on what you learned about grief and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Grief literacy at 12 is one of the highest-leverage life-skill investments; it shapes how they'll navigate losses across decades and support others through them.`,
          },
          identityQuestion: `If you become someone with sophisticated grief literacy (recognizing all forms of loss, continuing bonds appropriately, knowing when professional support is needed, supporting others through their losses), what does that protect across decades of inevitable losses?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who treats grief as evidence of love, not as something to fix.`,
            `A person who maintains continuing bonds with the people I've lost.`,
            `Someone who recognizes ambiguous loss and supports others through it.`,
          ],
          saveKey: `identity_responses_lw_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteenth Life Wellness lesson done. You now have multiple research frameworks for grief (Bonanno resilience, Stroebe & Schut dual-process, Klass/Silverman/Nickman continuing bonds, Boss ambiguous loss, Prigerson prolonged grief disorder, Neimeyer meaning-making), distinction between healthy grief and conditions warranting support, and explicit framework against pop framings that have caused harm. That's framework most adults navigating loss have never explicitly built. Four lessons to go. Next time: meaning and purpose. Argument Builder format. Let's go. — Terra`,
          badge: `grief-literate`,
          badgeName: `Grief Literate`,
          xpEarned: 75,
          competencies: [
            `Knows grief as normal human response to loss (not pathology); Bonanno resilience research`,
            `Articulates Stroebe & Schut dual-process model (loss orientation + restoration orientation, oscillating)`,
            `Applies continuing bonds framework (Klass, Silverman, Nickman) rather than "letting go"`,
            `Recognizes ambiguous loss (Boss) as researched category for living losses`,
            `Distinguishes complicated grief warranting professional support; knows crisis resources (988, Crisis Text Line HOME to 741741)`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Meaning and Purpose`,
            hook: `Three positions on what produces meaning in life. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L16 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
