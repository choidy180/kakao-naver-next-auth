import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Kakao Naver Login NextAuthJS Prisma App</title>
        </Head>
        <SessionProvider session={pageProps.session}>
          <ChakraProvider resetCSS={true}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </SessionProvider>
      </>
  )
}
