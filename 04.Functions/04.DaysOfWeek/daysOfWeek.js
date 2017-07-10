/**
 * @author Ivaylo Penev
 */


const printNumberOfDay = function (day) {

    switch (day) {

        case 'Monday':
            return 1;
            break;
        case 'Tuesday':
            return 2;
            break;
        case 'Wednesday':
            return 3;
            break;
        case 'Thursday':
            return 4;
            break;

        case 'Friday':
            return 5;
            break;
        case 'Saturday':
            return 6;
            break;
        case 'Sunday':
            return 7;
            break;
        default:
            return 'Invalid input !!!';
    }
};

console.log(printNumberOfDay('Monday')); //1
console.log(printNumberOfDay('Friday')); //5
