import HeroSection from "../modules/hero";

export default function ShoppingCart() {
     return (
          <>
               <HeroSection />

               <section className="sl-container flex flex-wrap py-24">
                    <main className="basis-3/4 px-4">
                         <table className="w-full">
                              <thead>
                                   <tr className="border-b">
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                   </tr>
                              </thead>
                         </table>
                    </main>
                    <aside className="basis-1/4 px-4">
                         <h2 className="font-bold uppercase mb-8">Discount codes</h2>
                         <form className="relative mb-16">
                              <input type="text" placeholder="Coupon code" className="w-full text-zinc-400 text-sm border pl-5 py-3" />
                              <button className="absolute right-0 top-0 h-full bg-neutral-900 font-bold uppercase tracking-widest text-white text-sm px-6">apply</button>
                         </form>
                         <div className="bg-stone-100 py-9 px-10">
                              <h3 className="uppercase font-bold mb-3">Cart total</h3>
                              <ul className="mb-6">
                                   <li className="text-neutral-700 mb-3">Subtotal <span className="float-right font-bold text-red-500">$ 169.50</span></li>
                                   <li className="text-neutral-700 mb-3">Total <span className="float-right font-bold text-red-500">$ 169.50</span></li>
                              </ul>
                              <button className="w-full bg-neutral-900 font-bold uppercase tracking-widest text-white text-sm py-3">Proceed to checkout</button>
                         </div>
                    </aside>
               </section>
          </>
     )
}