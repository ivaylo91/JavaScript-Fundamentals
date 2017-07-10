/**
 * @author Ivaylo Penev
 */

const aggregateElements = function (input) {

    let sum = 0;
    let concat = '';
    let inverseSum = 0;

    for (let i = 0; i < input.length; i++) {

        sum += input[i];
        concat += input[i];
        inverseSum += 1 / input[i];
    }


    return sum + '\n' + inverseSum.toFixed(4) + '\n' + concat;

};

console.log(aggregateElements([1, 2, 3]));
