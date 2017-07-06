/**
 * @author Ivaylo Penev
 */

const roundNumber = function (input) {

    let n, percision;

    n = Number(input[0]);
    percision = Number(input[1]);

    if (percision > 15) {
        percision = 15;
    }
    return n.toFixed(percision);
};
console.log(roundNumber([3.1415926535897932384626433832795, 2])); //3.14
