import { Request, Response } from "express";


export async function createTask(){

}

export async function getAlltasks(req: Request, res: Response){
    
    return res.send(
        {
            message: "fetched all tasks edit"
        }
    )
}