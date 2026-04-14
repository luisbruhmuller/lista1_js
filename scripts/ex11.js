function ex11() {
    let salario_informado = Number(prompt("Informe o salário do funcionário:"));
    let taxa_desconto;
    let percentual;

    if (salario_informado <= 1000.00) {
        taxa_desconto = 0.08;
        percentual = "8%";
    } else if (salario_informado <= 1500.00) {
        taxa_desconto = 0.085;
        percentual = "8,5%";
    } else {
        taxa_desconto = 0.09;
        percentual = "9%";
    }

    let valor_desconto = salario_informado * taxa_desconto;
    let salario_liquido = salario_informado - valor_desconto;

    console.log("Salário informado: R$ " + salario_informado.toFixed(2));
    console.log("Taxa de desconto aplicada: " + percentual);
    console.log("Valor do desconto: R$ " + valor_desconto.toFixed(2));
    console.log("Salário líquido: R$ " + salario_liquido.toFixed(2));
}