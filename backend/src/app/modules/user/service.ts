import ApiError from "../../../errors/ApiError";
import { User } from "./model";
import { TUser } from "./type";

const createUser = async (payload: TUser): Promise<TUser> => {
  const user = await User.create(payload);

  if (!user) throw new ApiError(400, "Failed to create user!");

  return user;
};

export const UserService = { createUser };
