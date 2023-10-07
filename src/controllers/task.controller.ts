import { Request, Response } from "express";
import taskModel from '../models/task.model';
import { createTaskBody } from '../interfaces/createTask.body';
import { updateTaskBody } from '../interfaces/updateTask.body';

export async function createTask(req: Request, res: Response) {
    try {

        let { title, description, status, due_date } = req.body;

        let user_id = req.user;
        let taskBody: createTaskBody = {
            title,
            description,
            status,
            due_date,
            user_id
        }

        let savedtask = await taskModel.create(taskBody);

        return res.status(201).json({ message: 'successfully saved task', savedtask });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export async function getAlltasks(req: Request, res: Response) {
    try {
        const page: number = parseInt(req.query.page as string) || 1;
        const pageSize: number = parseInt(req.query.pageSize as string) || 10;

        const skip = (page - 1) * pageSize;

        let allTasks = await taskModel.find({ user_id: req.user })
            .skip(skip)
            .limit(pageSize)
            .exec();

        const totalItems = await taskModel.countDocuments({ user_id: req.user });
        const hasMore = page * pageSize < totalItems;

        return res.status(200).json({
            tasks: allTasks,
            has_more: hasMore,
            page,
            pageSize,
            totalPages: Math.ceil(totalItems / pageSize),
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export async function getSingleTask(req: Request, res: Response) {
    try {
        let taskId = req.params.task_id;

        let task = await taskModel.find({ _id: taskId, user_id: req.user });

        if (!task.length) {
            return res.status(404).json({ message: 'task not found' });
        }

        return res.status(201).json({ task: task[0] });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export async function updateTask(req: Request, res: Response) {
    try {
        let taskId = req.params.task_id;

        // check whether task exist or not 
        let task = await taskModel.find({_id: taskId, user_id: req.user});

        if (!task.length){
            return res.status(404).json({ message: 'task not found' });
        }

        let {
            title,
            description,
            due_date,
            status
        } = req.body;

        let updateBody: updateTaskBody = {};
        
        if (title) {
            updateBody.title = title
        }
        if (description){
            updateBody.description = description;
        }
        if (due_date){
            updateBody.due_date = due_date;
        }
        if (status){
            updateBody.status = status;
        }

        let updatedTask = await taskModel.findByIdAndUpdate(taskId, updateBody);

        res.status(201).json({message: 'successfully updated task', updated_task: updatedTask});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

export async function removeTask(req: Request, res: Response) {
    try {
        let taskId = req.params.task_id;
        
        // check whether task exist or not 
        let task = await taskModel.find({_id: taskId, user_id: req.user});

        if (!task.length){
            return res.status(404).json({ message: 'task not found' });
        }
        
        let deletedtask = await taskModel.findByIdAndRemove(taskId);
        console.log(deletedtask);
        
        return res.status(201).json({ message: "successfully removed task" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}