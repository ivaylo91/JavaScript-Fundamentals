/**
 * @author Ivaylo Penev
 */

const imperialUnits = function (input) {

    let n = Number(input);

    let div = Math.floor(input / 12);

    let rem = input % 12;

    return div + "'" + "-" + rem + '"';

};

console.log(imperialUnits(['36'])); //3'-0"