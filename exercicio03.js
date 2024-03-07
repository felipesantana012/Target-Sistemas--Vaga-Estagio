/**3 ) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, _9__
b) 2, 4, 8, 16, 32, 64, __128__
c) 0, 1, 4, 9, 16, 25, 36, _49___
d) 4, 16, 36, 64, _100___
e) 1, 1, 2, 3, 5, 8, _13___
f) 2,10, 12, 16, 17, 18, 19, _200__ */

console.log('-----------Questão A-----------');
let num = 10;
for(let i=1; i<=num; i+=2){
        console.log(i);    
}

//-----------------------------------------
console.log('-----------Questão B-----------');
let num2 = 200;
for(let i=2; i<=num2; i=i*2){
   console.log(i)
}

//-----------------------------------------
console.log('-----------Questão C-----------');
let num3 = 10;
for(let i=0; i<=num3; i++){
   console.log(i*i)
}

//-----------------------------------------
console.log('-----------Questão D-----------');
let num4 = 10;
for(let i=0; i<=num4; i+=2){
   console.log(i*i)
}

//-----------------------------------------
console.log('-----------Questão E-----------');
const sequenciaFibonacci = (numero) => {
    let sequencia = [0, 1];
    while (sequencia[sequencia.length - 1] < numero) {
        let proxNumero = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
        sequencia.push(proxNumero);
    }
    return sequencia;
}  
console.log(sequenciaFibonacci(10));

//-----------------------------------------
console.log('-----------Questão F-----------');
const numero = require('numero-por-extenso');
const logicaNumero = [];
let m = 209;

for(let i=0; i<m; i++){
    let numEscrito = numero.porExtenso(i);
    if(numEscrito.charAt(0) == 'd'){
        logicaNumero.push(i);
    }
}
console.log(`O ${logicaNumero} Fazem parte da logica da questão. Todos começam com D`);

