import { useState, useEffect, useCallback } from "react";

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
};

const useGetQuery = (url: string) => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useGetQuery;
