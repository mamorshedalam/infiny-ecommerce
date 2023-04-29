import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../modules/footer';
import Header from '../modules/header';
import CartProvider from '../contexts/CartContext';

export default function RootLayout() {
     const { pathname } = useLocation();
     useEffect(() => { // Top in Render
          if (pathname != "/") window.scrollTo(0, 0);
     }, [pathname]);

     return (
          <CartProvider>
               <Header />
               <Outlet />
               <Footer />
          </CartProvider>
     )
}