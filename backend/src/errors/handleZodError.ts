import { ZodError, ZodIssue } from "zod";
import { TGenericErrorMessage, TGenericErrorResponse } from "../types/common";

const handleZodError = (error: ZodError): TGenericErrorResponse => {
  const errors: TGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    statusCode: 400,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export default handleZodError;
