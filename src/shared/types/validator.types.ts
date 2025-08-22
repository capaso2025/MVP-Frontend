export type ValidationFn<T> = (
  data: T,
  keysList: string[],
) => {
  isValid: boolean;
  errors: Record<string, string>;
};
