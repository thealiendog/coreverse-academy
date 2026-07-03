// ============================================================
// MathLessonPlayer.jsx — Coreverse Academy
// Manipulative-first math player. 8-screen flow:
// welcome → explore → guided-task → concept-name →
// applied-problems → quick-check → real-world → celebration
//
// Props:
//   lessonData      — lesson object (see math_ue_l01_v2.js)
//   complexityLevel — "littlestars" | "explorers" | "upperexplorers"
//   onComplete      — ({ xp, badge, score, total }) => void
//
// Rules enforced here:
//   • Back button navigates WITHIN the lesson, never exits.
//   • No silent advancement — kid taps Check / Continue explicitly.
//   • console.log complexity level + screen on every screen change.
//   • Audio speed 1.0 (server default — playbackRate never touched).
// ============================================================

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BaseTenBlocksWorkspace from "./BaseTenBlocksWorkspace";
import * as guideVoicesModule from "../../data/guideVoices";

// ── Lesson data registry (add new v2 lessons here) ──
import { mathUeL01V2 } from "../../data/math_ue_l01_v2";
const MATH_V2_DATA = {
  "math-9-10-01": mathUeL01V2,
};

// ── Resolve Remi's ElevenLabs voice ID from guideVoices.js ──
// Defensive against export shape; single place to adjust if needed.
const VOICES =
  guideVoicesModule.GUIDE_VOICES ||
  guideVoicesModule.guideVoices ||
  guideVoicesModule.default ||
  {};
const REMI_VOICE_ID =
  VOICES.Remi || VOICES.remi || VOICES["Remi"] || "";

// ============================================================
// Audio — safeSpeak pattern: one utterance at a time, superseded
// requests dropped, no double-speech.
// ============================================================
function useRemiSpeech() {
  const audioRef = useRef(null);
  const seqRef = useRef(0);
  const [speaking, setSpeaking] = useState(false);

  const speak = useCallback(async (text) => {
    if (!text) return;
    const seq = ++seqRef.current;
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    } catch (_) { /* noop */ }
    setSpeaking(false);
    try {
      const res = await fetch("/.netlify/functions/nova-speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          voiceId: REMI_VOICE_ID,
          speed: 1.0,
        }),
      });
      if (!res.ok) throw new Error(`TTS ${res.status}`);
      const ct = res.headers.get("content-type") || "";
      let url;
      if (ct.includes("audio")) {
        url = URL.createObjectURL(await res.blob());
      } else {
        const j = await res.json();
        const b64 = j.audio || j.audioContent || j.data;
        if (!b64) throw new Error("TTS: empty payload");
        url = `data:audio/mpeg;base64,${b64}`;
      }
      if (seq !== seqRef.current) return; // superseded — drop it
      const a = new Audio(url);
      audioRef.current = a;
      a.onplay = () => seq === seqRef.current && setSpeaking(true);
      a.onended = () => seq === seqRef.current && setSpeaking(false);
      a.onerror = () => seq === seqRef.current && setSpeaking(false);
      a.play().catch(() => setSpeaking(false));
    } catch (err) {
      console.warn("[MathLessonPlayer] speak failed:", err.message);
      setSpeaking(false);
    }
  }, []);

  const stop = useCallback(() => {
    seqRef.current++;
    try {
      if (audioRef.current) audioRef.current.pause();
    } catch (_) { /* noop */ }
    audioRef.current = null;
    setSpeaking(false);
  }, []);

  useEffect(() => stop, [stop]); // cleanup on unmount
  return { speak, stop, speaking };
}

// ── Remi avatar with speaking glow ──
function RemiAvatar({ speaking, size = 72 }) {
  return (
    <img
      src="/avatars/remi.png"
      alt="Remi the Raccoon"
      width={size}
      height={size}
      className={`rounded-full object-cover border-2 border-amber-300/60 ${
        speaking ? "animate-pulse" : ""
      }`}
      style={{
        filter: speaking
          ? "drop-shadow(0 0 14px rgba(252,211,77,0.85))"
          : "drop-shadow(0 0 4px rgba(252,211,77,0.3))",
      }}
    />
  );
}

