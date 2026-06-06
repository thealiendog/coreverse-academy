// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L04 — The Supreme Court: Landmark Cases & Constitutional Interpretation
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics) — D2.Civ
// Interaction: SOURCE-EVALUATION (landmark cases as sources). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l04-v1";

const SOCIAL_STUDIES_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-04`,
      title: `The Supreme Court: Landmark Cases and Constitutional Interpretation`,
      duration: 35,
      xpReward: 75,
      badge: `court-interpreter`,
      badgeName: `Court Interpreter`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a strange and powerful fact about your country: nine people, who no one elected and who serve for life, can take a law passed by hundreds of elected representatives and signed by the president, and erase it. They can decide what the words of the Constitution actually mean, words written over two centuries ago by people who never imagined the internet, modern policing, or most of the questions we now face. That power belongs to the Supreme Court, and it's one of the most consequential, and most debated, features of American government. Last lesson you learned that rights only become real when someone enforces them. The Supreme Court is, more than any other body, where the lines actually get drawn: where "freedom of speech" gets defined, where "equal protection" gets enforced or denied, where the limits of every other branch get tested. This lesson takes you inside that institution. We'll see what the Court actually does and why judicial review, its power to strike down laws, makes it so powerful. We'll confront the central puzzle: the Constitution's words don't interpret themselves, so how should judges read them, by their original meaning, or as a living document that evolves? We'll trace how the Court's decisions have shaped the nation, sometimes advancing justice, sometimes betraying it. And then, because understanding the Court means reading its actual work, we'll become legal analysts, examining five real landmark cases as primary sources, weighing what each decided, how the justices reasoned, and what it changed. These cases aren't trivia. They're the moments when the abstract promises of the Constitution collided with real human lives, and the Court decided which way the country would turn. Let's read them ourselves. Onward.`,
          headline: `The Supreme Court: Landmark Cases and Constitutional Interpretation`,
          subtitle: `How nine unelected justices decide what the Constitution means, and the cases that reshaped a nation. Evaluating the evidence.`,
          visual: `/voyager-assets/social-studies/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What The Court Actually Does`,
          paragraphs: [
            `The Supreme Court is the highest court in the U.S. and the head of the judicial branch. Its job is to interpret the law, to decide what laws and the Constitution mean when applied to real disputes. Nine justices, appointed by the president and confirmed by the Senate, serve for life, hearing a few of the most contested cases each year.`,
            `Most cases never reach it. The Court chooses which to hear, usually where lower courts disagree or a constitutional question is unsettled. When it rules, its decision is the final word, binding on the whole country. A single ruling can change life for hundreds of millions, on speech, schools, privacy, policing, and voting.`,
            `The Court's deepest power is judicial review: the authority to declare a law or action unconstitutional and void it entirely. This is what makes nine unelected judges so powerful, they can strike down a law passed by Congress and signed by the president. But this raises an unavoidable question: to decide what's unconstitutional, the justices first have to decide what the Constitution means, and that's far harder than it sounds.`,
          ],
          image: `/voyager-assets/social-studies/l04-s1-what.webp`,
          imageCaption: `The Supreme Court is the highest court in the U.S. and the head of the judicial branch. Its job: INTERPRET the law, decide what laws and the Constitution actually mean in real disputes. Nine JUSTICES, appointed by the president and confirmed by the Senate, serve for LIFE, hearing a few of the most contested cases each year. The Court chooses its cases, usually where lower courts disagree or a constitutional question is unsettled. Its ruling is the FINAL word, binding on the whole country. Its deepest power is JUDICIAL REVIEW: declaring a law or action unconstitutional and voiding it. This makes nine unelected judges enormously powerful, but raises a question: to decide what's unconstitutional, they must first decide what the Constitution MEANS.`,
          vocab: [
            { word: `Supreme Court`,
              definition: `The highest court in the United States and head of the judicial branch, made up of nine justices who interpret the law and the Constitution in the most important cases.`,
              audioPrompt: `The Supreme Court, {name}, sits at the very top of the American judicial branch, the final court of appeal in the whole country. Its nine justices don't make laws or enforce them; they interpret them, deciding what the law and the Constitution actually mean when real disputes arise. They hear only a handful of the most important, contested cases each year, but each ruling can reshape life for millions. If you could ask the justices to take up one question facing your generation, what would it be?` },
            { word: `justices`,
              definition: `The nine judges of the Supreme Court, appointed by the president, confirmed by the Senate, and serving for life, which insulates them from immediate political pressure.`,
              audioPrompt: `The justices, {name}, are the nine judges who make up the Supreme Court. They're nominated by the president and confirmed by the Senate, but once on the Court they serve for life. That lifetime appointment is deliberate: it's meant to free them from worrying about elections or pleasing the public, so they can rule on what the Constitution says rather than what's popular. But it also means they answer to no voters at all. Does lifetime power make judges braver, or less accountable? Hold that tension.` },
            { word: `judicial review`,
              definition: `The Supreme Court's power to declare a law or government action unconstitutional and void it. It is the Court's most consequential authority and its key check on the other branches.`,
              audioPrompt: `Judicial review, {name}, is the Supreme Court's most powerful tool: the authority to examine a law or government action, decide whether it violates the Constitution, and if so, strike it down completely. Even a law passed by Congress and signed by the president can be erased by the Court. It's how the judicial branch checks the other two. But notice the catch we'll keep circling back to: to judge what's unconstitutional, the justices must first decide what the Constitution's words actually mean. Who should get to decide that?` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where The Power Came From`,
          paragraphs: [
            `Surprising fact: the Constitution never explicitly gives the Court the power of judicial review. The Court claimed it, in the landmark 1803 case Marbury v. Madison. Chief Justice John Marshall reasoned that since the Constitution is the supreme law, and it's the courts' job to say what the law is, courts must be able to refuse to enforce laws that conflict with it.`,
            `It was a bold move. In a single decision, the Court made itself the ultimate interpreter of the Constitution, the branch that decides what the founding document means. Without judicial review, its limits would be mere suggestions, with no one to enforce them against Congress or the president. With it, those limits gained teeth.`,
            `But this created the deep tension we keep returning to. Judicial review is "counter-majoritarian", it lets unelected judges overrule the elected branches and even majorities. Defenders say that's the point: the Constitution puts some things beyond majority votes, and someone must enforce that. Critics say it hands too much power to nine people. Both have a real argument.`,
          ],
          image: `/voyager-assets/social-studies/l04-s2-where.webp`,
          imageCaption: `Surprising fact: the Constitution never explicitly gives the Court the power of judicial review. The Court CLAIMED it, in the landmark 1803 case MARBURY v. MADISON. Chief Justice John Marshall reasoned that since the Constitution is the supreme law, and it's the courts' job to say what the law IS, courts must be able to refuse to enforce laws that conflict with it. A bold move: in one decision, the Court made itself the ultimate INTERPRETER of the Constitution. Without judicial review, the Constitution's limits would be mere suggestions; with it, they gained teeth. But this created tension: judicial review is COUNTER-MAJORITARIAN, letting unelected judges overrule elected branches. Defenders say that's the point; critics say it's too much power. The debate never ended.`,
          vocab: [
            { word: `Marbury v. Madison (1803)`,
              definition: `The landmark case in which the Supreme Court, under Chief Justice John Marshall, established the power of judicial review, the authority to strike down unconstitutional laws.`,
              audioPrompt: `Marbury versus Madison, decided in 1803, {name}, is one of the most important cases in American history, because it's where the Supreme Court claimed the power of judicial review, even though the Constitution never explicitly granted it. Chief Justice John Marshall argued that since the Constitution is the highest law and courts must interpret the law, courts can strike down ordinary laws that violate it. In one stroke, the Court made itself the Constitution's final interpreter. Why do you think the other branches accepted such a bold claim of power?` },
            { word: `interpreting the Constitution`,
              definition: `The task of deciding what the Constitution's words mean when applied to real cases. Because the words don't interpret themselves, this is where much of the Court's power and controversy lies.`,
              audioPrompt: `Interpreting the Constitution, {name}, is the heart of what the Supreme Court does, and it's harder than it sounds. The Constitution's words, like "freedom of speech" or "equal protection", don't come with instructions for every situation. Justices have to decide what those words mean when applied to questions the founders never imagined, from the internet to modern policing. That act of interpretation is where the Court's real power lives. Whose meaning should count, the founders' original intent, or what the words should mean today?` },
            { word: `counter-majoritarian power`,
              definition: `The Court's ability to overrule elected officials and popular majorities. Defenders see it as enforcing constitutional limits; critics see it as too much power for unelected judges.`,
              audioPrompt: `Counter-majoritarian power, {name}, names the Supreme Court's most controversial trait: it can overrule laws that elected representatives passed and that majorities support. Defenders say that's exactly its job, the Constitution puts some things beyond majority votes, and someone has to enforce those limits, even against the popular will. Critics say it gives nine unelected people too much power over a democracy. Both arguments are genuinely strong. Where do you lean, should the people's vote or the Constitution's limits win when they collide?` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Two Ways To Read The Words`,
          paragraphs: [
            `Since the Constitution's words don't interpret themselves, justices need a method for reading them, and they genuinely disagree about which is right. This isn't just technical; it shapes how cases come out. Two broad approaches dominate, and understanding them is the key to most arguments about the Court.`,
            `One approach is originalism: the Constitution should be read by its original meaning, what the words meant when written and ratified. Supporters argue this keeps judges from imposing their own views; the meaning is fixed, and changing it should require a formal amendment, not a judge's reinterpretation. Stability and restraint are the goals.`,
            `The other approach is the "living Constitution": its meaning can evolve as society changes, so broad principles like "equal protection" apply to circumstances the founders never imagined. Supporters argue a 1787 document can't be frozen; it must grow to remain just. Each side accuses the other, of clinging to the past, or of letting judges invent meaning. Both, notice, are trying to solve the same hard problem.`,
          ],
          image: `/voyager-assets/social-studies/l04-s3-two-ways.webp`,
          imageCaption: `Since the Constitution's words don't interpret themselves, justices need a METHOD for reading them, and they genuinely disagree. This shapes how cases come out. Two broad approaches dominate. ORIGINALISM: interpret the Constitution by its original meaning, what the words meant when written and ratified. Supporters say this stops judges imposing their own views; changing the meaning should require a formal amendment, not reinterpretation. Stability and restraint. The LIVING CONSTITUTION: the meaning evolves as society changes, so principles like "equal protection" apply to new circumstances the founders never imagined. Supporters say a 1787 document can't be frozen; it must grow to stay just. Each side accuses the other, clinging to the past, or inventing meaning. Both solve the same hard problem.`,
          vocab: [
            { word: `originalism`,
              definition: `The approach that the Constitution should be interpreted according to its original meaning, what the words were understood to mean when written, with changes requiring formal amendment.`,
              audioPrompt: `Originalism, {name}, is the view that judges should interpret the Constitution by what its words originally meant when they were written and ratified, not by what we might wish they meant today. Supporters argue this keeps judges honest and restrained: the meaning is fixed, so if society wants change, it should formally amend the Constitution rather than have judges reinterpret it. Critics say it can freeze us in the assumptions of the 1700s. Does keeping the meaning fixed protect us, or trap us? It's a real question.` },
            { word: `living Constitution`,
              definition: `The approach that the Constitution's meaning can evolve over time, so its broad principles apply to new circumstances the framers never anticipated.`,
              audioPrompt: `The living Constitution, {name}, is the view that the document's meaning can evolve as society changes, so that broad phrases like "equal protection" or "cruel and unusual" can apply to situations the founders never imagined. Supporters argue a Constitution frozen in 1787 couldn't keep up with a changing world and would become unjust. Critics worry it lets judges read in whatever meaning they prefer. Which feels more dangerous to you, a Constitution that can't change, or one whose meaning judges can reshape?` },
            { word: `constitutional interpretation`,
              definition: `The broader debate over how judges should read the Constitution, with originalism and the living-Constitution approach as the two main camps. The method often determines the outcome.`,
              audioPrompt: `Constitutional interpretation, {name}, is the ongoing debate over how justices should read the Constitution, and it matters enormously, because the method often decides the case. An originalist and a living-constitutionalist can look at the same words and reach opposite conclusions about, say, privacy or punishment. This is why fights over Supreme Court nominees are really fights over interpretation. Most arguments you'll hear about the Court trace back to this divide. As you read the upcoming cases, ask: which method did the justices seem to use?` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How The Court Shaped The Nation`,
          paragraphs: [
            `The Court's rulings have shaped American life as powerfully as any law, sometimes for justice, sometimes against it. This is crucial: the Court is not a neutral oracle that always gets it right. It is made of humans interpreting contested words, and history shows it has both advanced freedom and betrayed it.`,
            `Consider the range. In Brown v. Board of Education (1954), the Court declared school segregation unconstitutional, helping launch the Civil Rights Movement, a triumph of justice. But decades earlier, in Dred Scott (1857), the same Court ruled that Black people could not be citizens and had no rights a white person was bound to respect, a decision so unjust it helped push the nation toward civil war.`,
            `The lesson is double. First, the Court's power is real: its interpretations can entrench injustice or dismantle it. Second, the Court is fallible, its rulings reflect the people on it and their era, and decisions once celebrated can later be condemned. This is why understanding it means reading its cases critically, not treating its word as automatically right.`,
          ],
          image: `/voyager-assets/social-studies/l04-s4-shaped.webp`,
          imageCaption: `The Court's rulings have shaped American life as powerfully as any law, sometimes for justice, sometimes against it. Crucial: the Court is NOT a neutral oracle that always gets it right. It's made of humans interpreting contested words, and history shows it has both advanced freedom and BETRAYED it. In BROWN v. BOARD OF EDUCATION (1954), the Court declared school segregation unconstitutional, launching the modern Civil Rights Movement, a triumph. But in DRED SCOTT v. SANDFORD (1857), the same Court ruled Black people could not be citizens, helping push the nation toward civil war. The lesson is double: the Court's power is REAL, and the Court is FALLIBLE. Understanding it means reading its cases critically, not treating its word as automatically right.`,
          vocab: [
            { word: `Brown v. Board of Education (1954)`,
              definition: `The landmark case in which the Court ruled that racial segregation in public schools is unconstitutional, overturning "separate but equal" and helping launch the Civil Rights Movement.`,
              audioPrompt: `Brown versus Board of Education, decided in 1954, {name}, is one of the most celebrated Supreme Court rulings ever. The Court declared that racial segregation in public schools violated the Fourteenth Amendment's promise of equal protection, overturning the earlier "separate but equal" doctrine. It helped ignite the modern Civil Rights Movement. It's a powerful example of the Court advancing justice and making a constitutional promise real. Why do you think it took until 1954, nearly a century after the Fourteenth Amendment, for this ruling to come?` },
            { word: `the fallible Court`,
              definition: `The recognition that the Supreme Court is made of humans interpreting contested words, so its rulings can entrench injustice as well as advance it, as the Dred Scott decision shows.`,
              audioPrompt: `The fallible Court, {name}, is an essential idea: the Supreme Court is not a perfect oracle that always finds the right answer. It's nine human beings, shaped by their era, interpreting contested words, and history proves they can get it terribly wrong. The Dred Scott decision of 1857, which denied Black people citizenship and any rights, is a chilling example. Decisions once celebrated can later be condemned. So we should respect the Court's power without assuming it's always right. How should citizens respond when they believe the Court has ruled unjustly?` },
            { word: `precedent`,
              definition: `A past court decision that guides how later, similar cases are decided. Precedent gives the law stability, but the Court can sometimes overturn it, as Brown overturned "separate but equal."`,
              audioPrompt: `Precedent, {name}, is the principle that courts generally follow their own past decisions when ruling on similar cases. It gives the law stability and predictability, you can rely on the rules staying consistent. But precedent isn't absolute: the Court can overturn a past ruling it now believes was wrong, as Brown versus Board overturned the earlier "separate but equal" doctrine. Sticking to precedent brings stability; breaking it allows correction of past errors. When should a court honor the past, and when should it overturn it?` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Read The Cases`,
          paragraphs: [
            `Pull it together. The Supreme Court interprets the Constitution, and its deepest power, judicial review, lets it strike down laws as unconstitutional, a power it claimed in Marbury v. Madison (1803). That power is counter-majoritarian: it can overrule even elected branches and majorities, its great virtue or its great danger.`,
            `Because the words don't interpret themselves, justices use different methods, originalism (fixed meaning, changed only by amendment) versus the living Constitution (meaning that evolves). The method often determines the outcome, which is why interpretation is at the heart of nearly every fight over the Court. The Court is powerful but fallible: it advanced justice (Brown) and entrenched injustice (Dred Scott).`,
            `Now you become the legal analyst. The source-evaluation screen presents five real landmark cases as primary sources. For each, examine the stakes, the decision, the reasoning, and what changed, and weigh it critically: Was the reasoning sound? Which method was at work? Did the Court advance justice or betray it? You're learning to read the Court itself.`,
          ],
          image: `/voyager-assets/social-studies/l04-s5-before.webp`,
          imageCaption: `Threads together. The Supreme Court interprets the Constitution, and its deepest power, JUDICIAL REVIEW, lets it strike down laws as unconstitutional, a power it claimed in Marbury v. Madison (1803). That power is COUNTER-MAJORITARIAN: it can overrule even elected branches and majorities, its great virtue or great danger. Because the words don't interpret themselves, justices use different methods, ORIGINALISM (fixed meaning) versus the LIVING CONSTITUTION (evolving meaning), and the method often decides the case. The Court is powerful but FALLIBLE: it advanced justice (Brown) and entrenched injustice (Dred Scott). Now you're the legal analyst: five real landmark cases as sources. Examine the stakes, the decision, the reasoning, and what changed. Read the Court itself.`,
          vocab: [
            { word: `landmark case`,
              definition: `A Supreme Court decision so significant that it establishes or changes important constitutional principles and reshapes the law and society for generations.`,
              audioPrompt: `A landmark case, {name}, is a Supreme Court decision so important that it changes the constitutional landscape, establishing a new principle or overturning an old one, and reshaping life for generations. Brown versus Board, Marbury versus Madison, these are landmarks because the country was different after them. Studying landmark cases is how you understand not just the Court, but the turning points of the whole nation. As you read the cases ahead, ask what made each one a turning point, and for whom.` },
            { word: `reading a case critically`,
              definition: `Analyzing a court decision not by assuming it was right, but by examining the stakes, the reasoning, the interpretive method, and the consequences, and judging it for yourself.`,
              audioPrompt: `Reading a case critically, {name}, means approaching a Supreme Court decision the way a thoughtful analyst would, not assuming it must be correct because the Court said so, but asking: What was actually at stake? How did the justices reason? Was that reasoning sound or flawed? What did the ruling change, and for whom? Since the Court is powerful but fallible, this critical reading is exactly how an informed citizen engages it. Are you ready to judge the reasoning of the highest court in the land?` },
            { word: `the Court and your life`,
              definition: `The reality that Supreme Court decisions directly shape everyday rights and freedoms, on speech, schools, privacy, policing, and more, making the Court's work personally relevant to everyone.`,
              audioPrompt: `The Court and your life, {name}, are connected far more closely than most people realize. Supreme Court decisions define the free speech you exercise, the privacy you expect, how schools must treat you, what police can and can't do. These aren't abstract legal puzzles; they set the actual boundaries of your daily freedom. That's why learning to read the Court matters for you personally, not just as a student of government. Which of your everyday freedoms would you most want the Court to protect?` },
          ],
        },

        {
          id: `l04-source-evaluation`,
          type: `source-evaluation`,
          headline: `Read The Landmark Cases Yourself`,
          intro: `{name}, you're the legal analyst now. Here are five real landmark Supreme Court cases, presented as primary sources. For each, examine what was at stake, what the Court decided, and how it reasoned, then weigh it critically: Was the reasoning sound? Which interpretive method was at work? Did the Court advance justice, or betray it?`,
          sources: [
            {
              id: `s1`,
              tier: `The Court claims its power`,
              title: `Marbury v. Madison (1803)`,
              type: `Founding precedent: judicial review`,
              context: `In a dispute over a government appointment, Chief Justice John Marshall faced a choice. Instead of ruling narrowly, he used the case to establish a sweeping principle: that the Supreme Court has the power to declare laws unconstitutional. The Constitution itself never explicitly granted this power.`,
              quote: `"It is emphatically the province and duty of the judicial department to say what the law is."`,
              questions: [
                `What enormous power did the Court establish for itself in this case?`,
                `Where did this power come from, if not directly from the Constitution's text?`,
                `Why is this considered the foundation of the Court's modern role?`,
              ],
              evaluation: `As a legal analyst, you'd identify this as arguably the single most important case in establishing the Supreme Court's modern role, because it's where the Court claimed the power of judicial review, the authority to declare laws and government actions unconstitutional and void them. What makes it remarkable is that the Constitution never explicitly grants this power. Chief Justice John Marshall reasoned his way to it: since the Constitution is the supreme law of the land, and since it is fundamentally the job of courts "to say what the law is," it follows that when an ordinary law conflicts with the Constitution, the courts must refuse to enforce the ordinary law and uphold the Constitution instead. In other words, someone has to be the final judge of what the supreme law means and whether other laws violate it, and Marshall placed that authority with the judiciary. The reasoning is genuinely powerful: without judicial review, the Constitution's limits on government would be little more than suggestions, since no one would be empowered to enforce them against Congress or the president. With judicial review, those limits gained real teeth, an enforcer. This is why Marbury is considered the foundation of the Court's modern power: in a single decision, the Court transformed itself from a relatively weak branch into the ultimate interpreter of the Constitution, capable of checking the other two branches. But a sharp analyst also notices the deep tension this created, the one that has never gone away. Judicial review is counter-majoritarian: it lets unelected judges, serving for life, overrule laws passed by the people's elected representatives. Defenders say this is precisely the point, the whole purpose of a constitution is to place certain limits beyond the reach of ordinary majorities, and judicial review is what makes those limits enforceable. Critics say Marshall essentially handed the Court a vast power the Constitution never clearly gave it, concentrating enormous authority in nine unelected people. Both views have real force. You'd conclude that Marbury established the Court's defining power through bold and largely persuasive reasoning, while honestly recognizing that it also created the central, unresolved debate about whether judicial review is democracy's essential safeguard or an overreach, a debate you'll weigh throughout your life as a citizen.`,
            },
            {
              id: `s2`,
              tier: `The Court advances justice`,
              title: `Brown v. Board of Education (1954)`,
              type: `Landmark civil rights ruling`,
              context: `For decades, an earlier ruling (Plessy v. Ferguson, 1896) had allowed racial segregation under the doctrine of "separate but equal." In Brown, the Court considered whether segregated public schools, even if facilities were "equal," violated the Constitution. A unanimous Court overturned the earlier precedent.`,
              quote: `"Separate educational facilities are inherently unequal."`,
              questions: [
                `What earlier precedent did this ruling overturn, and why does overturning it matter?`,
                `How does this decision connect to the Fourteenth Amendment's equal protection clause?`,
                `Was this the Court advancing justice or overstepping? How would you weigh it?`,
              ],
              evaluation: `As a legal analyst, you'd rate this one of the clearest examples in American history of the Supreme Court using its power to advance justice and make a constitutional promise real, and a vivid illustration of how the Court can correct its own past errors. The key to understanding Brown is what it overturned: the 1896 case Plessy v. Ferguson, which had ruled that racial segregation was constitutional as long as the separate facilities were "equal", the infamous "separate but equal" doctrine. For nearly sixty years, that precedent had provided legal cover for segregation across American life. In Brown, a unanimous Court rejected it, declaring that in public education, "separate educational facilities are inherently unequal", that segregation itself, by stamping one group as inferior, violated the Fourteenth Amendment's guarantee of "equal protection of the laws," regardless of whether buildings or books were technically equal. This connects directly to the lesson's earlier point that the Fourteenth Amendment is the engine of modern civil rights: Brown took its promise of equal protection, written in 1868 but long denied in practice, and finally began enforcing it. The decision helped launch the modern Civil Rights Movement and reshaped the nation. Now, the critical analysis. Brown is a powerful case study in several lesson themes at once. First, it shows the Court advancing justice, making real a right that had existed on paper but not in practice (recall: rights on paper are not rights in practice until enforced). Second, it shows precedent being overturned: the Court broke from Plessy because it concluded that earlier ruling was wrong, demonstrating that precedent brings stability but isn't absolute, and that the Court can correct grave past errors. Third, it touches the interpretation debate: critics at the time argued the Court was "legislating from the bench," reading new meaning into the Fourteenth Amendment rather than applying its original 1868 understanding, an originalist-style objection. Defenders argued the Court was correctly applying the Amendment's actual principle of equality to the reality of segregation, closer to a living-Constitution approach, or simply enforcing equal protection honestly. As an analyst weighing it, you'd note that Brown is now almost universally regarded as a triumph of justice, but understanding why it was contested at the time reveals exactly how the interpretation debate works in practice. You'd conclude that Brown shows the Court at arguably its best, using judicial review and its power to overturn precedent to dismantle a profound injustice and breathe life into the Constitution's promise of equality, while recognizing that even celebrated decisions involve real interpretive choices worth understanding.`,
            },
            {
              id: `s3`,
              tier: `The Court betrays justice`,
              title: `Dred Scott v. Sandford (1857)`,
              type: `The Court's gravest failure`,
              context: `Dred Scott, an enslaved man, sued for his freedom, arguing that having lived in free territory made him free. The Court not only ruled against him but went much further, declaring that Black people, free or enslaved, could not be U.S. citizens and had no rights the government was bound to protect.`,
              quote: `The Court declared that Black Americans had \"no rights which the white man was bound to respect.\"`,
              questions: [
                `Why is this widely considered the worst decision in the Court's history?`,
                `What does this case prove about whether the Court is always right?`,
                `How can a fallible Court both advance and betray justice across its history?`,
              ],
              evaluation: `As a legal analyst, you'd identify this as the most important counterweight to any belief that the Supreme Court is a neutral oracle that always gets things right, it is widely regarded as the worst, most unjust decision in the Court's entire history, and it proves, beyond argument, that the Court is fallible. The facts: Dred Scott, an enslaved man, sued for his freedom on the grounds that he had lived in territory where slavery was banned. The Court could have ruled narrowly, but instead it went sweepingly further, declaring that Black people, whether free or enslaved, could not be citizens of the United States and had, in the decision's notorious words, "no rights which the white man was bound to respect." It also struck down a federal law (the Missouri Compromise) that had limited slavery's expansion. The reasoning was a moral and constitutional catastrophe: it entrenched slavery, denied an entire race any claim to rights or citizenship, and rather than calming national tensions, it inflamed them, helping push the country toward the Civil War. (It was effectively overturned only by the Civil War and the Thirteenth and Fourteenth Amendments, the latter being the very equal-protection guarantee that would later power Brown.) Why does this case matter so much for an analyst, beyond its historical importance? Because it demolishes the assumption that the Court's word is automatically right. The same institution that would later issue Brown also issued Dred Scott; the same power of judicial review that struck down school segregation also struck down a law limiting slavery, in service of grave injustice. This is the crucial double lesson: the Court's power is real (its interpretations can entrench injustice as powerfully as they can dismantle it), and the Court is fallible (its rulings reflect the human beings on it and the era they inhabit, and decisions can be morally monstrous). It also illustrates that judicial review is a tool, neither good nor bad in itself, whose effect depends entirely on how it's used and who is using it. As an analyst, you'd draw the essential conclusion: precisely because the Court can betray justice as well as advance it, citizens must engage its decisions critically rather than reverently, weighing the reasoning and the consequences for themselves, never assuming that "the Supreme Court said so" settles whether something is just. Dred Scott is the permanent reminder of why reading the Court critically is not disrespect, it's responsibility.`,
            },
            {
              id: `s4`,
              tier: `The Court defines a right`,
              title: `Gideon v. Wainwright (1963)`,
              type: `Expanding civil liberties`,
              context: `Clarence Gideon was charged with a crime but was too poor to afford a lawyer, and the state refused to provide one. He was convicted after defending himself. From prison, he handwrote an appeal to the Supreme Court, arguing that everyone has a right to a lawyer. The Court agreed unanimously.`,
              quote: `The Court held that the right to a lawyer is \"fundamental,\" so states must provide one to defendants who cannot afford it.`,
              questions: [
                `What constitutional right did this case make real for ordinary people?`,
                `Why does a right to a fair trial mean little without a right to a lawyer?`,
                `How does this show the Court turning a paper right into a practical one?`,
              ],
              evaluation: `As a legal analyst, you'd identify this as a powerful example of the Court taking a right that existed in principle and making it real in practice for ordinary, often powerless people, exactly the gap the lesson keeps emphasizing between rights on paper and rights in practice. The facts are themselves remarkable: Clarence Gideon, too poor to afford a lawyer, was denied one by the state, forced to defend himself, and convicted. From his prison cell, he handwrote an appeal to the Supreme Court arguing that the Constitution guarantees everyone the right to a lawyer. The Court agreed unanimously, holding that the right to counsel is "fundamental" and that states must provide a lawyer to criminal defendants who cannot afford one. The constitutional logic is compelling and worth tracing. The Sixth Amendment guarantees the right to a fair trial and to the assistance of counsel, but as a practical matter, that guarantee is nearly meaningless for a poor person if it only means "you may have a lawyer if you can pay for one." A fair trial requires understanding complex legal procedures, rules of evidence, and how to challenge the prosecution, things an untrained person cannot reasonably do alone against a trained government prosecutor. So a right to a fair trial without a right to a lawyer is, for the poor, an empty promise: the trial cannot truly be fair if one side has professional legal expertise and the other has none. By requiring states to provide lawyers to those who can't afford them, the Court made the right to a fair trial genuinely accessible rather than a privilege available only to those with money. This case beautifully illustrates several lesson themes. It shows the Court protecting a civil liberty (a freedom/protection of the individual against the government's power to prosecute). It shows the Court turning a paper right into a practical one, the very work of making constitutional promises real. And it connects to the equal-protection spirit: justice shouldn't depend on wealth. As an analyst, you'd rate the reasoning sound and the decision a clear advance for justice and fairness, noting that it demonstrates the Court at its best when it ensures that fundamental rights belong to everyone, not just those with the resources to claim them. You might add the thoughtful observation that Gideon's handwritten appeal, one powerless individual reaching the highest court, is itself a striking testament to a system in which even the least powerful can, sometimes, make the Constitution's promises real.`,
            },
            {
              id: `s5`,
              tier: `The interpretation debate, live`,
              title: `A free-speech case at the edge`,
              type: `Interpretation in action`,
              context: `Consider a real type of hard case: students wear armbands to school to protest peacefully, or someone says something deeply offensive but not violent. The Court must decide whether the First Amendment's "freedom of speech", written in 1791, protects this. The words are old; the situations are new.`,
              quote: `The First Amendment says Congress shall \"make no law... abridging the freedom of speech,\" but never defines its exact limits.`,
              questions: [
                `Why can't the Court just "apply the words" without interpreting them?`,
                `How might an originalist and a living-constitutionalist approach this differently?`,
                `Who should decide what "freedom of speech" means for situations the founders never imagined?`,
              ],
              evaluation: `As a legal analyst, you'd recognize this as the perfect illustration of why constitutional interpretation is unavoidable, and why the method a justice uses often determines the outcome. Here's the core problem: the First Amendment says government shall "make no law abridging the freedom of speech," but it never defines what counts as "speech," or where its limits lie. Is wearing a protest armband "speech"? Is deeply offensive but nonviolent expression protected? Is spending money on political ads "speech"? Is posting online? The founders, writing in 1791, never imagined most of these situations, and the text alone doesn't answer them. This is why the Court can't simply "apply the words" mechanically: the words are general principles, not a detailed rulebook, and someone has to decide how they apply to circumstances the framers never anticipated. That act of deciding is interpretation, and it's not optional, it's built into the job. Now, how would the two main approaches handle this differently? An originalist would ask: what did "freedom of speech" mean to those who wrote and ratified the First Amendment? They'd look to the original understanding, historical context, and the kinds of expression the founders intended to protect, arguing that judges should be bound by that original meaning and not expand it based on modern preferences (if society wants broader protection, it should amend the Constitution). A living-constitutionalist would ask: what does the principle of free speech, the underlying value the founders were protecting, require in today's world? They'd argue that the framers chose broad language precisely because they couldn't foresee every situation, and that the principle must be applied sensibly to new technologies and circumstances (like the internet) to remain meaningful, even if that means protecting forms of expression the founders never specifically imagined. Crucially, as an analyst you'd note that these two methods can lead the same honest, capable justice to opposite conclusions about the same case, which is exactly why fights over Supreme Court nominees are really fights over interpretation, and why "who decides what the words mean" is one of the most consequential questions in the whole system. As for who should decide: that's a genuinely open and contested question with no single right answer. Defenders of the Court's role say someone must be the final interpreter, and the judiciary, insulated from political pressure, is the least-bad option for applying constitutional principles consistently. Critics worry this gives unelected judges too much power to shape the meaning of fundamental rights, and argue more should be left to elected branches or formal amendment. You'd conclude that this case reveals the deepest truth about the Supreme Court: its power lies not just in striking down laws, but in deciding what the Constitution's timeless-sounding words actually mean for an ever-changing world, an unavoidable, enormously consequential act of interpretation that reasonable people will always debate, and that you, as an informed citizen, are now equipped to think about for yourself.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what is judicial review, and why does it make the Court so powerful and so debated? Using the cases, explain how the Court can both advance justice (Brown, Gideon) and betray it (Dred Scott), and why interpretation method matters so much. Which case most changed how you see the Court, and why? In 5-6 sentences.`,
          reflectionPrompt: `Nine unelected people, interpreting words written centuries ago, can reshape the rights of hundreds of millions, and they've used that power for both profound justice and profound injustice. How does it feel to realize that so much depends on how a few human beings choose to read a few old words?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the main job of the Supreme Court?`,
              options: [
                `To write new laws for the entire country to follow.`,
                `To interpret the law and the Constitution and apply them to real cases.`,
                `To enforce laws by commanding the police and the military.`,
                `To elect the president and the members of Congress.`,
              ],
              correctIndex: 1,
              explanation: `The Supreme Court, head of the judicial branch, interprets the law and the Constitution, deciding what they mean in real disputes. The distractors describe the legislative branch (making laws), the executive (enforcement), or elections.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is judicial review?`,
              options: [
                `The Senate's power to confirm or reject the president's nominees.`,
                `The official process of reviewing a single judge's job performance each year.`,
                `The Court's power to declare a law or government action unconstitutional and void it.`,
                `The president's power to pardon people convicted of crimes.`,
              ],
              correctIndex: 2,
              explanation: `Judicial review is the Court's power to strike down laws or actions that violate the Constitution, its key check on the other branches. The distractors describe Senate confirmation, performance reviews, or the pardon power.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is the case Marbury v. Madison (1803) so important?`,
              options: [
                `It is where the Court established the power of judicial review.`,
                `It abolished slavery throughout the United States.`,
                `It gave the president the power to ignore the courts.`,
                `It created the United States Senate.`,
              ],
              correctIndex: 0,
              explanation: `In Marbury v. Madison, the Court, under Chief Justice Marshall, established judicial review, even though the Constitution never explicitly granted it. The distractors describe events that did not happen in this case.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is the Court's power called "counter-majoritarian"?`,
              options: [
                `Because it always sides with whatever the majority wants.`,
                `Because only a majority of citizens may bring a case to it.`,
                `Because it counts the votes in national elections.`,
                `Because it can overrule the elected branches and even popular majorities.`,
              ],
              correctIndex: 3,
              explanation: `The Court's power is counter-majoritarian because unelected justices can strike down laws passed by elected officials and supported by majorities, the source of both its value and its controversy. The distractors reverse or misstate this.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the core difference between originalism and the "living Constitution" approach?`,
              options: [
                `Originalism applies only to Congress; the living approach applies only to states.`,
                `Originalism reads the Constitution by its original meaning; the living approach lets meaning evolve over time.`,
                `Originalism is used by judges; the living approach is used only by voters.`,
                `They are honestly just two completely different names that both describe the very same single method.`,
              ],
              correctIndex: 1,
              explanation: `Originalism interprets the Constitution by its original meaning (changeable only by amendment); the living-Constitution approach holds that its meaning can evolve to fit new circumstances. The distractors invent false distinctions or conflate the two.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Brown v. Board of Education (1954) decide?`,
              options: [
                `That racial segregation in public schools is unconstitutional.`,
                `That the Supreme Court should have only five justices.`,
                `That states may ignore the Fourteenth Amendment.`,
                `That public schools should be funded entirely by the federal government.`,
              ],
              correctIndex: 0,
              explanation: `Brown declared that segregated public schools are "inherently unequal" and unconstitutional under the Fourteenth Amendment, overturning "separate but equal" and helping launch the Civil Rights Movement. The distractors are unrelated to the ruling.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the Dred Scott v. Sandford (1857) decision demonstrate about the Supreme Court?`,
              options: [
                `That the Court has never made a serious mistake in its history.`,
                `That the Court can be gravely wrong and entrench injustice, not just advance it.`,
                `That the Court has no real power over people's lives.`,
                `That the Court always protects the rights of the powerless.`,
              ],
              correctIndex: 1,
              explanation: `Dred Scott, denying Black Americans citizenship and any rights, is widely regarded as the Court's worst decision, proving the Court is fallible and can entrench grave injustice. The distractors falsely claim the Court is infallible or powerless.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "precedent," and why does it matter?`,
              options: [
                `A law passed by Congress that the Court must always obey forever.`,
                `The official order in which the various justices are allowed to speak aloud during a court session.`,
                `A past decision that guides later cases, giving the law stability though it can be overturned.`,
                `The requirement that all cases be decided within one year.`,
              ],
              correctIndex: 2,
              explanation: `Precedent is a past court decision that guides similar future cases, providing stability, though the Court can overturn it, as Brown overturned "separate but equal." The distractors confuse precedent with statutes, procedure, or deadlines.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because the Supreme Court is the highest court in the land, its decisions are always just and correct, and a good citizen should simply accept any ruling it makes without question.`,
              correctAnswer: false,
              explanation: `False, and understanding why is one of the most important lessons about how to engage with the Supreme Court as a thinking citizen. While the Supreme Court is indeed the highest court and its rulings are legally binding and final within the legal system, being the final legal authority is not the same as being morally right or always just. The Court is made up of nine human beings who interpret contested constitutional words, and history proves beyond any doubt that they can get things terribly wrong. The clearest example is Dred Scott v. Sandford (1857), in which the Court ruled that Black people could not be citizens and had "no rights which the white man was bound to respect", a decision now universally condemned as a moral catastrophe that helped push the nation toward civil war. The very same institution that issued that ruling also, decades later, issued Brown v. Board of Education (1954), one of the most celebrated advances for justice in American history. This is the essential double lesson about the Court: its power is real (its interpretations can reshape the lives of hundreds of millions, for better or worse), but the Court is also fallible (its rulings reflect the particular human beings on it and the era they live in). Decisions once celebrated can later be condemned, and decisions once accepted can later be overturned, as Brown overturned the earlier "separate but equal" precedent. Precisely because the Court can both advance justice and betray it, a thoughtful citizen does not treat "the Supreme Court said so" as the end of all moral or political discussion. Instead, the informed response is to read the Court's decisions critically: to examine what was at stake, how the justices reasoned, which interpretive method they used, and what the consequences were, and then to form one's own judgment about whether the ruling was sound and just. This critical engagement is not disrespect for the Court or the rule of law; it is exactly the responsibility of a citizen in a self-governing society. Indeed, many of the Court's own corrections of past injustice came because citizens, scholars, and later justices refused to simply accept earlier rulings as automatically right. So the statement is false: the Supreme Court's rulings are legally final but not automatically just or correct, and a good citizen should engage them thoughtfully and critically, not accept them blindly.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A new technology raises a free-speech question the founders never imagined. One justice argues the Court should rule based on what "freedom of speech" meant in 1791; another argues it should apply the principle of free speech to today's world. Using the lesson, what's the best analysis of this disagreement?`,
              options: [
                `The justices are confused, because the Constitution clearly answers every modern question on its own.`,
                `This is the core interpretation debate, originalism versus the living Constitution, and because the Constitution's words don't interpret themselves, the method a justice uses often determines the outcome, which is exactly why interpretation is so consequential and contested.`,
                `The disagreement proves the First Amendment no longer applies to anyone.`,
                `Whichever justice is older should automatically decide the meaning.`,
              ],
              correctIndex: 1,
              explanation: `This is the central interpretation debate: originalism (original meaning) versus the living Constitution (evolving meaning). Because the words don't interpret themselves, the chosen method often decides the case, which is why interpretation is so consequential and why nominations are fought over. The distractors deny that interpretation is needed or trivialize it.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-old-words`, category: `A few old words`, prompt: `Nine unelected people, reading words written centuries ago, can reshape the rights of hundreds of millions, and they've used that power for both profound justice and profound injustice. How does it feel to realize so much depends on how a few human beings read a few old words?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you may have assumed the Supreme Court simply applies clear rules. What surprised you most, that it claimed its own greatest power, that interpretation is unavoidable, or that it has been gravely wrong? What changed in your thinking?` },
            { id: `reflect-fallible`, category: `When the highest court is wrong`, prompt: `Dred Scott proves the Court can be monstrously unjust, yet its word is legally final. How should a citizen respond when they believe the Court has ruled wrongly, and where is the line between respecting the law and resisting injustice?` },
            { id: `reflect-heritage`, category: `Teaching the cases`, prompt: `Caro, you're building social studies for conscious families. How would you help a child read a real landmark case, perhaps Brown or Gideon, and feel that these decisions are living moments where the Constitution touched real human lives, rather than dusty legal trivia?` },
            { id: `reflect-method`, category: `How would you read it`, prompt: `Originalism keeps meaning fixed; the living Constitution lets it evolve. For a question the founders never imagined, which approach do you find more convincing, and what does your answer reveal about how you think old principles should meet new realities?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Judicial review lets unelected judges overrule the people's elected representatives. What's the strongest version of the argument that this is undemocratic, and what's the strongest reply, and after weighing both, where do you actually land?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Supreme Court Justices`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a real encounter with how the Supreme Court works and why it matters, making the most powerful court in the country something your family can actually understand. Start by grasping judicial review: discuss the strange, enormous power of nine unelected people to strike down laws passed by hundreds of elected officials, and talk about where that power came from (Marbury v. Madison, 1803) and whether your family thinks it's a good idea. Read a real landmark case together: pick one from the lesson, Brown v. Board of Education, Gideon v. Wainwright, or even Dred Scott (handled with care, as an example of grave injustice), and learn the actual story: who was involved, what was at stake, what the Court decided, and how it changed the country. Make it human, these were real people whose lives turned on the ruling. Hold your own "court": present a simple, age-appropriate constitutional question (for example, "Can a school stop a student from wearing a shirt with a political message?") and have family members act as justices, hearing both sides, reasoning aloud about what "freedom of speech" should mean, and issuing a ruling with reasons. Notice how you can't just "apply the words", you have to interpret them. Explore the two methods: discuss originalism (read the Constitution by its original meaning) versus the living Constitution (let the meaning evolve), and apply both to your case, seeing how the same words can lead to different answers depending on the method. Confront fallibility: talk about how the same Court gave us both Brown (justice) and Dred Scott (injustice), and what that means about treating the Court's word as automatically right. Find the Court in the news: look up a recent or upcoming Supreme Court case and discuss what's at stake, who it affects, and how it connects to the lesson. Finally, make it personal: identify a freedom your family cares about, speech, privacy, fair treatment, and discuss how Supreme Court decisions shape it. The goal is to move from seeing the Court as a remote, mysterious body to understanding it as a powerful, fallible, deeply human institution whose interpretations shape your daily rights, one you can now read, question, and judge for yourself.`,
          },
          projectOption: {
            title: `The Landmark Case Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a real Supreme Court case in depth and judge it for yourself, becoming someone who can read the Court's actual work rather than just hearing about it. Week 1, choose and research a landmark case: pick a real Supreme Court decision that interests you, Brown v. Board of Education, Gideon v. Wainwright, Marbury v. Madison, Tinker v. Des Moines (students' free speech), Miranda v. Arizona (rights when arrested), or another that matters to you. Research it carefully as a primary-source investigation: What were the actual facts, and who were the real people involved? What constitutional question did the case raise? What did the Court decide, and what was its reasoning? Was the decision unanimous, or were there dissents, and what did the dissenters argue? What interpretive approach (originalist, living-Constitution, or other) does the reasoning reflect? And crucially, what did the ruling change, for the parties, and for the country? Week 2, analyze and judge: step back and evaluate the case as a legal analyst. Was the Court's reasoning sound? Do you agree with the outcome, and why or why not? How does the case illustrate the lesson's big themes, judicial review, counter-majoritarian power, interpretation method, the Court advancing or betraying justice, turning paper rights into real ones? If there were dissents, do you find the majority or the dissent more convincing? Then connect it to now: is this case still good law, has it been challenged or overturned, and does its question still matter today? Produce your final piece, a case brief, a "you be the judge" presentation, a documentary-style video, an illustrated explainer, or a mock opinion of your own, that walks others through the facts, the decision, the reasoning, and your reasoned judgment of whether the Court got it right. The aim is to experience constitutional law the way it actually exists, not as settled rules, but as real human disputes where the meaning of old, powerful words gets decided, and to develop the rare and valuable ability to read a Supreme Court case critically and form your own informed judgment about one of the most consequential institutions in your life.`,
            offerToParent: `Parent: opt your child into the Landmark Case Project. Researching a real Supreme Court case, Brown, Gideon, Tinker, Miranda, or another, as a primary-source investigation (facts, constitutional question, reasoning, dissents, interpretive method, and consequences), then judging the Court's reasoning for themselves, directly develops core C3 Framework civics concepts: the role of the judiciary, judicial review, constitutional interpretation, landmark cases, and how courts shape rights and society. Reading actual cases critically, weighing majority and dissenting reasoning, and forming an evidence-based judgment builds legal literacy, critical reading, and civic reasoning at a genuinely high level. It's rigorous, standards-aligned work that turns the Supreme Court from a remote mystery into something your child can read, analyze, and engage as an informed citizen.`,
          },
          identityQuestion: `If you become someone who can read a real Supreme Court case, trace how the justices reasoned, recognize the interpretive method at work, and judge for yourself whether the Court advanced justice or betrayed it, who understands that the meaning of the Constitution depends on how human beings choose to read it, what kind of citizen does that make you, one who can engage the most powerful court in the country as a critical thinker rather than treating its word as automatically right, that someone who sees the Court as a remote mystery never can?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read a real Supreme Court case and judge the reasoning.`,
            `A person who knows the Constitution's meaning depends on how it's read.`,
            `Someone who respects the Court's power without assuming it's always right.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just done what most citizens never do: you've gone inside the Supreme Court and read its actual work, instead of treating it as a distant mystery. You learned what the Court does, interpret the law and the Constitution, and grasped its most consequential power, judicial review, the authority to strike down laws as unconstitutional, which it claimed for itself in Marbury v. Madison in 1803. You confronted the deep puzzle that the Constitution's words don't interpret themselves, and the genuine debate between originalism, fixed original meaning, and the living Constitution, meaning that evolves, a debate that often decides how cases come out. You faced the hardest truth of all: the Court is powerful but fallible. The same institution gave us Brown v. Board of Education, dismantling school segregation and advancing justice, and Dred Scott, denying Black Americans citizenship and helping push the nation toward war. And as a legal analyst, you read five real landmark cases as primary sources, the Court claiming its power, advancing justice, betraying it, making a paper right real for a poor man who handwrote his appeal from prison, and wrestling with words too old for the questions they now face. You can now read the Court critically, weighing its reasoning rather than assuming it's right. Next, we step out of the courtroom and into the messy, vital arena of democratic politics itself: political parties and elections, how citizens actually organize, compete, and choose who governs, and the real debates about whether that system serves democracy well. Onward, {name}. — Atlas`,
          badge: `court-interpreter`,
          badgeName: `Court Interpreter`,
          xpEarned: 75,
          competencies: [
            `Understands the Supreme Court's role: interpreting the law and the Constitution`,
            `Knows judicial review and that the Court claimed it in Marbury v. Madison (1803)`,
            `Understands why the Court's power is counter-majoritarian and why that is debated`,
            `Can distinguish originalism from the living-Constitution approach to interpretation`,
            `Knows landmark cases that advanced justice (Brown, Gideon) and betrayed it (Dred Scott)`,
            `Understands precedent and that the Court is powerful but fallible`,
            `Can read a real Supreme Court case critically, weighing reasoning, method, and consequences`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: American Political Parties and Electoral Politics`,
            hook: `How citizens organize, compete, and choose who governs, and whether the system serves democracy well. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L04 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
