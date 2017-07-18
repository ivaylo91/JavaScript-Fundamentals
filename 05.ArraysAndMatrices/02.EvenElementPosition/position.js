/**
 *  @author Ivaylo Penev
 */


function getElement(input) {
    "use strict";

    let line = ''
    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {

            line += input[i] + ' ';
        }
    }
    return line;
}

console.log(getElement(['20', '30', '40'])); // 20 40
console.log(getElement(['5', '10'])); // 5