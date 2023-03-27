import Link from 'next/link';

import { useRecoilState, useRecoilValue } from 'recoil';

import { counterAtom } from '@/state/counter/counterAtoms';

import { doubledCounterSelector } from '@/state/counter/counterSelectors';

import NonSSRWrapper from '@/components/NonSSRWrapper';
import { DemoComponent } from '@/components/DemoComponent';

// Dynamic import '@/components/DemoComponent' to avoid SSR error
// const DemoComponent = dynamic<{}>(() =>
//   import('@/components/DemoComponent').then((module) => module.DemoComponent)
// );

const NoSRRDemoComponent = () => {
  return (
    <NonSSRWrapper>
      <DemoComponent />
    </NonSSRWrapper>
  );
};

export default function Home({ formattedDate }: { formattedDate: string }) {
  const [count, setCount] = useRecoilState(counterAtom);
  const doubledCount = useRecoilValue(doubledCounterSelector);

  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <Link href="/ssr">View a server-side rendered page.</Link>
      </p>

      <hr />

      <h1>Recoil</h1>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />
      <h2>Recoil fetch data with swr</h2>
      <NoSRRDemoComponent />
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat('JP', {
    dateStyle: 'long',
    timeStyle: 'long',
  }).format(buildDate);

  return { props: { formattedDate } };
}
