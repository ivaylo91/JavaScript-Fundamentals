/**
 * @author Ivaylo Penev
 */

const addProperties = function (input) {

    let obj = {};

    obj[input[0]] = input[1];
    obj[input[2]] = input[3];
    obj[input[4]] = input[5];

    return obj;
};

console.log(addProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
