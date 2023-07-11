const text = document.getElementById('myText')

console.log(text);

text.style.marginTop = "200px"

text.classList.add("gold");
text.classList.remove("gold")
text.classList.toggle('gold')

if(text.classList === "gold"){
    text.classList.remove('gold')
}else{
    text.classList.add("gold")
}