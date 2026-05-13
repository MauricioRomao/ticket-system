import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CreateUserService from "../Services/index.js";

export const GetAll = async (req: Request, res: Response) => {
  try {
    const users = await CreateUserService.getAll(); 

    return res.status(StatusCodes.OK).json(users);

  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: error.message
    });
  }
}; 
