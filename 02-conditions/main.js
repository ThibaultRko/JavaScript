// if(condition){
//     // si la condition est remple
//     var toto = "truc" 
//     let tata 
// }

// console.log(toto);
// console.log(tata);

// let et le const 
// les variables temporaires ne sont accessible que dans le scope ou elles sont déclarées et leur enfants

// le const est une variable temporaire qu'on ne peut pas réasigner

const truc = "tata";

// truc = "toto";

let name = "Saib"

// =  // assignation 
// == // égale  => je comapre la valeur 
//   3 == "3"  => true
// ===  // je viens comparer la valeur et le type 
//   3 === "3" => false
//  !=   =>  différent

// if(name === "Saib"){
//     console.log("Salut Saib");
// }else{
//     console.log("qui es-tu ?");
// }

// let age = +prompt("quel âge as-tu ?")

// if(isNaN(age)){
//     console.log("j'ai demande un nombre");
// }else {
//     if(age > 100){
//         console.log("sale menteur")
//     }else if(age >= 18){
//         console.log("tu es majeur");
//     }else{
//         console.log("tu es une petite merde");
//     }
// }

//Exo 
// prompt "combien de pommes avez vous recoltées"
// si plus de 35 
// demander via un prompt de quelle couleur sont les pommes 
// si les pommes sont rouge , console.log "bien joué j'aime le rouge"
// si elles sont verte  , console.log "c'est pas mal mais je voulais des rouges"
// si c'est une autre couleur, console .log "*couleur* n'est pas une couleur de pomme"
// si moins de 35 pommes console.log "retourne travailler fumier"

// bonus 
// faire ne sorte que votre algo comprenne si j'écris ROUGE, Rouge, rouges, , des pommes rouges




// let recolte = +prompt("combien de pommes avez vous recoltées")

// if(recolte >= 35){
//     let couleur = prompt('de quelle couleur sont elles')
//     if(couleur== "rouge" || couleur == "ROUGE" || couleur == "Rouges" || couleur == "rouges"){
//         console.log("bien joué j'aime le rouge");
//     }else if(couleur == "verte"){
//         console.log("c'est pas mal mais je voulais des rouges");
//     }else{
//         console.log(couleur + " n'est pas une couleur de pomme");
//     }
// }else{
//     console.log("retourne travailler fumier");
// }


// let nbrePomme = +prompt("Combien de pommes as-tu?")

// if(isNaN(nbrePomme)){
//     //     console.log("j'ai demandé un nombre")
//     console.log("j'ai demandé un nombre")
// }else{  

//     if(nbrePomme > 35){
//         let couleurPomme = prompt("Ah ouais ? Et quelle couleur ?")
        
//         if(typeof(couleurPomme) === string){
//             //     console.log("j'ai demandé un nombre")    
//             if(couleurPomme.toLowerCase().includes("rouge")){
//                 console.log("Bo goss, j'aime le red")
//             }
//             else if (couleurPomme.toLowerCase().includes("vert")){
//                 console.log("Beyyyk j'aime pas le vert. Je veux des rouges")
//             }
//             else{
//                 console.log( couleurPomme + " c'est pas une couleur de pomme ducon")
//             }
//         }else{
//             console.log("écrit en français connard");
//         }
//     } else{
//         console.log("Va bosser ptit con")
//     }
// }

// let nmbre = +prompt("combien de pommees avez vous recoltées?")

// if(isNaN(nmbre)  || nmbre < 35 ){
//     console.log("Retourne travailler fumier!")
// }else{
//     if(nmbre >=35){
//         var couleur = prompt("quelle couleur sont les pommes")
//         couleur = couleur.toLowerCase();
//         if (couleur === "rouge") {
//             console.log("Bien joué, j'aime le rouge !");
//         }else if (couleur === "vert" || couleur === "verte") {
//             console.log("Ce n'est pas mal, mais je voulais des rouges.");
//         }else {
//             console.log(couleur+ " Cette couleur est une couleur de pomme martienne.");
//             }
//         }
// }


// Exo meuble à tiroir
// choisir un tiroir via un prompt
// si 1 : ce tiroir contient des vêtements
// si 2 : ce tiroir est fermé à clé
// si 3 : ce tiroir est vide
// si 4 : ce tiroir contient des chaussetters

// résolvez cet exo avec le switch case

// var choix = +prompt("💀 >> Veuillez choisir un tiroir de 1 a 4 🤗");
// while(isNaN(choix)){
//     console.log("💀 >> HE hoo!!!! j'ai demandé un nombre 🤬");
//     choix = +prompt("💀 >> Veuillez choisir un tiroir de 1 a 4 🤗");
// }
// if(choix>0){
//     switch(choix){
//         case 1:
//           console.log("ce tiroir contient des vêtements 👀");
//           break;
//         case 2:
//           console.log("ce tiroir est fermé à clé 👀");
//           break;
//         case 3:
//           console.log("ce tiroir est vide 👀");
//           break;
//         case 4:
//           console.log("ce tiroir contient des chaussetters 👀");
//           break;
//         default:
//           console.log("💀 >> EHHH c'est quoi ca !!! CONNARD 🤬 je vais te trucider 🪓👺🔪");
//           break;
//       }
// }else{console.log("💀 >> EHHH c'est quoi ca !!! CONNARD 🤬 je vais te trucider 🪓👺🔪");}