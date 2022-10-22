import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData<DataType>(endpoint: string): {
  data: DataType | undefined;
  errorMessage: string | undefined;
  isLoading: boolean;
} {
  const [data, setData] = useState<DataType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = () => {
    setErrorMessage("");
    setIsLoading(true);

    axios
      .get<DataType>(process.env.BASE_URL + endpoint)
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

  useEffect(() => {
    fetchData();
  }, []);

  return { data, errorMessage, isLoading };
}
