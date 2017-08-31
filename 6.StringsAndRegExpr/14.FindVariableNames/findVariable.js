function findVariableName(str) {

    return str.match(/\b_{1}[A-Za-z0-9]+\b/g).join(',');
}

console.log(findVariableName('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));