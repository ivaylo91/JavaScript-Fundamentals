/**
 * @author Ivaylo Penev
 */

const getNumbers = function (input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (i % 2 !== 0) {

            result.push(input[i] + input[i]);
            result.reverse();
        }
    }
    return result.join(' ');
};

console.log(getNumbers([10, 15, 20, 25]));