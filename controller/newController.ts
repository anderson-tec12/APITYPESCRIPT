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
  create(req, res) {}
  update(req, res) {}
  delete(req, res) {}
}

export default new NewController();
