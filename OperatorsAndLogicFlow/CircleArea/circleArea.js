/**
 * @author Ivaylo Penev
 */

const calcCircleArea = function (radius) {

    return Math.PI*Math.pow(radius,2);
};

console.log(calcCircleArea(5));
console.log(calcCircleArea(5).toFixed(2));