import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Kakao Naver Login NextAuthJS Prisma App</title>
          <meta name="description" content="Kakao Naver NextAuth Prisma App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Kakao Naver Login NextAuthJS Prisma App</h1>
      </div>
    </>
  )
}

export default Home;