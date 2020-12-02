import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection, Connection } from 'typeorm';
import express, { Express } from 'express';
import cors from 'cors';
import logger from 'morgan';
import indexRouter from '@router/index';

export default class Application {
  app: Express;

  constructor() {
    this.app = express();
  }

  async init() {
    this.initEnv();
    this.dbConnect();
    this.registerMiddleware();
    this.listen();
  }

  initEnv() {
    const envFile = `${process.env.NODE_ENV || 'development'}.env`;
    dotenv.config({ path: envFile });
  }

  dbConnect() {
    createConnection()
      .then(async (connection: Connection) =>
        console.log('Entity connected : ', connection.isConnected)
      )
      .catch((err: Error) => console.log('Entity connection error : ', err));
  }

  registerMiddleware() {
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use('/api', indexRouter);
  }

  listen() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  }
}

const application = new Application();
// Connect typeORM mysql

application.init();
