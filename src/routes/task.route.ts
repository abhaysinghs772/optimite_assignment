import { Router } from "express";
import { createTask, getAlltasks, getSingleTask, updateTask, removeTask } from "../controllers/task.controller"
import authMiddleware from "../middlewares/authMiddleware";
import createTaskBodyMiddleware from "../middlewares/creatTaskbodyMiddleware"
import updateTaskBodyMiddleware from "../middlewares/updateTaskBodyMiddleware"

const taskRouter = Router();

taskRouter.post('/tasks',authMiddleware, createTaskBodyMiddleware, createTask );
taskRouter.get('/tasks', authMiddleware, getAlltasks);
taskRouter.get('/tasks/:task_id', authMiddleware, getSingleTask);
taskRouter.put('/tasks/:task_id',authMiddleware, updateTaskBodyMiddleware, updateTask);
taskRouter.delete('/tasks/:task_id', authMiddleware, removeTask);

export default taskRouter;