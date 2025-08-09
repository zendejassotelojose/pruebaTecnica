import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";
const router = Router();
router.post("/register", OrderController.createOrder);
router.get("/", OrderController.getOrders);
router.put("/update/:id", OrderController.updateOrder);
router.put("/update-status/:id", OrderController.updateOrderStatus);
router.delete("/delete/:id", OrderController.deleteOrder);
export default router;
//# sourceMappingURL=order.route.js.map