function categirie() {
    let reponse = prompt("Quelle est ton âge ?");
    if (reponse == 6 || reponse == 7) {
        alert("Tu as " + reponse + " ans ! " + "Bienvenue dans la catégirie: Poussin !");
    }
    else if (reponse == 8 || reponse == 9) {
        alert("Tu as " + reponse + " ans ! " + "Bienvenue dans la catégirie: Pupille !");

    }
    else if (reponse == 10 || reponse == 11) {
        alert("Tu as " + reponse + " ans ! " + "Bienvenue dans la catégirie: Minime !");

    }
    else if (reponse == 12 || reponse == 13 || reponse == 14 || reponse == 15 || reponse == 16 || reponse == 17) {
        alert("Tu as " + reponse + " ans ! " + "Bienvenue dans la catégirie: Cadet !");

    }
    else {
        alert("Valeure invalide, Clique sur 'ok' pour recommencer ");
        categirie()
    }
}