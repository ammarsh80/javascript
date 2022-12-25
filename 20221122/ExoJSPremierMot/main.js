// function fragmenter (){
//     let reponse = String("Hello Word");
//     let mot = reponse.split(" ");
//     alert(mot[0]);
// }





// function first_word(params) {
//     let mots = params.split(" ");
//     return mots[0];

// }

// console.log(first_word("Hello Word"));



function first_word(params) {
    // let mots = params.split(" ");
    // return mots[0];
    return params.split(" ")[0];

}

console.log(first_word("Hello Word"));

function chaine(params) {
    let taille = params.lenght;
    console.log(taille);
    return params[0].toUpperCase() + params.slice(1, -1);
}
console.log(chaine("hello word"));