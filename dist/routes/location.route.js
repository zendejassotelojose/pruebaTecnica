import { Router } from "express";
import { locationController } from "../controllers/location.controller.js";
const locationRouter = Router();
locationRouter.post("/register", locationController.createLocation);
locationRouter.get("/", locationController.getLocations);
locationRouter.delete("/delete/:id", locationController.deleteLocation);
locationRouter.put("/update/:id", locationController.updateLocation);
export default locationRouter;
//# sourceMappingURL=location.route.js.map