const MAX_MYSQL_KEY_VALUE = 2147483647;
const MIN_MYSQL_KEY_VALUE = 0;

const { body, validationResult } = require("express-validator");

const nameChain = body("name").isString().isLength({ min: 5, max: 50 });

const productNameChain = body("product_name")
  .isString()
  .isLength({ min: 3, max: 50 });

const priceChain = body("price").isFloat({ min: 0, max: 9999.99 });

//Not sure about this one, but I believe we represent 0 as /бр and 1 as /кг
const priceMeasurementChain = body("price_measurement").isInt({
  min: 0,
  max: 1,
});

const passwordChain = body("password").isString().isLength({ min: 5, max: 50 });
const old_passwordChain = body("old_password")
  .isString()
  .isLength({ min: 5, max: 50 });
const new_passwordChain = body("new_password")
  .isString()
  .isLength({ min: 5, max: 50 });

const emailChain = body("email").isEmail().isLength({ min: 5, max: 50 });

const phoneNumberChain = body("phone_number")
  .isString()
  .isLength({ min: 9, max: 14 });

// const userIdChain = body("user_id").isInt({ min: 1 });

const addressChain = body("address").isString().isLength({ max: 100 });

const categoryChain = body("category").isInt({
  min: 0,
  max: 10 /* Dummy values TODO CHANGE*/,
});
const regionChain = body("region").isInt({
  min: 0,
  max: 10 /* Dummy values TODO CHANGE*/,
});
const deliveryChain = body("delivery").isInt({ min: -1, max: 1000 }); // TODO FIX

const descriptionChain = body("description").isString().isLength({ max: 1000 });

const keywordsChain = body("keywords").isString({ max: 500 }).optional();

const coordinatesChain = body(["latitude", "longtitude"]).isFloat();
const coordinatesPairChain = body([
  "loc1_longtitude",
  "loc1_latitude",
  "loc2_longtitude",
  "loc2_latitude",
]).isFloat();

const scheduleChain = body("schedule")
  .isString()
  .isLength({ min: 28, max: 28 })
  .optional();

const posTerminalChain = body("pos_terminal").isInt({ min: 0, max: 1 });

const websiteChain = body("website")
  .isString()
  .isLength({ max: 100 })
  .optional();

const imageChain = body("image").optional(); // TODO IMPROVE

const reportTypeChain = body("report_type").isInt({ min: 0 }); // TODO ADD MAX VALUE FOR REPORT TYPE

const reportContentChain = body("content")
  .isString()
  .isLength({ max: 1000 })
  .optional();

// TODO might mix with content in db and here
const reviewCommentChain = body("comment")
  .isString()
  .isLength({ max: 350 })
  .optional();

const reviewIdChain = body("review_id")
  .isInt({ min: MIN_MYSQL_KEY_VALUE, max: MAX_MYSQL_KEY_VALUE })
  .optional();

const ratingChain = body("rating")
  .isInt({ min: 0, max: 5 /* Dummy values TODO CHANGE */ })
  .optional();

const applyRegisterRules = [
  nameChain,
  emailChain,
  passwordChain,
  phoneNumberChain,
];

const applyLoginRules = [emailChain, passwordChain];

const applyCreateLocationRules = [
  addressChain,
  emailChain,
  nameChain,
  categoryChain,
  deliveryChain,
  descriptionChain,
  imageChain,
  keywordsChain,
  coordinatesChain,
  regionChain,
  phoneNumberChain,
  posTerminalChain,
  scheduleChain,
  websiteChain,
];

const applyReportLocationRules = [
  reportTypeChain,
  reportContentChain,
  reviewIdChain,
];

const applyCreateReviewRules = [reviewCommentChain, ratingChain];

const applyUpdatePasswordRules = [old_passwordChain, new_passwordChain];

const applyGetMapLocationsRules = [coordinatesPairChain];

const applyUpdateProductRules = [
  imageChain,
  productNameChain,
  priceChain,
  priceMeasurementChain,
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // For compatibility with express-validator
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  applyRegisterRules,
  applyLoginRules,
  applyCreateLocationRules,
  applyReportLocationRules,
  applyCreateReviewRules,
  applyUpdatePasswordRules,
  applyGetMapLocationsRules,
  applyUpdateProductRules,
  checkRules,
};
