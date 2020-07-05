//configuração de middleware e express

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import db from "./infra/db";
import Auth from "./infra/auth";
import Uploads from "./infra/uploads";
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

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET, OPTIONS, PUT, POST,DELETE",
      origin: "*",
    };

    this.app.use(cors(options));
  }

  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route("/").get((req, res) => {
      try {
        res.send("Arquivo enviado com sucesso");
      } catch (err) {
        console.log(err);
      }
    });

    this.app.route("/uploads").post(Uploads.single("file"), (req, res) => {
      res.send({ versao: "0.0.1" });
    });

    this.app.use(Auth.validate);
    //rotas
    this.app.route("/api/v1/news").get(newController.get);
    this.app.route("/api/v1/news/:id").get(newController.getById);
    this.app.route("/api/v1/news").post(newController.create);
    this.app.route("/api/v1/news/:id").put(newController.update);
    this.app.route("/api/v1/news/:id").delete(newController.delete);
  }
}

export default new StartUp();
