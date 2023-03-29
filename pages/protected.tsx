import LogoutButton from '@/components/LogoutButton';
import { useRequireAuth } from '@/hooks/useRequireAuth';

const ProtectedPage = () => {
  // 認証されていない場合は/loginにリダイレクトする
  useRequireAuth(true);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        This page is protected and can only be accessed by authenticated users.
      </p>
      <LogoutButton />
    </div>
  );
};

export default ProtectedPage;
