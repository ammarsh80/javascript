// let nombreDOeufs = 12;
// let prixDUnOeuf = 0.2;
// let prixDesOeufs = nombreDOeufs * prixDUnOeuf;
// console.log(prixDesOeufs);


// function Modale(nom) {
//   alert("Bonjour " + nom);
// }

// let liste_arr = new Array() ;
// liste_arr[0] = "quelques bananes" ;
// liste_arr[1] = "shampooing" ;
// liste_arr[2] = "un kilo de pommes de terre" ;
// liste_arr[3] = "une boîte de petits pois" ;
// liste_arr[4] = "dentifrice" ;
// liste_arr[5] = "une tablette de chocolat" ;
// alert(liste_arr[2]) ;

// let arr = ['toto','titi','tata'];
// arr.sort(0);
// console.log(arr[2]);

// let position = 5;
// let taille = 12;
// let calcul;
// calcul = (position++) * taille ;
// console.log(calcul);


// var a = 5;
// var b = "5";
// if (a !== b) {
//   alert("a et b sont différents.");
// }
// console.log()

/* on crée et assigne des valeurs en même temps au tableau */
// var lesMois_arr = [
//     "",
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ];
//   var leMois = 2;
//   var txt = "";
//   switch (leMois) {
//     case 1:
//       txt = "Envoyer les voeux.";
//       break;
//     case 2:
//       txt = "Préparer WE au ski.";
//       break;
//     case 3:
//       txt = "Ménage de printemps.";
//       break;
//     case 4:
//       txt = "Invitation anniversaire le 16.";
//       break;
//     case 5:
//       txt = "Révision avant examen.";
//       break;
//     case 6:
//       txt = "Examen...";
//       break;
//     case 7:
//     case 8:
//       txt = "Les Vacances...";
//       break;
//     case 9:
//       txt = "Faire les vendanges";
//       break;
//     case 10:
//       txt = "Préparer la rentrée";
//       break;
//     case 11:
//       txt = "Vérifier déguisement Halloween";
//       break;
//     case 12:
//       txt = "Ne pas acheter les cadeaux au dernier moment.";
//       break;
//     default:
//       txt = "Erreur sur le mois.";
//   }
//   alert("Pour le mois de " + lesMois_arr[leMois] + " penser à : " + txt);

//   for (let compteur = 1; compteur <=12; compteur++){
//     Action;
// }

// var lesMois_arr = [
//     "",
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ];
//   var txt = "";
//   for (var compteur = 1; compteur <= 11; compteur++) {
//     txt += lesMois_arr[compteur] + "_";
//   }
//   for (var compteur = 12; compteur == 12; compteur++) {
//     txt += lesMois_arr[compteur] + ".";
//   }

// var somme_txt =
//     "La somme des nombres avant la première valeur négative est de : ";
// var negatif_txt = "La première valeur négative est : ";
// var position1_txt = "Elle est dans la case n°";
// var position2_txt = "Soit la ";
// var laBanque = [3.2, 2.7, 128, 0.5, -600.6, 14.7, 55, -23.4, 8];
// var totalAvantNegatif = 0;
// var compteur = 0;
// while (laBanque[compteur] > 0) {
//     totalAvantNegatif += laBanque[compteur];
//     compteur++;
// }
// alert(
//     somme_txt +
//     totalAvantNegatif +
//     "<br />" +
//     negatif_txt +
//     laBanque[compteur] +
//     "<br />" +
//     position1_txt +
//     compteur +
//     " " +
//     position2_txt +
//     (compteur + 1) +
//     "ème case"
// );
// console.log(txt);

// function sortie(id,txt) {
//     document.getElementById(id).innerHTML += txt;
// }

// sortie ("sortie","Bonjour ammar");
// sortie ("sortie", "Bonjour shihan");

// function dire(alerter) {
//     document.getElementById("dire").innerHTML = alerter;
// }
// dire ("Attention zone intérdite !!");



// function afficherLeMenu(afficheOuCache) {
//     if (afficheOuCache === true) {
//       // le code qui permet l’affichage du menu.
//     } else {
//       // le code qui cache le menu.
//     }
//   }

// var a = 5;
// var b = 5;
// function multiplication(param1, param2) {
//   return param1 * param2;
// }
// var c = multiplication(a, b);
// var d = multiplication(c, c);
// var e = multiplication(a, d);
// console.log(e);

// function resultatTest() {

//     let data={};

//     data.val1 = 5;
//     data.val2 = 7;
//     console.log(data);
//     return data;
//   }

//   let toto = resultatTest();
//   alert(toto.val1 + " " + toto.val2);
//   console.log(toto);




// mercredi 16 ///// 


// Array.forEach(Element) => {  /* à voir .. en détaille*/
//   console.log(Element);

// });

