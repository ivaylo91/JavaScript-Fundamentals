/**
 *  @author Ivaylo Penev
 */


function getElement(input) {
    "use strict";

    console.log(input.filter((e, i) => i % 2 === 0).join(' '));

}

getElement(['20', '30', '40']); // 20 40
getElement(['5', '10']); // 5