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