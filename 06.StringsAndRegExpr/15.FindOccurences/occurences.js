function findOccurrences(str, word) {

    let subStr = str.split(word);

    return str.match(/is/g) || subStr.length;
}

console.log(findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));