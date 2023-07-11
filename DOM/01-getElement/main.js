const div = document.getElementById("toto");

console.log(div);

div.innerText = "Ponchour";
div.innerHTML = "<h1>Saludos</h1>"

div.style.color = "green"

div.style.backgroundColor = "lightblue"

const pArray = document.getElementsByTagName("p");
console.log(pArray);

for(let p of pArray){
    p.style.backgroundColor = "gold"
}

const classes = document.getElementsByClassName("test")

for(let item of classes){
    item.style.color = "lightblue"
}

const goat = document.querySelector(".goat");
console.log(goat);

const link = document.querySelectorAll("nav > ul > li .link")