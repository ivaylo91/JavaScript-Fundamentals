/**
 * @author Ivaylo Penev
 */

const drawTriangle = function (n) {

    /* let line = '';

     for (let i = 1; i <= n; i++) {

     line += '$';

     console.log(line);
     }*/

    /*  for (let row = 1; row <= n; row++) {

     console.log(new Array(row + 1).join('$'));
     }

     */

    for (let row = 1; row <= n; row++) {

        console.log('$'.repeat(row));
    }
};

drawTriangle(3);


