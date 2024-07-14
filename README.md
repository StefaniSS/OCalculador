# Projeto de Cálculo Básico

Este projeto é um simples programa JavaScript que permite ao usuário inserir **dois números** e realizar diversas operações matemáticas e verificações. 

## Funcionalidades

O programa possibilita o cálculo de:

- Soma dos dois números;
- Subtração dos dois números;
- Multiplicação dos dois números;
- Divisão dos dois números;
- Resto da divisão dos dois números.

Além disso, o programa verifica se:

- A soma dos dois números é par ou ímpar;
- Os dois números inseridos são iguais ou diferentes.

## Como Utilizar

1. Ao iniciar o programa, um alerta será exibido solicitando ao usuário que insira dois números.
2. O usuário deve digitar o primeiro número na caixa de prompt que aparecerá.
3. Em seguida, o usuário deve digitar o segundo número na segunda caixa de prompt.
4. O programa realizará automaticamente os cálculos e exibirá os resultados em alertas sequenciais.

## Exemplo de Código

Aqui está o código completo do programa:

```javascript
alert("Vamos calcular, insira 2 números a sua escolha.");

let numberOne =  prompt("Digite o primeiro número.");
let numberTwo = prompt("Digite o segundo número.");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const restDiv = numberOne % numberTwo;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);

let numberOneEven = numberOne % 2 === 0;
let numberTwoEven = numberTwo % 2 === 0;
let sameNumber = numberOne === numberTwo;

if (numberOneEven) {
    alert("O primeiro número é par");
} else {
    alert("O primeiro número é ímpar");
}

if (numberTwoEven) {
    alert("O segundo número é par!");
} else {
    alert("O segundo número é ímpar!");
}

if (sameNumber) {
    alert("Os números são iguais!");
} else {
    alert("Os números são diferentes!");
}

alert("Chegamos ao fim, obrigada!");
```

## Requisitos

- Um navegador web moderno para executar o JavaScript.
- Nenhuma biblioteca ou dependência adicional é necessária.

## Notas Finais

Este projeto é ideal para iniciantes em programação que desejam praticar conceitos básicos de JavaScript, como entrada de usuário, operadores matemáticos e condicionais. 

Sinta-se à vontade para modificar e expandir o código conforme necessário para atender às suas necessidades ou para adicionar novas funcionalidades!
