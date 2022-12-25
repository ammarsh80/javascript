// 1-a Ecrire une fonction qui met en majuscule la première lettre d'une phrase, et tout le reste en minuscule
function first_lettre(params) {
    return params[0].toUpperCase() +params.slice(1,).toLowerCase();

}
alert(first_lettre("hello World"));


//1-b : correction en classe:
// let str = prompt("saisir un texte");

// function lettreMaj(str){
//     let arr = str.toLowerCase().split("");
//     arr[0] = arr[0].toUpperCase();
//     return arr.joint("");
// }
// alert(lettreMaj(str));

// 2- Ecrire une fonction qui transforme une phrase en "camel case"

// function camel(params) {

//     return params.split(" ")[0].toLowerCase()
//         + params.split(" ")[1].slice(0, 1).toUpperCase()
//         + params.split(" ")[1].slice(1,).toLowerCase();
// }
// console.log(camel("hello world"));

// // 3- Pour fair une fonction (qui transforme une phrase en "camel case") peu import le nompre de mot dans le texte!

// function Camel(texte){
//     return texte.split(" ").map(function(mot,index){
// if (index==0){
//     return mot.toLowerCase();
// }
// return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
//     }).join("");
// }
// alert(Camel("Ecrire une fonction qui transforme une phrase"))