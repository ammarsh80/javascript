let milli_seconde = document.querySelector(".tim_ms");
let seconde = document.querySelector(".tim_s");
let minute = document.querySelector(".tim_m");
let heure = document.querySelector(".tim_h");

let time;

function start(){
  time = setInterval(update_chrono, 100);
  document.getElementById("start").disabled=true;

}
function stop(){
 window.clearTimeout(time);
  document.getElementById("start").disabled=false;
  
}

function reset(){
  document.getElementById("reset");
  milli_seconde.textContent = 0 + " ms";
  seconde.textContent = 0 +" s";
  minute.textContent = 0 +" m";
  heure.textContent = 0 +" h";
 ms=0;
 s=0;
 m=0;
 h=0;
 
 }

let a=100;
let ms=0;
let s=0;
let m=0;
let h=0;

function update_chrono(){
  milli_seconde.textContent = ms + " ms";
  ms +=a;
  if (ms == 1000){
    ms=0;
    s++;
    milli_seconde.textContent = ms +" ms";
    seconde.textContent = s +" s";
  }
  else if(s == 60){
    s=0;
    m++;
    seconde.textContent = s +" s";
    minute.textContent = m +" m";
}
  else if(m == 60){
    m=0;
    h++;
    minute.textContent = m +" m";
    heure.textContent = h +" h";
}

}


// function etatbouton() {
//   if (document.querySelector(".stop")) {
//     start.disabled = true; 
//   } else {
//     start.disabled = false;
//   }
// }


// function stop_chrono(){
//   milli_seconde.textContent = ms +" ms";
//   seconde.textContent = s +" s";
//   minute.textContent = m +" m";
//   heure.textContent = h +" h";
// }




// // // Function to initiate stopwatch
// // function startStopwatch() {
// //     // Get current time
// //     let time = Date.now();
  
// //     // Create interval to count time
// //     let interval = setInterval(function() {
// //       // Get current time
// //       let currentTime = Date.now();
  
// //       // Calculate the difference
// //       let diff = currentTime - time;
  
// //       // Calculate the hours, minutes and seconds
// //       let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //       let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
// //       let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
// //       // Display the stopwatch
// //       document.getElementById("stopwatch").innerHTML =
// //         hours + ":" + minutes + ":" + seconds;
// //     }, 1000);
// //   }
  
// //   // Function to stop the stopwatch
// //   function stopStopwatch() {
// //     // Stop the interval
// //     clearInterval(interval);
// //   }
  
// //   // Function to reset the stopwatch
// //   function resetStopwatch() {
// //     // Reset the stopwatch
// //     document.getElementById("stopwatch").innerHTML = "00:00:00";
// //   }

// //   let btn_start = document.createElement("BUTTON");
// // let text_start = document.createTextNode("Chronomètre (START)");
// // btn_start.appendChild(text_start);
// // document.body.appendChild(btn_start);
// // btn_start.className = "btn-start";
// // document.write("<br>");
// // document.write("<br>");

// // let btn_stop = document.createElement("BUTTON");
// // let text_stop = document.createTextNode("Chronomètre (STOP)");
// // btn_stop.appendChild(text_stop);
// // document.body.appendChild(btn_stop);
// // btn_stop.className = "btn-stop";

// //Define start and stop functions to start and stop the stopwatch
// function startStopwatch(){
//     let startTime = Date.now();
//     return startTime;
//   }
 
//   function stopStopwatch(){
//     let endTime = Date.now();
//     return endTime;
//   }
  
//   //Define calculateTime function to calculate the time difference between start and stop
//   // function calculateTime(){
//   //   let timeDifference = stopStopwatch() - startStopwatch();
//   //   return timeDifference;
//   // }
  
//   //Define formatTime function to format the time difference into hours, minutes, seconds and milliseconds
//   // function formatTime(timeDifference){
//   //   let hours = Math.floor(timeDifference / (1000 * 60 * 60));
//   //   let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   //   let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
//   //   let milliseconds = Math.floor((timeDifference % (1000)));
  
//     function formatTime(n){
//       let hours = Math.floor(n % (1000 * 60 * 60));
//       let minutes = Math.floor((n % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((n % (1000 * 60)) / 1000);
//       let milliseconds = Math.floor((n % (1000)));
    
    
//     let formattedTime = `${hours}h:${minutes}m:${seconds}s:${milliseconds}ms`;
//     return formattedTime;
//   }
  
//   // Define main function to start and format the time
//   function sto(){
//     let endTime = stopStopwatch();
//     console.log(formatTime(endTime));
  
//   }
  
//     //   Call start function
//     let start_chrono = document.getElementById("start");
//     start_chrono.addEventListener("click", (e) => {
//     startStopwatch();
//     let startTime = Date.now();
//     formatTime(startTime);
//     console.log(formatTime(startTime));
    
//   });
  
//   let stop_chrono = document.getElementById("stop");
//   stop_chrono.addEventListener("click", (e) => {
//     sto();
//   });

  
//   // setInterval(start, 1000);
//   // function increasTime() {
//   //   let startTime = Date.now();
//   //   startTime=  startTime++
//   // }