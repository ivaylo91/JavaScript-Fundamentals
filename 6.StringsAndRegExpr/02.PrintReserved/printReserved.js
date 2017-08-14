/**
 * @author Ivaylo Penev
 */

const printReserved = function (arr) {

    let line = " ";

    for (let i = 0; i < arr.length; i++) {
        line += arr[i];
    }
    return line.split('').reverse().join('');
};
console.log(printReserved(['I', 'am', 'student']));