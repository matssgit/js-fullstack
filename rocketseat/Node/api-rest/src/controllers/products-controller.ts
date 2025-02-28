import { Request, Response } from "express";
import { AppError } from "../utils/app-error";

export class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit} `);
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;
    if (!name) {
      throw new AppError("Nome do produto é obrigatório!", 400);
    }

    if (name.length < 6) {
      throw new AppError(
        "O nome do produto precisa ter pelo menos 6 caracteres"
      );
    }

    if (!price) {
      throw new AppError("preço do produto é obrigatório!");
    }

    if (price < 0) {
      throw new AppError("O Preço do produto não pode ser menor que zero!");
    }
    // throw new Error("Erro ao tentar criar um produto!");
    // throw new AppError("Erro ao tentar criar um produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
