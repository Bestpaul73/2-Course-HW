// // Задание 1

console.log("js".toUpperCase());

// // Задание 2

const products = [
  "Хлеб Бородинский",
  "Молоко Молочник",
  "Коровка Молоко",
  "Груша Конференция",
];
const search = "молоко";

let newArr2 = [];

products.forEach((product) => {
  if (product.toLowerCase().startsWith(search.toLowerCase()))
    newArr2.push(product);
});
console.log(newArr2);

// // Задание 3

const num3 = 32.58884;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));

// Задание 4

const arr4 = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr4));
console.log(Math.max(...arr4));

// Задание 5

console.log(Math.round(Math.random() * 10));

// Задание 6

const num6 = +prompt(`Enter any number`);
let arr6 = [];
for (let i = 0; i < Math.floor(num6 / 2); i++) {
  arr6.push(Math.round(Math.random() * num6));
};
console.log(arr6);

// Задание 7

const num7min = +prompt(`Enter 1st number`);
const num7max = +prompt(`Enter 2nd number`);
console.log(Math.round(Math.random() * (num7max-num7min)) + num7min);

// Задание 8

let currentDate8 = new Date();
console.log(currentDate8);

console.log(currentDate8.toDateString());

// Задание 9

let currentDate9 = new Date();

currentDate9.setDate(currentDate9.getDate() + 73);
console.log(currentDate9.toDateString());

// Задание 10

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const ruDate = (currentDate) => {

  let date = currentDate.getDate();
  if (date < 10) (date = '0' + date); 

  let month = months[currentDate.getMonth() - 1];

  let day = days[currentDate.getDay()];

  let hours = currentDate.getHours();
  if (hours < 10) {hours = '0' + hours};

  let mins = currentDate.getMinutes();
  if (mins < 10) {mins = '0' + mins};

  let secs = currentDate.getSeconds();
  if (secs < 10) {secs = '0' + secs};

  console.log(`Дата: ${date} ${month} ${currentDate.getFullYear()} - это ${day}.`);
  console.log(`Время: ${hours}:${mins}:${secs}`);

};

ruDate(currentDate10 = new Date());



// Задание 11

// Задание 12

// Задание 13

// Задание 14

// Задание 15
