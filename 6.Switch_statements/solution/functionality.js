function addition(a, b) {
    return (a + b);
}

function subtraction(a, b) {
    return (a - b);
}

function multiplication(a, b) {
    return (a * b);
}

function division(a, b) {
    return (a / b);
}

function calculate() {
    var x = parseFloat(document.getElementById("number1").value);
    var y = document.getElementById("symbol").value;
    var z = parseFloat(document.getElementById("number2").value);


    switch (y) {
        case '0':
            w = addition(x, z);
            break;

        case '1':
            w = subtraction(x, z);
            break;

        case '2':
            w = multiplication(x, z);
            break;

        case '3':
            w = division(x, z);
            break;

        default:
            w = "Don't really know..";
    }

    document.getElementById("answer").value = w;
}