let prix_chaise = 25;
let prix_table = 12;
let prix_comodde = 15;
let prix_miroir = 18;
let prix_bureau = 81;

let addition = [
    prix_chaise,
    prix_table,
    prix_comodde,
    prix_miroir,
    prix_bureau,
];

let btn = document.createElement("BUTTON");
let texte = document.createTextNode("Cliquer pour calculer l'addition");
btn.appendChild(texte);
document.body.appendChild(btn);

let somme = (prix_chaise + prix_table + prix_comodde + prix_miroir + prix_bureau);


/**calculer la remise sur une facture selon un seuil de somme fixé */
function calculeremise() {
    if (somme > 150) {
        alert("Votre addition est supérieur à 150 euros et est égale à " + somme + ", nous vous accordons donc une remise de 1%. La somme à payer est donc " + (somme - (somme * 0.01)));
    }
    else if (somme < 150) {
        alert("Votre addition est inférieur à 150 euros et est égale à " + somme + ", vous ne pouvez pas bénificier de la remise de 1% !. La somme à payer est donc " + somme + " euros.");
    }
    else if (somme == 150) {
        alert("Votre addition est égale à " + somme + " euros" + ", dépenser un centime de plus pour bénificier de la remise de 1% ! sur votre addition.");
    }
};

let remise = document.querySelector("BUTTON");
remise.addEventListener("click", (e) => {
    calculeremise(somme);
});