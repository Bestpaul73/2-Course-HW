// const arr = ["a", "b", "c"];
// arr.test = "bad";

// // Prints "a, b, c, bad"
// for (let i in arr) {
//   console.log(arr[i]);
// }


// console.log(arr.length);

// for (let i = 0; i < arr.length; ++i) {
//   console.log(i, arr[i]);
// }

// arr.forEach((el, i) => console.log(i, el));

// for (const el of arr) {
//   console.log(el);
// }

// "use strict";
// let printMessage;
// let age = prompt("Сколько Вам лет?", 18);

// // в зависимости от условия объявляем функцию
// if (age < 18) {

//     printMessage = function() {
//         console.log("Привет!");
//     }

// } else {

//     printMessage = function() {
//         console.log("Здравствуйте!");
//     }

// }

// printMessage();

// function delMsg() {
//   confirm(`Хотите удалить?`) ? alert("Удалено") : alert("Не удалено");
// }


// const user = {
//   name: "Paul",
//   surname: "Palkin",
//   age: 50,
//   city: "Moscow",
//   getInfo() {
//     return(`Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`);
//   }
// }

// console.log(user.getInfo());

function getRectangleArea() {
  return this.width * this.height;
};

function getRectanglePerimeter() {
  return (this.width + this.height) * 2;
}

const square1 = {
  width: 25,
  height: 12,
  getRectangleArea: getRectangleArea,
  getRectanglePerimeter: getRectanglePerimeter,
}

const square2 = {
  width: 20,
  height: 4,
  getRectangleArea: getRectangleArea,
  getRectanglePerimeter: getRectanglePerimeter,
}

console.log(`Периметр прямоугольника = ${square1.getRectanglePerimeter()}`);
console.log(`Периметр прямоугольника = ${square2.getRectanglePerimeter()}`);
console.log(`Площадь прямоугольника = ${square1.getRectangleArea()}`);
console.log(`Площадь прямоугольника = ${square2.getRectangleArea()}`);
