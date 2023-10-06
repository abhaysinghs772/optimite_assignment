import { Router } from "express";
import {getAlltasks} from "../controllers/task.controller"

const taskRouter = Router();

taskRouter.get('/tasks', getAlltasks);

export default taskRouter;