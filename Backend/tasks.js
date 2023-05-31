const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.put('/tasks/:id', updateTask);


router.delete('/tasks/:id', deleteTask);

module.exports = router;
