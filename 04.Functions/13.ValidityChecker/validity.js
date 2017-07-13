/**
 * @author Ivaylo Penev
 */

const checkCoordinate = function (input) {

    let x1, y1, x2, y2;

    x1 = input[0];
    y1 = input[1];
    x2 = input[2];
    y2 = input[3];

    function distanceBetweenPoints(x1, y1, x2, y2) {
        let deltaX = x1 - x2;
        let deltaY = y1 - y2;
        distance = Math.sqrt(
            Math.pow(deltaX, 2)
            + Math.pow(deltaY, 2));
    }

    function isInt(distance, x1, y1, x2, y2) {
        if (distance % 1 === 0) {
            console.log("{" + x1 + ", " + y1 + "} to {" + x2 + ", " + y2 + "} is valid");
        }
        else {
            console.log("{" + x1 + ", " + y1 + "} to {" + x2 + ", " + y2 + "} is invalid");
        }
    }

    distanceBetweenPoints(x1, y1, 0, 0);
    isInt(distance, x1, y1, 0, 0);

    distanceBetweenPoints(x2, y2, 0, 0);
    isInt(distance, x2, y2, 0, 0);

    distanceBetweenPoints(x1, y1, x2, y2);
    isInt(distance, x1, y1, x2, y2);
};

checkCoordinate([3, 0, 0, 4]);