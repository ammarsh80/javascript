/**
 * Ajouter un element à une liste déjà existante
 */
function ajouterInvite() {
    let ul = document.getElementById("listeInvites");
    let li = document.createElement("li");
    ul.appendChild(li);
    let addinvite = document.querySelector("input").value;
    li.appendChild(document.createTextNode(addinvite));
};

/**
 * Supprimer le dernier enfant d'une liste (dernier li d'une ul)
 */
function supprimerInvite() {
    let ul = document.getElementById("listeInvites");
    let child = ul.lastElementChild;
    ul.removeChild(child);

};

// const inputs = document.querySelectorAll("input");

// for (const input of inputs) {
//   input.classList.add("first");
// };