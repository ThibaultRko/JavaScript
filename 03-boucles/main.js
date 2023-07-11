// while 

// while(condition){
//     // code qui va 'exécuter en boucle tant que la condition n'est pas remple
// }

// let count = 0;

// while(count <= 100 ){
//     // ici est le code qui va se répéter tant que la condition est true
//     console.log(count);
//     count++;
//     // count += 1
//     // count = count + 1
// }


// let prenoms = prompt("Entrez un prénom")

// while(prenoms != ""){
//     console.log("bonjour "+ prenoms);
//     prenoms = prompt("Entrez un prénom")
// }


// // for
// for(compteur; compteur =  0 ; compteur < 100 ){
// // le code qui va s'éxecuter en boucle 
// }

// let count = 0;
// while(count <= 100 ){
//     console.log(count);
//     count++;
// }

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// Exo 

// logger les nombres de 1 à 100 et préciser à coté s'il s'agit d'un nombre pair ou impair

// 1 est impair
// 2 est pair
// 3 est impair
// 4 est pair
// .
// .
// .
//100 est pair

// for (let i = 0; i < 100; i++){
//     if (i % 2 == 0){
//         console.log(i + " est pair")
//     }
//     else{
//         console.log(i + " est impaire")
//     }
//     }

// alert("salut biloute 👀");
// alert("💀 >> Ajd je vais vous apprendre a compter de 1 a 100! Et vous dire si le nombre est pair ou impair 🎓");

// for(var i=0;i<=100;i++){
//   if(i%2 === 0){console.log("💀 >> "+i+" est impair");}
//   else{console.log("💀 >> "+i+" est pair");}
// }

// Exo
// logger les nombres de 1 à 100 , et préciser s'il sont des multiple de 4 , s'il sont des multiple de 7 et s'ils sont des multiples de 4 ET de 7

// for(let i = 1; i <= 100; i++){
//     let msg = i

    // if (i % 4 === 0){
    //      msg = i + " est mult de 4"
        
    //     if (i % 7 === 0){
            // msg += " Niko reçoit un multiple de 7 vies"
    //     }
//     } else if (i % 7 === 0){
//         msg = i + " is a multiple de 7"
//     }

//     console.log(msg)
// }


// Exo

// générer une chaine de caractère qui contient les nombres de 1 à 500 grace à une boucle 
// "1234567891011121314151617...499500"

let string = "";
for (let i = 1; i <= 500; i++) {
    string += i
}
console.log(string);