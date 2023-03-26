import img from '../assets/product-big.png'
export default function DashList() {
     return (
          <table className="w-full">
               <thead>
                    <tr className="text-left font-bold uppercase">
                         <th className="border p-2">sl</th>
                         <th className="border p-2">sku</th>
                         <th className="border p-2">brand</th>
                         <th className="border p-2">name</th>
                         <th className="border p-2">status</th>
                         <th className="border p-2">category</th>
                         <th className="border p-2">reviews</th>
                         <th className="border p-2">rating</th>
                         <th className="border p-2">price</th>
                         <th className="border p-2">image</th>
                         <th className="border p-2">tags</th>
                         <th className="border p-2">description</th>
                         <th className="border p-2">size</th>
                         <th className="border p-2"></th>
                    </tr>
               </thead>
               <tbody>
                    <tr className="odd:bg-white even:bg-slate-50">
                         <td className="border p-1">01</td>
                         <td className="border p-1">3812912</td>
                         <td className="border p-1">infiny</td>
                         <td className="border p-1">Hooded thermal anorak</td>
                         <td className="border p-1">new</td>
                         <td className="border p-1">Clothes</td>
                         <td className="border p-1">5</td>
                         <td className="border p-1">3</td>
                         <td className="border p-1">270</td>
                         <td className="border p-1"><img src={img} alt="img" /></td>
                         <td className="border p-1">Clothes, Skin, Body</td>
<td className="border p-1">Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.</td>
                         <td className="border p-1">XXL, XL, L, M, S</td>
                         <td className="border p-2"><button className="fill-neutral-900"><svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button></td>
                    </tr>
               </tbody>
          </table>
     )
}