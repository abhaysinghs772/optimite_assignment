import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/task.route';

import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors())
app.use(router);

app.get('/', (req, res)=> {
    res.send("hello world");
});

app.listen(3000, async () => {

    await mongoose.connect('');

    console.log(`server is up and running on port 3000`);
});