const reponses_attendues = ["Une canette", "Eugène Poubelle", "Une quarantaine", "Réutiliser", "160 000 km2 environ"];
const submit = document.querySelector(".btn_envoi");
const resultat = document.querySelector(".resultat");
const reessayer = document.querySelector('.reinitial');
let score = 0;

/**
 * 
 * @returns verifier les bonnes réponses à un questionaire
 */
function verification() {
  let reponses = document.querySelectorAll(".reponse:checked");
  if(reponses.length < 5){
    alert("Veuillez répondre à toutes les questions, s'il vous plaît !");
    reinitialiser();
    window.location.reload();
  }
  let rep_txt = new Array();
  reponses.forEach((element) => {
    rep_txt.push(element.value);
  });
  for(i = 0 ; i < rep_txt.length; i++){
    if(rep_txt[i] == reponses_attendues[i]){
        score++;
  }
}
return score;
}
/***
 * Envoyer un commentaire selon la e score
 */
function commentaire(param) {
  switch (param) {
    case 0:
        resultat.textContent += "Il va falloir envisager une réconciliation avec l'écologie ! ";
      break;
    case 1:
    case 2:
        resultat.textContent += "Vous avec une petite intention  écologique !";
      break;
    case 3:
        resultat.textContent += "C'est pas mal, faite un peu plus d'effort, s'il vous plaît !";
      break;
    case 4:
        resultat.textContent += "Très bien ! Vous êtes sur le bon chemin !";
      break;
    case 5:
        resultat.textContent += "Parfait! pensez à vous engager en faveur de l'ecologie ! ";
      break
  }
}
/**
 * réinitialiser le questionaire
 */
function reinitialiser(){
    resultat.textContent = 'Résultat : ';
    score = 0;
    let answered = document.querySelectorAll(".reponse");
for(let i=0;i<answered.length;i++)
answered[i].checked = false
}
let count = 0;
/**
 * réinitialiser le score
 */
function uniqueScore(){
    if (count==1){
        verification();
    }
    else if (count ==2){
        reinitialiser();

    }
}
submit.addEventListener("click", (e) => {
    count++;
verification();
  resultat.textContent += `${score}/5 `;
  commentaire(score);
  console.log(reponses_attendues);
  uniqueScore();
});

reessayer.addEventListener('click', e => {
    reinitialiser();
   
})