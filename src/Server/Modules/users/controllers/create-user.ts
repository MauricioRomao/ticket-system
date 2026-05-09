import { Request, RequestHandler, Response} from "express";
import { StatusCodes } from "http-status-codes";
import { Iuser } from "../Types/user-create.js";
import * as yup from "yup"

const userSchema: yup.Schema<Iuser> = yup.object().shape({
  nome: yup.string().required(),
  telefone:yup.string().required(),
  email:yup.string().required()

});


export const creatUserController : RequestHandler= async (req, res, next)=>{
    try {
     await userSchema.validate(req.body,{abortEarly:false} )
    next()
  } catch (error) {
    const yupError = error as yup.ValidationError
    const ErrorValidation : Record<string,string> = {}
    yupError.inner.map(e => {
      
      if(e.path === undefined) return 
      ErrorValidation[e.path]=e.message
    })
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorValidation)

  }
   
}


export const create = async (req: Request<{}, {}, Iuser>, res: Response) => {

   res.status(StatusCodes.ACCEPTED).send("criado")


}