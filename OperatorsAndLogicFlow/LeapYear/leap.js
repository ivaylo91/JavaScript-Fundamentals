/**
 * @author Ivaylo Penev
 */

const isLeap = function (year) {

    if ((year % 4 === 0) && (year % 400 === 0) && (year % 100 !==0)){

        console.log('yes');
    }else{
        console.log('no');
    }
};

isLeap(1999);