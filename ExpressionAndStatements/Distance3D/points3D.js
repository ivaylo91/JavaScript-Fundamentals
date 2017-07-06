/**
 * @author Ivaylo Penev
 */

const calcDistance = function (input) {

    let x, x1, y, y1, z, z1, dist;

    x = input[0];
    y = input[1];
    z = input[2];
    x1 = input[3];
    y1 = input[4];
    z1 = input[5];

    dist = Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2) + Math.pow((z - z1), 2));

    return dist;
};

console.log(calcDistance([1, 1, 0, 5, 4, 0])); // 5
console.log(calcDistance([3.5, 0, 1, 0, 2, -1])); // 4.5