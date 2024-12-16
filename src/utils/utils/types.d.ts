export type ICatchHandler = {
  response?: AxiosError<>;
};

export type IThenHandler = {
  data: { message: string };
};
