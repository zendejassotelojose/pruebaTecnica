import { Document } from "mongoose";
export interface ILocation extends Document {
    address: string;
    place_id: string;
    latitud: string;
    longitud: string;
}
export declare const Location: import("mongoose").Model<ILocation, {}, {}, {}, Document<unknown, {}, ILocation, {}, {}> & ILocation & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=location.model.d.ts.map