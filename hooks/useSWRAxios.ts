import useSWR from 'swr';
import { selectorFamily, useRecoilValueLoadable } from 'recoil';
import { apiClient } from '@/lib/api';

const dataSelector = selectorFamily({
  key: 'dataSelector',
  get: (url: string) => async () => {
    const { data } = await apiClient.get(url);
    return data;
  },
});

export const useSWRAxios = <T>(url: string) => {
  const { data, error } = useSWR<T>(url, apiClient.get);
  const loadable = useRecoilValueLoadable(dataSelector(url));

  // When the SWR data is available, use it. Otherwise, use the Recoil loadable.
  const finalData = data ?? loadable.contents;
  const isLoading = !data && loadable.state === 'loading';
  const isError = error || (loadable.state === 'hasError' && !data);

  return {
    data: finalData,
    isLoading,
    isError,
    error: isError ? error ?? loadable.contents : undefined,
  };
};
