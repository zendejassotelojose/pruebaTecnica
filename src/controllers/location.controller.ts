import { Location } from "../models/location.model.js";
import type { Request, Response } from "express";
import { placeController } from "../controllers/place.controller.js";
import type { CreateLocationDto, UpdateLocationDto } from "../dtos/locations.dtos.js";


export class locationController {
    static async createLocation(req: Request, res: Response) {
        const locationData: CreateLocationDto = req.body;
        const placeDetails = await placeController.getPlaceDetail(locationData.place_id);
        try {
            console.log("Detalles del lugar:", placeDetails);
            const newLocation = await Location.create({ ...locationData, ...placeDetails });
            res.status(201).json(newLocation);
        } catch (error) {
            res.status(500).json({ error: "Error al crear la ubicación", details: error });
        }
    }

    static async getLocations(req: Request, res: Response) {
        try {
            const locations = await Location.find();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las ubicaciones", details: error });
        }
    }

    static async deleteLocation(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedLocation = await Location.findByIdAndDelete(id);
            if (!deletedLocation) {
                return res.status(404).json({ error: "Ubicación no encontrada" });
            }
            res.status(200).json({ message: "Ubicación eliminada", location: deletedLocation });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la ubicación", details: error });
        }
    }

    static async updateLocation(req: Request, res: Response) {
        try {
            const id = req.params.id;
            let locationData: UpdateLocationDto = req.body;
            if (locationData.place_id) {
                const placeDetails = await placeController.getPlaceDetail(locationData.place_id);
                locationData = { ...locationData, ...placeDetails };
            }
            const updatedLocation = await Location.findByIdAndUpdate(id, locationData, { new: true });
            if (!updatedLocation) {
                return res.status(404).json({ error: "Ubicación no encontrada" });
            }
            res.status(200).json(updatedLocation);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la ubicación", details: error });
        }
    }

}