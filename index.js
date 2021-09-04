const canvas = document.getElementById("canvas");
const button = document.getElementById("button");
const ctx = canvas.getContext("2d");

let lines = Array(240)
  .fill()
  .map((u) => ({
    yaxis: Math.round(Math.random() * (50 - 20 + 1) + 20),
    height: Math.round(Math.random() * (125 - 50 + 1) + 50),
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
  let line = 0;
  setInterval(() => {
    ctx.fillStyle = "#ff00cc";
    ctx.fillRect(line * 5, lines[line].yaxis, 3, lines[line].height);
    line++;
}, 500);
}

function pause() {
  console.log("pause");
}

function createLines() {
  lines.map((item, i) => {
    ctx.fillStyle = "#63625e";
    ctx.fillRect(i * 5, item.yaxis, 3, item.height);
  });
}
createLines();
