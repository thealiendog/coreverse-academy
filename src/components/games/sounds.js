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

// Call this inside a user-gesture handler (touchstart/click) to pre-authorize the
// AudioContext on iOS. Must run synchronously within the gesture event to count.
export function unlockAudio() {
  try {
    const ctx = getCtx();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    // Play a silent buffer so iOS marks this context as gesture-authorized
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
  } catch { /* no audio context */ }
}

// Standard tone — oscillator → gain → destination
function tone(freq, dur = 0.15, type = 'sine', vol = 0.22) {
  try {
    const ctx  = getCtx();
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

// Crowd-noise burst: filtered white noise shaped like applause swell.
// Used as a cheer layer under the celebration fanfare.
function noiseBurst(dur = 1.0, vol = 0.13) {
  try {
    const ctx = getCtx();
    const play = () => {
      const bufSize = Math.ceil(ctx.sampleRate * dur);
      const buf     = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data    = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.35;

      const src = ctx.createBufferSource();
      src.buffer = buf;

      // Band-pass ~700Hz → warm crowd buzz
      const bpf = ctx.createBiquadFilter();
      bpf.type = 'bandpass';
      bpf.frequency.value = 700;
      bpf.Q.value = 0.6;
      src.connect(bpf);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(vol, ctx.currentTime + dur * 0.55);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      bpf.connect(gain);
      gain.connect(ctx.destination);
      src.start();
    };
    if (ctx.state === 'suspended') ctx.resume().then(play).catch(() => {}); else play();
  } catch { /* no audio context */ }
}

// Loud tone with DynamicsCompressor — for celebration fanfare.
// Compressor brings quiet signals up to near-full-scale; effective even on phone speakers.
// IMPORTANT: must be called inside a user-gesture handler for iOS AudioContext to be running.
function loudTone(freq, dur = 0.30, type = 'sine', vol = 0.9) {
  try {
    const ctx  = getCtx();
    const play = () => {
      // Compressor: low threshold + high ratio = "louder" perceived sound
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.setValueAtTime(-24, ctx.currentTime);
      comp.knee.setValueAtTime(6,    ctx.currentTime);
      comp.ratio.setValueAtTime(12,  ctx.currentTime);
      comp.attack.setValueAtTime(0.003, ctx.currentTime);
      comp.release.setValueAtTime(0.25, ctx.currentTime);
      comp.connect(ctx.destination);

      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(comp);
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

  // Big celebration — 4-note fanfare + sparkle cascade + crowd cheer swell (~2s total).
  // MUST be called inside a user-gesture handler on iOS (not from useEffect).
  fanfare: () => {
    console.log('[CELEBRATION] Playing enhanced fanfare — 4-note ascent + sparkle + crowd cheer');
    // Main 4-note fanfare
    loudTone(523,  0.35, 'sine', 0.90);                          // C5
    setTimeout(() => loudTone(659,  0.35, 'sine', 0.88), 200);  // E5
    setTimeout(() => loudTone(784,  0.38, 'sine', 0.90), 400);  // G5
    setTimeout(() => loudTone(1047, 0.48, 'sine', 0.85), 600);  // C6 high peak
    // Sparkle cascade — starts as fanfare peaks (700ms), rises to top shimmer
    setTimeout(() => {
      tone(1397, 0.14, 'sine', 0.20);                           // F6
      setTimeout(() => tone(1760, 0.12, 'sine', 0.17), 110);   // A6
      setTimeout(() => tone(2093, 0.10, 'sine', 0.14), 220);   // C7
      setTimeout(() => tone(2637, 0.08, 'sine', 0.11), 330);   // E7 shimmer tip
      setTimeout(() => tone(3136, 0.06, 'sine', 0.08), 440);   // G7 sparkle top
    }, 700);
    // Crowd cheer swell — warm noise burst from 500ms, fades over ~1.5s
    setTimeout(() => noiseBurst(1.5, 0.13), 500);
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
