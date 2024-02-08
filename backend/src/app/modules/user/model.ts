import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./type";
import { E_ROLE } from "../../../enums/common";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: false, default: E_ROLE.VISITOR },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const User = model<TUser, UserModel>("User", userSchema);
