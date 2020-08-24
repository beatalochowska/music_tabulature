interface Dictionary<T> {
  value: T;
  label: string;
}

type ResponseStatus = "INIT" | "LOADING" | "SUCCESS" | "ERROR";
