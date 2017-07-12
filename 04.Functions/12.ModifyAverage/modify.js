/**
 * @author Ivaylo Penev
 */

const modifyAverage = function (input) {

    let number = input.toString();
    let sum = 0;
    let avg = 0;
    let numberOfDigit = input.length;

    function sumDigits(number) {
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }
        avg = sum / numberOfDigit;

        checkAverage(avg);
    }

    function checkAverage() {
        if (avg <= 5) {
            number += '9';
            numberOfDigit++;
            sum = 0;
            sumDigits(number);
        } else {
            console.log(number);
        }
    }

    sumDigits(number);
};
modifyAverage(['555']);