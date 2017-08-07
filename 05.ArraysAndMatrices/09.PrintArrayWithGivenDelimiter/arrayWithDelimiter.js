function printArrayWithDelimiter(input) {
    "use strict";

    let array = [];
    let delimiter = input[input.length - 1];
    for (let i = 0; i < input.length - 1; i++) {

        array.push(input[i]);
    }
    return array.join(delimiter);
}

console.log(printArrayWithDelimiter(["One", "Two", "Three", "Four", "Five", "-"]));