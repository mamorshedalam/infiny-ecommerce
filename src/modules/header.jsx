import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/iNFINY-b.png'

export default function Header() {
     return (
          <header>
               <div className="bg-neutral-900 text-white px-9">
                    <div className="flex flex-wrap items-center justify-between max-w-[1600px] w-full py-4 mx-auto">
                         <p>Free shipping, 30-day return or refund guarantee.</p>
                         <div className="uppercase tracking-widest text-right text-xs">
                              <Link to={`/`} className="mr-4">Sign in</Link>
                              <Link to={`/`} >faqs</Link>
                         </div>
                    </div>
               </div>
               <div className="px-9">
                    <div className="flex flex-wrap items-center justify-between max-w-[1600px] w-full py-4 mx-auto">
                         <Link to={`/`} className="w-32"><img src={logo} alt="logo" /></Link>
                         <nav>
                              <ul className="flex items-center">
                                   <li><NavLink to={`/`} className={({ isActive }) => isActive ? "relative font-semibold text-lg mr-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg mr-10 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        Home</NavLink ></li>
                                   <li><NavLink to={`/shop`} className={({ isActive }) => isActive ? "relative font-semibold text-lg mr-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg mr-10 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        Shop</NavLink ></li>
                                   <li><NavLink to={`/about`} className={({ isActive }) => isActive ? "relative font-semibold text-lg mr-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg mr-10 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        About</NavLink ></li>
                                   <li><NavLink to={`/contact`} className={({ isActive }) => isActive ? "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        Contact</NavLink ></li>
                              </ul>
                         </nav>
                         <div className="flex items-center">
                              <NavLink className={({ isActive }) => isActive ? "fill-neutral-900 mr-6 hover:fill-red-500 sl-animated-xl" : "fill-neutral-900 mr-6 hover:fill-red-500 sl-animated-xl"}>
                                   <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                              </NavLink>
                              <NavLink to={`/wishlist`} className={({ isActive }) => isActive ? "fill-red-500 mr-6" : "fill-neutral-900 mr-6 hover:fill-red-500 sl-animated-xl"}>
                                   <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" /></svg>
                              </NavLink>
                              <NavLink to={`/shopping-cart`} className={({ isActive }) => isActive ? "fill-red-500" : "fill-neutral-900 hover:fill-red-500 sl-animated-xl"}>
                                   <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                              </NavLink>
                         </div>
                    </div>
               </div>
          </header>
     )
}