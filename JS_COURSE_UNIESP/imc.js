function IMC(altura,peso,sexo){
  
    let imc = peso / (Math.pow(altura,2));
    let resposta = '';

    if((imc < 19.1 && sexo === 'fem') || (imc < 20.7 && sexo === 'masc')){

        resposta = 'Abaixo do peso';
        return `${resposta} - IMC: ${imc}`;

    }else if (((imc > 19.1 && imc < 25.8) && sexo === 'fem') || ((imc > 20.7 && imc < 26.4) && sexo === 'masc')){

        resposta = 'Peso Normal';
        return `${resposta} - IMC: ${imc}`;

    }else if (((imc > 25.8  && imc < 27.3) && sexo === 'fem') || ((imc > 26.4 && imc < 27.8 ) && sexo === 'masc')){

        resposta = 'Sobrepeso';
        return `${resposta} - IMC: ${imc}`;

    }else{
        resposta = 'Obeso';
        return `${resposta} - IMC: ${imc}\nSexo: ${sexo}`;
    }
}

console.log("Questão 2:")
console.log(IMC(1.80,62,"fem"));