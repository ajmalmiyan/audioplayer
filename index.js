const canvas = document.getElementById("canvas");
const button = document.getElementById("button");
const ctx = canvas.getContext("2d");

let lines = Array(240)
  .fill()
  .map((u) => ({
    y: Math.round(Math.random() * (50 - 20 + 1) + 20),
    h: Math.round(Math.random() * (125 - 50 + 1) + 50),
  }));
//   console.log(lines)

let count = 1;
button.addEventListener("click", () => {
  if (count % 2 === 1) {
    start();
    button.innerText = "pause";
  } else {
    pause();
    button.innerText = "start";
  }
  count++;
});

function start() {
  console.log("start");
}

function pause() {
  console.log("pause");
}

function createLines() {
  lines.map((item, i) => {
    ctx.fillStyle = "#63625e";
    ctx.fillRect(i * 5, item.y, 3, item.h);
  });
}
createLines();
