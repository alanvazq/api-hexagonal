import express from "express";
import "dotenv/config";
import { notificationRouter } from "./notifications/infrastructure/routes/notificationsRoutes";
import { contactsRouter } from "./contacts/infrastructure/routes/contactsRoutes";
import { connectDB } from "./tokens/infrastructure/db/database";
import { tokenRoutes } from "./tokens/infrastructure/routes/tokenRoutes";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/v1/notifications", notificationRouter);
app.use("/api/v1/contacts", contactsRouter);
app.use("/api/v1/tokens", tokenRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

connectDB();