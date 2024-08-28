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
  security.verifyUserBusinessOwnership,
  locationsController.createLocation
);

locationsRouter.get(
  "/:locationId/reviews/:reviewId",
  security.verifyLocationId,
  security.verifyReviewId,
  locationsController.getLocationReviews
);

locationsRouter.post(
  "/:locationId/reports",
  security.verifyLocationId,
  jsonValidator.applyReportLocationRules,
  jsonValidator.checkRules,
  security.verifyJWT,
  security.verifyUserBusinessOwnership,
  locationsController.reportLocation
);

module.exports = locationsRouter;
