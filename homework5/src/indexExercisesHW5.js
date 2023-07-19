console.log("Exercise 1");
function minNumber(a, b) {
  let min = a;
  if (b < a) {
    min = b;
  }
  return min;
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));
console.log(minNumber(-122, -123));

// _______________________________________________

console.log("Exercise 2");
function evenNumber(a) {
  let noText;
  a % 2 ? (noText = "не") : (noText = "");
  return `${a} - число ${noText}четное`;
}

console.log(evenNumber(4));
console.log(evenNumber(5));

// _______________________________________________


console.log("Exercise 3");
function outSquare(a) {
  console.log(a ** 2);
}

function getSquare(a) {
  return a ** 2;
}

outSquare(3);
console.log(getSquare(4));

// _______________________________________________


console.log("Exercise 4");
function outAge() {
  const age = Number(prompt("Сколько вам лет?"));
  if (age < 0) console.log("Вы ввели неправильное значение");
  else if (age < 13) console.log("Привет, друг!");
  else console.log("Добро пожаловать!");
}

outAge();

// _______________________________________________


console.log("Exercise 5");
function outMult(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b)) || a === "" || b === "") {
    return "Одно или оба значения не являются числом";
  }
  return a * b;
}

console.log(outMult("", NaN));

// _______________________________________________


console.log("Exercise 6");
function getCube(a) {
  if (isNaN(a) || a === "") {
    return "Переданный параметр не является числом";
  }
  return a ** 3;
}

console.log(getCube(""));
console.log(getCube("dfg"));
for (let i = 0; i <= 10; i++) {
  console.log(getCube(i));
}

// _______________________________________________


console.log("Exercise 7");
const Pi = 3.14159;

function getCircleArea() {
  return (Pi * this.radius ** 2) / 2;
}

function getCirclePerimeter(radius) {
  return Pi * this.radius * 2;
}

const circle1 = {
  radius: 3,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

const circle2 = {
  radius: 2,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea().toFixed(2));
console.log(circle1.getPerimeter().toFixed(2));

console.log(circle2.getArea().toFixed(2));
console.log(circle2.getPerimeter().toFixed(2));

// console.log('Exercise 8');

// console.log('Exercise 9');

// console.log('Exercise 10');
