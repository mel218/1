let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#88ffa0";
context.fillStyle = "#8898ff";
context.fillRect(300, 0, 100, 200);
context.fillStyle = "red";
context.fillRect(100, 500, 100, 100)
context.arc(700, 100, 50, 0, Math.PI * 2, false);

context.arc(500, 100, 50, 0, Math.PI * 2, false);
context.fill()
context.stroke();

context.fillStyle = "#9888ff";
context.arc(700, 100, 50, 0, Math.PI * 2, false);
context.fill()

context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 20;
context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();


context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 2;
context.arc(100, 300, 50, 0, Math.PI * 2, false);
context.stroke();
// Метод stroke вызывается для завершения рисования линии с помощью lineTo ,
// а также для обводки контуром фигур, нарисованных, к примеру, через метод rect .
context.closePath();

context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 2;
context.arc(100, 400, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(75, 50);
context.lineTo(100, 75);
context.lineTo(100, 25);
context.fill();