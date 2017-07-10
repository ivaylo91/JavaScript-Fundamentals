/**
 * @author Ivaylo Penev
 */


const simpleCalculator = function (input) {

    let a, b, operation;

    a = input[0];
    b = input[1];
    operation = input[2];

    switch (operation) {

        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return 'Invalid operation input';

    }
};
console.log(simpleCalculator([2, 4, '*'])); //8