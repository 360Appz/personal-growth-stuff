// ============================================================
// carousel.js — Reusable 1-item carousel component
// No dots, keyboard + swipe + button navigation
// ============================================================
import { playWhoosh } from "./sounds.js";

export class Carousel {
  /**
   * @param {HTMLElement} container — element with [data-carousel]
   * @param {Array}        items    — data items
   * @param {Function}     render  — (item, index, total) => HTMLElement
   * @param {Object}       opts
   */
  constructor(container, items, render, opts = {}) {
    this.container = container;
    this.items     = items;
    this.render    = render;
    this.opts      = { loop: true, animClass: "slide-left", ...opts };
    this.current   = opts.startIndex || 0;
    this.locked    = false;

    this._build();
    this._bindEvents();
  }

  // ── Build DOM ──────────────────────────────────────────────
  _build() {
    this.container.innerHTML = "";
    this.container.classList.add("carousel-root");

    // Track
    this.track = document.createElement("div");
    this.track.className = "carousel-track";

    // Card wrapper (single slot)
    this.slot = document.createElement("div");
    this.slot.className = "carousel-slot";
    this.track.appendChild(this.slot);
    this.container.appendChild(this.track);

    // Controls
    const controls = document.createElement("div");
    controls.className = "carousel-controls";

    this.prevBtn = document.createElement("button");
    this.prevBtn.className = "carousel-btn carousel-prev";
    this.prevBtn.setAttribute("aria-label", "Previous");
    this.prevBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;

    this.nextBtn = document.createElement("button");
    this.nextBtn.className = "carousel-btn carousel-next";
    this.nextBtn.setAttribute("aria-label", "Next");
    this.nextBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;

    this.counter = document.createElement("span");
    this.counter.className = "carousel-counter";

    controls.appendChild(this.prevBtn);
    controls.appendChild(this.counter);
    controls.appendChild(this.nextBtn);
    this.container.appendChild(controls);

    this._renderSlide(this.current, "none");
  }

  // ── Render slide at index ──────────────────────────────────
  _renderSlide(idx, direction = "forward") {
    const item = this.items[idx];
    const el   = this.render(item, idx, this.items.length);

    // Animate out old, animate in new
    const old = this.slot.firstChild;
    if (old) {
      old.classList.add(direction === "forward" ? "exit-left" : "exit-right");
      old.addEventListener("animationend", () => old.remove(), { once: true });
    }

    el.classList.add(direction === "forward" ? "enter-right" : "enter-left");
    this.slot.appendChild(el);

    // Counter
    this.counter.textContent = `${idx + 1} / ${this.items.length}`;

    // Update buttons
    if (!this.opts.loop) {
      this.prevBtn.disabled = idx === 0;
      this.nextBtn.disabled = idx === this.items.length - 1;
    }

    // Call optional callback
    if (this.opts.onChange) this.opts.onChange(item, idx);
  }

  // ── Navigate ───────────────────────────────────────────────
  next() {
    if (this.locked) return;
    this.locked = true;
    let next = this.current + 1;
    if (next >= this.items.length) next = this.opts.loop ? 0 : this.items.length - 1;
    this.current = next;
    this._renderSlide(this.current, "forward");
    playWhoosh();
    setTimeout(() => (this.locked = false), 350);
  }

  prev() {
    if (this.locked) return;
    this.locked = true;
    let prev = this.current - 1;
    if (prev < 0) prev = this.opts.loop ? this.items.length - 1 : 0;
    this.current = prev;
    this._renderSlide(this.current, "backward");
    playWhoosh();
    setTimeout(() => (this.locked = false), 350);
  }

  goTo(idx) {
    if (idx === this.current) return;
    const dir = idx > this.current ? "forward" : "backward";
    this.current = idx;
    this._renderSlide(this.current, dir);
  }

  updateItems(items, startIndex = 0) {
    this.items   = items;
    this.current = startIndex;
    this._renderSlide(this.current, "none");
  }

  // ── Events ─────────────────────────────────────────────────
  _bindEvents() {
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    // Keyboard (only when container is focused)
    this.container.setAttribute("tabindex", "0");
    this.container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); this.next(); }
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   { e.preventDefault(); this.prev(); }
    });

    // Touch / pointer swipe
    let startX = null;
    this.track.addEventListener("pointerdown", (e) => { startX = e.clientX; });
    this.track.addEventListener("pointerup",   (e) => {
      if (startX === null) return;
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 50) delta < 0 ? this.next() : this.prev();
      startX = null;
    });
  }
}
