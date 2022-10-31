'use strict';

// Функция для создания случайного числа в указанном диапазоне включительно
// Источник функции https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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

//Функция проверки минимальной и максимальной длины строки

function commentLength (stroke, maxLength) {
    return stroke.length <= maxLength;
}

