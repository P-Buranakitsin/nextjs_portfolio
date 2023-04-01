import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
