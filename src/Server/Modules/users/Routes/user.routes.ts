import { Router } from "express"

import { createUserController } from "../controllers/create-user.js"

const userRoutes = Router()

userRoutes.post("/", createUserController)

export { userRoutes }