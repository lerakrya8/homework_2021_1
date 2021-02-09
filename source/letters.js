'use strict';
/***
 * Function removes characters from a string that occur more than once
 *
 * @param {String} str - initial string
 * @param {Boolean} deleter - if it`s true, keep the first occurrence of characters. If it`s false is the last
 * @returns {String}
 */

const letters = (str, deleter) => { 
    if (deleter === undefined) {
        return str.replace(new RegExp(`[${[...new Set(str.split('')
                                                         .reduce((acc, el, i, ar) => ar.slice(0, i).includes(el) ? acc + el : acc, ''))]
                   .map(el => el + '+').join('')}]`, 'g'), '')
    }
    return deleter ? [...new Set(str)].join('') : [...new Set([...str].reverse())].reverse().join('')
}
