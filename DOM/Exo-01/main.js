const datas = [
    {
        "src" : "images/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert"
    },
    {
        "src" : "images/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures"
    },
    {
        "src" : "images/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette"
    },
    {
        "src" : "images/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux"
    },
    {
        "src" : "images/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diable rouge"
    },
    {
        "src" : "images/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose"
    }
];

const divMain = document.createElement('div');
document.body.appendChild(divMain);
divMain.setAttribute("id", "divMain");

const title = document.createElement('h1');
divMain.appendChild(title);
title.setAttribute('id', 'title');
title.textContent = "Galerie"

const divArray = document.createElement('div');
divMain.appendChild(divArray);
divArray.setAttribute("id", "divArray");

const divImg = document.createElement('div');
divMain.appendChild(divImg);
divImg.setAttribute("id", "divImg");

for(let elem of datas){
    const monster = document.createElement('img');
    monster.src = elem.src;
    monster.title = elem.title;
    monster.alt = elem.alt;
    monster.setAttribute('class', 'min')
    monster.addEventListener('click',displayImg)
    divArray.appendChild(monster);
    console.log(monster);
}

function displayImg(elem){
    // remplace le contenu de la div par "" avant d'y ajouter le contenu souhaité
    divImg.innerHTML="";
    let name = document.createElement('h2')
    console.log(elem.target.title);
    name.textContent = elem.target.title;
    let LargeMonster = document.createElement('img');
    let eraseBtn = document.createElement('button');
    eraseBtn.addEventListener('click',function(){
        document.getElementById('divImg').innerHTML=""
    })
    eraseBtn.innerText = "x"
    console.log(elem.target.src);
    LargeMonster.src = elem.target.src;
    LargeMonster.style.width = "500px";
    LargeMonster.style.height = "500px";

    divImg.appendChild(name);
    divImg.appendChild(LargeMonster);
    divImg.appendChild(eraseBtn);
}