// Shared Web Audio sound effects for the game engine
// All sounds synthesized — no external files required.

// Singleton AudioContext — created on first use, reused for every subsequent tone.
// A single context persists through user gestures so iOS never suspends it between calls.
let _ctx = null;
function getCtx() {
  if (!_ctx || _ctx.state === 'closed') {
    _ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return _ctx;
}

function tone(freq, dur = 0.15, type = 'sine', vol = 0.22) {
  try {
    const ctx  = getCtx();
    // Resume is required on iOS when the context was created outside a gesture.
    // resume() is a no-op if the context is already running.
    const play = () => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.start();
      osc.stop(ctx.currentTime + dur + 0.05);
    };
    if (ctx.state === 'suspended') {
      ctx.resume().then(play).catch(() => {});
    } else {
      play();
    }
  } catch { /* no audio context */ }
}

export const sfx = {
  // Correct answer / celebration
  chime: () => tone(800, 0.18, 'sine', 0.22),

  // Object tap / collect
  pop: () => tone(440, 0.08, 'sine', 0.18),

  // Wrong answer
  buzz: () => tone(200, 0.12, 'sawtooth', 0.14),

  // Big celebration at end
  fanfare: () => {
    tone(523, 0.18, 'sine', 0.20);
    setTimeout(() => tone(659, 0.18, 'sine', 0.18), 160);
    setTimeout(() => tone(784, 0.22, 'sine', 0.20), 320);
  },

  // Ascending count tones: C4, D4, E4, F4, G4
  count: (n) => {
    const freqs = [262, 294, 330, 349, 392, 440, 494, 523];
    tone(freqs[n % freqs.length], 0.20, 'sine', 0.20);
  },

  // Object landing in bucket
  plop: () => tone(320, 0.14, 'triangle', 0.18),

  // Item bouncing back
  boing: () => {
    tone(350, 0.08, 'sine', 0.15);
    setTimeout(() => tone(280, 0.10, 'sine', 0.12), 80);
  },

  // Star sparkle
  sparkle: () => {
    tone(1400, 0.08, 'sine', 0.10);
    setTimeout(() => tone(1700, 0.06, 'sine', 0.08), 60);
    setTimeout(() => tone(2100, 0.05, 'sine', 0.06), 110);
  },
};
