import Order from "../models/order.model.js";
export class OrderController {
    static async createOrder(req, res) {
        try {
            const orderData = req.body;
            const order = new Order(orderData);
            await order.save();
            res.status(201).json(order);
        }
        catch (error) {
            res.status(500).json({ message: "Error creando la orden", error });
        }
    }
    static async updateOrder(req, res) {
        try {
            const orderId = req.params.id;
            const orderData = req.body;
            const order = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
            if (!order) {
                return res.status(404).json({ message: "Order no encontrada" });
            }
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ message: "Error al actualizar la orden", error });
        }
    }
    static async getOrders(req, res) {
        try {
            const orders = await Order.find();
            res.json(orders);
        }
        catch (error) {
            res.status(500).json({ message: "Error al obtener las órdenes", error });
        }
    }
    static async deleteOrder(req, res) {
        try {
            const orderId = req.params.id;
            const order = await Order.findByIdAndDelete(orderId);
            if (!order) {
                return res.status(404).json({ message: "Order no encontrada" });
            }
            res.json({ message: "Order eliminada exitosamente" });
        }
        catch (error) {
            res.status(500).json({ message: "Error al eliminar la orden", error });
        }
    }
    static async updateOrderStatus(req, res) {
        try {
            const orderId = req.params.id;
            const { status } = req.body;
            const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
            if (!order) {
                return res.status(404).json({ message: "Order no encontrada" });
            }
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ message: "Error al actualizar el estado de la orden", error });
        }
    }
}
//# sourceMappingURL=order.controller.js.map