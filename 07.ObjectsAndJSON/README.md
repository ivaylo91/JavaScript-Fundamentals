## Object and JSON 

#### 1. Towns to JSON

* You’re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each
string represents a row of a table, with values on the row encompassed by pipes &quot;|&quot; and optionally spaces. The
table will consist of exactly 3 columns “Town”, “Latitude” and “Longitude”. The latitude and longitude columns will
always contain valid numbers. Check the examples to get a better understanding of your task.

* The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from
the table.

* The output should be printed on the console – for each entry row in the input print the object representing it.

#### Examples 

##### Input

```javascript
    ['|Town|Latitude|Longtitude|','|Sofia|42.696552|23.32601|','|Beijing|39.913818|116.363625']
```
##### Output

```javascript
    [{"Town"":""Sofia","Latitude":42.69,"Longitude&quot":23.32},
    {"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
```

#### 2. Score To HTML 

* You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied
objects. The table should have 2 columns &quot;name&quot; and &quot;score&quot;, each object in the array will also have these keys.
Any text elements must also be escaped in order to ensure no dangerous code can be passed.
You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.

* The input comes as a single string argument – the array of objects as a JSON.

* The output should be printed on the console – a table with 2 columns - &quot;name&quot; and &quot;score&quot;, containing the values
from the objects as rows.

#### Examples

##### Input

```javascript
    [{"name":"Pesho","score":479},{"name":"Gosho","score":205}]
``` 

##### Output
```html
   <table>
   <tr><th>name</th><th>score</th></tr>
   <tr><td>Pesho</td><td>479</td></tr>
   <tr><td>Gosho</td><td>205</td></tr>
   </table>
```

#### 3. Sum By Town 

* You’re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings
representing towns and their incomes, every even index will be a town and every odd index will be an income
belonging to that town. Create an object that will hold all the towns as keys and their total income (the sum of their
incomes) as values to those keys and print it as a JSON.

* The input comes as an array of strings - each even index is the name of a town and each odd index is an income
belonging to that town.

* The output should be printed on the console - JSON representation of the object containing all towns and their total
incomes.

#### Example

| Input      | Output        |
| -----------|:-------------:|
| Sofia <br> 20 <br> Varna <br> 3 <br> Sofia<br> 5<br> Varna<br> 4|{"Sofia": 25, "Varna":7 |

#### 4. Word Count

* You are tasked to count the number of words in a text using an object as an associative array, any combination of
letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as
properties - the key being the word and the value being the amount of times the word is contained in the text.

* The input comes as an array of strings containing one entry - the text whose words should be counted. The text may
consist of more than one sentence.

* The output should be printed on the console - the JSON representation of the object containing the words.

#### Example

| Input      | Output        |
| -----------|:-------------:|
|Far too slow, you&#39;re far too slow.|{"Far": 1, "too":2, "slow": 2,"you": 1,'re':1,"far":1} |
