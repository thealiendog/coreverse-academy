// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L11 — Drama and Theater
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L11 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-11`,
      title:     `Drama and Theater`,
      duration:  12,
      xpReward:  50,
      badge:     `performer`,
      badgeName: `Performer`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Here's a thought for you, {name}: theater is the oldest art form in the world. The ancient Greeks were performing plays 2,500 years ago that are still staged today. There's something about watching people tell a story in a room together — live, in real time — that no other medium quite replicates. And the skills theater builds — stepping into another person's experience, deep listening, creative courage, working with others toward something larger than yourself — are some of the most powerful any person can develop. Today we're going inside the world of drama. Whether you end up on stage or not, this one will stay with you.`,
          headline: `Drama and Theater`,
          subtitle: `Theater is the oldest art form in the world — the ancient Greeks performed plays 2,500 years ago that are still performed today. The skills it develops — empathy, deep listening, creative courage, collaboration — are among the most powerful any person can have`,
          visual: `/explorer-assets/creative-arts/l11-welcome.png`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Oldest Art Form`,
          paragraphs: [
            `The ancient Greeks performed plays 2,500 years ago that are still staged today.`,
            `There's something about watching people tell a story in a room together — live, in real time — that no other medium replicates.`,
          ],
          image: `/explorer-assets/creative-arts/l11-s1-oldest-art-form.png`,
          imageCaption: `Movies, TV, video. They're all newer than theater. The stage has been the human classroom for 2,500 years.`,
          vocab: [
            { word: `theater`,   definition: `The art of live performance — actors embodying characters in front of an audience in real time.`,
              audioPrompt: `Theater is the oldest art form humans built, {name}, and it's still here — because there's something about watching people tell a story in a room together that no recording can replace. The energy between performer and audience creates something that exists only once. Every performance is its own event.` },
            { word: `tradition`, definition: `A practice passed down through generations. Theater carries 2,500 years of accumulated tradition.`,
              audioPrompt: `Tradition is what gets handed forward, {name}. The acting methods you'd learn today connect back through teachers, directors, performers — all the way to ancient Greece. Few human practices have an unbroken tradition that long. Theater is one of them. When you step on a stage, you step into a 2,500-year conversation.` },
            { word: `universal`, definition: `Appearing across every culture and time. Theater is a human universal — every people invented some form of it.`,
              audioPrompt: `Theater is a human universal, {name} — every culture on earth invented some form of it independently. Greek drama. Japanese Noh. Indian Sanskrit theater. West African storytelling traditions. The impulse to gather and watch people perform stories is built into us. It's not a cultural accident. It's a human one.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Live, Ephemeral, Collaborative`,
          paragraphs: [
            `Theater is LIVE. No retakes. Each performance is unrepeatable.`,
            `It's also EPHEMERAL — gone the moment it ends. And deeply COLLABORATIVE — actors, directors, designers, the audience itself. No one makes theater alone.`,
          ],
          image: `/explorer-assets/creative-arts/l11-s2-live-ephemeral.png`,
          imageCaption: `Live, gone in the moment, made by many — theater's three deepest qualities, and what makes it different from everything else.`,
          vocab: [
            { word: `live performance`, definition: `Art that happens in real time, with no retakes. The audience is part of the energy.`,
              audioPrompt: `Every filmed performance can be rewound, {name}. Live theater cannot. It exists for the duration of the performance and then it's gone. The audience is part of it — their laughter, their silence, their held breath. That's what live performance offers that no other art form can: something true, shared, happening right now, once only.` },
            { word: `ephemeral`,        definition: `Lasting only briefly. Unable to be captured or repeated. What makes live performance precious.`,
              audioPrompt: `Ephemeral means it disappears, {name} — and theater is deliberately, beautifully ephemeral. Tonight's performance will never be exactly that performance again. This is what some people find frustrating about live art and what others find sacred about it: it exists fully only in the moment it happens.` },
            { word: `collaborative`,    definition: `Made together by many people. In theater, the art form is built from many people trusting each other.`,
              audioPrompt: `Theater is never made alone, {name}. The script, the direction, the design, the performance, the audience — all of it combines into something that couldn't exist without every part. Collaboration in theater isn't compromise. It's the whole point. The art form is built from many people serving something larger than any one of them.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Truthful Acting`,
          paragraphs: [
            `Great acting isn't performing emotions from the outside. It's genuinely believing what your character believes in that moment.`,
            `The tools: OBJECTIVE (what does my character want?), OBSTACLE (what's in the way?), ACTION (what do I do about it?).`,
          ],
          image: `/explorer-assets/creative-arts/l11-s3-truthful-acting.png`,
          imageCaption: `Performing sadness doesn't move anyone. Truly wanting something and hitting resistance — that's where real acting lives.`,
          vocab: [
            { word: `truthfulness`, definition: `Genuinely believing the character's situation rather than performing emotions from outside. The foundation of acting.`,
              audioPrompt: `Truthfulness is the difference between acting and performing, {name}. Performing announces the emotion — look how sad I am. Acting lives inside the situation so fully that the emotion emerges on its own. An audience can tell the difference even if they can't name it.` },
            { word: `objective`,    definition: `What your character WANTS in a scene. The goal driving every choice they make.`,
              audioPrompt: `Every compelling character wants something, {name}. The objective is that want — the goal driving them through every scene. Give an actor a clear objective and they have something real to play. Without one, they're just saying lines. With one, every line becomes pursuit.` },
            { word: `action`,       definition: `What a character actively DOES to pursue their objective. A playable verb, not an emotion.`,
              audioPrompt: `"Sad" is not playable, {name} — it's a result, not a cause. But "trying to convince," "begging," "demanding," "comforting" — these are actions an actor can actually do. Acting teachers talk about playing actions rather than emotions because authentic emotions follow from genuine action.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Yes, And`,
          paragraphs: [
            `Improv's foundational rule: "yes, and."`,
            `Accept what your scene partner offers (YES) and build on it (AND). Never deny their reality. Never block. The world of the scene grows with every exchange.`,
          ],
          image: `/explorer-assets/creative-arts/l11-s4-yes-and.png`,
          imageCaption: `Two small words. Endless possibilities. "Yes, and" is the engine that keeps every improv scene alive.`,
          vocab: [
            { word: `improvisation`, definition: `Unscripted, spontaneous performance created in the moment. Built on listening and "yes, and."`,
              audioPrompt: `Improvisation means making it up as you go, {name} — and the results are often more alive than scripted performance, because both actors are genuinely surprised. The secret is trust: you can't plan, so you have to listen and respond. Everything your partner does is an offer.` },
            { word: `"yes, and"`,    definition: `Improv's foundation: accept what your partner establishes (yes) and add to it (and). Never deny.`,
              audioPrompt: `"Yes, and" is two words that unlock everything, {name}. You never deny what your partner creates. If they say "we're on the moon," you don't say "no we're not" — you say yes, and you add. Off-stage, it's a way of listening that says: I take you seriously, and I'll build on what you're offering. Rare and powerful.` },
            { word: `offer`,         definition: `Anything your scene partner establishes in improv. Every offer is a gift to build on, not a problem to fix.`,
              audioPrompt: `An offer is anything your scene partner does or says, {name} — a line, a movement, a sound, a choice. In improv, every offer is treated as a gift. You don't critique it. You don't redirect it. You accept it and add to it. That's how the world of the scene grows. Every offer makes more possible.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Real Listening`,
          paragraphs: [
            `The secret of improv isn't being clever or quick. It's listening.`,
            `Most people hear; few people really listen. Improv demands the kind of attention where your face changes because of what you heard, not what you planned to show.`,
          ],
          image: `/explorer-assets/creative-arts/l11-s5-real-listening.png`,
          imageCaption: `Real listening leaves a mark on your face before you ever speak. That's the skill — and it works everywhere, not just on stage.`,
          vocab: [
            { word: `listening`,    definition: `Full active attention to a scene partner — responding to what they actually do, not what you planned for.`,
              audioPrompt: `Most people hear, {name}, but few people listen. In improv and in acting, listening is everything — being so present that you can respond to what actually happened. A great scene isn't two actors performing AT each other. It's two people genuinely affecting each other.` },
            { word: `presence`,     definition: `Being fully alive in the moment. Connected to scene partners. Not monitoring yourself from outside.`,
              audioPrompt: `Presence is the quality that makes you unable to look away from a certain performer, {name}, even when others are on stage. Not loudness or beauty — a quality of full aliveness. Total commitment. Nothing held back, nothing monitored from outside. The audience feels they're seeing something real.` },
            { word: `spontaneity`,  definition: `Responding genuinely to what's happening right now. The opposite of planning ahead.`,
              audioPrompt: `Spontaneity in performance isn't randomness, {name} — it's responsiveness. The actor who plans every move loses the ability to respond to what their partner actually offers. Spontaneity means trusting yourself enough to react truthfully to the moment. It's a discipline, not a freedom.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Stage Fright and Presence`,
          paragraphs: [
            `Stage fright is your body preparing to perform — not warning you to stop.`,
            `Focus on your character's objective instead of yourself. Purpose is the antidote to self-consciousness. The actor's real tool is courage — the willingness to be fully seen.`,
          ],
          image: `/explorer-assets/creative-arts/l11-s6-fright-to-presence.png`,
          imageCaption: `Same energy. Two possible destinations. Pointed at yourself, it's anxiety. Pointed at the character's objective, it's aliveness.`,
          vocab: [
            { word: `stage fright`, definition: `Pre-performance anxiety. Almost universal, even among experienced professionals.`,
              audioPrompt: `Stage fright visits almost every performer, {name} — even the ones who look completely calm. The racing heart, the dry mouth. The key reframe: those feelings are your body preparing to perform, not warning you to stop. Redirect the energy into your character's objective, and it becomes presence instead of panic.` },
            { word: `reframe`,      definition: `Changing how you interpret something. Turning anxiety into performance energy by reading it differently.`,
              audioPrompt: `A reframe is choosing a new interpretation of the same physical feeling, {name}. The pounding heart isn't fear — it's readiness. The racing thoughts aren't panic — they're alertness. Reframes don't make the sensation go away. They just teach you to use it. One of the most useful mental skills there is, on stage and off.` },
            { word: `courage`,      definition: `The willingness to be fully seen. Not the absence of fear — the willingness to be present anyway.`,
              audioPrompt: `The actor's deepest tool is courage, {name} — the willingness to be fully seen. Not courage to be perfect, but to be genuinely present. To commit to a choice even if it might fail. To be vulnerable in front of strangers. That quality of full presence — that is what moves people.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `builds`,
              label: `🎭 This will make you a stronger performer`,
              color: `#34D399`,
            },
            {
              id: `limits`,
              label: `⚠️ This holds a performer back`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l11-g1`,
              image: `l11-game-1.png`,
              label: `Imagining yourself fully as the character — what they want, what they fear, what they're trying to do — before the scene begins.`,
              matchPhrase: `That's building a clear objective — the foundation of truthful acting. When you know exactly what your character wants and what stands in their way, you don't have to perform emotions from the outside. You simply pursue the goal, and the emotions emerge naturally from the effort and the obstacles.`,
              correctMatch: `builds`,
            },
            {
              id: `l11-g2`,
              image: `l11-game-2.png`,
              label: `When a scene partner says "Imagine we're on a sinking ship," responding "Yes, and the water is already at our ankles!" to keep building the scene.`,
              matchPhrase: `That's "yes, and" in action — the foundational rule of improv. By accepting your partner's reality and adding to it, you create a shared world that grows richer with every exchange. Blocking or denying what your partner establishes breaks the scene; building on it makes something neither of you could have created alone.`,
              correctMatch: `builds`,
            },
            {
              id: `l11-g3`,
              image: `l11-game-3.png`,
              label: `Coming into an improv scene focused on getting laughs from the audience instead of really listening to what your scene partner says.`,
              matchPhrase: `Improv performers who chase laughs rather than truth usually get neither. When you're focused on the audience's reaction, you stop listening to your partner — and real improv lives entirely in the listening. The comedy in great improv emerges from two people genuinely responding to each other. You can't manufacture it by trying.`,
              correctMatch: `limits`,
            },
            {
              id: `l11-g4`,
              image: `l11-game-4.png`,
              label: `Spending the whole scene wondering what the audience thinks of you instead of focusing on what your character wants.`,
              matchPhrase: `Self-consciousness is stage fright's most damaging form — it pulls your attention inward when it needs to be outward, on your character's world. The fix isn't confidence; it's objective. When you're genuinely pursuing what your character wants, you don't have mental space left over to worry about how you look. Purpose is the antidote to self-consciousness.`,
              correctMatch: `limits`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l11-q1`,
              format: `multiple-choice`,
              question: `What does the "as if" technique mean in acting?`,
              options: [
                `Asking yourself "as if" questions about your character's background before each rehearsal`,
                `Acting as if the situation were genuinely real — believing what your character believes, rather than performing emotions from the outside`,
                `Pretending to be a different kind of actor as if you had been trained differently`,
                `Using props and costumes as if they were real objects to help yourself believe the scene`,
              ],
              correctIndex: 1,
              explanation: `The "as if" technique asks an actor to commit to the character's reality fully — to act as if the situation is genuinely happening, rather than performing how someone in that situation would look. The difference is the difference between truth and imitation. When you actually believe what your character believes in that moment, the emotions arise naturally from that belief rather than being manufactured on top of it. This is what makes a performance feel real rather than theatrical.`,
            },
            {
              id: `l11-q2`,
              format: `multiple-choice`,
              question: `What is the foundational rule of improv?`,
              options: [
                `Always try to be funny — comedy is the primary goal of improv performance`,
                `"Yes, and" — accept what your partner has established in the scene and build on it, never denying their reality`,
                `Never plan anything before going on stage — complete spontaneity makes the best scenes`,
                `The first person to speak controls where the scene goes`,
              ],
              correctIndex: 1,
              explanation: `"Yes, and" is the bedrock of improv. "Yes" means accepting your partner's reality — whatever they establish in the scene becomes real and cannot be denied. "And" means building on it — adding new information rather than blocking the action or redirecting away from what was offered. Together, these two moves create a collaborative world that grows richer with each exchange. Blocking ("no" or "but") kills the scene; building amplifies it.`,
            },
            {
              id: `l11-q3`,
              format: `multiple-choice`,
              question: `What is the most effective way to deal with stage fright?`,
              options: [
                `Avoid performing until the feeling goes away completely`,
                `Memorise everything perfectly so there is nothing to be uncertain about`,
                `Focus on your character's objective rather than your own self-consciousness — purpose replaces anxiety`,
                `Perform so many times that your body eventually stops producing adrenaline`,
              ],
              correctIndex: 2,
              explanation: `The most effective antidote to stage fright is redirecting attention outward — from yourself to your character's world. When you're genuinely focused on what your character wants and what's in their way, you don't have mental space left over for self-consciousness. The physical energy of anxiety — faster heartbeat, heightened alertness — is also the physical energy of engaged, alive performance. The difference isn't suppression; it's direction.`,
            },
            {
              id: `l11-q4`,
              format: `true-false`,
              question: `In improv, "yes, and" means accepting everything your scene partner establishes as real — you never block or deny what they've created, even if you'd have gone a completely different direction.`,
              correctAnswer: true,
              explanation: `True. Improv's "yes, and" is an absolute commitment to your partner's reality. Once something is established in the scene — a location, a relationship, a problem — it's real and must be honoured. Denying it ("no, we're not on a ship") or ignoring it breaks trust and collapses the shared world you're building together. The constraint of accepting everything is also what makes improv surprisingly freeing: you never have to figure out where the scene is going, because you're always just responding to what's right in front of you.`,
            },
            {
              id: `l11-q5`,
              format: `fill-blank`,
              question: `The foundational improv rule — accepting what your scene partner offers and building on it — is called "yes, ___".`,
              options: [
                `and`,
                `but`,
                `so`,
                `if`,
              ],
              correctIndex: 0,
              explanation: `"Yes, and" is perhaps the most powerful two-word creative rule in existence. "Yes" is the acceptance — your partner's reality is real. "And" is the contribution — you add to it, deepen it, or complicate it. Together they create an improvisational engine that can sustain a scene indefinitely, because every "yes, and" opens new possibilities rather than closing them down. The principle applies far beyond the stage: in collaboration, brainstorming, and creative conversation, building on ideas rather than blocking them produces richer outcomes.`,
            },
            {
              id: `l11-q6`,
              format: `multiple-choice`,
              question: `Why does focusing on your character's objective help reduce self-consciousness on stage?`,
              options: [
                `Because memorising objectives gives your mind something to fall back on if you go blank`,
                `Because audiences respond better to characters who have clear goals`,
                `Because when your attention is fully on what your character wants and what's in their way, there is no mental space left over to worry about how you appear`,
                `Because objectives give directors something concrete to work with in rehearsal`,
              ],
              correctIndex: 2,
              explanation: `Self-consciousness is a form of divided attention — part of your mind is watching yourself perform while another part is trying to perform. The cure isn't confidence; it's commitment. When you're genuinely and completely engaged in pursuing your character's objective, your full attention is on the fictional world — not on the audience, not on yourself. Purpose is a more reliable antidote to stage fright than willpower, because it doesn't require you to suppress the anxiety; it simply gives your attention somewhere else to live.`,
            },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `The skills theater develops — empathy (inhabiting another perspective), listening (real improv requires it completely), collaboration (making something together that neither could make alone), and the courage to be fully seen — are valued in almost every human endeavor. Scientists, doctors, negotiators, teachers, and leaders all use these skills. Before cinema, theater was how societies processed their most difficult questions. The stage is one of the oldest classrooms humans have ever built.`,
          familyAdventure: `Put on a family improv session. Take turns being "yes, and" partners: one person starts a scene with "Imagine we're..." and everyone takes turns adding to it with "yes, and..." for at least two minutes per scene. Try themes like: stranded on a desert island, running a very strange bakery, lost in a museum after closing time. Afterward, discuss: what made a scene feel alive? What happened when someone built on their partner's idea instead of redirecting it?`,
          creativePrompt: `Try three acting exercises on your own or with someone at home. (1) "As if" moment: pick a simple action — pouring a glass of water, opening a letter, looking out a window — and do it as if something significant has just happened to your character. No words. Just the action, with full belief. (2) "Yes, and" with yourself: sit quietly and imagine a scene, letting each new thought build on the last rather than contradicting it. (3) Character walk: move through a room as three different people — someone very old and tired, someone excited and in a hurry, someone afraid of being heard. Notice how fully committing to the walk changes everything about how you feel.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that acting is not pretending — it's believing. And that improv's deepest skill isn't being quick or funny — it's truly listening. Theater has been the art of being fully human for thousands of years. Muse thinks there is no braver thing than standing in front of others and choosing to mean it.`,
          badge: `performer`,
          badgeName: `Performer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L11.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L11] Loaded: "Drama and Theater" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l11-s1-oldest-art-form.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-s2-live-ephemeral.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-s3-truthful-acting.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-s4-yes-and.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-s5-real-listening.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-s6-fright-to-presence.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L11] One or more magazine assets missing'));
}
