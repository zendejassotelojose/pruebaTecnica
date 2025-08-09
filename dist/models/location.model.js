import { Schema, model, Document } from "mongoose";
const locationSchema = new Schema({
    address: { type: String, required: true },
    place_id: { type: String, required: true, unique: true },
    latitud: { type: String, required: true },
    longitud: { type: String, required: true },
});
export const Location = model("Location", locationSchema);
//# sourceMappingURL=location.model.js.map