import type { Request,Response } from "express";
import {TruckModel} from "../models/truck.model.js";
import type { registerTruckDto, updateTruckDto } from "../dtos/truck.dto.js";

export class TruckController {
    static async registerTruck(req: Request, res: Response) {
      try {
        const data: registerTruckDto = req.body;
        const truck = new TruckModel(data);
        await truck.save();
        return res.status(201).json({ message: "Camión registrado correctamente", truck });
      } catch (error) {
        return res.status(500).json({ error: "Error al registrar el camión" });
      }
    }

    static async updateTruck(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const data: updateTruckDto = req.body;
            await TruckModel.findByIdAndUpdate(id, data);
            return res.status(201).json({ message: "Camión actualizado correctamente"});
        } catch (error) {
            return res.status(500).json({ error: "Error al actualizar el camión" });
        }
    };

    static async getTrucks(req: Request, res: Response) {
        try {
            const trucks = await TruckModel.find();
            return res.status(200).json({ message: "Lista de camiones obtenida correctamente", trucks });
        } catch (error) {
            return res.status(500).json({ error: "Error al obtener la lista de camiones" });
        }
    };

    static async deleteTruck(req: Request, res: Response) {
      try {
        const id = req.params.id;
        await TruckModel.findByIdAndDelete(id);
        return res.status(201).json({message: "Camión eliminado correctamente"});
      } catch (error) {
        return res.status(500).json({ error: "Error al eliminar el camión" });
      }
    }
}