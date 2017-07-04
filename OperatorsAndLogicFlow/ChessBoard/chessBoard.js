/**
 * @author Ivaylo Penev
 */

const drawChessBoard = function (n) {

    let board = '<div class="chessboard">\n';

    let color = 'black';

    for (let i = 1; i <= n; i++) {

        board += '<div>\n';

        for (let j = 1; j <= n; j++) {

            if (i % 2 === j % 2) {
                color = 'black';
            } else {
                color = "white";
            }
            board += `<span class="${color}"></span>\n`;
        }
        board += '</div>\n';
    }
    board += '</div>';

    return board;
};
console.log(drawChessBoard(3));