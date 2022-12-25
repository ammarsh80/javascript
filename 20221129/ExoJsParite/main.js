
let btn = document.createElement("BUTTON");        // Créer un élément <button>
let texte = document.createTextNode("Cliquez ici pour vérifier");       // Créer un noeud textuel
btn.appendChild(texte);                                // Ajouter le texte au bouton
document.body.appendChild(btn);                    // Ajoute la balise <button> à la balise <body>


 let reponse = prompt("Veuillez saisir un nombre")
/**
 * Vérifier si un nombre est pair ou non
 */
function PaireImpaire() {
    if (reponse % 2 == 0) {
        alert("Le nombre saisi est PAIR")
    } else if (reponse % 2 == 1) {
        alert("Le nombre saisi est IMPAIR")

    }
}

let verifier = document.querySelector("BUTTON");
verifier.addEventListener("click", (e) => {
    PaireImpaire(reponse);
});