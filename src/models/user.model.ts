import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phone_number: String,
}, {timestamps: true}); // timestamps to add created_at and updated_at 

const Usermodel = model('User', userSchema);

export default Usermodel;