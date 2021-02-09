'use strict';
/***
 * Функция удаляет символы, которые встречаются больше 1 раза
 *
 * @param {String} str - начальная строка
 * @param {Boolean} deleter - если true, оставить первое вхождение символа. Если false, оставить последнее вхождение символа
 * @returns {String}
 */

const countLetters = strToCount => Object.entries(strToCount.split('').reduce((lttr, idx) => (lttr[idx] = (lttr[idx] || 0) + 1, lttr), {}));

const letters = (str, deleter) => { 
    if (typeof(str) !== 'string') {
         return undefined;
    }
    if (deleter === undefined) {
        return countLetters(str).filter(letterCouter => letterCouter[1] <= 1)
                                .map(letterCouter => letterCouter[0])
                                .join('');
    }
    return deleter ? [...new Set(str)].join('') : [...new Set([...str].reverse())].reverse().join('');
}
