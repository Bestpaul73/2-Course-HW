// alert('Exercise 1');
for (let i = 0; i < 2; i++) {
  console.log(`Привет`);
}

// alert('Exercise 2');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// alert('Exercise 3');
for (let i = 7; i <= 22; i++) {
    console.log(i);
  }

// alert('Exercise 4');
const obj = {
    'Коля': 200, 
    'Вася': 300, 
    'Петя': 400,
}
for (let employee in obj) {
    console.log(`${employee} - зарплата ${obj[employee]} долларов.`);
}

// alert('Exercise 5');
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n, num);

// alert('Exercise 6');
const firstFriday = Number(prompt(`Какого числа первая пятница в этом месяце?`));
let currentDay = firstFriday;
while (currentDay <= 31) {
    console.log(`Сегодня пятница, ${currentDay} число. Необходимо подготовить отчет.`);
    currentDay += 7;
}

// alert('Exercise 7');

// alert('Exercise 8');

// alert('Exercise 9');

// alert('Exercise 10');
