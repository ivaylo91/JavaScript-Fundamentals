/**
 * @author Ivaylo Penev
 */

const calcRectangle = function (a, b) {

    let area, perimeter;

    area = a * b;
    perimeter = 2 * (a + b);

    return area.toFixed(2) + '\n' + perimeter.toFixed(2);
};

console.log(calcRectangle(2, 2));
console.log(calcRectangle(1, 3));
console.log(calcRectangle(2.5, 3.14));
