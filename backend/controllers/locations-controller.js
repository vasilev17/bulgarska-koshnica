const storage = require("../utils/storage.js");

const { AccessDeniedException } = require("../error_handling/exceptions.js");

// Sravni idto ot tokena s idto podadeno v post requesta
async function createLocation(req, res) {
  const location = {
    address: String(req.body.address),
    email: String(req.body.email),
    name: String(req.body.name),
    category: parseInt(req.body.category),
    delivery: parseInt(req.body.delivery),
    description: String(req.body.description),
    keywords: String(req.body.keywords),
    latitude: parseFloat(req.body.latitude).toFixed(6),
    longtitude: parseFloat(req.body.longtitude).toFixed(6),
    region: parseInt(req.body.region),
    phone_number: String(req.body.phone_number),
    pos_terminal: parseInt(req.body.pos_terminal),
    schedule: String(req.body.schedule),
    user_id: parseInt(req.body.user_id),
    website: String(req.body.website),
  };

  // Check if user is trying to create business for himself
  if (location.user_id !== req.tokenPayload.id) {
    throw new AccessDeniedException();
  }

  await storage.createLocation(location);

  return res.status(200).json("Not finished yet");
}

module.exports = { createLocation };
