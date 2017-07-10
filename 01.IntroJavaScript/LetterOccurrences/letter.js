/**
 * @author Ivaylo Penev
 */

const countLetter = function (str, digit) {

    let counter = 0, i;

    for (i = 0; i < str.length; i++) {

        if (str[i] === digit) {

            counter++;
        }
    }
    return counter;
};
console.log(countLetter('hello', 'l'));