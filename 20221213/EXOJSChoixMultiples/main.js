let count = 0;

for (let i = 0; i < document.forms[0].length; i++) {
    if (document.forms[0][i].checked == true) {
        count++;
    }
    if (count > 5) {
        document.forms[0][5].checked = false;
        document.forms[0][6].checked = false;
        document.forms[0][7].checked = false;
        alert("Vous pouvez sélectionner 5 points au maximum !");
        break;
    }
} 