// ── Big touch-friendly button ──
function BigButton({ children, onClick, disabled, variant = "primary" }) {
  const base =
    "px-8 py-4 rounded-2xl text-lg font-bold transition-all active:scale-95 disabled:opacity-40 disabled:active:scale-100";
  const styles =
    variant === "primary"
      ? "bg-amber-400 text-indigo-950 shadow-lg shadow-amber-400/30"
      : "bg-indigo-800/80 text-indigo-100 border border-indigo-400/40";
  return (
    <button
      className={`${base} ${styles}`}
      onClick={onClick}
      disabled={disabled}
      style={{ touchAction: "manipulation" }}
    >
      {children}
    </button>
  );
}

// ============================================================
// Screen components
// ============================================================

function WelcomeScreen({ screen, speak, speaking, onNext }) {
  useEffect(() => {
    speak(screen.audio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6 text-center">
      <RemiAvatar speaking={speaking} size={140} />
      <p className="text-xl text-indigo-100 max-w-md leading-relaxed">
        {screen.audio}
      </p>
      <BigButton onClick={onNext}>{screen.buttonLabel || "Start"}</BigButton>
    </div>
  );
}

function ExploreScreen({ screen, complexityLevel, speak, speaking, onNext }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    speak(screen.audio);
    const t = setTimeout(() => setReady(true), (screen.minSeconds || 30) * 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleContinue = () => {
    speak(screen.continueAudio || "");
    onNext();
  };
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-3 px-4 py-2">
        <RemiAvatar speaking={speaking} size={48} />
        <p className="text-sm text-indigo-200 leading-snug">{screen.audio}</p>
      </div>
      <div className="flex-1 min-h-0">
        <BaseTenBlocksWorkspace complexityLevel={complexityLevel} />
      </div>
      <div className="flex justify-center py-3">
        <BigButton onClick={handleContinue} disabled={!ready}>
          {ready ? "Continue" : "Keep exploring…"}
        </BigButton>
      </div>
    </div>
  );
}

function GuidedTaskScreen({ screen, complexityLevel, speak, speaking, onNext }) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("building"); // building | correct | wrong
  const [resetKey, setResetKey] = useState(0);
  const hintTimer = useRef(null);
  const task = screen.tasks[taskIndex];

  const armHint = useCallback(() => {
    clearTimeout(hintTimer.current);
    hintTimer.current = setTimeout(() => {
      if (task?.hint) speak(task.hint);
    }, 20000);
  }, [task, speak]);

  useEffect(() => {
    speak(task.audio || task.prompt);
    setStatus("building");
    armHint();
    return () => clearTimeout(hintTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskIndex]);

  const check = () => {
    clearTimeout(hintTimer.current);
    if (total === task.target) {
      setStatus("correct");
      speak(task.successAudio || `Yes! That's ${task.target}. Great build.`);
    } else {
      setStatus("wrong");
      speak(
        task.hint ||
          `Not quite — the counter shows ${total}, and we want ${task.target}. Adjust your blocks and check again.`
      );
      armHint();
    }
  };

  const nextTask = () => {
    if (taskIndex < screen.tasks.length - 1) {
      setTaskIndex((i) => i + 1);
      setResetKey((k) => k + 1);
      setTotal(0);
    } else {
      onNext();
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-3 px-4 py-2">
        <RemiAvatar speaking={speaking} size={48} />
        <div>
          <p className="text-xs text-indigo-400 font-semibold">
            Task {taskIndex + 1} of {screen.tasks.length}
          </p>
          <p className="text-base text-indigo-100 font-semibold">
            {task.prompt}
          </p>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <BaseTenBlocksWorkspace
          complexityLevel={complexityLevel}
          resetKey={resetKey}
          onTotalChange={setTotal}
          onChange={() => {
            if (status !== "correct") armHint();
          }}
        />
      </div>
      <div className="flex justify-center gap-4 py-3">
        {status !== "correct" ? (
          <BigButton onClick={check}>Check ✓</BigButton>
        ) : (
          <BigButton onClick={nextTask}>
            {taskIndex < screen.tasks.length - 1 ? "Next task →" : "Continue →"}
          </BigButton>
        )}
      </div>
      {status === "wrong" && (
        <p className="text-center text-rose-300 text-sm pb-2">
          Almost — adjust your blocks and check again.
        </p>
      )}
    </div>
  );
}

function ConceptNameScreen({ screen, speak, speaking, onNext }) {
  useEffect(() => {
    speak(screen.audio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 text-center">
      <RemiAvatar speaking={speaking} size={100} />
      <div className="rounded-3xl bg-indigo-900/70 border border-amber-300/40 px-8 py-6 max-w-lg">
        <h2 className="text-3xl font-extrabold text-amber-300 tracking-wide mb-3">
          {screen.cardTitle}
        </h2>
        <p className="text-indigo-100 text-lg leading-relaxed">
          {screen.cardText}
        </p>
      </div>
      <BigButton onClick={onNext}>Got it →</BigButton>
    </div>
  );
}

function AppliedProblemsScreen({
  screen,
  complexityLevel,
  speak,
  speaking,
  onNext,
}) {
  const [probIndex, setProbIndex] = useState(0);
  const [phase, setPhase] = useState("working"); // working | insight | done
  const [total, setTotal] = useState(0);
  const [highlight, setHighlight] = useState(null);
  const [blanks, setBlanks] = useState({});
  const [resetKey, setResetKey] = useState(0);
  const problem = screen.problems[probIndex];

  useEffect(() => {
    speak(problem.audio || problem.question || problem.prompt);
    setPhase("working");
    setHighlight(null);
    setBlanks({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [probIndex]);

  const advance = () => {
    if (probIndex < screen.problems.length - 1) {
      setProbIndex((i) => i + 1);
      setResetKey((k) => k + 1);
      setTotal(0);
    } else {
      onNext();
    }
  };

  // ── kind: tap-part ──
  const handleInspectTap = (type) => {
    if (phase === "done") return;
    if (type === problem.answerType) {
      setHighlight(type);
      setPhase("done");
      speak(problem.successAudio || "That's it! You found it.");
    } else {
      speak(problem.hint || "Not that one — look again.");
    }
  };

  // ── kind: build-notice ──
  const checkBuild = () => {
    if (total === problem.target) {
      setPhase("insight");
      speak(problem.insightAudio || problem.insightText || "Look at that!");
    } else {
      speak(
        `The counter shows ${total} — we want ${problem.target}. Keep going.`
      );
    }
  };

  // ── kind: expanded-form ──
  const checkBlanks = () => {
    const allCorrect = problem.blanks.every(
      (b, i) => parseInt(blanks[i], 10) === b.answer
    );
    if (total !== problem.target) {
      speak(
        `First build ${problem.target} with the blocks — the counter shows ${total}.`
      );
      return;
    }
    if (allCorrect) {
      setPhase("done");
      speak(problem.successAudio || "Perfect. You wrote it in expanded form.");
    } else {
      speak(problem.hint || "Check your numbers — count your blocks again.");
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-3 px-4 py-2">
        <RemiAvatar speaking={speaking} size={48} />
        <div>
          <p className="text-xs text-indigo-400 font-semibold">
            Problem {probIndex + 1} of {screen.problems.length}
          </p>
          <p className="text-base text-indigo-100 font-semibold">
            {problem.question || problem.prompt}
          </p>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <BaseTenBlocksWorkspace
          complexityLevel={complexityLevel}
          resetKey={resetKey}
          mode={problem.kind === "tap-part" ? "inspect" : "build"}
          initialBlocks={problem.preload || null}
          highlightType={highlight}
          onTotalChange={setTotal}
          onBlockTap={handleInspectTap}
        />
      </div>

      {/* expanded-form blanks */}
      {problem.kind === "expanded-form" && phase !== "done" && (
        <div className="flex items-center justify-center gap-2 py-2 text-indigo-100 text-lg font-semibold">
          <span>{problem.target} =</span>
          {problem.blanks.map((b, i) => (
            <React.Fragment key={i}>
              <input
                type="number"
                inputMode="numeric"
                value={blanks[i] ?? ""}
                onChange={(e) =>
                  setBlanks((prev) => ({ ...prev, [i]: e.target.value }))
                }
                className="w-14 h-12 text-center rounded-xl bg-indigo-900 border border-indigo-400/50 text-amber-300 text-xl font-bold"
              />
              <span>
                {b.label}
                {i < problem.blanks.length - 1 ? " +" : ""}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* insight card for build-notice */}
      {phase === "insight" && (
        <div className="mx-6 mb-2 rounded-2xl bg-indigo-900/80 border border-amber-300/40 px-5 py-3">
          <p className="text-indigo-100 text-sm leading-relaxed">
            {problem.insightText}
          </p>
        </div>
      )}

      <div className="flex justify-center py-3">
        {problem.kind === "tap-part" &&
          (phase === "done" ? (
            <BigButton onClick={advance}>Next →</BigButton>
          ) : (
            <p className="text-indigo-300 text-sm">
              Tap the blocks that answer the question
            </p>
          ))}
        {problem.kind === "build-notice" &&
          (phase === "working" ? (
            <BigButton onClick={checkBuild}>Check ✓</BigButton>
          ) : (
            <BigButton onClick={advance}>Next →</BigButton>
          ))}
        {problem.kind === "expanded-form" &&
          (phase === "done" ? (
            <BigButton onClick={advance}>Next →</BigButton>
          ) : (
            <BigButton onClick={checkBlanks}>Check ✓</BigButton>
          ))}
      </div>
    </div>
  );
}

function QuickCheckScreen({ screen, speak, speaking, onNext, onScore }) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const q = screen.questions[qIndex];

  useEffect(() => {
    if (qIndex === 0 && screen.intro) speak(screen.intro);
    setSelected(null);
    setRevealed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qIndex]);

  const submit = () => {
    if (selected == null) return;
    const correct = q.options[selected] === q.answer;
    if (correct) setScore((s) => s + 1);
    setRevealed(true);
    speak(correct ? "Correct!" : `Not quite. The answer is: ${q.answer}`);
  };

  const next = () => {
    if (qIndex < screen.questions.length - 1) {
      setQIndex((i) => i + 1);
    } else {
      onScore(score, screen.questions.length);
      onNext();
    }
  };

  return (
    <div className="flex flex-col flex-1 px-5 py-3 gap-4 overflow-y-auto">
      <div className="flex items-center gap-3">
        <RemiAvatar speaking={speaking} size={48} />
        <p className="text-xs text-indigo-400 font-semibold">
          Question {qIndex + 1} of {screen.questions.length}
        </p>
      </div>
      <h3 className="text-xl text-indigo-100 font-bold leading-snug">
        {q.question}
      </h3>
      <div className="flex flex-col gap-3">
        {q.options.map((opt, i) => {
          const isAnswer = opt === q.answer;
          const isSelected = selected === i;
          let cls =
            "text-left px-5 py-4 rounded-2xl border text-base font-medium transition-all active:scale-[0.98] ";
          if (!revealed) {
            cls += isSelected
              ? "bg-amber-400/20 border-amber-300 text-amber-100"
              : "bg-indigo-900/60 border-indigo-400/30 text-indigo-100";
          } else if (isAnswer) {
            cls += "bg-emerald-500/25 border-emerald-400 text-emerald-100";
          } else if (isSelected) {
            cls += "bg-rose-500/20 border-rose-400 text-rose-100";
          } else {
            cls += "bg-indigo-900/40 border-indigo-400/20 text-indigo-300/60";
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => !revealed && setSelected(i)}
              style={{ touchAction: "manipulation" }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center pt-2 pb-4">
        {!revealed ? (
          <BigButton onClick={submit} disabled={selected == null}>
            Check ✓
          </BigButton>
        ) : (
          <BigButton onClick={next}>
            {qIndex < screen.questions.length - 1 ? "Next →" : "Continue →"}
          </BigButton>
        )}
      </div>
    </div>
  );
}

function RealWorldScreen({ screen, speak, speaking, onNext }) {
  useEffect(() => {
    speak(screen.audio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 text-center">
      <RemiAvatar speaking={speaking} size={100} />
      <p className="text-lg text-indigo-100 max-w-md leading-relaxed">
        {screen.audio}
      </p>
      <div className="rounded-2xl bg-indigo-900/70 border border-indigo-400/40 px-6 py-4 max-w-md">
        <p className="text-amber-300 font-bold text-sm mb-1">
          🌟 Family Adventure
        </p>
        <p className="text-indigo-100 text-base">{screen.familyAdventure}</p>
      </div>
      <BigButton onClick={onNext}>Continue →</BigButton>
    </div>
  );
}

function CelebrationScreen({ screen, speak, speaking, score, onFinish }) {
  useEffect(() => {
    speak(screen.audio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 text-center">
      <RemiAvatar speaking={speaking} size={110} />
      <div className="text-6xl">🏅</div>
      <h2 className="text-3xl font-extrabold text-amber-300">{screen.badge}</h2>
      <p className="text-indigo-100 text-lg">+{screen.xp} XP</p>
      {score != null && (
        <p className="text-indigo-300 text-sm">
          Quick check: {score.correct} / {score.total}
        </p>
      )}
      <BigButton onClick={onFinish}>Finish 🎉</BigButton>
    </div>
  );
}

// ============================================================
// Player shell
// ============================================================
export default function MathLessonPlayer({
  lessonData: lessonDataProp,
  complexityLevel: complexityProp = "upperexplorers",
  onComplete: onCompleteProp,
}) {
  // When rendered from a route (no props), resolve data from URL param.
  const params = useParams();
  const navigate = useNavigate();
  const lessonData = lessonDataProp || (params.lessonId && MATH_V2_DATA[params.lessonId]) || null;
  const complexityLevel = complexityProp;
  const onComplete = onCompleteProp || (() => navigate(-1));

  const [screenIndex, setScreenIndex] = useState(0);
  const [score, setScore] = useState(null);
  const { speak, stop, speaking } = useRemiSpeech();
  const screens = lessonData?.screens || [];
  const screen = screens[screenIndex];

  // Screen-change logging — every transition traceable.
  useEffect(() => {
    console.log("[MathLessonPlayer] screen change", {
      complexityLevel,
      screenIndex,
      screenType: screen?.type,
      lessonId: lessonData?.id,
    });
  }, [screenIndex, complexityLevel, screen, lessonData]);

  const goNext = () => {
    stop();
    setScreenIndex((i) => Math.min(i + 1, screens.length - 1));
  };

  // Back navigates WITHIN the lesson only. On screen 0 the button
  // is hidden entirely — it can never exit the lesson.
  const goBack = () => {
    stop();
    setScreenIndex((i) => Math.max(i - 1, 0));
  };

  const finish = () => {
    stop();
    if (onComplete) {
      onComplete({
        xp: screen?.xp || 100,
        badge: screen?.badge || lessonData?.badge,
        score: score?.correct ?? null,
        total: score?.total ?? null,
      });
    }
  };

  if (!screen) {
    return (
      <div className="flex items-center justify-center h-full text-indigo-200">
        Lesson data missing.
      </div>
    );
  }

  const common = { speak, speaking, complexityLevel };

  return (
    <div
      className="flex flex-col h-full w-full"
      style={{ background: "#080618", minHeight: "100dvh" }}
    >
      {/* ── Header: back (in-lesson only) + progress ── */}
      <div className="flex items-center gap-3 px-4 py-3">
        {screenIndex > 0 ? (
          <button
            onClick={goBack}
            className="w-10 h-10 rounded-full bg-indigo-900/70 border border-indigo-400/40 text-indigo-100 text-xl flex items-center justify-center active:scale-90"
            style={{ touchAction: "manipulation" }}
            aria-label="Previous screen"
          >
            ‹
          </button>
        ) : (
          <div className="w-10 h-10" />
        )}
        <div className="flex-1 h-2 rounded-full bg-indigo-900/70 overflow-hidden">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-500"
            style={{
              width: `${((screenIndex + 1) / screens.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-xs text-indigo-400 font-semibold tabular-nums">
          {screenIndex + 1}/{screens.length}
        </span>
      </div>

      {/* ── Active screen ── */}
      {screen.type === "welcome" && (
        <WelcomeScreen screen={screen} {...common} onNext={goNext} />
      )}
      {screen.type === "explore" && (
        <ExploreScreen screen={screen} {...common} onNext={goNext} />
      )}
      {screen.type === "guided-task" && (
        <GuidedTaskScreen screen={screen} {...common} onNext={goNext} />
      )}
      {screen.type === "concept-name" && (
        <ConceptNameScreen screen={screen} {...common} onNext={goNext} />
      )}
      {screen.type === "applied-problems" && (
        <AppliedProblemsScreen screen={screen} {...common} onNext={goNext} />
      )}
      {screen.type === "quick-check" && (
        <QuickCheckScreen
          screen={screen}
          {...common}
          onNext={goNext}
          onScore={(correct, total) => setScore({ correct, total })}
        />
      )}
      {screen.type === "real-world" && (
        <RealWorldScreen screen={screen} {...common} onNext={goNext} />
      )}
      {screen.type === "celebration" && (
        <CelebrationScreen
          screen={screen}
          {...common}
          score={score}
          onFinish={finish}
        />
      )}
    </div>
  );
}
