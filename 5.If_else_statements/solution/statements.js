
var gradeValue = ['A', 'B', 'C', 'D', 'F'];

function gradeCalculator() {
    var userData = prompt('Enter your numerical  letter grade');
    getAvg(gradeValue, userData);
}

function getAvg(gradeValue, userData) {
    if (userData >= 90) {
        alert("You have recieved a " + gradeValue[0]);
    } else if (userData >= 80) {
        alert("You have recieved a " + gradeValue[1]);
    } else if (userData >= 70) {
        alert("You have recieved a " + gradeValue[2]);
    } else if (userData >= 60) {
        alert("You have recieved a " + gradeValue[3]);
    } else {
        alert("You have recieved a " + gradeValue[4]);
    }

}
