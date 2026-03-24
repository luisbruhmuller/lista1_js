function ex06(){
    let letra = "";
    letra = (prompt("digite uma letra:"))
    if (letra === "a" || letra === "e" || letra === "i" ||letra === "o" ||letra === "u"){
        letra = "vogal";
    } else{
        letra = "consoante";
    }
    window.alert(letra)
}