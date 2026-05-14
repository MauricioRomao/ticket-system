import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IUser {
  nome: string;
  telefone: string;
  email: string;
}

const userSchema: yup.Schema<IUser> = yup.object().shape({
  nome: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "O nome não pode conter números ou caracteres especiais")
    .required("Nome é obrigatório"),

  telefone: yup
    .string()
    .matches(/^\+?[0-9\s\-\(\)]+$/, "Telefone inválido")
    .required("Telefone é obrigatório"),

  email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório")
});

export const validateUserBody: RequestHandler = async (req, res, next) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {

    const yupError = error as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupError.inner.forEach((err) => {
      if (err.path) {
        errors[err.path] = err.message;
      }
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors
    });
  }
};