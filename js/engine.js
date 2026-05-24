// ============================================================
// engine.js — Game logic, hour-seeded shuffling, XP system
// ============================================================

// ────────────────────────────────────────────────────────────
// PRNG — Mulberry32 seeded random number generator
// ────────────────────────────────────────────────────────────
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ────────────────────────────────────────────────────────────
// SEEDS — time-based, update every hour
// ────────────────────────────────────────────────────────────
export function getHourSeed() {
  return Math.floor(Date.now() / 3_600_000);
}

export function getDaySeed() {
  const now = new Date();
  // Unique integer per calendar day
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

export function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / 86_400_000);
}

// ────────────────────────────────────────────────────────────
// SHUFFLE — seeded Fisher-Yates
// ────────────────────────────────────────────────────────────
export function seededShuffle(arr, seed) {
  const rng = mulberry32(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ────────────────────────────────────────────────────────────
// DAILY / HOURLY SELECTIONS
// ────────────────────────────────────────────────────────────
export function getDailyQuote(quotes) {
  const idx = getDayOfYear() % quotes.length;
  return quotes[idx];
}

export function getDailyQuestion(questions) {
  const seed = getDaySeed();
  const rng = mulberry32(seed);
  const idx = Math.floor(rng() * questions.length);
  return questions[idx];
}

export function getHourlyQuestions(questions, count = 10) {
  return seededShuffle(questions, getHourSeed()).slice(0, count);
}

export function getHourlyItems(arr) {
  return seededShuffle(arr, getHourSeed());
}

// ────────────────────────────────────────────────────────────
// THEME SYSTEM — 8 vivid palettes, cycles every hour
// ────────────────────────────────────────────────────────────
export const THEMES = [
  { name: "Electric Violet", primary: "#7B2FBE", secondary: "#FF4757", accent: "#10B981", card: "#F3EEFF", glow: "rgba(123,47,190,0.25)" },
  { name: "Solar Coral",     primary: "#FF4757", secondary: "#F59E0B", accent: "#0EA5E9", card: "#FFF0F0", glow: "rgba(255,71,87,0.25)" },
  { name: "Cyber Mint",      primary: "#059669", secondary: "#8B5CF6", accent: "#F59E0B", card: "#EDFAF3", glow: "rgba(5,150,105,0.25)" },
  { name: "Deep Ocean",      primary: "#0EA5E9", secondary: "#EC4899", accent: "#84CC16", card: "#E9F5FD", glow: "rgba(14,165,233,0.25)" },
  { name: "Neon Amber",      primary: "#D97706", secondary: "#7C3AED", accent: "#06B6D4", card: "#FFFBEB", glow: "rgba(217,119,6,0.25)" },
  { name: "Rose Quartz",     primary: "#EC4899", secondary: "#10B981", accent: "#6366F1", card: "#FDF2F8", glow: "rgba(236,72,153,0.25)" },
  { name: "Indigo Fire",     primary: "#6366F1", secondary: "#F97316", accent: "#22D3EE", card: "#EEF2FF", glow: "rgba(99,102,241,0.25)" },
  { name: "Lime Surge",      primary: "#65A30D", secondary: "#DB2777", accent: "#7C3AED", card: "#F7FEE7", glow: "rgba(101,163,13,0.25)" }
];

export function getHourlyTheme() {
  return THEMES[getHourSeed() % THEMES.length];
}

// ────────────────────────────────────────────────────────────
// ANIMATION VARIANTS — 4 styles, cycles every hour
// ────────────────────────────────────────────────────────────
export const ANIM_VARIANTS = ["slide-up", "slide-left", "zoom-in", "flip-in"];
export function getHourlyAnimVariant() {
  return ANIM_VARIANTS[getHourSeed() % ANIM_VARIANTS.length];
}

// ────────────────────────────────────────────────────────────
// XP & LEVEL SYSTEM (localStorage persistence)
// ────────────────────────────────────────────────────────────
const XP_KEY   = "gq_xp";
const STK_KEY  = "gq_streak";
const DATE_KEY = "gq_last_date";
const AUD_KEY  = "gq_audit_scores";

const LEVELS = [
  { min: 0,    label: "Seedling",     emoji: "🌱" },
  { min: 100,  label: "Apprentice",   emoji: "🗡️" },
  { min: 250,  label: "Practitioner", emoji: "🧭" },
  { min: 500,  label: "Warrior",      emoji: "⚔️" },
  { min: 800,  label: "Sage",         emoji: "🔮" },
  { min: 1200, label: "Master",       emoji: "🏆" }
];

export function getXP() {
  return parseInt(localStorage.getItem(XP_KEY) || "0", 10);
}

export function addXP(amount) {
  const current = getXP();
  const next = current + amount;
  localStorage.setItem(XP_KEY, String(next));
  return { before: current, after: next, gained: amount, leveledUp: getLevel(next) !== getLevel(current) };
}

export function getLevel(xp = getXP()) {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.min) level = l;
  }
  return level;
}

