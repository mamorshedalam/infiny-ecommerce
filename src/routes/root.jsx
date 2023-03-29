import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboardLayout";
import RootLayout from "../layouts/rootLayout";
import Index from "../pages";
import About from "../pages/about";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";
import DashLogin from "../pages/dashLogin";
import Dashboard from "../pages/dashboard";
import DashAdd from "../pages/dashAdd";
import ErrorPage from "../pages/errorPage";
import Shop from "../pages/shop";
import ShopDetails from "../pages/shopDetails";
import ShoppingCart from "../pages/shoppingCart";
import Wishlist from "../pages/wishlist";
import Private from "./private";

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
                    { index: true, element: <Private><Dashboard /></Private> },
                    {
                         path: '/dashboard/login',
                         element: <DashLogin />
                    },
                    {
                         path: '/dashboard/add',
                         element: <Private><DashAdd /></Private>
                    },
               ]
          }]
     }
])

export default routes;