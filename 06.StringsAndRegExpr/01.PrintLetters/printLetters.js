/**
 * @author Ivaylo Penev
 */

const printLetters = function (str) {

    for (let i = 0; i < str.length; i++) {

        console.log(`str[${i}]->${str[i]}`);
    }
};
console.log(printLetters("Hello,World!"));