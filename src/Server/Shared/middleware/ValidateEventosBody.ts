import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IEvent {
  titulo: string;
  precoBancada: number;
  precoVIP: number;
  lotacaoMaxima: number;
  dataEvento: Date;
}

const eventSchema: yup.Schema<IEvent> = yup.object().shape({
  titulo: yup
    .string()
    .min(3, "O título deve ter pelo menos 3 caracteres")
    .required("Título do evento é obrigatório"),

  precoBancada: yup
    .number()
    .typeError("O preço da bancada deve ser um número")
    .min(0, "O preço da bancada não pode ser negativo")
    .required("Preço da bancada é obrigatório"),

  precoVIP: yup
    .number()
    .typeError("O preço VIP deve ser um número")
    .min(0, "O preço VIP não pode ser negativo")
    .required("Preço VIP é obrigatório"),

  lotacaoMaxima: yup
    .number()
    .typeError("A lotação máxima deve ser um número")
    .integer("A lotação máxima deve ser um número inteiro")
    .positive("A lotação máxima deve ser maior que zero")
    .required("Lotação máxima é obrigatória"),

  dataEvento: yup
    .date()
    .typeError("Data do evento inválida")
    .min(new Date(), "A data do evento não pode ser no passado")
    .required("Data do evento é obrigatória")
});

export const validateEventBody: RequestHandler = async (req, res, next) => {
  try {
    await eventSchema.validate(req.body, { abortEarly: false });
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
