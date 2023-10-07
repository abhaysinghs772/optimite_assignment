import { Date } from "mongoose";

export interface updateTaskBody {
    title?: string,
    description?: string,
    status?: "in_progress" | "completed",
    due_date?: Date,
}