import { GlobalStyle } from './GlobalStyle';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Converter = lazy(() => import('../pages/Converter/Converter'));
const Error = lazy(() => import('../pages/Error/Error'));
const Weather = lazy(() => import('../pages/Weather/Weather'));

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="converter" element={<Converter />} />
          <Route path="weather" element={<Weather />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
