## String and Regular Expression Tasks

#### 1. Print Letters

* Write a JS function that prints all the symbols of a string, each on a new line.

* The <b>input</b> comes as a single string argument.

* The <b>output</b> is printed on the console, each letter on a new line.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| 'Hello,World!'| str[0]->H<br>str[1]->e<br>str[2]->l<br>str[3]->l<br>str[4]->o<br>str[5]->,<br>str[6]->W<br>str[7]->o<br>str[8]->r<br>str[9]->l<br>str[10]->d<br>str[11]->!

#### 2.Concatenate Reserved

* Write a JS function that reverses a series of strings and prints them concatenated from last to first.

* The <b>input</b> comes as an array of strings.

* The <b>output</b> is printed on the console. Print all strings concatenated on a single line, starting from the last input
string, going to the first. Reverse each individual string’s letters.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| [&#39;I&#39;, &#39;am&#39;, &#39;student&#39;]| tnedutsmaI|

### 3. Count Occurrences

* Write a JS function that counts how many times a string occurs in a given text. Overlapping strings are allowed.

* The <b>input</b> comes as two string arguments. The first element is the target string and the second element is the text in
which to search for occurrences.

* The <b>output</b> should be a number, printed on the console.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| &#39;the&#39;, &#39;The quick brown fox jumps over the lay dog.&#39;| 1|
|&#39;ma&#39;, &#39;Marine mammal training is the training and caring for marine life<br> such as, dolphins, killer whales, sea lions, walruses, and other marine<br>mammals. It is also a duty of the trainer to do mental and physical<br>exercises to keep the animal healthy and happy.&#39;|7|

#### 4. Extract Text 

* You will be given a text as a string. Write a JS function that extracts and prints only the text that’s surrounded by
parentheses.

* The input comes as a single string argument.

* The output is printed on the console on a single line, in the form of a comma-separated list.

#### Example 

| Input      | Output        |
| -----------|:-------------:|
| &#39;Rakiya (<b>Bulgarian brandy</b>) is self-made liquor (<b>alcoholic drink</b>)&#39;| Bulgarian brandy, alcoholic drink|

#### 5. Aggregate Table
* You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|). Write a JS
function that extracts the names of all towns and produces a sum of the incomes. Note that splitting may result in
empty string elements and the number of spaces may be different in every table.

* The input comes as array of string elements. Each element is one row in a formatted table.

* The output is printed on the console on two lines. On the first line, print a comma-separated list of all towns and on
the second, the sum of all incomes.

#### 6. Restaurant Bill
 
 * You are tasked to write a JS function that receives an array of purchases and their prices and prints all your
   purchases and their total sum.
 
 * The input comes as an array of string elements – the elements on even indexes (0, 2, 4…) are the product names,
   while the elements on odd indexes (1, 3, 5…) are the corresponding prices.

*  The output should be printed on the console - a single sentence containing all products and their total sum in the
   format “You purchased <b>{all products separated by comma + space}</b> for a total sum of <b>{total sum of products}</b>”.
   
#### Example
   
   | Input      | Output        |
   | -----------|:-------------:|
   | [&#39;Beer Zagorka&#39;, &#39;2.65&#39;, &#39;Tripe soup&#39;, &#39;7.80&#39;,&#39;Lasagna&#39;, &#39;5.69&#39;]| You purchased Beer Zagorka, Tripe soup, Lasagna for a total sum of 16.14|
   



