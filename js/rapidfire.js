// ============================================================
// rapidfire.js — Rapid fire question deck with card flip
// Hourly-seeded shuffle, XP on completion
// ============================================================
import { QUESTIONS } from "./data.js";
import { getHourlyQuestions, addXP, markQuestionSeen, getRFProgress } from "./engine.js";
import { playFlip, playDeckShuffle, playAchievement, playClick } from "./sounds.js";

const BATCH_SIZE = 12;

export function initRapidFire(container) {
  let questions = getHourlyQuestions(QUESTIONS, BATCH_SIZE);
  let current   = 0;
  let flipped   = false;

  function render() {
    const q     = questions[current];
    const prog  = getRFProgress(QUESTIONS.length);

    container.innerHTML = `
      <div class="rf-wrapper">
        <div class="rf-meta">
          <div class="rf-progress">
            <span class="rf-prog-text">Seen <strong>${prog.seen}</strong> of <strong>${prog.total}</strong> questions</span>
            <div class="rf-prog-bar-wrap">
              <div class="rf-prog-bar" style="width:${(prog.seen/prog.total)*100}%"></div>
            </div>
          </div>
          <div class="rf-batch-counter">${current + 1} / ${BATCH_SIZE}</div>
        </div>

        <div class="rf-scene" id="rf-scene" tabindex="0" role="button" aria-label="Flip card to reveal prompt">
          <div class="rf-card ${flipped ? "is-flipped" : ""}">
            <div class="rf-face rf-front">
              <div class="rf-category-tag">${q.category}</div>
              <p class="rf-question">${q.text}</p>
              <div class="rf-tap-hint">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7l10 10M17 7H7v10"/></svg>
                Tap to reflect
              </div>
            </div>
            <div class="rf-face rf-back">
              <div class="rf-back-icon">🪞</div>
              <p class="rf-back-prompt">Take 60 seconds.<br>Answer honestly — out loud or in your head.</p>
              <p class="rf-back-sub">"${q.text}"</p>
              <div class="rf-back-actions">
                <button class="rf-action-btn rf-honest" data-val="honest">That hit 🎯</button>
                <button class="rf-action-btn rf-skip" data-val="skip">Next →</button>
              </div>
            </div>
          </div>
        </div>

        <div class="rf-controls">
          <button class="btn-ghost rf-prev-btn" ${current === 0 ? "disabled" : ""}>← Prev</button>
          <button class="btn-ghost rf-shuffle-btn">🔀 Reshuffle</button>
          <button class="btn-ghost rf-next-btn" ${current >= BATCH_SIZE - 1 ? "disabled" : ""}>Next →</button>
        </div>
      </div>
    `;

    // Bind flip
    const scene   = container.querySelector("#rf-scene");
    const card    = scene.querySelector(".rf-card");

    const doFlip = () => {
      flipped = !flipped;
      card.classList.toggle("is-flipped", flipped);
      playFlip();
      if (flipped) {
        markQuestionSeen(q.text);
        const result = addXP(5);
        if (result.leveledUp) playAchievement();
        dispatchEvent(new CustomEvent("gq:xp-update"));
      }
    };

    scene.addEventListener("click", doFlip);
    scene.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doFlip(); }
    });

    // Action buttons
    container.querySelector(".rf-honest")?.addEventListener("click", (e) => {
      e.stopPropagation();
      playClick();
      nextCard();
    });
    container.querySelector(".rf-skip")?.addEventListener("click", (e) => {
      e.stopPropagation();
      playClick();
      nextCard();
    });

    // Next/Prev/Shuffle
    container.querySelector(".rf-next-btn")?.addEventListener("click", () => { playClick(); nextCard(); });
    container.querySelector(".rf-prev-btn")?.addEventListener("click", () => { playClick(); prevCard(); });
    container.querySelector(".rf-shuffle-btn")?.addEventListener("click", () => {
      playDeckShuffle();
      questions = getHourlyQuestions(QUESTIONS, BATCH_SIZE);
      current   = 0;
      flipped   = false;
      render();
    });
  }

  function nextCard() {
    if (current < BATCH_SIZE - 1) {
      current++;
      flipped = false;
      render();
    }
  }

  function prevCard() {
    if (current > 0) {
      current--;
      flipped = false;
      render();
    }
  }

  render();
}
