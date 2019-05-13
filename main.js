import { zip, chunk, objectify, reverse } from "./lib/index.js";

function fitToContainer(canvas) {
  // Make it visually fill the positioned parent
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  // ...then set the internal size to match
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

const cvs = /** @type {HTMLCanvasElement} */ (document.getElementById("cvs"));
fitToContainer(cvs);
const ctx = cvs.getContext("2d");

/**
 * set up background color
 */
ctx.fillStyle = "#cccccc";
const background = ctx.rect(1, 0, cvs.width, cvs.height - 10);
ctx.stroke();
ctx.fill();
let index = 0;
function draw() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  fitToContainer(cvs);
  /**
   * set up background color
   */
  drawBackground(redMap[index], "0", blueMap[index]);
  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);

function drawBackground(red, green, blue) {
  ctx.fillStyle = `#${red}${green}${blue}`;
  const background = ctx.rect(0, 0, cvs.width, cvs.height);
  ctx.stroke();
  ctx.fill();
}
