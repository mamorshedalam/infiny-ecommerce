import { Link } from 'react-router-dom'
import logo from '../assets/iNFINY-w.png'
import payment from '../assets/payment.png'

export default function Footer() {

     return (
          <footer className="bg-neutral-900 text-zinc-400">
               <div className="flex flex-wrap items-center justify-between px-9 py-12">
                    <div className="w-72">
                         <Link to={`/`} className="w-40"><img src={logo} alt="logo" /></Link>
                         <p className="my-5">The customer is at the heart of our unique business model, which includes design.</p>
                         <img src={payment} alt="" />
                    </div>
                    <div>
                         <ul className="inline-block mr-20">
                              <li><h2 className="font-bold text-white uppercase mb-5">Shopping</h2></li>
                              <li><a href="" className="mb-2 hover:text-white sl-animated-md">Clothing Store</a></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Trading Shoes</a></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Accessories</a></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Sale</a></li>
                         </ul>
                         <ul className="inline-block">
                              <li><h2 className="font-bold text-white uppercase mb-5">Details</h2></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Contact Us</a></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Payment Methods</a></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Delivery</a></li>
                              <li><a href=""  className="mb-2 hover:text-white sl-animated-md">Return & Exchanges</a></li>
                         </ul>
                    </div>
                    <div className="w-72">
                    <h2 className="font-bold text-white uppercase mb-5">newletter</h2>
                         <p className="my-5">Be the first to know about new arrivals, look books, sales & promos!</p>
                         <input type="email" placeholder="Your email" className="border-b-2 pb-2"/>
                    </div>
               </div>
               <div className="border-t py-6">
                    <p className="text-center">Copyright © {new Date().getFullYear()} All rights reserved <a href="https://mamorshedalam.netlify.app/" className="transition duration-500 hover:text-white">@mamorshedalam</a></p>
               </div>
          </footer>
     )
}