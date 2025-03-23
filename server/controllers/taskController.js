/**--------------------------------
 * @desc get tasks
 * @router /api/tasks
 * @method get
 * @access private (only admin)
---------------------------------*/

import Task from "../models/Tasks.Model.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

/**--------------------------------
 * @desc add task
 * @router /api/tasks/add
 * @method post
 * @access private (only admin)
---------------------------------*/

const addTask = async (req, res) => {
    const { description, status, dueDate } = req.body;
  
    try {
      const exist = await Task.findOne({ description });
  
      if (exist) {
        return res.status(400).json({ message: "Task already exists", success: false });
      }
  
      const task = new Task({ description, status, dueDate });
      await task.save();
  
      res.json({ message: "Task created successfully", success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error", success: false });
    }
  };


/**--------------------------------
 * @desc update tasks
 * @router /api/tasks/add
 * @method post
 * @access private (only admin)
---------------------------------*/

const updateTask = async (req, res) => {
    const id = req.params.id
    try {
        const newTask = await Task.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Customer updated successfully",newTask})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  
}

/**--------------------------------
 * @desc delete task
 * @router /api/tasks/delete
 * @method post
 * @access private (only admin)
---------------------------------*/

const deleteTask = async(req,res)=>{
  
  try {
    const id = req.body.id
    if(!id){
      return res.json({message:"task not found"})
    }
    await Task.findByIdAndDelete(id)
    return res.json({message:"deleted successfully"})
  } catch (error) {
    return res.json({message:error})
  }
}

export { getTasks, addTask,updateTask,deleteTask };
