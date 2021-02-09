'use strict';
/***
 * Функция находит символы, которые встречаются больше 1 раза
 *
 * @param {String} acc - аккумулятор - строка с повторяющимися буквами
 * @param {String} item - текущая буква
 * @param {Number} idx - текущий номер элемента
 * @param {Array} arr - массив, по которому идет обход
 * @returns {String}
 */

const findRepeatLetters = (acc, item, idx, arr) => arr.slice(0, idx).includes(item) ? acc + item : acc;

/***
 * Функция удаляет символы, которые встречаются больше 1 раза
 *
 * @param {String} str - начальная строка
 * @param {Boolean} entryType - если true, оставить первое вхождение символа. Если false, оставить последнее вхождение символа
 * @returns {String}
 */

const letters = (str, entryType) => { 
    if (typeof(str) !== 'string') {
         return;
    }
    if (entryType === undefined) {
        const repeatLetters = str.split('').reduce(findRepeatLetters, '');
        const deleteRepeatLetters = new RegExp(`[${[...new Set(repeatLetters)].map(letter => letter + '+').join('')}]`,'g');
        return str.replace(deleteRepeatLetters, '');
    }
    return entryType ? [...new Set(str)].join('') : [...new Set([...str].reverse())].reverse().join('');
}
