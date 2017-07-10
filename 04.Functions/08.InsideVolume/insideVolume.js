/**
 * @author Ivaylo Penev
 */

const checkInsideVolume = function (input) {

    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        let x1 = 10, x2 = 50, y1 = 20, y2 = 80, z1 = 15, z2 = 50;

        function inVolume(x, y, z) {
            if (x >= x1 && x <= x2) {
                if (y >= y1 && y <= y2) {
                    if (z >= z1 && z <= z2) {
                        return true;
                    }
                }
            }
            else return false;
        }

        if (inVolume(x, y, z)) {
            console.log("inside");
        }
        else {
            console.log("outside");
        }
    }
};

checkInsideVolume([13.1, 50, 30]); //inside
checkInsideVolume([8, 20, 22]);// outside