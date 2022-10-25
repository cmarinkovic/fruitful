import { Dispatch, useState } from "react";
import axios from "axios";

interface UseAxios {
  errorMessage: string | undefined;
  isLoading: boolean;
  setPayload: Dispatch<any>;
  makeRequest: () => void;
}

export default function useAxios<DataType, Payload>(
  endpoint: string,
  method: string
): UseAxios & { data: DataType | undefined } {
  const [data, setData] = useState<DataType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<Payload>();

  const makeRequest = () => {
    setErrorMessage("");
    setIsLoading(true);

    axios
      .request<DataType>({
        url: endpoint,
        baseURL: process.env.BASE_URL,
        method: method,
        withCredentials: false,
        responseType: "json",
        data: payload,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        error.response
          ? setErrorMessage(error.response.data.message)
          : setErrorMessage(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return { data, errorMessage, isLoading, setPayload, makeRequest };
}
