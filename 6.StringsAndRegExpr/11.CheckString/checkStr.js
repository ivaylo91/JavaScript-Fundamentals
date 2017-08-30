function checkString(str, subString) {

    if (str.startsWith(subString)) {
        return true;
    } else {
        return false;
    }
};
console.log(checkString("How do you feel", 'How'));