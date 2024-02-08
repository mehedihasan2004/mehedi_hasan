type TGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export { TGenericResponse, TGenericErrorResponse, TGenericErrorMessage };
