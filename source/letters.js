'use strict';
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
        const meetLetters = str.split('').reduce(
            (acc, letter, letterIndex, currentStr) => currentStr.slice(0, letterIndex).includes(letter) ? acc + letter : acc, '');
        const expr = new RegExp(`[${[...new Set(meetLetters)].map(letter => letter + '+').join('')}]`,'g');
        return str.replace(expr, '');
    }
    return entryType ? [...new Set(str)].join('') : [...new Set([...str].reverse())].reverse().join('');
}
