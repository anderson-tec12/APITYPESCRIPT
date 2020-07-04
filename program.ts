// configuração de porta e listener
import StartUp from "./startUp";

let port = process.env.PORT || "3060";

StartUp.app.listen(port, () => {
  console.log("Projeto rodando na porta", port);
});
