import { Request, Response, NextFunction } from "express";
import Joi from 'joi';

export default async function updateTaskBodyMiddleware(req: Request, res: Response, next: NextFunction) {
    const updateTaskSchema = Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        status: Joi.string().valid("in_progress", "completed"),
        due_date: Joi.date().iso()
    });

    const {error, value} = updateTaskSchema.validate(req.body);

    if (error){
        // If validation fails, send an error response
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}