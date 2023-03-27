import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const useRequireAuth = () => {
  const { user } = useAuth();
  const router = useRouter();

  console.log('user', user);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);
};
