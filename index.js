const canvas = document.getElementById("canvas");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const ctx = canvas.getContext("2d");

let lines = Array(60)
  .fill()
  .map(() => Math.round(Math.random() * (100 - 20 + 1) + 20));
console.log(lines);


startButton.addEventListener("click", () => {});
pauseButton.addEventListener("click", () => {});

function start() {}

function pause() {}

function createLines() {}
createLines();
