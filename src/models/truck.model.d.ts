import mongoose from 'mongoose';
export interface ITruck {
    user: mongoose.Types.ObjectId;
    year: string;
    color: string;
    plate: string;
}
export declare const TruckModel: mongoose.Model<ITruck, {}, {}, {}, mongoose.Document<unknown, {}, ITruck, {}, {}> & ITruck & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=truck.model.d.ts.map