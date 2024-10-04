const nome = prompt("Digite seu primeiro nome: ");
const sobrenome = prompt("Digite o seu sobrenome: ");
const campoEstudo = prompt("Qual o seu campo de estudo: ");
const anoNascimento = prompt("Digite seu ano de nascimento: ");

let idade = 2024 - anoNascimento;

window.alert(`
    <- Cadastro realizado com sucesso! ->
    
    - Nome Completo: ${nome} ${sobrenome}
    - Campo de Estudo: ${campoEstudo}
    - Idade: ${idade} anos`);
