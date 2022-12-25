///////Partie 1 : Les couleurs  ////////////////////////////////////////////////////

function color_div(selecteur, color) {
    document.querySelector(selecteur).classList.toggle(color);
};

let rouge = document.querySelector(".rouge");
rouge.addEventListener("click", (e) => {
    color_div(".div1", "C_div1_rouge");
}
);

let vert = document.querySelector(".vert");
vert.addEventListener("click", (e) => {
    color_div(".div1", "C_div1_vert");
}
);

let bleu = document.querySelector(".bleu");
bleu.addEventListener("click", (e) => {

    color_div(".div1", "C_div1_bleu");
}
);

function toggle_div(selecteur, color) {
    document.querySelector(selecteur).classList.toggle(color);
};
let togg = document.querySelector(".togg");
let div1 = document.querySelector(".div1");
togg.addEventListener("click", (e) => {

    if (!div1.classList.contains("C_div1_blanc")) {
        toggle_div(".div1", "C_div1_blanc");
    }
    else {
        toggle_div(".div1", "C_div1_black");
    }
}
);

let count = 0;
let rain = document.querySelector(".rain");

rain.onclick = function () {
    count++;
    if (count == 1) {
        div1.style.backgroundColor = "red";

    } else if (count == 2) {
        div1.style.backgroundColor = "orange";
    } else if (count == 3) {
        div1.style.backgroundColor = "yellow";
    } else if (count == 4) {
        div1.style.backgroundColor = "green";
    } else if (count == 5) {
        div1.style.backgroundColor = "turquoise";

    } else if (count == 6) {
        div1.style.backgroundColor = "blue";
    } else if (count == 7) {
        div1.style.backgroundColor = "violet";
    } else if (count > 7) {
        div1.style.backgroundColor = "white";
    }
    rain.disabled = false;
};


function add_text() {
    let addP = document.createElement("p");
    let text = document.createTextNode("Hello Word");
    addP.appendChild(text);
    div1.appendChild(addP);

};

let hello = document.querySelector(".hello");
hello.addEventListener("click", (e) => {
    add_text();
});

function add_text_input() {
    let textsaisi = document.querySelector(".texte").value;
    let textsaisiAdded = document.createTextNode(textsaisi);
    let addP = document.createElement("p");
    addP.appendChild(textsaisiAdded);
    div1.appendChild(addP);
};

let custum = document.querySelector(".custum");
custum.addEventListener("click", (e) => {
    add_text_input();
});

let btn_range = document.querySelector(".rang");
btn_range.addEventListener("input", function (e) {
    div1.style.borderWidth = this.value + "px";
});