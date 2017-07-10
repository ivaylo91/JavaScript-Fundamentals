/**
 * @author Ivaylo Penev
 */

const checkEvenOrOdd = function (input) {
    let number = Number(input); // parse input to Number

    if (number % 2 === 0) {
        return 'even';
    } else if (number % 2 === Math.round(number % 2)) {

        return 'odd';
    } else {
        return 'invalid';
    }

};

console.log(checkEvenOrOdd(5)); //odd
console.log(checkEvenOrOdd(8));//even
console.log(checkEvenOrOdd(1.5)); //invalid