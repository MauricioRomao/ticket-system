import express from "express";
import { userRoutes } from "../Modules/users/Routes/index.js";

export const mainRouter = express.Router();

mainRouter.use("/users", userRoutes);
