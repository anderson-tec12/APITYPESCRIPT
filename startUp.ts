//configuração de middleware e express

import * as express from "express";
import * as bodyParser from "body-parser";

import db from "./infra/db";
import newController from "./controller/newController";

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

    //rotas
    this.app.route("/api/v1/news").get(newController.get);
    this.app.route("/api/v1/news/:id").get(newController.getById);
    this.app.route("/api/v1/news").post(newController.create);
    this.app.route("/api/v1/news/:id").put(newController.update);
    this.app.route("/api/v1/news/:id").delete(newController.delete);
  }
}

export default new StartUp();
