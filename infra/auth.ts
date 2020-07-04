import * as jwt from "jsonwebtoken";
import configs from "./configs";

class auth {
  validate(req, res, next) {
    let token = req.headers["x-access-token"];

    if (token) {
      jwt.verify(token, configs.secret, function (err, decoded) {
        if (err) {
          return res.status(403).send({
            success: false,
            message: "Token invalido",
          });
        } else {
          next();
        }
      });
    } else {
      res.status(401).send({
        success: false,
        message: "401 sem autorização",
      });
    }
  }
}

export default new auth();
