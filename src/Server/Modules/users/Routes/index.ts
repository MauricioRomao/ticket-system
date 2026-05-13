import { Router } from "express"

import { validateUserBody} from "../../../Shared/middleware/validateUserBody.js"
import { create} from "../controllers/create-user.js"
import { GetAll} from "../controllers/Get-users.js"

const userRoutes = Router()

userRoutes.post("/", validateUserBody, create)
userRoutes.get("/list", GetAll )

export { userRoutes }