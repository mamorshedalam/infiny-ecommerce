import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../modules/dashboardSidebar";
import { AuthProvider } from "../contexts/AuthContext";

export default function DashboardLayout() {
     const location = useLocation();
     const title = location.pathname.slice(1); // title taking from url

     const { pathname } = useLocation();
     useEffect(() => { // Top in Render
          if (pathname != "/contact") window.scrollTo(0, 0);
     }, [pathname]);

     return (
          <AuthProvider>
               <div className="flex flex-wrap">
                    <DashboardSidebar />
                    <main className="basis-[96%]">
                         <section className="bg-slate-100 border-b-2 capitalize p-4">
                              <h2 className="font-bold text-2xl mb-2">{title}</h2>
                              <ul className="flex text-zinc-400">
                                   <li><Link to={"/dashboard"}>Home</Link></li>
                                   <li className="mx-2">-</li>
                                   <li><a href="" className="text-neutral-900">{title}</a></li>
                              </ul>
                         </section>
                         <section className="sl-scroll-hidden h-[calc(100vh-6.5rem)] px-4 pt-6 overflow-y-scroll">
                              <Outlet />
                         </section>
                    </main>
               </div>
          </AuthProvider>
     )
}