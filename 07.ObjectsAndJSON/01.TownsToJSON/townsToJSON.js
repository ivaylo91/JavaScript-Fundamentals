function townsToJSON(strArr) {

    strArr.shift();

    let towns = [];

    for (let row of strArr) {
        let townTokens = row.split('|').filter(e => e !== ' ').map(e => e.trim());

        let town = {
            Town: townTokens[1],
            Latitude: Number(townTokens[2]),
            Longitude: Number(townTokens[3])
        };

        towns.push(town);
    }
    return JSON.stringify(towns);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']));