var text = "";
var a;
for (a = 0; a < 15; a++) {
  if (a === 5) { continue; }
  text += "The number is " + a + "<br>";
}
document.getElementById("continue").innerHTML = text;