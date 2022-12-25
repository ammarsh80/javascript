function Mydate(){
    setTimeout("Mydate()",1000);
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    if (s%2==0)
    sep=":";
    else
    sep=" "
    if (h<10) h="0"+h;
    if (m<10) m="0"+m;
    if (s<10) s="0"+s;
    document.Mydate.horloge.value=h+":"+m+sep+s;

}