import express from "express";
import "dotenv/config";
import { notificationRouter } from "./notifications/infrastructure/routes/notificationsRoutes";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/v1/notifications", notificationRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
