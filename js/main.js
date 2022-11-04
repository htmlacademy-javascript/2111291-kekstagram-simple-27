'use strict';

// Функция для создания случайного числа в указанном диапазоне включительно
// Источник функции https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

/* 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
        return NaN;
      } else if (min > max) {
        const newMax = min;
        min = max;
        max = newMax;
      }
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 1));
*/

//Функция проверки минимальной и максимальной длины строки

function commentLength (stroke, maxLength) {
    return stroke.length <= maxLength;
}

//Домащнее задание 4.15. Больше деталей. Кекстаграмм(простой)

const DESCRIPTION = [
  'Самый лучший день!',
  'Есть есть на свете рай это Краснодарский край!', 
  'Море-морюшко', 
  'Отпуск только начинается', 
  'Впереди еще целое лето!', 
  'Море - лучшее успокоительное', 
  'Море волнуется раз', 
  'Немного пасмурно сегодня', 
  'Вкуснейший ужин с любимыми друзьями', 
  'Люблю читать в дороге'
];

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200
};

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createObj = (index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
    comments: getRandomPositiveInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX)
  };
};

const getPictures = () =>
  Array.from({length: 25}, (_, index) => createObj(index + 1));

console.log(getPictures());
