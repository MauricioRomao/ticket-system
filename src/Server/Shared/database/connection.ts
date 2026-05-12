import { Sequelize } from "sequelize";
import { databaseConfig } from "./config/config.js";

const env = (process.env.NODE_ENV || "development") as keyof typeof databaseConfig;
const { username, password, database, host, dialect } = databaseConfig[env];

export const connection = new Sequelize(database, username, password, {
    host,
    dialect: dialect as any
});