// dividende = 10;
// try {
//   resultat = dividende / diviseur;
// } catch (exception) {
//   alert("Division Impossible");
// }

// dividende = 10;
// try {
//   resultat = dividende / diviseur;
// } catch (diviseur) {
//   alert("Division Impossible");
// } finally {
//   diviseur = 2;
//   resultat = dividende / diviseur;
//   alert("Le résultat de la division est : " + resultat);
// }

// document.write(document.title);
// alert("Ceci est une boîte de dialogue affichée par JavaScript");

// confirm("ok = 0, Annuler = 1");

// var reponse=window.confirm("ok = true, Annuler = false");
// alert("la valeur de la variable réponse est : "+reponse);
// console.log(reponse);

// nom=prompt("Quel est votre nom ?", "Saisir votre nom ici");
// prenom=prompt("Quel est votre prenom ?", "Saisir votre prenom ici");
// alert("Votre nom complet est : \r"+nom+"\r "+prenom);


// let nbVerre=prompt("Combien de verre avez-vous consomé ?", "Saisir votre réponse ici");
// let PoidsEnKg=prompt("Quel est votre poids ?", "Saisir votre réponse ici");
// let tauxAlcoolemie=(nbVerre * 10 )/PoidsEnKg *0.7;
// alert("Votre taux d'alcolemie est :" +tauxAlcoolemie);
// // console.log(tauxAlcoolemie);

// function voiture(prop1, prop2, prop3) {
//   this.prop1 = prop1;
//   this.prop2 = prop2;
//   this.prop3 = prop3;
// }
// // Vous pouvez ensuite réutiliser l'objet à l'aide de mots clés let et ...
// let monobjet = new voiture("valeur1", "valeur2", "valeur3",);
// console.log(monobjet);

// 

// class Voiture {
//   constructor(hauteur, largeur) {
//     this.hauteur = hauteur;
//     this.largeur = largeur;
//   }
// }
// let maVoiture = new Voiture(1.5, 1.9);
// console.log(maVoiture)

// window.document.OnLoad=alert("Cette fenêtre s’affiche au moment du chargement de la page");

// function affiche(nombouton) {
//   alert("Vous avez cliqué sur le bouton : " + nombouton);
// }

// agent=navigator.userAgent;
// alert(agent);

// navigateur = navigator.appName;
// version = navigator.appVersion;
// plateforme = navigator.platform;
// cookie = navigator.cookieEnabled;
// if (cookie == true) {
//   alert(
//     "Vous utilisez actuellement " +
//       navigateur +
//       " " +
//       version +
//       "\r comme navigateur Internet, sur une plate-forme de type :" +
//       plateforme +
//       " avec les cookies activés"
//   );
// } else {
//   alert(
//     "Vous utilisez actuellement " +
//       navigateur +
//       " " +
//       version +
//       "\rcomme navigateur Internet, sur une plate-forme de type :" +
//       plateforme +
//       " Attention ! les cookies ne sont pas activés"
//   );
// }

// fenetre = window.open(
//   "lesitedugreta.fr",
//   "Nouvelle",
//   "height=400,width=600,menubar=yes,toolbar=yes,resizable=no,scrollbar=no"
// );

// function tailleposition() {
//   let myWindow = window.open("", "myWindow", "width=600, height=400");
//   for (i = 0; i < 200; i++) {
//     h = 4;
//     z = 4;
//     myWindow.moveBy(h, z);
//     myWindow.resizeBy(h, z);
//   }
// }

// var alargeur = screen.availWidth;
// var ahauteur = screen.availHeight;
// var largeur = screen.width;
// var hauteur = screen.height;
// var couleurs = screen.colorDepth;
// alert(
//   "La résolution de votre écran est de : " +
//     largeur +
//     " pixels de largeur et de " +
//     hauteur +
//     "pixels en hauteur avec une palette de couleurs de " +
//     couleurs +
//     " bits"
// );
// alert(
//   "La surface utile de votre affichage n’est que de " +
//     alargeur +
//     "pixels de largeur et de " +
//     ahauteur +
//     " pixels en hauteur"
// )

var texte = prompt(
  "Saisissez une chaîne de caractères :",
  "Saisissez ici votre chaîne decaractères"
);
document.write("Voici la chaîne de caractères en gras :");
document.write(texte.bold());
document.write("Voici la chaîne de caractères en italique : ");
document.write(texte.italics());
document.write("Voici la chaîne de caractères en caractèresclignotants :");
document.write(texte.blink());
document.write("Voici la chaîne de caractères en rouge : ");
document.write(texte.fontcolor("red"));
document.write("Voici la chaîne de caractères barrée : ");
document.write(texte.strike());
document.write("Voici la chaîne de caractères en différentes tailles :");
for (i = 0; i < 7; i++) {
  document.write(texte.fontsize(i));
}