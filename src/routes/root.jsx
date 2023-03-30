import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboardLayout";
import RootLayout from "../layouts/rootLayout";
import Index from "../pages/Public/index";
import Shop from "../pages/Public/shop";
import ProductDetails from "../pages/Public/productDetails";
import ShoppingCart from "../pages/Public/shoppingCart";
import Checkout from "../pages/public/checkout";
import Wishlist from "../pages/Public/wishlist";
import About from "../pages/public/about";
import Contact from "../pages/public/contact";
import Dashboard from "../pages/Dashboard/dashboard";
import DashLogin from "../pages/Dashboard/login";
import DashProductList from "../pages/Dashboard/productList";
import DashProductEdit from "../pages/Dashboard/productEdit";
import ErrorPage from "../pages/errorPage";
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
                         element: <ProductDetails />
                    },
                    {
                         path: '/shopping-cart',
                         element: <ShoppingCart />
                    },
                    {
                         path: 'checkout',
                         element: <Checkout />
                    },
                    {
                         path: 'wishlist',
                         element: <Wishlist />
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
                    { index: true, element: <Dashboard /> },
                    {
                         path: '/dashboard/product',
                         element: <Private><DashProductList /></Private>
                    },
                    {
                         path: '/dashboard/product/create',
                         element: <Private><DashProductEdit /></Private>
                    },
                    {
                         path: '/dashboard/product/edit/:sku',
                         element: <Private><DashProductEdit /></Private>
                    },
                    {
                         path: '/dashboard/login',
                         element: <DashLogin />
                    },
               ]
          }]
     }
])

export default routes;