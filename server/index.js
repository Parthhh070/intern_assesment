const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DataModel = require("./model/data");

const app = express();
app.use(cors());
app.use(express());

async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/dashboardData")
    .then(console.log("connected to db"));
}

main();

app.get("/getData", async (req, res) => {
  await DataModel.find().then((data) => console.log(data));
  res.send("data sent");
});
app.listen(3001, () => {
  console.log("server is listening");
});
