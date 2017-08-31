function captureNumber(str) {


    return str.match(/[0-9]+/g).join(' ');
}

console.log(captureNumber('The300 What is that? I think it’s the 3rd movie. Lets watch it at 22:45'));