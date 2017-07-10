/**
 * Created by ivaylo on 7/10/17.
 */

const drawTrinagle = function (n) {


    for (let i = 0; i <= n; i++) {

        console.log('*'.repeat(i));

    }
    for (let i = n - 1; i >= 1; i--) {

        console.log('*'.repeat(i));
    }
};

drawTrinagle(3);