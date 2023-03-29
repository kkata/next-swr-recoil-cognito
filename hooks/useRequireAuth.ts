import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { sessionState } from '@/recoil/auth';

export function useRequireAuth(
  authRequired: boolean,
  redirectUrl = '/protected'
) {
  const router = useRouter();
  const session = useRecoilValue(sessionState);
  const isAuth = !!session;

  console.log('isAuth', isAuth);

  useEffect(() => {
    if (authRequired && !isAuth) {
      router.push('/login');
    } else if (!authRequired && isAuth) {
      router.push(redirectUrl);
    }
  }, [isAuth, authRequired, router, redirectUrl]);
}
