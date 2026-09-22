/**
 * Inline <head> script, run before first paint.
 *  - Marks <html data-js> so CSS only hides reveal targets when JS is on.
 *  - Sets up an IntersectionObserver at DOM-ready that stamps `data-in` on
 *    each target the first time it scrolls into view. Targets must carry
 *    `suppressHydrationWarning`, since the stamp lands before React hydrates.
 *  - Exposes window.__reveal so the Reveal component can re-run it after
 *    client-side navigations.
 */
export const REVEAL_SCRIPT = `
(function () {
  document.documentElement.setAttribute("data-js", "");
  var SEL = "[data-reveal]";
  var io = null;
  function show(el) { el.setAttribute("data-in", ""); }
  function run() {
    var els = document.querySelectorAll(SEL);
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          show(e.target);
          io.unobserve(e.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    els.forEach(function (el) {
      if (!el.hasAttribute("data-in")) io.observe(el);
    });
  }
  window.__reveal = run;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
`;
