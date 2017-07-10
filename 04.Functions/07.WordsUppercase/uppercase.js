/**
 * @author Ivaylo Penev
 */

const uppercase = function (str) {

    let words = str.split(/\W+/);

    for (let i = 0; i < words.length - 1; i++) {

        words += ',';

        return words.toUpperCase();
    }
};

console.log(uppercase("Hi, how are you?"));

