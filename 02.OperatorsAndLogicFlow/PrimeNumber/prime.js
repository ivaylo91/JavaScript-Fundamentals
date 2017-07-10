/**
 * @author Ivaylo Penev
 */

const checkIsPrime = function (n) {

    let number = Number(n);

    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {

        if (number % i === 0) {

            return false;
        }
    }
    return true;
};

console.log(checkIsPrime(7)); //true
console.log(checkIsPrime(8)); //false
console.log(checkIsPrime(81)); //false