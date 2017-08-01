function getSmallestNumbers(input) {
    "use strict";

    for (let i = 1; i <= input.length - 1; i++) {

        let max = input[0];

        if (max >= input[i]) {

            console.log(input[i]);
        }
    }
}

getSmallestNumbers([30, 15, 50, 5]); // 15 5
getSmallestNumbers([3, 0, 10, 4, 7, 3]); // 0 3