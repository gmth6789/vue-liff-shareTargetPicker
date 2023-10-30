const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();
app.use(serveStatic(__dirname));
app.use("/", serveStatic(path.join(__dirname, "/public")));
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
const port = process.env.PORT || 8080;
app.listen(port);
console.log("server started " + port);
