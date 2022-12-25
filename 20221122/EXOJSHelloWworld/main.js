// function bonjour() {
//     alert("Hello World");
// }

// une 1er façon de faire
// let btnbonjour = document.querySelector(".btn_bonjour");
// btnbonjour.addEventListener("click", function () {
//     alert("Hello word");
// });


// une 2er façon de faire
let btnbonjour = document.querySelector(".btn_bonjour");
btnbonjour.addEventListener("click", (e) => {
    console.log(e);
    alert("Hello word");
});