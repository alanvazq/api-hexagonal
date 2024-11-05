import { SendNotification } from "../../notifications/application/SendNotification";
import { TwilioNotificationService } from "../../notifications/infrastructure/services/TwilioNotificationService";
import { CreateToken } from "../../tokens/application/CreateToken";
import { MongoRepository } from "../../tokens/infrastructure/repositories/MongoRepository";
import { ContactCreate } from "../application/ContactCreate";
import { ContactCreateController } from "./controllers/ContactCreateController";
import { PostgresRepository } from "./repositories/PostgresRepository";


const contactRepository = new PostgresRepository();
const contactCreate = new ContactCreate(contactRepository);

const tokenRepository = new MongoRepository();
const createToken = new CreateToken(tokenRepository);

const notificationService = new TwilioNotificationService();
const sendNotification = new SendNotification(notificationService);

export const contactCreateController = new ContactCreateController(contactCreate, createToken, sendNotification);