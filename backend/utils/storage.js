const db = require("./database");

const {
  UserNotFoundException,
  InvalidRefreshTokenException,
  UnsuccessfulInsertQueryException,
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

module.exports = {
  findUserById,
  findUserByEmail,
  findUserByPhoneNumber,
  createUser,
  addRefreshToken,
  findRefreshToken,
  removeRefreshToken,
};
