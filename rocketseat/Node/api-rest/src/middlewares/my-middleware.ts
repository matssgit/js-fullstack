import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  request.user_id = "123456"; // Agora TypeScript não reclama 🚀

  console.log("Passou pelo middleware");

  return next();
}
