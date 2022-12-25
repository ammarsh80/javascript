let produits = [
  ["", "Mai", "Juin", "Juillet"],
  ["Abricot", 5.80, 3.37, 3.72],
  ["Fraise", 10.57, 11.11, 12.84],
  ["Poireau", 1.66, 2.34, 1.98],
  ["Tomate", 4.34, 3.13, 2.77]
];

for (let i = 1; i < produits.length; i++) {
  console.log(produits[i][0] + " coutait " + produits[i][1] + " euros le kilo en " + produits[0][1] + ".");
  console.log(produits[i][0] + " coutait " + produits[i][2] + " euros le kilo en " + produits[0][2] + ".");
  console.log(produits[i][0] + " coutait " + produits[i][3] + " euros le kilo en " + produits[0][3] + ".");
}
// /**Générer un tableau sans head*/
function generateTableHead(table, data) {
  for (let key of data) {
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(produits[0]);
generateTableHead(table, data);
generateTable(table, produits);

// /**Générer un tableau avec head */
// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }


// let produits = [
//   { "" : "Abricot", Mai: 5.80, Juin: 3.37, Juillet: 3.72},
//   {""  : "Fraise", Mai: 10.57, Juin: 11.11, Juillet: 12.84},
//   { "" : "Poireau", Mai: 1.66, Juin: 2.34, Juillet: 1.98},
// ];




// // Create a table with 4 rows and 4 columns ///////////////////////
// let table = document.createElement("table");
// // Create 4 rows
// for (let i = 0; i < 4; i++) {
//   let row = document.createElement("tr");

//   // Create 4 columns
//   for (let j = 0; j < 4; j++) {
//     let col = document.createElement("td");
//     // col.innerHTML = "Col" + j;
//     row.appendChild(col);
//   }
//   table.appendChild(row);
// }
// // Add table to DOM
// document.body.appendChild(table);

// document.write("<br>"),
// document.write("<br>"),

// let tableau = document.getElementsByTagName("table")[0];
// let rows = table.getElementsByTagName("tr");
// let rowData = {};
// function readTable() {
//   for (let i = 0; i < rows.length; i++) {
//     rowData[cells[0].innerText] = cells[1].innerText;
//     let cells = rows[i].getElementsByTagName("td");
//     }
//     alert (rowData);
//   }