import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import AlertMessage from '../components/Alert/alertMessage';
import Footer from '../modules/footer';
import Header from '../modules/header';

export default function RootLayout() {
     const { cartAlert } = useCart();
     const { pathname } = useLocation();
     useEffect(() => { // Top in Render
          if (pathname != "/") window.scrollTo(0, 0);
     }, [pathname]);

     return (
          <>
               <Header />
               <Outlet />
               <Footer />
               <AlertMessage status={cartAlert.status} message={cartAlert.message} />
          </>
     )
}