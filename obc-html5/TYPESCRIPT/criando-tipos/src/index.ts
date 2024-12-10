// Uma forma ainda mais flexível de usar os tipos é criando um Alias
// Um Alias é definido usando a palavra type e existe uma convenção de se utilizar PascalCase
type Planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
let homePlanet: Planet;
homePlanet = "Terra";

// Também é possível utilizar um Alias para declarar arrays personalizados
let milkyWay: Planet[];

// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais
// limpo que se usássemos a definição inteira do tipo Planet
function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra");
  }
}
