import mongoose from "mongoose";
import {IUser} from "../models/IUser";

const UserSchema = new mongoose.Schema<IUser>({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true});

const UserTable = mongoose.model<IUser>('users', UserSchema);
export default UserTable;