/**
 * @author Ivaylo Penev
 */

const printlines = function (n) {

    let html = '<ul>\n';
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            html += `<li><span style="color: green">${i}</span></li>\n`;
        }
        if (i % 2 !== 0) {
            html += `<li><span style="color: blue">${i}</span></li>\n`;
        }
        html += '</ul>';
    }
    return html;
};
console.log(printlines(10));