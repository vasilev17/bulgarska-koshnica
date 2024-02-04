var express = require("express");

const security = require("../utils/security.js");

const usersRouter = express.Router();
const usersControllers = require("../controllers/users-controller.js");

usersRouter.get("/:userId", security.verifyJWT, usersControllers.getUserData);

module.exports = usersRouter;
