/*
    Nesse programa o usuário pode insirir **dois números** e, a partir daí, calcular:

    - A soma dos dois números;
    - A subtração dos dois números
    - A multiplicação dos dois números;
    - A divisão dos dois números;
    - O resto da divisão dos dois números;

    - Verifique se a soma dos dois números é par (ou ímpar);
    - Verifique se os dois números inseridos são iguais (ou diferentes).

*/

alert("Vamos calcular, insira 2 números a sua escolha.")

let numberOne =  (prompt("Digite o primeiro número."))
let numberTwo = (prompt("Digite o segundo número."))

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo 
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("Soma " + sum)
alert("Subtração " + sub)
alert("Multiplicação " + multi)
alert("Divisão " + div)
alert("Resto da divisão " + restDiv)


let numberOneEven = numberOne % 2 === 0
let numberTwoEven = numberTwo % 2 === 0
let sameNumber = numberOne === numberTwo


if (numberOneEven) {
    alert("O primeiro número é par")
} else {
    alert("O primeiro número é ímpar")
};

if (numberTwoEven) {
    alert("O segundo número é par!")
} else {
    alert("O segundo número é ímpar!")
};

if (sameNumber) {
    alert("Os números são iguais!")
} else {
    alert("Os números são diferentes!")
};

alert("Chegamos ao fim, obrigada!") 