export function getXPProgress(xp = getXP()) {
  const current = getLevel(xp);
  const idx = LEVELS.indexOf(current);
  const next = LEVELS[idx + 1];
  if (!next) return { percent: 100, current, next: null, toNext: 0 };
  const range = next.min - current.min;
  const earned = xp - current.min;
  return { percent: Math.min(100, Math.round((earned / range) * 100)), current, next, toNext: next.min - xp };
}

// ────────────────────────────────────────────────────────────
// STREAK SYSTEM
// ────────────────────────────────────────────────────────────
export function checkAndUpdateStreak() {
  const today = new Date().toDateString();
  const last  = localStorage.getItem(DATE_KEY);
  let streak  = parseInt(localStorage.getItem(STK_KEY) || "0", 10);

  if (last === today) return streak;

  const yesterday = new Date(Date.now() - 86_400_000).toDateString();
  if (last === yesterday) {
    streak += 1;
  } else if (last !== today) {
    streak = 1;
  }

  localStorage.setItem(STK_KEY, String(streak));
  localStorage.setItem(DATE_KEY, today);
  return streak;
}

export function getStreak() {
  return parseInt(localStorage.getItem(STK_KEY) || "0", 10);
}

// ────────────────────────────────────────────────────────────
// AUDIT SCORE PERSISTENCE
// ────────────────────────────────────────────────────────────
export function saveAuditScore(area, score) {
  const data = getAuditScores();
  data[area] = score;
  localStorage.setItem(AUD_KEY, JSON.stringify(data));
}

export function getAuditScores() {
  try {
    return JSON.parse(localStorage.getItem(AUD_KEY) || "{}");
  } catch {
    return {};
  }
}

export function getAuditAverage() {
  const scores = Object.values(getAuditScores());
  if (!scores.length) return 0;
  return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
}

// ────────────────────────────────────────────────────────────
// RAPID-FIRE PROGRESS TRACKING
// ────────────────────────────────────────────────────────────
const RF_KEY = "gq_rf_seen";

export function markQuestionSeen(questionText) {
  const seen = getRFSeen();
  seen.add(questionText);
  localStorage.setItem(RF_KEY, JSON.stringify([...seen]));
}

export function getRFSeen() {
  try {
    return new Set(JSON.parse(localStorage.getItem(RF_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

export function getRFProgress(total) {
  return { seen: getRFSeen().size, total };
}

// ────────────────────────────────────────────────────────────
// HOURLY REFRESH TIMER — calls callback when hour ticks
// ────────────────────────────────────────────────────────────
export function startHourlyRefresh(callback) {
  const msToNextHour = () => {
    const now = Date.now();
    return 3_600_000 - (now % 3_600_000);
  };
  const schedule = () => {
    setTimeout(() => {
      callback();
      schedule();
    }, msToNextHour());
  };
  schedule();
}

// ────────────────────────────────────────────────────────────
// GREETING based on time of day
// ────────────────────────────────────────────────────────────
export function getTimeGreeting() {
  const h = new Date().getHours();
  if (h < 5)  return { text: "Still up?",       emoji: "🌙" };
  if (h < 12) return { text: "Morning, Quester", emoji: "☀️" };
  if (h < 17) return { text: "Afternoon check-in", emoji: "⚡" };
  if (h < 21) return { text: "Evening reflect",  emoji: "🌅" };
  return       { text: "Wind-down mode",         emoji: "🌙" };
}
