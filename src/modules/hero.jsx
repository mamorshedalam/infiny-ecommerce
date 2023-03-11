import { Link, useLocation } from 'react-router-dom'

export default function HeroSection() {
     const location = useLocation();
     const title = location.pathname.slice(1);
     return (
          <section className="bg-stone-100">
               <div className="sl-container py-9">
                    <h2 className="font-bold text-2xl mb-2">Shop</h2>
                    <ul className="flex text-zinc-400">
                         <li><Link to={"/"}>Home</Link></li>
                         <li className="mx-2">-</li>
                         <li><a href="" className="capitalize text-neutral-900">{title}</a></li>
                    </ul>
               </div>
          </section>
     )
}