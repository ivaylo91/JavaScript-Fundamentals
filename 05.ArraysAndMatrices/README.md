## Array and Matrices Tasks

#### 1. Sum First and Last Element 

* Write a JS function that calculates and prints the sum of the first and the last elements in an array.

* The <b>input</b> comes as array of string elements holding numbers.

* The <b>output</b> is the return value of your function.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [10,20,30] | 40| 
| [10,15] | 25|

#### 2.Even Position Element

* Write a JS function that finds the elements at even positions in an array.

* The input comes as array of string elements.

* The output is the return value of your function. Collect all elements in a string, separated by space.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| ['20', '30', '40'] | 20 40 | 
| ['5,'10'] | 5|

#### 3. Negative / Positive Numbers

* Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each
negative element at the front of the result and append each positive (or 0) element at the end of the result.

* The input comes as array of number elements.


* The output is printed on the console, each element on a new line.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [7, -2, 8, 9] | -2<br>7<br>8<br>9 | 

#### 4. First and Last K Numbers

* Write a JS function that prints the first k and the last k elements from an array of numbers.

* The input comes as array of number elements. The first element represents the number k, all other elements are
from the array that needs to be processed.

* The output is printed on the console on two lines. On the first line print the first k elements, separated by space. On
the second line print the last k elements, separated by space.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [<b>2</b>, 7, 8, 9] | 7 8 <br>8 9 |

#### 5. Process Odd Numbers 

* You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array,
doubled and in reverse order.

* The <b>input</b> comes as array of number elements.

* The <b>output</b> is printed on the console on a single line, separated by space.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [10, 15, 20, 25] | 50 30 |
| [3, 0, 10, 4, 7, 3] | 6 8 0 |

#### 6. Smallest Two Numbers

* Write a JS function that prints the two smallest elements from an array of numbers.

* The <b>input</b> comes as array of number elements.

* The <b>output</b> is printed on the console on a single line, separated by space.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [30, 15, 50, 5] | 15 5 |    

#### 7. Biggest Element

* Write a JS function that finds the biggest element inside a matrix.

* The <b>input</b> comes as array of arrays, containing number elements (2D matrix of numbers).

* The <b>output</b> is the return value of your function. Find the biggest element and return it.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [[20, 50, 10],<br>[8, 33, 145]] | 145 |   

#### 8.Diagonal Sums

* A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a JS
function that finds the sum at the main and at the secondary diagonals.

* The <b>input</b> comes as array of arrays, containing number elements (2D matrix of numbers).

* The <b>output</b> is printed on the console, on a single line separated by space. First print the sum at the main diagonal,
then the sum at the secondary diagonal.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| [[20, 40]<br>,[10, 60]] | 80 50 |

#### 9.Print an Array with a given Delimiter

* Write a JS function that prints a given array.

* The <b>input</b> comes as array of strings. The last element of the array is the delimiter.

* The <b>output</b> is the same array, printed on the console, each element separated from the others by the given
delimiter.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| One<br>Two<br>Three<br>Four<br>Five<br> - | One-Two-Three-Four-Five|

#### 10. Print every N-th Element from an Array

* Write a JS function that prints every element of an array, on a given step.

* The input comes as array of strings. The last element is N - the step.

* The output is every element on the N-th step starting from the first one. If the step is “3”, you need to print the 1-
st, the 4-th, the 7-th … and so on, until you reach the end of the array. The elements must be printed each on a new
line.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| 5<br>20<br>31<br>4<br>20<br>2 | 5<br>31<br>20|

#### 11. *Add and Remove Elements from Array
* Write a JS function that adds and removes numbers to / from an array. You will receive a command which can
  either be “add” or “remove”.
* The initial number is 1. Each input command should increase that number, regardless of what it is.

* Upon receiving an “add” command you should add the current number to your array.
        
* Upon receiving the “remove” command you should remove the last entered number, currently existent in the array.
       
* The input comes as array of strings. Each element holds a command.
       
* The output is the array itself, with each element printed on a new line. In case of an empty array, just print “Empty”.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| add<br>add<br>remove<br>add<br>add| 1<br>4<br>5|
#### 12. Rotate Array
* Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last
element should become the first, upon rotation.
* The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
* The output is the resulted array after the rotations. The elements should be printed on one line, separated by a
single space.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| 1<br>2<br>3<br>4<br>2| 3<br>4<br>1<br>2|

#### 13. Sort Array By 2 Criteria

* Write a JS function that orders a given array of strings, by length in ascending order as primary criteria, and by
alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
* The input comes as array of strings.
* The output is the ordered array of strings.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| alpha<br>beta<br>gamma| beta<br>alpha<br>gamma|