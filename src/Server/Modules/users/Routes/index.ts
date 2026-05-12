import { Router } from "express"

import { validateUserBody} from "../../../Shared/middleware/validateUserBody.js"
import { create } from "../controllers/create-user.js"

const userRoutes = Router()

userRoutes.post("/", validateUserBody, create)

export { userRoutes }