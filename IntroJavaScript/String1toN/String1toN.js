/**
 * @author Ivaylo Penev
 */

const print1toN = function ([n]) {

    let str = '';
    for (let i = 1; i <= n; i++) {

        str += i;
    }
    return str;
};
console.log(print1toN(['11'])); //1234567891011