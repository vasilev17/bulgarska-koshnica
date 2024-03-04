"use strict";

var express = require("express");
var path = require("path");

// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

const routesConfig = require("./config/routes-config");

var app = (module.exports = express());

const { globalErrorHandler } = require("./error_handling/error-handlers");

// app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "This server is not intended for UI experience. Please refer to /api/..."
  );
});

// app.get("/dbtest", (req, res) => {
//   let qr = "SELECT * FROM users";

//   // Potential timeout when waiting execution on pool's queue. Watch out for handling!
//   pool.query(qr, (err, result) => {
//     if (err) throw err;
//     res.send("inv recc");
//   });
// });

routesConfig(app);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
