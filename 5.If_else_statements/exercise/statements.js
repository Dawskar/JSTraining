
function posOrNeg() {
    var userNumber = prompt('Enter in a positive or negative number and see the results');
    getAvg(userNumber);
}

function getAvg(userNumber) {
    if (userNumber > 0) {
        alert("The number is positive");
    }
    else if (userNumber == 0) {
      alert("The number is 0");
    }
    else {
        alert("The number is negative");
    }
}