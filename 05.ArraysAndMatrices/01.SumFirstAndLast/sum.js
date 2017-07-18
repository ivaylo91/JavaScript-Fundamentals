/**
 * @author Ivaylo Penev
 */

const sum = function (input) {

    let firstElement = Number(input[0]);

    let length = input.length;

    for (let i = 1; i < length; i++) {

        let lastElement = Number(input[length - i]);

        return firstElement + lastElement;
    }
};

console.log(sum(['10', '20', '30'])); // 40
console.log(sum(['10', '15'])); // 25