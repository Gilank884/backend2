const express = require('express');
const router = express.Router();

const users = []; 

 
router.get('/users', (req, res) => {
  res.json(users);
});

 
router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

 
router.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added', user: newUser });
});

module.exports = router;
