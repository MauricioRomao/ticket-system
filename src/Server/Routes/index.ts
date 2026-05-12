import express from "express";
import { userRoutes } from "../Modules/users/Routes/index.js";
import {validateUserBody} from "../Shared/middleware/validateUserBody.js"

export const mainRouter = express.Router();

mainRouter.use("/users",validateUserBody, userRoutes);
