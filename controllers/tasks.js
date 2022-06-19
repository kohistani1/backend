const getAllItems = (req, res) => {
  res.send('all items');
};
const getTask = (req, res) => {
  console.log(req.params.taskId);
  req.user = {
    user: 'usman',
    age: 25,
  };

  res.json({ id: req.params.taskId });
};
const createTask = async (req, res) => {
  res.status(201).json({ task: `${req.body.name} created'` });
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
