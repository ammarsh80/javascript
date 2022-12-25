// //  à garder /////////////////////////////////////////////////////////////////////////

let reponse = prompt("Rentrez un chiffre");
// const number = parseInt(reponse);

/// donner le tableau de multiplication d'un nombre donné //////

// function verificationEntier() {
//     if ((reponse % 1 !== 0) || (reponse == isNaN)){
//         alert("Les nombres décimaux ne sont pas acceptés (le texte non plus !), Veuillez saisir un chiffre entier, SVP !");

//     } else {
//         //create an empty css table
//         document.write("<table>");

//         document.write("Tableau de multiplication de (" + reponse + ")");
//         //create the first table row with the column headers
//         document.write("<tr><th></th>");
//         for (let j = reponse; j <= reponse; j++) {
//             document.write("<th>" + j + "</th>");
//         }
//         document.write("</tr>");
//         //generate the multiplication table
//         for (let i = 1; i <= 10; i++) {
//             document.write("<tr>");
//             document.write("<td>" + i + "</td>");
//             for (let j = reponse; j <= reponse; j++) {
//                 document.write("<td>" + i * j + "</td>");
//             }
//             document.write("</tr>");
//         }

//         //end the table
//         document.write("</table>");
//     }
// }

// const number = parseInt(reponse);

// let creer_tableau = document.querySelector(".creer-tableau");
// creer_tableau.addEventListener("click", (e) => {
//     verificationEntier(number);
// });

/// donner les tableaux de multiplication jusqu'un nombre donné //////////////
/**
 * Verifier si la réponse est un entier ou un texte! 
 */
function verificationEntier() {
    if ((reponse % 1 !== 0) || (reponse == isNaN)) {
        alert("Les nombres décimaux ne sont pas acceptés (le texte non plus !), Veuillez saisir un chiffre entier, SVP !");

    } else {
        //create an empty table
        document.write("<table>");
        document.write("Tableau de multiplication de (" + reponse + ")");
        //create the first table row with the column headers
        document.write("<tr><th>");
        for (let j = 1; j <= reponse; j++) {
            document.write("<th>" + j + "</th>");
        }
        document.write("</tr>");
        //generate the multiplication table

        for (let i = 1; i <= 10; i++) {
            document.write("<tr>");
            document.write("<td>" + i + "</td>");
            for (let j = 1; j <= reponse; j++) {
                document.write("<td>" + i * j + "</td>");
            }

           

            document.write("</tr>");
        }

        //end the table
        document.write("</table>");
    }
}


let creer_tableau = document.querySelector(".creer-tableau");
creer_tableau.addEventListener("click", (e) => {
    verificationEntier(reponse);
});



// //  à garder pour opération détaillées/////////////////////////////////////////////////////////////////////////
// let reponse = prompt("Rentrez un chiffre");
// function verificationEntier(){
//     if (reponse %1 !==0) {
//         alert("Veuillez rentrez un chiffre entier");

//     }else{
//         return reponse;
//     }
// }

// const number = parseInt(reponse);
// function typedata(verification) {
//     if (isNaN(verification)) {
//         alert('Veuillez rentrez un chiffre entier et non pas un texte !');
//     }

//     else {
//         for(let i=1; i<=10; i++){
//             document.write('<tr><td>'+i+'</td>');
//             for (let j=1; j<=10; j++){
//                 document.write('<td>'+i*j+'</td>');
//             }
//             document.write('</tr>');

//         }
//     }
// }
// let creer_tableau = document.querySelector(".creer-tableau");
// creer_tableau.addEventListener("click", (e) => {
//     verificationEntier(number);
//     typedata(number);

// });



//écrire les opérations détaillées!!
// for(let i = 1; i <= 10; i++) {
//     // multiply i with number
//     const result = i * number;
//             // display the result
//     console.log(`${number} * ${i} = ${result}`);

// }