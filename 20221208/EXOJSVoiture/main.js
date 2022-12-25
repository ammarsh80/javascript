function voiture(propMarque, propModele, propAnnee, propCouleur, proplongueur) {
    this.marque = propMarque;
    this.modele = propModele;
    this.annee = propAnnee;
    this.cylindree = proplongueur;
    this.couleur = propCouleur;
}

let mavoiture = new voiture("Citroën ", "C4_ii", "2011", "Noir", "1.6 HDi-FAP_confort");
let tavoiture = new voiture("Peugeot ", "3008", "2016", "Rouge", "1.8");
let savoiture = new voiture("Opel ", "corsa", "2004", "Noir", "1.2");

alert(
    "Voici les caractéristiques de mon objet voiture :\r" +
    "\r La marque : " + mavoiture.marque +
    "\r Le modèle : " + mavoiture.modele +
    "\r L’année : " + mavoiture.annee +
    "\r La longueur " + mavoiture.cylindree +
    "\r La Couleur " + mavoiture.couleur);

alert(
    "Voici les caractéristiques de mon objet voiture :\r" +
    "\r La marque : " + tavoiture.marque +
    "\r Le modèle : " + tavoiture.modele +
    "\r L’année : " + tavoiture.annee +
    "\r La longueur " + tavoiture.cylindree +
    "\r La Couleur " + tavoiture.couleur);

alert(
    "Voici les caractéristiques de mon objet voiture :\r" +
    "\r La marque : " + savoiture.marque +
    "\r Le modèle : " + savoiture.modele +
    "\r L’année : " + savoiture.annee +
    "\r La longueur " + savoiture.cylindree +
    "\r La Couleur " + savoiture.couleur);