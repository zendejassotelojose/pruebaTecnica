import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import user from "./routes/user.route.js";
import order from "./routes/order.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", user);
app.use("/api/orders", order);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI || "")
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
})
    .catch(err => {
    console.error("Error al conectar a MongoDB:", err);
});
//# sourceMappingURL=index.js.map