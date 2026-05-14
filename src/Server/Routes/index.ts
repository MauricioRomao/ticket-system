import express from "express";
import { userRoutes } from "../Modules/users/Routes/index.js";
import { EventosRoutes } from "../Modules/eventos/Routes/index.js";
export const mainRouter = express.Router();

mainRouter.use("/users", userRoutes);
mainRouter.use("/eventos", EventosRoutes);


