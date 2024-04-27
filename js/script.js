let button = document.querySelector(".button");
let p = document.querySelector(".color");

button.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgbColorCode = `rgb(${r} , ${g} , ${b})`;
  p.innerHTML = `color code is : <br><br>
  ${rgbColorCode}<br><br>
  hex : #${hexCodeCheck(r)}${hexCodeCheck(g)}${hexCodeCheck(b)}`;
  document.body.style.backgroundColor = `${rgbColorCode}`;
});

function hexCodeCheck(colorCode) {
  let inHex = colorCode.toString(16);
  return inHex.length == 1 ? `0${inHex}` : inHex;
}
