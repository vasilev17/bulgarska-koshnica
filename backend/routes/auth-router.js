var express = require("express");

const security = require("../utils/security.js");
const jsonValidator = require("../utils/jsonBodyValidator.js");

const authRouter = express.Router();
const authControllers = require("../controllers/auth-controller");

authRouter.post(
  "/register",
  jsonValidator.applyRegisterUserRules,
  jsonValidator.checkRules,
  authControllers.register
);

authRouter.post(
  "/login",
  jsonValidator.applyLoginUserRules,
  jsonValidator.checkRules,
  authControllers.login
);

authRouter.post("/logout", security.verifyJWT, authControllers.logout);
authRouter.post("/refresh", authControllers.refresh);

module.exports = authRouter;
