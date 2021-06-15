// Numbers
document.write("<b>all of the data in this section should print out as 'number'</b><br>")
document.write(typeof 9 + "<br>");
document.write(typeof 33.3 + "<br>");
document.write(typeof 4.8e-7 + "<br>");
document.write(typeof Infinity + "<br>");
document.write(typeof NaN + "<br><br>");

// Strings
document.write("<b>all of the data in this section should print out as 'string'</b><br>")
document.write(typeof '' + "<br>");
document.write(typeof 'Greetings' + "<br>");
document.write(typeof '44' + "<br><br>");

// Booleans
document.write("<b>all of the data in this section should print out as 'boolean'</b><br>")
document.write(typeof false + "<br>");
document.write(typeof true + "<br><br>");

// Undefined
document.write("<b>all of the data in this section should print out as 'undefined'</b><br>")
document.write(typeof undefined + "<br>");
document.write(typeof undeclaredVariable + "<br>");
document.write(typeof Null + "<br><br>");
// Null

document.write("<b>thess data points should print out as 'object', even though they aren't all just simple objects</b><br>")
// Objects
document.write(typeof { name: "Marcel", age: 32 } + "<br>");

// Arrays
document.write(typeof [14, 15, 16] + "<br><br>");

// Functions
document.write("<b>this data point should print out as a 'function'</b><br>")
document.write(typeof function () { });

//data type expirementation
var person = {
    firstName: "Marcel",
    lastName: "Williams",
    age: 32,
    eyeColor: "green",
    hasKids: "true",
    isMarried: "true",

};

document.getElementById("people").innerHTML =
    person.firstName + " is " + person.age + " years old.<br> Does he have kids? true or false?<br> " + person.hasKids + " <br>Is he married? true or false? <br>" + person.isMarried;
    //<br> Does he have kids? true or false? " + hasKids + " Is he married? true or false? " + isMarried;