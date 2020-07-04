import * as mongoose from "mongoose";

class DB {
  private DB_URL = "mongodb://127.0.0.1:27017/db_portal";
  //private DB_URL = "mongodb://link-db/db_portal";

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default DB;
