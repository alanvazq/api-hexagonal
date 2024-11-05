import express from "express"
import { contactCreateController } from "../dependencies";


export const contactsRouter = express.Router();

contactsRouter.post('/', contactCreateController.run.bind(contactCreateController));
