/**
 * @author Ivaylo Penev
 */

function firstLastK(input) {

    let k = input.shift();

    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(-k).join(' '));
}

firstLastK(['2', '7', '8', '9']);