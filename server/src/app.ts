import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import logger from 'morgan';

export default class Application {
  app: Express;

  constructor() {
    this.app = express();
  }

  async init() {
    this.initEnv();
    this.registerMiddleware();
    this.listen();
  }

  initEnv() {
    const envFile = `${process.env.NODE_ENV || 'development'}.env`;
    dotenv.config({ path: envFile });
  }

  registerMiddleware() {
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    // this.app.use("/", () => ());
  }

  listen() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  }
}

const application = new Application();
application.init();
