function update() {
    let val = document.querySelectorAll(".slider");
    let c = 255 - val[0].value;
    document.querySelector("#carre").style =
        "background-color: rgb(" + c +"," +c +"," + c +"); padding:" +
        val[1].value +
        "px; height: " +
        val[2].value +
        "px; width: " +
        val[3].value +
        "px; border-radius:" +
        val[4].value +
        "px; transform : rotate(" +
        val[5].value +
        "deg);";
}