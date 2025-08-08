import { Router } from "express";
import { TruckController } from "../controllers/truck.controller.js";
const router = Router();
router.post("/register/truck", TruckController.registerTruck);
router.put("/update/truck/:id", TruckController.updateTruck);
router.get("/details/truck/:id", TruckController.getTruckDetails);
export default router;
//# sourceMappingURL=truck.route.js.map