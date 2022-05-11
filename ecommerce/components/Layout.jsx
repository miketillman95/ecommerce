import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  // component created to wrap the application in to display layout throughout the application
  // children is passed in because it is a parent of the index component
  return (
    <div className="layout">
      <Head>
        <title>Clutch audio shop</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout