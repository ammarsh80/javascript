// function longueur() {
//     let reponse = prompt("veuillez saisir ovtre message :");
//     alert(reponse.length);
//     let premiereLettre = reponse.charAt(0).toUpperCase();
//     let allPremierMajuscule = premiereLettre + reponse.slice(1);
//     alert(premiereLettre + reponse.slice(1));
//     let sansdernierlettre = allPremierMajuscule.slice(0, reponse.length - 1);
//     alert(sansdernierlettre);
// }



function first_word(params) {
    // let mots = params.split(" ");
    // return mots[0];
    return params.split(" ")[0];

}

console.log(first_word("Hello Word"));

function chaine(params) {
    let taille = params.lenght;
    console.log(taille);
    return params[0].toUpperCase() + params.slice(1, -1);
}
console.log(chaine("hello word"));