import { CreateUser } from "../../application/CreateUser";
import {Request, Response} from "express";
export class UserCreateController {
    constructor(private createUser: CreateUser) {}

    async run(req: Request, res: Response) {
        
    }
}