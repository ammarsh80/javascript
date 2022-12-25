// const horloge = {
//     secondes: new Date().getSeconds(),
//     minutes: new Date().getMinutes(),
//     heures: new Date().getHours(),
//     plusTard: function() {
//       this.secondes += 28;
//       this.minutes += 21;
//       if (this.secondes > 59) {
//         this.minutes++;
//         this.secondes -= 60;
//       }
//       if (this.minutes > 59) {
//         this.heures++;
//         this.minutes -= 60;
//       }
//       if (this.heures > 23) {
//         this.heures -= 24;
//       }
//     }
//   };

//   document.querySelector("#plusTard").addEventListener("click", function() {
//     horloge.plusTard();
//   });

// let horloge = {
//     secondes: new Date().getSeconds(),
//     minutes: new Date().getMinutes(),
//     heures: new Date().getHours(),
// }
//     function plusTard() {
//         this.secondes += 0;
//         this.minutes += 10;
//         if (this.secondes >= 60) {
//             this.minutes += 1;
//             this.secondes -= 60;
//         }
//         if (this.minutes >= 60) {
//             this.heures += 1;
//             this.minutes -= 60;
//         }
//     }

// console.log(horloge);
// document.getElementById("btnPlusTard").addEventListener("click", function () {
//     plusTard();
// });




// let horloge = {
//     secondes: new Date().getSeconds(),
//     minutes: new Date().getMinutes(),
//     heures: new Date().getHours(),

//     plusTard: function () {
//         this.secondes += 28;
//         this.minutes += 21;
//         if (this.secondes >= 60) {
//             this.minutes += 1;
//             this.secondes -= 60;
//         }
//         if (this.minutes >= 60) {
//             this.heures += 1;
//             this.minutes -= 60;
//         }
//     }
// }

// document.getElementById("btnPlusTard").addEventListener("click", function () {
//     horloge.plusTard();
// });


let horloge = {
    heures: new Date().getHours(),
    minutes: new Date().getMinutes(),
    secondes: new Date().getSeconds(),
    
    plusTard: function(){
        this.minutes += 21;
        this.secondes += 28;
        if (this.secondes > 59){
            this.minutes += 1;
            this.secondes = this.secondes - 60;
        }
        if (this.minutes > 59){
            this.heures += 1;
            this.minutes = this.minutes - 60;
        }
        if (this.heures > 23){
            this.heures = this.heures - 24;
        }
    }
}
