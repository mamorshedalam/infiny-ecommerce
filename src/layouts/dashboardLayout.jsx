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
               <aside className="relative basis-[4%] h-screen bg-slate-100 font-semibold text-lg pt-6">
                    <div className="w-full mb-4"><img src={logoImg} alt="logo" className="h-14 object-contain" /></div>
                    <ul className="border-t-2 pt-4">
                         <li><NavLink to={`/dashboard/list`} className={({ isActive }) => isActive ? "w-full fill-red-500" : "w-full fill-neutral-900"}><svg className="h-6 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg></NavLink></li>
                         <li><NavLink to={`/dashboard/add`} className={({ isActive }) => isActive ? "w-full fill-red-500" : "w-full fill-neutral-900"}><svg className="h-6 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" /></svg></NavLink></li>
                    </ul>
                    <Link to={`/dashboard`} className="absolute bottom-0 left-0 w-full bg-red-500 fill-white py-2"><svg className="h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg></Link>
               </aside>
               <main className="basis-[96%]">
                    <section className="bg-slate-100 border-b-2 capitalize p-4">
                         <h2 className="font-bold text-2xl mb-2">{title}</h2>
                         <ul className="flex text-zinc-400">
                              <li><Link to={"/dashboard/list"}>Home</Link></li>
                              <li className="mx-2">-</li>
                              <li><a href="" className="text-neutral-900">{title}</a></li>
                         </ul>
                    </section>
                    <section className="sl-scroll-hidden h-[calc(100vh-6.5rem)] px-4 pt-6 overflow-y-scroll">
                         <Outlet />
                    </section>
               </main>
          </div>
     )
}