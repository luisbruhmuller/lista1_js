function ex10() {
    let nome = prompt("Informe o nome do funcionário:");
    let salarioBruto = Number(prompt("Informe o salário bruto:"));

    let descontoInss = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoInss;

    console.log("Nome do funcionário: " + nome);
    console.log("Salário bruto: R$ " + salarioBruto);
    console.log("Valor do desconto do INSS: R$ " + descontoInss);
    console.log("Salário líquido: R$ " + salarioLiquido);
}