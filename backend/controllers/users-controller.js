const storage = require("../utils/storage.js");
const {
  NotFoundException,
  LocationNotFoundException,
} = require("../error_handling/exceptions.js");

async function getUserData(req, res) {
  const user = await storage.findUserById(req.tokenPayload.id);

  // NOTE: USER NOT FOUND EXCEPTION IS NOT HIDDEN/HANDLED
  res.status(200).json({
    user_id: user.user_id,
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
  });
}

async function getUserName(req, res) {
  // NOTE: USER NOT FOUND EXCEPTION IS NOT HIDDEN/HANDLED
  return res
    .status(200)
    .json({ name: await storage.findUserNameById(req.tokenPayload.id) });
}

async function getUserLocations(req, res) {
  let locations = undefined;
  // TODO: If wrong UID is used it will throw exception
  try {
    locations = await storage.getUserLocations(req.tokenPayload.id);
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(locations);
}

module.exports = { getUserData, getUserName, getUserLocations };
