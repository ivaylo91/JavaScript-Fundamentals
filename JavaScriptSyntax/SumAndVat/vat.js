/**
 * @author Ivaylo Penev
 */

const calculate = function (input) {

    let sum = 0;

    for (let num of input) {
        sum += num;
    }

    console.log(`sum=${sum.toFixed(1)}`); //7.3
    console.log(`VAT=${sum * 0.2.toFixed(2)}`); // 1.46
    console.log(`total=${sum * 1.20.toFixed(2)}`); // 8.76
};

calculate([1.20, 2.60, 3.50]);