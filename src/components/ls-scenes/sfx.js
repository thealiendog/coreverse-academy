// Shared Web Audio utilities for Little Stars animated scenes
function ctx() { return new (window.AudioContext || window.webkitAudioContext)(); }

export function tone(freq, dur = 0.20, type = 'sine', vol = 0.16) {
  try {
    const ac = ctx(), osc = ac.createOscillator(), g = ac.createGain();
    osc.connect(g); g.connect(ac.destination);
    osc.type = type; osc.frequency.value = freq;
    g.gain.setValueAtTime(vol, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    osc.start(); osc.stop(ac.currentTime + dur + 0.05);
  } catch {}
}

export function sweep(f0, f1, dur = 0.36, type = 'sine', vol = 0.15) {
  try {
    const ac = ctx(), osc = ac.createOscillator(), g = ac.createGain();
    osc.connect(g); g.connect(ac.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(f0, ac.currentTime);
    osc.frequency.linearRampToValueAtTime(f1, ac.currentTime + dur);
    g.gain.setValueAtTime(vol, ac.currentTime);
    g.gain.linearRampToValueAtTime(0, ac.currentTime + dur);
    osc.start(); osc.stop(ac.currentTime + dur + 0.05);
  } catch {}
}

export const sfx = {
  clink:   () => { tone(2100, 0.10, 'triangle', 0.13); setTimeout(() => tone(1700, 0.09, 'triangle', 0.07), 50); },
  pop:     () => tone(580, 0.08, 'square', 0.13),
  chime:   () => { tone(880, 0.18); setTimeout(() => tone(1100, 0.14, 'sine', 0.09), 120); },
  whoosh:  () => sweep(150, 700, 0.38),
  thump:   () => tone(80, 0.22, 'sine', 0.28),
  bloop:   () => { tone(380, 0.05, 'sine', 0.20); setTimeout(() => tone(260, 0.10, 'sine', 0.12), 50); },
  sparkle: () => [1300, 1600, 1900].forEach((f, i) => setTimeout(() => tone(f, 0.07, 'sine', 0.11), i * 80)),
  note:    (n) => tone([262, 294, 330, 349, 392][n % 5], 0.42),
  splash:  () => sweep(500, 180, 0.26),
  drip:    () => tone(800, 0.12, 'sine', 0.14),
};

// Inject a <style> tag once per unique id
export function injectCSS(id, css) {
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }
}
