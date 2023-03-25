import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../modules/footer';
import Header from '../modules/header';

export default function RootLayout() {
     const { pathname } = useLocation();
     useEffect(() => { // Top in Render
          if (pathname != "/contact") window.scrollTo(0, 0);
        }, [pathname]);

     return (
          <>
               <Header />
               <Outlet />
               <Footer />
          </>
     )
}