import express from "express";
import "dotenv/config";
import { notificationRouter } from "./notifications/infrastructure/routes/notificationsRoutes";

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware para parsear el JSON
app.use(express.json());

// Usar el enrutador de notificaciones
app.use("/api/v1/notifications", notificationRouter);

// Iniciar el servidor después de definir las rutas
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
