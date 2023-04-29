import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/iNFINY-b.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useCart } from '../contexts/CartContext'

export default function Header() {
     const { data } = useCart()
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
                              <ul className="flex items-center space-x-9">
                                   <li><NavLink to={`/`} className={({ isActive }) => isActive ? "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        Home</NavLink ></li>
                                   <li><NavLink to={`/shop`} className={({ isActive }) => isActive ? "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        Shop</NavLink ></li>
                                   <li><NavLink to={`/about`} className={({ isActive }) => isActive ? "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        About</NavLink ></li>
                                   <li><NavLink to={`/contact`} className={({ isActive }) => isActive ? "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.15rem] after:bg-red-500"
                                        : "relative font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[0.15rem] after:bg-red-500 hover:after:w-full sl-animated-xl"}>
                                        Contact</NavLink ></li>
                              </ul>
                         </nav>
                         <div className="flex items-center space-x-6">
                              <NavLink className="text-neutral-900 hover:text-red-500 sl-animated-xl">
                                   <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </NavLink>
                              <NavLink to={`/wishlist`} className={({ isActive }) => isActive ? "text-red-500" : "text-neutral-900 hover:text-red-500 sl-animated-xl"}>
                                   <FontAwesomeIcon icon={faHeart} />
                              </NavLink>
                              <NavLink to={`/shopping-cart`} className={({ isActive }) => isActive ? "flex items-center text-red-500" : "flex items-center text-neutral-900 hover:text-red-500 sl-animated-xl"}>
                                   <FontAwesomeIcon icon={faCartShopping} />
                                   <span className="font-bold text-xs text-red-500 pl-1">{data && data.length}</span>
                              </NavLink>
                         </div>
                    </div>
               </div>
          </header>
     )
}