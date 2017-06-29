/**
 * @author Ivaylo Penev
 */

const getNextDay = function (year,month,day) {

    let today = new Date(year,month-1,day);

    let tomorrow = new Date(today.getTime() + (24*60*60*1000));

    return tomorrow.getFullYear() + "-"+ (tomorrow.getMonth() +1) + "-" + tomorrow.getDate();
};

console.log(getNextDay(2016,9,30));