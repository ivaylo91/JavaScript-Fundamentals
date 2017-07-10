/**
 * @author Ivaylo Penev
 */

const checkIsPalindrome = function (str) {

    let length = str.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {

        if (str[i] === str[length - 1 - i]) {

            return true;
        }

        return false;
    }
};

console.log(checkIsPalindrome("haha")); //false
console.log(checkIsPalindrome("racecar")); // true
console.log(checkIsPalindrome("unitinu")); // true