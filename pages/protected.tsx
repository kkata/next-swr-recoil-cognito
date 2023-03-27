import { useRequireAuth } from '@/utils/requireAuth';

const ProtectedPage = () => {
  useRequireAuth();

  return <div>Protected content</div>;
};

export default ProtectedPage;
