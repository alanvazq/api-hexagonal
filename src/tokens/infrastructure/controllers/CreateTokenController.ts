import { Request, Response } from "express";
import { CreateToken } from "../../application/CreateToken";


export class CreateTokenController {

    constructor(private createToken: CreateToken) { }

    async handle(req: Request, res: Response) {
        const { contactId } = req.body;
        try {

            const token = await this.createToken.run(contactId);
            return res.status(201).json( token )
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Error creating token' })
        }
    }
}