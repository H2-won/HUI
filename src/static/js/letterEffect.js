const envelope = document.querySelector(".envelope"),
  cardPreview = document.querySelector(".cardPreview"),
  card = document.querySelector(".card");

envelope.addEventListener("click", () => {
  cardPreview.style.transform = "translateY(-40%)";
  card.style.display = "block";
  setTimeout(() => {
    card.style.opacity = "1";
  }, 1500);
});
