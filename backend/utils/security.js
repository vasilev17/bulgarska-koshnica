const jwt = require("jsonwebtoken");

const storage = require("../utils/storage.js");

// TEMP DEV DATABASE
refreshTokens = [];

// Verify user's token
const verifyJWT = (req, res, next) => {
  // Get authorization field
  const authField = req.headers.authorization;

  if (authField) {
    // If auth is present
    // Parse token
    const token = authField.split(" ")[1];

    // Verify token
    jwt.verify(token, "TEMPORARYSECRETKEY", (err, tokenPayload) => {
      if (err) {
        return res.status(403).json("Invalid access token");
      }

      req.tokenPayload = tokenPayload; // Must pass user to next function?
      next();
    });
  } else {
    // If auth is not present
    res.status(401).json("Unauthorized!");
  }
};

const validateUser = (email, password) => {
  return storage.users.find((u) => {
    return u.email === email && u.password === password;
  });
};

const generateAccessToken = (uid) => {
  return jwt.sign({ id: uid }, "TEMPORARYSECRETKEY", {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (uid) => {
  return jwt.sign({ id: uid }, "TEMPORARYSECRETKEYREFRESH", {
    // expiresIn: "15s",
  });
};

module.exports = {
  verifyJWT,
  validateUser,
  generateAccessToken,
  generateRefreshToken,
  refreshTokens,
};
