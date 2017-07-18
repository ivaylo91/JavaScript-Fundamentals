/**
 *  @author Ivaylo Penev
 */


function getElement(input) {
    "use strict";

    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {

            console.log(input[i]);
        }
    }
}

getElement(['20', '30', '40']); // 20 40
getElement(['5', '10']); // 5