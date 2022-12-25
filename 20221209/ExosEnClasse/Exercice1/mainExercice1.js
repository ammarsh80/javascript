// Ecrire la fonction chg_style() qui permet de changer le style du paragraphe au clic du bouton par :

// Un background skyblue.
// Une bordure couleur navy pointillée de 3px.
// Une couleur whitesmoke.
// Un retrait de 8px.


// function changer_style(){
//    let texte = document.getElementById("parag1");
//    texte.style.backgroundColor="skyblue";
//    texte.style.border="3px dotted navy";
//    texte.style.color="whitesmoke";
//    texte.style.textIndent="8px";
// };


function changer_style() {
    document.getElementById("parag1").classList.add("C_active");
};

parag1.addEventListener("click", (e) => {
    changer_style();   
}
)