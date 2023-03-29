import { useState } from "react"
import bigImg1 from '../../assets/product-big-2.png'

export default function CartList() {
     const [count, setCount] = useState(1)
     return (
          <tr className="odd:bg-white even:bg-slate-50 border-b">
               <td className="py-8">
                    <div className="flex items-center">
                         <div className="mr-6"><img src={bigImg1} alt="" className="w-20 h-20 object-contain" /></div>
                         <div className="overflow-hidden">
                              <h3 className="font-semibold mb-2.5">T-shirt Contrast Pocket</h3>
                              <h4 className="font-bold text-lg">$98.49</h4>
                         </div>
                    </div>
               </td>
               <td className="py-8">
                    <div className="flex items-center fill-neutral-900">
                         <button onClick={() => setCount(Math.max(count - 1, 1))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4"><path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg></button>
                         <input id="inputValue" type="text" value={count} onChange={(e) => { setCount(parseInt(e.target.value)) }} className="w-12 text-center px-2 py-1" />
                         <button onClick={() => setCount(Math.max(count + 1, 1))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" /></svg></button>
                    </div>
               </td>
               <td className="py-8"><span className="font-bold text-lg">$ 30.00</span></td>
               <td className="py-8">
                    <button className="fill-neutral-900"><svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button>
               </td>
          </tr>
     )
}