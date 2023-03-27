import { useSWRAxios } from '@/hooks/useSWRAxios';

const DEMO_GET_URL = '/template';

export const DemoComponent = () => {
  const { data, isLoading, isError, error } = useSWRAxios(DEMO_GET_URL);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      data: <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
