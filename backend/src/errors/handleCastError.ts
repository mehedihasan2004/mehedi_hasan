import mongoose from "mongoose";
import { TGenericErrorMessage } from "../types/common";

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: TGenericErrorMessage[] = [
    { path: error.path, message: "Invalid Id" },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Cast Error",
    errorMessages: errors,
  };
};

export default handleCastError;
