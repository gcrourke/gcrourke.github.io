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
