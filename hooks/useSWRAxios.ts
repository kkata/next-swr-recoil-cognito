import useSWR, { mutate } from 'swr';
import { apiClient } from '@/lib/api';
import { AxiosError } from 'axios';

const createFetcher =
  <T, RequestData = any>(method: 'get' | 'post' | 'put' | 'delete') =>
  (url: string, requestData?: RequestData) =>
    apiClient[method]<T>(url, requestData).then((response) => response.data);

export const useSWRAxios = <T, RequestData = unknown>(
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' = 'get'
) => {
  const fetcher = createFetcher<T, RequestData>(method);

  const { data, error } = useSWR<T>(url, fetcher);

  const isLoading = !data && !error;
  const isError = error !== undefined;

  return {
    data,
    isLoading,
    isError,
    error: error as AxiosError,
    mutate: (data?: RequestData) =>
      mutate(url, () => fetcher(url, data), false),
  };
};
