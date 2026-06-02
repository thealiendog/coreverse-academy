// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L01 — Philosophy of History: How Do We Know the Past?
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Philosophy of History, Epistemology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (empiricist / constructivist / critical realist)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l01-v1";

const HISTORY_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-01`,
      title: `Philosophy of History: How Do We Know the Past?`,
      duration: 35,
      xpReward: 75,
      badge: `historical-epistemologist`,
      badgeName: `Historical Epistemologist`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, before we work through any specific history across this band, we have to confront the question most history education skips: how do we know what we know about the past? You're going to spend 20 lessons examining genocides, revolutions, imperialism, the Cold War, contested regions, indigenous histories, and where history is going. Every single lesson rests on a foundation that's worth examining first: what counts as evidence, who gets to write history, how confident can we be in claims about events centuries old, and what's the difference between history and the past. Three serious positions on these questions will be presented, each with substantial defenders going back to the 19th century. By the end you'll have framework for everything that follows. I'm Lyra. I'm an elephant who remembers and tells; my role in this band is to make sure you can see the past as it actually was, as far as that's possible, and recognize when you can't.`,
          headline: `How Do We Know the Past?`,
          subtitle: `Three serious positions on historical knowledge. The foundation everything else rests on.`,
          visual: `/voyager-assets/history/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `History Is Not The Past`,
          paragraphs: [
            `Start with a distinction most history education skips. "The past" is everything that actually happened, all of it, every event in every place across all human existence and before. "History" is the always-partial reconstruction of some tiny fraction of the past, produced by specific people working from specific evidence in specific situations with specific tools and biases. The past is enormous and unreachable in its entirety; history is what we've made of fragments of it.`,
            `Why the distinction matters. Most students learn history as if it equaled the past, as if textbooks contained "what happened." This produces specific errors: thinking history is settled, thinking absences from history mean absences from the past, thinking the historians and sources you've encountered represent what's actually known, thinking the framing you've absorbed is the only or right one. Recognizing history as constructed from fragments shifts everything; it shifts how you read sources, how you evaluate claims, how confident you should be in conclusions.`,
            `What gets preserved and what doesn't. Evidence about the past survives unevenly. Written records survive better than oral traditions. The records of literate elites survive better than the lives of the illiterate poor. Stone and metal survive better than wood and cloth. The history of imperial powers survives better than the history of those they conquered. Documents about wars survive better than documents about daily life. Records of men's activities survive better than records of women's. Records of public spaces survive better than records of private ones. Records that someone had reason to preserve survive better than records considered ordinary at the time.`,
            `This isn't just a list of biases; it's the actual structure of what we know. Ancient Athens left more records than its contemporary neighbors because Athens was literate and had institutions that preserved writing. The history of ancient Athens we have is therefore disproportionately rich while contemporary Sparta or Persian-perspective Athens is comparatively dark. The history of the European Middle Ages we have is disproportionately the history of monasteries and royal courts because those institutions kept records. Peasant life across centuries is mostly invisible because peasants rarely wrote.`,
            `Specific examples. We know dramatically more about Roman emperors than about the average Roman; the emperors had biographers, the average Roman did not. We know dramatically more about kings and battles in medieval Europe than about ordinary daily life; the chroniclers wrote about what their patrons cared about. We know dramatically more about colonial perspectives on Indigenous Americans than about Indigenous perspectives on colonizers; the colonizers wrote and their records survived in institutions that kept them. The "history" we have is shaped by these structural patterns of what survives and gets read.`,
            `This is the first thing to understand before working through any specific history. The past is enormous; history is the always-partial reconstruction. When you encounter a historical claim, the right question isn't just "is this true?" but "what evidence does this rest on, what's missing from that evidence, and whose perspective dominates the surviving record?"`,
          ],
          image: `/voyager-assets/history/l01-s1-past-vs-history.webp`,
          imageCaption: `The past is everything that happened. History is the always-partial reconstruction of fragments. Survival of evidence is structurally uneven (literate vs oral, elite vs poor, imperial vs conquered, men vs women, public vs private).`,
          vocab: [
            {
              word: `the past vs history`,
              definition: `"The past" is everything that actually happened across all human existence; enormous, unreachable in entirety. "History" is the always-partial reconstruction of fragments, produced by specific people working from specific evidence with specific tools and biases. Distinction matters because most students learn history as if it equaled the past, producing errors: thinking history is settled, absences from history equal absences from past, encountered framing is the only one. Evidence survives unevenly: written better than oral, elite better than poor, imperial better than conquered, men's activities better than women's, public better than private, what someone had reason to preserve better than ordinary. The "history" we have is shaped by these structural patterns of what survives.`,
              audioPrompt: `History is not the past, {name}. This is the first distinction to understand. "The past" is everything that actually happened, all of it, every event in every place across all human existence and before. "History" is the always-partial reconstruction of some tiny fraction of the past, produced by specific people working from specific evidence in specific situations with specific tools and biases. The past is enormous and unreachable in its entirety; history is what we've made of fragments of it. Evidence about the past survives unevenly. Written records survive better than oral traditions. The records of literate elites survive better than the lives of the illiterate poor. Stone and metal survive better than wood and cloth. The history of imperial powers survives better than the history of those they conquered. We know dramatically more about Roman emperors than about the average Roman; the emperors had biographers, the average Roman did not. The history we have is shaped by these structural patterns of what survives and gets read.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Empiricist History: Reconstructing What Actually Happened`,
          paragraphs: [
            `The first serious position on how we know the past is the empiricist tradition. Its central claim: with careful method, evidence, and discipline, historians can reconstruct what actually happened in the past, approximately and provisionally but really. The past was real; evidence about it is real; the historian's job is to weigh evidence rigorously and produce reliable accounts.`,
            `The classic statement comes from Leopold von Ranke (1795-1886), a German historian widely considered the founder of modern academic history. His often-quoted goal was history written "wie es eigentlich gewesen": as it actually was. Ranke insisted on primary sources (documents from the time), source criticism (evaluating reliability), and disciplined method. His seminars at the University of Berlin trained generations of historians in these techniques and substantially shaped how history is practiced in universities to this day.`,
            `Specific commitments of empiricist history. Primary sources (documents, artifacts, records produced at the time) are the foundation; secondary sources (later accounts) are useful but derivative. Source criticism is essential: who wrote this, when, with what knowledge, what biases, what agenda? Multiple independent sources strengthen claims; single-source claims are weaker. The historian's job is to weigh evidence rather than to advocate; advocacy belongs in politics, not in history.`,
            `Twentieth-century philosophers refined this view. Carl Hempel's "covering law" model argued that historical explanation works essentially like scientific explanation: identify general patterns and show how specific events fit them. The Annales school (Marc Bloch, Lucien Febvre, Fernand Braudel) extended empiricism to social and economic history; instead of just kings and battles, they used quantitative records (parish registers, tax records, climate data) to reconstruct everyday life and long-term structures. Braudel's "The Mediterranean" (1949) used decades of records to reconstruct economic and ecological history across centuries.`,
            `Strengths of the position. It takes the past seriously as something real that can be known. It provides specific methods for evaluating evidence that produce more reliable accounts than uncritical narrative. Most modern history has been written within this tradition, including most history you've read. The methods work; they really do produce accounts that match additional evidence as it emerges. When archaeology recovers new evidence, empiricist history can incorporate it; when documents are discovered, the methods can evaluate them.`,
            `Limits of the position. The methods can't recover what evidence doesn't survive, and what survives is structurally biased toward elites, the literate, the imperial, men. Empiricist confidence can become misplaced confidence: the absence of evidence becomes the presumed absence of events. The "view from nowhere" empiricist historians aim for is itself a position (specifically, a position rooted in 19th-century European academic culture); claims of neutrality often hide perspectives. The empiricist tradition was historically used to justify imperial and racist narratives precisely because its methods made those narratives seem like "the facts" rather than interpretations.`,
          ],
          image: `/voyager-assets/history/l01-s2-empiricist.webp`,
          imageCaption: `Position 1: empiricist history. Ranke "wie es eigentlich gewesen." Primary sources, source criticism, disciplined method. Annales school (Bloch, Febvre, Braudel) extended to social history. Strengths: methods work, evidence weighed rigorously. Limits: can't recover lost evidence, "view from nowhere" hides perspective.`,
          vocab: [
            {
              word: `empiricist history position`,
              definition: `Tradition arguing historians can reconstruct what actually happened through careful method and evidence. Leopold von Ranke (1795-1886), founder of modern academic history; goal "wie es eigentlich gewesen" (as it actually was); primary sources, source criticism, disciplined method. Carl Hempel covering law model: historical explanation works like scientific explanation. Annales school (Marc Bloch, Lucien Febvre, Fernand Braudel) extended empiricism to social/economic history using quantitative records. Braudel "The Mediterranean" (1949). Strengths: takes past seriously as knowable; methods produce reliable accounts; most modern history written within this tradition. Limits: can't recover lost evidence; "view from nowhere" hides perspective; historically used to justify imperial/racist narratives by making them seem like "the facts."`,
              audioPrompt: `The empiricist position on history is the first serious view, {name}. Its central claim: with careful method, evidence, and discipline, historians can reconstruct what actually happened in the past, approximately and provisionally but really. The classic statement comes from Leopold von Ranke, a German historian born in 1795, widely considered the founder of modern academic history. His often-quoted goal was history written wie es eigentlich gewesen: as it actually was. Ranke insisted on primary sources, source criticism, and disciplined method. His seminars at the University of Berlin trained generations of historians in these techniques. The Annales school, founded by Marc Bloch and Lucien Febvre and most famously practiced by Fernand Braudel, extended empiricism to social and economic history. Instead of just kings and battles, they used quantitative records (parish registers, tax records, climate data) to reconstruct everyday life and long-term structures. Strengths: it takes the past seriously as something real that can be known; provides specific methods for evaluating evidence; most modern history has been written within this tradition. Limits: the methods can't recover what evidence doesn't survive; the "view from nowhere" empiricist historians aim for is itself a position rooted in 19th-century European academic culture.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Constructivist History: All History Is Narrative`,
          paragraphs: [
            `The second serious position takes a much more radical view: history is always constructed, never simply found. The past happened, but our access to it is always through evidence we interpret, sources we choose, narratives we build. There is no neutral history; there is no "view from nowhere"; every historical account is shaped by the historian's situation, language, concerns, and assumptions about what counts as significant.`,
            `Hayden White's "Metahistory" (1973) is one of the most influential statements. White analyzed major 19th-century historians (Ranke, Tocqueville, Burckhardt, others) and showed that even their most empirical work used specific narrative structures: tragedy, comedy, romance, satire. The choice of narrative form wasn't determined by the evidence; it was a literary choice that then shaped which evidence got emphasized. History, White argued, is closer to literature than to science, though it remains constrained by evidence in ways pure literature is not.`,
            `Michel Foucault's work pushed further. In "The Archaeology of Knowledge" (1969) and his genealogies of madness, punishment, and sexuality, Foucault argued that what counts as a historical fact, what gets recorded, what gets remembered, all depend on what he called "discursive formations": the patterns of language, power, and institution that shape what's even thinkable in a given society. The "history of madness" is different in different centuries not just because madness is described differently but because what madness IS shifts with the categories.`,
            `Postcolonial historians (Dipesh Chakrabarty's "Provincializing Europe" 2000, Edward Said's "Orientalism" 1978, the Subaltern Studies group in India) made specific applications of constructivist arguments. Western historiography presents itself as universal but is actually local: it tells world history from European perspectives, treats European categories as universal, and produces "history" that systematically marginalizes non-European experience. The constructivist response is not just to add non-European voices but to recognize that "world history" itself is a construction, not a neutral framework.`,
            `Specific commitments of constructivist history. Every historical account reflects the historian's situation, including their cultural, political, gendered, and class positions. The narrative structure of an account shapes which evidence appears central. The categories used (revolution, nation, race, civilization) aren't neutral; they came from specific places and times and carry assumptions. Awareness of this isn't a problem to be solved but a condition to be acknowledged.`,
            `Strengths of the position. Honest about what 19th-century empiricism hid: there's no neutral position from which to write history. Explains why the same events look different from different perspectives (not because some perspectives are wrong, but because perspectives are constitutive of what history is). Provides framework for taking marginalized perspectives seriously rather than treating them as "additions" to mainstream history. Aligns with the actual experience of reading history from different places and times.`,
            `Limits of the position. Pushed too far, can suggest no historical claim is more reliable than any other (radical relativism). Can become a way to dismiss inconvenient evidence as "just one perspective." Doesn't fully account for cases where specific evidence really does settle questions (genocide happened; the Holocaust killed approximately six million Jews; we know this from extensive convergent evidence). Can produce work that's more about the historian's situation than about the past being studied. The strongest versions of the position are sometimes hard to distinguish from sophisticated denial.`,
          ],
          image: `/voyager-assets/history/l01-s3-constructivist.webp`,
          imageCaption: `Position 2: constructivist history. Hayden White "Metahistory" (1973): narrative structures shape evidence. Michel Foucault: discursive formations. Postcolonial: Chakrabarty "Provincializing Europe," Said "Orientalism," Subaltern Studies. Strengths: honest about perspective. Limits: can collapse into radical relativism.`,
          vocab: [
            {
              word: `constructivist history position`,
              definition: `Tradition arguing history is always constructed, never simply found; past happened but access is always through interpretation. Hayden White "Metahistory" (1973): historians use specific narrative structures (tragedy, comedy, romance, satire); history closer to literature than science though constrained by evidence. Michel Foucault "The Archaeology of Knowledge" (1969) and genealogies: "discursive formations" shape what counts as historical fact, what gets recorded. Postcolonial historians: Dipesh Chakrabarty "Provincializing Europe" (2000), Edward Said "Orientalism" (1978), Subaltern Studies group. Western historiography presents itself as universal but is actually local. Strengths: honest about perspective; takes marginalized voices seriously. Limits: pushed too far, radical relativism; can dismiss inconvenient evidence; sometimes hard to distinguish from sophisticated denial.`,
              audioPrompt: `The constructivist position takes a much more radical view, {name}. History is always constructed, never simply found. The past happened, but our access to it is always through evidence we interpret, sources we choose, narratives we build. There is no neutral history; there is no "view from nowhere"; every historical account is shaped by the historian's situation, language, concerns, and assumptions about what counts as significant. Hayden White's book "Metahistory" from 1973 is one of the most influential statements. White analyzed major 19th-century historians and showed that even their most empirical work used specific narrative structures: tragedy, comedy, romance, satire. Michel Foucault's work pushed further. In his book "The Archaeology of Knowledge" from 1969 and his genealogies of madness, punishment, and sexuality, Foucault argued that what counts as a historical fact, what gets recorded, what gets remembered, all depend on what he called discursive formations. Postcolonial historians (Dipesh Chakrabarty in "Provincializing Europe" from 2000, Edward Said in "Orientalism" from 1978, the Subaltern Studies group in India) applied constructivist arguments to show that Western historiography presents itself as universal but is actually local.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Critical Realist History: Real But Partial Knowledge`,
          paragraphs: [
            `The third serious position tries to hold what's true in both prior positions. From empiricism: the past was real, evidence is real, some claims about the past are better supported than others, and rigorous method produces accounts that are more reliable than uncritical narrative. From constructivism: history is always constructed from a perspective, evidence is always partial and biased, the historian's situation always shapes the account, and claims of pure neutrality conceal positions. The critical realist position: historical knowledge is real but partial, provisional, and perspective-bound.`,
            `The classic statement is E.H. Carr's "What Is History?" (1961). Carr argued that history is a continuous dialogue between the historian and the facts: neither pure invention by the historian nor pure recovery of the facts. The historian selects which facts matter, frames them in narrative, but the facts constrain what can be said. Carr famously asked: "What is a historical fact?", and answered that facts become historical when historians select them, but selection works on real evidence about real events.`,
            `Marc Bloch (the Annales founder mentioned earlier, also executed by the Nazis for resistance work) provided another foundational text: "The Historian's Craft" (1949, published posthumously). Bloch argued that history is rigorous but specifically different from natural science because its subject is human action across time. The historian needs both methodical evidence-handling AND interpretive imagination to understand people in their specific historical situations.`,
            `R.G. Collingwood's "The Idea of History" (1946) made the case that historical understanding requires "re-thinking" the thought of historical actors (imaginatively reconstructing what they thought they were doing) combined with critical evaluation of evidence. History is neither pure recovery nor pure construction; it's a specific kind of knowledge work that combines both.`,
            `What this position implies practically. Read every historical account knowing it's a real attempt to reconstruct something that happened, but also knowing it reflects the historian's situation, evidence available, and choices about narrative. The right response to a strong claim isn't blind acceptance or blanket suspicion but examination: what evidence supports this, what does the historian's situation suggest, what's the strongest counter-account from a different perspective, and where does the evidence really constrain the conclusions? Some historical claims are very well-supported (the Roman Empire existed; the Black Death killed millions in 14th-century Eurasia; the Holocaust killed approximately six million Jews); some are reasonable inferences from limited evidence (the population of pre-Columbian Americas before contact was probably between 30 and 100 million; estimates vary); some are speculation framed as fact (specific motivations of historical actors are often more speculation than evidence). Critical realist history attends to which is which.`,
            `Strengths of the position. Honors what's true in both prior positions. Provides practical framework for reading and writing history. Aligns with the actual practice of careful historians who use rigorous method while acknowledging their situation. Distinguishes well-supported from poorly supported claims rather than treating them uniformly. Provides framework for taking marginalized perspectives seriously without treating all perspectives as equally evidenced.`,
            `Limits of the position. Less crisp than either pure position. Requires constant judgment about how confident to be in specific claims. Doesn't provide simple algorithms for evaluating history. Can become unwieldy in practice.`,
          ],
          image: `/voyager-assets/history/l01-s4-critical-realist.webp`,
          imageCaption: `Position 3: critical realist history. E.H. Carr "What Is History?" (1961). Marc Bloch "The Historian's Craft" (1949). R.G. Collingwood "The Idea of History" (1946). Historical knowledge is real but partial, provisional, perspective-bound. Honors what's true in both other positions.`,
          vocab: [
            {
              word: `critical realist history position`,
              definition: `Tradition holding historical knowledge is real but partial, provisional, perspective-bound. Honors what's true in both empiricism (past was real, evidence works, method produces reliable accounts) and constructivism (perspective always present, evidence always biased, neutrality claims conceal positions). E.H. Carr "What Is History?" (1961): continuous dialogue between historian and facts. Marc Bloch "The Historian's Craft" (1949, posthumous; Bloch executed by Nazis for resistance): rigorous method combined with interpretive imagination. R.G. Collingwood "The Idea of History" (1946): historical understanding requires "re-thinking" actors' thought combined with critical evidence evaluation. Strengths: practical framework; distinguishes well-supported from poorly supported claims. Limits: less crisp than pure positions; requires constant judgment.`,
              audioPrompt: `The critical realist position tries to hold what's true in both prior positions, {name}. From empiricism: the past was real, evidence is real, some claims about the past are better supported than others, and rigorous method produces accounts more reliable than uncritical narrative. From constructivism: history is always constructed from a perspective, evidence is always partial and biased, the historian's situation always shapes the account, and claims of pure neutrality conceal positions. The critical realist position: historical knowledge is real but partial, provisional, and perspective-bound. The classic statement is E.H. Carr's book "What Is History?" from 1961. Carr argued that history is a continuous dialogue between the historian and the facts: neither pure invention by the historian nor pure recovery of the facts. Marc Bloch provided another foundational text: "The Historian's Craft" from 1949, published after he was executed by the Nazis for resistance work. Bloch argued that history is rigorous but specifically different from natural science because its subject is human action across time. R.G. Collingwood's "The Idea of History" from 1946 made the case that historical understanding requires re-thinking the thought of historical actors.`,
            },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `The three positions aren't strictly exclusive. Most working historians integrate elements: empiricist method when evaluating specific evidence; constructivist awareness of perspective and narrative; critical realist framework for distinguishing well-supported from speculative claims. The forcing function of choosing a primary position is committing to what organizes your default approach to historical claims.`,
            `One framing as you decide. Each position implies different default responses to a historical claim. Empiricist: what evidence supports this? Are the methods sound? Does it converge with other evidence? Constructivist: whose perspective is this? What does the historian's situation suggest? What categories are being used and where do they come from? Critical realist: what's the evidence base? What perspective is operating? How well-supported is this specific claim relative to other historical claims?`,
            `Another framing. The positions correspond to different generations of historiography. Empiricism dominated from Ranke in the 1830s through about the 1960s; constructivism rose from the 1970s through the 2000s; critical realist positions have emerged as the way most working historians actually practice now. Each generation thought the prior was naive in specific ways; the current synthesis tries to learn from each without collapsing entirely into any.`,
            `One specific framing for the band ahead. The 19 lessons that follow will engage genuinely contested histories: imperialism, slavery, genocide, the Holocaust in depth, the Cold War from multiple sides, the Middle East, China's rise, Africa, Latin America, indigenous peoples, women's history, human rights. Each will require active framework for thinking about how we know what we know. The position you commit to today shapes how you'll read everything that follows.`,
            `One last framing. You're 12. Most students reach college without ever explicitly thinking about how we know historical claims; they absorb "the history" they're taught and rarely examine its construction. Building explicit framework now changes how you read everything: textbooks, news, claims about the past in political discourse, contested narratives about your own country and others. This isn't abstract philosophy; it's the foundation of how to think about a domain you'll encounter in some form across decades.`,
          ],
          image: `/voyager-assets/history/l01-s5-before.webp`,
          imageCaption: `Three positions integrate in practice. Different generations of historiography. The position you commit to shapes how you'll read all 19 lessons that follow. Foundation everything else rests on.`,
          vocab: [
            {
              word: `integrating historical epistemology`,
              definition: `Three positions on how we know the past integrate in practice. Empiricist (Ranke, Hempel, Annales school): method, evidence, source criticism. Constructivist (Hayden White, Foucault, Chakrabarty, Said, Subaltern Studies): perspective always present, narrative shapes evidence, no neutral position. Critical realist (Carr, Bloch, Collingwood): real but partial knowledge, honors both. Each implies different default responses to historical claims. Generations: empiricism 1830s-1960s; constructivism 1970s-2000s; critical realist synthesis emerging. Most working historians integrate elements. Commitment to primary position shapes default approach to all historical claims that follow across the band.`,
              audioPrompt: `Integrating historical epistemology is what mature historical thinking involves, {name}. The three positions aren't strictly exclusive. Most working historians integrate elements: empiricist method when evaluating specific evidence; constructivist awareness of perspective and narrative; critical realist framework for distinguishing well-supported from speculative claims. The forcing function of choosing a primary position is committing to what organizes your default approach to historical claims. Each position implies different default responses to a historical claim. Empiricist: what evidence supports this? Are the methods sound? Does it converge with other evidence? Constructivist: whose perspective is this? What does the historian's situation suggest? What categories are being used and where do they come from? Critical realist: what's the evidence base? What perspective is operating? How well-supported is this specific claim relative to other historical claims? The 19 lessons that follow will engage genuinely contested histories. Each will require active framework for thinking about how we know what we know.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `How Do We Know the Past?`,
          intro: `Pick the position that best captures your current thinking about historical knowledge. Build your case with 4-5 pieces of evidence. Then respond to the strongest counterargument. Each position has serious defenders across two centuries of historiography.`,
          positions: [
            {
              id: `empiricist`,
              label: `Empiricist: historians can reconstruct what actually happened through rigorous method and evidence`,
              summary: `Past was real, evidence is real, careful method produces reliable accounts. Ranke "wie es eigentlich gewesen"; primary sources, source criticism, disciplined method. Carl Hempel covering law model. Annales school (Bloch, Febvre, Braudel) extended to social/economic history. Strengths: methods work; most modern history written within this tradition; specific procedures for evaluating evidence. Limits: can't recover lost evidence; "view from nowhere" hides perspective; historically used to justify imperial/racist narratives.`,
            },
            {
              id: `constructivist`,
              label: `Constructivist: history is always constructed from a perspective; there is no neutral history`,
              summary: `Every historical account shaped by historian's situation, language, narrative choices. Hayden White "Metahistory" (1973): narrative structures shape evidence. Michel Foucault "Archaeology of Knowledge" (1969): discursive formations shape what counts as fact. Postcolonial: Chakrabarty "Provincializing Europe," Said "Orientalism," Subaltern Studies. Strengths: honest about what empiricism hid; takes marginalized perspectives seriously; explains why same events look different from different perspectives. Limits: pushed too far, radical relativism; can dismiss inconvenient evidence; sometimes hard to distinguish from sophisticated denial.`,
            },
            {
              id: `critical_realist`,
              label: `Critical realist: historical knowledge is real but partial, provisional, perspective-bound`,
              summary: `Honors both prior positions. From empiricism: past real, evidence works, method produces reliable accounts. From constructivism: perspective always present, neutrality claims hide positions. E.H. Carr "What Is History?" (1961): continuous dialogue between historian and facts. Marc Bloch "The Historian's Craft" (1949). R.G. Collingwood "The Idea of History" (1946). Strengths: practical framework; distinguishes well-supported from poorly supported claims; aligns with actual practice of careful historians. Limits: less crisp; requires constant judgment; doesn't provide simple algorithms.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Leopold von Ranke's 19th-century empiricist methods (primary sources, source criticism, disciplined method) substantially shaped how academic history is practiced. The methods really do produce accounts that withstand new evidence as it emerges; archaeology recovering new evidence has confirmed many historical reconstructions while refining others.`,
              source: `Ranke; ongoing academic historiography`,
            },
            {
              id: `e2`,
              text: `Hayden White's "Metahistory" (1973) demonstrated that 19th-century empirical historians (Ranke, Tocqueville, Burckhardt) used specific narrative structures (tragedy, comedy, romance, satire) that shaped which evidence got emphasized. The choice of narrative wasn't determined by evidence; it was literary.`,
              source: `White "Metahistory" 1973`,
            },
            {
              id: `e3`,
              text: `Evidence about the past survives unevenly: written better than oral, elite better than poor, imperial better than conquered, men's activities better than women's, public better than private. "What we know" is structurally shaped by these patterns. The structural pattern is empirical fact about how knowledge of the past is produced.`,
              source: `Historiographical research on archival bias`,
            },
            {
              id: `e4`,
              text: `Postcolonial historians (Chakrabarty "Provincializing Europe" 2000, Said "Orientalism" 1978, Subaltern Studies group) have shown that Western historiography presents itself as universal but is actually local: tells world history from European perspectives, treats European categories as universal, marginalizes non-European experience.`,
              source: `Chakrabarty, Said, Subaltern Studies`,
            },
            {
              id: `e5`,
              text: `Some historical claims are very well-supported (Roman Empire existed; Black Death killed millions in 14th-century Eurasia; Holocaust killed approximately six million Jews) and converge across many independent sources. Other claims are reasonable inferences from limited evidence with substantial uncertainty. Treating all historical claims as equally uncertain or equally certain misrepresents how historical knowledge actually works.`,
              source: `Critical realist tradition; specific historical scholarship`,
            },
            {
              id: `e6`,
              text: `E.H. Carr's "What Is History?" (1961) argued historical facts become historical when historians select them; the selection works on real evidence about real events; history is "continuous dialogue between historian and facts" rather than pure recovery or pure construction.`,
              source: `Carr "What Is History?" 1961`,
            },
            {
              id: `e7`,
              text: `Marc Bloch's "The Historian's Craft" (1949, published posthumously after Bloch was executed by the Nazis for resistance work) argued history is rigorous but specifically different from natural science because its subject is human action; requires both methodical evidence-handling and interpretive imagination.`,
              source: `Bloch "The Historian's Craft" 1949`,
            },
            {
              id: `e8`,
              text: `R.G. Collingwood's "The Idea of History" (1946) made case that historical understanding requires "re-thinking" the thought of historical actors (imaginatively reconstructing what they thought they were doing) combined with critical evaluation of evidence. History is neither pure recovery nor pure construction.`,
              source: `Collingwood "The Idea of History" 1946`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that academic historians, with their methods and frameworks, are the right way to know the past. But academic historians are a specific institutional class: trained in Western universities, working within institutions that emerged from European modernity, writing for audiences that share their assumptions. Many cultures across history have had sophisticated ways of knowing the past that don't fit this framework: oral traditions in which the past is transmitted through generations of trained rememberers; indigenous knowledge systems that integrate history with land, ceremony, and ongoing relationship; religious traditions that frame history through theological structure. These aren't 'sources' for academic historians to mine; they're alternative epistemologies that academic historiography has historically dismissed as 'primitive' or 'mythological.' Maybe the question isn't which academic position to commit to but whether the academic framework itself is the only or even the best way to know the past."`,
            promptInstruction: `In 4-5 sentences, respond. Is the academic framework itself the right way to know the past? How does your position handle this challenge from non-academic ways of knowing? What's the relationship between academic history and oral/indigenous/religious traditions?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why? Across this band's 19 remaining lessons, when will your position be hardest to maintain?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the distinction between "the past" and "history"?`,
              options: [
                `Same thing`,
                `"The past" is everything that actually happened across all human existence; enormous, unreachable in entirety. "History" is the always-partial reconstruction of fragments, produced by specific people working from specific evidence with specific tools and biases. Distinction matters because absences from history don't mean absences from the past`,
                `Random`,
                `Just words`,
              ],
              correctIndex: 1,
              explanation: `Most students learn history as if it equaled the past, producing specific errors: thinking history is settled, thinking absences from history mean absences from the past, treating encountered framings as the only ones. Recognizing history as constructed from fragments shifts everything.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What structural patterns shape what evidence about the past survives?`,
              options: [
                `Random`,
                `Written records survive better than oral traditions; elite records better than poor; imperial better than conquered; men's activities better than women's; public better than private; what someone had reason to preserve better than what was considered ordinary. The "history" we have is structurally shaped by these patterns`,
                `Random luck`,
                `Just random`,
              ],
              correctIndex: 1,
              explanation: `These aren't just biases to acknowledge; they're the actual structure of what we know. The history we have is disproportionately about literate elites, imperial centers, public events, men, and what someone wanted preserved.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What did Leopold von Ranke contribute to the empiricist tradition?`,
              options: [
                `Random`,
                `German historian (1795-1886), widely considered founder of modern academic history; goal of writing history "wie es eigentlich gewesen" (as it actually was); insisted on primary sources, source criticism, disciplined method; his Berlin seminars trained generations of historians in these techniques`,
                `Just any historian`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Ranke's influence is foundational. The methods he developed substantially shape how academic history is practiced to this day, even as later historians have critiqued the "view from nowhere" his empiricism aimed for.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did Hayden White's "Metahistory" (1973) demonstrate?`,
              options: [
                `Random`,
                `Major 19th-century historians (Ranke, Tocqueville, Burckhardt) used specific narrative structures (tragedy, comedy, romance, satire); the choice of narrative form wasn't determined by evidence; it was a literary choice that shaped which evidence got emphasized; history closer to literature than science, though constrained by evidence in ways pure literature is not`,
                `Just bad history`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `"Metahistory" was a foundational work in constructivist historiography. It didn't argue that empirical historians made things up; it argued that even their most empirical work was shaped by narrative structures they often weren't conscious of.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did Michel Foucault contribute to constructivist history?`,
              options: [
                `Random`,
                `"The Archaeology of Knowledge" (1969) and his genealogies of madness, punishment, and sexuality argued that what counts as historical fact, what gets recorded, what gets remembered, all depend on "discursive formations": patterns of language, power, and institution that shape what's thinkable in a given society. The "history of madness" is different in different centuries not just because madness is described differently but because what madness IS shifts with the categories`,
                `Random`,
                `Just power`,
              ],
              correctIndex: 1,
              explanation: `Foucault's contribution was radical: not just that history is told from perspectives, but that the very categories used to organize history are historically specific and constructed. "Madness," "sexuality," "punishment" aren't natural categories; they're discursive formations.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did postcolonial historians contribute?`,
              options: [
                `Random`,
                `Dipesh Chakrabarty "Provincializing Europe" (2000), Edward Said "Orientalism" (1978), Subaltern Studies group in India: Western historiography presents itself as universal but is actually local; tells world history from European perspectives, treats European categories as universal, produces "history" that systematically marginalizes non-European experience; response is not just adding non-European voices but recognizing "world history" itself as constructed framework`,
                `Just non-Western`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Postcolonial historiography is one of the most consequential applications of constructivist arguments. It shifts what's taken as universal vs particular in historical work.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's E.H. Carr's central argument in "What Is History?" (1961)?`,
              options: [
                `Random`,
                `History is "continuous dialogue between the historian and the facts": neither pure invention by the historian nor pure recovery of the facts; the historian selects which facts matter and frames them in narrative, but the facts constrain what can be said; facts become "historical" when historians select them, but selection works on real evidence about real events`,
                `Just facts`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Carr's framing is the classic critical realist position. It honors both that the historian shapes the account AND that real evidence constrains it. The "dialogue" framing captures the work better than either pure position alone.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Who was Marc Bloch and what was "The Historian's Craft" (1949)?`,
              options: [
                `Random`,
                `French historian, co-founder of the Annales school (with Lucien Febvre); "The Historian's Craft" published posthumously after Bloch was executed by the Nazis for French resistance work; argues history is rigorous but specifically different from natural science because its subject is human action across time; requires both methodical evidence-handling AND interpretive imagination`,
                `Just any historian`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Bloch's biography matters. He was killed by the Nazis for resistance work, and "The Historian's Craft" was found among his papers. The combination of rigorous historiographical thinking and personal courage in extremity makes him one of the moral exemplars of the field.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All historical claims are equally well-supported, so all historical narratives are equally valid.`,
              correctAnswer: false,
              explanation: `False. Some historical claims are very well-supported by convergent evidence (the Roman Empire existed; the Black Death killed millions in 14th-century Eurasia; the Holocaust killed approximately six million Jews). Some are reasonable inferences from limited evidence with real uncertainty. Some are speculation framed as fact. Treating all historical claims as equally certain or equally uncertain misrepresents how historical knowledge actually works. The constructivist position acknowledges perspective without collapsing into radical relativism; the critical realist position makes this distinction central.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend reads a history textbook that confidently states "The Crusades were holy wars motivated by religious devotion." Based on this lesson, what should you point out about this claim?`,
              options: [
                `"Random"`,
                `"Several specific things. First, the claim presents one interpretation as if it were settled fact. Real historiography on the Crusades is contested across multiple dimensions: motivations included religious devotion AND economic interest AND political ambition AND social pressures AND specific historical circumstances; the relative weight of these varies by historian, perspective, and which Crusade is being discussed. Second, whose perspective is the textbook using? 'Holy wars' frames events from a Western Christian perspective. From the perspective of Muslims, Jews, and Eastern Christians who experienced the Crusades, the events look substantially different: invasions, massacres, occupations, with religious framing serving as justification for territorial expansion. Postcolonial historiography (Chakrabarty, Said) has made this kind of perspective-shift central. Third, the categories themselves are worth examining: 'holy war' as a category came from specific times and places and carries specific assumptions; applying it across different conflicts can hide more than it reveals. Fourth, the evidence question: what evidence supports specifically 'religious devotion' as the motivation? Crusader chronicles emphasize religious devotion, but those chronicles were written by people with reasons to emphasize it; other evidence (economic patterns, political circumstances, who actually went on Crusade and why) tells a more complicated story. Fifth, this isn't to say 'the textbook is wrong and nothing can be known'; that's the radical relativism the critical realist position warns against. It's to say the textbook is presenting one interpretation as if it were settled, and the actual history is more contested and contextual than that confidence suggests. Sixth, the better framing isn't 'what was the Crusades' motivation' as if there's one answer, but 'what motivated specific Crusaders in specific Crusades, from whose perspective, with what evidence'; that's the question critical realist history actually engages."`,
                `"Just believe it"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied historical epistemology. Identify the implicit perspective. Recognize contested categories. Apply constructivist questions (whose perspective? what categories?) and empiricist questions (what evidence?). Don't collapse into "nothing can be known" but don't accept confident textbook statements as settled either. This is what reading history with explicit framework looks like.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for how we know about the past? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: what history have you learned that you now want to re-examine through the framework you've built? Which textbooks, which framings?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who reads history with explicit epistemological framework across decades, what does that change about your relationship to claims about the past, in politics, in news, in textbooks, in family stories?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one historical event you think you know well. Apply the three questions: what evidence? whose perspective? what categories? What shifts?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The counterargument challenged whether academic history is the right framework at all. What's the relationship between academic history and the oral traditions, indigenous knowledge systems, religious narratives of the past that exist alongside it?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read either E.H. Carr's "What Is History?" or Marc Bloch's "The Historian's Craft." Pick one historical claim from your life and apply the frameworks. What do you find?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Historical epistemology at 12 shapes decades of how you'll read claims about the past. Two paths.`,
          familyActivity: {
            title: `The Family History-And-Sources Conversation`,
            duration: `60 minutes`,
            description: `Share the three positions and the past-vs-history distinction. Many adults have absorbed history textbooks as if they equaled the past; the conversation often surfaces specific framings worth examining. Try a family exercise: each family member tells the story of a shared family event (a memorable trip, a family conflict, a celebration); compare the accounts. Notice how each is real but partial; how different perspectives emphasize different things; how some claims are well-evidenced and others are inference. This makes the historiographical principles concrete using family material. Then consider applying the same lens to historical claims about your country, family, or community heritage.`,
          },
          projectOption: {
            title: `Read on the philosophy of history, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Pick one: E.H. Carr's "What Is History?" (1961, foundational and accessible), Marc Bloch's "The Historian's Craft" (1949, foundational with moral weight given Bloch's biography), R.G. Collingwood's "The Idea of History" (1946, denser but rewarding), Dipesh Chakrabarty's "Provincializing Europe" (2000, postcolonial), or Edward Said's "Orientalism" (1978, foundational postcolonial). Apply concepts during reading. Write 1,500 words on how the framework you've built shifts your reading of history.`,
            offerToParent: `Parent: opt your kid into this project. Historical epistemology at 12 is among the highest-leverage academic investments: it shapes how they'll read history, news, political claims, and family stories across decades.`,
          },
          identityQuestion: `If you become someone who reads history with explicit framework (past vs history, evidence and perspective, well-supported vs speculative), what does that change about how you'll engage the inevitable contested claims about the past you'll encounter across decades?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads history knowing it's the always-partial reconstruction of fragments.`,
            `A person who asks "whose perspective?" before accepting claims about the past.`,
            `Someone who distinguishes well-supported historical claims from speculation framed as fact.`,
          ],
          saveKey: `identity_responses_hw_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. First History & World lesson done. You now have three serious positions on historical epistemology (empiricist, constructivist, critical realist), substantial historians named (Ranke, Hempel, Bloch, Febvre, Braudel, White, Foucault, Chakrabarty, Said, Carr, Collingwood), and the foundational distinction between the past and history. The 19 lessons that follow rest on this foundation. Next time: historiography. Who writes history, whose voices survive, who gets excluded. Source Evaluation format. We're building toward Holocaust, genocide, imperialism, Cold War, contested regions, indigenous histories. Every lesson will require the framework you committed to today. Welcome to the band. — Lyra`,
          badge: `historical-epistemologist`,
          badgeName: `Historical Epistemologist`,
          xpEarned: 75,
          competencies: [
            `Distinguishes "the past" (everything that happened) from "history" (always-partial reconstruction)`,
            `Articulates three positions on historical epistemology (empiricist, constructivist, critical realist)`,
            `Names major historiographers (Ranke, Bloch, White, Foucault, Carr, Collingwood, Chakrabarty, Said)`,
            `Recognizes structural patterns of evidence survival (literate vs oral, elite vs poor, imperial vs conquered)`,
            `Applies framework for evaluating historical claims (evidence, perspective, categories, confidence level)`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: Historiography: Who Writes History?`,
            hook: `Three tiers of historical sources and voices. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L01 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
