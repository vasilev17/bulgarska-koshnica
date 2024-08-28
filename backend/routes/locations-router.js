var express = require("express");

const security = require("../utils/security.js");

const jsonValidator = require("../utils/jsonBodyValidator.js");

const locationsRouter = express.Router();
const locationsController = require("../controllers/locations-controller.js");

locationsRouter.post(
  "/create_location",
  jsonValidator.applyCreateLocationRules,
  jsonValidator.checkRules,
  security.verifyJWT,
  locationsController.createLocation
);

locationsRouter.get(
  "/:locationId/reviews/:reviewId",
  locationsController.getLocationReviews
);

module.exports = locationsRouter;
