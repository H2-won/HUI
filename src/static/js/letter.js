const card = document.querySelector("#card"),
  openBtn = document.querySelector("#open"),
  closeBtn = document.querySelector("#close"),
  cardFront = document.querySelector("#card-front"),
  frontInside = document.querySelector(".frontInsideWrap"),
  frontOutside = document.querySelector(".frontOutsideWrap");

openBtn.addEventListener("click", () => {
  cardFront.style.webkitTransform = `rotateY(-90deg)`;
  frontOutside.classList.toggle("shadow");

  setTimeout(() => {
    cardFront.style.webkitTransform = `rotateY(-180deg)`;
    frontInside.style.display = "block";
    closeBtn.style.display = "block";
  }, 1000);
});

closeBtn.addEventListener("click", () => {
  cardFront.style.webkitTransform = `rotateY(-90deg)`;

  setTimeout(() => {
    cardFront.style.webkitTransform = `rotateY(0deg)`;
    frontInside.style.display = "none";
    closeBtn.style.display = "none";
    frontOutside.classList.toggle("shadow");
  }, 1000);
});

mouseHovering(closeBtn, "❤", "yellow", "3em");
mouseHovering(openBtn, "❤", "yellow", "3em");
