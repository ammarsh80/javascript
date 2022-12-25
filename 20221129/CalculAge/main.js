// Age aproximatif année
// let today = new Date();
// let birthDate = new Date("1985");
// let age = today.getFullYear() - birthDate.getFullYear();
// console.log(age);

// Age précis année, moi, jour
let btn = document.createElement("BUTTON");
let texte = document.createTextNode("Cliquez ici pour calculer votre âge");       // Créer un noeud textuel
btn.appendChild(texte);
document.body.appendChild(btn);

let yourBirthday = prompt("Veuillez saisir votre date de naissance (mois/jour/année)");

let birthDay = new Date(yourBirthday);
let today = new Date();

let year = today.getFullYear() - birthDay.getFullYear();
let month = today.getMonth() - birthDay.getMonth();
let day = today.getDate() - birthDay.getDate();
let Votr_Age = ("Vous avez " + year + " ans, " + month + " mois et " + day + " jours.")

// console.log("Vous avez " + year + " ans, " + month + " mois et " + day + " jours.");

function correction() {
    if ((year > 0) && (month > 1))  {
        alert("Vous avez " + year + " ans, " + (month -1) + " mois et " + (day + 30)  + " jours.");
    }
    else if ((year == 0) && (month == 1)) {
        alert(" Vous avez " + (day +30) + " jours.");
    }
    else if ((year > 0) && (month == 1) && (day == 0)) {
        alert(" Vous avez " + year + " ans.");
    }
    else if ((year == 0) && (month == 0) && (day > 0)) {
        alert("Vous avez " + (day) + " jours.");
    }
    else if ((((year > 0) && (month >= 0))) && (day == 0)){
        alert("Vous avez " + year + " ans.");
    }

    else if ((((year > 0) && (month > 2))) || (day == 0)){
        alert("Vous avez " + year + " ans, " + (month -1) + " mois.");
    }

    else if ((year > 0) && (month == 1) && (day > 0) ){
        alert("Vous avez " + year + " ans, " + (day + 30) + " jours.");
    }
 
    else if (year == 0) {
        alert("Vous avez " + (month + -1) + " mois et " + (day + 30) + " jours.");
    }
 else{
    alerte ("un problème est survenu:!");
 }

}

let tonage = document.querySelector("BUTTON");
tonage.addEventListener("click", (e) => {
    correction(Votr_Age);
});