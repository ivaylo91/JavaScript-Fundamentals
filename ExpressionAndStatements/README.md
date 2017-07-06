## Exercises: Data Types, Expressions, Statements

#### 1. Hello, JavaScript!

* Write a JS function that can receive a name as input and print a greeting to the console.

* The <b>input</b> comes as a single string that is the name of the person.

* The <b>output</b> should be printed to the console.

##### Examples

| Input      | Output        |
| -----------|:-------------:|
| Pesho | Hello, Pesho, I am JavaScript!| 
| Bill Gates | Hello, Bill Gates, I am JavaScript!|

#### 2. Area and Perimeter

* Write a JS function that calculates the area and perimeter of a rectangle by given two sides.

* The <b>input</b> comes as 2 numbers that are the lengths of the 2 sides of the rectangle (sideA and sideB)

* The <b>output</b> should be printed to the console on two lines.

##### Examples 

| Input      | Output        |
| -----------|:-------------:|
| 2 2 | 4<br> 8 | 
|1 3 |  3<br> 8|
|2.5 3.14 | 7.85<br> 11.28|

#### 3. Distance over Time

* Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a JS function that calculates the distance between the two object at the end of the period.

* The <b>input</b> comes as array of numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.

* The <b>output</b> should be printed to the console. Calculate the distance in met.

##### Examples 

| Input      | Output        |
| -----------|:-------------:|
| [0, 60, 3600] | 60000 | 
| [11, 10, 120] | 33.33333333333337|
|  [5, -5, 40] | 111.11111111111111|

#### 4. Distance in 3D

* Write a JS function that calculates the distance between the two points in 3D by given coordinates.

* The <b>input</b> comes as an array of numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.

* The <b> output</b> should be printed to the console.

##### Examples 

| Input      | Output        |
| -----------|:-------------:|
| [1, 1, 0, 5, 4, 0] | 5 | 
| [3.5, 0, 1, 0, 2, -1] | 4.5|

#### 5. Grads to Degrees

* Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. Grads are rather unwieldy though, so you need to write a JS function that converts from grads to degrees. In addition, your program needs to constrain the results within the range , so if you arrive at a value like -15°, it needs to be converted to 345° and 420° becomes 60°.

* The <b>input</b> comes as single number.

* The <b>output</b> should be printed to the console.

#### Examples

| Input      | Output        |
| -----------|:-------------:|
| 100 | 90 | 
| 400 | 0|

#### Hints 

You can use the remainder (modulo) operator to get a value that is cyclic – it returns the same result for all input values with offset equal to the second parameter. For instance, n % 10 will return 3 with values for n 3, 13, 23, 243, 1003 and so on.

#### 6. Compound Interest

* Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, interest rate, compounding frequency and overall length.

* The input comes as an array of numbers. The first value is the principal sum, the second is the interest rate in percent, the third is the compounding period in months and the final value is the total timespan, given in years.

* The output should be printed to the console, with two decimal places.

#### Examples 

| Input      | Output        |
| -----------|:-------------:|
| [1500, 4.3, 4, 6] | 1938.84 | 

#### 7. Rounding
* Write a JS function that rounds numbers to specific precision.

* The <b>input</b> comes as an array of two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.

* The <b>output</b> should be printed to the console. Do not print insignificant decimals.

#### Examples 

| Input      | Output        |
| -----------|:-------------:|
| [3.1415926535897932384626433832795, 2]| 3.14 | 

