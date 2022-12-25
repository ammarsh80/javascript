// function Hello_perso (){
//     let nom = prompt("Saisir votre nom");
//     let confirmation = confirm("Etes-vous sûr ?");
//     if (confirmation == true){
//         alert ("Hello " + nom);
//     } else {
//         alert ("Tant pis !")
//     }
// }

let btn_prenom = document.querySelector(".btn_nom");
btn_prenom.addEventListener("click", (e) => {
    let prenom = prompt("Qule est votre nom ?");
    let confirmation = confirm("ok", "annuler");
    if (confirmation) {
        alert("Bienvenue " + prenom);

    }
    else {
        ("erreur");
    }
});