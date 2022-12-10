import mongoose from "mongoose";
import express from 'express';
import { router } from "./routes.js";
import Configuration from './Configuration.js';

const app = express();

app.use(express.json());

const {MONGO_USER_NAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DB_NAME} = Configuration;

mongoose.connect(`mongodb+srv://${MONGO_USER_NAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.rvwy5hc.mongodb.net/${MONGO_DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/', router);

app.listen(Configuration.port, () => {
  console.log(`Server listening on ${Configuration.port}`);
});