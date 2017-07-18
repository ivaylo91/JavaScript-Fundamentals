/**
 * @author Ivaylo Penev
 */


function negativePositive(input) {
    "use strict";

    let resultArr = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] >= 0) {

            resultArr.push(input[i]);
        } else {

            resultArr.unshift(input[i]);
        }
    }
    return resultArr;
}

console.log(negativePositive(['3', '-2', '0', '-1'])); // -1 -2 3 0
console.log(negativePositive(['7', '-2', '8', '9'])); // -2 7 8 9