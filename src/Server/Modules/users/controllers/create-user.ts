import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Iuser } from "../Types/user-create.js";
import * as yup from "yup";

const userSchema: yup.Schema<Iuser> = yup.object().shape({
  nome: yup.string().required(),
  telefone: yup.string().required(),
  email: yup.string().required()
});

// Middleware de validação
export const validateUserBody: RequestHandler = async (req, res, next) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false });
    return next(); // Avança para a criação se estiver tudo correto
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const errorValidation: Record<string, string> = {};

    // Correção: mapeia apenas os campos válidos que falharam
    yupError.inner.forEach((e) => {
      if (e.path) {
        errorValidation[e.path] = e.message;
      }
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorValidation });
  }
};

// Função final que cria o utilizador
export const create = async (req: Request<{}, {}, Iuser>, res: Response) => {
  console.log("Dados recebidos com sucesso:", req.body);
  return res.status(StatusCodes.ACCEPTED).send("criado");
};
