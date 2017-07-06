/**
 * @author Ivaylo Penev
 */

const converter = function (grads) {

    grads = Number(grads);

    let degree = 0.9 * grads;

    degree = degree % 360;

    if (degree < 0) {

        degree = degree + 360;
    }

    return degree;
};

console.log(converter(100)); // 90
console.log(converter(850)); // 45
console.log(converter(400)); // 0