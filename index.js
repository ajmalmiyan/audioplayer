const canvas = document.getElementById("canvas");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const ctx = canvas.getContext("2d");

let lines = Array(240)
  .fill()
  .map((u) => ({
    y: Math.round(Math.random() * (50 - 20 + 1) + 20),
    h: Math.round(Math.random() * (125 - 50 + 1) + 50),
  }));
//   console.log(lines)

startButton.addEventListener("click", () => {});
pauseButton.addEventListener("click", () => {});

function start() {}

function pause() {}

function createLines() {
  lines.map((item, i) => {
    ctx.fillStyle = "#63625e";
    ctx.fillRect(i * 5, item.y, 3, item.h);
  });
}
createLines();
