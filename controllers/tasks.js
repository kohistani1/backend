const Task = require('../models/tasksModal');

const getAllItems = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    // const t = allTasks.length;
    const tasks = allTasks;
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findOne({ _id: taskId });
    if (task) return res.status(200).json({ task });
    res.status(404).json({ msg: `no Task with ${taskId}` });
  } catch (error) {
    res.status(500).json({ Err: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    // console.log(task);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) return res.status(500).send(`no task with ${taskId} id`);
    res.status(200).send('task deleted');
  } catch (e) {
    console.log(e);
  }
};

const updateTask = async (req, res) => {
  try {
    const opts = {
      new: true,
      runValidators: true,
      function() {},
    };

    const taskId = req.params.taskId;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, opts);
    if (!task) return res.status(500).send(`no task with ${taskId} id`);
    res.status(200).json({ task });
  } catch (e) {
    res.status(500).send({ msg: e.message });
  }
};

module.exports = {
  getAllItems,
  deleteTask,
  createTask,
  getTask,
  updateTask,
};
