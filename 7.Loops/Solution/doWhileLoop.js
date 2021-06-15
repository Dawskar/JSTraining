document.write("<b>Using Do-While Loops </b><br />");
var a = 2;
document.write("This do-while loop is comprised of 2 parts.<br>");
document.write("The <b>'Do'</b> will print only even numbers and the <b>'While'</b> only allows the program to print numbers less than 25.<br>")
do {
    document.write(a + "<br />");
    a = a + 2;
} while (a < 25)