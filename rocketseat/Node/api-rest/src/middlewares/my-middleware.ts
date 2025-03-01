import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.error(error); // Para depuração
  return response.status(500).json({ message: "Erro interno do servidor" });
}
