import axios from "axios";
export class placeController {
    static async getPlaceDetail(place_id) {
        const apiKey = process.env.API_KEY;
        const fields = "formatted_address,geometry";
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=${fields}&key=${apiKey}`;
        try {
            const response = await axios.get(url);
            if (response.data.status !== "OK") {
                throw new Error("Error al obtener detalles del lugar");
            }
            const result = response.data.result;
            return {
                address: result.formatted_address,
                latitud: result.geometry.location.lat,
                longitud: result.geometry.location.lng
            };
        }
        catch (error) {
            throw new Error("Error al obtener detalles del lugar");
        }
    }
}
//# sourceMappingURL=place.controller.js.map