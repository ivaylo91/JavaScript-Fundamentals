/**
 * @author Ivaylo Penev
 */

const filterByAge = function (minAge, [name, age, name1, age1]) {

    let person = {name: name, age: age};
    let person1 = {name: name1, age: age1};

    if (person.age >= minAge) {
        return person;
    }
    if (person1.age >= minAge) {

        return person1;
    }
};

console.log(filterByAge('12', ['Ivan', '15', 'Asen', '9']));