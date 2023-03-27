import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboardLayout";
import RootLayout from "../layouts/rootLayout";
import Index from "../pages";
import About from "../pages/about";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";
import DashLogin, { action as login, } from "../pages/dashLogin";
import DashList from "../pages/dashList";
import DashAdd from "../pages/dashAdd";
import ErrorPage from "../pages/errorPage";
import Shop from "../pages/shop";
import ShopDetails from "../pages/shopDetails";
import ShoppingCart from "../pages/shoppingCart";
import Wishlist from "../pages/wishlist";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [{
               errorElement: <ErrorPage />,
               children: [
                    { index: true, element: <Index /> },
                    {
                         path: '/shop',
                         element: <Shop />
                    },
                    {
                         path: '/about',
                         element: <About />
                    },
                    {
                         path: '/contact',
                         element: <Contact />
                    },
                    {
                         path: '/shop/:productId',
                         element: <ShopDetails />
                    },
                    {
                         path: '/cart',
                         element: <ShoppingCart />
                    },
                    {
                         path: 'wishlist',
                         element: <Wishlist />
                    },
                    {
                         path: 'checkout',
                         element: <Checkout />
                    },
               ]

          }]
     },
     {
          path: '/dashboard',
          element: <DashboardLayout />,
          errorElement: <ErrorPage />,
          children: [{
               errorElement: <ErrorPage />,
               children: [
                    { index: true, element: <DashLogin />, action: login,},
                    {
                         path: '/dashboard/list',
                         element: <DashList />
                    },
                    {
                         path: '/dashboard/add',
                         element: <DashAdd />,
                    },
               ]
          }]
     }
])

export default routes;