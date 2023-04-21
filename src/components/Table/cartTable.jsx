import React from "react"

export default function CartTable({ data, operation }) {
     return (
          <tr className="font-bold odd:bg-white even:bg-slate-50 border-b">
               <td className="py-8">
                    <div className="flex items-center">
                         <div className="mr-6"><img src={data.Image} alt="" className="w-20 h-20 object-contain" /></div>
                         <div className="overflow-hidden">
                              <h3 className="font-semibold mb-2.5">{data.Name}</h3>
                              <h4 className="text-lg">${data.Price}</h4>
                         </div>
                    </div>
               </td>
               <td className="py-8 text-center uppercase">{data.Size}</td>
               <td className="py-8 text-center">{data.Quantity}</td>
               <td className="py-8">${data.Price * data.Quantity}</td>
               <td className="py-8">
                    <button onClick={() => operation(data.SKU)} className="fill-neutral-900"><svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button>
               </td>
          </tr>
     )
}