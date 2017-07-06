/**
 * @author Ivaylo Penev
 */

const calcCompound = function (input) {

    let P, i, n, t;

    P = input[0];
    i = input[1] / 100;
    n = input[2];
    t = input[3];

    let F = P * Math.pow((1 + i / n), (n * t));

    return F.toFixed(2);
};
console.log(calcCompound([1500, 4.3, 4, 6])); // 1938.84