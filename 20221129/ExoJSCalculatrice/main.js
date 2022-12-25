// récuperer les elements du DOM
const touches = [...document.querySelectorAll(".bouton")];
const listekeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector(".ecran");

// fonctionnement sur touche de la calculatrice
document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

// fonctionnement sur clavier
document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    // const valeur = e.key.toString();
    calculer(valeur);

});

/**
 * 
 * @param {clculer et envoyer le résultats d'une operation simple (+, -, *, log, ln, sqrt, pow/)}} valeur 
 */
function calculer(valeur) {
    if (listekeycode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "65":
                const square = Math.sqrt(eval(ecran.textContent));
                const squarearound = Math.round(square * 1000000000) / 1000000000;
                ecran.textContent = squarearound;
                break;
            case "66":
                const logarithme = Math.log10(eval(ecran.textContent));
                const logarithmeround = Math.round(logarithme * 100000000) / 100000000;
                ecran.textContent = logarithmeround;
                break;
            case "67":
                const logarithmeln = Math.log(eval(ecran.textContent));
                const logarithmelnround = Math.round(logarithmeln * 100000000) / 100000000;
                ecran.textContent = logarithmelnround;
                break;
            case "68":
                const power = Math.pow(eval(ecran.textContent), 2);
                const powerround = Math.round(power * 100000000) / 100000000;
                ecran.textContent = powerround;
                break;

            case "13":
                const calcul = eval(ecran.textContent);
                const calculround = Math.round(calcul * 100000000) / 100000000;
                ecran.textContent = calculround;
                break;
            default:
                const indexkeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};
// function logdix(nombre)
// {
//  return Math.log(nombre) / Math.LN10
// }

// // console.log(logdix(3));
// console.log(Math.LN10(3));

// afficher l'erreur: dans l'element (window) on profite de l'evenement (error)
window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcule ! \r" + "Veuillez recommencr. \r \r" + "Pour information: l'erreur est:\r[" + e.message + "].");
});

