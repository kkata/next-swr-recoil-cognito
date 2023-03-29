import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function useRequireAuth(
  authRequired: boolean,
  redirectUrl = '/protected'
) {
  const router = useRouter();
  const { data: session } = useSession();
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
