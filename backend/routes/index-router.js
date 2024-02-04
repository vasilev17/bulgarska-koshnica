var express = require("express");
const indexRouter = express.Router();

// TEMP DEV LANDING PAGE
indexRouter.get("/", function (req, res, next) {
  res.send("Api is working...");
});

module.exports = indexRouter;
