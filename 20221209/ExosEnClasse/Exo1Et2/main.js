// Exo_1
// let btn = document.createElement("button");
// let texte = document.createTextNode("Cliquez moi");
// btn.appendChild(texte);
// document.body.appendChild(btn);

// btn.addEventListener("click", (e) =>{
//     let affiche= document.createElement("p");
//     let affichetext = document.createTextNode("Hello word !");
//     affiche.appendChild(affichetext);
//     document.body.appendChild(affiche);
// })


// Exo_2

let inputTexte = document.createElement("input");
document.body.appendChild(inputTexte);

let btn = document.createElement("button");
let texte = document.createTextNode("Cliquez moi");
btn.appendChild(texte);
document.body.appendChild(btn);

btn.addEventListener("click", (e) =>{
    let textsaisi = document.querySelector("input").value;
    console.log(textsaisi);
})