import { atomFamily, useRecoilState } from 'recoil';
import { useSWRAxios } from './useSWRAxios';
import { useEffect } from 'react';

const dataAtomFamily = <T>() =>
  atomFamily<T | null, string>({
    key: 'dataAtomFamily',
    default: null,
  });

export const useRecoilSWRAxios = <T>(url: string) => {
  const atom = dataAtomFamily<T>();
  const [data, setData] = useRecoilState<T | null>(atom(url));
  const { data: fetchedData, isLoading, isError, error } = useSWRAxios<T>(url);

  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData);
    } else if (data) {
      setData(null);
    }
  }, [fetchedData, setData, data]);

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
