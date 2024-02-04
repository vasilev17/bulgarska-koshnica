const jwt = require("jsonwebtoken");

const security = require("../utils/security.js");
const storage = require("../utils/storage.js");

const register = (req, res) => {
  const { name, email, password, phone_number } = req.body;
  const user = {
    user_id: storage.users.length,
    name: name,
    email: email,
    password: password,
    phone_number: phone_number,
  };

  return res.status(200).json(user);
};

const login = (req, res) => {
  // Get username and password from login attempt
  const { email, password } = req.body;

  // Check if they are valid
  const user = security.validateUser(email, password);

  if (user) {
    // If valid login credentials

    // Generate JWT including user_id
    const accessToken = security.generateAccessToken(user.user_id);
    const refreshToken = security.generateRefreshToken(user.user_id);

    // Add refreshToken to database
    security.refreshTokens.push(refreshToken);

    // Respond with email, name and token
    res.json({
      email: user.email,
      name: user.name,
      accessToken,
      refreshToken,
    });
  } else {
    // Invalid login credentials

    // Respond with error message
    res.status(400).json("Incorrect Credentials");
  }
};

const logout = (req, res) => {
  // Get refresh token from request
  const refreshToken = req.body.refreshToken;

  // Remove old refresh token from database
  security.refreshTokens = security.refreshTokens.filter(
    (token) => token !== refreshToken
  );

  res.status(200).json("You logged out successfully");
};

const refresh = (req, res) => {
  // Get refresh token from request
  const oldRefreshToken = req.body.refreshToken;

  // Check if it is present
  if (!oldRefreshToken) return res.status(401).json("Unauthenticated");

  // Check if it is in the database
  if (!security.refreshTokens.includes(oldRefreshToken))
    return res.status(403).json("Invalid refresh token");

  // Verify key
  jwt.verify(
    oldRefreshToken,
    "TEMPORARYSECRETKEYREFRESH",
    (err, tokenPayload) => {
      if (err) {
        console.log("Error 1123 verifying token!");
        res.status(400).json("Error 1123 verifying token!");
      }
      // Remove old refresh token from database
      security.refreshTokens = security.refreshTokens.filter(
        (token) => token !== oldRefreshToken
      );

      const newAccessToken = security.generateAccessToken(tokenPayload.id);
      const newRefreshToken = security.generateRefreshToken(tokenPayload.id);

      // Add new refresh token to database
      security.refreshTokens.push(newRefreshToken);

      // Respond with new tokens
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    }
  );
};

module.exports = { login, logout, refresh, register };
