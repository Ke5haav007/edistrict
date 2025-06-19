import dotenv from 'dotenv';
import cors from 'cors';
import express, { Request, Response } from "express";
import superAdminRoutes from './routes/router';
import logger from './common/logger';
import morgan from 'morgan';


dotenv.config();

const app = express();

app.use(cors());
app.use(
  express.json({
    limit: "10mb",     
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);


app.use(morgan('combined', {
  stream: {
    write: (message: string) => logger.info(message.trim()),
  },
}));


const BASE_URL = process.env.BASE_URL || '';

console.log(`Base URL is set to: ${BASE_URL}`);
app.use(`${BASE_URL}/`,superAdminRoutes);

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong" });
});




export default app;


