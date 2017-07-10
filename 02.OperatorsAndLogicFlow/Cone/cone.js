/**
 * @author Ivaylo Penev
 */

const calcCone = function (radius,height) {

    let area = Math.PI*radius*(radius+Math.sqrt(Math.pow(height,2)+Math.pow(radius,2)));

    let  volume = (Math.PI* Math.pow(radius,2))*height/3;

    return 'area =' + area.toFixed(4) + '\n' + 'volume='+ volume.toFixed(4);
};

console.log(calcCone(3,5)); // 83.2298 , 47.1239
console.log(calcCone(3.3,7.8)); // 122.0159 , 889511
