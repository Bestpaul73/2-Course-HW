function playGameSeasons() {
  let monthNumber;
  let repeatGame = true;

  do {
    monthNumber = Number(
      prompt(
        "Введите номер месяца (от 1 до 12) и вы узнаете, к какому времени года он относится:"
      )
    );
    if (monthNumber === undefined) {
      break;
    }
    if (
      isNaN(monthNumber) ||
      monthNumber === "" ||
      monthNumber < 1 ||
      monthNumber > 12
    ) {
      alert("Вы ввели некорректное значение. Попробуйте еще раз.");
      continue;
    }
    switch (monthNumber) {
      case 1:
      case 2:
      case 12:
        alert(`Winter`);
        break;
      case 3:
      case 4:
      case 5:
        alert(`Spring`);
        break;
      case 6:
      case 7:
      case 8:
        alert(`Summer`);
        break;
      case 9:
      case 10:
      case 11:
        alert(`Autumn`);
        break;
      default:
        break;
    }

    repeatGame = confirm("Желаете сыграть еще раз?");
  } while (repeatGame);
}

function playGameFruits() {
  const fruits = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  fruits.sort(() => Math.random() - 0.5);
  alert(`Запомни слова: ${fruits}`);

  const fruitsFirst = String(prompt(`Какое было первое слово?`).toLowerCase());
  const fruitsLast = String(prompt(`Какое было последнее слово?`).toLowerCase());

  if (
    fruitsFirst === fruits[0].toLowerCase() &&
    fruitsLast === fruits[fruits.length - 1].toLowerCase()
  ) {
    alert(`Угадал`);
  } else if (fruitsFirst === fruits[0].toLowerCase()) {
    alert(`Вы были близки к победе!`);
  } else if (
    fruitsLast === fruits[fruits.length - 1].toLowerCase()
  ) {
    alert(`Вы были близки к победе!`);
  } else {
    alert(`Не угадал`);
  }
}
