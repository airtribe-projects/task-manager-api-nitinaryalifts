const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Task Manager is runnning successfully');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
