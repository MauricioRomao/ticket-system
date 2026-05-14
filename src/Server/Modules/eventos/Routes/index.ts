import { Router } from "express"

import { validateEventBody} from "../../../Shared/middleware/validateEventosBody.js"
import { create} from "../controllers/create-evento.js"
import { GetAll} from "../controllers/Get-eventos.js"

const EventosRoutes = Router()

EventosRoutes.post("/", validateEventBody, create)
EventosRoutes.get("/list", GetAll )

export { EventosRoutes }