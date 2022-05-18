// exercicio 01 - 

/* const numeroA = 10;
const numeroB = 2;
let resultado = null;

switch (resultado)
{
    
    case resultado: numeroA + numeroB; 
    console.log('Resultado da soma = ', numeroA + numeroB);

    case resultado: numeroA - numeroB;
    console.log('Resultado da subtracao = ', numeroA - numeroB);

    case resultado: numeroA * numeroB;
    console.log('Resultado da multiplicacao = ', numeroA * numeroB);

    case resultado: numeroA / numeroB;
    console.log('Resultado da divisao = ', numeroA / numeroB);

    case resultado: numeroA % numeroB;
    console.log('Resultado do modulo = ', numeroA % numeroB);

}*/


// exercicio 02 - Imprimir o maior de dois numeros

/*const primeiroNumero = 35;
const segundoNumero = 55;

if (primeiroNumero > segundoNumero){
    console.log('Primeiro número é maior que o segundo!');
}else{
    console.log('O segundo número é maior que o primeiro!');
}*/

// exercicios 03 - imprimir o maior em três números 

/*const numero1 = 15;
const numero2 = 36;
const numero3 = 5;

if (numero1 > numero2 && numero1 > numero3 ){
    console.log('O primeiro número é o maior!', + numero1);
}else if (numero2 > numero3){
    console.log('O segundo número é o maior!', numero2);
}else {
    console.log('O terceiro número é o maior!', + numero3);
};*/

//exercicio 04 - definir um valor numa const, retorne 'positive' caso positivo, retorne 'negative' caso negativo e 'zero' caso contratio

/*const valor = 0;

if (valor > 0){
    console.log('Positive', + valor);
}else if (valor < 0){
    console.log('Negative', + valor);
}else{
    console.log('Zero', + valor);
}*/

//Exercicio 05 - 3 const c/ 3 valores de angulos internos triangulo, true se representar um triangulo e false caso não. uma msg de erro
// para os angulos serem de um triangulo valido, a soma dos 3 devem ser 180 graus;
// Um angulo sera consoderado invalido se nao tiver um valor positivo;

const angulo1 = 70;
const angulo2 = 50;
const angulo3 = 70;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log('Esses ângulos formam um triângulo!!!');
}else{
    console.log('ERRO! Infelizmente não se trata de um triangulo!!!');
}