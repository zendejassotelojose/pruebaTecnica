import mongoose from "mongoose";
declare const Order: mongoose.Model<{
    user: mongoose.Types.ObjectId;
    truck: mongoose.Types.ObjectId;
    status: "created" | "in transit" | "completed";
    pickUp: mongoose.Types.ObjectId;
    dropOff: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    user: mongoose.Types.ObjectId;
    truck: mongoose.Types.ObjectId;
    status: "created" | "in transit" | "completed";
    pickUp: mongoose.Types.ObjectId;
    dropOff: mongoose.Types.ObjectId;
}, {}, mongoose.DefaultSchemaOptions> & {
    user: mongoose.Types.ObjectId;
    truck: mongoose.Types.ObjectId;
    status: "created" | "in transit" | "completed";
    pickUp: mongoose.Types.ObjectId;
    dropOff: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user: mongoose.Types.ObjectId;
    truck: mongoose.Types.ObjectId;
    status: "created" | "in transit" | "completed";
    pickUp: mongoose.Types.ObjectId;
    dropOff: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    truck: mongoose.Types.ObjectId;
    status: "created" | "in transit" | "completed";
    pickUp: mongoose.Types.ObjectId;
    dropOff: mongoose.Types.ObjectId;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    truck: mongoose.Types.ObjectId;
    status: "created" | "in transit" | "completed";
    pickUp: mongoose.Types.ObjectId;
    dropOff: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Order;
//# sourceMappingURL=order.model.d.ts.map