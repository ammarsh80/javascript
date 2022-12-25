// function Mydate(){
//     setTimeout("Mydate()",1000);
//     d=new Date();
//     h=d.getHours();
//     m=d.getMinutes();
//     s=d.getSeconds();
//     if (s%2==0)
//     sep=":";
//     else
//     sep=" "
//     if (h<10) h="0"+h;
//     if (m<10) m="0"+m;
//     if (s<10) s="0"+s;
//     document.Mydate.horloge.value=h+":"+m+sep+s;

// }

// let Mois = ["Janvier", " Février", " Mars", " Avril", " Mai",
//     " Juin", " Juillet", " Août", " Septembre", " Octobre", " Novembre", " Decembre"];
// for (i = 0; i < 12; i++) {
//     ListeMois= Mois[i];
// }

// let jour = ["Dimanche","Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi","Samedi"];
// for (d=0; ii < 7; d++){
//     ListeDay= jour[d];
// }

//     d=new Date();
//     mm=d.getMonth();

//  console.log(mm);






// function lesMois() {
//     var lesMois = new Array ("janvier", "février", "mars",
//     "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novenbre", "Décembre");
//     for (var i = 0; i < 12; i++)
//     <option> lesMois[i] </option> ;

    
// }

// function AfficherMois()
// {
//   var liste;
//   var mois = new Array ("janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novenbre","Décembre") ;
//   var i, op;
 
//   liste = document.createElement("select");
//   document.body.appendChild(liste);
//   for (i=0; i<mois.length; i++)
//   {
//     op = new Option(mois[i], "", false, false);
//     liste.options.add(op);
//   } 
// }

aujourdhui = new Date();
nombrejour = aujourdhui.getDay();
// if (nombrejour < 10) {
//   nombrejour = "0" + nombrejour;
// }
jour = aujourdhui.getDate();
mois = aujourdhui.getMonth() + 1;
annee = aujourdhui.getFullYear();
switch (nombrejour) {
  case 1:
    nomjour = "lundi";
    break;
  case 2:
    nomjour = "mardi";
    break;
  case 3:
    nomjour = "mercredi";
    break;
  case 4:
    nomjour = "jeudi";
    break;
  case 5:
    nomjour = "vendredi";
    break;
  case 6:
    nomjour = "samedi";
    break;
  case 7:
    nomjour = "dimanche";
    break;
}
switch (mois) {
  case 1:
    nomois = "janvier";
    break;
  case 2:
    nomois = "février";
    break;
  case 3:
    nomois = "mars";
    break;
  case 4:
    nomois = "avril";
    break;
  case 5:
    nomois = "mai";
    break;
  case 6:
    nomois = "juin";
    break;
  case 7:
    nomois = "juillet";
    break;
  case 8:
    nomois = "août";
    break;
  case 9:
    nomois = "septembre";
    break;
  case 10:
    nomois = "octobre";
    break;
  case 11:
    nomois = "novembre";
    break;
  case 12:
    nomois = "décembre";
    break;
}
alert(
  "Nous sommes le " + nomjour + " " + jour + " " + nomois + " " + annee
);