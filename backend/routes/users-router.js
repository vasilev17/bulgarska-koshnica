var express = require("express");

const security = require("../utils/security.js");

const usersRouter = express.Router();
const usersControllers = require("../controllers/users-controller.js");

usersRouter.get("/", security.verifyJWT, usersControllers.getUserData);

usersRouter.get("/name", security.verifyJWT, usersControllers.getUserName);

usersRouter.get(
  "/locations",
  security.verifyJWT,
  usersControllers.getUserLocations
);

module.exports = usersRouter;
