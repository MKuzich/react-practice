import { GlobalStyle } from './GlobalStyle';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Converter = lazy(() => import('../pages/Converter/Converter'));
const Error = lazy(() => import('../pages/Error/Error'));
const Weather = lazy(() => import('../pages/Weather/Weather'));

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
