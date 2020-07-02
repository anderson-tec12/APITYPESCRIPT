//configuração de middleware e express

import * as express from "express";
import * as bodyParser from "body-parser";
import db from "./infra/db";

class StartUp {
  public app: express.Application;
  private _db: db;
  private bodyParser;

  constructor() {
    this.app = express();
    this._db = new db();
    this._db.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });
  }
}

export default new StartUp();
