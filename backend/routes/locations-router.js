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

locationsRouter.post(
  "/get_locations_between",
  jsonValidator.applyGetMapLocationsRules,
  jsonValidator.checkRules,
  locationsController.getMapLocations
);

locationsRouter.get(
  "/:locationId/reviews/:reviewId",
  security.verifyLocationId,
  security.verifyReviewId,
  locationsController.getReviews
);

locationsRouter.post(
  "/:locationId/reports",
  security.verifyLocationId,
  jsonValidator.applyReportLocationRules,
  jsonValidator.checkRules,
  security.verifyJWT,
  locationsController.reportLocation
);

locationsRouter.patch(
  "/:locationId/products/:productId",
  security.verifyLocationId,
  security.verifyProductId,
  jsonValidator.applyUpdateProductRules,
  jsonValidator.checkRules,
  security.verifyJWT,
  locationsController.updateProductInfo
);

locationsRouter.post(
  "/:locationId/reviews",
  security.verifyLocationId,
  jsonValidator.applyCreateReviewRules,
  jsonValidator.checkRules,
  security.verifyJWT,
  locationsController.createReview
);

locationsRouter.get(
  "/:locationId/contacts",
  security.verifyLocationId,
  locationsController.getContacts
);

locationsRouter.get(
  "/:locationId/delivery_pos_info",
  security.verifyLocationId,
  locationsController.getDeliveryPosInfo
);

locationsRouter.get(
  "/:locationId/schedule",
  security.verifyLocationId,
  locationsController.getSchedule
);

locationsRouter.get(
  "/:locationId/products",
  security.verifyLocationId,
  locationsController.getProducts
);

locationsRouter.get(
  "/:locationId/category",
  security.verifyLocationId,
  locationsController.getCategory
);

locationsRouter.get(
  "/:locationId/coordinates",
  security.verifyLocationId,
  locationsController.getCoordinates
);

locationsRouter.get(
  "/:locationId/description",
  security.verifyLocationId,
  locationsController.getDescription
);

locationsRouter.get(
  "/:locationId/keywords",
  security.verifyLocationId,
  locationsController.getLocationKeyWords
);

locationsRouter.get("/search", locationsController.searchLocations);

// NOTE If this get is not last in the router file it could mess
// with other URL endpoints and "steal" the request for it.
// Gives Invalid Parameters
locationsRouter.get(
  "/:locationId",
  security.verifyLocationId,
  locationsController.getLocationInfo
);

module.exports = locationsRouter;
