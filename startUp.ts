//configuração de middleware e express

import * as express from "express";
import db from "./infra/db";

class StartUp {
  public app: express.Application;
  private _db: db;

  constructor() {
    this.app = express();
    this._db = new db();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });
  }
}

export default new StartUp();
