import Button from "../../components/Button/button";
import HeroSection from "../../modules/hero";
import Input from "../../components/Input/inputField";
import { useCart } from "../../contexts/CartContext";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
     const { data, deliveryFee, clearCart } = useCart()
     const [placed, setPlaced] = useState(false)

     const subTotal = useMemo(() => {   // calculate sub total
          let subTotal = 0
          if (data) {
               for (let i = 0; i < data.length; i++) {
                    const quantityPrice = data[i].Price * data[i].Quantity;
                    subTotal = subTotal + quantityPrice;
               }
          }
          return (subTotal)
     }, [data])

     function handleSubmit(e) {
          e.preventDefault();

          setPlaced(true)
          clearCart()
     }

     return (
          <>
               <HeroSection />

               <form onSubmit={handleSubmit} className="sl-container flex flex-wrap py-24">
                    <main className="grid w-2/3 grid-cols-2 gap-6 pr-6">
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
                    <aside className="w-1/3 pl-6">
                         <div className="w-full bg-stone-100 py-9 px-10">
                              <h2 className="font-bold uppercase text-2xl border-b border-zinc-400 pb-6 mb-8">Your order</h2>
                              <ul className="space-y-3 mb-8">
                                   <li className="flex w-full items-center mb-4">
                                        <span className="w-[7%]">Sl</span>
                                        <span className="w-[70%]">Product</span>
                                        <span className="w-[7%]">Q</span>
                                        <span className="w-[16%]">Total</span>
                                   </li>
                                   {data && data.map((product, index) => (
                                        <li key={index} className="flex w-full items-center text-left">
                                             <span className="w-[7%]">{index + 1}</span>
                                             <span className="w-[70%] truncate">{product.Name}</span>
                                             <span className="w-[7%]">{product.Quantity}</span>
                                             <span className="w-[16%]">${product.Price * product.Quantity}</span>
                                        </li>
                                   ))}
                              </ul>
                              <ul className="border-y border-zinc-400 py-4 mb-6">
                                   <li className="mb-3">Subtotal <span className="float-right font-bold text-red-500">${subTotal}</span></li>
                                   <li className="mb-3">Delivery Fee <span className="float-right font-bold text-red-500">${deliveryFee}</span></li>
                                   <li>Total <span className="float-right font-bold text-red-500">${subTotal + deliveryFee}</span></li>
                              </ul>
                              <h3 className="font-bold mb-4">Payment Method:</h3>
                              <ul>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="bkash" className="w-auto" /><label htmlFor="bkash">Bkash</label></li>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="nogod" className="w-auto" /><label htmlFor="nogod">Nogod</label></li>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="cod" className="w-auto" /><label htmlFor="cod">Cash on Delivery</label></li>
                              </ul>
                              <Button classes="w-full text-sm mt-6">place order</Button>
                         </div>
                    </aside>
               </form>

               <div className={`fixed inset-0 bg-black/25 backdrop-blur-sm ${placed ? "flex" : "hidden"} items-center justify-center z-50`}>
                    <div className="max-w-xl h-fit bg-white drop-shadow-2xl text-center space-y-6 px-6 py-9">
                         <h3 className="font-bold text-3xl">Our order in placed</h3>
                         <p>Thank you for shopping with iNFINY Clothing</p>
                         <Link to={`/`}><Button variant="white" classes="text-sm">Explore More</Button></Link>
                    </div>
               </div>
          </>
     )
}