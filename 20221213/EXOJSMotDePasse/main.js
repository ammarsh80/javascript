/**
 * Visualiser le saisi d'un mot de passe
 */
let myinput = document.querySelector("#myInput");
function visualiserMDP() {
    if (myinput.type === "password") {
        myinput.type = "text";
    } else {
        myinput.type = "password";
    }
}


/**
 * 
 * @param {formule de calcule de force d'un mot de passe} mdp 
 * @returns valeur de force arroundit
 */
function force(mdp) {
    // La Longueur
    let l = mdp.length;
    // Le nombre de caractères
    let n = alphabet(mdp);
    // Appliquer la formule
    let force = l * Math.log2(n);
    return Math.round(force);
}

/**
 * 
 * @param {reference de forces pour calcul de force d'un mot de passe} mdp 
 * @returns force total
 */
function alphabet(mdp) {
    n = 0;
    if (mdp.match(/[0-9]/)) {
        n += 10;
    }
    if (mdp.match(/[a-z]/)) {
        n += 26;
    }
    if (mdp.match(/[A-Z]/)) {
        n += 26;
    }
    if (mdp.match(/[!#$*%_?\\]/)) {
        n += 8;
    }
    return n;
}

let btn_envoyer = document.querySelector(".btn-envoyer");
btn_envoyer.addEventListener("click", (e) => {
    let mdp = document.querySelector("#myInput").value;
    let f;
    f = force(mdp);
    if (f <= 104) {
        alert("Force du mot de passe = " + f + "\r"+"Votre mot de passe est faible, veuillez choisir un autre mot de passe plus compliqué !");
    } else if (f > 104){
        alert("Force du mot de passe = " + f+ "\r"+"Votre mot de passe est très fort et il a été enregistré avec succes !");
    };
})