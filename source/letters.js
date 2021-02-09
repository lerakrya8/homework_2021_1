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
        return str.replace(new RegExp(
            `[${
                [...new Set(str.split('').reduce(
                (meetLetters, letter, letterIndex, currentStr) => currentStr.slice(0, letterIndex).includes(letter) ? meetLetters + letter :
                 meetLetters, ''))].map(letter => letter + '+').join('')
              }]`,
        'g'), '');
    }
    return entryType ? [...new Set(str)].join('') : [...new Set([...str].reverse())].reverse().join('');
}
