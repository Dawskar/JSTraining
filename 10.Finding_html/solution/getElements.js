function findItem() {
    var list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("LI")[5].innerHTML = "Olive Oil";
}

const btn = document.querySelector("button[id='change']");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
    const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = randomColor;
}

function addItem(){
    var ul = document.getElementById("shoppingList");
    var item = document.getElementById("item");
    var li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
}

//to be fixed
function removeItem(){
    var ul = document.getElementById("shoppingList");
    var item = document.getElementById("item");
    var listItem = document.getElementById(item.value);
    ul.removeChild(listItem);
}