import mongoose, { Document, Schema } from 'mongoose';
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
export const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
//# sourceMappingURL=user.model.js.map