import { Date, ObjectId } from "mongoose";

export interface createTaskBody {
    title: string,
    description: string,
    status: "in_progress" | "completed",
    due_date: Date,
    user_id: ObjectId
}