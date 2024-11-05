import { Request, Response } from "express";
import { ValidateTokenService } from "../../application/ValidateTokenService";

export class ValidateTokenController {
    constructor(private validateTokenService: ValidateTokenService) { }

    async handle(req: Request, res: Response) {
        const { tokenValue, contactId } = req.body;

        try {

            const isValid = await this.validateTokenService.run(tokenValue, contactId);
            if (!isValid) return res.status(400).json({ error: 'Invalid token' })
            
            return res.status(200).json({ message: 'Token is valid', isValid })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Error validating token" });
        }
    }
}