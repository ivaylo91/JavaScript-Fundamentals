/**
 * @author Ivaylo Penev
 */

const calcDistance = function (input) {

    let v1 = input[0];
    let v2 = input[1];
    let t = input[2];

    let diffVkph = Math.abs(v1 - v2);
    let diffVmps = diffVkph / 3.6;
    let dist = diffVmps * t;

    return dist;

};

console.log(calcDistance([0, 60, 3600]).toFixed(0)); //60000
console.log(calcDistance([11, 10, 120])); // 33.333333333333336