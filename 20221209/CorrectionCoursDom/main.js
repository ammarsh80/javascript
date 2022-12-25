let h1 = document.querySelectorAll("h1");
let div = document.querySelectorAll("div");
let i = 0;

// div.forEach((element, i) => {
//   element.setAttribute("id", "div-" + i);
// });
// function showHxContent() {
//   document.querySelector("#div-" + i).style.display = "block";
//   i++;
//   if (i > div.length) {
//     i = 0;
//   }
// }

// function showHxContent() {
//   h1[i].nextElementSibling.style.display = "block";
//   i++;
//   if (i > h1.length - 1) {
//     i = 0;
//   }
// }

// function showHxContent() {
//   event.target.nextElementSibling.style.display = "block";
// }

// function showHxContent() {
//   this.event.target.nextElementSibling.style.display = "block";
// }

// h1.forEach((element, i) => {
//   element.setAttribute("onClick", "showHxContent(" + i + ")");
// });
// function showHxContent(x) {
//   h1[x].nextElementSibling.style.display = "block";
// }

h1.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.nextElementSibling.style.display = "block";
  });
});
function showHxContent(x) {}

function hideAllDivs() {
  div.forEach((element) => {
    element.style.display = "none";
  });
}

function alertTitle() {
  const title = parseInt(document.querySelector("#title").value) - 1;
  if (!isNaN(title) && title < h1.length) {
    alert(h1[title].textContent);
    //   alert(h1[title].innerText);
  }
}
