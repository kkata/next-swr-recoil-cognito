// src/hooks/useAuth.ts
import { CognitoUser } from '@aws-amplify/auth';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '@/state/auth';
import Auth from '@/lib/auth';

const extractUserData = (user: CognitoUser | null) => {
  if (!user) return null;

  const { username, attributes } = user;
  const email = attributes?.email || '';

  return { username, email };
};

export const useAuth = () => {
  const [user, setUser] = useRecoilState(authState);

  const signIn = async (username: string, password: string) => {
    const user = await Auth.signIn(username, password);
    console.log('signIn user', user);
    setUser(extractUserData(user));
  };

  const signOut = async () => {
    await Auth.signOut();
    setUser(null);
  };

  const fetchCurrentUser = useCallback(async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log('currentUser', currentUser);
      setUser(extractUserData(currentUser));
    } catch (error) {
      setUser(null);
    }
  }, [setUser]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return { user, signIn, signOut };
};
