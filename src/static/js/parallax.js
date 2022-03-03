document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  const eye = document.querySelectorAll(".eye");
  eye.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientHeight / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotation}deg)`;
  });
}

function halloweenTitleHovering() {
  const halloweenTitle = document.querySelector("section h2");
  const eyeBall = document.querySelectorAll(".eyeBall");
  const cursor = document.querySelector(".cursor");
  halloweenTitle.addEventListener("mouseover", () => {
    halloweenTitle.style.color = "#62C110";
    eyeBall[0].style.border = "10px solid #62C110";
    eyeBall[1].style.border = "10px solid #62C110";
    cursor.style.border = "2.2px solid #62C110";
    cursor.style.width = "5em";
    cursor.style.height = "5em";
  });
  halloweenTitle.addEventListener("mouseout", () => {
    halloweenTitle.style.color = "#FF6912";
    eyeBall[0].style.border = "10px solid #FF6912";
    eyeBall[1].style.border = "10px solid #FF6912";
    cursor.style.border = "4px solid #FF6912";
    cursor.style.width = "0";
    cursor.style.height = "0";
  });
}
halloweenTitleHovering();
