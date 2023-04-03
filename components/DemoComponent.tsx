import { useSWRAxios } from '@/hooks/useSWRAxios';
import { useRecoilSWRAxios } from '@/hooks/useRecoilSWRAxios';
import { Template } from '@/types/template';

const DEMO_GET_URL = '/template';

export const DemoComponent = () => {
  const { data, isLoading, isError, error } =
    useRecoilSWRAxios<Template>(DEMO_GET_URL);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data?.users.map((user) => (
        <div key={user.userId}>
          <p>
            {user.firstname} {user.lastname}
          </p>
        </div>
      ))}
    </div>
  );
};
