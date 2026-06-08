// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L11 — Family Relationships
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Family Systems, Adolescent Autonomy Development
// CALIBRATED: Voyager spec v1.1 (May 2026)
// SAFETY: Distinguishes workable conflict from harm requiring outside help;
//         escalation paths included for family safety concerns
// Interaction format: CASE STUDY (high-conflict / controlling parent / family difficulty)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l11-v1";

const LIFEWELLNESS_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-11`,
      title: `Family Relationships`,
      duration: 35,
      xpReward: 75,
      badge: `family-literate`,
      badgeName: `Family Literate`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, family relationships are one of the most consequential wellness topics. Your family is the relational environment in which most of your emotional patterns formed and is likely to remain an important part of your life across decades. Adolescence specifically involves dramatic renegotiation of family relationships as your autonomy develops; this can be one of the most difficult relational periods, and how it's navigated shapes things for years afterward. Today we work through three real family situations: a high-conflict relationship with a parent, a controlling parent's effects, and a family going through difficulty. Real research on family systems (Bowen, Baumrind), adolescent autonomy development, and family conflict will inform the responses. The lesson will also name when family situations are beyond what you can navigate alone and require outside help.`,
          headline: `Family Relationships`,
          subtitle: `Three real family situations. Family systems, adolescent autonomy, when to seek outside help.`,
          visual: `/voyager-assets/life-wellness/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Adolescence Is A Hard Period For Family Relationships`,
          paragraphs: [
            `Adolescence involves specific developmental changes that make family relationships particularly difficult during this period. Understanding what's actually happening developmentally helps both adolescents and parents navigate the changes better.`,
            `What's developmentally normal. Adolescent brains are dramatically reorganizing, particularly the prefrontal cortex (involved in executive function, impulse control, long-term planning) and the limbic system (emotional reactivity). The reorganization happens at different rates: emotional reactivity often increases before executive control catches up. This produces a period of intense emotional experience with less-than-adult capacity to regulate it. The pattern isn't failure; it's biology.`,
            `Adolescent autonomy development is also normal and necessary. Across cultures and history, adolescents have needed to separate from family identity to develop their own. The process involves disagreement, pushing back, identity experimentation, and renegotiation of what was settled in childhood. Parents who interpret this as personal rejection are often wrong; it's developmental work that has to happen for adolescents to become functional adults.`,
            `What parents are simultaneously dealing with. Parents of adolescents are often in mid-life, dealing with their own aging, career stress, relationship changes, and watching kids who used to be dependent become distinct people. Many parents have unprocessed material from their own adolescence that gets triggered by their kid's. The "easy" parts of parenting (small children) are mostly past; the new challenges require different skills that many parents weren't taught.`,
            `What research shows about adolescent-family conflict. Some conflict during adolescence is normal and even functional; family relationships that have no conflict during adolescence often involve either suppression of adolescent autonomy development or absence of close relationship. The amount of conflict typical of adolescence varies enormously across cultures and families; cultural expectations matter. Conflict that's frequent, intense, and damaging is different from conflict that's regular but workable.`,
            `For 11-12 year olds specifically, this is the start of the period rather than the middle. Patterns established now will shape the rest of adolescence and the family relationships you'll have as a young adult. The skills to navigate this developmental work (alongside parents who are also developmentally challenged by it) are worth building deliberately.`,
          ],
          image: `/voyager-assets/life-wellness/l11-s1-development.webp`,
          imageCaption: `Adolescent brain reorganization: emotional reactivity ahead of executive control. Autonomy development normal and necessary. Some conflict functional; pattern matters more than presence.`,
          vocab: [
            {
              word: `family conflict`,
              definition: `Adolescent brain reorganizes dramatically; emotional reactivity often increases before executive control catches up (pattern is biological, not failure). Autonomy development normal and necessary across cultures: disagreement, identity experimentation, renegotiation of childhood patterns. Parents often simultaneously dealing with own aging, career stress, unprocessed adolescent material triggered by kid's development. Some conflict is functional; pattern matters more than presence. Conflict that's frequent, intense, damaging differs from conflict that's regular but workable.`,
              audioPrompt: `Adolescent development and family conflict involves specific developmental changes that make this a difficult period, {name}. Adolescent brains are dramatically reorganizing, particularly the prefrontal cortex involved in executive function, impulse control, long-term planning, and the limbic system involved in emotional reactivity. The reorganization happens at different rates: emotional reactivity often increases before executive control catches up. This produces a period of intense emotional experience with less-than-adult capacity to regulate it. The pattern isn't failure; it's biology. Adolescent autonomy development is also normal and necessary. Across cultures and history, adolescents have needed to separate from family identity to develop their own. The process involves disagreement, pushing back, identity experimentation, and renegotiation of what was settled in childhood. Parents who interpret this as personal rejection are often wrong; it's developmental work that has to happen for adolescents to become functional adults. Some conflict during adolescence is normal and even functional. The amount of conflict typical of adolescence varies enormously across cultures and families; cultural expectations matter.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Parenting Styles And Their Effects`,
          paragraphs: [
            `One of the most influential frameworks for understanding family relationships comes from Diana Baumrind's research on parenting styles, developed at UC Berkeley starting in the 1960s and refined by subsequent researchers including Eleanor Maccoby and John Martin.`,
            `Baumrind identified parenting along two dimensions: warmth/responsiveness (how connected, attuned, and emotionally available parents are) and demandingness/control (how much structure, expectations, and discipline parents provide). The combinations produce four parenting style patterns.`,
            `Authoritative parenting (high warmth + high demandingness): warm, responsive parents who also have clear expectations and structure. Research consistently shows this style produces the best outcomes across measures: better mental health, better academic outcomes, better relationships, better adolescent autonomy development. Authoritative parents discuss expectations rather than just imposing them, respect adolescent emerging autonomy while maintaining standards, and adjust as kids develop.`,
            `Authoritarian parenting (low warmth + high demandingness): demanding parents who are emotionally distant or harsh. High structure without the warmth produces specific harms: lower self-esteem, more anxiety, more rebellious behavior, worse relationships in adulthood. The "tough love" approach often comes from this style; research generally doesn't support it for producing positive outcomes.`,
            `Permissive parenting (high warmth + low demandingness): warm, responsive parents without much structure or expectations. The warmth is good; the lack of structure produces difficulty with self-regulation, lower achievement, and challenges with rules and authority in other contexts.`,
            `Uninvolved/neglectful parenting (low warmth + low demandingness): parents who are neither emotionally present nor providing structure. This pattern produces the worst outcomes across measures and overlaps with neglect in extreme forms.`,
            `What this implies for adolescents. You don't have full control over your parents' parenting style; they're operating from their own patterns, often unconsciously. But you can recognize what style you're navigating and adjust expectations. You can also, in some cases, communicate with parents about what works for you ("I'd like to be able to discuss expectations rather than just receiving them"). Some parents are open to this; others are not. Recognizing the style matters because it shifts your understanding from "what's wrong with me/them?" to "this is a specific pattern with specific dynamics, here's what tends to happen and what might help."`,
          ],
          image: `/voyager-assets/life-wellness/l11-s2-styles.webp`,
          imageCaption: `Baumrind's parenting styles: warmth × demandingness produces four patterns. Authoritative (high/high) produces best outcomes. Authoritarian, permissive, neglectful have different specific costs.`,
          vocab: [
            {
              word: `parenting styles`,
              definition: `Diana Baumrind's research at UC Berkeley identifies parenting along two dimensions: warmth/responsiveness and demandingness/control. Four combinations. Authoritative (high warmth + high demandingness): best outcomes — better mental health, academic outcomes, relationships, autonomy development. Authoritarian (low warmth + high demandingness): "tough love" pattern, produces lower self-esteem, anxiety, rebellion. Permissive (high warmth + low demandingness): warmth good but lack of structure produces self-regulation issues. Uninvolved/neglectful (low warmth + low demandingness): worst outcomes; overlaps with neglect in extreme forms.`,
              audioPrompt: `Parenting styles, as Diana Baumrind identified them at UC Berkeley starting in the 1960s, exist along two dimensions, {name}. Warmth and responsiveness: how connected, attuned, and emotionally available parents are. Demandingness and control: how much structure, expectations, and discipline parents provide. The combinations produce four patterns. Authoritative parenting combines high warmth with high demandingness: warm responsive parents who also have clear expectations and structure. Research consistently shows this style produces the best outcomes: better mental health, better academic outcomes, better relationships, better adolescent autonomy development. Authoritarian parenting combines low warmth with high demandingness: demanding parents who are emotionally distant or harsh. The "tough love" approach often comes from this style; research generally doesn't support it for producing positive outcomes. Permissive parenting combines high warmth with low demandingness: warm parents without much structure. The warmth is good; the lack of structure produces difficulty with self-regulation. Uninvolved or neglectful parenting combines low warmth with low demandingness: parents who are neither emotionally present nor providing structure. This pattern produces the worst outcomes.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Family Systems And How They Work`,
          paragraphs: [
            `Family systems theory, developed by Murray Bowen at Georgetown and elaborated by subsequent family therapists, treats families as systems with patterns that affect every member. Understanding these systems helps explain why individual behavior change is often hard without addressing the system.`,
            `Specific concepts from family systems theory. Each family develops patterns of interaction (who talks to whom about what, how conflict is handled, what's discussable and undiscussable, who plays which roles) that operate largely unconsciously. The patterns get reproduced across generations; the family you grew up in shaped patterns from your parents' families, and your patterns will shape future families if you have them. Recognizing the systemic patterns is itself a significant insight.`,
            `Specific systemic patterns. Triangulation: when two family members in conflict draw in a third (often a child) to manage the tension, putting the third person in an impossible position. Parentification: when a child takes on adult responsibilities (emotional support of a parent, mediation between parents, caretaking of siblings beyond what's appropriate for their age). Scapegoating: when one family member becomes the focus of family difficulty, often unfairly. Enmeshment: when family boundaries are insufficiently clear, with members not having distinct lives. Disengagement: when family connections are insufficiently strong, with members effectively living parallel lives. Each pattern has consequences for the people in it.`,
            `What this implies for adolescents. Some of what feels personal in your family may actually be systemic patterns operating on multiple people. Your parents' patterns came from their families; your patterns are partly inherited. This isn't determinism (patterns can be examined and changed), but recognizing them as patterns rather than personal failure shifts what's possible.`,
            `When family therapy is appropriate. Family therapy treats families as systems rather than focusing on individual members. It's particularly useful when family patterns are dysfunctional and affecting multiple members, when communication has broken down, when major changes are happening (divorce, blended families, illness), or when individual interventions aren't working. Family therapy isn't a sign of failure; it's a sophisticated intervention for systemic issues.`,
            `An important caveat. Family systems theory can be misused to suggest that all family problems are equally everyone's responsibility, which can obscure real harm from particular family members. Patterns are real; individual responsibility for abuse, neglect, or harm is also real. The systems framework illuminates the dynamics without exonerating individual harmful behavior.`,
          ],
          image: `/voyager-assets/life-wellness/l11-s3-systems.webp`,
          imageCaption: `Family systems theory (Bowen). Patterns operate unconsciously, reproduce across generations. Specific patterns: triangulation, parentification, scapegoating, enmeshment, disengagement.`,
          vocab: [
            {
              word: `family systems patterns`,
              definition: `Murray Bowen's family systems theory treats families as systems with patterns affecting every member. Patterns reproduce across generations. Specific patterns: triangulation (two members in conflict draw in third); parentification (child takes on adult responsibilities); scapegoating (one member becomes focus of family difficulty); enmeshment (insufficient boundaries between members); disengagement (insufficient connection between members). Family therapy treats families as systems; useful for dysfunctional patterns, broken communication, major changes. Patterns are real AND individual responsibility for harm is also real.`,
              audioPrompt: `Family systems theory was developed by Murray Bowen at Georgetown and elaborated by subsequent family therapists, {name}. It treats families as systems with patterns that affect every member. Each family develops patterns of interaction (who talks to whom about what, how conflict is handled, what's discussable and undiscussable, who plays which roles) that operate largely unconsciously. The patterns get reproduced across generations. Specific systemic patterns include triangulation, when two family members in conflict draw in a third (often a child) to manage the tension; parentification, when a child takes on adult responsibilities beyond what's appropriate for their age; scapegoating, when one family member becomes the focus of family difficulty often unfairly; enmeshment, when family boundaries are insufficiently clear; disengagement, when family connections are insufficiently strong. Family therapy treats families as systems and is particularly useful when family patterns are dysfunctional, communication has broken down, or major changes are happening. An important caveat: family systems theory can be misused to suggest all family problems are equally everyone's responsibility, which can obscure real harm from particular family members. Patterns are real AND individual responsibility for abuse, neglect, or harm is also real.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Family Situations Are Beyond Skill-Building`,
          paragraphs: [
            `Most family relationships involve conflict and difficulty that can be navigated with skill-building, communication, and time. Some family situations are beyond what an adolescent can navigate alone or that the family can resolve internally. Recognizing the distinction matters.`,
            `Specific patterns that warrant outside help. Abuse of any kind (physical, sexual, emotional). Neglect (consistent failure to meet basic needs). Substance abuse by parents that affects the household. Mental health conditions in family members that are untreated and producing significant harm. Domestic violence between parents or directed at children. Patterns that have been long-standing and aren't responding to attempts at change. Situations where you don't feel safe.`,
            `Where to turn. School counselors are often the first available resource and can help connect to other supports. Trusted adults outside the family (relatives, teachers, coaches, religious community members, friends' parents) can sometimes help. Pediatricians and family doctors can identify when situations warrant intervention. For abuse or neglect specifically, child protective services in your state are designed to evaluate and respond. The Childhelp National Child Abuse Hotline (1-800-422-4453) is available 24/7 in the US.`,
            `For crisis situations. If you or someone in your family is in immediate danger, that's a different category requiring immediate response: 911 for active emergencies, the National Domestic Violence Hotline (1-800-799-7233) for ongoing domestic violence situations, the 988 Suicide and Crisis Lifeline for mental health crises.`,
            `Some important framings. Reaching out for help with family situations isn't betrayal of your family; it's appropriate response to situations that need outside support. Many family patterns are improved when professional help becomes involved. Adults can also harm in subtle ways (controlling behavior, emotional manipulation, gaslighting) that warrant attention even when they don't reach the threshold for formal abuse reporting. Trusting your perception that something isn't right is appropriate; checking with a trusted adult about whether what you're experiencing is normal is appropriate.`,
            `One particularly important point. The "you should be loyal to family no matter what" framing, which appears in many cultures and many families, can be weaponized to prevent kids from getting help they need. Family loyalty has appropriate places, but it's not appropriate to require children to protect adult harm. If you're in a family situation that doesn't feel right, that warrants checking with someone outside the family.`,
          ],
          image: `/voyager-assets/life-wellness/l11-s4-help.webp`,
          imageCaption: `When situations warrant outside help: abuse, neglect, substance abuse, untreated mental health, domestic violence, situations not feeling safe. School counselors, trusted adults, Childhelp National Child Abuse Hotline (1-800-422-4453).`,
          vocab: [
            {
              word: `outside help`,
              definition: `Specific patterns: abuse (physical, sexual, emotional); neglect; parental substance abuse affecting household; untreated mental health conditions producing harm; domestic violence; long-standing patterns not responding to change attempts; situations where you don't feel safe. Where to turn: school counselors (often first resource), trusted adults outside family, pediatricians, child protective services for abuse/neglect, Childhelp National Child Abuse Hotline (1-800-422-4453, 24/7 US). Crisis: 911, National Domestic Violence Hotline (1-800-799-7233), 988 Suicide and Crisis Lifeline. Family loyalty is not appropriately weaponized to prevent kids from getting help.`,
              audioPrompt: `Some family situations warrant outside help rather than skill-building alone, {name}. Specific patterns warranting outside intervention include abuse of any kind (physical, sexual, emotional); neglect or consistent failure to meet basic needs; substance abuse by parents affecting the household; mental health conditions in family members that are untreated and producing significant harm; domestic violence; long-standing patterns not responding to change attempts; situations where you don't feel safe. Where to turn: school counselors are often the first available resource and can connect to other supports. Trusted adults outside the family. Pediatricians and family doctors. For abuse or neglect specifically, child protective services. The Childhelp National Child Abuse Hotline at 1-800-422-4453 is available 24 hours, 7 days. For crisis situations involving immediate danger, 911. National Domestic Violence Hotline at 1-800-799-7233. The 988 Suicide and Crisis Lifeline for mental health crises. One particularly important framing: the "you should be loyal to family no matter what" framing can be weaponized to prevent kids from getting help they need; family loyalty has appropriate places but isn't appropriate to require children to protect adult harm.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Cases`,
          paragraphs: [
            `In the cases that follow, three young people face different family situations. Each is workable (none of the cases involve abuse or situations requiring formal intervention) but each requires sophisticated navigation of family relationships.`,
            `One framing as you work. The cases involve adolescents whose families are imperfect in ordinary ways that most families are imperfect. The skill isn't fixing the family (which mostly isn't yours to do) but navigating the relationships well from your position, recognizing what's developmentally normal vs what's worth addressing, and using the frameworks (parenting styles, family systems, developmental dynamics) to understand what's happening.`,
            `Another framing. None of the case responses involve cutting off family. Some family relationships do warrant distance or cutoff (when the harm is severe enough that proximity is damaging), but most family relationships involve ongoing work across decades. The frameworks help you stay engaged while protecting yourself appropriately.`,
            `One important reminder. If you're in a family situation that feels significantly different from the cases (involving abuse, neglect, safety concerns, severe and persistent dysfunction, or anything else that doesn't feel workable through skill-building), please talk to a school counselor, trusted adult outside the family, or call the Childhelp National Child Abuse Hotline. The cases below are for ordinary family difficulty; some family situations warrant different responses.`,
            `One last framing. You're 12. The family patterns you build now shape relationships for decades. Adults whose adolescent family relationships were navigated with sophistication often have much better adult family relationships than adults who developed patterns of suppression, distance, or chronic conflict during adolescence. Building deliberate framework now is one of the highest-leverage relational investments available.`,
          ],
          image: `/voyager-assets/life-wellness/l11-s5-before.webp`,
          imageCaption: `Three cases of ordinary family difficulty. Skill isn't fixing the family but navigating well from your position. Different situations (abuse, neglect, safety) warrant different responses.`,
          vocab: [
            {
              word: `relationship framework`,
              definition: `Mature family literacy integrates multiple frameworks. Developmental: what's normal for adolescent-parent renegotiation? Parenting styles (Baumrind): what style am I navigating, what patterns does it produce? Family systems (Bowen): what systemic patterns are operating, what's inherited from previous generations? Safety: is this skill-building territory or warrants outside help? Most family relationships involve ongoing work across decades. Patterns established in adolescence shape adult family relationships.`,
              audioPrompt: `Integrated family relationship framework is what mature family literacy involves, {name}. It integrates multiple frameworks rather than relying on any single approach. Developmental framework: what's normal for adolescent-parent renegotiation? Brain reorganization happening, autonomy development, parents also dealing with their own challenges. Parenting styles framework from Baumrind: what style am I navigating (authoritative, authoritarian, permissive, uninvolved) and what patterns does that produce? Family systems framework from Bowen: what systemic patterns are operating, what's inherited from previous generations, what are the family roles? Safety framework: is this skill-building territory or does it warrant outside help: school counselors, trusted adults, professional resources, crisis lines for safety situations? Most family relationships involve ongoing work across decades. Patterns established in adolescence shape adult family relationships substantially.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l11-case-study`,
          type: `case-study`,
          headline: `Three Family Situations`,
          intro: `{name}, three real family situations involving ordinary difficulty. For each, identify what would actually serve the person.`,
          cases: [
            {
              id: `case-1`,
              title: `High-Conflict Relationship With A Parent`,
              context: `Riley has been in increasing conflict with their father over the past year. The fights are about specific things (chores, screen time, grades, friends) but also seem to be about deeper dynamics: he tells her she's "becoming someone he doesn't recognize" and she feels he doesn't understand who she actually is. The fights escalate quickly; she gets defensive, he gets harsh, both leave angry. Afterward they often pretend it didn't happen until the next conflict. Riley loves her dad and the dynamic is hurting them both. She wonders if something is fundamentally wrong with their relationship or if this is normal for this age.`,
              question: `What's actually going on with Riley and her father?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `The relationship is broken. Riley should distance herself from her father until she's old enough to leave.`,
                  outcome: `This goes too far given what's described. Conflict during adolescence (even substantial conflict) is developmentally normal and often functional; it's how adolescents renegotiate identity within family. The father's "becoming someone he doesn't recognize" comment is a classic parent response to adolescent autonomy development; parents often experience their kid's individuation as personal rejection or loss. The pattern of escalation followed by pretending it didn't happen isn't ideal but isn't broken; it's a workable pattern with specific skill-building potential. "Distance until old enough to leave" forecloses the developmental work this period is supposed to do and often produces worse adult family relationships than working through the conflict.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `What Riley describes is largely developmentally normal adolescent-parent conflict around autonomy development. Specific frameworks help. Developmental: Riley is renegotiating identity within family (normal); her father is experiencing this as personal rejection (normal but often wrong). The "becoming someone he doesn't recognize" comment usually reflects the parent's difficulty with autonomy development, not the kid's actual character. What might help: when conflicts happen, try not to match the escalation; recognize when emotional reactivity is taking over and slow down. After conflicts, instead of pretending they didn't happen, try a brief acknowledgment: "I love you, that fight was hard, can we talk about it tomorrow when we're both calmer?" Try to identify specific things you're actually disagreeing about (chores, screen time, etc.) vs broader identity stuff getting mixed in. Consider that your father may not have language for what he's experiencing (his kid changing, his role changing, his own feelings about it). Some families benefit from family therapy during adolescence; if patterns aren't shifting, that's a reasonable option to suggest. If the conflict escalates to anything physical or to severe emotional harm, that's beyond skill-building and warrants talking to a school counselor or trusted adult.`,
                  outcome: `This is the research-informed response. Names the developmental dynamics (autonomy development, parent difficulty with it). Provides specific skill-building (de-escalation, acknowledgment, distinguishing specific from identity conflict). Includes the appropriate escalation path (family therapy, safety threshold). The reframing from "something is fundamentally wrong" to "this is developmentally normal and workable" itself reduces the anxiety that makes conflicts harder.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Riley should just stop pushing back. Avoid conflict by agreeing with whatever her father says.`,
                  outcome: `This is suppression of adolescent autonomy development and produces predictable problems: identity formation gets stunted, resentment builds, relationship becomes performative rather than real, patterns established carry into adult relationships. Adolescents who don't push back during adolescence often emerge with less developed sense of self and more difficulty navigating adult relationships. The right response isn't avoiding conflict but navigating it better; conflict during adolescence is developmentally functional in appropriate forms.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates developmentally normal adolescent-parent conflict around autonomy development. The frameworks (developmental dynamics, parenting style, family systems) help understand what's happening; the response involves de-escalation skills, distinguishing specific from identity conflict, possible family therapy if patterns aren't shifting, and recognition that some conflict is functional during this period. Reframing from "broken relationship" to "normal developmental work" itself reduces the difficulty.`,
            },
            {
              id: `case-2`,
              title: `Controlling Parent`,
              context: `Marcus's mother has always been involved, but over the past year her involvement has intensified into what feels like control. She tracks his location constantly. She reads his texts and social media. She schedules nearly every hour of his time. She makes decisions about his friends, activities, even his style choices. When he pushes back, she says it's because she loves him and wants to protect him, and that he'll thank her later. He's increasingly anxious, has stopped sharing anything with her, and finds himself hiding ordinary things from her because everything becomes a battle. He doesn't want to be ungrateful but he also feels like he can't breathe.`,
              question: `What's actually going on with Marcus and his mother?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Marcus should be grateful. His mother loves him and is involved. He'll appreciate it when he's older.`,
                  outcome: `This dismisses real concerns and reinforces a pattern that's developmentally harmful. What Marcus describes (constant location tracking, reading texts/social media, scheduling all his time, making decisions about friends/activities/style, framing intrusion as love) is more accurately described as overcontrolling or "helicopter" parenting that research has identified as producing specific harms in adolescents: increased anxiety, decreased self-efficacy, difficulty with autonomous decision-making, damaged relationship with parent, identity development problems. The "be grateful and you'll appreciate it later" framing is exactly how overcontrolling parenting maintains itself; it makes the kid feel guilty for noticing harm. Love and overcontrol can coexist; the love doesn't make the overcontrol healthy.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `What Marcus describes is overcontrolling parenting; research identifies this pattern as authoritarian-leaning style or "helicopter" parenting that produces specific harms during adolescence: increased anxiety (which Marcus is experiencing), decreased self-efficacy, identity development problems, damaged parent-child relationship (he's stopped sharing). The "I'm doing it because I love you" framing is real (she probably does love him) but doesn't make the pattern healthy; love and overcontrol can coexist. What might help Marcus. First: trust his perception. The "can't breathe" feeling is information, not ingratitude. Second: have a conversation with his mother that's specific rather than general. "Mom, I love you and I know you love me. I need to be able to develop some autonomy. Specifically, I'd like [text privacy/some unscheduled time/input on my own friends]. Could we talk about that?" Some parents are open to this; some are not. Third: if direct conversation doesn't shift things, consider talking with a school counselor who can help facilitate the conversation, or asking about family therapy. Adolescents need a developmentally appropriate amount of autonomy to develop normally; not getting it produces real costs. Fourth: develop areas of his life that are his (school, friends, interests) while maintaining the relationship with his mother. The goal isn't rejecting her but developing distinct identity. If the controlling behavior escalates significantly or starts feeling like it's affecting his mental health seriously, that's worth talking to a doctor or therapist about; the anxiety he's experiencing isn't just an annoyance; it's a real concern.`,
                  outcome: `This is the research-informed response. Names the pattern accurately (overcontrolling parenting, with research showing specific harms). Validates Marcus's perception. Provides specific approaches (direct conversation, school counselor as facilitator, family therapy option, developing autonomous areas). Includes the appropriate escalation (mental health concern). The reframing from "you should be grateful" to "the anxiety you're feeling is information about real overcontrol" empowers Marcus to address the actual situation rather than suppress his experience.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Marcus should rebel openly and loudly. Hide nothing; confront her about everything constantly.`,
                  outcome: `This goes too far. Open rebellion as a strategy usually doesn't work with overcontrolling parents; it often intensifies the control rather than reducing it ("see, you need supervision, look how you're acting"). Constant confrontation also damages the relationship in ways that may not be recoverable. The more skillful approach involves specific conversations about specific autonomy, possibly with outside help, while continuing to function in the relationship rather than blowing it up. Some autonomy gets built quietly through small specific shifts; some requires direct conversation; some requires outside facilitation. Open rebellion is rarely the optimal path.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates overcontrolling parenting and its effects on adolescent development. Research identifies specific harms (anxiety, identity problems, damaged relationship) from this pattern even when motivated by genuine love. The intervention isn't suppression or open rebellion but specific conversation about specific autonomy, possibly with outside facilitation, while maintaining the relationship. The reframing from "be grateful" to "your anxiety is information about real overcontrol" matters because suppression of accurate perception is part of what overcontrolling parenting produces.`,
            },
            {
              id: `case-3`,
              title: `Family Going Through Difficulty`,
              context: `Sam's family is going through a difficult period. Her parents are getting divorced. The household is tense; both parents are stressed; her older sibling has retreated to their room; her younger sibling is acting out. Sam is trying to be "the okay one": not adding to her parents' stress, mediating between her siblings, suppressing her own feelings about the divorce. She's exhausted, increasingly sad, and has started having stomach problems. She thinks she just needs to keep being strong until things settle.`,
              question: `What's actually going on with Sam?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Sam is being mature and helpful. She should keep doing what she's doing until the family situation resolves.`,
                  outcome: `This misses what's actually happening to Sam specifically. What she's doing has a clinical name in family systems theory: parentification. She's taking on adult roles (managing parents' emotions, mediating between siblings, suppressing her own needs to support theirs). Parentification produces specific harms: long-term mental health effects (depression, anxiety, difficulty identifying own needs in adulthood), suppression of normal grief/distress that needs to be processed, exhaustion that's already showing up (stomach problems, sadness). "Being mature and helpful" is the framing that makes parentification look like virtue; it's actually a developmental problem that benefits no one in the long run, including Sam.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Sam is in a pattern called parentification: taking on adult roles (managing parents' emotions, mediating between siblings, suppressing her own needs). Family systems theory (Bowen and others) has documented parentification as producing real harms even when it looks like mature helpfulness: long-term depression and anxiety risk, difficulty identifying own needs in adulthood, suppression of normal grief and distress, current exhaustion already showing up (stomach problems, sadness). What might serve Sam. First: recognize that her own feelings about the divorce are real and need processing; divorce is a significant life event for kids regardless of how necessary it is for parents. Suppressing the grief doesn't make it not exist; it stores it for later. Second: talk to a trusted adult outside the family situation: school counselor, doctor, therapist, extended family member, family friend. Many kids in divorcing families benefit from therapy specifically; the support can be focused on her experience rather than family dynamics. Third: it's not her job to manage her parents' emotions or mediate between siblings; those are adult responsibilities. Letting some of the family chaos exist without her trying to fix it is appropriate even if it feels uncomfortable. Fourth: take care of basic things (sleep, food, movement, friends) that she can control. Fifth: the stomach problems and sadness suggest real impact that warrants attention; if they persist, that warrants seeing a doctor or therapist. Most divorces involve some adjustment difficulty for kids; appropriate support during the transition produces dramatically better long-term outcomes than "be strong and keep going."`,
                  outcome: `This is the research-informed response. Names the parentification pattern. Validates Sam's experience as real and worthy of attention. Provides specific interventions (acknowledging own feelings, outside support, releasing inappropriate responsibilities, basic care). Includes appropriate medical/therapeutic escalation. The reframing from "being mature and helpful" to "you're carrying inappropriate weight, here's what to do about it" empowers Sam to take care of herself during a real family difficulty.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Sam should pretend everything is fine and avoid talking about the divorce with anyone. Process it privately.`,
                  outcome: `This is essentially what Sam is already doing, and it's producing real harm (exhaustion, stomach problems, sadness, suppression patterns). Privately processing significant family difficulty without support, particularly during adolescence, usually doesn't work well. Most kids going through parental divorce benefit from explicit support: trusted adults, often therapists, sometimes peer support groups. Pretending and suppressing during major family difficulty stores the experience for later in ways that compound over time. Real support during transition produces dramatically better outcomes.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates parentification during family difficulty. The pattern looks like maturity and helpfulness but produces real harms (mental health risk, suppression of needed processing, current exhaustion). Research-supported response involves recognition of inappropriate role-taking, accessing outside support, releasing responsibilities that aren't hers, attending to her own experience and basic care. The reframing from "be strong" to "your experience matters and you need support" is critical because parentification is sustained by the framing that taking on adult roles is virtuous.`,
            },
          ],
          reflectionPrompt: `All three cases involve adolescents needing to reframe what's happening from "individual responsibility/failure" to "specific pattern with specific dynamics and specific interventions." What's common about how research-based framings shift the responses?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is adolescence a difficult period for family relationships?`,
              options: [
                `Random`,
                `Adolescent brain reorganizes dramatically; emotional reactivity often increases before executive control catches up; autonomy development normal and necessary involves disagreement and identity experimentation; parents often dealing with own challenges (aging, career, unprocessed adolescent material triggered by kid's development); some conflict is functional and even necessary for development`,
                `Just teenagers`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Understanding the developmental dynamics shifts what's happening from personal failure to specific biological and developmental process. Some conflict is functional; pattern matters more than presence. Cultural expectations vary; conflict that's frequent, intense, and damaging differs from conflict that's regular but workable.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are Baumrind's four parenting styles and their outcomes?`,
              options: [
                `Random four`,
                `Two dimensions (warmth × demandingness). Authoritative (high/high): best outcomes: mental health, academics, relationships, autonomy. Authoritarian (low warmth/high demandingness): "tough love"; produces anxiety, lower self-esteem, rebellion. Permissive (high warmth/low demandingness): self-regulation difficulties. Uninvolved/neglectful (low/low): worst outcomes, overlaps with neglect in extreme forms`,
                `Just nice/mean`,
                `Random model`,
              ],
              correctIndex: 1,
              explanation: `Diana Baumrind's research has been replicated extensively. Authoritative consistently produces the best outcomes. Recognizing the style you're navigating doesn't change your parents but shifts your understanding from "what's wrong" to "this is a specific pattern with specific dynamics."`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is family systems theory?`,
              options: [
                `Random`,
                `Murray Bowen at Georgetown developed framework treating families as systems with patterns affecting every member; patterns reproduce across generations; specific patterns include triangulation (two members draw in third), parentification (child takes adult roles), scapegoating (one member becomes focus of family difficulty), enmeshment (insufficient boundaries), disengagement (insufficient connection)`,
                `Just family`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Family systems theory helps explain why individual change is often hard without addressing the system. Patterns operate largely unconsciously. Important caveat: framework can be misused to suggest all problems are equally everyone's responsibility, obscuring real individual harm. Patterns are real AND individual responsibility for harm is also real.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is parentification and what are its effects?`,
              options: [
                `Random`,
                `When a child takes on adult responsibilities (emotional support of parents, mediating between parents, caretaking of siblings beyond age-appropriate). Documented in family systems literature. Produces specific harms: long-term depression and anxiety risk, difficulty identifying own needs in adulthood, suppression of normal grief and distress, current exhaustion. Looks like maturity/helpfulness but is a developmental problem`,
                `Being mature`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Parentification is a clinical pattern, not virtue. It's particularly common during family difficulties (divorce, parental illness, parental substance abuse). Recognition shifts the response from "be more mature" to "release inappropriate responsibilities, attend to own experience, get outside support."`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `When do family situations warrant outside help?`,
              options: [
                `Never`,
                `Specific patterns: abuse (physical, sexual, emotional); neglect; parental substance abuse affecting household; untreated mental health producing harm; domestic violence; long-standing patterns not responding to change; situations not feeling safe. Resources: school counselors, trusted adults, pediatricians, child protective services, Childhelp National Child Abuse Hotline (1-800-422-4453, 24/7); crisis lines for safety`,
                `Always`,
                `Just abuse`,
              ],
              correctIndex: 1,
              explanation: `Some family situations are beyond what skill-building or family-internal resolution can address. Recognizing when to escalate is part of mature family literacy. The "you should be loyal to family no matter what" framing can be weaponized to prevent kids from getting help; family loyalty has appropriate places but isn't appropriate to require children to protect adult harm.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the research show about overcontrolling/helicopter parenting?`,
              options: [
                `It's great`,
                `Produces specific harms in adolescents even when motivated by love: increased anxiety, decreased self-efficacy, identity development problems, damaged parent-child relationship; love and overcontrol can coexist (the love doesn't make the overcontrol healthy); "be grateful and you'll appreciate it later" framing is how the pattern maintains itself`,
                `Random`,
                `Always good`,
              ],
              correctIndex: 1,
              explanation: `Recognizing overcontrolling parenting as a pattern with specific costs (rather than as appropriate caring) shifts the response. The pattern produces measurable harm during adolescence and predicts worse outcomes in adulthood. Some parents are open to conversation about adjusting; some require outside facilitation; some don't change but recognition helps the kid navigate.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the right response to developmentally normal adolescent-parent conflict?`,
              options: [
                `Distance forever`,
                `Recognize as developmentally normal (autonomy development; parents experiencing autonomy as rejection); avoid matching escalation (slow down when emotional reactivity takes over); brief acknowledgment after rather than pretending it didn't happen; distinguish specific disagreements from identity conflict; consider family therapy if patterns aren't shifting; safety threshold (physical or severe emotional harm) warrants outside help`,
                `Constant rebellion`,
                `Just suppress`,
              ],
              correctIndex: 1,
              explanation: `Some conflict during adolescence is functional. The skill isn't avoiding all conflict but navigating it better. Reframing from "broken relationship" to "developmental work" itself reduces the anxiety that makes conflicts harder. Most adolescent-parent conflict can be navigated with skill-building; patterns that don't shift may benefit from family therapy.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What helps when a family is going through significant difficulty (divorce, illness, etc.)?`,
              options: [
                `Just be strong`,
                `Recognize own feelings as real and needing processing; talk to trusted adult outside the family; release inappropriate responsibilities (parents' emotions, mediating between others); take care of basic things in own control (sleep, food, movement, friends); consider therapy specifically during transition; many kids benefit from professional support during major family difficulty`,
                `Random`,
                `Pretend fine`,
              ],
              correctIndex: 1,
              explanation: `Major family difficulty during adolescence has lasting effects; appropriate support during the transition produces dramatically better long-term outcomes than "be strong and keep going." Parentification often emerges during family difficulty as kids try to help; recognizing and releasing inappropriate role-taking matters.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Family loyalty means a kid should never reach out for outside help with family situations.`,
              correctAnswer: false,
              explanation: `False. Family loyalty has appropriate places, but isn't appropriately weaponized to prevent kids from getting help they need. Children aren't required to protect adult harm. Reaching out for help with family situations isn't betrayal; it's appropriate response to situations that need outside support. Many family patterns improve when professional help becomes involved.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "My parents fight all the time. I just try to keep things calm by making everyone happy. I'm okay though." Based on this lesson, what should you point out?`,
              options: [
                `"Good job"`,
                `"What you're describing sounds like parentification: taking on adult responsibilities (managing parents' emotional climate, trying to keep things calm) that aren't yours to manage. Family systems theory (Bowen and others) has documented this pattern; it looks like maturity and helpfulness but produces real costs: long-term depression and anxiety risk, suppression of your own feelings, current exhaustion that may not show up immediately but accumulates. 'I'm okay' might be true in the surface sense but worth checking against actual indicators: how's your sleep, mood, ability to identify what you actually feel and want? Specific things that might help. First, recognize that managing your parents' fights isn't your job and you're not failing if their relationship is hard. Second, talk to a trusted adult outside the family (school counselor especially) about what you're navigating. Third, develop areas of your life that are yours: friendships, interests, time away from the family conflict. Fourth, if their fighting escalates to anything physical, emotional abuse, or unsafe situations, that's beyond ordinary family difficulty and warrants outside intervention: school counselor, trusted adult, Childhelp Hotline at 1-800-422-4453 if needed. The 'I'm okay' framing is part of what parentification produces; the kid suppresses their own experience to support the family. Your experience matters; checking in with someone outside the family is appropriate."`,
                `"Random advice"`,
                `"More peace"`,
              ],
              correctIndex: 1,
              explanation: `Real applied family literacy. Name the pattern (parentification). Don't accept "I'm okay" reflexively when the situation suggests otherwise. Provide specific frameworks and interventions. Include escalation path for safety. Address the "I'm okay" framing directly because it's part of how parentification maintains itself.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for family relationships? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which patterns from this lesson recognize themselves in your own family? Authoritative vs authoritarian? Triangulation? Parentification? Helicopter parenting?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who navigates family relationships with sophistication across decades, what does that change about your wellbeing at 30, 50, 80?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific family relationship dynamic you're navigating. Apply the frameworks. What's developmentally normal? What style/system patterns are operating? What might help?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Family systems theory can be misused to make everyone equally responsible for problems. When does the framework illuminate vs obscure individual responsibility for harm?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Have one specific conversation with a parent about something developmental that's currently a source of conflict. Use the de-escalation skills. Note what happens.` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Family patterns at 12 shape adult family relationships across decades. Two paths.`,
          familyActivity: {
            title: `The Family Relationship Conversation`,
            duration: `60 minutes`,
            description: `Share the developmental framework, parenting styles, family systems concepts. Many parents have absorbed parenting patterns from their own families without examining them; the conversation often surfaces specific dynamics worth changing. Consider establishing family practices: explicit acknowledgment of adolescent autonomy development as normal, discussion of expectations rather than just imposition, regular family check-ins about how the relationships are going. Some families benefit from formal family therapy; this isn't a sign of failure but a sophisticated intervention.`,
          },
          projectOption: {
            title: `Read on family relationships and adolescent development, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Lisa Damour's "Untangled" (adolescent development for parents, but useful for adolescents too) or "Under Pressure," Dan Siegel's "Brainstorm" (adolescent brain and family relationships), or selected family systems literature. Apply concepts during reading. Write 1,500 words on what you learned about family and yourself.`,
            offerToParent: `Parent: opt your kid into this project. Reading about adolescent development together (kid + parent) is one of the most effective interventions for family conflict during this period.`,
          },
          identityQuestion: `If you become someone with sophisticated family relationship navigation (distinguishing developmental normal from concerning patterns, recognizing parenting styles and family systems, knowing when to seek outside help), what does that change about your family relationships across decades?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can recognize family systems patterns in their own family.`,
            `A person who knows when family situations warrant outside help.`,
            `Someone who navigates adolescent-parent conflict with skill, not just reaction.`,
          ],
          saveKey: `identity_responses_lw_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleventh Life Wellness lesson done. You now know adolescent development dynamics, Baumrind's parenting styles (authoritative/authoritarian/permissive/neglectful), family systems theory (Bowen, triangulation, parentification, scapegoating, enmeshment, disengagement), and when family situations warrant outside help. That's framework most adults navigating family relationships have never explicitly built. Last lesson before this band's halfway mark goes to time and energy management. Matching Game format, first one in this band. Let's go. — Terra`,
          badge: `family-literate`,
          badgeName: `Family Literate`,
          xpEarned: 75,
          competencies: [
            `Knows adolescent development dynamics affecting family relationships`,
            `Distinguishes Baumrind's parenting styles and their outcomes`,
            `Recognizes family systems patterns (triangulation, parentification, scapegoating, enmeshment, disengagement)`,
            `Identifies when family situations warrant outside help (resources: school counselor, Childhelp Hotline, etc.)`,
            `Applies integrated framework (development + style + systems + safety) to specific situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Time and Energy Management`,
            hook: `Energy management beats time management. Matching Game (5 concept-to-application pairs).`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L11 ${VERSION}] "${l.title}" mags=${mags} cases=${caseStudy?.cases?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
