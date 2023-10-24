function calculadora(valor1,valor2,operacao){

    let calcular = 0;

    switch(operacao){

        case '+':
            calcular = valor1 + valor2;
            return `Resultado Adição:${valor1} x ${valor2} =  ${calcular}`;
        case '-':
            calcular = valor1 - valor2;
            return `Resultado Subtração:${valor1} x ${valor2} =  ${calcular}`;
        case '/':
            calcular = valor1 / valor2;
            return `Resultado Divisão:${valor1} x ${valor2} =  ${calcular}`;
        case 'x': 
            calcular = valor1 * valor2;
            return `Resultado Multplicação:${valor1} x ${valor2} = ${calcular}`;
        default:
            calcular = 'Não existe essa operação nesta calculadora';
            return calcular;
    }

}
console.log("QUESTÃO 3:")
console.log(calculadora(5,5,'x'));
