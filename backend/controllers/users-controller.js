const storage = require("../utils/storage.js");

const { AccessDeniedException } = require("../error_handling/exceptions.js");

async function getUserData(req, res) {
  // Check if user is asking for his own data
  if (req.tokenPayload.id == req.params.userId) {
    // Find user data by id
    const user = await storage.findUserById(req.tokenPayload.id);

    res.status(200).json({
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
    });
  } else {
    // User is asking for data, that does not belong to him
    throw new AccessDeniedException();
  }
}

module.exports = { getUserData };
