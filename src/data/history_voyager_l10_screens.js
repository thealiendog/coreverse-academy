// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L10 — Nuclear Age: Living Under the Bomb
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Nuclear History, Hiroshima/Nagasaki, Ongoing
// CALIBRATED: Voyager spec v1.1 (May 2026)
//
// Interaction format: ARGUMENT BUILDER (necessity / unjustified / threshold-crossing)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l10-v1";

const HISTORY_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-10`,
      title: `Nuclear Age: Living Under the Bomb`,
      duration: 35,
      xpReward: 75,
      badge: `nuclear-age-literate`,
      badgeName: `Nuclear Age Literate`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, on August 6 and 9, 1945, the United States dropped atomic bombs on Hiroshima and Nagasaki. Roughly 200,000 people died. Three serious positions exist on whether this was justified. The position you reach matters — not just historically, but because the nuclear age those bombs created is still the world you live in. This lesson examines the evidence honestly.`,
          headline: `Nuclear Age: Living Under the Bomb`,
          subtitle: `Hiroshima, Nagasaki, and the nuclear age that followed.`,
          visual: `/voyager-assets/history/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Happened, In Specific Detail`,
          paragraphs: [
            `The Manhattan Project (1942-1945) was the most expensive scientific program in US history to that point (approximately $2 billion in 1945 dollars, equivalent to roughly $30 billion today); it brought together physicists including Robert Oppenheimer (scientific director at Los Alamos), Hans Bethe, Enrico Fermi, and many others to design and build atomic weapons. Two designs were developed and tested: a uranium-235 implosion device ("Little Boy"); and a plutonium implosion device ("Fat Man"). The Trinity test (Alamogordo, New Mexico, July 16, 1945) tested the plutonium design successfully. After witnessing the test, Oppenheimer later said he had recalled a line from the Bhagavad Gita: "Now I am become Death, the destroyer of worlds."`,
            `Hiroshima, August 6, 1945, 8:15am. The B-29 Enola Gay, piloted by Colonel Paul Tibbets, dropped "Little Boy" (the uranium bomb) over Hiroshima. The bomb detonated at approximately 1,900 feet above ground, producing a blast equivalent to approximately 15 kilotons of TNT and temperatures at the hypocenter exceeding 3,000 degrees Celsius. Approximately 70,000 people were killed instantly or within hours; an additional 70,000 died by end of 1945 from injuries and radiation; total deaths attributable to the bomb in Hiroshima reached approximately 200,000 over subsequent years. The city's population had been approximately 350,000; approximately two-thirds were directly affected. Specific landmarks remained: the dome of the Hiroshima Prefectural Industrial Promotion Hall (now the Genbaku Dome) survived enough to remain standing and is now a UNESCO World Heritage site as memorial.`,
            `Nagasaki, August 9, 1945, 11:02am. The B-29 Bockscar dropped "Fat Man" (the plutonium bomb) over Nagasaki after weather had prevented use of the primary target, Kokura. Approximately 35,000-40,000 killed instantly; total deaths reached approximately 70,000-80,000 by end of 1945, with more in subsequent years. The Nagasaki bomb was technically more powerful (approximately 21 kilotons) but produced fewer deaths because the geography (hilly terrain) protected some areas from the blast wave. Most victims of both bombs were Japanese civilians; the bombings also killed approximately 20,000 Korean forced laborers (Japan had occupied Korea since 1910), approximately 12 American POWs, and small numbers from other nationalities. Japan announced surrender on August 15, 1945; formal surrender was signed September 2, 1945 on the USS Missouri.`,
            `The decisions leading to use. President Harry Truman had become president on April 12, 1945 after FDR's death and learned of the Manhattan Project only then; he had no role in approving the project itself. The decision to use the bombs was made through a process involving Truman, Secretary of War Henry Stimson, military advisors including General George Marshall, and the Interim Committee. Civilian scientists raised concerns: the Franck Report (June 11, 1945, drafted by James Franck and other Manhattan Project scientists) recommended a demonstration of the bomb rather than use against population centers, warning of long-term consequences. Leo Szilard, who had originally helped initiate the Manhattan Project, circulated a petition (July 1945) asking Truman not to use the bombs without warning. These dissents were considered and rejected; the bombs were used.`,
            `The aftermath as it shaped what came next. The horror documented through John Hersey's "Hiroshima" (New Yorker, August 31, 1946, devoted entire issue to a single article; later published as book): the first major American public exposure to what the bombs had actually done at human scale. Survivor testimony from hibakusha (Japanese term for atomic bomb survivors) became central to subsequent peace movements; Setsuko Thurlow, who survived Hiroshima at age 13, became one of the leading voices for nuclear abolition and was joint Nobel Peace Prize recipient with the International Campaign to Abolish Nuclear Weapons (ICAN) in 2017. Hiroshima and Nagasaki have become memorial sites, with the Hiroshima Peace Memorial Park (1955) and Nagasaki Peace Park (1955) hosting visitors from around the world. The names of the dead are inscribed; the cenotaph at Hiroshima reads "Let all the souls here rest in peace; for we shall not repeat the evil."`,
          ],
          image: `/voyager-assets/history/l10-s1-what-happened.webp`,
          imageCaption: `Hiroshima Aug 6 1945 8:15am: "Little Boy" uranium bomb dropped from Enola Gay (Col. Paul Tibbets), ~15kt, ~140,000 dead by end 1945, ~200,000 total over years. Nagasaki Aug 9 1945 11:02am: "Fat Man" plutonium bomb from Bockscar, ~21kt, ~70-80,000 dead. Japan surrender announced Aug 15. Hibakusha (survivors) became core of subsequent peace movements; Setsuko Thurlow + ICAN Nobel Peace Prize 2017.`,
          vocab: [
            {
              word: `specific detail`,
              definition: `Manhattan Project 1942-1945 (~$2B in 1945, ~$30B today); Robert Oppenheimer scientific director at Los Alamos; Trinity test Alamogordo NM July 16 1945 (plutonium); Oppenheimer later quoted Bhagavad Gita: "Now I am become Death, the destroyer of worlds." Hiroshima Aug 6 1945 8:15am: B-29 Enola Gay piloted by Col. Paul Tibbets dropped "Little Boy" uranium bomb; ~15 kilotons; ~3,000+ degrees C at hypocenter; ~70,000 killed instantly + ~70,000 by end 1945; ~200,000 total over subsequent years; city population was ~350,000 (~2/3 affected). Genbaku Dome remained standing, now UNESCO World Heritage site. Nagasaki Aug 9 1945 11:02am: B-29 Bockscar dropped "Fat Man" plutonium bomb after weather diverted from primary target Kokura; ~21 kilotons technically more powerful; ~35-40,000 killed instantly + ~70-80,000 by end 1945. Most victims civilians; ~20,000 Korean forced laborers, ~12 American POWs also killed. Japan surrender announced Aug 15 1945, formal surrender signed Sept 2 on USS Missouri. Decision via Truman + Stimson + Interim Committee; Franck Report June 1945 + Szilard petition July recommended demonstration not use; rejected. Aftermath: Hersey "Hiroshima" New Yorker Aug 31 1946; hibakusha testimony; Setsuko Thurlow + ICAN Nobel Peace Prize 2017.`,
              audioPrompt: `On August 6, 1945 at 8:15 in the morning, the B-29 Enola Gay piloted by Colonel Paul Tibbets dropped "Little Boy," the uranium bomb, over Hiroshima, {name}. The bomb detonated at approximately 1,900 feet above ground, producing a blast equivalent to approximately 15 kilotons of TNT and temperatures at the hypocenter exceeding 3,000 degrees Celsius. Approximately 70,000 people were killed instantly or within hours; an additional 70,000 died by end of 1945 from injuries and radiation; total deaths attributable to the bomb in Hiroshima reached approximately 200,000 over subsequent years. The city's population had been approximately 350,000; approximately two-thirds were directly affected. Three days later, on August 9, 1945 at 11:02 in the morning, the B-29 Bockscar dropped "Fat Man," the plutonium bomb, over Nagasaki. Approximately 35,000 to 40,000 were killed instantly; total deaths reached approximately 70,000 to 80,000 by end of 1945. Most victims of both bombs were Japanese civilians. Japan announced surrender on August 15, 1945. Setsuko Thurlow, who survived Hiroshima at age 13, became one of the leading voices for nuclear abolition and was joint Nobel Peace Prize recipient with the International Campaign to Abolish Nuclear Weapons in 2017.`,
            },
            {
              word: `Manhattan Project`,
              definition: `The US scientific program (1942–1945) that designed and built the first atomic weapons. Cost approximately $2 billion in 1945 dollars (roughly $30 billion today), brought together Robert Oppenheimer as scientific director at Los Alamos with physicists including Hans Bethe and Enrico Fermi. The Trinity test in Alamogordo, New Mexico on July 16, 1945 tested the plutonium design successfully. After the test, Oppenheimer later recalled a line from the Bhagavad Gita: "Now I am become Death, the destroyer of worlds."`,
              audioPrompt: `The Manhattan Project was the US scientific program from 1942 to 1945 that designed and built the first atomic weapons, {name}. It was the most expensive scientific program in US history to that point, costing approximately $2 billion in 1945 dollars, equivalent to roughly $30 billion today. The project brought together physicists including Robert Oppenheimer as scientific director at Los Alamos, Hans Bethe, and Enrico Fermi. Two designs were developed and tested: a uranium-235 device called Little Boy and a plutonium implosion device called Fat Man. The Trinity test, conducted in Alamogordo, New Mexico on July 16, 1945, tested the plutonium design successfully. After witnessing the test, Oppenheimer later said he had recalled a line from the Bhagavad Gita: "Now I am become Death, the destroyer of worlds." The success of the Trinity test produced the weapons used three weeks later over Hiroshima and Nagasaki. Manhattan Project scientists including James Franck and Leo Szilard had recommended against using the bombs on populated areas without prior demonstration — a dissent that was considered and rejected, and whose predictions about the subsequent arms race proved substantially correct.`,
            },
            {
              word: `hibakusha`,
              definition: `Japanese term for survivors of the atomic bombings at Hiroshima and Nagasaki. Hibakusha testimony has been central to subsequent peace movements. Setsuko Thurlow, who survived Hiroshima at age 13, became one of the leading voices for nuclear abolition and was joint Nobel Peace Prize recipient with ICAN in 2017. John Hersey's 1946 New Yorker article "Hiroshima" provided the first major American public exposure to what the bombs had done at human scale.`,
              audioPrompt: `Hibakusha is the Japanese term for survivors of the atomic bombings at Hiroshima and Nagasaki, {name}. Hibakusha testimony has been central to subsequent peace movements. Setsuko Thurlow, who survived Hiroshima at age 13, became one of the leading voices for nuclear abolition across decades and was joint Nobel Peace Prize recipient with the International Campaign to Abolish Nuclear Weapons in 2017. John Hersey's "Hiroshima," published in The New Yorker on August 31, 1946 — the entire issue devoted to a single article — provided the first major American public exposure to what the bombs had actually done at human scale, following six survivors through the day of the bombing and its aftermath. The Hiroshima Peace Memorial Park and the Nagasaki Peace Park, both opened in 1955, have become memorial sites hosting visitors from around the world. The cenotaph at Hiroshima reads: "Let all the souls here rest in peace; for we shall not repeat the evil." Hibakusha testimony and the memorial parks represent the memory work dimension of nuclear history, and the lesson connects this to the broader question of whether the threshold crossed in 1945 can be reversed through ongoing abolition efforts.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: The Bombs Ended The War And Saved Lives`,
          paragraphs: [
            `The necessity position holds that using the atomic bombs in August 1945 was the least-bad available option for ending WWII, that it shortened the war substantially, and that alternative paths (continued conventional bombing, naval blockade, invasion of Japan) would have produced more total deaths including American military deaths, Japanese military deaths, and Japanese civilian deaths. This was Truman's stated reasoning at the time and has remained the dominant position in American public discourse, though it's been substantially contested by historians since the 1960s.`,
            `The core empirical claims. Operation Downfall, the planned US invasion of Japan, was scheduled for November 1945 (invasion of Kyushu) and March 1946 (invasion of Honshu). US military planners estimated invasion casualties variously: Joint Chiefs estimates ranged from approximately 250,000 to 500,000 US military casualties; some estimates went higher. Japanese casualties from invasion were expected to be massive: Japan had over 5 million military personnel still in arms and was preparing for mass civilian resistance ("100 million die together" propaganda). Conventional bombing was already devastating Japanese cities; the firebombing of Tokyo (March 9-10, 1945) killed approximately 100,000 in a single night. Continued conventional war was producing approximately 200,000 Japanese deaths per month from various causes including starvation in occupied territories.`,
            `Henry Stimson, Secretary of War, made the necessity case in "The Decision to Use the Atomic Bomb" (Harper's Magazine, February 1947). Stimson argued: Japan would not have surrendered without the shock of the atomic bombs combined with Soviet entry into the war; the bombs were used reluctantly but to end the war as quickly as possible; the alternative was invasion that would have killed more people than the bombs did. Stimson's argument has been repeatedly defended by historians including Robert Maddox ("Weapons for Victory" 1995), Richard Frank ("Downfall" 1999), and D. M. Giangreco ("Hell to Pay" 2009, detailed analysis of Operation Downfall casualty projections).`,
            `The Japanese situation in summer 1945. Japan had been substantially defeated militarily by mid-1945 (US naval blockade was strangling supplies, Japanese cities were being firebombed at will, the Japanese navy was largely destroyed). But the Japanese government continued to hold out, hoping for terms better than unconditional surrender. The "Big Six" (Supreme Council for the Direction of the War) was deadlocked between hard-liners insisting on continued fighting and others seeking terms; Emperor Hirohito had not intervened publicly to demand surrender. Japan had attempted to use Soviet mediation in July 1945, hoping for a negotiated peace; Stalin (planning his own entry into Pacific war) had not responded substantively. The bombs combined with Soviet declaration of war on August 8 produced the political shift that allowed Hirohito to support surrender.`,
            `What this position acknowledges. The deaths in Hiroshima and Nagasaki were terrible; most victims were civilians. The decision was made under wartime pressure and with limited information about long-term consequences. The position doesn't claim the bombs were good; it claims they were the least-bad available option. Critics' alternative scenarios (demonstration, negotiation, naval blockade alone) face their own problems that defenders of necessity address.`,
            `Where serious necessity defenders land today. Most acknowledge the position has been substantially challenged but argue the alternatives proposed by critics face their own problems. A demonstration bomb might have failed (Trinity test had succeeded but only one bomb had been tested; failure of demonstration bomb could have stiffened Japanese resistance). Negotiation faced Japanese refusal to accept unconditional surrender with terms acceptable to the US. Blockade would have produced massive Japanese civilian deaths from starvation. The honest necessity position is: "we don't know with certainty what alternative would have produced; given the information available at the time, the decision was defensible even if tragic."`,
          ],
          image: `/voyager-assets/history/l10-s2-necessity.webp`,
          imageCaption: `Position 1: bombs ended the war and saved lives. Stimson "The Decision to Use the Atomic Bomb" Harper's Feb 1947. Defenders: Robert Maddox 1995, Richard Frank "Downfall" 1999, D. M. Giangreco "Hell to Pay" 2009. Operation Downfall planned for Nov 1945 + Mar 1946; US casualty estimates 250K-500K+; Japan had 5M+ military still in arms; Tokyo firebombing March 9-10 1945 killed ~100,000 in one night; conventional war producing ~200K Japanese deaths per month.`,
          vocab: [
            {
              word: `dropping bomb`,
              definition: `Holds that using atomic bombs in August 1945 was the least-bad available option for ending WWII; shortened the war substantially; alternatives (continued conventional bombing, naval blockade, invasion) would have produced more total deaths. Truman's stated reasoning + dominant American public discourse position. Core empirical claims: Operation Downfall planned for November 1945 (Kyushu) + March 1946 (Honshu); Joint Chiefs casualty estimates 250-500K+ US military; Japan had 5M+ military still in arms + preparing for mass civilian resistance ("100 million die together"); Tokyo firebombing March 9-10 1945 killed ~100,000 in one night; conventional war producing ~200K Japanese deaths per month. Stimson "The Decision to Use the Atomic Bomb" Harper's Feb 1947 the foundational defense. Defenders: Robert Maddox "Weapons for Victory" 1995; Richard Frank "Downfall" 1999; D. M. Giangreco "Hell to Pay" 2009 (detailed analysis of Operation Downfall casualty projections). Japanese situation summer 1945: military defeat substantial but government continued hoping for terms; "Big Six" Supreme Council deadlocked; Hirohito had not intervened publicly. Bombs + Soviet entry Aug 8 produced political shift allowing surrender.`,
              audioPrompt: `The necessity position holds that using the atomic bombs in August 1945 was the least-bad available option for ending World War Two, {name}. The position argues that the bombs shortened the war substantially and that alternative paths would have produced more total deaths. This was Truman's stated reasoning at the time and has remained the dominant position in American public discourse. The core empirical claims: Operation Downfall, the planned US invasion of Japan, was scheduled for November 1945 and March 1946. US military planners estimated invasion casualties variously: Joint Chiefs estimates ranged from approximately 250,000 to 500,000 US military casualties; some estimates went higher. Japanese casualties from invasion were expected to be massive: Japan had over 5 million military personnel still in arms. The firebombing of Tokyo on March 9 and 10, 1945, killed approximately 100,000 in a single night. Henry Stimson, Secretary of War, made the necessity case in The Decision to Use the Atomic Bomb in Harper's Magazine in February 1947. The position doesn't claim the bombs were good; it claims they were the least-bad available option.`,
            },
            {
              word: `Operation Downfall`,
              definition: `The planned US invasion of Japan, scheduled for November 1945 (Kyushu) and March 1946 (Honshu). US Joint Chiefs casualty estimates ranged from approximately 250,000 to 500,000 US military casualties; Japan had over 5 million military personnel still in arms and was preparing for mass civilian resistance. Necessity-position defenders cite Operation Downfall as evidence that the bombs were the least-bad available option for ending the war.`,
              audioPrompt: `Operation Downfall was the planned US military invasion of Japan, {name}. It was scheduled in two phases: the invasion of Kyushu in November 1945 and the invasion of Honshu in March 1946. US Joint Chiefs casualty estimates ranged from approximately 250,000 to 500,000 US military casualties; some estimates went considerably higher. Japanese military casualties from invasion were expected to be massive: Japan still had over 5 million military personnel in arms in mid-1945 and was preparing for mass civilian resistance, with propaganda calling for one hundred million to die together. D. M. Giangreco's detailed analysis in "Hell to Pay" from 2009 examined Operation Downfall's casualty projections. Necessity-position defenders cite Operation Downfall as the concrete alternative to the atomic bombs: a US invasion would have produced more American deaths, more Japanese military deaths, and more Japanese civilian deaths than the bombs actually caused. Critics of the necessity position respond that the invasion estimate was never tested, that Japan was already seeking surrender through Soviet mediation in July 1945, and that the projected invasion casualty figure must be weighed against the actual deaths the bombs caused.`,
            },
            {
              word: `atomic diplomacy`,
              definition: `The thesis, advanced by Gar Alperovitz in "Atomic Diplomacy: Hiroshima and Potsdam" (1965) and expanded in "The Decision to Use the Atomic Bomb" (1995), that the atomic bombs were used partly to demonstrate American power to the Soviet Union before the postwar settlement, not solely to end the war with Japan. Alperovitz drew on declassified documents showing US officials' awareness of Japanese peace overtures and the bombs' geopolitical role.`,
              audioPrompt: `Atomic diplomacy is the thesis advanced by historian Gar Alperovitz in his 1965 book Atomic Diplomacy: Hiroshima and Potsdam, expanded in his 1995 work The Decision to Use the Atomic Bomb, {name}. Alperovitz argued that US leaders knew Japan was seeking surrender by summer 1945 and used the atomic bombs partly to demonstrate American power to the Soviet Union before the postwar settlement — not solely to end the war with Japan. The thesis draws on declassified documents showing US officials' awareness of Japanese peace overtures and the bombs' geopolitical role. James Byrnes, Truman's Secretary of State, was particularly identified with the atomic diplomacy interpretation; documents show Byrnes viewing the bombs as useful for postwar negotiations with the Soviet Union. The Potsdam Conference from July 17 to August 2, 1945 saw Truman receive notification of the successful Trinity test during negotiations; subsequent US behavior at Potsdam reflected the new bargaining position. The atomic diplomacy thesis is mainstream in academic Cold War history alongside the work of Tsuyoshi Hasegawa, Martin Sherwin, Kai Bird, and Barton Bernstein, though it remains contested by historians who defend the necessity position including Robert Maddox, Richard Frank, and D. M. Giangreco.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: The Bombs Were Unjustified, And Primarily About Postwar Power`,
          paragraphs: [
            `The unjustified position holds that the bombs were not militarily necessary, that Japan was already seeking surrender before the bombs, that the bombs were used in part to position the US for the postwar period (particularly against the Soviet Union), and that the targeting of civilian populations crossed moral lines that should have been respected even in war. This position emerged in serious scholarship from the 1960s onward and has been substantially developed since.`,
            `Gar Alperovitz, in "Atomic Diplomacy: Hiroshima and Potsdam" (1965, expanded as "The Decision to Use the Atomic Bomb" 1995), argued that US leaders knew Japan was seeking surrender by summer 1945 and used the bombs partly to demonstrate American power to the Soviet Union before the postwar settlement. The "atomic diplomacy" thesis: the bombs ended the war earlier than would otherwise have happened (Japan was probably going to surrender within months anyway given Soviet entry), but their use was substantially motivated by considerations about Soviet behavior in postwar Europe and Asia. Alperovitz's work drew on declassified documents showing US officials' awareness of Japanese peace overtures and the bombs' geopolitical role.`,
            `Tsuyoshi Hasegawa, in "Racing the Enemy: Stalin, Truman, and the Surrender of Japan" (2005), made a related argument with different emphasis. Drawing on Soviet archival sources newly available after 1991, Hasegawa argued that Soviet entry into the war on August 8, 1945 was at least as decisive as the bombs for Japanese surrender; that the "Big Six" had been debating surrender for weeks; that Hirohito's intervention came after both bombs and Soviet entry, with the Soviet entry probably more militarily significant for the Japanese leadership. The bombs, on this account, were not necessary; Soviet entry alone would have produced surrender within weeks.`,
            `The civilian targeting concern. Both Hiroshima and Nagasaki were primarily civilian populations; the bombs killed approximately 200,000-280,000 mostly civilian Japanese plus thousands of Korean forced laborers and small numbers of Allied POWs. International law of war by 1945 prohibited deliberate targeting of civilians; this had been violated repeatedly by all sides through strategic bombing (Tokyo firebombing, Allied bombing of Dresden, German bombing of London and elsewhere), but the atomic bombs crossed the threshold to a new category of indiscriminate destruction. Catholic and Protestant moral theologians have substantially treated Hiroshima and Nagasaki as serious moral failures even where they reach different conclusions about culpability.`,
            `The Franck Report and the scientists' dissent. In June 1945, before the bombs were used, James Franck and other Manhattan Project scientists submitted a report to the Secretary of War recommending against use of the bomb without prior demonstration. The Franck Report argued: the bombs' use would precipitate an arms race with the Soviet Union; demonstration would have the same political effect without the human cost; the long-term consequences for international relations could be catastrophic. Leo Szilard, who had originally helped initiate the Manhattan Project, circulated a petition (July 1945) asking Truman not to use the bombs without warning. These voices were considered and rejected; subsequent events have substantially vindicated the Franck Report's predictions about the arms race.`,
            `Specific claims about postwar motivation. James Byrnes, Truman's Secretary of State, was particularly identified with the "atomic diplomacy" interpretation; documents show Byrnes viewing the bombs as useful for postwar negotiations with the Soviet Union. The Potsdam Conference (July 17-August 2, 1945) saw Truman receive notification of the successful Trinity test during negotiations; subsequent US behavior at Potsdam reflected the new bargaining position. Whether postwar considerations were primary or secondary motivations is disputed; that they were factors in decision-making is documented.`,
            `Where serious unjustified-position defenders land today. The position is mainstream in academic Cold War history (Alperovitz, Hasegawa, Martin Sherwin "A World Destroyed" 1975, Kai Bird, Barton Bernstein) though contested by other historians (Maddox, Frank, Giangreco). The position acknowledges: military planners did believe the bombs would help end the war; the decision was made under wartime pressure; the alternatives faced their own challenges. The position holds: those mitigating factors don't make the use justified; Japan would probably have surrendered within months without the bombs; the civilian targeting and the postwar motivations matter morally.`,
          ],
          image: `/voyager-assets/history/l10-s3-unjustified.webp`,
          imageCaption: `Position 2: bombs unjustified, primarily about postwar power. Gar Alperovitz "Atomic Diplomacy" 1965 + "Decision to Use the Atomic Bomb" 1995 (atomic diplomacy thesis: bombs partly to demonstrate power to USSR). Tsuyoshi Hasegawa "Racing the Enemy" 2005 (Soviet entry Aug 8 alone would have produced surrender). Martin Sherwin "A World Destroyed" 1975. Franck Report June 1945 (scientists recommending against use without demonstration) + Szilard petition July 1945; both rejected.`,
          vocab: [
            {
              word: `dropping bomb`,
              definition: `Bombs not militarily necessary; Japan seeking surrender before bombs; use partly to position US for postwar period (particularly against USSR); civilian targeting crossed moral lines. Position emerged in serious scholarship 1960s onward. Gar Alperovitz "Atomic Diplomacy: Hiroshima and Potsdam" 1965 + expanded "The Decision to Use the Atomic Bomb" 1995: "atomic diplomacy" thesis (bombs partly to demonstrate American power to USSR before postwar settlement). Tsuyoshi Hasegawa "Racing the Enemy: Stalin, Truman, and the Surrender of Japan" 2005 (Soviet archival sources after 1991; Soviet entry Aug 8 1945 at least as decisive as bombs; Big Six had been debating surrender for weeks; Hirohito intervened after both bombs and Soviet entry; Soviet entry probably more militarily significant). Martin Sherwin "A World Destroyed" 1975. Civilian targeting: bombs killed ~200-280K mostly civilian Japanese + thousands Korean forced laborers + Allied POWs; international law of war prohibited deliberate civilian targeting; atomic bombs crossed threshold. Franck Report June 1945 (scientists recommended against use without demonstration; predicted arms race; subsequent events substantially vindicated predictions) + Szilard petition July 1945. James Byrnes (Truman's Secretary of State) particularly identified with atomic diplomacy interpretation. Position mainstream in academic Cold War history (Alperovitz, Hasegawa, Sherwin, Kai Bird, Barton Bernstein); contested by others (Maddox, Frank, Giangreco).`,
              audioPrompt: `The unjustified position holds that the bombs were not militarily necessary, {name}. The argument is that Japan was already seeking surrender before the bombs, that the bombs were used in part to position the US for the postwar period particularly against the Soviet Union, and that the targeting of civilian populations crossed moral lines that should have been respected even in war. Gar Alperovitz, in Atomic Diplomacy: Hiroshima and Potsdam in 1965, expanded as The Decision to Use the Atomic Bomb in 1995, argued that US leaders knew Japan was seeking surrender by summer 1945 and used the bombs partly to demonstrate American power to the Soviet Union before the postwar settlement. Tsuyoshi Hasegawa, in Racing the Enemy: Stalin, Truman, and the Surrender of Japan in 2005, drew on Soviet archival sources newly available after 1991 to argue that Soviet entry into the war on August 8, 1945 was at least as decisive as the bombs for Japanese surrender. Both Hiroshima and Nagasaki were primarily civilian populations. The Franck Report in June 1945 and Leo Szilard's petition in July recommended against use without demonstration; both were rejected.`,
            },
            {
              word: `Tsuyoshi Hasegawa`,
              definition: `Historian whose "Racing the Enemy: Stalin, Truman, and the Surrender of Japan" (2005) drew on Soviet archival sources newly available after 1991 to argue that Soviet entry into the war on August 8, 1945 was at least as decisive as the atomic bombs for Japanese surrender. The "Big Six" had been debating surrender for weeks; Hirohito's intervention came after both bombs and Soviet entry, with Soviet entry probably more militarily significant for Japanese leadership. On this account, the atomic bombs were not necessary.`,
              audioPrompt: `Tsuyoshi Hasegawa is the historian whose 2005 book Racing the Enemy: Stalin, Truman, and the Surrender of Japan made a significant contribution to the unjustified position on the atomic bombs, {name}. Hasegawa drew on Soviet archival sources newly available after 1991, giving his work access to evidence unavailable to earlier historians. His argument: Soviet entry into the war against Japan on August 8, 1945 was at least as decisive as the atomic bombs for producing Japanese surrender. The "Big Six" Supreme Council for the Direction of the War had been debating surrender for weeks before Hiroshima. Hirohito's intervention to support surrender came after both bombs and Soviet entry, with the Soviet entry probably more militarily significant for the Japanese military leadership that needed to be convinced. On Hasegawa's account, the bombs were not necessary; Soviet entry alone would have produced surrender within weeks. The argument is related to but distinct from Alperovitz's atomic diplomacy thesis: Alperovitz emphasizes postwar geopolitical motivation for using the bombs; Hasegawa emphasizes that the bombs weren't what broke Japanese resistance. Together they form the core of the mainstream academic case for the unjustified position.`,
            },
            {
              word: `Cuban Missile Crisis`,
              definition: `Thirteen days in October 1962 when Soviet missiles in Cuba brought the US and USSR close to nuclear war. Subsequently declassified documents revealed the crisis was even more dangerous than known at the time: Soviet submarine commanders had nuclear torpedoes and authority to use them under certain conditions; one was reportedly authorized but blocked by another officer's refusal. Considered the closest the world came to nuclear war during the Cold War.`,
              audioPrompt: `The Cuban Missile Crisis lasted thirteen days from October 14 to October 28, 1962, and brought the United States and Soviet Union closer to nuclear war than at any other point in history, {name}. The crisis began when US intelligence discovered Soviet missiles being installed in Cuba. President Kennedy ordered a naval blockade; Soviet ships carrying additional missiles turned back. Subsequently declassified documents have shown the crisis was even more dangerous than was known at the time. Soviet submarine commanders had nuclear torpedoes and authority to use them under certain conditions; one submarine was reportedly given authorization to use nuclear weapons but was blocked by another officer's refusal. The lesson places the Cuban Missile Crisis alongside other near-disasters: the Able Archer 83 NATO exercise in November 1983, when Soviet leadership believed it might be cover for an actual nuclear attack; the Stanislav Petrov incident on September 26, 1983, when a Soviet officer recognized a satellite warning as a false alarm and refused to follow protocol that might have triggered a retaliatory strike; and the Norwegian rocket incident in January 1995, when Boris Yeltsin briefly considered authorizing a nuclear launch. Together these incidents suggest that luck has played a significant role in the world's continued existence since 1945.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: The Threshold-Crossing And The Nuclear Age It Created`,
          paragraphs: [
            `The threshold-crossing position holds that whatever the necessity debate about August 1945 concludes, the use of nuclear weapons crossed a moral and political threshold that shaped everything that followed. The nuclear age created by the use is itself the more important object of analysis than the specific 1945 decision. This position is less about whether the decision was right or wrong than about what the use opened that subsequent generations have lived under.`,
            `The arms race the Franck Report predicted. The Soviet Union tested its first atomic bomb in August 1949 (much faster than US planners had expected, partly through espionage at Los Alamos). The UK followed in 1952. The US tested its first hydrogen bomb (1,000x more powerful than atomic bombs) in 1952; the Soviet Union followed in 1953. France joined in 1960. China in 1964. The proliferation continued: Israel (~1967, never officially confirmed), India (1974), Pakistan (1998), North Korea (2006). Current arsenals worldwide total approximately 12,500 weapons across nine states: US ~5,200; Russia ~5,580; China ~410; France ~290; UK ~225; India ~170; Pakistan ~170; Israel ~90; North Korea ~50. The numbers fluctuate; the basic structure remains.`,
            `The near-disasters. Multiple times during the Cold War the world came close to nuclear catastrophe. The Cuban Missile Crisis (October 14-28, 1962): Soviet missiles in Cuba produced 13 days when nuclear war seemed likely; subsequent declassified documents have shown the crisis was even more dangerous than known at the time (Soviet submarine commanders had nuclear torpedoes and authority to use them under certain conditions; one was reportedly authorized but blocked by another officer's refusal). The Able Archer 83 NATO exercise (November 1983): Soviet leadership believed it might be cover for actual nuclear attack; reportedly close to ordering preemptive strike. The Stanislav Petrov incident (September 26, 1983): Soviet officer Petrov received satellite warning of US missile launch; recognized it as false alarm; refused to follow protocol of immediate report to superiors; if he had reported, retaliatory strike might have been ordered. The Norwegian rocket incident (January 25, 1995): Russian early-warning system mistook scientific rocket launch for submarine-launched missile; Boris Yeltsin briefly considered launch authorization. Multiple other incidents have been documented (Norwegian Air Force missile mistaken for warhead 1995; faulty NORAD computer chip 1980; B-52 bombs lost over North Carolina 1961). The track record suggests luck has played significant role in our continued existence.`,
            `Nuclear governance attempts. The Nuclear Non-Proliferation Treaty (NPT, opened for signature 1968, entered into force 1970) commits non-nuclear-weapon states not to acquire weapons and nuclear-weapon states to disarmament negotiations. The Strategic Arms Limitation Talks (SALT I 1972, SALT II 1979) and Strategic Arms Reduction Treaty (START I 1991, New START 2010) limited US and Soviet/Russian arsenals. The Intermediate-Range Nuclear Forces Treaty (INF, 1987 between Reagan and Gorbachev) eliminated all ground-launched intermediate-range missiles; US withdrew in 2019, citing Russian violations. The Reykjavik Summit (October 1986) saw Reagan and Gorbachev nearly agree to complete nuclear disarmament; the deal fell apart over SDI ("Star Wars") but the proximity is historically significant.`,
            `Current trajectory. The Treaty on the Prohibition of Nuclear Weapons (TPNW, opened for signature 2017, entered into force 2021) explicitly prohibits nuclear weapons; ICAN (International Campaign to Abolish Nuclear Weapons) won the Nobel Peace Prize 2017 for its work; but the TPNW has been signed by no nuclear-weapon state and is opposed by NATO nuclear states. Modernization of arsenals continues (US currently planning approximately $1.7 trillion modernization over 30 years; comparable programs in Russia and China). Russia's invasion of Ukraine (February 2022) included explicit nuclear threats; Russian doctrine permits nuclear use in conventional war if Russian existence is threatened. The world has not been close to nuclear use the way it was in 1962 or 1983; the structural risks haven't gone away.`,
            `Where threshold-crossing defenders land. The position holds that whichever way the 1945 necessity debate resolves, the use opened the nuclear age and the question now is what to do with the capability. Some advocate complete abolition (ICAN, Setsuko Thurlow, Nobel-supporting governments). Some defend deterrence as practical necessity (most realist scholars, US/Russia/China official policy). Some advocate steady reduction without complete abolition (mainstream arms control community). The 1945 debate continues but the urgent question is what 21st-century nuclear policy looks like, with the answer increasingly contested as the post-Cold War arms control regime erodes.`,
          ],
          image: `/voyager-assets/history/l10-s4-threshold.webp`,
          imageCaption: `Position 3: threshold-crossing + nuclear age framework. Arms race the Franck Report predicted: USSR 1949, UK 1952, US H-bomb 1952, Soviet H-bomb 1953, France 1960, China 1964, Israel ~1967, India 1974, Pakistan 1998, North Korea 2006. Current arsenals ~12,500 weapons across 9 states. Near-disasters: Cuban Missile Crisis 1962, Able Archer 83, Stanislav Petrov incident Sept 26 1983, Norwegian rocket 1995. NPT 1968/1970, SALT, START, INF 1987 (US withdrew 2019), Reykjavik 1986 nearly complete disarmament. TPNW 2017/2021 + ICAN Nobel 2017.`,
          vocab: [
            {
              word: `nuclear age`,
              definition: `Use of nuclear weapons crossed moral/political threshold; nuclear age created by use more important object of analysis than specific 1945 decision. Arms race Franck Report predicted: USSR Aug 1949 (faster than expected, partly via Los Alamos espionage); UK 1952; US H-bomb 1952 (1,000x more powerful); Soviet H-bomb 1953; France 1960; China 1964; Israel ~1967 unconfirmed; India 1974; Pakistan 1998; North Korea 2006. Current ~12,500 weapons across 9 states (US ~5,200; Russia ~5,580; China ~410; France ~290; UK ~225; India ~170; Pakistan ~170; Israel ~90; North Korea ~50). Near-disasters: Cuban Missile Crisis Oct 14-28 1962 (Soviet submarine nuclear torpedoes authorized then blocked); Able Archer 83 NATO exercise Nov 1983 (Soviet leadership feared cover for attack); Stanislav Petrov incident Sept 26 1983 (Soviet officer recognized false alarm, refused to report up chain, retaliatory strike avoided); Norwegian rocket incident Jan 25 1995 (Yeltsin briefly considered launch). Governance attempts: NPT 1968/1970; SALT I 1972 + II 1979; START I 1991 + New START 2010; INF Treaty 1987 (Reagan-Gorbachev, eliminated ground-launched intermediate-range; US withdrew 2019); Reykjavik Summit Oct 1986 (nearly complete disarmament). Current: TPNW 2017/2021 + ICAN Nobel 2017; no nuclear-weapon state has signed; ~$1.7T US modernization planned 30 years; Russia's Ukraine invasion Feb 2022 included nuclear threats.`,
              audioPrompt: `The threshold-crossing position holds that whatever the necessity debate about August 1945 concludes, the use of nuclear weapons crossed a moral and political threshold that shaped everything that followed, {name}. The Franck Report's prediction of an arms race came true: the Soviet Union tested its first atomic bomb in August 1949; the UK followed in 1952; the US tested its first hydrogen bomb, a thousand times more powerful than atomic bombs, in 1952; the Soviet Union followed in 1953. France joined in 1960. China in 1964. Then Israel around 1967, India in 1974, Pakistan in 1998, North Korea in 2006. Current arsenals worldwide total approximately 12,500 weapons across nine states. Multiple times during the Cold War the world came close to nuclear catastrophe. The Cuban Missile Crisis in October 1962 produced 13 days when nuclear war seemed likely. The Stanislav Petrov incident on September 26, 1983: Soviet officer Petrov received satellite warning of US missile launch; recognized it as false alarm; refused to follow protocol of immediate report. The Treaty on the Prohibition of Nuclear Weapons entered into force in 2021; ICAN won the Nobel Peace Prize 2017 for its work.`,
            },
            {
              word: `Stanislav Petrov`,
              definition: `Soviet military officer who on September 26, 1983 received a satellite warning that the United States had launched nuclear missiles. Petrov recognized it as a false alarm and refused to follow protocol of immediate report to superiors — a decision that likely prevented a retaliatory nuclear strike. His individual judgment prevented what could have been nuclear catastrophe. Cited by the lesson as one of several near-disasters showing that luck has played a significant role in avoiding nuclear war.`,
              audioPrompt: `Stanislav Petrov was a Soviet military officer whose individual judgment on September 26, 1983 may have prevented nuclear catastrophe, {name}. Petrov was on duty at a Soviet early-warning facility when satellite systems reported that the United States had launched multiple nuclear missiles. The protocol required Petrov to immediately report the launch up the chain of command, which would likely have triggered a Soviet retaliatory strike. Petrov instead assessed the warning as a false alarm — correctly, as it turned out; the system had malfunctioned. He refused to follow the reporting protocol and waited for ground-based radar confirmation that never came. The lesson cites the Petrov incident alongside the Cuban Missile Crisis of October 1962, the Able Archer 83 NATO exercise of November 1983, and the Norwegian rocket incident of January 1995 as documented near-disasters. Together these incidents form part of the threshold-crossing position's argument: whatever one concludes about the 1945 decision, the nuclear age it created has been maintained by a combination of governance, deterrence, and luck, with the luck dimension being larger than is comfortable. The lesson asks directly: what does the track record of near-disasters tell you about the structural risks that remain?`,
            },
            {
              word: `nuclear deterrence`,
              definition: `The strategic doctrine that possession of nuclear weapons prevents their use by adversaries through the threat of mutually assured destruction. Defended by most realist scholars and by US, Russia, and China official policy. The threshold-crossing position notes that deterrence has been maintained partly through individual judgment in crisis moments and asks whether the logic of deterrence is stable enough to rely on indefinitely given the documented near-disasters.`,
              audioPrompt: `Nuclear deterrence is the strategic doctrine that possession of nuclear weapons prevents their use by adversaries through the threat of mutually assured destruction, {name}. If both sides know that any nuclear use will be met with nuclear retaliation that destroys both civilizations, neither side will initiate. This logic has been the foundation of US, Soviet, and Russian nuclear doctrine since the Cold War, and is defended by most realist international relations scholars and by the official policies of all nine nuclear-weapon states. The threshold-crossing position on nuclear weapons engages deterrence directly: the lesson presents three positions on what the nuclear age requires. Some advocate complete abolition, represented by ICAN and Setsuko Thurlow, who won the Nobel Peace Prize in 2017. Some defend deterrence as practical necessity. Some advocate steady reduction without complete abolition, which is the mainstream arms control position. The deterrence question is not resolved by the 1945 debate about whether the bombs were necessary or unjustified; it's the forward-looking question about what current nuclear policy should be. The lesson notes that the documented near-disasters, including the Petrov incident and the Cuban Missile Crisis, suggest the deterrence logic has depended on individual judgment under time pressure in ways the doctrine's formal stability doesn't fully account for.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `Three positions you'll commit to in a moment. The choice isn't between knowing the right answer and not knowing; serious historians have continued to disagree across decades. The choice is about which framework best captures what matters for engaging the question.`,
            `One framing as you decide. Position 1 (necessity) emphasizes the wartime context and the alternatives the decision-makers actually faced; the position is sharpest in arguing that the decision was defensible under the information available at the time even if tragic. Position 2 (unjustified) emphasizes what subsequent scholarship has shown about Japanese willingness to surrender, postwar motivations, and the moral significance of civilian targeting. Position 3 (threshold-crossing) holds that whichever way the 1945 debate resolves, the nuclear age that followed is itself the more important question.`,
            `Another framing. The positions don't fully exclude each other. Someone who commits to Position 1 (the decision was defensible at the time) can also hold that the use was morally serious and that current nuclear policy requires substantial change. Someone who commits to Position 2 (unjustified) can acknowledge that decision-makers in 1945 faced genuine pressures with incomplete information. Someone who commits to Position 3 can recognize the 1945 debate as important while focusing analytical energy on subsequent developments.`,
            `One specific framing for your reading ahead. Positions on the nuclear question shape readings of Cold War, post-Cold War, and contemporary geopolitics. L11 (Cold War in Depth) and L12 (Post-Cold War World Order) will both involve nuclear dynamics. Current US-Russia, US-China, Iran nuclear, North Korea nuclear, and ongoing nuclear-policy debates all sit downstream of the threshold-crossing in August 1945. The position you commit to today substantially shapes how you'll engage these questions.`,
            `One last framing. The question of nuclear weapons isn't an academic exercise. The arsenals exist; the doctrines permit use under defined circumstances; the near-disasters have been documented; the political will for disarmament has been substantially diminished from the Reykjavik moment. Engaging the 1945 question seriously builds foundation for engaging the contemporary question seriously. Your generation will face decisions about nuclear policy; the framework you build at 12 develops capacity to participate in those decisions across decades.`,
          ],
          image: `/voyager-assets/history/l10-s5-before.webp`,
          imageCaption: `Three positions don't fully exclude each other. Position shapes readings of L11 Cold War, L12 Post-Cold War, contemporary geopolitics. Current arsenals exist; doctrines permit use; near-disasters documented; political will for disarmament diminished from Reykjavik moment. Engaging 1945 builds foundation for engaging contemporary nuclear policy.`,
          vocab: [
            {
              word: `nuclear question`,
              definition: `Three positions on dropping atomic bombs (necessity / unjustified / threshold-crossing) don't fully exclude each other. Necessity emphasizes wartime context + alternatives decision-makers faced; sharpest in arguing decision defensible under information available. Unjustified emphasizes subsequent scholarship on Japanese surrender willingness + postwar motivations + moral significance of civilian targeting. Threshold-crossing holds that whichever way 1945 debate resolves, nuclear age that followed is more important question. Positions shape readings of Cold War + post-Cold War + contemporary geopolitics; L11, L12, and current US-Russia/US-China/Iran/North Korea nuclear debates sit downstream of 1945 threshold. Question not academic: arsenals exist (~12,500 weapons across 9 states); doctrines permit use under defined circumstances; near-disasters documented (Cuban Missile Crisis, Able Archer 83, Petrov 1983, Norwegian rocket 1995); political will for disarmament diminished from Reykjavik 1986 moment. Building framework at 12 develops capacity to participate in decisions about nuclear policy across decades.`,
              audioPrompt: `Three positions you'll commit to in a moment, {name}. The choice isn't between knowing the right answer and not knowing; serious historians have continued to disagree across decades. The choice is about which framework best captures what matters for engaging the question. Position 1, necessity, emphasizes the wartime context and the alternatives the decision-makers actually faced. Position 2, unjustified, emphasizes what subsequent scholarship has shown about Japanese willingness to surrender, postwar motivations, and the moral significance of civilian targeting. Position 3, threshold-crossing, holds that whichever way the 1945 debate resolves, the nuclear age that followed is itself the more important question. The positions don't fully exclude each other. Someone who commits to Position 1 can also hold that the use was morally serious and that current nuclear policy requires substantial change. The question of nuclear weapons isn't an academic exercise. The arsenals exist; the doctrines permit use under defined circumstances; the near-disasters have been documented. Your generation will face decisions about nuclear policy.`,
            },
            {
              word: `Reykjavik Summit`,
              definition: `Meeting between President Ronald Reagan and Soviet General Secretary Mikhail Gorbachev in October 1986 in which both leaders came close to agreeing to complete nuclear disarmament. The deal fell apart over disagreement about SDI (the Strategic Defense Initiative, also called "Star Wars"). The lesson cites Reykjavik as evidence that complete disarmament has been politically closer than the current state of arsenals suggests, and that the political will for disarmament has substantially diminished since that moment.`,
              audioPrompt: `The Reykjavik Summit was a meeting between President Ronald Reagan and Soviet General Secretary Mikhail Gorbachev in October 1986 in Reykjavik, Iceland, {name}. The two leaders came closer to agreeing to complete nuclear disarmament than at any other moment in the nuclear age. Both sides were willing to eliminate all nuclear weapons; the deal fell apart over disagreement about SDI, the Strategic Defense Initiative, which Reagan called "Star Wars" — a proposed missile defense system that Gorbachev feared would give the US first-strike capability. The lesson cites Reykjavik as historically significant for two reasons. First, it demonstrates that complete nuclear disarmament has been politically closer than the current state of arsenals might suggest; the will existed at the highest levels on both sides. Second, the lesson notes that the political will for disarmament has substantially diminished from the Reykjavik moment, with US modernization now planned at approximately $1.7 trillion over 30 years, comparable programs in Russia and China, and the Intermediate-Range Nuclear Forces Treaty that Reagan and Gorbachev signed in 1987 having been abandoned by US withdrawal in 2019.`,
            },
            {
              word: `Nuclear Non-Proliferation Treaty`,
              definition: `Treaty opened for signature in 1968 and entered into force in 1970, committing non-nuclear-weapon states not to acquire weapons and nuclear-weapon states to engage in disarmament negotiations. The foundational governance framework for nuclear weapons. Joined by most countries; India, Pakistan, Israel, and North Korea are not parties. The NPT has successfully limited new nuclear states but has not produced disarmament by the original five nuclear powers.`,
              audioPrompt: `The Nuclear Non-Proliferation Treaty, known as the NPT, was opened for signature in 1968 and entered into force in 1970, {name}. It commits non-nuclear-weapon states not to acquire weapons and commits nuclear-weapon states to engage in good-faith disarmament negotiations. It is the foundational governance framework for nuclear weapons and has been joined by most countries in the world. India, Pakistan, Israel, and North Korea are not parties. The lesson presents the NPT alongside other governance attempts in the nuclear age: the Strategic Arms Limitation Talks of 1972 and 1979, the Strategic Arms Reduction Treaties of 1991 and 2010, the Intermediate-Range Nuclear Forces Treaty that Reagan and Gorbachev signed in 1987 and that the US withdrew from in 2019, the Reykjavik Summit's near-achievement of complete disarmament in 1986, and the Treaty on the Prohibition of Nuclear Weapons, which entered into force in 2021 but has been signed by no nuclear-weapon state. The NPT has been partially successful: it limited the spread of nuclear weapons compared to what proliferation projections in the 1960s anticipated. But the disarmament obligation on the original five nuclear states has not been fulfilled; arsenals remain in the thousands; and modernization programs continue.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ──────────────────────────────────────────────
        {
          id: `l10-argument-builder`,
          type: `argument-builder`,
          headline: `Was The Use Of Atomic Bombs In 1945 Justified?`,
          intro: `Pick the position that best captures your view on the use of atomic bombs and the nuclear age. Build your case with 4-5 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `necessity`,
              label: `Necessity: the bombs were the least-bad option to end WWII, and saved more lives than they cost`,
              summary: `Defenders: Henry Stimson "The Decision to Use the Atomic Bomb" Harper's Feb 1947; Robert Maddox "Weapons for Victory" 1995; Richard Frank "Downfall" 1999; D. M. Giangreco "Hell to Pay" 2009. Empirical claims: Operation Downfall planned for Nov 1945 + Mar 1946; Joint Chiefs casualty estimates 250-500K+ US military; Japan had 5M+ military still in arms; mass civilian resistance ("100 million die together"); Tokyo firebombing March 9-10 1945 killed ~100,000 in one night; conventional war producing ~200K Japanese deaths per month. Japan situation: military defeat substantial but government holding out for terms; "Big Six" deadlocked; Hirohito had not intervened. Bombs + Soviet entry Aug 8 produced political shift allowing surrender.`,
            },
            {
              id: `unjustified`,
              label: `Unjustified: Japan was seeking surrender; bombs primarily about postwar US-USSR positioning; civilian targeting crossed moral lines`,
              summary: `Defenders: Gar Alperovitz "Atomic Diplomacy" 1965 + "The Decision to Use the Atomic Bomb" 1995 (atomic diplomacy thesis); Tsuyoshi Hasegawa "Racing the Enemy" 2005 (Soviet entry alone would have produced surrender); Martin Sherwin "A World Destroyed" 1975; Kai Bird; Barton Bernstein. Position emerged 1960s onward. Evidence: Japanese peace overtures via Soviet mediation July 1945; Big Six debating surrender for weeks; James Byrnes documented as identifying bombs with postwar bargaining; Franck Report June 1945 + Szilard petition July 1945 recommended against use; civilian targeting (~200-280K mostly civilian dead) violated international law of war.`,
            },
            {
              id: `threshold-crossing`,
              label: `Threshold-crossing: whichever way 1945 debate resolves, the nuclear age created is the more important question`,
              summary: `Position holds that nuclear age is more important object of analysis than specific 1945 decision. Arms race Franck Report predicted: USSR 1949, UK 1952, US H-bomb 1952, Soviet H-bomb 1953, France 1960, China 1964, Israel ~1967, India 1974, Pakistan 1998, North Korea 2006; current ~12,500 weapons across 9 states. Near-disasters documented: Cuban Missile Crisis 1962, Able Archer 83, Petrov incident Sept 26 1983, Norwegian rocket 1995. Governance: NPT 1968/1970, SALT, START, INF 1987 (US withdrew 2019), Reykjavik 1986 nearly complete disarmament, TPNW 2017/2021 + ICAN Nobel Peace Prize 2017. Modernization continues; Russia's Ukraine invasion 2022 included nuclear threats. Setsuko Thurlow hibakusha and ICAN.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Operation Downfall, the planned US invasion of Japan, was scheduled for November 1945 (Kyushu) and March 1946 (Honshu). US Joint Chiefs casualty estimates ranged from approximately 250,000 to 500,000 US military casualties; some estimates went higher. Japan had over 5 million military personnel still in arms in mid-1945 and was preparing for mass civilian resistance.`,
              source: `D. M. Giangreco "Hell to Pay" 2009; US military planning documents`,
            },
            {
              id: `e2`,
              text: `Gar Alperovitz's "Atomic Diplomacy" (1965, expanded as "The Decision to Use the Atomic Bomb" 1995) argued that US leaders knew Japan was seeking surrender by summer 1945 and used the bombs partly to demonstrate American power to the Soviet Union before postwar settlement. The work drew on declassified documents.`,
              source: `Alperovitz "Atomic Diplomacy" 1965 / "Decision to Use the Atomic Bomb" 1995`,
            },
            {
              id: `e3`,
              text: `Tsuyoshi Hasegawa's "Racing the Enemy" (2005), drawing on Soviet archival sources newly available after 1991, argued that Soviet entry into the war on August 8, 1945 was at least as decisive as the bombs for Japanese surrender. The Big Six had been debating surrender for weeks; Hirohito intervened after both bombs and Soviet entry.`,
              source: `Hasegawa "Racing the Enemy" 2005`,
            },
            {
              id: `e4`,
              text: `The Franck Report (June 11, 1945) by James Franck and other Manhattan Project scientists recommended against use of the bomb without prior demonstration. It argued the bombs' use would precipitate an arms race with the Soviet Union and the long-term consequences could be catastrophic. Subsequent events have substantially vindicated the Franck Report's predictions about the arms race.`,
              source: `Franck Report June 11, 1945`,
            },
            {
              id: `e5`,
              text: `The bombs killed approximately 200,000-280,000 mostly civilian Japanese (Hiroshima ~140-200K total; Nagasaki ~70-80K) plus approximately 20,000 Korean forced laborers and approximately 12 American POWs. Most victims were civilians. International law of war by 1945 prohibited deliberate targeting of civilians; this had been violated repeatedly through strategic bombing, but the atomic bombs crossed to a new category.`,
              source: `Multiple historical accounts; Hiroshima Peace Memorial Museum; Nagasaki Atomic Bomb Museum`,
            },
            {
              id: `e6`,
              text: `Current nuclear arsenals total approximately 12,500 weapons across nine states: US ~5,200; Russia ~5,580; China ~410; France ~290; UK ~225; India ~170; Pakistan ~170; Israel ~90; North Korea ~50. The arms race the Franck Report predicted has produced a permanent feature of international politics.`,
              source: `SIPRI Yearbook 2024; Federation of American Scientists`,
            },
            {
              id: `e7`,
              text: `The world has come close to nuclear catastrophe multiple times: Cuban Missile Crisis (October 1962, 13 days, Soviet submarine nuclear torpedoes nearly used); Able Archer 83 NATO exercise (November 1983, Soviet leadership feared cover for attack); Stanislav Petrov incident (September 26, 1983, Soviet officer's individual decision prevented retaliatory strike); Norwegian rocket incident (January 25, 1995, Yeltsin briefly considered launch). Multiple other incidents have been documented.`,
              source: `Multiple declassified documents; scholarly analyses of nuclear close calls`,
            },
            {
              id: `e8`,
              text: `Setsuko Thurlow, who survived Hiroshima at age 13, became one of the leading voices for nuclear abolition and was joint Nobel Peace Prize recipient with the International Campaign to Abolish Nuclear Weapons (ICAN) in 2017. Hibakusha (Japanese term for atomic bomb survivors) testimony has been central to subsequent peace movements and to the Treaty on the Prohibition of Nuclear Weapons (TPNW, entered into force 2021).`,
              source: `Nobel Peace Prize 2017; ICAN documentation; hibakusha testimony archives`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You've committed to a position. Here's the strongest objection. Whichever position you've taken, you're making the 1945 decision retrospectively in light of subsequent information that Truman and his advisors didn't have. The advisors in summer 1945 didn't know Japan would surrender without invasion; they didn't have Soviet archival documents on Japanese intentions; they didn't know the long-term radiation effects; they didn't know the bomb's destructive capability with civilian populations precisely. They made the decision under conditions of war, fatigue (years of mass casualties), and incomplete information. Applying retrospective standards may produce more confident judgments than the situation actually permits. Maybe the honest answer at this distance is 'I don't know what I would have done in their position; the decision was made under conditions I can't fully reconstruct; I can analyze the framework without claiming I would have certainly chosen differently.'"`,
            promptInstruction: `In 4-5 sentences, respond. Does your committed position survive the counterargument about retrospective judgment? Or does it require modification?`,
          },
          reflectionPrompt: `Looking at the position you didn't commit to: which has the strongest argument? Where do your priors (family history, citizenship, what you've been taught about WWII) shape which felt natural?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What happened on August 6, 1945 in Hiroshima?`,
              options: [
                `Random`,
                `B-29 Enola Gay piloted by Col. Paul Tibbets dropped "Little Boy" uranium bomb at 8:15am, detonating ~1,900 feet above ground; blast ~15 kilotons TNT-equivalent; temperatures at hypocenter >3,000°C; ~70,000 killed instantly + ~70,000 by end 1945; ~200,000 total over subsequent years; city population had been ~350,000 (~2/3 affected). Genbaku Dome (Hiroshima Prefectural Industrial Promotion Hall) remained standing, now UNESCO World Heritage memorial site. Hibakusha (survivors) became core of subsequent peace movements.`,
                `Just bomb`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Naming the specific scale and mechanism matters. The bombs weren't abstract weapons; they killed specific large numbers of specific people in specific places. The Genbaku Dome remains a UNESCO site. Hibakusha testimony continues to shape nuclear politics.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the necessity position on dropping the bomb (Position 1)?`,
              options: [
                `Just bomb`,
                `Bombs were the least-bad option to end WWII; alternatives (continued conventional bombing, naval blockade, invasion) would have produced more total deaths. Defenders: Henry Stimson "The Decision to Use the Atomic Bomb" Harper's Feb 1947; Robert Maddox "Weapons for Victory" 1995; Richard Frank "Downfall" 1999; D. M. Giangreco "Hell to Pay" 2009. Operation Downfall planned Nov 1945 + Mar 1946; Joint Chiefs estimates 250-500K+ US casualties; Japan had 5M+ military still in arms; preparation for mass civilian resistance.`,
                `Random`,
                `Just war`,
              ],
              correctIndex: 1,
              explanation: `The necessity position has been the dominant American public discourse position since 1945 even as it's been substantially challenged by historians since the 1960s. The empirical claims about invasion casualty estimates and Japanese resistance preparation are documented.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the unjustified position (Position 2)?`,
              options: [
                `Random`,
                `Bombs not militarily necessary; Japan seeking surrender before bombs; use partly to position US for postwar (particularly against USSR); civilian targeting crossed moral lines. Defenders: Gar Alperovitz "Atomic Diplomacy" 1965 + expanded "The Decision to Use the Atomic Bomb" 1995 (atomic diplomacy thesis); Tsuyoshi Hasegawa "Racing the Enemy" 2005 (Soviet archival sources after 1991; Soviet entry Aug 8 at least as decisive); Martin Sherwin "A World Destroyed" 1975. Franck Report June 1945 + Szilard petition July 1945 recommended against use. Bombs killed ~200-280K mostly civilians + Korean forced laborers + Allied POWs.`,
                `Just bad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The unjustified position is mainstream in academic Cold War history. The empirical claims about Japanese surrender willingness and Soviet entry's role draw on Soviet archival sources newly available after 1991.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the threshold-crossing position (Position 3)?`,
              options: [
                `Random`,
                `Whichever way 1945 necessity debate resolves, use of nuclear weapons crossed moral/political threshold; nuclear age created by use is more important question. Arms race Franck Report predicted: USSR 1949, UK 1952, US H-bomb 1952, Soviet H-bomb 1953, France 1960, China 1964, Israel ~1967, India 1974, Pakistan 1998, North Korea 2006; current ~12,500 weapons across 9 states. Near-disasters: Cuban Missile Crisis 1962, Able Archer 83, Petrov incident Sept 26 1983, Norwegian rocket 1995. Setsuko Thurlow + ICAN Nobel Peace Prize 2017; TPNW 2017/2021. Modernization continues; Russia's Ukraine invasion 2022 included nuclear threats.`,
                `Just framework`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The threshold-crossing position reframes the question from "was the 1945 decision right or wrong" to "what do we do with the capability the use opened." Most contemporary nuclear-policy debate operates from this framing even where it doesn't explicitly position itself this way.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What was the Cuban Missile Crisis and why does it matter?`,
              options: [
                `Random`,
                `October 14-28, 1962 (13 days): Soviet missiles in Cuba produced 13 days when nuclear war seemed likely. Subsequent declassified documents have shown the crisis was even more dangerous than known at the time. Soviet submarine commanders had nuclear torpedoes and authority to use them under certain conditions; one was reportedly authorized but blocked by another officer's refusal. The crisis demonstrated how close nuclear war could come during the Cold War standoff; informed subsequent arms control negotiations including the hotline between Moscow and Washington.`,
                `Just crisis`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The Cuban Missile Crisis is one of the foundational events of Cold War history. The declassified documents have continued to show how close nuclear war came; the lessons drawn (rapid communication, arms control) shaped subsequent decades.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Stanislav Petrov do on September 26, 1983?`,
              options: [
                `Random`,
                `Soviet officer Stanislav Petrov was on duty at Serpukhov-15 missile early-warning bunker; received satellite warning of US ICBM launch (system reported one missile, then four more); recognized it as likely false alarm rather than reporting to superiors which would have triggered retaliatory strike protocol; remained quiet through agonizing minutes until ground-based radar confirmed no incoming missiles. The false alarm was traced to sunlight reflection off clouds at unusual angle. Petrov's individual decision likely prevented nuclear war. He received minimal official recognition during the Soviet period; later honored by various international organizations.`,
                `Just officer`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Petrov's decision is one of multiple documented near-disasters where individual human judgment likely prevented nuclear war. The framework of "automatic response to early warning" had been designed to prevent indecision; Petrov's refusal to follow protocol exemplifies why human judgment in the nuclear command system matters.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the NPT and what are current nuclear arsenals?`,
              options: [
                `Random`,
                `Nuclear Non-Proliferation Treaty (NPT): opened for signature 1968, entered into force 1970. Commits non-nuclear-weapon states not to acquire weapons and nuclear-weapon states to disarmament negotiations. Current nuclear arsenals total approximately 12,500 weapons across nine states: US ~5,200; Russia ~5,580; China ~410; France ~290; UK ~225; India ~170; Pakistan ~170; Israel ~90 (never officially confirmed); North Korea ~50. The numbers fluctuate; the basic structure remains.`,
                `Just treaty`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The NPT remains the foundational nuclear-governance treaty even where it has limits (Israel, India, Pakistan, North Korea outside it). Current arsenal numbers come from SIPRI and Federation of American Scientists. The post-Cold War reduction from ~70,000 weapons at peak to current ~12,500 is significant but the absolute numbers remain civilization-threatening.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What was the Reykjavik Summit and what about TPNW?`,
              options: [
                `Random`,
                `Reykjavik Summit October 1986: Reagan and Gorbachev nearly agreed to complete nuclear disarmament. The deal fell apart over SDI ("Star Wars") but the proximity is historically significant. The Intermediate-Range Nuclear Forces Treaty (INF) followed in 1987 eliminating ground-launched intermediate-range missiles; US withdrew 2019 citing Russian violations. The Treaty on the Prohibition of Nuclear Weapons (TPNW) opened for signature 2017, entered into force 2021, explicitly prohibits nuclear weapons. ICAN (International Campaign to Abolish Nuclear Weapons) won Nobel Peace Prize 2017. No nuclear-weapon state has signed TPNW; opposed by NATO nuclear states.`,
                `Just meeting`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Reykjavik 1986 represents the closest the two superpowers came to complete nuclear disarmament. The fact that it almost happened matters historically; the fact that it didn't shapes everything since. Current TPNW vs nuclear-weapon states' modernization plans represents the ongoing tension between abolition and management approaches.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The dropping of the atomic bombs in 1945 ended the necessity debate; subsequent scholarship has confirmed Truman's decision was clearly correct.`,
              correctAnswer: false,
              explanation: `False. The necessity debate has not been resolved by subsequent scholarship; it has intensified. Position 1 (necessity) was the dominant American public discourse position from 1945 and has continued defenders (Maddox 1995, Frank 1999, Giangreco 2009). Position 2 (unjustified) emerged in serious scholarship from the 1960s (Alperovitz 1965/1995) and has been substantially developed (Hasegawa 2005 drawing on Soviet archival sources after 1991, Sherwin 1975, Kai Bird, Barton Bernstein). The debate continues among professional historians. Position 3 (threshold-crossing) holds that whichever way the necessity debate resolves, the nuclear age created by the use is the more important question. The claim that the decision was "clearly correct" is itself a position within an unresolved scholarly debate, not the consensus view.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your grandfather (who served in the Pacific in WWII) says "Truman saved my life. Without the bomb I would have died in the invasion of Japan. End of story." Based on this lesson, what should you point out?`,
              options: [
                `"You're right grandfather"`,
                `"Several specific things, with respect. First, your grandfather's perspective deserves serious engagement; he and other Pacific veterans were directly affected by the invasion that didn't happen. His position represents Position 1 (necessity) as it was held by veterans and by the public in 1945; it has serious historians defending it today (Robert Maddox 'Weapons for Victory' 1995; Richard Frank 'Downfall' 1999; D. M. Giangreco 'Hell to Pay' 2009 with detailed analysis of Operation Downfall casualty projections). The Joint Chiefs estimates of 250,000-500,000 US military casualties from invasion are documented; Japan did have 5 million military personnel still in arms and was preparing for mass civilian resistance. Second, the position has been substantially challenged by serious scholarship since the 1960s. Gar Alperovitz argued in 'Atomic Diplomacy' (1965) and 'The Decision to Use the Atomic Bomb' (1995) that Japan was seeking surrender before the bombs and that the bombs were used partly for postwar positioning against the USSR. Tsuyoshi Hasegawa in 'Racing the Enemy' (2005), using Soviet archives newly available after 1991, argued that Soviet entry on August 8 was at least as decisive as the bombs for Japanese surrender; without the bombs, Japan would probably have surrendered within weeks anyway. These positions don't dismiss the wartime context; they argue the historical record is more complicated than the 1945 framing suggested. Third, the personal stake matters but doesn't resolve the historical question. Your grandfather was right that he might have died in invasion; he's also right that he was glad not to be sent. Those facts coexist with the historical question of whether the invasion would actually have been required given Japanese surrender willingness. Fourth, what the conversation can do productively: recognize that multiple positions can hold at once. Your grandfather can be entirely correct that he was glad the invasion didn't happen and entirely entitled to feel grateful to Truman for not sending him; you can hold that the historical question of necessity is more contested than the popular framing suggests. The conversation isn't 'who's right' but 'what's the full picture'; both can be engaged. Fifth, what to do practically: don't argue with your grandfather about whether he should have died in invasion. Acknowledge what he experienced. Then, if conversation permits, share what you've learned about the debate. Books like Hasegawa or Alperovitz aren't dismissive of veteran experience; they're trying to understand what actually happened, which is the work history does. Your grandfather can be glad he survived and you can hold that the necessity question is more complicated than 'end of story.'"`,
                `"Random"`,
                `"Just yes"`,
              ],
              correctIndex: 1,
              explanation: `Real applied nuclear history. Family conversations about WWII are emotionally weighted; engaging seriously requires both honoring veteran experience and recognizing that the historical scholarship has substantially evolved since 1945. The "end of story" framing is the popular position but the scholarly debate is genuinely contested. Holding both at once is the work.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-family`, category: `Family history`, prompt: `Does your family have direct connection to WWII (Pacific veterans, civilian survivors, hibakusha, refugees, victims, others)? How does that connection shape what felt natural to commit to today?` },
            { id: `reflect-position`, category: `Your commitment`, prompt: `Why did you commit to the position you picked? What specific evidence made it most convincing? What would it take to revise?` },
            { id: `reflect-counterargument`, category: `Retrospective judgment`, prompt: `The counterargument suggested that retrospective judgment may produce more confident conclusions than the situation permitted. How do you handle the gap between what 1945 decision-makers knew and what we know now?` },
            { id: `reflect-petrov`, category: `Individual judgment`, prompt: `Stanislav Petrov's individual decision on September 26, 1983 likely prevented nuclear war. What does this say about how nuclear command systems should be designed? What does it say about the role of individual conscience in catastrophic systems?` },
            { id: `reflect-abolition`, category: `Abolition vs deterrence`, prompt: `The TPNW (2017/2021) advocates complete nuclear abolition; mainstream policy supports deterrence with arms control. Which framework do you find more compelling for the next 30 years? What's your strongest argument and what's the strongest argument against?` },
            { id: `reflect-future`, category: `Your generation`, prompt: `Your generation will face decisions about nuclear policy: continued arsenal modernization, abolition campaigns, proliferation challenges (Iran, North Korea, regional), potential conflict scenarios (Russia-NATO, US-China). What do you want to know more about? Where might you engage politically?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Nuclear questions persist in your lifetime. Two paths.`,
          familyActivity: {
            title: `Family Nuclear Conversation`,
            duration: `60 minutes`,
            description: `Share the three positions with your family. Many families have Pacific theater WWII connections; some have hibakusha or other survivor connections; many have grown up with Cold War nuclear anxiety. The conversation often surfaces specific generational perspectives: WWII-era family members typically hold Position 1; baby boomers grew up under nuclear anxiety; Gen X and millennials grew up post-Reagan-Gorbachev; Gen Z and Alpha are growing up with current US-Russia and US-China nuclear tensions. Recognizing these generational perspectives helps engage rather than just dismiss positions.`,
          },
          projectOption: {
            title: `Read One Major Account, 4 weeks (optional)`,
            duration: `4 weeks, ~45 minutes per session`,
            description: `Pick one major account of the nuclear question. Options: John Hersey "Hiroshima" (1946 New Yorker piece, ~30,000 words, foundational journalism, accessible). Tsuyoshi Hasegawa "Racing the Enemy" (2005, ~340 pages, demanding but rewarding). D. M. Giangreco "Hell to Pay" (2009, ~400 pages, military history of Operation Downfall). Robert Jay Lifton + Greg Mitchell "Hiroshima in America" (1995, examines US memory). Setsuko Thurlow's writings and ICAN materials. Daniel Ellsberg "The Doomsday Machine" (2017, nuclear command system memoir from former insider, ~400 pages). Read across 4 weeks; write 1,500 words on what changed in your thinking and what questions you still have.`,
            offerToParent: `Parent: opt your kid into this project. Sustained engagement with one substantial nuclear-question account at 12-13 builds foundation for engaging contemporary nuclear policy across decades.`,
          },
          identityQuestion: `If you become someone who engages nuclear politics seriously across three positions, what does that change about how you'll engage with foreign policy debates, US-Russia and US-China tensions, and the ongoing question of human survival under nuclear arsenals?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who engages the 1945 nuclear question through three serious positions.`,
            `A person who knows hibakusha testimony and ICAN's work.`,
            `Someone who recognizes the Petrov incident and what it means for nuclear command systems.`,
          ],
          saveKey: `identity_responses_hw_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Tenth History and World lesson done. Halfway through the band. You have framework for three serious positions on the 1945 nuclear question: necessity (Stimson 1947, Maddox 1995, Frank 1999, Giangreco 2009); unjustified (Alperovitz 1965/1995, Hasegawa 2005, Sherwin 1975); threshold-crossing (the nuclear age framework). You know specific scale: Hiroshima ~140-200K, Nagasaki ~70-80K, ~210K total by end 1945 plus thousands more from radiation. You know the arms race (USSR 1949, UK 1952, France 1960, China 1964, others through North Korea 2006; ~12,500 weapons across 9 states currently). You know the near-disasters: Cuban Missile Crisis 1962, Able Archer 83, Petrov September 26 1983, Norwegian rocket 1995. You know the governance attempts (NPT 1968/1970, SALT, START, INF 1987 + US withdrawal 2019, Reykjavik 1986 nearly complete disarmament, TPNW 2017/2021, ICAN Nobel 2017, Setsuko Thurlow hibakusha). Ten lessons to go. Next: Cold War in Depth. Multiple interpretive traditions on what the Cold War was and how to read it. Perspectives format. Five voices. Onward. — Lyra`,
          badge: `nuclear-age-literate`,
          badgeName: `Nuclear Age Literate`,
          xpEarned: 75,
          competencies: [
            `Names specific events of Aug 6 + Aug 9 1945 with scale, mechanism, victim categories`,
            `Articulates three serious positions on the 1945 nuclear decision (necessity, unjustified, threshold-crossing)`,
            `Names defenders and key works for each position (Stimson + Maddox + Frank + Giangreco; Alperovitz + Hasegawa + Sherwin; threshold-crossing framing)`,
            `Names the arms race (9 nuclear states, ~12,500 weapons) and the near-disasters (Cuban Missile Crisis, Able Archer, Petrov, Norwegian rocket)`,
            `Knows the governance framework (NPT, SALT, START, INF, Reykjavik, TPNW, ICAN) and current trajectory (modernization, Ukraine threats)`,
            `Engages hibakusha testimony (Setsuko Thurlow + ICAN Nobel Peace Prize 2017) and ongoing abolition advocacy`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: The Cold War in Depth`,
            hook: `Perspectives. Five voices: orthodox, revisionist, post-revisionist, global Cold War, Cold War from below.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L10 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
