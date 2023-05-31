const Task = require('../models/task')

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'La tarea no existe' })
    }

  
    if (task.userId !== req.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para actualizar esta tarea' })
    }

  
    const updatedTask = await Task.findByIdAndUpdate(id, { title, description }, { new: true })

    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'La tarea no existe' })
    }

    
    if (task.userId !== req.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para eliminar esta tarea' })
    }

  
    await Task.findByIdAndDelete(id)

    res.json({ message: 'Tarea eliminada exitosamente' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ha ocurrido un error en el servidor' })
  }
}

module.exports = {updateTask, deleteTask,}
