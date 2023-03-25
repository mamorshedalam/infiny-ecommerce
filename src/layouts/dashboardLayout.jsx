import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logoImg from "../assets/iNFINY-b.png"

export default function DashboardLayout() {
     const location = useLocation();
     const title = location.pathname.slice(1); // title taking from url

     const { pathname } = useLocation();
     useEffect(() => { // Top in Render
          if (pathname != "/contact") window.scrollTo(0, 0);
     }, [pathname]);

     return (
          <div className="flex flex-wrap">
               <aside className="relative w-1/6 h-screen bg-slate-100 font-semibold text-lg pt-6">
                    <div className="w-full mb-4"><img src={logoImg} alt="logo" className="h-14 object-contain" /></div>
                    <ul className="border-t-2 pt-4 px-6">
                         <li><NavLink to={`/dashboard/list`} className={({ isActive }) => isActive ? "relative mb-4 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                              : "relative mb-4 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>Product List</NavLink></li>
                         <li><NavLink to={`/dashboard/add`} className={({ isActive }) => isActive ? "relative mb-4 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                              : "relative mb-4 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>Add Product</NavLink></li>
                    </ul>
                    <Link to={`/dashboard`} className="absolute bottom-0 left-0 w-full bg-red-500 text-white text-center py-2">Logout</Link>
               </aside>
               <main className="w-5/6">
                    <section className="bg-slate-100 border-b-2 capitalize p-4">
                         <h2 className="font-bold text-2xl mb-2">{title}</h2>
                         <ul className="flex text-zinc-400">
                              <li><Link to={"/"}>Home</Link></li>
                              <li className="mx-2">-</li>
                              <li><a href="" className="text-neutral-900">{title}</a></li>
                         </ul>
                    </section>
                    <Outlet />
               </main>
          </div>
     )
}