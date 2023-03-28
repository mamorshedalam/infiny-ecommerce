import ButtonBlack from "../components/Button/btnBlack";
import HeroSection from "../modules/hero";

export default function Checkout() {
     return (
          <>
               <HeroSection />

               <form className="sl-container flex flex-wrap py-24">
                    <main className="basis-2/3 pr-6">
                         <h2 className="font-bold uppercase text-xl border-b border-zinc-400 pb-6 mb-8">Billing Details</h2>
                         <div className="flex flex-wrap mb-6">
                              <div className="basis-1/2 pr-4">
                                   <label htmlFor="firstName" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Fist Name</label>
                                   <input id="firstName" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                              </div>
                              <div className="basis-1/2 pl-4">
                                   <label htmlFor="lastName" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Last Name</label>
                                   <input id="lastName" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                              </div>
                         </div>
                         <div className="mb-6">
                              <label htmlFor="country" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Country</label>
                              <input id="country" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                         </div>
                         <div className="mb-6">
                              <label htmlFor="city" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">City/Town</label>
                              <input id="city" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                         </div>
                         <div className="mb-6">
                              <label htmlFor="zip" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Postcode/ZIP</label>
                              <input id="zip" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                         </div>
                         <div className="mb-6">
                              <label htmlFor="address" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Address</label>
                              <input id="address" placeholder="Street Address" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                              <input placeholder="Apartment, suite, unite ect (optinal)" type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                         </div>
                         <div className="flex flex-wrap mb-6">
                              <div className="basis-1/2 pr-4">
                                   <label htmlFor="phone" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Phone</label>
                                   <input id="phone" type="tel" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                              </div>
                              <div className="basis-1/2 pl-4">
                                   <label htmlFor="email" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Email</label>
                                   <input id="email" type="email" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                              </div>
                         </div>
                         <div className="mb-6">
                              <label htmlFor="note" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Order notes</label>
                              <input id="note" placeholder="Notes about your order, e.g. special notes for delivery." type="text" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
                         </div>
                    </main>
                    <aside className="basis-1/3 pl-6">
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
                              <h3 className="font-bold mb-4">Payment Method:</h3>
                              <ul>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="bkash" className="w-auto" /><label htmlFor="bkash">Bkash</label></li>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="nogod" className="w-auto" /><label htmlFor="nogod">Nogod</label></li>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="cod" className="w-auto" /><label htmlFor="cod">Cash on Delivery</label></li>
                              </ul>
                              <ButtonBlack classes="w-full text-sm mt-6">place order</ButtonBlack>
                         </div>
                    </aside>
               </form>
          </>
     )
}