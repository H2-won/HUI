const cursor = document.querySelector(".cursor");
const logo = document.querySelector(".icon");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

function mouseHovering(
  component,
  text = "",
  hoverColor = "#F63E61",
  hoverSize = "5em",
  dotSize = "4px"
) {
  component.addEventListener("mouseover", () => {
    cursor.innerText = text;
    cursor.style.border = `2.2px solid ${hoverColor}`;
    cursor.style.color = hoverColor;
    cursor.style.width = hoverSize;
    cursor.style.height = hoverSize;
  });

  component.addEventListener("mouseout", () => {
    const cursorColor = cursor.getAttribute("color");
    cursor.style.border = `${dotSize} solid ${cursorColor}`;
    cursor.innerText = "";
    cursor.style.width = "0";
    cursor.style.height = "0";
  });
}

mouseHovering(logo, "", "#F63E61", "5em");
