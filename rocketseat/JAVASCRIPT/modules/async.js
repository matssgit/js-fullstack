// Função que retorna uma Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo deu errado!");
      }
    }, 3000);
  });
}

async function fetch() {
  try {
    const response = await asyncFunction();
    console.log("Sucesso:", response);
  } catch (error) {
    console.log("Erro:", error);
  } finally {
    console.log("Fim da execução!");
  }
}

fetch();
