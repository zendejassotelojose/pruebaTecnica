import mongoose, { Schema } from 'mongoose';

export interface ITruck {
  user: mongoose.Types.ObjectId;
  year: string;
  color: string;
  plate: string;
}

const truckSchema = new Schema<ITruck>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  year: { type: String, required: true },
  color: { type: String, required: true },
  plate: { type: String, required: true },
});

export const TruckModel = mongoose.model<ITruck>('Truck', truckSchema);
