/**
 * @author Ivaylo Penev
 */

const binToDec = function (input) {

    let number = Number(input);

    return parseInt(number, 2);
};

console.log(binToDec('00001001'));
