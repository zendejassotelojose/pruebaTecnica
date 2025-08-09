import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    truck: { type: mongoose.Schema.Types.ObjectId, ref: "Truck", required: true },
    status: { type: String, enum: ["created", "in transit", "completed"], default: "created" },
    pickUp: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
    dropOff: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
});
const Order = mongoose.model("Order", orderSchema);
export default Order;
//# sourceMappingURL=order.model.js.map