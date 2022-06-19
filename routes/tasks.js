const express = require('express');

const router = express.Router();
const {
  getAllItems,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.route('/').get(getAllItems).post(createTask);
router.route('/:taskId').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
