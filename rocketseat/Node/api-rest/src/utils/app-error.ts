class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message); // Chama o construtor da classe Error
    this.statusCode = statusCode;
    this.name = "AppError"; // Define o nome do erro
  }
}

export { AppError };
