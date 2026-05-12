// config.ts
import dotenv from "dotenv";
dotenv.config();

export const databaseConfig = {
    development: {
        username: process.env.DB_USERNAME!,
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME!,
        host: process.env.DB_HOST!,
        dialect: process.env.DB_DIALECT!
    }
}