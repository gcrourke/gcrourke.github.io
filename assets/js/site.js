// Gives the menu a solid background once you scroll past the top of the page.
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  function update() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

// If someone arrives at /index.html (an old link or bookmark), show the clean address instead.
(function () {
  if (window.location.pathname.slice(-11) === "/index.html") {
    var clean = window.location.pathname.slice(0, -10) + window.location.search + window.location.hash;
    try { window.history.replaceState(null, "", clean); } catch (e) {}
  }
})();
