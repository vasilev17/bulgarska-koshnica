const storage = require("../utils/storage.js");

const {
  AccessDeniedException,
  UserNotFoundException,
} = require("../error_handling/exceptions.js");

const getUserData = (req, res) => {
  // Check if user is asking for his own data
  if (req.tokenPayload.id === req.params.userId) {
    // Find user data by id
    const user = storage.findUserById(req.tokenPayload.id);

    if (user) {
      // User found
      res
        .status(200)
        .json({ email: user.email, name: user.name, password: user.password });
    } else {
      // User not found
      throw new UserNotFoundException();
    }
  } else {
    // User is asking for data, that does not belong to him
    throw new AccessDeniedException();
  }
};

module.exports = { getUserData };
