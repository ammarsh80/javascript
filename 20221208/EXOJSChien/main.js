// le nom d'une classe est toujours enMAJUSCULE 
// let c'est impossible da  dans une classe

class Chien {
quantity=0;
    constructor(nom, age, race) {
        this.nom = nom;
        this.age = age;
        this.race = race;
    }
    wouaf(aboie) {
        return aboie;
    }

    mange(quantity) {
        this.quantity += quantity;
    }

    total(){
        return this.quantity;
    }
}

let chizn = new Chien("Noa, ", 3, "labradors. ");

console.log(chizn);
console.log(chizn.wouaf("brrrr"));

chizn.mange(3);
chizn.mange(2);

console.log(chizn.total());