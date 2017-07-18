/**
 * @author Ivaylo Penev
 */

function firstLastK(input) {

    let k = Number(input[0]);

    function firstK(arr) {

        let resultArr = [];

        for (let i = 1; i <= k; i++) {

            resultArr.push(arr[i]);
        }
        return resultArr.toString();
    }

    function lastK(arr) {

        let resultArr = [];

        for (let i = arr.length - k; i < arr.length; i++) {

            resultArr.push(arr[i]);
        }

        return resultArr.toString();
    }

    console.log(firstK(input));
    console.log(lastK(input));
}

firstLastK(['2', '7', '8', '9']);