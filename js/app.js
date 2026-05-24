// ============================================================
// app.js — Main orchestrator
// Wires all modules, applies theme, manages XP UI
// ============================================================
import {
  QUOTES, QUESTIONS, PILLARS, GROWTH_AREAS, WEAKNESS_SYSTEM,
  GROWTH_CODE, RULES, GROWTH_MAP, OPERATING_SYSTEM, TEMPERAMENTS,
  SIGNS_GROWING, SIGNS_NOT_GROWING, STOP_DOING, SPECIAL_TOPICS,
  CRITICAL_PERSPECTIVES, GROWTH_LAYERS_N1, GROWTH_LAYERS_N2,
  SKILL_STACK, IDENTITY_STATEMENTS, RELATIONSHIP_FLAGS,
  SCRIPTS, DECISION_TRAPS, FAILURE_TYPES, SELF_HELP_TRAPS,
  BOTTOM_LINE, CORRECTED_EVIDENCE, GROWTH_MINDSET, FINANCIAL_HIERARCHY,
  ASEAN_CONTEXT, GROWTH_PLAN_90DAY
} from "./data.js";

import {
  getHourlyTheme, getHourlyItems, getDailyQuote, getDailyQuestion,
  getHourlyQuestions, getXP, getXPProgress, getStreak,
  checkAndUpdateStreak, addXP, startHourlyRefresh, getTimeGreeting,
  getHourlyAnimVariant
} from "./engine.js";

import { initAudio, playClick, playQuoteReveal, playAchievement, setEnabled, isEnabled } from "./sounds.js";
import { Carousel } from "./carousel.js";
import { initAudit } from "./audit.js";
import { initRapidFire } from "./rapidfire.js";

// ────────────────────────────────────────────────────────────
// Theme application
// ────────────────────────────────────────────────────────────
function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--primary",   theme.primary);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--accent",    theme.accent);
  root.style.setProperty("--card-tint", theme.card);
  root.style.setProperty("--glow",      theme.glow);
  root.style.setProperty("--anim-variant", getHourlyAnimVariant());
  document.querySelector(".theme-badge").textContent = `Theme: ${theme.name}`;
}

// ────────────────────────────────────────────────────────────
// XP / Stats bar
// ────────────────────────────────────────────────────────────
function updateStats() {
  const xp   = getXP();
  const prog = getXPProgress(xp);
  const streak = getStreak();

  const el = document.querySelector("#stats-bar");
  if (!el) return;

  el.querySelector(".stat-xp").textContent    = `${xp} XP`;
  el.querySelector(".stat-level").innerHTML   = `${prog.current.emoji} ${prog.current.label}`;
  el.querySelector(".stat-streak").textContent = `🔥 ${streak}d`;
  el.querySelector(".xp-bar-fill").style.width = `${prog.percent}%`;
  el.querySelector(".xp-next").textContent     = prog.next ? `${prog.toNext} XP to ${prog.next.label}` : "Max Level!";
}

// ────────────────────────────────────────────────────────────
// Quote of the Day
// ────────────────────────────────────────────────────────────
function renderQotd() {
  const q  = getDailyQuote(QUOTES);
  const el = document.querySelector("#qotd-text");
  const src = document.querySelector("#qotd-source");
  if (!el) return;
  el.textContent  = `"${q.text}"`;
  src.textContent = `— ${q.source}`;
  playQuoteReveal();
}

// ────────────────────────────────────────────────────────────
// Question of the Day
// ────────────────────────────────────────────────────────────
function renderQod() {
  const q   = getDailyQuestion(QUESTIONS);
  const el  = document.querySelector("#qod-text");
  const cat = document.querySelector("#qod-cat");
  if (!el) return;
  el.textContent  = q.text;
  cat.textContent = q.category;
}

// ────────────────────────────────────────────────────────────
// Greeting
// ────────────────────────────────────────────────────────────
function renderGreeting() {
  const g  = getTimeGreeting();
  const el = document.querySelector("#greeting");
  if (!el) return;
  el.innerHTML = `${g.emoji} ${g.text}`;
}

