// ============================================================
// sounds.js — Web Audio API synthesized sound engine
// No audio files needed. All sounds generated procedurally.
// ============================================================

let ctx = null;
let enabled = true;
let masterGain = null;

function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.35;
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function setEnabled(val) {
  enabled = val;
}

export function isEnabled() {
  return enabled;
}

// ────────────────────────────────────────────────────────────
// Utility — create and route a source through master gain
// ────────────────────────────────────────────────────────────
function route(node) {
  node.connect(masterGain);
  return node;
}

function gainNode(value = 1) {
  const g = getCtx().createGain();
  g.gain.value = value;
  g.connect(masterGain);
  return g;
}

// ────────────────────────────────────────────────────────────
// playClick — crisp UI tap (500hz → 250hz, 60ms)
// ────────────────────────────────────────────────────────────
export function playClick() {
  if (!enabled) return;
  try {
    const ac = getCtx();
    const osc = ac.createOscillator();
    const g   = ac.createGain();
    osc.connect(g); g.connect(masterGain);
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ac.currentTime + 0.06);
    g.gain.setValueAtTime(0.4, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.06);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + 0.07);
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playFlip — card flip whoosh (filtered noise burst)
// ────────────────────────────────────────────────────────────
export function playFlip() {
  if (!enabled) return;
  try {
    const ac  = getCtx();
    const buf = ac.createBuffer(1, ac.sampleRate * 0.15, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const src = ac.createBufferSource();
    src.buffer = buf;
    const filter = ac.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1800;
    filter.Q.value = 0.8;
    const g = ac.createGain();
    g.gain.value = 0.25;
    src.connect(filter); filter.connect(g); g.connect(masterGain);
    src.start(ac.currentTime);
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playWhoosh — carousel slide transition
// ────────────────────────────────────────────────────────────
export function playWhoosh() {
  if (!enabled) return;
  try {
    const ac  = getCtx();
    const buf = ac.createBuffer(1, ac.sampleRate * 0.12, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const src = ac.createBufferSource();
    src.buffer = buf;
    const filter = ac.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.setValueAtTime(300, ac.currentTime);
    filter.frequency.exponentialRampToValueAtTime(2200, ac.currentTime + 0.1);
    const g = ac.createGain();
    g.gain.setValueAtTime(0.18, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.12);
    src.connect(filter); filter.connect(g); g.connect(masterGain);
    src.start(ac.currentTime);
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playAchievement — ascending arpeggio (4 notes)
// ────────────────────────────────────────────────────────────
export function playAchievement() {
  if (!enabled) return;
  try {
    const ac = getCtx();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((freq, i) => {
      const osc = ac.createOscillator();
      const g   = ac.createGain();
      osc.connect(g); g.connect(masterGain);
      osc.type = "triangle";
      const t = ac.currentTime + i * 0.1;
      osc.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.3, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.start(t);
      osc.stop(t + 0.26);
    });
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playLevelUp — dramatic level-up fanfare
// ────────────────────────────────────────────────────────────
export function playLevelUp() {
  if (!enabled) return;
  try {
    const ac = getCtx();
    const melody = [
      [523, 0],    [659, 0.1],  [784, 0.2],
      [1047, 0.3], [1319, 0.45],[1047, 0.6],
      [1568, 0.75]
    ];
    melody.forEach(([freq, delay]) => {
      const osc = ac.createOscillator();
      const g   = ac.createGain();
      osc.connect(g); g.connect(masterGain);
      osc.type = "square";
      osc.frequency.value = freq;
      const t = ac.currentTime + delay;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.2, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.start(t);
      osc.stop(t + 0.2);
    });
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playRating — score sound: pitch = (rating/10) * 880 + 220
// ────────────────────────────────────────────────────────────
export function playRating(score) {
  if (!enabled) return;
  try {
    const ac = getCtx();
    const freq = 220 + (score / 10) * 880;
    const osc = ac.createOscillator();
    const g   = ac.createGain();
    osc.connect(g); g.connect(masterGain);
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ac.currentTime + 0.15);
    g.gain.setValueAtTime(0.3, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.4);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + 0.45);
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playQuoteReveal — gentle chime
// ────────────────────────────────────────────────────────────
export function playQuoteReveal() {
  if (!enabled) return;
  try {
    const ac = getCtx();
    const freqs = [880, 1108.73]; // A5, C#6
    freqs.forEach((freq, i) => {
      const osc = ac.createOscillator();
      const g   = ac.createGain();
      osc.connect(g); g.connect(masterGain);
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = ac.currentTime + i * 0.08;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.15, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
      osc.start(t);
      osc.stop(t + 0.85);
    });
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// playDeckShuffle — rapid card shuffle
// ────────────────────────────────────────────────────────────
export function playDeckShuffle() {
  if (!enabled) return;
  try {
    const ac = getCtx();
    for (let i = 0; i < 5; i++) {
      const buf  = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.04), ac.sampleRate);
      const data = buf.getChannelData(0);
      for (let j = 0; j < data.length; j++) {
        data[j] = (Math.random() * 2 - 1) * (1 - j / data.length) * 0.6;
      }
      const src = ac.createBufferSource();
      src.buffer = buf;
      const g = ac.createGain();
      g.gain.value = 0.2;
      src.connect(g); g.connect(masterGain);
      src.start(ac.currentTime + i * 0.07);
    }
  } catch (_) {}
}

// ────────────────────────────────────────────────────────────
// initAudio — call after first user gesture
// ────────────────────────────────────────────────────────────
export function initAudio() {
  try {
    getCtx();
  } catch (_) {}
}
