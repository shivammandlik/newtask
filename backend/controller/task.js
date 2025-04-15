// import Task from '../model/task.js';
let Task=require ("../model/task.js")

const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
};

const addTask = async (req, res) => {
  const { title, priority } = req.body;
  const task = await Task.create({ userId: req.userId, title, priority });
  res.status(201).json(task);
};
 const markComplete = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: 'Completed' },
    { new: true }
  );
  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};
module.exports={getTasks,addTask,markComplete,deleteTask}