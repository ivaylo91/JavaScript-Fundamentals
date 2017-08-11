/**
 * @author Ivaylo Penev
 */
const rotate = function (input) {

    let rotateCount = Number(input.pop());

    rotateCount %= input.length;

    for (let i = 0; i < rotateCount; i++) {

        let lastElement = input.pop();

        input.unshift(lastElement);
    }
    return input.join(' ');
};
console.log(rotate(['1', '2', '3', '4', '2']));