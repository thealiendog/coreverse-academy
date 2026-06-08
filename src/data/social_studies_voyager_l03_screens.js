// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L03 — Civil Liberties and Civil Rights: A Living History
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics) — D2.Civ
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l03-v1";

const SOCIAL_STUDIES_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-03`,
      title: `Civil Liberties and Civil Rights: A Living History`,
      duration: 35,
      xpReward: 75,
      badge: `liberties-guardian`,
      badgeName: `Liberties Guardian`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, the Constitution divides power to prevent tyranny. But here's the harder problem: what protects individuals from majorities who want to use that power against them? Civil liberties and civil rights — those protections are not gifts; they were won through conflict, litigation, and sustained organizing. And they've never been fully settled. This lesson traces that history and asks you to sit with the live tensions that remain.`,
          headline: `Civil Liberties and Civil Rights: A Living History`,
          subtitle: `The protections that guard individuals even from the government and the majority, and the long fight to expand them. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Words People Confuse`,
          paragraphs: [
            `People use "civil liberties" and "civil rights" as if they're the same. They're not, and the difference matters. Civil liberties are the freedoms government cannot take from you, protections of the individual against government power: speech, religion, privacy, a fair trial. Zones where the government is told "hands off."`,
            `Civil rights are different. They're your right to be treated equally and free from discrimination, your protection against being denied opportunities because of who you are, your race, sex, or religion. Where civil liberties say what government can't do to you, civil rights often involve government acting to protect you from unequal treatment.`,
            `Here's a simple way to hold the difference: civil liberties are about freedom (government leaving you alone), while civil rights are about equality (everyone getting fair treatment). Free speech is a civil liberty. The right not to be turned away from a job because of your race is a civil right. Both are essential, and both had to be fought for, bitterly.`,
          ],
          image: `/voyager-assets/social-studies/l03-s1-two-words.webp`,
          imageCaption: `People use "civil liberties" and "civil rights" as if they're the same. They're not. CIVIL LIBERTIES are the freedoms government CANNOT take from you, protections of the individual against government power: free speech, freedom of religion, privacy, a fair trial. Zones where government is told "hands off." CIVIL RIGHTS are your right to be treated EQUALLY and free from discrimination, protection from being denied opportunities because of who you are, your race, sex, or religion. A way to hold the difference: civil liberties are about FREEDOM (government leaving you alone), civil rights are about EQUALITY (everyone getting fair treatment). Free speech is a liberty. The right not to be turned away from a job because of your race is a right. Both had to be fought for.`,
          vocab: [
            { word: `civil liberties`,
              definition: `The fundamental freedoms that government cannot take away, such as speech, religion, privacy, and fair trials. They protect the individual against government power.`,
              audioPrompt: `Civil liberties, {name}, are the freedoms the government is forbidden to take from you, free speech, freedom of religion, the right to privacy, the right to a fair trial. They draw a line around the individual and tell the government "you may not cross here." Think of them as protected zones where you're free from government interference. Which of your civil liberties would you miss most if it suddenly vanished, and why does that one matter so much to you?` },
            { word: `civil rights`,
              definition: `The right to be treated equally and free from discrimination. Civil rights protect people from being denied fair treatment or opportunity because of who they are.`,
              audioPrompt: `Civil rights, {name}, are about equality: your right to be treated fairly and not be discriminated against because of your race, sex, religion, or other traits. Where civil liberties keep government off your back, civil rights often require action, by government and society, to ensure everyone gets equal treatment and opportunity. The right not to be denied a job or a school spot because of your skin color is a civil right. Why do you think equality often takes active effort to protect, not just leaving people alone?` },
            { word: `liberty`,
              definition: `The core distinction: civil liberties protect freedom (government leaving you alone in protected areas), while civil rights protect equality (everyone receiving fair, equal treatment).`,
              audioPrompt: `Liberty versus equality, {name}, is the simplest way to keep these straight. Civil liberties are about freedom, the government leaving you alone in protected areas like speech and religion. Civil rights are about equality, making sure everyone is treated fairly and no one is shut out because of who they are. Sometimes these two values even tension with each other, which is part of what makes rights debates so hard. Can you think of a situation where one person's freedom might clash with another person's equal treatment?` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Protection From The Majority`,
          paragraphs: [
            `Here's the deep idea that makes rights so important: they protect you not just from a tyrant, but from the majority. In a pure democracy, whatever most people want happens. But what if the majority wants to silence or strip the rights of a minority? Pure majority rule can become "tyranny of the majority," the many oppressing the few, and calling it democracy.`,
            `The founders feared this. James Madison warned of "factions", groups, even majorities, pursuing their interests at others' expense. The solution: put certain rights beyond ordinary majority votes. No matter how many people want to ban your religion or silence your speech, they can't, because the Constitution protects those rights, and a simple majority cannot override it.`,
            `This is why rights are called "counter-majoritarian", they deliberately limit what majorities can do. It's also why courts play a key role: unelected judges can strike down even popular laws that violate rights, precisely because they're insulated from majority pressure. Some things are simply off the table, no matter the vote. Democracy plus rights, not democracy alone.`,
          ],
          image: `/voyager-assets/social-studies/l03-s2-majority.webp`,
          imageCaption: `The deep idea that makes rights matter: they protect you not just from a tyrant, but from the MAJORITY. In pure democracy, whatever most people want happens. But what if the majority wants to silence or persecute a minority? Pure majority rule can become TYRANNY OF THE MAJORITY, the many oppressing the few, and calling it democracy. The founders feared this; James Madison warned of "factions." The solution: put certain rights beyond ordinary majority votes. No matter how many want to ban your religion, they can't, the Constitution protects it, and a simple majority can't override it. This is why rights are COUNTER-MAJORITARIAN, and why courts can strike down even popular laws that violate rights. Democracy PLUS rights, not democracy alone.`,
          vocab: [
            { word: `tyranny majority`,
              definition: `When a majority uses its power to oppress or strip the rights of a minority. A democracy can do this just as a dictator can, which is why rights must limit majority power.`,
              audioPrompt: `Tyranny of the majority, {name}, is a danger people often miss: a majority can oppress a minority just as cruelly as any dictator, and call it democracy because most people voted for it. Imagine ninety percent of a town voting to silence the other ten percent. That's why rights exist, to protect the few from the many. Democracy alone isn't enough; you need democracy plus protected rights. Can you think of a time the majority wanting something didn't make it right?` },
            { word: `counter-majoritarian`,
              definition: `Describing protections, like constitutional rights and the courts that enforce them, that deliberately limit what even a majority can do, putting some things beyond ordinary votes.`,
              audioPrompt: `Counter-majoritarian, {name}, is a big word for a powerful idea: some protections deliberately limit what even the majority can do. Your right to free speech or a fair trial isn't up for a vote, no matter how many people want to take it away. Courts can strike down popular laws that violate these rights, precisely because judges are shielded from majority pressure. It's democracy with guardrails. Does it surprise you that protecting freedom sometimes means limiting what the majority can decide?` },
            { word: `factions`,
              definition: `James Madison's term for groups, even majorities, that pursue their own interests at the expense of others' rights or the common good. Rights and structure are meant to control them.`,
              audioPrompt: `Factions, {name}, was James Madison's word for groups, even large majorities, that chase their own interests at the expense of other people's rights or the common good. Madison worried deeply about this in the Federalist Papers, because a faction that becomes the majority can vote to trample everyone else. The whole design of rights and divided power was meant to control factions without crushing the freedom that creates them. Where do you see "factions" pushing their interests in the world today?` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where The Protections Live`,
          paragraphs: [
            `These protections are anchored in the Constitution. The Bill of Rights, the first ten amendments (1791), lists core civil liberties: speech, press, religion, and assembly (First Amendment); protection from unreasonable searches (Fourth); the right to a fair trial and a lawyer (Fifth, Sixth); protection from cruel and unusual punishment (Eighth). These are the "hands off" zones.`,
            `But the Bill of Rights originally limited only the federal government, and protected only some people. The turning point came after the Civil War: the Fourteenth Amendment (1868) guaranteed "equal protection of the laws" and "due process" to all, and over time was used to apply most of the Bill of Rights to the states too. It's the engine of modern civil rights.`,
            `Together, these create a layered shield: the Bill of Rights protects liberties, the Fourteenth Amendment guarantees equal protection against the states. But, and this is key, writing a right on parchment does not make it real. For most of American history these promises were denied to millions, and turning words into reality took generations of struggle.`,
          ],
          image: `/voyager-assets/social-studies/l03-s3-where.webp`,
          imageCaption: `These protections are anchored in the Constitution. The BILL OF RIGHTS, the first ten amendments (1791), lists core civil liberties: speech, press, religion, assembly (First); protection from unreasonable searches (Fourth); fair trial, right to silence, to a lawyer (Fifth, Sixth); no cruel and unusual punishment (Eighth). These are the "hands off" zones. But it originally limited only the FEDERAL government and protected only some people. The turning point: after the Civil War, the FOURTEENTH AMENDMENT (1868) guaranteed "equal protection of the laws" and "due process" to all, and over time applied most of the Bill of Rights to the states too, the engine of modern civil rights. But writing a right on parchment doesn't make it real. Turning words into reality took generations of struggle.`,
          vocab: [
            { word: `Bill of Rights`,
              definition: `The first ten amendments to the U.S. Constitution (1791), which list core civil liberties such as freedom of speech, religion, and the press, and the rights to fair legal process.`,
              audioPrompt: `The Bill of Rights, {name}, is the first ten amendments to the Constitution, added in 1791, and it's where many of your core civil liberties live. The First Amendment protects speech, press, religion, and assembly; others protect you from unreasonable searches and guarantee fair trials. These were added because many people refused to accept the Constitution without an explicit list of "hands off" protections. Which First Amendment freedom, speech, religion, press, or assembly, do you think matters most for a free society, and why?` },
            { word: `Fourteenth Amendment`,
              definition: `The 1868 amendment guaranteeing "equal protection of the laws" and "due process" to all, and used over time to apply most of the Bill of Rights to the states. The engine of modern civil rights.`,
              audioPrompt: `The Fourteenth Amendment, {name}, passed in 1868 after the Civil War, is one of the most important in the whole Constitution. It guarantees everyone "equal protection of the laws" and "due process", and over time it was used to make the Bill of Rights apply to state governments, not just the federal one. Almost every major civil rights victory traces back to it. It turned a promise of equality into a constitutional command. Why do you think it took a civil war to add a guarantee of equal protection?` },
            { word: `equal protection`,
              definition: `The Fourteenth Amendment's guarantee that government must treat people equally under the law and cannot unfairly discriminate. The foundation of most civil rights claims.`,
              audioPrompt: `Equal protection, {name}, is the Fourteenth Amendment's promise that the government must treat people equally under the law and may not unfairly single out groups for worse treatment. It's the legal foundation for striking down discrimination, in schools, voting, jobs, and more. But notice: the promise was written in 1868, yet equal treatment was denied to millions for another century. A right on paper and a right in reality are two very different things. Why do you think that gap between promise and practice lasted so long?` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Rights Are Won, Not Given`,
          paragraphs: [
            `Here is the most important truth here: rights on paper are not rights in practice. For most of American history, the Constitution's promises were denied to millions. Enslaved people had no rights. After slavery, Black Americans faced a century of segregation. Women couldn't vote nationally until 1920. The gap between words and reality didn't close on its own.`,
            `It closed, where it has, because people denied rights organized, protested, and sometimes died to claim them. Abolitionists like Frederick Douglass fought slavery; suffragists like Susan B. Anthony fought for women's vote. The Civil Rights Movement, led by King and Rosa Parks, dismantled segregation through Brown v. Board and the Civil Rights Act of 1964.`,
            `This is why rights are a "living history", not a finished gift handed down in 1791, but an ongoing struggle, expanding (and sometimes contracting) as people fight to make the promises real for more people. The same pattern appears worldwide, in Latin America's struggles for indigenous rights, labor rights, and democracy. Rights are won by those who demand them.`,
          ],
          image: `/voyager-assets/social-studies/l03-s4-won.webp`,
          imageCaption: `The most important truth here: rights on PAPER are not rights in PRACTICE. For most of American history, the Constitution's promises were denied to millions. Enslaved people had no rights. After slavery, Black Americans faced a century of legal segregation and violence. Women couldn't vote nationally until 1920. The gap between words and reality was vast, and didn't close on its own. It closed because people DENIED rights organized, protested, sued, marched, and sometimes died: abolitionists like Frederick Douglass, suffragists like Ida B. Wells and Susan B. Anthony, the Civil Rights Movement, King, Rosa Parks, Brown v. Board, the Civil Rights Act of 1964. Rights are a LIVING HISTORY, won by those who demand them, defended by each generation, including yours.`,
          vocab: [
            { word: `rights as struggle`,
              definition: `The principle that rights written into law become real only through the organizing, protest, and sacrifice of people who were denied them and fought to claim them.`,
              audioPrompt: `Rights as struggle, {name}, is the hard truth that a right written in a document means little until people fight to make it real. Almost every freedom you take for granted, equal schooling, the vote for women, the end of legal segregation, was won by people who were denied it and organized, protested, and sometimes died to claim it. Rights weren't simply handed down; they were demanded and defended. Whose struggle do you think you most benefit from today, perhaps without even realizing it?` },
            { word: `civil rights`,
              definition: `The mid-20th-century struggle, led by figures like Martin Luther King Jr. and Rosa Parks, that dismantled legal segregation through protest, court cases, and landmark laws.`,
              audioPrompt: `The Civil Rights Movement, {name}, was the mid-twentieth-century struggle that finally forced America to begin honoring its promise of equal protection for Black Americans. Through boycotts, marches, and courage in the face of violence, led by people like Martin Luther King Jr. and Rosa Parks, and through court victories like Brown versus Board of Education and laws like the Civil Rights Act of 1964, it dismantled legal segregation. It shows rights being won, not given. What does it tell you that this came nearly a century after the Fourteenth Amendment promised equality?` },
            { word: `living history`,
              definition: `The idea that rights are not a finished gift but an ongoing, unfinished struggle, expanding and sometimes contracting over time as each generation fights to make promises real.`,
              audioPrompt: `Living history, {name}, means rights aren't a finished gift handed down once and for all, they're an ongoing struggle, still unfolding. They expand when people fight for them, and they can even shrink if no one defends them. The promises written in 1791 and 1868 are still being made real, for more and more people, generation after generation. That means the story isn't over, and you're part of it. What rights do you think your generation will have to fight to protect or expand?` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Civil liberties are freedoms government cannot take (speech, religion, privacy, fair trials), about freedom; civil rights are your protection from discrimination, about equality. Both protect you not only from a tyrant but from the majority itself, because pure majority rule can become tyranny of the majority.`,
            `These protections are anchored in the Bill of Rights (core liberties) and the Fourteenth Amendment (equal protection, the engine of modern civil rights), and they're counter-majoritarian, beyond ordinary votes, which is why courts can strike down even popular laws that violate them. But rights on paper aren't rights in practice; they were won through struggle.`,
            `Now the hard part. Rights aren't simple, and they constantly collide, with each other, with security, with other rights. Your free speech can clash with someone's safety; liberty can clash with equality. Where should the lines fall? These questions have no single right answer. So the debate screen presents five voices on balancing rights. Don't crown a winner. Understand the tensions, and form your own view.`,
          ],
          image: `/voyager-assets/social-studies/l03-s5-before.webp`,
          imageCaption: `Threads together. CIVIL LIBERTIES are freedoms government can't take (speech, religion, privacy, fair trials), about FREEDOM; CIVIL RIGHTS are protection from discrimination, about EQUALITY. Both protect you from a tyrant AND from the MAJORITY, since pure majority rule can become tyranny of the majority. They're anchored in the BILL OF RIGHTS (liberties) and the FOURTEENTH AMENDMENT (equal protection), and are COUNTER-MAJORITARIAN, beyond ordinary votes, which is why courts can strike down popular laws that violate them. But rights on paper aren't rights in practice; they were WON through struggle. Now the hard part: rights constantly COLLIDE, with each other, with security, with other rights. The debate screen presents five voices on where the lines should fall.`,
          vocab: [
            { word: `rights in conflict`,
              definition: `The reality that rights frequently collide, one person's liberty against another's, free speech against safety, liberty against equality, forcing hard judgments about where lines should fall.`,
              audioPrompt: `Rights in conflict, {name}, is what makes rights genuinely hard rather than simple. Your right to speak can collide with someone else's right to safety; one person's religious liberty can clash with another's right to equal treatment. Rights aren't a tidy list, they constantly bump into each other, and into other goods like security and order. Resolving those clashes requires judgment, not just rules. Can you think of two rights that might genuinely conflict, where protecting one means limiting the other?` },
            { word: `limits rights`,
              definition: `The principle that almost no right is absolute; rights are weighed against other rights and compelling public needs, and reasonable people disagree about where the limits lie.`,
              audioPrompt: `The limits of rights, {name}, is the recognition that almost no right is completely absolute. Free speech doesn't protect threats or fraud; freedom of action stops where it harms others. Rights get weighed against other rights and against compelling public needs like safety. The hard question is always where to draw the line, and thoughtful people genuinely disagree. That's not a flaw, it's the real work of a free society. Where do you think your own rights should end, and someone else's begin?` },
            { word: `defending rights`,
              definition: `The ongoing responsibility of each generation to protect and extend rights, since rights can erode or be taken away if citizens stop understanding and defending them.`,
              audioPrompt: `Defending rights, {name}, is the job that never ends. Rights can expand, but they can also shrink or be taken away if people stop paying attention. Every generation inherits rights others fought for, and has to understand them, value them, and defend them, or risk losing them. That's part of what it means to be a citizen rather than just a resident. As you grow up, what role do you imagine yourself playing in protecting the rights you've inherited?` },
          ],
        },

        {
          id: `l03-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: Where Should The Lines Fall?`,
          intro: `{name}, rights are essential, but they collide, with each other, with safety, with the majority's will. Where should the lines fall? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view, because you'll spend your life exercising these rights, and helping decide their limits.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The liberty-first defender`,
              era: `A view on rights`,
              stance: `Individual freedoms must be protected almost absolutely, the moment we let government limit them "for good reasons," we open the door to tyranny.`,
              quote: `"Every limit on freedom sounds reasonable at first. That's exactly why we must guard the line so fiercely."`,
              argument: `Civil liberties, especially speech, religion, and privacy, are the bedrock of a free society and must be protected with near-absolute firmness. History shows that governments and majorities always have "good reasons" to restrict freedom, safety, order, decency, and those reasons are exactly how liberty erodes, one reasonable-sounding step at a time. The safest course is to keep the protected zones wide and resist almost all encroachment, even when a limit seems justified.`,
              evidence: `The First Amendment's strong speech protections; historical examples of "reasonable" restrictions used to silence dissent; the founders' deep fear of concentrated power; the counter-majoritarian design of rights.`,
              strengths_and_limits: `Strength: rightly warns that freedoms erode gradually through reasonable-sounding limits, and that a wide protected zone is the best safeguard against creeping tyranny. Limit: treating rights as nearly absolute ignores genuine cases where one person's freedom truly harms others, and can leave the vulnerable unprotected.`,
            },
            {
              id: `p2`,
              voice: `The equality champion`,
              era: `A view on rights`,
              stance: `Freedom on paper means little without real equality, sometimes government must act, and even limit some freedoms, to protect people from discrimination.`,
              quote: `"A 'freedom' that lets some people shut others out of jobs, schools, and dignity isn't freedom, it's privilege."`,
              argument: `Civil rights, equal treatment, are as essential as civil liberties, and history shows that formal freedom without enforced equality leaves the powerful free to oppress the weak. Ending segregation, banning discrimination in jobs and housing, and guaranteeing equal protection sometimes required government to act and even to limit certain "freedoms" (like the freedom to discriminate). Real liberty for all sometimes demands constraining the few who would deny it to others.`,
              evidence: `The Fourteenth Amendment's equal protection clause; Brown v. Board of Education; the Civil Rights Act of 1964 limiting the "freedom" to discriminate; the century-long gap between rights on paper and in practice.`,
              strengths_and_limits: `Strength: insists that rights must be real for everyone, not just formal, and recognizes that protecting equality sometimes requires active government effort. Limit: empowering government to limit freedoms in the name of equality can be misused, and raises hard questions about which freedoms may be constrained, and who decides.`,
            },
            {
              id: `p3`,
              voice: `The security balancer`,
              era: `A view on rights`,
              stance: `Rights are vital, but not absolute, in real emergencies, some freedoms can be reasonably limited to protect public safety and order.`,
              quote: `"Rights matter most when you're alive and safe to exercise them. Sometimes security has to come into the balance."`,
              argument: `No right is truly absolute; even free speech doesn't protect threats or fraud. In a real society facing real dangers, crime, terrorism, public health crises, rights must sometimes be balanced against security and the common good. Reasonable, carefully limited restrictions (a search with a warrant, limits on speech that incites violence, emergency measures in a pandemic) can be legitimate. The goal is balance, not treating any single right as untouchable.`,
              evidence: `Established limits on speech (threats, incitement, fraud); the Fourth Amendment allowing reasonable searches with warrants; the principle that rights are weighed against compelling public needs.`,
              strengths_and_limits: `Strength: realistic that rights aren't absolute and must coexist with genuine needs like safety, which even strong rights traditions acknowledge. Limit: "balancing for security" is the exact justification used throughout history to erode rights, and "emergencies" have a way of becoming permanent, so this view risks giving too much away.`,
            },
            {
              id: `p4`,
              voice: `The democratic majoritarian`,
              era: `A view on rights`,
              stance: `In a democracy, the people should ultimately decide, we should be cautious about letting unelected judges override the majority's will too freely.`,
              quote: `"If unelected judges can strike down whatever the people vote for, in what sense do the people still rule?"`,
              argument: `Democracy means the people govern themselves. While core rights deserve protection, there's a real danger in letting a handful of unelected judges override the considered will of the majority too freely, it can feel like rule by court, not by people. Many genuine disagreements about rights are matters on which reasonable people differ, and those should often be settled through democratic debate and elections, not handed to judges to decide for everyone.`,
              evidence: `The counter-majoritarian tension in judicial review; the principle of consent of the governed (Lesson 1); historical cases where courts both protected and violated rights; the value of democratic self-government.`,
              strengths_and_limits: `Strength: takes self-government seriously and warns against an over-powerful judiciary substituting its judgment for the people's on genuinely contested questions. Limit: pure majoritarianism is exactly what produces tyranny of the majority, the whole reason rights were placed beyond ordinary votes in the first place.`,
            },
            {
              id: `p5`,
              voice: `The living-Constitution advocate`,
              era: `A view on rights`,
              stance: `Rights must keep expanding as society grows, the meaning of equality and liberty should evolve to include those once left out.`,
              quote: `"The promise was 'all,' but 'all' kept growing. Our job is to keep widening the circle until it's true."`,
              argument: `The Constitution's promises, liberty, equal protection, were written in eras that excluded most people, and their true meaning has unfolded over time as society recognized more groups as deserving full rights. Rights are a living history: the work of each generation is to extend the promise of equal liberty to those still left out, continuing the expansion that freed the enslaved, enfranchised women, and ended legal segregation. Progress means widening the circle.`,
              evidence: `The expansion of rights over time (abolition, women's suffrage, the Civil Rights Movement); the gap between original exclusions and later inclusion; the "living history" framing; parallel global struggles for indigenous and labor rights.`,
              strengths_and_limits: `Strength: honors the real historical pattern by which rights expanded, and rightly insists the promise of equality should reach everyone, not just those originally included. Limit: "evolving meaning" raises hard questions about who decides the new meaning and how, and critics worry it can untether rights from any fixed, agreed foundation.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land on balancing rights? When freedoms collide, or rights clash with safety or the majority's will, which considerations matter most to you, and why? Which voice challenged your thinking most? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `Almost every right you take for granted was denied to someone once, and won by people who fought, and sometimes died, to claim it. How does it feel to hold rights you didn't earn but inherited, and what responsibility, if any, do you think that places on you?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the difference between civil liberties and civil rights?`,
              options: [
                `They are simply two completely different names that both refer to exactly the same single thing.`,
                `Civil liberties are freedoms government can't take (freedom); civil rights are protection from discrimination (equality).`,
                `Civil liberties apply only to citizens; civil rights apply only to foreigners.`,
                `Civil rights are simply freedoms, while civil liberties are really all about money and personal finances.`,
              ],
              correctIndex: 1,
              explanation: `Civil liberties protect freedom, the government leaving you alone in protected areas like speech and religion; civil rights protect equality, fair treatment free from discrimination. The distractors conflate or scramble the two.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "tyranny of the majority"?`,
              options: [
                `When a single dictator seizes total control of a country.`,
                `When the national government has far too few working branches to function at all.`,
                `When a majority uses its power to oppress or strip the rights of a minority.`,
                `When the minority refuses to accept any election results.`,
              ],
              correctIndex: 2,
              explanation: `Tyranny of the majority is when the many use democratic power to oppress the few, which a democracy can do just as a dictator can, the reason rights must limit majority power. The distractors describe a dictator, weak government, or sore losers.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why are protected rights described as "counter-majoritarian"?`,
              options: [
                `Because they can be changed by any simple majority vote.`,
                `Because they deliberately limit what even a majority is allowed to do.`,
                `Because only the majority is allowed to claim them.`,
                `Because they apply only during elections.`,
              ],
              correctIndex: 1,
              explanation: `Rights are counter-majoritarian because they put certain things beyond the reach of ordinary majority votes, which is why courts can strike down even popular laws that violate them. The distractors reverse or trivialize the idea.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the Bill of Rights primarily protect?`,
              options: [
                `The government's power to tax and regulate businesses.`,
                `The right of individual states to simply ignore any federal law they happen to dislike.`,
                `The power of the majority to make any law it wants.`,
                `Core civil liberties like speech, religion, fair trials, and protection from unreasonable searches.`,
              ],
              correctIndex: 3,
              explanation: `The Bill of Rights (the first ten amendments, 1791) lists core civil liberties, speech, religion, press, assembly, fair trials, protection from unreasonable searches, the "hands off" zones for government. The distractors describe government powers, not protections.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is the Fourteenth Amendment (1868) so important to civil rights?`,
              options: [
                `It guarantees equal protection and due process, and was used to extend rights against the states.`,
                `It completely abolished the entire Supreme Court of the United States entirely.`,
                `It simply gave the president unlimited power to ignore both of the other branches.`,
                `It made the Bill of Rights apply only to the federal government.`,
              ],
              correctIndex: 0,
              explanation: `The Fourteenth Amendment guarantees "equal protection of the laws" and "due process" to all and was used over time to apply most of the Bill of Rights to the states, the engine of modern civil rights. The distractors are false.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does it mean that "rights on paper are not rights in practice"?`,
              options: [
                `That written rights automatically protect everyone equally.`,
                `That written rights only ever exist if they are printed onto official government paper.`,
                `That a right written into law becomes real only when people fight to enforce it.`,
                `That paper documents are more important than people's actions.`,
              ],
              correctIndex: 2,
              explanation: `For most of history the Constitution's promises were denied to millions; rights became real only through generations of organizing, protest, and struggle by those denied them. The distractors miss the gap between promise and practice.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Which of these correctly pairs a movement with what it fought to win?`,
              options: [
                `The Civil Rights Movement fought to abolish all government.`,
                `Suffragists like Susan B. Anthony fought to win women the right to vote.`,
                `Abolitionists fought to expand the powers of kings.`,
                `Frederick Douglass fought to limit free speech.`,
              ],
              correctIndex: 1,
              explanation: `Suffragists like Susan B. Anthony and Ida B. Wells fought for women's right to vote, won nationally in 1920, an example of rights being won, not given. The distractors misstate what each movement fought for.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the lesson say rights are a "living history"?`,
              options: [
                `Because they were perfectly complete and finished in 1791.`,
                `Because supposedly only professional historians are ever allowed to discuss them.`,
                `Because they automatically improve on their own with no effort.`,
                `Because they are an ongoing, unfinished struggle that expands and can contract over time.`,
              ],
              correctIndex: 3,
              explanation: `Rights are a living history because they're not a finished gift but an ongoing struggle, expanding as people fight for them and able to contract if not defended, with each generation responsible for them. The distractors treat rights as finished or automatic.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: In a true democracy, whatever the majority votes for should always become law, so the very idea of rights that a majority cannot override is undemocratic and wrong.`,
              correctAnswer: false,
              explanation: `False, and understanding why is one of the most important insights about how free societies actually work. It is true that democracy involves majority rule, but pure, unlimited majority rule is dangerous, and the whole point of protected rights is to guard against that danger. The problem is what political thinkers call the tyranny of the majority: a majority can use its voting power to oppress, persecute, or strip the rights of a minority, and do so through entirely democratic votes. Imagine a town where ninety percent of people vote to silence the speech of the other ten percent, ban their religion, search their homes without cause, or deny them fair trials. That would be fully "democratic" in the sense that the majority wanted it, yet it would be a profound injustice, the many crushing the few. The American founders, especially James Madison, feared exactly this danger of "factions", groups, even majorities, pursuing their interests at the expense of others' rights. Their solution was to place certain fundamental rights beyond the reach of ordinary majority votes: no matter how many people want to ban your religion or silence your speech, they cannot, because those rights are protected by the Constitution, which a simple majority cannot override. This is why rights are described as counter-majoritarian, they deliberately limit what even a majority is allowed to do. It's also why courts, especially the Supreme Court, can strike down even popular laws that violate protected rights: judges are insulated from majority pressure precisely so they can defend the rights of minorities against the majority. Far from being undemocratic, this design reflects a deeper understanding of what a just free society requires: not democracy alone, but democracy plus rights. Majority rule decides most ordinary questions, but some things, basic freedoms and equal protection, are simply off the table, no matter how the vote goes. A system of pure majority rule with no protected rights would not be a fuller democracy; it would be one in which any unpopular minority could be legally oppressed at any time. So the statement is false: rights that a majority cannot override are not undemocratic, they are an essential safeguard that makes a free society possible, protecting everyone, because today's majority member could be tomorrow's vulnerable minority.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A community votes overwhelmingly to ban a small religious group from holding its services, because most residents dislike that religion. The group sues, and a court strikes the ban down as a violation of the First Amendment. Using the lesson, what's the best analysis?`,
              options: [
                `The court was wrong, because in a democracy the majority's vote should always win.`,
                `This is exactly what rights are for: freedom of religion is a civil liberty placed beyond majority votes, so the court protected the minority from tyranny of the majority, even though most people wanted the ban.`,
                `The religious group has no claim, since rights only protect the majority.`,
                `The court should have asked the majority to vote a second time.`,
              ],
              correctIndex: 1,
              explanation: `Freedom of religion is a civil liberty protected by the First Amendment and placed beyond ordinary majority votes (counter-majoritarian). The court's role is precisely to protect a minority's rights from tyranny of the majority, even a popular ban. The distractors treat majority will as always supreme or deny that rights protect minorities.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-inherited`, category: `Rights you didn't earn`, prompt: `Almost every right you take for granted was denied to someone once, and won by people who fought, and sometimes died, to claim it. How does it feel to hold rights you inherited rather than earned, and what responsibility, if any, does that place on you?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you probably thought of rights as simply "things you have." What surprised you most, the difference between liberties and rights, the danger of the majority, or how long the gap was between promise and reality? What changed in your thinking?` },
            { id: `reflect-majority`, category: `Against the crowd`, prompt: `Rights mean some things are off-limits even when most people want them. Can you think of a time you believed something was wrong even though almost everyone around you disagreed? What did that teach you about majorities and conscience?` },
            { id: `reflect-heritage`, category: `Teaching rights`, prompt: `Caro, you're building social studies for conscious families. How would you help a child understand that rights were won, not given, perhaps through a story from the Civil Rights Movement or a Latin American struggle for justice, so rights feel precious and worth protecting rather than automatic?` },
            { id: `reflect-conflict`, category: `When rights collide`, prompt: `Rights constantly clash, one person's freedom against another's safety or equality. Think of a real situation where two rights genuinely conflict. How would you decide where the line should fall, and what makes that decision so hard?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Courts can strike down laws the majority voted for, which some call protecting rights and others call undemocratic. What's the strongest version of the objection that this gives unelected judges too much power, and how would you answer it?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Map the Rights Around You`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a discovery of how rights actually shape your family's life and how hard they were to win. Start by sorting liberties from rights: as a family, list freedoms you have and sort each into civil liberties (freedoms government can't take, speaking your mind, practicing or not practicing a religion, privacy at home, a fair trial) versus civil rights (protection from discrimination, the right to equal treatment in school, work, and public life). Notice how the first group is about being left alone and the second is about being treated equally. Do the "tyranny of the majority" thought experiment: imagine your town voting on something that would harm a small minority, then discuss why some things should be off-limits even to a big majority, and why your family would want that protection if you were ever the minority. Trace where rights live: look up the actual text of the First Amendment and a line from the Fourteenth Amendment ("equal protection of the laws"), and talk about what each one promises. Explore "rights are won, not given": pick one right your family cares about, women's vote, the end of segregation, workers' rights, freedom of worship, and spend time learning the real story of the people who fought for it (Frederick Douglass, Ida B. Wells, Susan B. Anthony, Martin Luther King Jr., Rosa Parks, or a Latin American figure like those who fought for indigenous or labor rights). Find the human cost, and the courage. Stage a respectful debate using the five voices from the lesson, applied to a real, age-appropriate question where rights collide (for example, free speech versus protecting someone from harm, or majority rule versus minority protection), with family members arguing as the liberty-first defender, the equality champion, the security balancer, the democratic majoritarian, and the living-Constitution advocate. Spot rights in the news: find a current story involving a rights conflict and identify which rights are clashing and where the lines are being drawn. Finally, talk about defending rights: discuss the idea that rights can shrink if no one protects them, and what it means to be a citizen who safeguards them. The goal is to move from seeing rights as automatic possessions to understanding them as hard-won, sometimes fragile protections, ones your family benefits from daily, that exist because people fought for them and must keep being defended, including by you.`,
          },
          projectOption: {
            title: `The Rights Champion Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate the real story of how a right was won, and connect it to the present, becoming someone who understands rights as living history rather than abstract guarantees. Week 1, choose and research a struggle for rights: pick a real movement or moment when people fought to claim or expand rights, the abolition of slavery, women's suffrage, the Civil Rights Movement, the fight for workers' rights or disability rights, the struggle for indigenous or labor rights in Latin America, or another that matters to you. Research it deeply: What right was being denied, and to whom? Was it primarily a civil liberty (a freedom) or a civil right (equality)? Who led the struggle, and what specific people, name them, organized, protested, sued, or sacrificed? What opposition and danger did they face? What were the turning points, key court cases, laws, marches, or moments? And crucially, how does the lesson's framework apply, was this about protecting a minority from the majority, closing the gap between rights on paper and rights in practice, expanding the circle of who counts as "all"? Week 2, connect it to now and make it real: research whether this right is fully secure today or still contested, and identify any present-day struggle that continues or echoes it (rights, the lesson stresses, are a living history that can expand or contract). Then create a piece that honors the struggle and makes its lessons vivid for others: a documentary-style video, an illustrated timeline, a "then and now" presentation, a profile of the key figures, a museum-style exhibit, or a persuasive essay. Make sure it explains what right was at stake, who fought and what it cost them, how the right was won (or is still being fought for), and why it matters that rights are won and defended rather than simply given. Produce your final piece as something you could genuinely share to help others understand. The aim is to experience rights the way this lesson frames them, not as automatic possessions, but as precious, hard-won, sometimes fragile achievements, built by named, courageous people, that each generation, including yours, inherits and must understand, value, and defend.`,
            offerToParent: `Parent: opt your child into the Rights Champion Project. Researching a real struggle for rights, abolition, women's suffrage, the Civil Rights Movement, workers' or indigenous rights, identifying whether it concerned civil liberties or civil rights, naming the people who fought and what it cost them, and connecting it to present-day struggles, directly develops the core C3 Framework civics concepts: the Bill of Rights, the Fourteenth Amendment and equal protection, the distinction between liberties and rights, the protection of minorities from majority tyranny, and rights as an ongoing historical process. Understanding that rights are won and defended rather than simply given builds historical analysis, civic responsibility, and an appreciation of the courage behind freedoms we take for granted. It's rigorous, standards-aligned work with deep personal and civic meaning.`,
          },
          identityQuestion: `If you become someone who knows that the rights you hold were won by people who were denied them and fought back, who can tell a freedom from an equality and protect both, who understands that rights can shrink if no one defends them, what kind of citizen does that make you, one who guards and extends the protections you inherited rather than taking them for granted, that someone who assumes rights simply exist on their own never can?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the rights I hold were won by people who fought for them.`,
            `A person who can tell a civil liberty from a civil right, and protect both.`,
            `Someone who understands that rights must be defended, not just inherited.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just grasped something that took your country nearly two centuries, and a great deal of blood, to learn: that freedom requires more than dividing government's power. It requires protecting individuals, even from the majority itself. You learned to tell civil liberties (the freedoms government can't take, about freedom) from civil rights (protection from discrimination, about equality), a distinction most adults blur. You understood the deepest danger rights guard against, not just a tyrant, but tyranny of the majority, the many oppressing the few, which is why rights are counter-majoritarian, placed beyond ordinary votes, and why courts can strike down even popular laws. You traced where these protections live, the Bill of Rights and the Fourteenth Amendment's promise of equal protection, and then you learned the hardest truth of all: rights on paper are not rights in practice. The Constitution's promises were denied to millions, and were made real only through the struggle of people who were denied them, abolitionists, suffragists, the Civil Rights Movement, and parallel fights for justice across Latin America and the world. Rights are a living history, won, not given, and defended by each generation. And you weighed five real visions of where the lines should fall when rights collide, without being handed a single answer, because these are live questions, and now they're partly yours. Next, we turn to the institution that decides where many of these lines actually fall: the Supreme Court, and the landmark cases that have shaped, expanded, and sometimes betrayed the promise of rights. We'll read the evidence ourselves. Onward, {name}. — Atlas`,
          badge: `liberties-guardian`,
          badgeName: `Liberties Guardian`,
          xpEarned: 75,
          competencies: [
            `Distinguishes civil liberties (freedom) from civil rights (equality)`,
            `Understands tyranny of the majority and why rights must limit majority power`,
            `Knows why rights are counter-majoritarian and placed beyond ordinary votes`,
            `Knows the Bill of Rights and the Fourteenth Amendment's equal protection guarantee`,
            `Understands that rights on paper become real only through struggle to enforce them`,
            `Knows key movements and figures who won rights, from abolition to the Civil Rights Movement`,
            `Can weigh competing views on how to balance rights against each other and other goods`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: The Supreme Court — Landmark Cases and Constitutional Interpretation`,
            hook: `The institution that decides where the lines fall, and the cases that shaped a nation. Evaluating the evidence.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L03 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
