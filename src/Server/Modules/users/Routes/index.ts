import { Router } from "express"

import { creatUserController } from "../controllers/create-user.js"

const userRoutes = Router()

userRoutes.post("/", creatUserController)

export { userRoutes }