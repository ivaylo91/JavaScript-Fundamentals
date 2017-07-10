/**
 * @author Ivaylo Penev
 */

const checkInsideOutside = function (input) {

    let x, y, xMin, xMax, yMin, yMax;

    x = input[0];
    y = input[1];
    xMin = input[2];
    xMax = input[3];
    yMin = input[4];
    yMax = input[5];

    if (x > xMin && x <= xMax && y > yMin && y <= yMax) {

        return 'inside';
    } else {

        return 'outside';
    }

};

console.log(checkInsideOutside([8, -1, 2, 12, -3, 3])); //inside
console.log(checkInsideOutside([12.5, -1, 2, 12, -3, 3]));//outside