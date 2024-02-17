const express = require("express");
const app = express();
const port = 3000;
const { connecttomongodb } = require("./connect");
connecttomongodb("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("successfully mongodb connected");
});

const urlroute = require("./routes/url");
app.use(express.json());
app.use("/url", urlroute);

app.listen(port, function () {
  console.log(`server start at port : ${port}`);
});
