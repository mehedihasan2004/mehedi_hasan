import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { TUser } from "./type";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.createUser(req.body);

  sendResponse<TUser>(res, {
    statusCode: 201,
    success: true,
    message: "User created successfully",
    data,
  });
});

export const UserController = { createUser };
