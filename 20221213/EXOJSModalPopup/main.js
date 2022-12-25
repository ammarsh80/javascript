let btnOuverture = document.createElement("BUTTON");
let texte = document.createTextNode("Ouverture");
btnOuverture.appendChild(texte);
document.body.append(btnOuverture);
btnOuverture.setAttribute("id", "btnOuverture");


let modal = document.createElement("div");
document.body.appendChild(modal);
modal.setAttribute("id", "modal");
modal.setAttribute("class", "openmodal");

let divTitre = document.createElement("div");
let textdivTitre = document.createTextNode("Titre de Popup");
divTitre.appendChild(textdivTitre);
divTitre.setAttribute("id", "divTitre");
document.getElementById("modal").appendChild(divTitre);  


let btnClose = document.createElement("BUTTON");
let signeClose = document.createTextNode("X");
btnClose.appendChild(signeClose);
btnClose.setAttribute("id", "btnClose");
document.getElementById("divTitre").appendChild(btnClose);  


let divMessage = document.createElement("div");
let divMessageTexte = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis debitis animi suscipit vero sit ea temporibus vitae nam. Tempora dicta omnis adipisci iure facilis molestiae voluptas maiores eos atque voluptatum?");
divMessage.appendChild(divMessageTexte);
divMessage.setAttribute("id", "divMessage");
document.getElementById("modal").appendChild(divMessage);  

let ouverlay = document.createElement("div");
ouverlay.setAttribute("id", "ouvelay");
ouverlay.setAttribute("class", "active")
document.body.appendChild(ouverlay);


function afficheModal() {
    document.getElementById("modal").classList.add("C_open");
};


btnOuverture.addEventListener("click", (e)=>{
    afficheModal();
});
