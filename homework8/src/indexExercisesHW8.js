// Задание 1

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

const compareFunction = (a, b) => {
  return a.age - b.age;
};

console.log(people.sort(compareFunction));

// Задание 2

function isPositive(num) {
  return num >= 0;
}

function isMale(item) {
  return item.gender === "male";
}

function filter(arr, ruleFunction) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) output.push(arr[i]);
  }

  return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3

const timer = (deadline) => {
  let myDate;

  const interval = setInterval(() => {
    myDate = new Date();
    console.log(myDate);
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }, deadline * 1000);
};

timer(30);

// Задание 4

function delayForSecond4(callback) {
setTimeout(callback, 1000);
}

delayForSecond4(function () {
  console.log("Привет, Вася!");
});

// Задание 5

function delayForSecond5(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond5((item) => {
  return sayHi("Глеб");
});

// Задание 6

// Задание 7

// Задание 8

// Задание 9

// Задание 10

// Задание 11

// Задание 12

// Задание 13

// Задание 14

// Задание 15
