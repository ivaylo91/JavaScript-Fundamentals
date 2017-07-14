/**
 * @author Ivaylo Penev
 */

const treasureLocator = function (input) {

    for (let i = 0; i < input.length - 1; i += 2) {

        let x = Number(input[i]);
        let y = Number(input[i + 1]);

        location(x, y);
    }
    function location(x, y) {

        if ((x >= 1 && x <= 3) && (y >= 1 && y <= 3)) {
            console.log("Tivalu");
        } else if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            console.log("Tokelau");
        }
        else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            console.log("Samoa");
        }
        else if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            console.log("Tonga");
        }
        else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            console.log("Cook");
        }
        else console.log("On the bottom of the ocean");
    }
};

treasureLocator(['4', '2', '1.5', '6.5', '1', '3']); // On The bottom of Ocean,Tonga,Tivalu
treasureLocator(['6', '4']); // samoa
