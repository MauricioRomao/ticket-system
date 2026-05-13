import { server } from './Server/server.ts';
import { config } from 'dotenv';
config();

const startServer = () => {
  server.listen(process.env.PORT, () => {
    console.log(`App rodando na porta`);
  });
};

startServer();
