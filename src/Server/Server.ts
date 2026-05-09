                    
import express, { json } from 'express';

import cors from "cors"

import { mainRouter } from "./Routes/index.js"

const server = express();
server.use(express.json());
server.use(cors())
server.use(mainRouter); 
    
export { server };
