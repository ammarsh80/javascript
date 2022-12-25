// let inputTexte = document.createElement("input");
// document.body.appendChild(inputTexte);

let btn = document.createElement("button");
let texte = document.createTextNode("Cliquez moi");
btn.appendChild(texte);
document.body.appendChild(btn);

// btn.addEventListener("click", (e) =>{
//     // let textsaisi = document.querySelector("input").value;
//     console.log("Hello World");
// });


btn.addEventListener("click", (e) =>{
   let reponse= prompt("quel est votre nom ?");
    confirm("Veuillz confirmer votre nom, s'il vous plaît !");
    if (confirm=true){
        alert("votre nom est: " + reponse);
    }
    else if (confirm=false){
        alert("Veuillez recommencer ");
    }
});
