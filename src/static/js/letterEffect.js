const envelope = document.querySelector(".envelope"),
  cardPreview = document.querySelector(".cardPreview"),
  card = document.querySelector(".card"),
  background = document.querySelector(".background");

envelope.addEventListener("click", () => {
  cardPreview.classList.add("moveUp");
  setTimeout(() => {
    background.style.webkitTransform = "matrix(10, 0, 0, 10, 0, 0)";
  }, 1250);

  setTimeout(() => {
    card.style.display = "flex";
    envelope.style.display = "none";
  }, 1750);

  setTimeout(() => {
    card.style.opacity = "1";
    createRandomBubbles();
  }, 2250);
});

function createRandomBubbles() {
  const cnt = 50,
    section = document.querySelector(".card");
  let i = 0;
  while (i < cnt) {
    const createdBubble = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const size = Math.random() * 5;
    createdBubble.style.left = x + "px";
    createdBubble.style.top = y + "px";
    createdBubble.style.width = size + 1 + "px";
    createdBubble.style.height = size + 1 + "px";

    createdBubble.style.animationDuration = size + 3 + "s";
    createdBubble.style.animationDelay = -size + "s";

    section.appendChild(createdBubble);
    i++;
  }
}
