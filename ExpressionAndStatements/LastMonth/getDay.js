/**
 * @author Ivaylo Penev
 */

const getDay = function (input) {

    let day, month, year;

    day = input[0];
    month = input[1];
    year = input[2]

    let lastDayPrevMonth = new Date(year, month - 1, 0).getDate();

    return lastDayPrevMonth;

};

console.log(getDay([17, 3, 2002]));
