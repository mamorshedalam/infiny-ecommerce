import { NavLink, useNavigate } from "react-router-dom";
import CartList from "../../components/Table/cartTable";
import Button from "../../components/Button/button"
import HeroSection from "../../modules/hero";
import Input from "../../components/Input/inputField";
import { useMemo } from "react";
import { useCart } from "../../contexts/CartContext";

export default function ShoppingCart() {
     const navigate = useNavigate();
     const { data, deliveryFee, removeCart } = useCart()

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

     function handleRemove(sku) {
          removeCart(sku)
     }

     return (
          <>
               <HeroSection />
               <div className="sl-container flex flex-wrap py-24">
                    <main className="basis-3/4 px-4">
                         {!data && <p className="text-xl text-center mb-9">Not added anything yet!</p>}
                         {data && <table className="w-full mb-9">
                              <thead>

                                   <tr className="border-b text-left font-bold uppercase">
                                        <th className="pb-6">Product</th>
                                        <th className="pb-6 text-center">Size</th>
                                        <th className="pb-6 text-center">Quantity</th>
                                        <th className="pb-6">Total</th>
                                        <th className="pb-6"></th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {data && data.map((product, index) => (<CartList operation={handleRemove} data={product} key={index} />))}
                              </tbody>
                         </table>}
                         <div className="text-right">
                              <Button operation={() => { navigate(-1) }} variant="white">Continue Shopping</Button>
                         </div>
                    </main>
                    <aside className="basis-1/4 px-4">
                         <h2 className="font-bold uppercase mb-8">Discount codes</h2>
                         <form className="relative mb-16">
                              <Input type="text" name="Coupon code" classes="text-zinc-400 text-sm " />
                              <button className="absolute right-0 top-0 h-full bg-neutral-900 font-bold uppercase tracking-widest text-white text-sm px-6">apply</button>
                         </form>
                         <div className="bg-stone-100 py-9 px-10">
                              <h3 className="uppercase font-bold mb-3">total</h3>
                              <ul className="mb-6">
                                   <li className="text-neutral-700 mb-3">Subtotal <span className="float-right font-bold text-red-500">${subTotal}</span></li>
                                   <li className="text-neutral-700 border-b pb-3 mb-3">Delivery Fee <span className="float-right font-bold text-red-500">${deliveryFee}</span></li>
                                   <li className="text-neutral-700 mb-3">Total <span className="float-right font-bold text-red-500">${subTotal + deliveryFee}</span></li>
                              </ul>
                              {data && <NavLink to={`/checkout`} className="w-full"><Button classes="w-full text-sm">Proceed to checkout</Button></NavLink>}
                         </div>
                    </aside>
               </div>
          </>
     )
}