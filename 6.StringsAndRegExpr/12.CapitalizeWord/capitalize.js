function capitalize(str) {
    "use strict";

    let splitStr = str.toLowerCase().split(' ');

    for (let i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ')
}

console.log(capitalize('Capitalize these words'));