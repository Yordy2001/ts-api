import { Schema, Types, model, Model } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const UserSchema = new Schema<IUser>(
    {
        name:{
            type: String,
            required: true
        },

        password:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("users", UserSchema);

export default UserModel;
