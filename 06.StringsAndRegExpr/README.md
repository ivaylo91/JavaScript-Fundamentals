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
   
#### 7. Usernames
* Write a JS function that parses a list of emails and returns a list of usernames, generated from them. Each username
is composed from the name of the email address, a period and the first letter of every element in the domain name.
See the examples for more information.

* The input comes as array of string elements. Each element is an email address.

* The output is printed on the console on a single line as a comma-formatted list.

#### Example

 | Input      | Output        |
   | -----------|:-------------:|
   | [&#39;peshoo@gmail.com&#39;, &#39;todor_43@mail.dir.bg&#39;, &#39;foo@bar.com&#39;]| peshoo.gc, todor_43.mdb, foo.bc|
   
#### 8. Censorship

* The thought police are at it again and they need your help! Write a JS function that would censor news articles. You
will be given a text and then a list of strings that need to be blacked out from the text. Replace all occurrences of the
strings with dashes of the same length as the string. The strings will not overlap, so order of processing is not
important. See the examples for more information.

* The input comes as two arguments – one string and one array of strings. The first element is the text to scan and the
array contains the strings to be censored.

* The output is the return value of your functions. Save the censored results in a string and return it.

#### Example

 | Input      | Output        |
   | -----------|:-------------:|
   | &#39;roses are red, violets are blue&#39;, [&#39;, violets are&#39;, &#39;red&#39;]|roses are -- -- -- -- -- -- -- -- blue|
   
#### 9. Escaping 
* You will be given a list of strings, containing user-submitted data. Write a JS function that prints an HTML list from
the data. The strings, however, may contain special HTML characters, which is an oft-used method for injection
attacks. To prevent unwanted behavior or harmful content, all special characters need to be replaced with their
encoded counterparts – they will look the same to the user, but will not pose a security risk. Use the following table
to compose your function:

| Raw     |Encoded        |
| -----------|:-------------:|
| < | &lt|
| > | &gt|
| & | &amp   |
| ""| &quot  |

* Use the provided HTML template to visually test your code – if you don’t escape the control characters, formatted
HTML will show up. Don’t care how the HTML template works. Your job is to write the JS escaping function only.

* The input comes as array of string elements.

* The output is the return value of your function. Compose the list in a string and return it. See the examples for
  formatting details.
  
```html
  <!DOCTYPE html>;
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Escaping</title>
  </head>
  <body>
  <div><label for="userInput">Paste test input here:</label></div>
  <div>
  <textarea rows="12" cols="40" id="userInput"</textarea>
  <input type="button" value="Escape"
  onclick="document.getElementById("result").innerHTML =
  htmlEscape(JSON.parse(document.getElementById("userInput").value.replace(/'/g,
  String.fromCharCode(34))));"
  </div>
  <div><label for="result">Results will show up here:</label></div>;
  <div id="result"></div>;
  <script>;
  function htmlEscape(input) {
  // TODO
  }
  </script>;
  </body>
  </html>
```  
#### Example

| Input   | Output        |
| -----------|:-------------:|
| [&#39;&lt;b&gt;unescaped text&lt;/b&gt;&#39;, &#39;normal text&#39;]|&lt;ul&gt;<br>&lt;li&gt;&amp;lt;b&amp;gt;unescaped text&amp;lt;/b&amp;gt;&lt;/li&gt;<br>&lt;li&gt;normal text&lt;/li&gt;<br> &lt;/ul&gt;|
                                    
