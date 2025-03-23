import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default:false
    },
    dueDate: {
        type: String,
        required: true
    }
},{timestamps:true});

const Task = mongoose.model("Task",taskSchema)

export default Task