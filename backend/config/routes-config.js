const authRouter = require("../routes/auth-router.js");
const usersRouter = require("../routes/users-router.js");
const indexRouter = require("../routes/index-router.js");

const routesConfig = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/", indexRouter);
};

module.exports = routesConfig;
