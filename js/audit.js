// ============================================================
// audit.js — Interactive growth audit component
// 15 areas, 1-10 slider per carousel card
// ============================================================
import { Carousel } from "./carousel.js";
import { AUDIT_AREAS, AUDIT_SCORING } from "./data.js";
import { saveAuditScore, getAuditScores, addXP, getXPProgress } from "./engine.js";
import { playRating, playAchievement } from "./sounds.js";

export function initAudit(container) {
  const scores = getAuditScores();

  const renderAuditCard = (item, idx, total) => {
    const score = scores[item.area] || 0;
    const card  = document.createElement("div");
    card.className = "card audit-card";

    // Score label
    const getLabel = (s) => {
      if (s >= 8) return { text: "Strength", cls: "score-high" };
      if (s >= 6) return { text: "Functional", cls: "score-mid" };
      if (s >= 4) return { text: "Growth Zone", cls: "score-grow" };
      if (s >= 1) return { text: "Life Cost", cls: "score-low" };
      return { text: "Rate yourself", cls: "score-none" };
    };

    card.innerHTML = `
      <div class="audit-card-inner">
        <div class="audit-area-tag">${item.area}</div>
        <p class="audit-question">"${item.question}"</p>
        <div class="audit-slider-wrap">
          <div class="audit-score-display">
            <span class="audit-score-num" id="score-num-${idx}">${score || "—"}</span>
            <span class="audit-score-label ${getLabel(score).cls}" id="score-label-${idx}">${getLabel(score).text}</span>
          </div>
          <input
            type="range"
            min="1" max="10"
            value="${score || 5}"
            class="audit-slider"
            id="audit-slider-${idx}"
            aria-label="Score for ${item.area}"
          />
          <div class="audit-scale">
            <span>1</span><span>5</span><span>10</span>
          </div>
        </div>
        <div class="audit-scoring-guide">
          ${Object.entries(AUDIT_SCORING).map(([range, meaning]) =>
            `<span class="scoring-chip ${range === String(score).startsWith("8") ? "active" : ""}">${range}: ${meaning}</span>`
          ).join("")}
        </div>
        <button class="btn-primary audit-save-btn" data-area="${item.area}" data-idx="${idx}">
          Save Score
        </button>
      </div>
    `;

    // Slider live update
    const slider = card.querySelector(`#audit-slider-${idx}`);
    const numEl  = card.querySelector(`#score-num-${idx}`);
    const lblEl  = card.querySelector(`#score-label-${idx}`);

    slider.addEventListener("input", () => {
      const v = parseInt(slider.value);
      numEl.textContent = v;
      const l = getLabel(v);
      lblEl.textContent = l.text;
      lblEl.className   = `audit-score-label ${l.cls}`;
      playRating(v);
    });

    // Save
    card.querySelector(".audit-save-btn").addEventListener("click", (e) => {
      const area  = e.currentTarget.dataset.area;
      const val   = parseInt(slider.value);
      const wasNew = !scores[area];
      scores[area] = val;
      saveAuditScore(area, val);

      if (wasNew) {
        const result = addXP(10);
        if (result.leveledUp) playAchievement();
        dispatchEvent(new CustomEvent("gq:xp-update"));
      }

      // Pulse button
      const btn = card.querySelector(".audit-save-btn");
      btn.textContent = "Saved ✓";
      btn.classList.add("saved");
      setTimeout(() => { btn.textContent = "Save Score"; btn.classList.remove("saved"); }, 1800);
    });

    return card;
  };

  new Carousel(container, AUDIT_AREAS, renderAuditCard, {
    loop: true,
    onChange: (_item, _idx) => {}
  });
}
