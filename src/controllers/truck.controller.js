import { TruckModel } from "../models/truck.model.js";
export class TruckController {
    static async registerTruck(req, res) {
        try {
            const data = req.body;
            const truck = new TruckModel(data);
            await truck.save();
            return res.status(201).json({ message: "Camión registrado correctamente", truck });
        }
        catch (error) {
            return res.status(500).json({ error: "Error al registrar el camión" });
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
            return res.status(500).json({ error: "Error al actualizar el camión" });
        }
    }
    ;
    static async getTruckDetails(req, res) {
        try {
            const id = req.params.id;
            const truck = await TruckModel.findById(id);
            if (!truck)
                return res.status(404).send();
            return res.status(200).json({ message: "Detalles del camión obtenidos correctamente", truck });
        }
        catch (error) {
            return res.status(500).json({ error: "Error al obtener los detalles del camión" });
        }
    }
    ;
    static async deleteTruck(req, res) {
        try {
            const id = req.params.id;
            await TruckModel.findByIdAndDelete(id);
            return res.status(204).json({ message: "Camión eliminado correctamente" });
        }
        catch (error) {
            return res.status(500).json({ error: "Error al eliminar el camión" });
        }
    }
}
//# sourceMappingURL=truck.controller.js.map