/**
 * @author Ivaylo Penev
 */

const getDistanceOfPoints = function (x1,y1,x2,y2) {

    let pairA = {x:x1, y:y1};
    let pairB = {x:x2, y:y2};

    let distanceX = Math.pow(pairA.x - pairB.x,2);
    let distanceY = Math.pow(pairA.y - pairB.y,2);

    return Math.sqrt(distanceX + distanceY);
};

console.log(getDistanceOfPoints(2,4,5,0)); // 5
console.log(getDistanceOfPoints(2.34, 15.66, -13.55, -2.9985)); // 24.50778901186315