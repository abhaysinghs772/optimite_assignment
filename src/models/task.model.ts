import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  status: String,
  due_date: Date,
  user_id: Schema.ObjectId
}, {timestamps: true}); // timestamps to add created_at and updated_at 

const taskModel = model('Task', taskSchema);

export default taskModel;