import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import Index from "../pages";
import About from "../pages/about";
import Contact from "../pages/contact";
import ErrorPage from "../pages/errorPage";
import Shop from "../pages/shop";
import ShopDetails from "../pages/shopDetails";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
               {
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
                              path: 'shop/:productId',
                              element: <ShopDetails />
                         },
                    ]

               }
          ]
     }
])

export default routes;