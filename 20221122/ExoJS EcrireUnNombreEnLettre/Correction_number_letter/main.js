const NUMBER_LETTER = document.querySelector(".number_letter");
const BODY = document.querySelector("body");

let dizaine_names = [
  "",
  "dix",
  "vingt",
  "trente",
  "quarante",
  "cinquante",
  "soixante",
  "soixante",
  "quatre-vingt",
  "quatre-vingt",
];
let number_names = [
  "zéro",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
];
let exeptions = [
  "",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
  "dix-sept",
  "dix-huit",
  "dix-neuf",
];
let exception_objs = {
  10: "dix",
  11: "onze",
  12: "douze",
  13: "treize",
  14: "quatorze",
  15: "quinze",
  16: "seize",
  17: "dix-sept",
  18: "dix-huit",
  19: "dix-neuf",
};
/**
 * Permet de convertir un nombre en lettre
 * @param {string} nombre
 * @returns string
 */
function numberToLetter(nombre) {
  let numberToLetter = "";
  let nb = parseInt(nombre);
  if (isNaN(nb) || nb < 0) {
    return "votre entrée n'est pas nombre valide";
  }
  if (nb == 0) {
    return number_names[nb];
  }

  let mille = Math.floor(nb / 1000);
  nb %= 1000;
  let centaine = Math.floor(nb / 100);
  nb %= 100;
  let dizaine = Math.floor(nb / 10);
  let unite = nb % 10;
  if (mille > 0) {
    if (mille > 1) {
      numberToLetter +=
        dizaine > 0
          ? number_names[mille] + "-mille-"
          : number_names[mille] + "-mille";
    } else {
      numberToLetter += centaine > 0 ? "mille-" : "mille ";
    }
  }
  if (centaine > 0) {
    if (centaine > 1) {
      numberToLetter += number_names[centaine] + "-cent-";
    } else {
      numberToLetter += dizaine > 0 ? "cent-" : "cent ";
    }
  }
  if (dizaine > 0) {
    if (nb > 10 && nb < 17) {
      numberToLetter += exception_objs[nb];
    } else {
      numberToLetter += dizaine_names[dizaine];
      if (unite == 1 && !(nb > 90 && nb < 97)) {
        numberToLetter += "-et";
      }
    }
  }

  if (nb >= 70 && nb <= 79) {
    numberToLetter += "-" + exception_objs[nb % 60];
  } else if (nb >= 90 && nb <= 99) {
    numberToLetter += "-" + exception_objs[nb % 80];
  } else {
    if (unite > 0 && !(nb in exception_objs)) {
      if (dizaine > 0) {
        numberToLetter += "-" + number_names[unite];
      } else {
        numberToLetter += number_names[unite];
      }
    } else if (nb >= 17 && nb <= 19) {
      numberToLetter += "-" + number_names[unite];
    }
  }
  return numberToLetter;
}
/**
 * Premiere lettre en capitale
 * @param {string} p
 */
function firstLetter(p) {
  return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
}
NUMBER_LETTER.addEventListener("click", (e) => {
  let result = numberToLetter(prompt("Entrez votre nombre"));
  let h1 = document.createElement("h1");
  h1.textContent = firstLetter(result);
  BODY.appendChild(h1);
});
