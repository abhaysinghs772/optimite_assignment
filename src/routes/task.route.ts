import { Router, Request, Response } from "express";
import {getAlltasks} from "../controllers/task.controller"

const router = Router();

router.get('/tasks', getAlltasks);

export default router;