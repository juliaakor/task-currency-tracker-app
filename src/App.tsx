import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer, Header, Navigation } from '@components/index';

import { router } from './router';

import '@styles/index.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Routes>
        {router.map(({ Component, path }) => {
          return <Route Component={Component} key={path} path={path} />;
        })}
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
};
