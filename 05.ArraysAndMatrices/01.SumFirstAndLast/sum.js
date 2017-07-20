/**
 * @author Ivaylo Penev
 */

function sumFirstLast(input) {

    "use strict";

    return Number(input[0]) + Number(input[input.length - 1]);
}

console.log(sumFirstLast(['1', '2', '3', '4'])); // 5