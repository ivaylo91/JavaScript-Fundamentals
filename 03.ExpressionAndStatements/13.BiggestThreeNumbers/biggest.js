/**
 * @author Ivaylo Penev
 */

const findBiggestNumber = function (input) {

    let a, b, c;

    a = input[0];
    b = input[1];
    c = input[2];


    return Math.max(a, b, c);
};

console.log(findBiggestNumber([5,-2, 7]));
