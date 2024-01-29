// Получаем элемент canvas из документа
let canvas = document.getElementById("canvas");

// Получаем контекст рисования 2D для элемента canvas
let context = canvas.getContext("2d");

// Получаем высоту и ширину окна браузера
var window_height = window.innerHeight;
var window_width = window.innerWidth;

// Устанавливаем ширину и высоту canvas равными ширине и высоте окна
canvas.width = window_width;
canvas.height = window_height;

// Устанавливаем цвет фона canvas
canvas.style.background = "#ff8";

// Рисуем прямоугольник с координатами (300, 0) и размерами 100x200
context.fillRect(300, 0, 100, 200);

// Устанавливаем цвет заливки для следующих фигур
context.fillStyle = "red";

// Рисуем прямоугольник с координатами (100, 500) и размерами 100x100
context.fillRect(100, 500, 100, 100);

// Начинаем новый путь для рисования
context.beginPath();

// Устанавливаем цвет линии
context.strokeStyle = "blue";

// Устанавливаем толщину линии
context.lineWidth = 20;

// Рисуем дугу с центром в (100, 100), радиусом 50, начиная с угла 0 и заканчивая углом Math.PI * 2 (полный круг)
context.arc(100, 100, 50, 0, Math.PI * 2, false);

// Рисуем контур дуги
context.stroke();

// Заканчиваем путь
context.closePath();
