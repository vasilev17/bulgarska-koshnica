const db = require("./database");

const {
  UserNotFoundException,
  InvalidRefreshTokenException,
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

async function addRefreshToken(id, token) {
  const [result] = await db.executeQuery(
    "UPDATE users SET refresh_token = ? WHERE user_id = ?",
    [token, id] // Comment for autoformat
  );

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
  addRefreshToken,
  findRefreshToken,
  removeRefreshToken,
};
