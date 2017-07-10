/**
 * @author Ivaylo Penev
 */

const binaryLogarithm = function (numbers) {

    numbers = numbers.map(Number);

    for (let digit of numbers) {

        if (digit !== 0) {

            console.log(Math.log(digit));
        }
    }
};
binaryLogarithm(['1024', '1048576', '256', '1', '2', '50', '100', 0]);
