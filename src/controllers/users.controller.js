const Users = require('../models/users.model');


const getUsers = async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: err.message });
  }
};

 
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: err.message });
  }
};

 
const createUser = async (req, res) => {
  try {
    const id = await Users.addUser(req.body);
    res.status(201).json({ message: 'User added', id });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message });
  }
};

// 🟠 PATCH /api/users/:id
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.updateUser(id, req.body);

    res.json({ message: 'User updated', affected: result });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: err.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.deleteUser(id);

    res.json({ message: 'User deleted', affected: result });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  getUserById,  
  createUser,
  updateUser,
  deleteUser,
};
