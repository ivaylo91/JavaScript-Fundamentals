## JavaScript Function Tasks

### 1.Triangle Of Stars

  * Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look
    at the examples to get an idea.
  
  * The input comes as a single number argument.
  
  *  The output is a series of lines printed on the console, forming a triangle of variable size.
  

#### 2.Square of Stars

  * Write a JS function that outputs a rectangle made of stars with variable size, depending on an input parameter. If
  there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.

  * The input comes as a single number argument.

  * The output is a series of lines printed on the console, forming a rectangle of variable size. 

#### 3. Palindrome

* Write a JS function that checks if an input string is a palindrome.


* The input comes as a single string argument.


* The output is the return value of your function. It should be true if the string is a palindrome and false if it’s not.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| haha | false| 
| racecar | true|

#### 4. Day of Week

* Write a JS function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an
 error message if the string is not recognized.

* The input comes as a single string argument.


* The output should be returned as a result of your program.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| Monday | 1| 

### 5. Functional Calculator

* Write a JS program that receives two variables and an operator and performs a calculation between the variables,
  using the operator. Store the different functions in variables and pass them to your calculator.


* The input comes as three arguments – two numbers, and a string, representing the operator.


* The output should be printed on the console.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| 2,4,'+' | 6 | 

###6. Aggregate Elements

Write a JS program that performs and outputs different operations on an array of elements. Implement the
following operations:

* Sum(a i ) - calculates the sum all elements from the input array

* Sum(1/a i ) - calculates the sum of the inverse values (1/a i ) of all elements from the array

* Concat(a i ) - concatenates the string representations of all elements from the array

The input comes as an array of number elements.

The output should be printed on the console on a new line for each of the operations.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| [1,2,3] | 6<br> 1.8333<br>123 | 


#### 7. *Words Uppercase


* Write a JS program that extracts all words from a passed in string and converts them to upper case. The extracted
words in upper case must be printed back on a single line concatenated by “, “.

* The input comes as a single string argument - the text from which to extract and convert the words.


* The output should be a single line containing the converted string.

#### Examples 

| Input      | Output        |
| -----------|:-------------:|
| &#39;Hi, how are you?&#39; | HI, HOW, ARE, YOU,, |


### 8.Inside Volume

* Write a JS function that determines whether a point is inside the volume, defined by the box,
  shown on the right.

* The input comes as an array of numbers. Each set of 3 elements are the x, y and z coordinates of a
point.

* The output should be printed to the console on a new line for each point. Print inside if the point
 lies inside the volume and outisde otherwise.
 
 #### Examples 
 
 | Input      | Output        |
 | -----------|:-------------:|
 | [8,20,22]| inside |
 | [13.1, 50, 31.5 <br>, 50, 80, 50,<br>-5, 18, 43]| inside<br>inside<br>outside | 
 
### 9. Road Radar
 
* Write a JS function that determines whether a driver is within the speed limit. You will receive his speed and the 
 area where he’s driving. Each area has a different limit: on the motorway the limit is 130 km/h, on the interstate the
 limit is 90, inside a city the limit is 50 and within a residential area the limit is 20 km/h. If the driver is within the
  limits, your function prints nothing. If he’s over the limit however, your function prints the severity of the infraction.
  
* For speeds up to 20 km/h over the limit, he’s speeding; for speeds up to 40 over the limit, the infraction is excessive
  speeding and for anything else, reckless driving.  
 
 * The input comes as an array of elements. The first element is the current speed (as number), the second element is
   the area where the vehicle is driving.
   
 * The output should be printed to the console. Note in certain cases there will be no output. 
 
 #### Example 
 
 | Input      | Output        |
  | -----------|:-------------:|
  | [21, residential]| speeding|
  
 #### 10. Template Format
  
  * Write a JS program that receives data about a quiz and prints it formatted as an XML document. The data comes as
  pairs of question-answer entries. The format of the document should be as follows:
  
  ```xml
<?xml version="1.0" encoding="UTF-8"?>
      
      <quiz>
      
      <question>
      
      {question text}
      
      </question>
      
      <answer>
      
      {answer text}
      
      </answer>
      
      </quiz>
  ```
* The input comes as an array of string elements.

* The output should be printed on the console.  

#### Example

```xml
<?xml version="1.0" encoding="UTF-8" ?>
   
   <quiz>
         
         <question>
         
         Who was the forty-second president of the U.S.A.?
         
         </question>
         
         <answer>
         
         William Jefferson Clinton
         
         </answer>
         
         </quiz>
```
### 11. Cooking Numbers 

Write a JS program that receives a number and a list of five operations. Perform the operations in sequence by
starting with the input number and using the result of every operation as starting point for the next. Print the result
of every operation in order. The operations can be one of the following:

   * chop – divide the number by two

   * dice – square root of number

   * spice – add 1 to number

   * bake – multiply number by 3

   * fillet – subtract 20% from number

The input comes as an array of 6 string elements. The first element is your starting point and must be parsed to a
number. The remaining 5 elements are the names of operations to be performed.

The output should be printed on the console.
 
 #### Example
 
  | Input      | Output        |
  | -----------|:-------------:|
  | [32, chop, chop, chop, chop, chop]| 16<br>8<br>4<br>2<br>1|
  
### 12. Modify Average
  
*  Write a JS program that modifies a number until the average value of all of its digits is higher than 5. In order to
 modify the number, your program should append a 9 to the end of the number, when the average value of all of its
 digits is higher than 5 the program should stop appending. If the number’s average value of all of its digits is already
 higher than 5, no appending should be done.
 
 * The input is a single number.
 
 * The output should consist of a single number - the final modified number which has an average value of all of its
    digits higher than 5. The output should be printed on the console.       
    
  #### Example
  
   | Input      | Output        |
   | -----------|:-------------:|
   | [101]| 1019999| 
   | [5835]|5835|    
   
### 13. Validity Checker 
  
  Write a JS program that receives two points in the format <b>[x1, y1, x2, y2]</b> and checks if the distances between each
  point and the start of the cartesian coordinate system <b>(0, 0)</b> and between the points themselves is valid. A distance
  between two points is considered valid, if it is an integer value. In case a distance is valid write &quot;{x1, y1} to {x2, y2}
   is valid;, in case the distance is invalid write <b>{x1, y1}</b> to <b>{x2, y2}</b> is invalid&quot;.
  
  The order of comparisons should always be first <b>{x1, y1}</b> to <b>{0, 0}</b>, then <b>{x2, y2}</b> to <b>{0, 0}</b> and finally <b>{x1, y1}</b> to <b>{x2,
    y2}</b>.
  
  The input consists of two points given as an array of numbers.
  
  For each comparison print on the output either <b>{x1, y1}</b> to <b>{x2, y2}</b> is valid if the distance between them is valid,
    or <b>{x1, y1}</b> to <b>{x2, y2}</b> is invalid- if it’s invalid.
    
#### Example
 
 | Input      | Output        |
    | -----------|:-------------:|
    | [3,0,0,4]| {3,0} to {0,0} is valid <br> {0,4} to {0,0} is valid <br> {3,0} to {0,4} is valid| 