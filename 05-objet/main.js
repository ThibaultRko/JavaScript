// let user = ["Vincent", 23, "Expert comptable"];
// let user2 = [ 23,"Vincent", "Expert comptable"];

// let personnage1 = new Object()
// let personnage1 = {}

// personnage1.firstName = "Vincent";
// personnage1.lastName = "Lechat";
// personnage1.age = 32;
// personnage1.job = "Avocat"

// console.log(personnage1);
// console.log(personnage1.firstName);
// console.log(personnage1["firstName"]); // cette vesion est surtout utilisée et OBLIGATOIRE pour les boucles


// const personnage2 = {
//     "firstName" : "Kentin",
//     "lastName" : "Leroi",
//     "age": 54,
//     "job" : "professeur"
// }


// for IN 

// for(let mdr  in personnage1){
//     console.log(mdr + " " + personnage[mdr]);
// }



// // for OF 

// const myArray = ["Kev", "Sof", "Houss", "Nic"]

// for(let dude  of myArray){
//     console.log(dude);
// }
// // pour dispoter d'un id

// for(let [dudeId, dude] of myArray.entries()){
//     console.log(dudeId , dude);
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

// const gens = [amis, enemi, allies]

// for(let humainGroup of gens ){
//     for(let dude of humainGroup){
//         console.log(dude);
//     }
// }



// for(let i = 0; i < trucs.length; i++){
//     if(choix === trucs[i]){
//         console.log("Le prix de " + choix + " est de " + prix[i]);
//         break;
//     }else {
//         console.log("ceci n'est pas un élément du tableau ");
//         break;
//     }
// }
// const trucs = ["Tables","Chaises","Buffet","Vitrine","Drogue"]
// const prix = [250, 70, 460, 700, 10000000]

// const choix = prompt("quelle est ton choix" + trucs);

// // console.log(choix);
// for(let [itemId, item] of trucs.entries()){
//     if(item === choix){
//         console.log("Le prix de " + choix + " est de " + prix[itemId]);
//     }
// }

// console.log(personnage1);
// console.log(personnage2 );

// const persos = [personnage1,personnage2]

const personnage1 = {
    "firstName" : "Nicolas",
    "lastName" : "Dark Angel",
    "age" : 30,
    "class" : "Paladin"

}

const personnage2 = {
    "firstName" : "Vincent",
    "lastName" : "Le Chat",
    "age" : 40,
    "class" : "Mage"

}

const humains = [personnage1, personnage2]

for(let mdr of humains){
    for(let oupsi in mdr){
        console.log(oupsi + " " + mdr[oupsi]);
    }
 }





 const DIList = {
    "stagiaires":[
        {
            "firstname":"Kentin",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"THibau",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Houcin",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Nkko",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"20 100",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Math hé ho",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Shaib",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Souf",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Rachida",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Max",
            "lastname":"Chartreuse",
            "age":28,
            "city":"Mons"
        },
        {
            "firstname":"Sebastien",
            "lastname":"Cardon", 
            "age":34,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};


// EXO 1
// ecrire le nom et le prenom de tous les stagiares

// for (const stagiaires of DIList.stagiaires) {
//         console.log(stagiaires.firstname + " : " + stagiaires.lastname);
// }


// for(let [stagiaireId, stagiaire] of DIList.stagiaires.entries()){
//     const titre = "Stagiaire " + (stagiaireId + 1)
//     const fullName = stagiaire.firstname + " " + stagiaire.lastname

//     console.log(titre + ": " + fullName)
// }


// for(let gens of DIList.stagiaires){
//     console.log(gens.firstname +":" + gens.lastname);
// }

// EXO 2
// ecrire le noms des stagiares dont le prénoms commence par (T, H, S) 

// etape 1 : boucler sur les stagiares 
// logger les stagiares
// etape 2 : afficher le nom
// etape 3 : condition si le prenom commence par T,  S ou H


// const letters = ["t", "s", "h"]

// for (const stagiaires of DIList.stagiaires) {
//     let conditional_firstname = stagiaires.firstname.toLowerCase();
//     if (letters.includes(conditional_firstname[0])){
//         console.log(stagiaires.lastname);
//     }
// };

// console.log("Noms des prénoms commencant par T, H et S :");
// const personnes = [...stagiaires, ...formateurs];
// for (const personne of personnes) {
//   const { firstname, lastname } = personne;
//   const fstChar = firstname.charAt(0).toUpperCase();
//   if (fstChar === "T" || fstChar === "H" || fstChar === "S") {
//     console.log(lastname);
//   }
// }