//const x = function (a, b) { return a * b };
//document.getElementById("expression").innerHTML = x(4, 3);


const show = function (some) {
    document.getElementById("expression").innerHTML = some;
}

const solve = function (x, y, callback) {
    let total = x + y;
    callback(total);
}

solve(15, 3, show);