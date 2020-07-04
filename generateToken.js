const jwt = require("jsonwebtoken");

let payload = {
  iss: "omundoedos.net",
  iat: new Date().getSeconds(),
  exp: new Date().setMinutes(360),
  username: "Anderson B. Silva",
  email: "anderson.tec12@gmail.com",
};

let token = jwt.sign(payload, "batman batman batman");

console.log(payload);
console.log(token);
