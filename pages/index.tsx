import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <div>
        <Head>
          {/* @ts-ignore */}
          <meta keywords={'Kozox, webdev'}></meta>
          <title>Главная страница</title>
        </Head>
        <Header />
      </div>
    </>
  );
};

export default Layout;
