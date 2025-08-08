import { TruckModel } from "../models/truck.model.js";
export class TruckController {
    static async registerTruck(req, res) {
        try {
            const data = req.body;
            const truck = new TruckModel(data);
            await truck.save();
            return res.status(201).json(truck);
        }
        catch (error) {
            return res.status(500).json({ error: "Failed to register truck" });
        }
    }
    static async updateTruck(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            await TruckModel.findByIdAndUpdate(id, data);
            return res.status(204).send();
        }
        catch (error) {
            return res.status(500).json({ error: "Failed to update truck" });
        }
    }
    ;
    static async getTruckDetails(req, res) {
        try {
            const id = req.params.id;
            const truck = await TruckModel.findById(id);
            if (!truck)
                return res.status(404).send();
            return res.status(200).json(truck);
        }
        catch (error) {
            return res.status(500).json({ error: "Failed to get truck details" });
        }
    }
    ;
}
//# sourceMappingURL=truck.controller.js.map