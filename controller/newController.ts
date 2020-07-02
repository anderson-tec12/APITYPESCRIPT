import newService from "../services/newService";
import * as http from "http-status";

class NewController {
  sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ result: data });
  };

  get(req, res) {
    newService
      .get()
      .then((news) => this.sendResponse(res, http.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const { id } = req.params;

    newService
      .getById(id)
      .then((news) => this.sendResponse(res, http.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  create(req, res) {
    const body = req.body;

    newService
      .create(body)
      .then((news) =>
        this.sendResponse(res, http.OK, "Noticia cadastrada com sucesso")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const { id } = req.params;
    const body = req.body;

    newService
      .update(id, body)
      .then((news) =>
        this.sendResponse(
          res,
          http.OK,
          `${news.title} Noticia atualizada com sucesso`
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const { id } = req.params;

    newService
      .delete(id)
      .then(() =>
        this.sendResponse(res, http.OK, `Noticia deletada com sucesso`)
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}

export default new NewController();
