/**
 * @author Ivaylo Penev
 */

const modifyAverage = function (input) {
    let numAsStr = input.toString();
    let sum = sumDigits(numAsStr);

    while (sum / numAsStr.length <= 5) {
        numAsStr += '9';

        sum = sumDigits(numAsStr);
    }
    console.log(numAsStr);

    function sumDigits(numAsStr) {
        "use strict";

        let sum = 0;

        for (let digit of numAsStr) {
            sum += Number(digit);
        }
        return sum;
    }
};
modifyAverage(['101']);