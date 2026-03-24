function ex01(){
    let ligado = "nao";
    let numero = 0;
    let total = 0;
    while (true){
        numero = (Number(prompt("Digite um numero:")));
        total += numero;
        ligado = (prompt("voce deseja sair?(sim/nao)"));
        if (ligado === "sim"){
            window.alert("total é:" + total);
            break;
        }
    }

}
