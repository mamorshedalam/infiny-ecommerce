import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
     const error = useRouteError();
     console.error(error);

     return (
          <main className="flex flex-col items-center justify-center h-screen text-center">
               <h2 className="font-bold text-2xl">Oops!</h2>
               <p className="mt-4 mb-2">Sorry, an unexpected error has occurred.</p>
               <p className="text-red-500">
                    <i>{error.statusText || error.message}</i>
               </p>
          </main>
     )
}