let mesNoms = new Array("Jean", "Lucas")
const  noms = ["Jeanne", "Sacha"];

//  noms = ["Jeanne", "Sacha", "Charles"];

// ajouter un élément à la fin  d'un array
noms.push("Charles")

// ajouter un élément au début d'un array
noms.unshift("Louis")

// retirer  un élément à la fin  d'un array
noms.pop()

// retirer  un élément au début  d'un array
noms.shift()


const  mesNomsPref = ["Jeanne", "Sacha","Louis","Tobaux","kentin"];

// retirer un élément à un emplacement donné
mesNomsPref.splice(2,1)

// ajouter un élément à un emplacement donné
mesNomsPref.splice(2,0, "Mathieu");


let line = "Vincent le chat";
console.log(line);
const myArray = line.split(" ");

console.log(myArray);

let newLine = myArray.join("-")
console.log(newLine);

const classes = ["Sorcier", "Féticheur", "Chasseur", "Moine", "Guerrier"];

// afficher le contenu de l'array sous cette forme : 

//  classe n°1 : Sorcier
//  classe n°2 : Féticheur
//  classe n°3 : Chasseur
//  classe n°4 : Moine
//  classe n°5 : Guerrier


// for (let i = 0; i < classes.length; i++) {
//     console.log("classe n° " + (i + 1) + " : " + classes[i]);
// }


// const  trucs = ["Tables", "Chaises", "Buffet", "Vitrine", "Drogue"]
// const prix = [250, 70, 460, 700, 1000000000]

// via un prompt, demandez un de choisir parmis l'un des trucs (afficher les trucs dans le prompt ), et logger : le prix de *truc* est de *prix*


// const trucs = ["Tables","Chaises","Buffet","Vitrine","Drogue"]
// const prix = [250, 70, 460, 700, 10000000]

// let choix = prompt("Veuillez faire un choix entre des tables, des chaises, un buffet, une vitrine ou de la DROGUE *musique metal* ")

// if(typeof(choix) == String){
//     choix = choix.toLowerCase()
//     switch (choix) {
//         case "tables":
//             console.log(`le prix de ${trucs[0]} est de ${prix[0]} d'argent`);
//             break;
//         case "chaises":
//             console.log(`le prix de ${trucs[1]} est de ${prix[1]} d'argent`);
//             break
//         case "buffet":
//             console.log(`le prix de ${trucs[2]} est de ${prix[2]} d'argent`);
//             break
//         case "vitrine":
//             console.log(`le prix de ${trucs[3]} est de ${prix[3]} d'argent`);
//             break
//         case "drogue":
//             console.log(`le prix de ${trucs[4]} est de ${prix[4]} d'argent`)
//             break
//         default:
//             console.log(`Il fallait choisir parmis la liste... Désolé, le magasin va fermer.`)
//             break;
//     }
    
// }
// else{
//     console.log("Tu as bien lu la liste non ? Franchement...");
// // }

// const truc = ["Tables", "Chaises", "Buffet", "Vitrine", "Drogue"];
// const prix = [250, 70, 460, 700, 1000000000]

// var continuer = true;
// while (continuer)
// {
//     const choix1 = prompt(`Choisissez parmi les trucs suivants : ${truc.join(", ")}`);

//     switch (choix1.toLowerCase()) {
//     case truc[0].toLowerCase():
//         console.log(`Le prix de ${choix1} est de ${prix[0]}`);
//         break;
//     case truc[1].toLowerCase():
//         console.log(`Le prix de ${choix1} est de ${prix[1]}`);
//         break;
//     case truc[2].toLowerCase():
//         console.log(`Le prix de ${choix1} est de ${prix[2]}`);
//         break;
//     case truc[3].toLowerCase():
//         console.log(`Le prix de ${choix1} est de ${prix[3]}`);
//         break;
//     case truc[4].toLowerCase():
//         console.log(`Le prix de ${choix1} est de ${prix[4]}`);
//         break;
//     default:
//         console.log("Truc non trouvé");
//         break;
//     }
    
//     var reponse = prompt("Voulez-vous réessayer ? (oui/non)").toLowerCase();
//     while (reponse !== "oui" && reponse !== "non") {
//         reponse = prompt("Veuillez répondre par 'oui' ou 'non' uniquement :").toLowerCase();
//     }

//     if (reponse === "non") {
//         continuer = false;
//     }
// }




// const trucs = ["Tables","Chaises","Buffet","Vitrine","Drogue"]
// const prix = [250, 70, 460, 700, 10000000]

// let choix = prompt("Veuillez faire un choix entre" +  trucs)

// for(let i = 0; i < trucs.length; i++){
//     if(choix === trucs[i]){
//         console.log("Le prix de " + choix + " est de " + prix[i]);
//         break;
//     }else {
//         console.log("ceci n'est pas un élément du tableau ");
//         break;
//     }
// }

// const amis = [];
// amis.push("Vicent");
// amis[1] = "Nicolas";
// amis[2] = "Tibo";
// amis[3] = "SoUfiane";

// const enemi = [];
// enemi[1] = "Seb"
// enemi[0] = "Matteo"
// enemi[2] = "Khenttin"
// const allies=["mat","Lucas","Jeans","Yves","Rene","Sacha"]

const gens = [amis, enemi, allies]

// console.log(gens[1][0]);


//EXo 
// en passant par l'array gens, afficher toutes les personnes 


for(let i = 0 ; i<gens.length; i++)
{
    for(let j = 0; j<gens[i].length; j++)
    {
        console.log(gens[i][j]);
    }
}






// const amis=["jaque","nico","samir"]
//  const enemi=["seb","quentin","vincent"]
//  const allies=["mat","Lucas","Jeans","Yves","Rene","Sacha"]
//  const gens=[amis,enemi,allies]

//  console.log(gens)

//  let long=gens[0].length
//  console.log(long)

//  for(i =0;i<long;i++){
//      for(j=0;j<long;j++){
//         console.log(gens[i][j])
//      }
//  }



