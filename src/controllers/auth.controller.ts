import { Request, Response } from "express";
import bcrypt from 'bcrypt';

import Usermodel from "../models/user.model";

import { createUserBody } from "../interfaces/createUser.body";

export async function signUp(req: Request, res: Response){
    let body: createUserBody = req.body;
    
    return res.send(body);
}

export async function logIn(req: Request, res: Response){

}