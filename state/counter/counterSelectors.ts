import { selector } from 'recoil';
import { counterAtom } from './counterAtoms';

export const doubledCounterSelector = selector({
  key: 'doubledCounter',
  get: ({ get }) => {
    const counter = get(counterAtom);
    return counter * 2;
  },
});
