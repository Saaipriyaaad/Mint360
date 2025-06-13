
const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/postusers', createUser);
router.get('/users', getUsers);
router.put('/putusers/:id', updateUser);
router.delete('/users/:id', deleteUser);
module.exports = router;








