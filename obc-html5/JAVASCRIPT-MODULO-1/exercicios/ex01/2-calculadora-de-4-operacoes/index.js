window.alert("Bem-vindo(a) a calculadora de 4 operações!");

let num1 = parseInt(prompt("Insira o primeiro valor: "));
let num2 = parseInt(prompt("Insira o segundo valor: "));

window.alert("Calculando...");

soma = num1 + num2;
subtracao = num1 - num2;
multiplicar = num1 * num2;
divisao = num1 / num2;

window.alert(`
    <-- Calculos realizados com sucesso! -->
        ~~ Aqui estão os resultados ~~
     Numero 1:  ${num1} // Número 2:  ${num2}
     -----------------------------------------

    - Soma: ${soma}
    - Subtração: ${subtracao}
    - Multiplicação: ${multiplicar}
    - Divisão: ${divisao}`);
