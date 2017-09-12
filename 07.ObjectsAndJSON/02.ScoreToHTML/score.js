function scoreToHtml(json) {

    let html = '<table>\n';
    html += '<tr><th>name</th><th>score</th></tr>';
    let scores = JSON.parse(json);

    for (let score of  scores) {
        html += '<tr>';

        html += `<td>${score.name}</td>`;
        html += `<td>${score.score}</td>`;

        html += '</tr>\n';
    }
    html += '</table>';

    return html;
}

console.log(scoreToHtml('[{"name": "Pesho", "score": 479}, {"name": "Gosho", "score": 205}]'));