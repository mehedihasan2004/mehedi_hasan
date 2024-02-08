import mongoose from "mongoose";
import { TGenericErrorMessage, TGenericErrorResponse } from "../types/common";

const handleValidationError = (
  error: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  //@ts-ignore
  const errors: TGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return { path: el?.path, message: el?.reason };
    }
  );

  return {
    statusCode: 400,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export default handleValidationError;
