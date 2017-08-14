const extractText = function (text) {
    let open = text.indexOf('(');
    let close = text.indexOf(')');
    let result = [];
    while (open !== -1) {
        result.push(text.substring(open + 1, close));

        open = text.indexOf('(', close + 1);
        close = text.indexOf(')', close + 1);
    }
    return result.toString();
};
console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));