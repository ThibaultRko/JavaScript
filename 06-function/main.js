function sayHello(){
    // console.log("salut");
}
 sayHello();

 // methode Iife (Immeeiately Invoked Function Expression)

 (function sayHello2(){
    // console.log("salut");
})();

function saySomething(mdr){
    // console.log(mdr);
    mdr = mdr.toUpperCase();
    // console.log(mdr);
}

saySomething("Bonjour Saad");
saySomething("Salut Sof");
saySomething("Hee je suis Socrate le plomblier");

const listeInvite = ["Anthman", "Saad", "Sofiane", "Quentin"];
const present = [];

function checkPeople(dude){
    if(dude === "Quentin"){
        // console.log("La s
        // ortie est par la, vile raclure "+ dude );
    }else{
        // console.log("Bienvenue à notre petite sautrie " + dude);
        present.push(dude);
    }
}

for(let guy of listeInvite){
    checkPeople(guy);
}
// console.log(present);

// fonction qui retourne une information
function calcule(mdr, mdr2){
    return mdr+mdr2;
}

// console.log(calcule(10, 4));

//EXO 
// Via 3 prompt
// retournez la moyenne de ces 3 derniers dans la console.

//function base

// function robot(p){console.log("💀 >> "+p);}
// robot("BONJOUR 👹");




// function q(){
//     let p = "💀 >> un nombre!🤗";
//     let nbr = parseInt(prompt(p));
//     return nbr;
// }

// function moyenne(nbr,i){
//     nbr = nbr / i;
//     robot(nbr);
//     return nbr;
// }

// nbr1 = 0;
// nbr2 = 0;
// for(let i=0;i<3;i++){
//     nbr1 = q();
//     robot(nbr1+" + "+nbr2);
//     nbr2 = nbr2 + nbr1;
//     robot(nbr2);
// }
// robot(nbr2+"/"+i)
// moyenne(nbr2,i)

// let nbr1 = +prompt("donne 1 nombre")
// let nbr2 = +prompt("donne 1 nombre")
// let nbr3 = +prompt("donne 1 nombre")

// function calculeMoy(nombre1,nombre2,nombre3){
//     return (nombre1 + nombre2 + nombre3)/3;
// }


// console.log(calculeMoy(nbr1, nbr2, nbr3));


//EXO 
// via 3 prompt 
// demandez 2 nombre et un opérateur , et retournez le résultat de l'opérartionconst nbr1=Number(prompt("entrer le number 1 "))

// function calculayte(nbr1, operateur, nbr2) {
//     switch (operateur) {
//       case "+":
//         resultat = nbr1 + nbr2;
//         break;
//       case "-":
//         resultat = nbr1 - nbr2;
//         break;
//       case "*":
//         resultat = nbr1 * nbr2;
//         break;
//       case "/":
//         resultat = nbr1 / nbr2;
//         break;
//       default:
//         console.log("nope Michel, c'est cassay");
//         return;
//     }
  
//     return resultat
//   }
  
// const nombre1 = +(prompt("nombre 1:"));
// const operateur = prompt("(+, -, *, /) :");1
// const nombre2 = +(prompt("nombre 2 :"));


// console.log(calculayte(nombre1, operateur, nombre2))



// // Fonction pour additionner
// function addition(nombreA, nombreB) {
//     return nombreA + nombreB;
// }

// // Fonction pour multiplier
// function multiplication(nombreA, nombreB) {
//     return nombreA * nombreB;
// }

// // Fonction pour soustraire
// function soustraction(nombreA, nombreB) {
//     return nombreA - nombreB;
// }

// // Fonction pour diviser
// function division(nombreA, nombreB) {
//     if(nombreB == 0) {
//         throw new Error("Impossible de diviser par 0.");
//     }else{
//     return nombreA / nombreB;
//     }
// }

// // On rentre dans la boucle principale

// let restart = true; 
// let resultat = 0 ;// Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.
// while (restart) {
//     let premierNombre;
//     let deuxiemeNombre;
//     let choix;
//     // Demande un choix
//     while(choix != 1 && choix != 2 && choix != 3 && choix != 4) {
//         choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
//     } 

//     // Demande deux nombres
//     while(isNaN(premierNombre) || isNaN(deuxiemeNombre)) {
//         premierNombre = Number(prompt("Entrez un premier nombre :"));
//         deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
//     } 

//     // Appelle la fonction choisie

//     switch (choix) {
//         case 1:
//             resultat = addition(premierNombre, deuxiemeNombre);
//             break;

//         case 2:
//             resultat = multiplication(premierNombre, deuxiemeNombre);
//             break;

//         case 3:
//             resultat = soustraction(premierNombre, deuxiemeNombre);
//             break;

//         case 4:
//             resultat = division(premierNombre, deuxiemeNombre);
//             break;

//         default:
//             throw new Error("Une erreur est survenue.");
//     }

//     // Affiche le résultat
//     alert("Voici le résultat : " + resultat);

  
//     restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
  
// } 


const badPeoples = [
    {
        "name" : "Quentin",
        "compteur" : 0
    },
    {
        "name" : "Houssine",
        "compteur" : 0
    },
    {
        "name" : "Nicolas",
        "compteur" : 0
    },
    {
        "name" : "Vincent",
        "compteur" : 0
    },
    {
        "name" : "Matteo",
        "compteur" : 0
    },
    {
        "name" : "Seb",
        "compteur" : 0
    },
    {
        "name" : "Sofiane",
        "compteur" : 0
    },
    {
        "name" : "Saad",
        "compteur" : 0
    },
    {
        "name" : "Athmann",
        "compteur" : 0
    },
]

// Sofiane 0
// Saad 0
// Athmannn 0
// Seb 0

// let isContinue = true; 

// while(isContinue){
//     let question = prompt("qui  a marqué un point");
//     console.clear();
//     for(let guy of badPeoples){
//         if(question === guy.name){
//             guy.compteur ++ ;
//         }else if(question === "") {
//             isContinue = false;
//         }
//         console.log(guy.name + " " + guy.compteur);
//     }
// }

let iContinue = true
while(iContinue){
    let number = Math.round(Math.random()*badPeoples.length);
    console.log(number);

    badPeoples.splice(number,0)
    console.log(badPeoples);
    if(badPeoples.length === 0 ) iContinue = false
}


