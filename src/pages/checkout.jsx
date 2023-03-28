import ButtonBlack from "../components/Button/btnBlack";
import HeroSection from "../modules/hero";
import Input from "../components/Input/inputField";

export default function Checkout() {
     return (
          <>
               <HeroSection />

               <form className="sl-container flex flex-wrap py-24">
                    <main className="grid basis-2/3 grid-cols-2 gap-6 pr-6">
                         <h2 className="col-span-2 font-bold uppercase text-xl border-b border-zinc-400 pb-6">Billing Details</h2>
                         <div className="col-span-1">
                              <label htmlFor="firstName" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Fist Name</label>
                              <Input id="firstName" type="text" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="lastName" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Last Name</label>
                              <Input id="lastName" type="text" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="country" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Country</label>
                              <Input id="country" type="text" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="city" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">City / Town</label>
                              <Input id="city" type="text" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="zip" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Postcode / ZIP</label>
                              <Input id="zip" type="text" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="address" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Address</label>
                              <Input id="address" name="Street Address" type="text" classes="text-zinc-400 text-sm mt-3" />
                              <Input id="lastName" name="Apartment, suite, unite ect (optinal)" type="text" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="phone" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Phone</label>
                              <Input id="phone" type="tel" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="email" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Email</label>
                              <Input id="email" type="email" classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="note" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Order notes</label>
                              <Input id="note" name="Notes about your order, e.g. special notes for delivery." type="text" classes="text-zinc-400 text-sm mt-3" />
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