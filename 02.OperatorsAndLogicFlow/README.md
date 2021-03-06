## Operators and Logic Flow Tasks

#### 1. Multiply Numbers

* Write a JS function that calculates the product of two numbers.

* The <b>input</b> comes as two number arguments.

* The <b>output</b> should be the returned as a result of your function.

#### Examples

| Input      | Output        |
| -----------|:-------------:|
| 2<br>3 |6|  

| Input      | Output        |
| -----------|:-------------:|
| 23632.36 <br> -12.3249 |-291266.473764|  

#### 2. Boxes and Bottles

* Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.

* The <b>input</b> comes as two number arguments. The first element is the number of bottles and the second is the capacity of a single box.

* The <b>output</b> should be printed to the console.

#### Examples

| Input      | Output        |
| -----------|:-------------:|
| 20<br>5 |4|  

| Input      | Output        |
| -----------|:-------------:|
| 15 <br> 7 |3|  

| Input      | Output        |
| -----------|:-------------:|
| 5 <br> 10 |1|  

#### 3. Leap Year

* Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.

* The <b>input</b> comes as a single number argument.

* The <b>output</b> should be printed to the console. Print yes if the year is leap and no otherwise.

#### Examples

| Input      | Output        |
| -----------|:-------------:|
| 1999|no|  

| Input      | Output        |
| -----------|:-------------:|
| 2000|yes|  

| Input      | Output        |
| -----------|:-------------:|
| 1900|no|  

#### 4. Circle Area

* Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.

* The input comes as a single number argument.

* The output should be printed to the console on a new line for each result.

#### Examples

 Input      | Output        |
| -----------|:-------------:|
| 5 | 78.53981633974483<br>78.54| 

#### 5. Triangle Area

* Write a JS function that calculates a triangle’s area by its 3 sides.

* The <b>input</b> comes as three number arguments, representing one side of a triangle.

* The <b>output</b> should be printed to the console.

#### Examples

 Input      | Output        |
| -----------|:-------------:|
| 2<br>3.5<br> 4 | 3.4994419198| 

#### 6. Cone

* Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.

* The <b>input</b> comes as two number arguments. The first element is the cone’s radius and the second is its height.

* The <b>output</b> should be printed to the console on a new line for every result.

#### Examples

 Input      | Output        |
| -----------|:-------------:|
| 3<br>5<br> | volume = 47.1239<br>area = 83.2298| 

 Input      | Output        |
| -----------|:-------------:|
| 3.3<br>7.8<br> | volume =122.016 <br>area = 88.9511|

#### 7. Even Or Odd 
* Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).

* The <b>input</b> comes as a single number argument.

* The <b>output</b> should be printed to the console. Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.

#### Examples

 Input      | Output        |
| -----------|:-------------:|
| 5 | odd| 

 Input      | Output        |
| -----------|:-------------:|
| 8 | even| 

 Input      | Output        |
| -----------|:-------------:|
| 1.5 | invalid| 

#### 8. Fruit Or  Vegetables
* Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
  * <b>Fruits</b> are: banana, apple, kiwi, cherry, lemon, grapes, peach
  * <b>Vegetable</b> are: tomato, cucumber, pepper, onion, garlic, parsley
  * All others are unknown

* The <b>input</b> comes as a single string argument, the name of the fruit.

* The <b>output</b> should be printed to the console.

#### Examples

 Input      | Output        |
| -----------|:-------------:|
| banana | fruit| 

 Input      | Output        |
| -----------|:-------------:|
| cucumber| vegetable| 

 Input      | Output        |
| -----------|:-------------:|
| pizza | unknown| 

#### 9. Colorful Number
* Write a JS function to print the numbers from 1 to n. Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information.

* The input comes as a single number argument n.

* The output should be returned as a result of your function in the form of a string.

#### Examples 

 Input      | Output        |
| -----------|:-------------:|
|10  | | 

```html 
   <ul>
     <li><span style='color:green'>1</span></li>
     <li><span style='color:blue'>2</span></li>
     <li><span style='color:green'>3</span></li>
     <li><span style='color:blue'>4</span></li>
     <li><span style='color:green'>5</span></li>
     <li><span style='color:blue'>6</span></li>
     <li><span style='color:green'>7</span></li>
     <li><span style='color:blue'>8</span></li>
     <li><span style='color:green'>9</span></li>
     <li><span style='color:blue'>10</span></li>
   </ul>
```
#### 10. Chess Board
* Write a JS function to print a chessboard of size n X n. See the example for more information.
  
* The <b>input</b> comes as a single number argument n.
 
* The <b>output</b> should be returned as a result of your function in the form of a string.

#### Examples 

 Input      | Output        |
| -----------|:-------------:|
|3  | | 

```html 
   <div class="chessboard">
     <div>
       <span class="black"></span>
       <span class="white"></span>
       <span class="black"></span>
     </div>
     <div>
       <span class="white"></span>
       <span class="black"></span>
       <span class="white"></span>
     </div>
     <div>
       <span class="black"></span>
       <span class="white"></span>
       <span class="black"></span>
     </div>
   </div>
```

#### 11. Binary Logarithm
* Write a JS function that prints the binary logarithm (log2 x) for each number in the input.

* The <b>input</b> comes as an array of number elements.

* The <b>output</b> should be printed to the console, on a new line for each number.

#### 12. Prime Number Checker

* Write a JS function to check if a number is prime (only wholly divisible by itself and one).

* The input comes as a single number argument.

* The output should be the return value of your function. Return true for prime number and false otherwise.

#### Examples 

 Input      | Output        |
| -----------|:-------------:|
| 7 | true| 

 Input      | Output        |
| -----------|:-------------:|
| 8| false| 

 Input      | Output        |
| -----------|:-------------:|
| 81 | false| 