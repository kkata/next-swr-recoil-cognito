import LogoutButton from '@/components/LogoutButton';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { useSession } from 'next-auth/react';

const ProtectedPage = () => {
  // 認証されていない場合は/loginにリダイレクトする
  useRequireAuth(true);
  const { data: session } = useSession();

  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        This page is protected and can only be accessed by authenticated users.
      </p>
      {session && <p>Welcome, {session.user?.email}!</p>}
      <LogoutButton />
    </div>
  );
};

export default ProtectedPage;
