var express = require("express");

const security = require("../utils/security.js");
const jsonValidator = require("../utils/jsonBodyValidator.js");

const authRouter = express.Router();
const authControllers = require("../controllers/auth-controller");

authRouter.post(
  "/register",
  jsonValidator.applyRegisterRules,
  jsonValidator.checkRules,
  authControllers.register
);

authRouter.post(
  "/login",
  jsonValidator.applyLoginRules,
  jsonValidator.checkRules,
  authControllers.login
);

authRouter.post("/logout", security.verifyJWT, authControllers.logout);
authRouter.post("/refresh", authControllers.refresh);

authRouter.post(
  "/password",
  security.verifyJWT,
  jsonValidator.applyUpdatePasswordRules,
  jsonValidator.checkRules,
  authControllers.updatePassword
);

module.exports = authRouter;
