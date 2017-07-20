/**
 *  @author Ivaylo Penev
 */


const getElement = function (input) {


    return input.filter((e, i) => i % 2 === 0).join(' ');

};

console.log(getElement(['20', '30', '40'])); // 20 40
console.log(getElement(['5', '10'])); // 5