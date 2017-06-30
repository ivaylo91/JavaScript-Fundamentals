/**
 * @author Ivaylo Penev
 */

const calcTriangleArea = function (a,b,c) {

    let perimeter = (a+b+c)/2;

    let area = Math.sqrt((perimeter*(perimeter-a)*(perimeter-b)*(perimeter-c)));

    return area.toFixed(10);
};

console.log(calcTriangleArea(2,3.5,4)); // 3.4994419198
