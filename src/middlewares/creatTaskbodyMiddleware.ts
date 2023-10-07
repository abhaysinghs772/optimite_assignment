import { Request, Response, NextFunction } from "express";
import Joi from 'joi';

export default async function createTaskBodyMiddleware(req: Request, res: Response, next: NextFunction) {
    const creatTaskSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        status: Joi.string().valid("in_progress", "completed").required(),
        due_date: Joi.date().iso()
    });

    const {error, value} = creatTaskSchema.validate(req.body);

    if (error){
        // If validation fails, send an error response
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}