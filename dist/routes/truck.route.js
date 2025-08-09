import { Router } from "express";
import { TruckController } from "../controllers/truck.controller.js";
const router = Router();
router.post("/register", TruckController.registerTruck);
router.put("/update/:id", TruckController.updateTruck);
router.get("/", TruckController.getTrucks);
router.delete("/delete/:id", TruckController.deleteTruck);
export default router;
//# sourceMappingURL=truck.route.js.map