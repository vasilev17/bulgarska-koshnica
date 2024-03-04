const { body, validationResult } = require("express-validator");

const nameChain = body("name").isLength({ min: 5, max: 50 });
const emailChain = body("email").isEmail().isLength({ min: 5, max: 50 });
const passwordChain = body("password").isLength({ min: 5, max: 50 });
const phoneNumberChain = body("phone_number").isLength({ min: 10, max: 14 });

const applyRegisterUserRules = [
  nameChain,
  emailChain,
  passwordChain,
  phoneNumberChain,
];

const applyLoginUserRules = [emailChain, passwordChain];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // For compatibility with express-validator
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

module.exports = { applyRegisterUserRules, applyLoginUserRules, checkRules };
