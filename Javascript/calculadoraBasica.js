

// Função para realizar operações básicas entre dois números como: soma, substração, multiplicação e divisão.

function calculadora(x, y, operacao) {   // Função mãe

    // Entrada de dados
    x = Number(prompt('Insira o valor 1: '))
    y = Number(prompt('Insira o valor 2: '))
    operacao = prompt('Qual operação você deseja realizar? (soma, subtração, multiplicação ou divisão): ')

    var resultado = 0;  //  Variavel para armazenar o resultado da operação

    if (operacao == 'soma') {  // Operação de Soma
        resultado = x + y
        console.log(resultado)

    } else if (operacao == 'multiplicação') {  // Operação de Multiplicação
        resultado = x * y
        console.log(resultado)

    } else if (operacao == 'divisão') {  // Operação de Divisão
        resultado = x / y
        console.log(resultado)

    } else if (operacao == 'subtração') {  // Operação de Subtração
        resultado = x - y
        console.log(resultado)

    } 

    

}   
  




