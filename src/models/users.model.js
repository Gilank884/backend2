const pool = require('../config/db');

 
async function getAllUsers() {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;  
}
  

async function getUserById(id) {
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];  
}

 
async function addUser(user) {
  const { first_name, last_name, email } = user;
  const [result] = await pool.query(
    'INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)',
    [first_name, last_name, email]
  );
  return result.insertId;
}

 
async function updateUser(id, user) {
  const { first_name, last_name, email } = user;
  const [result] = await pool.query(
    'UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?',
    [first_name, last_name, email, id]
  );
  return result.affectedRows;
}

 
async function deleteUser(id) {
  const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
