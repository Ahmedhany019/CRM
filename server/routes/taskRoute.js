
import express from "express"
import { addTask, deleteTask, getTasks,updateTask } from "../controllers/taskController.js"

const router = express.Router()

router.get("/",getTasks)
router.post("/add",addTask)
router.delete("/delete",deleteTask)
router.put("/update/:id",updateTask)


export default router