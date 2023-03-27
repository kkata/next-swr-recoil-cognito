// recoil atoms and selectors
// manage state for authentication
// fully typed with TypeScript

import { atom } from 'recoil';
import { CognitoUser } from '@aws-amplify/auth';
type UserData = {
  username: string;
  email: string;
} | null;

export const authState = atom<UserData>({
  key: 'authState',
  default: null,
});
