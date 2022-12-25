
// let liste = document.querySelector("liste");
let article1 = document.querySelector(".add1").textContent;
let article2 = document.querySelector(".add2").textContent;
let article3 = document.querySelector(".add3").textContent;
let panier = document.querySelector(".panier");

let count=0;
let nArticle=0;
function addarticle1() {
            count++;
            nArticle
    if (count == 1){
        let addedArticle = document.createTextNode(article1);
        let p = document.createElement("p");
        let pArticle = p.appendChild(addedArticle);
        let divP = document.createElement("div");
        let pNombre = document.createElement("p");
        pNombre.setAttribute("class", "prix")
        divP.appendChild(pArticle);
        divP.appendChild(pNombre);
        panier.appendChild(divP);
        let nArticle = document.createTextNode(count);
        pNombre.appendChild(nArticle);
        console.log(count);
    }

    else if (count == 2){
        // let addedArticle = document.createTextNode(article1);
        // let p = document.createElement("p");
        // let pArticle = p.appendChild(addedArticle);
        let divP = document.createElement("div");
        let pNombre = document.createElement("p");
        pNombre.setAttribute("class", "prix");
        
        // divP.appendChild(pArticle);
        divP.appendChild(pNombre);
        panier.appendChild(divP);
        let nArticle = document.createTextNode(count);
        pNombre.appendChild(nArticle);
        console.log(count);

    }
};


function addarticle2() {
    count++;
    let addedArticle = document.createTextNode(article2);
    let p = document.createElement("p");
    let pArticle = p.appendChild(addedArticle);
    let divP = document.createElement("div");
    let pNombre = document.createElement("p");
    pNombre.setAttribute("class", "prix")
    divP.appendChild(pArticle);
    divP.appendChild(pNombre);
    panier.appendChild(divP);
    if (count = 1){
        let nArticle = document.createTextNode(count);
        pNombre.appendChild(nArticle);
    }
};
function addarticle3() {
    count++;
    let addedArticle = document.createTextNode(article3);
    let p = document.createElement("p");
    let pArticle = p.appendChild(addedArticle);
    let divP = document.createElement("div");
    let pNombre = document.createElement("p");
    pNombre.setAttribute("class", "prix")
    divP.appendChild(pArticle);
    divP.appendChild(pNombre);
    panier.appendChild(divP);
    if (count = 1){
        let nArticle = document.createTextNode(count);
        pNombre.appendChild(nArticle);
    }
};
let add1 = document.querySelector(".add1");
add1.addEventListener("click", (e) => {
    addarticle1();
});
let add2 = document.querySelector(".add2");
add2.addEventListener("click", (e) => {
    addarticle2();
});
let add3 = document.querySelector(".add3");
add3.addEventListener("click", (e) => {
    addarticle3();
});

