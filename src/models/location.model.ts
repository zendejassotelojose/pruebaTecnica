import { Schema,model,Document } from "mongoose";

export interface ILocation extends Document {
    address: string;
    place_id: string;
    latitud: string;
    longitud: string;
}

const locationSchema = new Schema<ILocation>({
    address: { type: String, required: true },
    place_id: { type: String, required: true, unique: true },
    latitud: { type: String, required: true },
    longitud: { type: String, required: true },
});

export const Location = model<ILocation>("Location", locationSchema);
