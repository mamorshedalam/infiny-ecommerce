import { NavLink, useNavigate } from "react-router-dom";
import ProductList from "../components/productList";
import HeroSection from "../modules/hero";

export default function ShoppingCart() {
     const navigate = useNavigate()
     const listArray = [1, 2, 3, 4, 5]
     return (
          <>
               <HeroSection />

               <div className="sl-container flex flex-wrap py-24">
                    <main className="basis-3/4 px-4">
                         <table className="w-full mb-9">
                              <thead>
                                   <tr className="border-b text-left font-bold uppercase">
                                        <th className="pb-6">Product</th>
                                        <th className="pb-6">Quantity</th>
                                        <th className="pb-6">Total</th>
                                        <th className="pb-6"></th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        listArray.map((item, index) => (
                                             <ProductList key={index} />
                                        ))
                                   }
                              </tbody>
                         </table>
                         <div className="flex justify-between">
                              <button onClick={() => { navigate(-1) }} className="font-bold uppercase tracking-widest text-sm border border-neutral-900 py-4 px-9">Continue Shopping</button>
                              <button className="bg-neutral-900 font-bold uppercase tracking-widest text-white text-sm py-4 px-9">Update cart</button>
                         </div>
                    </main>
                    <aside className="basis-1/4 px-4">
                         <h2 className="font-bold uppercase mb-8">Discount codes</h2>
                         <form className="relative mb-16">
                              <input type="text" placeholder="Coupon code" className="text-zinc-400 text-sm border pl-5 py-3" />
                              <button className="absolute right-0 top-0 h-full bg-neutral-900 font-bold uppercase tracking-widest text-white text-sm px-6">apply</button>
                         </form>
                         <div className="bg-stone-100 py-9 px-10">
                              <h3 className="uppercase font-bold mb-3">Cart total</h3>
                              <ul className="mb-6">
                                   <li className="text-neutral-700 mb-3">Subtotal <span className="float-right font-bold text-red-500">$ 169.50</span></li>
                                   <li className="text-neutral-700 mb-3">Total <span className="float-right font-bold text-red-500">$ 169.50</span></li>
                              </ul>
                              <NavLink to={`/checkout`} className="w-full bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3">Proceed to checkout</NavLink>
                         </div>
                    </aside>
               </div>
          </>
     )
}