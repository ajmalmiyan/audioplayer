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
    // button.innerText = "pause";
    button.style.backgroundImage = "url(https://image.flaticon.com/icons/png/512/61/61180.png)";
  } else {
    pause();
    button.style.backgroundImage = "url(https://www.pinclipart.com/picdir/middle/217-2172073_free-music-icons-play-button-icon-minimalist-clipart.png)";
  }
  count++;
});
let interval;
function start() {
    console.log("afds")
  let line = 0;
  interval = setInterval(() => {
    ctx.fillStyle = "#ff00cc";
    ctx.fillRect(line * 5, lines[line].yaxis, 3, lines[line].height);
    line++;
}, 500);
}

function pause() {
    console.log("aaaaa")
    clearInterval(interval);
}

function createLines() {
  lines.map((item, i) => {
    if (i === 3 || i === 52 || i === 158 || i === 221) {
        ctx.fillStyle = "green";
        ctx.fillRect(i * 5, 0, 3, item.yaxis*2);
        ctx.fillRect(i * 5 - 15, 0, 52, 15);
        ctx.fillStyle = "white";
        if (i === 3) {
          ctx.fillText("Introduction", 0, 10);
        } else if (i === 52) {
          ctx.fillText("Rapport", i * 5 - 15, 10);
        } else if (i === 158) {
          ctx.fillText("Maths", i * 5 - 15, 10);
        } else if (i === 221) {
          ctx.fillText("Referrals", i * 5 - 15, 10);
        }
        ctx.fillStyle = "#63625e";
        ctx.fillRect(i * 5, item.yaxis, 3, item.height);
      }
      else{      
      ctx.fillStyle = "#63625e";
      ctx.fillRect(i * 5, item.yaxis, 3, item.height);
      }
  });
}
createLines();
