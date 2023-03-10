import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
import Index from "../pages";
import ErrorPage from "../pages/errorPage";

const routes = createBrowserRouter([
     {
          path: '/',
          element: <RootLayout />,
          errorElement: <ErrorPage />,
          children: [
               {
                    errorElement: <ErrorPage />,
                    children: [
                         { index: true, element: <Index /> }
                    ]

               }
          ]
     }
])

export default routes;