// ────────────────────────────────────────────────────────────
// Pillar Carousel
// ────────────────────────────────────────────────────────────
function initPillars() {
  const el = document.querySelector("#pillars-carousel");
  if (!el) return;
  new Carousel(el, PILLARS, (item) => {
    const card = document.createElement("div");
    card.className = "card pillar-card";
    card.innerHTML = `
      <div class="pillar-number">Pillar ${item.number}</div>
      <h3 class="pillar-title">${item.title}</h3>
      <div class="pillar-body scrollable-content">
        <p class="pillar-summary">${item.summary}</p>
        ${item.practice ? `<div class="pillar-practice"><strong>Practice:</strong> ${item.practice}</div>` : ""}
        ${item.triggers ? renderTable(
          ["Trigger", "Immature Response", "Mature Response"],
          item.triggers.map(t => [t.trigger, t.immature, t.mature])
        ) : ""}
        ${item.patterns ? renderTable(
          ["Pattern", "Hidden Issue"],
          item.patterns.map(p => [p.pattern, p.issue])
        ) : ""}
        ${item.types ? renderTable(
          ["Type", "Question"],
          item.types.map(t => [t.type, t.question])
        ) : ""}
      </div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Growth Map Carousel
// ────────────────────────────────────────────────────────────
function initGrowthMap() {
  const el = document.querySelector("#growth-map-carousel");
  if (!el) return;
  const hourlyMap = getHourlyItems(GROWTH_MAP);
  new Carousel(el, hourlyMap, (item) => {
    const card = document.createElement("div");
    card.className = "card map-card";
    card.innerHTML = `
      <div class="map-month">Month ${item.month}</div>
      <div class="map-title">${item.title}</div>
      <p class="map-focus">${item.focus}</p>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Weakness → System Carousel
// ────────────────────────────────────────────────────────────
function initWeaknessSystem() {
  const el = document.querySelector("#weakness-carousel");
  if (!el) return;
  const items = getHourlyItems(WEAKNESS_SYSTEM);
  new Carousel(el, items, (item) => {
    const card = document.createElement("div");
    card.className = "card ws-card";
    card.innerHTML = `
      <div class="ws-arrow">⚡</div>
      <div class="ws-weakness">${item.weakness}</div>
      <div class="ws-divider">→</div>
      <div class="ws-system">${item.system}</div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Systems (Daily/Weekly/Monthly) Carousel
// ────────────────────────────────────────────────────────────
function initSystems() {
  const el = document.querySelector("#systems-carousel");
  if (!el) return;
  const systems = [
    OPERATING_SYSTEM.daily5min,
    OPERATING_SYSTEM.eveningReview,
    OPERATING_SYSTEM.weekly30min,
    OPERATING_SYSTEM.monthly
  ];
  new Carousel(el, systems, (item) => {
    const card = document.createElement("div");
    card.className = "card system-card";
    card.innerHTML = `
      <h3 class="system-title">${item.title}</h3>
      <ul class="system-prompts scrollable-content">
        ${item.prompts.map(p => `<li class="system-prompt">${p}</li>`).join("")}
      </ul>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Temperaments Carousel
// ────────────────────────────────────────────────────────────
function initTemperaments() {
  const el = document.querySelector("#temperaments-carousel");
  if (!el) return;
  new Carousel(el, TEMPERAMENTS, (item) => {
    const card = document.createElement("div");
    card.className = "card temperament-card";
    card.innerHTML = `
      <div class="temp-emoji">${item.emoji}</div>
      <div class="temp-type">${item.type}</div>
      <div class="temp-needs scrollable-content">
        <strong>Needs:</strong>
        <ul>${item.needs.map(n => `<li>${n}</li>`).join("")}</ul>
      </div>
      <div class="temp-risk">⚠️ ${item.risk}</div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Special Topics Carousel
// ────────────────────────────────────────────────────────────
function initSpecialTopics() {
  const el = document.querySelector("#topics-carousel");
  if (!el) return;
  const items = getHourlyItems(SPECIAL_TOPICS);
  new Carousel(el, items, (item) => {
    const card = document.createElement("div");
    card.className = "card topic-card";
    card.innerHTML = `
      <div class="topic-section">§${item.section}</div>
      <h3 class="topic-title">${item.title}</h3>
      <div class="topic-body scrollable-content">
        <p>${item.summary}</p>
        ${item.practice    ? `<div class="topic-block"><strong>Practice:</strong> ${item.practice}</div>` : ""}
        ${item.tool        ? `<div class="topic-block"><strong>ACT Tool:</strong> ${item.tool}</div>` : ""}
        ${item.principle   ? `<div class="topic-block"><strong>Principle:</strong> ${item.principle}</div>` : ""}
        ${item.caution     ? `<div class="topic-block warn"><strong>⚠️ Note:</strong> ${item.caution}</div>` : ""}
        ${item.criticalNote ? `<div class="topic-block warn"><strong>Critical:</strong> ${item.criticalNote}</div>` : ""}
        ${item.minimumViable ? `<div class="topic-block"><strong>Minimum Viable Practice:</strong> ${item.minimumViable}</div>` : ""}
        ${item.compound     ? `<div class="topic-block"><strong>Compound Effect:</strong> ${item.compound}</div>` : ""}
        ${item.growth       ? `<div class="topic-block"><strong>On Growth:</strong> ${item.growth}</div>` : ""}
        ${item.test         ? `<div class="topic-block"><strong>Practical Test:</strong> ${item.test}</div>` : ""}
        ${item.socialJetlag ? `<div class="topic-block"><strong>Social Jetlag:</strong> ${item.socialJetlag}</div>` : ""}
        ${item.revisedFraming ? `<div class="topic-block"><strong>Revised Framing:</strong> ${item.revisedFraming}</div>` : ""}
        ${item.convenienceTrap ? `<div class="topic-block warn"><strong>Convenience Trap:</strong> ${item.convenienceTrap}</div>` : ""}
        ${item.malaysiaNote  ? `<div class="topic-block local"><strong>Malaysia Note:</strong> ${item.malaysiaNote}</div>` : ""}
        ${item.foods         ? renderTable(["Food", "Effect", "Evidence"], item.foods.map(f => [f.food, f.effect, f.evidence])) : ""}
        ${item.layers        ? renderTable(["Layer", "Description", "Example"], item.layers.map(l => [l.layer, l.desc, l.example])) : ""}
        ${item.domains       ? renderTable(["Domain", "Example"], item.domains.map(d => [d.domain, d.example])) : ""}
        ${item.types         ? renderTable(["Type", "What it involves", "Outcome"], item.types.map(t => [t.type, t.desc, t.outcome])) : ""}
        ${item.canHelp       ? `<div class="topic-block"><strong>AI can help with:</strong><ul>${item.canHelp.map(c => `<li><em>${c.use}</em> — ${c.note}</li>`).join("")}</ul></div>` : ""}
        ${item.cannotSubstitute ? `<div class="topic-block warn"><strong>AI cannot replace:</strong><ul>${item.cannotSubstitute.map(c => `<li>${c}</li>`).join("")}</ul></div>` : ""}
      </div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Growth Code Carousel
// ────────────────────────────────────────────────────────────
function renderGrowthCode() {
  const el = document.querySelector("#code-carousel");
  if (!el) return;
  new Carousel(el, GROWTH_CODE.map((text, i) => ({ text, i })), (item) => {
    const card = document.createElement("div");
    card.className = "card code-card";
    card.innerHTML = `
      <div class="code-card-num">${String(item.i + 1).padStart(2, "0")}<span class="code-card-of"> / ${GROWTH_CODE.length}</span></div>
      <div class="code-card-text">${item.text}</div>
    `;
    return card;
  }, { loop: true });
}

// ────────────────────────────────────────────────────────────
// Signs Growing / Not Growing
// ────────────────────────────────────────────────────────────
function renderSigns() {
  const growing    = document.querySelector("#signs-growing");
  const notGrowing = document.querySelector("#signs-not-growing");
  if (!growing || !notGrowing) return;

  growing.innerHTML = SIGNS_GROWING.map(s =>
    `<li class="sign-item growing"><span class="sign-icon">✓</span>${s}</li>`
  ).join("");

  notGrowing.innerHTML = SIGNS_NOT_GROWING.map(s =>
    `<li class="sign-item not-growing"><span class="sign-icon">⚠</span>${s}</li>`
  ).join("");
}

// ────────────────────────────────────────────────────────────
// Stop Doing Carousel
// ────────────────────────────────────────────────────────────
function initStopDoing() {
  const el = document.querySelector("#stop-carousel");
  if (!el) return;
  const items = getHourlyItems(STOP_DOING.map(s => ({ text: s })));
  new Carousel(el, items, (item) => {
    const card = document.createElement("div");
    card.className = "card stop-card";
    card.innerHTML = `<div class="stop-text">Stop: <strong>${item.text}</strong></div>`;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Scripts Carousel
// ────────────────────────────────────────────────────────────
function initScripts() {
  const el = document.querySelector("#scripts-carousel");
  if (!el) return;
  const items = getHourlyItems(SCRIPTS);
  new Carousel(el, items, (item) => {
    const card = document.createElement("div");
    card.className = "card script-card";
    card.innerHTML = `
      <div class="script-label">${item.label}</div>
      <blockquote class="script-text">${item.script}</blockquote>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Skill Stack Carousel
// ────────────────────────────────────────────────────────────
function initSkillStack() {
  const el = document.querySelector("#skills-carousel");
  if (!el) return;
  new Carousel(el, SKILL_STACK, (item) => {
    const card = document.createElement("div");
    card.className = "card skill-card";
    card.innerHTML = `
      <div class="skill-name">${item.skill}</div>
      <div class="skill-why">${item.why}</div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Corrected Evidence Carousel
// ────────────────────────────────────────────────────────────
function initEvidence() {
  const el = document.querySelector("#evidence-carousel");
  if (!el) return;
  new Carousel(el, CORRECTED_EVIDENCE, (item) => {
    const card = document.createElement("div");
    card.className = "card evidence-card";
    card.innerHTML = `
      <div class="ev-topic">${item.topic}</div>
      <div class="ev-original"><strong>Original:</strong> ${item.original}</div>
      <div class="ev-updated"><strong>Updated (2025–26):</strong> ${item.updated}</div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Growth Areas (A–H) Carousel
// ────────────────────────────────────────────────────────────
function initGrowthAreas() {
  const el = document.querySelector("#areas-carousel");
  if (!el) return;
  new Carousel(el, GROWTH_AREAS, (item) => {
    const card = document.createElement("div");
    card.className = "card area-card";
    card.innerHTML = `
      <div class="area-key">${item.key}</div>
      <h3 class="area-title">${item.title}</h3>
      <div class="area-body scrollable-content">
        <p>${item.summary}</p>
        ${item.habit        ? `<div class="area-block"><strong>Daily Habit:</strong> ${item.habit}</div>` : ""}
        ${item.method       ? `<div class="area-block"><strong>Method:</strong> ${item.method}</div>` : ""}
        ${item.checklist    ? `<ul class="area-list">${item.checklist.map(c => `<li>${c}</li>`).join("")}</ul>` : ""}
        ${item.killers      ? `<div class="area-block warn"><strong>Killers:</strong> ${item.killers.join(" / ")}</div>` : ""}
        ${item.twoMinuteRule ? `<div class="area-block"><strong>2-Minute Rule:</strong> ${item.twoMinuteRule}</div>` : ""}
        ${item.habits       ? `<ul class="area-list">${item.habits.map(h => `<li>${h}</li>`).join("")}</ul>` : ""}
        ${item.formula      ? `<div class="area-block formula">${item.formula}</div>` : ""}
        ${item.shift        ? `<div class="area-block"><strong>Leadership Shift:</strong> ${item.shift}</div>` : ""}
        ${item.behaviors    ? `<ul class="area-list">${item.behaviors.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
        ${item.repairScript ? `<div class="area-block script">"${item.repairScript}"</div>` : ""}
        ${item.weeklyRhythm ? `<div class="area-block"><strong>Weekly Questions:</strong><ul>${item.weeklyRhythm.map(w => `<li>${w}</li>`).join("")}</ul></div>` : ""}
        ${item.language  ? renderTable(["Immature", "Mature"], item.language.map(l => [l.immature, l.mature])) : ""}
        ${item.weaknesses ? renderTable(["Weakness", "Others Experience"], item.weaknesses.map(w => [w.weakness, w.experience])) : ""}
        ${item.ladder    ? renderTable(["Level", "Behavior"], item.ladder.map(l => [`Level ${l.level}`, l.behavior])) : ""}
        ${item.badPatterns ? renderTable(["Pattern", "Result"], item.badPatterns.map(p => [p.pattern, p.result])) : ""}
      </div>
    `;
    return card;
  });
}

// ────────────────────────────────────────────────────────────
// Rules Carousel
// ────────────────────────────────────────────────────────────
function renderRules() {
  const el = document.querySelector("#rules-carousel");
  if (!el) return;
  new Carousel(el, RULES, (r) => {
    const card = document.createElement("div");
    card.className = "card rule-card";
    card.innerHTML = `
      <span class="rule-tag">${r.rule}</span>
      <strong class="rule-card-title">${r.title}</strong>
      <p class="rule-card-body">${r.body}</p>
    `;
    return card;
  }, { loop: true });
}

// ────────────────────────────────────────────────────────────
// Bottom line
// ────────────────────────────────────────────────────────────
function renderBottomLine() {
  const el = document.querySelector("#bottom-line");
  if (!el) return;
  el.innerHTML = `
    <blockquote class="bottom-n1">${BOTTOM_LINE.n1}</blockquote>
    <blockquote class="bottom-n2">${BOTTOM_LINE.n2}</blockquote>
    <p class="recency-note">${BOTTOM_LINE.recencyNote}</p>
  `;
}

// ────────────────────────────────────────────────────────────
// Helper — table renderer
// ────────────────────────────────────────────────────────────
function renderTable(headers, rows) {
  return `
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>`;
}

// ────────────────────────────────────────────────────────────
// Sound toggle
// ────────────────────────────────────────────────────────────
function initSoundToggle() {
  const btn = document.querySelector("#sound-toggle");
  if (!btn) return;
  const update = () => {
    btn.textContent = isEnabled() ? "🔊" : "🔇";
    btn.title       = isEnabled() ? "Sound On (click to mute)" : "Sound Off (click to enable)";
  };
  btn.addEventListener("click", () => {
    setEnabled(!isEnabled());
    update();
    playClick();
  });
  update();
}

// ────────────────────────────────────────────────────────────
// Custom cursor
// ────────────────────────────────────────────────────────────
function initCursor() {
  const dot  = document.querySelector("#cursor-dot");
  const ring = document.querySelector("#cursor-ring");
  if (!dot || !ring) return;
  let rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    dot.style.transform  = `translate(${e.clientX}px, ${e.clientY}px)`;
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
  });

  document.addEventListener("mousedown", () => ring.classList.add("pressed"));
  document.addEventListener("mouseup",   () => ring.classList.remove("pressed"));

  // Magnetic on buttons
  document.querySelectorAll("button, .card, a").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("on-interactive"));
    el.addEventListener("mouseleave", () => ring.classList.remove("on-interactive"));
  });
}

// ────────────────────────────────────────────────────────────
// Particle canvas background
// ────────────────────────────────────────────────────────────
function initParticles() {
  const canvas = document.querySelector("#particle-canvas");
  if (!canvas) return;
  const ctx   = canvas.getContext("2d");
  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 3 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.3 + 0.1
  }));

  window.addEventListener("resize", () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  let primary = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#7B2FBE";

  function tick() {
    ctx.clearRect(0, 0, W, H);
    primary = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#7B2FBE";

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `${primary}${Math.round(p.alpha * 255).toString(16).padStart(2, "0")}`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

// ────────────────────────────────────────────────────────────
// Nav smooth scroll & active section observer
// ────────────────────────────────────────────────────────────
function initNav() {
  // ── Mobile menu ──────────────────────────────────────────
  const burger = document.getElementById("nav-burger");
  const closeBtn = document.getElementById("nav-close");
  const menu = document.getElementById("mobile-menu");
  const backdrop = menu?.querySelector(".mobile-menu-backdrop");

  function openMenu() {
    menu.hidden = false;
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    playClick();
  }
  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    playClick();
  }

  burger?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });

  // ── Smooth scroll (desktop + mobile links) ───────────────
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (!menu.hidden) closeMenu();
      playClick();
    });
  });

  // Scroll-spy
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll("[data-scroll]").forEach(l => {
          l.classList.toggle("active", l.dataset.scroll === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ────────────────────────────────────────────────────────────
// XP earned popup
// ────────────────────────────────────────────────────────────
function showXpPopup(amount, msg = "") {
  const popup = document.createElement("div");
  popup.className = "xp-popup";
  popup.textContent = `+${amount} XP${msg ? " — " + msg : ""}`;
  document.body.appendChild(popup);
  requestAnimationFrame(() => popup.classList.add("visible"));
  setTimeout(() => {
    popup.classList.remove("visible");
    setTimeout(() => popup.remove(), 400);
  }, 2000);
}

// ────────────────────────────────────────────────────────────
// First-visit bonus
// ────────────────────────────────────────────────────────────
function handleFirstVisit() {
  if (!localStorage.getItem("gq_visited")) {
    localStorage.setItem("gq_visited", "1");
    const r = addXP(50);
    if (r.leveledUp) playAchievement();
    setTimeout(() => showXpPopup(50, "Welcome bonus!"), 1500);
  }
}

// ────────────────────────────────────────────────────────────
// Daily check-in XP
// ────────────────────────────────────────────────────────────
function handleDailyXP() {
  const today = new Date().toDateString();
  const key   = "gq_daily_xp";
  if (localStorage.getItem(key) !== today) {
    localStorage.setItem(key, today);
    const r = addXP(20);
    if (r.leveledUp) { playAchievement(); }
    setTimeout(() => showXpPopup(20, "Daily check-in!"), 2500);
  }
}

// ────────────────────────────────────────────────────────────
// Section reveal animation on scroll
// ────────────────────────────────────────────────────────────
function initRevealObserver() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ────────────────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // First user gesture needed for audio
  document.addEventListener("click", initAudio, { once: true });

  // Theme
  applyTheme(getHourlyTheme());

  // Streak + XP
  checkAndUpdateStreak();
  updateStats();
  handleFirstVisit();
  handleDailyXP();

  // Render static content
  renderGreeting();
  renderQotd();
  renderQod();
  renderGrowthCode();
  renderSigns();
  renderRules();
  renderBottomLine();

  // Carousels
  initPillars();
  initGrowthMap();
  initWeaknessSystem();
  initSystems();
  initTemperaments();
  initSpecialTopics();
  initStopDoing();
  initScripts();
  initSkillStack();
  initEvidence();
  initGrowthAreas();
  initAudit(document.querySelector("#audit-carousel"));
  initRapidFire(document.querySelector("#rapid-fire-container"));

  // UI
  initSoundToggle();
  initCursor();
  initParticles();
  initNav();
  initRevealObserver();

  // XP update event
  window.addEventListener("gq:xp-update", updateStats);

  // Hourly refresh
  startHourlyRefresh(() => {
    applyTheme(getHourlyTheme());
    renderQotd();
  });
});
