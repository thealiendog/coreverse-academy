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
          headline: `What Theater Is`,
          paragraphs: [
            `Theater is the art of **live performance** — actors embodying characters in front of an audience in real time, with no retakes. Unlike film, theater is ephemeral — each performance is unique and unrepeatable. Theater includes **drama** (serious storytelling), **comedy**, **musical theater** (story + song + dance), **physical theater** (movement-based), **puppetry**, and **immersive theater** (where the audience participates). All theater involves some version of the same elements: a text or script (or improvisation), **actors** who embody characters, **direction** that shapes the production, and **design** — set, lighting, costume, sound — that creates the world of the story. Theater is collaborative by nature: it is never made alone.`,
          ],
          image: `/explorer-assets/creative-arts/l11-magazine-1.png`,
          imageCaption: `Theater is live, ephemeral, and collaborative — each performance is unrepeatable and made by many hands`,
          vocab: [
            { word: `live performance`, definition: `Art that happens in real time in front of an audience — unrepeatable, with no retakes, where the energy between performers and audience creates something that a recording can never fully capture.`, audioPrompt: `Every filmed performance can be rewound, {name}. Live theater cannot. It exists for the duration of the performance and then it's gone — unrepeatable, unique in its moment. The audience is part of it: their laughter, their silence, their held breath. That's what live performance offers that no other art form can: something true, shared, happening right now, once only. That's why theater has existed in every human culture since the beginning.` },
            { word: `ephemeral`, definition: `Lasting only a short time and not able to be captured or repeated — what makes live performance uniquely precious and different from recorded art.`, audioPrompt: `Ephemeral means it disappears, {name} — and theater is deliberately, beautifully ephemeral. The performance that happens tonight will never be exactly that performance again. Different audience energy. A different pause. Something unplanned that becomes the best moment of the run. This is what some people find frustrating about live art and what others find sacred about it: it exists fully only in the moment it happens.` },
            { word: `collaborative`, definition: `Made together by many people — actors, directors, designers, stagehands, and the audience — each contributing to the final experience that none could create alone.`, audioPrompt: `Theater is never made alone, {name}. The script, the direction, the design, the performance, the audience — all of it combines into something that couldn't exist without every part. An actor's great performance in a badly designed space diminishes. A stunning set with poor acting disappears. Collaboration in theater isn't compromise — it's the whole point. The art form is built from many people trusting each other to serve something larger than any one of them.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Acting Fundamentals`,
          paragraphs: [
            `The foundation of acting is **truthfulness** — the actor genuinely believes what their character believes in that moment, rather than performing emotions from the outside. One of the most influential acting methods developed the concept of **"as if"** — acting as if the situation were genuinely real, rather than pretending to feel something. The key tools: **objective** (what does my character want in this scene?), **obstacle** (what gets in their way?), and **action** (what do I actively do to overcome the obstacle?). A character who simply states emotions is far less compelling than a character who is **pursuing something** and hitting resistance. Every character, however small their role, deserves the same full human truth.`,
          ],
          image: `/explorer-assets/creative-arts/l11-magazine-2.png`,
          imageCaption: `Truthful acting pursues an objective and hits obstacles — it doesn't perform emotions from the outside`,
          vocab: [
            { word: `truthfulness`, definition: `The foundation of great acting — genuinely believing and responding to the character's situation rather than performing emotions from the outside for the audience's benefit.`, audioPrompt: `Truthfulness is the difference between acting and performing, {name}. Performing announces the emotion — look at how sad I am. Acting lives inside the situation so fully that the emotion emerges on its own. An audience can tell the difference even if they can't name it. The performance that moves you is the one where the actor believes it. That internal truth travels across the distance between stage and seat and lands as real.` },
            { word: `obstacle`, definition: `What gets in the way of a character achieving their objective — the force or complication that creates conflict and makes acting something more than moving and speaking lines.`, audioPrompt: `Without obstacles, a character just gets what they want — and that's not a scene, {name}, it's a list. The obstacle is what creates drama: something or someone standing between the character and what they need. An actor who plays only the objective becomes mechanical. An actor who feels the obstacle — who actively pushes against it — creates the tension the audience leans forward to resolve. The obstacle is where the acting happens.` },
            { word: `action`, definition: `In acting, what a character actively does to achieve their objective — the specific, playable verb that gives an actor a real, concrete thing to pursue in each moment.`, audioPrompt: `"Sad" is not playable, {name} — it's a result, not a cause. But "trying to convince," "begging," "demanding," "comforting" — these are actions an actor can actually do, moment to moment. Acting teachers talk about playing actions rather than emotions because emotions follow from genuine action. When an actor pursues a clear, specific action, the emotion that results is authentic. That's the engine underneath every truthful scene.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Improvisation`,
          paragraphs: [
            `**Improvisation** (improv) is unscripted, spontaneous performance. The foundational rule is **"yes, and"** — accept whatever your scene partner establishes ("yes") and add to it ("and"). Improv performers never deny their partner's reality, never block the action, and — crucially — never try to be funny. They try to be truthful, and the comedy emerges naturally when two people are fully present and genuinely responding to each other. Improv develops **quick thinking**, **deep listening**, **trust in collaborators**, **creative flexibility**, and **comfort with uncertainty**. These skills are among the most valuable in any creative work — and far beyond the stage, in every conversation, collaboration, and unexpected situation life throws at you.`,
          ],
          image: `/explorer-assets/creative-arts/l11-magazine-3.png`,
          imageCaption: `"Yes, and" — accept what your partner offers and build on it. Truth first, comedy second`,
          vocab: [
            { word: `improvisation`, definition: `Unscripted, spontaneous performance created in the moment — guided by "yes, and," deep listening, and genuine response to what scene partners do and say.`, audioPrompt: `Improvisation means making it up as you go, {name} — and the results are often more alive than scripted performance, because both actors are genuinely surprised. The secret is trust: you can't plan, so you have to listen and respond. Everything your partner does is an offer. Your job is to accept it and add to it. That complete attention to another person — that's the skill improv builds, and it's useful everywhere, not just on stage.` },
            { word: `"yes, and"`, definition: `The foundational rule of improvisation — accept what your scene partner establishes ("yes") and add to it ("and") — which keeps the scene building forward rather than stalling.`, audioPrompt: `"Yes, and" is two words that unlock everything, {name}. In improv, you never deny what your partner creates. If they say "we're on the moon," you don't say "no we're not" — you say yes, and you add something. It keeps the world of the scene alive and growing. Off-stage, it's a way of listening that says: I take you seriously, and I'll build on what you're offering. Both in theater and in life, that's rare and powerful.` },
            { word: `listening`, definition: `In performance, giving full, active attention to scene partners — responding to what they actually do rather than what you expected them to do — which creates truthful, spontaneous theater.`, audioPrompt: `Most people hear, {name}, but few people listen. In improv and in acting, listening is everything — it means being so present that you can respond to what actually happened, not what you expected. A great scene isn't two actors performing at each other. It's two people genuinely affecting each other. That requires real listening: the kind where your face changes because of what you heard, not because of what you planned to show.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Stage Fright and the Actor's Tool`,
          paragraphs: [
            `**Stage fright** is nearly universal — even experienced professional actors experience pre-performance anxiety. The most important reframe: those feelings are your body **preparing** to perform, not warning you to stop. The energy of anxiety, redirected, becomes presence and aliveness on stage. Practical techniques: **focus on your character's objective** rather than your own self-consciousness — when you're thinking about what your character wants, you can't simultaneously worry about how you look; make strong **eye contact** with your scene partners; take full, deep breaths before entering; and remember that the audience genuinely wants you to succeed — they're on your side. The actor's deepest tool is **courage** — the willingness to be fully seen, without hiding.`,
          ],
          image: `/explorer-assets/creative-arts/l11-magazine-4.png`,
          imageCaption: `Stage fright is preparation energy — redirect it into your character's objective, and it becomes aliveness`,
          vocab: [
            { word: `stage fright`, definition: `The anxiety that performers feel before going on stage — nearly universal even among experienced professionals, and redirectable into presence and energy rather than paralysis.`, audioPrompt: `Stage fright visits almost every performer, {name} — even the ones who look completely calm. The racing heart, the dry mouth, the wanting to disappear. The key reframe is this: those feelings are your body preparing to perform, not warning you to stop. Redirect that energy into your character's objective — what does my character desperately need right now? — and it becomes presence instead of panic. The energy doesn't go away. It just finds a better use.` },
            { word: `courage`, definition: `In performance, the willingness to be fully seen — to commit completely to a character or moment — without holding back or hiding behind self-consciousness.`, audioPrompt: `The actor's deepest tool is courage, {name} — the willingness to be fully seen. Not courage to be perfect or to be impressive, but to be genuinely present. To commit to a choice even if it might fail. To be vulnerable in front of strangers. This is what audiences feel when a performance lands: someone standing there who is not hiding. That quality of full presence, fully committed — that is what moves people.` },
            { word: `presence`, definition: `In performance, the quality of being fully, attentively alive in the moment — connected to scene partners, responsive to the audience, without self-consciousness breaking the reality of the performance.`, audioPrompt: `Presence is the quality that makes you unable to look away from a certain performer, {name}, even when others are on stage. It's not loudness or beauty or technique — it's a quality of full aliveness. Total commitment to the moment. Nothing held back, nothing monitored from the outside. An actor with presence makes the audience feel they're seeing something real. That quality can be developed, through practice, through risk, through learning to trust the moment.` },
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
    fetch('/explorer-assets/creative-arts/l11-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l11-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L11] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L11] One or more magazine assets missing'));
}
