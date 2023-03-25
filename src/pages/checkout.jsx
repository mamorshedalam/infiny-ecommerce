import HeroSection from "../modules/hero";

export default function Checkout() {
     return (
          <>
               <HeroSection />

               <section className="sl-container flex flex-wrap py-24">
                    <main className="basis-3/4 pr-4">

                    </main>
                    <aside className="basis-1/4 pl-4">
                         <div className="bg-stone-100 py-9 px-10">
                              <h2 className="font-bold uppercase text-2xl border-b border-zinc-400 pb-6 mb-8">Your order</h2>
                              <ul className="mb-6">
                                   <li className="mb-4">Product <span className="float-right">Total</span></li>
                                   <li className="mb-3"><span>01.</span> Vanilla salted caramel <span className="float-right">$ 300.0</span></li>
                                   <li className="mb-3"><span>01.</span> Vanilla salted caramel <span className="float-right">$ 300.0</span></li>
                                   <li className="mb-3"><span>01.</span> Vanilla salted caramel <span className="float-right">$ 300.0</span></li>
                              </ul>
                              <ul className="border-y border-zinc-400 py-4 mb-6">
                                   <li className="mb-3">Subtotal <span className="float-right font-bold text-red-500">$ 169.50</span></li>
                                   <li>Total <span className="float-right font-bold text-red-500">$ 169.50</span></li>
                              </ul>
                              <form>
                                   <h3 className="font-bold mb-4">Payment Method:</h3>
                                   <ul>
                                        <li className="flex items-center gap-4"><input type="radio" name="payment" id="bkash" className="w-auto" /><label htmlFor="bkash">Bkash</label></li>
                                        <li className="flex items-center gap-4"><input type="radio" name="payment" id="nogod" className="w-auto" /><label htmlFor="nogod">Nogod</label></li>
                                        <li className="flex items-center gap-4"><input type="radio" name="payment" id="cod" className="w-auto" /><label htmlFor="cod">Cash on Delivery</label></li>
                                   </ul>
                              </form>
                              <button className="w-full bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3 mt-6">place order</button>
                         </div>
                    </aside>
               </section>
          </>
     )
}