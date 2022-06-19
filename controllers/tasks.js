const Task = require('../models/tasksModal');

const getAllItems = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `no Task with ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(task);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = (req, res) => {
  res.send('Update task');
};
const deleteTask = (req, res) => {
  res.send('Delete task');
};

module.exports = {
  getAllItems,
  deleteTask,
  createTask,
  getTask,
  updateTask,
};
