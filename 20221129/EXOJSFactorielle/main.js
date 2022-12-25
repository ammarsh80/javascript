let btn = document.createElement("BUTTON");
let texte= document.createTextNode("Cliquer pour calculer la factorial");
btn.appendChild(texte);
document.body.appendChild(btn);
document.write("<br>");

let reponse = prompt("Veuillez saisir un chiffre:")
let fact = document.querySelector("BUTTON");
fact.addEventListener("click", (e) =>{
    document.write("Factorial de (" + reponse + "), "+reponse+"! = " + factorial(reponse));
})


// let n = 7;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {

        return n * factorial(n - 1);
    }
}

// console.log(factorial(n));

// console.log(factorial(n) + factorial(n - 1) + factorial(n - 2) + factorial(n - 3) +
//     factorial(n - 4) + factorial(n - 5) + factorial(n - 6));