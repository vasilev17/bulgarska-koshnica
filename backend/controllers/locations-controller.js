const storage = require("../utils/storage.js");
const {
  NotFoundException,
  LocationNotFoundException,
  RequestLimitException,
  ReportNotFoundException,
  UserNotFoundException,
} = require("../error_handling/exceptions.js");

async function createLocation(req, res) {
  const location = {
    address: String(req.body.address),
    email: String(req.body.email || null),
    name: String(req.body.name),
    category: parseInt(req.body.category),
    delivery: parseInt(req.body.delivery),
    description: String(req.body.description),
    keywords: String(req.body.keywords || null),
    latitude: parseFloat(req.body.latitude).toFixed(6),
    longtitude: parseFloat(req.body.longtitude).toFixed(6),
    region: parseInt(req.body.region),
    phone_number: String(req.body.phone_number),
    pos_terminal: parseInt(req.body.pos_terminal),
    schedule: String(req.body.schedule || null),
    user_id: parseInt(req.tokenPayload.id),
    website: String(req.body.website || null),
  };

  // Ugly solution
  if (location.email === "null") {
    location.email = null;
  }
  if (location.keywords === "null") {
    location.keywords = null;
  }
  if (location.schedule === "null") {
    location.schedule = null;
  }
  if (location.website === "null") {
    location.website = null;
  }

  // TODO 1 of the reasons to not be finishes is exception
  // is not general enough. Rethrow

  // TODO Image arguments are not passed and parsed correctly

  await storage.createLocation(location);

  return res.status(501).json("Not finished yet");
}

async function getMapLocations(req, res) {
  const coords = {
    la1: req.body.loc1_latitude,
    lo1: req.body.loc1_longtitude,
    la2: req.body.loc2_latitude,
    lo2: req.body.loc2_longtitude,
  };

  let mapLocations = undefined;

  try {
    mapLocations = await storage.getMapLocations(coords);
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(mapLocations);
}

async function getReviews(req, res) {
  let reviews = undefined;
  try {
    reviews = await storage.getReviews(
      req.params.locationId,
      req.params.reviewId
    );
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(reviews);
}

async function reportLocation(req, res) {
  const MAX_REPORTS_PER_PHONE_NUMBER = 5;

  phone_number = undefined;
  content = req.body.content ?? null;

  // NOTE: CLEAN AND MOVE TO THE APPROPRIATE PLACEs
  // This piece of code checks if the review with
  // this id is present in the database at all
  // // Validate review_id
  // if (review_id != null) {
  //   try {
  //     await storage.findReviewById(review_id);
  //   } catch (err) {
  //     if (err instanceof ReviewNotFoundException) {
  //       throw new NotFoundException();
  //     } else {
  //       throw err; // Rethrow unexpected exceptions
  //     }
  //   }
  // }

  try {
    // Find users' phone number
    phone_number = await storage.findPhoneByUserId(req.tokenPayload.id);

    // Validate users' right to report this location
    if (
      MAX_REPORTS_PER_PHONE_NUMBER <=
      (await storage.getReportCountByLocationIdAndPhone(
        req.params.locationId,
        phone_number
      ))
    ) {
      throw new RequestLimitException();
    }
  } catch (err) {
    if (
      err instanceof UserNotFoundException ||
      err instanceof ReportNotFoundException
    ) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  // Create report
  try {
    await storage.createReport(
      req.tokenPayload.id,
      req.params.locationId,
      phone_number,
      req.body.report_type,
      content
    );
  } catch (err) {
    throw err; // Rethrow exceptions
  }

  return res.sendStatus(200);
}

async function createReview(req, res) {
  comment = req.body.comment ?? null;
  rating = req.body.rating ?? null;

  // Create report
  try {
    await storage.createReview(
      req.tokenPayload.id,
      comment,
      rating,
      req.params.locationId
    );
  } catch (err) {
    throw err; // Rethrow exceptions
  }

  return res.sendStatus(200);
}

async function searchLocations(req, res) {
  // TODO check if query is adequate and watch out for injections
  let search_results = undefined;
  try {
    search_results = await storage.searchLocations(req.query.str);
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }
  return res.status(200).json(search_results);
}

async function getLocationInfo(req, res) {
  let location = undefined;
  try {
    location = await storage.getLocationInfo(parseInt(req.params.locationId));
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(location);
}

async function getLocationKeyWords(req, res) {
  let keywords = undefined;
  try {
    keywords = await storage.getLocationKeyWords(req.params.locationId);
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(keywords);
}

async function getContacts(req, res) {
  let contacts = undefined;

  try {
    contacts = await storage.getContacts(req.params.locationId);
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(contacts);
}

// TODO add the image field
// also make sure that the logged user is the owner of the locationId and that this locationId has this productId
async function updateProductInfo(req, res) {
  const product = {
    product_name: String(req.body.product_name),
    //image: String(req.body.image),
    price: parseFloat(req.body.price).toFixed(2),
    price_measurement: parseInt(req.body.price_measurement),
  };

  try {
    await storage.updateProductInfo(
      product,
      req.params.productId,
      req.params.locationId
    );
  } catch (err) {
    throw err; // Rethrow unexpected exceptions
  }

  return res.sendStatus(200);
}

async function getDeliveryPosInfo(req, res) {
  let delivery_pos_info = undefined;

  try {
    delivery_pos_info = await storage.getDeliveryPosInfo(
      parseInt(req.params.locationId)
    );
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(delivery_pos_info);
}

async function getSchedule(req, res) {
  let schedule = undefined;

  try {
    schedule = await storage.getSchedule(parseInt(req.params.locationId));
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(schedule);
}

async function getProducts(req, res) {
  let products = undefined;

  try {
    products = await storage.getProducts(parseInt(req.params.locationId));
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(products);
}

async function getCategory(req, res) {
  let category = undefined;

  try {
    category = await storage.getCategory(parseInt(req.params.locationId));
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(category);
}

async function getCoordinates(req, res) {
  let coordinates = undefined;

  try {
    coordinates = await storage.getCoordinates(parseInt(req.params.locationId));
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(coordinates);
}

async function getDescription(req, res) {
  let description = undefined;

  try {
    description = await storage.getDescription(parseInt(req.params.locationId));
  } catch (err) {
    if (err instanceof LocationNotFoundException) {
      throw new NotFoundException();
    } else {
      throw err; // Rethrow unexpected exceptions
    }
  }

  return res.status(200).json(description);
}

module.exports = {
  createLocation,
  getMapLocations,
  getReviews,
  reportLocation,
  createReview,
  searchLocations,
  getLocationInfo,
  getContacts,
  getDeliveryPosInfo,
  getSchedule,
  getProducts,
  getCategory,
  getCoordinates,
  getDescription,
  getLocationKeyWords,
  updateProductInfo,
};
