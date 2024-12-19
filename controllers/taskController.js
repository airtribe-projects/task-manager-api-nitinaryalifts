let tasks = [];
let idCounter = 1;

const getAllTasks = (req, res) => {
    res.json(tasks);
};

const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = tasks.find((task) => task.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
};

const createTask = (req, res) => {
    const { title } = req.body;
    const newTask = { id: idCounter++, title };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const task = tasks.find((task) => task.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title;
    res.json(task);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
