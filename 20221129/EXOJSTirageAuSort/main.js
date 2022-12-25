// function tableau() {
//     let reponse = prompt("Quel est votre nom ?");
//     return reponse;
// }

// let tableau_participant = new Array();

// ajouter_nom.addEventListener("click", (e) => {
//     let liste_participants = tableau_participant.push(tableau())
//     // console.log(tableau_participant);
//     return tableau_participant;
// });



let btn_add_name = document.querySelector(".btn-add-name");
let btn_tirage = document.querySelector(".btn-tirage");
let tableau_participant = new Array();

function add_name_to_array(array) {
    let name = prompt("Ajoutez votre nom pour participer au tirage au sort:");
    array.push(name);
    console.log(array);
}


btn_add_name.addEventListener("click", (e) => {
    add_name_to_array(tableau_participant);
});

function tirage_au_sort(array) {
    let size_tableau_participant = tableau_participant.length;
    let    index_winner = Math.trunc(Math.random() * size_tableau_participant);
     let   winner = array[index_winner];
    alert(winner);
}

btn_tirage.addEventListener("click", (e) => {
    tirage_au_sort(tableau_participant);
});