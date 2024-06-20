const db = require('../../config/dbConfig');

const createUser = async (user) => {
  const [result] = await db.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [user.username, user.email, user.password]
  );
  return result;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const findUserByUsername = async (username) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername
};