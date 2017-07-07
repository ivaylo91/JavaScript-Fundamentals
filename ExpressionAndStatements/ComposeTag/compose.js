/**
 * @author Ivaylo Penev
 */

const composeElement = function (input) {

    let src, alt;

    src = input[0];
    alt = input[1];


    return `<img src="${src} alt="${alt}">`;

};

console.log(composeElement(['smiley.gif', 'Smiley Face']));