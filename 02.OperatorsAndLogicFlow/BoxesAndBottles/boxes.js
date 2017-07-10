/**
 * @author Ivaylo Penev
 */

const getBoxes = function (bottles,boxes) {

    return Math.ceil(bottles/boxes);
};
console.log(getBoxes(5,10));//1
console.log(getBoxes(20,5));//4
console.log(getBoxes(15,7));//3