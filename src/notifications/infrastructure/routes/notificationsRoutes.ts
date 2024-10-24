import { Router, Request, Response } from "express";
import { NotificationController } from "../controllers/NotificationController";
import { TwilioNotificationService } from "../services/TwilioNotificationService";
import { SendNotification } from "../../application/SendNotification";

export const notificationRouter = Router();

const notificationService = new TwilioNotificationService();
const sendNotification = new SendNotification(notificationService);
const sendNotificationController = new NotificationController(sendNotification)

notificationRouter.post("/send", (req, res) => { sendNotificationController.handle(req, res) });

