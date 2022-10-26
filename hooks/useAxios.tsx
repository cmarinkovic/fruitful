import { useState } from "react";
import axios from "axios";

interface UseAxios {
  errorMessage: string | undefined;
  isLoading: boolean;
  makeRequest: (payload?: string) => void;
}

export default function useAxios<DataType, Payload>(
  endpoint: string,
  method: string
): UseAxios & { data: DataType | undefined } {
  const [data, setData] = useState<DataType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const makeRequest = (payload?: string) => {
    setErrorMessage(() => "");
    setIsLoading(() => true);

    axios
      .request<DataType>({
        baseURL: process.env.BASE_URL,
        url: endpoint,
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      })
      .then((response) => {
        setData(() => response.data);
      })
      .catch((error) => {
        error.response
          ? setErrorMessage(() => error.response.data.message)
          : setErrorMessage(() => error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return { data, errorMessage, isLoading, makeRequest };
}
