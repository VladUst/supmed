import { useEffect, useState } from 'react';
import { type AxiosResponse } from 'axios';

export function useFetch<T> (request: any): [T[], boolean, string] {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    setIsLoading(true);
    request()
      .then((response: AxiosResponse) => { setData(response.data); })
      .catch((error: string) => { setError(error); })
      .finally(() => { setIsLoading(false); });
    // eslint-disable-next-line
  }, []);
  return [data, isLoading, error];
}
