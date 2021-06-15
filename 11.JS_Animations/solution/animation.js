var carObject = null;

function init() {
    carObject = document.getElementById('car');
    carObject.style.position = 'relative';
    carObject.style.left = '0px';
}

function moveRight() {
    carObject.style.left = parseInt(carObject.style.left) + 10 + 'px';
}

window.onload = init;

var carObject = null;
var animate;

function init() {
    carObject = document.getElementById('car');
    carObject.style.position = 'relative';
    carObject.style.left = '0px';
}
function automaticRight() {
    carObject.style.left = parseInt(carObject.style.left) + 10 + 'px';
    animate = setTimeout(automaticRight, 30);  //setTimeout to run the automaticRight function every 30 miliseconds after the gas button is pressed
}

function rapidRight() {
    carObject.style.left = parseInt(carObject.style.left) + 10 + 'px';
    animate = setInterval(rapidRight, 1000);  //setTimeout to run the automaticRight function every 30 miliseconds after the gas button is pressed
}

function stop() {
    clearTimeout(animate);
    carObject.style.left = '0px';
}

window.onload = init;