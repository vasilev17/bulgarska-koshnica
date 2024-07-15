const storage = require("../utils/storage.js");

async function getUserData(req, res) {
  const user = await storage.findUserById(req.tokenPayload.id);

  res.status(200).json({
    user_id: user.user_id,
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
  });
}

async function getUserName(req, res) {
  return res
    .status(200)
    .json({ name: await storage.findUserNameById(req.params.userId) });
}

module.exports = { getUserData, getUserName };
