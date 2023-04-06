var express = require("express");
var app = express();

const hostname = "127.0.0.1";
const port = 3001;

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/error", function (req, res) {
  res.statusCode = 500;
  app.emit("error", new Error("teste"));
  res.send("error");
});

app.on("error", (err) => console.log(err));
app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
