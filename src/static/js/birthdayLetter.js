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
    createContentController();
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

function createContentController() {
  const contents = document.querySelectorAll(".content");
  let page = 0;

  const controllers = document.createElement("div");
  controllers.classList = "controllers";

  const controllerLeft = document.createElement("div");
  controllerLeft.classList = "controllerLeft";
  controllerLeft.addEventListener("click", () => {
    if (page === 0) {
      return;
    } else if (page === 1) {
      controllerLeft.classList.remove("active");
    }
    contents[page].classList.remove("active");
    page -= 1;
    setTimeout(() => {
      contents[page].classList.add("active");
    }, 1000);

    controllerRight.classList.add("active");
  });

  const controllerRight = document.createElement("div");
  controllerRight.classList = "controllerRight active";
  controllerRight.addEventListener("click", () => {
    if (page === contents.length - 1) {
      return;
    } else if (page === contents.length - 2) {
      controllerRight.classList.remove("active");
    }
    contents[page].classList.remove("active");
    page += 1;
    setTimeout(() => {
      contents[page].classList.add("active");
    }, 1000);

    controllerLeft.classList.add("active");
  });

  controllers.append(controllerLeft, controllerRight);
  document.body.append(controllers);
}
