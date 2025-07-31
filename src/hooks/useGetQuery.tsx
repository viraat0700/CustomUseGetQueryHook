import { useState, useEffect } from "react";

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  website: string;
  birthDate: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    registered: string;
    md5: string;
    sha1: string;
  };
};

const useGetQuery = (url: string) => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};

export default useGetQuery;
