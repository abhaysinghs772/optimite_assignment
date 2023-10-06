import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import taskRoute from "./routes/task.route";
import authRoute from './routes/auth.route';

import mongoose from "mongoose";

import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(taskRoute, authRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

const uri = `mongodb+srv://${process.env.MONGO_USERID}:${process.env.MONGO_PASSWORD}@cluster0.ljrgvuv.mongodb.net/task_management?retryWrites=true&w=majority`

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

app.listen(3000, async () => {
    await connectDB();
    console.log(`server is up and running on port 3000`);
});
