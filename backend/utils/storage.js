const db = require("./database");

const {
  UserNotFoundException,
  InvalidRefreshTokenException,
  UnsuccessfulInsertQueryException,
  LocationNotFoundException,
} = require("../error_handling/exceptions.js");

async function findUserById(id) {
  const [rows] = await db.executeQuery(
    "SELECT * FROM users WHERE user_id = ?",
    [parseInt(id)] // Comment for autoformat
  );

  if (rows[0] === undefined) {
    throw new UserNotFoundException();
  }

  return rows[0];
}

async function findUserNameById(id) {
  return (await findUserById(id)).name;
}

async function findUserByEmail(email) {
  const [rows] = await db.executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email] // Comment for autoformat
  );

  if (rows[0] === undefined) {
    throw new UserNotFoundException();
  }

  return rows[0];
}

async function findUserByPhoneNumber(phone_number) {
  const [rows] = await db.executeQuery(
    "SELECT * FROM users WHERE phone_number = ?",
    [phone_number] // Comment for autoformat
  );

  if (rows[0] === undefined) {
    throw new UserNotFoundException();
  }

  return rows[0];
}

async function createUser(user) {
  // !!! WARNING !!!
  // userType is not implemented in DB neither in backend and so is
  // omitted in THIS function. It can be implemented at later stage

  const [result] = await db.executeQuery(
    "INSERT INTO users(name, email, password, phone_number) VALUES (?,?,?,?)",
    [user.name, user.email, user.password, user.phone_number]
  );

  if (result.affectedRows === 0) {
    throw new UnsuccessfulInsertQueryException();
  }
}

async function createMetrics() {
  const [result] = await db.executeQuery("INSERT INTO metrics() values()");

  if (result.affectedRows === 0) {
    throw new UnsuccessfulInsertQueryException();
  }

  return result.insertId;
}

async function createLocation(location) {
  const [result] = await db.executeQuery(
    "INSERT INTO locations(address, email, name, category, delivery, " +
      "description, keywords, latitude, longtitude, region, phone_number, " +
      "pos_terminal, schedule, user_id, website, metrics_id) " +
      " values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      location.address,
      location.email,
      location.name,
      location.category,
      location.delivery,
      location.description,
      location.keywords,
      location.latitude,
      location.longtitude,
      location.region,
      location.phone_number,
      location.pos_terminal,
      location.schedule,
      location.user_id,
      location.website,
      await createMetrics(),
    ]
  );

  if (result.affectedRows === 0) {
    throw new UnsuccessfulInsertQueryException();
  }
}

async function addRefreshToken(id, token) {
  const [result] = await db.executeQuery(
    "UPDATE users SET refresh_token = ? WHERE user_id = ?",
    [token, id] // Comment for autoformat
  );

  // TODO check for update error when doing the insert
  return result.affectedRows !== 0;
}

async function findRefreshToken(token) {
  const [rows] = await db.executeQuery(
    "SELECT * FROM users WHERE refresh_token = ?",
    [token] // Comment for autoformat
  );

  if (rows[0] === undefined) {
    throw new InvalidRefreshTokenException();
  }

  return rows[0].refresh_token;
}

async function removeRefreshToken(token) {
  const [result] = await db.executeQuery(
    "UPDATE users SET refresh_token = NULL WHERE refresh_token = ?",
    [token] // Comment for autoformat
  );

  return result.affectedRows !== 0;
}

async function getLocationInfo(id) {
  const [rows] = await db.executeQuery(
    `SELECT *
FROM (
    SELECT address, email, delivery, description, image, keywords, region, phone_number, pos_terminal, rating_average,
           rating_count, schedule, website
    FROM locations
    WHERE location_id = ?
    LIMIT 1
) AS loc

CROSS JOIN (
    SELECT 
    review_id,
    user_id AS review_user_id,
    comment,
    rating
    FROM reviews
    WHERE business_id = ?
    LIMIT 1
) AS rev;`,
    [id, id]
  );

  if (rows[0] === undefined) {
    throw new LocationNotFoundException();
  }

  return rows[0];
}

module.exports = {
  findUserById,
  findUserByEmail,
  findUserByPhoneNumber,
  createUser,
  addRefreshToken,
  findRefreshToken,
  removeRefreshToken,
  findUserNameById,
  createLocation,
  getLocationInfo,
};
