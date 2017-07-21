/**
 * @author Ivaylo Penev
 */

const getNumbers = function (input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (i % 2 !== 0) {

            result.push(Number(input[i]) * 2);
            result.reverse();
        }
    }
    return result.join(' ');
};

console.log(getNumbers([10, 15, 20, 25]));