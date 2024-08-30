const { body, validationResult } = require("express-validator");

const nameChain = body("name").isString().isLength({ min: 5, max: 50 });
const emailChain = body("email").isEmail().isLength({ min: 5, max: 50 });
const passwordChain = body("password").isString().isLength({ min: 5, max: 50 });
const phoneNumberChain = body("phone_number")
  .isString()
  .isLength({ min: 9, max: 14 });
// const userIdChain = body("user_id").isInt({ min: 1 });
const addressChain = body("address").isString().isLength({ max: 100 });
const categoryChain = body("category").isInt({
  min: 0,
  max: 10 /* Dummy values TODO CHANGE*/,
});
const deliveryChain = body("delivery").isInt({ min: -1, max: 1000 });
const descriptionChain = body("description").isString().isLength({ max: 1000 });
const keywordsChain = body("keywords").isString({ max: 500 });
const latitudeChain = body("latitude").isFloat();
const longtitudeChain = body("longtitude").isFloat();
const regionChain = body("region").isInt({
  min: 0,
  max: 10 /* Dummy values TODO CHANGE*/,
});
const scheduleChain = body("schedule")
  .isString()
  .isLength({ min: 28, max: 28 });
const posTerminalChain = body("pos_terminal").isInt({ min: 0, max: 1 });
const websiteChain = body("website").isString().isLength({ max: 100 });
const imageChain = body("image"); // TODO IMPROVE

const reportTypeChain = body("report_type").isInt({ min: 0 }); // TODO ADD MAX VALUE FOR REPORT TYPE
const reportContentChain = body("content")
  .isString()
  .isLength({ max: 1000 })
  .optional();

const reviewCommentChain = body("comment")
  .isString()
  .isLength({ max: 350 })
  .optional();

const ratingChain = body("rating")
  .isInt({ min: 0, max: 5 /* Dummy values TODO CHANGE */ })
  .optional();

const applyRegisterUserRules = [
  nameChain,
  emailChain,
  passwordChain,
  phoneNumberChain,
];

const applyLoginUserRules = [emailChain, passwordChain];

const applyCreateLocationRules = [
  addressChain,
  emailChain,
  nameChain,
  categoryChain,
  deliveryChain,
  descriptionChain,
  imageChain,
  keywordsChain,
  latitudeChain,
  longtitudeChain,
  regionChain,
  phoneNumberChain,
  posTerminalChain,
  scheduleChain,
  websiteChain,
];

const applyReportLocationRules = [reportTypeChain, reportContentChain];

const applyUserReviewRules = [reviewCommentChain, ratingChain];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // For compatibility with express-validator
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = {
  applyRegisterUserRules,
  applyLoginUserRules,
  applyCreateLocationRules,
  applyReportLocationRules,
  applyUserReviewRules,
  checkRules,
};
