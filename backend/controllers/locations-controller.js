const storage = require("../utils/storage.js");

// Sravni idto ot tokena s idto podadeno v post requesta
async function createLocation(req, res) {
  const location = {
    address: String(req.body.address),
    email: String(req.body.business_email),
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
    user_id: parseInt(req.tokenPayload.id),
    website: String(req.body.website),
  };

  // TODO 1 of the reasons to not be finishes is exception
  // is not general enough. Rethrow
  await storage.createLocation(location);

  return res.status(501).json("Not finished yet");
}

async function getReviews(req, res) {
  return res.status(501).json("Unimplemented");
}

async function reportLocation(req, res) {
  return res.status(501).json("Unimplemented");
}

async function createReview(req, res) {
  return res.status(501).json("Unimplemented");
}

async function searchLocations(req, res) {
  // TODO check if query is adequate and watch out for injections
  return res.status(501).json("Unimplemented, search query: " + req.query.str);
}

async function getLocationContacts(req, res) {
  return res.status(501).json("Unimplemented");
}

async function getDeliveryPosInfo(req, res) {
  return res.status(501).json("Unimplemented");
}

async function getSchedule(req, res) {
  return res.status(501).json("Unimplemented");
}

async function getProducts(req, res) {
  return res.status(501).json("Unimplemented");
}

module.exports = {
  createLocation,
  getReviews,
  reportLocation,
  createReview,
  searchLocations,
  getLocationContacts,
  getDeliveryPosInfo,
  getSchedule,
  getProducts,
};
