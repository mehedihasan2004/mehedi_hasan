import { Model } from "mongoose";
import { E_ROLE } from "../../../enums/common";

type TUser = {
  name: string;
  email: string;
  role: E_ROLE;
  image?: string;
  messages?: string[];
};

type UserModel = Model<TUser, Record<string, unknown>>;

export { TUser, UserModel };
