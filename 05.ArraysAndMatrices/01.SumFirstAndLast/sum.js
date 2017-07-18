/**
 * @author Ivaylo Penev
 */

const sum = function (input) {

    let firstElement = Number(input[0]);

    let length = input.length;

    for (let i = 1; i < length - 1; i++) {

        let lastElement = Number(input[length - i]);

        return firstElement + lastElement;
    }
};

console.log(sum(['10', '20', '30'])); // 40