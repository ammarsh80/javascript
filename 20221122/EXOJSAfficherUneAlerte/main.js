// function champvide () {
//    let reponse= document.formulaire.montexte.value; 
//    if (reponse){
//     alert(reponse);
// } 
//     else{
//     alert("Attention champ vide");
// }
// }

// function init () {
//     document.formulaire.montexte.focus();
// }

let btn_envoyer = document.querySelector(".btn-envoyer");
let alerte = document.querySelector(".alerte");

btn_envoyer.addEventListener("click", (e) => {
    if (alerte.value == "") {
        alert("champ vide !");
    }
    else {
        alert(alerte.value);
    }
});