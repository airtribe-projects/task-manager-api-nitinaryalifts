const validateTask = (req, res, next) => {
    const { title } = req.body;
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Title is required to be string value' });
    }
    next();
};

module.exports = validateTask;
