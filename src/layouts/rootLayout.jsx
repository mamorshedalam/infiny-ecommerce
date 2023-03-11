import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../modules/footer';
import Header from '../modules/header';

export default function RootLayout() {
     return (
          <>
               <Header />
               <Outlet />
               <Footer />
          </>
     )
}