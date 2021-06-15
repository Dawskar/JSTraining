var text = "";
var a;
for (a = 0; a < 15; a++) {
  if (a === 10) { break; }
  text += "The number is " + a + "<br>";
}
document.getElementById("break").innerHTML = text;