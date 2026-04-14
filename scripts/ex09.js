function ex09() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        console.log("Ordem decrescente: " + num1 + " e " + num2);
    } else {
        console.log("Ordem decrescente: " + num2 + " e " + num1);
    }
}