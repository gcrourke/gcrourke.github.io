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

// Show clean addresses: /index.html becomes /, and /research.html becomes /research.
(function () {
  var path = window.location.pathname;
  var clean = null;
  if (path.slice(-11) === "/index.html") clean = path.slice(0, -10);
  else if (path.slice(-5) === ".html" && path.indexOf("/404") === -1) clean = path.slice(0, -5);
  if (clean !== null) {
    try { window.history.replaceState(null, "", clean + window.location.search + window.location.hash); } catch (e) {}
  }
})();
