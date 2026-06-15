// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L03 — Power and Its Uses Throughout History
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Theories of Power Across History and Cultures
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: PERSPECTIVES (5 theorist/tradition voices on what power is)
//
// NOTE: First use of Perspectives screen in the History band per Lyra spec
// requirement ("Perspectives screen used heavily — most historical events have
// multiple defensible narratives"). Data shape assumes the Perspectives.jsx
// component supports: perspectives[] with voice/era/stance/quote/argument/evidence;
// synthesisPrompt; reflectionPrompt. Claude Code may need to verify renderer
// handles these fields before push.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l03-v1";

const HISTORY_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-03`,
      title: `Power and Its Uses Throughout History`,
      duration: 35,
      xpReward: 75,
      badge: `power-literate`,
      badgeName: `Power Literate`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, power is the central question of history. Who has it, how they got it, how they keep it, and how it gets taken away — these questions run underneath every event in this band. Five serious traditions exist for thinking about what power actually is. This lesson maps the terrain before we start using it.`,
          headline: `Power and Its Uses Throughout History`,
          subtitle: `Five voices on what power is. Foundation for reading every historical event in this band.`,
          visual: `/voyager-assets/history/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Power Is The Question`,
          paragraphs: [
            `History is largely the study of power: who had it, how they got it, what they did with it, who lost it, and what changed when it shifted. Even histories that aren't explicitly about politics (histories of art, science, religion, family, economics) turn out to involve power once you look closely. Why did this art form get patronized while that one didn't? Why did this scientific question get funded while that one stayed marginal? Why did this religion spread while that one shrank? Power threads through everything.`,
            `But "power" is doing a lot of work in those sentences. The same word covers a kingdom's army, a parent's influence over a child, a corporation's market position, an idea's grip on what seems normal, a person's capacity to live according to their own values. These aren't obviously the same thing. Different traditions have argued that some of these aren't really "power" at all, and that others are power even though they don't look like it. The disagreement isn't pedantic; it changes what you see when you look at history.`,
            `Three big questions across the traditions. First: what is power, is it capacity to act, capacity to make others do what you want, legitimacy, knowledge, relationship, or something else? Second: where does power come from, is it guns and gold, social agreement, charisma, expertise, language, institutional structure? Third: what's the relationship between power and violence: are they the same, opposites, or somehow different?`,
            `For this lesson and the whole band. We'll work through specific uses of power across history: economic systems, political ideologies, revolutions, imperialism, genocide, the Cold War, civil rights, indigenous resistance, women's history. Each lesson assumes you bring some framework for thinking about what power actually is. Today's job is building that framework by listening to five voices that disagree.`,
            `One framing before we listen. The five voices aren't five wrong answers and one right one. They're five serious traditions, each picking up on something real about power that the others underweight. Reading them together gives you fuller view than any single one provides. The lesson doesn't force commitment to one (unlike the argument-builder format you'll see in some lessons) because the question is genuinely open and your view should develop across decades, not get locked in at 12.`,
            `One last framing. These voices are dead, with the exception of contemporary articulators of Ubuntu traditions. But their analyses describe power that's still operating in your life right now: the politics of your country, the dynamics of your school, the structure of platforms you use, the relationships in your family. The names sound abstract; the analysis is immediately practical.`,
          ],
          image: `/voyager-assets/history/l03-s1-power.webp`,
          imageCaption: `Power threads through everything. Same word covers armies, parents, corporations, ideas, capacities. Five serious traditions disagree on what it is and where it comes from. Reading them together builds fuller framework than any one alone.`,
          vocab: [
            {
              word: `historical question`,
              definition: `History is largely the study of power: who had it, how they got it, what they did with it, who lost it, what changed when it shifted. Even histories of art, science, religion, family, economics turn out to involve power on examination. Three big disagreements across traditions: what is power (capacity, legitimacy, knowledge, relationship?); where does it come from (resources, agreement, charisma, expertise, language, structure?); what's its relationship to violence (same, opposite, different?). Five traditions covered in this lesson each pick up on something real the others underweight. Mature view develops across decades; not locked at 12.`,
              audioPrompt: `Power is the foundational question for history, {name}. History is largely the study of power: who had it, how they got it, what they did with it, who lost it, and what changed when it shifted. Even histories that aren't explicitly about politics (histories of art, science, religion, family, economics) turn out to involve power once you look closely. The same word covers a kingdom's army, a parent's influence over a child, a corporation's market position, an idea's grip on what seems normal, a person's capacity to live according to their own values. These aren't obviously the same thing. Different traditions have argued that some of these aren't really power at all, and that others are power even though they don't look like it. Three big questions across the traditions. First: what is power, is it capacity to act, capacity to make others do what you want, legitimacy, knowledge, relationship, or something else? Second: where does power come from, is it guns and gold, social agreement, charisma, expertise, language, institutional structure? Third: what's the relationship between power and violence: are they the same, opposites, or somehow different?`,
            },
            {
              word: `power and violence`,
              definition: `The relationship between power and violence is one of the three central disagreements across traditions of power theory. Hannah Arendt argued they are opposites; other traditions treat them as continuous or identical.`,
              audioPrompt: `The relationship between power and violence is one of the three big questions that divide serious traditions of power theory, {name}. The same word "power" covers a kingdom's army deploying force and a person's capacity to live according to their own values; these aren't obviously the same thing. Some traditions treat power and violence as essentially the same: coercive capacity is what power is, and military force is its clearest expression. Others draw a sharp distinction. Hannah Arendt, who fled Nazi Germany and later wrote from the United States, argued that power and violence are opposites, not the same. Power is what happens when people act in concert; violence is the instrumental capacity to coerce. When a regime resorts to violence, it has already lost power; the violence is a symptom of power's collapse, not its presence. The Velvet Revolution of 1989 in Czechoslovakia is one of her illustrations: people withdrew consent and a seemingly powerful regime crumbled even though it still had armies. Foucault's tradition draws a different distinction: the most effective forms of power operate without any explicit violence because they've been internalized as common sense through everyday practices in schools, hospitals, workplaces, and families. Understanding these disagreements about the relationship between power and violence changes how you read every historical event that involves force.`,
            },
            {
              word: `five traditions`,
              definition: `The five serious traditions of power theory covered in this lesson: Machiavelli's realist capacity view, Weber's legitimacy view, Arendt's collective action view, Foucault's discourse view, and Ubuntu's relational view. Each picks up on something real that the others underweight.`,
              audioPrompt: `Five traditions on power are presented in this lesson, {name}, and the point is not to pick one as right but to understand what each sees that the others miss. The same word "power" operates differently in each tradition. Machiavelli's realist tradition, grounded in practical observation of how rulers actually behave, treats power as capacity: measurable in resources, exercised by specific actors, operating in zero-sum competition. Max Weber's tradition treats power as legitimacy: the recognized right to command, which he distinguished in three types (traditional, charismatic, rational-legal). Hannah Arendt's tradition treats power as collective action: what emerges when humans coordinate, the opposite of violence. Michel Foucault's tradition treats power as dispersed knowledge and discourse embedded in everyday practices, not concentrated in obvious actors. And the Ubuntu philosophical tradition from southern Africa treats power as relational: emerging from being in right relationship with others, not as individual capacity or competitive resource. These five aren't five wrong answers with one right one waiting to be chosen. They're five serious frameworks, each built from careful observation and developed across considerable intellectual tradition. Reading them together gives fuller view than any single one provides, and that fuller view is the foundation for thinking about power that every lesson in this band will require.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Power As Capacity (Realist Tradition)`,
          paragraphs: [
            `The first major tradition treats power as capacity: specifically, the practical capacity to make things happen, hold what you have, and project influence over others. On this view, power is fundamentally about what you can do. A state has power when it can deploy military force, control territory, extract resources, and shape outcomes. A person has power when they can act effectively in the world.`,
            `Niccolò Machiavelli (1469-1527) is the most famous defender of this view. Writing "The Prince" in Florence in 1513, Machiavelli analyzed power as a practical art: how rulers acquire power, hold it, lose it, and recover it. He scandalized his contemporaries (and many readers since) by writing about politics without moralizing: describing what successful rulers actually did rather than what virtuous rulers should do. The view became one foundation of what's now called political realism.`,
            `Specific commitments of the capacity view. Power is exercised by specific actors (states, leaders, organizations). Power is measurable in resources (military, economic, technological, demographic). Power operates in competition between actors; one's gain is often another's loss. The international system is anarchic (there's no higher authority above states), so states pursue power for survival. Joseph Nye's later refinement (1990s) distinguished "hard power" (military and economic coercion) from "soft power" (cultural attraction, persuasion, agenda-setting); both are still forms of capacity.`,
            `What this tradition explains well. Why states build militaries, accumulate resources, form alliances, and sometimes go to war. Why corporations seek market dominance, why empires expand, why arms races happen, why deterrence works (or fails). Most of what we call "international relations" and "geopolitics" operates with implicit realist assumptions.`,
            `What this tradition can miss. Power that doesn't look like capacity (moral authority, legitimacy, ideas, the ability to make certain options unthinkable. Why some powerful actors fail despite having capacity. How power gets created in the first place rather than just used. The realist view tends to take actors as given (states, corporations, leaders) without asking how those actors came to exist and to be considered the relevant units.`,
          ],
          image: `/voyager-assets/history/l03-s2-capacity.webp`,
          imageCaption: `Power as capacity. Machiavelli "The Prince" (1513). Realist tradition: military, economic, technological, demographic resources. Nye's hard/soft power. Explains states and alliances; can miss legitimacy, ideas, how actors get created.`,
          vocab: [
            {
              word: `power as capacity`,
              definition: `Power as practical capacity to make things happen, hold what you have, project influence over others. Niccolò Machiavelli "The Prince" 1513 (Florence) analyzed power as practical art without moralizing; foundation of political realism. Commitments: power exercised by specific actors (states, leaders, organizations); measurable in resources (military, economic, technological, demographic); zero-sum competition; international system anarchic. Joseph Nye 1990s refinement: hard power (military/economic coercion) vs soft power (cultural attraction, persuasion). Explains states, militaries, alliances, market dominance. Can miss: legitimacy, ideas, moral authority, how actors get created in the first place.`,
              audioPrompt: `Power as capacity is the first major tradition, {name}. The view treats power as practical capacity to make things happen, hold what you have, and project influence over others. Niccolò Machiavelli, who lived from 1469 to 1527, is the most famous defender of this view. Writing "The Prince" in Florence in 1513, Machiavelli analyzed power as a practical art: how rulers acquire power, hold it, lose it, and recover it. He scandalized his contemporaries by writing about politics without moralizing: describing what successful rulers actually did rather than what virtuous rulers should do. Power is exercised by specific actors: states, leaders, organizations. Power is measurable in resources: military, economic, technological, demographic. Power operates in competition between actors; one's gain is often another's loss. The international system is anarchic (there's no higher authority above states), so states pursue power for survival. Joseph Nye's later refinement in the 1990s distinguished hard power, which is military and economic coercion, from soft power, which is cultural attraction, persuasion, and agenda-setting.`,
            },
            {
              word: `political realism`,
              definition: `The tradition in political theory and international relations, grounded in Machiavelli, that analyzes power as practical capacity exercised by competing actors in an anarchic system where states pursue power for survival.`,
              audioPrompt: `Political realism is the tradition that Machiavelli's work founded and that has shaped most thinking about international relations, {name}. The central commitment is treating power as a practical capacity to be analyzed without moralizing: what successful actors actually do rather than what virtuous actors should do. Politics is a practical art, like medicine or architecture; it requires technical skill, not just good intentions. The international system is anarchic, meaning there is no higher authority above states; states therefore pursue power for survival, because without capacity they cannot guarantee their own continued existence. What counts as power in this tradition is measurable in resources: military force, economic strength, technological capacity, demographic weight. Modern political realism (Hans Morgenthau, Henry Kissinger, John Mearsheimer) builds directly on foundations Machiavelli laid. Joseph Nye's 1990s refinement distinguished hard power, which is military and economic coercion, from soft power, which is cultural attraction, persuasion, and agenda-setting. Both are still forms of capacity in the realist view. What the realist tradition explains well: why states build militaries, accumulate resources, form alliances, and sometimes go to war; why corporations seek market dominance; why arms races happen; why deterrence works or fails. What it can miss: power that doesn't look like capacity, including moral authority, legitimacy, and the ability to make certain options seem unthinkable.`,
            },
            {
              word: `soft power`,
              definition: `Joseph Nye's 1990s concept distinguishing cultural attraction, persuasion, and agenda-setting from hard power (military and economic coercion). Both are forms of capacity in the realist tradition but operate through different mechanisms.`,
              audioPrompt: `Soft power is Joseph Nye's 1990s refinement of the realist tradition that distinguished two mechanisms of power-as-capacity, {name}. Hard power is the straightforward form: military force and economic coercion that compels others to do what you want by threatening or imposing costs. Soft power is the subtler form: cultural attraction, persuasion, and agenda-setting that makes others want what you want, or at least accept it, without explicit coercion. A country with compelling cultural products, a model of governance others want to emulate, and the capacity to set the terms of international discussions exercises soft power. Both are still forms of capacity in the realist tradition; the distinction is about mechanism, not about whether power is being exercised. This refinement matters for reading history because much of what states, empires, and corporations do involves soft power: spreading cultural products, building educational institutions, promoting languages, framing international standards. The British Empire's soft power, including the spread of English language and educational institutions, outlasted British hard power by decades. The United States has exercised substantial soft power through cultural exports, universities, international institutions, and the global spread of its models of business and governance. Understanding that soft power is still power, and that its mechanisms differ from hard power, gives you a more complete picture of how the realist tradition actually analyzes international relations than the simple equation of power with military force.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Power As Legitimacy (Weber)`,
          paragraphs: [
            `The second major tradition treats power as legitimacy: the recognized right to command. On this view, raw capacity isn't yet power in the deepest sense; it becomes power when it's accepted as authoritative. A regime with overwhelming military force but no legitimacy has to constantly suppress dissent and never feels secure. A regime with broad legitimacy can govern with much less coercion because people generally comply without being forced.`,
            `Max Weber (1864-1920) is the foundational thinker for this view. Writing in Germany in the early 20th century, Weber distinguished three sources of legitimate authority: traditional (inherited custom: kings, hereditary nobility, traditional religious leaders), charismatic (extraordinary personal qualities: prophets, revolutionary leaders, founding figures), and rational-legal (impersonal rules and procedures: bureaucracies, constitutions, modern states). Each produces a different kind of stable rule; each has different vulnerabilities.`,
            `Specific commitments of the legitimacy view. Power isn't just about what actors can do but about why those actions are accepted. Different legitimation strategies produce different political forms: traditional authority sustains monarchies; charismatic authority produces movements but is hard to institutionalize; rational-legal authority produces modern bureaucratic states. When legitimacy collapses, even powerful regimes fall (the Shah of Iran in 1979, the Soviet Union in 1991, multiple Arab Spring governments in 2011). When legitimacy is strong, even weak states can sometimes survive shocks (some democracies through deep crises).`,
            `What this tradition explains well. Why regimes that look powerful suddenly fall when legitimacy evaporates. Why revolutions succeed (and what they have to do to consolidate). Why modern bureaucratic states work the way they do. Why charismatic leaders have outsized political effects. The transition from traditional to rational-legal authority that defines modernity in many societies.`,
            `What this tradition can miss. Power that operates below the level of explicit legitimation: economic structures, social norms, cultural patterns that don't require justification because they seem natural. The way legitimacy itself gets constructed (often by powerful actors shaping what counts as legitimate). Power exercised across borders where shared legitimation frames don't exist.`,
          ],
          image: `/voyager-assets/history/l03-s3-legitimacy.webp`,
          imageCaption: `Power as legitimacy. Max Weber (1864-1920). Three types of legitimate authority: traditional (custom), charismatic (personal qualities), rational-legal (rules/procedures). Explains regime collapse and modern states; can miss power below explicit legitimation.`,
          vocab: [
            {
              word: `power as legitimacy`,
              definition: `Power as recognized right to command; raw capacity becomes power when accepted as authoritative. Max Weber (1864-1920), early 20th-century Germany, distinguished three sources of legitimate authority. Traditional: inherited custom (kings, hereditary nobility, religious leaders). Charismatic: extraordinary personal qualities (prophets, revolutionary leaders, founding figures). Rational-legal: impersonal rules and procedures (bureaucracies, constitutions, modern states). Each produces different stable rule with different vulnerabilities. Explains regime collapse when legitimacy evaporates (Shah of Iran 1979, Soviet Union 1991, Arab Spring 2011), why charismatic leaders have outsized effects, modern bureaucratic states. Can miss: power below explicit legitimation, how legitimacy itself gets constructed.`,
              audioPrompt: `Power as legitimacy is the second major tradition, {name}. The view treats power as the recognized right to command. Raw capacity isn't yet power in the deepest sense; it becomes power when it's accepted as authoritative. Max Weber, who lived from 1864 to 1920, is the foundational thinker for this view. Writing in Germany in the early 20th century, Weber distinguished three sources of legitimate authority. Traditional authority comes from inherited custom: kings, hereditary nobility, traditional religious leaders. Charismatic authority comes from extraordinary personal qualities: prophets, revolutionary leaders, founding figures. Rational-legal authority comes from impersonal rules and procedures: bureaucracies, constitutions, modern states. Each produces a different kind of stable rule; each has different vulnerabilities. When legitimacy collapses, even powerful regimes fall: the Shah of Iran in 1979, the Soviet Union in 1991, multiple Arab Spring governments in 2011. When legitimacy is strong, even weak states can sometimes survive shocks.`,
            },
            {
              word: `charismatic authority`,
              definition: `Max Weber's second type of legitimate authority: power derived from the extraordinary personal qualities of a leader (prophet, revolutionary, founding figure). Produces powerful movements but is notoriously difficult to institutionalize and sustain across generations.`,
              audioPrompt: `Charismatic authority is Max Weber's second type of legitimate authority, {name}, and it is the most dramatic and the hardest to sustain. Where traditional authority is inherited from custom and rational-legal authority rests on impersonal rules and procedures, charismatic authority rests entirely on the extraordinary personal qualities of a specific individual: the prophet whose teachings are believed to come from divine authority, the revolutionary leader whose vision and courage create a movement, the founding figure whose personal presence makes people believe the impossible is achievable. Charismatic authority produces political effects that other types cannot. Movements built around charismatic leaders can mobilize people who would never respond to traditional hierarchy or bureaucratic procedure. Weber analyzed how early Christianity, Islam, and various revolutionary movements gained their initial power through charismatic figures rather than through institutional backing. The characteristic vulnerability of charismatic authority is that it cannot be inherited, only imitated. When the charismatic figure dies, the movement faces what Weber called the "routinization of charisma": the attempt to translate personal authority into institutional form, either traditional (the founding family maintains authority) or rational-legal (the movement becomes a church, a party, a state with rules and procedures). This transition is dangerous; many movements disintegrate when the charismatic founder is gone. Weber's examples of charismatic authority include religious prophets, revolutionary leaders, and founding political figures; examples throughout history range from religious founders to 20th-century revolutionary leaders.`,
            },
            {
              word: `rational-legal authority`,
              definition: `Max Weber's third type of legitimate authority: power resting on impersonal rules and procedures (bureaucracies, constitutions, modern states). The dominant form in modern states; stable because it doesn't depend on any particular person.`,
              audioPrompt: `Rational-legal authority is Max Weber's third type of legitimate authority and the dominant form in modern states, {name}. Where traditional authority rests on inherited custom and charismatic authority rests on personal qualities, rational-legal authority rests on impersonal rules and procedures. People obey because the rules require it, not because they personally respect the ruler or because custom demands it. The bureaucrat has authority because of their position in the legal-administrative structure, not because of who they are as a person. This impersonal quality is both rational-legal authority's greatest strength and its greatest limitation. The strength: it's stable because it doesn't depend on any particular person. Modern states governed by constitutions and laws can survive the death or removal of leaders, the loss of individual bureaucrats, even severe crises, as long as the legitimacy of the overall framework is intact. The limitation: it can feel cold and alienating because the person in authority doesn't matter except as an occupant of a role. Weber saw rational-legal authority as characteristic of modernity and as part of a broader process he called rationalization: the progressive replacement of traditional and magical thinking with systematic rule-following. When legitimacy collapses under a rational-legal regime, the usual result is either a demand for charismatic authority (someone who can restore belief through personal force) or a shift to traditional forms; examples include the Shah of Iran in 1979, the Soviet Union in 1991, and multiple Arab Spring governments in 2011.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Power As Collective Action (Arendt) And Power As Discourse (Foucault)`,
          paragraphs: [
            `Two 20th-century European thinkers developed radically different views of power that are worth considering together because they each challenge the capacity and legitimacy traditions from different angles.`,
            `Hannah Arendt (1906-1975), a Jewish philosopher who fled Nazi Germany and later wrote from the United States, argued that power and violence are opposites, not the same. Power, for Arendt, is what happens when people act together in concert: the capacity that emerges when humans coordinate. Violence, by contrast, is the instrumental capacity to coerce: it requires implements (weapons, force) and is exercised by some over others. When power (collective action) breaks down, regimes resort to violence to maintain control; the more violence a regime uses, the less actual power it has. The Hungarian Revolution of 1956, the Velvet Revolution of 1989, and many other moments illustrate her point: people withdraw consent and the regime crumbles even though it still has armies. Power, in Arendt's sense, is rare and precious; violence is common and corrosive.`,
            `Michel Foucault (1926-1984), writing in France in the 1960s and 1970s ("Discipline and Punish" 1975, "The History of Sexuality" 1976), argued that power is fundamentally about knowledge and discourse (what's sayable, knowable, considered normal) embedded in everyday practices. Power isn't primarily held by states or rulers; it operates through everyday institutions (schools, hospitals, prisons, families, workplaces) that shape what people consider normal, healthy, sane, productive, deviant. The most pervasive forms of power don't need to be enforced by violence because they've been internalized as common sense. The "panopticon" (Jeremy Bentham's prison design where prisoners can be observed at any time but never know when) became Foucault's metaphor for modern power: surveillance internalized as self-discipline.`,
            `Specific commitments of these views. For Arendt: power and violence are distinct; power requires consent; collective action is the foundation of authentic power; regimes that rely on violence have already lost power. For Foucault: power is dispersed through everyday practices, not concentrated in obvious actors; knowledge and power are inseparable; the most effective power doesn't look like power because it's been normalized.`,
            `What these views explain well. Arendt: why nonviolent resistance sometimes topples seemingly powerful regimes, why occupations fail even when occupiers have superior force, why moral and political legitimacy matter. Foucault: how social norms shape behavior without coercion, why some categories (mental illness, criminality, sexuality) get policed without explicit policing, how schools and workplaces produce specific kinds of people, why dominant ideas seem natural until they're questioned.`,
            `What these views can miss. Arendt: power that operates without consent (slavery, colonization, much economic power); can underweight material capacity. Foucault: agency and resistance (his framework can make change seem impossible); can flatten different forms of power into one dispersed analytic. Both are best as supplements to the realist and Weberian traditions, not as replacements.`,
          ],
          image: `/voyager-assets/history/l03-s4-arendt-foucault.webp`,
          imageCaption: `Power as collective action (Arendt) vs power as discourse (Foucault). Two 20th-century European challenges to capacity/legitimacy traditions. Arendt: power and violence are opposites; consent is foundation. Foucault: power is dispersed through everyday practices.`,
          vocab: [
            {
              word: `discourse foucault`,
              definition: `Two 20th-century European views. Hannah Arendt (1906-1975), Jewish refugee from Nazi Germany: power is what emerges when humans coordinate; violence is opposite (instrumental coercion); the more violence a regime uses, the less actual power it has. Illustrated by Hungarian Revolution 1956, Velvet Revolution 1989, nonviolent movements. Michel Foucault (1926-1984), France: power is knowledge/discourse embedded in everyday practices (schools, hospitals, prisons, families, workplaces); dispersed not concentrated; most effective power doesn't look like power because internalized as common sense. Panopticon metaphor (Bentham): surveillance internalized as self-discipline. Arendt explains nonviolent resistance, occupation failure, legitimacy; Foucault explains normalization, social policing, why dominant ideas seem natural.`,
              audioPrompt: `Two 20th-century European thinkers developed radically different views of power, {name}. Hannah Arendt, a Jewish philosopher who fled Nazi Germany and later wrote from the United States, argued that power and violence are opposites, not the same. Power, for Arendt, is what happens when people act together in concert: the capacity that emerges when humans coordinate. Violence, by contrast, is the instrumental capacity to coerce: it requires implements like weapons and force and is exercised by some over others. When power as collective action breaks down, regimes resort to violence to maintain control. The Hungarian Revolution of 1956, the Velvet Revolution of 1989, and many other moments illustrate her point: people withdraw consent and the regime crumbles even though it still has armies. Michel Foucault, writing in France in the 1960s and 1970s, argued that power is fundamentally about knowledge and discourse (what's sayable, knowable, considered normal) embedded in everyday practices. Power isn't primarily held by states or rulers; it operates through everyday institutions like schools, hospitals, prisons, families, and workplaces that shape what people consider normal, healthy, sane, productive, and deviant.`,
            },
            {
              word: `panopticon`,
              definition: `Jeremy Bentham's prison design where prisoners can be observed at any time but never know when they are being watched. Michel Foucault used it as a metaphor for modern power: surveillance internalized as self-discipline without continuous external enforcement.`,
              audioPrompt: `The panopticon is the central metaphor in Foucault's analysis of modern power, {name}. Jeremy Bentham was an 18th-century British philosopher who designed an ideal prison architecture: a circular building with cells along the outer ring and a central observation tower. Guards in the tower could observe any prisoner at any time, but the prisoners could not see into the tower and therefore could never know whether they were being watched at any given moment. The result Bentham intended was that prisoners would behave as if under constant surveillance because they could never be certain they weren't. Foucault in "Discipline and Punish" from 1975 made this architecture a metaphor for how modern power operates. The most effective modern power doesn't require continuous external enforcement; it produces individuals who internalize the norms and police themselves. A school student who would behave well only when the teacher is present hasn't fully absorbed disciplinary power; the student who behaves well whether watched or not has internalized it. The modern workplace, hospital, school, and family all operate on similar principles: routines, evaluations, records, and the possibility of observation shape behavior without requiring continuous coercion. This kind of power doesn't look like power because it operates through individuals' own self-regulation. Foucault's broader claim is that modern societies produce specific kinds of subjects through these dispersed disciplinary mechanisms, and that understanding how they operate requires analysis quite different from the realist or Weberian frameworks.`,
            },
            {
              word: `collective action`,
              definition: `Hannah Arendt's concept of authentic power: the capacity that emerges when humans coordinate and act together. Distinct from violence (instrumental coercion); the more a regime relies on violence, the less genuine collective-action power it has.`,
              audioPrompt: `Collective action is what Hannah Arendt called authentic power, {name}, and her distinction between power and violence is one of the most challenging ideas in 20th-century political theory. Power, for Arendt, is not the capacity to coerce; that is violence, which is something categorically different. Power is what emerges when people act together in concert: the collective capacity that comes from human coordination and shared purpose. Violence requires implements (weapons, force) and is exercised by some over others; it can suppress but it cannot create. When a regime resorts to violence to maintain control, it has already lost power; the violence is evidence of power's disappearance, not its presence. A regime with genuine collective-action power can govern with minimal coercion because people act together in support of shared purposes. When legitimacy evaporates and collective action dissolves, even heavily armed regimes collapse: Arendt illustrates this with the Hungarian Revolution of 1956, when the popular uprising dissolved regime power even though the Soviets eventually restored control through massive force, and the Velvet Revolution of 1989 in Czechoslovakia, when the communist regime crumbled nonviolently as people withdrew participation. The view is that tyrants who shoot crowds are demonstrating weakness, not strength: the need for violence signals that authentic power has already been lost. This framework has been influential for thinking about nonviolent resistance, occupation failures, and why some revolutions succeed even against overwhelming military force.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Power As Relationship: Ubuntu And Non-Western Traditions`,
          paragraphs: [
            `The four traditions covered so far are all European or American in origin. Other major traditions across the world have developed substantially different conceptions of power that deserve their own consideration rather than being treated as footnotes.`,
            `Ubuntu philosophy comes from southern African traditions, particularly Nguni Bantu (Zulu, Xhosa) but with parallels across many Bantu-speaking peoples. The often-translated phrase "umuntu ngumuntu ngabantu" ("a person is a person through other persons") captures the core idea: personhood, and the capacity to act effectively (which is what power is), emerges from relationship rather than existing in individuals separately. Power in this tradition isn't primarily zero-sum competition between separate actors; it's what's generated when humans are in right relationship with each other and with the world. A person who lives Ubuntu (recognizing others, taking responsibility for community, acting with humanity) has a kind of power that purely individual capacity can't produce. Desmond Tutu, Nelson Mandela, and others articulated this tradition publicly during and after South African anti-apartheid struggle; the framework deeply shaped the Truth and Reconciliation Commission.`,
            `Daoist conceptions (from ancient Chinese traditions, particularly the Daodejing attributed to Laozi, around 4th century BCE) developed a distinctive view of power. Water is the metaphor: water yields to obstacles, takes the lowest position, and yet wears down mountains over time. The view holds that effective power often looks like yielding, that hard rigid power often loses to soft persistent power, and that the most effective rulers are nearly invisible (the lowest form being feared, the highest form being barely noticed). Wu wei (often translated as "non-action" but better understood as "effortless action" or "action without forcing") describes the optimal exercise of power.`,
            `Confucian conceptions (Chinese, with extensive influence across East Asia) developed yet another view: power as moral cultivation and ritual practice. The ruler exercises legitimate power not through coercion or even through legitimate authority in Weber's sense but through embodied moral cultivation that influences others without commanding them. The Analects of Confucius (compiled around 400 BCE) describe rule by virtue: when the ruler is virtuous, the people are virtuous, and order emerges without force. This isn't just a moral claim; it's a theory of how power actually works at scale, with extensive influence on Chinese, Korean, Japanese, and Vietnamese political traditions across millennia.`,
            `Indigenous American traditions vary enormously across hundreds of nations but include sophisticated power conceptions worth knowing about. The Haudenosaunee (Iroquois) Confederacy's Great Law of Peace developed a sophisticated theory of distributed authority with checks across nations and clans. Many indigenous traditions emphasize power as obligation to seven generations forward (decisions evaluated by their effect across centuries) rather than as immediate capacity. These traditions are not primitive precursors to "real" political theory; they're sophisticated systems that often handle issues European traditions have struggled with (long-term thinking, balance with non-human life, distributed authority).`,
            `What these traditions offer. Conceptions of power that aren't primarily competitive or zero-sum. Recognition that effective power can look like yielding, relationship, moral cultivation, or obligation across time. Different starting assumptions about what humans are and what makes them act effectively. Encounters with the limits of European-American power conceptions when applied to non-European contexts (e.g., the failures of imperial power projection across many situations).`,
            `One framing before we listen to the five voices. The Perspectives screen ahead presents five voices on power. Engage with each. You don't have to commit to one (this is genuinely too complex for committed answer at 12); you do have to take each seriously enough to recognize what it sees that the others miss.`,
          ],
          image: `/voyager-assets/history/l03-s5-non-western.webp`,
          imageCaption: `Non-Western power traditions: Ubuntu (Nguni Bantu, "umuntu ngumuntu ngabantu"), Daoist (water, wu wei, yielding), Confucian (moral cultivation and rule by virtue), Indigenous American (Haudenosaunee Great Law, seven-generation thinking).`,
          vocab: [
            {
              word: `non-European power traditions`,
              definition: `Major non-European traditions on power. Ubuntu (southern African, particularly Nguni Bantu): "umuntu ngumuntu ngabantu" — a person is a person through other persons; personhood and effective action emerge from relationship; articulated publicly by Desmond Tutu, Nelson Mandela; shaped South African Truth and Reconciliation Commission. Daoist (ancient Chinese, Daodejing attributed to Laozi ~4th c BCE): water metaphor; effective power yields, takes low position, wears down hard rigid power over time; wu wei (effortless action). Confucian (Analects ~400 BCE): power as moral cultivation and ritual; ruler's virtue produces order without force; extensive East Asian influence. Indigenous American (varied across hundreds of nations): Haudenosaunee Great Law of Peace (distributed authority); seven-generation thinking; sophisticated systems often handling issues European traditions have struggled with.`,
              audioPrompt: `Non-European power traditions developed substantially different conceptions, {name}. Ubuntu philosophy comes from southern African traditions, particularly Nguni Bantu peoples like the Zulu and Xhosa. The often-translated phrase "umuntu ngumuntu ngabantu" (a person is a person through other persons) captures the core idea: personhood, and the capacity to act effectively, emerges from relationship rather than existing in individuals separately. Desmond Tutu, Nelson Mandela, and others articulated this tradition during and after the South African anti-apartheid struggle. Daoist conceptions from ancient Chinese traditions, particularly the Daodejing attributed to Laozi around the 4th century BCE, developed a distinctive view. Water is the metaphor: water yields to obstacles, takes the lowest position, and yet wears down mountains over time. Effective power often looks like yielding. Wu wei, often translated as non-action but better understood as effortless action, describes the optimal exercise of power. Confucian conceptions, with extensive East Asian influence, developed power as moral cultivation and ritual practice. The ruler exercises legitimate power not through coercion but through embodied moral cultivation that influences others without commanding them.`,
            },
            {
              word: `Ubuntu`,
              definition: `Southern African philosophical tradition, particularly from Nguni Bantu peoples, holding that personhood and effective action emerge from relationship: "umuntu ngumuntu ngabantu" (a person is a person through other persons). Articulated publicly by Desmond Tutu and Nelson Mandela; shaped the Truth and Reconciliation Commission.`,
              audioPrompt: `Ubuntu is the southern African philosophical tradition that offers one of the most distinctive challenges to European power theory, {name}. The tradition comes particularly from Nguni Bantu peoples including the Zulu and Xhosa, though parallel ideas exist across many Bantu-speaking peoples. The often-translated phrase "umuntu ngumuntu ngabantu" captures the core idea: a person is a person through other persons. Personhood itself, and therefore the capacity to act effectively which is what power is, emerges from relationship rather than existing in individuals separately. European traditions, whether realist, Weberian, Arendtian, or Foucauldian, begin from the assumption of separate individuals who then coordinate or compete. Ubuntu begins from a different premise: without others, there is no fully human person. Power in this framework isn't primarily zero-sum competition between separate actors; it is what's generated when humans are in right relationship with each other and with the world. A person who lives Ubuntu, recognizing others, taking responsibility for community, acting with humanity, has access to a kind of power that purely individual capacity cannot produce. This isn't a soft or sentimental view. Desmond Tutu and Nelson Mandela articulated this tradition publicly during and after the South African anti-apartheid struggle, and the Ubuntu framework deeply shaped the Truth and Reconciliation Commission, which built a different approach to transitional justice than the punitive models common elsewhere. The commission's process of acknowledgment, testimony, and conditional amnesty drew directly on Ubuntu's relational conception of what makes justice and healing possible.`,
            },
            {
              word: `wu wei`,
              definition: `Daoist concept often translated as "non-action" but better understood as effortless or non-forcing action. The optimal exercise of power in the Daoist tradition: yielding like water, which takes the lowest position yet wears down mountains over time.`,
              audioPrompt: `Wu wei is the Daoist concept that captures a distinctive view of how effective power operates, {name}. The term is often translated as non-action but that translation is misleading; better translations include effortless action or action without forcing. The Daodejing, attributed to Laozi and compiled around the 4th century BCE, uses water as the central metaphor. Water yields to obstacles; it takes the lowest position; it flows around what blocks it rather than confronting obstacles directly. Yet water wears down mountains over time. Hard rigid power often loses to soft persistent power. The most effective rulers are nearly invisible: the lowest form of rule is feared, a higher form is loved, and the highest form is barely noticed, because governance aligned with the natural order requires so little forcing. Wu wei describes this optimal exercise of power. It doesn't mean doing nothing; it means acting without unnecessary force, following the grain of things rather than working against it, achieving results through alignment rather than through coercion. This framework has been influential in Chinese political thought for over two millennia, and it produces political prescriptions substantially different from both the realist (accumulate capacity and use it) and Weberian (legitimate your authority) traditions. What it explains well: why hard-edged coercive power often produces resistance and instability while flexible persistent approaches achieve durable results; the Daoist tradition developed this insight through observation of political patterns across many centuries of Chinese history.`,
            },
          ],
        },

        // ───── PERSPECTIVES SCREEN ─────────────────────────────────────────────
        // First use in History band. Multi-voice debate without forced commitment.
        // Data shape assumes Perspectives.jsx supports: voice/era/stance/quote/argument/evidence.
        {
          id: `l03-perspectives`,
          type: `perspectives`,
          headline: `Five Voices On Power`,
          intro: `{name}, five voices speak on what power is. Engage with each. Note what they see, what they emphasize, what they miss. You're not forced to commit to one; you're forced to take each seriously enough to see what it gets right that the others underweight.`,
          perspectives: [
            {
              id: `machiavelli`,
              voice: `Niccolò Machiavelli`,
              era: `Florence, 1513`,
              stance: `Power is the practical capacity to acquire, hold, and project influence`,
              quote: `A prince who wants to maintain power must be willing to act against virtue when circumstance demands.`,
              argument: `Power is what actors actually do, not what they should do. A ruler with virtue but no capacity loses to a ruler with capacity but no virtue. Look at how successful rulers have actually behaved; the patterns reveal what power is. The moralizing of philosophers about how rulers ought to act misses what power is in practice. Politics is a practical art, like medicine or architecture; it requires technical skill, not just good intentions.`,
              evidence: `Cesare Borgia consolidating power in Romagna; the recurring failures of moralistic rulers; the international system's anarchic structure where states pursue capacity for survival; modern political realism (Hans Morgenthau, Henry Kissinger, John Mearsheimer) building on these foundations.`,
              strengths_and_limits: `Strengths: explains states, militaries, alliances, geopolitics; describes power as it actually operates rather than as it should. Limits: tends to take actors as given without asking how they came to exist; can miss legitimacy and moral authority as real forms of power; treats power as zero-sum competition between actors when sometimes it isn't.`,
            },
            {
              id: `weber`,
              voice: `Max Weber`,
              era: `Germany, early 20th century`,
              stance: `Power is the recognized right to command: legitimate authority in one of three forms`,
              quote: `Domination is the probability that a command will be obeyed. Whether it will be obeyed depends on the grounds on which authority is claimed and accepted.`,
              argument: `Raw capacity isn't yet power in the deepest sense. Power becomes stable when it's accepted as authoritative: when those who obey believe they should obey. Three sources of legitimate authority produce different kinds of stable rule: traditional (inherited custom), charismatic (extraordinary personal qualities), rational-legal (impersonal rules and procedures). When legitimacy collapses, even powerful regimes fall; when it's strong, even weak ones can survive shocks.`,
              evidence: `The fall of the Shah of Iran in 1979 despite overwhelming military force; the Soviet collapse in 1991 with intact armies; multiple Arab Spring governments falling in 2011 when legitimacy evaporated; the persistence of democratic governments through severe crises when legitimacy is strong; modern bureaucratic states operating on rational-legal authority across centuries.`,
              strengths_and_limits: `Strengths: explains why seemingly powerful regimes suddenly fall, why charismatic leaders have outsized effects, the structure of modern bureaucratic rule. Limits: can miss power that operates below explicit legitimation (economic structures, social norms, cultural patterns); can underweight how legitimacy itself gets constructed; assumes the relevant unit is the state.`,
            },
            {
              id: `arendt`,
              voice: `Hannah Arendt`,
              era: `United States, mid-20th century (after fleeing Nazi Germany)`,
              stance: `Power and violence are opposites; power is what emerges when humans act together`,
              quote: `Power and violence are opposites; where one rules absolutely, the other is absent. Violence appears where power is in jeopardy, but left to its own course it ends in power's disappearance.`,
              argument: `Power isn't capacity to coerce; that's violence, which is something different. Power is what emerges when people act in concert: the collective capacity that comes from human coordination. Regimes that rely on violence have already lost power; the violence is a symptom of power's disappearance, not its presence. Nonviolent movements topple seemingly invincible regimes because power lies with the people who can withdraw consent. Tyrants who shoot crowds are demonstrating weakness, not strength.`,
              evidence: `The Hungarian Revolution of 1956 (regime power evaporated as people coordinated, even though the Soviets eventually restored control through massive violence); the Velvet Revolution of 1989 in Czechoslovakia (nonviolent toppling of communist regime); the U.S. civil rights movement; many anti-colonial nonviolent campaigns; Arendt's own analysis of totalitarianism showing that maximum violence accompanies maximum loss of authentic power.`,
              strengths_and_limits: `Strengths: explains nonviolent revolutionary success, why occupations fail, why moral authority matters as a political force, why consent is foundational. Limits: can underweight power that operates without consent (slavery, colonization, much economic power); the sharp distinction between power and violence is contested by historians who see them as continuous; the framework can romanticize collective action.`,
            },
            {
              id: `foucault`,
              voice: `Michel Foucault`,
              era: `France, 1960s-1970s`,
              stance: `Power is knowledge and discourse, dispersed through everyday practices`,
              quote: `Power is not something acquired, seized, or shared; it is exercised from innumerable points, in the interplay of nonegalitarian and mobile relations. Where there is power, there is resistance.`,
              argument: `Power isn't primarily held by states or rulers. It operates through everyday institutions (schools, hospitals, prisons, families, workplaces) that shape what people consider normal, healthy, sane, productive, deviant. The most pervasive forms of power don't need violence because they've been internalized as common sense. Knowledge and power are inseparable: what we count as truth, what we consider rational, what we accept as evidence: these are themselves effects of power. The panopticon (Jeremy Bentham's prison design where prisoners can be observed at any time but never know when) is the metaphor for modern power: surveillance internalized as self-discipline.`,
              evidence: `The rise of modern psychiatry pathologizing categories of behavior that were previously not considered illness; the development of modern prisons producing specific kinds of subjects through discipline; the medicalization of sexuality and the resulting categories ("homosexual," "normal"); the way schools and workplaces produce specific kinds of people through everyday routines that nobody experiences as coercion.`,
              strengths_and_limits: `Strengths: explains how social norms shape behavior without obvious coercion, why some categories get policed without explicit policing, how schools and workplaces produce specific kinds of people, why dominant ideas seem natural. Limits: can make change seem impossible (if power is everywhere, where does resistance come from?); can flatten different forms of power into one dispersed analytic; less useful for analyzing concentrated power (states, militaries, corporations) than the realist tradition.`,
            },
            {
              id: `ubuntu`,
              voice: `Ubuntu philosophical tradition`,
              era: `Southern African traditions (Nguni Bantu and others); articulated publicly by Desmond Tutu, Nelson Mandela, others (late 20th-21st century)`,
              stance: `Power emerges from relationship; "a person is a person through other persons"`,
              quote: `Umuntu ngumuntu ngabantu: a person is a person through other persons. (Zulu/Xhosa proverb central to Ubuntu philosophy)`,
              argument: `The European traditions assume separate individuals competing or coordinating; Ubuntu starts from a different premise. Personhood itself emerges from relationship: without others, there is no fully human person. The capacity to act effectively (which is what power is) likewise emerges from being in right relationship with others and with the world. Power isn't primarily zero-sum competition between separate actors; it's what's generated when humans coordinate humanely. A person who lives Ubuntu (recognizing others, taking responsibility for community, acting with humanity) has access to power that purely individual capacity can't produce. This isn't a soft or sentimental view; it underlies the practical politics of African anti-colonial movements and the South African Truth and Reconciliation Commission.`,
              evidence: `The Truth and Reconciliation Commission in post-apartheid South Africa, which built a different framework for transitional justice than the punitive models common elsewhere; the political philosophies of Nelson Mandela and Desmond Tutu drawing explicitly on Ubuntu; parallel traditions across many non-European societies; the limits of European-American power conceptions when applied to non-European contexts (e.g., failures of imperial power projection in many situations).`,
              strengths_and_limits: `Strengths: takes seriously power that emerges from relationship rather than from individual capacity; provides framework for transitional justice and conflict resolution that punitive frameworks struggle with; challenges the assumption that competitive frameworks are universal. Limits: harder to operationalize for analyzing geopolitics or formal institutions; can be romanticized when divorced from its specific cultural context; doesn't fully account for power that operates without relationship (slavery, occupation, much economic power).`,
            },
          ],
          synthesisPrompt: `After engaging with all five voices: which captures something the others underweight? Which seems most useful for analyzing the specific historical events you'll examine across this band (revolutions, imperialism, genocide, Cold War, civil rights)? You don't have to pick one as right; you do have to be able to say what each contributes.`,
          reflectionPrompt: `These voices disagree about what power is. Across the remaining 17 lessons in this band, which voice will you find hardest to maintain? Which will you find easiest? Why?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is "power" the foundational question for history?`,
              options: [
                `Just because`,
                `History is largely the study of power: who had it, how they got it, what they did with it, who lost it, what changed when it shifted. Even histories of art, science, religion, family, economics turn out to involve power once examined. Three big disagreements across traditions: what is power; where does it come from; what's its relationship to violence. Power threads through everything in history`,
                `Random`,
                `Just politics`,
              ],
              correctIndex: 1,
              explanation: `Recognizing power as the foundational question shifts how you read history. Even content that doesn't look like power-history (art, religion, family) turns out to involve power on examination. The framework you bring to "what is power" shapes what you see in every subsequent lesson.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does Machiavelli's "The Prince" (1513) argue about power?`,
              options: [
                `Just be moral`,
                `Power is practical capacity to acquire, hold, project influence; a practical art like medicine or architecture; describes what successful rulers actually do rather than what virtuous rulers should do; foundation of political realism. Power is exercised by specific actors, measurable in resources (military, economic, technological, demographic), operates in competition where one's gain is often another's loss`,
                `Random`,
                `Just war`,
              ],
              correctIndex: 1,
              explanation: `Machiavelli's foundational contribution was treating power as a practical art that could be analyzed without moralizing. Modern political realism (Morgenthau, Kissinger, Mearsheimer) builds on this foundation. The view explains states, militaries, and geopolitics well.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are Weber's three sources of legitimate authority?`,
              options: [
                `Random three`,
                `Traditional (inherited custom: kings, hereditary nobility, traditional religious leaders); charismatic (extraordinary personal qualities: prophets, revolutionary leaders, founding figures); rational-legal (impersonal rules and procedures: bureaucracies, constitutions, modern states). Each produces different stable rule with different vulnerabilities; when legitimacy collapses, regimes fall even with intact armies`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Weber's three-type framework remains one of the most-used tools in political sociology. Recognizing which type of legitimacy a regime is built on helps predict where its vulnerabilities are and what kinds of shock might destabilize it.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's Arendt's distinctive claim about power and violence?`,
              options: [
                `Same thing`,
                `Power and violence are opposites, not the same. Power is what emerges when humans act together in concert (collective capacity from coordination); violence is instrumental capacity to coerce. Regimes that rely on violence have already lost power; the more violence used, the less authentic power. Nonviolent movements topple seemingly invincible regimes because power lies with people who can withdraw consent. Hungarian Revolution 1956, Velvet Revolution 1989, civil rights movement illustrate the point`,
                `Random`,
                `Both important`,
              ],
              correctIndex: 1,
              explanation: `Arendt's view is controversial and contested but has been influential. The framework helps explain why nonviolent resistance sometimes works against overwhelming military force: the people who carry out the violence have to keep believing in it, and when they don't, the regime crumbles.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's Foucault's distinctive view of power?`,
              options: [
                `Just states`,
                `Power is fundamentally about knowledge and discourse (what's sayable, knowable, considered normal) embedded in everyday practices. Operates through everyday institutions (schools, hospitals, prisons, families, workplaces) that shape what people consider normal, healthy, sane, productive, deviant. Most pervasive forms don't need violence because internalized as common sense. Panopticon metaphor: surveillance internalized as self-discipline. Knowledge and power inseparable`,
                `Random`,
                `Just discipline`,
              ],
              correctIndex: 1,
              explanation: `Foucault's framework explains how power operates without obvious coercion through everyday institutions. Modern phenomena like social media algorithms shaping what's normal, schools producing specific kinds of students, and medical categories defining normalcy all become legible through this framework.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does Ubuntu philosophy contribute to thinking about power?`,
              options: [
                `Random`,
                `Power emerges from relationship; "umuntu ngumuntu ngabantu" (Zulu/Xhosa: a person is a person through other persons). Personhood and effective action emerge from being in right relationship with others and the world; not primarily zero-sum competition between separate actors. Articulated publicly by Desmond Tutu and Nelson Mandela; shaped South African Truth and Reconciliation Commission; offers framework for transitional justice that punitive models struggle with`,
                `Just being nice`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Ubuntu challenges the assumption (built into much European political theory) that the relevant unit of analysis is separate competing individuals. The framework has been operationalized in transitional justice contexts and produces specific political practices that other frameworks don't.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What do Daoist and Confucian traditions add to thinking about power?`,
              options: [
                `Just old`,
                `Daoist (Daodejing attributed to Laozi ~4th c BCE): water metaphor; effective power often looks like yielding, takes low position, wears down hard rigid power over time; wu wei (effortless action). Confucian (Analects ~400 BCE): power as moral cultivation and ritual; ruler's virtue produces order without force; extensive East Asian political influence across millennia. Both challenge European emphasis on coercive or legitimate-authority models`,
                `Random`,
                `Just philosophy`,
              ],
              correctIndex: 1,
              explanation: `These traditions matter because they're sophisticated political theories that have shaped political practice in major civilizations across millennia. Treating European theory as "real" political theory and these as cultural philosophy reflects bias, not actual sophistication of the underlying frameworks.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How do the five traditions relate to each other?`,
              options: [
                `Five wrong answers and a right one`,
                `Five serious traditions, each picking up on something real about power that the others underweight. Reading them together gives fuller view than any single one provides. The lesson doesn't force commitment to one because power is genuinely too contested for committed answer at 12; engagement with each is the goal. Different traditions explain different aspects (states and geopolitics; regime legitimacy; collective action and consent; everyday discipline; relational power)`,
                `Just pick one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Perspectives format reflects the genuine state of the topic. Power is contested across serious traditions, and the right response is engagement with each rather than premature commitment to one. Across decades, your view will develop; the foundation built now is breadth of engagement.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The European-American traditions (Machiavelli, Weber, Arendt, Foucault) cover all the serious theories of power.`,
              correctAnswer: false,
              explanation: `False. Major non-European traditions (Ubuntu, Daoist, Confucian, Indigenous American among others) have developed substantially different conceptions of power that aren't reducible to European frameworks. Treating European theory as universal and non-European as cultural is itself an expression of the kind of power Foucault analyzed: what's considered "real" theory reflects power dynamics in academic disciplines. Mature framework for thinking about power includes serious engagement with non-European traditions.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "the government is the most powerful institution in society: they have the army, the money, and the laws. Nothing else really matters." Based on this lesson, what should you point out?`,
              options: [
                `"Yeah governments"`,
                `"That's the realist view of power (Machiavelli, modern political realism) which is one serious tradition but not the only one. Several specific things. First, even within the realist framework, there's been a Weberian refinement: governments depend on legitimacy to govern effectively, not just on armies and laws. When legitimacy collapses (Shah of Iran 1979, Soviet Union 1991, multiple Arab Spring governments 2011), seemingly powerful governments fall even with intact militaries. Second, Hannah Arendt argues that when governments rely heavily on military and police force, they've actually lost power, not demonstrated it; violence is the symptom of power's collapse, not its presence. The Hungarian Revolution of 1956, the Velvet Revolution of 1989, the U.S. civil rights movement, and many other moments show governments crumbling when people withdraw consent. Third, Michel Foucault argues that the most pervasive forms of power aren't held by governments at all. They operate through everyday institutions: schools shaping what counts as smart, hospitals defining what counts as healthy, social media algorithms determining what counts as normal, workplaces producing specific kinds of workers. None of these requires explicit government coercion to operate, yet they shape your behavior more pervasively than most government action does. Fourth, the Ubuntu tradition challenges the assumption that the relevant unit is the separate competing actor (government vs. individuals) at all. Power emerges from relationship; the framework underlying your question (powerful institutions vs. weak individuals) reflects specific European assumptions that aren't universal. Fifth, the realist view has real strengths; it explains why states build militaries, form alliances, and sometimes go to war. It just isn't the whole story. A friend who says 'nothing else really matters' has committed to one tradition without engaging with the others; ask which one and why, and engage with what the other four contribute."`,
                `"Just power"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied power literacy. Identify the realist commitment behind the friend's claim. Bring in the other four traditions (Weber on legitimacy, Arendt on collective action, Foucault on dispersed everyday power, Ubuntu on relational power). Don't dismiss the realist view but show what it underweights. The framework integrates multiple traditions rather than committing to one.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for what power is? Has anything shifted across the five voices?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which of the five voices made you most uncomfortable? Which felt most natural? What does the difference tell you about the framework you've been carrying without examining?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can read power through five traditions across decades, what does that change about how you engage with politics, work, family dynamics, platforms, institutions?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific power dynamic in your life (school, family, friend group, online platforms, broader politics). Apply each of the five frameworks. Which voice helps you see something the others miss?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The lesson didn't force commitment to one position. Was that the right move, or should there be a "best" answer to what power is? Defend your view.` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read one foundational text (Machiavelli "The Prince," excerpts from Weber, Arendt "On Violence," excerpts from Foucault, or material on Ubuntu from Desmond Tutu or contemporary articulators). Apply during reading.` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Power literacy at 12 protects across decades of engaging with politics, work, institutions, and platforms. Two paths.`,
          familyActivity: {
            title: `The Family Power Conversation`,
            duration: `60 minutes`,
            description: `Share the five traditions and walk through how each illuminates different parts of family life, work, and politics. Many adults operate with implicit realist assumptions (power = capacity to coerce) without examining whether that framework captures what they actually care about. Conversation often surfaces specific framings worth examining: how does legitimacy operate in your family decisions? Where does Arendt's collective action vs. violence distinction show up in family conflict? What everyday practices in your household shape what's considered normal (Foucault)? How does Ubuntu's relational framework apply to family relationships? Many families benefit from explicit conversation about power that their lived practice depends on but their explicit language usually doesn't address.`,
          },
          projectOption: {
            title: `Read one foundational text across cultures, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one across the cultural spectrum: Machiavelli "The Prince" (short, accessible, foundational); excerpts from Weber's "Economy and Society" (denser; or a good Weber introduction); Hannah Arendt "On Violence" (short essay, accessible, profound); Foucault "Discipline and Punish" excerpts (challenging but transformative); Desmond Tutu "No Future Without Forgiveness" (Ubuntu in political practice); the Daodejing (short, ancient, paradoxical). Apply during reading. Write 1,500 words on what shifted in how you think about power and where you encounter that framework operating in your life now.`,
            offerToParent: `Parent: opt your kid into this project. Engagement with foundational texts on power at 12 protects against decades of operating with unexamined assumptions. This is among the highest-leverage humanities investments at this age.`,
          },
          identityQuestion: `If you become someone who reads power across five traditions (recognizing capacity, legitimacy, collective action, dispersed everyday discipline, and relational humanity), what does that change about your capacity to engage with the world thoughtfully?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read power through five different traditions and see what each catches.`,
            `A person who recognizes that European political theory isn't the universal default.`,
            `Someone who looks at violence as evidence of power's collapse, not as its expression.`,
          ],
          saveKey: `identity_responses_hw_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Third History/World Voyager lesson done. You now have framework across five serious traditions of power: Machiavelli's realist capacity, Weber's three types of legitimate authority, Arendt's collective action distinct from violence, Foucault's dispersed everyday discipline, and Ubuntu's relational power (with Daoist and Confucian and Indigenous American traditions in the background). Most adults engaging with politics have absorbed one of these (usually a partial version of realism or Weberian legitimacy) without recognizing it as one tradition among others. You'll bring all five to every subsequent lesson in this band: economic systems, political ideologies, revolutions, imperialism, genocide, the Cold War, indigenous peoples, women in history. The voices will be useful. Seventeen lessons to go. Next time: economic systems (capitalism, socialism, communism) with the power traditions you've just built. Argument Builder. Let's go. — Lyra`,
          badge: `power-literate`,
          badgeName: `Power Literate`,
          xpEarned: 75,
          competencies: [
            `Articulates Machiavelli's realist tradition (power as capacity)`,
            `Articulates Weber's three types of legitimate authority (traditional, charismatic, rational-legal)`,
            `Articulates Arendt's distinction between power (collective action) and violence`,
            `Articulates Foucault's analysis of power as dispersed knowledge/discourse in everyday practices`,
            `Engages seriously with non-European traditions (Ubuntu relational power, Daoist yielding, Confucian moral cultivation, Indigenous American distributed authority)`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Economic Systems: Capitalism, Socialism, Communism`,
            hook: `Three serious economic traditions. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const perspectives = l.screens.find((s) => s.type === `perspectives`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L03 ${VERSION}] "${l.title}" mags=${mags} perspectives=${perspectives?.perspectives?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
