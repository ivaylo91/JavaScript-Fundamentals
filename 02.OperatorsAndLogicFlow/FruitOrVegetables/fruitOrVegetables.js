/**
 * @author Ivaylo Penev
 */

const checkFruitOrVegetables = function (input) {

    switch (input){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grape':
        case 'peach':
            return 'fruit';
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            return 'vegetable';
            break;
        default: return 'unknown';
    }
};

console.log(checkFruitOrVegetables('peach')); //fruit
console.log(checkFruitOrVegetables('cucumber')); // vegetable
console.log(checkFruitOrVegetables('pizza')); // unknown