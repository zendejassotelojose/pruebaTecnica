import mongoose, { Schema } from 'mongoose';
const truckSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    year: { type: String, required: true },
    color: { type: String, required: true },
    plate: { type: String, required: true },
});
export const TruckModel = mongoose.model('Truck', truckSchema);
//# sourceMappingURL=truck.model.js.map