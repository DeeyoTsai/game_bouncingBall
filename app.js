let canvas = document.getElementById("myCanvas");
let canvasHeight = canvas.height;
let canvasWidth = canvas.width;
let ctx = canvas.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 20;
let ySpeed = 20;

function drawCircle() {
  // 球遇到左右邊界，就變更方向
  if (circle_x >= canvasWidth - radius || circle_x <= radius) {
    xSpeed *= -1;
  }
  // 球遇到上下邊界，就變更方向
  if (circle_y >= canvasHeight - radius || circle_y <= radius) {
    ySpeed *= -1;
  }
  // 改變圓的位置
  circle_x += xSpeed;
  circle_y += ySpeed;
  // 每次更新初始化背景
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  // 劃出圓球
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

let game = setInterval(drawCircle, 25);
