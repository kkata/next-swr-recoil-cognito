import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { sessionState } from '@/recoil/auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <SetSessionState />
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

function SetSessionState() {
  const { data: session } = useSession();
  const [recoilSession, setRecoilSession] = useRecoilState(sessionState);

  useEffect(() => {
    if (session !== recoilSession) {
      setRecoilSession(session);
    }
  }, [session, recoilSession, setRecoilSession]);

  return null;
}
