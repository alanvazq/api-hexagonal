import { Request, Response } from "express";
import { ContactCreate } from "../../application/ContactCreate";
import { CreateToken } from "../../../tokens/application/CreateToken";
import { SendNotification } from "../../../notifications/application/SendNotification";

export class ContactCreateController {
    constructor(
        private contactCreate: ContactCreate,
        private createToken: CreateToken,
        private sendNotification: SendNotification
    ) { }

    async run(req: Request, res: Response) {
        const { name, lastName, email, phoneNumber } = req.body;

        try {
            const contact = await this.contactCreate.run(name, lastName, email, phoneNumber);
            if (!contact) {
                return res.status(400).json({ error: "Failed to create contact" });
            }

            const token = await this.createToken.run(contact.id);
            if (!token) {
                return res.status(400).json({ error: "Failed to create token" });
            }

            await this.sendNotification.run(phoneNumber, token.value);
            return res.status(201).json(contact);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
