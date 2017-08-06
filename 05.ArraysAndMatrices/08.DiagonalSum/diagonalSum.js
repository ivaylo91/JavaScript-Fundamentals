/**
 * @author Ivaylo Penev
 */

function diagonalSums(matrix) {

    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
   return mainSum + ' ' + secondarySum;
}

console.log(diagonalSums([[20, 40], [10, 60]]));