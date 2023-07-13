const btn = document.getElementById('btn')
const box = document.getElementById('box')

let isVisible = true

btn.addEventListener("click", function(){
    if(isVisible){
        box.style.display = "none";
        isVisible = false
    }else{
        box.style.display = "block";    
    }
})

box.addEventListener("copy", messageAfterCopy);

function messageAfterCopy(event){
    console.log(event.target)
    box.removeEventListener('copy', messageAfterCopy);
}