/**
 * @author Ivaylo Penev
 */

const getNumbers = function (input) {

    /*    let result = [];

        for (let i = 0; i < input.length; i++) {

            if (i % 2 !== 0) {

                result.push(Number(input[i]) * 2);
                result.reverse();
            }
        }
        return result.join(' ');*/

    let result = input.filter((e, i) => i % 2 !== 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');

    return result;
};

console.log(getNumbers([10, 15, 20, 25])); // 50 30
console.log(getNumbers([3, 0, 10, 4, 7, 3]));  // 6 8 0