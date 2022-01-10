const envelope = document.querySelector(".envelope"),
  cardPreview = document.querySelector(".cardPreview"),
  background = document.querySelector(".background");

envelope.addEventListener("click", () => {
  cardPreview.classList.add("moveUp");
  setTimeout(() => {
    background.style.webkitTransform = "matrix(10, 0, 0, 10, 0, 0)";
  }, 1250);
});
