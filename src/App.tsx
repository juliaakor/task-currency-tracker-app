import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer, Header, Navigation, Status } from '@components/index';
import { ErrorBoundary } from '@components/utilities';

import { router } from './router';

import '@styles/index.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Status />
      <ErrorBoundary>
        <Routes>
          {router.map(({ Component, path }) => {
            return <Route Component={Component} key={path} path={path} />;
          })}
        </Routes>
      </ErrorBoundary>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
};
