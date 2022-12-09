const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const PORT = 3000;

const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://dana:8489958@mycluster.rvwy5hc.mongodb.net/test',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});