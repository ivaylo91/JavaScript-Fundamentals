function countWord(inputLines) {
    "use strict";

    let words = inputLines.split(/[^A-Za-z0-9_]+/).filter(w => w !== '');

    let wordCount = {};

    for (let word of words) {
        wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
    }
    return JSON.stringify(wordCount);
}

console.log(countWord("Far too slow, you're far too slow."));