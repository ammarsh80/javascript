// function tamagotchi() {
//     let reponse = prompt("Quel est le genre de votre tamagotchi ?");
//     if (reponse == "Femelle" || reponse == "FEmelle" || reponse == "femelle" || reponse == "FEMELLE") {
//         alert("Vous avez choisi un tamagotchi " + reponse);
//     } else if (reponse == "mâle" || reponse == "Mâle" || reponse == "Male" || reponse == "MALE" || reponse == "male") {
//         alert("Vous avez choisi un tamagotchi " + reponse);

//     }
//     else if (reponse == "Homme" || reponse == "Femme" || reponse == "indeterminé" || reponse == "F" || reponse == "M") {
//         alert(reponse + " est une réponse non accepté !");

//     }
//     else {
//         tamagotchi();
//     }
// }


// function tamagotchi() {
//     let reponse = prompt("Quel est le genre de votre tamagotchi ?");
//     if (reponse) switch (reponse) {
//         case "Femelle":
//         case "FEmelle":
//         case "femelle":
//         case "FEMELLE":
//             alert("Vous avez choisi un tamagotchi " + reponse);
//     } else if (reponse) switch (reponse) {
//         case "mâle":
//         case "Mâle":
//         case "Male":
//         case "MALE":
//         case "male":
//             alert("Vous avez choisi un tamagotchi " + reponse);

//     }
//     else if (reponse == "Homme" || reponse == "Femme" || reponse == "indeterminé" || reponse == "F" || reponse == "M") {
//         alert(reponse + " est une réponse non accepté !");

//     }
//     else {
//         tamagotchi();
//     }
// }


// let btn_sex = document.querySelector(".btn-sex");
// btn_sex.addEventListener("click", (e) => {
//     let reponse = prompt("Quel est le genre de votre tamagotchi ?").toLocaleLowerCase().replace("â", "a");
//     while (reponse != "mal" && reponse != "femelle") {
//         reponse = prompt("Rentrer un genre valide, svp! ").toLocaleLowerCase().replace("â", "a");
//     }
// });

let btn_sex = document.querySelector(".btn-sex");
btn_sex.addEventListener("click", (e) => {
    let reponse = prompt("Quel est le genre de votre tamagotchi ?");
    reponse = traitement(reponse);
    while (reponse != "mal" && reponse != "femelle") {
        reponse = prompt("Rentrer un genre valide, svp! ");
        reponse = traitement(reponse);
    }
});

function traitement(texte) {
    return texte.toLocaleLowerCase().replace("â", "a");

}