import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CreateUserService from "../Services/index.js";

export const create = async (req: Request, res: Response) => {
  try {

    const user = await CreateUserService.execute(req.body);

    return res.status(StatusCodes.CREATED).json(user);

  } catch (error: any) {
  return res.status(StatusCodes.BAD_REQUEST).json({
    error: error.message,
    details: error.errors?.map((e: any) => e.message) 
  });

  }
};


