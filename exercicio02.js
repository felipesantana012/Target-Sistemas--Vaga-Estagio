/**2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

const sequenciaFibonacci = (numero) => {
    let sequencia = [0, 1];
    while (sequencia[sequencia.length - 1] < numero) {
        let proxNumero = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        sequencia.push(proxNumero);
    }
    return sequencia;
}

const verificarNumero = (numero) => {
    const sequencia = sequenciaFibonacci(numero);
    if (sequencia.includes(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
}

verificarNumero(13);
verificarNumero(10);
