// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
  if (min >= 0 && max >= 0) {
    if (min >= max) {
      return NaN;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  }
}

getRandomInt(1, 4);

// Функция для проверки максимальной длины строки
function checkLength (stringChecked, maxLength) {
  if (stringChecked.length <= maxLength) {
    return true;
  }
  return false;
}

checkLength('Вот такой комментарий', 140);
