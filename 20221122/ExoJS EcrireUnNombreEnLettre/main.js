// Créez une fonction qui pour un nombre reçu vous donne son équivalent en lettre, jusqu'a 2000.

let lettre0 = {
  0: "zèro",

}
let lettre0to9 = {
  0: "",
  1: "un",
  2: "deux",
  3: "trois",
  4: "qutre",
  5: "cinq",
  6: "six",
  7: "sept",
  8: "huit",
  9: "neuf",
}

let lettre11to16 = {

  0: "",
  1: "onze",
  2: "douze",
  3: "treize",
  4: "quatorze",
  5: "quinze",
  6: "seize",
}

let lettre10 = {

  0: "",
  1: "dix",
  2: "vingt",
  3: "trente",
  4: "quarante",
  5: "cinquante",
  6: "soixante",
  7: "soixante dix",
  8: "quatre vingt",
  9: "quatre vingt dix",
}

let lettre80 = {
  0: "quatre-vingts",
}
let lettre7176 = {
  0: "",
  1: "soixante et",
  2: "soixante",
  3: "soixante",
  4: "soixante",
  5: "soixante",
  6: "soixante",
}

let lettre9196 = {
  0: "",
  1: "quatre vingt",
  2: "quatre vingt",
  3: "quatre vingt",
  4: "quatre vingt",
  5: "quatre vingt",
  6: "quatre vingt",

}

let lettre100 = {

  0: "",
  1: "cent",
  2: "deux cents",
  3: "trois cents",
  4: "quatre cents",
  5: "cinq cents",
  6: "six cents",
  7: "septcents",
  8: "huit cents",
  9: "neuf cents",
}


let lettre1000 = {

  0: "",
  1: "mille",
  2: "deux mille",
}

/**
 * 
 * @param {int} all 
 * @returns {string}
 */

function chifrelette(all) {
  let reponse = prompt("Veuillez saisir un nombre inférieur ou égal à 2000");
  if (reponse == 0) {
    alert("Vous avez saisi: " + lettre0[reponse[0]]);
  }
  if (reponse > 0 && reponse <= 9) {
    alert("Vous avez saisi: " + lettre0to9[reponse[0]]);
  }

  else if (reponse >= 11 && reponse <= 16) {
    alert("Vous avez saisi: " + lettre11to16[reponse[1]]);
  }


  else if (reponse >= 71 && reponse <= 76) {
    alert("Vous avez saisi: " + lettre7176[reponse[1]] + " " + lettre11to16[reponse[1]]);
  }
  else if (reponse == 80 ) {
    alert("Vous avez saisi: " + lettre80[reponse[1]]);
  }
 
  else if (reponse >= 91 && reponse <= 96) {
    alert("Vous avez saisi: " + lettre9196[reponse[1]] + " " + lettre11to16[reponse[1]]);
  }
  else if (reponse >= 10 && reponse <= 99) {
    alert("Vous avez saisi: " + lettre10[reponse[0]] + " " + lettre0to9[reponse[1]]);
  }

  else if (reponse >= 100 && reponse <= 999) {
    alert("Vous avez saisi: "
      + lettre100[reponse[0]] + " "
      + lettre10[reponse[1]] + " "
      + lettre0to9[reponse[2]]);
  }

  else if (reponse >= 1000 && reponse <= 2000) {
    alert("Vous avez saisi: "
      + lettre1000[reponse[0]] + " "
      + lettre100[reponse[1]] + " "
      + lettre10[reponse[2]] + " "
      + lettre0to9[reponse[3]]);
  }

  if (reponse > 2000 || reponse <0) {
    alert("Veuillez saisir un nombre entre 0 et 2000 !");
  }

}














// /* Code Antoine */
// let number_letter_array_object = {
//   1: "un",
//   2: "deux",
//   3: "trois",
//   4: "quatre",
//   5: "cinq",
//   6: "six",
//   7: "sept",
//   8: "huit",
//   9: "neuf",
//   10: "dix",
//   11: "onze",
//   12: "douze",
//   13: "treize",
//   14: "quatorze",
//   15: "quinze",
//   16: "seize",
//   20: "vingt",
//   30: "trente",
//   40: "quarante",
//   50: "cinquante",
//   60: "soixante",
//   70: "soixante-dix",
//   71: "soixante-et-onze",
//   72: "soixante-douze",
//   73: "soixante-treize",
//   74: "soixante-quatorze",
//   75: "soixante-quinze",
//   76: "soixante-seize",
//   80: "quatre-vingt",
//   90: "quatre-vintg-dix",
//   91: "quatre-vintg-onze",
//   92: "quatre-vintg-douze",
//   93: "quatre-vintg-treize",
//   94: "quatre-vintg-quatorze",
//   95: "quatre-vintg-quinze",
//   96: "quatre-vintg-seize",
//   100: "cent",
//   1000: "mille",
// };

// function number_to_letter(number) {
//   for (let key in number_letter_array_object) {
//     if (number == key) {
//       return number_letter_array_object[key];
//     }
//   }
//   if (number == 0) {
//     return "zéro";
//   } else if (number < 100) {
//     return (
//       number_letter_array_object[Math.trunc(number / 10) * 10] +
//       "-" +
//       number_to_letter(number % 10)
//     );
//   } else if (number == 100) {
//     return (
//       number_letter_array_object[Math.trunc(number / 100) * 100] +
//       "-" +
//       number_to_letter(number % 100)
//     );
//   } else if (number > 100 && number < 1000) {
//     return (
//       number_letter_array_object[Math.trunc(number / 100)] +
//       "-" +
//       number_letter_array_object[100] +
//       "-" +
//       number_to_letter(number % 100)
//     );
//   } else if (number == 1000) {
//     return (
//       number_letter_array_object[1000] + "-" + number_to_letter(number % 1000)
//     );
//   } else {
//     return (
//       number_letter_array_object[Math.trunc(number / 1000)] +
//       "-" +
//       number_letter_array_object[1000] +
//       "-" +
//       number_to_letter(number % 1000)
//     );
//   }
// }

// function one_number_to_letter(number) {
//   alert(number + " = " + number_to_letter(number));
// }

// function boucle_number_to_letter(number) {
//   for (i = 0; i <= number; i++) {
//     if (number_to_letter(i).indexOf("-zéro") > 0) {
//       console.log(
//         i +
//         " = " +
//         number_to_letter(i).slice(0, number_to_letter(i).indexOf("-zéro"))
//       );
//     } else {
//       console.log(i + " = " + number_to_letter(i));
//     }
//   }
// }